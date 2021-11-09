# 🖥 🎓 👩‍💻 Numerique-pour-toutes
Ce dépôt contient toutes les ressources nécessaires à la tenue de l'atelier coding "[NiortWeb](https://niortweb.fr)".
## Atelier Coding
Initiation au développement "front" et présentation de l'écosystème technique.


### 1 - Retour d'expérience & Appréhender l'environnement
L'environnement technique riche et dynamique information 🚀 
* présentation 
* [différents langages](https://mastergeonum.org/2020/01/08/quel-langage-de-programmation-cartographique-pour-demain/)
* [logique de programmation](https://www.ionos.fr/digitalguide/sites-internet/developpement-web/paradigmes-de-programmation/)

### 2- Excercices en ligne (CodeAcademy)
- [Qu'est ce que le HTML (HubSpot)?](/ressources/guide_html_css_hubspot.pdf)
- [Petite feuille sur le HTML](/ressources/cheatsheet_html-codeacademy.pdf)


https://www.codecademy.com/courses/learn-html/lessons/intro-to-html/exercises/intro

### 3 - Mon formulaire > Commande de jus de pomme
Vous allez créer votre premier formulaire HTML pour commander des bouteilles de Jus de pomme. 

#### Besoin
Pour faciliter la gestion des commandes de Jus de pomme, nous souhaitons diffuser aux parents d'éléves un **lien** pour qu'il puisse commander. Le réglement se fera à la récupération des bouteilles.

#### Piste technique
Pour ne pas "recoder" la roue in fine, nous allons refaire simplement l'ergonomie du formulaire Google Forms. 
Ainsi nous pourrons conserver le comportement à la soumission du formulaire : alimentation d'une feuille Google Sheet.


[**Google Forms de référence 😎**](https://forms.gle/d2V69NAei3QTKyu86)

> Vous pouvez faire F5 pour explorer le traffic réseau, notamment **la soumission du formulaire**
![Champs du formulaire Google forms](/ressources/gg-forms-fields.png)
#### Conception technique
- **Champs**
    - email
    - non complet
    - téléphone
    - quantité de bouteille
    - commentaire
- **Note informative sur la date et le lieu du retrait**
    - le vendredi 10 décembre à la sortie de l'école entre 16h et 18h
    - proposer un lien pour ajouter à Google Agenda basé sur le format iCal 
        - [Générer un lien](https://ical.marudot.com)

#### 👩‍💻 ⚡️ On développe 🚀
* Utilisation de [visual studio code](https://vscode.dev/) en ligne ou sur le poste
* Le dépôt suivant est à utiliser pour l'exercice
* Il existe une branche "**version-finale**"

##### En local > voir ses modifications 
```sh
npm install
npm run start
```


## Ressources
- Créer sa page en 5 minutes > https://medium.com/@blondiebytes/create-a-webpage-in-5-minutes-1602b1f686ac
- Apprendre le HTML et le Javascript en 15 minutes > https://thenextweb.com/news/learn-html-css-in-15-minutes
- Article sur les langages informatique > https://mastergeonum.org/2020/01/08/quel-langage-de-programmation-cartographique-pour-demain/
- Les worker js > https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers