<?php

//Email 

/* https://www.tutorialspoint.com/php/php_sending_emails.htm */

require 'Aspect.php';

public class FormUser
{

	private static $_compteurFormUser = 0;

	private $_arrayOfAspect=[];

	private $_souhaitUser; //string
	const SOUHAITUSER_OUI_1 ="Oui (J'ai entrepris des démarches)";
	const SOUHAITUSER_OUI_2 ="Oui (Je n'ai pas entrepris de démarche)";
	const SOUHAITUSER_NON ="Non";

	//Surgery

	private $_isOperationUser;//string
	const ISOPERATION_OUI ="Oui";
	const ISOPERATION_NON ="Non";
	

	private $_dateOperationUser; //date
	private $_poidsPerduUser ;
	private $_satisfactionOperationUser;


	private $_sexePersonneUser;
	private $_agePersonneUser;
	private $_taillePersonneUser;
	private $_poidsPersonneUser;
	private $_situationFamilialeUser;
	private $_isEnfantsUser ;
	private $_nbreEnfantsUser ;


	public function __construct()
	{

		self::$_compteurFormUser++;

	}

	//souhait

	public function setSouhaitUser($souhaitUser)
	{
		if(in_array($souhaitUser, array(self::SOUHAITUSER_OUI_1,self::SOUHAITUSER_OUI_2,self::SOUHAITUSER_NON)))
		{
			$this->_souhaitUser = $souhaitUser;

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
			$this->_isOperationUser = $isOperationUser;

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

			

		}else{ //Opération effectuée


			$dmy=[];

			$dmy = getArrayWithoutSlashes($dateOperationUser);

			$d= (int) $dmy[0];
			$m= (int) $dmy[1];
			$y= (int) $dmy[2];

			$date = new DateTime();
			$date->setDate($y, $m, $d);
			$date->format('Y-m-d');

			$dateOperationUser = $date;

		}

		$this->_dateOperationUser = $dateOperationUser;

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