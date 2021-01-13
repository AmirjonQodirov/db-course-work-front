<template>
  <div>
    <Header/>
    <div v-if="show">
      <h1 class="done_done">
        Вы уже заполнили инфу о себе
      </h1>
    </div>
    <div class="arrow" v-if="!show">
      <form v-on:submit.prevent="submit">
        <div class="form">
          <h1 align="center">Инфо</h1>
          <div class="f_name">
            <input v-model='name' type="text" id="first_name" required placeholder="Имя"/>
          </div>

          <div class="l_name">
            <input v-model='l_name' type="text" id="last_name" placeholder="Фамилия" required/>
          </div>

          <div class="date">
            <input v-model="data" type="date" id="date" required placeholder="Дата рождения:"/>
          </div>

          <div class="mail">
            <input v-model="mail" type="email" id="mail" placeholder="Эл. Почта" required/>
          </div>

          <div class="address">
            <input v-model='address' type="text" id="address" required placeholder="Адрес"/>
          </div>

          <div class="subscription">
            <label for="subscription">Подписка: </label>
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
      show: false,
      response: null,
    }
  },
  mounted() {
    if (localStorage.getItem('fillUserInfo') === 'done') {
      this.show = true;
    }
  },
  components: {Header},
  methods: {
    submit() {
      let auth = localStorage.getItem('currentUser');
      let date = new Date(this.data)
      this.$axios({
        method: 'post',
        url: 'http://localhost:12888/human',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': auth
        },
        data: {
          name: this.name,
          surname: this.l_name,
          birth_date: date,
          contacts: this.mail,
          address: this.address,
        }
      }).then(() => {
        localStorage.setItem('fillUserInfo', 'done');
        this.$router.push('/catalog');
        return true;
      }).catch(error => {
        alert(error.response.data);
        //TODO BEKHA
        if(error.response.data === ''){
          localStorage.setItem('fillUserInfo', 'done');
        }
        return false;
      });
    }
  }
}
</script>

<style scoped>
.done_done {
  background-color: black;
  color: white;
  height: 80vh;
}

.arrow {
  width: 100%;
  background-size: 100%;
  height: calc(100vw * 0.5625 - 10vh);
  background-image: url("../../assets/p1.jpg");
  background-repeat: no-repeat;
  position: relative;
}

.form {
  color: black;
  background-color: #C4C4C4;
  position: absolute;
  width: 33%;
  margin-left: 33%;
  margin-top: calc(20vw * 0.5625);
  height: calc(60vh);
  border-radius: 25px;
}
.form div{
  position: relative;
  width: 80%;
  margin-left: 10%;
  margin-top: 1vh
}
.form input {
  background-color: #b6b6b6;
  border-radius: 5px;
  height: calc(50vh  / 10);
  border-color: #000;
  color: black;
  width: 88%;
  margin-left: 6%;
  margin-right: 6%;
}
.form input::placeholder {
  color: black;
}


.subscription label{
  width: 100%;
  margin-left: 6%;
}
.subscription select{
  background-color: #b6b6b6;
  border-radius: 5px;
  height: calc(50vh  / 10);
  border-color: #000;
  color: black;
}
.subscription option{
  background-color: white;
  color: black;
}

.done_btn {
  border-radius: 5px;
  height: calc(50vh  / 10);
  border-color: #000;
  color: white;
  position: relative;
  width: 60%;
  margin-left: 20%;
  margin-top: 3vh;
  background-color: black;
}
.done_btn:hover{
  background-color: white;
  color: black;
}


</style>
