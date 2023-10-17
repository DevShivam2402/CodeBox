import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function About() {
  return (
    <div>
      <Header/>
      <div className="about-container">
        <div className="about">
          <div className="about-left about-info">
            <div className="about-center">
              <h1>
                About <br /> CodeBox
              </h1>
              <br />
              <p>
                Email us anytime at <br />
                <strong>codeboxbmail@gmail.com</strong>.
              </p>
            </div>
          </div>

          <div className="about-right">
            <p>
              <strong>👋 CodeBox is a social development environment</strong>.
              At its heart, it allows you to write code in the browser, and see
              the results of it as you build. A useful and liberating online
              code editor for developers of any skill, and particularly
              empowering for people learning to code. We focus primarily on
              front-end languages like HTML, CSS, JavaScript, and preprocessing
              syntaxes that turn into those things.
            </p>
          </div>
        </div>
        <div className="about">
          <div className="about-left left">
            <p>
              <strong>We say social</strong>, because CodeBox is a community.
              Most creations on CodePen are public and open source. They are
              living things that other people and the community can interact
              with, from a simple hearting, to leaving a comment, to forking and
              changing for their own needs.
            </p>
          </div>

          {/* <div className="about-right about-devinfo">
            <div className="devinfo">
              <h1>
                Shivam <br />
                Sharma
              </h1>
              <br />
              <p>
                Shivam is a Full Stack developer . He writes a bunch of HTML,
                CSS, and JavaScript and shakes the pom-poms for CodeBox.
              </p>
            </div>
            <div className="devinfo">
              <h1>
                Krishna <br />
                Vashisth
              </h1>
              <br />
              <p>
                Krishna is a full stack developer. Krishna does JavaScript
                development for CodeBox.
              </p>
            </div>
          </div> */}
        </div>

        <div className="about">
          <div className="about-left">
            <p>
              <strong>
                We're trying to make CodeBox a happy and healthy place
              </strong> 
              for front-end designers and developers and the people looking for
              them, while also being a damn fine place to code. ❤️
            </p>
          </div>

          <div className="about-right">
            <p>
              <strong>People use CodeBox for all sorts of things:</strong>
              prototyping new ideas, reduced test cases for bugs, sending
              clients things to look at, evaluating potential hires, to finding
              inspiration. People also use CodeBox as a sort of resume and
              portfolio, showing off their best design and development work in future.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
