<template>
    <div class="food">
        <div class="name">
            {{food_data.name}}
        </div>
        <div class="img">
            <img class="food_image" src="../../../src/assets/p3.jpg" alt="food_img">
        </div>
        <div class="price">
            цена: {{food_data.price}} руб.
        </div>
        <button
                class="food_btn"
                @click="addToBasket"
        >Добавить в карзину
        </button>
    </div>
</template>

<script>
    export default {
        name: "Food",
        props: {
            food_data:{
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            addToBasket() {
                this.$emit('addToBasket', this.food_data.name)
            }
        }
    }
</script>

<style scoped>
    *{
        font-family: 'Roboto Mono',serif
    }
    .food{
        width: 20%;
        height: calc(20vw*1.2);
        margin: 2.5%;
        background-color: #C4C4C4;
        position: relative;
        border-radius: 25px;
        font-size: 1vw;
    }
    .name{
        margin-top: 10%;
        position: absolute;
        width: 100%;
        text-align: center;
        color: black;
    }
    .food_image{
        width: 100%;
        margin-top: 20%;
        position: absolute;
    }
    .price{
        width: 100%;
        margin-top: 80%;
        text-align: center;
        position: absolute;
    }
    .food_btn{
        width: 60%;
        margin-left: 20%;
        margin-top: 90%;
        position: absolute;
        border-radius: 5px;
        border-style: none;
        color: white;
        font-size: 1vw;
        background-color: #349ECC;
        height: calc(50vw * 0.5625 / 8.25);
    }
    .food_btn:hover{
        background-color: #277b9c;
    }
</style>