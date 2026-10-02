# Especificação de Design Frontend: Its educação Landing Page

## 1. Design System & Estética Visual

### Paleta de Cores
- **Fundo Principal (Primary Background):** Preto Espacial Profundo / Slate Escuro (`#0B0F17` / `#0D1117`)
- **Fundo Secundário (Secondary Background):** Azul Marinho Escuro / Azul Noturno (`#111827` / `#161F30`)
- **Acento Principal (Accent Primary):** Azul Elétrico (`#3B82F6` / `#60A5FA`)
- **Brilho de Acento (Accent Glow):** Glow Neomórfico Ciano/Azul (`rgba(59, 130, 246, 0.4)`)
- **Texto Principal:** Branco de Alto Contraste (`#F9FAFB`)
- **Texto Secundário:** Cinza/Slate Suave (`#9CA3AF`)
- **Bordas e Divisores:** Slate Translucido Discreto (`rgba(255, 255, 255, 0.1)`)

### Tipografia
- **Família Tipográfica:** `Inter` ou `Plus Jakarta Sans` em todos os pesos (Light 300, Regular 400, Medium 500, Semi-Bold 600, Bold 700).
- **Títulos (Headings):** Espaçamento de letras justo (`tracking-tight`), alto impacto e texto branco de elevado contraste.
- **Corpo de Texto (Body):** Sans-serif limpa e legível, com altura de linha espaçosa (`leading-relaxed`).

### Efeitos Visuais e Animações
- **Elementos Glassmorphic:** Fundos translúcidos com efeito de desfoque/blur (`backdrop-blur-md bg-slate-900/60 border border-white/10`).
- **Ritmo de Contraste Alternado:** Transições suaves entre seções em preto profundo e seções com gradiente marinho para manter o engajamento na rolagem.
- **Scroll Reveal:** Animações de entrada suaves (fade-in e slide-up) disparadas ao entrar no viewport (`framer-motion` ou Intersection Observer).
- **Estados Interativos:** Efeito zoom em imagens ao passar o mouse (hover-zoom), transições de cor suaves e leve efeito de escala em cards e botões de CTA.

---

## 2. Detalhamento Estrutural das Seções da Página

### 2.1. Cabeçalho de Navegação Fixo (Sticky Navigation Header)
- **Layout:** Barra fixa de largura total com contêiner responsivo (`max-w-7xl mx-auto`).
- **Estados:**
  - *Topo da Página:* Totalmente transparente.
  - *Após Rolagem (Scrolled):* Transição glassmorphic (`bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg`).
- **Alinhamento à Esquerda:** Logo da marca (`VELOCITY GROWTH CO`) em tipografia marcante e ícone estilizado.
- **Alinhamento Central:** Links de navegação (`Workshop`, `Instructor`, `Pricing`, `Contact`) com efeito suave de sublinhado ao passar o mouse.
- **Alinhamento à Direita:** Botão de ação principal (`Login` / `Dashboard`).
- **Comportamento Mobile:** Recolhe em uma gaveta full-screen ou menu lateral slide-over acionado por um botão hambúrguer.

### 2.2. Seção Hero Animada
- **Composição Tipográfica:** Título principal impactante ("TURN YOUR PRODUCT INTO A GROWTH ENGINE") com texto em gradiente e animação de desfoque para nitidez na entrada.
- **Mídia Hero:** Interface de alta fidelidade exibindo métricas de crescimento ou sessão de planejamento estratégico, emoldurada com bordas arredondadas e brilho sutil (`rounded-2xl border border-blue-500/20 shadow-2xl`).
- **Chamada para Ação Principal (CTA):** Botão com brilho neon, expansão suave no hover e efeito de refração de luz ("START BUILDING NOW ➔").
- **Letreiro Infinito (Marquee Ticker):** Banner contínuo de borda a borda rodando logo abaixo do hero com efeito de rolagem contínua:
  `✦ FROM ZERO TO PRODUCT-MARKET FIT ✦ BUILD PRODUCTS PEOPLE ACTUALLY WANT ✦ SCALE YOUR ENGINE`

### 2.3. Seção de Missão e Proposta de Valor
- **Layout em Grade:** Layout assíncrono de 2 colunas.
- **Elementos Visuais:** Fotografia de alta resolução mostrando a equipe colaborando na estratégia de crescimento com sobreposição de gradientes escuros.
- **Estruturação do Conteúdo:** Parágrafos divididos com foco no contraste entre o problema e a solução (sistemas baseados em dados vs. achismos).

---

## 3. DETALHAMENTO PROFUNDO: Seção de Credibilidade do Instrutor ("CONHEÇA SEUS INSTRUTORES")

Esta seção é a principal âncora de autoridade e conversão da página. Utiliza um layout assimétrico de 2 colunas projetado para maximizar prova social e credibilidade.

