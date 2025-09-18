import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name:"mycart",
  initialState:{
    cart:[]
  },
  reducers:{
     addTocart:(state, actions)=>{
      const status= state.cart.filter(key=>key.id==actions.payload.id);
       if (status.length>=1)
       {
        alert("Product Aleready Added!");
       }
       else 
       {
            state.cart.push(actions.payload);
       }
    },

    incQnty:(state, actions)=>{
        for (var i=0; i<state.cart.length; i++){
           if (state.cart[i].id==actions.payload.id){
               state.cart[i].qnty++;
           }
        }
    },

     decQnty:(state, actions)=>{
        for (var i=0; i<state.cart.length; i++){
           if (state.cart[i].id==actions.payload.id){

              if (state.cart[i].qnty<=1){
                alert("Quantity not less than 1 ")
              }
              else
              {
                   state.cart[i].qnty--;
              }
              
           }
        }
    },

    cartDataRemove:(state, actions)=>{
         state.cart= state.cart.filter(item=>item.id!=actions.payload.id);
    }
  }
})
export const {addTocart, incQnty, decQnty, cartDataRemove} = cartSlice.actions;
export default cartSlice.reducer;