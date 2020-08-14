

class TeamMember {
    constructor(stafffirstname, staffsurname, position, imageURL, description) {
        this.stafffirstname = stafffirstname;
        this.staffsurname = staffsurname;
        this.position = position;
        this.imageURL = imageURL;
        this.description = description;
    }
}

const Staff = [
    Steve = new TeamMember("Steve", "Harrington", "Dingus", "../Images/About_Us_Images/Steve_Harrington.jpg", "Exercitation ea quis incididunt proident ipsum in. In deserunt veniam eu aliquip. Do deserunt nisi ullamco irure elit et voluptate nulla."),
    Nancy = new TeamMember("Nancy", "Wheeler", "Badass", "../Images/About_Us_Images/Nancy_Wheeler.png", "Eiusmod ullamco aliqua ullamco consequat commodo non. Dolor ea Lorem nostrud eiusmod adipisicing adipisicing.  Eu aliquip laboris commodo dolore ut voluptate eiusmod aliqua quis eiusmod irure aute ullamco ut."),
    Dustin = new TeamMember("Dustin", "Henderson", "Nerd", "../Images/About_Us_Images/Dustin.png", "Laborum dolor esse tempor Lorem nulla ad dolor.  Ex esse sint reprehenderit dolore fugiat enim eiusmod nisi commodo anim et excepteur fugiat."),
    Eleven = new TeamMember("Eleven", "Hopper", "GateKeeper", "../Images/About_Us_Images/Eleven.jpg", "Consectetur ea reprehenderit quis duis magna sit cillum. Consectetur consequat nulla ad dolore pariatur esse id officia dolore elit nostrud minim est."),
    Hopper = new TeamMember("Jim", "Hopper", "Security", "../Images/About_Us_Images/Hopper.jpeg", "Fugiat do id pariatur ut. Elit et sint cupidatat labore. Cupidatat adipisicing elit eu laborum magna velit tempor tempor cillum enim minim."),
    Joyce = new TeamMember("Joyce", "Byers", "Legend", "../Images/About_Us_Images/Joyce.jpg", "Dolore aliquip ullamco nostrud ipsum est nostrud ad duis laboris esse magna. Amet cillum amet ex id voluptate reprehenderit in officia ex dolor amet occaecat.")
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
        <img src="${staff.imageURL}" alt="${staff.stafffirstname} ${staff.staffsurname}" id="${staff.stafffirstname}_${staff.staffsurname}">
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

/* #region Card Template Layout
<div class="card">
    <div class="card_image">
        <img src="../Images/About_Us_Images/Steve_Harrington.jpg" alt="Steve Harrington">
    </div>
    <div class="content">
        <h3 class="card_name">Steve Harrington</h3>
        <span class="card_name_underline"></span>
        <h3 class="card_title">dingus</h3>
        <p class="card_text">                        
            Aliquam erat volutpat. Pellentesque aliquet iaculis erat, vitae dignissim leo lacinia ut. 
            Donec in tellus consequat, vehicula mi ac, vestibulum arcu. 
            Cras at mauris quam.
        </p>
    </div>
</div>     
#endregion */