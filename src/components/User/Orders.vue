<template>
    <div class="order">
        <Header/>
        <div class="order_catalog">
            <br>
            <h1 align="center">Мои заказы</h1>
            <br>
            <hr>
            <br v-if="!ORDERS.length">
            <h3 v-if="!ORDERS.length">Нeт заказов</h3>
            <br v-if="!ORDERS.length">
        </div>
        <div class="order_div">
            <table class="table">
                <thead>
                    <tr class="table_th">
                        <th>Поставщик</th>
                        <th>Цех</th>
                        <th>Колбаска</th>
                        <th>Колбаска вес</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in ORDERS" :key="order.id">
                        <td>{{ order.providerName }}</td>
                        <td>{{ order.factoryName }}</td>
                        <td>{{ order.sausageName }}</td>
                        <td>{{ order.sausageWeight }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="order_catalog">
            <br>
            <h1 align="center">Данные о долгах</h1>
            <br>
            <hr>
            <br v-if="!PAYMENTS.length">
            <h3 v-if="!PAYMENTS.length">Нeт данных о долгах</h3>
            <br v-if="!PAYMENTS.length">
        </div>
        <div class="order_div">
            <table class="table">
                <thead>
                <tr class="table_th">
                    <th>ДАТА</th>
                    <th>Сумма</th>
                    <th>Статус долга</th>
                    <th>Дата погашения</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="payment in PAYMENTS" :key="payment.deptDate">
                    <td>{{ (new Date(payment.deptDate)).toLocaleDateString('ru-RU')}}</td>
                    <td>{{ payment.sum }}</td>
                    <td v-if="payment.paying" class="green">Нет долгов</td>
                    <td v-else class="red">Долг</td>
                    <td>{{ payment.payingDate }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
    import Header from "../Header";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Orders",
        components: {Header},
        computed: {
            ...mapGetters([
                'ORDERS',
                'PAYMENTS'
            ]),
        },
        data(){
            return{
               kol: 0
            }
        },
        methods: {
            ...mapActions([
                "GET_ORDER_FROM_API",
                "GET_PAYMENTS_FROM_API"
            ]),

        },
        mounted() {
            this.GET_ORDER_FROM_API();
            this.GET_PAYMENTS_FROM_API();
        }
    }
</script>

<style scoped>
    .green{
        background-color: green;
        color: white;
    }
    .red{
        background-color: red;
        color: black;
    }
    .order{
        /*height: 190vh;*/
        background-color: #000;
    }
    .order_catalog{
        color: white;
    }
    .order_div{
        width: 80%;
        margin-left: 10%;
        margin-top: 3vh;
        color: white;
    }
    .table{
        background-color: #C4C4C4;
        color: black;
        text-align: left;
        border-radius: 25px;
        border-collapse: collapse;
        font-size: 0.9em;
        width: 100%;
    }

    .table th,
    .table td {
        padding: 3vh 3vh;
    }
    .table td{
        border-left: 1px solid white;
        border-right: 1px solid white;
    }

    .table tbody tr {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }

    .table tbody tr:nth-of-type(even) {
        background-color: #b1a8a8;
    }
    .table tbody tr:nth-of-type(odd) {
        background-color: #494545;
        color: white;
    }

</style>