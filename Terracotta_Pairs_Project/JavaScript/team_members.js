

class TeamMember {
    constructor(staffname, position, imageURL, description) {
        this.staffname = staffname;
        this.position = position;
        this.imageURL = imageURL;
        this.description = description;
    }
}

const Staff = [
    Steve = new TeamMember("Steve Harrington", "Dingus", "../Images/About_Us_Images/Steve_Harrington.jpg", "TEXT HERE"),
    Nancy = new TeamMember("Nancy Wheeler", "Badass", "../Images/About_Us_Images/Nancy_Wheeler.png", "TEXT HERE") 
]

const staffContainer = document.getElementById("staff_container");
document.addEventListener("DOMContentLoaded", function(){
    Staff.forEach(CreateStaffObject)
})

function CreateStaffObject() {
    const markup = `
    <div class="card>
        <div class="card_image">
            <img src='${TeamMember.imageURL}'>
        </div>
        <div class="content">
            <h3 class="card_name">${TeamMember.staffname}</h3>
            <span class="card_name_underline"></span>
            <h3 class="card_title">${TeamMember.position}</h3>
            <p class="card_text">                        
                ${TeamMember.description}
            </p>
        </div>
    </div>`;
    staffContainer.innerHTML += (markup)
    // staffContainer.insertAdjacentHTML(markup, string)
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


