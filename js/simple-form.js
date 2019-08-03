export default class SimpleForm {
  constructor(config) {
    this.config = config;
    this.form = document.querySelector(config.form);
    if (this.form && (typeof window.fetch === "function")) {
      this.url = this.form.getAttribute("action");
      this.formButton = this.form.querySelector(config.button);
      this.init();
    }
  }

  displayError() {
    this.form.innerHTML = this.config.erro;
  }

  displaySuccess() {
    this.form.innerHTML = this.config.sucesso;
  }

  getFormValues() {
    const formData = new FormData();
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach(field => {
      const fieldName = field.getAttribute("name");
      const fieldValue = field.value;
      formData.append(fieldName, fieldValue);
    });
    return formData;
  }

  validateForm() {
    const fields = this.form.querySelectorAll("[required]");
    let valido = true;
    fields.forEach(field => {
      if (valido) valido = !!field.value;
    });
    return valido;
  }

  onSendForm(event) {
    event.preventDefault();
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = "Enviando...";
  }

  sendForm(event) {
    if (this.validateForm()) {
      this.onSendForm(event);
      fetch(this.url, {
        method: 'POST',
        body: this.getFormValues(),
      })
        .then(r => {
          if (!r.ok) throw Error(r.statusText);
          return r.text()
        })
        .then(body => this.displaySuccess())
        .catch(erro => {
          this.displayError()
        });
    }
  }

  init() {
    this.sendForm = this.sendForm.bind(this);
    this.formButton.addEventListener("click", this.sendForm);
  }
}