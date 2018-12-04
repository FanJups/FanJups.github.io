<?php

//Email 

/* https://www.tutorialspoint.com/php/php_sending_emails.htm */

require 'Aspect.php';

class FormUser
{

	protected $localisation; // Pour plus tard

	protected $uniqueId;

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

	protected $date;


	public function __construct()
	{

		self::$_compteurFormUser++;

	}

	//uniqueId  

	public function setUniqueId($uniqueId)
	{
		
		$this->uniqueId = $uniqueId;

	}

	public function getUniqueId()
	{
		return $this->uniqueId ;
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

	//souhait

	public function setSouhaitUser($souhaitUser)
	{
		if(in_array($souhaitUser, array(self::SOUHAITUSER_OUI_1,self::SOUHAITUSER_OUI_2,self::SOUHAITUSER_NON)))
		{
			$this->souhaitUser = $souhaitUser;

		}else{

			//Error


		}

	}

	public function getSouhaitUser()
	{
		return $this->souhaitUser ;
	}

	//isOperation

	public function setIsOperationUser($isOperationUser)
	{
		if(in_array($isOperationUser, array(self::ISOPERATION_OUI,self::ISOPERATION_NON)))
		{
			$this->isOperationUser = $isOperationUser;

		}else{

			//Error


		}

	}

	public function getIsOperationUser()
	{
		return $this->isOperationUser ;
	}

	// dateOPeration

	// "" || dd/MM/yyyy

	/* http://php.net/manual/fr/datetime.setdate.php */

	public function setDateOperationUser($dateOperationUser) 
	{
		if($dateOperationUser=="") // Pas d'opération
		{
			$dateOperationUser = NULL;

			

		}else{ //Opération effectuée  d/m/y


			$dmy=[];

			$dmy = getArrayWithoutSlashes($dateOperationUser);

			$d= (int) $dmy[0];  // date
			$m= (int) $dmy[1]; // month
			$y= (int) $dmy[2]; // year

			$dateFormUser = new DateTime();
			$dateFormUser->setDate($y, $m, $d);
			$dateFormUser->format('Y-m-d');

			$dateOperationUser = $dateFormUser;

		}

		$this->dateOperationUser = $dateOperationUser;

	}

	public function getDateOperationUser()
	{
		return $this->dateOperationUser ;
	}

	private function getArrayWithoutSlashes($text)
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
		if(in_array($situationFamilialeUser, array(self::SF_1,self::SF_2,self::SF_3,self::SF_4,self::SF_5)))
		{
			$this->situationFamilialeUser = $situationFamilialeUser;

		}else{

			//Error


		}

	}

	public function getSituationFamilialeUser()
	{
		return $this->situationFamilialeUser ;
	}

	//isEnfantsUser

	public function setIsEnfantsUser($isEnfantsUser)
	{
		if(in_array($isEnfantsUser, array(self::ISEFTS_OUI,self::ISEFTS_NON)))
		{
			$this->isEnfantsUser = $isEnfantsUser;

		}else{

			//Error


		}

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

	public function hydrate(array $donnees)
	{
		foreach ($donnees as $key => $value)
		{
			$method = 'set'.ucfirst($key);

			if(method_exists($this, $method))
			{
				$this->$method($value);
			}
		}
	}
}
