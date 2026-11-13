/* =================================================================
   LE ROI DES MENHIRS — CONTENU DU JEU
   C'est le seul fichier à modifier pour changer les textes, énigmes et indices.
   Attention à garder les guillemets " et les virgules , en place.
   ================================================================= */
const JEU = {
  /* =================================================================
     CONTENU DU JEU — la seule partie qu'Arthur modifie.
     Chaque personnage parle directement aux joueurs.
     Vérifié sur place par Arthur : 14 stands aux halles, coq sur le clocher.
     Les anecdotes viennent du site de la mairie et de l'office de tourisme.
     ================================================================= */
  demo: false,            /* true = affiche la mention « DÉMO » ; false pour la version publique */
  titre: "Le Roi des menhirs",
  sousTitre: "Une enquête dans le bourg d'Avrillé",
  intro: [
    "Bonjour, petits aventuriers ! Levez la tête… encore… ENCORE ! Je suis le Roi des menhirs !",
    "Je suis le plus grand menhir de toute la Vendée. Plus haut qu'une girafe, et aussi lourd qu'une soixantaine de voitures !",
    "Ça fait plus de 4 000 ans que je suis planté ici. Mais avant, je n'étais pas seul : nous étions trois amis, côte à côte.",
    "La maison derrière moi s'appelait même l'Hôtel des Trois Piliers… comme nous trois !",
    "Un matin, mes deux amis avaient disparu. Et moi, je ne peux pas bouger d'un millimètre…",
    "À mes pieds, j'ai seulement trouvé ce drôle de morceau de carton. Gardez-le bien !",
    "Les habitants du village ont sûrement vu quelque chose. Commencez par le vieux puits !"
  ],
  morceauRoi: { nom: "Un morceau de carton", texte: "Un morceau de carton coloré, trouvé aux pieds du Roi. Il en manque d'autres…" },
  etapes: [
    {
      id: "puits", lieu: "Le vieux puits", decor: "puits",
      perso: { nom: "Caius", dessin: "romain" },
      dialogue: [
        "Ave, aventuriers ! Je suis Caius, soldat romain. On raconte que mes copains légionnaires venaient boire à ce puits… Enfin, c'est ce qu'on raconte !",
        "Ce puits est très, très vieux. Avant les robinets, tout le village venait y chercher son eau. Même les chevaux de l'auberge venaient boire ici !",
        "Regardez tout en haut : la grosse boule noire, c'est un boulet de canon ! Un souvenir d'une bataille aux Sables-d'Olonne, en 1696.",
        "Les amis du Roi ? J'ai ramassé un morceau de carton cette nuit. Je l'ai rangé dans mon coffre de soldat…",
        "Mais le cadenas a un code écrit à la romaine ! Nous, les Romains, on écrivait les nombres avec des lettres. Vous m'aidez ?"
      ],
      enigme: { type: "cadenas", taille: 3,
        question: "Chez les Romains : I = 1 et V = 5. Un I collé APRÈS le V, on l'ajoute. Un I collé AVANT le V, on l'enlève. Le code de mon coffre est : III – IV – VI. Ouvrez-le !",
        image: ["III", "IV", "VI"],
        reponses: ["346"] },
      indices: [
        "III, c'est 1 + 1 + 1.",
        "IV : le I est avant le V, donc 5 − 1. VI : le I est après, donc 5 + 1.",
        "Le code est 3 – 4 – 6."
      ],
      recompense: { nom: "Un morceau de carton", texte: "Caius vous donne le morceau de carton caché dans son coffre." }
    },
    {
      id: "eglise", lieu: "L'église Saint-Pierre", decor: "eglise",
      perso: { nom: "Gaston", dessin: "coq" },
      dialogue: [
        "Cocoricooo ! Ici, là-haut ! Tout en haut du clocher ! Je suis Gaston, le coq de l'église.",
        "D'ici, je vois tout le village. Mais attention, mon clocher n'a pas toujours tenu debout ! En 1805, il s'est écroulé. Patatras !",
        "On l'a reconstruit, et on y a installé trois cloches. Ding, Dang et Dong !",
        "Une nuit, j'ai vu deux grandes ombres passer sur la route… Et elles ont fait tomber un morceau de carton !",
        "Je vous le donne si vous trouvez quelle est ma cloche la plus lourde. Voici ma vieille balance… mais elle est fatiguée : seulement deux pesées !"
      ],
      enigme: { type: "balance", pesees: 2,
        question: "Ma balance dit seulement laquelle de deux cloches est la plus lourde. Avec 2 pesées maximum, trouvez la cloche la plus lourde !",
        objets: [ { texte: "Ding", couleur: "#c8352b" }, { texte: "Dang", couleur: "#2f6fc4" }, { texte: "Dong", couleur: "#3d8a2e" } ] },
      indices: [
        "Commencez par peser deux cloches. Gardez la plus lourde des deux.",
        "Pesez ensuite la gagnante contre la troisième cloche.",
        "La cloche qui gagne la deuxième pesée est la plus lourde de toutes !"
      ],
      recompense: { nom: "Un morceau de carton", texte: "Gaston vous lance un morceau de carton depuis son clocher. Attrapé !" }
    },
    {
      id: "halles", lieu: "Les halles", decor: "halles",
      perso: { nom: "Mère Louise", dessin: "marchande" },
      dialogue: [
        "Approchez, approchez ! Bienvenue au marché ! Ici, on vend des légumes, des fruits et du bon fromage.",
        "Ces halles ont été construites en 1858. Et à Avrillé, il y a des marchés depuis plus de 600 ans !",
        "Autrefois, il y avait aussi du théâtre et du cinéma ici. Les enfants grimpaient sur les étagères entre les piliers pour mieux voir !",
        "Les amis du Roi ? J'ai trouvé un drôle de carton sous mon étal… Il est à vous si vous m'aidez à préparer le marché !"
      ],
      enigme: { type: "cadenas", taille: 2,
        question: "Demain, c'est jour de marché ! Je veux mettre un stand entre chaque pilier, sur les DEUX grands côtés des halles. Comptez les piliers d'un côté… puis de l'autre ! Combien de stands je peux installer en tout ?",
        reponses: ["14"] /* vérifié sur place : 7 stands par côté x 2 côtés */ },
      indices: [
        "Un stand se met ENTRE deux piliers. Avec 3 piliers, on peut mettre 2 stands.",
        "Sur un grand côté, on peut mettre 7 stands. Et il y a deux grands côtés…",
        "7 + 7 = 14 stands !"
      ],
      recompense: { nom: "Un morceau de carton", texte: "Mère Louise vous tend le morceau de carton trouvé sous son étal." }
    },
    {
      id: "boiliere", lieu: "Le menhir de la Boilière", decor: "boiliere",
      perso: { nom: "Boubou", dessin: "boiliere" },
      dialogue: [
        "Hein ? Quoi ? Qui me réveille ?… Ah, c'est le Roi qui vous envoie ?",
        "Moi, je suis un menhir aussi, mais je vis à la campagne. D'ici, la vue est magnifique !",
        "Il y a plus de 60 ans, je suis tombé… PLOUF, dans une mare ! J'ai attendu des années avant qu'on me remette debout, en 1986.",
        "Et pour me relever, il a fallu DEUX grues ! Je suis un sacré morceau, hein ?",
        "Les amis du Roi sont passés par ici au lever du soleil. Ils m'ont laissé un morceau de carton… Il est coincé sous moi !",
        "Mais lourd comment ? Rangez ces objets du plus léger au plus lourd, et je me soulèverai un peu pour vous le donner !"
      ],
      enigme: { type: "classement",
        question: "Rangez ces objets du plus léger au plus lourd !",
        objets: [ /* dans l'ordre correct, du plus léger au plus lourd ; l'écran les mélange */
          { texte: "Plume", emoji: "🪶" }, { texte: "Pomme", emoji: "🍎" }, { texte: "Vache", emoji: "🐄" },
          { texte: "Voiture", emoji: "🚗" }, { texte: "Éléphant", emoji: "🐘" }, { texte: "Boubou", dessin: "boiliere" } ] },
      indices: [
        "Une plume, ça ne pèse presque rien. Et Boubou, il a fallu deux grues pour le soulever !",
        "Une voiture est plus lourde qu'une vache. Un éléphant est plus lourd qu'une voiture.",
        "Plume, pomme, vache, voiture, éléphant… et Boubou, le plus lourd de tous !"
      ],
      recompense: { nom: "Un morceau de carton", texte: "Boubou se soulève un tout petit peu… et libère un morceau de carton !" }
    },
    {
      id: "lavoir", lieu: "Le lavoir", decor: "lavoir",
      perso: { nom: "Rainette", dessin: "grenouille" },
      dialogue: [
        "Croâ ! Bienvenue dans mon lavoir ! Autrefois, les dames venaient laver le linge ici, dans l'eau du ruisseau.",
        "Elles tapaient le linge avec un battoir, paf, paf, paf ! Et elles papotaient, papotaient… Le lavoir, c'était l'endroit où on se racontait toutes les nouvelles !",
        "Et les nouvelles, moi, je les entends toutes… Les deux menhirs se sont arrêtés ici pour boire. Ils voulaient visiter un endroit plein d'histoire !",
        "Lequel ? Je l'ai noté en rébus… Croâ !"
      ],
      enigme: { type: "texte",
        question: "Devinez le rébus : quel endroit plein d'histoire les menhirs voulaient-ils visiter ?",
        image: ["🐈", "+", "💧"],
        placeholder: "Un…",
        reponses: ["chateau", "un chateau", "le chateau", "chateau fort", "un chateau fort", "le chateau fort", "chato", "un chato"] },
      indices: [
        "Le premier dessin, c'est un chat.",
        "Le deuxième, c'est de l'eau. Chat + eau…",
        "Un château !"
      ],
      recompense: { nom: "Un morceau de carton", texte: "Rainette vous donne le dernier morceau ! Retournez vite voir le Roi pour assembler le tout." }
    }
  ],
  finale: {
    lieu: "Retour au Roi des menhirs",
    dialogue: [
      "Vous voilà ! Vous avez trouvé tous les morceaux ?",
      "Six morceaux de carton… Attendez… on dirait une carte postale ! Vite, assemblez-la !"
    ],
    puzzle: "Touchez deux morceaux pour les échanger, jusqu'à reconstituer la carte postale.",
    dos: "Coucou le Roi ! Ne t'inquiète pas : on est partis visiter la Vendée ! La plage, un vieux château fort, le marais… C'est trop beau ! On revient bientôt te raconter. Bisous de pierre, tes deux amis.",
    conclusion: [
      "Une carte postale de mes amis ! Ils ne sont pas perdus : ils sont partis visiter la Vendée !",
      "La plage, un château fort, le marais… Quelle aventure ! Ils reviendront me raconter.",
      "Et vous savez quoi ? Grâce à vous, je ne suis plus seul. Regardez qui est venu me voir !"
    ]
  }
};
