require('dotenv/config');
const express = require('express');
const  cors = require('cors')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const email_destino = process.env.EMAIL_DESTINO;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, surname, telephone, message } = req.body;
  const html = `Nome: ${name}</br>. Sobrenome: ${surname || 'Não definido'}</br>. Email: ${email}</br>. Telefone: ${telephone || 'Não definido'}</br>. Messagem: ${message}</br>`;

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: username,
      pass: password
    }
  });

  const messagem_email = {
    from: username,
    to: email_destino,
    subject: "Mensagem do Website Nessa.js",
    text: `O(a) ${email} te enviou uma mensagem!`,
    html: html
  };

  transport.sendMail(messagem_email, function (err) {
    if (err) return res.status(400).json({
      tipo: 'danger',
      mensagem: "Erro: E-mail não enviado com sucesso!"
    });
  });

  return res.json({
    tipo: 'success',
    mensagem: "E-mail enviado com sucesso!"
  });

});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000 http://localhost:3000");
});
