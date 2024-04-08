# problem with findUnique

1. npm install
2. run `DATABASE_URL=mongodb://path.to/yourdb npx tsx index.ts`


output is:


```
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $and: [ { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, ], }, { }, ], }, }, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, ], }, }, }, { $project: { _id: 1, }, }, ])
find unique tests:
Iteration:  0
Iteration:  1
Iteration:  2
Iteration:  3
Iteration:  4
Iteration:  5
Iteration:  6
Iteration:  7
Iteration:  8
Iteration:  9
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $in: [ "$_id", { $literal: [ "1234", "1234", "1234", "1234", "1234", "1234", "1234", "1234", "1234", "1234", ], }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $project: { _id: 1, }, }, ])
find unique tests done
find first tests:
Iteration:  0
Iteration:  1
Iteration:  2
Iteration:  3
Iteration:  4
Iteration:  5
Iteration:  6
Iteration:  7
Iteration:  8
Iteration:  9
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
prisma:query db.users.aggregate([ { $match: { $expr: { $and: [ { $eq: [ "$_id", { $literal: "1234", }, ], }, { $ne: [ "$_id", "$$REMOVE", ], }, ], }, }, }, { $limit: 1, }, { $project: { _id: 1, }, }, ])
find first tests done
```

it shows that findUnique(AndThrow) batches all 10 queries into a faulty one. findFirst(AndThrow) does not have this problem
