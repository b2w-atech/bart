const axios = require('axios');

const call = ({ url,
    sellerIdIndex,
    postalCodeFirstPartIndex,
    postalCodeSecondPartIndex,
    skuIndex
}) => {

    console.log({ url,
        sellerIdIndex,
        postalCodeFirstPartIndex,
        postalCodeSecondPartIndex,
        skuIndex
    })
    /* return axios({
        method: 'get',
        url,
        params
    }); */
}

module.exports = { call };