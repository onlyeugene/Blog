import Navbar from "./navbar";
import Header from "./header";
// import Hero from "./Hero";

const NavbarIndex = () => {
  return (
    <>
      <div className="navbar-hero border-b border-gray-500 bg-center">
        <header>
          <Header />
        </header>
        <Navbar />
      </div>
    </>
  );
};

export default NavbarIndex;


{/* Conditionally render Hero or About section based on the current path */}
{/* {location.pathname === '/' ? <Hero /> : location.pathname === '/about' ? <p>About section</p> : null} */}