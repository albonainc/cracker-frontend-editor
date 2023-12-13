import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: 1 | 0;
  file: {
    url: string;
  };
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    success: 1,
    file: {
      url: "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
    },
  });
}
