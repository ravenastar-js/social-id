(function () {
    try {
        const scripts = document.querySelectorAll('script');
        let threadsId = null;

        for (let script of scripts) {
            if (script.textContent) {
                // Procura pelo pk (ID principal do Threads)
                const pkMatch = script.textContent.match(/"pk":"(\d+)"/);
                if (pkMatch && pkMatch[1] && !threadsId) {
                    threadsId = pkMatch[1];
                }
                
                // Procura pelo userID como fallback
                const userIdMatch = script.textContent.match(/"userID":"(\d+)"/);
                if (userIdMatch && userIdMatch[1] && !threadsId) {
                    threadsId = userIdMatch[1];
                }

                if (threadsId) break;
            }
        }

        if (threadsId) {
            console.log(`%cThreads ID: ${threadsId}`, 'font-size: 16px; font-weight: bold; color: #000000; background: #fff; padding: 6px 10px; border-radius: 6px; border: 2px solid #000;');
            navigator.clipboard?.writeText(threadsId);
            return threadsId;
        }

        console.log('%c❌ ID não encontrado', 'color: #000000;');
    } catch (e) {
        console.log('%c❌ Erro', 'color: #000000;', e.message);
    }
})();