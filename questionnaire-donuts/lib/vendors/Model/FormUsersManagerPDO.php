<?php
namespace Model;

use \Entity\FormUser;

class FormUsersManagerPDO extends FormUsersManager
{

	public function add(FormUser $formUser) 
  {
    $q = $this->dao->prepare('INSERT INTO formdonuts SET uniqueIdFormUser = :uniqueIdFormUser, souhaitUser = :souhaitUser, isOperationUser = :isOperationUser, dateOperationUser = :dateOperationUser,poidsPerduUser = :poidsPerduUser,  satisfactionOperationUser= :satisfactionOperationUser, sexe = :sexe, age = :age,taille = :taille, poids = :poids,situationFamilialeUser = :situationFamilialeUser, isEnfantsUser = :isEnfantsUser,nbreEnfantsUser = :nbreEnfantsUser,connaissance = :connaissance, date_time_form = NOW()');

    
    
    $q->bindValue(':uniqueIdFormUser', $formUser->getUniqueIdFormUser());
    $q->bindValue(':souhaitUser',$formUser->getSouhaitUser());
    $q->bindValue(':isOperationUser', $formUser->getIsOperationUser());
    $q->bindValue(':dateOperationUser',$formUser->getDateOperationUser());
    $q->bindValue(':poidsPerduUser',$formUser->getPoidsPerduUser(), \PDO::PARAM_INT);
    $q->bindValue(':satisfactionOperationUser',$formUser->getSatisfactionOperationUser());
    $q->bindValue(':sexe',$formUser->getSexePersonneUser());
    $q->bindValue(':age', $formUser->getAgePersonneUser(), \PDO::PARAM_INT);
    $q->bindValue(':taille', $formUser->getTaillePersonneUser(), \PDO::PARAM_INT);
    $q->bindValue(':poids', $formUser->getPoidsPersonneUser(), \PDO::PARAM_INT);
    $q->bindValue(':situationFamilialeUser', $formUser->getSituationFamilialeUser());
    $q->bindValue(':isEnfantsUser', $formUser->getIsEnfantsUser());
    $q->bindValue(':nbreEnfantsUser', $formUser->getNbreEnfantsUser(), \PDO::PARAM_INT);
    $q->bindValue(':connaissance', $formUser->getConnaissance());
    
    
    $q->execute();
    
    $formUser->setId($this->dao->lastInsertId());
  }

}
