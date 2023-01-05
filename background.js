chrome.app.runtime.onLaunched.addListener(function() {chrome.app.window.create('index.html', {

    bounds: { 
        width: 1920, 
        height: 1080 
    },
    state: "fullscreen",

    alwaysOnTop: true,
    });
    
});
