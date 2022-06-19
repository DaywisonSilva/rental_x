import Category from '@model/Category'

interface ICreateCategoryDTO {
    name: string
    description: string
}

class CategoriesRepository {
    private categories: Category[]

    constructor() {
        this.categories = []
    }

    create({ name, description }: ICreateCategoryDTO): void {
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
