import * as ReactDOM from "react-dom";
import MyTestComponent from './components/MyTestComponent';
import * as React from "react";



function main() {
    customElements.define('my-test-web-component', class extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            // * For now it is difficult to embed styles to shadow root
            // const mountPoint = document.createElement('div');
            // mountPoint.id = 'my-test-web-component';
            // const shadowRoot = this.attachShadow({ mode: 'open' });
            // shadowRoot.appendChild(mountPoint);

            const component = <MyTestComponent></MyTestComponent>;
            ReactDOM.render(component, this);
        }
    });
}

export default main;