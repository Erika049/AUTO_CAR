<!doctype html>
<html lang="fr">
 <head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Concessionnaire Automobile</title>
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" href="./assets/vendors/bootstrap/css/bootstrap.min.css"> 
	<link rel="stylesheet" href="./assets/vendors/bootstrap/js/bootstrap.min.css">
	<link rel="stylesheet" href="./assets/vendors/fontawesome/css/all.min.css">
 </head>
 <?php  require_once "Affiche.php" ?>
 <body>
	
    <!-- Bandeau -->
    <header class="bg-dark text-white py-3">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>FIRST TIME</h1>
                </div>
                <div class="col text-right">
                    <img src="../logo-marque.png" alt="Logo de la marque" class="img-fluid">
                </div>
            </div>
        </div>
    </header>
	
	<!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Accueil</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>	
				
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="vehicule.php">Véhicules</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Offres.php">Offres de financement</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Contact.php">Contact</a>
                    </li>
                </ul>
				              
            </div>
			
            <form class="d-flex"  action="Recherche.php" method="post">
                <input class="form-control me-2" name="search" type="search" placeholder="rechercher" list="search_bar" id="search_bar" aria-label="Search">
                <datalist id='search_bar'>

                </datalist>
                <button class="btn btn-outline-success" type="submit">Rechercher</button>
            </form>
		   
        </div>
		 
    </nav>
	
	
	<!-- Carrousel -->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../Promotion.jpg" class="d-block w-100" alt="PROMOTIONS">
                <div class="carousel-caption d-none d-md-block">
                   <h5>PROMOTIONS</h5>
                </div>
			</div>
            <div class="carousel-item">
                <img src="../Nouvelle-voiture.jpg" class="d-block w-100" alt="NOUVELLE VOITURE">
                <div class="carousel-caption d-none d-md-block">
                   <h5>NOUVELLE VOITURE</h5>
                </div>
			</div>
            <div class="carousel-item">
                <img src="../Actualités.jpg" class="d-block w-100" alt="ACTUALITES">
                <div class="carousel-caption d-none d-md-block">
                   <h5>ACTUALITES</h5>
                </div>
			</div>
			<div class="carousel-item">
                <img src="../Accessoires.jpg" class="d-block w-100" alt="ACCESSOIRES">
                <div class="carousel-caption d-none d-md-block">
                   <h5>ACCESSOIRES</h5>
                </div>
			</div>
        </div>
		
		<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
		
    </div>
	
    <img src="../image-flottante.jpg" alt="Image flottante" class="float-right shadow">
	
	
	<!-- Reseaux sociaux -->
	<aside class="fixed-bottom text-center bg-light p-2">
        <!-- Facebook -->
        <a class="btn btn-primary" style="background-color: #3b5998;" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

        <!-- Twitter -->
        <a class="btn btn-primary" style="background-color: #55acee;" href="#!" role="button"><i class="fab fa-twitter"></i></a>

        <!-- Instagram -->
        <a class="btn btn-primary" style="background: linear-gradient(to right, #F56040, #7B4397);" href="#!" role="button"><i class="fab fa-instagram"></i></a>
		
		<!-- Youtube -->
        <a class="btn btn-primary" style="background-color: #ed302f;" href="#!" role="button"><i class="fab fa-youtube"></i></a>
    </aside>
	
	
	<!-- footer -->
	<footer class="bg-dark text-white text-center py-3">
        <div class="container">
            <div class="row">
                <div class="col">
                    <ul class="list-unstyled">
                        <li><a href="Aceuil.php">Accueil</a></li>
                        <li><a href="vehicule.php">Véhicules</a></li>
                        <li><a href="Offres.php">Offres de financement</a></li>
                        <li><a href="Contact.php">Contact</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="list-unstyled">
                        <li><a href="#">Mentions légales</a></li>
                        <li><a href="#">Politique de confidentialité</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
	
    <script src="./assets/vendors/jquery/jquery-3.3.1.min.js"></script>
	<script src="./assets/vendors/jquery/autocomplete.js"></script>
    <script src="./assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
    
	<script>
		var widget = new AutoComplete('search_bar', ['toyota']);
    </script>
 </body>
</html>