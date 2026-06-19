import { prisma } from "../src/utils/connect.js";

async function main() {
  await prisma.comment.createMany({
    data: [
      {
        desc: "Really helpful explanation! I finally understand this topic now.",
        postSlug: "react-hooks-explained-simple",
        userEmail: "testjashan112@gmail.com",
      },
      {
        desc: "Great write-up. The examples made it very easy to follow.",
        postSlug: "react-hooks-explained-simple",
        userEmail: "testjashan112@gmail.com",
      },
      {
        desc: "This is exactly what I was looking for. Thanks for sharing!",
        postSlug: "javascript-async-await-guide",
        userEmail: "testjashan112@gmail.com",
      },
      {
        desc: "Very clear explanation. Async/await finally makes sense to me now.",
        postSlug: "javascript-async-await-guide",
        userEmail: "testjashan112@gmail.com",
      },
      {
        desc: "Node.js always felt confusing, but this simplified it a lot.",
        postSlug: "nodejs-basics-for-beginners",
        userEmail: "testjashan112@gmail.com",
      },
      {
        desc: "Clean code is something every developer should focus on. Good post!",
        postSlug: "clean-code-principles-developers",
        userEmail: "testjashan112@gmail.com",
      },
      {
        desc: "Nice explanation of React concepts. Keep posting more like this!",
        postSlug: "react-hooks-explained-simple",
        userEmail: "testjashan112@gmail.com",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Done");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.log(e);
    prisma.$disconnect();
  });
