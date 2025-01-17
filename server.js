const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
const projects = [
    {
        id: 1,
        Title: "Igniter Timer",
        Descriptions: "A simple timer app built with React and TypeScript.",
        BannerImage: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1736968249/Ignite_Timer/IgneteTimePhotos/uleefqplibpwwyfqc55p.png",
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
                Title: "Home",
                Descriptions: {
                    PT: "Uma aplicação simples e intuitiva de timer que permite aos usuários configurar e gerenciar contagens regressivas ou cronômetros com facilidade. Ideal para manter o foco em atividades como estudos, exercícios, cozinha, ou qualquer tarefa que exija controle do tempo. <br/>  <br/>  <br/>  Com uma interface moderna e funcional, a aplicação oferece funcionalidades como personalização de tempo, notificações sonoras ao término e histórico de uso. Perfeita para quem busca produtividade e organização no dia a dia!",
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

                Image: "https://res.cloudinary.com/ddrbxo7pj/image/upload/v1736968250/Ignite_Timer/IgneteTimePhotos/ictmfssfdhbdpazfd3re.png"
            }
        ]
    }
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
