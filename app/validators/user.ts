import { Database } from '@adonisjs/lucid/database'
import vine from '@vinejs/vine'

export const valideUserCreate = vine.compile(vine.object({
    fullName: vine.string().minLength(3),
    email: vine.string().email().unique(async (db: Database, value: string, _) => {
        const email = await db.query().select('email').from('users').where('email', value).first();
        if(email) return false;
        else return true;
    }),
    password: vine.string().minLength(8),
}))