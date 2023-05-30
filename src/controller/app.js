class AppController {
  constructor() {}

  checkUserAgent() {
    let device =
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i) ||
      null;

    return device;
  }

  setFullScreen() {
    const root = document.getElementById("root");
    if (root.requestFullscreen) {
      root.requestFullscreen();
    } else if (root.msRequestFullscreen) {
      root.msRequestFullscreen();
    } else if (root.mozRequestFullscreen) {
      root.mozRequestFullscreen();
    }
    if (checkUserAgent) {
      this.lockOrientation();
    }
  }

  exitFullScreen() {
    const root = document.getElementById("root");
    if (root.exitFullscreen) {
      root.exitFullscreen();
    } else if (root.msexitFullscreen) {
      root.msexitFullscreen();
    } else if (root.mozexitFullscreen) {
      root.mozexitFullscreen();
    }
    if (this.checkUserAgent) {
      this.unlockOrientation();
    }
  }

  lockOrientation() {
    let screenOrientation = window.screen.orientation;
    screenOrientation.lock("landscape");
  }

  unlockOrientation() {
    let screenOrientation = window.screen.orientation;
    screenOrientation.unlock();
  }
}

const controller = new AppController();

export { controller };
