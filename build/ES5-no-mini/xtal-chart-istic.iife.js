//@ts-check
(function () {
  var disabled = 'disabled';

  function XtallatX(superClass) {
    return (
      /*#__PURE__*/
      function (_superClass) {
        babelHelpers.inherits(_class, _superClass);

        function _class() {
          var _this;

          babelHelpers.classCallCheck(this, _class);
          _this = babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
          _this._evCount = {};
          return _this;
        }

        babelHelpers.createClass(_class, [{
          key: "attr",
          value: function attr(name, val, trueVal) {
            if (val) {
              this.setAttribute(name, trueVal || val);
            } else {
              this.removeAttribute(name);
            }
          }
        }, {
          key: "incAttr",
          value: function incAttr(name) {
            var ec = this._evCount;

            if (name in ec) {
              ec[name]++;
            } else {
              ec[name] = 0;
            }

            this.attr(name, ec[name].toString());
          }
        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(name, oldVal, newVal) {
            switch (name) {
              case disabled:
                this._disabled = newVal !== null;
                break;
            }
          }
        }, {
          key: "de",
          value: function de(name, detail) {
            var eventName = name + '-changed';
            var newEvent = new CustomEvent(eventName, {
              detail: detail,
              bubbles: true,
              composed: false
            });
            this.dispatchEvent(newEvent);
            this.incAttr(eventName);
            return newEvent;
          }
        }, {
          key: "_upgradeProperties",
          value: function _upgradeProperties(props) {
            var _this2 = this;

            props.forEach(function (prop) {
              if (_this2.hasOwnProperty(prop)) {
                var value = _this2[prop];
                delete _this2[prop];
                _this2[prop] = value;
              }
            });
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(val) {
            this.attr(disabled, val, '');
          }
        }], [{
          key: "observedAttributes",
          get: function get() {
            return [disabled];
          }
        }]);
        return _class;
      }(superClass)
    );
  } //# sourceMappingURL=xtal-latx.js.map


  var cs_src = self['xtal_chart_istic'] ? xtal_chart_istic.href : document.currentScript ? document.currentScript.src : null;

  if (!cs_src) {
    cs_src = 'https://unpkg.com/chartist@0.11.0/dist/chartist.js';
  }

  var base = cs_src.split('/').slice(0, -1).join('/');
  var draw = 'draw';
  var line_chart = 'line-chart';
  var pie_chart = 'pie-chart';
  var bar_chart = 'bar-chart';
  var template = document.createElement('template');
  /**
   * `xtal-chart-istic`
   * Vannilla-ish wrapper around chartist.js charting library
   *
   * @customElement
   * @polymer
   * @demo demo/index.html
   */

  var XtalChartIstic =
  /*#__PURE__*/
  function (_XtallatX) {
    babelHelpers.inherits(XtalChartIstic, _XtallatX);

    function XtalChartIstic() {
      var _this3;

      babelHelpers.classCallCheck(this, XtalChartIstic);
      _this3 = babelHelpers.possibleConstructorReturn(this, (XtalChartIstic.__proto__ || Object.getPrototypeOf(XtalChartIstic)).call(this));

      _this3.attachShadow({
        mode: 'open'
      });

      _this3.shadowRoot.appendChild(template.content.cloneNode(true));

      _this3._chartTarget = _this3.shadowRoot.querySelector('#chartTarget');
      return _this3;
    }

    babelHelpers.createClass(XtalChartIstic, [{
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
          case draw:
            this._draw = newVal !== null;
            break;

          case line_chart:
            this._lineChart = JSON.parse(newVal);
            break;

          case bar_chart:
            this._barChart = JSON.parse(newVal);
            break;

          case pie_chart:
            this._pieChart = JSON.parse(newVal);
            break;
        }

        babelHelpers.get(XtalChartIstic.prototype.__proto__ || Object.getPrototypeOf(XtalChartIstic.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);
        this.onPropChange();
      }
    }, {
      key: "onPropChange",
      value: function onPropChange() {
        if (!this.draw || this._disabled) return;

        if (this._lineChart) {
          this.chart = new Chartist.Line(this._chartTarget, this._lineChart.data, this._lineChart.options, this._lineChart.responsiveOptions);
        }

        if (this._pieChart) {
          this.chart = new Chartist.Pie(this._chartTarget, this._pieChart.data, this._pieChart.options, this._pieChart.responsiveOptions);
        }

        if (this._barChart) {
          this.chart = new Chartist.Bar(this._chartTarget, this._barChart.data, this._barChart.options, this._barChart.responsiveOptions);
        }
      }
    }, {
      key: "lineChart",
      get: function get() {
        return this._lineChart;
      },
      set: function set(val) {
        this._lineChart = val;
        this.onPropChange();
      }
    }, {
      key: "pieChart",
      get: function get() {
        return this._pieChart;
      },
      set: function set(val) {
        this._pieChart = val;
        this.onPropChange();
      }
    }, {
      key: "barChart",
      get: function get() {
        return this._barChart;
      },
      set: function set(val) {
        this._barChart = val;
        this.onPropChange();
      }
    }, {
      key: "draw",
      get: function get() {
        return this._draw;
      },
      set: function set(val) {
        this.attr(draw, val, '');
      }
    }], [{
      key: "is",
      get: function get() {
        return 'xtal-chart-istic';
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        return ['disabled', draw, line_chart, pie_chart, bar_chart];
      }
    }]);
    return XtalChartIstic;
  }(XtallatX(HTMLElement)); //Firefox induced train wreck


  if (typeof Chartist === 'undefined') {
    var script = document.createElement('script'); // script.src = basePath + '/materials/liquidDistortMaterial.js';

    script.src = base + '/chartist.min.js';
    script.addEventListener('load', function (e) {
      fetch(base + '/chartist.min.css', {
        credentials: 'same-origin'
      }).then(function (resp) {
        resp.text().then(function (content) {
          template.innerHTML =
          /*html*/
          "\n                    <style>\n                    :host {\n                        display: block;\n                    }\n                    ".concat(content, "\n                    </style>\n                    <div id=\"chartTarget\"></div>\n                ");
          init();
        });
      });
    });
    document.head.appendChild(script);
  }

  function init() {
    var nm = XtalChartIstic.is;
    if (!customElements.get(nm)) customElements.define(XtalChartIstic.is, XtalChartIstic);
  } //# sourceMappingURL=xtal-chart-istic.js.map

})();