module xtal.elements{
    export interface IXtalLineChartDataWithOptions{
        data: Chartist.IChartistData,
        options: Chartist.ILineChartOptions,
        responsiveOptions: Array<Chartist.IResponsiveOptionTuple<Chartist.ILineChartOptions>>
    }
    export interface IXtalPieChartDataWithOptions{
        data: Chartist.IChartistData,
        options: Chartist.IPieChartOptions,
        responsiveOptions: Array<Chartist.IResponsiveOptionTuple<Chartist.IPieChartOptions>>
    }
    export interface IXtalBarChartDataWithOptions{
        data: Chartist.IChartistData,
        options: Chartist.IBarChartOptions,
        responsiveOptions: Array<Chartist.IResponsiveOptionTuple<Chartist.IBarChartOptions>>
    }
    export interface IXtalChartisticProperties{
        draw: boolean | polymer.PropObjectType,
        lineChartDataWithOptions: IXtalLineChartDataWithOptions | polymer.PropObjectType,
        pieChartDataWithOptions: IXtalPieChartDataWithOptions | polymer.PropObjectType,
        barChartDataWithOptions: IXtalBarChartDataWithOptions | polymer.PropObjectType,
        cssPath: string | polymer.PropObjectType,
    }
    function initXtalChartIstic(){
        const elID = 'xtal-chart-istic';
        if(customElements.get(elID)) return;
        type Constructor<T = {}> = new (...args: any[]) => T;
        const initMerge = xtal.elements['InitMerge'];
        /**
         * `xtal-chart-istic`
         * Polymer wrapper around chartist.js charting library
         *
         * @customElement
         * @polymer
         * @demo demo/index.html
         */
        class XtalChartIstic extends initMerge(Polymer.Element)  implements IXtalChartisticProperties {
            draw: boolean;
            lineChartDataWithOptions: IXtalLineChartDataWithOptions;
            pieChartDataWithOptions: IXtalLineChartDataWithOptions;
            barChartDataWithOptions: IXtalBarChartDataWithOptions;
            chart: any; //TODO
            cssPath: string;
            static get is() { return 'xtal-chart-istic'; }
            static get properties() : IXtalChartisticProperties{
                return {
                    draw:{
                        type: Boolean,
                        observer: 'onPropChange'
                    },
                    barChartDataWithOptions:{
                        type: Object,
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
                    cssPath:{
                        type: String,
                        value: '../../chartist/dist/chartist.css'
                    }
                };

            }
            // _stampTemplate(template){
            //     console.log('before stamp template')
            //     super._stampTemplate(template);
            //     console.log('after stamp template')
            // }
            onPropChange(){
                if(!this.draw) return;
                if(this.lineChartDataWithOptions){
                    this.chart = new Chartist.Line(
                        this.$.chartTarget, 
                        this.lineChartDataWithOptions.data, 
                        this.lineChartDataWithOptions.options,
                        this.lineChartDataWithOptions.responsiveOptions
                    );
                }
                if(this.pieChartDataWithOptions){
                    this.chart = new Chartist.Pie(
                        this.$.chartTarget, 
                        this.pieChartDataWithOptions.data, 
                        this.pieChartDataWithOptions.options,
                        this.pieChartDataWithOptions.responsiveOptions,
                    );
                }
                if(this.barChartDataWithOptions){
                    this.chart = new Chartist.Bar(
                        this.$.chartTarget,
                        this.barChartDataWithOptions.data,
                        this.barChartDataWithOptions.options,
                        this.barChartDataWithOptions.responsiveOptions
                    )
                }
                
            }
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