const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, () => {
    console.log("Sunucu başlatıldı.")
})

app.get('/', (req, res) => {
    res.render('index')
})