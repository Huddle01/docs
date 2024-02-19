import axios, { isAxiosError } from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { apiKey, domain, email } = req.body as {
    apiKey: string;
    domain: string;
    email: string;
  };
  try {
    const { data } = await axios.request<{
      message: string;
      domain: string;
      email: string;
    }>({
      method: 'POST',
      url: `${process.env.IRIKO_URL}/api/v1/admin/add-whitelist-domains`,
      data: {
        apiKey,
        domain,
        email,
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
