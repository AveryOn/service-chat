import vine from '@vinejs/vine'

export const loginBodyValidate = vine.compile(vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8),
}))