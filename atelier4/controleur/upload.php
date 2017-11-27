<?php
	if(isset($_FILES['nom_du_fichier']))
	{ 
		 $dossier =  'modele/tuto/';
		 $fichier = basename($_FILES['nom_du_fichier']['name']);
		 
		 // Contrôle de l'extension du fichier !
		$ext = pathinfo($fichier, PATHINFO_EXTENSION);
		
		// Liste des extensions autorisées
		$listeExt = array("jpg","png","gif","doc","docx","rtf","txt","pdf");

		if((!in_array(strtolower($ext),$listeExt))) // != ‘jpg’ || strtolower($ext) != ‘gif’) 
		{
			echo "Format de fichier incorrect : vous devez utiliser un format d'image, de document texte ou pdf." ;
		}
		else
		{
			 if(move_uploaded_file($_FILES['nom_du_fichier']['tmp_name'], $dossier . $fichier))
			 {
				  echo "Envoi du fichier réussi !";
			 }
			 else
			 {
				 echo "Echec de l'envoi du fichier !";
			 }
		}
	}
?>