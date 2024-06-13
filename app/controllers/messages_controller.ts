import type { HttpContext } from '@adonisjs/core/http'

export default class MessagesControllersController {
    async store({ request, response, auth }: HttpContext) {
        try {
            await auth.authenticate();
        } catch (err) {
            response.abort({ error: err });
        }
    }
}