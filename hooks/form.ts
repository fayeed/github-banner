import { useState } from "react";
import { SocialTypes } from "../types/social";
import {
  TextStyles,
  SocialStyles,
  BackgroundStyles,
  BorderStyles,
  AvatarStyles,
} from "../types/styles";

export function getForm() {
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
    fontSize: 32,
    textAlign: "start",
    color: "",
    thirdDim: false,
    lineHeight: "",
    fontWeight: "700",
  });
  const [subheadingStyles, setSubHeadingStyles] = useState<TextStyles>({
    fontSize: 14,
    textAlign: "start",
    color: "",
    thirdDim: false,
    lineHeight: "",
    fontWeight: "500",
  });
  const [socialStyles, setSocailStyles] = useState<SocialStyles>({
    fontSize: 14,
    color: "",
    iconColor: "",
    lineHeight: "1",
    fontWeight: "500",
  });
  const [background, setBackground] = useState<BackgroundStyles>({
    color: "",
    image: "",
    size: "contain",
    repeat: "no-repeat",
    position: "center",
  });
  const [border, setBorder] = useState<BorderStyles>({
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

  return {
    heading,
    subheading,
    subheadingStyles,
    avatarStyles,
    border,
    background,
    socialStyles,
    gradient,
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
  };
}
