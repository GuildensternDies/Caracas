import React from 'react'
import bx1 from '../assets/box-1.svg'
import bx2 from '../assets/box-2.svg'
import bx3 from '../assets/box-3.svg'
import bx4 from '../assets/box-4.svg'
import bx5 from '../assets/box-5.svg'
import bx6 from '../assets/box-6.svg'
import bx7 from '../assets/box-7.svg'
import bx8 from '../assets/box-8.svg'


function PicSection() {
  return (
    <div className="container is-fluid">
      <div id="picsection">
        <img className="responsive-image" src={bx1} />
        <img className="responsive-image" src={bx2} />
        <img className="responsive-image" src={bx3} />
        <img className="responsive-image" src={bx4} />
        <img className="responsive-image" src={bx5} />
        <img className="responsive-image" src={bx6} />
        <img className="responsive-image" src={bx7} />
        <img className="responsive-image" src={bx8} />
      </div>
    </div>

  )
}

export default PicSection;