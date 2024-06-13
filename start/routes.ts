/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

router.group(() => {
    router.post('/login', '#controllers/auth_controller.login')
}).prefix('auth');

router.group(() => {
    router.post('/create', '#controllers/users_controller.store');
}).prefix('users');
