module xtal.elements{
    export interface IXtalLineChartDataWithOptions{
        data: Chartist.IChartistData,
        options: Chartist.ILineChartOptions
    }
    export interface IXtalPieChartDataWithOptions{
        data: Chartist.IChartistData,
        options: Chartist.IPieChartOptions
    }
    export interface IXtalChartisticProperties{
        draw: boolean | polymer.PropObjectType,
        lineChartDataWithOptions: IXtalLineChartDataWithOptions | polymer.PropObjectType
        pieChartDataWithOptions: IXtalPieChartDataWithOptions | polymer.PropObjectType
    }
    function initXtalChartIstic(){
        const elID = 'xtal-chart-istic';
        if(customElements.get(elID)) return;
        
        /**
         * `xtal-chart-istic`
         * Polymer wrapper around chartist.js charting library
         *
         * @customElement
         * @polymer
         * @demo demo/index.html
         */
        class XtalChartIstic extends xtal.elements['InitMerge'](Polymer.Element)  implements IXtalChartisticProperties {
            draw: boolean;
            lineChartDataWithOptions: IXtalLineChartDataWithOptions;
            pieChartDataWithOptions: IXtalLineChartDataWithOptions;
            static get is() { return 'xtal-chart-istic'; }
            static get properties() : IXtalChartisticProperties{
                return {
                    draw:{
                        type: Boolean,
                        observer: 'onPropChange'
                    },
                    lineChartDataWithOptions:{
                        type: Object,
                        observer: 'onPropChange'
                    },
                    pieChartDataWithOptions:{
                        type: Object,
                        observer: 'onPropChange'
                    },
                };

            }
            onPropChange(){
                if(!this.draw) return;
                if(this.lineChartDataWithOptions){
                    new Chartist.Line(
                        this.$.chartTarget, 
                        this.lineChartDataWithOptions.data, 
                        this.lineChartDataWithOptions.options
                    );
                }
                if(this.pieChartDataWithOptions){
                    new Chartist.Pie(
                        this.$.chartTarget, 
                        this.pieChartDataWithOptions.data, 
                        this.pieChartDataWithOptions.options
                    );
                }
                
                
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