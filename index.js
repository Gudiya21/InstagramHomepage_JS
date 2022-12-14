
const container = document.querySelector('.container');
const LOrSBtn = document.querySelector('.loginOrSignup')
let loginBoolean = false
const displayFunction = () => {
    loginBoolean ? LOrSBtn.innerHTML = `Login` : LOrSBtn.innerHTML = `Signup`

    loginBoolean ? container.innerHTML += ` <div id="Signup">
    <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="" id="instaImage">
    <p>Sign up to see photos and videos from your friends.</p>
    <button id="face">Log In with facebook</button>
    <p id="">______________OR______________</p>
    <input type="text" placeholder="Mobile Number or Email" id="sigmobile">
    <input type="email" placeholder="Full Name" id="signame">
    <input type="text" placeholder="Username" id="siguser">
    <input type="password" placeholder="Password" id="sigpass">
    <p><center>People who use our service may have uploaded your contact information to Instagram. Learn More</center></p>
    <p><center>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</center></p>
    <button class="button">Signup</button>
    </div>
    <div id="change2">
    <p>Have an account? Login</p>
    </div>`     
    :container.innerHTML += `<div id="login">
    <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="" id="instaImage">
    <input type="email" placeholder="Phone number,username or email" id="email"><br>
    <input type="Password" placeholder="password" id="password"><br>
    <button class="BTN"><b>Login</b></button>
    <p id="or">______________OR______________</p>
    <p id="icon"><i class="fa fa-facebook-f" style="color:blue"></i>  Login with Facebook</p>
    <p id="forget">Forgotten your password?</p>
    </div>
    <div id="change">
    <p>Don't have an account?</p>
    </div>`     
    }

displayFunction()
LOrSBtn.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    container.innerHTML=''
    displayFunction()
})



