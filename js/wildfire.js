    if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'http://85.17.164.138/~linkway/uxtest/mautic/media/js/mautic-form.js';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'http://85.17.164.138';
        var MauticLang   = {
            'submittingMessage': "Un segundo..."
        }
    }