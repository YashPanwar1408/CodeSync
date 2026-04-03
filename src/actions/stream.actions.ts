"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User not authenticated");

  const streamClient = new StreamClient(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_SECRET_KEY!
  );

  // Mitigate minor clock skew between local/dev machines and Stream by issuing tokens slightly in the past.
  const iat = Math.floor((Date.now() - 60_000) / 1000);
  const token = streamClient.generateUserToken({ user_id: user.id, iat });

  return token;
};