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
      <div className="container mt-12">
        <div className="menu">
          <div className="toggle">
            <div className="row">
              <div className="col-6">
                <h2 className="switch" onClick={this.switchToFood}>Menu</h2>
              </div>
              <div className="col-6">
                <h2 className="switch" onClick={this.switchToDrinks}>Cocktails</h2>
              </div>
            </div>
            {(this.state.drinkSwitch === false) &&
              // Food Menu
              <div className="row">
                <div className="col-6">
                  {/* <div className="arepa-row"> */}
                  <section id="menu-section">
                    <h3 className="menu-header">Arepas</h3>
                    <h4 className="menu-item">DE PABELLON      11</h4>
                  </section>
                  <p>shredded beef, black beans, cotija cheese, fried</p>
                  <p>sweet plantains</p>
                  <h4 className="menu-item">MISS PIGGY     10.50</h4>
                  <p>Roasted pork shoulder, cheddar, tomatoes, </p>
                  <p>pickled onions</p>
                  <p>+ avocado  3</p>
                  <p>+ fried sweet plantains  2</p>
                  <h4 className="menu-item">LA SUREÑA     10.50</h4>
                  <p>Grilled chicken, chorizo, avocado, chimi-</p>
                  <p>churi sauce</p>
                  <h4 className="menu-item">LA DEL GATO     10.50</h4>
                  <p>guayanés cheese, fried sweet</p>
                  <p>plantains, avocado </p>
                  <p>+ chicken  3</p>
                  <p>+ black beans  2</p>
                  <h4 className="menu-item">LOS MUCHACHOS     10</h4>
                  <p>chorizo, grilled queso blanco with jalapeños, </p>
                  <p>sauteed peppers</p>
                  <p>+ avocado  3</p>
                  <h4 className="menu-item">LA MULATA     10</h4>
                  <p>grilled queso blanco, jalapeños, black beans, </p>
                  <p>sauteed red peppers, fried sweet plantains</p>
                  <p>+ avocado  3</p>
                  <p>pickled onions  1.50</p>
                  <h4 className="menu-item">HOT QUEEN     10.50</h4>
                  <p>Pulled chicken, sauteed peppers, onions, scallions,</p>
                  <p>avocado, herb mayo</p>
                  <h4 className="menu-item">REINA PEPIADA     10</h4>
                  <p>Avocado chicken salad with onion, cilantro, mayo</p>
                  <p>+ fried sweet plantains  2</p>
                  <h4 className="menu-item">VOLVERÉ     10</h4>
                  <p>Guayanés cheese, tomato, avocado, sauteed peppers, </p>
                  <p>chimi-churri sauce</p>
                  <h4 className="menu-item">PLAYA DELUXE     11</h4>
                  <p>Pan-seared tilapia, roasted garlic, sauteed shiitake,</p>
                  <p>avocado, pickled onions, herb mayo</p>
                  <h4 className="menu-item">MIL Y UNA NOCHE     9.50</h4>
                  <p>Baked tofu, hearty rainbow slaw, lemon-tahini </p>
                  <p>dressing, avocado </p>
                  <p>+ black beans  2</p>
                  <p>+ fried sweet plantains  2</p>
                </div>
                {/* Food Menu Column 2 */}
                <div className="col-6">
                  <h3 className="menu-header">SIDE KICKS </h3>
                  <h4 className="menu-item">GUASACA {'&'} CHIPS     9</h4>
                  <p>Guacamole with homemade chips</p>
                  <h4 className="menu-item">TAJADAS     5</h4>
                  <p>Fried sweet plantains with cotija cheese</p>
                  <p>+ guacamole or beans  3</p>
                  <h4 className="menu-item">TOSTONES MOCHIMEROS     8</h4>
                  <p>Fried green plantains topped with herb mayo, </p>
                  <p>cotija cheese</p>
                  <h4 className="menu-item">CROQUETAS     8</h4>
                  <p>Deep fried yucca balls with chorizo, corn</p>
                  <p>cilantro and herb sauce</p>
                  <h4 className="menu-item">TEQUEÑOS     9.50</h4>
                  <p>Deep fried handmade queso blanco sticks wrapped</p>
                  <p>in wheat flour dough</p>
                  <h4 className="menu-item">YOYOS     8</h4>
                  <p>Cinnamon battered layers of sweet plantains and</p>
                  <p>papelón dipping sauce</p>
                  <h3 className="menu-header">SOUPS</h3>
                  <h4 className="menu-item">SOUP OF THE DAY</h4>
                  <p>Seasonal selections of signature recipes</p>
                  <p>Choose: cup or bowl</p>
                  <h3 className="menu-header">SALADS</h3>
                  <h4 className="menu-item">ENSALADA MIXTA     SMALL 8, LARGE 13</h4>
                  <p>Mixed greens, cherry tomatoes, hearts of palm,</p>
                  <p>shredded carrot, avocado, balsamic vinaigrette</p>
                  <h4 className="menu-item">GRAN SABANA     12</h4>
                  <p>Baby kale, grapefruit, candycane beets, roasted corn,</p>
                  <p>sunflower seeds, red wine vinaigrette with agave</p>
                  <h3 className="menu-header">BOWLS {'&'} PLATES</h3>
                  <h4 className="menu-item">RICO BOWL     15</h4>
                  <p>Baked tofu or grilled chicken, white rice, black beans, </p>
                  <p>sweet potato, citrus slaw, gaucamole, microgreens</p>
                  <p>+ cotija cheese  1.50</p>
                  <h4 className="menu-item">PABELLÓN CRIOLLO   SMALL 10, LARGE 16</h4>
                  <p>Venezuelan national dish composed of shredded beef,</p>
                  <p>white rice, black beans, fried sweet plantains,</p>
                  <p>cotija cheese</p>
                  <h4 className="menu-item">PLATO CUYAGUA     19</h4>
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
                    <h4 className="menu-item">MOJITO     12, 46</h4>
                    <h4 className="menu-item">CAIPIRINHA     12, 46</h4>
                    <h4 className="menu-item">SANGRIA    9,  36</h4>
                    <h4 className="menu-item">MIMOSA DE PARCHITA    7</h4>
                    <h4 className="menu-item">MICHELADA  9  </h4>
                    <h3 className="menu-header">HAPPY HOUR: 12 - 7PM</h3>
                    <h4 className="menu-item">PASSION FRUIT {'&'} RUM     7 </h4>
                    <h4 className="menu-item">DARK N STORMY     8, 36</h4>
                    <h4 className="menu-item">MARGARITA    8,  36</h4>
                    <h4 className="menu-item">PAPELON WITH RUM     7</h4>
                    <h4 className="menu-item">ALL BEERS $1 OFF</h4>
                  </div>
                  <div className="col-6">
                    <h3 className="menu-header">WINE</h3>
                    <h4 className="menu-item">GLASS     10  |    BOTTLE     40</h4>
                    <h4 className="menu-item yellow">WHITE {"&"} ROSE</h4>
                    <h4 className="menu-item">MADERA CELLARS, TORRONTES 2015 </h4>
                    <h4 className="menu-item">DOMAINE DE LA CHAISE, SAUVIGNON BLANC 2018</h4>
                    <h4 className="menu-item">BERGER, GRUNER VELTLINER 2018 </h4>
                    <h4 className="menu-item yellow">RED</h4>
                    <h4 className="menu-item">NICOLAS IDIART, PINOT NOIR 2017</h4>
                    <h4 className="menu-item">CARMELLE, MALBEC 2017</h4>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;