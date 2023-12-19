const form = document.getElementById('form');
const password = document.getElementById('password');
const email = document.getElementById('email')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    axios.post('https://65685e799927836bd974a707.mockapi.io/form', {
        email: email.value,
        password: password.value,
    })
    .then(res =>{
        console.log(res.data);
    })
})