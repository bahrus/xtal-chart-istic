module xtal.elements{
    function initXtalChartIstic(){
        const elID = 'xtal-chart-istic';
        if(customElements.get(elID)) return;
        interface IXtalChartisticProperties{
            draw: boolean | polymer.PropObjectType,
            lineChart: boolean | polymer.PropObjectType,
            chartData: object | polymer.PropObjectType,
        }
        /**
         * `xtal-chart-istic`
         * Polymer wrapper around chartist.js charting library
         *
         * @customElement
         * @polymer
         * @demo demo/index.html
         */
        class XtalChartIstic extends xtal.elements['InitMerge'](Polymer.Element)  implements IXtalChartisticProperties {
            draw: boolean;chartData:any;lineChart: boolean;
            static get is() { return 'xtal-chart-istic'; }
            static get properties() : IXtalChartisticProperties{
                return {
                    chartData:{
                        type: Object,
                        observer: 'onPropChange'
                    },
                    draw:{
                        type: Boolean,
                        observer: 'onPropChange'
                    },
                    lineChart:{
                        type: Boolean,
                        observer: 'onPropChange'
                    }
                };

            }
            onPropChange(){
                if(!this.draw) return;
                if(!this.chartData) return;
                if(this.lineChart) new Chartist.Line(this.$.chartTarget, this.chartData);
            }
            // connectedCallback(){
            //     super.connectedCallback();
            //     var data = {
            //         // A labels array that can contain any sort of values
            //         labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            //         // Our series array that contains series objects or in this case series data arrays
            //         series: [
            //             [5, 2, 4, 2, 0]
            //         ]
            //     };

            //     // Create a new line chart object where as first parameter we pass in a selector
            //     // that is resolving to our chart container element. The Second parameter
            //     // is the actual data object.
            //     new Chartist.Line(this.$.chartTarget, data);
            // }
        }

        customElements.define(XtalChartIstic.is, XtalChartIstic);
    }

    const syncFlag = 'xtal_elements_chart_istic_sync'
    if(window[syncFlag]){
        customElements.whenDefined('poly-prep-sync').then(() => initXtalChartIstic());
        delete window[syncFlag];
    }else{
        if(customElements.get('poly-prep') || customElements.get('full-poly-prep')){
            initXtalChartIstic();
        }else{
            customElements.whenDefined('poly-prep').then(() => initXtalChartIstic());
            customElements.whenDefined('full-poly-prep').then(() => initXtalChartIstic());
        }
    
    }
}