var coll = document.getElementsByClassName("collapsible");



function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    let time = hours + ":" + minutes;
    return time;
}


function firstBotMessage() {
    let firstMessage = "Heyy!"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();


function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getBotResponse(input) {

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Hi";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);


}



function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});