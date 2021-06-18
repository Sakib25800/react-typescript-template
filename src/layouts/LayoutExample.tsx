import * as React from "react";
import { Logo, UserCard } from "../components";
import { register } from "../lib";

interface Props {
  children: React.ReactNode;
}

export default function LayoutExample({ children }: Props) {
  return (
    <div>
      <div>Navbar</div>
      <UserCard firstName={"testing"} lastName={"tsting"} />
      {children}
      <div>Sidebar</div>
      <Logo />
    </div>
  );
}
