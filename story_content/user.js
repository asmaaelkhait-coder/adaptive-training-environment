window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var url = "https://script.google.com/macros/s/AKfycbw2_8mIY-97hR4YfSgiVXicrewrCCm7wkwyZLyJt0341mPkDGBDAPZhgzR8i6wjvb8/exec";

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        test: "hello"
    })
})
.then(function(response){
    return response.text();
})
.then(function(result){
    alert("Server Response:\n\n" + result);
})
.catch(function(error){
    alert("ERROR:\n\n" + error);
});
}

};
