function convert() {
    let txt = document.getElementById("text").value.split("\n");
    let str = "";
    
    for (let i = 0; i < txt.length; i++) {
        str += "<p style='padding: 0px; margin: 0px;'>&lt;code&gt;" + txt[i] + "&lt;/code&gt;</p>";
    }

    document.getElementById("output").innerHTML = str;
}