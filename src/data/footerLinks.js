import xIcon from "../assets/icons/x.svg?react";
import instagramIcon from "../assets/icons/instagram.svg?react";
import facebookIcon from "../assets/icons/facebook.svg?react";

const footerLinks = [
  {
    id: "socialMedia",
    heading: "Plentiful",
    links: [
      {
        id: "x",
        href: "#",
        src: xIcon,
        alt: "Link to X (formerly Twitter)",
      },
      {
        id: "instagram",
        href: "#",
        src: instagramIcon,
        alt: "Link to Instagram",
      },
      {
        id: "facebook",
        href: "#",
        src: facebookIcon,
        alt: "Link to Facebook",
      },
    ],
  },
  {
    id: "customerService",
    heading: "Customer Service",
    links: [
      { id: "helpContact", label: "Help & Contact us", href: "#" },
      { id: "ordersShipping", label: "Orders & Shipping", href: "#" },
      { id: "returnsRefunds", label: "Returns & Refunds", href: "#" },
      { id: "faqs", label: "FAQs", href: "#" },
    ],
  },
  {
    id: "aboutUs",
    heading: "About Us",
    links: [
      { id: "about", label: "About Us", href: "#" },
      { id: "shops", label: "Shops", href: "#" },
    ],
  },
  {
    id: "legalInformation",
    heading: "Legal Information",
    links: [
      { id: "termsConditions", label: "Terms & Conditions", href: "#" },
      { id: "privacyPolicy", label: "Privacy Policy", href: "#" },
      { id: "cookiePolicy", label: "Cookie Policy", href: "#" },
    ],
  },
];

export default footerLinks;
