import Button from "../../components/button/button";

const Contact = () => {
  return (
    <div className=" text-white">
      <div className="about text-center">
        <div className="py-10 hero-content">
          <h1 className="text-2xl font-semibold">Contact</h1>
          <p className="text-xs pt-5 text-gray-300">
            Blog site / Blog / Contact
          </p>
        </div>
      </div>

      <div className="text-black sm:px-40 px-5 py-2">
        <h1 className="text-3xl font-semibold">
          Blog <span className="text-3xl text-[#fe4f70]">.</span>
        </h1>
        <div className="w-full border rounded-full py-1 px-1 mt-5">
          <Button className="border bg-gray-200 px-2 rounded-full text-sm py-1 w-[10.65rem] font-semibold">
            Talk To Me Anytime :)
          </Button>
        </div>
        <img src="" alt="" />
        <p className="font-normal text-sm mt-5">
          {" "}
          <span className="font-semibold">It&apos;s no secret</span> that the
          digital industry is booming......
        </p>
        <form action="" className="text-sm pt-10 flex flex-col gap-10">
          <div className="flex flex-col w-full">
            <label htmlFor="name">Your Name (required)</label>
            <input type="text" className="border w-60 py-1 rounded-md mt-2" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email">Your Email (required)</label>
            <input type="text" className="border w-60 py-1 rounded-md mt-2" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="border w-60 py-1 rounded-md mt-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Your Message</label>
            <textarea
              rows={10}
              name="message"
              id="message"
              className="border w-full mt-5"
            />
          </div>

          <div>
            <Button type='submit'
              className={`border w-20 text-center rounded-full py-2 text-sm`}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
