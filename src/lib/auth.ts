// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { MongoClient } from "mongodb";

// const mongoClient = new MongoClient(process.env.MONGODB_URI!);

// const mongoDb = mongoClient.db("bazar-dor");

// export const auth = betterAuth({
//   database: mongodbAdapter(mongoDb),

//   emailAndPassword: {
//     enabled: true,
//   },

//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     },

//     github: {
//       clientId: process.env.GITHUB_CLIENT_ID!,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET!,
//     },
//   },
// });



import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is not configured");
}

const mongoClient = new MongoClient(mongoUri);
const mongoDb = mongoClient.db("bazar-dor");

export const auth = betterAuth({
  database: mongodbAdapter(mongoDb),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
