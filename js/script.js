var data = [{
        imagen: "https://www.zapatos.uy/storage/10748/conversions/146.W19491000_1920-1200_1555077789_557-thumb.jpg",
        nombre: "Card 1",
        descripcion: "",
        precio: "",
        categoria: ""
    },
    {
        imagen: "https://s.fenicio.app/f2/alliuy/catalogo/articulos/521201703201-002-01_2000-2000_1620327701_5b8.jpg",
        nombre: "Card 2",
        descripcion: "",
        precio: "",
        categoria: ""
    },
    {
        imagen: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
        nombre: "Card 3",
        descripcion: "",
        precio: "",
        categoria: ""
    },
    {
        imagen: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
        nombre: "Card 4",
        descripcion: "",
        precio: "",
        categoria: ""
    }
];

function llenarCatalogo(productos) {
    var catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";
    for (let index = 0; index < productos.length; index++) {
        const element = productos[index];
        catalogo.innerHTML += `<div class="col-3">
        <div class="card">
            <img height="250px" src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio</li>
                <li class="list-group-item">Categoria</li>
    
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Detalle</a>
                <a href="#" class="card-link">Añadir al carrito</a>
            </div>
        </div>
    </div>`;

    }
}

llenarCatalogo(data);


var btnSearch = document.getElementById('search');
btnSearch.addEventListener('click', function(event) {
    event.preventDefault();

})

var txtSearch = document.getElementById('txtSearch');
txtSearch.addEventListener('keyup', function(event) {
    if (event.target.value.length >= 3) {
        let newData = data.filter(function(el) {
            return el.nombre.toLowerCase().includes(event.target.value.toLowerCase()) === true
        });
        llenarCatalogo(newData)
    }
})