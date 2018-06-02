/**
 * Created by luke1998 on 2018/6/2.
 */
function autoResizeBox()
{
    var content=document.getElementById('bbcontent');
    var box=document.getElementById('chatbox1');
    var h=content.scrollHeight;
    var w=content.scrollWidth;
    box.style.width=w+27+"px";
    box.style.height=h+18+"px";

}
autoResizeBox();
function saysomething(){
    var content=document.getElementById('bbcontent');
    var chat=document.getElementById('chatcontent');
    content.innerHTML=chat.value;
    autoResizeBox();
}