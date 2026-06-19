import { prisma } from "@/utils/connect";

export const GET = async () => {
  try {
    const post = await prisma.post.findFirst({
      orderBy: [{ views: "desc" }, { createdAt: "desc" }],
    });

    return Response.json(post, { status: 200 });
  } catch (err) {
    console.error(err);

    return Response.json(
      { message: "Failed to fetch featured post." },
      { status: 500 },
    );
  }
};
