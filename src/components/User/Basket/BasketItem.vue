<template>
    <div class="basket_item">

        <div class="food">
            <div class="name">
                <b>
                    {{food_to_Basket.name}}
                </b>
            </div>
            <hr class="hr" color="#000" size="1">
            <div class="food_quantity">
                Количество кг:
                <br>
                <button class="qnt_p_m minus" @click="decrementItem">-</button>
                    {{food_to_Basket.quantity}}
                <button class="qnt_p_m plus" @click="incrementItem">+</button>
            </div>
            <hr class="hr1" color="#000" size="1">
            <div class="price">
                Цена: {{food_to_Basket.price * food_to_Basket.quantity}} руб.
            </div>
            <button class="rem_btn" @click="removeFromBasket">Удалить</button>
        </div>



    </div>
</template>

<script>
    export default {
        name: "BasketItem",
        props: {
            food_to_Basket:{
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            removeFromBasket(){
                this.$emit("removeFromBasket")
            },
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            }
        },
    }
</script>

<style scoped>
    *{
        font-family: 'Roboto Mono',serif
    }
    .basket_item{
        width: 20%;
        height: calc(14vw);
        margin: 2.5%;
        background-color: #C4C4C4;
        position: relative;
        border-radius: 10%;
        font-size: 1vw;
        color: black;
    }
    .name{
        margin-top: 2.5%;
        position: absolute;
        width: 100%;
        text-align: center;
    }
    .hr{
        position: absolute;
        width: 99%;
        margin-top: 10%;
    }
    .food_quantity{
        width: 100%;
        margin-top: 15%;
        text-align: center;
        position: absolute;
    }
    .qnt_p_m{
        cursor: pointer;
        background-color: black;
        width: 20%;
        color: white;
        font-size: 1vw;
        border-radius: 5px;
        border-style: none;
    }
    .minus:hover{
        background-color: red;
    }
    .plus:hover{
        background-color: green;
    }
    .price{
        width: 100%;
        margin-top: 35%;
        text-align: center;
        position: absolute;
    }
    .hr1{
        position: absolute;
        width: 99%;
        margin-top: 45%;
    }
    .rem_btn{
        cursor: pointer;
        width: 60%;
        margin-left: 20%;
        margin-top: 50%;
        position: absolute;
        border-radius: 5px;
        border-style: none;
        color: white;
        font-size: 1vw;
        background-color: #CA1717;
        height: calc(2vw);
    }

    .rem_btn:hover{
        background-color: #991111;
    }

</style>