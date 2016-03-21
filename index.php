<?php
include_once("includes/dbconnect.php");
include_once("includes/functions.php");

if (isset($_POST["submit"])) {
    $content = mysqli_real_escape_string($db, $_POST["content"]);
    $type = mysqli_real_escape_string($db, $_POST["type"]);
    $desc = mysqli_real_escape_string($db, $_POST["description"]);
    $content = str_replace("watch?v=", "embed/", $content);
    $curdate = time();
    $sql = "INSERT INTO `messages` (`type`, `content`, `description`, `date`) VALUES ('$type','$content','$desc', '$curdate')";
    $rs = mysqli_query($db, $sql);
}
?>
<h2>Let's <s>ch</s>shair!</h2>
<table style="border: 1px solid black;" cellpadding="5">
    <thead>
    <tr>
        <th>Type</th>
        <th>Content</th>
        <th>Description</th>
        <th>Color</th>
        <th>Date</th>
        <th>Status</th>
    </tr>
    </thead>
    <?php

    $sql = "SELECT * FROM `messages` ORDER BY `date` DESC";
    $rs = mysqli_query($db, $sql);
    if (mysqli_num_rows($rs) > 0) {
        while ($row = mysqli_fetch_assoc($rs)) {
            ?>
            <tr>
                <td><?= getMessageType($row["type"]); ?></td>
                <td>
                    <?php
                    if (getMessageType($row["type"]) == "Youtube") {
                        ?>
                        <iframe width="250" height="150" src="<?= $row["content"]; ?>" frameborder="0" allowfullscreen></iframe>
                        <?php
                    } else if (getMessageType($row["type"]) == "Image") {
                        ?>
                        <img height="100px" src="<?= $row["content"]; ?>">
                        <?php
                    } else if (getMessageType($row["type"]) == "Spotify") {
                        ?>
                        <iframe src="https://embed.spotify.com/?uri=<?= $row["content"]; ?>" frameborder="0" allowtransparency="true"></iframe>
                        <?php

                    } else {
                        ?>
                        <?= $row["content"]; ?>
                        <?php
                    }
                    ?>
                </td>
                <td><?= $row["description"]; ?></td>
                <td><?= getMessageColor($row["color"]); ?></td>
                <td><?= date("d-M-Y H:i", $row["date"]); ?></td>
                <td><?= getMessageStatus($row["status"]); ?></td>
            </tr>
            <?php
        }
    }
    ?>
</table>
<hr>
<form action="index.php" method="POST" name="addMessage">
    <input type="text" name="content" placeholder="Content"><br>
    <input type="radio" name="type" value="0">Quote<br>
    <input type="radio" name="type" value="1">Spotify<br>
    <input type="radio" name="type" value="2">Image<br>
    <input type="radio" name="type" value="3">Youtube video<br>
    <textarea name="description" placeholder="Description"></textarea>
    <input type="submit" name="submit" value="Add my message">
</form>
