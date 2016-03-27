<script type="text/javascript" src='//cdn.tinymce.com/4/tinymce.min.js'></script>
<script type="text/javascript">

    $(document).ready(function() {
        tinymce.init({
            selector: '.myTextarea',
            theme: 'modern',
            width: '100%',
            height: 245,
            plugins: [
                'advlist autolink link lists charmap hr spellchecker',
                'wordcount fullscreen insertdatetime',
                'directionality emoticons paste textcolor'
            ],
            menubar: false,
            toolbar: 'undo redo | bold italic | bullist numlist | forecolor backcolor emoticons'
        });
    });
</script>


<section>
    <div id="exp" class="cd-section">
        <div class="page-nav">
            <a href="home"><img class="left" src="images/arrow-left.png"></a>
            <a href="confirm"><img class="right" src="images/arrow-right.png"></a>
        </div>

        <h2 class="margin">Text</h2>

        <textarea  class="myTextarea"></textarea>

    </div>
</section>
<script src="js/load.js"></script>