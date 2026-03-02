## 🌐 TIKTOK

### 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://www.tiktok.com/@NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

### 💻 Acessar código fonte pelo computador
  1. Pressione `Ctrl + Shift + i` ou `Ctrl + U`
  2. Pressione `Ctrl + F`

### 🔎 Termos para pesquisar
  * `webapp.user-detail`
  * `userInfo`
  * `"user":{"id"`

> [!NOTE]  
> 💡 Se não encontrar informações de IDs no código fonte, use o script do `Console Web (Ctrl+Shift+K)` ou as ferramentas OSINT.

<details>
<summary><strong> Console web (Ctrl+Shift+K)</strong></summary>

https://github.com/user-attachments/assets/a9caca56-31a6-40a8-9c5e-87b4c4307460

```
(function() {
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
  } catch(e) {
    console.log('%c❌ Erro', 'color: #fe2c55;', e.message);
  }
})();
```
</details>

### 🛠️ Ferramentas
  * **Pegar ID:** [CommentPicker - TikTok ID](https://commentpicker.com/tiktok-id.php)
  * **Pegar ID:** [SECGUIDE - TikTok ID Extractor](https://secguide.pages.dev/tools/tiktok-id)
  * **Engenharia Reversa:** `https://www.tiktok.com/@ID_AQUI`
