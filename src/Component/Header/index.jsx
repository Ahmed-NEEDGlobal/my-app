import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="text-red-900">
        {/* <Link className="bg-gray-600 text text-yellow-500" href={"/"}>
          Home
        </Link> */}
        home xda
      </div>
      <div className="bg-yellow-400">
        <Link href={"/about_us"}>About Us</Link>
      </div>
      <div className="bg-cyan-700">
        <Link href={"/contact_us"}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
