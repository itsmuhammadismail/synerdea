import Drawer from "@mui/material/Drawer";
import Link from "next/link";

export default function TemporaryDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <div className="w-[18rem]">
      <div className="p-[2rem]">
        <img src="/logo.svg" alt="" />
      </div>
      <ul>
        <Link href="#clients">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">Clients</li>
        </Link>
        <Link href="#services">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">Services</li>
        </Link>
        <Link href="#startups">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">Startups</li>
        </Link>
        <Link href="#business">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">Business</li>
        </Link>
        <Link href="#enterprise">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">Enterprise</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
