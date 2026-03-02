## 🌐 𝕏 (Antigo Twitter)

### 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://x.com/NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

### 💻 Acessar código fonte pelo computador
  1. Pressione `Ctrl + U` 
  2. Pressione `Ctrl + F`

### 🔎 Termos para pesquisar
  * `"user_id":"`
  * `"identifier":"`

<details>
<summary><strong> Console web (Ctrl+Shift+K)</strong></summary>

https://github.com/user-attachments/assets/a411d488-abde-4562-b8ed-bd2c3fd7baf0

```
(function() {
  try {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      const data = JSON.parse(script.textContent);
      if (data['@type'] === 'ProfilePage' && data.mainEntity?.identifier) {
        const id = data.mainEntity.identifier;
        console.log('✅ ID do perfil:', id);
        navigator.clipboard?.writeText(id);
        return id;
      }
    }
    console.log('❌ ID não encontrado');
  } catch(e) {
    console.error('Erro:', e);
  }
})();
```
</details>



### 🛠️ Ferramentas
  * **Pegar ID:** [Postel.app - Twitter ID Converter](https://www.postel.app/twitter-user-id-converter)
  * **Engenharia Reversa:** `https://x.com/intent/user?user_id=ID_AQUI`
