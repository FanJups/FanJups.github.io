<?php
namespace App\Frontend\Modules\Form;

use \DONUTSFram\BackController;
use \DONUTSFram\HTTPRequest;
//use \Entity\Comment;
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
  
  
}
