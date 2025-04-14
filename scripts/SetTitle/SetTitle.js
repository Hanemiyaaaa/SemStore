(function () {
    const titles = {
        ru: 'SemStore - лучший магазин оригинальной одежды!',
        en: 'SemStore - the best store of original clothes!'
    };

    let lang = navigator.language.slice(0, 2);
    if (!titles[lang]) lang = 'en';

    document.title = titles[lang];
    document.documentElement.lang = lang;
})();