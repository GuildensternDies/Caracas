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
      <div className="menu-container">
        <div className="row">
          <div className="col-6">
            <h2 className="switch-food" onClick={this.switchToFood}>MENU</h2>
          </div>
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
                <h3 className="menu-header">AREPAS</h3>
                <p className="blue-column-title">DE PABELLON      11</p>
              </section>

              <p className="blue-column-p">shredded beef, black beans, cotija cheese, fried</p>
              <p className="blue-column-p">sweet plantains</p>
              <p className="blue-column-title">MISS PIGGY     10.50</p>
              <p className="blue-column-p">Roasted pork shoulder, cheddar, tomatoes, </p>
              <p className="blue-column-p">pickled onions</p>
              <p className="blue-column-p">+ avocado  3</p>
              <p className="blue-column-p">+ fried sweet plantains  2</p>
              <p className="blue-column-title">LA SUREÑA     10.50</p>
              <p className="blue-column-p">Grilled chicken, chorizo, avocado, chimi-</p>
              <p className="blue-column-p">churi sauce</p>
              <p className="blue-column-title">LA DEL GATO     10.50</p>
              <p className="blue-column-p">guayanés cheese, fried sweet</p>
              <p className="blue-column-p">plantains, avocado </p>
              <p className="blue-column-p">+ chicken  3</p>
              <p className="blue-column-p">+ black beans  2</p>
              <p className="blue-column-title">LOS MUCHACHOS     10</p>
              <p className="blue-column-p">chorizo, grilled queso blanco with jalapeños, </p>
              <p className="blue-column-p">sauteed peppers</p>
              <p className="blue-column-p">+ avocado  3</p>
              <p className="blue-column-title">LA MULATA     10</p>
              <p className="blue-column-p">grilled queso blanco, jalapeños, black beans, </p>
              <p className="blue-column-p">sauteed red peppers, fried sweet plantains</p>
              <p className="blue-column-p">+ avocado  3</p>
              <p className="blue-column-p">pickled onions  1.50</p>
              <p className="blue-column-title">HOT QUEEN     10.50</p>
              <p className="blue-column-p">Pulled chicken, sauteed peppers, onions, scallions,</p>
              <p className="blue-column-p">avocado, herb mayo</p>
              <p className="blue-column-title">REINA PEPIADA     10</p>
              <p className="blue-column-p">Avocado chicken salad with onion, cilantro, mayo</p>
              <p className="blue-column-p">+ fried sweet plantains  2</p>
              <p className="blue-column-title">VOLVERÉ     10</p>
              <p className="blue-column-p">Guayanés cheese, tomato, avocado, sauteed peppers, </p>
              <p className="blue-column-p">chimi-churri sauce</p>
              <p className="blue-column-title">PLAYA DELUXE     11</p>
              <p className="blue-column-p">Pan-seared tilapia, roasted garlic, sauteed shiitake,</p>
              <p className="blue-column-p">avocado, pickled onions, herb mayo</p>
              <p className="blue-column-title">MIL Y UNA NOCHE     9.50</p>
              <p className="blue-column-p">Baked tofu, hearty rainbow slaw, lemon-tahini </p>
              <p className="blue-column-p">dressing, avocado </p>
              <p className="blue-column-p">+ black beans  2</p>
              <p className="blue-column-p">+ fried sweet plantains  2</p>
            </div>
            {/* Food Menu Column 2 */}
            <div className="col-6">
              <h3 className="menu-header">SIDE KICKS </h3>
              <p className="blue-column-title">GUASACA {'&'} CHIPS     9</p>
              <p>Guacamole with homemade chips</p>
              <p className="blue-column-title">TAJADAS     5</p>
              <p>Fried sweet plantains with cotija cheese</p>
              <p>+ guacamole or beans  3</p>
              <p className="blue-column-title">TOSTONES MOCHIMEROS     8</p>
              <p>Fried green plantains topped with herb mayo, </p>
              <p>cotija cheese</p>
              <p className="blue-column-title">CROQUETAS     8</p>
              <p>Deep fried yucca balls with chorizo, corn</p>
              <p>cilantro and herb sauce</p>
              <p className="blue-column-title">TEQUEÑOS     9.50</p>
              <p>Deep fried handmade queso blanco sticks wrapped</p>
              <p>in wheat flour dough</p>
              <p className="blue-column-title">YOYOS     8</p>
              <p>Cinnamon battered layers of sweet plantains and</p>
              <p>papelón dipping sauce</p>
              <h3 className="menu-header">SOUPS</h3>
              <p className="blue-column-title">SOUP OF THE DAY</p>
              <p>Seasonal selections of signature recipes</p>
              <p>Choose: cup or bowl</p>
              <h3 className="menu-header">SALADS</h3>
              <p className="blue-column-title">ENSALADA MIXTA     SMALL 8, LARGE 13</p>
              <p>Mixed greens, cherry tomatoes, hearts of palm,</p>
              <p>shredded carrot, avocado, balsamic vinaigrette</p>
              <p className="blue-column-title">GRAN SABANA     12</p>
              <p>Baby kale, grapefruit, candycane beets, roasted corn,</p>
              <p>sunflower seeds, red wine vinaigrette with agave</p>
              <h3 className="menu-header">BOWLS {'&'} PLATES</h3>
              <p className="blue-column-title">RICO BOWL     15</p>
              <p>Baked tofu or grilled chicken, white rice, black beans, </p>
              <p>sweet potato, citrus slaw, gaucamole, microgreens</p>
              <p>+ cotija cheese  1.50</p>
              <p className="blue-column-title">PABELLÓN CRIOLLO   SMALL 10, LARGE 16</p>
              <p>Venezuelan national dish composed of shredded beef,</p>
              <p>white rice, black beans, fried sweet plantains,</p>
              <p>cotija cheese</p>
              <p className="blue-column-title">PLATO CUYAGUA     19</p>
              <p>Pan-seared tilapia, white rice, green plantains,</p>
              <p>citrus slaw, avocado</p>
            </div>
          </div>


        }
        {(this.state.drinkSwitch === true) &&
          <div className="cocktails">
            <div className="row">
              <div className="col-6">
                <h3 className="menu-header">COCKTAILS: MON - FRI</h3>
                <p className="blue-column-title">MOJITO     12, 46</p>
                <p className="blue-column-title">CAIPIRINHA     12, 46</p>
                <p className="blue-column-title">SANGRIA    9,  36</p>
                <p className="blue-column-title">MIMOSA DE PARCHITA    7</p>
                <p className="blue-column-title">MICHELADA  9  </p>
                <h3 className="menu-header">HAPPY HOUR: 12 - 7PM</h3>
                <p className="blue-column-title">PASSION FRUIT {'&'} RUM     7 </p>
                <p className="blue-column-title">DARK N STORMY     8, 36</p>
                <p className="blue-column-title">MARGARITA    8,  36</p>
                <p className="blue-column-title">PAPELON WITH RUM     7</p>
                <p className="blue-column-title">ALL BEERS $1 OFF</p>
              </div>
              <div className="col-6">
                <h3 className="menu-header">WINE</h3>
                <p className="blue-column-title">GLASS     10  |    BOTTLE     40</p>
                <p className="blue-column-title">WHITE {"&"} ROSE</p>
                <p className="blue-column-title">MADERA CELLARS, TORRONTES 2015 </p>
                <p className="blue-column-title">DOMAINE DE LA CHAISE, SAUVIGNON BLANC 2018</p>
                <p className="blue-column-title">BERGER, GRUNER VELTLINER 2018 </p>
                <p className="blue-column-title">RED</p>
                <p className="blue-column-title">NICOLAS IDIART, PINOT NOIR 2017</p>
                <p className="blue-column-title">CARMELLE, MALBEC 2017</p>
              </div>
            </div>
          </div>
        }
      </div>

    )
  }
}

export default Menu;