<?php

include_once($_SERVER["DOCUMENT_ROOT"] . "/includes/dbconnect.php");

$sql = "SELECT * FROM messages";
$rs = mysqli_query($link, $sql);
