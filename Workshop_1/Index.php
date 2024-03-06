<?php
// Connexion à la base de données
$bdd = new PDO('mysql:host=localhost;dbname=AUTOCAR;charset=utf8', 'root', '');

$nom=$_POST['nom'];
$prix=$_POST['prix'];
$modele=$_POST['modele'];
$fichier=$_FILES['fichier']['name'];



$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('CALL InsertVoitures(:param_nom, :param_prix, :param_modele, :param_fichier)');

$requete->bindValue(':param_nom', $nom, PDO::PARAM_STR);
$requete->bindValue(':param_prix', $prix, PDO::PARAM_STR);
$requete->bindValue(':param_modele', $modele, PDO::PARAM_STR);
$requete->bindValue(':param_fichier', $fichier, PDO::PARAM_STR);
$requete->execute();

echo "Le vehicule a ete ajouter a la base de donnees.";

?>