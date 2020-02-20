module.exports = {
    casasbahia: {
        url: 'https://www.casasbahia.com.br/AsyncProduto.ashx',
        fields: {
            postalCodeFirstPart: 'prefixo',
            postalCodeSecondPart: 'sufixo',
            sellerId: 'idLojista',
            sku: 'sku',
            canal: 'canal'
        }
    },
    magazineluiza: {
        url: 'https://www.magazineluiza.com.br/produto/calculo-frete',
        fields: {
            postalCodeFirstPart: 'prefixo',
            postalCodeSecondPart: 'sufixo',
            sellerId: 'idLojista',
            sku: 'sku',
            canal: 'canal'
        }
    }
}