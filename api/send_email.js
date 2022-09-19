require('dotenv/config');
const nodemailer = require('nodemailer');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const email_destino = process.env.EMAIL_DESTINO;

export default function handler(req, res) {
  if (req.method === 'POST') {
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

    transport.sendMail(messagem_email, function (err, res) {
      if (err) {
          return res.status(400).json({
          tipo: 'danger',
          mensagem: "Erro: E-mail não enviado com sucesso!"
        })
      };
      console.log(res);
      return res.status(200).json({
        tipo: 'success',
        mensagem: "E-mail enviado com sucesso!"
      });
    });

   
  } else {
    return res.status(403).json({
      mensagem: "Rota não permitida!"
    });
  }
}