# 🔍 Social Media ID Cheatsheet
Guia prático para extração e engenharia reversa de IDs únicos em redes sociais.

---

## 🌐 INSTAGRAM
<details>
  <summary>Clique para expandir os métodos do Instagram</summary>
  <br>

  ### 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://www.instagram.com/NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

  ### 💻 Acessar código fonte pelo computador
  * Pressione `Ctrl + U` (Windows/Linux) ou `Cmd + Option + U` (Mac).

  ### 🔎 Termos para pesquisar
  * `profilepage_`
  * `profile_id`
  * `user_id`
  * `"id":`

  ### 🛠️ Ferramentas
  * **Pegar ID:** [CommentPicker - Instagram ID](https://commentpicker.com/instagram-user-id.php)
  * **Engenharia Reversa:** [CommentPicker - Find Username](https://commentpicker.com/instagram-username.php)

</details>

---

## 🌐 TIKTOK
<details>
  <summary>Clique para expandir os métodos do TikTok</summary>
  <br>

  ### 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://www.tiktok.com/@NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

  ### 💻 Acessar código fonte pelo computador
  * Pressione `Ctrl + U`.

  ### 🔎 Termos para pesquisar
  * `webapp..user-detail`
  * `userInfo`
  * `"user":{"id"`

  ### 🛠️ Ferramentas
  * **Pegar ID:** [CommentPicker - TikTok ID](https://commentpicker.com/tiktok-id.php)
  * **Engenharia Reversa:** `https://www.tiktok.com/@ID_AQUI`

</details>

---

## 🌐 𝕏 (Antigo Twitter)
<details>
  <summary>Clique para expandir os métodos do 𝕏</summary>
  <br>

  ### 📱 Acessar código fonte pelo celular
  1. Digite na barra de endereço: `view-source:https://x.com/NOME_DO_USUARIO`
  2. **Para pesquisar:** Toque nos **três pontinhos** (canto superior direito) e selecione **"Encontrar na página"**.

  ### 💻 Acessar código fonte pelo computador
  * Pressione `Ctrl + U`.

  ### 🔎 Termos para pesquisar
  * `"identifier":"`

  ### 🛠️ Ferramentas
  * **Pegar ID:** [Postel.app - Twitter ID Converter](https://www.postel.app/twitter-user-id-converter)
  * **Engenharia Reversa:** `https://x.com/intent/user?user_id=ID_AQUI`

</details>

---

## 🪪 Importância dos IDs de Usuário 

O ID de usuário é um identificador numérico único atribuído a cada conta no momento de sua criação. Diferentemente do nome de usuário (handle), que pode ser alterado a qualquer momento, o **ID permanece constante para sempre**.

### Por que o ID é importante❓
* **Rastreabilidade:** Permite monitorar contas mesmo que o usuário mude o @handle ou o nome de exibição.
* **Integrações:** É o dado essencial para APIs, bots e ferramentas de análise de dados.
* **Investigação Digital (OSINT):** Fundamental para identificação forense e preservação de provas em investigações.
* **Persistência:** Garante o acesso ao perfil histórico, independente de mudanças estéticas na conta.

Além disso, lembre-se de salvar evidências de forma gratuita em serviços de arquivamento, como:
- https://urldna.io/
- https://urlscan.io/
- https://archive.ph/
- https://web.archive.org/save
- Entre outras...

---

## 🌟 Star History

<a href="https://www.star-history.com/#ravenastar-js/social-id-cheatsheet&Date">
 <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=ravenastar-js/social-id-cheatsheet&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=ravenastar-js/social-id-cheatsheet&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=ravenastar-js/social-id-cheatsheet&type=Date&teme=dark" />
 </picture>
</a>
