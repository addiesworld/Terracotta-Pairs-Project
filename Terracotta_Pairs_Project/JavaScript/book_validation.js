
const book_now_button = document.getElementById("submit_button");
console.log(book_now_button)
book_now_button.addEventListener("click", function(){
    console.log("Book Now Pressed")
    ValidationTest();
})

//#region Form Variables
const firstNameInput = document.getElementById("first_name_input")
let firstNameValue
const lastNameInput = document.getElementById("last_name_input")
let lastNameValue
const emailInput = document.getElementById("email_input")
let emailValue
const phoneInput = document.getElementById("phone_input")
let phoneValue
const countryInput = document.getElementById("country_input")
let countryValue
const subjectInput = document.getElementById("subject_input")
let subjectValue
//#endregion

const nameFormat = /^[A-Za-z]+$/
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const numberFormat = /^[0-9]+$/

const validCountries = [ "united-kingdom", "roi", "austria", "belgium", "bulgaria", "roc", "czech-republic", "denmark", "estonia", "finland", "france", "germany", "greece", "hungary", "italy",
"latvia", "lithuania", "luxumbourg", "malta", "netherlands", "poland", "portugal", "romania", "slovakia", "slovenia", "spain", "sweden", "australia", "canada", "usa"]
class Request {
    constructor(firstname, lastname, email, phone, country, subject) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.country = country;
        this.subject = subject;
    }
}

let BookingRequests = []

function ValidationTest() {
    if (firstNameInput!= null && lastNameInput!=null&&emailInput!=null&&phoneInput!=null&&countryInput!=null) {
        ValidateCountry(countryInput)
        if (ValidateStrings(firstNameInput,lastNameInput,subjectInput) && ValidateEmail(emailInput)
        && ValidateNumber(phoneInput) && ValidateCountry(countryInput)) {
            // console.log("Valid Data")
            CreateRequest(firstNameValue, lastNameValue, emailValue, phoneValue, countryValue)
        } else {
            console.log("Invalid Data")
        }
    } else {
        console.log("Missing Element Selected")
    }
}

function ValidateStrings(_firstName, _lastName, _subject) {
    if (_firstName.value.match(nameFormat) && _lastName.value.match(nameFormat) && _subject.value!= null) {
        firstNameValue = _firstName.value
        lastNameValue = _lastName.value
        subjectValue = _subject.value
        return true
    } else {
        return false
    }
}

function ValidateEmail(_email) {
    if (_email.value.match(emailFormat)) {
        emailValue = _email.value
        return true
    } else {
        return false
    }
}

function ValidateNumber(_number) {
    if(_number.value.match(numberFormat)) {
        phoneValue = _number.value
        return true
    } else {
        return false
    }
}

function ValidateCountry(_country) {
    console.log(_country.value)
    if (validCountries.includes(_country.value)) {
        countryValue = _country.value
        return true
    } else {
        return false
    }
}

function CreateRequest(_firstName, _lastName, _email, _phone, _country, _subject) {
    let newRequest = new Request(_firstName, _lastName, _email, _phone, _country, _subject)
    BookingRequests.push(newRequest)
    console.log(newRequest)
}
