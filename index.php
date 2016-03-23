<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lama</title>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/icons.css">
    <link rel="stylesheet" href="plugins/fontawesome/css/font-awesome.min.css">
    <script src="plugins/js/modernizr.js"></script>
    <script type="text/javascript" src='//cdn.tinymce.com/4/tinymce.min.js'></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src='//cdn.tinymce.com/4/tinymce.min.js'></script>
    <script type="text/javascript">
        tinymce.init({
            selector: '#myTextarea',
            theme: 'modern',
            width: 100,
            height: 400,
            plugins: [
                'advlist autolink link lists charmap hr spellchecker',
                'wordcount fullscreen insertdatetime',
                'directionality emoticons paste textcolor'
            ],
            content_css: 'css/content.css',
            menubar: false,
            toolbar: 'undo redo | bold italic | bullist numlist | forecolor backcolor emoticons'
        });
    </script>
</head>
<body data-hijacking="on" data-animation="rotate">

<div id="content">
<?php include("home.html"); ?>
</div>

<div class="nav">
    <ul>
        <li><a href="camera"><i id="camera" class="fa fa-camera fa-3x"></i></a></li>
        <li><a href="text"><i id="text" class="fa fa-file-text fa-3x"></i></a></li>
        <li><a href="quote"><i id="quote" class="fa fa-comment fa-3x"></i></a></li>
        <li><a href="music"><i id="music" class="fa fa-music fa-3x"></i></a></li>
    </ul>
</div>


    <!-- Scripts -->
    <script src="plugins/js/jquery-2.1.4.js"></script>
    <script src="js/load.js"></script>
    <script src="plugins/js/velocity.min.js"></script>
    <script src="plugins/js/velocity.ui.min.js"></script>
    <script src="plugins/js/main.js"></script>
    <script src="js/scroll.js"></script>
</body>
</html>