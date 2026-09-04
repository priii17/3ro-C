<?php 

require_once 'conexion.php';

$cedula = $_POST['cedula'];
$nombre = $_POST['nombre'];
$apellido =$_POST['apellido'];
$nacimiento =$_POST['nacimiento'];


$insertarDatos =$con->prepare("INSERT INTO personas (cedula,nombre,apellido,fecha_nacimiento) VALUES (?,?,?,?)");

$insertarDatos->bind_param('isss', $cedula,$nombre,$apellido,$nacimiento);

if($insertarDatos->execute()){
   echo "Registro exitoso";
}else{
     echo "Error al guardar";
}
$insertarDatos->close();

?>

