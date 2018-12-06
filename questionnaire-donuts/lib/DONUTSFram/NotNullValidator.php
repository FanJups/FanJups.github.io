<?php
namespace DONUTSFram;

class NotNullValidator extends Validator
{
  public function isValid($value)
  {
    return $value != '';
  }
}