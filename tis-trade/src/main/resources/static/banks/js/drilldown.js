/*
 Highcharts JS v6.2.0 (2018-10-17)
 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license
*/

(function (n) {
  "object" === typeof module && module.exports ? module.exports = n : "function"
  === typeof define && define.amd ? define(function () {
    return n
  }) : n(Highcharts)
})(function (n) {
  (function (d) {
    var n = d.animObject, x = d.noop, y = d.color, z = d.defaultOptions,
        k = d.each, q = d.extend, F = d.format, A = d.objectEach, t = d.pick,
        m = d.Chart, p = d.seriesTypes, B = p.pie, p = p.column, C = d.Tick,
        u = d.fireEvent, D = d.inArray, E = 1;
    q(z.lang, {drillUpText: "\u25c1 Back to {series.name}"});
    z.drilldown = {
      animation: {duration: 500}, drillUpButton: {
        position: {
          align: "right",
          x: -10, y: 10
        }
      }
    };
    d.SVGRenderer.prototype.Element.prototype.fadeIn = function (a) {
      this.attr({opacity: .1, visibility: "inherit"}).animate(
          {opacity: t(this.newOpacity, 1)}, a || {duration: 250})
    };
    m.prototype.addSeriesAsDrilldown = function (a, b) {
      this.addSingleSeriesAsDrilldown(a, b);
      this.applyDrilldown()
    };
    m.prototype.addSingleSeriesAsDrilldown = function (a, b) {
      var c = a.series, f = c.xAxis, e = c.yAxis, g, h = [], v = [], l, r, m;
      m = {colorIndex: t(a.colorIndex, c.colorIndex)};
      this.drilldownLevels || (this.drilldownLevels = []);
      l = c.options._levelNumber ||
          0;
      (r = this.drilldownLevels[this.drilldownLevels.length - 1])
      && r.levelNumber !== l && (r = void 0);
      b = q(q({_ddSeriesId: E++}, m), b);
      g = D(a, c.points);
      k(c.chart.series, function (a) {
        a.xAxis !== f || a.isDrilling
        || (a.options._ddSeriesId = a.options._ddSeriesId
            || E++, a.options._colorIndex = a.userOptions._colorIndex, a.options._levelNumber = a.options._levelNumber
            || l, r ? (h = r.levelSeries, v = r.levelSeriesOptions) : (h.push(
            a), v.push(a.options)))
      });
      a = q({
        levelNumber: l,
        seriesOptions: c.options,
        levelSeriesOptions: v,
        levelSeries: h,
        shapeArgs: a.shapeArgs,
        bBox: a.graphic ? a.graphic.getBBox() : {},
        color: a.isNull ? (new d.Color(y)).setOpacity(0).get() : y,
        lowerSeriesOptions: b,
        pointOptions: c.options.data[g],
        pointIndex: g,
        oldExtremes: {
          xMin: f && f.userMin,
          xMax: f && f.userMax,
          yMin: e && e.userMin,
          yMax: e && e.userMax
        },
        resetZoomButton: this.resetZoomButton
      }, m);
      this.drilldownLevels.push(a);
      f && f.names && (f.names.length = 0);
      b = a.lowerSeries = this.addSeries(b, !1);
      b.options._levelNumber = l + 1;
      f
      && (f.oldPos = f.pos, f.userMin = f.userMax = null, e.userMin = e.userMax = null);
      c.type === b.type && (b.animate =
          b.animateDrilldown || x, b.options.animation = !0)
    };
    m.prototype.applyDrilldown = function () {
      var a = this.drilldownLevels, b;
      a && 0 < a.length && (b = a[a.length - 1].levelNumber, k(
          this.drilldownLevels, function (a) {
            a.levelNumber === b && k(a.levelSeries, function (a) {
              a.options && a.options._levelNumber === b && a.remove(!1)
            })
          }));
      this.resetZoomButton
      && (this.resetZoomButton.hide(), delete this.resetZoomButton);
      this.pointer.reset();
      this.redraw();
      this.showDrillUpButton()
    };
    m.prototype.getDrilldownBackText = function () {
      var a = this.drilldownLevels;
      if (a && 0 < a.length) {
        return a = a[a.length
        - 1], a.series = a.seriesOptions, F(this.options.lang.drillUpText, a)
      }
    };
    m.prototype.showDrillUpButton = function () {
      var a = this, b = this.getDrilldownBackText(),
          c = a.options.drilldown.drillUpButton, f, e;
      this.drillUpButton ? this.drillUpButton.attr({text: b}).align()
          : (e = (f = c.theme)
              && f.states, this.drillUpButton = this.renderer.button(b, null, null,
              function () {
                a.drillUp()
              }, f, e && e.hover, e && e.select).addClass(
              "highcharts-drillup-button").attr(
              {align: c.position.align, zIndex: 7}).add().align(c.position,
              !1, c.relativeTo || "plotBox"))
    };
    m.prototype.drillUp = function () {
      if (this.drilldownLevels && 0 !== this.drilldownLevels.length) {
        for (var a = this, b = a.drilldownLevels,
            c = b[b.length - 1].levelNumber, f = b.length, e = a.series, g, h,
            d, l, m = function (b) {
              var c;
              k(e, function (a) {
                a.options._ddSeriesId === b._ddSeriesId && (c = a)
              });
              c = c || a.addSeries(b, !1);
              c.type === d.type && c.animateDrillupTo
              && (c.animate = c.animateDrillupTo);
              b === h.seriesOptions && (l = c)
            }; f--;) {
          if (h = b[f], h.levelNumber === c) {
            b.pop();
            d = h.lowerSeries;
            if (!d.chart) {
              for (g = e.length; g--;) {
                if (e[g].options.id ===
                    h.lowerSeriesOptions.id && e[g].options._levelNumber === c
                    + 1) {
                  d = e[g];
                  break
                }
              }
            }
            d.xData = [];
            k(h.levelSeriesOptions, m);
            u(a, "drillup", {seriesOptions: h.seriesOptions});
            l.type === d.type
            && (l.drilldownLevel = h, l.options.animation = a.options.drilldown.animation, d.animateDrillupFrom
            && d.chart && d.animateDrillupFrom(h));
            l.options._levelNumber = c;
            d.remove(!1);
            l.xAxis && (g = h.oldExtremes, l.xAxis.setExtremes(g.xMin, g.xMax,
                !1), l.yAxis.setExtremes(g.yMin, g.yMax, !1));
            h.resetZoomButton
            && (a.resetZoomButton = h.resetZoomButton, a.resetZoomButton.show())
          }
        }
        u(a,
            "drillupall");
        this.redraw();
        0 === this.drilldownLevels.length
            ? this.drillUpButton = this.drillUpButton.destroy()
            : this.drillUpButton.attr(
                {text: this.getDrilldownBackText()}).align();
        this.ddDupes.length = []
      }
    };
    m.prototype.callbacks.push(function () {
      var a = this;
      a.drilldown = {
        update: function (b, c) {
          d.merge(!0, a.options.drilldown, b);
          t(c, !0) && a.redraw()
        }
      }
    });
    d.addEvent(m, "beforeShowResetZoom", function () {
      if (this.drillUpButton) {
        return !1
      }
    });
    d.addEvent(m, "render", function () {
      k(this.xAxis || [], function (a) {
        a.ddPoints = {};
        k(a.series,
            function (b) {
              var c, f = b.xData || [], e = b.points, d;
              for (c = 0; c < f.length; c++) {
                d = b.options.data[c], "number"
                !== typeof d
                && (d = b.pointClass.prototype.optionsToObject.call(
                    {series: b}, d), d.drilldown && (a.ddPoints[f[c]]
                || (a.ddPoints[f[c]] = []), a.ddPoints[f[c]].push(
                    e ? e[c] : !0)))
              }
            });
        A(a.ticks, C.prototype.drillable)
      })
    });
    p.prototype.animateDrillupTo = function (a) {
      if (!a) {
        var b = this, c = b.drilldownLevel;
        k(this.points, function (a) {
          var b = a.dataLabel;
          a.graphic && a.graphic.hide();
          b && (b.hidden = "hidden" === b.attr("visibility"), b.hidden ||
          (b.hide(), a.connector && a.connector.hide()))
        });
        d.syncTimeout(function () {
          b.points && k(b.points, function (a, b) {
            b = b === (c && c.pointIndex) ? "show" : "fadeIn";
            var d = "show" === b ? !0 : void 0, f = a.dataLabel;
            if (a.graphic) {
              a.graphic[b](d);
            }
            f && !f.hidden && (f.fadeIn(), a.connector && a.connector.fadeIn())
          })
        }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0));
        this.animate = x
      }
    };
    p.prototype.animateDrilldown = function (a) {
      var b = this, c = this.chart.drilldownLevels, d,
          e = n(this.chart.options.drilldown.animation), g = this.xAxis;
      a || (k(c, function (a) {
        b.options._ddSeriesId === a.lowerSeriesOptions._ddSeriesId
        && (d = a.shapeArgs)
      }), d.x += t(g.oldPos, g.pos) - g.pos, k(this.points, function (a) {
        a.graphic && a.graphic.attr(d).animate(
            q(a.shapeArgs, {fill: a.color || b.color}), e);
        a.dataLabel && a.dataLabel.fadeIn(e)
      }), this.animate = null)
    };
    p.prototype.animateDrillupFrom = function (a) {
      var b = n(this.chart.options.drilldown.animation), c = this.group,
          f = c !== this.chart.columnGroup, e = this;
      k(e.trackerGroups, function (a) {
        if (e[a]) {
          e[a].on("mouseover")
        }
      });
      f && delete this.group;
      k(this.points, function (e) {
        var g = e.graphic, k = a.shapeArgs, l = function () {
          g.destroy();
          c && f && (c = c.destroy())
        };
        g && (delete e.graphic, b.duration ? g.animate(k,
            d.merge(b, {complete: l})) : (g.attr(k), l()))
      })
    };
    B && q(B.prototype, {
      animateDrillupTo: p.prototype.animateDrillupTo,
      animateDrillupFrom: p.prototype.animateDrillupFrom,
      animateDrilldown: function (a) {
        var b = this.chart.options.drilldown.animation,
            c = this.chart.drilldownLevels[this.chart.drilldownLevels.length
            - 1].shapeArgs, f = c.start, e = (c.end - f) / this.points.length;
        a ||
        (k(this.points, function (a, h) {
          var g = a.shapeArgs;
          if (a.graphic) {
            a.graphic.attr(
                d.merge(c, {start: f + h * e, end: f + (h + 1) * e}))[b
                ? "animate" : "attr"](g, b)
          }
        }), this.animate = null)
      }
    });
    d.Point.prototype.doDrilldown = function (a, b, c) {
      var d = this.series.chart, e = d.options.drilldown,
          g = (e.series || []).length, h;
      d.ddDupes || (d.ddDupes = []);
      for (; g-- && !h;) {
        e.series[g].id === this.drilldown && -1 === D(
            this.drilldown, d.ddDupes) && (h = e.series[g], d.ddDupes.push(
            this.drilldown));
      }
      u(d, "drilldown", {
        point: this, seriesOptions: h, category: b, originalEvent: c,
        points: void 0 !== b && this.series.xAxis.getDDPoints(b).slice(0)
      }, function (b) {
        var c = b.point.series && b.point.series.chart, d = b.seriesOptions;
        c && d && (a ? c.addSingleSeriesAsDrilldown(b.point, d)
            : c.addSeriesAsDrilldown(b.point, d))
      })
    };
    d.Axis.prototype.drilldownCategory = function (a, b) {
      A(this.getDDPoints(a), function (c) {
        c && c.series && c.series.visible && c.doDrilldown && c.doDrilldown(!0,
            a, b)
      });
      this.chart.applyDrilldown()
    };
    d.Axis.prototype.getDDPoints = function (a) {
      return this.ddPoints && this.ddPoints[a]
    };
    C.prototype.drillable =
        function () {
          var a = this.pos, b = this.label, c = this.axis,
              d = "xAxis" === c.coll && c.getDDPoints,
              e = d && c.getDDPoints(a);
          d && (b && e && e.length ? (b.drillable = !0, b.addClass(
              "highcharts-drilldown-axis-label").on("click", function (b) {
            c.drilldownCategory(a, b)
          })) : b && b.drillable && (b.on("click", null), b.removeClass(
              "highcharts-drilldown-axis-label")))
        };
    d.addEvent(d.Point, "afterInit", function () {
      var a = this, b = a.series;
      a.drilldown && d.addEvent(a, "click", function (c) {
        b.xAxis && !1 === b.chart.options.drilldown.allowPointDrilldown
            ? b.xAxis.drilldownCategory(a.x,
                c) : a.doDrilldown(void 0, void 0, c)
      });
      return a
    });
    d.addEvent(d.Series, "afterDrawDataLabels", function () {
      k(this.points, function (a) {
        var b = a.options.dataLabels, c = t(a.dlOptions, b && b.style, {});
        a.drilldown && a.dataLabel && (b && b.color
        && (c.color = b.color), a.dataLabel.addClass(
            "highcharts-drilldown-data-label"))
      }, this)
    });
    var w = function (a, b, c) {
      a[c ? "addClass" : "removeClass"]("highcharts-drilldown-point")
    };
    d.addEvent(d.Series, "afterDrawTracker", function () {
      k(this.points, function (a) {
        a.drilldown && a.graphic && w(a.graphic,
            "pointer", !0)
      })
    });
    d.addEvent(d.Point, "afterSetState", function () {
      this.drilldown && this.series.halo && "hover" === this.state ? w(
          this.series.halo, "pointer", !0) : this.series.halo && w(
          this.series.halo, "auto", !1)
    })
  })(n)
});
//# sourceMappingURL=drilldown.js.map
