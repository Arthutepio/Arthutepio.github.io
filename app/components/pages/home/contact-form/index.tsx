'use client'

import { Button } from '@/app/components/button'
import { SectionTitle } from '@/app/components/section-title'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const animProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
}

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch {
      toast.error("Ocorreu um erro ao enviar a mensagem. Por favor tente novamente.")
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-900"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          title="Vamos trabalhar juntos? Entre em contato"
          subtitle="contato"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...animProps}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none"
            {...register('name')}
          />

          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none"
            {...register('email')}
          />

          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[140px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none"
            maxLength={500}
            {...register('message')}
          />

          <Button className="w-max mx-auto mt-6 shadow-button" disabled={isSubmitting}>
            Envia mensagem
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
