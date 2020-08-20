import {
  linkedin,
  github,
  mail,
  twitter,
  stackoverflow,
  rss,
} from "../icons/social";

export const SocialFooter = (social: any, colors: any, socialStyle: any) => {
  console.log(socialStyle);
  return `
  <style>
    .footer {
      position: absolute;
      bottom: 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 0px;
      margin-top: 140px;
      color: ${
        socialStyle?.color.length > 0 ? socialStyle.color : `#${colors[2]}`
      } ;
    }
    .footer-link {
      position: relative;
      cursor: pointer;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: ${socialStyle?.fontSize ?? 14}px;
      font-weight: ${socialStyle?.fontWeight ?? 500};
      line-height: ${socialStyle?.lineHeight}
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
  <div class="footer">
    <div class="footer-social">
      ${
        social?.linkedIn
          ? `<a
        class="footer-link footer-link-hide"
        href="https://www.linkedin.com/in/fayeedpawaskar"
        target="_blank"
        aria-label="LinkedIn"
        rel="noopener"
      >
      <div>
      ${linkedin(
        socialStyle?.iconColor.length > 0
          ? socialStyle.iconColor
          : `#${colors[3]}`
      )}
      </div>
      <div>
        ${social?.linkedIn}
      </div>
      </a>`
          : ""
      }
      ${
        social?.github
          ? `<a
        class="footer-link footer-link-hide"
        href="https://github.com/fayeed"
        target="_blank"
        aria-label="Github"
        rel="noopener"
      >
      <div>
      ${github(
        socialStyle?.iconColor.length > 0
          ? socialStyle.iconColor
          : `#${colors[3]}`
      )}
      </div>
      <div>
      ${social?.github}
    </div>
      </a>`
          : ""
      }
      ${
        social?.mail
          ? `<a
        class="footer-link footer-link-hide"
        href="mailto:fayeed52@gmail.com"
        target="_blank"
        aria-label="Mail"
        rel="noopener"
      >
      <div>
      ${mail(
        socialStyle?.iconColor.length > 0
          ? socialStyle.iconColor
          : `#${colors[3]}`
      )}
      
      </div>
      <div>${social?.mail}</div>
      </a>`
          : ""
      }
      ${
        social?.twitter
          ? `<a
        class="footer-link footer-link-hide"
        href="https://twitter.com/FayeedP"
        target="_blank"
        aria-label="Twitter"
        rel="noopener"
      >
      <div>
      ${twitter(
        socialStyle?.iconColor.length > 0
          ? socialStyle.iconColor
          : `#${colors[3]}`
      )}
      </div>
      <div>${social?.twitter}</div>
      </a>`
          : ""
      }
      ${
        social?.stackoverflow
          ? `<a
        class="footer-link footer-link-hide"
        href="https://stackoverflow.com/users/6709477/fayeed"
        target="_blank"
        aria-label="Stackoverflow"
        rel="noopener"
      >
      <div>
      ${stackoverflow(
        socialStyle?.iconColor.length > 0
          ? socialStyle.iconColor
          : `#${colors[3]}`
      )}
      </div>
      <div>${social?.stackoverflow}</div>
      </a>`
          : ""
      }
      ${
        social?.rss
          ? `<a
        class="footer-link footer-link-hide"
        href="/rss.xml"
        target="_blank"
        aria-label="Rss"
      >
      <div>
      ${rss(
        socialStyle?.iconColor.length > 0
          ? socialStyle.iconColor
          : `#${colors[3]}`
      )}
      </div>
      <div>${social?.rss}</div>
      </a>`
          : ""
      }
    </div>
  </div>
  `;
};
