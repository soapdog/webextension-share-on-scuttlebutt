/*
On startup, connect to the "sbot_native_app" app.
*/
var port = browser.runtime.connectNative("sbot_native_app");
console.log("port", port);

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  whoami");
  port.postMessage({cmd: "whoami"});
});
