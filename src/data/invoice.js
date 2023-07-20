export const invoice = {
    id:10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street:'One Street',
            number: 14
        }
    },
    company:{
        name: 'New Egg',
        fiscalNumber: 1234567,
    },
    items:[
        {
            id: 1,
            product:'Cpu intel i7',
            price: 777,
            quantity: 1,
        },
        {
            id:2,
            product:'Corsair keyboard mecanico',
            price: 160,
            quantity: 1,
        },
        {
            id:3,
            product:'Monitor Asus',
            price: 340,
            quantity: 1,
        },
    ]
}