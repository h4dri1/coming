const fetch = require('cross-fetch');

const fetchPrice = {
  getPrice: () => async (req, res, next) => {
    try {
      const crypto = 'bitcoin,ethereum';
      const fiat = 'usd,usd';
      const checkPrice = await fetch(`//api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${fiat}`);
      const checkMarket = await fetch(`//api.coingecko.com/api/v3/global`)

      const price = await checkPrice.json();
      const market = await checkMarket.json();

      const data = {price, market};

      req.params = data;
    } catch (err) {
      console.error(err);
    }
    next();
  }
};

module.exports = fetchPrice;