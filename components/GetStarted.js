import { useRef } from "react";

const GetStarted = () => {
  const name = useRef();
  const email = useRef();

  const handleSubmit = (e) => {
    console.log("Hello world ");
    e.preventDefault();
    let data = {
      name: name.current.value,
      email: email.current.value,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });
  };

  return (
    <div className="bg-black min-h-screen" id="get-started">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-4 flex flex-col  justify-center items-center">
        <h1 className="h1 text-white text-center">Get Started</h1>
        <p className="text-[1.125rem] my-8 max-w-[31rem] text-white text-center">
          Our expert team has decades of shared experience and it&apos;s all
          available at your request.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-[31rem]">
          <input
            type="text"
            ref={name}
            placeholder="Your name"
            className="bg-white p-4 rounded-md w-full md:w-[31rem] focus:outline-none"
          />
          <input
            type="text"
            ref={email}
            required
            placeholder="Email address"
            className="bg-white p-4 rounded-md w-full md:w-[31rem] focus:outline-none"
          />
          <button
            className="bg-[#217BF4] text-white p-4 rounded-md w-full md:w-[31rem]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
