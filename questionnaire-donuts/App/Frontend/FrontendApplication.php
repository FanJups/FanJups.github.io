<?php
namespace App\Frontend;

use \DONUTSFram\Application;
  
class FrontendApplication extends Application      
{
  public function __construct()    
  {
    parent::__construct();

    $this->name = 'Frontend';
  }

  public function run()
  {
    $controller = $this->getController();  
    $controller->execute(); 

    $typeAction = $controller->action(); 

    if($typeAction == "sendingForm" || $typeAction == "sendingEmailForm" ) 
    {

      //No need to show page

    }else{

      $this->httpResponse->setPage($controller->page());
      $this->httpResponse->send();  


    }

   
  } 
}