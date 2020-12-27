<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <div class="footer-item1">
        P33113 | Мансуров Б | Кадыров А
      </div>
      <div class="footer-item2">
        <img class="itmo_logo" src="./assets/itmo_logo.png" alt="itmo_logo">
      </div>
      <div class="footer-item3">
        Преподаватель: Николаев В.В.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
  *{
    font-family: 'Roboto Mono',serif
  }

  #app{
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
  .footer{
    margin-top: 0;
    width: 100%;
    background-color: #9C999A;
    height: calc(10vh);
    position: relative;
    font-size: 2.22vh;
  }
  .footer-item1{
    position: absolute;
    width: calc(50% - 5vh*1.96);
    text-align: center;
    vertical-align: middle;
    line-height: calc(10vh);
  }

  .footer-item2{
    position: absolute;
    width: calc(10vh*1.96);
    margin-left: calc(50% - 5vh*1.96);
  }
  .itmo_logo{
    height: calc(10vh);
  }

  .footer-item3{
    position: absolute;
    width: calc(50% - 5vh*1.96);
    margin-left: calc(50% + 5vh*1.96);
    text-align: center;
    vertical-align: middle;
    line-height: calc(10vh);
  }
</style>
