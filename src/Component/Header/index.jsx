import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex space-x-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/about_us"}>About Us</Link>
      <Link href={"/contact_us"}>Contact Us</Link>
    </div>
  );
};

export default Header;
