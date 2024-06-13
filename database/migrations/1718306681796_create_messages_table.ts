import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'messages'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id', { primaryKey: true }).notNullable();
            table.integer('from_user_id').unsigned().references('users.id');
            table.integer('to_user_id').unsigned().references('users.id');
            table.string('content').notNullable();
            table.integer('chat_id').unsigned().references('chats.id');
            table.boolean('edited').defaultTo(false).notNullable();
            table.timestamp('created_at');
            table.timestamp('updated_at');
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}