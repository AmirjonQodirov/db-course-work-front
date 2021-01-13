<template>
    <div class='cart'>
        <Header/>
        <div class="title_catalog">
            <br>
            <h1 align="center">Карзина</h1>
            <br>
            <hr>
            <br v-if="!BASKET.length">
            <h3 v-if="!BASKET.length">Корзина пуста</h3>
            <br v-if="!BASKET.length">
        </div>
        <div class="basket_list">
            <BasketItem
                    v-for="(item,index) in BASKET"
                    :key="item.id"
                    :food_to_Basket="item"
                    @removeFromBasket="removeFromBasket(index)"
                    @decrement="decrement(index)"
                    @increment="increment(index)"
            />
        </div>
        <hr>
        <div class="total" v-if="BASKET.length">
            <div class="item1">
                <button class="item_btn clear_basket" @click="clear">Очистить карзину</button>
            </div>
            <div class="item2">
                Итог: {{cartTotalCost}} руб.
            </div>
            <div class="item3">
                <button class="item_btn creat_order" @click="create_order">Оформить заказ</button>
            </div>
        </div>

    </div>

</template>

<script>
    import BasketItem from "./BasketItem";
    import {mapActions, mapGetters} from "vuex";
    import Header from "../../Header";
    export default {
        name: "Basket",
        components: {
            Header,
            BasketItem
        },
        props: {
        },
        computed: {
            ...mapGetters([
                'BASKET',
            ]),
            cartTotalCost() {
                let result = 0;
                if (this.BASKET.length) {
                    for (let item of this.BASKET) {
                        result += (item.price * item.quantity)
                    }
                    return result;
                }
                return result;
            },


        },
        methods: {
            ...mapActions([
                'REMOVE_FROM_BASKET',
                'INCREMENT',
                'DECREMENT',
                'CLEAR_BASKET'
            ]),
            removeFromBasket(index){
                this.REMOVE_FROM_BASKET(index);
            },
            increment(index){
                this.INCREMENT(index);
            },
            decrement(index){
                this.DECREMENT(index);
            },
            clear(){
                this.CLEAR_BASKET()
            },
            create_order(){
                let fillUser = localStorage.getItem('fillUserInfo');
                if(fillUser === 'done'){
                    let auth = localStorage.getItem('currentUser');
                    let foods = [];
                    if (this.BASKET.length) {
                        for (let item of this.BASKET) {
                            foods.push({
                                sausageId: item.id,
                                sausageName: item.name,
                                sausageWeight: item.quantity
                            });
                        }
                    }
                    console.log(auth, foods)
                    this.$axios({
                        method: 'post',
                        url: 'http://localhost:12888/orders',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': auth
                        },
                        data: foods
                    }).then(response => alert(response.data));

                }
                else{
                    alert("Заполните информацию о себе!")
                }
            }
        }
    }
</script>
<style scoped>
    .cart{
        /*height: 90vh;*/
        background-color: #000;
    }
    .title_catalog{
        color: white;
    }
    .basket_list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .total{
        position: relative;
        width: 100%;
        height: 10vh;
    }
    .item1{
        width: 30%;
        position: absolute;
        text-align: center;
        vertical-align: middle;
        line-height: calc(10vh);
    }
    .item2{
        margin-left: 30%;
        width: 40%;
        position: absolute;
        text-align: center;
        color: white;
        vertical-align: middle;
        line-height: calc(10vh);
    }
    .item3{
        margin-left: 70%;
        width: 30%;
        position: absolute;
        text-align: center;
        vertical-align: middle;
        line-height: calc(10vh);
    }
    .item_btn{
        width: 60%;
        margin-left: 20%;
        border-radius: 5px;
        border-style: none;
        font-size: 1vw;
        height: 6vh;
        cursor: pointer;

    }
    .creat_order{
        background-color: green;
        color: white;

    }
    .creat_order:hover{
        background-color: #005700;
    }
    .clear_basket{
        color: white;
        background-color: #CA1717;
    }
    .clear_basket:hover{
        background-color: #991111;
     }

</style>