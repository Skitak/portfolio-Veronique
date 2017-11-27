<section> <!-- Compléter/supprimer et mettre en forme tout ce qui sera souhaité ! -->
    <p>Contactez - <span>nous</span> ! nous vous répondrons dès que faire se peut ;)</p>
              
	<div>
		<form method="post" action="index.php?p=contacts">
		<fieldset>
			<input type="text" name="nom" placeholder="Nom" required>
			<input type="email"  name="email" placeholder="Email">
			<input type="tel"  name="telephone" placeholder="Téléphone">
			<textarea  name="message" placeholder="Message" required></textarea>
			<button type="submit">Envoyer</button><br />
			<?php
				require 'controleur/envoyerContact.php';
			?>
		</fieldset>  
		</form> 
	</div>
	
	<?php
		require 'vue/afficherContact.php';
	?>
		
	<div>
		<p>    
			<ul >
				<li>Des remarques sur le site ?<br /><br /></li>
				<li>Des erreurs à corriger ?<br /><br /></li>
				<li>Une information à nous communiquer ?<br /><br /></li>
			</ul>
		</p>
	</div>
</section> 