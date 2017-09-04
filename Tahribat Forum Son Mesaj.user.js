// ==UserScript==
// @name         Tahribat Forum Son Mesaj
// @namespace    http://www.tahribat.com/Murit-pSkpt?ref=39260
// @version      1.0
// @description  Anasayfada bulunan "Aktif Konular" kısmında son sayfaya gitmek için kullanılır.
// @author       pSkpt
// @icon         https://www.tahribat.com/favicon.ico
// @match        *://www.tahribat.com/*
// @grant        none
// ==/UserScript==

var image_url = 'https://raw.githubusercontent.com/sonerb/Tahribat-Forum-Last-Message/master/images/icon_last.png';

if (location.pathname == '/') {

    // Her bir aktif konu linkinin sonuna son konuya gitme linki ekleniyor.
    $("table#activeTopics").find("a[href^='/forum']").each(function(index) {
        $(this).after('&nbsp;&nbsp;<a href="' + $(this).attr("href") + '/0/#son"><img src="'+image_url+'" style="heigh:11px; width:11px" /></a>');
    });

} else if (location.pathname.substr(0, 6) == '/forum') {

    // #son hash'i varsa sayfayı aşağı kaydırıyor.
    if (window.location.hash === '#son') {
        $("html, body").animate({
            scrollTop: $(document).height() - $(window).height()
        });
    }
}