<?php
include_once("includes/dbconnect.php");
include_once("functions.php");
session_start();
if (!isset($_SESSION["data"])) {
    $_SESSION["data"]["content"] = "";
    $_SESSION["data"]["description"] = "";
    $_SESSION["data"]["type"] = "";
    $_SESSION["data"]["chair"] = "";
    $_SESSION["data"]["rgb"] = "";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shair</title>
    <link rel='shortcut icon' href='images/favicon.ico' type='image/x-icon'/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/icons.css">
    <link rel="stylesheet" type="text/css" href="css/content.css">
    <link rel="stylesheet" href="plugins/fontawesome/css/font-awesome.min.css">


</head>
<body>

<div id="content">
    <?php
    if (isSet($_GET["admin"])) {
        $sql = "SELECT * FROM `messages` WHERE `status` = '0' ORDER BY `date` ASC LIMIT 1";
        $rs = mysqli_query($db, $sql);
        $refreshTime = 10;
        if (mysqli_num_rows($rs) > 0) {
            $row = mysqli_fetch_assoc($rs);
            switch ($row["type"]) {
                case MESSAGE_QUOTE: {
                    ?>
                    <h3><?= $row["content"]; ?></h3>
                    <?php
                    break;
                }
            }
            $sql2 = "UPDATE `messages` SET `status` = '2' WHERE `id` = '" . $row["id"] . "'";
            $rs2 = mysqli_query($db, $sql2);
        }
    } else if (isSet($_GET["confirmed"])) {
        $sql2 = "INSERT INTO `messages` (`type`,`content`,`description`) VALUES ('" . $_SESSION["data"]["type"] . "','" . $_SESSION["data"]["content"] . "','" . $_SESSION["data"]["description"] . "')";
        $rs2 = mysqli_query($db, $sql2);
        ?>
        <h1>Bericht toegevoegd!</h1>
        <center>
            <p><?= $_SESSION["data"]["content"]; ?><br>
                <?= $_SESSION["data"]["description"]; ?></p>
        </center>
        <?php
    } else {
        include("home.php");
    }
    ?>
</div>

    <div class="nav">
        <ul>
            <li><a href="#" data-url="camera"><i id="camera" class="fa fa-camera fa-3x"></i></a></li>
            <li><a href="#" data-url="text" ><i id="text" class="fa fa fa-comment fa-3x"></i></a></li>
            <li><a href="#" data-url="quote"><i id="quote" class="fa fa-quote-right fa-3x"></i></a></li>
            <li><a href="#" data-url="music"><i id="music" class="fa fa-music fa-3x"></i></a></li>
        </ul>
    </div>


    <!-- Scripts -->
    <script src="plugins/jquery/jquery-1.12.2.min.js"></script>
    <script src='//cdn.tinymce.com/4/tinymce.min.js'></script>
    <script src="js/load.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/color-changer.js"></script>
    <script src="js/file-upload.js"></script>
    <script src="http://cdn.pubnub.com/pubnub-3.7.15.min.js"></script>
    <script src="js/pubload.js"></script>
   </body>
</html>
