/** @type { import("drizzle-kit").Config}*/
export default{
    schema: "./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials: {
        url:'postgresql://neondb_owner:npg_Lswt83jEXPyl@ep-long-mud-a8zshtwo-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
};