import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
): Promise<void> {
   // Check for secret to confirm this is a valid request
   if (req.headers.authorization !== process.env.SECRET_REVALIDATE_KEY) {
      return res.status(401).json({ message: "Invalid token" });
   }

   try {
      await Promise.all([
         res.revalidate("/"),
         res.revalidate("/contact"),
         res.revalidate("/blog"),
         res.revalidate(`/blog/${req.query.slug}`),
      ]);
      return res.json({ revalidated: true });
   } catch (err) {
      return res.status(500).json({ message: "Error revalidating" });
   }
}
