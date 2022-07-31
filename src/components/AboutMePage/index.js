import React from 'react';
import aboutMeImage from "./about.jpg";
import resume from "./Jennya Alexeyeva Resume.pdf";

const AboutMePage = () => {
  return (
      <div>
        <h1>About Me</h1>
        <div className="flex justify-content-center w-100 row">
          <div className="flex justify-content-start flex-column pt-3 col-5">
            <a className="flex" href="https://github.com/jennya-alexeyeva">
              <i className="fa-brands fa-github" />
              <p>https://github.com/jennya-alexeyeva</p>
            </a>
            <a className="flex" href="https://linkedin.com/in/jennya-alexeyeva/">
              <i className="fa-brands fa-linkedin" />
              <p>https://linkedin.com/in/jennya-alexeyeva/</p>
            </a>
            <a className="flex" href="mailto:alexeyeva.e@northeastern.edu">
              <i className="fa-solid fa-envelope" />
              <p>alexeyeva.e@northeastern.edu</p>
            </a>
            <a className="flex" href={resume} download>
              <i className="fa-solid fa-file" />
              <p>PDF Resume</p>
            </a>
          </div>
          <img className="float-start align-self-center p-3 col-2" src={aboutMeImage} alt="Me in front of a butterfly mural"/>
          <p className="col-5">"Men that are trapped by the chains of 'maybe' can never reach their dreams."<br />
              <em>- Phoenix Wright: Ace Attorney - Trials and Tribulations</em>
          </p>
        </div>
        <div className="w-75 pt-2">
          <p>I am an honors fourth-year computer science major
            with a concentration in human-centered computing (HCC) and a minor in
            game design. I have experience with various full-stack technologies,
            but I am interested in front-end and web development positions.</p>
          <p>Ever since I was a child, obsessively playing the
            Professor Layton games on my DSi, I've been interested in solving
            puzzles. From math problems that wouldn't quite work unless I looked
            at them from another angle, to Odyssey of the Mind competitions with
            my friends, to figuring out how best to scale the wall as a rock
            climber, I've known I wanted a career where I could use my creativity
            even before I figured out what that career was. As a college student,
            I've gained experience with various technologies, including AWS and
            Node.js, but I'm always eager to expand my knowledge.</p>
        </div>
      </div>
  );
}

export default AboutMePage