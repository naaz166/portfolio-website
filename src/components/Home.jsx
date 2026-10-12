import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-3xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Naaz</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a Full-Stack Software Developer passionate about building
          responsive, user-friendly web applications. With experience in
          React.js, Next.js, Node.js, Express.js and MongoDB, I enjoy turning
          ideas into practical digital solutions. I’m committed to continuously
          improving my skills, exploring modern development tools and
          technologies, and writing clean, maintainable code.
        </p>
        <div>
          <Link
            to="work"
            smooth
            duration={500}
            className="text-white w-fit group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
