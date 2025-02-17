
import { LitElement, css, html } from 'lit'
import { getShadowRoot } from '../../shared/ulti';
import { pubSub } from '../../shared/state-management';

export class PanelItem extends LitElement {

    static get properties() {
        return {
            active: { type: Boolean },
            name: { attribute: true }
        }
    }

    constructor() {
        super()
    }

    createRenderRoot() {
        return this
    }

    render() {
        return html`
            <div class="panel-item ${this.active === true ? 'active' : ''}">
            </div>
        `
    }

    updated() {
        const root = getShadowRoot();
        const panel = this.querySelector('.panel-item');
        const childs = this.querySelectorAll('[slot="content"]');
        childs.forEach((item) => {
            panel.appendChild(item);
        })

        
    }


}
window.customElements.define('chat-panel-item', PanelItem)
