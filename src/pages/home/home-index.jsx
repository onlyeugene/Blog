import { useEffect, useState } from "react";
import Hero from "../../components/hero/hero"
import BooksPreview from "../books-preview/books-preview"
// import { useLocation } from "react-router-dom";



const HomeIndex = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create a style object for background positioning
  const backgroundStyle = {
    backgroundPositionY: `${scrollPosition /32}px`,
    backgroundSize: 'cover',  // Prevent rescaling
    backgroundAttachment: 'fixed',  // Optional: for a parallax effect
  };

  return (
    <div className={`w-full ${backgroundStyle}`}>
    <Hero />
    <BooksPreview />
    </div>
  )
}

export default HomeIndex
