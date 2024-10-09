import { Link } from "react-router-dom";
import Button from "../button/button";

const Hero = () => {
  return (
    <div className=" text-white hero">
     <div className="flex flex-col gap-7 sm:px-40 px-5 text-center w-full py-20 hero-content">
     <h1 className="text-4xl font-semibold">I&apos;m Blogger .........</h1>
      <p className="text-sm font-light text-gray-300">
        Hello, I&apos;m a content writer who is fascinated by writing about life
        events and contents. <br className="sm:block hidden"/>I help bring the right content to the right
        people.
      </p>

      <Button>
        <Link
          to="/about"
          className="border px-4 text-sm py-2 rounded-full border-white hover:bg-white hover:text-red-500"
        >
          About Me
        </Link>
      </Button>
     </div>
    </div>
  );
};

export default Hero;

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1000 100"
  preserveAspectRatio="none"
  className="absolute bottom-0 left-0 w-full"
>
  <path
    className="elementor-shape-fil"
    d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
    fill="#000000" 
  ></path>
</svg> */
}
