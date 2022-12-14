/*
 Highcharts JS v6.2.0 (2018-10-17)

 3D features for Highcharts JS

 @license: www.highcharts.com/license
*/
(function (A) {
  "object" === typeof module && module.exports ? module.exports = A : "function"
  === typeof define && define.amd ? define(function () {
    return A
  }) : A(Highcharts)
})(function (A) {
  (function (b) {
    var z = b.deg2rad, y = b.pick;
    b.perspective3D = function (b, v, m) {
      v = 0 < m && m < Number.POSITIVE_INFINITY ? m / (b.z + v.z + m) : 1;
      return {x: b.x * v, y: b.y * v}
    };
    b.perspective = function (r, v, m) {
      var x = v.options.chart.options3d, g = m ? v.inverted : !1, w = {
            x: v.plotWidth / 2,
            y: v.plotHeight / 2,
            z: x.depth / 2,
            vd: y(x.depth, 1) * y(x.viewDistance, 0)
          }, u = v.scale3d || 1, q = z * x.beta *
              (g ? -1 : 1), x = z * x.alpha * (g ? -1 : 1), f = Math.cos(x),
          a = Math.cos(-q), e = Math.sin(x), h = Math.sin(-q);
      m || (w.x += v.plotLeft, w.y += v.plotTop);
      return b.map(r, function (l) {
        var q;
        q = (g ? l.y : l.x) - w.x;
        var d = (g ? l.x : l.y) - w.y;
        l = (l.z || 0) - w.z;
        q = {
          x: a * q - h * l,
          y: -e * h * q + f * d - a * e * l,
          z: f * h * q + e * d + f * a * l
        };
        d = b.perspective3D(q, w, w.vd);
        d.x = d.x * u + w.x;
        d.y = d.y * u + w.y;
        d.z = q.z * u + w.z;
        return {x: g ? d.y : d.x, y: g ? d.x : d.y, z: d.z}
      })
    };
    b.pointCameraDistance = function (b, v) {
      var m = v.options.chart.options3d, x = v.plotWidth / 2;
      v = v.plotHeight / 2;
      m = y(m.depth, 1) * y(m.viewDistance,
          0) + m.depth;
      return Math.sqrt(
          Math.pow(x - b.plotX, 2) + Math.pow(v - b.plotY, 2) + Math.pow(
              m - b.plotZ, 2))
    };
    b.shapeArea = function (b) {
      var v = 0, m, x;
      for (m = 0; m < b.length; m++) {
        x = (m + 1) % b.length, v += b[m].x
            * b[x].y - b[x].x * b[m].y;
      }
      return v / 2
    };
    b.shapeArea3d = function (r, v, m) {
      return b.shapeArea(b.perspective(r, v, m))
    }
  })(A);
  (function (b) {
    function z(a, d, c, C, b, D, e, h) {
      var B = [], t = D - b;
      return D > b && D - b > Math.PI / 2 + .0001 ? (B = B.concat(
          z(a, d, c, C, b, b + Math.PI / 2, e, h)), B = B.concat(
          z(a, d, c, C, b + Math.PI / 2, D, e, h))) : D < b && b - D > Math.PI
      / 2 + .0001 ? (B = B.concat(z(a,
          d, c, C, b, b - Math.PI / 2, e, h)), B = B.concat(
          z(a, d, c, C, b - Math.PI / 2, D, e, h))) : ["C",
        a + c * Math.cos(b) - c * k * t * Math.sin(b) + e,
        d + C * Math.sin(b) + C * k * t * Math.cos(b) + h,
        a + c * Math.cos(D) + c * k * t * Math.sin(D) + e,
        d + C * Math.sin(D) - C * k * t * Math.cos(D) + h,
        a + c * Math.cos(D) + e, d + C * Math.sin(D) + h]
    }

    var y = Math.cos, r = Math.PI, v = Math.sin, m = b.animObject, x = b.charts,
        g = b.color, w = b.defined, u = b.deg2rad, q = b.each, f = b.extend,
        a = b.inArray, e = b.map, h = b.merge, l = b.perspective, n = b.pick,
        d = b.SVGElement, c = b.SVGRenderer, p = b.wrap,
        k = 4 * (Math.sqrt(2) - 1) / 3 / (r / 2);
    p(c.prototype,
        "init", function (a) {
          a.apply(this, [].slice.call(arguments, 1));
          q([{name: "darker", slope: .6}, {name: "brighter", slope: 1.4}],
              function (a) {
                this.definition({
                  tagName: "filter",
                  id: "highcharts-" + a.name,
                  children: [{
                    tagName: "feComponentTransfer",
                    children: [{
                      tagName: "feFuncR",
                      type: "linear",
                      slope: a.slope
                    }, {tagName: "feFuncG", type: "linear", slope: a.slope},
                      {tagName: "feFuncB", type: "linear", slope: a.slope}]
                  }]
                })
              }, this)
        });
    c.prototype.toLinePath = function (a, d) {
      var c = [];
      q(a, function (a) {
        c.push("L", a.x, a.y)
      });
      a.length && (c[0] = "M", d &&
      c.push("Z"));
      return c
    };
    c.prototype.toLineSegments = function (a) {
      var d = [], c = !0;
      q(a, function (a) {
        d.push(c ? "M" : "L", a.x, a.y);
        c = !c
      });
      return d
    };
    c.prototype.face3d = function (a) {
      var d = this, c = this.createElement("path");
      c.vertexes = [];
      c.insidePlotArea = !1;
      c.enabled = !0;
      p(c, "attr", function (a, c) {
        if ("object" === typeof c && (w(c.enabled) || w(c.vertexes) || w(
            c.insidePlotArea))) {
          this.enabled = n(c.enabled, this.enabled);
          this.vertexes = n(c.vertexes, this.vertexes);
          this.insidePlotArea = n(c.insidePlotArea, this.insidePlotArea);
          delete c.enabled;
          delete c.vertexes;
          delete c.insidePlotArea;
          var B = l(this.vertexes, x[d.chartIndex], this.insidePlotArea),
              C = d.toLinePath(B, !0), B = b.shapeArea(B),
              B = this.enabled && 0 < B ? "visible" : "hidden";
          c.d = C;
          c.visibility = B
        }
        return a.apply(this, [].slice.call(arguments, 1))
      });
      p(c, "animate", function (a, c) {
        if ("object" === typeof c && (w(c.enabled) || w(c.vertexes) || w(
            c.insidePlotArea))) {
          this.enabled = n(c.enabled, this.enabled);
          this.vertexes = n(c.vertexes, this.vertexes);
          this.insidePlotArea = n(c.insidePlotArea, this.insidePlotArea);
          delete c.enabled;
          delete c.vertexes;
          delete c.insidePlotArea;
          var B = l(this.vertexes, x[d.chartIndex], this.insidePlotArea),
              C = d.toLinePath(B, !0), B = b.shapeArea(B),
              B = this.enabled && 0 < B ? "visible" : "hidden";
          c.d = C;
          this.attr("visibility", B)
        }
        return a.apply(this, [].slice.call(arguments, 1))
      });
      return c.attr(a)
    };
    c.prototype.polyhedron = function (a) {
      var c = this, d = this.g(), b = d.destroy;
      d.faces = [];
      d.destroy = function () {
        for (var a = 0; a < d.faces.length; a++) {
          d.faces[a].destroy();
        }
        return b.call(this)
      };
      p(d, "attr", function (a, b, C, B, k) {
        if ("object" === typeof b &&
            w(b.faces)) {
          for (; d.faces.length > b.faces.length;) {
            d.faces.pop().destroy();
          }
          for (; d.faces.length < b.faces.length;) {
            d.faces.push(
                c.face3d().add(d));
          }
          for (var e = 0; e < b.faces.length; e++) {
            d.faces[e].attr(b.faces[e],
                null, B, k);
          }
          delete b.faces
        }
        return a.apply(this, [].slice.call(arguments, 1))
      });
      p(d, "animate", function (a, b, C, B) {
        if (b && b.faces) {
          for (; d.faces.length > b.faces.length;) {
            d.faces.pop().destroy();
          }
          for (; d.faces.length < b.faces.length;) {
            d.faces.push(
                c.face3d().add(d));
          }
          for (var k = 0; k < b.faces.length; k++) {
            d.faces[k].animate(
                b.faces[k],
                C, B);
          }
          delete b.faces
        }
        return a.apply(this, [].slice.call(arguments, 1))
      });
      return d.attr(a)
    };
    c.prototype.cuboid = function (a) {
      var c = this.g(), b = c.destroy;
      a = this.cuboidPath(a);
      c.front = this.path(a[0]).attr({"class": "highcharts-3d-front"}).add(c);
      c.top = this.path(a[1]).attr({"class": "highcharts-3d-top"}).add(c);
      c.side = this.path(a[2]).attr({"class": "highcharts-3d-side"}).add(c);
      c.fillSetter = function (a) {
        this.front.attr({fill: a});
        this.top.attr({fill: g(a).brighten(.1).get()});
        this.side.attr({fill: g(a).brighten(-.1).get()});
        this.color = a;
        c.fill = a;
        return this
      };
      c.opacitySetter = function (a) {
        this.front.attr({opacity: a});
        this.top.attr({opacity: a});
        this.side.attr({opacity: a});
        return this
      };
      c.attr = function (a, c, b, B) {
        if ("string" === typeof a && "undefined" !== typeof c) {
          var k = a;
          a = {};
          a[k] = c
        }
        if (a.shapeArgs || w(a.x)) {
          a = this.renderer.cuboidPath(
              a.shapeArgs || a), this.front.attr({d: a[0]}), this.top.attr(
              {d: a[1]}), this.side.attr(
              {d: a[2]});
        } else {
          return d.prototype.attr.call(this, a, void 0, b,
              B);
        }
        return this
      };
      c.animate = function (a, c, b) {
        w(a.x) && w(a.y) ?
            (a = this.renderer.cuboidPath(a), this.front.animate({d: a[0]}, c,
                b), this.top.animate({d: a[1]}, c, b), this.side.animate(
                {d: a[2]}, c, b), this.attr({zIndex: -a[3]})) : a.opacity
                ? (this.front.animate(a, c, b), this.top.animate(a, c,
                    b), this.side.animate(a, c, b)) : d.prototype.animate.call(this,
                    a, c, b);
        return this
      };
      c.destroy = function () {
        this.front.destroy();
        this.top.destroy();
        this.side.destroy();
        return b.call(this)
      };
      c.attr({zIndex: -a[3]});
      return c
    };
    b.SVGRenderer.prototype.cuboidPath = function (a) {
      function c(a) {
        return g[a]
      }

      var d =
              a.x, k = a.y, h = a.z, q = a.height, f = a.width, t = a.depth,
          p = x[this.chartIndex], n, G, v = p.options.chart.options3d.alpha,
          m = 0, g = [{x: d, y: k, z: h}, {x: d + f, y: k, z: h},
            {x: d + f, y: k + q, z: h}, {x: d, y: k + q, z: h},
            {x: d, y: k + q, z: h + t}, {x: d + f, y: k + q, z: h + t},
            {x: d + f, y: k, z: h + t}, {x: d, y: k, z: h + t}],
          g = l(g, p, a.insidePlotArea);
      G = function (a, d) {
        var k = [[], -1];
        a = e(a, c);
        d = e(d, c);
        0 > b.shapeArea(a) ? k = [a, 0] : 0 > b.shapeArea(d) && (k = [d, 1]);
        return k
      };
      n = G([3, 2, 1, 0], [7, 6, 5, 4]);
      a = n[0];
      f = n[1];
      n = G([1, 6, 7, 0], [4, 5, 2, 3]);
      q = n[0];
      t = n[1];
      n = G([1, 2, 5, 6], [0, 7, 4, 3]);
      G = n[0];
      n = n[1];
      1 === n ? m += 1E4 * (1E3 - d) : n || (m += 1E4 * d);
      m += 10 * (!t || 0 <= v && 180 >= v || 360 > v && 357.5 < v ? p.plotHeight
          - k : 10 + k);
      1 === f ? m += 100 * h : f || (m += 100 * (1E3 - h));
      m = -Math.round(m);
      return [this.toLinePath(a, !0), this.toLinePath(q, !0),
        this.toLinePath(G, !0), m]
    };
    b.SVGRenderer.prototype.arc3d = function (c) {
      function k(c) {
        var d = !1, b = {};
        c = h(c);
        for (var e in c) {
          -1 !== a(e, t) && (b[e] = c[e], delete c[e], d = !0);
        }
        return d ? b : !1
      }

      var e = this.g(), l = e.renderer, t = "x y r innerR start end".split(" ");
      c = h(c);
      c.alpha = (c.alpha || 0) * u;
      c.beta = (c.beta || 0) * u;
      e.top = l.path();
      e.side1 = l.path();
      e.side2 = l.path();
      e.inn = l.path();
      e.out = l.path();
      e.onAdd = function () {
        var a = e.parentGroup, c = e.attr("class");
        e.top.add(e);
        q(["out", "inn", "side1", "side2"], function (d) {
          e[d].attr({"class": c + " highcharts-3d-side"}).add(a)
        })
      };
      q(["addClass", "removeClass"], function (a) {
        e[a] = function () {
          var c = arguments;
          q(["top", "out", "inn", "side1", "side2"], function (d) {
            e[d][a].apply(e[d], c)
          })
        }
      });
      e.setPaths = function (a) {
        var c = e.renderer.arc3dPath(a), d = 100 * c.zTop;
        e.attribs = a;
        e.top.attr({d: c.top, zIndex: c.zTop});
        e.inn.attr({
          d: c.inn,
          zIndex: c.zInn
        });
        e.out.attr({d: c.out, zIndex: c.zOut});
        e.side1.attr({d: c.side1, zIndex: c.zSide1});
        e.side2.attr({d: c.side2, zIndex: c.zSide2});
        e.zIndex = d;
        e.attr({zIndex: d});
        a.center && (e.top.setRadialReference(a.center), delete a.center)
      };
      e.setPaths(c);
      e.fillSetter = function (a) {
        var c = g(a).brighten(-.1).get();
        this.fill = a;
        this.side1.attr({fill: c});
        this.side2.attr({fill: c});
        this.inn.attr({fill: c});
        this.out.attr({fill: c});
        this.top.attr({fill: a});
        return this
      };
      q(["opacity", "translateX", "translateY", "visibility"],
          function (a) {
            e[a + "Setter"] = function (a, c) {
              e[c] = a;
              q(["out", "inn", "side1", "side2", "top"], function (d) {
                e[d].attr(c, a)
              })
            }
          });
      p(e, "attr", function (a, c) {
        var d;
        "object" === typeof c && (d = k(c)) && (f(e.attribs, d), e.setPaths(
            e.attribs));
        return a.apply(this, [].slice.call(arguments, 1))
      });
      p(e, "animate", function (a, c, d, q) {
        var l, f = this.attribs, p,
            t = "data-" + Math.random().toString(26).substring(2, 9);
        delete c.center;
        delete c.z;
        delete c.depth;
        delete c.alpha;
        delete c.beta;
        p = m(n(d, this.renderer.globalAnimation));
        p.duration && (l =
            k(c), e[t] = 0, c[t] = 1, e[t + "Setter"] = b.noop, l
        && (p.step = function (a, c) {
          function d(a) {
            return f[a] + (n(l[a], f[a]) - f[a]) * c.pos
          }

          c.prop === t && c.elem.setPaths(h(f, {
            x: d("x"),
            y: d("y"),
            r: d("r"),
            innerR: d("innerR"),
            start: d("start"),
            end: d("end")
          }))
        }), d = p);
        return a.call(this, c, d, q)
      });
      e.destroy = function () {
        this.top.destroy();
        this.out.destroy();
        this.inn.destroy();
        this.side1.destroy();
        this.side2.destroy();
        d.prototype.destroy.call(this)
      };
      e.hide = function () {
        this.top.hide();
        this.out.hide();
        this.inn.hide();
        this.side1.hide();
        this.side2.hide()
      };
      e.show = function () {
        this.top.show();
        this.out.show();
        this.inn.show();
        this.side1.show();
        this.side2.show()
      };
      return e
    };
    c.prototype.arc3dPath = function (a) {
      function c(a) {
        a %= 2 * Math.PI;
        a > Math.PI && (a = 2 * Math.PI - a);
        return a
      }

      var d = a.x, b = a.y, e = a.start, k = a.end - .00001, h = a.r,
          q = a.innerR || 0, l = a.depth || 0, f = a.alpha, p = a.beta,
          n = Math.cos(e), t = Math.sin(e);
      a = Math.cos(k);
      var m = Math.sin(k), g = h * Math.cos(p), h = h * Math.cos(f),
          x = q * Math.cos(p), w = q * Math.cos(f), q = l * Math.sin(p),
          u = l * Math.sin(f), l = ["M", d + g * n, b + h * t],
          l = l.concat(z(d, b, g, h, e,
              k, 0, 0)), l = l.concat(["L", d + x * a, b + w * m]),
          l = l.concat(z(d, b, x, w, k, e, 0, 0)), l = l.concat(["Z"]),
          A = 0 < p ? Math.PI / 2 : 0, p = 0 < f ? 0 : Math.PI / 2,
          A = e > -A ? e : k > -A ? -A : e,
          E = k < r - p ? k : e < r - p ? r - p : k, F = 2 * r - p,
          f = ["M", d + g * y(A), b + h * v(A)],
          f = f.concat(z(d, b, g, h, A, E, 0, 0));
      k > F && e < F ? (f = f.concat(
          ["L", d + g * y(E) + q, b + h * v(E) + u]), f = f.concat(
          z(d, b, g, h, E, F, q, u)), f = f.concat(
          ["L", d + g * y(F), b + h * v(F)]), f = f.concat(
          z(d, b, g, h, F, k, 0, 0)), f = f.concat(
          ["L", d + g * y(k) + q, b + h * v(k) + u]), f = f.concat(
          z(d, b, g, h, k, F, q, u)), f = f.concat(
          ["L", d + g * y(F), b + h * v(F)]), f = f.concat(z(d, b,
          g, h, F, E, 0, 0))) : k > r - p && e < r - p && (f = f.concat(
          ["L", d + g * Math.cos(E) + q,
            b + h * Math.sin(E) + u]), f = f.concat(
          z(d, b, g, h, E, k, q, u)), f = f.concat(
          ["L", d + g * Math.cos(k), b + h * Math.sin(k)]), f = f.concat(
          z(d, b, g, h, k, E, 0, 0)));
      f = f.concat(["L", d + g * Math.cos(E) + q, b + h * Math.sin(E) + u]);
      f = f.concat(z(d, b, g, h, E, A, q, u));
      f = f.concat(["Z"]);
      p = ["M", d + x * n, b + w * t];
      p = p.concat(z(d, b, x, w, e, k, 0, 0));
      p = p.concat(["L", d + x * Math.cos(k) + q, b + w * Math.sin(k) + u]);
      p = p.concat(z(d, b, x, w, k, e, q, u));
      p = p.concat(["Z"]);
      n = ["M", d + g * n, b + h * t, "L", d + g * n + q, b + h * t + u, "L",
        d + x *
        n + q, b + w * t + u, "L", d + x * n, b + w * t, "Z"];
      d = ["M", d + g * a, b + h * m, "L", d + g * a + q, b + h * m + u, "L",
        d + x * a + q, b + w * m + u, "L", d + x * a, b + w * m, "Z"];
      m = Math.atan2(u, -q);
      b = Math.abs(k + m);
      a = Math.abs(e + m);
      e = Math.abs((e + k) / 2 + m);
      b = c(b);
      a = c(a);
      e = c(e);
      e *= 1E5;
      k = 1E5 * a;
      b *= 1E5;
      return {
        top: l,
        zTop: 1E5 * Math.PI + 1,
        out: f,
        zOut: Math.max(e, k, b),
        inn: p,
        zInn: Math.max(e, k, b),
        side1: n,
        zSide1: .99 * b,
        side2: d,
        zSide2: .99 * k
      }
    }
  })(A);
  (function (b) {
    function z(b, f) {
      var a = b.plotLeft, e = b.plotWidth + a, h = b.plotTop,
          q = b.plotHeight + h, n = a + b.plotWidth / 2,
          d = h + b.plotHeight / 2, c = Number.MAX_VALUE,
          p = -Number.MAX_VALUE, k = Number.MAX_VALUE, t = -Number.MAX_VALUE, g,
          m = 1;
      g = [{x: a, y: h, z: 0}, {x: a, y: h, z: f}];
      v([0, 1], function (a) {
        g.push({x: e, y: g[a].y, z: g[a].z})
      });
      v([0, 1, 2, 3], function (a) {
        g.push({x: g[a].x, y: q, z: g[a].z})
      });
      g = x(g, b, !1);
      v(g, function (a) {
        c = Math.min(c, a.x);
        p = Math.max(p, a.x);
        k = Math.min(k, a.y);
        t = Math.max(t, a.y)
      });
      a > c && (m = Math.min(m, 1 - Math.abs((a + n) / (c + n)) % 1));
      e < p && (m = Math.min(m, (e - n) / (p - n)));
      h > k && (m = 0 > k ? Math.min(m, (h + d) / (-k + h + d)) : Math.min(m,
          1 - (h + d) / (k + d) % 1));
      q < t && (m = Math.min(m, Math.abs((q - d) / (t - d))));
      return m
    }

    var y = b.addEvent, r = b.Chart, v = b.each, m = b.merge, x = b.perspective,
        g = b.pick, w = b.wrap;
    r.prototype.is3d = function () {
      return this.options.chart.options3d
          && this.options.chart.options3d.enabled
    };
    r.prototype.propsRequireDirtyBox.push("chart.options3d");
    r.prototype.propsRequireUpdateSeries.push("chart.options3d");
    y(r, "afterInit", function () {
      var b = this.options;
      this.is3d() && v(b.series || [], function (f) {
        "scatter" === (f.type || b.chart.type || b.chart.defaultSeriesType)
        && (f.type = "scatter3d")
      })
    });
    y(r, "addSeries", function (b) {
      this.is3d() &&
      "scatter" === b.options.type && (b.options.type = "scatter3d")
    });
    b.wrap(b.Chart.prototype, "isInsidePlot", function (b) {
      return this.is3d() || b.apply(this, [].slice.call(arguments, 1))
    });
    var u = b.getOptions();
    m(!0, u, {
      chart: {
        options3d: {
          enabled: !1,
          alpha: 0,
          beta: 0,
          depth: 100,
          fitToPlot: !0,
          viewDistance: 25,
          axisLabelPosition: null,
          frame: {
            visible: "default",
            size: 1,
            bottom: {},
            top: {},
            left: {},
            right: {},
            back: {},
            front: {}
          }
        }
      }
    });
    y(r, "afterGetContainer", function () {
      this.renderer.definition({
        tagName: "style",
        textContent: ".highcharts-3d-top{filter: url(#highcharts-brighter)}\n.highcharts-3d-side{filter: url(#highcharts-darker)}\n"
      })
    });
    w(r.prototype, "setClassName", function (b) {
      b.apply(this, [].slice.call(arguments, 1));
      this.is3d() && (this.container.className += " highcharts-3d-chart")
    });
    y(b.Chart, "afterSetChartSize", function () {
      var b = this.options.chart.options3d;
      if (this.is3d()) {
        var f = this.inverted, a = this.clipBox, e = this.margin;
        a[f ? "y" : "x"] = -(e[3] || 0);
        a[f ? "x" : "y"] = -(e[0] || 0);
        a[f ? "height" : "width"] = this.chartWidth + (e[3] || 0) + (e[1] || 0);
        a[f ? "width" : "height"] = this.chartHeight + (e[0] || 0) + (e[2]
            || 0);
        this.scale3d = 1;
        !0 === b.fitToPlot && (this.scale3d =
            z(this, b.depth));
        this.frame3d = this.get3dFrame()
      }
    });
    y(r, "beforeRedraw", function () {
      this.is3d() && (this.isDirtyBox = !0)
    });
    y(r, "beforeRender", function () {
      this.is3d() && (this.frame3d = this.get3dFrame())
    });
    w(r.prototype, "renderSeries", function (b) {
      var f = this.series.length;
      if (this.is3d()) {
        for (;
            f--;) {
          b = this.series[f], b.translate(), b.render();
        }
      } else {
        b.call(this)
      }
    });
    y(r, "afterDrawChartBox", function () {
      if (this.is3d()) {
        var q = this.renderer, f = this.options.chart.options3d,
            a = this.get3dFrame(), e = this.plotLeft, h = this.plotLeft +
                this.plotWidth, l = this.plotTop,
            n = this.plotTop + this.plotHeight, f = f.depth,
            d = e - (a.left.visible ? a.left.size : 0),
            c = h + (a.right.visible ? a.right.size : 0),
            p = l - (a.top.visible ? a.top.size : 0),
            k = n + (a.bottom.visible ? a.bottom.size : 0),
            t = 0 - (a.front.visible ? a.front.size : 0),
            g = f + (a.back.visible ? a.back.size : 0),
            m = this.hasRendered ? "animate" : "attr";
        this.frame3d = a;
        this.frameShapes || (this.frameShapes = {
          bottom: q.polyhedron().add(),
          top: q.polyhedron().add(),
          left: q.polyhedron().add(),
          right: q.polyhedron().add(),
          back: q.polyhedron().add(),
          front: q.polyhedron().add()
        });
        this.frameShapes.bottom[m]({
          "class": "highcharts-3d-frame highcharts-3d-frame-bottom",
          zIndex: a.bottom.frontFacing ? -1E3 : 1E3,
          faces: [{
            fill: b.color(a.bottom.color).brighten(.1).get(),
            vertexes: [{x: d, y: k, z: t}, {x: c, y: k, z: t},
              {x: c, y: k, z: g}, {x: d, y: k, z: g}],
            enabled: a.bottom.visible
          }, {
            fill: b.color(a.bottom.color).brighten(.1).get(),
            vertexes: [{x: e, y: n, z: f}, {x: h, y: n, z: f},
              {x: h, y: n, z: 0}, {x: e, y: n, z: 0}],
            enabled: a.bottom.visible
          }, {
            fill: b.color(a.bottom.color).brighten(-.1).get(),
            vertexes: [{
              x: d,
              y: k, z: t
            }, {x: d, y: k, z: g}, {x: e, y: n, z: f}, {x: e, y: n, z: 0}],
            enabled: a.bottom.visible && !a.left.visible
          }, {
            fill: b.color(a.bottom.color).brighten(-.1).get(),
            vertexes: [{x: c, y: k, z: g}, {x: c, y: k, z: t},
              {x: h, y: n, z: 0}, {x: h, y: n, z: f}],
            enabled: a.bottom.visible && !a.right.visible
          }, {
            fill: b.color(a.bottom.color).get(),
            vertexes: [{x: c, y: k, z: t}, {x: d, y: k, z: t},
              {x: e, y: n, z: 0}, {x: h, y: n, z: 0}],
            enabled: a.bottom.visible && !a.front.visible
          }, {
            fill: b.color(a.bottom.color).get(),
            vertexes: [{x: d, y: k, z: g}, {x: c, y: k, z: g},
              {x: h, y: n, z: f}, {x: e, y: n, z: f}],
            enabled: a.bottom.visible && !a.back.visible
          }]
        });
        this.frameShapes.top[m]({
          "class": "highcharts-3d-frame highcharts-3d-frame-top",
          zIndex: a.top.frontFacing ? -1E3 : 1E3,
          faces: [{
            fill: b.color(a.top.color).brighten(.1).get(),
            vertexes: [{x: d, y: p, z: g}, {x: c, y: p, z: g},
              {x: c, y: p, z: t}, {x: d, y: p, z: t}],
            enabled: a.top.visible
          }, {
            fill: b.color(a.top.color).brighten(.1).get(),
            vertexes: [{x: e, y: l, z: 0}, {x: h, y: l, z: 0},
              {x: h, y: l, z: f}, {x: e, y: l, z: f}],
            enabled: a.top.visible
          }, {
            fill: b.color(a.top.color).brighten(-.1).get(),
            vertexes: [{
              x: d, y: p,
              z: g
            }, {x: d, y: p, z: t}, {x: e, y: l, z: 0}, {x: e, y: l, z: f}],
            enabled: a.top.visible && !a.left.visible
          }, {
            fill: b.color(a.top.color).brighten(-.1).get(),
            vertexes: [{x: c, y: p, z: t}, {x: c, y: p, z: g},
              {x: h, y: l, z: f}, {x: h, y: l, z: 0}],
            enabled: a.top.visible && !a.right.visible
          }, {
            fill: b.color(a.top.color).get(),
            vertexes: [{x: d, y: p, z: t}, {x: c, y: p, z: t},
              {x: h, y: l, z: 0}, {x: e, y: l, z: 0}],
            enabled: a.top.visible && !a.front.visible
          }, {
            fill: b.color(a.top.color).get(),
            vertexes: [{x: c, y: p, z: g}, {x: d, y: p, z: g},
              {x: e, y: l, z: f}, {x: h, y: l, z: f}],
            enabled: a.top.visible &&
                !a.back.visible
          }]
        });
        this.frameShapes.left[m]({
          "class": "highcharts-3d-frame highcharts-3d-frame-left",
          zIndex: a.left.frontFacing ? -1E3 : 1E3,
          faces: [{
            fill: b.color(a.left.color).brighten(.1).get(),
            vertexes: [{x: d, y: k, z: t}, {x: e, y: n, z: 0},
              {x: e, y: n, z: f}, {x: d, y: k, z: g}],
            enabled: a.left.visible && !a.bottom.visible
          }, {
            fill: b.color(a.left.color).brighten(.1).get(),
            vertexes: [{x: d, y: p, z: g}, {x: e, y: l, z: f},
              {x: e, y: l, z: 0}, {x: d, y: p, z: t}],
            enabled: a.left.visible && !a.top.visible
          }, {
            fill: b.color(a.left.color).brighten(-.1).get(),
            vertexes: [{x: d, y: k, z: g}, {x: d, y: p, z: g},
              {x: d, y: p, z: t}, {x: d, y: k, z: t}], enabled: a.left.visible
          }, {
            fill: b.color(a.left.color).brighten(-.1).get(),
            vertexes: [{x: e, y: l, z: f}, {x: e, y: n, z: f},
              {x: e, y: n, z: 0}, {x: e, y: l, z: 0}],
            enabled: a.left.visible
          }, {
            fill: b.color(a.left.color).get(),
            vertexes: [{x: d, y: k, z: t}, {x: d, y: p, z: t},
              {x: e, y: l, z: 0}, {x: e, y: n, z: 0}],
            enabled: a.left.visible && !a.front.visible
          }, {
            fill: b.color(a.left.color).get(),
            vertexes: [{x: d, y: p, z: g}, {x: d, y: k, z: g},
              {x: e, y: n, z: f}, {x: e, y: l, z: f}],
            enabled: a.left.visible && !a.back.visible
          }]
        });
        this.frameShapes.right[m]({
          "class": "highcharts-3d-frame highcharts-3d-frame-right",
          zIndex: a.right.frontFacing ? -1E3 : 1E3,
          faces: [{
            fill: b.color(a.right.color).brighten(.1).get(),
            vertexes: [{x: c, y: k, z: g}, {x: h, y: n, z: f},
              {x: h, y: n, z: 0}, {x: c, y: k, z: t}],
            enabled: a.right.visible && !a.bottom.visible
          }, {
            fill: b.color(a.right.color).brighten(.1).get(),
            vertexes: [{x: c, y: p, z: t}, {x: h, y: l, z: 0},
              {x: h, y: l, z: f}, {x: c, y: p, z: g}],
            enabled: a.right.visible && !a.top.visible
          }, {
            fill: b.color(a.right.color).brighten(-.1).get(),
            vertexes: [{
              x: h,
              y: l, z: 0
            }, {x: h, y: n, z: 0}, {x: h, y: n, z: f}, {x: h, y: l, z: f}],
            enabled: a.right.visible
          }, {
            fill: b.color(a.right.color).brighten(-.1).get(),
            vertexes: [{x: c, y: k, z: t}, {x: c, y: p, z: t},
              {x: c, y: p, z: g}, {x: c, y: k, z: g}],
            enabled: a.right.visible
          }, {
            fill: b.color(a.right.color).get(),
            vertexes: [{x: c, y: p, z: t}, {x: c, y: k, z: t},
              {x: h, y: n, z: 0}, {x: h, y: l, z: 0}],
            enabled: a.right.visible && !a.front.visible
          }, {
            fill: b.color(a.right.color).get(),
            vertexes: [{x: c, y: k, z: g}, {x: c, y: p, z: g},
              {x: h, y: l, z: f}, {x: h, y: n, z: f}],
            enabled: a.right.visible && !a.back.visible
          }]
        });
        this.frameShapes.back[m]({
          "class": "highcharts-3d-frame highcharts-3d-frame-back",
          zIndex: a.back.frontFacing ? -1E3 : 1E3,
          faces: [{
            fill: b.color(a.back.color).brighten(.1).get(),
            vertexes: [{x: c, y: k, z: g}, {x: d, y: k, z: g},
              {x: e, y: n, z: f}, {x: h, y: n, z: f}],
            enabled: a.back.visible && !a.bottom.visible
          }, {
            fill: b.color(a.back.color).brighten(.1).get(),
            vertexes: [{x: d, y: p, z: g}, {x: c, y: p, z: g},
              {x: h, y: l, z: f}, {x: e, y: l, z: f}],
            enabled: a.back.visible && !a.top.visible
          }, {
            fill: b.color(a.back.color).brighten(-.1).get(),
            vertexes: [{
              x: d, y: k,
              z: g
            }, {x: d, y: p, z: g}, {x: e, y: l, z: f}, {x: e, y: n, z: f}],
            enabled: a.back.visible && !a.left.visible
          }, {
            fill: b.color(a.back.color).brighten(-.1).get(),
            vertexes: [{x: c, y: p, z: g}, {x: c, y: k, z: g},
              {x: h, y: n, z: f}, {x: h, y: l, z: f}],
            enabled: a.back.visible && !a.right.visible
          }, {
            fill: b.color(a.back.color).get(),
            vertexes: [{x: e, y: l, z: f}, {x: h, y: l, z: f},
              {x: h, y: n, z: f}, {x: e, y: n, z: f}],
            enabled: a.back.visible
          }, {
            fill: b.color(a.back.color).get(),
            vertexes: [{x: d, y: k, z: g}, {x: c, y: k, z: g},
              {x: c, y: p, z: g}, {x: d, y: p, z: g}],
            enabled: a.back.visible
          }]
        });
        this.frameShapes.front[m]({
          "class": "highcharts-3d-frame highcharts-3d-frame-front",
          zIndex: a.front.frontFacing ? -1E3 : 1E3,
          faces: [{
            fill: b.color(a.front.color).brighten(.1).get(),
            vertexes: [{x: d, y: k, z: t}, {x: c, y: k, z: t},
              {x: h, y: n, z: 0}, {x: e, y: n, z: 0}],
            enabled: a.front.visible && !a.bottom.visible
          }, {
            fill: b.color(a.front.color).brighten(.1).get(),
            vertexes: [{x: c, y: p, z: t}, {x: d, y: p, z: t},
              {x: e, y: l, z: 0}, {x: h, y: l, z: 0}],
            enabled: a.front.visible && !a.top.visible
          }, {
            fill: b.color(a.front.color).brighten(-.1).get(),
            vertexes: [{x: d, y: p, z: t}, {x: d, y: k, z: t},
              {x: e, y: n, z: 0}, {x: e, y: l, z: 0}],
            enabled: a.front.visible && !a.left.visible
          },
            {
              fill: b.color(a.front.color).brighten(-.1).get(),
              vertexes: [{x: c, y: k, z: t}, {x: c, y: p, z: t},
                {x: h, y: l, z: 0}, {x: h, y: n, z: 0}],
              enabled: a.front.visible && !a.right.visible
            }, {
              fill: b.color(a.front.color).get(),
              vertexes: [{x: h, y: l, z: 0}, {x: e, y: l, z: 0},
                {x: e, y: n, z: 0}, {x: h, y: n, z: 0}],
              enabled: a.front.visible
            }, {
              fill: b.color(a.front.color).get(),
              vertexes: [{x: c, y: k, z: t}, {x: d, y: k, z: t},
                {x: d, y: p, z: t}, {x: c, y: p, z: t}],
              enabled: a.front.visible
            }]
        })
      }
    });
    r.prototype.retrieveStacks = function (b) {
      var f = this.series, a = {}, e, h = 1;
      v(this.series,
          function (l) {
            e = g(l.options.stack, b ? 0 : f.length - 1 - l.index);
            a[e] ? a[e].series.push(l) : (a[e] = {
              series: [l],
              position: h
            }, h++)
          });
      a.totalStacks = h + 1;
      return a
    };
    r.prototype.get3dFrame = function () {
      var q = this, f = q.options.chart.options3d, a = f.frame, e = q.plotLeft,
          h = q.plotLeft + q.plotWidth, l = q.plotTop,
          n = q.plotTop + q.plotHeight, d = f.depth, c = function (a) {
            a = b.shapeArea3d(a, q);
            return .5 < a ? 1 : -.5 > a ? -1 : 0
          }, p = c([{x: e, y: n, z: d}, {x: h, y: n, z: d}, {x: h, y: n, z: 0},
            {x: e, y: n, z: 0}]), k = c(
              [{x: e, y: l, z: 0}, {x: h, y: l, z: 0}, {x: h, y: l, z: d},
                {x: e, y: l, z: d}]), t =
              c([{x: e, y: l, z: 0}, {x: e, y: l, z: d}, {x: e, y: n, z: d},
                {x: e, y: n, z: 0}]), m = c(
              [{x: h, y: l, z: d}, {x: h, y: l, z: 0}, {x: h, y: n, z: 0},
                {x: h, y: n, z: d}]), w = c(
              [{x: e, y: n, z: 0}, {x: h, y: n, z: 0}, {x: h, y: l, z: 0},
                {x: e, y: l, z: 0}]), c = c(
              [{x: e, y: l, z: d}, {x: h, y: l, z: d}, {x: h, y: n, z: d},
                {x: e, y: n, z: d}]), u = !1, r = !1, y = !1, z = !1;
      v([].concat(q.xAxis, q.yAxis, q.zAxis), function (a) {
        a && (a.horiz ? a.opposite ? r = !0 : u = !0 : a.opposite ? z = !0
            : y = !0)
      });
      var A = function (a, c, d) {
        for (var b = ["size", "color", "visible"], e = {}, k = 0; k < b.length;
            k++) {
          for (var h = b[k], f = 0; f < a.length; f++) {
            if ("object" ===
                typeof a[f]) {
              var p = a[f][h];
              if (void 0 !== p && null !== p) {
                e[h] = p;
                break
              }
            }
          }
        }
        a = d;
        !0 === e.visible || !1 === e.visible ? a = e.visible : "auto"
            === e.visible && (a = 0 < c);
        return {
          size: g(e.size, 1),
          color: g(e.color, "none"),
          frontFacing: 0 < c,
          visible: a
        }
      }, a = {
        bottom: A([a.bottom, a.top, a], p, u),
        top: A([a.top, a.bottom, a], k, r),
        left: A([a.left, a.right, a.side, a], t, y),
        right: A([a.right, a.left, a.side, a], m, z),
        back: A([a.back, a.front, a], c, !0),
        front: A([a.front, a.back, a], w, !1)
      };
      "auto" === f.axisLabelPosition ? (m = function (a, c) {
        return a.visible !== c.visible ||
            a.visible && c.visible && a.frontFacing !== c.frontFacing
      }, f = [], m(a.left, a.front) && f.push(
          {y: (l + n) / 2, x: e, z: 0, xDir: {x: 1, y: 0, z: 0}}), m(a.left,
          a.back) && f.push(
          {y: (l + n) / 2, x: e, z: d, xDir: {x: 0, y: 0, z: -1}}), m(a.right,
          a.front) && f.push(
          {y: (l + n) / 2, x: h, z: 0, xDir: {x: 0, y: 0, z: 1}}), m(a.right,
          a.back) && f.push(
          {y: (l + n) / 2, x: h, z: d, xDir: {x: -1, y: 0, z: 0}}), p = [], m(
          a.bottom, a.front) && p.push(
          {x: (e + h) / 2, y: n, z: 0, xDir: {x: 1, y: 0, z: 0}}), m(a.bottom,
          a.back) && p.push(
          {x: (e + h) / 2, y: n, z: d, xDir: {x: -1, y: 0, z: 0}}), k = [], m(
          a.top, a.front) && k.push({
        x: (e +
            h) / 2, y: l, z: 0, xDir: {x: 1, y: 0, z: 0}
      }), m(a.top, a.back) && k.push(
          {x: (e + h) / 2, y: l, z: d, xDir: {x: -1, y: 0, z: 0}}), t = [], m(
          a.bottom, a.left) && t.push(
          {z: (0 + d) / 2, y: n, x: e, xDir: {x: 0, y: 0, z: -1}}), m(a.bottom,
          a.right) && t.push(
          {z: (0 + d) / 2, y: n, x: h, xDir: {x: 0, y: 0, z: 1}}), n = [], m(
          a.top, a.left) && n.push(
          {z: (0 + d) / 2, y: l, x: e, xDir: {x: 0, y: 0, z: -1}}), m(a.top,
          a.right) && n.push({
        z: (0 + d) / 2,
        y: l,
        x: h,
        xDir: {x: 0, y: 0, z: 1}
      }), e = function (a, c, d) {
        if (0 === a.length) {
          return null;
        }
        if (1 === a.length) {
          return a[0];
        }
        for (var b = 0, e = x(a, q, !1), k = 1; k < e.length; k++) {
          d * e[k][c] >
          d * e[b][c] ? b = k : d * e[k][c] === d * e[b][c] && e[k].z < e[b].z
              && (b = k);
        }
        return a[b]
      }, a.axes = {
        y: {left: e(f, "x", -1), right: e(f, "x", 1)},
        x: {top: e(k, "y", -1), bottom: e(p, "y", 1)},
        z: {top: e(n, "y", -1), bottom: e(t, "y", 1)}
      }) : a.axes = {
        y: {
          left: {x: e, z: 0, xDir: {x: 1, y: 0, z: 0}},
          right: {x: h, z: 0, xDir: {x: 0, y: 0, z: 1}}
        },
        x: {
          top: {y: l, z: 0, xDir: {x: 1, y: 0, z: 0}},
          bottom: {y: n, z: 0, xDir: {x: 1, y: 0, z: 0}}
        },
        z: {
          top: {
            x: y ? h : e,
            y: l,
            xDir: y ? {x: 0, y: 0, z: 1} : {x: 0, y: 0, z: -1}
          },
          bottom: {
            x: y ? h : e,
            y: n,
            xDir: y ? {x: 0, y: 0, z: 1} : {x: 0, y: 0, z: -1}
          }
        }
      };
      return a
    };
    b.Fx.prototype.matrixSetter =
        function () {
          var g;
          if (1 > this.pos && (b.isArray(this.start) || b.isArray(this.end))) {
            var f = this.start || [1, 0, 0, 1, 0, 0],
                a = this.end || [1, 0, 0, 1, 0, 0];
            g = [];
            for (var e = 0; 6 > e; e++) {
              g.push(
                  this.pos * a[e] + (1 - this.pos) * f[e])
            }
          } else {
            g = this.end;
          }
          this.elem.attr(this.prop, g, null, !0)
        }
  })(A);
  (function (b) {
    function z(d, c, b) {
      if (!d.chart.is3d() || "colorAxis" === d.coll) {
        return c;
      }
      var k = d.chart, h = x * k.options.chart.options3d.alpha,
          f = x * k.options.chart.options3d.beta,
          p = a(b && d.options.title.position3d, d.options.labels.position3d);
      b = a(b && d.options.title.skew3d,
          d.options.labels.skew3d);
      var g = k.frame3d, l = k.plotLeft, n = k.plotWidth + l, m = k.plotTop,
          v = k.plotHeight + m, k = !1, u = 0, w = 0, r = {x: 0, y: 1, z: 0};
      c = d.swapZ({x: c.x, y: c.y, z: 0});
      if (d.isZAxis) {
        if (d.opposite) {
          if (null === g.axes.z.top) {
            return {};
          }
          w = c.y - m;
          c.x = g.axes.z.top.x;
          c.y = g.axes.z.top.y;
          l = g.axes.z.top.xDir;
          k = !g.top.frontFacing
        } else {
          if (null === g.axes.z.bottom) {
            return {};
          }
          w = c.y - v;
          c.x = g.axes.z.bottom.x;
          c.y = g.axes.z.bottom.y;
          l = g.axes.z.bottom.xDir;
          k = !g.bottom.frontFacing
        }
      } else if (d.horiz) {
        if (d.opposite) {
          if (null === g.axes.x.top) {
            return {};
          }
          w = c.y - m;
          c.y = g.axes.x.top.y;
          c.z = g.axes.x.top.z;
          l = g.axes.x.top.xDir;
          k = !g.top.frontFacing
        } else {
          if (null === g.axes.x.bottom) {
            return {};
          }
          w = c.y - v;
          c.y = g.axes.x.bottom.y;
          c.z = g.axes.x.bottom.z;
          l = g.axes.x.bottom.xDir;
          k = !g.bottom.frontFacing
        }
      } else if (d.opposite) {
        if (null === g.axes.y.right) {
          return {};
        }
        u = c.x - n;
        c.x = g.axes.y.right.x;
        c.z = g.axes.y.right.z;
        l = g.axes.y.right.xDir;
        l = {x: l.z, y: l.y, z: -l.x}
      } else {
        if (null === g.axes.y.left) {
          return {};
        }
        u = c.x - l;
        c.x = g.axes.y.left.x;
        c.z = g.axes.y.left.z;
        l = g.axes.y.left.xDir
      }
      "chart" !== p && ("flap" ===
      p ? d.horiz ? (f = Math.sin(h), h = Math.cos(h), d.opposite && (f = -f), k
      && (f = -f), r = {x: l.z * f, y: h, z: -l.x * f}) : l = {
        x: Math.cos(f),
        y: 0,
        z: Math.sin(f)
      } : "ortho" === p ? d.horiz ? (r = Math.cos(h), p = Math.sin(f)
          * r, h = -Math.sin(h), f = -r * Math.cos(f), r = {
        x: l.y * f - l.z * h, y: l.z * p - l.x * f, z: l.x * h - l.y * p
      }, h = 1 / Math.sqrt(r.x * r.x + r.y * r.y + r.z * r.z), k
      && (h = -h), r = {x: h * r.x, y: h * r.y, z: h * r.z}) : l = {
        x: Math.cos(f), y: 0, z: Math.sin(f)
      } : d.horiz ? r = {
        x: Math.sin(f) * Math.sin(h),
        y: Math.cos(h),
        z: -Math.cos(f) * Math.sin(h)
      } : l = {x: Math.cos(f), y: 0, z: Math.sin(f)});
      c.x += u * l.x + w *
          r.x;
      c.y += u * l.y + w * r.y;
      c.z += u * l.z + w * r.z;
      k = q([c], d.chart)[0];
      b && (0 > e(q([c, {x: c.x + l.x, y: c.y + l.y, z: c.z + l.z},
        {x: c.x + r.x, y: c.y + r.y, z: c.z + r.z}], d.chart)) && (l = {
        x: -l.x,
        y: -l.y,
        z: -l.z
      }), d = q(
          [{x: c.x, y: c.y, z: c.z}, {x: c.x + l.x, y: c.y + l.y, z: c.z + l.z},
            {x: c.x + r.x, y: c.y + r.y, z: c.z + r.z}],
          d.chart), k.matrix = [d[1].x - d[0].x, d[1].y - d[0].y,
        d[2].x - d[0].x, d[2].y - d[0].y, k.x, k.y], k.matrix[4] -= k.x
          * k.matrix[0] + k.y * k.matrix[2], k.matrix[5] -= k.x * k.matrix[1]
          + k.y * k.matrix[3]);
      return k
    }

    var y, r = b.addEvent, v = b.Axis, m = b.Chart, x = b.deg2rad, g = b.each,
        w = b.extend, u = b.merge, q = b.perspective, f = b.perspective3D,
        a = b.pick, e = b.shapeArea, h = b.splat, l = b.Tick, n = b.wrap;
    u(!0, v.prototype.defaultOptions, {
      labels: {position3d: "offset", skew3d: !1},
      title: {position3d: null, skew3d: null}
    });
    r(v, "afterSetOptions", function () {
      var d;
      this.chart.is3d && this.chart.is3d() && "colorAxis" !== this.coll
      && (d = this.options, d.tickWidth = a(d.tickWidth,
          0), d.gridLineWidth = a(d.gridLineWidth, 1))
    });
    n(v.prototype, "getPlotLinePath", function (a) {
      var c = a.apply(this, [].slice.call(arguments, 1));
      if (!this.chart.is3d() ||
          "colorAxis" === this.coll || null === c) {
        return c;
      }
      var d = this.chart, b = d.options.chart.options3d,
          b = this.isZAxis ? d.plotWidth : b.depth, d = d.frame3d,
          c = [this.swapZ({x: c[1], y: c[2], z: 0}),
            this.swapZ({x: c[1], y: c[2], z: b}),
            this.swapZ({x: c[4], y: c[5], z: 0}),
            this.swapZ({x: c[4], y: c[5], z: b})], b = [];
      this.horiz ? (this.isZAxis ? (d.left.visible && b.push(c[0],
          c[2]), d.right.visible && b.push(c[1], c[3])) : (d.front.visible
      && b.push(c[0], c[2]), d.back.visible && b.push(c[1],
          c[3])), d.top.visible && b.push(c[0], c[1]), d.bottom.visible
      && b.push(c[2],
          c[3])) : (d.front.visible && b.push(c[0], c[2]), d.back.visible
      && b.push(c[1], c[3]), d.left.visible && b.push(c[0],
          c[1]), d.right.visible && b.push(c[2], c[3]));
      b = q(b, this.chart, !1);
      return this.chart.renderer.toLineSegments(b)
    });
    n(v.prototype, "getLinePath", function (a) {
      return this.chart.is3d() && "colorAxis" !== this.coll ? [] : a.apply(this,
          [].slice.call(arguments, 1))
    });
    n(v.prototype, "getPlotBandPath", function (a) {
      if (!this.chart.is3d() || "colorAxis" === this.coll) {
        return a.apply(this,
            [].slice.call(arguments, 1));
      }
      var c = arguments,
          d = c[2], b = [], c = this.getPlotLinePath(c[1]),
          d = this.getPlotLinePath(d);
      if (c && d) {
        for (var e = 0; e < c.length; e += 6) {
          b.push("M", c[e + 1],
              c[e + 2], "L", c[e + 4], c[e + 5], "L", d[e + 4], d[e + 5], "L",
              d[e + 1], d[e + 2], "Z");
        }
      }
      return b
    });
    n(l.prototype, "getMarkPath", function (a) {
      var c = a.apply(this, [].slice.call(arguments, 1)),
          c = [z(this.axis, {x: c[1], y: c[2], z: 0}),
            z(this.axis, {x: c[4], y: c[5], z: 0})];
      return this.axis.chart.renderer.toLineSegments(c)
    });
    r(l, "afterGetLabelPosition", function (a) {
      w(a.pos, z(this.axis, a.pos))
    });
    n(v.prototype, "getTitlePosition",
        function (a) {
          var c = a.apply(this, [].slice.call(arguments, 1));
          return z(this, c, !0)
        });
    r(v, "drawCrosshair", function (a) {
      this.chart.is3d() && "colorAxis" !== this.coll && a.point
      && (a.point.crosshairPos = this.isXAxis ? a.point.axisXpos : this.len
          - a.point.axisYpos)
    });
    r(v, "destroy", function () {
      g(["backFrame", "bottomFrame", "sideFrame"], function (a) {
        this[a] && (this[a] = this[a].destroy())
      }, this)
    });
    v.prototype.swapZ = function (a, c) {
      return this.isZAxis ? (c = c ? 0 : this.chart.plotLeft, {
        x: c + a.z,
        y: a.y,
        z: a.x - c
      }) : a
    };
    y = b.ZAxis = function () {
      this.init.apply(this,
          arguments)
    };
    w(y.prototype, v.prototype);
    w(y.prototype, {
      isZAxis: !0, setOptions: function (a) {
        a = u({offset: 0, lineWidth: 0}, a);
        v.prototype.setOptions.call(this, a);
        this.coll = "zAxis"
      }, setAxisSize: function () {
        v.prototype.setAxisSize.call(this);
        this.width = this.len = this.chart.options.chart.options3d.depth;
        this.right = this.chart.chartWidth - this.width - this.left
      }, getSeriesExtremes: function () {
        var b = this, c = b.chart;
        b.hasVisibleSeries = !1;
        b.dataMin = b.dataMax = b.ignoreMinPadding = b.ignoreMaxPadding = null;
        b.buildStacks && b.buildStacks();
        g(b.series, function (d) {
          if (d.visible
              || !c.options.chart.ignoreHiddenSeries) {
            b.hasVisibleSeries = !0, d = d.zData, d.length
            && (b.dataMin = Math.min(a(b.dataMin, d[0]),
                Math.min.apply(null, d)), b.dataMax = Math.max(
                a(b.dataMax, d[0]),
                Math.max.apply(null, d)))
          }
        })
      }
    });
    r(m, "afterGetAxes", function () {
      var a = this, c = this.options, c = c.zAxis = h(c.zAxis || {});
      a.is3d() && (this.zAxis = [], g(c, function (c, b) {
        c.index = b;
        c.isX = !0;
        (new y(a, c)).setScale()
      }))
    });
    n(v.prototype, "getSlotWidth", function (b, c) {
      if (this.chart.is3d() && c && c.label && this.categories &&
          this.chart.frameShapes) {
        var d = this.chart, e = this.ticks,
            h = this.gridGroup.element.childNodes[0].getBBox(),
            l = d.frameShapes.left.getBBox(), g = d.options.chart.options3d,
            d = {
              x: d.plotWidth / 2,
              y: d.plotHeight / 2,
              z: g.depth / 2,
              vd: a(g.depth, 1) * a(g.viewDistance, 0)
            }, q, n, g = c.pos, m = e[g - 1], e = e[g + 1];
        0 !== g && m && m.label.xy && (q = f(
            {x: m.label.xy.x, y: m.label.xy.y, z: null}, d, d.vd));
        e && e.label.xy && (n = f({x: e.label.xy.x, y: e.label.xy.y, z: null},
            d, d.vd));
        e = {x: c.label.xy.x, y: c.label.xy.y, z: null};
        e = f(e, d, d.vd);
        return Math.abs(q ? e.x - q.x :
            n ? n.x - e.x : h.x - l.x)
      }
      return b.apply(this, [].slice.call(arguments, 1))
    })
  })(A);
  (function (b) {
    var z = b.addEvent, y = b.perspective, r = b.pick;
    z(b.Series, "afterTranslate", function () {
      this.chart.is3d() && this.translate3dPoints()
    });
    b.Series.prototype.translate3dPoints = function () {
      var b = this.chart, m = r(this.zAxis, b.options.zAxis[0]), x = [], g, w,
          u;
      for (u = 0; u < this.data.length; u++) {
        g = this.data[u], m && m.translate
            ? (w = m.isLog && m.val2lin ? m.val2lin(g.z)
                : g.z, g.plotZ = m.translate(w), g.isInside = g.isInside ? w
                >= m.min && w <= m.max : !1) : g.plotZ =
                0, g.axisXpos = g.plotX, g.axisYpos = g.plotY, g.axisZpos = g.plotZ, x.push(
            {x: g.plotX, y: g.plotY, z: g.plotZ});
      }
      b = y(x, b, !0);
      for (u = 0; u < this.data.length;
          u++) {
        g = this.data[u], m = b[u], g.plotX = m.x, g.plotY = m.y, g.plotZ = m.z
      }
    }
  })(A);
  (function (b) {
    var z = b.addEvent, y = b.each, r = b.perspective, v = b.pick, m = b.Series,
        x = b.seriesTypes, g = b.inArray, w = b.svg, u = b.wrap;
    u(x.column.prototype, "translate", function (b) {
      b.apply(this, [].slice.call(arguments, 1));
      this.chart.is3d() && this.translate3dShapes()
    });
    u(b.Series.prototype, "alignDataLabel", function (b) {
      arguments[3].outside3dPlot =
          arguments[1].outside3dPlot;
      b.apply(this, [].slice.call(arguments, 1))
    });
    u(b.Series.prototype, "justifyDataLabel", function (b) {
      return arguments[2].outside3dPlot ? !1 : b.apply(this,
          [].slice.call(arguments, 1))
    });
    x.column.prototype.translate3dPoints = function () {
    };
    x.column.prototype.translate3dShapes = function () {
      var b = this, f = b.chart, a = b.options, e = a.depth || 25,
          h = (a.stacking ? a.stack || 0 : b.index) * (e + (a.groupZPadding
              || 1)), l = b.borderWidth % 2 ? .5 : 0;
      f.inverted && !b.yAxis.reversed && (l *= -1);
      !1 !== a.grouping && (h = 0);
      h += a.groupZPadding ||
          1;
      y(b.data, function (a) {
        a.outside3dPlot = null;
        if (null !== a.y) {
          var d = a.shapeArgs, c = a.tooltipPos, g;
          y([["x", "width"], ["y", "height"]], function (c) {
            g = d[c[0]] - l;
            0 > g && (d[c[1]] += d[c[0]] + l, d[c[0]] = -l, g = 0);
            g + d[c[1]] > b[c[0] + "Axis"].len && 0 !== d[c[1]]
            && (d[c[1]] = b[c[0] + "Axis"].len - d[c[0]]);
            if (0 !== d[c[1]] && (d[c[0]] >= b[c[0] + "Axis"].len || d[c[0]]
                + d[c[1]] <= l)) {
              for (var e in d) {
                d[e] = 0;
              }
              a.outside3dPlot = !0
            }
          });
          a.shapeType = "cuboid";
          d.z = h;
          d.depth = e;
          d.insidePlotArea = !0;
          c = r([{x: c[0], y: c[1], z: h}], f, !0)[0];
          a.tooltipPos = [c.x, c.y]
        }
      });
      b.z = h
    };
    u(x.column.prototype, "animate", function (b) {
      if (this.chart.is3d()) {
        var f = arguments[1], a = this.yAxis, e = this, h = this.yAxis.reversed;
        w && (f ? y(e.data, function (b) {
          null !== b.y
          && (b.height = b.shapeArgs.height, b.shapey = b.shapeArgs.y, b.shapeArgs.height = 1, h
          || (b.shapeArgs.y = b.stackY ? b.plotY + a.translate(b.stackY)
              : b.plotY + (b.negative ? -b.height : b.height)))
        }) : (y(e.data, function (a) {
          null !== a.y
          && (a.shapeArgs.height = a.height, a.shapeArgs.y = a.shapey, a.graphic
          && a.graphic.animate(a.shapeArgs, e.options.animation))
        }), this.drawDataLabels(),
            e.animate = null))
      } else {
        b.apply(this, [].slice.call(arguments, 1))
      }
    });
    u(x.column.prototype, "plotGroup", function (b, f, a, e, h, g) {
      this.chart.is3d() && g && !this[f] && (this.chart.columnGroup
      || (this.chart.columnGroup = this.chart.renderer.g("columnGroup").add(
          g)), this[f] = this.chart.columnGroup, this.chart.columnGroup.attr(
          this.getPlotBox()), this[f].survive = !0);
      return b.apply(this, Array.prototype.slice.call(arguments, 1))
    });
    u(x.column.prototype, "setVisible", function (b, f) {
      var a = this, e;
      a.chart.is3d() && y(a.data, function (b) {
        e =
            (b.visible = b.options.visible = f = void 0 === f ? !b.visible : f)
                ? "visible" : "hidden";
        a.options.data[g(b, a.data)] = b.options;
        b.graphic && b.graphic.attr({visibility: e})
      });
      b.apply(this, Array.prototype.slice.call(arguments, 1))
    });
    x.column.prototype.handle3dGrouping = !0;
    z(m, "afterInit", function () {
      if (this.chart.is3d() && this.handle3dGrouping) {
        var b = this.options, f = b.grouping, a = b.stacking,
            e = v(this.yAxis.options.reversedStacks, !0), h = 0;
        if (void 0 === f || f) {
          f = this.chart.retrieveStacks(a);
          h = b.stack || 0;
          for (a = 0; a < f[h].series.length &&
          f[h].series[a] !== this; a++) {
            ;
          }
          h = 10 * (f.totalStacks - f[h].position) + (e ? a : -a);
          this.xAxis.reversed || (h = 10 * f.totalStacks - h)
        }
        b.zIndex = h
      }
    });
    u(m.prototype, "alignDataLabel", function (b) {
      if (this.chart.is3d() && ("column" === this.type || "columnrange"
          === this.type)) {
        var f = arguments, a = f[4], f = f[1], e = {x: a.x, y: a.y, z: this.z},
            e = r([e], this.chart, !0)[0];
        a.x = e.x;
        a.y = f.outside3dPlot ? -9E9 : e.y
      }
      b.apply(this, [].slice.call(arguments, 1))
    });
    u(b.StackItem.prototype, "getStackBox", function (g, f) {
      var a = g.apply(this, [].slice.call(arguments,
          1));
      if (f.is3d()) {
        var e = {x: a.x, y: a.y, z: 0}, e = b.perspective([e], f, !0)[0];
        a.x = e.x;
        a.y = e.y
      }
      return a
    })
  })(A);
  (function (b) {
    var z = b.deg2rad, y = b.each, r = b.seriesTypes, v = b.svg;
    b = b.wrap;
    b(r.pie.prototype, "translate", function (b) {
      b.apply(this, [].slice.call(arguments, 1));
      if (this.chart.is3d()) {
        var m = this, g = m.options, r = g.depth || 0,
            u = m.chart.options.chart.options3d, q = u.alpha, f = u.beta,
            a = g.stacking ? (g.stack || 0) * r : m._i * r, a = a + r / 2;
        !1 !== g.grouping && (a = 0);
        y(m.data, function (b) {
          var e = b.shapeArgs;
          b.shapeType = "arc3d";
          e.z = a;
          e.depth =
              .75 * r;
          e.alpha = q;
          e.beta = f;
          e.center = m.center;
          e = (e.end + e.start) / 2;
          b.slicedTranslation = {
            translateX: Math.round(
                Math.cos(e) * g.slicedOffset * Math.cos(q * z)),
            translateY: Math.round(
                Math.sin(e) * g.slicedOffset * Math.cos(q * z))
          }
        })
      }
    });
    b(r.pie.prototype.pointClass.prototype, "haloPath", function (b) {
      var m = arguments;
      return this.series.chart.is3d() ? [] : b.call(this, m[1])
    });
    b(r.pie.prototype, "drawPoints", function (b) {
      b.apply(this, [].slice.call(arguments, 1));
      this.chart.is3d() && y(this.points, function (b) {
        var g = b.graphic;
        if (g) {
          g[b.y &&
          b.visible ? "show" : "hide"]()
        }
      })
    });
    b(r.pie.prototype, "drawDataLabels", function (b) {
      if (this.chart.is3d()) {
        var m = this.chart.options.chart.options3d;
        y(this.data, function (b) {
          var g = b.shapeArgs, r = g.r, q = (g.start + g.end) / 2,
              f = b.labelPos,
              a = -r * (1 - Math.cos((g.alpha || m.alpha) * z)) * Math.sin(q),
              e = r * (Math.cos((g.beta || m.beta) * z) - 1) * Math.cos(q);
          y([0, 2, 4], function (b) {
            f[b] += e;
            f[b + 1] += a
          })
        })
      }
      b.apply(this, [].slice.call(arguments, 1))
    });
    b(r.pie.prototype, "addPoint", function (b) {
      b.apply(this, [].slice.call(arguments, 1));
      this.chart.is3d() &&
      this.update(this.userOptions, !0)
    });
    b(r.pie.prototype, "animate", function (b) {
      if (this.chart.is3d()) {
        var m = arguments[1], g = this.options.animation, r = this.center,
            u = this.group, q = this.markerGroup;
        v && (!0 === g && (g = {}), m
            ? (u.oldtranslateX = u.translateX, u.oldtranslateY = u.translateY, m = {
              translateX: r[0],
              translateY: r[1],
              scaleX: .001,
              scaleY: .001
            }, u.attr(m), q && (q.attrSetters = u.attrSetters, q.attr(m)))
            : (m = {
              translateX: u.oldtranslateX,
              translateY: u.oldtranslateY,
              scaleX: 1,
              scaleY: 1
            }, u.animate(m, g), q && q.animate(m, g), this.animate =
                null))
      } else {
        b.apply(this, [].slice.call(arguments, 1))
      }
    })
  })(A);
  (function (b) {
    var z = b.Point, y = b.seriesType, r = b.seriesTypes;
    y("scatter3d", "scatter",
        {tooltip: {pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3ez: \x3cb\x3e{point.z}\x3c/b\x3e\x3cbr/\x3e"}},
        {
          pointAttribs: function (v) {
            var m = r.scatter.prototype.pointAttribs.apply(this, arguments);
            this.chart.is3d() && v && (m.zIndex = b.pointCameraDistance(v,
                this.chart));
            return m
          }, axisTypes: ["xAxis", "yAxis", "zAxis"], pointArrayMap: ["x",
            "y", "z"], parallelArrays: ["x", "y", "z"], directTouch: !0
        }, {
          applyOptions: function () {
            z.prototype.applyOptions.apply(this, arguments);
            void 0 === this.z && (this.z = 0);
            return this
          }
        })
  })(A)
});
//# sourceMappingURL=highcharts-3d.js.map
