import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoClose, IoSearchOutline } from "react-icons/io5";

import Button from "../button/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [closing, setClosing] = useState(false);

  const path = useLocation().pathname;

  function handleSidebar() {
    if (sidebar) {
      setClosing(true);
      setTimeout(() => {
        setSidebar(false); // Hide sidebar after fade-out
        setClosing(false); // Reset closing state
      }, 300); // Match duration of animation
    } else {
      setSidebar(true);
    }
  }

  // Prevent scrolling when the sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebar ? "hidden" : "auto"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is restored when component unmounts
    };
  }, [sidebar]);

  return (
    <div className="relative z-10">
      <div className="px-40 py-5 text-white">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <FaFacebookF size={14} />
            <FaTwitter size={14} />
            <FaInstagram size={14} />
            <FaPinterest size={14} />
            <FaTiktok size={14} />
            <FaYoutube size={14} />
          </div>
          <div className="flex flex-col items-center">
            <RxAvatar size={50} />
            <h1 className="font-bold text-xl">
              Blogger <span className="text-[#fe4f70] text-4xl">.</span>
            </h1>
            <p className="font-medium text-sm">Minimal Blog Website</p>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-full bg-custom-gradient py-1.5 px-1.5">
              <IoSearchOutline style={{ color: "white" }} />
            </Button>
            <div
              className="flex flex-col gap-1 bg-custom-gradient rounded-full py-[10px] px-1.5 cursor-pointer"
              onClick={handleSidebar}
              aria-label="Toggle Sidebar"
              aria-expanded={sidebar}
            >
              <span className="w-4 border-white border" />
              <span className="w-4 border-white border" />
            </div>
          </div>
        </div>
        <div className="border-b pt-5 border-gray-500" />
      </div>

      {/* Sidebar */}
      {sidebar && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-white opacity-25 z-40"
            onClick={handleSidebar}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 bg-white p-5 w-64 h-full shadow-lg z-50 ${
              closing ? "animate-fadeOutRight" : "animate-fadeInLeft"
            }`}
          >
            <IoClose
              style={{ color: "gray" }}
              size={24}
              className="mx-[12rem]"
              onClick={handleSidebar}
            />
            <RxAvatar size={60} style={{ color: "black" }} className="mt-10" />

            <ul className="text-black text-sm mt-20 flex flex-col gap-6 mx-3">
              <Link
                to="/"
                onClick={handleSidebar}
                className={`${
                  path === "/"
                    ? "text-red-500 border py-2  rounded-sm px-2"
                    : "border py-2 rounded-sm px-2"
                }`}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/about"
                onClick={handleSidebar}
                className={`${
                  path === "/about"
                    ? "text-red-500 border py-2  rounded-sm px-2"
                    : "border py-2  rounded-sm px-2"
                }`}
              >
                <li>About</li>
              </Link>
              <Link
                to="/books"
                onClick={handleSidebar}
                className={`${
                  path === "/books"
                    ? "text-red-500 border py-2  rounded-sm px-2"
                    : "border py-2  rounded-sm px-2"
                }`}
              >
                <li>Books</li>
              </Link>
              <Link
                to="/contact"
                onClick={handleSidebar}
                className={`${
                  path === "/contact"
                    ? "text-red-500 border py-2  rounded-sm px-2"
                    : "border py-2  rounded-sm px-2"
                }`}
              >
                <li>Contact</li>
              </Link>
            </ul>

            <div className="flex gap-2 text-black bottom-10 absolute mx-3">
              <FaFacebookF size={14} />
              <FaTwitter size={14} />
              <FaInstagram size={14} />
              <FaPinterest size={14} />
              <FaTiktok size={14} />
              <FaYoutube size={14} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
