import { PropsWithChildren } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import SideBar from "./ui/Sidebar";

type Props = PropsWithChildren;
const MobileNavbar = (props: Props) => {
  return (
    <div className="md:hidden">
      <SideBar
        triggerIcon={<Bars3Icon className="w-4" />}
        triggerClassName="absolute top-2 left-2"
      >
        {props.children}
      </SideBar>
    </div>
  );
};

export default MobileNavbar;