import { MessageCircle } from 'lucide-react'

export default function Contact() {
  // Substitui pelo teu número real (DDI + DDD + Número)
  const whatsappNumber = "5548992032007" 
  const message = encodeURIComponent("Olá! Vi o seu portfólio e gostaria de conversar sobre um projeto.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section id="contato" className="py-24 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Vamos conversar?
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Estou disponível para a criação de sites profissionais. 
          Clique no botão abaixo e peça um orçamento sem compromisso no WhatsApp.
        </p>

        <div className="pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
          >
            <MessageCircle size={24} />
            Falar comigo no WhatsApp
          </a>
        </div>
        
        <p className="text-sm text-gray-500">
          Atendendo projetos em Garopaba - SC e remotamente para todo o mundo.
        </p>
      </div>
    </section>
  )
}