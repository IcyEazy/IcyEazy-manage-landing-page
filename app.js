let mobileMenuBtn = document.querySelector(".mobile-menu-btns"),
    openBtn = document.getElementById("open-btn"),
    closeBtn = document.getElementById("close-btn"),
    introImage = document.querySelector(".intro-img"),
    mobileMenuContent = document.querySelector(".menu"),
    profileAvatar = document.querySelector(".avatar"),
    profileName = document.querySelector(".name"),
    profileComments = document.querySelector(".said-texts"),
    profileOptions = document.querySelectorAll('input[type="radio"]'),
    submitBtn = document.querySelectorAll(".submit"),
    form = document.querySelectorAll("form"),
    emailInput = document.querySelectorAll('input[type="email"]');



var avatars = ['./images/avatar-anisha.png', './images/avatar-ali.png', './images/avatar-richard.png', './images/avatar-shanai.png'];
var names = ['Anisha Li', 'Ali Bravo', 'Richard Watts', 'Shanai Gough'];
var comments = ["“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
"“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”",
"“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"];


// for(var i = 0; i < profileOptions.length; i++){
//     profileOptions[i].addEventListener("click", function(){
//         console.log("clicked")
//         profileAvatar.setAttribute("src", avatars[i]);
//         profileName.textContent = names[i];
//         profileComments.textContent = comments[i];
//     });
// }

profileOptions.item(0).addEventListener("click", function(){
    profileAvatar.setAttribute("src", avatars[0]);
    profileName.textContent = names[0];
    profileComments.textContent = comments[0];
});

profileOptions.item(1).addEventListener("click", function(){
    profileAvatar.setAttribute("src", avatars[1]);
    profileName.textContent = names[1];
    profileComments.textContent = comments[1];
});

profileOptions.item(2).addEventListener("click", function(){
    profileAvatar.setAttribute("src", avatars[2]);
    profileName.textContent = names[2];
    profileComments.textContent = comments[2];
});

profileOptions.item(3).addEventListener("click", function(){
    profileAvatar.setAttribute("src", avatars[3]);
    profileName.textContent = names[3];
    profileComments.textContent = comments[3];
});

mobileMenuBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    introImage.classList.toggle("hide");
    mobileMenuContent.classList.toggle("show");
});

emailInput.forEach(input => {
    input.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            console.log("submit clicked");
            if(input.value.length > '0'){
                return;
            } else {
                alert("The field input can't be empty");
                input.classList.toggle("error");
            }
        }
    })
});

// submitBtn.forEach(btn => {
//     btn.addEventListener("click", function(){
//         console.log("submit clicked");
//         emailInput.forEach(input => {
//             if(input.value.length > 0){
//                 return;
//             } else {
//                 alert("The field input can't be empty");
//                 input.classList.toggle("error");
//             }
//         })
//     });
// });

// form.forEach(frm => {
//     frm.addEventListener("submit", function(){
//         emailInput.forEach(input => {
//             // input.addEventListener("keypress", function(e){
//             //     if(e.key === "Enter"){
//                     console.log("submit clicked");
//                     if(input.value.length > 0){
                        
//                     } else {
//                         alert("The field input can't be empty");
//                         input.classList.toggle("error");
//                     }
//             //     }
//             // })
//         });
//     })
// })