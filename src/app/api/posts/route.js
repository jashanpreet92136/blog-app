import { prisma } from "@/utils/connect";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const limit = 4;
  const skip = (page - 1) * limit;
  const where = cat ? { catSlug: cat } : {};

  try {
    const count = await prisma.post.count({ where });
    const posts = await prisma.post.findMany({
      where: { ...(cat ? { catSlug: cat } : {}) },
      skip,
      take: limit,
    });

    return Response.json(
      { posts, limit, count },
      {
        status: 200,
      },
    );
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

export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const { desc, slug, title, img, catSlug } = await req.json();

    const post = await prisma.post.create({
      data: {
        desc,
        slug,
        title,
        img,
        catSlug,
        userEmail: session.user.email,
      },
    });

    return Response.json(post, {
      status: 201,
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
