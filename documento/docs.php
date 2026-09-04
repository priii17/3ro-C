<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Documentos</title>
    <link rel="stylesheet" href="../css/documento.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
  </head>

  <body>
    <div class="contenedor1">
      <header>
        <nav>
          <div class="barra-izquierda">
            <a href="#Inicio" class="tooltip">
              <span id="inicio"> <i class="fa-solid fa-house"> </i> </span> <span class="tooltiptext"> Inicio </span>
            </a>

            <a href="#Documentos" class="tooltip"> <span id="carpeta"> Documentos </span> </a>
            <a href="#Traslados" class="tooltip"> <span id="traslados"> Traslados </span></a>

            <a href="#Encuestas" class="tooltip"> <span id="encuestas"> Encuestas</span> </a>

            <a href="#Crear" class="tooltip"> <span id="crear"> Crear </span> </a>

            <a href="#Ayuda" class="tooltip"> <span id="ayuda"> Ayuda</span> </a>
          </div>

          <div class="barra-derecha">
            <a href="#Perfil" class="tooltip">
              <span id="perfil"> <i class="fa-solid fa-circle-user"></i></span> <span class="tooltiptext"> Perfil </span></a
            >
            <a href="#logo"></a>
          </div>
        </nav>
      </header>
      <main>
        <div id="icono-doc">
          <i class="fa-regular fa-folder-closed"></i>
        </div>

        <div class="busqueda">
          <input type="text" placeholder="Buscar documentos..." />
          <button id="eliminar"><i class="fa-solid fa-xmark"></i></button>
          <button id="lupa"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <ul>
          <?php include '../php/mostrardoc.php'; echo $lista; ?>
        </ul>
        
        <div class="botones">
          <a href="regenerarqr.html">
            <button><i class="fa-solid fa-exclamation"></i></button>
            <span class="text">Regenerar codigo QR</span>
          </a>

          <a href="subirdoc.html">
            <button><i class="fa-solid fa-xmark"></i></button>
            <span class="text2">Subir documento</span>
          </a>
        </div>
      </main>

      <footer>
        Tel: 2487 1515 Dirección: Av. Italia s/n - Montevideo Código, 11600
        <br />
        <p id="derechos">&copy; 2026 Bytech - Todos los derechos reservados</p>
      </footer>
    </div>
  </body>
</html>
