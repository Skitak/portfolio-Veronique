<?php
	require 'modele/xml/prenomsMembreEquipe.php';
	require 'modele/xml/afficherMembreEquipe.php';
?>

<section>
	<div>
		<h2>Équipe</h2>
		<br />
		<p> L'équipe est compos&eacute; de
			<?php
				for($i = 0; $i < sizeof($result) ; $i++){
					echo $result[$i];
					if($i == sizeof($result) - 2){
						echo " et ";
					}
					else if($i < sizeof($result) - 1){
						echo ", ";
					}
				}
				echo " !<br />";
			?>
		</p>

		Si vous souhaitez obtenir des renseignements suppl&eacute;mentaire sur l'un d'entre eux, veuillez saisir son pr&eacute;nom ci-dessous :<br/></p>
		<form method="post" action="index.php?p=equipe">
			<input type="text" name="prenom" placeholder="Prénom" required>
			<button type="submit">Envoyer</button><br />
		</form>

		<br />
		<?php
			  if (isset($_POST["prenom"])){
				  echo "<p>Voici leurs noms, prenoms, role, sp&eacute;cialite et leurs leitmotivs: <br /></p>";
				  AfficherMembreEquipe($_POST["prenom"]);
			  }
		?>
		<br />
    </div>
 </section>
