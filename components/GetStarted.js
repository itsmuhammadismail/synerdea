import { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const GetStarted = () => {
  const name = useRef();
  const email = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire("Thank You!", "Your request has been send", "success");

    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name.current.value);
    urlencoded.append("email", email.current.value);

    console.log(urlencoded);

    var requestOptions = {
      method: "POST",
      headers: header,
      body: urlencoded,
      redirect: "follow",
    };

    const res = await fetch(
      "https://synerdea.neuronious.com/contact",
      // "http://localhost:5000/contact",
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));

    console.log(res);
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
