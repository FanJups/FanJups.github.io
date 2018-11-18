

$(document).ready(function(){

	

	var formAspectsElt;

	var formAspectsImportanceElt = document.getElementById("formAspects&Importance") ; 

	var formAspectsValenceElt = document.getElementById("formAspects&Valence") ;

	var formConclusionElt = document.getElementById("formConclusion") ;

	var listeAspects =[];

	var listeInputs2 =[];

	var listeInputsValues2 =[];

	var listePresenceInputs2 =[];

	var showImportance = false;

	var showValence = false;

	var showConclusion = false;

	var timing = 30;

	var listeAspectUser =[]; // liste des aspects + importance + valence

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

	

	function countDown30()
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

			var countDownTimeOut = setTimeout(countDown30,1000); // Chrono chaque 1 s

			if(timing < 0)
			{
				clearTimeout(countDownTimeOut);
			}

		}else{


			// Timing negative

			if(listeAspects.length === 0)
			{
				timing = 30;

				document.getElementById("chrono").textContent = "30 secondes restantes";

				setTimeout(countDown30,1000); // 1second -> the chrono shows 30 first

				

			}else{ //The user entered something

					
					$("#aspects").hide(); 

		        	
		        	if(listeAspects.length === 1)
		        	{
		        		

		        		showDialogAfterOneAspect();

		        		

		        		var eltAspectUser = new AspectUser(listeAspects[0],1,""); 

		        		listeAspectUser.push(eltAspectUser); 

		        		listeAspectUser.forEach(function (aUser) {
        
        									console.log(aUser.description());
    									});

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
		        		console.log(listeAspects.length+" résultats");

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

										console.log("Etape 3 correct");

										

										for(var p=0;p<listeAspects.length;p++)
										{
											var eltAspectUser = new AspectUser(listeAspects[p],listeInputsValues2[p],"");

											listeAspectUser.push(eltAspectUser);
										}

										listeAspectUser.forEach(function (aUser) {
        
        									console.log(aUser.description());
    									});

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

	function hideDialogAfterOneAspect()
	{
		$("#dlgbox,#orange-background").hide(6000 , function(){

			

		    document.getElementById("valence").style.display = "flex";

		    document.getElementById("orange-background").style.display="none";
                             	   
        	document.getElementById("dlgbox").style.display="none";
                             	   
        

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

				console.log("valence "+(i+1)+" : "+valence_value);
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

				console.log("OK");

				liste.forEach(function (aUser) {
        
        									console.log(aUser.description());
    									});

				

				$("#valence").hide();

				document.getElementById("conclusion").style.display = "flex"; 

				formConclusionElt.addEventListener("submit",function(e){

					var emailConclusion = formConclusionElt.elements.nameConclusion.value.trim();

					if( emailConclusion.length !=0 )
					{

						//ICI

						if(validateEmail(emailConclusion)===true)
						{
							$("#motConclusion").hide();

							$("#smileConclusion").hide();

							$("#formConclusion").hide();


							$("#remerciementsConclusion").show();

						}else{

							//INVALID EMAIL

							showDialogErrorEmail();


						}

						

					}else{

						formConclusionElt.elements.nameConclusion.value = "";

						document.getElementById("nameConclusion").focus();

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

	// DON'T FORGET TO SEND EMAIL TO VERIFY IF IT EXISTS OR NOT
	function validateEmail(email)
	{
		var re1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		var re2 = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    
    	return re1.test(String(email).toLowerCase());

	}

	function showDialogErrorEmail()
	{
		document.getElementById("orange-background").style.display ="block";
                             	   
        document.getElementById("dlgboxErrorEmail").style.display ="block";

        $("#closeErrorEmail").click(function(){

        	$("#dlgboxErrorEmail,#orange-background").hide();


        });
                             	   
       
	}

	function footerDate()
	{
		var date = new Date();

		var fullyear = date.getFullYear();

		document.getElementById("copyrightDonuts").textContent = "donuts-asso © "+fullyear;
	}

	/**  functions End **/


		//En cliquant sur smile, on passe à la 1ère question

		footerDate();  //mise à jour date footer


	    $("#smile").click(function(){

	    	//Cacher le paragraphe présentation

	    	$("#presentation").hide();

	    	document.getElementById("aspects").style.display = "flex";

	    	//If the user doesn't enter at least one aspect, I show the form

	    	

	    	setTimeout(countDown30,5000); // 5 seconds -> user reading the rules

	    	
        
    }); //En cliquant sur smile, on passe à la 1ère question

});
