import axios, { isAxiosError } from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.body as { address: string };

  try {
    const { data } = await axios.request<{
      message: string;
      apiKey: string;
      projectId: string;
      domain: string;
    }>({
      method: 'POST',
      url: `${process.env.IRIKO_URL}/api/v1/admin/docs/create-api-key`,
      data: {
        walletAddress: address,
        walletChain: 'ETHEREUM',
        accessMedium: 'DOCS',
        purpose: 'SDK',
      },
      headers: {
        'x-api-key': process.env.ADMIN_API_KEY,
      },
    });

    res.status(200).json(data);
  } catch (error) {
    if (isAxiosError(error)) {
      res.status(400).json(error.response?.data);
    } else {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
}
