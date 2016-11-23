/**
 * Created by dujiaheng on 2016/11/21.
 */
function clickLogin() {
    var v = document.getElementById("nameInput").value;
    message = '你好：' + v + "\n\n感谢杜老师的精心教学！tks \n\n";
    alert(message);
}

function onfocusNameInput() {
    var v = document.getElementById("nameInput").value;
    if (v == '您的名字')
    {
        document.getElementById("nameInput").value = '';
    }
}

function onfocusPasswordInput() {
    var v = document.getElementById("passwordInput").value;
    if (v == '8888')
    {
        document.getElementById("passwordInput").value = '';
    }
}


