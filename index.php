<?php

include_once("includes/dbconnect.php");

$sql = "SELECT * FROM `messages`";
$rs = mysqli_query($db, $sql);
if(mysqli_num_rows($rs) > 0)
{
  while($row = mysqli_fetch_assoc($rs))
  {
      echo $row["content"];
  }
}
