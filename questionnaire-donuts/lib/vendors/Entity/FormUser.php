<?php

namespace Entity;

use \DONUTSFram\Entity;

//Email 

/* https://www.tutorialspoint.com/php/php_sending_emails.htm */



class FormUser extends Entity 
{

	protected $localisation; // Pour plus tard

	protected $uniqueIdFormUser;

	private static $_compteurFormUser = 0;

	protected $arrayOfAspect=[];

	protected $souhaitUser; //string
	const SOUHAITUSER_OUI_1 ="Oui (J'ai entrepris des démarches)";
	const SOUHAITUSER_OUI_2 ="Oui (Je n'ai pas entrepris de démarche)";
	const SOUHAITUSER_NON ="Non";

	//Surgery

	protected $isOperationUser;//string
	const ISOPERATION_OUI ="Oui";
	const ISOPERATION_NON ="Non";
	

	protected $dateOperationUser; //date
	protected $poidsPerduUser ;
	protected $satisfactionOperationUser;


	protected $sexePersonneUser;
	const SEXE_FEMME ="Femme";
	const SEXE_HOMME ="Homme";

	protected $agePersonneUser;
	protected $taillePersonneUser;
	protected $poidsPersonneUser;

	protected $situationFamilialeUser;
	const SF_1 ="Célibataire";
	const SF_2 ="En couple";
	const SF_3 ="En concubinage";
	const SF_4 ="Mariée";
	const SF_5 ="Divorcée";
	
	protected $isEnfantsUser ;
	const ISEFTS_OUI ="Oui";
	const ISEFTS_NON ="Non";


	protected $nbreEnfantsUser ; 

	protected $connaissance;

	protected $date;


	public function __construct()
	{

		self::$_compteurFormUser++;

	}

	//uniqueIdFormUser

	public function setUniqueIdFormUser($uniqueIdFormUser)
	{
		
		$this->uniqueIdFormUser = $uniqueIdFormUser;

	}

	public function getUniqueIdFormUser()
	{
		return $this->uniqueIdFormUser ;
	}



	//arrayOfAspect

	public function addAspectInArray(Aspect $aspect)
	{
		
		$this->arrayOfAspect[] = $aspect;
	}

	public function getArrayOfAspect()
	{
		return $this->arrayOfAspect ;
	}

	public function setArrayOfAspect($arrayOfAspect)
	{
		
		$this->arrayOfAspect = $arrayOfAspect;
	}

	//souhait

	public function setSouhaitUser($souhaitUser)
	{
		
		
			$this->souhaitUser = $souhaitUser;

		

	}

	public function getSouhaitUser()
	{
		return $this->souhaitUser ;
	}

	//isOperation

	public function setIsOperationUser($isOperationUser)
	{
		
		
			$this->isOperationUser = $isOperationUser;

		

	}

	public function getIsOperationUser()
	{
		return $this->isOperationUser ;
	}

	// dateOPeration

	// "" || dd/MM/yyyy

	/* http://php.net/manual/fr/datetime.setdate.php */


	/*

		$patterni = "#^([0-9]{1,2})(\/)([0-9]{1,2})(\/)([0-9]{1,4})$#";

$patterno ="#^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)(\d{4})$#";

$x ="31/2/10";

if(preg_match($patterni, $x))
	    {
	    	echo "SUCCESS";

}else{
	
	echo "FAILURE";
}



	*/

	public function setDateOperationUser($dateOperationUser) 
	{
		if( strlen(trim($dateOperationUser)) ==0 ) // Pas d'opération
		{
			$dateOperationUser = NULL;

			$this->dateOperationUser = $dateOperationUser;

			

		}else{ //Opération effectuée  d/m/y


			$dmy=[];

			$dmy = FormUser::getArrayWithoutSlashes($dateOperationUser); 

			$d= (int) $dmy[0];  // date
			$m= (int) $dmy[1]; // month
			$y= (int) $dmy[2]; // year

			$dateFormUser = new \DateTime();
			$dateFormUser->setDate($y, $m, $d);
			$dateFormUser->format('Y-m-d');

			

			$this->dateOperationUser = $dateFormUser->format('Y-m-d');

		}

		

	}

