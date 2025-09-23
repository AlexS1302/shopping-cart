import styles from "./Footer.module.css";
import footerLinks from "../../data/footerLinks";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerContent}>
        {footerLinks.map((section) => (
          <section key={section.id} className={styles.footerSection}>
            <h4 className={styles.footerHeading}>{section.heading}</h4>
            {section.heading === "Plentiful" && (
              <p className={styles.infoNote}>Follow us on social media</p>
            )}
            <ul>
              {section.links.map((link) => (
                <li key={link.id}>
                  {link.src ? (
                    <a
                      href={link.href}
                      onClick={(e) => e.preventDefault()}
                      className={styles.socialLink}
                    >
                      <img src={link.src} alt={link.alt} />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => e.preventDefault()}
                      className={styles.infoLink}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Footer;
