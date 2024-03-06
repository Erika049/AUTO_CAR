<?php
// Connexion à la base de données
$bdd = new PDO('mysql:host=localhost;dbname=AUTOCAR;charset=utf8', 'root', '');


$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$requete=$bdd->prepare('CALL ListeVoitures()');

$requete->execute();

$voitures=$requete->fetchAll(PDO::FETCH_ASSOC);

?>