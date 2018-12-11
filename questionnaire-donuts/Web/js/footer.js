

	$(document).ready(function(){



			function footerDate()
	{
		var date = new Date();

		var fullyear = date.getFullYear();

		document.getElementById("copyrightDonuts").textContent = "donuts-asso © "+fullyear;
	}

	footerDate();  //mise à jour date footer



	});