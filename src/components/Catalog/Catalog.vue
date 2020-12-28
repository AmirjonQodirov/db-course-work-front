<template>
    <div class="catalog">
        <Header/>
        <div class="title_catalog">
            <br>
            <h1 align="center">Каталог колбасных изделий</h1>
            <br>
        </div>
        <div class="catalog_list">
            <food
                v-for="product in PRODUCTS"
                :key="product.id"
                :food_data="product"
            />
        </div>
    </div>
</template>

<script>
    import Food from "./Food";
    import {mapActions, mapGetters} from 'vuex'
    import Header from "../Header";
    export default {
        name: "Catalog",
        components: {Header, Food},
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'BASKET',
            ]),
        },
        methods: {
            ...mapActions([
                "GET_PRODUCTS_FROM_API",
                "ADD_PRODUCT_TO_BASKET"
            ]),

        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();
        }
    }
</script>

<style scoped>
    .title_catalog{
        background-color: #110505;
        color: white;
    }
    .catalog_list{
        background-image: url("../../assets/p2.jpg");
        background-repeat: no-repeat;
        width: 100%;
        background-size: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>