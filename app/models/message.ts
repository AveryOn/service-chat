import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import Chat from '#models/chat';
import User from '#models/user';

export default class Message extends BaseModel {
    @column({ isPrimary: true })
    declare id: number;

    @column()
    declare content: string;

    @column()
    declare fromUserId: number;

    @column()
    declare toUserId: number;

    @column()
    declare chatId: number;

    @column()
    declare edited: boolean;

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime;

    @belongsTo(() => Chat)
    declare chat: BelongsTo<typeof Chat>;

    @belongsTo(() => User)
    declare fromUser: BelongsTo<typeof User>;

    @belongsTo(() => User)
    declare toUser: BelongsTo<typeof User>;
}