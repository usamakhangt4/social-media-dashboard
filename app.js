$mode = document.getElementById("mode");
$body = document.getElementById("chMode");

function changeMode() {
    if ($mode.checked) {
        $body.classList.remove("lightMode")
        $body.classList.add("darkMode")
    } else {
        $body.classList.remove("darkMode")
        $body.classList.add("lightMode")
    }

}