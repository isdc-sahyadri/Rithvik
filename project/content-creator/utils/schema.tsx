import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData', { length: 255 }).notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug', { length: 255 }).notNull()
});
