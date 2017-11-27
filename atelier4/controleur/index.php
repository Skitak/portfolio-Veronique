<?php

	if(isset($_GET['p']) && is_file('vue/'.$_GET['p'].'.php')) { $p= $_GET['p'] ; }
	else{ $p= "accueil"; }

	// On affiche le début de la page
	include("vue/deb_page.php");

	// on affiche le milieu de page choisi
	include("vue/".$p.".php");
	
	// on affiche la fin de la page
	include("vue/fin_page.php");
?>