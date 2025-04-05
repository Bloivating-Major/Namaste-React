const Contact = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-md"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-md"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 rounded-md hover:bg-black hover:text-white duration-[.3s] transition-all">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
