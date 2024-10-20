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
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import useDisableScrollOnSidebar from "../../hooks/useDisableScrollOnSidebar";
import useDisableScrollOnSearch from "../../hooks/useDisableScrollOnSearch";
import useCloseSearchOnEsc from "../../hooks/useCloseSearchOnEsc";
import {
  handleSearchToggle,
  handleSidebarToggle,
  handleWaveAnimation,
} from "../../utils/utils";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [closing, setClosing] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchClosing, setSearchClosing] = useState(false);

  const path = useLocation().pathname;

  // Use custom hooks
  useDisableScrollOnSidebar(sidebar);
  useDisableScrollOnSearch(search);
  useCloseSearchOnEsc(setSearch);

  return (
    <div className="relative z-10">
      <div className="sm:px-40 px-5 py-5 text-white">
        <div className="flex sm:justify-between justify-center sm:flex-row flex-col sm:gap-0 gap-5 items-center ">
          <div className="sm:flex gap-2 hidden">
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
          <div className="flex items-center gap-2 sm:justify-normal justify-between sm:w-fit w-full">
            <Button
              className="rounded-full bg-custom-gradient py-1.5 px-1.5"
              onClick={() =>
                handleSearchToggle(search, setSearch, setSearchClosing)
              }
            >
              <IoSearchOutline style={{ color: "white" }} />
            </Button>
            <div
              className="flex flex-col gap-1 bg-custom-gradient rounded-full py-[10px] px-1.5 cursor-pointer"
              onClick={() =>
                handleSidebarToggle(sidebar, setSidebar, setClosing)
              }
              aria-label="Toggle Sidebar"
              aria-expanded={sidebar}
            >
              <span className="w-4 border-white border" />
              <span className="w-4 border-white border" />
            </div>
          </div>
        </div>
        <div className="border-b pt-5 sm:block hidden border-gray-500" />
      </div>

      {/* Sidebar */}
      {sidebar && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-white opacity-25 z-40"
            onClick={() => handleSidebarToggle(sidebar, setSidebar, setClosing)}
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
              onClick={() =>
                handleSidebarToggle(sidebar, setSidebar, setClosing)
              }
            />
            <RxAvatar size={60} style={{ color: "black" }} className="mt-10" />

            <ul className="text-black text-sm mt-20 flex flex-col gap-6 mx-3">
              <Link
                to="/"
                onClick={() =>
                  handleSidebarToggle(sidebar, setSidebar, setClosing)
                }
                className={`${
                  path === "/"
                    ? "text-red-500 border py-2 rounded-sm px-2"
                    : "border py-2 rounded-sm px-2"
                }`}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/about"
                onClick={() =>
                  handleSidebarToggle(sidebar, setSidebar, setClosing)
                }
                className={`${
                  path === "/about"
                    ? "text-red-500 border py-2 rounded-sm px-2"
                    : "border py-2 rounded-sm px-2"
                }`}
              >
                <li>About</li>
              </Link>
              <Link
                to="/books"
                onClick={() =>
                  handleSidebarToggle(sidebar, setSidebar, setClosing)
                }
                className={`${
                  path === "/books"
                    ? "text-red-500 border py-2 rounded-sm px-2"
                    : "border py-2 rounded-sm px-2"
                }`}
              >
                <li>Books</li>
              </Link>
              <Link
                to="/contact"
                onClick={() =>
                  handleSidebarToggle(sidebar, setSidebar, setClosing)
                }
                className={`${
                  path === "/contact"
                    ? "text-red-500 border py-2 rounded-sm px-2"
                    : "border py-2 rounded-sm px-2"
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

      {/* Search Modal */}
      {search && (
        <div
          className={`bg-white absolute top-[0%] w-full sm:h-screen h-screen flex flex-col items-center ${
            searchClosing ? "animate-genieFadeOut" : "animate-genieFadeIn"
          }`}
        >
          <div className="w-full items-center flex flex-col mt-[50%]">
            <IoClose
              style={{ color: "gray" }}
              size={30}
              className="absolute top-5 right-4"
              onClick={() =>
                handleSearchToggle(search, setSearch, setSearchClosing)
              }
            />
            <h1 className="text-2xl font-semibold">Press ESC to close</h1>
            <div className="w-full flex justify-center items-center sm:gap-5 gap-3">
              <input
                type="text"
                placeholder="Search and press enter..."
                className="border py-3 px-2 rounded-full sm:w-[50%] w-[60%] text-sm mt-5 outline-[#fe4f70]"
              />
              <Button
                className="relative border rounded-full px-7 bg-[#fe4f70] border-[#fe4f70] py-3 flex items-center justify-center sm:mt-4 mt-6 overflow-hidden wave-button"
                onClick={(e) => handleWaveAnimation(e)}
              >
                <IoSearchOutline style={{ color: "white" }} size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
