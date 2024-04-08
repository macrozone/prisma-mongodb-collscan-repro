import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  log: ["query"],
});

const MY_ID = "1234";

const theTest = async () => {
  // make sure this user exists

  await prisma.user.upsert({
    where: {
      id: MY_ID,
    },
    update: {},
    create: {
      id: MY_ID,
    },
  });

  await findUniqueTest();
  await findFirstTest();
};

const findUniqueTest = async () => {
  console.log("find unique tests:");

  const findUserCall = () =>
    prisma.user.findUniqueOrThrow({
      where: {
        id: MY_ID,
      },
    });

  const promises = [];

  for (let i = 0; i < 10; i++) {
    console.log("Iteration: ", i);
    promises.push(findUserCall());
  }

  await Promise.all(promises);

  console.log("find unique tests done");
};

const findFirstTest = async () => {
  console.log("find first tests:");

  const findUserCall = () =>
    prisma.user.findFirstOrThrow({
      where: {
        id: MY_ID,
      },
    });

  const promises = [];

  for (let i = 0; i < 10; i++) {
    console.log("Iteration: ", i);
    promises.push(findUserCall());
  }

  await Promise.all(promises);

  console.log("find first tests done");
};

theTest().then(() => {});
