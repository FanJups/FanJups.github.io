<?php
namespace App\Frontend\Modules\Form;

use \DONUTSFram\BackController; 
use \DONUTSFram\HTTPRequest;
use \Entity\FormUser;
use \Entity\Aspect;
use \Entity\EmailUser;
//use \FormBuilder\CommentFormBuilder;
use \DONUTSFram\FormHandler; 

class FormController extends BackController    
{
  public function executeIndex(HTTPRequest $request)   
  {
     
    
    // On ajoute une définition pour le titre.
    $this->page->addVar('title', 'Mon poids et Moi');

    //Pour uniquement utiliser donuts.js
    $this->page->addVar('donuts', 'index');
  
   
  }

  public function executeEnterEmail(HTTPRequest $request) 
  {
     
    
    // On ajoute une définition pour le titre.
    $this->page->addVar('title', 'Mon poids et Moi : Email');

//Pour uniquement utiliser emailincorrect.js
    $this->page->addVar('donutsEmail', 'email');
  
   
  }

  public function executeSendingEmailForm(HTTPRequest $request)
  {
    $jsonString = file_get_contents("php://input");

    $dataEmail = json_decode($jsonString); // JSON -> PHP

    $emailToSend = new EmailUser();

    $emailToSend->setEmail($dataEmail->email);

    //insertion bdd de l'email

    $this->managers->getManagerOf('EmailUsers')->add($emailToSend);



  }

  public function executeSendingForm(HTTPRequest $request)
  {



    $jsonString = file_get_contents("php://input");

    
    $data = json_decode($jsonString); // JSON -> PHP

    $listeAspectImportanceValenceUser = $data->listeAspectImportanceValenceUser; 


    $souhaitUser = $data->souhaitUser;
    $isOperationUser = $data->isOperationUser;
    $dateOperationUser = $data->dateOperationUser; 
    $poidsPerduUser = $data->poidsPerduUser;
    $satisfactionOperationUser = $data->satisfactionOperationUser;
    $sexePersonneUser = $data->sexePersonneUser;
    $agePersonneUser = $data->agePersonneUser;
    $taillePersonneUser = $data->taillePersonneUser;
    $poidsPersonneUser = $data->poidsPersonneUser;
    $situationFamilialeUser = $data->situationFamilialeUser;
    $isEnfantsUser = $data->isEnfantsUser;
    $nbreEnfantsUser = $data->nbreEnfantsUser;
    $uniqueIdUser = $data->uniqueIdUser;  

    

    $arrayUniqueIdUser = $this->managers->getManagerOf('Aspects')->getListOfUniqueId();

    

    // Si $uniqueIdUser est unique, j'enregistre les résultats

    // Sinon, j'attribue un nouveau id unique en faisant

    
    //$uniqueIdUser = str_shuffle($uniqueIdUser);


    while (in_array($uniqueIdUser,$arrayUniqueIdUser)) 
    {
        $uniqueIdUser = str_shuffle($uniqueIdUser);


    }


    foreach($listeAspectImportanceValenceUser as $listeAspectImportanceValenceUser_Elt){ 
     
      $nameAspect = $listeAspectImportanceValenceUser_Elt->nameAspect;
      $importanceAspect = $listeAspectImportanceValenceUser_Elt->importanceAspect;
      $valenceAspect = $listeAspectImportanceValenceUser_Elt->valenceAspect;

      $aspect = new Aspect();

      $aspect->setName($listeAspectImportanceValenceUser_Elt->nameAspect);
      $aspect->setImportance($listeAspectImportanceValenceUser_Elt->importanceAspect);
      $aspect->setValence($listeAspectImportanceValenceUser_Elt->valenceAspect);
      $aspect->setUniqueIdAspect($uniqueIdUser);

      //insertion bdd de chaque aspect

      $this->managers->getManagerOf('Aspects')->add($aspect);

    }


    $formUser = new FormUser();

    $formUser->setArrayOfAspect($listeAspectImportanceValenceUser);
    $formUser->setSouhaitUser($souhaitUser);
    $formUser->setIsOperationUser($isOperationUser);
    $formUser->setDateOperationUser($dateOperationUser);
    $formUser->setPoidsPerduUser($poidsPerduUser);
    $formUser->setSatisfactionOperationUser($satisfactionOperationUser);
    $formUser->setSexePersonneUser($sexePersonneUser);
    $formUser->setAgePersonneUser($agePersonneUser);
    $formUser->setTaillePersonneUser($taillePersonneUser); 
    $formUser->setPoidsPersonneUser($poidsPersonneUser);
    $formUser->setSituationFamilialeUser($situationFamilialeUser);
    $formUser->setIsEnfantsUser($isEnfantsUser);
    $formUser->setNbreEnfantsUser($nbreEnfantsUser);
    $formUser->setUniqueIdFormUser($uniqueIdUser); 

    //insertion de formUser 

   $this->managers->getManagerOf('FormUsers')->add($formUser);

    //$newJsonString = json_encode($data);
    //header('Content-Type: application/json');
   // echo $newJsonString;



   // FIN COM 

   
  }
  
  
}