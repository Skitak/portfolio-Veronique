<?php
	require 'modele/xml/prenomsMembreEquipe.php';
	require 'modele/xml/afficherMembreEquipe.php';
?>

<section>
	<div>
		<h2>A propos</h2>
		<br />
		<p> Ce site nous sert d'entrainement php. vous aurez ici des informations supl&eacute;mentaire sur l'equipe.<br />
			Voici leurs noms, prenoms, role, sp&eacute;cialite et leurs leitmotivs: <br />
			<br />

		<?php
			for($i = 0; $i < sizeof($result) ; $i++){
				AfficherMembreEquipe($result[$i]);
				echo "<br/>";
			}

		?>
		</p>
		<br />
		<?php

		?>
		<br />
    </div>
 </section>
