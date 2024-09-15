import { migrate }  from 'drizzle-orm/node-postgres/migrator';
import db from './dbConnect';

async function migrateData() {
  await migrate(await db, { migrationsFolder: './drizzle' });
  console.log('Database migrated successfully');
  process.exit(0);
}

migrateData().catch((err) => {
  console.log(err);
  process.exit(0);
});
