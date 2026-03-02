(function () {
    try {
        const script = document.querySelector('script[type="application/ld+json"]');
        if (script) {
            const data = JSON.parse(script.textContent);
            if (data['@type'] === 'ProfilePage' && data.mainEntity?.identifier) {
                const id = data.mainEntity.identifier;
                console.log(`%c𝕏 ID: ${id}`, 'font-size: 16px; font-weight: bold; color: #1DA1F2; background: #000; padding: 6px 10px; border-radius: 6px;');
                navigator.clipboard?.writeText(id);
                return id;
            }
        }
        console.log('%c❌ ID não encontrado', 'color: #1DA1F2;');
    } catch (e) {
        console.log('%c❌ Erro', 'color: #1DA1F2;', e.message);
    }
})();