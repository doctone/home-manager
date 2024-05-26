const { db } = require("@vercel/postgres");
const { users, homes } = require("../data/seed.js");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);
    await client.sql`DELETE FROM users`;

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedHomes(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "homes" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS homes (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        user_id UUID REFERENCES users(id)
      );
    `;

    console.log(`Created "homes" table`);
    await client.sql`DELETE FROM homes`;

    // Insert data into the "homes" table
    // const insertedHomes = await Promise.all(
    //   homes.map(async (home) => {
    //     return client.sql`
    //     INSERT INTO homes (name, description, user_id)
    //     VALUES (${home.name}, ${home.description}, ${home.user_id})
    //     ON CONFLICT (id) DO NOTHING;
    //   `;
    //   })
    // );

    // console.log(`Seeded ${insertedHomes.length} homes`);

    return {
      createTable,
      // homes: insertedHomes,
    };
  } catch (error) {
    console.error("Error seeding homes:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedHomes(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
  process.exit(1);
});
