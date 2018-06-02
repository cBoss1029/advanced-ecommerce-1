import React, {Component} from 'react'
import ProductRating from './ProductRating';

class ProductDetail extends Component {
    render() {
        const product = this.props.product;

        return (
            <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={this.props.product.imgUrl} alt=""/>
                <div className="caption">
                    <h4 className="pull-right">{this.props.product.price}</h4>
                    <h4><a href="#">{this.props.name}</a>
                    </h4>
                    <p>{this.props.product.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{this.props.product.reviews} Reviews</p>
                        <ProductRating rating={this.props.product.rating}/>
                </div>
                <div className='addToCart'>
                    <button onClick={()=>this.props.handleAdd(product)} style={{marginBottom: '10px'}}>Add to Cart</button>
                </div>
            </div>
        </div>
    
        )


    }

}


export default ProductDetail;