import React from 'react'
import './scroll.css'
import Scrollitems from './Scrollitems'

const Scroll = () => {
  return (
    <div className="conatiner h-[30vw] w-screen p-[26px] bg-white">
      <div className="title font-bold text-2xl">RECOMMENDED FOR YOU</div>
      <div className='main'>
        <Scrollitems
          link={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/399844/01/sv01/fnd/IND/fmt/png/PUMA-Court-Shatter-Low-Men's-Sneakers"}
          fl={"PUMA Court Shatter Low Men's Sneakers"}
          sl={"₹2,819"}
        />

        <Scrollitems
          link={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/381065/03/sv01/fnd/IND/fmt/png/PUMA-Oslo-City-Men's-Sneakers"}
          fl={"PUMA Oslo City Men's Sneakers"}
          sl={"₹4,499"}
        />

        <Scrollitems
          link={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/380729/02/sv01/fnd/IND/fmt/png/PUMA-Oslo-City-Metallic-Men's-Sneakers"}
          fl={"PUMA Oslo City Metallic Men's Sneakers"}
          sl={"₹4,999"}
        />
        <Scrollitems
          link={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/383415/01/sv01/fnd/IND/fmt/png/PUMA-Cali-Sport-White-Gold-Men's-Sneakers"}
          fl={"PUMA Cali Sport White Gold Men's Sneakers"}
          sl={"₹5,499"}
        />
        <Scrollitems
          link={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/369451/01/sv01/fnd/IND/fmt/png/PUMA-Suede-Classic-+-Men's-Sneakers"}
          fl={"PUMA Suede Classic + Men's Sneakers"}
          sl={"₹3,499"}
        />

        <Scrollitems
          link={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/375570/01/sv01/fnd/IND/fmt/png/PUMA-Future-Rider-Soft-Metallic-Sneakers"}
          fl={"PUMA Future Rider Soft Metallic Sneakers"}
          sl={"₹3,999"}
        />


        <Scrollitems
          link={"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/380758/01/sv01/fnd/IND/fmt/png/PUMA-Ralph-Sampson-Low-Mid-Men's-Sneakers"}
          fl={"PUMA Ralph Sampson Low Mid Men's Sneakers"}
          sl={"₹4,499"}
        />

      </div>



    </div>

  )
}

export default Scroll
