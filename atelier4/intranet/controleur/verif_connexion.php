<?php
	require 'modele/sql/userManager.php';

	if(isset($_POST['pwd']))
	{
		// Hachage du mot de passe
		$pwd_hache = sha1($_POST['pwd']);

		require 'connexionBDD.php';
	
		$rslt = getUserByLoginAndPwd($db, $_POST['login'], $pwd_hache);

		if (!$rslt)
		{
			header('Location: ../index.php'); 
		}
		else
		{
			$_SESSION['id'] = $rslt['id'];
			$_SESSION['login'] = $rslt['login'];
		}
	}
	else
	{
		if(!isset($_SESSION['id'])) // S'il n'y a pas de connexion préalable, retour à l'index
		{
			header('Location: ../index.php'); 
		}
	}
?>