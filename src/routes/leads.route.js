import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Router } from "express";
import { sendEmail } from '../helpers/email.js';

const router = Router()

router.post('/leads', async (req, res) => {
  console.log('calling the endpoint')
  const { name, company, email, phone } = req.body;

  console.log('this is the body', req.body)

  try {
    const newLead = await prisma.lead.create({
      data: {
        name,
        company,
        email,
        phone,
      },
    });

    if(newLead) {
      await sendEmail({
        to: email,
        subject: 'Bienvenido a raco',
        text: 'Confirmation link is provided in the email.',
        html: `<p>Felipe, tienes un nuevo lead ${email}</p>`,
      });
    }

    res.status(201).json({ message: 'Lead created successfully.', data: newLead });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Failed to create lead.' });
  }
});

export default router;

