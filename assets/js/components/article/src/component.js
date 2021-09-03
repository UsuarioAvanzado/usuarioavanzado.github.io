import { WrapperComponent } from "../../wrapper-component";
import { html } from 'lit';
import { style as globalStyle } from "../../style";
import { style as localStyle } from "./style";
export class Component extends WrapperComponent {
    constructor() {
        super();
    }
    render() {
        return html `
      <section class="${this.colorSystem} ${this.fontSystem}">
        <h1 class="color-header font-header">Titulo de articulo</h1>
        <p class="color-content font-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Soluta, culpa quisquam molestias repellendus incidunt 
          eum omnis nostrum veniam ut rem aperiam vitae officiis. 
          Enim asperiores nobis libero ipsa quidem voluptas?
        </p>
      </section>
    `;
    }
}
Component.styles = [globalStyle, localStyle];
//# sourceMappingURL=component.js.map