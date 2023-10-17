import React from "react";
import {Link} from "react-router-dom"


function Footer() {
  return (
    <div className="footer">
      <footer className="SiteFooterStyles_linkFooter-O8s+b" id="link-footer">
        <div
          className="width-wrappe SiteFooterStyles_linkFooterInside-mxNkC"
          id="link-footer-width-wrapper"
        >
          <nav id="link-footer-codebox-links" aria-label="Links about Codebox">
            <h4>CodeBox </h4>
            <Link to="/About/">About</Link>
            <Link to="Update">Blog</Link>
            {/* <a href="https://blog.codepen.io/radio/">Podcast</a> */}
            {/* <a href="https://www.notion.so/csstricks/Sponsorship-Possibilities-cb5b33a3f6f64c239220547fe7965d78">
              Advertising
            </a> */}
            <Link to="/Update">Documentation</Link>
            <Link to="/Update">Support</Link>
            {/* <a href="https://cottonbureau.com/people/codepen-team">Shop</a> */}
          </nav>

          <nav
            id="link-footer-for-links"
            aria-label="CodePen for different uses"
          >
            <h4>For</h4>
            <Link to="/Update">Teams</Link>
            <Link to="/Update">Education</Link>
            {/* <a href="/features/privacy">Privacy</a>
            <a href="/features/embeds">Embeds</a>
            <a href="/features/asset-hosting">Asset Hosting</a> */}
          </nav>
          <nav
            id="link-footer-social-links"
            aria-label="CodePen on Social Media"
          >
            <h4>Social</h4>
            <a
              href="https://www.youtube.com/channel/UCWfwIT7ZqvryarfdZhtAdWQ"
              
            >
              YouTube
            </a>
            <a href="https://twitter.com/shivam_vats_" >
              Twitter
            </a>
            <a href="https://www.instagram.com/shivam__vats__/" >
              Instagram
            </a>
          </nav>
          <nav id="link-footer-community-links" aria-label="CodePen Community">
            <h4>Community</h4>
            {/* <Link to="/Update">Spark</Link> */}
            <Link to="/Update">Challenges</Link>
            <Link to="/Update">Topics</Link>
            <Link to="/Update">Code of Conduct</Link>
          </nav>
          <div
            className="SiteFooterStyles_copyright-geeAI"
            id="link-footer-copyright"
          >
            <h1 className="Logo" data-component="Logo" data-test-id="logo">
              <Link className="brand-link" to="/Update">
                CODEBOX
              </Link>
            </h1>
            <p>©2022 CodeBox</p>

            <p className="SiteFooterStyles_links-kp+Wk">
              <Link to="/Update">Terms of Service</Link> ·{" "}
              <Link to="/">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
