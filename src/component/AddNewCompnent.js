import React , { Component } from 'react';

 const AddNewCompnent = (props) =>{
   
        return(
             <form onSubmit={props.addProduct}>
              <input type="text" placeholder="Name" value={props.currentProductName}
              onChange={props.updateName}/>
              <input type="text" placeholder="Price" value={props.currentProductPrice}
              onChange={props.updatePrice}/>
              <input type="text" placeholder="Quantity" value={props.currentProductQty}
              onChange={props.updateQuantity}/>
               <button> Add Product </button>
          </form>
        );
    }
export default AddNewCompnent;