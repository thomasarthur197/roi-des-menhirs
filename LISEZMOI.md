# Le Roi des menhirs

Chasse au trésor en famille dans le bourg d'Avrillé (Vendée).
Plan : © contributeurs OpenStreetMap (licence ODbL).

## Les fichiers

| Fichier | À quoi il sert | Faut-il le modifier ? |
|---|---|---|
| `jeu.js` | Tout le contenu : dialogues, énigmes, indices, réponses, textes de fin | **Oui, c'est le seul fichier à modifier** |
| `index.html` | Le moteur du jeu (écrans, dessins, carte) | Non |
| `sw.js` | Le mode hors ligne | Seulement le numéro de `VERSION` (voir plus bas) |
| `manifest.webmanifest`, `icone-*.png` | Nom et icône quand on ajoute le jeu à l'écran d'accueil | Non |
| `.nojekyll` | Fichier vide utile à GitHub Pages | Non |

## Corriger un texte

1. Ouvrir `jeu.js` (sur GitHub : cliquer sur le fichier, puis sur le crayon ✏️).
2. Modifier le texte **entre les guillemets** `"…"`, sans supprimer les guillemets ni les virgules.
3. Enregistrer (sur GitHub : bouton vert **Commit changes**).
4. Le site est à jour en 1 à 2 minutes.

Astuce : pour une apostrophe, utiliser `'` normalement. Pour des guillemets dans un texte, utiliser « » plutôt que `"`.

## Mode hors ligne

À la première ouverture, le téléphone enregistre le jeu. Ensuite il fonctionne sans réseau.
Avec du réseau, le jeu charge toujours la dernière version : les corrections arrivent toutes seules.
Après une grosse mise à jour, augmenter le numéro dans `sw.js` : `roi-menhirs-v1` → `roi-menhirs-v2`.

## Version démo

Dans `jeu.js`, `demo: false` cache la mention « DÉMO ». Mettre `demo: true` pour l'afficher.