### 3.1. Arquitetura do Grid e Layout
- **Layout Desktop:** Grid responsivo de 2 colunas (`grid-cols-1 lg:grid-cols-12 gap-12 items-start`).
  - **Coluna da Esquerda (5 Colunas):** Card de Mídia / Foto Fixa (Sticky).
  - **Coluna da Direita (7 Colunas):** Biografia Detalhada, Grid de Métricas, Filosofia e Selos de Autoridade.

### 3.2. Coluna da Esquerda: Card de Perfil Fixo (Sticky Profile Card)
- **Comportamento Sticky:** Mantém a foto do instrutor fixada na tela enquanto o usuário rola o texto da biografia na direita (`lg:sticky lg:top-28`).
- **Tratamento da Imagem:**
  - Retrato de alta resolução com colorização e tratamento escuro profissional.
  - Cantos bastante arredondados (`rounded-2xl` ou `rounded-3xl`).
  - Borda sutil com brilho azul no hover (`border border-blue-500/30 hover:border-blue-500/60 transition-all`).
  - Gradiente escuro sutil na parte inferior da imagem para garantir contraste.
- **Tag Flutuante (Badge):** Ícone/pílula flutuante sobreposta à imagem indicando a função (ex: `✦ Cardiologista & Ginecologista`).

### 3.3. Coluna da Direita: Narrativa de Credibilidade
- **Tag da Seção:** Pílula em caixa alta (`CONHEÇA SEUS INSTRUTORES`) com texto azul elétrico e fundo azul translúcido suave.
- **Nome e Título do Instrutor:**
  - Título H2: Nome em tipografia em negrito (ex: `Marcus Chen`).
  - Subtítulo: Cargo Principal (ex: `Cardiologista`).

- **Grid de Métricas de Destaque (Prova Social Rápida):**
  - Micro-grid horizontal ou de 3 colunas exibindo conquistas numéricas chave:
    - `12+ Anos` de Experiência
    - `0 a 10M+` Usuários Escalados
    - `200+` Founders Atendidos
    - `3.000+` Alunos Formados
  - **Design do Card de Métrica:** Blocos escuros minimalistas com números destacados em azul elétrico (`text-3xl font-bold text-blue-400`) e rótulos curtos em cinza suave (`text-xs uppercase tracking-wider`).

- **Narrativa da Biografia (Storytelling):**
  - **Parágrafo 1 (Histórico):** Biografia em primeira pessoa enfatizando resultados práticos em vez de teoria (ex: primeiros contratados de crescimento em startups unicórnio, liderança de times de produto).
  - **Parágrafo 2 (A Insight Principal / Filosofia):** Caixa de destaque ou citação que enfatiza a visão central:
    > *"A maioria das falhas de produto não é sobre a ideia — é sobre execução. Motores de crescimento sustentáveis e repetíveis vencem a sorte todas as vezes."*
  - **Parágrafo 3 (A Proposta de Valor):** Explicação sobre o que o curso entrega — sem enrolação, frameworks práticos, modelos mentais.

- **Logos de Autoridade e Empesas (Social Proof Banner):**
  - Linha com logos monocromáticos e suavizados de empresas e accelerators por onde o instrutor passou ou prestou consultoria.

---

## 4. Grid de Visão Geral do Currículo (Curriculum Grid)
- **Layout:** Grid de cards escalonados ou lista interativa de módulos.
- **Estilização dos Cards:** Fundo glassmorphic (`bg-slate-900/50 hover:bg-slate-900/80 transition-colors border border-white/5 hover:border-blue-500/40`).
- **Interatividade:** Efeito de hover-zoom nas miniaturas dos módulos e marcadores explicativos expansíveis.

## 5. Destaque de Depoimento (Testimonial Spotlight)
- **Layout:** Seção de citação em largura total com fundo escuro e iluminação ambiente.
- **Elementos:**
  - Ícone decorativo de aspas gigante e discreto (`"`).
  - Depoimento de alto impacto (ex: *"Fomos de 5.000 para 150.000 usuários ativos em 6 meses. Retorno de 1000x sobre o valor do ingresso."*).
  - Foto do participante em avatar circular com borda iluminada.
  - Nome, Cargo e Empresa (`Sarah Okonkwo, Founder da StreamKit`).

## 6. Carrosel de feedbacks e fotos dos cursos
- **Layout** Carrosel simples com fotos e fotos dos feedbacks dos cursos
- **Elementos** Fotos nas pastas de Feedback e Fotos.
  - Devem ter um arredondamento e sombra

## 7. Rodapé (Footer)
- **Layout:** Rodapé de múltiplas colunas em fundo preto profundo.
- **Conteúdo:** Resumo da marca, aviso com a data e local do próximo evento (`NEXT WORKSHOP: MARCH 15-16 • SAN FRANCISCO & VIRTUAL`), links legais (`Privacy`, `Terms`, `Refund Policy`) e direitos autorais.