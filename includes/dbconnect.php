
<?php
    $host = "";
    $database = "";
    $user = "";
    $password = "";
    $prefix = "";

    $db = mysqli_connect($host, $user, $password, $database) or die("Error: " . mysqli_connect_error());;
