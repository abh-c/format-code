function convert() {
    let txt = document.getElementById("text").value.split("\n");
    let str = "";
    
    str += '<p style="padding: 0px; margin: 0px;">&lt;section class="section-1"&gt;</p>'
    str += '<p style="padding: 0px; margin: 0px;">&lt;pre&gt;</p>'

    for (let i = 0; i < txt.length; i++) {
        str += "<p style='padding: 0px; margin: 0px;'>&lt;code&gt;" + txt[i] + "&lt;/code&gt;</p>";
    }

    str += '<p style="padding: 0px; margin: 0px;">&lt;/pre&gt;</p>'
    str += '<p style="padding: 0px; margin: 0px;">&lt;/section&gt;</p>'

    document.getElementById("output").innerHTML = str;
}