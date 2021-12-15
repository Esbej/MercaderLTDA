function ValidateEmail() {
  inputText = document.getElementById("emailUser").value
  console.log("inputText", inputText)
  var mailformat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(yahoo|hotmail|gmail|correo)\.(com|usa|edu|co)(\W|$)/;
  if (inputText.match(mailformat)) {
      // alert("Ok: The email entered has the correct format (name@domain.domain)");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: The email is not in the correct format. Please correct (name@domain_name.domain) \ n \ n * To continue you MUST provide a valid email. *");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateIdentificacion(){
  inputText = document.getElementById("identificationUser").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 5 && inputText.length < 14) {
      // alert("Ok: valid identification ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid identification, the field must be greater than 5 and less than 14 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateName(){
  inputText = document.getElementById("nameUser").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 1 && inputText.length <= 80) {
      // alert("Ok: valid name ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid name, the field must be greater than 1 and less than 80 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateAddress(){
  inputText = document.getElementById("addressUser").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 5 && inputText.length <= 30) {
      // alert("Ok: valid address ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid address, the field must be greater than 5 and less than 30 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateCellPhone(){
  inputText = document.getElementById("cellphoneUser").value
  console.log("inputText", inputText.length )
  
  if (inputText.length >= 5  && inputText.length <= 10 ) {
      // alert("Ok: valid cellphone ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid cellphone, the field must be greater than 5 and less than 10 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validatePassword(){
  inputText = document.getElementById("passwordUser").value
  console.log("inputText", inputText)
  var mailformat = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  if (inputText.match(mailformat)) {
      // alert("Ok: password valid");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: The password must be include capital letter, lowercase, digits and symbols");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateCreate(){
    if(ValidateEmail() && validateIdentificacion() && validateName() && validateAddress() &&  validateCellPhone() &&   validatePassword()){
        return true;
    }
    return false;
}
/************************************************** */

function ValidateEmailU() {
  inputText = document.getElementById("emailUserU").value
  console.log("inputText", inputText)
  var mailformat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(yahoo|hotmail|gmail|correo)\.(com|usa|edu|co)(\W|$)/;
  if (inputText.match(mailformat)) {
      // alert("Ok: The email entered has the correct format (name@domain.domain)");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: The email is not in the correct format. Please correct (name@domain_name.domain) \ n \ n * To continue you MUST provide a valid email. *");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateIdentificacionU(){
  inputText = document.getElementById("identificationUserU").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 5 && inputText.length < 14) {
      // alert("Ok: valid identification ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid identification, the field must be greater than 5 and less than 14 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateNameU(){
  inputText = document.getElementById("nameUserU").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 1 && inputText.length <= 80) {
      // alert("Ok: valid name ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid name, the field must be greater than 1 and less than 80 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateAddressU(){
  inputText = document.getElementById("addressUserU").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 5 && inputText.length <= 30) {
      // alert("Ok: valid address ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid address, the field must be greater than 5 and less than 30 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateCellPhoneU(){
  inputText = document.getElementById("cellphoneUserU").value
  console.log("inputText", inputText.length )
  
  if (inputText.length >= 5  && inputText.length <= 10 ) {
      // alert("Ok: valid cellphone ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid cellphone, the field must be greater than 5 and less than 10 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validatePasswordU(){
  inputText = document.getElementById("passwordUserU").value
  console.log("inputText", inputText)
  var mailformat = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  if (inputText.match(mailformat)) {
      // alert("Ok: password valid");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: The password must be include capital letter, lowercase, digits and symbols");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateUpdate(){
    if(ValidateEmailU() && validateIdentificacionU() && validateNameU() && validateAddressU() &&  validateCellPhoneU() &&   validatePasswordU()){
        return true;
    }
    return false;
}

/*****************************************************
 * 
 */

 function ValidateEmail_() {
  inputText = document.getElementById("email").value
  console.log("inputText", inputText)
  var mailformat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(yahoo|hotmail|gmail|correo)\.(com|usa|edu|co)(\W|$)/;
  if (inputText.match(mailformat)) {
      // alert("Ok: The email entered has the correct format (name@domain.domain)");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: The email is not in the correct format. Please correct (name@domain_name.domain) \ n \ n * To continue you MUST provide a valid email. *");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateIdentificacion_(){
  inputText = document.getElementById("identification").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 5 && inputText.length < 14) {
      // alert("Ok: valid identification ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid identification, the field must be greater than 5 and less than 14 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateName_(){
  inputText = document.getElementById("name").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 1 && inputText.length <= 80) {
      // alert("Ok: valid name ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid name, the field must be greater than 1 and less than 80 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateAddress_(){
  inputText = document.getElementById("address").value
  console.log("inputText", inputText.length )
  
  if (inputText.length > 5 && inputText.length <= 30) {
      // alert("Ok: valid address ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid address, the field must be greater than 5 and less than 30 characters");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validateCellPhone_(){
  inputText = document.getElementById("cellphone").value
  console.log("inputText", inputText.length )
  
  if (inputText.length >= 5  && inputText.length <= 10 ) {
      // alert("Ok: valid cellphone ");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: invalid cellphone, the field must be greater than 5 and less than 10 characters ");
      //document.getElementById("useremail").focus()        
      return false;
  }
}

function validatePassword_(){
  inputText = document.getElementById("pass").value
  console.log("inputText", inputText)
  var mailformat = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  if (inputText.match(mailformat)) {
      // alert("Ok: password valid");
      //document.querySelector("useremail").focus();           
      
      return true;
  }
  else {
      console.log(inputText)
      alert("Attention: The password must be include capital letter, lowercase, digits and symbols");
      //document.getElementById("useremail").focus()        
      return false;
  }
}


function validateLogin(){
    if(ValidateEmail_() && validateIdentificacion_() && validateName_() && validateAddress_() &&  validateCellPhone_() &&   validatePassword_()){
        return true;
    }
    return false;
}