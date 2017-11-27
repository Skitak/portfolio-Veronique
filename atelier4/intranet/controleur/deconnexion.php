<?php 
	// Initialisation de la session.
	session_start();

	// Suppression des variables de session
	$_SESSION = array();
	
	// Suppression de la session
	session_destroy();

	header('Location: ../../index.php'); 
?>