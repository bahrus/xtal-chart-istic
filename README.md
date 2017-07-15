[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/bahrus/xtal-chart-istic)

# \<xtal-chart-istic\>

Polymer wrapper around chartist.js charting library

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="../xtal-chart-istic.html">
          <dom-module id="my-component">
            <template>
              <xtal-chart-istic draw line-chart-data-with-options="[[example1]]"></xtal-chart-istic>
              <xtal-chart-istic draw pie-chart-data-with-options="[[example2]]"></xtal-chart-istic>
            </template>
          </dom-module>
          <script>
            class MyComponent extends Polymer.Element{
              static get is(){return 'my-component';}
              connectedCallback(){
                super.connectedCallback();
                this.example1 = {
                  data:{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    series: [
                        [5, 2, 4, 2, 0]
                    ]
                  },
                  options:{
                    width: '600px',
                    height: '300px',
                  }    
                }
                this.example2 = {
                  data:{
                    series: [20, 10, 30, 40]
                  },
                  options:{
                      donut: true,
                      donutWidth: 20,
                      startAngle: 270,
                      total: 200
                  }
                }
              }
            }
            customElements.define(MyComponent.is, MyComponent);
  </template>
  <my-component></my-component>
</custom-element-demo>
```
-->
```html
<my-component></my-component>
```


## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
