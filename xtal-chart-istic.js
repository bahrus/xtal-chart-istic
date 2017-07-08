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
                        chartData: {
                            type: Object,
                            observer: 'onPropChange'
                        },
                        draw: {
                            type: Boolean,
                            observer: 'onPropChange'
                        },
                        lineChart: {
                            type: Boolean,
                            observer: 'onPropChange'
                        }
                    };
                }
                onPropChange() {
                    if (!this.draw)
                        return;
                    if (!this.chartData)
                        return;
                    if (this.lineChart)
                        new Chartist.Line(this.$.chartTarget, this.chartData);
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