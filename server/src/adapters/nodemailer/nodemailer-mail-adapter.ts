import { MailAdapter } from "../mail-adapter";
import { sendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7341993018b0bd",
    pass: "468af5ce7462c2"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: sendMailData){

   await transport.sendMail({
     from: 'Equipe Feedget <oi@feedget.com>',
     to: 'Gustavo dos Anjos <galasdalas50@gmail.com>',
     subject,
     html: body,
   });
   
  }
}