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

	const competitorStructure = competitors[competitor];
  let reqParams = {};

	if (competitorStructure.hasQueryParams) {
		for (field in competitorStructure.fields) {
			reqParams[competitorStructure.fields[field]] = req.query[field]
		}
	}

	const requestUrl = urlHelpers.getRequestUrl(competitor, competitorStructure, req.query);

	console.log(requestUrl);
  console.log(reqParams);


	axios.get(requestUrl,
		{
			headers: competitor.hasReferer ? {
				referer: 'https://www.magazineluiza.com.br/smartphone-samsung-galaxy-a20-32gb-azul-4g-3gb-ram-64-cam-dupla-cam-selfie-8mp/p/155552900'
			} : null,
			params: competitor.hasQueryParams ? reqParams : null
		}
	).then((result) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		return res.send(result.data);
	})
    .catch((err) => {
      console.log(err);
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Ouvindo requisições');
});
