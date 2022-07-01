import SpecificationRepository from '@modules/cars/repositories/SpecificationRepository'
import CreateSpecificationService from '@modules/cars/services/CreateSpecificationService'
import { Router } from 'express'

const specificationRouter = Router()

const specificationRepository = new SpecificationRepository()

specificationRouter.post('/', (req, res) => {
    const { name, description } = req.body

    const createSpecificationService = new CreateSpecificationService(
        specificationRepository
    )

    createSpecificationService.execute({ name, description })

    return res.status(201).send()
})

export default specificationRouter
