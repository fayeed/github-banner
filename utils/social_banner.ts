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
  },
  gradient: boolean,
  gradientColors: string[]
) => {
  const scheme = ["mono", "contrast", "triade", "tetrade", "analogic"];

  const variation = ["default", "pastel", "light", "hard"];

  const generator = new ColorScheme();
  generator
    .from_hue(random(360))
    .scheme(scheme[random(5)])
    .variation(variation[random(4)])
    .web_safe(true);

  const colors = !gradient ? generator.colors() : ["fff", "fff", "fff", "fff"];

  const gradColors = gradientColors ?? generator.colors(); // ["fc5c7d", "6a82fb", "05dfd7"]

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;" fill="none">
  <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
        @keyframes gradientBackground {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
          .header {
            position: relative;
            height: 280px;
            background: #${colors[1]};
            color: #${colors[3]};
            padding: 10px 20px;
            border-radius:8px;
            font-family: sans-serif;
            overflow: hidden;
            ${
              gradient
                ? `background: linear-gradient(-45deg, #${gradColors[0]}, #${gradColors[1]}, #${gradColors[2]});
            background-size: 600% 400%;
            animation: gradientBackground 10s ease infinite;`
                : ""
            }
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
            color: #${colors[2]};
          }
          .landing-content {
            font-size: 18px;
            font-weight: 400;
            color: #${colors[2]};
          }
          .footer {
            position: absolute;
            bottom: 20px;
            display: flex;
            flex-direction: column;
            margin-bottom: 0px;
            margin-top: 140px;
            color: #${colors[2]};
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
          <h1 class="landing-heading" id="heading">
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
           ${linkedin(`#${colors[3]}`)}
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
          ${github(`#${colors[3]}`)}
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
          ${mail(`#${colors[3]}`)}
          
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
          ${twitter(`#${colors[3]}`)}
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
          ${stackoverflow(`#${colors[3]}`)}
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
          ${rss(`#${colors[3]}`)}
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
