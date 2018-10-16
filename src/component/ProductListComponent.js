import React,{Component} from 'react';
import ProductDisplayComponent from './ProductDisplayComponent';
import axios from 'axios';
import AddNewCompnent from './AddNewCompnent';
export default class ProductListComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            products:[],
            currentProductName:'',
            currentProductPrice:'',
            currentProductQty:''
        };
    }
    
    updateName = (newValue) => {
        this.setState({
            currentProductName:newValue.target.value        
        });
    }

    updateQuantity = (qtyValue) => {
        this.setState({
            currentProductQty:qtyValue.target.value    
        });
    }

    updatePrice = (priceValue) => {
            this.setState({
                currentProductPrice:priceValue.target.value
            });
    }

    getProduct = () => {
        axios.get(`http://localhost:8003/findallproducts`)
        .then(res => {
          this.setState({ products:res.data });
        })

    }
    
    componentDidMount() {
        console.log("---componentDidMount called---");
        this.getProduct();
    }



    addProduct = (event) => {
        event.preventDefault();
        console.log('method Triggered..');
        
        let currentProductName = this.state.currentProductName;
        let currentProductPrice = this.state.currentProductPrice;
        let currentProductQty = this.state.currentProductQty;

        axios.post(`http://localhost:8003/products`, { 
            productName: currentProductName,
            productPrice: currentProductPrice,
            productQuantity: currentProductQty
        })
        .then(() => {
            this.getProduct();
        
        })
        this.setState({
            currentProductName:'',
            currentProductPrice:'',
            currentProductQty:''
        });
      
    }


    editProduct = (product) => {
       
            axios.put(`http://localhost:8003/updateproduct`, {productId: product.id,
            productName: product.name,
            productPrice: product.price,
            productQuantity: product.qty})
            .then(() => {
                this.getProduct();
              
            })
            .catch(error => {
                console.log(error.response)
            });

    }

    deleteProduct = (index) => {  
        axios.delete(`http://localhost:8003/deleteproduct/${this.state.products[index].productId}`)
        .then(() => {
            this.getProduct();
        })
    }

    render() {
        return (
            <div className="content-title">
                <p>Product Management</p>
                <table className="productList-table">
                <thead><tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    </tr></thead>
                   {
                      this.state.products.map((product,index) => {
                          return  <ProductDisplayComponent 
                          index={index}
                          key={index}
                          product={product}
                          editProductHandler={this.editProduct}
                          deleteProductHandler={this.deleteProduct}/>
                      }
                    )
                   }
                </table>
                
                <div><br></br>
                    <p>Add New Product</p>
                    <AddNewCompnent
                     currentProductName={this.state.currentProductName}
                     currentProductPrice={this.state.currentProductPrice}
                     currentProductQty={this.state.currentProductQty}
                     updateName={this.updateName}
                     updatePrice={this.updatePrice}
                     updateQuantity={this.updateQuantity}
                     addProduct={this.addProduct}/>
                </div>
            </div>
        );
    }
}