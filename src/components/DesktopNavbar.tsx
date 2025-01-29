import { ModeToggle } from "./ModeToggle";

const DesktopNavbar = () => {
  return (
    <div className=" hidden md:flex relative  gap-10">
      <div className="">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default DesktopNavbar;
