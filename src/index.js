require('dotenv').config();

const express = require('express');
const app = express();

const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded());

const urlHelpers = require('./utils/url');

const competitors = require('./constants/competitors');

app.get('/freight', (req, res) => {
    const competitor = req.query.competitor;
    const sellerName = req.query.sellerName;
    const sellerId = req.query.sellerId;
    const sku = req.query.sku;
    const postalCodeFirstPart = req.query.postalCodeFirstPart;
    const postalCodeSecondPart = req.query.postalCodeSecondPart;

    const competitorStructure = competitors[competitor];

    let reqParams = {}
    for (field in competitorStructure.fields) {
        reqParams[competitorStructure.fields[field]] = req.query[field]
    }

    if (sellerId === 'magazineluiza') {
        competitorStructure.url = competitorStructure.url + `/${postalCodeFirstPart}${postalCodeSecondPart}/${sku}/${sellerId}.json`
    }


    axios.get(competitorStructure.url,
        {
            headers: {
                referer: 'https://www.magazineluiza.com.br/smartphone-samsung-galaxy-a20-32gb-preto-4g-3gb-ram-64-cam-dupla-cam-selfie-8mp/p/155552700/te/sga2/'
            },
            params: sellerId === 'casasbahia' ? reqParams : null
        }
    ).then((result) => {
        console.log(result)
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.send(result.data);
    })
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Ouvindo requisições');
});
