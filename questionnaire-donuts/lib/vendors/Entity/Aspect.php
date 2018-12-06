<?php

namespace Entity;

use \DONUTSFram\Entity;

class Aspect extends Entity
{
	protected $name; //string
	protected $importance; //int
	protected $valence;//string

	protected $uniqueId;

	protected $date;

	private static $_compteurAspect = 0;

	const VALENCE_3_NEGATIVE ="---";
	const VALENCE_2_NEGATIVE ="--";
	const VALENCE_1_NEGATIVE ="-";

	const VALENCE_3_POSITIVE ="+++";
	const VALENCE_2_POSITIVE ="++";
	const VALENCE_1_POSITIVE ="+";

	public function __construct()
	{

		self::$_compteurAspect++;

	}

	// date

	public function setDate(\DateTime $date)
	{
	    $this->date = $date;
	}

	public function getDate()
    {
    	return $this->date;
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

	//name

	public function setName($name)
	{
		if(is_string($name) && !empty($name))
		{
			$this->name = $name;

		}else{

			//Error

		}

		
	}

	public function getName()
	{
		return $this->name ;
	}

	//importance

	public function setImportance($importance)
	{
		$importance = (int) $importance;

		if($importance  >=1)
		{

			$this->importance = $importance;

		}else{

			//Error
		}

	}

	public function getImportance()
	{
		return $this->importance ;
	}

	//valence

	public function setValence($valence)
	{
		

		if(in_array($valence, array(self::VALENCE_3_NEGATIVE,self::VALENCE_2_NEGATIVE,self::VALENCE_1_NEGATIVE,self::VALENCE_3_POSITIVE,self::VALENCE_2_POSITIVE,self::VALENCE_1_POSITIVE) ))
		{
			$this->valence = $valence; 

		}else{

			//Error

		}
	}

	public function getValence() 
	{
		return $this->valence ;
	}

	public static function getCompteurAspect()
	{
		return self::$_compteurAspect;
	}

	
}