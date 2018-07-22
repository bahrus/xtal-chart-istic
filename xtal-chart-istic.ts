import { XtallatX } from 'xtal-latx/xtal-latx.js'
declare var Chartist: any, xtal_chart_istic: any;

let cs_src = (<any>self)['xtal_chart_istic'] ? xtal_chart_istic.href : document.currentScript ? (document.currentScript as HTMLScriptElement).src : null;
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
    _chartTarget!: HTMLElement;
    _lineChart!: any;
    get lineChart() {
        return this._lineChart;
    }
    set lineChart(val) {
        this._lineChart = val;
        this.onPropChange();
    }
    _pieChart!: any;
    get pieChart() {
        return this._pieChart;
    }
    set pieChart(val) {
        this._pieChart = val;
        this.onPropChange();
    }
    _barChart!: any;
    get barChart() {
        return this._barChart;
    }
    set barChart(val) {
        this._barChart = val;
        this.onPropChange();
    }
    chart: any; //TODO
    static get is() { return 'xtal-chart-istic'; }
    _draw!: boolean;
    get draw() {
        return this._draw;
    }
    set draw(val) {
        this.attr(draw, val, '');
    }

    static get observedAttributes() {
        return ['disabled', draw, line_chart, pie_chart, bar_chart];
    }
    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
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
        if (!this.draw || this._disabled) return;
        if (this._lineChart) {
            this.chart = new Chartist.Line(
                this._chartTarget,
                this._lineChart.data,
                this._lineChart.options,
                this._lineChart.responsiveOptions
            );
        }
        if (this._pieChart) {
            this.chart = new Chartist.Pie(
                this._chartTarget,
                this._pieChart.data,
                this._pieChart.options,
                this._pieChart.responsiveOptions,
            );
        }
        if (this._barChart) {
            this.chart = new Chartist.Bar(
                this._chartTarget,
                this._barChart.data,
                this._barChart.options,
                this._barChart.responsiveOptions
            )
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
                template.innerHTML = /*html*/`
                    <style>
                    :host {
                        display: block;
                    }
                    ${content}
                    </style>
                    <div id="chartTarget"></div>
                `;
                init();
            })
        })
    });
    document.head.appendChild(script);
}

function init() {
    const nm = XtalChartIstic.is;
    if (!customElements.get(nm)) customElements.define(XtalChartIstic.is, XtalChartIstic);
}



