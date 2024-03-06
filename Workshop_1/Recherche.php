<?php

$bdd = new PDO("mysql:host=localhost;dbname=AUTOCAR", "root", "");

$param_recherche = $_POST['search'];

$requete = $bdd->prepare("CALL Recherche(:param_recherche)");
$requete->bindParam(':param_recherche', $param_recherche);


$requete->execute();

$results = $requete->fetchAll(PDO::FETCH_ASSOC);

foreach ($results as  $voiture) {
    echo" <div class='image-container'>
         <img src='../".$voiture['fichier']."' alt='Image'>
         <p>".$voiture['nom']."</p>
     </div>";
 }
?>
