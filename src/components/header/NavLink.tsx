import Link from "next/link";

export default function NavLink({
  label,
  link,
}: Readonly<{
  label: string;
  link: string;
}>) {
  return (
    <li>
      <Link href={link}>
        <span className="hover:text-gray-400 transition-colors duration-300">
          {label}
        </span>
      </Link>
    </li>
  );
}
NavLink.displayName = "NavLink";
