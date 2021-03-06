import styles from "../styles/Home.module.css";
import { useMemo, useState } from "react";
import { getBanner } from "../utils/social_banner";
import content from "../public/svgs.json";
import social, { random } from "./api/social";
import {
  Button,
  TextField,
  FormGroup,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  Slider,
} from "@material-ui/core";
import HeadingGroup from "../form/heading_group";
import SubheadingGroup from "../form/subheading_group";
import SocialGroup from "../form/social_group";
import BorderGroup from "../form/border_group";
import BackgroundGroup from "../form/background_group";
import AvatarGroup from "../form/avatar_group";
import SocialFieldGroup from "../form/social_field_group";
import { getForm } from "../hooks/form";
import { useClipboard } from "use-clipboard-hook";

const arr = content as {
  name: string;
  data: string;
  path: string;
  group: string;
}[];

export default function Home() {
  const {
    heading,
    subheading,
    subheadingStyles,
    avatarStyles,
    border,
    background,
    socialStyles,
    gradient,
    reverse,
    alignItems,
    headingStyles,
    showSocial,
    social,
    setHeading,
    setSubheading,
    setAvatarStyles,
    setBorder,
    setBackground,
    setSocailStyles,
    setSubHeadingStyles,
    setHeadingStyles,
    setShowSocial,
    setSocial,
    setAlignItems,
    setGradient,
    setReverse,
  } = getForm();

  const [randomNumber, setRandom] = useState(0);

  const { copy } = useClipboard();

  const getURL = () => {
    const url = new URL(`${window.location.origin}/api/social/`);
    url.searchParams.append("heading", heading);
    url.searchParams.append("subheading", subheading);
    url.searchParams.append("social", JSON.stringify(showSocial ? social : {}));
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
    url.searchParams.append("gradient", gradient.toString());

    console.log(url.href);

    copy(url.href);
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
        reverse
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
      randomNumber,
      reverse,
    ]
  );

  return (
    <div className={styles.container} style={{ marginTop: 380 }}>
      <div className={styles.banner}>
        <div
          dangerouslySetInnerHTML={{
            __html: banner,
          }}
        />
        <div>
          <Button onClick={() => setRandom(random(100))}>random</Button>
          <Button onClick={getURL}>copy</Button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: 400 }}>
        <TextField
          label="Heading"
          type="text"
          multiline
          placeholder="enter your title here..."
          name="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <TextField
          label="Subheading"
          type="text"
          multiline
          placeholder="enter your title here..."
          name="subheading"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <InputLabel>Reverse content</InputLabel>
          <Switch
            type="checkbox"
            placeholder="enter your title here..."
            name="reverse"
            checked={reverse}
            onChange={(e) => setReverse(e.target.checked)}
          />
        </div>

        <SocialFieldGroup
          setShowSocial={setShowSocial}
          setSocial={setSocial}
          showSocial={showSocial}
          social={social}
        />
        <FormGroup>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <InputLabel>Gradient</InputLabel>
            <Switch
              type="checkbox"
              placeholder="enter your title here..."
              name="gradient"
              checked={gradient}
              onChange={(e) => setGradient(e.target.checked)}
            />
          </div>

          {/* TODO: Gradient Color picker */}
        </FormGroup>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <InputLabel>Hide Avatar</InputLabel>
          <Switch
            type="checkbox"
            placeholder="enter your title here..."
            name="hideAvatar"
            checked={avatarStyles.hide}
            onChange={(e) =>
              setAvatarStyles({ ...avatarStyles, hide: e.target.checked })
            }
          />
        </div>

        <InputLabel>Align Items</InputLabel>
        <Select
          value={alignItems}
          onChange={(e) => setAlignItems(e.target.value as string)}
        >
          <MenuItem value="flex-start">Flex Start</MenuItem>
          <MenuItem value="center">Center</MenuItem>
          <MenuItem value="flex-end">Flex End</MenuItem>
        </Select>
        <HeadingGroup
          headingStyles={headingStyles}
          setHeadingStyles={setHeadingStyles}
        />
        <SubheadingGroup
          subheadingStyles={subheadingStyles}
          setSubHeadingStyles={setSubHeadingStyles}
        />
        <SocialGroup
          socialStyles={socialStyles}
          setSocailStyles={setSocailStyles}
        />
        <BackgroundGroup
          background={background}
          setBackground={setBackground}
        />
        <BorderGroup border={border} setBorder={setBorder} />
        <AvatarGroup
          avatarStyles={avatarStyles}
          setAvatarStyles={setAvatarStyles}
        />
      </div>
      <div style={{ marginTop: 30, marginBottom: 20 }}>
        Made with ❤️&nbsp; by{" "}
        <a className={styles.link} href="https://fayeed.dev">
          Fayeed Pawaskar
        </a>
      </div>
      <a
        href="https://github.com/fayeed/github-banner"
        target="_blank"
        rel="noreferer nopener"
      >
        <div className={styles.card}>
          <div>Github Banner</div>
          <p>
            Build custom github banners for your Github profiles, to add some
            flair to your Readmes. Like the project, star the project by
            clicking on the card.
          </p>
        </div>
      </a>
    </div>
  );
}
