<?php
namespace Model;

use \Entity\Aspect; 

class AspectsManagerPDO extends AspectsManager 
{
	public function getListOfUniqueId()
	{
	     
	    $q = $this->dao->prepare('SELECT DISTINCT uniqueIdAspect FROM aspectsdonuts ');  

	    $q->execute();
	    
	    $tab = $q->fetchAll();  
	    
	    return $tab;
	}

	/*

	public function add(Aspect $aspect)
  {
    $q = $this->dao->prepare('INSERT INTO aspectsdonuts SET nom = :nom, importance = :importance, valence = :valence, uniqueIdAspect = :uniqueIdAspect, date_time_aspect = NOW()');
 
    
    $q->bindValue(':nom', $aspect->getName());
    $q->bindValue(':importance', $aspect->getImportance(),\PDO::PARAM_INT);
    $q->bindValue(':valence', $aspect->getValence());
    $q->bindValue(':uniqueIdAspect', $aspect->getUniqueIdAspect());
    
    $q->execute();
    
    $aspect->setId($this->dao->lastInsertId());
  }*/

  public function add(Aspect $aspect)
  {
    

    $q = $this->dao->prepare('INSERT INTO aspectsdonuts (nom,importance,valence,uniqueIdAspect,date_time_aspect) VALUES(:nom,:importance,:valence,:uniqueIdAspect,NOW()) ');

    $q->execute(array(':nom'=>$aspect->getName(),':importance'=> (int) $aspect->getImportance(),':valence'=>$aspect->getValence(),':uniqueIdAspect'=>$aspect->getUniqueIdAspect()));
 
    
    //$aspect->setId($this->dao->lastInsertId());
  }



}




