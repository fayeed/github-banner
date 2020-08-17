import { NextApiResponse, NextApiRequest } from "next";
import { getBanner } from "../../utils/social_banner";
import content from "../../public/svgs.json";

export const random = (max: number) => Math.floor(Math.random() * max + 0);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { headline } = req.query as { headline: string };

  console.log(headline, req.query);

  res.send(getBanner(headline, content[random(50 - 1)]));
};
