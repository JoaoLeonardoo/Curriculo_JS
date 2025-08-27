const data = {
    name: "João Leonardo RS",
    contact: {
        city: "Fortaleza, CE",
        phone: "+55 85 9 9602-4008",
        email: "jotaleo.ce3@gmail.com",
        linkedin: "https://linkedin.com/in/jl-rodrigues/"
    },
    summary: "Estudante de Engenharia de Computação no Instituto Federal do Ceará, com experiência em desenvolvimento de automações, integração de sistemas e gestão de projetos. Possuo um perfil proativo e colaborativo, com habilidades comprovadas em Python, JavaScript, C e metodologias ágeis. Busco uma oportunidade para aplicar meu conhecimento técnico e minhas competências de liderança.",
    experience: [
        {
            title: "Estagiário de pré-vendas",
            company: "Grupo energy telecom",
            period: "AGOSTO DE 2024 - JANEIRO DE 2025",
            details: [
                "Elaboração de automações de atividades de rotina com Python e PowerShell.",
                "Apoio no levantamento de requisitos técnicos e elaboração de propostas comerciais.",
                "Suporte na análise de soluções em infraestrutura de rede, data center e cibersegurança.",
                "Apoio à equipe na organização de documentos técnicos e materiais de pré-vendas."
            ]
        },
        {
            title: "Designer de conteúdo e desenvolvedor",
            company: "Library&Cat",
            period: "MARÇO DE 2023 - DEZEMBRO DE 2024",
            details: [
                "Desenvolvimento e diagramação de site institucional (Google Sites).",
                "Personalização de layouts e melhoria da experiência do usuário.",
                "Criação e tratamento de imagens, banners e elementos visuais.",
                "Colaboração na gestão e identidade visual do Instagram oficial.",
                "Utilização de ferramentas: WordPress, Photoshop, Illustrator, Canvas, Trello.",
                "Conhecimento de startups e metodologias ágeis."
            ]
        },
        {
            title: "Coordenador de equipes",
            company: "BJ TECH",
            period: "AGOSTO DE 2022 - JUNHO DE 2024",
            details: [
                "Coordenação de equipe de suporte técnico voluntário em hardware e software.",
                "Organização das demandas de manutenção e atendimento a usuários.",
                "Apoio em diagnósticos e soluções para computadores, notebooks e tablets.",
                "Desenvolvimento de habilidades de liderança, comunicação e gestão de equipe."
            ]
        }
    ],
    education: [
        {
            institution: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
            degree: "Bacharelado em Engenharia de Computação",
            period: "JANEIRO DE 2025 - JANEIRO DE 2030",
            details: [
                "Em um dos cursos mais concorridos do Ceará, estou aprendendo a desenvolver aplicações e soluções tecnológicas através de projetos práticos e vivências reais.",
                "A grade curricular abrange desde a teoria da computação até o desenvolvimento de hardware e software, preparando para os desafios do mercado, com ênfase em banco de dados relacionais e sistemas distribuídos."
            ]
        },
        {
            institution: "Universidade Federal do Ceará",
            degree: "Curso de Extensão: Desenvolvimento de Aplicações",
            period: "JANEIRO DE 2024 - JANEIRO DE 2025",
            details: [
                "Durante este curso de extensão, adquiri e aprimorei meus conhecimentos em desenvolvimento de aplicações, com foco prático na linguagem de programação Python e suas principais bibliotecas."
            ]
        },
        {
            institution: "EEEP Ícaro De Sousa Moreira",
            degree: "Técnico Profissionalizante: Redes de Computadores",
            period: "JANEIRO DE 2022 - JANEIRO DE 2025",
            details: [
                "Neste curso técnico, obtive uma base sólida em infraestrutura de redes, configuração de equipamentos, segurança cibernética e manutenção de sistemas.",
                "Aprendi a diagnosticar problemas e implementar soluções eficazes em ambientes de rede, com conhecimentos práticos em banco de dados relacionais para gerenciamento de dados de rede."
            ]
        }
    ],
    skills: [
        "Desenvolvimento de automações com Python, JavaScript e C",
        "Conhecimentos de Git e GitHub",
        "Integração de backend e frontend",
        "Criação de conteúdos para Instagram, Facebook, TikTok e LinkedIn",
        "Edição de vídeos em CapCut e imagens em Canvas",
        "Organização de postagens e interação com público",
        "Boa escrita, criatividade e comunicação digital"
    ],
    courses: [
        "ORACLE - JavaScript",
        "ORACLE JAVASCRIPT COM HTML",
        "AWS ACADEMY - AWS CLOUD FOUNDATIONS",
        "SEBRAE - MARKETING DIGITAL",
        "GRUPO VOITTO - POWER BI APLICADO A NEGÓCIOS"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const experienceSection = document.getElementById('experience-section');
    const educationSection = document.getElementById('education-section');
    const skillsList = document.querySelector('.skills-list');
    const coursesList = document.querySelector('.courses-list');
    const renderSection = (items, parentElement, isExperience = false) => {
        items.forEach((item, index) => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add(isExperience ? 'experience-item' : 'education-item');

            const header = document.createElement('div');
            header.classList.add('item-header');
            
            const itemTitle = isExperience ? item.company : item.institution;
            const itemSubtitle = isExperience ? item.title : item.degree;

            header.innerHTML = `
                <div>
                    <h3>${itemTitle}</h3>
                    <p>${itemSubtitle}</p>
                </div>
                <span>${item.period}</span>
            `;

            const details = document.createElement('div');
            details.classList.add('item-details');
            if (item.details && item.details.length > 0) {
                const ul = document.createElement('ul');
                item.details.forEach(detail => {
                    const li = document.createElement('li');
                    li.textContent = detail;
                    ul.appendChild(li);
                });
                details.appendChild(ul);
            }

            header.addEventListener('click', () => {
                details.classList.toggle('active');
            });
            
            itemContainer.appendChild(header);
            itemContainer.appendChild(details);
            parentElement.appendChild(itemContainer);
        });
    };
    const renderList = (items, parentElement, itemClass) => {
        items.forEach(item => {
            const li = document.createElement('li');
            li.classList.add(itemClass);
            li.textContent = item;
            parentElement.appendChild(li);
        });
    };
    renderSection(data.experience, experienceSection, true);
    renderSection(data.education, educationSection, false);
    renderList(data.skills, skillsList, 'skill-item');
    renderList(data.courses, coursesList, 'course-item');
});
