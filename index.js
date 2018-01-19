/**
 * Created by Administrator on 2017/11/26.
 */
window.onload = function () {
    var steps = document.getElementsByClassName("steps");

    for(var i=0;i<steps.length-1;i++){
        var btn = steps[i].getElementsByTagName("button")[0];

        btn.onclick = function () {
            var n = parseInt(this.parentNode.id.substring(5,7));
            steps[n-1].style.display = "none";
            steps[n].style.display = "block";
        }
    }};