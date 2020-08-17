import randomColor from "randomcolor";
import { random } from "../pages/api/social";
import {
  linkedin,
  github,
  mail,
  twitter,
  stackoverflow,
  rss,
} from "../icons/social";

export const getBanner = (headline: string, illustration: string) => {
  const luminosity = ["light", "dark"];

  const lim = luminosity[random(2)];

  console.log("headline:", lim);

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg height="100%" width="840" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;" fill="none">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          .header {
            position: relative;
            height: 280px;
            background: ${randomColor({ luminosity: lim })};
            color: ${randomColor({
              luminosity: lim === "light" ? "dark" : "light",
            })};
            padding: 10px 20px;
            border-radius:8px;
            font-family: sans-serif;
            overflow: hidden;
          }
          .person-container {
            position: absolute;
            bottom: -44px;
            right: 0px;
            transform: scaleX(-1);
          }
          .person-container > svg {
            height: 300px;
          }
          .landing-heading {
            font-size: 36px;
            color: ${randomColor({
              luminosity: lim === "light" ? "dark" : "light",
            })};
          }
          .landing-content {
            font-size: 18px;
            font-weight: 400;
            color: ${randomColor({
              luminosity: lim === "light" ? "dark" : "light",
            })};
          }
          .landing-content a {
            font-size: 18px;
            position: relative;
            cursor: pointer;
            text-decoration: none;
          }
          .landing-content a::before {
            content: " ";
            position: absolute;
            bottom: 3px;
            left: -2.5%;
            height: 6px;
            width: 105%;
          }
          .footer {
            position: absolute;
            bottom: 20px;
            display: flex;
            flex-direction: column;
            margin-bottom: 0px;
            margin-top: 140px;
          }
          .footer-content {
            font-size: 16px;
            margin-bottom: 0px;
          }
          .footer-link {
            position: relative;
            cursor: pointer;
            text-decoration: none;
          }
          .footer-link::before {
            content: " ";
            position: absolute;
            bottom: 3px;
            left: -2.5%;
            height: 6px;
            width: 105%;
          }
          .footer-link-hide::before {
            height: 0px;
          }
          .footer-text {
            font-size: 16px;
            margin-bottom: 12px;
          }
          .footer-social {
            display: flex;
            align-items: center;
            width: 220px;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
          }
        </style>
        <div>
        </div>
          <div class="header" >
          <h1 class="landing-heading" >
           ${headline.replace("&", "&amp;")}
          </h1>
          <p class="landing-content" >

          </p>
      <div class="footer">
        <div class="footer-content">
          - Interested in collaborating?
          <a
            class="footer-link "
            href="mailto:fayeed52@gmail.com"
            rel="noopener"
          >
            Send me a message
          </a>
          <br />
          <br />
          - Want to support my work?
          <a
            class="footer-link "
            href="https://www.buymeacoffee.com/fayeed52"
            target="_blank"
            rel="noopener"
          >
            Buy me a coffee
          </a>
        </div>
        <div class="footer-social">
          <a
            class="footer-link footer-link-hide"
            href="https://www.linkedin.com/in/fayeedpawaskar"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener"
          >
          ${linkedin(lim === "light" ? "#000" : "#fff")}
          </a>
          <a
            class="footer-link footer-link-hide"
            href="https://github.com/fayeed"
            target="_blank"
            aria-label="Github"
            rel="noopener"
          >
          ${github(lim === "light" ? "#000" : "#fff")}
          </a>
          <a
            class="footer-link footer-link-hide"
            href="mailto:fayeed52@gmail.com"
            target="_blank"
            aria-label="Mail"
            rel="noopener"
          >
          ${mail(lim === "light" ? "#000" : "#fff")}
          </a>
          <a
            class="footer-link footer-link-hide"
            href="https://twitter.com/FayeedP"
            target="_blank"
            aria-label="Twitter"
            rel="noopener"
          >
          ${twitter(lim === "light" ? "#000" : "#fff")}
          </a>
          <a
            class="footer-link footer-link-hide"
            href="https://stackoverflow.com/users/6709477/fayeed"
            target="_blank"
            aria-label="Stackoverflow"
            rel="noopener"
          >
          ${stackoverflow(lim === "light" ? "#000" : "#fff")}
          </a>
          <a
            class="footer-link footer-link-hide"
            href="/rss.xml"
            target="_blank"
            aria-label="Rss"
          >
          ${rss(lim === "light" ? "#000" : "#fff")}
          </a>
        </div>
      </div>
          <div class="person-container">
          ${illustration}
          </div>
        </div>
      </div>      
    </foreignObject>
  </svg>
  `;
};
