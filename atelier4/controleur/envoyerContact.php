<?php
	require 'intranet/modele/sql/ContactManager.php';

	$contact = null;

	if(isset($_POST["nom"]) && isset($_POST["message"]))
	{
		require 'intranet/controleur/connexionBDD.php';
		
		if(addContact($db, $_POST["nom"], $_POST["email"], $_POST["telephone"], $_POST["message"]))
		{
			echo "Message correctement envoyé !!";
			$contact = getLastContact($db);
		} 
		else echo "Erreur lors de l'envoi."; 
	}
	
?>