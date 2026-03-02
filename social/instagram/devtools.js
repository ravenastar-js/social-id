(function () {
    try {
        const scripts = document.querySelectorAll('script');
        let instagramId = null;
        let facebookId = null;

        for (let script of scripts) {
            if (script.textContent) {
                // Procura pelo ID do Instagram
                const idMatch = script.textContent.match(/"id":"(\d+)"/);
                if (idMatch && idMatch[1] && !instagramId) {
                    instagramId = idMatch[1];
                }

                // Procura pelo fbid (Facebook ID)
                const fbidMatch = script.textContent.match(/"fbid":"(\d+)"/);
                if (fbidMatch && fbidMatch[1] && !facebookId) {
                    facebookId = fbidMatch[1];
                }

                // Se já encontrou ambos, pode parar
                if (instagramId && facebookId) break;
            }
        }

        if (instagramId) {
            console.log(`%cInstagram ID: ${instagramId}`, 'font-size: 16px; font-weight: bold; color: #E1306C; background: #000; padding: 6px 10px; border-radius: 6px;');

            // Mostra o fbid também (opcional)
            if (facebookId) {
                console.log(`%cFB ID: ${facebookId}`, 'font-size: 16px; font-weight: bold; color: #1877F2; background: #000; padding: 6px 10px; border-radius: 6px;');
            }

            // Copia apenas o Instagram ID
            navigator.clipboard?.writeText(instagramId);
            return instagramId;
        }

        console.log('%c❌ ID não encontrado', 'color: #E1306C;');
    } catch (e) {
        console.log('%c❌ Erro', 'color: #E1306C;', e.message);
    }
})();