<template>
    <div class="catalog">
        <br/>
        <h1 align="center">Каталог колбасных изделий</h1>
        <br/>
        <div class="catalog_list">
            <food
                v-for="product in PRODUCTS"
                :key="product.name"
                :food_data="product"
                @addToBasket="addToBasket"
            />
        </div>
    </div>
</template>

<script>
    import Food from "./Food";
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "Catalog",
        components: {Food},
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'BASKET',
            ]),
        },
        methods: {
            ...mapActions([
                "GET_PRODUCTS_FROM_API",
            ]),
            addToBasket(name){
                console.log(name);
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();
        }
    }
</script>

<style scoped>
    .catalog_list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>