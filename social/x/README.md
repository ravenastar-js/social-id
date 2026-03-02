## 🌐 𝕏 (Antigo Twitter)

### 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://x.com/NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

### 💻 Acessar código fonte pelo computador
  1. Pressione `Ctrl + Shift + i` ou `Ctrl + U`
  2. Pressione `Ctrl + F`

### 🔎 Termos para pesquisar
  * `"user_id":"`
  * `"identifier":"`

> [!NOTE]  
> 💡 Se não encontrar informações de IDs no código fonte, use o script do `Console Web (Ctrl+Shift+K)` ou as ferramentas OSINT.

<details>
<summary><strong> Console web (Ctrl+Shift+K)</strong></summary>

https://github.com/user-attachments/assets/29922d01-d0d6-413b-abfe-19957a72ec76

```
(function() {
  try {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      const data = JSON.parse(script.textContent);
      if (data['@type'] === 'ProfilePage' && data.mainEntity?.identifier) {
        const id = data.mainEntity.identifier;
        const username = data.mainEntity.additionalName || '';
        console.log(`%c𝕏 ID: ${id}`, 'font-size: 16px; font-weight: bold; color: #1DA1F2; background: #000; padding: 6px 10px; border-radius: 6px;');
        navigator.clipboard?.writeText(id);
        return id;
      }
    }
    console.log('%c❌ ID não encontrado', 'color: #1DA1F2;');
  } catch(e) {
    console.log('%c❌ Erro', 'color: #1DA1F2;', e.message);
  }
})();
```
</details>



### 🛠️ Ferramentas
  * **Pegar ID:** [Postel.app - Twitter ID Converter](https://www.postel.app/twitter-user-id-converter)
  * **Engenharia Reversa:** `https://x.com/intent/user?user_id=ID_AQUI`
