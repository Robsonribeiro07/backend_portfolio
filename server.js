const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
const projects = [
    {
        id: 1,
        Title: "Igniter Timer",
        LinkSite: "https://robsonribeiro07.github.io/Igniter-Timer/",
        Descriptions: "A simple timer app built with React and TypeScript.",
        BannerImage: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1736968249/Ignite_Timer/IgneteTimePhotos/uleefqplibpwwyfqc55p.png",
        VIDEO: "https://res.cloudinary.com/ddrbxo7pj/video/upload/v1737114471/Ignite_Timer/Videos/cw5m6lpd4efqthbe3jms.mkv",
        Techs: ["React", "TypeScript", "Styled Components"],
        MoreDetails: [
            {
                Title: "Home",
                Descriptions: {
                    PT: "Uma aplicação simples e intuitiva de timer que permite aos usuários configurar e gerenciar contagens regressivas ou cronômetros com facilidade. Ideal para manter o foco em atividades como estudos, exercícios, cozinha, ou qualquer tarefa que exija controle do tempo. <br/>  <br/>  <br/>  Com uma interface moderna e funcional, a aplicação oferece funcionalidades como personalização de tempo, notificações sonoras ao término e histórico de uso. Perfeita para quem busca produtividade e organização no dia a dia!",
                    EN: "A simple and intuitive timer application that allows users to set and manage countdowns or stopwatches with ease. Ideal for staying focused on activities such as studying, exercising, cooking, or any task that requires time tracking. <br/ > <br/> <br/> With a modern and functional interface, the application offers features such as time customization, sound notifications at the end and usage history "
                },
                Source: {
                    IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1736968249/Ignite_Timer/IgneteTimePhotos/uleefqplibpwwyfqc55p.png"
                },
                
            },
            {
                Title: "VIDEO HOME PAGE",
                Descriptions: {
                    PT: `O vídeo demonstra o funcionamento da aplicação "Igniter Timer". Nele, o usuário insere o nome de um projeto e a duração do tempo em minutos. Após clicar no botão "Começar", o cronômetro é iniciado, contando o tempo. Ao final, o usuário pausa o cronômetro, encerrando a contagem.`,
                    EN: "A simple and intuitive timer application that allows users to set and manage countdowns or stopwatches with ease. Ideal for staying focused on activities such as studying, exercising, cooking, or any task that requires time tracking. <br/ > <br/> <br/> With a modern and functional interface, the application offers features such as time customization, sound notifications at the end and usage history "
                },
                Source: {
                    VIDEO: "https://res.cloudinary.com/ddrbxo7pj/video/upload/v1737114471/Ignite_Timer/Videos/cw5m6lpd4efqthbe3jms.mkv"
                },
                
            },
            {
                Title: "Timer Page",
                Descriptions: {
                    PT: "A página Timer oferece uma visão detalhada do histórico de temporizadores configurados pelo usuário. Nela, é possível acompanhar o status de cada timer, indicando se foi concluído, interrompido ou ainda está em execução. Cada registro é exibido com a data e hora de criação, permitindo uma análise organizada e precisa do uso do tempo. <br/>  <br/>Com uma interface clara, a página facilita a consulta e gestão dos temporizadores, ajudando o usuário a monitorar sua produtividade e identificar padrões de execução. Ideal para quem busca controle e eficiência em suas atividades diárias.",
                    EN: "The Timer page offers a detailed view of the history of timers configured by the user. Here, you can track the status of each timer, showing whether it has completed, stopped or is still running. Each record is displayed with the date and time of creation , allowing an organized and accurate analysis of time use <br/> <br/>With a clear interface, one page facilitates consultation and management of timers, helping the user to monitor their productivity and identify execution patterns. control and efficiency in your activities daily.",
                },

               Source: {
                 IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1736968250/Ignite_Timer/IgneteTimePhotos/ictmfssfdhbdpazfd3re.png"
               }
            }
        ]
    }
    ,
    {
        id: 2,
        Title: "Projeto Youtube",
        Descriptions: "App de portfólio réplica do YouTube.",
        BannerImage: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737120563/YoutubeImg/plrqkpxz3yu4nci1j4gx.png",
        Techs: ["React JS", "TypeScript", "Styled Components"],
        MoreDetails: [
            {
                Title: "Home",
                Descriptions: {
                    PT: `"A página inicial da réplica do YouTube apresenta um design moderno e funcional, com uma grade de vídeos recomendados, categorias no topo para fácil navegação (como Músicas, Jogos e Educação) e uma barra lateral com atalhos para funções principais, <br/> <br/> como Histórico e Inscrições. O tema escuro proporciona uma experiência visual confortável e elegante, destacando as miniaturas e informações de cada vídeo. sonoras ao término e histórico de uso. Perfeita para quem busca produtividade e organização no dia a dia!"`,
                    EN: "A simple and intuitive timer application that allows users to set and manage countdowns or stopwatches with ease. Ideal for staying focused on activities such as studying, exercising, cooking, or any task that requires time tracking. <br/ > <br/> <br/> With a modern and functional interface, the application offers features such as time customization, sound notifications at the end and usage history "
                },
                Source: {
                    IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737120563/YoutubeImg/plrqkpxz3yu4nci1j4gx.png"
                },
                
            },
            {
                Title: "PAGE SEARCH",
                Descriptions: {
                    PT: `A barra de pesquisa do aplicativo é uma ferramenta central e prática que permite aos usuários encontrar rapidamente o conteúdo desejado. Localizada no topo da interface, ela é projetada para oferecer buscas rápidas e precisas, com suporte para palavras-chave, títulos de vídeos e nomes de criadores.
                    
                    Além disso, a barra de pesquisa conta com sugestões automáticas enquanto o usuário digita, facilitando a descoberta de conteúdos relacionados. Seu design é minimalista, com um ícone de lupa para indicar a funcionalidade e uma caixa de texto intuitiva, tornando a experiência de busca fluida e eficiente.`,
                    EN: "A simple and intuitive timer application that allows users to set and manage countdowns or stopwatches with ease. Ideal for staying focused on activities such as studying, exercising, cooking, or any task that requires time tracking. <br/ > <br/> <br/> With a modern and functional interface, the application offers features such as time customization, sound notifications at the end and usage history "
                },
                Source: {
                    IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737120562/YoutubeImg/ipa5oyrp6kzugcqhapsv.png"
                },
                
            },
            {
                Title: "Page Filter",
                Descriptions: {
                    PT: `A página com filtro de vídeos permite que os usuários refinem suas buscas e descubram conteúdos específicos de forma eficiente. Os filtros estão organizados de maneira clara, permitindo filtrar vídeos por categorias (como Música, Jogos, Tecnologia), duração, data de publicação, relevância e popularidade.

                     <br/> <br/>
                    Os resultados são exibidos em uma grade limpa, com miniaturas atraentes, títulos descritivos e informações detalhadas sobre cada vídeo. Essa funcionalidade proporciona uma experiência personalizada, ajudando os usuários a encontrar exatamente o que procuram.`,
                    EN: "The Timer page offers a detailed view of the history of timers configured by the user. Here, you can track the status of each timer, showing whether it has completed, stopped or is still running. Each record is displayed with the date and time of creation , allowing an organized and accurate analysis of time use <br/> <br/>With a clear interface, one page facilitates consultation and management of timers, helping the user to monitor their productivity and identify execution patterns. control and efficiency in your activities daily.",
                },

               Source: {
                 IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737120562/YoutubeImg/ugt2k3n2kjjgrwu3tlhn.png    "
               }
            },
            {
                Title: "Page Resulter Search",
                Descriptions: {
                    PT: `A página de resultados de pesquisa exibe os vídeos do usuário de forma organizada e intuitiva. Após realizar uma busca, os resultados são apresentados em uma lista ou grade, destacando os vídeos relacionados ao termo pesquisado. Cada vídeo é exibido com sua miniatura, título, descrição curta, número de visualizações e data de publicação, facilitando a identificação do conteúdo desejado.
                    <br/> <br/>

                   Além disso, a página conta com opções para refinar os resultados, permitindo filtrar por data, relevância ou outros critérios específicos. O design é limpo e responsivo, garantindo que o usuário possa navegar pelos resultados de maneira eficiente, independentemente do dispositivo utilizado.
`,
                    EN: "The Timer page offers a detailed view of the history of timers configured by the user. Here, you can track the status of each timer, showing whether it has completed, stopped or is still running. Each record is displayed with the date and time of creation , allowing an organized and accurate analysis of time use <br/> <br/>With a clear interface, one page facilitates consultation and management of timers, helping the user to monitor their productivity and identify execution patterns. control and efficiency in your activities daily.",
                },

               Source: {
                 IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737120563/YoutubeImg/smue0kjjbo2v7dta9ybl.png"
               }
            },
            {
                Title: "Page Login or signup",
                Descriptions: {
                    PT: `A página de login da home é simples e direta, projetada para que o usuário possa acessar sua conta rapidamente. Na parte superior, exibe-se o logo ou nome do serviço. No centro da página, há um formulário com dois campos: um para o login, onde o usuário deve inserir seu nome de usuário, e outro para a senha, com os caracteres ocultos enquanto o usuário digita. Abaixo desses campos, <br/> <br/> há um botão de login para confirmar as informações e acessar a conta. Não há a opção de recuperar a senha, e o único método de entrada disponível é utilizando o nome de usuário e a senha cadastrada. A página é focada em ser clara e eficiente, permitindo um acesso seguro e rápido à conta.
                    `,
                    EN: "The Timer page offers a detailed view of the history of timers configured by the user. Here, you can track the status of each timer, showing whether it has completed, stopped or is still running. Each record is displayed with the date and time of creation , allowing an organized and accurate analysis of time use <br/> <br/>With a clear interface, one page facilitates consultation and management of timers, helping the user to monitor their productivity and identify execution patterns. control and efficiency in your activities daily.",
                },

               Source: {
                 IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737120564/YoutubeImg/o6ikrbsjxse2fhsftodr.png"
               }
            },
            {
                Title: "Page Login or signup",
                Descriptions: {
                    PT: `A página de vídeo exibe um reprodutor integrado com a API do YouTube, permitindo ao usuário assistir vídeos diretamente no site. O vídeo pode ser pausado e, ao retornar à página, ele retoma de onde parou, graças ao rastreamento do progresso pelo YouTube.<br/>  <br/>Os controles do reprodutor incluem play/pause, volume, avanço/retrocesso e tempo de vídeo, além de opções para ajustar a qualidade e a visualização em tela cheia. A experiência é contínua e personalizada, permitindo ao usuário retomar o vídeo facilmente.`,
                    EN: "The Timer page offers a detailed view of the history of timers configured by the user. Here, you can track the status of each timer, showing whether it has completed, stopped or is still running. Each record is displayed with the date and time of creation , allowing an organized and accurate analysis of time use <br/> <br/>With a clear interface, one page facilitates consultation and management of timers, helping the user to monitor their productivity and identify execution patterns. control and efficiency in your activities daily.",
                },

               Source: {
                 IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737120564/YoutubeImg/gy4tqyxdxe4paiupq0pm.png"
               }
            },
            {
                Title: "Page Perfil",
                Descriptions: {
                    PT: `"Bem-vindo ao seu perfil! Aqui você pode gerenciar seu conteúdo, interagir com sua comunidade e personalizar suas preferências. Visualize seus vídeos, analise suas estatísticas de engajamento, e ajuste suas configurações de privacidade. Personalize sua página com uma foto de perfil e uma descrição, e mostre para todos quem você é e o que você compartilha. Explore suas playlists, marque seus vídeos favoritos e fique por dentro das atualizações do seu canal."
                    <br/> <br/>

                    Isso pode ser adaptado dependendo de quais funcionalidades estão disponíveis no seu projeto. Se você tiver mais detalhes sobre o sistema, posso ajustar a descrição ainda mais!`,
                    EN: "The Timer page offers a detailed view of the history of timers configured by the user. Here, you can track the status of each timer, showing whether it has completed, stopped or is still running. Each record is displayed with the date and time of creation , allowing an organized and accurate analysis of time use <br/> <br/>With a clear interface, one page facilitates consultation and management of timers, helping the user to monitor their productivity and identify execution patterns. control and efficiency in your activities daily.",
                },

               Source: {
                 IMG: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1737122418/YoutubeImg/dfoejidfhupz72nmhzco.png"
               }
            }
        ]
    },
    
];

// Definindo a rota para retornar os projetos
app.get('/projects', (req, res) => {
    res.json(projects);
});

// Definindo a porta
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, '0.0.0.0' ,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
