import { A } from "@solidjs/router";

export const Navbar = () => {
  return (
    <nav>
      {" "}
      <A href="/"> Home </A>{" "}
      <A href="/mail">Mail Management</A>{" "}
      <A href="/template">Template Management</A>{" "}
    </nav>
  );
};
