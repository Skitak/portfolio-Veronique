<?php
	$xml = simplexml_load_file("./modele/xml/equipe.xml");

	$result = $xml->xpath("/relation/table/tuple/Prenom/text()");

	/*echo 'nombre = "',sizeof($result),'";';
	echo "elements = '",json_encode($result),"';";
	echo "elements = JSON.parse(elements);"; // Pourrait être écrit directement de PHP vers HTML sans JS (mais changeons un peu !)*/
?>
