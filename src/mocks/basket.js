import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const basket = {
  header: {
    title: "Basket details",
  },
  details: {
    name: "Basket of vegetables",
    farmLogo: logo,
    farmName: "Raphael Chagas Farm",
    description: "A basket with carefully selected products from the farm straight to your kitchen",
    price: "R$ 40,00",
    buttonTitle: "Buy",
  },
  items: {
    title: "Itens da cesta",
    list: [
      {
        name: "Tomate",
        image: tomate,
      },
      {
        name: "Brócolis",
        image: brocolis,
      },
      {
        name: "Batata",
        image: batata,
      },
      {
        name: "Pepino",
        image: pepino,
      },
      {
        name: "Abóbora",
        image: abobora,
      }
    ]
  }
}

export default basket;