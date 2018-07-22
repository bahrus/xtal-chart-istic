# \<xtal-chart-istic\>

Vanilla-ish web component wrapper around the chartist library.

The web component itself is ~1.4kb minified, gzipped.

The chartist library is ~12kb minified, gzipped.

The default css is ~1.4kb minified, gzipped.

<!--
```
<custom-element-demo>
  <template>
    <div class="vertical-section-container centered">
        <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.3/webcomponents-loader.js"></script>
        <script type="module" src="https://unpkg.com/xtal-chart-istic@0.0.2/xtal-chart-istic.iife.js"></script>
      <h3>Basic xtal-chart-istic demo</h3>
       <xtal-chart-istic draw line-chart='
       {
         "data": {
           "labels": ["Mon", "Tue", "Wed", "Thu", "Fri"],
           "series": [
             [5, 2, 4, 2, 0]
           ]
         },
         "options": {
           "width": "600px",
           "height": "300px"
         }
       }
       '></xtal-chart-istic>

       <xtal-chart-istic draw pie-chart='
       {
        "data": {
          "series": [20, 10, 30, 40]
        },
        "options": {
          "donut": true,
          "donutWidth": 20,
          "startAngle": 270,
          "total": 200
        }
      }
       '></xtal-chart-istic>
       
       <xtal-chart-istic draw bar-chart='
       {
        "data": {
          "labels": [1, 2, 3, 4],
          "series": [[100, 120, 180, 200]]
        }
      }
       '></xtal-chart-istic>
    </div>
    </template>
</custom-element-demo>
```
-->

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
