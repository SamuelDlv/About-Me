
const projects = [
  {
    nome: "FarmaControl",
    resumo: "Sistema de gestão de estoque para farmácias, desenvolvido como Projeto Integrador em Engenharia da Computação.",
    descricaoCompleta: "O FarmaControl centraliza o gerenciamento de produtos, lotes, validade, movimentações, compras, fornecedores, usuários e relatórios. O projeto também explora previsão de demanda a partir do histórico de movimentações, reunindo desenvolvimento web, banco de dados, engenharia de software e segurança.",
    tags: ["Python", "Flask", "MySQL", "REST API", "JavaScript"],
    destaques: [
      "Estruturei backend e frontend separados, com API REST e regras de negócio organizadas por módulos",
      "Modelei o controle de estoque com rastreabilidade por lote e data de vencimento",
      "Implementei autenticação, níveis de acesso e armazenamento de senhas com bcrypt",
      "Desenvolvi um módulo de previsão de demanda baseado no histórico de movimentações"
    ],
    github: "https://github.com/SamuelDlv/FarmaControl",
    demo: ""
  },
  {
    nome: "Bibliotheca",
    resumo: "Sistema pessoal para organizar leitura, anotações, citações, autores, vocabulário e listas de livros.",
    descricaoCompleta: "O Bibliotheca nasceu de uma necessidade real do meu próprio fluxo de estudo: reunir biblioteca, anotações e acompanhamento de leitura em um único sistema. A aplicação evoluiu para incluir diário de leitura, vocabulário, perguntas abertas, relações entre autores e uma wishlist com histórico de preços.",
    tags: ["Python", "Flask", "MySQL/MariaDB", "JavaScript"],
    destaques: [
      "Conectei uma interface web a um backend Flask por API",
      "Modelei diferentes tipos de informação de leitura e suas relações",
      "Criei busca para biblioteca, anotações e vocabulário",
      "Desenvolvi o projeto a partir de necessidades reais do meu próprio método de estudo"
    ],
    github: "https://github.com/SamuelDlv/Bibliotheca",
    demo: ""
  },
  {
    nome: "FrostFinance",
    resumo: "Aplicação web local para organizar finanças, com dashboard, transações, metas, orçamentos e relatórios.",
    descricaoCompleta: "O FrostFinance é uma aplicação pessoal criada para praticar desenvolvimento web completo, modelagem de dados e organização de backend. O sistema reúne transações, parcelamentos, lançamentos recorrentes, metas financeiras, orçamentos por categoria e relatórios.",
    tags: ["Python", "Flask", "MySQL", "Jinja2", "JavaScript"],
    destaques: [
      "Desenvolvi backend e interface sem framework de frontend ou etapa de build",
      "Modelei transações, parcelamentos, recorrências, metas e orçamentos em banco relacional",
      "Criei relatórios anuais e por categoria",
      "Estruturei o projeto para execução local e configuração por .env"
    ],
    github: "https://github.com/SamuelDlv/Finance",
    demo: ""
  },
  {
    nome: "Better Organized",
    resumo: "Sistema desenvolvido como TCC do ensino médio para acompanhar computadores e equipamentos dos laboratórios da escola.",
    descricaoCompleta: "Desenvolvi o Better Organized em 2023 para resolver um problema concreto da escola: acompanhar máquinas, localização por baia e situações como funcionamento, defeitos e manutenção. O repositório preserva a versão original e uma versão posteriormente revisada, permitindo acompanhar minha evolução técnica.",
    tags: ["PHP", "MySQL/MariaDB", "HTML", "CSS"],
    destaques: [
      "Desenvolvi o projeto completo como Trabalho de Conclusão de Curso em 2023",
      "Modelei o gerenciamento de computadores, equipamentos e ocorrências dos laboratórios",
      "Mantive versões diferentes para registrar a evolução da implementação",
      "O projeto representa uma etapa inicial da minha trajetória prática em desenvolvimento"
    ],
    github: "https://github.com/SamuelDlv/Tcc-ensino-medio",
    demo: ""
  }
];

