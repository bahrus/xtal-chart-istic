var xtal;
(function (xtal) {
    var elements;
    (function (elements) {
        function initXtalChartIstic() {
            const elID = 'xtal-chart-istic';
            if (customElements.get(elID))
                return;
            /**
             * `xtal-chart-istic`
             * Polymer wrapper around chartist.js charting library
             *
             * @customElement
             * @polymer
             * @demo demo/index.html
             */
            class XtalChartIstic extends xtal.elements['InitMerge'](Polymer.Element) {
                static get is() { return 'xtal-chart-istic'; }
                static get properties() {
                    return {
                        draw: {
                            type: Boolean,
                            observer: 'onPropChange'
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
                    };
                }
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
        const syncFlag = 'xtal_elements_chart_istic_sync';
        if (window[syncFlag]) {
            customElements.whenDefined('poly-prep-sync').then(() => initXtalChartIstic());
            delete window[syncFlag];
        }
        else {
            if (customElements.get('poly-prep') || customElements.get('full-poly-prep')) {
                initXtalChartIstic();
            }
            else {
                customElements.whenDefined('poly-prep').then(() => initXtalChartIstic());
                customElements.whenDefined('full-poly-prep').then(() => initXtalChartIstic());
            }
        }
    })(elements = xtal.elements || (xtal.elements = {}));
})(xtal || (xtal = {}));
//# sourceMappingURL=xtal-chart-istic.js.map