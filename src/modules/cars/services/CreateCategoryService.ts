import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository'

interface IRequest {
    name: string
    description: string
}

interface ICreateCategryService {
    execute: ({ name, description }: IRequest) => void
}
class CreateCategoryService implements ICreateCategryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error('Category already exists')
        }

        this.categoriesRepository.create({ name, description })
    }
}

export default CreateCategoryService
