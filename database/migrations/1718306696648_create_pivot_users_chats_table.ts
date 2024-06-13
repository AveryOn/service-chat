import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'pivot_users_chats'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id', { primaryKey: true }).notNullable();
            table.integer('user_id').unsigned().references('users.id');
            table.integer('chats_id').unsigned().references('chats.id');
        });
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}