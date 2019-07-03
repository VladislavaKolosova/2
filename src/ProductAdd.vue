<template>
<div class="product">
    <form>
    <div class ="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Enter title">
    </div>
    <div class ="form-group">
        <label for="text_main">Text</label>
        <input type="text_main" class="form-control" id="text_main" placeholder="Enter title">
    </div>
    <div class="form-group">
        <label for="time">Time for reading</label>
        <input type="number" class="form-control" id="time" placeholder="Enter reding time">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Submit</button>
    </form>
</div>
</template>

<script>
    import ProductService from './ProductService'

    export default {
        data(){
            return {
                product: {}
            }
        },
        methods: {
            addProduct(){
                ProductService.addProduct(this.product.title, this.product.text_main, this.product.time);
                this.$router.push('/')
                }
            }
        }
</script>

<style scoped>
    .product {
       width: 500px;
       border: 1px solid green;
       border-radius: 10px;
       margin: 10px;
       padding: 10px; 
    }
</style>