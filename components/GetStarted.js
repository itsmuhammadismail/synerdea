const GetStarted = () => {
  return (
    <div className="bg-black min-h-screen" id="get-started">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-4 flex flex-col  justify-center items-center">
        <h1 className="h1 text-white text-center">Get Started</h1>
        <p className="text-[1.125rem] my-8 max-w-[31rem] text-white text-center">
          Create a great Online Business with E-Commerce Services from Synerdea.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-[31rem]">
          <input
            type="text"
            placeholder="Your name"
            className="bg-white p-4 rounded-md w-full md:w-[31rem] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email address"
            className="bg-white p-4 rounded-md w-full md:w-[31rem] focus:outline-none"
          />
          <button className="bg-[#217BF4] text-white p-4 rounded-md w-full md:w-[31rem]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