const skills = [
  {
    categoria: "Linguagens",
    items: ["Python", "JavaScript", "PHP", "HTML", "CSS", "SQL", "Java"]
  },
  {
    categoria: "Frameworks & Bibliotecas",
    items: ["Flask", "Jinja2", "PyMySQL", "bcrypt", "Spring Boot"]
  },
  {
    categoria: "Ferramentas & Desenvolvimento",
    items: ["Git", "GitHub", "REST API", "VS Code", "Docker", "Postman"]
  },
  {
    categoria: "Banco de Dados",
    items: ["MySQL", "MariaDB", "Modelagem relacional"]
  },
  {
    categoria: "Pacote Office",
    items: ["Word", "Excel", "PowerPoint"]
  }
];

const disciplinas = [
  
  {
    nome: "Introdução à Programação",
    semestre: 1, periodo: "2024/1", area: "tecnica",
    ementa: "Desenvolvimento de algoritmos para solução de problemas. Variáveis, constantes, tipos, operadores e expressões. Algoritmos estruturados. Comandos sequenciais. Entrada e saída. Comando condicional. Laços de repetição. Sub-rotinas."
  },
  {
    nome: "Lógica Computacional",
    semestre: 1, periodo: "2024/1", area: "tecnica",
    ementa: "Introdução à computação e sua história. Funcionamento e conceitos fundamentais de hardware e software. Cálculo proposicional, lógica de primeira ordem, conjuntos, relações, funções, ordens parciais e totais, álgebra booleana e estruturas algébricas."
  },
  {
    nome: "Desenho Técnico Computacional",
    semestre: 1, periodo: "2024/1", area: "exatas",
    ementa: "Desenho técnico auxiliado por computador. Traços, retas, letreiros e papel. Instrumentos, legendas, dobras e normas. Escalas. Projeções de peças: vistas e rotação de faces oblíquas. Cotas. Tolerâncias e símbolos."
  },

  {
    nome: "Construção de Algoritmos e Programação",
    semestre: 2, periodo: "2024/2", area: "tecnica",
    ementa: "Implementação de algoritmos com tomada de decisão, repetição, vetores e matrizes. Funções e bibliotecas. Registros. Manipulação de arquivos em disco. Algoritmos recursivos."
  },
  {
    nome: "Interação Humano-Computador",
    semestre: 2, periodo: "2024/2", area: "tecnica",
    ementa: "Usabilidade de sistemas interativos: requisitos e métricas. Diretrizes, princípios e teorias sobre IHC. Projeto de interfaces: menus, formulários, diálogos, ícones, gráficos e ajuda online. Interfaces para web. Avaliação de interfaces."
  },
  {
    nome: "Cálculo I",
    semestre: 2, periodo: "2024/2", area: "exatas",
    ementa: "Estudo das funções de uma variável real. Limite e continuidade. Derivação e suas aplicações. Integrais."
  },

  {
    nome: "Estrutura de Dados I",
    semestre: 3, periodo: "2025/1", area: "tecnica",
    ementa: "Funções recursivas. Alocação estática versus alocação dinâmica. Ponteiros. Implementação e uso de pilhas, filas e listas estáticas e dinâmicas."
  },
  {
    nome: "Programação Orientada a Objeto",
    semestre: 3, periodo: "2025/1", area: "tecnica",
    ementa: "Classes e objetos. Atributos, funções e comportamento. Encapsulamento, herança, polimorfismo e reusabilidade. Visibilidade de atributos e funções. Herança, polimorfismo e sobrecarga em Java. Tratamento de exceção. Pacotes básicos da linguagem. Acesso a banco de dados. Interface gráfica e aplicações para a internet."
  },
  {
    nome: "Sistemas Operacionais",
    semestre: 3, periodo: "2025/1", area: "tecnica",
    ementa: "Fundamentos de sistemas operacionais. Estruturas de computadores e de sistemas operacionais. Gerenciamento de processos. Escalonamento de processador. Sincronização de processos concorrentes. Deadlocks. Gerenciamento de memória. Memória virtual. Sistema de arquivos. Entrada e saída. Armazenamento secundário."
  },
  {
    nome: "Cálculo II",
    semestre: 3, periodo: "2025/1", area: "exatas",
    ementa: "Aplicações de integrais. Sequências e séries numéricas. Funções de várias variáveis reais. Limites. Derivadas parciais. Integrais duplas. Transformações de coordenadas. Integrais triplas."
  },
  {
    nome: "Física I",
    semestre: 3, periodo: "2025/1", area: "exatas",
    ementa: "Sistema de medidas, conversão de unidades e análise dimensional. Movimento em uma, duas e três dimensões. Leis de Newton. Energia cinética e trabalho. Energia potencial e conservação de energia. Centro de massa e momento linear. Rotação, rolamento, torque e momento angular."
  },

  {
    nome: "Estrutura de Dados II",
    semestre: 4, periodo: "2025/2", area: "tecnica",
    ementa: "Árvores B, AVL e preto-e-vermelho. Implementação de árvores. Algoritmos de pesquisa e ordenação. Heaps. Tabelas hash. Tipos abstratos de dados. Organização de arquivos."
  },
  {
    nome: "Redes de Computadores",
    semestre: 4, periodo: "2025/2", area: "tecnica",
    ementa: "Comunicação de dados. Topologias. Modelo OSI. Protocolos de rede e TCP/IP. Tecnologias de transmissão. Sistemas orientados e não orientados a conexão. Camadas de enlace e de rede. Roteadores, gateways e firewall. Servidores de autenticação, web, DNS e arquivos. Avaliação de desempenho: teoria das filas, cadeias de Markov e monitoração."
  },
  {
    nome: "Cálculo III",
    semestre: 4, periodo: "2025/2", area: "exatas",
    ementa: "Campos vetoriais. Integrais de linha. Teoremas de Green, Gauss e Stokes. Equações diferenciais de 1ª e 2ª ordem. Transformadas de Laplace."
  },
  {
    nome: "Geometria e Álgebra Linear",
    semestre: 4, periodo: "2025/2", area: "exatas",
    ementa: "Tipos de matrizes e operações com matrizes. Determinante e matriz inversa. Sistemas de equações lineares. Espaços vetoriais. Bases e dimensão. Transformações lineares. Operações com vetores, produto escalar, vetorial e misto. Mudança de bases. Retas e planos. Distâncias e áreas."
  },
  {
    nome: "Física II",
    semestre: 4, periodo: "2025/2", area: "exatas",
    ementa: "Estudo do comportamento dos fluidos, da óptica geométrica, das oscilações, das ondas em meios elásticos e das ondas sonoras. Aborda também os fundamentos da termodinâmica, as propriedades térmicas e moleculares da matéria, a teoria cinética dos gases e a entropia. Inclui experimentos para observar e analisar qualitativamente os fenômenos físicos estudados."
  },

  {
    nome: "Engenharia de Software",
    semestre: 5, periodo: "2026/1", area: "tecnica",
    ementa: "Conceitos fundamentais da engenharia de software. Engenharia de sistemas e de requisitos. Análise e especificação de requisitos. Modelos do sistema. Processo de software e modelos de processo. Planejamento e gerência de projetos. Garantia e controle da qualidade. Gerência de configuração. Projeto, implementação e testes. Entrega e manutenção. Verificação e validação."
  },
  {
    nome: "Modelagem de Banco de Dados",
    semestre: 5, periodo: "2026/1", area: "tecnica",
    ementa: "Conceitos básicos de banco de dados. Modelos de dados. Modelagem conceitual, lógica e física. Projeto de bancos de dados."
  },
  {
    nome: "Eletricidade Aplicada",
    semestre: 5, periodo: "2026/1", area: "exatas",
    ementa: "Grandezas elétricas e unidades de medida. Circuitos básicos, leis e medidas elétricas. Instrumentos e medidas. Componentes de circuitos. Circuitos série e paralelo em corrente contínua. Leis de Kirchhoff. Procedimentos dos nós e das malhas. Teoremas de Thévenin e Norton. Capacitância. Indutância. Circuitos RC e RL."
  },
  {
    nome: "Sistemas Digitais",
    semestre: 5, periodo: "2026/1", area: "exatas",
    ementa: "Álgebra de Boole e funções booleanas. Implementação de funções com portas lógicas universais. Projeto de circuitos combinacionais: circuitos aritméticos, codificadores e decodificadores, multiplexadores e demultiplexadores. Projeto de circuitos sequenciais: latch, flip-flop, registradores e contadores. Máquina de estados finitos. Linguagem de descrição de hardware VHDL."
  },
  {
    nome: "Cálculo Numérico",
    semestre: 5, periodo: "2026/1", area: "exatas",
    ementa: "" 
  },
  {
    nome: "Física III",
    semestre: 5, periodo: "2026/1", area: "exatas",
    ementa: "Estudo da eletrostática, da Lei de Coulomb, do campo e do potencial elétrico, da Lei de Gauss, dos dielétricos, da polarização, da capacitância e da energia elétrica. Aborda também corrente elétrica, resistência, força eletromotriz e circuitos de corrente contínua. Na área de magnetostática, trata do campo magnético produzido por correntes, da Lei de Biot-Savart, da força magnética, da Lei de Ampère, da Lei de Faraday e da força eletromotriz induzida, incluindo aplicações práticas."
  },

  {
    nome: "Gerenciamento de Banco de Dados",
    semestre: 6, periodo: "2026/2", area: "tecnica",
    ementa: "Linguagens de definição, consulta e manipulação de dados. Sistemas gerenciadores de bancos de dados: arquitetura, gerenciamento de transações, controle de concorrência, recuperação, processamento e otimização de consultas. Bancos de dados distribuídos."
  },
  {
    nome: "Projeto de Software",
    semestre: 6, periodo: "2026/2", area: "tecnica",
    ementa: "Conceitos da análise e projetos estruturados. Fundamentos do desenvolvimento orientado a objetos. Análise orientada a objetos: abstração, encapsulamento, herança, associação e comunicação por mensagens. Modelo de classes e objetos. Projeto orientado a objetos e estratégia de migração da análise para o projeto. Implementação de sistemas. Ferramentas CASE."
  },
  {
    nome: "Probabilidade e Estatística",
    semestre: 6, periodo: "2026/2", area: "exatas",
    ementa: "Distribuição de frequência, tabelas e gráficos. Medidas de posição e dispersão. Introdução à probabilidade. Variáveis aleatórias unidimensionais. Esperança matemática. Distribuições discretas e contínuas. Noções de amostragem. Estimação pontual. Intervalos de confiança e testes de hipóteses. Correlação e regressão."
  },
  {
    nome: "Circuitos Elétricos",
    semestre: 6, periodo: "2026/2", area: "exatas",
    ementa: "Circuitos RLC. Análise de circuitos em regime permanente senoidal. Análise de potência em regime permanente senoidal. Circuitos magnéticos. Transformadores. Motores elétricos."
  }
];

