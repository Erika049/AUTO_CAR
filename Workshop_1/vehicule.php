<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des véhicules</title>
    
    <style>
      body {
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
      }

      .image-container {
          margin: 20px;
          width: 390px;
          height: 280px; 
          overflow: hidden;
          position: relative;
      }

      .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }

      .image-container p {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 5px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          text-align: center;
          margin: 0;
      }

      footer {
          background-color: #333;
          color: white;
          padding: 0px 0;
          text-align: center;
          width: 100%;
          position: fixed;
          bottom: 0;
          left: 0;
      }

      footer ul {
          list-style-type: none;
          padding: 0;
      }

      footer ul li {
          display: inline;
          margin-right: 20px;
      }

      footer ul li:last-child {
          margin-right: 0;
      }

      footer ul li a {
          color: white;
          text-decoration: none;
      }
	  
    </style>
</head>
<?php  require_once "Affiche.php" ?>
<body>
    <?php 
        foreach ($voitures as  $voiture) {
            
      
           echo" <div class='image-container'>
                <img src='../".$voiture['fichier']."' alt='Image'>
                <p>".$voiture['nom']."</p>
            </div>";
        }
    ?>
    
    <footer>
        <div class="container">
            <ul>
                <li><a href="Acceuil.php">Accueil</a></li>
                <li><a href="vehicule.php">Véhicules</a></li>
                <li><a href="Offres.php">Offres de financement</a></li>
                <li><a href="Contact.php">Contact</a></li>
            </ul>
            <ul>
                <li><a href="AjoutVoitures.php">Ajouter un vehicule</a></li>
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
            </ul>
        </div>
    </footer>
</body>
</html>