export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.05] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-metallic text-sm font-light">
          © {new Date().getFullYear()} Gustavo Fermino. Todos os direitos reservados.
        </div>
        
        <div className="flex gap-8">
          {['LinkedIn', 'GitHub', 'WhatsApp'].map((link) => (
            <a 
              key={link}
              href="#"
              className="text-metallic text-sm hover:text-champagne transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}