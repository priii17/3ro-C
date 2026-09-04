<?php 

$nombre = $_POST['nombre'];
$archivo = $_FILES['archivo'];

if($archivo['error']===0){
    move_uploaded_file($archivo['tmp_name'], "../documentos/" . $archivo['name']);
    echo "OK";

}else{
    echo "ERROR";
}

?>
