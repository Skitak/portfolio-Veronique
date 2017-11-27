<?php
	$hostAndDBName = 'mysql:host=127.0.0.1;dbname=atelier3';
	$userName = 'root';
	$pwd = '0b833831185';
	
	try
	{
		$db = new PDO($hostAndDBName, $userName, $pwd);
	}
	catch(Exception $e)
	{
		echo 'Une erreur est survenue lors de la connexion &agrave; la bdd !';
		die();
	}
?>
