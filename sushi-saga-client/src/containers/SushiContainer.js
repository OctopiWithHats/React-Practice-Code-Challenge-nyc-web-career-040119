import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  // function showSushi() {
  //   return this.props.state.sushis.slice(0,4)
  // }

  return (
    <Fragment>
      <div className="belt">
        <div>
          /*
            here's where I'll render sushi pieces
          */
        </div>

        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
