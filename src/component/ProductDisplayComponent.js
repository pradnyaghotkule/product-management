import React,{Component} from 'react';

export default class ProductDisplayComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEditing:false
        }
    }

    toggleUpdate = () => {     
        this.setState({
            isEditing:!this.state.isEditing
        })      
    }

    updateProduct = () => {      

    let product={
        id:this.inputId.value ,
        name:this.inputName.value, 
        price:this.inputPrice.value,
        qty:this.inputQty.value
    }
       
        this.props.editProductHandler(product);
        this.toggleUpdate();
    }

    renderUpdateForm = () => {
        return(
                <tr id={this.props.product.productId}>
                    <td>
                    <input type="hidden" defaultValue={this.props.product.productId}
                        ref={(value) => { this.inputId = value; }}/>                        
                    <input type="text" defaultValue={this.props.product.productName}
                        ref={(value) => { this.inputName = value; }}/></td>
                    <td><input type="text" defaultValue={this.props.product.productPrice}
                        ref={(value) => { this.inputPrice = value; }}/></td>
                    <td> <input type="text" defaultValue={this.props.product.productQuantity}
                        ref={(value) => { this.inputQty = value; }}/></td>
                    <td><button type="submit" onClick={(event)=>{
                    event.stopPropagation();
                    this.updateProduct();
                    }}>Update</button></td>
                </tr>
        )
    }

    renderDisplayForm = () => {
        return(
            <tr id={this.props.product.productId}>
                <td>{this.props.product.productName}</td>
                <td>{this.props.product.productPrice}</td>
                <td>{this.props.product.productQuantity}</td>
                <td><button onClick={(event)=>{
                    event.stopPropagation();
                    this.toggleUpdate();
                    }}>Edit</button>&nbsp;
                    <button onClick={() => {this.props.deleteProductHandler(this.props.index)}}>Delete</button></td>
            </tr>
          
        )
    }

    render() {
        const {isEditing} = this.state;
        return (
            <tbody>
             { isEditing ? this.renderUpdateForm(): this.renderDisplayForm() }
            </tbody>
        );
    }
}