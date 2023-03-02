let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.
    return 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701';
  }
  
  customerInfo(order);
  
  console.log(customerInfo(order));
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
    //'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
    let novoComprador = order.name = 'Luiz Silva';
    let novoTotal = order.payment.total = '50';
    let pizza = Object.keys(order.order.pizza);
    let drinks = order.order.drinks.coke.type;

    console.log('Olá, ' + novoComprador + ', o valor total de seu pedido de ' +  pizza[0] +  ', ' + pizza[1] + ' e ' + drinks + ' é R$ ' + novoTotal + ',00' );
  }
  
  orderModifier(order);