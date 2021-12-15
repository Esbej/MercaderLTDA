const $frmlogin = document.querySelector("#frmlogin");

$frmlogin.addEventListener('submit', ($event) => {
    $event.preventDefault();
    const $email = document.querySelector("#email");
    const $password = document.querySelector("#pass");
    const $badrequest = document.querySelector("#bad-request")
    getUserbyEmailandPassword($email, $password, $badrequest)

});

async function getUserbyEmailandPassword(email, password, badrequest) {
    try {
        // debugger
        $emailValue = email.value.trim()
        $passwordValue = password.value.trim()
        const url = 'http://localhost:8080/api/user/' + $emailValue + '/' + $passwordValue
        const response = await fetch(url);
        const responseJson = await response.json();

        console.log("response:", responseJson);

        if (responseJson.id == null) {
            badrequest.classList.remove("d-none")
            badrequest.classList.add("d-flex")
            setTimeout(() => {
                badrequest.classList.remove("d-flex")
                badrequest.classList.add("d-none")
            }, 6000);

        }
        else {
            // const $welcome = document.querySelector("#welcome")
            sessionStorage.setItem('nombre', responseJson.name );
            sessionStorage.setItem('zona', responseJson.zone );
            sessionStorage.setItem('User', JSON.stringify(responseJson) );


            if(responseJson.type == 'ADM'){
                window.location.href = "inicio.html"           
            }else if (responseJson.type == 'ASE'){
                window.location.href = "Asesores.html"           
            }else if(responseJson.type == 'COORD'){
                window.location.href = "Coordinador.html" 
            }
                    
        }
    } catch (error) {
        console.log("error:", error)
    }
}

function autoInicio(){
    console.log(sessionStorage.getItem('nombre'))
    // debugger

    const $welcome = document.querySelector("#wel")
    $welcome.innerHTML = "<b style='text-transform: uppercase;'>" + sessionStorage.getItem('nombre') + "</b>";
}