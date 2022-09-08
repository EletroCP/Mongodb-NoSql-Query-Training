// 9 - Retorne o nome de todos os lanches que possuam calorias abaixo de 500
db.produtos.find({ 
  valoresNutricionais: {
    $elemMatch: {
      tipo: "proteínas",
      percentual: {
        $gte: 30,
        $lte: 40,
      },
    },
  },
}, {
  _id: 0,
  nome: 1,
});