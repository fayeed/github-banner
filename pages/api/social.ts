import { NextApiResponse, NextApiRequest } from "next";
import { getBanner } from "../../utils/social_banner";
import content from "../../public/svgs.json";

export const random = (max: number) => Math.floor(Math.random() * max + 0);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    heading,
    subheading,
    social,
    alignItems = "center",
    headingStyles = `{"textAlign": "center", "thirdDim": "true"}`,
    subheadingStyles = `{"textAlign": "center"}`,
    background,
    border,
    avatarStyles,
    socialStyles,
  } = req.query as {
    heading: string;
    subheading: string;
    social?: string;
    alignItems?: string;
    headingStyles?: string;
    subheadingStyles?: string;
    background?: string;
    border?: string;
    avatarStyles?: string;
    socialStyles?: string;
  };

  res.setHeader("Content-Type", "image/svg+xml");
  console.log("again", req.method);

  const arr = content as any[];

  const banner = getBanner(
    heading,
    subheading,
    content[random(arr.length - 1)].data,
    JSON.parse(social),
    false,
    [],
    alignItems,
    JSON.parse(headingStyles),
    JSON.parse(subheadingStyles),
    JSON.parse(background),
    JSON.parse(border),
    JSON.parse(avatarStyles),
    JSON.parse(socialStyles),
    false
  );

  return res.send(banner);
};
