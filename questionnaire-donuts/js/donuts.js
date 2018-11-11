

$(document).ready(function(){

	

	var formAspectsElt;

	var listeAspects =[];

	var showImportance = false;

	var showValence = false;

	var showConclusion = false;

	var timing = 30;

	/** functions Start **/

	

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

			var countDownTimeOut = setTimeout(countDown30,1000);

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

		        	
		        	

		        	if(listeAspects.length > 1 || listeAspects.length === 1 )
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

							th0_2Elt.textContent ="Ordre importance";

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

								

								td0_2Elt.appendChild(inputImportanceElt) ; //INPUT

								trIElt.appendChild(td0_1Elt);

								trIElt.appendChild(td0_2Elt);

								aspectImportanceTableElt.appendChild(trIElt);
							}
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


	 		var aspect = formAspectsElt.elements.aspectpsy.value;

	 		if( aspect.trim().length !=0 )
	 		{
	 			listeAspects.push(aspect.trim());

	 			document.getElementById("aspectsResultats").appendChild(document.createTextNode(' "'+aspect.trim()+'" '));

	 			formAspectsElt.elements.aspectpsy.value = "";

	 		}else{

	 		}

	 		

	 		document.getElementById("aspectpsy").focus();

	 		e.preventDefault(); // Annulation de l'envoi des données


	 	}); //En cliquant sur submit, on saisit les aspects

        
	}

	function showDialog()
	{
		var orangebg = document.getElementById("orange-background");
                             	   
        var dlg = document.getElementById("dlgbox");
                             	   
        orangebg.style.display ="block";
                             	   
        dlg.style.display ="block";

        if (document.body)
        {
        	var winWidth = (document.body.clientWidth);
            var winHeight = (document.body.clientHeight);

        }else{

        	var winWidth = (window.innerWidth);
            var winHeight = (window.innerHeight);


        }

        //dlg.style.left = (winWidth/4) +"px";
                             	   
       // dlg.style.top = "200px";
                             	
	}

	/**  functions End **/


		//En cliquant sur smile, on passe à la 1ère question


	    $("#smile").click(function(){

	    	//Cacher le paragraphe présentation

	    	$("#presentation").hide();

	    	document.getElementById("aspects").style.display = "flex";

	    	//If the user doesn't enter at least one aspect, I show the form

	    	

	    	setTimeout(countDown30,5000); // 5 seconds -> user reading the rules

	    	
        
    }); //En cliquant sur smile, on passe à la 1ère question

});