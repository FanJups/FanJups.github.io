

$(document).ready(function(){

	var formAspectsElt; 

	var formAspectsImportanceElt = document.getElementById("formAspects&Importance") ; 

	var formAspectsValenceElt = document.getElementById("formAspects&Valence") ;

	var formprotocoleChirurgieObesiteElt = document.getElementById("formprotocoleChirurgieObesite") ;

	var formOperationElt = document.getElementById("formOperation") ;

	var formOperationDateElt = document.getElementById("formOperationDate") ;

	var formPoidsPerduElt = document.getElementById("formPoidsPerdu") ;

	var formSatisfactionOperationElt = document.getElementById("formSatisfactionOperation") ;

	var formSexeElt = document.getElementById("formSexe") ;

	var formAgeElt = document.getElementById("formAge") ;

	var formTailleElt = document.getElementById("formTaille") ;

	var formPoidsPersonneElt = document.getElementById("formPoidsPersonne") ;

	var formSituationFamilialeElt = document.getElementById("formSituationFamiliale") ;

	var formEnfants1Elt = document.getElementById("formEnfants1") ;

	var formEnfants2Elt = document.getElementById("formEnfants2") ;

	

	var listeAspects =[];

	var listeInputs2 =[];

	var listeInputsValues2 =[];

	var listePresenceInputs2 =[];

	var showImportance = false;

	var showValence = false;

	var showConclusion = false;

	var timing = 40;

	var listeAspectUser =[]; // liste des aspects + importance + valence 

	//Working on surgery date 

	$(function(){

		$( "#dateOperation" ).datepicker({
            altField: "#dateOperation",
            closeText: 'Fermer',
            prevText: 'Précédent',
            nextText: 'Suivant',
            currentText: 'Aujourd\'hui',
            monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
            dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
            dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
            weekHeader: 'Sem.',
            firstDay: 1 ,
            dateFormat: 'd/m/yy',
            maxDate:'+0d',
            showOtherMonths:true,
            selectOtherMonths:true,
            changeMonth:true,
            changeYear:true,
            numberOfMonths:1

        });


	});

	$(function() {

		$( "#dateOperation" ).datepicker();
                                                                                                                            	               
    });

	

	/** functions Start **/

	/** Début AspectClass**/

	function AspectUser(nameAspectDonuts, importanceAspectDonuts,valenceAspectDonuts)
	{
		this.nameAspect =nameAspectDonuts;
		this.importanceAspect=importanceAspectDonuts;
		this.valenceAspect=valenceAspectDonuts;

		this.description = function(){

			return "Aspect ->"+this.nameAspect+" Rang ->"+this.importanceAspect+" Valence ->"+this.valenceAspect;
		};
	}



	/** Fin AspectClass**/

	

	/** Début QuestionnaireUserClass**/

	function QuestionnaireUser(listeAspectImportanceValence,souhait,isOperation,dateOperation,poidsPerdu,satisfactionOperation,sexePersonne,agePersonne,taillePersonne,poidsPersonne,situationFamiliale,isEnfants,nbreEnfants)
	{
		this.listeAspectImportanceValenceUser =listeAspectImportanceValence;
		this.souhaitUser=souhait;
		this.isOperationUser=isOperation;
		this.dateOperationUser=dateOperation;
		this.poidsPerduUser =poidsPerdu;
		this.satisfactionOperationUser=satisfactionOperation;
		this.sexePersonneUser = sexePersonne;
		this.agePersonneUser = agePersonne;
		this.taillePersonneUser=taillePersonne;
		this.poidsPersonneUser= poidsPersonne;
		this.situationFamilialeUser= situationFamiliale;
		this.isEnfantsUser = isEnfants;
		this.nbreEnfantsUser = nbreEnfants;
		this.uniqueIdUser ="";

		this.description=function(){


			console.log(this.listeAspectImportanceValenceUser.length+" aspect(s) :");

			this.listeAspectImportanceValenceUser.forEach(function (xUser) {
        
        		console.log(xUser.description());
    		});

    		console.log("Souhait -> "+this.souhaitUser+" isOperation -> "+this.isOperationUser+" dateOperation -> "+this.dateOperationUser+" poidsPerdu -> "+this.poidsPerduUser);

    		console.log("satisfactionOperation -> "+this.satisfactionOperationUser+" sexe -> "+this.sexePersonneUser+" age -> "+this.agePersonneUser);

    		console.log("taille -> "+this.taillePersonneUser+" poids -> "+this.poidsPersonneUser+" situationFamiliale -> "+this.situationFamilialeUser);

    		console.log("isEnfants -> "+this.isEnfantsUser+" nbreEnfants -> "+this.nbreEnfantsUser);

    		console.log("uniqueIdUser -> "+this.uniqueIdUser);

		};

	}


	/** Fin QuestionnaireUserClass**/

	var finalUser = new QuestionnaireUser("","","","","","","","","","","","","");

	function countDown40()
	{
		remplissageFormulaire1(); 

		var show;

		timing--;

		if(timing >=0)
		{

			if(timing <10)
			{

				if(timing <=1)
				{
					show = "0"+timing+" seconde restante";

				}else{

					//timing > 1

					show = "0"+timing+" secondes restantes";
				}

			}else{

				//timing sup ou = 10

				show = timing+" secondes restantes";
			}

			document.getElementById("chrono").textContent = show;

			var countDownTimeOut = setTimeout(countDown40,1000); // Chrono chaque 1 s

			if(timing < 0)
			{
				clearTimeout(countDownTimeOut);
			}

		}else{


			// Timing negative

			if(listeAspects.length === 0)
			{
				timing = 40;

				document.getElementById("chrono").textContent = "40 secondes restantes";

				setTimeout(countDown40,1000); // 1 second -> the chrono shows 40 first
	

			}else{ //The user entered something

					
					$("#aspects").hide(); 

		        	
		        	if(listeAspects.length === 1)
		        	{
		        		

		        		showDialogAfterOneAspect();

		        		

		        		var eltAspectUser = new AspectUser(listeAspects[0],1,""); 

		        		listeAspectUser.push(eltAspectUser); 

		        		

		        		hideDialogAfterOneAspect();

		        		showValence = true;

		        		/** Début  Traitement étape 3  **/

		        		

		        		if(showImportance === false & showValence === true & showConclusion === false)
		        		{
		        			showFormStep3(listeAspectUser);

		        			
		        		}


		        		/** Fin  Traitement étape 3  **/

		        		

		        		
		        	}

		        	if(listeAspects.length > 1)
		        	{
		        	

		        		showImportance = true;

		        		document.getElementById("importance").style.display = "flex";

			        	if(showImportance === true & showValence === false & showConclusion === false)
						{
							
							

							var aspectImportanceTableElt = document.getElementById("aspect&ImportanceTable");  

							var tr0Elt = document.createElement("tr");

							var th0_1Elt = document.createElement("th");

							th0_1Elt.textContent ="Aspect";

							var th0_2Elt = document.createElement("th");

							th0_2Elt.textContent ="Ordre";

							tr0Elt.appendChild(th0_1Elt);

							tr0Elt.appendChild(th0_2Elt);

							aspectImportanceTableElt.appendChild(tr0Elt);


							for(var i=0; i< listeAspects.length; i++)
							{
								
								var trIElt = document.createElement("tr");

								var td0_1Elt = document.createElement("td");

								td0_1Elt.textContent = listeAspects[i] ;

								var td0_2Elt = document.createElement("td");

								//INPUT

								var inputImportanceElt = document.createElement("input");

								inputImportanceElt.setAttribute("type","number");

								var nameInputImportanceElt = "input_number_id_name_"+(i+1)+"_"+listeAspects[i];

								inputImportanceElt.setAttribute("name",nameInputImportanceElt);

								inputImportanceElt.setAttribute("id",nameInputImportanceElt); 

								inputImportanceElt.setAttribute("min","1");

								inputImportanceElt.setAttribute("max",""+listeAspects.length);

								var placeholderInput = "1-"+listeAspects.length;

								inputImportanceElt.setAttribute("placeholder",placeholderInput);

								inputImportanceElt.required = true;

								inputImportanceElt.classList.add("form-control");

								listeInputs2.push(inputImportanceElt);

								

								td0_2Elt.appendChild(inputImportanceElt) ; // ADD INPUT

								trIElt.appendChild(td0_1Elt);

								trIElt.appendChild(td0_2Elt);

								aspectImportanceTableElt.appendChild(trIElt);
							}

							//Traitement du formulaire étape 2

							var verifyValueBetweenMinMax = 0; //Je suppose qu'aucune  valeur n'est >=min et <=max

							formAspectsImportanceElt.addEventListener("submit",function(e) {

								for(var j=0;j<listeInputs2.length;j++)
								{

									var valueInt = parseInt(listeInputs2[j].value.trim());

									

									listeInputsValues2[j]=valueInt;

									if(valueInt>=1 && valueInt<=listeInputs2.length)
									{
										verifyValueBetweenMinMax++;
									}
								}

								

								if(verifyValueBetweenMinMax === listeInputs2.length)
								{
									//Je m'assure maintenant qu'il n y a pas de doublons

									for(var j=0;j<listeInputsValues2.length;j++)
									{

										var compteurDoublons = 0;

										for(var jj=0;jj<listeInputsValues2.length;jj++)
										{

											if(listeInputsValues2[j]===listeInputsValues2[jj])
											{
												compteurDoublons++;
											}
										}

										listePresenceInputs2[j] = compteurDoublons;

										
									}

									var errorsDuplicate =0; //Je suppose que chaque valeur apparaît une seule fois

									for(var l=0;l<listePresenceInputs2.length;l++) // Je parcours le tableau d'occurences
									{
										if(listePresenceInputs2[l] > 1)
										{
											errorsDuplicate++;

											

										}else{

										 // listePresenceInputs2[l] == 1 
										}
									}

									if(errorsDuplicate===0)
									{
										//Formulaire correct, on passe à l'étape 3


										for(var p=0;p<listeAspects.length;p++)
										{
											var eltAspectUser = new AspectUser(listeAspects[p],listeInputsValues2[p],"");

											listeAspectUser.push(eltAspectUser);
										}

										

										$("#importance").hide(); 

										showImportance = false;

										showValence = true;

		    							document.getElementById("valence").style.display = "flex";

		    							/** Début  Traitement étape 3  **/

		    							if(showImportance === false & showValence === true & showConclusion === false)
		    							{
		    								showFormStep3(listeAspectUser);


		    							}

		    							/** Fin  Traitement étape 3  **/

									}else{

										//Erreur

										

										//Réinitialisation



										showDialogErrorDuplicateValues();

										verifyValueBetweenMinMax =0;

										errorsDuplicate =0;

									}


								}else{

									//Toutes les valeurs ne sont pas comprises entre 1 et length

									

									showDialogErrorMinMax(listeInputs2.length);

									//Réinitialisation

									verifyValueBetweenMinMax =0;


								}




								e.preventDefault(); // Annulation de l'envoi des données 

							}); //Fin Traitement du formulaire étape 2


						}
		        	}


			}

			

		}

	} //fin countDown30


	function remplissageFormulaire1() 
	{
	

	 	formAspectsElt = document.getElementById("formAspects"); 

	 	

	 	formAspectsElt.style.display = "block";

	 	document.getElementById("aspectpsy").focus();

	 	formAspectsElt.addEventListener("submit", function(e) {


	 		var aspect = formAspectsElt.elements.aspectpsy.value.trim();

	 		if( aspect.length !=0 )
	 		{
	 			listeAspects.push(aspect);

	 			document.getElementById("aspectsResultats").appendChild(document.createTextNode(' "'+aspect+'" '));

	 			formAspectsElt.elements.aspectpsy.value = "";

	 		}else{

	 		}

	 		

	 		document.getElementById("aspectpsy").focus();

	 	


	 		e.preventDefault(); // Annulation de l'envoi des données 


	 	}); //En cliquant sur submit, on saisit les aspects

        
	}

	function showDialogAfterOneAspect()
	{
		var orangebg = document.getElementById("orange-background");
                             	   
        var dlg = document.getElementById("dlgbox");
                             	   
        orangebg.style.display ="block";
                             	   
        dlg.style.display ="block";

        
                             	
	}

	function showDialogForStep8()
	{
		var orangebg = document.getElementById("orange-background");
                             	   
        var dlg8 = document.getElementById("dlgbox8");
                             	   
        orangebg.style.display ="block";
                             	   
        dlg8.style.display ="block";

        
                             	
	}

	function hideDialogAfterOneAspect()
	{
		$("#dlgbox,#orange-background").hide(6000 , function(){

			

		    document.getElementById("valence").style.display = "flex";


		}); 

		
	}

	function showDialogErrorDuplicateValues()
	{
		document.getElementById("orange-background").style.display ="block";
                             	   
        document.getElementById("dlgboxErrorDuplicateValues").style.display ="block";

        $("#closeDuplicates").click(function(){

        	$("#dlgboxErrorDuplicateValues,#orange-background").hide();


        });
                             	   
       
	}

	function showDialogErrorMinMax(max)
	{
		document.getElementById("orange-background").style.display ="block";

		document.getElementById("dlgheaderErrorMinMax").textContent ="Toutes les valeurs ne sont pas comprises entre 1 et "+max;
                             	   
        document.getElementById("dlgboxErrorMinMax").style.display ="block";

        $("#closeMinMax").click(function(){

        	$("#dlgboxErrorMinMax,#orange-background").hide();


        });
                             	   
       
	}

	function showDialogErrorValence()
	{
		document.getElementById("orange-background").style.display ="block";
                             	   
        document.getElementById("dlgboxErrorValence").style.display ="block";

        $("#closeErrorValence").click(function(){

        	$("#dlgboxErrorValence,#orange-background").hide();


        });
                             	   
       
	}

	function showFormStep3(liste)
	{
		var aspectImportanceValenceTableElt = document.getElementById("aspect&Importance&ValenceTable");

		var tr0Elt = document.createElement("tr");

		var th0_1Elt = document.createElement("th");

		th0_1Elt.textContent ="Aspect";

		var th0_2Elt = document.createElement("th");

		th0_2Elt.textContent ="Ordre ";

		var th0_3Elt = document.createElement("th");

		th0_3Elt.textContent ="Valence";

		tr0Elt.appendChild(th0_1Elt);

		tr0Elt.appendChild(th0_2Elt);

		tr0Elt.appendChild(th0_3Elt);

		aspectImportanceValenceTableElt.appendChild(tr0Elt);

		for(var i=0;i<liste.length;i++)
		{
			var trIElt = document.createElement("tr");

			var td1_IElt = document.createElement("td");

			td1_IElt.textContent = liste[i].nameAspect ;

			var td2_IElt = document.createElement("td");

			td2_IElt.textContent = liste[i].importanceAspect ;

			var td3_IElt = document.createElement("td");

			// 6 INPUTS RADIO

			var nameInputValenceElt = "name_valence_"+(i+1);

			 

			//input 1

			var inputValenceElt1 = document.createElement("input");
			inputValenceElt1.setAttribute("type","radio");
			inputValenceElt1.setAttribute("name",nameInputValenceElt);
			inputValenceElt1.setAttribute("value","---");

			//label 1

			var labelValenceElt1 = document.createElement("label");
			labelValenceElt1.setAttribute("for","---");
			labelValenceElt1.textContent = "---";




			//input 2

			var inputValenceElt2 = document.createElement("input");
			inputValenceElt2.setAttribute("type","radio");
			inputValenceElt2.setAttribute("name",nameInputValenceElt);
			inputValenceElt2.setAttribute("value","--");

			//label 2

			var labelValenceElt2 = document.createElement("label");
			labelValenceElt2.setAttribute("for","--");
			labelValenceElt2.textContent = "--";

			//input 3

			var inputValenceElt3 = document.createElement("input");
			inputValenceElt3.setAttribute("type","radio");
			inputValenceElt3.setAttribute("name",nameInputValenceElt);
			inputValenceElt3.setAttribute("value","-");

			//label 3

			var labelValenceElt3 = document.createElement("label");
			labelValenceElt3.setAttribute("for","-");
			labelValenceElt3.textContent = "-";

			//input 4

			var inputValenceElt4 = document.createElement("input");
			inputValenceElt4.setAttribute("type","radio");
			inputValenceElt4.setAttribute("name",nameInputValenceElt);
			inputValenceElt4.setAttribute("value","+");

			//label 4

			var labelValenceElt4 = document.createElement("label");
			labelValenceElt4.setAttribute("for","+");
			labelValenceElt4.textContent = "+";

			//input 5

			var inputValenceElt5 = document.createElement("input");
			inputValenceElt5.setAttribute("type","radio");
			inputValenceElt5.setAttribute("name",nameInputValenceElt);
			inputValenceElt5.setAttribute("value","++");

			//label 5

			var labelValenceElt5 = document.createElement("label");
			labelValenceElt5.setAttribute("for","++");
			labelValenceElt5.textContent = "++";

			//input 6

			var inputValenceElt6 = document.createElement("input");
			inputValenceElt6.setAttribute("type","radio");
			inputValenceElt6.setAttribute("name",nameInputValenceElt);
			inputValenceElt6.setAttribute("value","+++");

			//label 6

			var labelValenceElt6 = document.createElement("label");
			labelValenceElt6.setAttribute("for","+++");
			labelValenceElt6.textContent = "+++";

			td3_IElt.appendChild(inputValenceElt1);
			td3_IElt.appendChild(document.createTextNode(" "));
			td3_IElt.appendChild(labelValenceElt1);
			td3_IElt.appendChild(document.createTextNode(" / "));

			td3_IElt.appendChild(inputValenceElt2);
			td3_IElt.appendChild(document.createTextNode(" "));
			td3_IElt.appendChild(labelValenceElt2);
			td3_IElt.appendChild(document.createTextNode(" / "));

			td3_IElt.appendChild(inputValenceElt3);
			td3_IElt.appendChild(document.createTextNode(" "));
			td3_IElt.appendChild(labelValenceElt3);
			td3_IElt.appendChild(document.createTextNode(" / "));

			td3_IElt.appendChild(inputValenceElt4);
			td3_IElt.appendChild(document.createTextNode(" "));
			td3_IElt.appendChild(labelValenceElt4);
			td3_IElt.appendChild(document.createTextNode(" / "));

			td3_IElt.appendChild(inputValenceElt5);
			td3_IElt.appendChild(document.createTextNode(" "));
			td3_IElt.appendChild(labelValenceElt5);
			td3_IElt.appendChild(document.createTextNode(" / "));

			td3_IElt.appendChild(inputValenceElt6);
			td3_IElt.appendChild(document.createTextNode(" "));
			td3_IElt.appendChild(labelValenceElt6);

			trIElt.appendChild(td1_IElt);
			trIElt.appendChild(td2_IElt);
			trIElt.appendChild(td3_IElt);

			aspectImportanceValenceTableElt.appendChild(trIElt);
			
		}

		formAspectsValenceElt.addEventListener("submit",function(e){

			var compteur = 0;

			for(var i=0;i<liste.length;i++)
			{
				var nameInputValence = "name_valence_"+(i+1);

				var valencesPerAspect = document.getElementsByName(nameInputValence);

				var valence_value;

				

				//formAspectsElt.elements.aspectpsy.value = "";

				for(var ii=0;ii<valencesPerAspect.length;ii++) // Je parcours tous les input
				{
					if(valencesPerAspect[ii].checked)
					{
						valence_value = valencesPerAspect[ii].value;

						compteur++;

						break;
					}
				}

				
			}

			if(compteur===liste.length)
			{
				//Tout est rempli

				for(var i=0;i<liste.length;i++)
				{
					var nameInputValence = "name_valence_"+(i+1);

					var valencesPerAspect = document.getElementsByName(nameInputValence);

					

					for(var ii=0;ii<valencesPerAspect.length;ii++)
					{
						if(valencesPerAspect[ii].checked)
						{
							
							liste[i].valenceAspect = valencesPerAspect[ii].value;

							break;
						}
					}
				}


				$("#valence").hide();

				finalUser.listeAspectImportanceValenceUser = liste; // ATTRIBUT 1 OBJET FINAL


				document.getElementById("protocoleChirurgieObesite").style.display = "flex";

				formprotocoleChirurgieObesiteElt.addEventListener("submit",function(e){

					var verifyprotocoleChirurgieObesite=0;

					

					var protocoleChirurgieObesiteRadioElts = document.getElementsByName("nameprotocoleChirurgieObesite");

					for(var i=0;i<protocoleChirurgieObesiteRadioElts.length;i++)
					{
						if(protocoleChirurgieObesiteRadioElts[i].checked)
						{
							verifyprotocoleChirurgieObesite++;

							finalUser.souhaitUser = protocoleChirurgieObesiteRadioElts[i].value; // ATTRIBUT 2 OBJET FINAL


							break;
						}
					}

					if(verifyprotocoleChirurgieObesite ===0)
					{
						//Rien de cocher -> erreur

						showDialogErrorProtocoleChirurgie();

					}else{

						

						

						$("#protocoleChirurgieObesite").hide();

						

						document.getElementById("operation").style.display = "flex";


						formOperationElt.addEventListener("submit",function(e){

							var verifyOperation=0;

						var operationRadioElts = document.getElementsByName("nameOperation");

						for(var i=0;i<operationRadioElts.length;i++)
						{
							if(operationRadioElts[i].checked)
							{
								verifyOperation++;

								break;
							}

						}

						if(verifyOperation>0)
						{

							for(var i=0;i<operationRadioElts.length;i++)
							{
								if(operationRadioElts[i].checked)
								{
									finalUser.isOperationUser = operationRadioElts[i].value; // ATTRIBUT 3 OBJET FINAL

									break;
								}

							}

							

							if(finalUser.isOperationUser==="Oui")
							{

								

								document.getElementById("formOperation").style.display = "none";

								document.getElementById("formOperationDate").style.display = "block";

								document.getElementById("dateOperation").focus();

								formOperationDateElt.addEventListener("submit",function(e){

									var dateUser = formOperationDateElt.elements.dateOperation.value.trim();

									if(dateUser.length !=0)
									{
										//Why not verifying if dateUser repects regex nn/nn/nnnn ? Think about it !

										finalUser.dateOperationUser=dateUser;  // ATTRIBUT 4 OBJET FINAL

										$("#operation").hide();

										document.getElementById("poidsPerdu").style.display = "flex";

										document.getElementById("namePoidsPerdu").focus();

										formPoidsPerduElt.addEventListener("submit",function(e){

											var poidsPerduDonuts = formPoidsPerduElt.elements.namePoidsPerdu.value.trim();

											if(poidsPerduDonuts.length !=0)
											{
												var poidsPerduDonutsInt = parseInt(poidsPerduDonuts);

												finalUser.poidsPerduUser = poidsPerduDonutsInt;   // ATTRIBUT 5 OBJET FINAL

												$("#poidsPerdu").hide();

												document.getElementById("satisfactionOperation").style.display = "flex";

												formSatisfactionOperationElt.addEventListener("submit",function(e){


													var verifySatisfactionOperation=0;

													var valueSatisfaction;

													var satisfactionOperationRadioElts = document.getElementsByName("nameSatisfactionOperation");

													for(var i=0;i<satisfactionOperationRadioElts.length;i++)
													{
														if(satisfactionOperationRadioElts[i].checked)
														{
															verifySatisfactionOperation++;
															valueSatisfaction=satisfactionOperationRadioElts[i].value;
															break;
														}
													}

													if(verifySatisfactionOperation >0)
													{
														// ATTRIBUT 6 OBJET FINAL

														finalUser.satisfactionOperationUser = valueSatisfaction;

														$("#satisfactionOperation").hide();

														suiteQuestionsdeSexeASituationFamiliale();

													}else{

														$("#aucuneSatisfactionOperation").show();


													}


													e.preventDefault();
												});



											}else{

												$("#aucunPoidsPerdu").show();


											}




											e.preventDefault();
										});





									}else{

										$("#aucuneDateOperation").show();



									}



									e.preventDefault(); 
								});

								//finalUser.dateOperationUser=;

								//Combien de poids perdu ?

								//conclusionAppears();

							}else{ // finalUser.isOperationUser==="Non"

								

								document.getElementById("operation").style.display = "none";

								finalUser.dateOperationUser=""; // ATTRIBUT 4 OBJET FINAL
								
								finalUser.poidsPerduUser = 0;   // ATTRIBUT 5 OBJET FINAL
								
								finalUser.satisfactionOperationUser = "Aucune satisfaction"; // ATTRIBUT 6 OBJET FINAL

								showDialogForStep8();

								$("#dlgbox8,#orange-background").hide(6000 , function(){


						        	suiteQuestionsdeSexeASituationFamiliale();
                             	   
        

								}); 

								
							}

						}else{

							//rien de cocher erreur

							

							$("#aucunChoixOperation").show();

							
						}

							

							e.preventDefault();
						});
	


					}



					e.preventDefault();
				});


			} else{

				//Veuillez choisir une valence pour chaque aspect

				showDialogErrorValence();

			}

			e.preventDefault();
		});


	}

	

	

	function showDialogErrorProtocoleChirurgie()
	{
		document.getElementById("orange-background").style.display ="block";
                             	   
        document.getElementById("dlgboxErrorProtocoleChirurgie").style.display ="block";

        $("#closeErrorProtocoleChirurgie").click(function(){

        	$("#dlgboxErrorProtocoleChirurgie,#orange-background").hide(); 


        }); 
                             	   
       
	}

	function conclusionAppears()
	{
		document.getElementById("conclusion").style.display = "flex"; 

				
	}

	

	function suiteQuestionsdeSexeASituationFamiliale()
	{
		document.getElementById("sexe").style.display = "flex";

		formSexeElt.addEventListener("submit",function(e){

			var verifySexe=0;

			var valueSexe;

			var sexeRadioElts = document.getElementsByName("nameSexe");

			for(var i=0;i<sexeRadioElts.length;i++)
			{
				if(sexeRadioElts[i].checked)
				{
					verifySexe++;
					valueSexe=sexeRadioElts[i].value;
					break;
				}
			}

			if(verifySexe>0)
			{

				// ATTRIBUT 7 OBJET FINAL

				finalUser.sexePersonneUser = valueSexe;

				

				$("#sexe").hide();

				document.getElementById("age").style.display = "flex";

				document.getElementById("nameAge").focus();

				formAgeElt.addEventListener("submit",function(e){

					var ageDonuts = formAgeElt.elements.nameAge.value.trim();

					if(ageDonuts.length !=0)
					{
						var ageDonutsInt = parseInt(ageDonuts);

						// ATTRIBUT 8 OBJET FINAL

						finalUser.agePersonneUser = ageDonutsInt;

						

						$("#age").hide();

						document.getElementById("taille").style.display = "flex";

						document.getElementById("nameTaille").focus();

						formTailleElt.addEventListener("submit",function(e){

							var tailleDonuts = formTailleElt.elements.nameTaille.value.trim();

							if(tailleDonuts.length !=0)
							{
								var tailleDonutsInt = parseInt(tailleDonuts);

								// ATTRIBUT 9 OBJET FINAL

								finalUser.taillePersonneUser = tailleDonutsInt;

								

								$("#taille").hide();

								document.getElementById("poidsPersonne").style.display = "flex";

								document.getElementById("namePoidsPersonne").focus();

								formPoidsPersonneElt.addEventListener("submit",function(e){

									var poidsPersonneDonuts = formPoidsPersonneElt.elements.namePoidsPersonne.value.trim();

									if(poidsPersonneDonuts.length !=0)
									{
										var poidsPersonneDonutsInt = parseInt(poidsPersonneDonuts);

										// ATTRIBUT 10 OBJET FINAL

										finalUser.poidsPersonneUser = poidsPersonneDonutsInt;


										$("#poidsPersonne").hide();

										document.getElementById("situationFamiliale").style.display = "flex";

										formSituationFamilialeElt.addEventListener("submit",function(e){

											var verifySituationFamiliale=0;

											var valueSituationFamiliale;

											var situationFamilialeRadioElts=document.getElementsByName("nameSituationFamiliale");

											for(var i=0;i<situationFamilialeRadioElts.length;i++)
											{
												if(situationFamilialeRadioElts[i].checked)
												{
													verifySituationFamiliale++;
													valueSituationFamiliale = situationFamilialeRadioElts[i].value;
													break;
												}
											}

											if(verifySituationFamiliale >0)
											{

												// ATTRIBUT 11 OBJET FINAL

												finalUser.situationFamilialeUser = valueSituationFamiliale;

												

												$("#situationFamiliale").hide();

												document.getElementById("enfants").style.display = "flex";

												formEnfants1Elt.addEventListener("submit",function(e){

													var verifyEnfants1=0;

													var valueEnfants1;

													var enfants1RadioElts = document.getElementsByName("nameEnfants1");

													for(var i=0;i<enfants1RadioElts.length;i++)
													{
														if(enfants1RadioElts[i].checked)
														{
															verifyEnfants1++;
															valueEnfants1 = enfants1RadioElts[i].value;
															break;

														}
													}

													if(verifyEnfants1>0)
													{
														

														finalUser.isEnfantsUser = valueEnfants1; // ATTRIBUT 12 OBJET FINAL

														

														if(finalUser.isEnfantsUser==="Oui")
														{

															document.getElementById("formEnfants1").style.display = "none";

															document.getElementById("formEnfants2").style.display = "block";

															document.getElementById("nameEnfants2").focus();

															formEnfants2Elt.addEventListener("submit",function(e){

																var nbreEnfantsDonuts = formEnfants2Elt.elements.nameEnfants2.value.trim();

																var nbreEnfantsDonutsInt = parseInt(nbreEnfantsDonuts);

																if(nbreEnfantsDonutsInt>=1)
																{

																	finalUser.nbreEnfantsUser=nbreEnfantsDonutsInt; // ATTRIBUT 13 OBJET FINAL

																	finalUser.uniqueIdUser = uniqueIdSum(); // ATTRIBUT 14 OBJET FINAL

																	finalUser.description();

																	//JS to JSON object

																	var dataToSend = JSON.stringify(finalUser);

																	console.log("JSON");

																	console.log(dataToSend);

																	$("#enfants").hide();

																	conclusionAppears();

																}else{

																	$("#aucunEnfants2").show();


																}



																e.preventDefault();
															});


														}else{

														//finalUser.isEnfantsUser==="Non"

														finalUser.nbreEnfantsUser=0; // ATTRIBUT 13 OBJET FINAL

														finalUser.uniqueIdUser = uniqueIdSum(); // ATTRIBUT 14 OBJET FINAL

														finalUser.description();

														//JS to JSON object

																	var dataToSend = JSON.stringify(finalUser);

																	console.log("JSON");

																	console.log(dataToSend);


														$("#enfants").hide();

														//Suite conclusion

														conclusionAppears();

														}

													}else{

														$("#aucunChoixEnfants1").show();


													}

													e.preventDefault();
												});


											}else{

												$("#aucuneSituationFamiliale").show();


											}

											e.preventDefault();
										});



									}else{

										$("#aucunPoidsPersonne").show();


									}

									e.preventDefault();
								});

							}else{

								$("#aucuneTaille").show();


							}


							e.preventDefault();
						});

					}else{

						$("#aucunAge").show();


					}


					e.preventDefault();
				});

			}else{

				$("#aucunSexe").show();


			}

			e.preventDefault();
		});


	}


	// Générer un id unique pour lier la liste des aspects et les autres questions en base de données

	function uniqueId1()
	{
		return 'uniqueId-' + Math.random().toString(36).substr(2, 16);
	}

	function uniqueId2()
	{
		var text = "";
  		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  		for (var i = 0; i < 5; i++)
  		{
    		text += possible.charAt(Math.floor(Math.random() * possible.length));
  		}

  		return text;
	}

	function uniqueIdSum()
	{
		var donuts1 =uniqueId1() ;
		var donuts2 =uniqueId2() ;
		var donutsSum = donuts1 + donuts2;

		return donutsSum;
	}

	/**  functions End **/


		//En cliquant sur smile, on passe à la 1ère question

		


	    $("#smile").click(function(){ 

	    	//Cacher le paragraphe présentation

	    	$("#presentation").hide();

	    	document.getElementById("presentation2").style.display = "flex";

	    	$("#suivantPresentation2").click(function(){

	    		$("#presentation2").hide();

	    		document.getElementById("aspects").style.display = "flex";

	    	//If the user doesn't enter at least one aspect, I show the form

	    	

	    	setTimeout(countDown40,20000); // 20 seconds -> user reading the rules //Maybe increase with a value bigger than 5 seconds

	    	});



	    	
        
    }); //En cliquant sur smile, on passe à la présentation 2

});
