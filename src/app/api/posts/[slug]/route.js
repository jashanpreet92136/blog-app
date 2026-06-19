import { prisma } from "@/utils/connect";

export const GET = async (req, context) => {
  const { params } = context;

  const resolvedParams = await params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug: resolvedParams.slug },
      include: { user: true },
    });

    return Response.json(post, {
      status: 200,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        message: "Failed to fetch posts.",
      },
      {
        status: 500,
      },
    );
  }
};
