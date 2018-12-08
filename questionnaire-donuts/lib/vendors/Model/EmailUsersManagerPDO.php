<?php
namespace Model;

use \Entity\EmailUser; 

class EmailUsersManagerPDO extends EmailUsersManager 
{

	public function add(EmailUser $email)
  {
    

    $q = $this->dao->prepare('INSERT INTO emaildonuts (email,date_time_email) VALUES(:email,NOW()) ');

    $q->execute( array(':email' => $email->getEmail() ));
 
    
    //$aspect->setId($this->dao->lastInsertId());
  }

}