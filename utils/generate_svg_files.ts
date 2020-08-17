import fs, { readFile } from "fs";
import pathed from "path";
import getConfig from "next/config";
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
      arrayOfFiles.push(pathed.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

export const generateSvgFiles = async () => {
  const p = pathed.join(
    serverRuntimeConfig.PROJECT_ROOT,
    "./public/illsutrations/openpeeps"
  );
  const files = getAllFiles(p);

  let content = [];

  for (const file of files) {
    const data = (await returnSvg(file)).replace(
      `<?xml version="1.0" encoding="UTF-8"?>`,
      ""
    ) as string;

    if (!data.includes("\u0000")) content.push(data);
  }

  console.log();

  // writes RSS.xml to public directory
  const path = `${process.cwd()}/public/svgs.json`;
  fs.writeFileSync(path, JSON.stringify(content), "utf8");
  console.log(`generated RSS feed`);
};
