<template>
    <div class="card">
        <div class = "card-body">
            <h4 class="card-title">{{index}} {{product.title}}</h4>
            <p class="card-text">{{product.main_text}} items for min{{prodict.time}}</p>
            <a href="#" class="btn btn-primary" @click="viewDetailsClicked">View Details</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object,
                required:true,
            },
            index: {
                type: Number,
            },
            viewDetails: Function
        },
        data(){
            return{
                //product: {},
                //index: 1
            }
        },
        methods: {
            viewDetailClicked(){
                this.$router.push('/detail/'+this.prosuct.id)
            }
        }
    }
</script>

<style>
    div.card {
        width: 500px;
        border: 1px solid red;
        border-radius: 10px;
        margin: 10px;
        padding: 10px; 
    }
</style>