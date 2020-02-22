const axios = require('axios');

const getRequestUrl = (competitor, competitorStructure, requestFields) => {
  switch (competitor) {
    case 'magazineluiza':
      return `${competitorStructure.url}/${requestFields.postalCodeFirstPart}${requestFields.postalCodeSecondPart}/${requestFields.sku}/${requestFields.sellerName}.json`;
      break;

    case 'casasbahia':
      return competitorStructure.url;
      break;

    default:
      return '';
  }
};


module.exports = {
  getRequestUrl,
};
