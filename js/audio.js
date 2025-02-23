   // Construct the streaming URL
  var streamURL = "https://" + g + ":" + h + i + z;

  // Define the stream object
  var stream = { mp3: streamURL };

  // jPlayer initialization
  $("#jquery_jplayer_1").jPlayer({
    ready: function (event) {
      // Set the media and play when ready
      $(this).jPlayer("setMedia", stream).jPlayer("play");
    },
    pause: function () {
      // Clear media on pause
      $(this).jPlayer("clearMedia");
    },
    error: function (event) {
      // Handle errors (e.g., retry if URL is not set)
      if (event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
        $(this).jPlayer("setMedia", stream).jPlayer("play");
      }
    },
    stop: function (event) {
      // Log stop event and restart playback
      console.log("stop");
      $(this).jPlayer("setMedia", stream).jPlayer("play");
    },
    swfPath: "js", // Path to the Flash fallback (if needed)
    supplied: "mp3", // Specify the media format
    preload: "none", // Do not preload media
    volume: 0.5, // Set initial volume
    autoPlay: true, // Auto-play the stream
    wmode: "window", // Set Flash window mode
    keyEnabled: true, // Enable keyboard controls
  });
});
