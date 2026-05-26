# Contexto do Projeto: Portfólio Gustavo Fermino

Este projeto é o portfólio pessoal de Gustavo Fermino, Desenvolvedor Full-Stack focado em criar soluções eficientes, escaláveis e com design focado em autoridade e luxo. O site atrai clientes de alto valor (como clínicas, escritórios de advocacia e imobiliárias).

## 🛠 Tech Stack
- **Framework:** React + Next.js (App Router / Pages dependendo da estrutura, primariamente usando `'use client'`)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion (fortemente utilizado para interações fluidas, cursores customizados e efeitos 3D)
- **Ícones:** Lucide React

## 🎨 Identidade Visual (Clean e Sóbrio)
O design deve transmitir autoridade, elegância e confiança.
- **Paleta de Cores:** Foco em tons escuros e contrastes elegantes.
  - Fundo principal: Escuro/Preto (`bg-charcoal`, `bg-black`).
  - Textos secundários: Tons metálicos e cinzas (`text-metallic`, `text-gray-300`, `text-gray-400`).
  - Destaques (Accents): Champagne/Dourado suave (`text-champagne`, `border-champagne`).
- **Espaçamento:** Uso generoso de `padding` e `margin` para criar respiro (ex: `py-24`, `max-w-7xl`). Evite UI sobrecarregada ou apertada.
- **Efeitos:** Preferência por bordas sutis (`border-white/[0.05]`), desfoque de fundo (`backdrop-blur-md`) e brilhos contidos (`mix-blend-screen`, `radial-gradient`).

---

## 🏗 Regras de Código (Diretrizes Estritas para a IA)

Ao gerar, refatorar ou sugerir código para este projeto, obedeça rigorosamente às seguintes regras:

### 1. Código Limpo (Clean Code)
- Nomes de variáveis e funções devem ser explícitos e em inglês (ex: `handleScroll`, `isHovered`), embora o conteúdo voltado para o usuário seja em Português.
- Mantenha componentes pequenos e de responsabilidade única. Se um componente passar de 150-200 linhas, avalie dividi-lo.
- Não repita código (DRY). Extraia lógicas complexas para custom hooks e componentes visuais repetitivos para componentes menores.

### 2. Denested Code (Evite Aninhamento Profundo)
- **Early Returns:** Utilize *guard clauses* (retornos antecipados) para lidar com erros ou condições nulas no topo da função. Nunca aninhe a lógica principal de uma função dentro de um bloco `if`.
  - *Ruim:* `if (condicao) { if (outra) { fazAlgo() } }`
  - *Bom:* `if (!condicao) return; if (!outra) return; fazAlgo();`
- Evite ternários encadeados complexos no JSX. Se a renderização condicional ficar complexa, mova-a para uma função externa ou crie um sub-componente.

### 3. Comentários Reservados e Estratégicos
- **NÃO** comente o que o código faz se for óbvio (ex: não escreva `// Renderiza o botão` acima de um `<button>`).
- Use comentários apenas para explicar o **PORQUÊ** de uma decisão técnica, uma regra de negócio complexa ou hacks visuais (ex: `// 'isolate' e 'ring-1' resolvem o vazamento da linha branca nos cantos arredondados`).
- JSDoc ou tipagens TypeScript limpas são preferíveis a comentários em linha.

### 4. Boas Práticas React / Next.js
- Use hooks de forma eficiente e inclua as dependências corretas no `useEffect` e `useCallback`.
- Para imagens, utilize o `<Image>` do `next/image` otimizando sempre as propriedades `sizes`, `fill` e lidando com responsividade.
- Evite dependências excessivas de bibliotecas externas; sempre que possível, resolva problemas de UI usando Framer Motion e Tailwind.

## 📂 Mapa de Componentes Existentes
Para contexto, o projeto já possui a seguinte estrutura arquitetural base:
- `Hero.tsx`: Seção inicial com animações intensas de texto e orbs flutuantes.
- `About.tsx`: Biografia com imagem de perfil otimizada.
- `Portfolio.tsx` / `ProjectCard.tsx` / `LinkPreview.tsx`: Carrossel infinito de projetos com efeito 3D no hover e preview de links.
- `Process.tsx`: Grid de metodologia de trabalho.
- `Contact.tsx`: CTA final focado em conversão via WhatsApp.
- `NavBar.tsx` / `Footer.tsx`: Navegação responsiva (oculta no scroll) e rodapé.
- `CustomCursor.tsx`: Cursor global invertido que reage a links e botões.
- `SmoothScroll.tsx`: 