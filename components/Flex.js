const Flex = ({ left, right }) => {
  return (
    <div className="max-w-[80rem] mx-auto h-full px-8 py-4 flex flex-wrap justify-between items-center">
      <div className="">{left}</div>
      <div className="">{right}</div>
    </div>
  );
};

export default Flex;
