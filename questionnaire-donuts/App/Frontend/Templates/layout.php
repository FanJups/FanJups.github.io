
<!--


author : Fanon JUPKWO
email : jupsfan@gmail.com
date : samedi 03 novembre 2018

-->

<!DOCTYPE html>     

<html lang="fr">

<head>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<meta name="viewport" content="width=device-width, initial-scale=1"> 

	<meta name="description" content="Questionnaire permettant de déterminer l'influence de ton poids">

    <meta name="author" content="Mon poids et Moi">

    <meta property="og:title" content="Mon poids et Moi"/> 

    <meta property="og:type" content="website"/>


	<meta property="og:description" content="Questionnaire permettant de déterminer l'influence de ton poids"/>

	<meta name="twitter:card" content="Questionnaire permettant de déterminer l'influence de ton poids">

	<meta name="twitter:title" content="Mon poids et Moi">

	<meta name="twitter:description" content="Questionnaire permettant de déterminer l'influence de ton poids">

	<meta name="twitter:creator" content="Mon poids et Moi"> 
    
	<title> <?= isset($title) ? $title : "Mon poids et Moi" ?> </title>
    
    <link rel="stylesheet" type="text/css" href="/css/style.css"> 

    <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" type="text/css" />

    <link rel="stylesheet" href="/font-awesome/css/font-awesome.css" type="text/css" />

    <link rel="stylesheet" href="/jquery-ui/jquery-ui.css" type="text/css" />

    <link rel="icon" href="/resources/logo.png">

    <link rel="shortcut icon" type="image/x-icon" href="/resources/logo.ico">

    
	<!-- [if IE]><link rel="shortcut icon" type="image/x-icon" href="/resources/logo.ico"><![endif]-->

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script> 
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

	<div id="wrap" class="container" >

		<!-- Début pop up -->

					<div id="orange-background">
						 

					</div>

					<!-- Pop up accès direct étape 3 pour un seul aspect-->

					<div id="dlgbox" class="col-xs-12">

						<div id="dlgheader"> Accès direct à l'étape 3</div>

						<div id="dlgbody">
							
							
							 

						</div>

						<div id="dlgfooter">
							

						</div>
						

					</div>

					<!-- Pop up accès direct étape 8 pour aucune opération-->

					<div id="dlgbox8" class="col-xs-12">

						<div id="dlgheader8"> Accès direct à l'étape 8</div>

						<div id="dlgbody8">
							
							
							 

						</div>

						<div id="dlgfooter8">
							

						</div>
						

					</div>

					<!-- Pop up duplicate values étape 2-->

					<div id="dlgboxErrorDuplicateValues" class="col-xs-12">

						<div id="dlgheaderErrorDuplicateValues">Erreur : chaque rang doit être unique</div>

						<div id="dlgbodyErrorDuplicateValues">
							
							
							 

						</div>

						<div id="dlgfooterErrorDuplicateValues">
							
						<strong style=" font-size: 2em ; "> <i id="closeDuplicates"  class="fa fa-close smile_close_presentation" aria-hidden="true"></i></strong>

						</div>
						

					</div>

					<!-- Pop up intervalle min max pas respecté étape 2-->

					<div id="dlgboxErrorMinMax" class="col-xs-12">

						<div id="dlgheaderErrorMinMax"></div>

						<div id="dlgbodyErrorMinMax">
							
							
							 

						</div>

						<div id="dlgfooterErrorMinMax"> 
							
						<strong style=" font-size: 2em ; "> <i id="closeMinMax"  class="fa fa-close smile_close_presentation" aria-hidden="true"></i></strong>

						</div>
						

					</div>

					<!-- Pop up valence manquante étape 3-->

					<div id="dlgboxErrorValence" class="col-xs-12">

						<div id="dlgheaderErrorValence">Erreur : chaque aspect doit avoir sa valence</div>

						<div id="dlgbodyErrorValence">
							
							
							 

						</div>

						<div id="dlgfooterErrorValence">
							
						<strong style=" font-size: 2em ; "> <i id="closeErrorValence"  class="fa fa-close smile_close_presentation" aria-hidden="true"></i></strong>

						</div>
						

					</div>

					<!-- Pop up email incorrect -->

					<div id="dlgboxErrorEmail" class="col-xs-12">

						<div id="dlgheaderErrorEmail">Erreur : email incorrect</div>

						<div id="dlgbodyErrorEmail">
							
							
							 

						</div>

						<div id="dlgfooterErrorEmail">
							
						<strong style=" font-size: 2em ; "> <i id="closeErrorEmail"  class="fa fa-close smile_close_presentation" aria-hidden="true"></i></strong>

						</div>
						

					</div>

					<!-- Pop up protocole chirurgie obésité , rien de cocher -->

					<div id="dlgboxErrorProtocoleChirurgie" class="col-xs-12">

						<div id="dlgheaderErrorProtocoleChirurgie">Erreur : aucun choix</div>

						<div id="dlgbodyErrorProtocoleChirurgie">
							
							
							 

						</div>

						<div id="dlgfooterErrorProtocoleChirurgie">
							
						<strong style=" font-size: 2em ; "> <i id="closeErrorProtocoleChirurgie"  class="fa fa-close smile_close_presentation" aria-hidden="true"></i></strong>

						</div>
						

					</div>

		<!-- Fin pop up -->

		


		<!-- logo -->

		

		<header id="logo" class="row">

			<div class="col-xs-12">

				<img src="/resources/logo.png" alt="DONUTS ASSOCIATION" id="logoDonuts" title="DONUTS ASSOCIATION">
				

			</div>


		</header>

		<br> 

		<!-- No javascript -->

		<div id="nojavascript"  class="row">  

			<div class="col-xs-12">

				<p>
					&nbsp; &nbsp;  Javascript est utile pour continuer. Malheureusement, javascript n'est pas activé. Ainsi, nous vous prions d'actualiser la page après l'avoir activé. Merci d'avance.

				</p>

				<br> 
			 

				<strong style=" font-size: 2em ; "> <i   class="fa fa-frown-o sad" aria-hidden="true"></i></strong>

			</div> 
			


		</div>

		<?= $content ?>

		

		<footer class="row">

			<div id="footerDonuts" class="col-xs-12">

				<div id="definitionDonuts">

					<p> <strong>D</strong>éveloppement </p>
					<p> <strong>O</strong>utils </p>
					<p> <strong>N</strong>umériques </p> 
					<p> <strong>U</strong>tiles </p>
					<p> <strong>T</strong>ravail </p>
					<p> <strong>S</strong>urpoids </p>

				</div>

				<div id="emailDonuts" >
					email : contact@donuts-asso.org
					

				</div>

				<div id="copyrightDonuts" >
					donuts-asso ©
					
				</div>

				

			</div>
			

		</footer>

	</div>

	<!--Fin bloc général--> 

	<!-- No Js then do this -->

	<noscript >
		
		<style type="text/css">
			

		#presentation
		{
			display: none;
		}

		#nojavascript
		{
			display: flex;
			 width: 100%;

  margin: auto;



flex-direction: column;

justify-content: center;

align-items: center;

  

  border: 10px #e45a0c outset;

  border-radius: 20px;

  

  font-size: 1.5em;

  
  text-align: center;

  padding-top: 10px;

  padding-bottom : 10px;
		}

		#nojavascript p
{
	text-align: justify;
}
			
			/* Styles pour les smartphones*/

	@media(max-width: 768px)
	{
		#nojavascript
{
  display: none;
  width: 100%;

  margin: auto;



flex-direction: column;

justify-content: center;

align-items: center;

  

  border: 10px #e45a0c outset;

  border-radius: 20px;

  

  font-size: 1em; /* valeur précédente : 1.5em */

  
  text-align: center;

  padding-top: 10px;

  padding-bottom : 10px;
}
	}



		</style>

	</noscript>


	


    <!--JS-->

    <script src="/js/jquery-3.3.1.js"></script>

    <script src="/jquery-ui/jquery-ui.js"></script> 

    <?php

    /*

		Si nous sommes à l'accueil du questionnaire, j'utilise donuts.js
		Sinon (formulaire email), j'utilise pas donuts.js mais emailincorrect.js

    */

    if(isset($donuts)) 
    {

    ?>

 
    	<script src="/js/donuts.js"></script> 


    <?php

    }

    if(isset($donutsEmail)) 
    {

    ?>

    	<script src="/js/emailincorrect.js"></script> 
    	

    <?php


    }


    ?>
    
   



</body>

</html>
