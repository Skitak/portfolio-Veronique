<section>
	<br />
	<h2 >Gestion des droits de l'intranet:</h2>
	<p> <br />                
		<ul >
			<li>Rappel : Vous ne pouvez supprimer un droit qu'a condition qu'aucun utilisateur ne le possède.<br /><br /></li>
		</ul>
	</p>
	<?php
		require 'modele/sql/droitManager.php';
		require 'controleur/connexionBDD.php';
			
		$droits = getListDroit($db);
	?>

	<div class="gerer">
		<p>Liste des droits présents en base :<br /><br /></p>
		<table>
			<tr>
				<th>id</th>
				<th>Nom</th>
				<th>Permission</th>
				<th></th>
				</tr>
				<?php
					foreach($droits as $droit)
					{
				?>
				<tr>
					<td><?php echo $droit['id']; ?></td>
					<td><?php echo $droit['nom'] ?><br /></td>
					<td><?php echo $droit['permission']; ?><br /></td>
					<td>
						<a href="#"><img src="vue/images/modifier.png" alt="Bouton modifier" title="Modifier"/></a>
						<a href="#"><img src="vue/images/supprimer.png" alt="Bouton supprimer" title="Supprimer"/></a>
					</td>
				</tr>
				<?php 
					} 
				?>		
		</table>
		<a href="#"><img src="vue/images/ajouter.png" alt="Bouton ajouter" title="Ajouter"/><p>Ajouter</p></a>
	</div>
</section> 