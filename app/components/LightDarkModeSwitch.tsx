"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

interface LightDarkModeSwitchType {
  title: string | undefined;
  handleSwitch: () => void;
}

const LightDarkModeSwitch: React.FC<LightDarkModeSwitchType> = ({
  title,
  handleSwitch,
}) => {
  return (
    <div className="mr-2 cursor-pointer" onClick={handleSwitch}>
      {title === "dark" ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};

export default LightDarkModeSwitch;
