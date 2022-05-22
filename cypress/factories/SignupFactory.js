var faker = require ('faker')
var cpf = require ('gerador-validador-cpf')

export default {

  deliver: function(){

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {

      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp:'71991133713',
      address:{
        postalcode:'41213122',
        street:'Rua Vale do Abaré',
        number: '900',
        details:'bl X, Ap 450',
        district:'Sussuarana',
        city_state:'Salvador/BA'
      },
     delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    
    }
    return data
  }
}