userSignin = document.querySelectorAll('input[name="userInfo"]')

labelUsername = document.querySelector('#labelUser')
labelPassword = document.querySelector('#labelPass')
labelSignin = [labelUsername, labelPassword]


for(let i = 0; i < userSignin.length; i++){
    userSignin[i].addEventListener('click', () => {
        if(String(userSignin[i]).length > 0){
            labelSignin[i].classList.add('userTexted')
        }
    })
}
