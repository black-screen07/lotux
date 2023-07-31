// Créer le composant SwitchButton en étendant la classe HTMLElement
class SwitchButton extends HTMLElement {
  constructor() {
    super();

    // Attacher le shadow DOM pour le style encapsulé
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    `;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

// Enregistrer le composant SwitchButton
customElements.define('ltx-switch-button', SwitchButton)


class Title1 extends HTMLElement {
  constructor() {
    super();

    // Attacher le shadow DOM pour le style encapsulé
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
         h1{
          padding:0;
          margin:0;
         }
      </style>
      <h1 class="pretty">
        <slot></slot>
      </h1>
    `;
    shadow.appendChild(template.content.cloneNode(true));
  }
}

// Enregistrer le composant SwitchButton
customElements.define('ltx-title-1', Title1)


class BoxCenter extends HTMLElement {
  constructor() {
    super();

    // Attacher le shadow DOM pour le style encapsulé
    const shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
         .bg{
          background-color:#000;
         }
         .box-center{
          display:flex;
          justify-content:center;
          align-items: center;
          box-sizing:border-box;
         }
      </style>
      <div class="box-center">
        <slot></slot>
      </div>
    `;
    shadow.appendChild(template.content.cloneNode(true));
  }
  
  static get observedAttributes() {
    return ['width', 'height'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'width' && newValue) {
      this.style.width = newValue;
    } else if (name === 'height' && newValue) {
      this.style.height = newValue;
    }
  }
}
// Enregistrer le composant SwitchButton
customElements.define('ltx-box-center', BoxCenter)