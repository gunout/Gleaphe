$(document).ready(function () {
  // Construction de l'URL du flux
  var streamURL = "http://" + g + ":" + h + i + z;

  // Définition de l'objet stream
  var stream = { mp3: streamURL };

  // Initialisation de jPlayer
  $("#jquery_jplayer_1").jPlayer({
    ready: function (event) {
      // Définir le média et jouer lorsque prêt
      $(this).jPlayer("setMedia", stream).jPlayer("play");
    },
    pause: function () {
      // Effacer le média en pause
      $(this).jPlayer("clearMedia");
    },
    error: function (event) {
      // Gérer les erreurs (par exemple, réessayer si l'URL n'est pas définie)
      if (event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
        $(this).jPlayer("setMedia", stream).jPlayer("play");
      }
    },
    stop: function (event) {
      // Journaliser l'événement d'arrêt et redémarrer la lecture
      console.log("stop");
      $(this).jPlayer("setMedia", stream).jPlayer("play");
    },
    swfPath: "js", // Chemin vers le fallback Flash (si nécessaire)
    supplied: "mp3", // Spécifier le format média
    preload: "none", // Ne pas précharger le média
    volume: 0.5, // Définir le volume initial
    autoPlay: true, // Lire automatiquement le flux
    wmode: "window", // Définir le mode fenêtre pour Flash
    keyEnabled: true, // Activer les contrôles clavier
  });
});
