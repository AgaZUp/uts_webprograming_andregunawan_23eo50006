
import Route from '@ioc:Adonis/Core/Route'

Route.get('/users', 'UsersController.index')
Route.post('/users', 'UsersController.store')
Route.get('/', async ({ response }) => {
  return response.redirect('/index.html')
})
