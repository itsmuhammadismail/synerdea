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
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="" />
            </a>
          </Link>
          <ul className="hidden xl:flex gap-8">
            <Link href="#clients">
              <a>
                <li>Clients</li>
              </a>
            </Link>
            <Link href="#services">
              <a>
                <li>Services</li>
              </a>
            </Link>
            <Link href="#startups">
              <a>
                <li>Startups</li>
              </a>
            </Link>
            <Link href="#business">
              <a>
                <li>Business</li>
              </a>
            </Link>
            <Link href="#enterprise">
              <a>
                <li>Enterprise</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="hidden xl:flex gap-4">
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
