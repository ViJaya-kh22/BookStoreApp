import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
   
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-24 ">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-pink-500">BookStore</span>
        </h1>
        <p className="text-base-content">
          Learn, explore and grow with our curated collection of books and courses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Our Mission
          </h2>

          <p className="text-base-content mb-4">
            BookStore is designed to help learners discover valuable books
            and educational content easily. Our platform brings together
            curated resources for developers, students, and lifelong learners.
          </p>

          <p className="text-base-content">
            Whether you want to learn programming, design, or personal
            development, our goal is to make high-quality learning
            accessible to everyone.
          </p>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="about"
            className="w-64"
          />
        </div>

      </div>

      {/* Features */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 pb-20 text-center">

        <div className="border p-6 rounded-md shadow-sm">
          <h3 className="font-semibold text-lg mb-2">
            Curated Books
          </h3>
          <p className="text-base-content">
            Handpicked books to improve your knowledge and skills.
          </p>
        </div>

        <div className="border p-6 rounded-md shadow-sm">
          <h3 className="font-semibold text-lg mb-2">
            Developer Friendly
          </h3>
          <p className="text-base-content">
            Content focused on developers and modern technologies.
          </p>
        </div>

        <div className="border p-6 rounded-md shadow-sm">
          <h3 className="font-semibold text-lg mb-2">
            Always Growing
          </h3>
          <p className="text-base-content ">
            Our library keeps expanding with new learning resources.
          </p>
        </div>

      </div>

    </div>
  );

};

export default About;