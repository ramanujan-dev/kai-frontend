import Link from "next/link";
import Header from "./Header";
import NavLink from "./NavLink";

export default function PublicHeader() {
  return (
    <Header>
      <NavLink label="Login" link="login"></NavLink>
      <NavLink label="Register" link="register"></NavLink>
    </Header>
  );
}
