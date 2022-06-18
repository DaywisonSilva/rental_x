import { Router } from 'express'

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post('/categories', (req, res) => {
    const { name, description }: { name: string; description: string } =
        req.body

    categories.push({ name, description })

    return res.status(201).send()
})

export default categoriesRoutes