function mostrarCarrito(productos) {
    var carritoTabla = document.getElementById("carritoTabla");
    carritoTabla.innerHTML = "";
    for (let index = 0; index < sessionStorage.length; index++) {
        var carrito = recuperarSession(index);
        carritoTabla += `<table class="table">
        <thead>
            <tr>
                <th scope="col">

                </th>
                <th scope="col">${carrito.nombre}</th>
                <th scope="col">Imagen2</th>
                <th scope="col">Imagen3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
        </table>`

    }
}