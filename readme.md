## Simple Form

Envio utilizando fetch de formulário de contato.

```js
// 1 - Copie o arquivo simple-slide.js da pasta dist e cole no seu site.

// 2 - Link o arquivo utilizando a tag script /js/plugins é apenas um exemplo, caso você tenha colocado o arquivo dentro da pasta de plugins
<script src="./js/plugins/simple-form.js"></script>

// 3 - Inicie a classe do slide:

new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});
```