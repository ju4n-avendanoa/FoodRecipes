import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button";

function Footer() {
  return (
    <footer className="text-white py-20 bg_gradient ">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-around border-slate-800">
        <div className="flex">
          <p className="font-bold text-center ">
            Flavor<span className="text-green-500 text-lg">Verse</span>
          </p>
        </div>
        <div className="">
          <p>QUICK LINKS</p>
          <div className="flex flex-col text-start mb-4 md:mb-0">
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              About
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Services
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col text-start mb-4 md:mb-0">
          <p>LEGAL</p>
          <a
            href="#"
            className="block md:inline-block py-2 hover:text-gray-500"
          >
            Terms and Conditions
          </a>
          <a
            href="#"
            className="block md:inline-block py-2 hover:text-gray-500"
          >
            License Agreement
          </a>
          <a
            href="#"
            className="block md:inline-block py-2 hover:text-gray-500"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="block md:inline-block py-2 hover:text-gray-500"
          >
            Cookies Policy
          </a>
        </div>
        <div>
          <p>SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>
          <Button
            title="Sign up"
            btnType="button"
            containerStyle="mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
