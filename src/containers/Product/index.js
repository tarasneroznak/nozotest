import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductsActions from '../../actions/ProductsActions'

import ProductItem from '../../components/Product'
import NotFound from '../../components/NotFound'

import {
  GET_PRODUCT
} from '../../constants/Products';

class Product extends Component {
  
  componentDidMount() {
    this.props.ProductsActions.getProduct(this.props.params.id);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
            {
                this.props.products.product ?
                (
                    <ProductItem {...this.props.products.product} single={true} />
                ) :
                (
                    <h1>Loading...</h1>
                )
            }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    ProductsActions: bindActionCreators(ProductsActions, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);