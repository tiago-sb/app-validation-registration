const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5001
const DB_PATH = path.join(__dirname, 'db.json')

// Função utilitária para ler e escrever no arquivo db.json
const readDatabase = () => {
  const raw = fs.readFileSync(DB_PATH)
  return JSON.parse(raw)
}

const writeDatabase = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}

// Rota raiz
app.get('/', (req, res) => {
  res.send('Servidor rodando!')
})

// Listar Usuarios
app.get('/users', (req, res) => {
  res.send(readDatabase())
})

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body
  const db = readDatabase()
  const users = db.users || []

  const user = users.find(u => u.email === email && u.password === password)
  
  if (user) {
    res.json({ message: 'Login bem-sucedido', user })
  } else {
    res.json({ message: `Credenciais inválidas` })
  }
})

// Cadastro
app.post('/register', (req, res) => {
  const { email, password } = req.body
  const db = readDatabase()
  const users = db.users || []

  const userExists = users.some(u => u.email === email)
  
  if (userExists) {
    return res.status(400).json({ message: 'Usuário já cadastrado' })
  }

  const newUser = { id: Date.now(), email, password }
  users.push(newUser)
  db.users = users
  writeDatabase(db)

  res.json({ message: 'Cadastro bem-sucedido', user: newUser })
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})