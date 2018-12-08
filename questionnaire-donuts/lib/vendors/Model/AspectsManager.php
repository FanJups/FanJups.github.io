<?php
namespace Model;

use \DONUTSFram\Manager;
use \Entity\Aspect;

abstract class AspectsManager extends Manager
{
	/**
   * Méthode permettant de récupérer une liste d'identifiants uniques reliant la liste
   des aspects et le reste du formulaire
   * 
   * @return array
   */
  abstract public function getListOfUniqueId();   

  /**
   * Méthode permettant d'ajouter un aspect.
   * @param $aspect l'aspect à ajouter
   * @return void
   */
  abstract public function add(Aspect $aspect);   
}