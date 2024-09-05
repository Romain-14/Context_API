# API CONTEXT

L'interface Context permet de créer un contexte qui va contenir les données de l'utilisateur et les fonctions pour les modifier.

Un contexte est un moyen de partager des valeurs entre plusieurs composants sans avoir à passer explicitement les données via les props.
évite le prop drilling

**createContext()** : permet de créer un contexte
**useContext()** : permet de récupérer les données du contexte spécifique passé en argument

Le contexte est composé de 2 parties :

- un composant Provider qui va fournir les données à ses enfants
- un composant Consumer qui va récupérer les données fournies par le Provider (anciennement utilisé mais **déprécié**) **on utilise maintenant le hook useContext** dans le composant enfant qui a besoin d'accéder aux données du contexte.

D'un point de vue structure, le contexte se trouve dans le dossier store.

Création d'un dossier `user` qui va uniquement gérer un state lié à l'utilisateur.
Dans ce dossier on y trouve :

- un Composant Context qui va retourner le Provider.
- un fichier utilitaire (la fonction useReducer) qui va gérer l'action à effectuer

Englober notre composant racine App du Provider dans le fichier main.jsx.
Et se connecter au context pour utiliser une donnée de celui-ci dans un composant via le hook useContext (Header.jsx, Auth.jsx)
