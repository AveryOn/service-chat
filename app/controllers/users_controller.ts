import type { HttpContext } from '@adonisjs/core/http';
import { valideUserCreate } from '#validators/user';
import User from '#models/user';

export default class UsersControllersController {
    // Создание пользователя
    async store({ request, response }: HttpContext) {
        try {
            const rawBody = request.only(['email', 'password', 'fullName']);
            const valideData = await valideUserCreate.validate({ ...rawBody });
            const user = await User.create({ ...valideData });
            const token = await User.accessTokens.create(user);
            response.send({ user, token });
        } catch (err) {
            response.abort({ error: err });
        }
    }

}