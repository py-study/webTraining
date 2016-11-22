/**
 * Created by dujiaheng on 2016/11/21.
 */
function clickLogin() {
    alert('i\'m clicked \n 老师的作业有个坑，在onfocus事件里的alert，会关不掉！');
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


