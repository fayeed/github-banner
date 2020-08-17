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
import ColorScheme from "color-scheme";

export const getBanner = (
  headline: string,
  subheading: string,
  illustration: string,
  social: {
    mail: string;
    twitter: string;
    linkedIn: string;
    github: string;
    stackoverflow: string;
    rss: string;
  }
) => {
  const luminosity = ["light", "dark"];

  const lim = luminosity[random(2)];

  console.log("headline:", lim);

  const scheme = new ColorScheme();
  scheme.from_hue(21).scheme("mono").variation("soft");

  const colors = scheme.colors();

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;" fill="none">
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
            color: ${randomColor({
              luminosity: lim === "light" ? "dark" : "light",
            })};
          }
          .footer-content {
            font-size: 16px;
            margin-bottom: 0px;
          }
          .footer-link {
            position: relative;
            cursor: pointer;
            text-decoration: none;
            display: flex;
            align-items: center;
            font-size: 14px;
          }
          .footer-link > div {
            margin-right: 8px;
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
            width: 420px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            gap: 12px;
          }
        </style>
        <div>
        </div>
          <div class="header" >
          <h1 class="landing-heading" >
           ${headline.replace("&", "&amp;")}
          </h1>
          <p class="landing-content" >
          ${subheading ? subheading : ""}
          </p>
      <div class="footer">
        <div class="footer-social">
          ${
            social.linkedIn
              ? `<a
            class="footer-link footer-link-hide"
            href="https://www.linkedin.com/in/fayeedpawaskar"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener"
          >
          <div>
           ${linkedin(lim === "light" ? "#000" : "#fff")}
          </div>
          <div>
            ${social.linkedIn}
          </div>
          </a>`
              : ""
          }
          ${
            social.github
              ? `<a
            class="footer-link footer-link-hide"
            href="https://github.com/fayeed"
            target="_blank"
            aria-label="Github"
            rel="noopener"
          >
          <div>
          ${github(lim === "light" ? "#000" : "#fff")}
          </div>
          <div>
          ${social.github}
        </div>
          </a>`
              : ""
          }
          ${
            social.mail
              ? `<a
            class="footer-link footer-link-hide"
            href="mailto:fayeed52@gmail.com"
            target="_blank"
            aria-label="Mail"
            rel="noopener"
          >
          <div>
          ${mail(lim === "light" ? "#000" : "#fff")}
          
          </div>
          <div>${social.mail}</div>
          </a>`
              : ""
          }
          ${
            social.twitter
              ? `<a
            class="footer-link footer-link-hide"
            href="https://twitter.com/FayeedP"
            target="_blank"
            aria-label="Twitter"
            rel="noopener"
          >
          <div>
          ${twitter(lim === "light" ? "#000" : "#fff")}
          </div>
          <div>${social.twitter}</div>
          </a>`
              : ""
          }
          ${
            social.stackoverflow
              ? `<a
            class="footer-link footer-link-hide"
            href="https://stackoverflow.com/users/6709477/fayeed"
            target="_blank"
            aria-label="Stackoverflow"
            rel="noopener"
          >
          <div>
          ${stackoverflow(lim === "light" ? "#000" : "#fff")}
          </div>
          <div>${social.stackoverflow}</div>
          </a>`
              : ""
          }
          ${
            social.rss
              ? `<a
            class="footer-link footer-link-hide"
            href="/rss.xml"
            target="_blank"
            aria-label="Rss"
          >
          <div>
          ${rss(lim === "light" ? "#000" : "#fff")}
          </div>
          <div>${social.rss}</div>
          </a>`
              : ""
          }
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
