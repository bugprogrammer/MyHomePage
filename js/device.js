function isHide() {
    var os = function () {
        var ua = navigator.userAgent,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPC = !isPhone && !isAndroid
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPC: isPC
        };
    }();

    if (os.isAndroid || os.isPhone) {
        document.getElementById("git").style.visibility = "hidden";
    } else {
        document.getElementById("git").style.visibility = "visible";
    } 
}