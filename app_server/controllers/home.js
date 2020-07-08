/* Home */
module.exports.index = (req,res)=>{
    let productosDeOferta = [
        {
            id:1,
            foto: '/images/cafetera.jpg',
            nombre: "Cafetera Smart Electrolux",
            precio: '4.500', 
            descuento:'20'
        },
        {
            id:2,
            foto:'/images/smart.jpg',
            nombre: 'Smart TV Toshiba 32"',
            precio: '34.000',
            descuento:'15'
        },
        {
            id:3,
            foto:'/images/macbook.jpg',
            nombre:'Mac Book Pro 2019',
            precio:'230.000',
            descuento:'30'
        }

    ];

    let productosDestacados = [
        {
            id:4,
            foto: '/images/galaxy.jpg',
            nombre: "Samsung Galaxy",
            precio: '18.000', 
            descuento:'10'
        },
        {
            id:5,
            foto:'/images/parlante.webp',
            nombre: 'Parlante Sony 5w',
            precio: '12.700',
            descuento:'15'
        },
        {
            id:6,
            foto:'/images/zapatilla.webp',
            nombre:'Zapatilla runner',
            precio:'4.500',
            descuento:'25'
        }

    ];

    res.render('index',{
        productosDeOferta:productosDeOferta,
        productosDestacados:productosDestacados
    });
    //res.sendFile('C:\\Users\\Usuario\\nodeProjects\\practica\\app_server\\views\\home.html')
    // res.render('index.ejs')
};