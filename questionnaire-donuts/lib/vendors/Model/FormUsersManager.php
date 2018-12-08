<?php
namespace Model;

use \DONUTSFram\Manager;
use \Entity\FormUser;

abstract class FormUsersManager extends Manager
{
	/**
   * Méthode permettant d'ajouter le reste du formulaire.
   * @param $formUser le reste de formulaire à ajouter 
   * @return void
   */
  abstract public function add(FormUser $formUser); 

}