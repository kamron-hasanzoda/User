let loginForm = document.forms.login
loginForm.onsubmit = (event) => {
    event.preventDefault()
    let user = {}
    let fm = new FormData(loginForm)
    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user);
}




// var form = document.querySelector('form')
// var inputs = document.querySelectorAll('input')

// form.onsubmit = function(e) {
//   var error = false;

//   for (var i = 0; i < inputs.length; i++) {
//     if (inputs[i].value == '') {
//         inputs.style.backgroundColor = 'red'
//       inputs[i].classList.add('error');
//       error = true
//     }
//     else {
//       inputs[i].classList.remove('error');
//     }
//   }
//   if (error) {
//     e.preventDefalt();
//   }
// }


// function validateForm() {
//     var x = user[key].value;
//     if (x == null || x == "") {
//         alert("Необходимо заполнить поле Имя!");
//         return false;
//     }
// }