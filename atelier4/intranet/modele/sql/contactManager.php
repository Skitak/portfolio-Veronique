<?php
	function addContact($db, $nom, $email, $telephone, $message)
	{
		$error = false;

		if (!($q = $db->prepare('INSERT INTO contact SET nom = :nom, email = :email, telephone = :telephone, message = :message'))) {
			$error = true;
		}
		else
		{
			if (!$q->bindValue(':nom', $nom,PDO::PARAM_STR) || !$q->bindValue(':email', $email,PDO::PARAM_STR)
			|| !$q->bindValue(':telephone', $telephone,PDO::PARAM_STR) || !$q->bindValue(':message', $message,PDO::PARAM_STR))
			{
				$error = true;
			}
			else if ($q->execute()) {
				$error = true;
			}
		}
		
		return $error;
	}

	function getLastContact($db)
	{
		$q = $db->query("SELECT * FROM contact ORDER BY id DESC LIMIT 1 ;");
		$donnees = $q->fetch();

		return $donnees;
	}

	
	function getListContact($db)
	{
		$contacts = array();
		
		$q = $db->query('SELECT * FROM contact ORDER BY dateMessage');
	
		while ($donnees = $q->fetch(PDO::FETCH_ASSOC))
		{
			$contacts[] = $donnees;
		}

		return $contacts;
	}
?>