



$(document).ready(function(){



	function EmailUser(emailDonuts)
	{
		this.email =emailDonuts;
		
	}

	var finalEmailUser = new EmailUser("");

	var formConclusionElt = document.getElementById("formConclusion") ;

	document.getElementById("nameConclusion").focus();

	
	
		formConclusionElt.addEventListener("submit",function(e){

					var emailConclusion = formConclusionElt.elements.nameConclusion.value.trim();

					if( emailConclusion.length !=0 )
					{

						//ICI

						if(validateEmail(emailConclusion)===true) 
						{

							finalEmailUser.email = emailConclusion;

							//SENDING 

																	$.ajax({
																	        method: "POST",
																	        //contentType: "application/json",
																	        url: "/sendingEmailForm",
																	        
																	        data: JSON.stringify(finalEmailUser), 
																	        //dataType: 'json',
																	        

																	        success: function(data){
																	            //callBackAfterSending();

																	            console.log("SUCCESS: ", data);

																	            $("#formConclusion").hide();


																				$("#remerciementsConclusion").show();
																	        },

																	        error: function(e){

																	        	//alert("Echec de");

																	        	$("#echecEnvoiEmail").show();

																	        	console.log("ERROR: ", e); 
																	        }
																	});
							

							

						}else{

							//INVALID EMAIL

							$("#emailIncorrect2").show();


						}

						

					}else{

						formConclusionElt.elements.nameConclusion.value = "";

						document.getElementById("nameConclusion").focus();

					}

					e.preventDefault();
				});
	

	// DON'T FORGET TO SEND EMAIL TO VERIFY IF IT EXISTS OR NOT
	function validateEmail(email)
	{
		var re1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		var re2 = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    
    	return re1.test(String(email).toLowerCase());

	}

	

});

