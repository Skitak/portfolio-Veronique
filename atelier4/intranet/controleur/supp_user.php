<?php
	require '../modele/sql/userManager.php';
	require './connexionBDD.php';

	if (isset ($_GET['user']))
	{
		$id = $_GET['user'];

		deleteUser($db, $id);
	}

	header('Location: ../index.php?p=user');

?>
