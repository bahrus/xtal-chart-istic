module xtal.elements{
    /**
     * `xtal-chart-istic`
     * Polymer wrapper around chartist.js charting library
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */
    class XtalChartIstic extends Polymer.Element {
      static get is() { return 'xtal-chart-istic'; }
      static get properties() {
        return {
          
        };

      }
      connectedCallback(){
        super.connectedCallback();
        var data = {
          // A labels array that can contain any sort of values
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          // Our series array that contains series objects or in this case series data arrays
          series: [
            [5, 2, 4, 2, 0]
          ]
        };

        // Create a new line chart object where as first parameter we pass in a selector
        // that is resolving to our chart container element. The Second parameter
        // is the actual data object.
        new Chartist.Line(this.$.chartTarget, data);
      }
    }

    customElements.define(XtalChartIstic.is, XtalChartIstic);
}