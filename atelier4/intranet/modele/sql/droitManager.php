<?php
	function getListDroit($db)
	{
		$droits = array();

		$q = $db->query('SELECT id,nom,permission FROM droit ORDER BY permission');
		
		while ($donnees = $q->fetch(PDO::FETCH_ASSOC))
		{
			$droits[] = $donnees;
		}

		return $droits;
	}

	function getDroitById($db, $id)
	{
		$q = $db->prepare('SELECT id,nom,permission FROM droit WHERE id = :id');
		$q->execute(array('id' => $id));

		$droit = $q->fetch();
		
		return $droit;
	}

?>