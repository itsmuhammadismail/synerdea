const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="max-w-[80rem] mx-auto px-8 py-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex items-center gap-12">
            <a href="">
              <img src="/logo_white.svg" alt="" className="h-[3rem]" />
            </a>
            <ul className="hidden lg:flex gap-8 text-white">
              <a href="">
                <li className="text-white">Clients</li>
              </a>
              <a href="">
                <li className="text-white">Services</li>
              </a>
              <a href="">
                <li className="text-white">Startups</li>
              </a>
              <a href="">
                <li className="text-white">Business</li>
              </a>
              <a href="">
                <li className="text-white">Enterprise</li>
              </a>
            </ul>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Synerdea"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/social/facebook.svg"
                alt=""
                className="h-6 grayscale hover:grayscale-0"
              />
            </a>
            <a
              href="https://twitter.com/Synerdea"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/social/twitter.svg"
                alt=""
                className="h-6 grayscale hover:grayscale-0"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/synerdea"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/social/linkedin.svg"
                alt=""
                className="h-6 grayscale hover:grayscale-0"
              />
            </a>
          </div>
        </div>
      </footer>

      <div className="p-4 flex justify-center items-center bg-[#217BF4]">
        <p className="text-sm text-white text-center">
          &copy; 2021 - {new Date().getFullYear()} | All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
