
# Révision 1 : Les bases du HTML
 
Dans ce petit cours de révision, nous allons revoir les bases et bonnes pratiques pour écrire un document en HTML et en CSS.
 
Nous allons, dans une première partie, nous consacrer au HTML puis nous interesser au CSS, enfin nous allons passer un peu de temps sur une extension appeler W3C et l'inspecteur.

## Sommaire :
- [Révision 1 : Les bases du HTML](#révision-1--les-bases-du-html)
  - [Sommaire :](#sommaire-)
  - [Première partie : HTML](#première-partie--html)
    - [1. Comprendre les premières lignes d'un HTML](#1-comprendre-les-premières-lignes-dun-html)
    - [2. L'indentation](#2-lindentation)
    - [3. Les commentaires](#3-les-commentaires)
    - [4. L'ordre des balises](#4-lordre-des-balises)
  - [Deuxième partie : CSS](#deuxième-partie--css)
    - [1. Utiliser du CSS](#1-utiliser-du-css)
    - [2. Définir un style à une balise HTML](#2-définir-un-style-à-une-balise-html)
    - [3. Définir un style via une classe ou un identifiant](#3-définir-un-style-via-une-classe-ou-un-identifiant)
    - [4. Utilisation de la hiérarchisation en CSS](#4-utilisation-de-la-hiérarchisation-en-css)
    - [5. La balise body](#5-la-balise-body)
    - [6. Pas de répétition de code](#6-pas-de-répétition-de-code)
  - [L'extension W3C et L'inspecteur](#lextension-w3c-et-linspecteur)
    - [1. L'extension W3C](#1-lextension-w3c)
    - [2. L'inspecteur](#2-linspecteur)
      - [2.1 L'inspecteur d'HTML](#21-linspecteur-dhtml)
      - [2.2 L'inspecteur de CSS](#22-linspecteur-de-css)

## Première partie : HTML

>Le HTML ( HyperText Markup Language ) est un langage qui utilise _des balises_ pour permettre de créer des pages webs.  
>Il est la fondation de votre page HTML, est contient les éléments visibles et les méta-données qui serviront aux navigateurs internets pour afficher correctement votre page web.  
>Il peut être suivit d'autre type de code tel que le __CSS__ pour donner du style à votre page web, du __javascript__ pour l'animer ou du __PHP__ pour lier une base de donner a notre page web. 

> Par convention, on nomme la première page HTML d'un site : __index.HTML__.

### 1. Comprendre les premières lignes d'un HTML
``` html
1   <!DOCTYPE html>
2    <html lang="fr">
3   <head>
4       <meta charset="UTF-8">
5       <title>Document</title>
6   </head>
```
Dans un premier temps, nous allons nous intéresser aux lignes qui sont indispensables lorsque l'on crée une page HTML :
  -
 
- La ligne 1 : Indique que l'on est en présence d'un document HTML.
 
- La ligne 2 : Il s'agit de la balise "HTML" sur laquelle ont lui à indiquée la langue utilisée par la page HTML, ici "fr" indique que la page et écrite pour un public français.
  - Il faut changer la langue, car elle est définie de base pour un public anglophone "en".
  - Attention : il faut fermer la balise "HTML" à la fin du document HTML.
 
- La ligne 4 : indique quel système de codage et utilisé pour décrypter les différents caractères qui compose la page HTML.
  - La norme "UTF-8" est la plus utilisée aujourd'hui car elle englobe tous les types de caractère utilisés de par le monde.
 
- La ligne 5 : indique le titre du document, il sera affiché dans l'onglet qui contient la page HTML.
  - Veuillez à bien choisir un titre adéquat, il doit représenter le thème principal de votre page.
 
- Les lignes 3 et 6 : représente la balise "head" qui indique les méta-données utilisées par le navigateur qui va lire la page, mais elles ne sont pas affichées.
  - Une page HTML contient toujours un head.

### 2. L'indentation

_L'indentation est le décalage des différents éléments en fonction de leur place dans la page web._

Voici un texte sans indentation :
```html
    <header>
    <div>
    <dl>
    <dt>
        mon titre
    </dt>
    <dd>premier lien
    </dd>
    <dd>deuxième lien
    </dd>
    <dd>troisième lien
    </dd>
    <dd>quatrième lien
    </dd>  
    </dl>     
    </div>    
    </header>
```

Saurez-vous ou commence et où se termine chaque nouvelle balise ?
Saurez-vous quel élément et enfant de quel autre élément ?
 
Vous arriverez très probablement à répondre à ces deux questions, mais non sans perdre du temps à essayer de déchiffrer le code.
 
Maintenant voici le même code, mais avec une indentation :

```html
    <header>
        <div>
            <dl>
                <dt>mon titre</dt>
                <dd>premier lien</dd>
                <dd>deuxième lien</dd>
                <dd>troisième lien</dd>
                <dd>quatrième lien</dd>
            </dl>
        </div>
    </header>
```
Tenter de répondre aux deux questions précédemment posées ne devrait vous prendre que quelques secondes avec ce code.
 
Cependant, on n'indente pas n'importe comment :
  -  On indente toujours de l'élément __"parent"__ à l'élément __"enfant"__.
  -  La balise _header_ est un élément __parent__ de _div_, c'est-à-dire que __header__  contient l'élément __div__.
 
### 3. Les commentaires
 
Les commentaires en HTML ne sont pas affichés sur le navigateur, mais sont tous de même visible sur l'__inspecteur__(voir [2. L'inspecteur](#2-linspecteur)).
 
Ils servent majoritairement à donner des indications dans le code et à donner des repaires visuels lors de la conception de la page web.
 
Il est crucial de bien utiliser les commentaires, bien utilisé, ils peuvent aider à la compréhension du code, mais mal utilisé, ils peuvent rendre le code confus voir moins lisible. Voici quelque conseille pour bien utiliser les commentaires :
 
- Utiliser les commentaires sur les éléments a la racine du body. C'est-à-dire ceux qui sont des éléments enfants de la balise _body_.
 
- N'écrivez pas de gros commentaires, sauf obligation, ils doivent rester consit. Si on a besoin de décrire ce que fait notre code, cela veut dire qu'il n'est probablement pas correcte ou trop complexe.
 
### 4. L'ordre des balises
 
On doit respecter une certaine __hiérarchie__ en ce qui concerne les balises.
 
On ne place pas, par exemple, une balise __"p"__ _(paragraphe)_ dans une balise __"a"__ _(lien)_. Car la balise ___"p"__ est du type bloc est le __"a"__ est du type inline.
 
Les titres sont des éléments qui ont leur propre __hiérarchie__ :
- La balise _h1_ ne doit apparaitre qu'une fois dans la page HTML. Il s'agit du titre de la page et sera lu en premier par Google et utiliser pour le référencement du site. Il devra donc être représentatif du contenu.
- Les balises allant du _h2_ au _h6_ pourront être utilisées pour séparer les parties et sous-parties de votre page web.

```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <h1>titre principale de la page</h1>
        <h2>une liste</h2>
        <ul>
            <li><a>lien1</a></li>
            <li><a>lien2</a></li>
            <li><a>lien3</a></li>
            <li><a>lien4</a></li>
        </ul>
        <h2>un paragraphe avec un lien</h2>
        <p><a>lien paragraphe</a></p>    
    </body>
</html> 
```

## Deuxième partie : CSS

>Le CSS ( Cascading Style Sheets ) est un _langage de feuille de style_ qui permet de donner un style a une page HTML en donnant des attributs à nos _balises_ HTML ou en utilisent leur classes et identifiants que l'on aura préalablement définit dans l'HTML.

### 1. Utiliser du CSS

On peut utiliser du CSS de plusieurs manières :  
- directement via le HTML :
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <style>
        p {
            font-style: italic;
        }
    </style>
    <body>
        <h1>un titre</h1>
        <p>Un praragraphe</P>
        <p>Un second paragraphe</p>
    </body>
</html>  
``` 
- en créant une page CSS et en créant un lien dans le HTML :
    - document HTML : 
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
        <h1>un titre</h1>
        <p>Un praragraphe</P>
        <p>Un second paragraphe</p>
    </body>
</html>  
``` 

  - Document CSS :  
  
        p {  
            font-style: italic;  
        }
> Par convention on nomme la première page CSS d'un site : __style.css__.            

### 2. Définir un style à une balise HTML
 
 Si on veut donner un style unique, à toutes les balises du même type, on sélectionne la balise, puis on déclare une ou plusieurs propriétés et leur valeur.  
 Ce qui donne :


    [balise] {
        [propriéter]: [valeur de la propriéter];
    }      

Pour mettre en _italique_ __tous__ les paragraphes on peut utiliser la balise HTML  "_em_" autour de notre texte, ou recourir à un "__font-style: italic__" dans notre CSS de cette façon :  
  
    p {
        font-style: italic;
    }

Pour mettre en _gras_ __tous__ les paragraphes on peut utiliser la balise "_strong_" autour de notre texte, ou recourir à un "__font-weight: bold__" dans notre CSS de cette façon :

    p {
        font-weight: bold;
    }

### 3. Définir un style via une classe ou un identifiant
 
Aux lieux d'appeler une balise, on peut appliquer un identifiant ou une classe à cette balise qu'on aura préalablement définie dans son HTML. On procède de cette manière :
 
 pour déclarer un identifiant :  
 
    <[balise] id=[nom de l'identifiant entre guillemets]>
 
 pour déclarer une classe :  
 
    <[balise] class=[nom de la classe entre guillemets]>
 
 
cela donne en pratique :

``` html
<!DOCTYPE html>
<html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
    </head>
    <style>
        #first_div {
            color: red;
        }

        .animal_domestique {
            text-decoration: underline;
        }
    </style>
    <body>
        <header>
            <div id="first_div">
                <p>un dauphin</p>
            </div>    
            <div>
                <p class="animal_domestique">chat<p>
                <p class="animal_domestique" >chien</p>
                <p class="animal_domestique">cheval</p>
                <p>ours</p>    
            </div>        
        </header>
    </body>
</html> 
```
> On peut remarquer que pour faire référence à un identifiant via le css on utilise un _dièse_ __[#]__.   
> On peut remarquer que pour faire référence à une classe via le css on utilise un _point_ __[.]__.

- _Mais quand utiliser un identifiant et quand utiliser une classe ?_

  - > On utilise un __identifiant__ lorque l'on veut selectionner __un__ élément dans l'HTML.  

  - > On utilise une __classe__ lorsque l'on veut selectionner __plusieur__ éléments dans l'HTML.

Il est possible de donner plusieurs classes à un même élément,  
 on les sépare via un espace simple :


``` html
<!DOCTYPE html>
<html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
    </head>
    <style>
        #first_div {
            background-color: #9d9d9d;
        }

        .animal {
            text-decoration: underline;
        }

        .domestique {
            color: green;
        }

        .sauvage {
            color: red;
        }
    </style>
    <body>
        <header>
            <div id="first_div">
                <p class="animal sauvage">un dauphin</p>
            <div>    
            <div>
                <p class="animal domestique">chat<p>
                <p class="animal domestique" >chien</p>
                <p class="animal domestique">cheval</p>
                <p class="animal sauvage">ours</p>    
            </div>        
        </header>
    </body>
</html> 
```

### 4. Utilisation de la hiérarchisation en CSS
 
En CSS, on utilise la hiérarchisation pour sélectionner un élément défini de notre HTML en précisant les éléments __parents__ de l'élément dont on souhaite changer le style.
 

``` html
<!DOCTYPE html>
<html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
    </head>  
    <style>
    header > div > dl > dt > a {
        color: red;
    }
    </style>
    <body>
        <header>
            <div>
               <dl>
                   <dt><a>titre liste</a></dt>
                   <dd>contenue_1</dd>
                   <dd>contenue_2</dd>
                   <dd>contenue_3</dd>
               </dl>    
            </div>
        </header>
        <div>
            <dl>
                <dt><a>titre liste</a></dt>
                <dd>contenue_1</dd>
                <dd>continue_2</dd>
                <dd>continue_3</dd>
            </dl>
        </div>           
    </body>
</html>   
```
La hiérarchisation à plusieurs avantages :  
- Elle donne un repère visuel pour celui qui cherche à comprendre votre CSS et vous-même, en indiquant précisément quel élément vous sélectionnez.
- Elle évite de surcharger votre code d'identifiant et de classe, mais n'empêche par leur utilisation dans le chemin.
 
> Dans l'exemple donner, j'ai séparé chaque balise dans le chemin par un cheverons __>__. Il n'est pas nécessaire de les écrires, un espace seul suffit à indiquer le chemin : 

    header div dl dt a {
        color: red;
    }

Voici un autre exemple avec un chemin contenant un identifiant et des classes :

``` html
<!DOCTYPE html>
<html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
    </head>  
    <style>
    
    .dd_a {
        text-decoration: underline;
    }

    .dt_a {
        text-decoration: double;
    }

    header > #div_header > dl > dt > .dt_a {
        color: red;
    }

    header #div_dl dl dt .dt_a {
        color: green
    }
    </style>
    <body>
        <header>
            <div id="div_header">
               <dl>
                   <dt><a class="dt_a">titre liste</a></dt>
                   <dd><a class="dd_a">contenue_1</a></dd>
                   <dd><a class="dd_a">contenue_2</a></dd>
                   <dd><a class="dd_a">contenue_3</a></dd>
               </dl>    
            </div>
        </header>
        <div id="div_dl">
            <dl>
                <dt><a class="dt_a">titre liste</a></dt>
                <dd><a class="dd_a">contenue_1</a></dd>
                <dd><a class="dd_a">contenue_2</a></dd>
                <dd><a class="dd_a">contenue_3</a></dd>
            </dl>
        </div>           
    </body>
</html>  
```
### 5. La balise body
 
_La balise "__body__"_ indique au navigateur ce qui doit être affiché sur votre page HTML, mais elle a une spécificitée :  
> __Il est interdit de la manipuler en CSS__  sauf pour lui retirer ses marges :

    body {
        margin: 0;
    }

Lorsque l'on veut donner un style à toute une page, on va alors créer _une balise __div__, qui par convention est associée à l'identifiant : __container__.

``` html
<!DOCTYPE html>
<html lang="fr">
   <head>
       <meta charset="UTF-8">
       <title>Document</title>
    </head>
    <style>
        body {
            margin: 0;
        }

        #container {
            margin-left: 5px;
            margin-right: 15px;
            background-color: #9d9d9d;      
        }
    </style>
    <body>
        <div id="container">
            <p>le lac</p>
        </div>    
    </body>
</html>
```

### 6. Pas de répétition de code
> Une régle en CSS indique __qu'il ne faut pas faire de répétition de code__.  
 
 Dans la mesure du possible, on préférera regrouper dans une seule propriété ce qui peut être rassembler.  
 Par exemple :  
- Si on veut que tous les éléments d'une div ont la mêmes marges à droite, on préfèrera placer une seule marge à droite dans cette div que de placer une marge à droite dans tous _ses éléments enfants_.
> Se qui nous amene au body et à la régle précédament établi _la balise body_ (voir [5. La balise body](#5-la-balise-body)).
 
## L'extension W3C et L'inspecteur
 
Lorsque l'on construit un site, on utilise divers outils pour nous faciliter le travail, nous allons ici en voir deux, majoritairement utiliser.
 
### 1. L'extension W3C
 
> L'extension W3C analyse le code entré dans un éditeur de code, tel que __VSC__ (_visual studio code_), pour detecter toutes les erreurs de syntaxe de notre code.
 
Il permet notamment de voir si on a bien respecté les bonnes pratiques et conventions.  
Il regarde l'indentation, la hiérarchisation et tout autre erreur que l'on peut commettre par inadvertance (ne prend pas en charge la correction des fautes d'orthographe, malheureusement).
 
### 2. L'inspecteur
 
> L'outil principale de tout développeur web on y accède via :
- un navigateur web
  - clique droit sur la page que l'on veut inspecter
    - chercher "inspecter" dans la liste qui vient de s'afficher et clique gauche dessus  
 
L'inspecteur est très complet et a une multitude d'options utile, cependant, nous allons nous intéresser à deux fonctionnalités bien précises, la partie consacrer au HTML et celle consacrée aux CSS.
 
#### 2.1 L'inspecteur d'HTML
 
>L'inspecteur n'offre aucune interaction avec l'HTML de notre page mais permet néamoins :
- De voir les éléments __enfants__ et __parents__ et leurs disposition dans le code HTML.
- Il affiche les commentaires HTML de la page.
- Il permet de voir la hiérarchisation et la position de vos balises dans la page actuelle.
 
#### 2.2 L'inspecteur de CSS
>L'inpecteur offre des outils pour concevoir et modifier son CSS __mais attention, tout changement fait dans l'inspecteur ne sont pas sauvegarder et doivent être ajouter a votre code manuellement !__.
- Il permet notamment de donner directement, via l'éditeur de CSS, du style à nos éléments préexistant où en créant de nouvelles règles de style.  
- Chaque navigateur a ces propres règles de base qui permettent de définir _un style par défaut_ de nos balises HTML. Elles ne peuvent être changées directement via l'inspecteur, mais peuvent être remplacées par nos propres pages CSS.
- Il affiche le "sous-inspecteur". Il permet de voir si nos éléments ont une marge, une bordure et un padding, tout en permettent de redéfinir une taille à l'ensemble.
- Un filtre permet d'afficher uniquement les mots que l'on cherche dans le code.
- Un onglet _"Calculer"_ (ou __"Computed Tab"__ en anglais) permet notamment de voir toutes les règles affectant nos éléments sélectionner.


[ RETOUR EN HAUT ](#révision-1--les-bases-du-html)