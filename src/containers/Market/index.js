import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ProductsActions from '../../actions/ProductsActions'

import ProductItem from '../../components/Product'

import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED
} from '../../constants/Products';

class Market extends Component {
  
  componentDidMount() {
    this.props.ProductsActions.getProducts();
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className="row">
            {
              this.props.products.productsList.map((item, i) => {
                return (
                  <div key={i} className="col-sm-6 col-md-4">
                    <ProductItem {...item} />
                  </div>
                );
              })
            }
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Market);