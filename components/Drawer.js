import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function TemporaryDrawer({ state, toggleDrawer }) {
  const list = (anchor) => (
    <div className="w-[18rem]">
      <div className="p-[2rem]">
        <img src="/logo.svg" alt="" />
      </div>
      <ul>
        <a href="#clients">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">Clients</li>
        </a>
        <a href="#services">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">Services</li>
        </a>
        <a href="#startups">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">
            For Startups
          </li>
        </a>
        <a href="#business">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">
            For Business
          </li>
        </a>
        <a href="#enterprise">
          <li className="px-[2rem] py-[1rem] hover:bg-[#e7e7e7]">
            For Enterprise
          </li>
        </a>
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
