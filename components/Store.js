const Store = ({ heading, para, img }) => {
  return (
    <div className="bg-white flex flex-1 gap-8 py-[2.5rem] px-[2.5rem] rounded-lg items-start h-full">
      <img src={img} alt="" className="w-[4rem]" />
      <div className="flex flex-col gap-3">
        <h3 className="h3">{heading}</h3>
        <p className="max-w-[20rem]">{para}</p>
      </div>
    </div>
  );
};

export default Store;