	public function getDateOperationUser()
	{
		return $this->dateOperationUser ;
	}

	private static function getArrayWithoutSlashes($text)
	{
		$tab=[];

		$number='';

		for ($i=0; $i <strlen($text) ; $i++) 
		{ 
			if($text[$i] !='/')
			{
				$number = $number.$text[$i];

				//Je récupère le dernier mot

				if($i== strlen($text) -1)
				{
					$tab[]=$number;

				}

			}else{

			// "/"

				if($text[$i-1] !='/')
				{
					$tab[]=$number;

					$number='';
				}else{

				}

			}

		}

		return $tab;

	}

	// poids perdu

	public function getPoidsPerduUser()
	{
		return $this->poidsPerduUser ;
	}

	public function setPoidsPerduUser($poidsPerduUser)
	{
		$poidsPerduUser = (int) $poidsPerduUser;

		
		$this->poidsPerduUser = $poidsPerduUser;

	}

	// satisfaction opération

	public function getSatisfactionOperationUser()
	{
		return $this->satisfactionOperationUser;
	}

	public function setSatisfactionOperationUser($satisfactionOperationUser)
	{
		

		if(is_string($satisfactionOperationUser) && !empty($satisfactionOperationUser))
		{
			$this->satisfactionOperationUser = $satisfactionOperationUser;

		}else{

			//Error

		}

	}

	//sexe

	public function setSexePersonneUser($sexePersonneUser)
	{
		if(in_array($sexePersonneUser, array(self::SEXE_HOMME,self::SEXE_FEMME)))
		{
			$this->sexePersonneUser = $sexePersonneUser;

		}else{

			//Error


		}

	}

	public function getSexePersonneUser()
	{
		return $this->sexePersonneUser ;
	}

	// age

	public function getAgePersonneUser()
	{
		return $this->agePersonneUser ;
	}

	public function setAgePersonneUser($agePersonneUser)
	{
		$agePersonneUser = (int) $agePersonneUser;

		
		$this->agePersonneUser = $agePersonneUser;

	}

	// taille

	public function getTaillePersonneUser()
	{
		return $this->taillePersonneUser ;
	}

	public function setTaillePersonneUser($taillePersonneUser)
	{
		$taillePersonneUser = (int) $taillePersonneUser;

		
		$this->taillePersonneUser = $taillePersonneUser;

	}

	// poids

	public function getPoidsPersonneUser()
	{
		return $this->poidsPersonneUser ;
	}

	public function setPoidsPersonneUser($poidsPersonneUser)
	{
		$poidsPersonneUser = (int) $poidsPersonneUser;

		
		$this->poidsPersonneUser = $poidsPersonneUser;

	}

	// Situation familiale



	public function setSituationFamilialeUser($situationFamilialeUser)
	{
		
			$this->situationFamilialeUser = $situationFamilialeUser;

		

	}

	public function getSituationFamilialeUser()
	{
		return $this->situationFamilialeUser ;
	}

	//isEnfantsUser

	public function setIsEnfantsUser($isEnfantsUser)
	{
		
			$this->isEnfantsUser = $isEnfantsUser;


	}

	public function getIsEnfantsUser()
	{
		return $this->isEnfantsUser ;
	}

	// nbre enfants

	public function getNbreEnfantsUser()
	{
		return $this->nbreEnfantsUser ;
	}

	public function setNbreEnfantsUser($nbreEnfantsUser)
	{
		$nbreEnfantsUser = (int) $nbreEnfantsUser;

		
		$this->nbreEnfantsUser = $nbreEnfantsUser;

	}

		//connaissance

	public function setConnaissance($connaissance)
	{
		
		
			$this->connaissance = $connaissance;

		

	}

	public function getConnaissance()
	{
		return $this->connaissance ; 
	}

	public function setDate(\DateTime $date)
	{
	    $this->date = $date;
	}

	public function getDate()
    {
    	return $this->date;
    }

	public static function getCompteurFormUser()
	{
		return self::$_compteurFormUser;
	}

	
}
