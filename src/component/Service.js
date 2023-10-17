import React from "react";
import {Link} from "react-router-dom"


function Service() {
  return (
    <div className="service-container">
      <div class="width-wrapper">
        <div class="service-card">
          <div class="HomepageAnonCards_icon-AFa+u">
            <img
              src="https://cpwebassets.codepen.io/assets/packs/icon-build-0f21c66ed03bfb36c597636d27ca621e.svg"
              alt="Icon of conveyer belt with boxes on it."
            />
          </div>
          <h2 data-test-id="promo-buildtest">Build &amp; Test</h2>
          <p>
            Get work done quicker by building out{" "}
            <strong>entire projects</strong> or isolating code to{" "}
            <strong>test features and animations</strong>. Want to keep it all
            under wraps?{" "}


            <Link to="/Update">
              <strong>
                Upgrade Your Skill's{" "}
                <span
                  class="BadgePro-module_root-rDljf Badge-module_root-73IPW"
                  data-test-id="pro-badge"
                >
                 to PRO 
                </span>{" "}
                Level {" "}
              </strong>
            </Link>


             to keep your work private.
          </p>
          <Link to="/Code" class="button">
            <span>Try the Editor</span>
          </Link>
        </div>



        <div class="service-card">
          <div class="HomepageAnonCards_icon-AFa+u">
            <img
              src="https://cpwebassets.codepen.io/assets/packs/icon-learn-b1311620e99cea826f259aa2f7750940.svg"
              alt="Icon of Map"
            />
          </div>
          <h2 data-test-id="promo-discover">Learn &amp; Discover</h2>
          <p>
            Want to upgrade your skills and get noticed? Participating in
            CodeBox Challenges is a great way to try something new. We
            frequently feature these Codes on our homepage and across social
            media!
          </p>
          <Link to="/Update" class="button">
            <span>Join this Week’s Challenge</span>
          </Link>
        </div>



        <div class="service-card">
          <div class="HomepageAnonCards_icon-AFa+u">
            <img
              src="https://cpwebassets.codepen.io/assets/packs/icon-share-910c683bbac21bf41fcf9aab64ebc957.svg"
              alt="Icon of Globe"
            />
          </div>
          <h2 data-test-id="promo-share">Share Your Work</h2>
          <p>
            Become a part of the{" "}
            <strong>most active front-end community</strong> in the world by
            sharing work. Presenting at a conference? Show your code directly in
            the browser with{" "}
            <Link to="/Update">
              <strong>Presentation Mode</strong>
            </Link>
            .
          </p>
          <Link to="/Update" class="button">
            <span>Explore Trending</span>
          </Link>
        </div>


        
        {/* <img
          src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg"
          alt=""
          class="HomepageAnonCards_bg--UmJ9"
        /> */}
      </div>
    </div>
  );
}

export default Service;
