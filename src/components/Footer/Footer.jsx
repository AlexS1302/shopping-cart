import styles from "./Footer.module.css";
import footerLinks from "../../data/footerLinks";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerContent}>
        {footerLinks.map((section) => (
          <section key={section.id} className={styles.footerSection}>
            <h4 className={styles.footerHeading}>{section.heading}</h4>
            {section.heading === "Plentiful" ? (
              <div>
                <p>Follow us on</p>
                <ul>{generateLinks(section)}</ul>
              </div>
            ) : (
              <ul>{generateLinks(section)}</ul>
            )}
          </section>
        ))}
      </div>
      <p className={styles.copyright}>
        ©Copyright 2025 Plentiful. All rights reserved.
      </p>
    </div>
  );
}

const generateLinks = (section) => {
  return section.links.map((link) => (
    <li key={link.id}>
      <a
        href={link.href}
        onClick={(e) => e.preventDefault()}
        className={link.src ? styles.socialLink : styles.infoLink}
      >
        {link.src ? <img src={link.src} alt={link.alt} /> : link.label}
      </a>
    </li>
  ));
};

export default Footer;
