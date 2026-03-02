(function () {
    try {
        const scripts = document.querySelectorAll('script');
        for (let script of scripts) {
            if (script.textContent?.includes('webapp.user-detail')) {
                const match = script.textContent.match(/"id":"(\d+)"/);
                if (match) {
                    const id = match[1];
                    console.log(`%cTikTok ID: ${id}`, 'font-size: 16px; font-weight: bold; color: #fe2c55; background: #000; padding: 6px 10px; border-radius: 6px;');
                    navigator.clipboard?.writeText(id);
                    return id;
                }
            }
        }
        console.log('%c❌ ID não encontrado', 'color: #fe2c55;');
    } catch (e) {
        console.log('%c❌ Erro', 'color: #fe2c55;', e.message);
    }
})();