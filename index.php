<?php

include_once($_SERVER["DOCUMENT_ROOT"] . "/includes/dbconnect.php");

$sql = "SELECT * FROM `messages`";
$rs = mysqli_query($db, $sql);
if(mysqli_num_rows($rs) > 0)
{
  while($row = mysqli_fetch_assoc($rs))
  {
      echo $row["content"];
  }
}
