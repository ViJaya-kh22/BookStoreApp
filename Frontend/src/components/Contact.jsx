import React from "react";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-24 mb-20">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Contact <span className="text-pink-500">Us</span>
        </h1>
        <p className="text-gray-500">
          Have questions or suggestions? We'd love to hear from you.
        </p>
      </div>

      <div className="flex justify-center">

        <form
          onSubmit={handleSubmit}
          className="border rounded-md p-6 w-full md:w-125 flex flex-col gap-4"
        >

          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white py-2 rounded-sm hover:bg-pink-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
    </>
  );
};

export default Contact;