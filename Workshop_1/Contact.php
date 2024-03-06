<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Contact</title>	
    <style>
      body {
        font-family: Arial, sans-serif;
      }

      .container {
        width: 80%;
        margin: 50px auto;
        padding: 20px;
        box-sizing: border-box; /* Pour inclure les paddings dans la largeur */
      }

      h2 {
        text-align: center;
      }

      form {
        border: 1px solid #ccc;
        padding: 20px;
        border-radius: 5px;
      }

      label {
        display: block;
        margin-bottom: 10px;
      }

      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box; /* Pour inclure les paddings dans la largeur */
      }

      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      button:hover {
        background-color: #45a049;
      }

      footer {
        background-color: #333;
        color: white;
        padding: 0px 0;
        text-align: center;
      }

      footer ul {
        list-style-type: none;
        padding: O;
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
<body>
    <div class="container">
        <h2>Contactez nous</h2>
        <form action="submit_form.php" method="POST">
            <label for="name">Nom:</label>
            <input type="text" id="name" name="name" required>
			
			      <label for="name">Prenom:</label>
            <input type="text" id="surname" name="surname" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
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