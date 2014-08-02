chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
	'frame':"chrome",
    'bounds': {
		'width': 900,
		'height': 700
    }
  });
});