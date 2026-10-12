import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-5xl font-bold">
            <p>Hi I'm Naaz.</p>
          </div>
          <div>
            <p>
              About Me I'm a Full-Stack Software Developer with nearly two
              years of commercial experience building web applications using the
              MERN stack. I have a strong interest in front-end development with
              React.js and Next.js, alongside experience developing RESTful
              APIs, integrating databases, and implementing authentication. I
              enjoy working across the full development lifecycle, from creating
              responsive user interfaces to developing backend functionality,
              troubleshooting issues, and deploying applications. I'm familiar
              with Git, Agile development practices and CI/CD workflows. I'm
              committed to continuous learning, improving my problem-solving
              skills, and exploring new technologies. My goal is to build
              reliable, maintainable applications that deliver a positive user
              experience while continuing to grow as a software developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
