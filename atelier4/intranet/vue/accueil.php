<section>
    <br /> <!-- Modifier, compléter cette page pour coller à vos besoins -->
    <h2 >Bienvenue dans l'intranet:</h2>
    <p>           
        <ul >
            <li>Vous pouvez modifier le contenu du site (supprimer/modifier les tutos).<br /><br /></li>
            <li>Vous pouvez consulter vos droits.<br /><br /></li>
            <li>Si vous possédez les droits <span>root</span> vous êtes en mesure de modifier la structure du site (les pages) et administrer les utilisateurs (ajouter/supprimer/modifier).<br /><br /></li>
        </ul>
    </p>
    <?php
        require 'modele/sql/contactManager.php';
        require 'controleur/connexionBDD.php';
            
        $contacts = getListContact($db);
    ?>
    <div>
        <p>Remarques postées par les visiteurs :<br /><br /></p>
        <table>
            <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Telephone</th>
                <th>Message</th>
                <th>Réponse</th>
                <th></th>
                </tr>
                <?php
                    foreach($contacts as $contact)
                    {
                ?>
                <tr>
                    <td><?php echo $contact['dateMessage']; ?></td>
                    <td><?php echo $contact['nom']; ?><br /></td>
                    <td><?php echo $contact['email']; ?><br /></td>
                    <td><?php echo $contact['telephone']; ?><br /></td>
                    <td><?php echo $contact['message']; ?><br /></td>
                    <td><?php if('Pas de reponse' !=  $contact['reponse']) echo $contact['reponse']; ?><br /></td>
                    <td><?php 
                        if('Pas de reponse' ==  $contact['reponse'])
                        {?>
                        <a href="#"><img src="vue/images/répondre.png" alt="Bouton répondre" title="Répondre"/></a>
                        <?php
                        } ?>
                        <a href="#"><img src="vue/images/supprimer.png" alt="Bouton supprimer" title="Supprimer"/></a>
                    </td>
                </tr>
                <?php 
                    } 
                ?>
        </table>
    </div>
</section> 