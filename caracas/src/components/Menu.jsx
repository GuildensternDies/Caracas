import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkSwitch: false
    }
  }
  switchToDrinks = () => {
    this.setState({
      drinkSwitch: true
    });
  }
  switchToFood = () => {
    this.setState({
      drinkSwitch: false
    });
  }
  render() {
    return (
      <div className="container is-fluid">
        <div className="menu-container">
          <div className="row">
            <div className="col-6">
              <h2 className="switch-food" onClick={this.switchToFood}>MENU</h2>
            </div>
            <hr />
            <div className="col-6">
              <h2 className="switch-drink" onClick={this.switchToDrinks}>COCKTAILS</h2>
            </div>
          </div>
          {(this.state.drinkSwitch === false) &&
            // Food Menu
            <div className="row">
              <div className="col-6">
                {/* <div className="arepa-row"> */}

                <section id="menu-section">
                  <h2 className="menu-title">AREPAS</h2>
                  <p className="menu-sub-h">DE PABELLON      11</p>
                </section>

                <p className="menu-p">shredded beef, black beans, cotija cheese, fried</p>
                <p className="menu-p">sweet plantains</p>
                <p className="menu-sub-h">MISS PIGGY     10.50</p>
                <p className="menu-p">Roasted pork shoulder, cheddar, tomatoes, </p>
                <p className="menu-p">pickled onions</p>
                <p className="menu-p">+ avocado  3</p>
                <p className="menu-p">+ fried sweet plantains  2</p>
                <p className="menu-sub-h">LA SUREÑA     10.50</p>
                <p className="menu-p">Grilled chicken, chorizo, avocado, chimi-</p>
                <p className="menu-p">churi sauce</p>
                <p className="menu-sub-h">LA DEL GATO     10.50</p>
                <p className="menu-p">guayanés cheese, fried sweet</p>
                <p className="menu-p">plantains, avocado </p>
                <p className="menu-p">+ chicken  3</p>
                <p className="menu-p">+ black beans  2</p>
                <p className="menu-sub-h">LOS MUCHACHOS     10</p>
                <p className="menu-p">chorizo, grilled queso blanco with jalapeños, </p>
                <p className="menu-p">sauteed peppers</p>
                <p className="menu-p">+ avocado  3</p>
                <p className="menu-sub-h">LA MULATA     10</p>
                <p className="menu-p">grilled queso blanco, jalapeños, black beans, </p>
                <p className="menu-p">sauteed red peppers, fried sweet plantains</p>
                <p className="menu-p">+ avocado  3</p>
                <p className="menu-p">pickled onions  1.50</p>
                <p className="menu-sub-h">HOT QUEEN     10.50</p>
                <p className="menu-p">Pulled chicken, sauteed peppers, onions, scallions,</p>
                <p className="menu-p">avocado, herb mayo</p>
                <p className="menu-sub-h">REINA PEPIADA     10</p>
                <p className="menu-p">Avocado chicken salad with onion, cilantro, mayo</p>
                <p className="menu-p">+ fried sweet plantains  2</p>
                <p className="menu-sub-h">VOLVERÉ     10</p>
                <p className="menu-p">Guayanés cheese, tomato, avocado, sauteed peppers, </p>
                <p className="menu-p">chimi-churri sauce</p>
                <p className="menu-sub-h">PLAYA DELUXE     11</p>
                <p className="menu-p">Pan-seared tilapia, roasted garlic, sauteed shiitake,</p>
                <p className="menu-p">avocado, pickled onions, herb mayo</p>
                <p className="menu-sub-h">MIL Y UNA NOCHE     9.50</p>
                <p className="menu-p">Baked tofu, hearty rainbow slaw, lemon-tahini </p>
                <p className="menu-p">dressing, avocado </p>
                <p className="menu-p">+ black beans  2</p>
                <p className="menu-p">+ fried sweet plantains  2</p>
              </div>
              {/* Food Menu Column 2 */}
              <div className="col-6">
                <h2 className="menu-title">SIDE KICKS </h2>
                <p className="menu-sub-h">GUASACA {'&'} CHIPS     9</p>
                <p className="menu-p">Guacamole with homemade chips</p>
                <p className="menu-sub-h">TAJADAS     5</p>
                <p className="menu-p">Fried sweet plantains with cotija cheese</p>
                <p className="menu-p">+ guacamole or beans  3</p>
                <p className="menu-sub-h">TOSTONES MOCHIMEROS     8</p>
                <p className="menu-p">Fried green plantains topped with herb mayo, </p>
                <p className="menu-p">cotija cheese</p>
                <p className="menu-sub-h">CROQUETAS     8</p>
                <p className="menu-p">Deep fried yucca balls with chorizo, corn</p>
                <p className="menu-p">cilantro and herb sauce</p>
                <p className="menu-sub-h">TEQUEÑOS     9.50</p>
                <p className="menu-p">Deep fried handmade queso blanco sticks wrapped</p>
                <p className="menu-p">in wheat flour dough</p>
                <p className="menu-sub-h">YOYOS     8</p>
                <p className="menu-p">Cinnamon battered layers of sweet plantains and</p>
                <p className="menu-p">papelón dipping sauce</p>
                <h3 className="menu-title">SOUPS</h3>
                <p className="menu-sub-h">SOUP OF THE DAY</p>
                <p className="menu-p">Seasonal selections of signature recipes</p>
                <p className="menu-p">Choose: cup or bowl</p>
                <h3 className="menu-title">SALADS</h3>
                <p className="menu-sub-h"> ENSALADA MIXTA SMALL 8, LARGE 13</p>
                <p className="menu-p">Mixed greens, cherry tomatoes, hearts of palm,</p>
                <p className="menu-p">shredded carrot, avocado, balsamic vinaigrette</p>
                <p className="menu-sub-h">GRAN SABANA     12</p>
                <p className="menu-p">Baby kale, grapefruit, candycane beets, roasted corn,</p>
                <p className="menu-p">sunflower seeds, red wine vinaigrette with agave</p>
                <h3 className="menu-title">BOWLS {'&'} PLATES</h3>
                <p className="menu-sub-h">RICO BOWL     15</p>
                <p className="menu-p">Baked tofu or grilled chicken, white rice, black beans, </p>
                <p className="menu-p">sweet potato, citrus slaw, gaucamole, microgreens</p>
                <p className="menu-p">+ cotija cheese  1.50</p>
                <p className="menu-sub-h">PABELLÓN CRIOLLO   SMALL 10, LARGE 16</p>
                <p className="menu-p">Venezuelan national dish composed of shredded beef,</p>
                <p className="menu-p">white rice, black beans, fried sweet plantains,</p>
                <p className="menu-p">cotija cheese</p>
                <p className="menu-sub-h">PLATO CUYAGUA     19</p>
                <p className="menu-p">Pan-seared tilapia, white rice, green plantains,</p>
                <p className="menu-p">citrus slaw, avocado</p>
              </div>
            </div>


          }
          {(this.state.drinkSwitch === true) &&
            <div className="cocktails">
              <div className="row">
                <div className="col-6">
                  <h3 className="menu-title">COCKTAILS: MON - FRI</h3>
                  <p className="menu-p">MOJITO     12, 46</p>
                  <p className="menu-p">CAIPIRINHA     12, 46</p>
                  <p className="menu-p">SANGRIA    9,  36</p>
                  <p className="menu-p">MIMOSA DE PARCHITA    7</p>
                  <p className="menu-p">MICHELADA  9  </p>
                  <h3 className="menu-title">HAPPY HOUR: 12 - 7PM</h3>
                  <p className="menu-p">PASSION FRUIT {'&'} RUM     7 </p>
                  <p className="menu-p">DARK N STORMY     8, 36</p>
                  <p className="menu-p">MARGARITA    8,  36</p>
                  <p className="menu-p">PAPELON WITH RUM     7</p>
                  <p className="menu-p">ALL BEERS $1 OFF</p>
                </div>
                <div className="col-6">
                  <h3 className="menu-title">WINE</h3>
                  <p className="menu-p">GLASS     10  |    BOTTLE     40</p>
                  <p className="menu-p">WHITE {"&"} ROSE</p>
                  <p className="menu-p">MADERA CELLARS, TORRONTES 2015 </p>
                  <p className="menu-p">DOMAINE DE LA CHAISE, SAUVIGNON BLANC 2018</p>
                  <p className="menu-p">BERGER, GRUNER VELTLINER 2018 </p>
                  <p className="menu-p">RED</p>
                  <p className="menu-p">NICOLAS IDIART, PINOT NOIR 2017</p>
                  <p className="menu-p">CARMELLE, MALBEC 2017</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Menu;