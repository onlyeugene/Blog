import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import { IoBookmarkOutline } from "react-icons/io5";
import { BarLoader } from "react-spinners";

const BooksPreview = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const url = "http://localhost:3002/api/book";

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setBooks(response.data.books); // Ensure you're accessing the correct field
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  // Filter out unpublished books
  const publishedBooks = books.filter(book => book.published);

  return (
    <div className="md:px-40 px-10 py-5">
      <h1 className="text-2xl font-semibold">
        Writing <span className="text-red-500 text-4xl">.</span>
      </h1>

      {loading && (
        <div className="flex flex-col justify-center items-center">
          <BarLoader />
        </div>
      )}
      {error && (
        <p className="text-red-500">Having trouble fetching books right now, check back later.</p>
      )}

      {publishedBooks.length === 0 ? (
        <p>No books available now.</p>
      ) : (
        publishedBooks.map((book) => (
          <div key={book._id} className="py-5 flex flex-col gap-3">
            <img src={book.image} alt={book.title} className="rounded-md" />
            <h1 className="text-xl font-medium sm:px-20 px-5">{book.title}</h1>
            <div className="sm:px-20 px-5">
              <p className="text-gray-700">{truncateText(book.category, 20)}</p>
              <p className="text-gray-500">{truncateText(book.description, 30)}</p>
              <p className="text-gray-500">Published Year: {book.publishedYear}</p>
              <p className="text-gray-500">Author: {book.author.name}</p> {/* Assuming author has a name field */}
            </div>
            <div className="items-start justify-start flex sm:mx-20 mx-2 gap-3">
              <Button className="border px-5 rounded-full py-2 text-sm border-red-500">
                Continue Reading
              </Button>
              <Button className="border px-5 rounded-full py-2 text-sm border-red-400 hover:bg-red-500 hover:border-red-500 bg-red-400 text-white flex items-center gap-2">
                <IoBookmarkOutline size={17} />
                Save for later
              </Button>
            </div>
            <hr className="mt-10" />
          </div>
        ))
      )}
    </div>
  );
};

export default BooksPreview;
