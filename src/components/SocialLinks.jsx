import { CONTACT } from "../data/profile";
import { IconBlog, IconFacebook, IconGithub, IconLinkedIn, IconX } from "./Icons";

const ITEMS = [
  { href: CONTACT.github, label: "GitHub", Icon: IconGithub },
  { href: CONTACT.linkedin, label: "LinkedIn", Icon: IconLinkedIn },
  { href: CONTACT.twitter, label: "X / Twitter", Icon: IconX },
  { href: CONTACT.facebook, label: "Facebook", Icon: IconFacebook },
  { href: CONTACT.blog, label: "Blog wab-infos.com", Icon: IconBlog },
];

export default function SocialLinks({ className = "hero__socials", btnClass = "social-btn" }) {
  return (
    <div className={className}>
      {ITEMS.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
