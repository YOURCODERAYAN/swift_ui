import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/YOURCODERAYAN", label: "GitHub" },
  { icon: FaSquareXTwitter, href: "https://x.com/Ayansah82296751", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/ayan.saha_23", label: "Instagram" },
];

export default function Footer() {
  return (
    <div className="flex items-center justify-between w-full py-6 bg-zinc-950 text-white/30">
      {/* left section of footer */}
      <div className="ml-4 flex items-center gap-5">
        © 2026 Craft UI — Built By Ayan

        <div className="border-l border-zinc-300  px-4"> Best Viewed in Desktop</div>
      </div>

      {/* right section of footer */}
      <div className="flex items-center gap-4 mr-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon
              size={20}
              className="text-white/30 hover:text-white transition-colors duration-200"
            />
          </a>
        ))}
      </div>
    </div>
  );
}