import express from 'express'
import categoriesRoutes from '@routes/category.routes'

const app = express()

app.use(express.json())
app.use('/categories', categoriesRoutes)

app.listen(3000, () => console.log('server is running on port 3000'))

app.get('/', (_, res) => {
    return res.send({ message: 'Hello World' })
})
