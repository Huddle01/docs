import axios, { isAxiosError } from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { packageName } = req.query as { packageName: string; };
    try {
        const { data } = await axios.request({
            method: 'GET',
            url: `https://registry.npmjs.org/${packageName}`,

        });
        const version = data["dist-tags"].beta;
        console.log(data.time[`${version}`])
        res.status(200).json({ version, date: data.time[`${version}`] });
    } catch (error) {
        if (isAxiosError(error)) {
            res.status(400).json(error.response?.data);
        } else {
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}
