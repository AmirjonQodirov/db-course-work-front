<template>
    <div>
        <Header/>
        <div v-if="show">
            <h1 class="done_done">
                Вы уже заполнили инфу о себе
            </h1>
        </div>
        <div class="arrow" v-if="!show">
            <form v-on:submit="submit">
            <div class="form">
                <div class="f_name">
                    <label for="first_name">Имя: </label>
                    <input v-model='name' type="text" id="first_name" name="Имя"/>
                </div>

                <div class="l_name">
                    <label for="last_name">Фамилия: </label>
                    <input v-model='l_name' type="text" id="last_name" name="Фамилия"/>
                </div>

                <div class="date">
                    <label for="date">Дата рождения: </label>
                    <input v-model="data" type="date" id="date" />
                </div>

                <div class="mail">
                    <label for="mail">Email: </label>
                    <input v-model="mail" type="email" id="mail" name="*@.*"/>
                </div>

                <div class="address">
                    <label for="address">Адресс: </label>
                    <input v-model='address' type="text" id="address" />
                </div>

                <div class="subscription">
                    <label for="subscription">Выберите подписку:</label>
                    <select v-model='subscription' id="subscription" name="subscription">
                        <option value="basic">Basic</option>
                        <option value="medium">Medium</option>
                        <option value="vip">VIP</option>
                    </select>
                </div>

                <button class="done_btn" type="submit">
                    Готово
                </button>

            </div>
        </form>
        </div>

    </div>
</template>

<script>
    import Header from "../Header";
    export default {
        name: "UserInfo",
        data() {
            return {
                name: '',
                l_name: '',
                data: null,
                mail: '',
                address: '',
                subscription: 'basic',
                show: false
            }
        },
        mounted() {
          if(localStorage.getItem('fillUserInfo')==='done'){
              this.show = true;
          }
        },
        components: {Header},
        methods: {
            submit(){
                /*
                let auth = localStorage.getItem('currentUser');
                let date = new Date(this.data)
                let day = date.getDate()
                let month = date.getMonth()+1
                let year = date.getFullYear()
                this.axios({
                    method: 'post',
                    url: 'http://localhost:12888/getUser',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': auth
                    },
                    data: {
                        name: this.name,
                        last_name: this.l_name,
                        date: {
                            day: day,
                            month: month,
                            year: year
                        },
                        mail: this.mail,
                        address: this.address,
                        subscription: this.subscription
                    }
                }).then(response => {
                    alert(response.data);
                    localStorage.setItem('fillUserInfo', 'done');
                    this.$router.push('/catalog');
                });
                */
                localStorage.setItem('fillUserInfo', 'done');
                this.$router.push('/catalog');
            }
        }
    }
</script>

<style scoped>
    .done_done{
        background-color: black;
        color: white;
        height: 80vh;
    }
    .arrow{
        width: 100%;
        background-size: 100%;
        height: calc(100vw * 0.5625 - 10vh);
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
        height: calc(40vh);
        border-radius: 25px;
    }
    .f_name {
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-top: 3vh
    }
    .l_name{
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-top: 1vh
    }
    .mail {
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-top: 1vh
    }
    .date {
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-top: 1vh
    }
    .address {
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-top: 1vh
    }
    .done_btn{
        position: relative;
        width: 60%;
        margin-left: 20%;
        margin-top: 3vh
    }
    .subscription{
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-top: 1vh
    }

</style>