const semestreAtual = 6;

function criarCardProjeto(projeto, index) {
  const tagsHTML = projeto.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  const demoLinkHTML = projeto.demo
    ? `<a href="${projeto.demo}" class="project-card__link" target="_blank" rel="noopener">Demo</a>`
    : "";

  return `
    <article class="project-card">
      <h3 class="project-card__name">${projeto.nome}</h3>
      <p class="project-card__desc">${projeto.resumo}</p>
      <div class="project-card__tags">${tagsHTML}</div>
      <div class="project-card__footer">
        <div class="project-card__links">
          <a href="${projeto.github}" class="project-card__link" target="_blank" rel="noopener">GitHub</a>
          ${demoLinkHTML}
        </div>
        <button class="project-card__more" data-project-index="${index}">
          Ver mais
        </button>
      </div>
    </article>
  `;
}

function renderizarProjetos() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects
    .map((projeto, index) => criarCardProjeto(projeto, index))
    .join("");
}

function criarCategoriaSkill(categoria) {
  const badgesHTML = categoria.items
    .map((item) => `<li class="skill-badge">${item}</li>`)
    .join("");

  return `
    <div class="skill-category">
      <h3 class="skill-category__title">${categoria.categoria}</h3>
      <ul class="skill-category__list">${badgesHTML}</ul>
    </div>
  `;
}

function renderizarSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = skills.map(criarCategoriaSkill).join("");
}

const AREAS = [
  { chave: "tecnica", titulo: "Área técnica", complemento: "programação e TI" },
  { chave: "exatas",  titulo: "Área de exatas", complemento: "matemática e engenharia" }
];

function escaparHTML(texto) {
  return String(texto).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );
}

function criarItemDisciplina(disciplina) {
  const temEmenta = Boolean(disciplina.ementa);

  const corpo = temEmenta
    ? `<p class="disciplina__ementa">${escaparHTML(disciplina.ementa)}</p>`
    : `<p class="disciplina__ementa disciplina__ementa--vazia">Ementa indisponível.</p>`;

  return `
    <li data-area="${disciplina.area}">
      <details class="disciplina">
        <summary class="disciplina__nome">
          <span>${escaparHTML(disciplina.nome)}</span>
          <span class="disciplina__acao" aria-hidden="true"></span>
        </summary>
        ${corpo}
      </details>
    </li>
  `;
}

function criarBlocoSemestre(numero, disciplinasDoSemestre) {
  const emCurso = numero === semestreAtual;

  const marcador = emCurso
    ? `<span class="semestre__badge">cursando</span>`
    : "";

  return `
    <div class="semestre${emCurso ? " semestre--atual" : ""}">
      <p class="semestre__label">
        <span class="semestre__numero">${numero}º semestre</span>
        <span class="semestre__periodo">${escaparHTML(disciplinasDoSemestre[0].periodo)}</span>
        ${marcador}
      </p>
      <ul class="semestre__lista">
        ${disciplinasDoSemestre.map(criarItemDisciplina).join("")}
      </ul>
    </div>
  `;
}

