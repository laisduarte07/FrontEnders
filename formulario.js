
const nameInput = document.querySelector ("#name");
const emailInput= document.querySelector ("#email"); 
const passwordInput= document.querySelector ("#password");
const addressForm = document.querySelector ("#adress-form");
const cepInput = document.querySelector ("#cep");
const addressInput = document.querySelector ("#address");
const cityInput = document.querySelector ("#city");
const neighborhoodInput = document.querySelector ("#neighborhood");
const regionInput = document.querySelector ("#region");
const formInputs = document.querySelectorAll ("[data-input]");

   
const closeButton = document.querySelector ("#close-message");

const fadeElement = document.querySelector ("#fade");


// Validate CEP input

cepInput.addEventListener ("keypress", (e) => {
    const onlyNumbers  = /[0-9]/;
    const inputValue= e.target.value 

    const key = String.fromCharCode (e.keyCode);


    // allow only numbers

    console.log (e.keyCode);
    console.log (key);
    if(!onlyNumbers.test(key)) {
        e.preventDefault () 
        return;
    }
});

//Get address event

cepInput.addEventListener ("keyup",  (e) => {

    const inputValue = e.target.value;

    //check if we have the correct length

     if (inputValue.length === 8) {
        getAddress(inputValue);
    }
  
});

// Get custumer address from API

const getAddress = async (cep) => {
    
    cepInput.blur();

    const apiUrl = `http:viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    addressInput.value = data.logradouro
    cityInput.value = data.localidade
    neighborhoodInput.value = data.bairro
    regionInput.value = data.uf 
 };

 


// Add or remove disabled atributte

const toggleDisabled = () => {
    if (regionInput.hasAttribute ("disabled")) {
    formInputs.forEach ((input) => {
        input.removeAttribute ("disabled");
    })
    } else {
    formInputs.forEach ((input) => {
     input.setAttribute ("disabled", "disabled");
    });
}
};

