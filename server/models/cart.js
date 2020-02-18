
class Cart {
    constructor(){
        this.data = {},
        this.data.items = [],
        this.data.totals = 0,
        this.data.formattedTotals = ''
    }

    //method to find duplicate products
    inCart(productId) {
        let found = false;
        this.data.items.forEach(item => {
            if(item.id == productId){
                this.found = true;
            }
        });
        return found;
    }

    //calculate totals of the products in cart
    calculateTotals(){
        this.data.totals = 0;
        this.data.items.forEach(item => {
            let price = item.price;
            let qty = item.qty;
            this.data.totals =+ price * qty;
            this.setFormattedTotals();
        })
    }


    //setFormattedTotals
    setFormattedTotals(){
       let formatter =  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
       let totals =  this.data.totals;
       this.data.formattedTotals = formatter.format(totals);
    }
    

     //add products to cart
     addToCart(product, qty){
        if(!this.inCart(product.id)){
            let formatter =  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
               let item = {
                id: product.id,
                name: product.name,
                price: product.price,
                imagePath: product.imagePath,
                qty: product.qty,
                formattedPrice: formatter.format(product.price)
             
               }
               this.data.items.push(item);
               this.calculateTotals();
        
        }
    }

    //save cart
    saveCart(request) {
        if(request.session) {
            request.session.cart = this.data;
           // console.log(request.session.cart)
        }
    }
    
    //get cart
    getCart(){
        return this.data;
    }

    //remove item from cart
    removeItemFromCart(productId){
       for(i=0; i <= items; i ++){
           let item = this.data.items[i];
           if(productId == item.id){
               this.data.items.splice(i, 1);
               this.calculateTotals();
               return Cart;
           }
       }
    }
}



module.exports = new Cart();