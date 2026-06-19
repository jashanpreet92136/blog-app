import { prisma } from "@/utils/connect";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  try {
    const comments = await prisma.comment.findMany({
      where: { postSlug: slug },
      include: { user: true },
    });

    return Response.json(comments, {
      status: 200,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        message: "Failed to fetch comments.",
      },
      {
        status: 500,
      },
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const { desc, slug } = await req.json();

    const comment = await prisma.comment.create({
      data: {
        desc,
        postSlug: slug,
        userEmail: session.user.email,
      },
    });

    return Response.json(comment, {
      status: 200,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        message: "Failed to fetch comments.",
      },
      {
        status: 500,
      },
    );
  }
};
