import { __decorate } from "tslib";
import { html } from 'lit';
import { WrapperComponent } from "../../wrapper-component";
import { state } from "lit/decorators.js";
import { style as globalStyle } from "../../style";
import { style as localStyle } from "./style";
export class Component extends WrapperComponent {
    constructor() {
        super(...arguments);
        this.collection = '3390567';
        this.source = `https://source.unsplash.com/collection/${this.collection}`;
    }
    connectedCallback() {
        super.connectedCallback();
        fetch(this.source)
            .then(response => {
            if (response.ok) {
                this.url = response.url;
            }
        })
            .catch(error => {
            console.log(error);
        });
    }
    render() {
        return html `
      <div class="${this.colorSystem} ${this.fontSystem}">

      <section class="content">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </section>
      <section class="image">
        <img src="${this.url}" alt="random image">
      </section>
      </div>
    `;
    }
}
Component.styles = [globalStyle, localStyle];
__decorate([
    state()
], Component.prototype, "collection", void 0);
__decorate([
    state()
], Component.prototype, "source", void 0);
__decorate([
    state()
], Component.prototype, "url", void 0);
__decorate([
    state()
], Component.prototype, "response", void 0);
//# sourceMappingURL=component.js.map