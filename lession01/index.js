/**
 * Created by dujiaheng on 2016/11/21.
 */
function clickMe() {
    alert('i\'m clicked');
}

function onfocusInput() {
    var v = document.getElementById("myinput").value;
    if (v == '请输入内容')
    {
        document.getElementById("myinput").value = '';
        onclickInput();
    }
}

function onfocusoutInput(){
    var v = document.getElementById("myinput").value;
    if(v == '')
    {
	document.getElementById("myinput").value = '请输入内容';
    }
}


function onclickInput() {
    alert('i\'m clicked \n 老师的作业有个坑，在onfocus事件里的alert，会关不掉！');
}
