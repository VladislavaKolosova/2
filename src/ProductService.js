import Vue from 'vue'
import _ from 'lodash'

export default new Vue({
    data: {
        products: [{
                id: 1,
                title: "text 4",
                text_main: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
            },
            {
                id: 2,
                title: "text 4",
                text_main: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
            },
            {
                id: 3,
                title: "text 4",
                text_main: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
            },
            {
                id: 4,
                title: "text 4",
                text_main: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
            }
        ]
    },
    methods: {
        viewDetails(id) {
            let productToView = _.find(this.products, { id: parseInt(id) });
            this.$emit("viewDetails", productToView);
        },
        addProduct(title, text_main, time) {
            var id = this.products[this.products.length - 1].id + 1;
            this.products.push({
                id,
                title,
                text_main,
                time
            })
        }
    }
});