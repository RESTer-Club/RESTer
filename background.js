chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('views/main.html', {
        state: 'maximized',
        minWidth: 500,
        minHeight: 600
    });

    chrome.runtime.onInstalled.addListener(function () {
        console.log('installed');
    });

    chrome.runtime.onSuspend.addListener(function () {
        // Do some simple clean-up tasks.
    });
});