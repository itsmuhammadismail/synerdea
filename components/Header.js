import Link from "next/link";
import Button from "./Button";
import { SearchIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import TemporaryDrawer from "./Drawer";
import { useState } from "react";

const Header = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  return (
    <header className="border-b border-[rgba(33, 123, 244, 0.1)] absolute w-full">
      <div className="max-w-[80rem] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="#hero">
            <img src="/logo.svg" alt="" />
          </a>
          <ul className="hidden xl:flex gap-8">
            <a href="#clients">
              <li>Clients</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#startups">
              <li>For Startups</li>
            </a>
            <a href="#business">
              <li>For Business</li>
            </a>
            <a href="#enterprise">
              <li>For Enterprise</li>
            </a>
          </ul>
        </div>
        <div className="hidden xl:flex gap-4">
          <div className="flex gap-2 border-b pb-2">
            <SearchIcon className="w-4" />
            <input
              type="text"
              placeholder="Search Here..."
              className="bg-transparent w-[8rem] focus:outline-none"
            />
          </div>
          <a href="#get-started">
            <Button />
          </a>
        </div>
        <div className="bloack xl:hidden">
          <MenuAlt3Icon className="w-8" onClick={toggleDrawer("left", true)} />
        </div>
      </div>
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