function criarColunaArea(area) {
  const daArea = disciplinas.filter((d) => d.area === area.chave);

  const semestres = [...new Set(daArea.map((d) => d.semestre))].sort((a, b) => a - b);

  const blocos = semestres
    .map((numero) => criarBlocoSemestre(numero, daArea.filter((d) => d.semestre === numero)))
    .join("");

  return `
    <section class="area" data-area="${area.chave}">
      <h4 class="area__titulo">
        <span>${area.titulo}</span>
        <span class="area__complemento">${area.complemento}</span>
      </h4>
      ${blocos}
    </section>
  `;
}

function renderizarDisciplinas() {
  const container = document.getElementById("areasGrid");
  if (!container) return;
  container.innerHTML = AREAS.map(criarColunaArea).join("");
  atualizarContagemDisciplinas();
}

function atualizarContagemDisciplinas() {
  const count = document.getElementById("disciplinasCount");
  if (!count) return;
  const visiveis = document.querySelectorAll("#areasGrid li:not([hidden])").length;
  count.textContent = `${visiveis} disciplinas`;
}

function filtrarDisciplinas(areaSelecionada) {
  document.querySelectorAll("[data-area-filter]").forEach((botao) => {
    const ativo = botao.dataset.areaFilter === areaSelecionada;
    botao.classList.toggle("is-active", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });

  document.querySelectorAll("#areasGrid .area").forEach((area) => {
    area.hidden = areaSelecionada !== "todas" && area.dataset.area !== areaSelecionada;
  });
  atualizarContagemDisciplinas();
}

document.querySelectorAll("[data-area-filter]").forEach((botao) => {
  botao.addEventListener("click", () => filtrarDisciplinas(botao.dataset.areaFilter));
});

const toggleEmentas = document.getElementById("toggleEmentas");

if (toggleEmentas) {
  toggleEmentas.addEventListener("click", () => {
    const todas = document.querySelectorAll("#areasGrid .disciplina");
    const abrindo = toggleEmentas.dataset.estado !== "aberto";

    todas.forEach((item) => { item.open = abrindo; });

    toggleEmentas.dataset.estado = abrindo ? "aberto" : "fechado";
    toggleEmentas.textContent = abrindo ? "Recolher ementas" : "Expandir ementas";
  });
}

const modal = document.getElementById("projectModal");
const modalDialog = modal.querySelector(".modal__dialog");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

let elementoAntesDoModal = null;

function abrirModalProjeto(index) {
  const projeto = projects[index];

  const listaDestaques = projeto.destaques
    .map((item) => `<li>${item}</li>`)
    .join("");

  const demoBotaoHTML = projeto.demo
    ? `<a href="${projeto.demo}" class="btn btn--ghost" target="_blank" rel="noopener">Ver demo</a>`
    : "";

  modalContent.innerHTML = `
    <h3 id="modalTitle">${projeto.nome}</h3>
    <p>${projeto.descricaoCompleta}</p>
    <h4>Destaques técnicos</h4>
    <ul>${listaDestaques}</ul>
    <div class="modal__actions">
      <a href="${projeto.github}" class="btn btn--primary" target="_blank" rel="noopener">Ver repositório</a>
      ${demoBotaoHTML}
    </div>
  `;

  elementoAntesDoModal = document.activeElement;

  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus(); 
  document.addEventListener("keydown", prenderFocoNoModal);
}

function fecharModalProjeto() {
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  document.removeEventListener("keydown", prenderFocoNoModal);

  if (elementoAntesDoModal) {
    elementoAntesDoModal.focus();
    elementoAntesDoModal = null;
  }
}

function prenderFocoNoModal(event) {
  if (event.key !== "Tab") return;

  const focaveis = modalDialog.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (focaveis.length === 0) return;

  const primeiro = focaveis[0];
  const ultimo = focaveis[focaveis.length - 1];

  if (event.shiftKey && document.activeElement === primeiro) {
    event.preventDefault();
    ultimo.focus();
  } else if (!event.shiftKey && document.activeElement === ultimo) {
    event.preventDefault();
    primeiro.focus();
  }
}

document.getElementById("projectsGrid").addEventListener("click", (event) => {
  const botao = event.target.closest("[data-project-index]");
  if (!botao) return;

  const index = Number(botao.dataset.projectIndex);
  abrirModalProjeto(index);
});

modalClose.addEventListener("click", fecharModalProjeto);
modalBackdrop.addEventListener("click", fecharModalProjeto);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
    fecharModalProjeto();
  }
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const estaAberto = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(estaAberto));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches(".nav__link")) {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const secoesObservadas = document.querySelectorAll("main > section[id], .hero[id]");

const observadorDeSecoes = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      const link = document.querySelector(`.nav__link[href="#${entrada.target.id}"]`);
      if (!link) return;

      if (entrada.isIntersecting) {
        document
          .querySelectorAll(".nav__link.is-active")
          .forEach((el) => el.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  },
  {
    
    rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue("--nav-height")} 0px -70% 0px`,
  }
);

secoesObservadas.forEach((secao) => observadorDeSecoes.observe(secao));

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 600);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderizarProjetos();
renderizarSkills();
renderizarDisciplinas();
