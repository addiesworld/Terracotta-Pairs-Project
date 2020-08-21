class TeamMember {
    constructor(stafffirstname, staffsurname, position, imageURL, description, sex) {
        this.stafffirstname = stafffirstname;
        this.staffsurname = staffsurname;
        this.position = position;
        this.imageURL = imageURL;
        this.description = description;
        this.sex = sex;
    }
}

const Staff = [
    Steve = new TeamMember("Steve 'The Hair'", "Harrington", "Dingus", "../Images/About_Us_Images/Steve_Harrington.jpg", "Exercitation ea quis incididunt proident ipsum in. In deserunt veniam eu aliquip. Do deserunt nisi ullamco irure elit et voluptate nulla.", "Male"),
    Nancy = new TeamMember("Nancy", "Wheeler", "Badass", "../Images/About_Us_Images/Nancy_Wheeler.png", "Eiusmod ullamco aliqua ullamco consequat commodo non. Dolor ea Lorem nostrud eiusmod adipisicing adipisicing.  Eu aliquip laboris commodo dolore ut voluptate eiusmod aliqua quis eiusmod irure aute ullamco ut.", "Female"),
    Dustin = new TeamMember("Dustin", "Henderson", "Nerd", "../Images/About_Us_Images/Dustin.png", "Laborum dolor esse tempor Lorem nulla ad dolor.  Ex esse sint reprehenderit dolore fugiat enim eiusmod nisi commodo anim et excepteur fugiat.", "Male"),
    Eleven = new TeamMember("El '11'", "Hopper", "GateKeeper", "../Images/About_Us_Images/Eleven.jpg", "Consectetur ea reprehenderit quis duis magna sit cillum. Consectetur consequat nulla ad dolore pariatur esse id officia dolore elit nostrud minim est.", "Female"),
    Hopper = new TeamMember("Jim", "Hopper", "Security", "../Images/About_Us_Images/Hopper.jpeg", "Fugiat do id pariatur ut. Elit et sint cupidatat labore. Cupidatat adipisicing elit eu laborum magna velit tempor tempor cillum enim minim.", "Male"),
    Joyce = new TeamMember("Joyce", "Byers", "Legend", "../Images/About_Us_Images/Joyce.jpg", "Dolore aliquip ullamco nostrud ipsum est nostrud ad duis laboris esse magna. Amet cillum amet ex id voluptate reprehenderit in officia ex dolor amet occaecat.", "Female")
]

const staffContainer = document.getElementById("staff_container");
document.addEventListener("DOMContentLoaded", function(){
    for (var i = 0; i < Staff.length; i++) {
        CreateStaffObject(Staff[i])
    }
})

function CreateStaffObject(staff) {
    let card_container = document.createElement('div')
    card_container.classList.add('card')
    let imagemarkup = `        
    <div class="card_image">
        <img src="${imageTest(staff.imageURL, staff.sex)}" alt="${staff.stafffirstname} ${staff.staffsurname}" id="${staff.stafffirstname}_${staff.staffsurname}">
    </div>`
    card_container.innerHTML += imagemarkup

    let contentmarkup = `        
    <div class="content">
        <h3 class="card_name">${staff.stafffirstname} ${staff.staffsurname}</h3>
        <span class="card_name_underline"></span>
        <h3 class="card_title">${staff.position}</h3>
        <p class="card_text">                        
            ${staff.description}
        </p>
    </div>`
    card_container.innerHTML += contentmarkup
    staffContainer.appendChild(card_container)

    let image = document.getElementById(staff.stafffirstname+"_"+staff.staffsurname)

    image.onload = function () {
        if (image.naturalHeight > image.naturalWidth) {
            image.classList.add('tall_image')
            let offset = image.clientHeight - 200
            let half = offset/2
            image.style.marginTop= -half+"px"
        } else {
            image.classList.add('wide_image')    
            let offset = image.clientWidth - 200
            let half = offset/2
            image.style.marginLeft= -half+"px"
        }
    }
}

function imageTest(imageURL, sex) {
    let image = new Image()
    // let urlImage = imageURL
    // let urlImage = "sfdgfd"
    // image.src= urlImage
    image.src=imageURL
    if (image.width == 0) {
        if (sex == "Male") {
            return "../Images/About_Us_Images/Male_Placeholder.jpg"
        } else if (sex == "Female") {
            return "../Images/About_Us_Images/Female_Placeholder.jpg"
        }
    }
    else 
        return imageURL
}