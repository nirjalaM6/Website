const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static("public")); 

const user = {
    firstName: 'Nirjala',
    lastName: 'Maharjan',
    admin : true,
}

// Get View's
app.get('/', (req, res) => {
  res.render('pages/index', {
      user,
      title: "Home Page"
  })
})
app.get('/contactme', (req, res) => {
  res.render('pages/Contactme', {
      user,
      title: "Contact"
  })

app.get('/aboutme', (req, res) => {
  res.render('pages/aboutme', {
      user,
      title: "About"
  })
})

app.get('/services', (req, res) => {
  res.render('pages/services', {
      user,
      title: "Services"
  })
})

app.get('/projects', (req, res) => {
  res.render('pages/Projects', {
      user,
      title: "Projects"
  })
})
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})