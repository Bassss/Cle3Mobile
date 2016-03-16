
<?php
    $host = "https://sql.hosted.hro.nl/";
    $database = "prj_2015_2016_clemob_mt1bd_e";
    $user = "prj_2015_2016_clemob_mt1bd_e";
    $password = "chaepahj";
    $prefix = "";

    $db = mysqli_connect($host, $user, $password, $database) or die("Error: " . mysqli_connect_error());;
