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
import { LightenDarkenColor } from "./lighten_darken_color";
import { SocialFooter } from "./social_footer";
import {
  BorderStyles,
  TextStyles,
  BackgroundStyles,
  AvatarStyles,
  SocialStyles,
} from "../types/styles";
import { SocialTypes } from "../types/social";

export const getBanner = (
  headline: string,
  subheading: string,
  illustration: string,
  social?: SocialTypes,
  gradient?: boolean,
  gradientColors?: string[],
  alignItems?: string,
  headingStyle?: TextStyles,
  subheadingStyle?: TextStyles,
  background?: BackgroundStyles,
  border?: BorderStyles,
  avatarStyle?: AvatarStyles,
  socialStyle?: SocialStyles,
  reverse?: boolean
) => {
  console.log("what");
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

  const headingShadowColor = LightenDarkenColor(
    headingStyle?.color.length > 0 ? headingStyle.color : `#${colors[2]}`,
    -60
  );

  const subheadingShadowColor = LightenDarkenColor(
    subheadingStyle?.color.length > 0
      ? subheadingStyle?.color
      : `#${colors[2]}`,
    -60
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg height="300" width="840" xmlns="http://www.w3.org/2000/svg" style="border-radius:8px;" fill="none">
  <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" style="height: 100%; width: 100%;">
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
            background: ${
              background?.color.length > 0 ? background.color : `#${colors[1]}`
            };
            height: 300px;
            background-image: url("${background?.image}");
            background-size: ${background?.size};
            background-position: ${background?.position};
            background-repeat: ${background?.repeat};
            color: #${colors[3]};
            padding: 10px 20px;
            border-radius: ${border?.radius}px;
            border: ${border?.size}px solid ${
    border?.color.length > 0 ? border.color : `#${colors[3]}`
  };
            font-family: sans-serif;
            overflow: hidden;
            display: flex;
            flex-direction: ${reverse ? "row-reverse" : "row"};
            ${
              gradient
                ? `background: linear-gradient(-45deg, #${gradColors[0]}, #${gradColors[1]}, #${gradColors[2]});
            background-size: 600% 400%;
            animation: gradientBackground 10s ease infinite;`
                : ""
            }
          }
          .content {
            display: flex;
            flex-direction: column;
            align-items: ${alignItems};
            flex: 1;
          }
          .person-container {
            transform: scaleX(${avatarStyle?.reverse ? 1 : -1});
          }
          .person-container > svg {
            height: ${avatarStyle.height}px;
            width: ${avatarStyle.width}px;
            fill: #000;
          }
          .landing-heading {
            font-size: 32px;
            color: #${colors[2]};
            text-align: ${headingStyle.textAlign};
            line-height: ${headingStyle.lineHeight};
            font-size: ${headingStyle.fontSize}px;
            font-weight: ${headingStyle.fontWeight};
            color: ${headingStyle.color};
            text-shadow: ${
              headingStyle.thirdDim
                ? `0 1px 0 ${headingShadowColor}, 0 2px 0 ${headingShadowColor}, 0 3px 0 ${headingShadowColor}, 0 4px 0 ${headingShadowColor}, 0 12px 5px rgba(0, 0, 0, 0.1)`
                : ""
            };
            max-width: 100%;
          }
          .landing-content {
            max-width: 100%;
            font-size: 16px;
            font-weight: 500;
            text-align: ${subheadingStyle.textAlign};
            color: #${colors[2]};
            line-height: ${subheadingStyle.lineHeight};
            font-size: ${subheadingStyle.fontSize}px;
            font-weight: ${subheadingStyle.fontWeight};
            color: ${subheadingStyle.color};
            text-shadow: ${
              subheadingStyle.thirdDim
                ? `0 1px 0 ${subheadingShadowColor}, 0 2px 0 ${subheadingShadowColor}, 0 3px 0 ${subheadingShadowColor}, 0 4px 0 ${subheadingShadowColor}, 0 12px 5px rgba(0, 0, 0, 0.1)`
                : ""
            };
          }
        </style>
        <div>
        </div>
          <div class="header" >
            <div class="content">
              <h1 class="landing-heading" id="heading">
                ${headline.replace("&", "&amp;")}
              </h1>
              <p class="landing-content" >
                ${subheading ? subheading : ""}
              </p>
              ${SocialFooter(social, colors, socialStyle)}
            </div>
            ${
              !avatarStyle?.hide
                ? `<div class='person-container'>
            ${illustration}
            </div>`
                : ""
            }
        </div>

      </div>      
    </foreignObject>
  </svg>
  `;
};
