

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
    Steve = new TeamMember("Steve", "Harrington", "Dingus", "../Images/About_Us_Images/Steve_Harrington.jpg", "TEXT HERE"),
    Nancy = new TeamMember("Nancy", "Wheeler", "Badass", "../Images/About_Us_Images/Nancy_Wheeler.png", "TEXT HERE"),
    Dustin = new TeamMember("Dustin", "Henderson", "Nerd", "../Images/About_Us_Images/Dustin.png", "TEXT HERE") 
]

const staffContainer = document.getElementById("staff_container");
document.addEventListener("DOMContentLoaded", function(){
    // Staff.forEach(CreateStaffObject)
    for (var i =0; i < Staff.length; i++) {
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

    // imagemarkup.innerHTML += image
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
        console.log(image.naturalWidth)
        console.log(image.naturalHeight)
        if (image.naturalHeight > image.naturalWidth) {
            image.classList.add('tall_image')
        } else {
            image.classList.add('wide_image')
        }
    }
}


/*
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
*/


