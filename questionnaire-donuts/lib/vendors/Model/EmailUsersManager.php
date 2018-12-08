<?php
namespace Model;

use \DONUTSFram\Manager;
use \Entity\EmailUser;

abstract class EmailUsersManager extends Manager
{
	

  /**
   * Méthode permettant d'ajouter un email.
   * @param $email l'email à ajouter
   * @return void
   */
  abstract public function add(EmailUser $email);    
}