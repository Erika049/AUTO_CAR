<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Offres</title>	
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        .car {
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .car img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 10px;
        }

        .car h2 {
            margin-bottom: 10px;
        }

        .car p {
            margin-bottom: 10px;
        }

        footer {
            background-color: #333;
            color: white;
            padding: 10px 0;
            text-align: center;
            width: 100%;
			height: 30
            position: fixed;
            bottom: 0;
            left: 0;
        }

        footer .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        footer ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        footer ul li {
            display: inline;
            margin-right: 10px;
        }

        footer ul li:last-child {
            margin-right: 0;
        }

        footer ul li a {
            color: white;
            text-decoration: none;
        }

        /* Media queries pour rendre le footer responsive */

        @media screen and (max-width: 768px) {
            footer .container {
                flex-direction: column;
            }

            footer ul {
                margin-top: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Offres de financement Toyota</h1>
        
        <div class="car">
            <h2>COROLLA</h2>
            <p>À partir de 249€/mois</p>
            <p>Taux d'intérêt : 2.9%</p>
            <p>Durée du financement : 60 mois</p>
        </div>        
        
        <div class="car">
            <h2>RAV4</h2>
            <p>À partir de 299€/mois</p>
            <p>Taux d'intérêt : 3.0%</p>
            <p>Durée du financement : 60 mois</p>
        </div>

        <div class="car">
            <h2>HIGHLANDER</h2>
            <p>À partir de 399€/mois</p>
            <p>Taux d'intérêt : 3.2%</p>
            <p>Durée du financement : 72 mois</p>
        </div>

        <div class="car">
            <h2>LAND CRUISER</h2>
            <p>À partir de 499€/mois</p>
            <p>Taux d'intérêt : 3.5%</p>
            <p>Durée du financement : 84 mois</p>
        </div>
            
        <div class="car">
            <h2>YARIS</h2>
            <p>À partir de 199€/mois</p>
            <p>Taux d'intérêt : 2.5%</p>
            <p>Durée du financement : 48 mois</p>
        </div>

    </div>
    
    <footer>
        <div class="container">
            <ul>
                <li><a href="Acceuil.php">Accueil</a></li>
                <li><a href="vehicule.php">Véhicules</a></li>
                <li><a href="Offres.php">Offres de financement</a></li>
                <li><a href="Contact.php">Contact</a></li>
            </ul>
            <ul>
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
            </ul>
        </div>
    </footer>
</body>
</html>
