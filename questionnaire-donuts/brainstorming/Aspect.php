<?php

class Aspect
{
	private $_name; //string
	private $_importance; //int
	private $_valence;//string

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

	//name

	public function setName($name)
	{
		if(is_string($name) && !empty($name))
		{
			$this->_name = $name;

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

			$this->_importance = $importance;

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
			$this->_valence = $valence;

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
