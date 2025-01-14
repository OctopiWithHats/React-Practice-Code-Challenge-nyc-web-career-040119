import React, { Fragment } from 'react'

const Sushi = (props) => {
  
  return (
    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! */ null}>
        {
          /* Tell me if this sushi has been eaten! */
          true ?
            null
          :
            <img src={this.props.sushis.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushis.name} - ${this.props.sushis.price}
      </h4>
    </div>
  )
}

export default Sushi
