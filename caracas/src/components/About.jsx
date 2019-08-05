import React from 'react'
import about1 from '../assets/asset-2.svg'
import about2 from '../assets/asset-3.svg'


function About() {

  return (
<<<<<<< HEAD
    <div id="about-section">
      <div className="about-container">
        <div className="row">
          <div className="about-column">
            {/* Left Column */}
            <div className="blue-column">
              <p className="blue-column-title">WHAT'S AN AREPA?</p>
              <p className="blue-column-p">It’s a corn pancake, with savory or sweet fillings, rooted in Venezuelan tradition.</p>
              <br>
              </br>
              <p className="blue-column-p">At Caracas, our secret ingredient is consistency. We start with fresh ingredients and a love for the craft of creating the best Venezuelan food day in and day out. No matter where you come from, whether you are a part of the family or a first-time guest, you will feel the warmth of our dedication through the joy of our meals.  </p>
            </div>


            <div className="green-column">
              <img className="arepa-img" src={about1} alt="arepa" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="about-column">
            <div className="green2-column">
              <img className="arepa-img" src={about2} alt="arepa" />
            </div>

            <div className="blue-column">
              <p className="blue-column-title">CARACAS: THE CAPITAL BAR</p>
              <p className="blue-column-p">It all began with a love-at-first-site encounter at an arepa bar in Caracas, Venezuela. The following act included a honey money, moving to New York City, and opening our very own arepa spot in the East Village. </p>
            </div>
          </div>
        </div>
      </div >
    </div>
=======
    <>
      <div className="container is-fluid">
        <div className="row">

          <div className="columns">
            {/* Left Column */}
            <div className="one-half column">
              <div className="about-text-left">
                <p className="arepa-header-text">WHAT'S AN AREPA?</p>
                <p className="about-area-p">It’s a corn pancake, with savory or sweet fillings, rooted in Venezuelan tradition.</p>
                <br>
                </br>
                <p className="about-area-p">At Caracas, our secret ingredient is consistency. We start with fresh ingredients and a love for the craft of creating the best Venezuelan food day in and day out. No matter where you come from, whether you are a part of the family or a first-time guest, you will feel the warmth of our dedication through the joy of our meals.  </p>
              </div>
            </div>

            <div className="one-half column">
              <img className="arepa-responsive-image-r" src={about1} alt="arepa" />
            </div>
          </div>
        </div>
      </div>
      <div className="container is-fluid">
        <div className="row">
          <div className="columns">
            <div className="one-half column">
              <img className="arepa-responsive-image" src={about2} alt="arepa" />
            </div>

            <div className="one-half column">
              <div className="about-text-right">
                <p className="arepa-header-text">CARACAS: THE CAPITAL BAR</p>
                <p className="about-area-p">It all began with a love-at-first-site encounter at an arepa bar in Caracas, Venezuela. The following act included a honey money, moving to New York City, and opening our very own arepa spot in the East Village. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> sb-mobile-css
  )
}

export default About