import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(cors())         // Разрешает запросы с других доменов (с localhost:3000 на localhost:5000)
app.use(express.json()) // Преобразует JSON из тела запросы в JavaScript объект
                        // Это промежуточные ПО (Middleware), они обрабатывают запрос
                        // До попадания его в основной обработчик

app.use("/api/v1/reviews", reviews) // Подцепим маршруты из другого файла
app.use("*", (req, res) => {        // * - любой маршрут (если никакой другой не подошёл)
    res.status(404).json({error: "Not found"})
})

export default app