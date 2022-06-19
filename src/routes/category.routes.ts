import CategoriesRepository from '@repositories/CategoriesRepository'
import { response, Router } from 'express'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.get('/', (_, res) => {
    const list = categoriesRepository.list()
    return res.json(list)
})

categoriesRoutes.post('/', (req, res) => {
    const { name, description }: { name: string; description: string } =
        req.body

    const categoryAlreadyExists = categoriesRepository.findByName(name)

    if (categoryAlreadyExists)
        return res.status(400).json({ error: 'Category already exists' })

    categoriesRepository.create({ name, description })

    return res.status(201).send()
})

export default categoriesRoutes
