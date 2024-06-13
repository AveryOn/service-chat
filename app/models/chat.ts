import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, hasMany } from '@adonisjs/lucid/orm'
import type { ManyToMany, HasMany } from '@adonisjs/lucid/types/relations';
import User from '#models/user';
import Message from '#models/message';

export default class Chat extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;

    @manyToMany(() => User, { pivotTable: 'pivot_users_chats' })
    declare user: ManyToMany<typeof User>;

    @hasMany(() => Message)
    declare messages: HasMany<typeof Message>;
}