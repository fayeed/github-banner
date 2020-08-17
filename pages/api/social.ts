import fs, { readFile } from "fs";
import path from "path";
import getConfig from "next/config";
import { NextApiResponse, NextApiRequest } from "next";
import { getBanner } from "../utils/social_banner";
const { serverRuntimeConfig } = getConfig();
const { promisify } = require("util");
const asyncReadFile = promisify(readFile);

const returnSvg = async (path = "./image.svg") => {
  const data = await asyncReadFile(path, { encoding: "utf8" });

  return data.toString();
};

const getAllFiles = function (dirPath, arrayOfFiles?: string[]) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

export const random = (max: number) => Math.floor(Math.random() * max + 0);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { headline } = req.query as { headline: string };

  console.log(headline, req.query);

  const files = getAllFiles(
    path.join(
      serverRuntimeConfig.PROJECT_ROOT,
      "./public/illsutrations/openpeeps"
    )
  );

  let content = [];

  for (const file of files) {
    const data = (await returnSvg(file)).replace(
      `<?xml version="1.0" encoding="UTF-8"?>`,
      ""
    ) as string;

    if (!data.includes("\u0000")) content.push(data);
  }

  res.send(getBanner(headline, content[random(files.length - 1)]));
};
