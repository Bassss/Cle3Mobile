<section>
    <div id="exp" class="cd-section">
        <div class="page-nav">
            <a href="#" data-url="home"><img class="left" src="images/arrow-left.png"></a>
            <a href="#" class="next" data-url="confirm"><img class="right" src="images/arrow-right.png"></a>
        </div>

        <br>
        <h2 class="margin">Quote</h2><br>

        <label for="quoteInput"></label>
        <textarea id="quoteInput" placeholder="Quote"></textarea>
        <label for="source"></label>
        <input type="text" id="source" name="source" placeholder="Source">
        <input type="submit" class="nextStep" value="Next ->">
    </div>
</section>

<script>
    $(".nextStep").on("click", function (e) {
        e.preventDefault();
        var content = $("#quoteInput").val();
        var description = $("#source").val();
        $("#content").load("confirm.php?type=1&content=" + content + "&description=" + description);
    });
</script>
