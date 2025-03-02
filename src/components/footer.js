class FooterComponent extends HTMLElement {
    // run some code to set HTML when the component is ready
    connectedCallback() {
      this.innerHTML = this.getTemplate();
    }
  
    // create templates that interpolate variables and HTML!
    getTemplate() {
      const year = new Date().getFullYear();
  
      return `
  
        <footer>
          <h4>Cloud RI &copy;${year} | 
          Powered by <a href="https://www.greenwoodjs.io"><img class="h-5 inline" src="/assets/greenwood-logo-og.png" /> greenwoodjs</a></h4>
        </footer>
      `;
    }
  }
  
  customElements.define('app-footer', FooterComponent);