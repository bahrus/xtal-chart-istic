(function () {
    let cs;
    function initXtalChartIstic(polymerMixin) {
        const elID = 'xtal-chart-istic';
        if (customElements.get(elID))
            return;
        // type Constructor<T = {}> = new (...args: any[]) => T;
        // const initMerge = xtal.elements['InitMerge'];
        /**
         * `xtal-chart-istic`
         * Polymer wrapper around chartist.js charting library
         *
         * @customElement
         * @polymer
         * @demo demo/index.html
         */
        class XtalChartIstic extends polymerMixin(HTMLElement) {
            static get is() { return 'xtal-chart-istic'; }
            static get properties() {
                return {
                    draw: {
                        type: Boolean,
                        observer: 'onPropChange',
                        reflectToAttribute: true,
                    },
                    barChartDataWithOptions: {
                        type: Object,
                        observer: 'onPropChange'
                    },
                    lineChartDataWithOptions: {
                        type: Object,
                        observer: 'onPropChange'
                    },
                    pieChartDataWithOptions: {
                        type: Object,
                        observer: 'onPropChange'
                    },
                    cssPath: {
                        type: String,
                        value: '../../chartist/dist/chartist.min.css',
                        reflectToAttribute: true,
                    }
                };
            }
            // _stampTemplate(template){
            //     console.log('before stamp template')
            //     super._stampTemplate(template);
            //     console.log('after stamp template')
            // }
            onPropChange() {
                if (!this.draw)
                    return;
                if (this.lineChartDataWithOptions) {
                    this.chart = new Chartist.Line(this.$.chartTarget, this.lineChartDataWithOptions.data, this.lineChartDataWithOptions.options, this.lineChartDataWithOptions.responsiveOptions);
                }
                if (this.pieChartDataWithOptions) {
                    this.chart = new Chartist.Pie(this.$.chartTarget, this.pieChartDataWithOptions.data, this.pieChartDataWithOptions.options, this.pieChartDataWithOptions.responsiveOptions);
                }
                if (this.barChartDataWithOptions) {
                    this.chart = new Chartist.Bar(this.$.chartTarget, this.barChartDataWithOptions.data, this.barChartDataWithOptions.options, this.barChartDataWithOptions.responsiveOptions);
                }
            }
        }
        customElements.define(XtalChartIstic.is, XtalChartIstic);
    }
    function WaitForPolymer() {
        cs = document.currentScript;
        if ((typeof Polymer !== 'function') || (typeof Polymer.ElementMixin !== 'function')) {
            setTimeout(WaitForPolymer, 100);
            return;
        }
        initXtalChartIstic(Polymer.ElementMixin);
    }
    WaitForPolymer();
})();
//# sourceMappingURL=xtal-chart-istic.js.map