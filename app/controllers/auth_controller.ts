import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user';
import { loginBodyValidate } from '#validators/auth';
import hash from '@adonisjs/core/services/hash';
import { AccessToken } from '@adonisjs/auth/access_tokens';

export default class AuthController {

    async login({ request, response }: HttpContext) {
        try {
            const rawBody = request.only(['email', 'password']);
            const validateBody = await loginBodyValidate.validate({ ...rawBody });
            const user: User = await User.query().select('*').where('email', validateBody.email).firstOrFail();
            const verifiedPassword: boolean = await hash.verify(user.password, validateBody.password);
            if(verifiedPassword !== true) return response.abort({ error: 'uncorrect credentials' });
            const token: AccessToken = await User.accessTokens.create(user); 
            response.send({ user, token });
            
        } catch (err) {
            response.abort({ error: err });
        }
    }
}