<section>
	<div>
		<h2>Ajouter un tuto ?</h2>
		<br /><br />
		<form method="post" action="index.php?p=tuto" enctype="multipart/form-data">     
			<input type="hidden" name="MAX_FILE_SIZE" value="2097152">     
			<input type="file" name="nom_du_fichier">    
			<button type="submit">Envoyer</button><br />  
		</form>
		<?php
			require 'controleur/upload.php';
		?>
		<br /><br />
		<h2>Tutos disponibles au téléchargement :</h2>
		<?php
			require 'controleur/listerTuto.php';
		?>
    </div>
</section> 