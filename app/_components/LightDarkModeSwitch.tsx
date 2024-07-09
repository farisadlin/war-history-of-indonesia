import * as Icons from "@radix-ui/react-icons";

interface LightDarkModeSwitchType {
  title: string;
  handleSwitch: () => void;
}

const LightDarkModeSwitch: React.FC<LightDarkModeSwitchType> = ({
  title,
  handleSwitch,
}) => {
  return (
    <div className="mr-2" onClick={handleSwitch}>
      {title === "dark" ? <Icons.MoonIcon /> : <Icons.SunIcon />}
    </div>
  );
};

export default LightDarkModeSwitch;
