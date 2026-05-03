const juegos = [
    {
        id: 1,
        nombre: "Stardew Valley",
        descripcion: "Simulación relajante en la que heredas una granja y comenzás una nueva vida en el campo.",
        estadoAnimo: "Relajado",
        duracion: "Larga",
        genero: "Simulacion",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/stardew valley/slide.jpg",
            imgCard: "../../imgs/stardew valley/card.jpg",
            imgGallery1: "../../imgs/stardew valley/1.jpg",
            imgGallery2: "../../imgs/stardew valley/2.jpg",
            imgGallery3: "../../imgs/stardew valley/3.jpg",
            imgGallery4: "../../imgs/stardew valley/4.jpg"
        },
        lanzamiento: 2016,
        estudio: { nombre: "ConcernedApe", enlace: "https://www.concernedape.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/413150/Stardew_Valley/"
        }
    },
    {
        id: 2,
        nombre: "Celeste",
        descripcion: "Juego de plataformas desafiante con una emotiva historia sobre superación personal.",
        estadoAnimo: "Desafiante",
        duracion: "Media",
        genero: "Plataformas",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/celeste/slide.jpg",
            imgCard: "../../imgs/celeste/card.jpg",
            imgGallery1: "../../imgs/celeste/1.jpg",
            imgGallery2: "../../imgs/celeste/2.jpg",
            imgGallery3: "../../imgs/celeste/3.jpg",
            imgGallery4: "../../imgs/celeste/4.jpg"
        },
        lanzamiento: 2018,
        estudio: { nombre: "Matt Makes Games", enlace: "https://www.celestegame.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/504230/Celeste/",
            EpicGames: "https://store.epicgames.com/en-US/p/celeste"
        }
    },
    {
        id: 3,
        nombre: "Journey",
        descripcion: "Exploración minimalista con enfoque artístico en un mundo desértico lleno de misterio.",
        estadoAnimo: "Emocional",
        duracion: "Corta",
        genero: "Aventura",
        plataformas: ["PlayStation", "PC"],
        imagenes: {
            imgSlide: "../../imgs/journey/slide.jpg",
            imgCard: "../../imgs/journey/card.jpg",
            imgGallery1: "../../imgs/journey/1.jpg",
            imgGallery2: "../../imgs/journey/2.jpg",
            imgGallery3: "../../imgs/journey/3.jpg",
            imgGallery4: "../../imgs/journey/4.jpg"
        },
        lanzamiento: 2012,
        estudio: { nombre: "thatgamecompany", enlace: "https://thatgamecompany.com/journey/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/638230/Journey/",
            EpicGames: "https://store.epicgames.com/en-US/p/journey"
        }
    },
    {
        id: 4,
        nombre: "Hades",
        descripcion: "Roguelike de acción en el inframundo con narrativa interactiva y mecánicas adictivas.",
        estadoAnimo: "Desafiante",
        duracion: "Media",
        genero: "Acción",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/hades/slide.jpg",
            imgCard: "../../imgs/hades/card.jpg",
            imgGallery1: "../../imgs/hades/1.jpg",
            imgGallery2: "../../imgs/hades/2.jpg",
            imgGallery3: "../../imgs/hades/3.jpg",
            imgGallery4: "../../imgs/hades/4.jpg"
        },
        lanzamiento: 2020,
        estudio: { nombre: "Supergiant Games", enlace: "https://www.supergiantgames.com/games/hades/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/1145360/Hades/",
            EpicGames: "https://store.epicgames.com/en-US/p/hades"
        }
    },
    {
        id: 5,
        nombre: "Firewatch",
        descripcion: "Aventura narrativa en primera persona en un bosque de Wyoming, cargada de suspenso.",
        estadoAnimo: "Emocional",
        duracion: "Media",
        genero: "Aventura",
        plataformas: ["PC", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/firewatch/slide.jpg",
            imgCard: "../../imgs/firewatch/card.jpg",
            imgGallery1: "../../imgs/firewatch/1.jpg",
            imgGallery2: "../../imgs/firewatch/2.jpg",
            imgGallery3: "../../imgs/firewatch/3.jpg",
            imgGallery4: "../../imgs/firewatch/4.jpg"
        },
        lanzamiento: 2016,
        estudio: { nombre: "Campo Santo", enlace: "https://www.firewatchgame.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/383870/Firewatch/"
        }
    },
    {
        id: 6,
        nombre: "Gris",
        descripcion: "Una experiencia artística de plataformas que explora el dolor y la superación.",
        estadoAnimo: "Emocional",
        duracion: "Media",
        genero: "Plataformas",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/gris/slide.jpg",
            imgCard: "../../imgs/gris/card.jpg",
            imgGallery1: "../../imgs/gris/1.jpg",
            imgGallery2: "../../imgs/gris/2.jpg",
            imgGallery3: "../../imgs/gris/3.jpg",
            imgGallery4: "../../imgs/gris/4.jpg"
        },
        lanzamiento: 2018,
        estudio: { nombre: "Nomada Studio", enlace: "https://nomada.studio/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/683320/GRIS/"
        }
    },
    {
        id: 7,
        nombre: "Loop Hero",
        descripcion: "Un roguelike estratégico con bucles infinitos y mecánicas únicas.",
        estadoAnimo: "Casual",
        duracion: "Media",
        genero: "Acción",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/loop hero/slide.jpg",
            imgCard: "../../imgs/loop hero/card.jpg",
            imgGallery1: "../../imgs/loop hero/1.jpg",
            imgGallery2: "../../imgs/loop hero/2.jpg",
            imgGallery3: "../../imgs/loop hero/3.jpg",
            imgGallery4: "../../imgs/loop hero/4.jpg"
        },
        lanzamiento: 2021,
        estudio: { nombre: "Four Quarters", enlace: "https://fourquarters.team/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/1282730/Loop_Hero/"
        }
    },
    {
        id: 8,
        nombre: "Vampire Survivors",
        descripcion: "Disparos automáticos, hordas interminables y upgrades adictivos.",
        estadoAnimo: "Casual",
        duracion: "Corta",
        genero: "Acción",
        plataformas: ["PC", "Mobile"],
        imagenes: {
            imgSlide: "../../imgs/vampire survivors/slide.jpg",
            imgCard: "../../imgs/vampire survivors/card.jpg",
            imgGallery1: "../../imgs/vampire survivors/1.jpg",
            imgGallery2: "../../imgs/vampire survivors/2.jpg",
            imgGallery3: "../../imgs/vampire survivors/3.jpg",
            imgGallery4: "../../imgs/vampire survivors/4.jpg"
        },
        lanzamiento: 2021,
        estudio: { nombre: "poncle", enlace: "https://poncle.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/1794680/Vampire_Survivors/"
        }
    },
    {
        id: 9,
        nombre: "Limbo",
        descripcion: "Un niño entra en un mundo oscuro y peligroso en busca de su hermana.",
        estadoAnimo: "Emocional",
        duracion: "Corta",
        genero: "Plataformas",
        plataformas: ["PC", "PlayStation", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/limbo/slide.jpg",
            imgCard: "../../imgs/limbo/card.jpg",
            imgGallery1: "../../imgs/limbo/1.jpg",
            imgGallery2: "../../imgs/limbo/2.jpg",
            imgGallery3: "../../imgs/limbo/3.jpg",
            imgGallery4: "../../imgs/limbo/4.jpg"
        },
        lanzamiento: 2010,
        estudio: { nombre: "Playdead", enlace: "https://playdead.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/48000/LIMBO/"
        }
    },
    {
        id: 10,
        nombre: "Spiritfarer",
        descripcion: "Un juego sobre acompañar almas hacia la otra vida. Emotivo y relajado.",
        estadoAnimo: "Emocional",
        duracion: "Larga",
        genero: "Simulacion",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/spiritfarer/slide.jpg",
            imgCard: "../../imgs/spiritfarer/card.jpg",
            imgGallery1: "../../imgs/spiritfarer/1.jpg",
            imgGallery2: "../../imgs/spiritfarer/2.jpg",
            imgGallery3: "../../imgs/spiritfarer/3.jpg",
            imgGallery4: "../../imgs/spiritfarer/4.jpg"
        },
        lanzamiento: 2020,
        estudio: { nombre: "Thunder Lotus Games", enlace: "https://thunderlotusgames.com/spiritfarer/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/972660/Spiritfarer/"
        }
    },
    {
        id: 11,
        nombre: "Tetris Effect",
        descripcion: "Tetris como nunca antes lo viste, con música y efectos visuales envolventes.",
        estadoAnimo: "Relajado",
        duracion: "Corta",
        genero: "Puzzle",
        plataformas: ["PC", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/tetris effect/slide.jpg",
            imgCard: "../../imgs/tetris effect/card.jpg",
            imgGallery1: "../../imgs/tetris effect/1.jpg",
            imgGallery2: "../../imgs/tetris effect/2.jpg",
            imgGallery3: "../../imgs/tetris effect/3.jpg",
            imgGallery4: "../../imgs/tetris effect/4.jpg"
        },
        lanzamiento: 2018,
        estudio: { nombre: "Monstars", enlace: "https://www.enhance-experience.com/tetriseffect/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            EpicGames: "https://store.epicgames.com/en-US/p/tetris-effect-connected"
        }
    },
    {
        id: 12,
        nombre: "Mini Metro",
        descripcion: "Diseña y gestiona una red de metro minimalista mientras la ciudad crece.",
        estadoAnimo: "Relajado",
        duracion: "Media",
        genero: "Puzzle",
        plataformas: ["PC", "Mobile"],
        imagenes: {
            imgSlide: "../../imgs/mini metro/slide.jpg",
            imgCard: "../../imgs/mini metro/card.jpg",
            imgGallery1: "../../imgs/mini metro/1.jpg",
            imgGallery2: "../../imgs/mini metro/2.jpg",
            imgGallery3: "../../imgs/mini metro/3.jpg",
            imgGallery4: "../../imgs/mini metro/4.jpg"
        },
        lanzamiento: 2015,
        estudio: { nombre: "Dinosaur Polo Club", enlace: "https://dinopoloclub.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/287980/Mini_Metro/"
        }
    },
    {
        id: 13,
        nombre: "Slay the Spire",
        descripcion: "Un juego de cartas y estrategia roguelike que desafía tu pensamiento táctico.",
        estadoAnimo: "Desafiante",
        duracion: "Media",
        genero: "Acción",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/slay the spire/slide.jpg",
            imgCard: "../../imgs/slay the spire/card.jpg",
            imgGallery1: "../../imgs/slay the spire/1.jpg",
            imgGallery2: "../../imgs/slay the spire/2.jpg",
            imgGallery3: "../../imgs/slay the spire/3.jpg",
            imgGallery4: "../../imgs/slay the spire/4.jpg"
        },
        lanzamiento: 2017,
        estudio: { nombre: "MegaCrit", enlace: "https://www.megacrit.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/646570/Slay_the_Spire/"
        }
    },
    {
        id: 14,
        nombre: "Oxenfree",
        descripcion: "Un thriller sobrenatural con una narrativa interactiva brillante.",
        estadoAnimo: "Emocional",
        duracion: "Media",
        genero: "Aventura",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/oxenfree/slide.jpg",
            imgCard: "../../imgs/oxenfree/card.jpg",
            imgGallery1: "../../imgs/oxenfree/1.jpg",
            imgGallery2: "../../imgs/oxenfree/2.jpg",
            imgGallery3: "../../imgs/oxenfree/3.jpg",
            imgGallery4: "../../imgs/oxenfree/4.jpg"
        },
        lanzamiento: 2016,
        estudio: { nombre: "Night School Studio", enlace: "https://nightschoolstudio.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/388880/Oxenfree/"
        }
    },
    {
        id: 15,
        nombre: "Dead Cells",
        descripcion: "Acción roguelike con animaciones fluidas y exploración de niveles generados.",
        estadoAnimo: "Desafiante",
        duracion: "Media",
        genero: "Acción",
        plataformas: ["PC", "Switch", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/dead cells/slide.jpg",
            imgCard: "../../imgs/dead cells/card.jpg",
            imgGallery1: "../../imgs/dead cells/1.jpg",
            imgGallery2: "../../imgs/dead cells/2.jpg",
            imgGallery3: "../../imgs/dead cells/3.jpg",
            imgGallery4: "../../imgs/dead cells/4.jpg"
        },
        lanzamiento: 2018,
        estudio: { nombre: "Motion Twin", enlace: "https://dead-cells.com/" },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/588650/Dead_Cells/"
        }
    },
    {
        id: 16,
        nombre: "A Short Hike",
        descripcion: "Exploración relajante en una isla mientras esperás una llamada importante.",
        estadoAnimo: "Relajado",
        duracion: "Corta",
        genero: "Aventura",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/a short hike/slide.jpg",
            imgCard: "../../imgs/a short hike/card.jpg",
            imgGallery1: "../../imgs/a short hike/1.jpg",
            imgGallery2: "../../imgs/a short hike/2.jpg",
            imgGallery3: "../../imgs/a short hike/3.jpg",
            imgGallery4: "../../imgs/a short hike/4.jpg"
        },
        lanzamiento: 2019,
        estudio: {
            nombre: "adamgryu",
            enlace: "https://adamgryu.com"
        },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/16000/a-short-hike/"
        }
    },
    {
        id: 17,
        nombre: "Inside",
        descripcion: "Una oscura aventura de puzzles y plataformas con una atmósfera inquietante.",
        estadoAnimo: "Emocional",
        duracion: "Corta",
        genero: "Plataformas",
        plataformas: ["PC", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/inside/slide.jpg",
            imgCard: "../../imgs/inside/card.jpg",
            imgGallery1: "../../imgs/inside/1.jpg",
            imgGallery2: "../../imgs/inside/2.jpg",
            imgGallery3: "../../imgs/inside/3.jpg",
            imgGallery4: "../../imgs/inside/4.jpg"
        },
        lanzamiento: 2016,
        estudio: {
            nombre: "Playdead",
            enlace: "https://playdead.com"
        },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/17000/inside/"
        }
    },
    {
        id: 18,
        nombre: "Hollow Knight",
        descripcion: "Metroidvania desafiante con un hermoso estilo visual y gran exploración.",
        estadoAnimo: "Desafiante",
        duracion: "Larga",
        genero: "Acción",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/hollow knight/slide.jpg",
            imgCard: "../../imgs/hollow knight/card.jpg",
            imgGallery1: "../../imgs/hollow knight/1.jpg",
            imgGallery2: "../../imgs/hollow knight/2.jpg",
            imgGallery3: "../../imgs/hollow knight/3.jpg",
            imgGallery4: "../../imgs/hollow knight/4.jpg"
        },
        lanzamiento: 2017,
        estudio: {
            nombre: "Team Cherry",
            enlace: "https://www.teamcherry.com.au"
        },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/18000/hollow-knight/"
        }
    },
    {
        id: 19,
        nombre: "Unpacking",
        descripcion: "Un juego zen sobre desempaquetar cajas y ordenar tu vida.",
        estadoAnimo: "Relajado",
        duracion: "Media",
        genero: "Simulacion",
        plataformas: ["PC", "Switch"],
        imagenes: {
            imgSlide: "../../imgs/unpacking/slide.jpg",
            imgCard: "../../imgs/unpacking/card.jpg",
            imgGallery1: "../../imgs/unpacking/1.jpg",
            imgGallery2: "../../imgs/unpacking/2.jpg",
            imgGallery3: "../../imgs/unpacking/3.jpg",
            imgGallery4: "../../imgs/unpacking/4.jpg"
        },
        lanzamiento: 2021,
        estudio: {
            nombre: "Witch Beam",
            enlace: "https://www.unpackinggame.com"
        },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/19000/unpacking/"
        }
    },
    {
        id: 20,
        nombre: "The Witness",
        descripcion: "Un mundo abierto de puzzles ambientales y descubrimiento intelectual.",
        estadoAnimo: "Casual",
        duracion: "Larga",
        genero: "Puzzle",
        plataformas: ["PC", "PlayStation"],
        imagenes: {
            imgSlide: "../../imgs/the witness/slide.jpg",
            imgCard: "../../imgs/the witness/card.jpg",
            imgGallery1: "../../imgs/the witness/1.jpg",
            imgGallery2: "../../imgs/the witness/2.jpg",
            imgGallery3: "../../imgs/the witness/3.jpg",
            imgGallery4: "../../imgs/the witness/4.jpg"
        },
        lanzamiento: 2016,
        estudio: {
            nombre: "Jonathan Blow",
            enlace: "https://the-witness.net"
        },
        favorito: false,
        votos: 0,
        disponibleEn: {
            Steam: "https://store.steampowered.com/app/20000/the-witness/"
        }
    }
];