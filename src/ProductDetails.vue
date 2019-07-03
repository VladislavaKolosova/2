<template>
    <div class="product">
        <h2>Post Detail</h2>
        <form>
            <div>
                <label for="title">Title</label>
                <span>{{product.title}}</span>
            </div>
            <div>
                <label for="text_main">Main text</label>
                <span>{{product.text_main}}</span>
            </div>
            <div>
                <label for="time">Time for reading</label>
                <span>min{{product.time}}</span>
            </div>
            {{this.counter}}
        </form>
        <router-link :to="{name: 'home'}">go to list</router-link>
    </div>
</template>

<script>
import ProductService from './ProductService.js'
    export default {
        data(){
            return {
                product:{},
                counter: 0,
                leakyReference: null
            }
        },
        created(){
            ProductService.$on("viewDetails",(selectedProduct) => {
                this.product = selectedProduct;
            });
        },
        mounted(){
            ProductService.viewDetails(this.$route.params.id);
        },
        watch: {
            '$route.params.id'(id){
                ProductService.viewDetails(id)
            }
        }
    }
</script>

<style scoped>
    .product {
        width: 500px;
        border: 1px solid red;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>

