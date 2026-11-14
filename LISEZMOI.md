# Le Roi des menhirs

Chasse au trésor en famille dans le bourg d'Avrillé (Vendée).
Plan : © contributeurs OpenStreetMap (licence ODbL).

## Les fichiers

| Fichier | À quoi il sert | Faut-il le modifier ? |
|---|---|---|
| `jeu.js` | Tout le contenu en **français** : dialogues, énigmes, indices, réponses, textes de fin | **Oui** |
| `jeu-en.js` | Le même contenu en **anglais** | **Oui** (penser à reporter les changements dans les deux langues) |
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

## Langues

Deux petits drapeaux en haut de l'écran permettent de passer du français à l'anglais à tout moment (la progression est conservée).
Au premier lancement, le jeu s'ouvre en anglais si le téléphone est réglé en anglais, sinon en français.
Les textes de l'interface (boutons, messages) sont dans `index.html`, dans le bloc `TXT` en haut du script.

## Mode hors ligne

À la première ouverture, le téléphone enregistre le jeu. Ensuite il fonctionne sans réseau.
Avec du réseau, le jeu charge toujours la dernière version : les corrections arrivent toutes seules.
Après une grosse mise à jour, augmenter le numéro dans `sw.js` : `roi-menhirs-v2` → `roi-menhirs-v3`.

## Version démo

Dans `jeu.js`, `demo: false` cache la mention « DÉMO ». Mettre `demo: true` pour l'afficher.
