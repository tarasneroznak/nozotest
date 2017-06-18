import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ProductItem extends Component {
  render() {

    return (

      <div className="thumbnail">
        <div className="caption">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          { this.props.single ? null : <p><a href={`/product/${this.props.id}`} className="btn btn-default" role="button">View</a> <Link to={`/product/${this.props.id}`} /></p> }
        </div>
      </div>

    );
  }
}
