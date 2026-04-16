export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/gustavofdev/' },
    { name: 'WhatsApp', href: 'https://wa.me/5548992032007' },
  ]

  return (
    <footer className="py-12 border-t border-white/[0.05] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-metallic text-sm font-light">
          © {new Date().getFullYear()} Gustavo Fermino. Todos os direitos reservados.
        </div>
        
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-metallic text-sm hover:text-champagne transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}