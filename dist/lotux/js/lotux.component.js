class LoaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.size = this.getAttribute('size') || '40px';
      this.color = this.getAttribute('color') || '#3498db';
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin: 0;
            text-align: center;
          }
  
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
          }
  
          .circle {
            width: ${this.size};
            height: ${this.size};
            margin: 0 5px;
            background-color: ${this.color};
            border-radius: 50%;
            opacity: 0.7;
            animation: bounce 1s infinite;
          }
  
          .circle:nth-child(2) {
            animation-delay: 0.2s;
          }
  
          .circle:nth-child(3) {
            animation-delay: 0.4s;
          }
  
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        </style>
        <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      `;
    }
  }
  
  customElements.define('ltxLoader', LoaderComponent);


  class RotatingLoaderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.size = this.getAttribute('size') || '40px';
      this.color = this.getAttribute('color') || '#3498db';
      this.logoSrc = this.getAttribute('logo-src') || '';
      this.logoSize = this.getAttribute('logo-size') || '80%';
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin: 0;
            text-align: center;
          }
  
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            position: relative;
          }
  
          .spinner {
            width: ${this.size};
            height: ${this.size};
            border: 3px solid transparent;
            border-top-color: ${this.color};
            border-radius: 50%;
            animation: spin 1s linear infinite;
            position: relative;
          }
  
          .logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: ${this.logoSize};
            max-height: ${this.logoSize};
          }
  
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        </style>
        <div class="loader">
          <div class="spinner"></div>
          ${this.logoSrc ? `<img class="logo" src="${this.logoSrc}" alt="Logo">` : ''}
        </div>
      `;
    }
  }
  
  customElements.define('ltxRotatingLoader', RotatingLoaderComponent);


  class AttractivePopupComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
  
          .popup {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: #fff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            text-align: center;
          }
  
          .popup-title {
            font-size: 24px;
            margin-bottom: 10px;
          }
  
          .popup-content {
            font-size: 16px;
            margin-bottom: 20px;
          }
  
          .close-button {
            cursor: pointer;
            color: #3498db;
            font-weight: bold;
          }
        </style>
        <div class="popup">
          <div class="popup-title"><slot name="title">Popup Title</slot></div>
          <div class="popup-content"><slot name="content">Popup Content</slot></div>
          <div class="close-button" id="closeButton">Close</div>
        </div>
      `;
       this.popup = this.shadowRoot.querySelector('.popup'); // Élément du popup

    this.shadowRoot.querySelector('#closeButton').addEventListener('click', () => {
      this.closePopup();
    });

    this.button = this.shadowRoot.querySelector('#showButton');
    this.button.addEventListener('click', () => {
      this.openPopup();
    });
  }

  openPopup() {
    this.style.opacity = '1';
    this.style.pointerEvents = 'auto';
  }

  closePopup() {
    this.style.opacity = '0';
    this.style.pointerEvents = 'none';
  }
}

customElements.define('ltxPopup', AttractivePopupComponent);
  
  
  
  

  