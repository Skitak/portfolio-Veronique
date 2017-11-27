<!DOCTYPE html>
<html lang="fr">
<head>
    <title>MonSite</title> <!-- Changer le titre -->
    <meta charset="utf-8">

    <link rel="icon" href="vue/images/favicon.ico" /> <!-- Choisir une icône -->
    <link rel="stylesheet" type="text/css" media="screen" href="vue/css/style.css"> <!-- Mettre en forme avec un ou plusieurs CSS -->
    <!-- Ajouter vos styles et scripts JS (Bootstrap est accepté) -->
</head>
<body>  <!-- N'hésitez pas à rajouter autant de div, span, id, class... que souhaité pour personnaliser -->
   <header> 
       <h1><a href="index.php">Administration</a></h1>  <!-- Choisir un titre ou mettre le logo... -->
        <nav>  
        <ul class="menu"> <!-- Mettez en place votre menu -->
                <li><a href="index.php?p=accueil">Accueil</a></li>
                <li><a href="index.php?p=contenu">Contenu</a></li>
                <li><a href="index.php?p=droit">Droit</a></li>
                <li><a href="index.php?p=user">User</a></li>
            </ul>
        </nav>
    </header>  

	<div class="authentification">  <!-- Garder une possibilité de déconnexion pour sortir de votre intranet ! -->
        <form method="post" action="./controleur/deconnexion.php">
            <fieldset>
                <p>Bonne navigation <span>
                <?php
                    echo $_SESSION['login'];
                ?>
                </span></p>
                <button type="submit">Se déconnecter</button>
            </fieldset>  
        </form>
	</div>   
	
	 <!-- Compléter et mettre en forme tout ce qui sera dans vos débuts de page -->
