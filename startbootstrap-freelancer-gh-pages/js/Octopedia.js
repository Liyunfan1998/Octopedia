/**
 * Created by luke1998 on 2018/6/2.
 */
function chatbot() {
    var userStr = document.getElementById("userInput").value;
    var jsonData = {
        "inputString": userStr,
    };
    $.ajax({
        type: 'post',
        url: 'http://aliyun.charlesxu.cn:8080/helpkids/chatbot/response',
        contentType: 'application/json;charset=utf-8',//指定为json类型
        data: JSON.stringify(jsonData),
        success: function (data) {//返回json结果
            console.log(data);
            createUserChatBox(userStr);
            createServerChatBox(data);
            // console.log(data.response.output['text']);
        }
    });
}

function createServerChatBox(data){
    var createDiv = document.createElement("div");
    createDiv.setAttribute("class", "speech-bubble-server");
    createDiv.innerHTML = data.response.output['text'];
    document.getElementById("chatBox").appendChild(createDiv);
    var createBr = document.createElement("br");
    document.getElementById("chatBox").appendChild(createBr);
}


function createUserChatBox(str){
    var createDiv = document.createElement("div");
    createDiv.setAttribute("class", "speech-bubble-user");
    createDiv.innerHTML = str;
    document.getElementById("chatBox").appendChild(createDiv);
    var createBr = document.createElement("br");
    document.getElementById("chatBox").appendChild(createBr);
}
