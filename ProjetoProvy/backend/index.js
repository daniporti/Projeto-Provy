//import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/Users.js';
import bcrypt from 'bcrypt'; // Para hashing de senha
import jwt from 'jsonwebtoken'; // Para criar tokens de autenticação

const app = express();

// Configura o middleware CORS
app.use(cors());
app.use(express.json());

// Endpoint para cadastro de usuários
// routes/auth.js
import express from 'express';
import Cliente from './models/Cliente.js';

const router = express.Router();

router.post('/cadastrocliente', async (req, res) => {
  try {
    const { name, email, cpf, password } = req.body;

    // Verifica se o email ou CPF já está cadastrado
    const existingCliente = await Cliente.findOne({ $or: [{ email }, { cpf }] });
    if (existingCliente) {
      return res.status(400).json({ message: 'Email ou CPF já cadastrado' });
    }

    const cliente = new Cliente({ name, email, cpf, password });
    await cliente.save();

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
});

export default router;


/*mongoose.connect("mongodb+srv://kaua:25042003@cluster0.mkv18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((error) => console.log("Erro ao conectar ao MongoDB", error));

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));*/


mongoose.connect('mongodb+srv://kaua:25042003@cluster0.mkv18.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB Atlas!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas:', err));

app.listen(3000, () => {
   console.log('Servidor rodando na porta 3000');
});
