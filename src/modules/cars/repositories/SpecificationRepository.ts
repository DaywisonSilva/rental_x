import Specification from '../model/Specification'
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from './ISpecificationRepository'

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[]

    constructor() {
        this.specifications = []
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification(name, description, new Date())
        this.specifications.push(specification)
    }

    findByName(name: string) {
        return this.specifications.find(
            specification => specification.name === name
        )
    }
}

export default SpecificationRepository
