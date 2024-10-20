import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollLineWidth, setScrollLineWidth] = useState(0);

  const path = useLocation().pathname

  useEffect(() => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    const handleScroll = () => {
      const offset = window.scrollY;

      // Scroll effect only when offset is greater than the header and navbar height combined
      if (offset > headerHeight + navbarHeight) {
        setScrolled(true);
        // Calculate the scroll line width (relative to the document width)
        const scrollPercent =
          (offset / (document.body.scrollHeight - window.innerHeight)) * 100;
        setScrollLineWidth(scrollPercent);
      } else {
        setScrolled(false);
        setScrollLineWidth(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar w-full z-20  text-sm sm:block hidden ${
        scrolled
          ? "bg-white py-2 fixed top-0 text-black fade-in shadow-lg"
          : "bg-transparent sm:py-4 py-1 text-white hero-content"
      }`}
    >
      <div
        className="scroll-line"
        style={{ width: `${scrollLineWidth}%` }}
      ></div>
      <ul className="flex gap-10 justify-center items-center">
        <Link to="/" className={`rounded-full px-3 py-1 ${path === '/' ? 'border text-white border-[#fe4f70] bg-[#fe4f70]':'' }`}>
          <li>Home</li>
        </Link>
        <Link to="/about" className={`rounded-full px-3 py-1 ${path === '/about' ? 'border text-white border-[#fe4f70] bg-[#fe4f70]':'' }`}>
          <li>About</li>
        </Link>
        <Link to="/books" className={`rounded-full flex items-center px-3 py-1 ${path === '/books' ? 'border text-white border-[#fe4f70] bg-[#fe4f70]':'' }`}>
          <li>Books</li>
          <IoIosArrowDown />
        </Link>
        <Link to="/contact" className={`rounded-full px-3 py-1 ${path === '/contact' ? 'border text-white border-[#fe4f70] bg-[#fe4f70]':'' }`}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
