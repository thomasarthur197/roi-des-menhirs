/* =================================================================
   THE MENHIR KING — ENGLISH GAME CONTENT
   Same structure as jeu.js (French). Only edit the text between the quotes "…".
   The answers (reponses) are compared without capitals, accents or punctuation.
   ================================================================= */
const JEU_EN = {
  demo: false,
  titre: "The Menhir King",
  sousTitre: "A treasure hunt in the village of Avrillé",
  intro: [
    "Hello, little adventurers! Look up… higher… HIGHER! I am the Menhir King!",
    "I am the tallest standing stone in the whole of Vendée. Taller than a giraffe, and as heavy as about sixty cars!",
    "I have been standing here for more than 4,000 years. But I wasn't always alone: there used to be three of us, side by side.",
    "The house behind me was even called the Hotel of the Three Pillars… just like the three of us!",
    "One morning, my two friends had vanished. And I can't move a single inch…",
    "At my feet, I only found this funny piece of cardboard. Keep it safe!",
    "The villagers must have seen something. Start with the old well!"
  ],
  morceauRoi: { nom: "A piece of cardboard", texte: "A colourful piece of cardboard, found at the King's feet. Some pieces are still missing…" },
  etapes: [
    {
      id: "puits", lieu: "The old well", decor: "puits",
      perso: { nom: "Caius", dessin: "romain" },
      dialogue: [
        "Ave, adventurers! I'm Caius, a Roman soldier. People say my legionary friends came to drink at this well… well, that's what people say!",
        "This well is very, very old. Before taps, the whole village came here to fetch water. Even the horses from the inn drank here!",
        "Look right at the top: that big black ball is a cannonball! A souvenir of a battle at Les Sables-d'Olonne, in 1696.",
        "The King's friends? I picked up a piece of cardboard last night. I put it away in my soldier's chest…",
        "But the padlock has a code written the Roman way! We Romans wrote numbers with letters. Will you help me?"
      ],
      enigme: { type: "cadenas", taille: 3,
        question: "For the Romans: I = 1 and V = 5. An I AFTER the V is added. An I BEFORE the V is taken away. My chest's code is: III – IV – VI. Open it!",
        image: ["III", "IV", "VI"],
        reponses: ["346"] },
      indices: [
        "III is 1 + 1 + 1.",
        "IV: the I is before the V, so 5 − 1. VI: the I is after, so 5 + 1.",
        "The code is 3 – 4 – 6."
      ],
      recompense: { nom: "A piece of cardboard", texte: "Caius gives you the piece of cardboard hidden in his chest." }
    },
    {
      id: "eglise", lieu: "Saint-Pierre Church", decor: "eglise",
      perso: { nom: "Gaston", dessin: "coq" },
      dialogue: [
        "Cock-a-doodle-doooo! Up here! Right at the top of the bell tower! I'm Gaston, the church rooster.",
        "From up here, I can see the whole village. But careful, my bell tower hasn't always stood up! In 1805, it collapsed. Crash!",
        "It was rebuilt, and three bells were put inside. Ding, Dang and Dong!",
        "One night, I saw two tall shadows walking along the road… And they dropped a piece of cardboard!",
        "It's yours if you find my heaviest bell. Here is my old scale… but it's tired: only two weighings!"
      ],
      enigme: { type: "balance", pesees: 2,
        question: "My scale only tells which of two bells is heavier. With 2 weighings at most, find the heaviest bell!",
        objets: [ { texte: "Ding", couleur: "#c8352b" }, { texte: "Dang", couleur: "#2f6fc4" }, { texte: "Dong", couleur: "#3d8a2e" } ] },
      indices: [
        "Start by weighing two bells. Keep the heavier one.",
        "Then weigh the winner against the third bell.",
        "The bell that wins the second weighing is the heaviest of all!"
      ],
      recompense: { nom: "A piece of cardboard", texte: "Gaston throws you a piece of cardboard from his bell tower. Caught it!" }
    },
    {
      id: "halles", lieu: "The market hall", decor: "halles",
      perso: { nom: "Mother Louise", dessin: "marchande" },
      dialogue: [
        "Come closer, come closer! Welcome to the market! Here we sell vegetables, fruit and lovely cheese.",
        "This market hall was built in 1858. And in Avrillé, there have been markets for more than 600 years!",
        "In the old days, there were plays and films here too. Children climbed onto the shelves between the pillars to get a better view!",
        "The King's friends? I found a funny piece of cardboard under my stall… It's yours if you help me get the market ready!"
      ],
      enigme: { type: "cadenas", taille: 2,
        question: "Tomorrow is market day! I want to put one stall between each pair of pillars, on BOTH long sides of the hall. Count the pillars on one side… then on the other! How many stalls can I set up in total?",
        reponses: ["14"] },
      indices: [
        "A stall goes BETWEEN two pillars. With 3 pillars, you can fit 2 stalls.",
        "On one long side, you can fit 7 stalls. And there are two long sides…",
        "7 + 7 = 14 stalls!"
      ],
      recompense: { nom: "A piece of cardboard", texte: "Mother Louise hands you the piece of cardboard she found under her stall." }
    },
    {
      id: "boiliere", lieu: "The Boilière standing stone", decor: "boiliere",
      perso: { nom: "Boubou", dessin: "boiliere" },
      dialogue: [
        "Huh? What? Who's waking me up?… Oh, did the King send you?",
        "I'm a standing stone too, but I live in the countryside. The view from here is wonderful!",
        "More than 60 years ago, I fell over… SPLASH, into a pond! I waited years before they stood me back up, in 1986.",
        "And to lift me up, they needed TWO cranes! I'm quite a big chunk, aren't I?",
        "The King's friends came by here at sunrise. They left me a piece of cardboard… It's stuck under me!",
        "But how heavy am I? Put these things in order from lightest to heaviest, and I'll lift myself up a little to give it to you!"
      ],
      enigme: { type: "classement",
        question: "Put these things in order from lightest to heaviest!",
        objets: [
          { texte: "Feather", emoji: "🪶" }, { texte: "Apple", emoji: "🍎" }, { texte: "Cow", emoji: "🐄" },
          { texte: "Car", emoji: "🚗" }, { texte: "Elephant", emoji: "🐘" }, { texte: "Boubou", dessin: "boiliere" } ] },
      indices: [
        "A feather weighs almost nothing. And Boubou needed two cranes to be lifted!",
        "A car is heavier than a cow. An elephant is heavier than a car.",
        "Feather, apple, cow, car, elephant… and Boubou, the heaviest of all!"
      ],
      recompense: { nom: "A piece of cardboard", texte: "Boubou lifts himself up just a tiny bit… and frees a piece of cardboard!" }
    },
    {
      id: "lavoir", lieu: "The wash house", decor: "lavoir",
      perso: { nom: "Rainette", dessin: "grenouille" },
      dialogue: [
        "Ribbit! Welcome to my wash house! In the old days, women came here to wash clothes in the water of the stream.",
        "They beat the laundry with a wooden paddle, slap, slap, slap! And they chatted and chatted… The wash house was where everyone shared the news!",
        "And me, I hear all the news… The two standing stones stopped here for a drink. They wanted to visit the home of someone very brave!",
        "Who? I wrote it down as a picture puzzle… Ribbit!"
      ],
      enigme: { type: "texte",
        question: "Solve the picture puzzle: whose home did the standing stones want to visit? (Careful: the K is silent!)",
        image: ["K", "+", "🌙"],
        placeholder: "A…",
        reponses: ["knight", "a knight", "the knight", "knights", "night", "a night", "k night", "knight s home", "a knight s home"] },
      indices: [
        "The picture shows the moon… at night.",
        "Put a silent K in front: K + night…",
        "A knight! And a knight lives in a castle."
      ],
      recompense: { nom: "A piece of cardboard", texte: "Rainette gives you the last piece! Hurry back to the King to put it all together." }
    }
  ],
  finale: {
    lieu: "Back to the Menhir King",
    dialogue: [
      "There you are! Did you find all the pieces?",
      "Six pieces of cardboard… Wait… it looks like a postcard! Quick, put it together!"
    ],
    puzzle: "Tap two pieces to swap them, until the postcard is complete.",
    dos: "Hello King! Don't worry: we've gone off to visit Vendée! The beach, an old castle, the marsh… It's so beautiful! We'll be back soon to tell you everything. Stony kisses, your two friends.",
    conclusion: [
      "A postcard from my friends! They're not lost: they've gone off to visit Vendée!",
      "The beach, a castle, the marsh… What an adventure! They'll come back and tell me all about it.",
      "And guess what? Thanks to you, I'm not alone anymore. Look who came to see me!"
    ]
  }
};
