import { v4 as uuidV4 } from 'uuid'

class Specification {
    id?: string

    constructor(
        public name: string,
        public description: string,
        public created_at: Date
    ) {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export default Specification
