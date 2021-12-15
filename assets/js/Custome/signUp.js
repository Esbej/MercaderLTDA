const $frmRegister = document.querySelector("#frmSignUp")

$frmRegister.addEventListener('submit', ($event) => {
  $event.preventDefault();
  debugger
  const $id = document.querySelector("#id");
  const $identification = document.querySelector("#identification");
  const $name = document.querySelector("#name")
  const $address = document.querySelector("#address");
  const $cellphone = document.querySelector("#cellphone");
  const $password = document.querySelector("#pass");
  const $password2 = document.querySelector("#passConfir");
  const $email = document.querySelector("#email");
  const $zone = document.querySelector("#zone");
  const $type = document.querySelector("#type");


  const $emailExis = document.querySelector("#emailExis")
  const $diffPass = document.querySelector("#diffPass")

  if ($password.value.trim() == $password2.value.trim()) {
    getUserByEmail($id, $identification, $name, $address, $cellphone, $password, $zone, $type, $email, $emailExis)
    $diffPass.classList.add("d-none")
    $diffPass.classList.remove("d-flex")
  }
  else {
    $diffPass.classList.remove("d-none")
    $diffPass.classList.add("d-flex")
  }
});

async function getUserByEmail(id, identification, name, address, cellphone, password, zone, type, email, emailExis) {
  // debugger
  try {
    $emailValue = email.value.trim()
    const url = 'http://localhost:8080/api/user/emailexist/' + $emailValue
    const response = await fetch(url)
    const responseJson = await response.json();
    console.log(responseJson)
    if (responseJson == true) {
      emailExis.classList.remove("d-none")
      emailExis.classList.add("d-flex")

    } else {
      sendDataToBackend(id, identification, name, address, cellphone, password, zone, type, email)
    }
  } catch (error) {

  }
}

async function sendDataToBackend(id, identification, name, address, cellphone, password, zone, type, email) {
  try {
    // $idValue = id.value.trim()
    $identificationValue = identification.value.trim()
    $nameValue = name.value.trim()
    $addressValue = address.value.trim()
    $cellphoneValue = cellphone.value.trim()
    $passwordValue = password.value.trim()
    $emailValue = email.value.trim()
    $zoneValue = zone.value.trim()
    $typeValue = type.value.trim()

    if (!validateLogin()) {
      alert("check the fields")
    } else {
      if ($identificationValue != null && $nameValue != null && $addressValue != null && $cellphoneValue != null && $passwordValue != null && $emailValue != null && $zoneValue != null && $typeValue != null) {

        const url = "http://localhost:8080/api/user/new";
        const fetchOptions = {
          method: "POST",
          body: JSON.stringify({
            identification: $identificationValue,
            name: $nameValue,
            address: $addressValue,
            cellPhone: $cellphoneValue,
            password: $passwordValue,
            email: $emailValue,
            zone: $zoneValue,
            type: $typeValue
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
        const response = await fetch(url, fetchOptions);
        const responseConverted = await response.json();
        console.log(`responseConverted`, responseConverted);

        window.location.href = "index.html";
        alert("creado")
      }
    }
  } catch (error) {
    console.log(`error`, error);
  }
}