import CategoriesRepository from 'modules/cars/repositories/CategoriesRepository'
import CreateCategoryService from '@modules/cars/services/CreateCategoryService'
import { Router } from 'express'

const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.get('/', (_, res) => {
    const list = categoriesRepository.list()
    return res.json(list)
})

categoriesRoutes.post('/', (req, res) => {
    const { name, description }: { name: string; description: string } =
        req.body

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    )
    createCategoryService.execute({ name, description })

    return res.status(201).send()
})

export default categoriesRoutes
