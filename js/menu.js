var menu = `
<div class="container-fluid">
    <a class="navbar-brand" href="#">Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="../index.html">Inicio <i class="bi bi-house"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/carrito.html">Carrito <i class="bi bi-cart-plus"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/finalizar_compra.html">Finalizar Compra <i class="bi bi-currency-dollar"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/contacto.html">Contacto <i class="bi bi-telephone"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="pages/faq.html">Preguntas Frecuentes <i class="bi bi-question-circle"></i></a>
            </li>
            <li class="nav-item dropdown" style="display: none">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" id="txtSearch" type="search" placeholder="Buscar" aria-label="Search">
            <button class="btn btn-outline-success menub" id="search" type="submit">Buscar <i id="search-i" class="bi bi-search menui"></i></button>
            <button class="btn btn-outline-success menub" type="button">Login <i id="search-i" class="bi bi-person menui"></i></button>
        </form>
    </div>
</div>
    `;
var nav = document.createElement('nav'); ///     <nav></nav>
nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
nav.innerHTML = menu;

var body = document.getElementsByTagName('body'); // <body></body>
body[0].insertBefore(nav, body[0].children[0]); // body[0].children[0]     <br>