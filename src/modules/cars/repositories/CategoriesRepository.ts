import Category from 'modules/cars/model/Category'
import { ICategoriesRepository } from './ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }): void {
        const category = new Category(name, description, new Date())

        this.categories.push(category)
    }

    list(): Category[] {
        return this.categories
    }

    findByName(name: string): Category {
        return this.categories.find(categoryItem => categoryItem.name === name)
    }
}

export default CategoriesRepository
