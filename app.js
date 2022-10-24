const Express = require("express")
const app = Express()

const PORT = 5000

app.get("/", (req, res) => {
    res.send("How are you?")
})

app.get("/home", (req, res) => {
    res.send("home page")
})

app.get("/about", (req, res) => {
    res.send("About this page")
})

app.get('/:page', (req, res) => {
    console.log(req.params)
    res.send("<h1>Welcome to the unknown page</h1>")
    
})













app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})