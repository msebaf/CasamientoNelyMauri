<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $cancion = htmlspecialchars($_POST['cancion']);
    $artista = htmlspecialchars($_POST['artista']);
    $enlace = htmlspecialchars($_POST['enlace']);

    // Datos de la conexión a la base de datos
    $servername = "localhost";  // o el nombre del servidor de tu hosting
    $username = "id22303778_root";         // tu usuario de MySQL
    $password = "MSFmsf86.";             // tu contraseña de MySQL
    $dbname = "id22303778_canciones_casamiento"; // reemplázalo con el nombre de tu base de datos

    // Crear la conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Preparar y vincular
    $stmt = $conn->prepare("INSERT INTO Canciones (Invitado, Tema, Autor, Enlace) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nombre, $cancion, $artista, $enlace);

    // Ejecutar la consulta
    if ($stmt->execute()) {
       echo "<script>alert('GRACIAS!!!');</script>";
    } else {
      echo "<script>alert('Hubo un problema, por favor intentalo de nuevo mas tarde');</script>";
    }

   // if ($stmt->execute()) {
   //     echo "Datos guardados correctamente";
   // } else {
    //    echo "Error: " . $stmt->error;
   // }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();
} else {
    echo "Método de solicitud no válido.";
}
?>