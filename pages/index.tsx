import Head from "next/head";
import styles from "../styles/Home.module.css";
import { generateSvgFiles } from "../utils/generate_svg_files";
import { useState, useMemo } from "react";
import { getBanner } from "../utils/social_banner";
import content from "../public/svgs.json";
import social, { random } from "./api/social";
import { SocialTypes } from "../types/social";
import {
  TextStyles,
  SocialStyles,
  BackgroundStyles,
  BorderStyles,
  AvatarStyles,
} from "../types/styles";

const arr = content as string[];

export default function Home() {
  const [heading, setHeading] = useState(
    "Hi I'm Fayeed Pawaskar - <br/> Code Tinkerer & Software Engineer"
  );
  const [subheading, setSubheading] = useState("");
  const [showSocial, setShowSocial] = useState(true);
  const [social, setSocial] = useState<SocialTypes>({
    mail: "",
    linkedIn: "",
    github: "",
    stackoverflow: "",
    twitter: "",
    rss: "",
  });
  const [gradient, setGradient] = useState(false);
  const [alignItems, setAlignItems] = useState("flex-start");
  const [headingStyles, setHeadingStyles] = useState<TextStyles>({
    fontSize: "",
    textAlign: "start",
    color: "",
    thirdDim: false,
    lineHeight: "",
    fontWeight: "",
  });
  const [subheadingStyles, setSubHeadingStyles] = useState<TextStyles>({
    fontSize: "",
    textAlign: "start",
    color: "",
    thirdDim: false,
    lineHeight: "",
    fontWeight: "",
  });
  const [socialStyles, setSocailStyles] = useState<SocialStyles>({
    fontSize: 14,
    color: "",
    iconColor: "",
    lineHeight: 1,
    fontWeight: 500,
  });
  const [background, setBackground] = useState<BackgroundStyles>({
    color: "",
    image: "",
    size: "contain",
    repeat: "no-repeat",
    position: "center",
  });
  const [border, setBorderRadius] = useState<BorderStyles>({
    size: 4,
    color: "",
    radius: 8,
  });
  const [avatarStyles, setAvatarStyles] = useState<AvatarStyles>({
    height: 320,
    width: 250,
    reverse: false,
    name: "",
    hide: false,
  });

  const getURL = () => {
    const url = new URL("http://localhost:3000/api/social/");
    url.searchParams.append("heading", heading);
    url.searchParams.append("subheading", subheading);
    url.searchParams.append("social", JSON.stringify(social));
    url.searchParams.append("alignItems", alignItems);
    url.searchParams.append("headingStyles", JSON.stringify(headingStyles));
    url.searchParams.append(
      "subheadingStyles",
      JSON.stringify(subheadingStyles)
    );
    url.searchParams.append("socialStyles", JSON.stringify(socialStyles));
    url.searchParams.append("background", JSON.stringify(background));
    url.searchParams.append("border", JSON.stringify(border));
    url.searchParams.append("avatarStyles", JSON.stringify(avatarStyles));

    console.log(url.href);
  };

  const banner = useMemo(
    () =>
      getBanner(
        heading,
        subheading,
        content[random(arr.length - 1)].data,
        showSocial ? social : undefined,
        gradient,
        undefined,
        alignItems,
        headingStyles,
        subheadingStyles,
        background,
        border,
        avatarStyles,
        socialStyles,
        false
      ),
    [
      heading,
      subheading,
      social,
      showSocial,
      gradient,
      alignItems,
      headingStyles,
      subheadingStyles,
      background,
      border,
      avatarStyles,
      socialStyles,
    ]
  );

  return (
    <div className={styles.container}>
      <div
        dangerouslySetInnerHTML={{
          __html: banner,
        }}
      />
      <div>
        <button>random</button>
        <button onClick={getURL}>copy</button>
      </div>
      <div>
        <div>
          <label>Heading</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div>
          <label>Subheading</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="subheading"
            value={subheading}
            onChange={(e) => setSubheading(e.target.value)}
          />
        </div>
        <div>
          <label>Show Social</label>
          <input
            type="checkbox"
            placeholder="enter your title here..."
            name="subheading"
            checked={showSocial}
            onChange={(e) => setShowSocial(e.target.checked)}
          />
        </div>
        <div>
          <label>LinkedIn</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="linkedIn"
            value={social.linkedIn}
            onChange={(e) => setSocial({ ...social, linkedIn: e.target.value })}
          />
        </div>
        <div>
          <label>Mail</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="mail"
            value={social.mail}
            onChange={(e) => setSocial({ ...social, mail: e.target.value })}
          />
        </div>
        <div>
          <label>RSS</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="rss"
            value={social.rss}
            onChange={(e) => setSocial({ ...social, rss: e.target.value })}
          />
        </div>
        <div>
          <label>Stackoverflow</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="stackoverflow"
            value={social.stackoverflow}
            onChange={(e) =>
              setSocial({ ...social, stackoverflow: e.target.value })
            }
          />
        </div>
        <div>
          <label>Twitter</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="twitter"
            value={social.twitter}
            onChange={(e) => setSocial({ ...social, twitter: e.target.value })}
          />
        </div>
        <div>
          <label>Github</label>
          <input
            type="text"
            placeholder="enter your title here..."
            name="github"
            value={social.github}
            onChange={(e) => setSocial({ ...social, github: e.target.value })}
          />
        </div>
        <div>
          <label>Graident</label>
          <input
            type="checkbox"
            placeholder="enter your title here..."
            name="gradient"
            checked={gradient}
            onChange={(e) => setGradient(e.target.checked)}
          />
        </div>
        {/* Color picker */}
        <div>
          <label>Hide Avatar</label>
          <input
            type="checkbox"
            placeholder="enter your title here..."
            name="hideAvatar"
            checked={avatarStyles.hide}
            onChange={(e) =>
              setAvatarStyles({ ...avatarStyles, hide: e.target.checked })
            }
          />
        </div>
        <div>
          <label>Align Items</label>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
          >
            <option value="flex-start">Flex Start</option>
            <option value="center">Center</option>
            <option value="flex-end">Flex End</option>
          </select>
        </div>
        {/* Heading styles */}
        <div>
          <label>Heading Font Size</label>
          <input
            type="number"
            placeholder="enter your title here..."
            value={headingStyles.fontSize}
            onChange={(e) =>
              setHeadingStyles({ ...headingStyles, fontSize: e.target.value })
            }
          />
        </div>
        <div>
          <label>Heading Font Weight</label>
          <input
            type="number"
            placeholder="enter your title here..."
            value={headingStyles.fontWeight}
            onChange={(e) =>
              setHeadingStyles({ ...headingStyles, fontWeight: e.target.value })
            }
          />
        </div>
        <div>
          <label>Heading Line height</label>
          <input
            type="number"
            placeholder="enter your title here..."
            value={headingStyles.lineHeight}
            onChange={(e) =>
              setHeadingStyles({ ...headingStyles, lineHeight: e.target.value })
            }
          />
        </div>
        <div>
          <label>Heading Text Align</label>
          <select
            value={headingStyles.textAlign}
            onChange={(e) =>
              setHeadingStyles({ ...headingStyles, textAlign: e.target.value })
            }
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
          </select>
        </div>
        {/* Heading color */}
        <div>
          <label>Heading 3d</label>
          <input
            type="checkbox"
            placeholder="enter your title here..."
            checked={headingStyles.thirdDim}
            onChange={(e) =>
              setHeadingStyles({ ...headingStyles, thirdDim: e.target.checked })
            }
          />
        </div>
        {/* subHeading styles */}
        <div>
          <label>Subheading Font Size</label>
          <input
            type="number"
            placeholder="enter your title here..."
            value={subheadingStyles.fontSize}
            onChange={(e) =>
              setSubHeadingStyles({
                ...subheadingStyles,
                fontSize: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Subheading Font Weight</label>
          <input
            type="number"
            placeholder="enter your title here..."
            value={subheadingStyles.fontWeight}
            onChange={(e) =>
              setSubHeadingStyles({
                ...subheadingStyles,
                fontWeight: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Subheading Line height</label>
          <input
            type="number"
            placeholder="enter your title here..."
            value={subheadingStyles.lineHeight}
            onChange={(e) =>
              setSubHeadingStyles({
                ...headingStyles,
                lineHeight: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Subheading Text Align</label>
          <select
            value={subheadingStyles.textAlign}
            onChange={(e) =>
              setSubHeadingStyles({
                ...subheadingStyles,
                textAlign: e.target.value,
              })
            }
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
          </select>
        </div>
        {/* SubHeading color */}
        <div>
          <label>Subheading 3d</label>
          <input
            type="checkbox"
            placeholder="enter your title here..."
            checked={subheadingStyles.thirdDim}
            onChange={(e) =>
              setSubHeadingStyles({
                ...subheadingStyles,
                thirdDim: e.target.checked,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // generateSvgFiles();

  return { props: {} };
};
