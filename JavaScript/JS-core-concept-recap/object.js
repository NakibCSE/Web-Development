const Nayok = {
    name: 'Shakib Khan',
    id: 121,
    address: 'Movie cinema',
    isSingle: true,
    friends: ['Opu', 'Raj', 'Salman','Amir'],
    movies: [{Name: 'no 1', year: 2015}, {name:'King Khan', year: 2018}],
    act:function(){
        console.log('Acting like Shakib Khan')
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer:{
            name: 'Tesla',
            ceo: 'Elon Mask',
        }
    }
}
Nayok.act();