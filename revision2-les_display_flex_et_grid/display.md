# Display flex / display grid

## Sommaire :  

- [Display flex / display grid](#display-flex--display-grid)
  - [Sommaire :](#sommaire-)
  - [Display](#display)
  - [Display flex](#display-flex)
    - [Flex-direction :](#flex-direction-)
    - [Flex-wrap :](#flex-wrap-)
    - [Flex-flow :](#flex-flow-)
    - [Justify-content :](#justify-content-)
    - [Align-items :](#align-items-)
    - [Align-content :](#align-content-)
  - [Display grid :](#display-grid-)
    - [Définir les longeur et largeur de nos tableaux](#définir-les-longeur-et-largeur-de-nos-tableaux)
    - [Quelque fonction peut utiliser](#quelque-fonction-peut-utiliser)
    - [Placer des éléments dans un tableaux](#placer-des-éléments-dans-un-tableaux)
    - [quelque propriété peut utile](#quelque-propriété-peut-utile)
    - [valeur de propriété spécifique](#valeur-de-propriété-spécifique)


## Display 

répondre aux questions :  

- Qu'est ce qu'est la propriété display ?
    - La propriété display définit le type d’affichage utilisée pour le rendu d’un élément et de ses enfants.

- Qu'elle son ses valeur les plus courante et pourquoi ?
    - _display block :_ Rend solid l'élément voulue.
    - _display inline :_ Demande a l'élément voule de se placer a la suite des précédent élément si il en a la place.
    - _display flex :_ Permet a un élément d'être flexible et d'être déplacer sur le site via d'autre propriétés.
    - _display grid :_ Range les éléments voulue dans un tableaux.
    - _display initial :_ Rend a l'objet son attribut initiale.
    - _display unset :_ Enlève une propriéter précédament déclarer.
    - _display none :_ Retire l'élément et ses enfants lors de la lecture du code via le navigateur internet.  

- Peut-on cumuler certaines propriétées ?
  - _display :_ inline-block
  - _display :_ inline-flex
  - _display :_ inline-grid   

## Display flex 

> Permet a un élément d'être flexible et d'être déplacer sur le site via d'autre propriétés.

_Arrange les éléments sur un axe_

### Flex-direction :
  - __défini la direction à donner à nos éléments__
    - _valeur possible :_
      - column
      - column-reverse
      - row
      - row-reverse

_Contraint ou non les éléments a rester sur une ligne_

### Flex-wrap :
  - __indique si oui on non, les éléments peuvent être contraint a rester sur une même ligne__
    - _valeur possible :_
      - warp
      - nowarp
      - warp-reverse 

### Flex-flow :
  - permet l'utilisation des propriété de flex-direction et flex-warp ensemble

_La propriété suivante permet de déplacer les éléments sur un axe horizontal_

### Justify-content :
  - __permet l'alignement du texte sur un axe horizontal__
    - _valeur possible :_
      - center
      - start
      - end
      - flex-start
      - flex-end
      - left
      - right
      - space-between
      - space-around
      - space-evenly
      - stretch

_Les propriété suivantes permettent de déplacer les éléments sur un axe vertical_
 
### Align-items :
  - __permet l'alignement du texte sur un axe vertical__
      - _valeur possible :_
        - center
        - start
        - end
        - flex-start
        - flex-end
        - self-start
        - self-end 

### Align-content :  
  - __permet le déplacement des espace autour de nos élément sur l'axe vertical__
    - _valeur possible :_
      - center
      - start
      - end
      - flex-start
      - flex-end
      - baseline
      - first baseline
      - last baseline
      - space-between
      - space-around
      - space evenly
      - stretch

## Display grid :

> Range les éléments voulue dans un tableaux.

### Définir les longeur et largeur de nos tableaux
__Un display grid ne se défini pas tout seul, on a aussi besoin de donner le nombre de colonne et de ligne de notre tableaux
par :__ 

- _grid-template-columns :_ défini le nombre de colonne voulue 
- _grid-template-rows :_ défini le nombre de ligne voulue
- _grid-template-area :_ défini la place de chaque élément.
- _grid-template :_ fonction racourci regroupant les effet d'un grid-template-columns, un grid-template-rows et un grid-template-area

### Quelque fonction peut utiliser
__On va survoler certaines propriéter__ 

- _grid-auto-columns :_ Défini de lui même la taille de la colonne.
- _grid-auto-rows :_ Défini de lui même la taille de la ligne.
- _grid-auto-flow :_ Définit automatiquement un placement pour vos élément.
  
> ___grid :___ _function qui regroupe toutes les fonctions précédament citer._

### Placer des éléments dans un tableaux

__Propriéter a utiliser une fois que vous avez définit les longueur/Largeur de votre tableaux__  

- _grid-column-start :_ définit la position de départ d'un élément par rapport aux nombre de colonnes
- _grid-column-end :_ définit la position de fin d'un élément par rapport aux nombre de colonnes  
  
- _grid-row-start :_ définit la position de départ d'un élément par rapport aux nombre de lignes
- _grid-row-end :_ définit la position de fin d'un élément par rapport aux nombre de lignes

__propriété racourcit pour définir la longueur/largeur de votre tableaux__

- _grid-column :_ définit la position de départ et de fin d'un élément par rapport aux nombre de colonnes
- _grid-row :_ définit la position de départ et de fin d'un élément par rapport aux nombre de lignes

> _grid-area :_ définit toutes les longeur et largeur dans une seule propriéter   
> __Attention elle se définit comme suit :__  
>  __[grid-row-start] [grid-column-start] [grid-row-end] [grid-column-end]__

### quelque propriété peut utile

__propriété suplémentaire :__

- _row-gap :_ définit un espace entre les lignes
- _column-gap :_ définit un espace entre les colonnes
- _gap :_ function racourcie qui permet de définir la taille entre les ligne puis la taille entre les colonnes

### valeur de propriété spécifique

__certaine propriété peuvent avoir des functions css :__

- _la function repeat :_ 
  - utilisable sur un grid-template-columns ou le grid-template-rows permet de répéter un même schemas.
    

