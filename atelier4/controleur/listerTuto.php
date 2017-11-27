<?php

	$nb_fichier = 0;
	echo '<ul>'; // On va afficher dans une liste html

	if($dossier = opendir('modele/tuto/')) // On ouvre le dossier
	{
		while(false !== ($fichier = readdir($dossier)))
		{
			if($fichier != '.' && $fichier != '..' && $fichier != 'index.php') // Si le fichier n'est pas l'index.php ou autre fichier spécifique
			{
				$nb_fichier++; // On incrémente le compteur de 1
				echo '<li><a href="modele/tuto/' . $fichier . '">' . $fichier . '</a></li>';
			}
		}

		echo '</ul>';
		echo 'Il y a <strong>' . $nb_fichier .'</strong> tuto(s) sur le site.<br /><br />';
	
		closedir($dossier);	
	}
	else
	{
		echo '</ul>';
		echo 'Le dossier contenant les Tutos n\' a pas pu être ouvert';
	}
?>