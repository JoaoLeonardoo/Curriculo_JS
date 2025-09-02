[index0.html](https://github.com/user-attachments/files/22102037/index0.html)
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículo Interativo - João Leonardo</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        :root {
            --primary-color: #2D6B5F;
            --secondary-color: #4B8673;
            --background-color: #F4F7F6;
            --text-color: #333;
            --card-bg: #FFFFFF;
            --border-radius: 12px;
            --box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--background-color);
            color: var(--text-color);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }

        .curriculum-container {
            background-color: var(--card-bg);
            padding: 40px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            max-width: 900px;
            width: 100%;
            box-sizing: border-box;
            text-align: left;
            margin-top: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .header h1 {
            color: var(--primary-color);
            font-size: clamp(2em, 6vw, 3em);
            margin-bottom: 5px;
        }

        .header p {
            font-size: clamp(0.9em, 2vw, 1.1em);
            color: #666;
            margin: 0;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 10px;
            flex-wrap: wrap;
        }

        .contact-info a {
            color: var(--secondary-color);
            text-decoration: none;
            font-size: clamp(0.8em, 1.8vw, 1em);
            transition: color 0.3s ease;
        }

        .contact-info a:hover {
            color: var(--primary-color);
        }

        .section {
            margin-bottom: 30px;
        }

        .section-title {
            color: var(--primary-color);
            font-size: clamp(1.2em, 3vw, 1.8em);
            border-bottom: 2px solid var(--secondary-color);
            padding-bottom: 5px;
            margin-bottom: 20px;
        }

        .item-header {
            background-color: var(--background-color);
            padding: 15px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .item-header:hover {
            background-color: #e8ebea;
        }

        .item-header h3 {
            font-size: clamp(1em, 2.5vw, 1.4em);
            color: var(--text-color);
            margin: 0;
        }

        .item-header span {
            font-size: clamp(0.8em, 1.8vw, 1em);
            color: #666;
        }

        .item-details {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
            padding: 0 15px;
        }
        
        .item-details.active {
            max-height: 500px; /* Valor grande o suficiente para acomodar o conteúdo */
            padding: 15px;
        }

        .item-details ul {
            padding-left: 20px;
            margin: 0;
        }
        
        .item-details ul li {
            line-height: 1.6;
            margin-bottom: 5px;
        }
        
        .skills-list, .courses-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-item, .course-item {
            background-color: var(--secondary-color);
            color: #fff;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: clamp(0.8em, 1.8vw, 0.9em);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .item-toggle-icon {
            font-size: 1.5em;
            transform: rotate(0deg);
            transition: transform 0.3s ease;
        }

        .item-toggle-icon.rotated {
            transform: rotate(180deg);
        }
    </style>
</head>
<body>
    <div class="curriculum-container">
        <div class="header">
            <h1>João Leonardo RS</h1>
            <p>Fortaleza, CE | +55 85 9 9602-4008 | jotaleo.ce3@gmail.com</p>
            <div class="contact-info">
                <a href="https://linkedin.com/in/jl-rodrigues/" target="_blank">LinkedIn</a>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Objetivo Profissional</h2>
            <p>
                Buscando uma oportunidade como **estagiário de desenvolvimento** para aplicar e expandir meus conhecimentos práticos em **Python, JavaScript e C**, adquiridos em projetos acadêmicos e experiências de freelancing. Tenho interesse em contribuir com minha proatividade e habilidades de resolução de problemas, aprendendo com uma equipe de desenvolvimento experiente para criar soluções inovadoras.
            </p>
        </div>

        <div class="section" id="experience-section">
            <h2 class="section-title">Experiência</h2>
            <!-- Experiências serão inseridas aqui pelo JS -->
        </div>

        <div class="section" id="education-section">
            <h2 class="section-title">Formação</h2>
            <!-- Formações serão inseridas aqui pelo JS -->
        </div>
        
        <div class="section" id="skills-section">
            <h2 class="section-title">Competências</h2>
            <ul class="skills-list">
                <!-- Competências serão inseridas aqui pelo JS -->
            </ul>
        </div>
        
        <div class="section" id="courses-section">
            <h2 class="section-title">Cursos e Certificações</h2>
            <ul class="courses-list">
                <!-- Cursos e certificações serão inseridos aqui pelo JS -->
            </ul>
        </div>
    </div>

    <script>
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
                    title: "Desenvolvedor Frontend (Freelance)",
                    company: "Site de Academia",
                    period: "Julho de 2025 - Presente",
                    details: [
                        "Desenvolvimento de funcionalidades para aplicações web, com interface e interatividade criadas do zero utilizando HTML5, CSS3 e JavaScript.",
                        "Manutenção e correção de bugs, garantindo a integração sem conflitos com serviços externos (WhatsApp e Google Maps).",
                        "Participação em todas as fases do projeto, desde a concepção do design (UX/UI) até a implementação e publicação.",
                        "Colaboração com o cliente, traduzindo necessidades de negócio em soluções de código."
                    ]
                },
                {
                    title: "Estagiário de TI",
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

            // Função para renderizar as seções colapsáveis
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
            
            // Função para renderizar listas simples de itens
            const renderList = (items, parentElement, itemClass) => {
                items.forEach(item => {
                    const li = document.createElement('li');
                    li.classList.add(itemClass);
                    li.textContent = item;
                    parentElement.appendChild(li);
                });
            };

            // Renderiza as seções
            renderSection(data.experience, experienceSection, true);
            renderSection(data.education, educationSection, false);
            renderList(data.skills, skillsList, 'skill-item');
            renderList(data.courses, coursesList, 'course-item');
        });
    </script>
</body>
</html>
