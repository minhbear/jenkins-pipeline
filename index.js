const express = require('express')
const app = express()

const APP_PORT = 3000
const CONTACT_ROUTE = 'contact'

// A simple server of NodeJs

app.get(`/${CONTACT_ROUTE}`, (req, res) => {
  const info = {
    name: 'Nguyen Quang Nhat Minh',
    email: 'minhbeardev@gmail.com',
    twitter: 'minhbear_dev'
  }

  res.json({
    mes: 'Please contact to information',
    info
  })
})

app.listen(APP_PORT, () => {
  console.log(`Server listening on ${APP_PORT}`)
})
