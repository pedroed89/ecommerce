var data = [{
        id: 1,
        imagen: "https://www.zapatos.uy/storage/10748/conversions/146.W19491000_1920-1200_1555077789_557-thumb.jpg",
        nombre: "Card 1",
        descripcion: "",
        precio: "150",
        categoria: "",
        cantidad: 0
    },
    {
        id: 2,
        imagen: "https://s.fenicio.app/f2/alliuy/catalogo/articulos/521201703201-002-01_2000-2000_1620327701_5b8.jpg",
        nombre: "Card 2",
        descripcion: "",
        precio: "320",
        categoria: "",
        cantidad: 0
    },
    {
        id: 3,
        imagen: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
        nombre: "Card 3",
        descripcion: "",
        precio: "50",
        categoria: "",
        cantidad: 0
    },
    {
        id: 4,
        imagen: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
        nombre: "Card 4",
        descripcion: "",
        precio: "50",
        categoria: "",
        cantidad: 0
    }
];

var dataSession = [];

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
            <div class="card-body" style="text-align:center;">
                <div class="qty" style="display:flex;justify-content:center;margin:5px">
                    <a class="btn btn-danger  btn-resta"  id="btnResta${element.id}">-</a>
                    <input type="number" id="qtyInput${element.id}" style="width:40px;margin:2px" value="${element.cantidad}"/>
                    <a class="btn btn-danger btn-suma" id="btnSuma${element.id}">+</a>
                </div>
                <a class="btn btn-danger"><i class="bi bi-eye"></i></a>
                <a id="btnCarrito${element.id}" class="btn btn-danger btnAdd"><i class="bi bi-cart-plus"></i></a>
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
    } else {
        llenarCatalogo(data);
    }
})

var adds = document.getElementsByClassName('btnAdd');

for (let index = 0; index < adds.length; index++) {
    const element = adds[index];
    element.addEventListener('click', function(event) {
        event.preventDefault();
        let id = parseInt(event.target.id.replace('btnCarrito', ''));
        let sessionData = recuperarSession('producto');
        let producto = data.filter(function(element) {
            return element.id === id;
        })[0];
        let qtyInput = document.getElementById("qtyInput" + id);
        producto.cantidad = parseInt(qtyInput.value);

        if (sessionData === null) {
            // guardar
            dataSession.push(producto);
            guardarSession('producto', dataSession);
        } else {
            let prods = sessionData.filter(function(element) {
                return element.id === id
            });

            if (prods.length > 0) {
                let newSessionData = sessionData.map(function(element) {
                    if (element.id === id) {
                        element.cantidad = producto.cantidad
                    }
                    return element;
                })
                guardarSession('producto', newSessionData);
            } else {
                sessionData.push(producto);
                guardarSession('producto', sessionData);
            }
        }
    });
}

function guardarSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function recuperarSession(key) {
    return JSON.parse(sessionStorage.getItem(key));
}


var btnSuma = document.getElementsByClassName('btn-suma');
for (let index = 0; index < btnSuma.length; index++) {
    const element = btnSuma[index];
    element.addEventListener('click', function(event) {
        // id: agarrar el input correspondiente al card donde se dio click al boton aumentar
        let id = event.target.id.replace("btnSuma", "");
        let qtyInput = document.getElementById("qtyInput" + id);
        if (qtyInput.value.length > 0) {
            let newValue = parseInt(qtyInput.value);
            newValue++;
            qtyInput.value = newValue;
        }
    });
}

var btnResta = document.getElementsByClassName('btn-resta');
for (let index = 0; index < btnResta.length; index++) {
    const element = btnResta[index];
    element.addEventListener('click', function(event) {
        let id = event.target.id.replace("btnResta", "");
        let qtyInput = document.getElementById("qtyInput" + id);
        if (qtyInput.value.length > 0 && parseInt(qtyInput.value) > 0) {
            let newValue = parseInt(qtyInput.value);
            newValue--;
            qtyInput.value = newValue;
        } else {
            document.getElementById("btnCarrito" + id).disabled = false;
        }
    })
}