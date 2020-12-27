<template>
    <div class="header">
        <div class="header-item1">
            <router-link class="text_decor" to="/catalog">
                Доставка экзотической колбасы
            </router-link>
        </div>
        <div class="header-item2">
            +7 000 000 00 00
        </div>
        <div class="header-item3">
            <img class="user_logo" src="../assets/user.png" alt="user_logo">
            <div class="dropdown">
                <router-link class="text_decor" to="/user">
                    Профиль
                </router-link >
                <router-link class="text_decor" to="/basket">
                    Карзина
                </router-link>
                <router-link class="text_decor" to="/orders">
                    Заказы
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        width: 100%;
        background-color: #9C999A;
        height: calc(10vh);
        position: relative;
        font-size: 1.6vw;
    }
    .header-item1{
        position: absolute;
        width: calc(50% - 15vh);
        text-align: center;
        vertical-align: middle;
        line-height: calc(10vh);
    }

    .header-item2{
        position: absolute;
        width: calc(50% - 15vh);
        margin-left: calc(50% - 10vh);
        text-align: center;
        vertical-align: middle;
        line-height: calc(10vh);
    }

    .header-item3{
        position: absolute;
        width: 10vh;
        margin-left: calc(100% - 15vh);
        cursor: pointer;

    }

    .user_logo{
        height: calc(10vh);
    }

    .dropdown{
        background-color: #9C999A;
        width: 100%;
        display: none;
        cursor: pointer;
        font-size: 1ex;
        text-align: center;
        border-radius: 5px;
    }
    .text_decor{
        text-decoration: none;
        color: black;
    }
    .text_decor:hover{
        color: white;
    }



    .header-item3:hover .dropdown{
        display: block;
    }
</style>