import { NextApiResponse, NextApiRequest } from "next";
import { getBanner } from "../../utils/social_banner";
import content from "../../public/svgs.json";

export const random = (max: number) => Math.floor(Math.random() * max + 0);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    headline,
    subheading,
    mail,
    twitter,
    github,
    linkedIn,
    stackoverflow,
    rss,
  } = req.query as {
    headline: string;
    subheading: string;
    mail?: string;
    twitter?: string;
    linkedIn?: string;
    github?: string;
    stackoverflow?: string;
    rss?: string;
  };

  res.setHeader("Content-Type", "image/svg+xml");

  const arr = content as string[];

  console.log(arr.length);

  res.send(
    getBanner(
      headline,
      subheading,
      content[random(arr.length - 1)].data,
      {
        mail,
        twitter,
        linkedIn,
        github,
        stackoverflow,
        rss,
      },
      false,
      []
    )
  );
};
