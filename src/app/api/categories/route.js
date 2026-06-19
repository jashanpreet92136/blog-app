import { prisma } from "@/utils/connect";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return Response.json(categories, {
      status: 200,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        message: "Failed to fetch categories.",
      },
      {
        status: 500,
      },
    );
  }
};
