import React from 'react';
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";



function ChallengeOne() {
    return (
      <div>
        <Header />
        <div className="challenge-container ">
          <div className="challenge-containerbox ">
            <h2>
              <Link className="ChallengesWeek_monthlyThemeTitle" to="/">
                ← April 2022 — Little Details
              </Link>
            </h2>

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
                <strong>big</strong> UI elements. This month, let's zoom in on
                the <strong>Little Details</strong> 💎
              </p>
              <br />

              <p>
                Carefully crafted, stylish little details not only make a
                front-end design look better, they can help make it more useful
                and easier to understand.{" "}
              </p>
              <br />

              <p>
                Each week this month, we'll give you an HTML template featuring
                an unstyled element that can really shine with some attention to
                the little details. It's up to you to polish them up! We'll have
                lots of ideas and detail-oriented style resources to help you
                along the way.{" "}
              </p>
              <br />

              <p>Let's start by digging into the little details of lists!</p>
              <br />
              <p>
                HTML lists already have a bit of style by default — they come
                with bullet points included for free. But, there is a big range
                of style options for lists that can make them nicer to look at
                or easier to understand.
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
                remove elements or change the content of the list if you like.
                All we ask is that you give us a stylish list!
              </p>
              <br />
            </div>
            <p className="CompletedWeek_pastChallengePrompt-HL1TM">
              <strong>Challenge prompt:</strong> create a Box with a styled list
            </p>
          </div>

          <div className="YourChallenge_yourChallenge">
            <p className="YourChallenge_challengePrompt">
              <span>💪 Your Challenge:</span>
              <br />
              <br />
              <strong>create a Pen with a styled list</strong>
            </p>
            <br />
            <Link to="/Code" class="button green">
              Start a Code
            </Link>
            <br />
            <br />
            <br />
            <p className="YourChallenge_tagging-mMLvo">
              Make sure to tag your Pen
              <strong className="ChallengeTag_challengeTag">
                <Link to="/Update"> cpc-list-styles </Link>
              </strong>
              and
              <strong className="ChallengeTag_challengeTag">
                <Link to="/Update"Name> codeBoxchallenge </Link>
              </strong>
              so that we can all see it!
            </p>
          </div>

          <div className="ChallengesIdeasAndResources_root-cQEyn">
            <div className="ChallengesIdeasAndResources_challengeListArea-55MV8 undefined">
              <h4>Ideas</h4>
              <ol>
                <li>
                  This challenge is a great opportunity to dig into the variety
                  of <Link to="/Update">list-style-type</Link> options in CSS —
                  there are way more than you might think!
                </li>
                <br />
                <li>
                  The unordered list is a classic, but it's not the only list
                  type in HTML. Would this list be more useful as an ordered
                  list? Is there a place for a definition list in your Pen?
                </li>
                <br />
                <li>
                  Want to take your challenge to the next level? Make the list
                  interactive! Could you create a working todo list where you
                  can check off finished items, or add and remove items?
                </li>
              </ol>
            </div>
            <div class="ChallengesIdeasAndResources_challengeListArea-55MV8 undefined">
              <h4>Resources</h4>
              <ol>
                <li>
                  MDN has docs on the{" "}
                  <Link to="/Update">CSS list-style property</Link> and{" "}
                  <Link to="/Update">counter styles</Link> that can come in
                  handy. Or, dig into the{" "}
                  <Link to="/Update">List Style Recipes</Link> at CSS-Tricks.
                </li>
                <br />
                <li>
                  Take inspiration from the stylish Pens in md3bm's collection{" "}
                  <Link to="/Update">"ul &amp; ol &amp; il"</Link>, or check out
                  the little details in Airen's{" "}
                  <Link to="/Update">list-style-type and list-style-image</Link>{" "}
                  or Adam Argyle's <Link to="/Update">Emoji List</Link> demos.
                </li>
                <br />
                <li>
                  Thinking of making your list interactive? Gather some ideas
                  from alphardex's <Link to="/Update">Todo List</Link>, Stephen
                  Shaw's{" "}
                  <Link to="/Update">
                    CSS-only Todo List Checkbox Animation
                  </Link>
                  , or Taranjot Gill's{" "}
                  <Link to="/Update">Vacation Todo List</Link>.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default ChallengeOne