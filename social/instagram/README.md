# 🌐 INSTAGRAM

## 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://www.instagram.com/NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

## 💻 Acessar código fonte pelo computador
  1. Pressione `Ctrl + Shift + i` ou `Ctrl + U`
  2. Pressione `Ctrl + F`

## 🔎 Termos para pesquisar
  * `profilepage_`
  * `profile_id`
  * `user_id`
  * `"id":`

> [!NOTE]  
> 💡 Se não encontrar informações de IDs no código fonte, use o script do `Console Web (Ctrl+Shift+K)` ou as ferramentas OSINT.

<details>
<summary><strong> Console web (Ctrl+Shift+K)</strong></summary>

https://github.com/user-attachments/assets/58d9a1a2-7be7-46d8-8aea-bfc4106bf6da

```
(function() {
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
  } catch(e) {
    console.log('%c❌ Erro', 'color: #E1306C;', e.message);
  }
})();
```
</details>

## 🛠️ Ferramentas
  * **Pegar ID:** [CommentPicker - Instagram ID](https://commentpicker.com/instagram-user-id.php)
  * **Engenharia Reversa:** [CommentPicker - Find Username](https://commentpicker.com/instagram-username.php)

---

## 💡 Identificação no ecossistema da META

Muitas vezes, no ecossistema da META, principalmente no código‑fonte da página, é possível encontrar informações de identificação, como o `fbid` e identificadores específicos de cada rede. 

A Meta adota uma arquitetura de escopo de identificadores (scoping), ou seja, cada usuário possui um identificador distinto para cada perfil. 

O `fbid` é o "Global Identity" ou "App‑Scoped ID" que vincula as contas do Centro de Contas da Meta. 
