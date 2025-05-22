pc.script.createLoadingScreen(function (app) {
    // Добавляем стиль с фоном на весь экран
    var css = [
        'body, html {',
        '    margin: 0;',
        '    padding: 0;',
        '    height: 100%;',
        '    width: 100%;',
        '    background-color: #0D0D0D;',
        '}',
    ].join('\n');

    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);

    // Не показываем ничего — сразу скрываем заставку, если она появится
    app.on('start', function() {
        var splash = document.getElementById('application-splash-wrapper');
        if (splash && splash.parentElement) {
            splash.parentElement.removeChild(splash);
        }
    });
});
