//Dark and Light mode toggler
const lightDarkToggler = document.getElementById('Light-Dark-Toggler');

let isLightMode = true;



lightDarkToggler.onabort("click", function(){
    if (isLightMode) {
        $('header').css({'color': rgb(248, 121, 2),
            'background-color': rgba(1, 27, 12, 0.856),
                        })
    }});


// header {
//     color: rgb(248, 121, 2);
//     background-color: rgba(1, 27, 12, 0.856);
//     text-align: center;
//     border-radius: 20px;
//     margin-bottom: 25px;
// }

// form {
//     color:rgb(248, 121, 2);
//     background-color: rgba(1, 27, 12, 0.856);
//     padding-bottom: 100px;
   
// }

// textarea {
//     background-color: rgb(1, 53, 23);
//     color: rgb(248, 121, 2);
//     align-content: top;
//     padding: 20px;
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: large;
// }
