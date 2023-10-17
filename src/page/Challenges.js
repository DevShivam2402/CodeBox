import React from 'react';
import { Link } from "react-router-dom";
import Header from '../component/Header';
import Footer from '../component/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck  } from "@fortawesome/free-solid-svg-icons";


function Challenges() {
  return (
    <div>
      <Header />
      <div className="challenges-container">
        <div className="challenges-containerbox">
          <time>Week 1 -&nbsp; Completed</time>
          
          <FontAwesomeIcon icon={faCheck} className="fa-solid" />
          <h3 className="CompletedWeek_completedTitle">
            <Link className="challenges-heading" to="/ChallengeOne">
              List Styles
            </Link>
          </h3>
          <br />
          <div>
            <p>The May #CodeBoxChallenge starts now!</p>
            <br />

            <p>
              In March, we had a "Go Big!" theme that was all about{" "}
              <strong>big</strong> UI elements. This month, let's zoom in on the{" "}
              <strong>Little Details</strong> 💎
            </p>
            <br />

            <p>
              Carefully crafted, stylish little details not only make a
              front-end design look better, they can help make it more useful
              and easier to understand.{" "}
            </p>
            <br />

            <p>
              Each week this month, we'll give you an HTML template featuring an
              unstyled element that can really shine with some attention to the
              little details. It's up to you to polish them up! We'll have lots
              of ideas and detail-oriented style resources to help you along the
              way.{" "}
            </p>
            <br />

            <p>Let's start by digging into the little details of lists!</p>
            <br />
            <p>
              HTML lists already have a bit of style by default — they come with
              bullet points included for free. But, there is a big range of
              style options for lists that can make them nicer to look at or
              easier to understand.
            </p>
            <br />

            <p>
              This week's template includes an unstyled, unordered list with a
              nested unordered list inside it. Your challenge is to polish up
              the little details of this list to make it shine!
            </p>
            <br />

            <p>
              As always, the template is just a starting point. You can add or
              remove elements or change the content of the list if you like. All
              we ask is that you give us a stylish list!
            </p>
            <br />
          </div>
          <p className="CompletedWeek_pastChallengePrompt-HL1TM">
            <strong>Challenge prompt:</strong> create a Box with a styled list
          </p>
          <br />
          <Link to="/ChallengeOne" className="button green">
            View weekly challenge
          </Link>
        </div>
          
      </div>
      <Footer />
    </div>
  );
}

export default Challenges