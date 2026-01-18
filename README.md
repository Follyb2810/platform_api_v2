```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma migrate reset
rm -rf prisma/migrations
npx prisma generate
npx prisma migrate dev --name init_postgres

npx prisma migrate dev --create-only --name init
npx prisma migrate deploy


npx prisma db pull     # Sync schema from the DB
npx prisma generate    # Regenerate Prisma client
npx prisma studio      # Open GUI to inspect
npx prisma validate    # to validate
npx prisma db push     # Updates the database schema to match your Prisma models without running destructive migrations.
npx prisma db push --preview-feature # Preview changes first

```
# platform_api_v2
