const juegos = [
    {
        id: 1,
        nombre: "Stardew Valley",
        descripcion: "Simulación relajante en la que heredas una granja y comenzás una nueva vida en el campo.",
        estadoAnimo: "relajado",
        duracion: "larga",
        genero: "simulacion",
        plataformas: ["PC", "Switch"],
        imagenes: [
            "imgs/stardew-valley/1.jpg",
            "imgs/stardew-valley/2.jpg",
            "imgs/stardew-valley/3.jpg"
        ],
        año: 2016,
        estudio: ["ConcernedApe", "https://www.concernedape.com/"],
        video: "https://www.youtube.com/watch?v=ot7uXNQskhs",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/413150/Stardew_Valley/"],
            ["GOG", "https://www.gog.com/game/stardew_valley"]
        ]
    },
    {
        id: 2,
        nombre: "Celeste",
        descripcion: "Juego de plataformas desafiante con una emotiva historia sobre superación personal.",
        estadoAnimo: "desafiante",
        duracion: "media",
        genero: "plataformas",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: [
            "imgs/celeste/1.jpg",
            "imgs/celeste/2.jpg"
        ],
        año: 2018,
        estudio: ["Matt Makes Games", "https://www.celestegame.com/"],
        video: "https://www.youtube.com/watch?v=iofYDsP3zjI",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/504230/Celeste/"],
            ["Epic Games", "https://store.epicgames.com/en-US/p/celeste"]
        ]
    },
    {
        id: 3,
        nombre: "Journey",
        descripcion: "Exploración minimalista con enfoque artístico en un mundo desértico lleno de misterio.",
        estadoAnimo: "emocional",
        duracion: "corta",
        genero: "aventura",
        plataformas: ["PlayStation", "PC"],
        imagenes: [
            "imgs/journey/1.jpg",
            "imgs/journey/2.jpg"
        ],
        año: 2012,
        estudio: ["thatgamecompany", "https://thatgamecompany.com/journey/"],
        video: "https://www.youtube.com/watch?v=_mF8KkDiIdk",
        recomendado: false,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/638230/Journey/"],
            ["Epic Games", "https://store.epicgames.com/en-US/p/journey"]
        ]
    },
    {
        id: 4,
        nombre: "Hades",
        descripcion: "Roguelike de acción en el inframundo con narrativa interactiva y mecánicas adictivas.",
        estadoAnimo: "desafiante",
        duracion: "media",
        genero: "accion",
        plataformas: ["PC", "Switch"],
        imagenes: [
            "imgs/hades/1.jpg",
            "imgs/hades/2.jpg"
        ],
        año: 2020,
        estudio: ["Supergiant Games", "https://www.supergiantgames.com/games/hades/"],
        video: "https://www.youtube.com/watch?v=91sfrzBZz0I",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/1145360/Hades/"],
            ["Epic Games", "https://store.epicgames.com/en-US/p/hades"]
        ]
    },
    {
        id: 5,
        nombre: "Firewatch",
        descripcion: "Aventura narrativa en primera persona en un bosque de Wyoming, cargada de suspenso.",
        estadoAnimo: "emocional",
        duracion: "media",
        genero: "aventura",
        plataformas: ["PC", "PlayStation"],
        imagenes: [
            "imgs/firewatch/1.jpg",
            "imgs/firewatch/2.jpg"
        ],
        año: 2016,
        estudio: ["Campo Santo", "https://www.firewatchgame.com/"],
        video: "https://www.youtube.com/watch?v=5iHhBXzQKXY",
        recomendado: false,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/383870/Firewatch/"],
            ["PlayStation Store", "https://store.playstation.com/en-us/product/UP2151-CUSA04307_00-FIREWATCH0000001"]
        ]
    },
    {
        id: 6,
        nombre: "Gris",
        descripcion: "Una experiencia artística de plataformas que explora el dolor y la superación.",
        estadoAnimo: "emocional",
        duracion: "media",
        genero: "plataformas",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: ["imgs/gris/1.jpg", "imgs/gris/2.jpg"],
        año: 2018,
        estudio: ["Nomada Studio", "https://nomada.studio/"],
        video: "https://www.youtube.com/watch?v=gvECQlxrhbw",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/683320/GRIS/"]
        ]
    },
    {
        id: 7,
        nombre: "Loop Hero",
        descripcion: "Un roguelike estratégico con bucles infinitos y mecánicas únicas.",
        estadoAnimo: "casual",
        duracion: "media",
        genero: "accion",
        plataformas: ["PC", "Switch"],
        imagenes: ["imgs/loop-hero/1.jpg", "imgs/loop-hero/2.jpg"],
        año: 2021,
        estudio: ["Four Quarters", "https://fourquarters.team/"],
        video: "https://www.youtube.com/watch?v=nc0zYJUwG8I",
        recomendado: false,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/1282730/Loop_Hero/"]
        ]
    },
    {
        id: 8,
        nombre: "Vampire Survivors",
        descripcion: "Disparos automáticos, hordas interminables y upgrades adictivos.",
        estadoAnimo: "casual",
        duracion: "corta",
        genero: "accion",
        plataformas: ["PC", "Mobile"],
        imagenes: ["imgs/vampire-survivors/1.jpg", "imgs/vampire-survivors/2.jpg"],
        año: 2021,
        estudio: ["poncle", "https://poncle.com/"],
        video: "https://www.youtube.com/watch?v=UGJ2HcN2A2I",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/1794680/Vampire_Survivors/"]
        ]
    },
    {
        id: 9,
        nombre: "Limbo",
        descripcion: "Un niño entra en un mundo oscuro y peligroso en busca de su hermana.",
        estadoAnimo: "emocional",
        duracion: "corta",
        genero: "plataformas",
        plataformas: ["PC", "PlayStation", "Switch"],
        imagenes: ["imgs/limbo/1.jpg", "imgs/limbo/2.jpg"],
        año: 2010,
        estudio: ["Playdead", "https://playdead.com/"],
        video: "https://www.youtube.com/watch?v=Y4HSyVXKYz8",
        recomendado: false,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/48000/LIMBO/"]
        ]
    },
    {
        id: 10,
        nombre: "Spiritfarer",
        descripcion: "Un juego sobre acompañar almas hacia la otra vida. Emotivo y relajado.",
        estadoAnimo: "emocional",
        duracion: "larga",
        genero: "simulacion",
        plataformas: ["PC", "Switch"],
        imagenes: ["imgs/spiritfarer/1.jpg", "imgs/spiritfarer/2.jpg"],
        año: 2020,
        estudio: ["Thunder Lotus Games", "https://thunderlotusgames.com/spiritfarer/"],
        video: "https://www.youtube.com/watch?v=QkrV5KfQRTc",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/972660/Spiritfarer/"]
        ]
    },
    {
        id: 11,
        nombre: "Tetris Effect",
        descripcion: "Tetris como nunca antes lo viste, con música y efectos visuales envolventes.",
        estadoAnimo: "relajado",
        duracion: "corta",
        genero: "puzzle",
        plataformas: ["PC", "PlayStation"],
        imagenes: ["imgs/tetris-effect/1.jpg", "imgs/tetris-effect/2.jpg"],
        año: 2018,
        estudio: ["Monstars", "https://www.enhance-experience.com/tetriseffect/"],
        video: "https://www.youtube.com/watch?v=KZazEM8cgt0",
        recomendado: false,
        disponibleEn: [
            ["Epic Games", "https://store.epicgames.com/en-US/p/tetris-effect-connected"]
        ]
    },
    {
        id: 12,
        nombre: "Mini Metro",
        descripcion: "Diseña y gestiona una red de metro minimalista mientras la ciudad crece.",
        estadoAnimo: "relajado",
        duracion: "media",
        genero: "puzzle",
        plataformas: ["PC", "Mobile"],
        imagenes: ["imgs/mini-metro/1.jpg", "imgs/mini-metro/2.jpg"],
        año: 2015,
        estudio: ["Dinosaur Polo Club", "https://dinopoloclub.com/"],
        video: "https://www.youtube.com/watch?v=W7mXfLh2zgc",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/287980/Mini_Metro/"]
        ]
    },
    {
        id: 13,
        nombre: "Slay the Spire",
        descripcion: "Un juego de cartas y estrategia roguelike que desafía tu pensamiento táctico.",
        estadoAnimo: "desafiante",
        duracion: "media",
        genero: "accion",
        plataformas: ["PC", "Switch"],
        imagenes: ["imgs/slay-the-spire/1.jpg", "imgs/slay-the-spire/2.jpg"],
        año: 2017,
        estudio: ["MegaCrit", "https://www.megacrit.com/"],
        video: "https://www.youtube.com/watch?v=3kgu2v4WmDA",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/646570/Slay_the_Spire/"]
        ]
    },
    {
        id: 14,
        nombre: "Oxenfree",
        descripcion: "Un thriller sobrenatural con una narrativa interactiva brillante.",
        estadoAnimo: "emocional",
        duracion: "media",
        genero: "aventura",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: ["imgs/oxenfree/1.jpg", "imgs/oxenfree/2.jpg"],
        año: 2016,
        estudio: ["Night School Studio", "https://nightschoolstudio.com/"],
        video: "https://www.youtube.com/watch?v=NAhrOoNR4ng",
        recomendado: false,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/388880/Oxenfree/"]
        ]
    },
    {
        id: 15,
        nombre: "Dead Cells",
        descripcion: "Acción roguelike con animaciones fluidas y exploración de niveles generados.",
        estadoAnimo: "desafiante",
        duracion: "media",
        genero: "accion",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: ["imgs/dead-cells/1.jpg", "imgs/dead-cells/2.jpg"],
        año: 2018,
        estudio: ["Motion Twin", "https://dead-cells.com/"],
        video: "https://www.youtube.com/watch?v=KxRJ7aOXQLY",
        recomendado: true,
        disponibleEn: [
            ["Steam", "https://store.steampowered.com/app/588650/Dead_Cells/"]
        ]
    }

];

const slides = [
    {
        titulo: "Jugá según tu estado de ánimo",
        texto: "Explorá juegos relajantes, desafiantes y más.",
        boton: {
            texto: "Ver catálogo",
            enlace: "catalogo.html"
        },
        imagen: "imgs/slider/slide1.jpg"
    },
    

]