    window.OptanonWrapper = (function () {
      let isOneTrustInitialized = false;
      return () => {
        if (!isOneTrustInitialized) {
          document.dispatchEvent(new Event('OneTrustInitialized'));
          isOneTrustInitialized = true
        }
      }
    })();

    window.oneTrustPromise = new Promise(resolve => {
      document.addEventListener('OneTrustInitialized', () => {
        resolve(true)
      }, { once: true });
    });
