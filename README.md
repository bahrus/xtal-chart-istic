[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/bahrus/xtal-chart-istic)

# \<xtal-chart-istic\>

Polymer wrapper around the [chartist.js](https://gionkunz.github.io/chartist-js/) charting library.  Among the virtues of this library:

1)  Strong support for styling via css
2)  First class support for responsive design
3)  A small footprint -- The JavaScript is only about 12 KB minified / gzipped.  The css file adds another 2KB.  This is one of the smallest charting libraries out there.

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="../xtal-chart-istic-sync.html">
          <dom-module id="my-component">
            <template>
              <xtal-chart-istic draw line-chart-data-with-options="[[example1]]"></xtal-chart-istic>
              <xtal-chart-istic draw pie-chart-data-with-options="[[example2]]"></xtal-chart-istic>
            </template>
          </dom-module>
          <script>
            function initMyComponent(){
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
            }
            customElements.whenDefined('xtal-chart-istic', () => initMyComponent())
        </script>
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
