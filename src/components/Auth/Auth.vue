<template>
    <div class="auth">
        <div class="form">
            <form v-on:submit.prevent="checkForm">
                <div class="radio">
                    <input v-model="action" id="sign_in" name="action" type="radio" value="login">
                    <label class="sign_in" for="sign_in">Вход</label>
                    <input v-model="action" id="sign_up" name="action" type="radio" value="register">
                    <label class="sign_up" for="sign_up">Регистрация</label>
                </div>
                <hr color="#000" size="1">

                <div class="arrow">
                    <div class="inp_name">
                        <input v-model="name" minlength="3" id="email"  placeholder="Имя пользователя" type="text">
                    </div>
                    <div class="inp_pass">
                        <input v-model="password" minlength="3" id="pass" placeholder="Пароль" type="password">
                    </div>
                    <div v-if="action==='register'" class="inp_repass" >
                        <input v-model="repassword" minlength="3" id="repass" placeholder="Повторите пароль" type="password">
                    </div>
                </div>
                <div >
                    <button class="button" type="submit">
                        Готово
                    </button>
                </div>

                <div class="login-error" v-if="errors.length">
                    <p v-for="error in errors" v-bind:key="error" class="red">{{error}}</p>
                </div>


            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Auth",
        data() {
            return {
                response: null,
                action: 'login',
                errors: [],
                name: null,
                password: null,
                repassword: null
            }
        },
        mounted() {
            localStorage.removeItem('fillUserInfo');
            localStorage.removeItem('currentUser');
        },
        methods: {
            checkForm: function () {
                this.errors = [];
                if (!this.name) {
                    this.errors.push('Введите имя пользователя');
                }
                if (!this.name.match(/^[A-Za-z0-9]*$/)) {
                    this.errors.push('Имя пользователя должен быть только из латинский символов или цифр');
                }
                if (!this.password) {
                    this.errors.push('Введите пароль');
                }
                if (!this.password.match(/^[A-Za-z0-9]*$/)) {
                    this.errors.push('Пароль должен быть только из латинский символов или цифр');
                }
                if (this.action === 'register') {
                    if (!this.repassword) {
                        this.errors.push('Введите пароль еще раз');
                    }
                    else {
                        if (this.password !== this.repassword) {
                            this.errors.push('Пароли не совпадают');
                        }
                    }
                }
                if (!this.errors.length) {
                    if (this.action === 'register   ') {
                        if (this.registerRequest()) {
                            this.loginRequest();
                        }
                    }
                    else if (this.action === 'login') {
                        this.loginRequest();
                    }
                }
            },
            loginRequest: function () {
                localStorage.setItem('currentUser', this.name + '#' + this.password);
                this.$router.push('/catalog');
                /*
                let auth = this.name + '#' + this.password;
                this.axios({
                    method: 'post',
                    url: 'http://localhost:12888/login',
                    headers: {'Content_type': 'application/json', 'Authorization':  auth}
                }).then(response => {
                    this.response = response;
                    localStorage.setItem('currentUser', response.data);
                    this.$router.push('/catalog');
                    return true;
                }).catch(error => {
                    error.response.status === 401 ? this.errors.push('Неверный логин или пароль') : this.errors.push('Ошибка авторизации');
                    return false;
                });
                */
            },
            registerRequest: function () {
                console.log(this.name);
                console.log(this.password);
                console.log(this.repassword);
                /*
                this.axios({
                    method: 'post',
                    url: 'http://localhost:12888/register',
                    headers: {'Content_type': 'application/json'},
                    data: {
                        username: this.name,
                        password: this.password
                    }
                }).then(() => {
                    this.action = "login";
                    this.loginRequest();
                    return true;
                }).catch(error => {
                    error.response.status === 409 ? this.errors.push('Имя пользователя занято') : this.errors.push('Ошибка регистрации');
                    return false;
                });
                */

                return true;
            },
        }
    }
</script>

<style scoped>
    .auth{
        width: 100%;
        background-size: 100%;
        height: calc(100vw * 0.5625);
        background-image: url("../../assets/p1.jpg");
        background-repeat: no-repeat;
        position: relative;
    }
    .form{
        color: black;
        background-color: #C4C4C4;
        position: absolute;
        width: 33%;
        margin-left: 33%;
        margin-top: calc(20vw * 0.5625);
        /*height: calc(60vw * 0.5625);*/
        border-radius: 25px;
    }
    .radio{

        height: calc(60vw * 0.5625 / 8.25  + 1);
    }
    .radio input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }
    .radio label {
         display: inline-block;
         height: calc(60vw * 0.5625 / 8.25 - 1px);
         width: 50%;
         text-align: center;
         vertical-align: middle;
         line-height: calc(60vw * 0.5625 / 8.25 - 1px);
    }

    .radio label[class="sign_in"] {
        border-radius: 25px 0 0 0;
    }

    .radio label[class="sign_up"] {
        border-radius:  0 25px 0 0;
    }

    .radio input[type="radio"]:checked + label {
        background-color: #000;
        color: white;
    }

    .radio label:hover {
        background-color: #5a5959;
    }

    .arrow{
        /*background-color: red;*/
        margin: 5%;
        width: 90%;
    }

    .arrow input{
        background-color: black;
        border-radius: 5px;
        width: 100%;
        height: calc(50vw * 0.5625 / 8.25);
        margin-bottom: 2.5%;
        border-color: #000;
        color: white;
    }
    .arrow input:active{
        border-radius: 5px;
    }
    .arrow input::placeholder{
        color: #C4C4C4;
    }
    .button{
        margin: 2.5% 5% 10% 10%;
        width: 80%;
        height: calc(50vw * 0.5625 / 8.25);
        border-radius: 5px;
        border-color: #000;
        color: white;
        background-color: #1218b9;
    }
    .button:hover{
        background-color: #0c1078;
    }
    .login-error{
        margin: 2.5% 5% 10% 10%;
        width: 80%;
        text-align: center;
        vertical-align: middle;
    }
    .red{
        color: red;
    }

</style>