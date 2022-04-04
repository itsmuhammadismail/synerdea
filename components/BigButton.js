import { ArrowRightIcon } from "@heroicons/react/solid";

const BigButton = () => {
  return (
    <button className="bg-[#217BF4] text-white h-[3rem] w-[10.7rem] rounded-xl button-shadow flex justify-center items-center gap-4">
      Get Started
      <ArrowRightIcon className="fill-white w-4" />
    </button>
  );
};

export default BigButton;
