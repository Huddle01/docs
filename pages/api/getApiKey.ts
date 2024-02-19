import axios, { isAxiosError } from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query;

  try {
    const { data } = await axios.request({
      method: 'POST',
      url: `${process.env.IRIKO_URL}/trpc/admin.getUser`,
      data: {
        json: {
          walletAddress: address,
        },
      },
      headers: {
        'x-api-key': process.env.ADMIN_API_KEY,
      },
    });

    const dashboardUser = data.result.data.json.dashboardUser;

    if (dashboardUser.length > 0) {
      const firstUser = dashboardUser[0];

      if (firstUser.ApiKey) {
        const ApiKeyData = firstUser.ApiKey[0];

        const apiKey = ApiKeyData.apiKey;
        const whitelistedDomains = ApiKeyData.whitelistedDomains;
        const projectId = ApiKeyData.projectId;
        const email = ApiKeyData.email;

        res
          .status(200)
          .json({ apiKey, domain: whitelistedDomains, projectId, email });
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    } else {
      res.status(500).json({ message: 'Something went wrong' });
    }
  } catch (error) {
    if (isAxiosError(error)) {
      res.status(400).json(error.response?.data);
    } else {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}
