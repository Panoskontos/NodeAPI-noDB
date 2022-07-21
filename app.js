const express = require('express')
const app = express()

app.use(express.json())

const courses = [
    {id:1, name:"Panos"},
    {id:2, name:"Nikos"},
    {id:3, name:"Loki"},
    {id:4, name:"Thor"},
    {id:5, name:"Zeus"}

]

app.get('/', (req, res) => {
  res.send('hello world!!')
})

app.get('/courses', (req, res) => {
    res.send(courses)
  })

//   give params
// app.get('/courses/:id/:month', (req,res)=>{
//     res.send(req.params)
// })

// query given id
app.get('/courses/:id', (req, res)=>{
    const course = courses.find(c=>c.id === parseInt(req.params.id))
    if (!course) res.status(404).send("course id does not exist")
    res.send(course)
})


// POST
app.post('/courses', (req,res)=>{
    // Input validation
    // Or use Joi module
    if (req.body.name || req.body.name,length <3){
        res.status(400).send("NAme is required and should be min 3 chars")
        return
    }


    const course = {
        id: courses.length+1,
        name:req.body.name
    }
    courses.push(course)
    res.send(course)
})


// PUT 
app.put('/courses/:id', (req,res)=>{
    // See if exist
    const course = courses.find(c=>c.id === parseInt(req.params.id))
    if (!course) res.status(404).send("course id does not exist")
    // Validate input
    // use Joi
    // update objects and Return course
    course.name = req.body.name
    res.send(course)
})

// port
app.listen(3000, ()=>console.log("listening on http://localhost:3000/"))