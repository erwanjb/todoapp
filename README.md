PARTIE FRONT

J'ai essayé de la faire avec Extjs mais par manque de temps et de connaissance sur le framework, donc je l'ai faite en Vuejs.

J'ai essentiellement utilisé des liens CDN pour mes frameworks (Vuejs et Bootstrap) et pour font awesome, par manque de temps j'ai voulu resté simple mais efficace.

J'ai utilisé axios qui permet de faire une requete ajax beaucoup plus facilement.

Les deux versions en Vuejs et Extjs sont accessibles par des liens des deux cotés.

Je n'ai pas pu afficher les photos de chats car j'ai utilisé une requête ajax et j'ai une restriction sur le domaine, je pense ne pas avoir utilisé la bonne méthode pour utiliser le endpoint. Cependant j'ai laissé en commentaire l'utilisation du axios pour ne pas bloqué le reste du programme et pouvoir y revenir.

La partie front se trouve dans "index.html" et "extapp.html".


PARTIE BACK

J'ai utilisé Nodejs avec Express comme framework qui permet de gérer les routes beaucoup plus rapidement.

J'ai utilisé body-parser pour récupérer les données envoyées par la requète POST.

Pour démarer le back, il faut se placer dans le répertoire todoapp et taper dans le terminal : "node nodeapp.js" (requiert nodejs d'installer), puis dans un navigateur se rendre à l'adresse : "localhost:8080/todo".

puis les routes selon ce qu'on veut faire: 

pour générer une tache aléatoire: "localhost:8080/todo_aleatoire".

pour supprimer une tache: "localhost:8080/todo_supprimer/:id" avec :id le numéro de la tache a supprimer

puis des requetes post pour ajouter: "/todo_ajouter/", ou modifier: "/todo_modifier/" accessible en remplissant un formulaire.	

La partie back se trouve dans "nodeapp.js".