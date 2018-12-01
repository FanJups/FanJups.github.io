<?php

class EmailUser
{
	private static $_compteurEmailUser = 0;
	private $_date;
	private $email;

	public function __construct()
	{

		self::$_compteurEmailUser++;

	}

	public function setEmail($email) // Already verified by javascript
	{
	    

	    $pattern1 ='#^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$#';

	    $pattern2 ='#^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$#';

	    $pattern3 = "#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#";

	    if(preg_match($pattern1, $email))
	    {
	    	$this->_email = $email;

	    }else{

	    	//Error


	    }
	}

	public function getEmail()
    {
    	return $this->email;
    }

	public function setDate(\DateTime $date)
	{
	    $this->_date = $date;
	}

	public function getDate()
    {
    	return $this->date;
    }

	public static function getCompteurEmailUser()
	{
		return self::$_compteurEmailUser;
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