<div id="exp" class="cd-section">
        <div class="page-nav">
            <a href="#" data-url="home"><img class="left" src="images/arrow-left.png"></a>
        </div>

        <br>
        <section>
        <h2 class="margin">Bevestig</h2>
<form method="post">
        <br><div class="chair"><label for="number">Poef nummer</label>
        <select name="number" id="number">
            <option value="" selected>-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <br><br>
        <label for="color">Kies je kleur:</label><br>
            <br>
                <div>
                    <div class="caption red">Rood</div>
                    <label for="red" class="brightness fa">
                        <input id="red" type="range" min="1" max="255" step="1" value="0">
                    </label>
                </div>

                <div>
                    <div class="caption green">Groen</div>
                    <label for="green" class="brightness fa">
                        <input id="green" type="range" min="1" max="255" step="1" value="0">
                    </label>
                </div>

                <div>
                    <div class="caption blue">Blauw</div>
                    <label for="blue" class="brightness fa">
                        <input id="blue" type="range" min="1" max="255" step="1" value="0">
                    </label>
                </div>

            <br>
            <div class="colorPrev">

            </div>
            <br>

        <input type="button" id="pubload" value="Upload!" onclick="pubLoad();">

        </div>
</form>

    </section>

<!--    <script src="js/load.js"></script>-->
<!--    <script src="js/color-changer.js"></script>-->
    <script src="http://cdn.pubnub.com/pubnub-3.7.15.min.js"></script>
    <script src="js/pubload.js"></script>
