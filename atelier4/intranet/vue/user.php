<section>
	<br />
	<h2 >Gestion des utilisateurs de l'intranet:</h2>
	<?php
		require 'modele/sql/droitManager.php';
		require 'controleur/connexionBDD.php';

		$users = getListUser($db);
	?>

	<div>
		<p>Liste des utilisateurs presents en base :<br /><br /></p>
		<table>
			<tr>
				<th>Id</th>
				<th>Droit</th>
				<th>Login</th>
				<th>Password</th>
				<th>Nom</th>
				<th>Prenom</th>
				<th>Age</th>
				<th>Sexe</th>
				<th></th>
				</tr>
				<?php
					foreach($users as $user)
					{
				?>
				<tr>
					<td><?php echo $user['id']; ?></td>
					<td><?php

						$droit = getDroitById($db, (int) $user['droit']);

						echo $droit['nom'];

					?></td>
					<td><?php echo $user['login']; ?><br /></td>
					<td><?php echo $user['password']; ?><br /></td>
					<td><?php echo $user['nom']; ?><br /></td>
					<td><?php echo $user['prenom']; ?><br /></td>
					<td><?php echo $user['age']; ?><br /></td>
					<td><?php echo $user['sexe']; ?><br /></td>
					<td>
						<a href="#"><img src="vue/images/modifier.png" alt="Bouton modifier" title="Modifier"/></a>
						<a href=<?php echo '"controleur/supp_user.php?user=' . $user['id'] . '"'; ?>><img src="vue/images/supprimer.png" alt="Bouton supprimer" title="Supprimer"/></a>
					</td>
				</tr>
				<?php
					}
				?>
		</table>
		<a href="#"><img src="vue/images/ajouter.png" alt="Bouton ajouter" title="Ajouter"/><p>Ajouter</p></a>
	</div>
</section>
