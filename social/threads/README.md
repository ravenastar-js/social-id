# 🌐 THREADS

## 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://www.threads.com/@NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

## 💻 Acessar código fonte pelo computador
  1. Pressione `Ctrl + Shift + i` ou `Ctrl + U`
  2. Pressione `Ctrl + F`

## 🔎 Termos para pesquisar
  * `"pk":"`
  * `"userID":"`

>  `"pk"` significa "Primary Key" (Chave Primária) - é o nome que o Threads usa internamente para o ID.

> [!NOTE]  
> 💡 Se não encontrar informações de IDs no código fonte, use o script do `Console Web (Ctrl+Shift+K)`.

<details>
<summary><strong> Console web (Ctrl+Shift+K)</strong></summary>

https://github.com/user-attachments/assets/6907b6a7-ff63-457b-b90c-0339187d4326

```
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
```
</details>
