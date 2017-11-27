<?php
	if(!is_null ($contact))			
	{
?>	
	<div>
	<p>Nous avons enregistré en base vos remarques<br /><br /></p>
		<table>
			<tr>
				<td>Nom</td>
				<td><?php echo $contact['nom'] ?><br /></td>
			<tr>
				<td>Email</td>
				<td><?php echo $contact['email']; ?><br /></td>
			</tr>
			<tr>
				<td>Telephone</td>
				<td><?php echo $contact['telephone']; ?><br /></td>
			</tr>
			<tr>
				<td>Message</td>
				<td><?php echo $contact['message']; ?><br /></td>
			</tr>
		</table>
	</div>
<?php
	}
?>