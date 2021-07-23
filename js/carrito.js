var sessionData = recuperarSession('producto');
var cartContent = document.getElementById('cartContent');
if (sessionData === null) {
    let alertMessage = `<div class="alert alert-danger" role="alert">
   El carrito esta vacio!!!
 </div>`;

    cartContent.innerHTML = alertMessage;
} else {
    let trs = ""
    for (let index = 0; index < sessionData.length; index++) {
        const element = sessionData[index];
        trs += `<tr>
        <td>
            <img height="50px" style="width:50px" src="${element.imagen}" class="card-img-top" alt="...">
        </td>
        <td>${element.nombre}</td>
        <td>${element.precio}</td>
        <td>${element.categoria}</td>
        <td>
        <div class="qty" style="display:flex;justify-content:center;margin:5px">
        <a class="btn btn-danger  btn-resta"  id="btnResta${element.id}">-</a>
        <input type="number" id="qtyInput${element.id}" style="width:40px;margin:2px" value="${element.cantidad}"/>
        <a class="btn btn-danger btn-suma" id="btnSuma${element.id}">+</a>
    </div>
    </td>
    <td><i class="bi bi-trash"></i></td>
    </tr>`

    }
    let template = `<table class="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Nombre del producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Categoria</th>
                    <th scope="col" style="text-align:center">Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${trs}
            </tbody>
            </table>`;
    cartContent.innerHTML = template;
}

function guardarSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function recuperarSession(key) {
    return JSON.parse(sessionStorage.getItem(key));
}