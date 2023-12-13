import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

type ResponseData = {
  success: 1 | 0;
  meta?: {
    title: string;
    description: string;
    image: {
      url: string;
    };
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const responseData: ResponseData = {
    success: 0,
  };
  if (typeof req.query.url === "string") {
    try {
      const html = await (await fetch(req.query.url)).text();
      const jsdom = new JSDOM();
      const parser = new jsdom.window.DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const title =
        doc
          .querySelector('meta[property="og:title"]')
          ?.getAttribute("content") ?? "";
      const description =
        doc
          .querySelector('meta[property="og:description"]')
          ?.getAttribute("content") ?? "";
      const ogImageUrl =
        doc
          .querySelector('meta[property="og:image"]')
          ?.getAttribute("content") ?? "";

      responseData.success = 1;
      const meta = {
        title,
        description,
        image: {
          url: ogImageUrl,
        },
      };
      responseData.meta = meta;
    } catch (e) {}
  }
  res.status(200).json(responseData);
}

export const decode = (str: string) =>
  str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
