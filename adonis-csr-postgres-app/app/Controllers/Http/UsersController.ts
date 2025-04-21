
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.all()
    return response.json(users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email'])
    const user = await User.create(data)
    return response.status(201).json(user)
  }
}
