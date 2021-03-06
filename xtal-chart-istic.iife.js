
    //@ts-check
    (function () {
    const disabled = 'disabled';
function XtallatX(superClass) {
    return class extends superClass {
        constructor() {
            super(...arguments);
            this._evCount = {};
        }
        static get observedAttributes() {
            return [disabled];
        }
        get disabled() {
            return this._disabled;
        }
        set disabled(val) {
            this.attr(disabled, val, '');
        }
        attr(name, val, trueVal) {
            if (val) {
                this.setAttribute(name, trueVal || val);
            }
            else {
                this.removeAttribute(name);
            }
        }
        incAttr(name) {
            const ec = this._evCount;
            if (name in ec) {
                ec[name]++;
            }
            else {
                ec[name] = 0;
            }
            this.attr(name, ec[name].toString());
        }
        attributeChangedCallback(name, oldVal, newVal) {
            switch (name) {
                case disabled:
                    this._disabled = newVal !== null;
                    break;
            }
        }
        de(name, detail) {
            const eventName = name + '-changed';
            const newEvent = new CustomEvent(eventName, {
                detail: detail,
                bubbles: true,
                composed: false,
            });
            this.dispatchEvent(newEvent);
            this.incAttr(eventName);
            return newEvent;
        }
        _upgradeProperties(props) {
            props.forEach(prop => {
                if (this.hasOwnProperty(prop)) {
                    let value = this[prop];
                    delete this[prop];
                    this[prop] = value;
                }
            });
        }
    };
}
//# sourceMappingURL=xtal-latx.js.map
let cs_src = self['xtal_chart_istic'] ? xtal_chart_istic.href : document.currentScript ? document.currentScript.src : null;
if (!cs_src) {
    cs_src = 'https://unpkg.com/chartist@0.11.0/dist/chartist.js';
}
const base = cs_src.split('/').slice(0, -1).join('/');
const draw = 'draw';
const line_chart = 'line-chart';
const pie_chart = 'pie-chart';
const bar_chart = 'bar-chart';
const template = document.createElement('template');
/**
 * `xtal-chart-istic`
 * Vannilla-ish wrapper around chartist.js charting library
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XtalChartIstic extends XtallatX(HTMLElement) {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._chartTarget = this.shadowRoot.querySelector('#chartTarget');
    }
    get lineChart() {
        return this._lineChart;
    }
    set lineChart(val) {
        this._lineChart = val;
        this.onPropChange();
    }
    get pieChart() {
        return this._pieChart;
    }
    set pieChart(val) {
        this._pieChart = val;
        this.onPropChange();
    }
    get barChart() {
        return this._barChart;
    }
    set barChart(val) {
        this._barChart = val;
        this.onPropChange();
    }
    connectedCallback() {
        this._connected = true;
        this._upgradeProperties([draw, 'lineChart', 'barChart', 'pieChart']);
        this.onPropChange();
    }
    static get is() { return 'xtal-chart-istic'; }
    get draw() {
        return this._draw;
    }
    set draw(val) {
        this.attr(draw, val, '');
    }
    static get observedAttributes() {
        return ['disabled', draw, line_chart, pie_chart, bar_chart];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case draw:
                this._draw = newVal !== null;
                break;
            case line_chart:
                this._lineChart = JSON.parse(newVal);
                break;
            case bar_chart:
                this._barChart = JSON.parse(newVal);
                break;
            case pie_chart:
                this._pieChart = JSON.parse(newVal);
                break;
        }
        super.attributeChangedCallback(name, oldVal, newVal);
        this.onPropChange();
    }
    onPropChange() {
        if (!this.draw || this._disabled)
            return;
        if (this._lineChart) {
            this.chart = new Chartist.Line(this._chartTarget, this._lineChart.data, this._lineChart.options, this._lineChart.responsiveOptions);
        }
        if (this._pieChart) {
            this.chart = new Chartist.Pie(this._chartTarget, this._pieChart.data, this._pieChart.options, this._pieChart.responsiveOptions);
        }
        if (this._barChart) {
            this.chart = new Chartist.Bar(this._chartTarget, this._barChart.data, this._barChart.options, this._barChart.responsiveOptions);
        }
    }
}
//Firefox induced train wreck
if (typeof (Chartist) === 'undefined') {
    const script = document.createElement('script');
    // script.src = basePath + '/materials/liquidDistortMaterial.js';
    script.src = base + '/chartist.min.js';
    script.addEventListener('load', e => {
        fetch(base + '/chartist.min.css', { credentials: 'same-origin' }).then(resp => {
            resp.text().then(content => {
                template.innerHTML = /*html*/ `
                    <style>
                    :host {
                        display: block;
                    }
                    ${content}
                    </style>
                    <div id="chartTarget"></div>
                `;
                init();
            });
        });
    });
    document.head.appendChild(script);
}
function init() {
    const nm = XtalChartIstic.is;
    if (!customElements.get(nm))
        customElements.define(XtalChartIstic.is, XtalChartIstic);
}
//# sourceMappingURL=xtal-chart-istic.js.map
    })();  
        