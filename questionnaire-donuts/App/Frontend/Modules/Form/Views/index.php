		

		<!-- presentation -->

		<div id="presentation"  class="row"> 

			<div class="col-xs-12">

				<p>
					&nbsp; &nbsp; Nous vous remercions de prendre votre précieux temps pour répondre à ce questionnaire. Il est constitué de <span>13</span> étapes permettant d'étudier l'impact psychologique sur la prise de poids. S'il vous plaît, veuillez sourire en cliquant sur le smiley ci-dessous pour remplir le questionnaire.

				</p>

				<br> 
			 

				<strong style=" font-size: 2em ; "> <i id="smile"  class="fa fa-smile-o smile_close_presentation" aria-hidden="true"></i></strong>

			</div>
			


		</div>

		<!-- aspects -->

		<div id="aspects"  class="row">

			<div class="col-xs-12">

				<p>
				<span>1 / 13 )</span> Quels sont, selon vous, les aspects de votre vie les plus impactés par votre poids ? Indiquez un maximum d’aspects qui peuvent se retrouver impactés par votre poids en 40 secondes. Le chronomètre se déclenchera dans 20 secondes dans le but de vous donner quelques instants de réflexion. Pour valider chaque aspect, il faut cliquer sur envoyer.
				</p>

				<div id="chrono">

					40 secondes restantes
					

				</div> 

				<br>

				<form id="formAspects" > 

					<fieldset>

						<div class="form-group"> 

							<input type="text" name="aspectpsy" id="aspectpsy" class="form-control  " placeholder="Aspect" size="60"  required>
						

						</div>

        				<button type="submit" class="btn btn-warning">Envoyer</button> 
    
					
					</fieldset>

				
    			</form>

    			<br>

    			<p id="aspectsResultats">

    				
    				

    			</p>
				

			</div>
			


		</div>

		<!-- importance -->

		<div id="importance"  class="row">

			<div class="col-xs-12">

				<p>
					
					<span>2 / 13 )</span> Classez du plus important au moins important les aspects que vous avez inscrits précédemment (1 = le plus important).
				</p>
				<br>

				<div id="aspects&Importance" class="table-responsive">

					<form id="formAspects&Importance">
						

						<fieldset>
							
							<table id="aspect&ImportanceTable" class="table table-bordered table-striped">





							</table>

							<button type="submit" class="btn btn-warning">Envoyer</button> 


						</fieldset>


					</form>

					<br>

			

				</div>
				

			</div>
			


		</div>

		<!-- valence -->

		<div id="valence"  class="row">

			<div class="col-xs-12">

				<p>
					<span>3 / 13 )</span> Indiquez si chaque aspect est affecté positivement ou négativement par votre poids.

				</p>

				<br>

				<div id="aspects&Valence" class="table-responsive">

					<form id="formAspects&Valence">

						<fieldset>

							<table id="aspect&Importance&ValenceTable" class="table table-bordered table-striped">
								

							</table>

							<button type="submit" class="btn btn-warning">Envoyer</button>
							


						</fieldset>
						

					</form>

					<br>
					


				</div>
				

			</div>
	

		</div>

		<!-- protocole chirurgie obésité -->

		<div id="protocoleChirurgieObesite" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>4 / 13 )</span> Avez-vous déjà envisagé de rentrer dans le protocole de chirurgie de l'obésité (anneau péri-gastrique, Sleeve ou Bypass) ?
					
				</p>

				<br>

				<form id="formprotocoleChirurgieObesite">

					<fieldset>

						<div  class="form-group">

							<input type="radio" name="nameprotocoleChirurgieObesite" value="Oui (J'ai entrepris des démarches.)" id="oui1">
							<br>
							<label for="oui1">Oui (J'ai entrepris des démarches)</label>

							<br>

							<input type="radio" name="nameprotocoleChirurgieObesite" value="Oui (Je n'ai pas entrepris de démarche.)" id="oui2">
							<br>
							<label for="oui2">Oui (Je n'ai pas entrepris de démarche)</label>

							<br>

							<input type="radio" name="nameprotocoleChirurgieObesite" value="Non" id="non">
							<br>
							<label for="non">Non</label>
							

						</div>

						<button type="submit" class="btn btn-warning">Envoyer</button>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- avez vous déjà été opérée ? -->

		<div id="operation" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>5 / 13 )</span> Avez-vous déjà été opérée ? Si oui, une date exacte ou approximative est nécessaire.
					
				</p>

				<br>

				<form id="formOperation">

					<fieldset>

						<div  class="form-group">

							<input type="radio" name="nameOperation" value="Oui" id="ouiOperation">
							<label for="ouiOperation">Oui</label>

							<br>

							

							<input type="radio" name="nameOperation" value="Non" id="nonOperation">
							<label for="nonOperation">Non</label>

							
						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button> 

						<br>

						<span id="aucunChoixOperation"> S'il vous plaît, il faut cliquer sur Oui ou Non.</span>
						

					</fieldset> 
					

				</form>

				<form id="formOperationDate">

					<fieldset>

						<div  class="form-group">

							

							<input type="text" name="dateOperation" id="dateOperation" maxlength="0" class="form-control  " placeholder="Quand ?" size="60" required >
							

						</div>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucuneDateOperation"> S'il vous plaît, il faut choisir une date.</span>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- poids perdu  -->

		<div id="poidsPerdu" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>6 / 13 )</span> Combien de poids (en kg) avez-vous perdu ? Une quantité exacte ou approximative est nécessaire.
					
				</p>

				<br>

				

				<form id="formPoidsPerdu">

					<fieldset>

						<div  class="form-group">

							

							<input type="number" name="namePoidsPerdu" id="namePoidsPerdu" class="form-control  " placeholder="poids perdu" size="60" required>
							

						</div>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucunPoidsPerdu"> S'il vous plaît, il faut saisir une quantité.</span>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- satisfaction opération  -->

		<div id="satisfactionOperation" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>7 / 13 )</span> Êtes-vous satisfait(e) de cette opération  ?
					
				</p>

				<br>

				

				<form id="formSatisfactionOperation">

					<fieldset>

						<div  class="form-group">

							<input type="radio" name="nameSatisfactionOperation" value="Je suis très insatisfait(e)" id="insatisfaction+">
							<br>
							<label for="insatisfaction+">Je suis très insatisfait(e)</label>

							<br>

							<input type="radio" name="nameSatisfactionOperation" value="Je suis insatisfait(e)" id="insatisfaction">
							<br>
							<label for="insatisfaction">Je suis insatisfait(e)</label>

							<br>

							<input type="radio" name="nameSatisfactionOperation" value="Je suis neutre" id="neutre">
							<br>
							<label for="neutre">Je suis neutre</label>

							<br>

							<input type="radio" name="nameSatisfactionOperation" value="Je suis satisfait(e)" id="satisfaction">
							<br>
							<label for="satisfaction">Je suis satisfait(e)</label>

							<br>

							<input type="radio" name="nameSatisfactionOperation" value="Je suis très satisfait(e)" id="satisfaction+">
							<br>
							<label for="satisfaction+">Je suis très satisfait(e)</label>

						

						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucuneSatisfactionOperation"> S'il vous plaît, il faut faire un choix parmi ces 5 valeurs.</span>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- sexe  -->

		<div id="sexe" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>8 / 13 )</span> Sexe
					
				</p>

				<br>

				

				<form id="formSexe">

					<fieldset>

						<div  class="form-group">

							<input type="radio" name="nameSexe" value="Femme" id="femme">
							
							<label for="femme">Femme</label>

							<br>

							<input type="radio" name="nameSexe" value="Homme" id="homme">
							
							<label for="homme">Homme</label>

							
						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucunSexe"> S'il vous plaît, il faut faire un choix parmi ces 2 valeurs.</span>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- age  -->

		<div id="age" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>9 / 13 )</span> Âge
					
				</p>

				<br>

				

				<form id="formAge">

					<fieldset>

						<div  class="form-group">

							<input type="number" name="nameAge" id="nameAge" class="form-control  " placeholder="âge" size="60" required>
							
						
						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucunAge"> S'il vous plaît, il faut saisir votre âge.</span>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- taille -->

		<div id="taille" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>10 / 13 )</span> Taille en cm (Note : 1,70 m = 170 cm)
					
				</p>

				<br>

				

				<form id="formTaille">

					<fieldset>

						<div  class="form-group">

							<input type="number" name="nameTaille" id="nameTaille" class="form-control  " placeholder="taille" size="60" required>
							
						
						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucuneTaille"> S'il vous plaît, il faut saisir votre taille.</span>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- poids de la personne -->

		<div id="poidsPersonne" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>11 / 13 )</span> Poids en kg
					
				</p>

				<br>

				

				<form id="formPoidsPersonne">

					<fieldset>

						<div  class="form-group">

							<input type="number" name="namePoidsPersonne" id="namePoidsPersonne" class="form-control  " placeholder="votre poids" size="60" required>
							
						
						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucunPoidsPersonne"> S'il vous plaît, il faut saisir votre poids.</span>
						

					</fieldset>
					

				</form>
				

			</div>
			


		</div>

		<!-- situation familaile -->

		<div id="situationFamiliale" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>12 / 13 )</span> Situation familiale
					
				</p>

				<br>

				<form id="formSituationFamiliale">

					<fieldset>

						<div  class="form-group">

							<input type="radio" name="nameSituationFamiliale" value="Célibataire" id="celibataire">
							<br>
							<label for="celibataire">Célibataire</label>

							<br>

							<input type="radio" name="nameSituationFamiliale" value="En couple" id="encouple">
							<br>
							<label for="encouple">En couple</label>

							<br>

							<input type="radio" name="nameSituationFamiliale" value="En concubinage" id="enconcubinage">
							<br>
							<label for="enconcubinage">En concubinage</label>

							<br>

							<input type="radio" name="nameSituationFamiliale" value="Mariée" id="mariee">
							<br>
							<label for="mariee">Mariée</label>

							<br>

							<input type="radio" name="nameSituationFamiliale" value="Divorcée" id="divorcee">
							<br>
							<label for="divorcee">Divorcée</label>

							
							
						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button> 

						<br>

						<span id="aucuneSituationFamiliale"> S'il vous plaît, il faut faire un choix parmi ces 5 valeurs.</span>
						

					</fieldset> 
					

				</form>

				
			</div>
			


		</div>

		<!-- enfants -->

		<div id="enfants" class="row"> 

			<div class="col-xs-12">

				<p>

					<span>13 / 13 )</span> Avez-vous des enfants ?
					
				</p>

				<br>

				<form id="formEnfants1">

					<fieldset>

						<div  class="form-group">

							<input type="radio" name="nameEnfants1" value="Oui" id="ouiEnfants1">
							
							<label for="ouiEnfants1">Oui</label>

							<br>

							

							<input type="radio" name="nameEnfants1" value="Non" id="nonEnfants1">

							<label for="nonEnfants1">Non</label>

							
						</div>

						<br>

						<button  type="submit" class="btn btn-warning">Envoyer</button> 

						<br>

						<span id="aucunChoixEnfants1"> S'il vous plaît, il faut cliquer sur Oui ou Non.</span>
						

					</fieldset> 
					

				</form>

				<form id="formEnfants2">

					<fieldset>

						<div  class="form-group">

							

							<input type="number" name="nameEnfants2" id="nameEnfants2" min="1" class="form-control  " placeholder="Combien ?" size="60" required  >
							

						</div>

						<button  type="submit" class="btn btn-warning">Envoyer</button>

						<br>

						<span id="aucunEnfants2"> S'il vous plaît, il faut saisir au moins 1</span>
						

					</fieldset>
					

				</form> 


				<br>

				<span id="echecEnvoiForm">Nous sommes désolés car le formulaire n'a pas été enregistré. Nous vous prions de réessayer l'envoi. Merci de votre compréhension.</span>
				

			</div>
			


		</div>

		<!-- conclusion -->

		<div id="conclusion"  class="row">  

			<div id="wrapConclusion" class="col-xs-12">
				
				<p id="motConclusion">&nbsp; &nbsp; Nous vous remercions d'avoir rempli le questionnaire. Vous faites partie de cette étude. Si vous le souhaitez, nous vous prions d'enregistrer votre email (en cliquant sur le bouton ci-dessous) pour être au courant des résultats de notre étude. Merci d'avance.
				</p>

				

				<strong id="smileConclusion" style=" font-size: 2em ; "> <i class="fa fa-smile-o smile_close_presentationbis" aria-hidden="true"></i></strong>

				<br>

				<a href="/email" class="btn btn-warning">Email</a> 

			</div>
	
		</div> 

		<br>