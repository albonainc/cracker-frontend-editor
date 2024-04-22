import { jsx as I, jsxs as Be } from "react/jsx-runtime";
import { Fragment as vo, useState as _t, useEffect as Lt, forwardRef as wo, useRef as yo, useImperativeHandle as xo, useMemo as Me, useCallback as Co } from "react";
(function() {
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}.ce-header[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;display:none;cursor:text}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}")), document.head.appendChild(r);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Eo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', So = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', To = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', Bo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', _o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', Lo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', Io = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
let Mo = class {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: HeaderData, config: HeaderConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: n }) {
    this.api = o, this.readOnly = n, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-header"
    }, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(e) {
    const t = {};
    return typeof e != "object" && (e = {}), t.text = e.text || "", t.level = parseInt(e.level) || this.defaultLevel.number, t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Returns header block tunes config
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number
    }));
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */
  setLevel(e) {
    this.data = {
      level: e,
      text: this.data.text
    };
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */
  merge(e) {
    const t = {
      text: this.data.text + e.text,
      level: this.data.level
    };
    this.data = t;
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Allow Header to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      export: "text",
      // use 'text' property for other blocks
      import: "text"
      // fill 'text' property from other block's export string
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      level: !1,
      text: {}
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const t = this.getTag();
      t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    const e = document.createElement(this.currentLevel.tag);
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
      if (e)
        return e;
      console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
    }
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  /**
   * Available header levels
   *
   * @returns {level[]}
   */
  get levels() {
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: Eo
      },
      {
        number: 2,
        tag: "H2",
        svg: So
      },
      {
        number: 3,
        tag: "H3",
        svg: To
      },
      {
        number: 4,
        tag: "H4",
        svg: Bo
      },
      {
        number: 5,
        tag: "H5",
        svg: _o
      },
      {
        number: 6,
        tag: "H6",
        svg: Lo
      }
    ];
    return this._settings.levels ? e.filter(
      (t) => this._settings.levels.includes(t.number)
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    const t = e.detail.data;
    let o = this.defaultLevel.number;
    switch (t.tagName) {
      case "H1":
        o = 1;
        break;
      case "H2":
        o = 2;
        break;
      case "H3":
        o = 3;
        break;
      case "H4":
        o = 4;
        break;
      case "H5":
        o = 5;
        break;
      case "H6":
        o = 6;
        break;
    }
    this._settings.levels && (o = this._settings.levels.reduce((n, i) => Math.abs(i - o) < Math.abs(n - o) ? i : n)), this.data = {
      level: o,
      text: t.innerHTML
    };
  }
  /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: Io,
      title: "Heading"
    };
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode(`.link-tool{position:relative}.link-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.link-tool__input-holder{position:relative}.link-tool__input-holder--error .link-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.link-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.link-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.link-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.link-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.link-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.link-tool__progress--loaded{width:100%}.link-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.link-tool__content:after{content:"";clear:both;display:table}.link-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.link-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.link-tool__image{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right}.link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.link-tool__title+.link-tool__anchor{margin-top:25px}.link-tool__description{margin:0 0 20px;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.link-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .link-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)), document.head.appendChild(r);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oo(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
(function(r) {
  var e = function() {
    try {
      return !!Symbol.iterator;
    } catch {
      return !1;
    }
  }, t = e(), o = function(l) {
    var u = {
      next: function() {
        var d = l.shift();
        return { done: d === void 0, value: d };
      }
    };
    return t && (u[Symbol.iterator] = function() {
      return u;
    }), u;
  }, n = function(l) {
    return encodeURIComponent(l).replace(/%20/g, "+");
  }, i = function(l) {
    return decodeURIComponent(String(l).replace(/\+/g, " "));
  }, s = function() {
    var l = function(d) {
      Object.defineProperty(this, "_entries", { writable: !0, value: {} });
      var g = typeof d;
      if (g !== "undefined")
        if (g === "string")
          d !== "" && this._fromString(d);
        else if (d instanceof l) {
          var v = this;
          d.forEach(function(m, b) {
            v.append(b, m);
          });
        } else if (d !== null && g === "object")
          if (Object.prototype.toString.call(d) === "[object Array]")
            for (var h = 0; h < d.length; h++) {
              var f = d[h];
              if (Object.prototype.toString.call(f) === "[object Array]" || f.length !== 2)
                this.append(f[0], f[1]);
              else
                throw new TypeError("Expected [string, any] as entry at index " + h + " of URLSearchParams's input");
            }
          else
            for (var p in d)
              d.hasOwnProperty(p) && this.append(p, d[p]);
        else
          throw new TypeError("Unsupported input's type for URLSearchParams");
    }, u = l.prototype;
    u.append = function(d, g) {
      d in this._entries ? this._entries[d].push(String(g)) : this._entries[d] = [String(g)];
    }, u.delete = function(d) {
      delete this._entries[d];
    }, u.get = function(d) {
      return d in this._entries ? this._entries[d][0] : null;
    }, u.getAll = function(d) {
      return d in this._entries ? this._entries[d].slice(0) : [];
    }, u.has = function(d) {
      return d in this._entries;
    }, u.set = function(d, g) {
      this._entries[d] = [String(g)];
    }, u.forEach = function(d, g) {
      var v;
      for (var h in this._entries)
        if (this._entries.hasOwnProperty(h)) {
          v = this._entries[h];
          for (var f = 0; f < v.length; f++)
            d.call(g, v[f], h, this);
        }
    }, u.keys = function() {
      var d = [];
      return this.forEach(function(g, v) {
        d.push(v);
      }), o(d);
    }, u.values = function() {
      var d = [];
      return this.forEach(function(g) {
        d.push(g);
      }), o(d);
    }, u.entries = function() {
      var d = [];
      return this.forEach(function(g, v) {
        d.push([v, g]);
      }), o(d);
    }, t && (u[Symbol.iterator] = u.entries), u.toString = function() {
      var d = [];
      return this.forEach(function(g, v) {
        d.push(n(v) + "=" + n(g));
      }), d.join("&");
    }, r.URLSearchParams = l;
  }, a = function() {
    try {
      var l = r.URLSearchParams;
      return new l("?a=1").toString() === "a=1" && typeof l.prototype.set == "function";
    } catch {
      return !1;
    }
  };
  a() || s();
  var c = r.URLSearchParams.prototype;
  typeof c.sort != "function" && (c.sort = function() {
    var l = this, u = [];
    this.forEach(function(g, v) {
      u.push([v, g]), l._entries || l.delete(v);
    }), u.sort(function(g, v) {
      return g[0] < v[0] ? -1 : g[0] > v[0] ? 1 : 0;
    }), l._entries && (l._entries = {});
    for (var d = 0; d < u.length; d++)
      this.append(u[d][0], u[d][1]);
  }), typeof c._fromString != "function" && Object.defineProperty(c, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(l) {
      if (this._entries)
        this._entries = {};
      else {
        var u = [];
        this.forEach(function(h, f) {
          u.push(f);
        });
        for (var d = 0; d < u.length; d++)
          this.delete(u[d]);
      }
      l = l.replace(/^\?/, "");
      for (var g = l.split("&"), v, d = 0; d < g.length; d++)
        v = g[d].split("="), this.append(
          i(v[0]),
          v.length > 1 ? i(v[1]) : ""
        );
    }
  });
})(
  typeof ke < "u" ? ke : typeof window < "u" ? window : typeof self < "u" ? self : ke
);
(function(r) {
  var e = function() {
    try {
      var n = new r.URL("b", "http://a");
      return n.pathname = "c d", n.href === "http://a/c%20d" && n.searchParams;
    } catch {
      return !1;
    }
  }, t = function() {
    var n = r.URL, i = function(c, l) {
      typeof c != "string" && (c = String(c));
      var u = document, d;
      if (l && (r.location === void 0 || l !== r.location.href)) {
        u = document.implementation.createHTMLDocument(""), d = u.createElement("base"), d.href = l, u.head.appendChild(d);
        try {
          if (d.href.indexOf(l) !== 0)
            throw new Error(d.href);
        } catch (w) {
          throw new Error("URL unable to set base " + l + " due to " + w);
        }
      }
      var g = u.createElement("a");
      g.href = c, d && (u.body.appendChild(g), g.href = g.href);
      var v = u.createElement("input");
      if (v.type = "url", v.value = c, g.protocol === ":" || !/:/.test(g.href) || !v.checkValidity() && !l)
        throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: g
      });
      var h = new r.URLSearchParams(this.search), f = !0, p = !0, m = this;
      ["append", "delete", "set"].forEach(function(w) {
        var x = h[w];
        h[w] = function() {
          x.apply(h, arguments), f && (p = !1, m.search = h.toString(), p = !0);
        };
      }), Object.defineProperty(this, "searchParams", {
        value: h,
        enumerable: !0
      });
      var b = void 0;
      Object.defineProperty(this, "_updateSearchParams", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function() {
          this.search !== b && (b = this.search, p && (f = !1, this.searchParams._fromString(this.search), f = !0));
        }
      });
    }, s = i.prototype, a = function(c) {
      Object.defineProperty(s, c, {
        get: function() {
          return this._anchorElement[c];
        },
        set: function(l) {
          this._anchorElement[c] = l;
        },
        enumerable: !0
      });
    };
    ["hash", "host", "hostname", "port", "protocol"].forEach(function(c) {
      a(c);
    }), Object.defineProperty(s, "search", {
      get: function() {
        return this._anchorElement.search;
      },
      set: function(c) {
        this._anchorElement.search = c, this._updateSearchParams();
      },
      enumerable: !0
    }), Object.defineProperties(s, {
      toString: {
        get: function() {
          var c = this;
          return function() {
            return c.href;
          };
        }
      },
      href: {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, "");
        },
        set: function(c) {
          this._anchorElement.href = c, this._updateSearchParams();
        },
        enumerable: !0
      },
      pathname: {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, "/");
        },
        set: function(c) {
          this._anchorElement.pathname = c;
        },
        enumerable: !0
      },
      origin: {
        get: function() {
          var c = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], l = this._anchorElement.port != c && this._anchorElement.port !== "";
          return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (l ? ":" + this._anchorElement.port : "");
        },
        enumerable: !0
      },
      password: {
        // TODO
        get: function() {
          return "";
        },
        set: function(c) {
        },
        enumerable: !0
      },
      username: {
        // TODO
        get: function() {
          return "";
        },
        set: function(c) {
        },
        enumerable: !0
      }
    }), i.createObjectURL = function(c) {
      return n.createObjectURL.apply(n, arguments);
    }, i.revokeObjectURL = function(c) {
      return n.revokeObjectURL.apply(n, arguments);
    }, r.URL = i;
  };
  if (e() || t(), r.location !== void 0 && !("origin" in r.location)) {
    var o = function() {
      return r.location.protocol + "//" + r.location.hostname + (r.location.port ? ":" + r.location.port : "");
    };
    try {
      Object.defineProperty(r.location, "origin", {
        get: o,
        enumerable: !0
      });
    } catch {
      setInterval(function() {
        r.location.origin = o();
      }, 100);
    }
  }
})(
  typeof ke < "u" ? ke : typeof window < "u" ? window : typeof self < "u" ? self : ke
);
var It = { exports: {} };
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var s = o[i] = { i, l: !1, exports: {} };
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, s, a) {
        n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, s) {
        if (1 & s && (i = n(i)), 8 & s || 4 & s && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & s && typeof i != "string")
          for (var c in i)
            n.d(a, c, (function(l) {
              return i[l];
            }).bind(null, c));
        return a;
      }, n.n = function(i) {
        var s = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(s, "a", s), s;
      }, n.o = function(i, s) {
        return Object.prototype.hasOwnProperty.call(i, s);
      }, n.p = "", n(n.s = 3);
    }([function(t, o) {
      var n;
      n = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        n = n || new Function("return this")();
      } catch {
        typeof window == "object" && (n = window);
      }
      t.exports = n;
    }, function(t, o, n) {
      (function(i) {
        var s = n(2), a = setTimeout;
        function c() {
        }
        function l(p) {
          if (!(this instanceof l))
            throw new TypeError("Promises must be constructed via new");
          if (typeof p != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(p, this);
        }
        function u(p, m) {
          for (; p._state === 3; )
            p = p._value;
          p._state !== 0 ? (p._handled = !0, l._immediateFn(function() {
            var b = p._state === 1 ? m.onFulfilled : m.onRejected;
            if (b !== null) {
              var w;
              try {
                w = b(p._value);
              } catch (x) {
                return void g(m.promise, x);
              }
              d(m.promise, w);
            } else
              (p._state === 1 ? d : g)(m.promise, p._value);
          })) : p._deferreds.push(m);
        }
        function d(p, m) {
          try {
            if (m === p)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (m && (typeof m == "object" || typeof m == "function")) {
              var b = m.then;
              if (m instanceof l)
                return p._state = 3, p._value = m, void v(p);
              if (typeof b == "function")
                return void f((w = b, x = m, function() {
                  w.apply(x, arguments);
                }), p);
            }
            p._state = 1, p._value = m, v(p);
          } catch (y) {
            g(p, y);
          }
          var w, x;
        }
        function g(p, m) {
          p._state = 2, p._value = m, v(p);
        }
        function v(p) {
          p._state === 2 && p._deferreds.length === 0 && l._immediateFn(function() {
            p._handled || l._unhandledRejectionFn(p._value);
          });
          for (var m = 0, b = p._deferreds.length; m < b; m++)
            u(p, p._deferreds[m]);
          p._deferreds = null;
        }
        function h(p, m, b) {
          this.onFulfilled = typeof p == "function" ? p : null, this.onRejected = typeof m == "function" ? m : null, this.promise = b;
        }
        function f(p, m) {
          var b = !1;
          try {
            p(function(w) {
              b || (b = !0, d(m, w));
            }, function(w) {
              b || (b = !0, g(m, w));
            });
          } catch (w) {
            if (b)
              return;
            b = !0, g(m, w);
          }
        }
        l.prototype.catch = function(p) {
          return this.then(null, p);
        }, l.prototype.then = function(p, m) {
          var b = new this.constructor(c);
          return u(this, new h(p, m, b)), b;
        }, l.prototype.finally = s.a, l.all = function(p) {
          return new l(function(m, b) {
            if (!p || p.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var w = Array.prototype.slice.call(p);
            if (w.length === 0)
              return m([]);
            var x = w.length;
            function y(D, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var C = E.then;
                  if (typeof C == "function")
                    return void C.call(E, function(B) {
                      y(D, B);
                    }, b);
                }
                w[D] = E, --x == 0 && m(w);
              } catch (B) {
                b(B);
              }
            }
            for (var T = 0; T < w.length; T++)
              y(T, w[T]);
          });
        }, l.resolve = function(p) {
          return p && typeof p == "object" && p.constructor === l ? p : new l(function(m) {
            m(p);
          });
        }, l.reject = function(p) {
          return new l(function(m, b) {
            b(p);
          });
        }, l.race = function(p) {
          return new l(function(m, b) {
            for (var w = 0, x = p.length; w < x; w++)
              p[w].then(m, b);
          });
        }, l._immediateFn = typeof i == "function" && function(p) {
          i(p);
        } || function(p) {
          a(p, 0);
        }, l._unhandledRejectionFn = function(p) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", p);
        }, o.a = l;
      }).call(this, n(5).setImmediate);
    }, function(t, o, n) {
      o.a = function(i) {
        var s = this.constructor;
        return this.then(function(a) {
          return s.resolve(i()).then(function() {
            return a;
          });
        }, function(a) {
          return s.resolve(i()).then(function() {
            return s.reject(a);
          });
        });
      };
    }, function(t, o, n) {
      function i(h) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        })(h);
      }
      n(4);
      var s, a, c, l, u, d, g = n(8), v = (a = function(h) {
        return new Promise(function(f, p) {
          h = l(h), h = u(h);
          var m = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          m.open(h.method, h.url), m.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(h.headers).forEach(function(w) {
            var x = h.headers[w];
            m.setRequestHeader(w, x);
          });
          var b = h.ratio;
          m.upload.addEventListener("progress", function(w) {
            var x = Math.round(w.loaded / w.total * 100), y = Math.ceil(x * b / 100);
            h.progress(y);
          }, !1), m.addEventListener("progress", function(w) {
            var x = Math.round(w.loaded / w.total * 100), y = Math.ceil(x * (100 - b) / 100) + b;
            h.progress(y);
          }, !1), m.onreadystatechange = function() {
            if (m.readyState === 4) {
              var w = m.response;
              try {
                w = JSON.parse(w);
              } catch {
              }
              var x = g.parseHeaders(m.getAllResponseHeaders()), y = { body: w, code: m.status, headers: x };
              m.status === 200 ? f(y) : p(y);
            }
          }, m.send(h.data);
        });
      }, c = function(h) {
        return h.method = "POST", a(h);
      }, l = function() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (h.url && typeof h.url != "string")
          throw new Error("Url must be a string");
        if (h.url = h.url || "", h.method && typeof h.method != "string")
          throw new Error("`method` must be a string or null");
        if (h.method = h.method ? h.method.toUpperCase() : "GET", h.headers && i(h.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (h.headers = h.headers || {}, h.type && (typeof h.type != "string" || !Object.values(s).includes(h.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (h.progress && typeof h.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (h.progress = h.progress || function(f) {
        }, h.beforeSend = h.beforeSend || function(f) {
        }, h.ratio && typeof h.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (h.ratio < 0 || h.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (h.ratio = h.ratio || 90, h.accept && typeof h.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (h.accept = h.accept || "*/*", h.multiple && typeof h.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (h.multiple = h.multiple || !1, h.fieldName && typeof h.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return h.fieldName = h.fieldName || "files", h;
      }, u = function(h) {
        switch (h.method) {
          case "GET":
            var f = d(h.data, s.URLENCODED);
            delete h.data, h.url = /\?/.test(h.url) ? h.url + "&" + f : h.url + "?" + f;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var p = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            }(h);
            (g.isFormData(h.data) || g.isFormElement(h.data)) && (p = s.FORM), h.data = d(h.data, p), p !== v.contentType.FORM && (h.headers["content-type"] = p);
        }
        return h;
      }, d = function() {
        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return g.urlEncode(h);
          case s.JSON:
            return g.jsonEncode(h);
          case s.FORM:
            return g.formEncode(h);
          default:
            return h;
        }
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: a, get: function(h) {
        return h.method = "GET", a(h);
      }, post: c, transport: function(h) {
        return h = l(h), g.selectFiles(h).then(function(f) {
          for (var p = new FormData(), m = 0; m < f.length; m++)
            p.append(h.fieldName, f[m], f[m].name);
          return g.isObject(h.data) && Object.keys(h.data).forEach(function(b) {
            var w = h.data[b];
            p.append(b, w);
          }), h.beforeSend && h.beforeSend(f), h.data = p, c(h);
        });
      }, selectFiles: function(h) {
        return delete (h = l(h)).beforeSend, g.selectFiles(h);
      } });
      t.exports = v;
    }, function(t, o, n) {
      n.r(o);
      var i = n(1);
      window.Promise = window.Promise || i.a;
    }, function(t, o, n) {
      (function(i) {
        var s = i !== void 0 && i || typeof self < "u" && self || window, a = Function.prototype.apply;
        function c(l, u) {
          this._id = l, this._clearFn = u;
        }
        o.setTimeout = function() {
          return new c(a.call(setTimeout, s, arguments), clearTimeout);
        }, o.setInterval = function() {
          return new c(a.call(setInterval, s, arguments), clearInterval);
        }, o.clearTimeout = o.clearInterval = function(l) {
          l && l.close();
        }, c.prototype.unref = c.prototype.ref = function() {
        }, c.prototype.close = function() {
          this._clearFn.call(s, this._id);
        }, o.enroll = function(l, u) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = u;
        }, o.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, o._unrefActive = o.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var u = l._idleTimeout;
          u >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, u));
        }, n(6), o.setImmediate = typeof self < "u" && self.setImmediate || i !== void 0 && i.setImmediate || this && this.setImmediate, o.clearImmediate = typeof self < "u" && self.clearImmediate || i !== void 0 && i.clearImmediate || this && this.clearImmediate;
      }).call(this, n(0));
    }, function(t, o, n) {
      (function(i, s) {
        (function(a, c) {
          if (!a.setImmediate) {
            var l, u, d, g, v, h = 1, f = {}, p = !1, m = a.document, b = Object.getPrototypeOf && Object.getPrototypeOf(a);
            b = b && b.setTimeout ? b : a, {}.toString.call(a.process) === "[object process]" ? l = function(y) {
              s.nextTick(function() {
                x(y);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var y = !0, T = a.onmessage;
                return a.onmessage = function() {
                  y = !1;
                }, a.postMessage("", "*"), a.onmessage = T, y;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", v = function(y) {
              y.source === a && typeof y.data == "string" && y.data.indexOf(g) === 0 && x(+y.data.slice(g.length));
            }, a.addEventListener ? a.addEventListener("message", v, !1) : a.attachEvent("onmessage", v), l = function(y) {
              a.postMessage(g + y, "*");
            }) : a.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(y) {
              x(y.data);
            }, l = function(y) {
              d.port2.postMessage(y);
            }) : m && "onreadystatechange" in m.createElement("script") ? (u = m.documentElement, l = function(y) {
              var T = m.createElement("script");
              T.onreadystatechange = function() {
                x(y), T.onreadystatechange = null, u.removeChild(T), T = null;
              }, u.appendChild(T);
            }) : l = function(y) {
              setTimeout(x, 0, y);
            }, b.setImmediate = function(y) {
              typeof y != "function" && (y = new Function("" + y));
              for (var T = new Array(arguments.length - 1), D = 0; D < T.length; D++)
                T[D] = arguments[D + 1];
              var E = { callback: y, args: T };
              return f[h] = E, l(h), h++;
            }, b.clearImmediate = w;
          }
          function w(y) {
            delete f[y];
          }
          function x(y) {
            if (p)
              setTimeout(x, 0, y);
            else {
              var T = f[y];
              if (T) {
                p = !0;
                try {
                  (function(D) {
                    var E = D.callback, C = D.args;
                    switch (C.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(C[0]);
                        break;
                      case 2:
                        E(C[0], C[1]);
                        break;
                      case 3:
                        E(C[0], C[1], C[2]);
                        break;
                      default:
                        E.apply(c, C);
                    }
                  })(T);
                } finally {
                  w(y), p = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, n(0), n(7));
    }, function(t, o) {
      var n, i, s = t.exports = {};
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function c() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(b) {
        if (n === setTimeout)
          return setTimeout(b, 0);
        if ((n === a || !n) && setTimeout)
          return n = setTimeout, setTimeout(b, 0);
        try {
          return n(b, 0);
        } catch {
          try {
            return n.call(null, b, 0);
          } catch {
            return n.call(this, b, 0);
          }
        }
      }
      (function() {
        try {
          n = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          n = a;
        }
        try {
          i = typeof clearTimeout == "function" ? clearTimeout : c;
        } catch {
          i = c;
        }
      })();
      var u, d = [], g = !1, v = -1;
      function h() {
        g && u && (g = !1, u.length ? d = u.concat(d) : v = -1, d.length && f());
      }
      function f() {
        if (!g) {
          var b = l(h);
          g = !0;
          for (var w = d.length; w; ) {
            for (u = d, d = []; ++v < w; )
              u && u[v].run();
            v = -1, w = d.length;
          }
          u = null, g = !1, function(x) {
            if (i === clearTimeout)
              return clearTimeout(x);
            if ((i === c || !i) && clearTimeout)
              return i = clearTimeout, clearTimeout(x);
            try {
              i(x);
            } catch {
              try {
                return i.call(null, x);
              } catch {
                return i.call(this, x);
              }
            }
          }(b);
        }
      }
      function p(b, w) {
        this.fun = b, this.array = w;
      }
      function m() {
      }
      s.nextTick = function(b) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var x = 1; x < arguments.length; x++)
            w[x - 1] = arguments[x];
        d.push(new p(b, w)), d.length !== 1 || g || l(f);
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(b) {
        return [];
      }, s.binding = function(b) {
        throw new Error("process.binding is not supported");
      }, s.cwd = function() {
        return "/";
      }, s.chdir = function(b) {
        throw new Error("process.chdir is not supported");
      }, s.umask = function() {
        return 0;
      };
    }, function(t, o, n) {
      function i(a, c) {
        for (var l = 0; l < c.length; l++) {
          var u = c[l];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
        }
      }
      var s = n(9);
      t.exports = function() {
        function a() {
          (function(d, g) {
            if (!(d instanceof g))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        var c, l, u;
        return c = a, u = [{ key: "urlEncode", value: function(d) {
          return s(d);
        } }, { key: "jsonEncode", value: function(d) {
          return JSON.stringify(d);
        } }, { key: "formEncode", value: function(d) {
          if (this.isFormData(d))
            return d;
          if (this.isFormElement(d))
            return new FormData(d);
          if (this.isObject(d)) {
            var g = new FormData();
            return Object.keys(d).forEach(function(v) {
              var h = d[v];
              g.append(v, h);
            }), g;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        } }, { key: "isFormData", value: function(d) {
          return d instanceof FormData;
        } }, { key: "isFormElement", value: function(d) {
          return d instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(g, v) {
            var h = document.createElement("INPUT");
            h.type = "file", d.multiple && h.setAttribute("multiple", "multiple"), d.accept && h.setAttribute("accept", d.accept), h.style.display = "none", document.body.appendChild(h), h.addEventListener("change", function(f) {
              var p = f.target.files;
              g(p), document.body.removeChild(h);
            }, !1), h.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var g = d.trim().split(/[\r\n]+/), v = {};
          return g.forEach(function(h) {
            var f = h.split(": "), p = f.shift(), m = f.join(": ");
            p && (v[p] = m);
          }), v;
        } }], (l = null) && i(c.prototype, l), u && i(c, u), a;
      }();
    }, function(t, o) {
      var n = function(s) {
        return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, i = function(s, a, c, l) {
        return a = a || null, c = c || "&", l = l || null, s ? function(u) {
          for (var d = new Array(), g = 0; g < u.length; g++)
            u[g] && d.push(u[g]);
          return d;
        }(Object.keys(s).map(function(u) {
          var d, g, v = u;
          if (l && (v = l + "[" + v + "]"), typeof s[u] == "object" && s[u] !== null)
            d = i(s[u], null, c, v);
          else {
            a && (g = v, v = !isNaN(parseFloat(g)) && isFinite(g) ? a + Number(v) : v);
            var h = s[u];
            h = (h = (h = (h = h === !0 ? "1" : h) === !1 ? "0" : h) === 0 ? "0" : h) || "", d = n(v) + "=" + n(h);
          }
          return d;
        })).join(c).replace(/[!'()*]/g, "") : "";
      };
      t.exports = i;
    }]);
  });
})(It);
var Ao = It.exports;
const No = /* @__PURE__ */ Oo(Ao), Po = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.569 6.39509 13.9269 6.25143 12.8271 7.17675L11.39 8.38588C10.0935 9.47674 9.95704 11.4241 11.0887 12.6852L11.12 12.72"/></svg>';
let Do = class {
  /**
   * Notify core that read-only mode supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: Po,
      title: "Link"
    };
  }
  /**
   * Allow to press Enter inside the LinkTool input
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * @param {object} options - Tool constructor options fot from Editor.js
   * @param {LinkToolData} options.data - previously saved data
   * @param {LinkToolConfig} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: n }) {
    this.api = o, this.readOnly = n, this.config = {
      endpoint: t.endpoint || "",
      headers: t.headers || {}
    }, this.nodes = {
      wrapper: null,
      container: null,
      progress: null,
      input: null,
      inputHolder: null,
      linkContent: null,
      linkImage: null,
      linkTitle: null,
      linkDescription: null,
      linkText: null
    }, this._data = {
      link: "",
      meta: {}
    }, this.data = e;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.linkContent = this.prepareLinkPreview(), Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.linkContent), this.showLinkPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {LinkToolData}
   */
  save() {
    return this.data;
  }
  /**
   * Validate Block data
   * - check if given link is an empty string or not.
   *
   * @public
   *
   * @returns {boolean} false if saved data is incorrect, otherwise true
   */
  validate() {
    return this.data.link.trim() !== "";
  }
  /**
   * Stores all Tool's data
   *
   * @param {LinkToolData} data - data to store
   */
  set data(e) {
    this._data = Object.assign({}, {
      link: e.link || this._data.link,
      meta: e.meta || this._data.meta
    });
  }
  /**
   * Return Tool data
   *
   * @returns {LinkToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * @returns {object} - Link Tool styles
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      /**
       * Tool's classes
       */
      container: "link-tool",
      inputEl: "link-tool__input",
      inputHolder: "link-tool__input-holder",
      inputError: "link-tool__input-holder--error",
      linkContent: "link-tool__content",
      linkContentRendered: "link-tool__content--rendered",
      linkImage: "link-tool__image",
      linkTitle: "link-tool__title",
      linkDescription: "link-tool__description",
      linkText: "link-tool__anchor",
      progress: "link-tool__progress",
      progressLoading: "link-tool__progress--loading",
      progressLoaded: "link-tool__progress--loaded"
    };
  }
  /**
   * Prepare input holder
   *
   * @returns {HTMLElement}
   */
  makeInputHolder() {
    const e = this.make("div", this.CSS.inputHolder);
    return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly
    }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Link"), this.readOnly || (this.nodes.input.addEventListener("paste", (t) => {
      this.startFetching(t);
    }), this.nodes.input.addEventListener("keydown", (t) => {
      const [o, n] = [13, 65], i = t.ctrlKey || t.metaKey;
      switch (t.keyCode) {
        case o:
          t.preventDefault(), t.stopPropagation(), this.startFetching(t);
          break;
        case n:
          i && this.selectLinkUrl(t);
          break;
      }
    })), e.appendChild(this.nodes.progress), e.appendChild(this.nodes.input), e;
  }
  /**
   * Activates link data fetching by url
   *
   * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
   */
  startFetching(e) {
    let t = this.nodes.input.textContent;
    e.type === "paste" && (t = (e.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(t);
  }
  /**
   * If previous link data fetching failed, remove error styles
   */
  removeErrorStyle() {
    this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
  }
  /**
   * Select LinkTool input content by CMD+A
   *
   * @param {KeyboardEvent} event - keydown
   */
  selectLinkUrl(e) {
    e.preventDefault(), e.stopPropagation();
    const t = window.getSelection(), o = new Range(), n = t.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
    o.selectNodeContents(n), t.removeAllRanges(), t.addRange(o);
  }
  /**
   * Prepare link preview holder
   *
   * @returns {HTMLElement}
   */
  prepareLinkPreview() {
    const e = this.make("a", this.CSS.linkContent, {
      target: "_blank",
      rel: "nofollow noindex noreferrer"
    });
    return this.nodes.linkImage = this.make("div", this.CSS.linkImage), this.nodes.linkTitle = this.make("div", this.CSS.linkTitle), this.nodes.linkDescription = this.make("p", this.CSS.linkDescription), this.nodes.linkText = this.make("span", this.CSS.linkText), e;
  }
  /**
   * Compose link preview from fetched data
   *
   * @param {metaData} meta - link meta data
   */
  showLinkPreview({ image: e, title: t, description: o }) {
    this.nodes.container.appendChild(this.nodes.linkContent), e && e.url && (this.nodes.linkImage.style.backgroundImage = "url(" + e.url + ")", this.nodes.linkContent.appendChild(this.nodes.linkImage)), t && (this.nodes.linkTitle.textContent = t, this.nodes.linkContent.appendChild(this.nodes.linkTitle)), o && (this.nodes.linkDescription.textContent = o, this.nodes.linkContent.appendChild(this.nodes.linkDescription)), this.nodes.linkContent.classList.add(this.CSS.linkContentRendered), this.nodes.linkContent.setAttribute("href", this.data.link), this.nodes.linkContent.appendChild(this.nodes.linkText);
    try {
      this.nodes.linkText.textContent = new URL(this.data.link).hostname;
    } catch {
      this.nodes.linkText.textContent = this.data.link;
    }
  }
  /**
   * Show loading progress bar
   */
  showProgress() {
    this.nodes.progress.classList.add(this.CSS.progressLoading);
  }
  /**
   * Hide loading progress bar
   *
   * @returns {Promise<void>}
   */
  hideProgress() {
    return new Promise((e) => {
      this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(e, 500);
    });
  }
  /**
   * If data fetching failed, set input error style
   */
  applyErrorStyle() {
    this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
  }
  /**
   * Sends to backend pasted url and receives link data
   *
   * @param {string} url - link source url
   */
  async fetchLinkData(e) {
    this.showProgress(), this.data = { link: e };
    try {
      const { body: t } = await No.get({
        url: this.config.endpoint,
        headers: this.config.headers,
        data: {
          url: e
        }
      });
      this.onFetch(t);
    } catch {
      this.fetchingFailed(this.api.i18n.t("Couldn't fetch the link data"));
    }
  }
  /**
   * Link data fetching callback
   *
   * @param {UploadResponseFormat} response - backend response
   */
  onFetch(e) {
    if (!e || !e.success) {
      this.fetchingFailed(this.api.i18n.t("Couldn't get this link data, try the other one"));
      return;
    }
    const t = e.meta, o = e.link || this.data.link;
    if (this.data = {
      meta: t,
      link: o
    }, !t) {
      this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
      return;
    }
    this.hideProgress().then(() => {
      this.nodes.inputHolder.remove(), this.showLinkPreview(t);
    });
  }
  /**
   * Handle link fetching errors
   *
   * @private
   *
   * @param {string} errorMessage - message to explain user what he should do
   */
  fetchingFailed(e) {
    this.api.notifier.show({
      message: e,
      style: "error"
    }), this.applyErrorStyle();
  }
  /**
   * Helper method for elements creation
   *
   * @param {string} tagName - name of creating element
   * @param {string|string[]} [classNames] - list of CSS classes to add
   * @param {object} [attributes] - object with attributes to add
   * @returns {HTMLElement}
   */
  make(e, t = null, o = {}) {
    const n = document.createElement(e);
    Array.isArray(t) ? n.classList.add(...t) : t && n.classList.add(t);
    for (const i in o)
      n[i] = o[i];
    return n;
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode('.cdx-nested-list{margin:0;padding:0;outline:none;counter-reset:item;list-style:none}.cdx-nested-list__item{line-height:1.6em;display:flex;margin:2px 0}.cdx-nested-list__item [contenteditable]{outline:none}.cdx-nested-list__item-body{flex-grow:2}.cdx-nested-list__item-content,.cdx-nested-list__item-children{flex-basis:100%}.cdx-nested-list__item-content{word-break:break-word;white-space:pre-wrap}.cdx-nested-list__item:before{counter-increment:item;margin-right:5px;white-space:nowrap}.cdx-nested-list--ordered>.cdx-nested-list__item:before{content:counters(item,".") ". "}.cdx-nested-list--unordered>.cdx-nested-list__item:before{content:"•"}.cdx-nested-list__settings{display:flex}.cdx-nested-list__settings .cdx-settings-button{width:50%}')), document.head.appendChild(r);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
function me(r, e = null, t = {}) {
  const o = document.createElement(r);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const n in t)
    o[n] = t[n];
  return o;
}
function bt(r) {
  const e = me("div");
  return e.appendChild(r), e.innerHTML;
}
function Mt(r) {
  let e;
  return r.nodeType !== Node.ELEMENT_NODE ? e = r.textContent : (e = r.innerHTML, e = e.replaceAll("<br>", "")), e.trim().length === 0;
}
let ce = class ze {
  /**
   * Store internal properties
   */
  constructor() {
    this.savedFakeCaret = void 0;
  }
  /**
   * Saves caret position using hidden <span>
   *
   * @returns {void}
   */
  save() {
    const e = ze.range, t = me("span");
    t.hidden = !0, e.insertNode(t), this.savedFakeCaret = t;
  }
  /**
   * Restores the caret position saved by the save() method
   *
   * @returns {void}
   */
  restore() {
    if (!this.savedFakeCaret)
      return;
    const e = window.getSelection(), t = new Range();
    t.setStartAfter(this.savedFakeCaret), t.setEndAfter(this.savedFakeCaret), e.removeAllRanges(), e.addRange(t), setTimeout(() => {
      this.savedFakeCaret.remove();
    }, 150);
  }
  /**
   * Returns the first range
   *
   * @returns {Range|null}
   */
  static get range() {
    const e = window.getSelection();
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Extract content fragment from Caret position to the end of contenteditable element
   *
   * @returns {DocumentFragment|void}
   */
  static extractFragmentFromCaretPositionTillTheEnd() {
    const e = window.getSelection();
    if (!e.rangeCount)
      return;
    const t = e.getRangeAt(0);
    let o = t.startContainer;
    o.nodeType !== Node.ELEMENT_NODE && (o = o.parentNode);
    const n = o.closest("[contenteditable]");
    t.deleteContents();
    const i = t.cloneRange();
    return i.selectNodeContents(n), i.setStart(t.endContainer, t.endOffset), i.extractContents();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param {HTMLElement} element - element where to set focus
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  static focus(e, t = !0) {
    const o = document.createRange(), n = window.getSelection();
    o.selectNodeContents(e), o.collapse(t), n.removeAllRanges(), n.addRange(o);
  }
  /**
   * Check if the caret placed at the start of the contenteditable element
   *
   * @returns {void}
   */
  static isAtStart() {
    const e = window.getSelection();
    if (e.focusOffset > 0)
      return !1;
    const t = e.focusNode;
    return ze.getHigherLevelSiblings(t, "left").every((o) => Mt(o));
  }
  /**
   * Get all first-level (first child of [contenteditabel]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */
  static getHigherLevelSiblings(e, t = "left") {
    let o = e;
    const n = [];
    for (; o.parentNode && o.parentNode.contentEditable !== "true"; )
      o = o.parentNode;
    const i = t === "left" ? "previousSibling" : "nextSibling";
    for (; o[i]; )
      o = o[i], n.push(o);
    return n;
  }
};
const Ro = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
let Fo = class qe {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: kt,
      title: "List"
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - tool constructor options
   * @param {ListData} params.data - previously saved data
   * @param {object} params.config - user config for Tool
   * @param {object} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: n }) {
    this.nodes = {
      wrapper: null
    }, this.api = o, this.readOnly = n, this.config = t, this.defaultListStyle = this.config.defaultStyle === "ordered" ? "ordered" : "unordered";
    const i = {
      style: this.defaultListStyle,
      items: []
    };
    this.data = e && Object.keys(e).length ? e : i, this.caret = new ce();
  }
  /**
   * Returns list tag with items
   *
   * @returns {Element}
   * @public
   */
  render() {
    return this.nodes.wrapper = this.makeListWrapper(this.data.style, [this.CSS.baseBlock]), this.data.items.length ? this.appendItems(this.data.items, this.nodes.wrapper) : this.appendItems([{
      content: "",
      items: []
    }], this.nodes.wrapper), this.readOnly || this.nodes.wrapper.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          this.enterPressed(e);
          break;
        case "Backspace":
          this.backspace(e);
          break;
        case "Tab":
          e.shiftKey ? this.shiftTab(e) : this.addTab(e);
          break;
      }
    }, !1), this.nodes.wrapper;
  }
  /**
   * Creates Block Tune allowing to change the list style
   *
   * @public
   * @returns {Array}
   */
  renderSettings() {
    return [
      {
        name: "unordered",
        label: this.api.i18n.t("Unordered"),
        icon: Ro
      },
      {
        name: "ordered",
        label: this.api.i18n.t("Ordered"),
        icon: kt
      }
    ].map((e) => ({
      name: e.name,
      icon: e.icon,
      label: e.label,
      isActive: this.data.style === e.name,
      closeOnActivate: !0,
      onActivate: () => {
        this.listStyle = e.name;
      }
    }));
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   *
   * @returns {PasteConfig} - paste config.
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = e.detail.data;
    this.data = this.pasteHandler(t);
    const o = this.nodes.wrapper;
    o && o.parentNode.replaceChild(this.render(), o);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */
  pasteHandler(e) {
    const { tagName: t } = e;
    let o, n;
    switch (t) {
      case "OL":
        o = "ordered", n = "ol";
        break;
      case "UL":
      case "LI":
        o = "unordered", n = "ul";
    }
    const i = {
      style: o,
      items: []
    }, s = (a) => Array.from(a.querySelectorAll(":scope > li")).map((c) => {
      var l;
      const u = c.querySelector(`:scope > ${n}`), d = u ? s(u) : [];
      return {
        content: ((l = c == null ? void 0 : c.firstChild) == null ? void 0 : l.textContent) || "",
        items: d
      };
    });
    return i.items = s(e), i;
  }
  /**
   * Renders children list
   *
   * @param {ListItem[]} items - items data to append
   * @param {Element} parentItem - where to append
   * @returns {void}
   */
  appendItems(e, t) {
    e.forEach((o) => {
      const n = this.createItem(o.content, o.items);
      t.appendChild(n);
    });
  }
  /**
   * Renders the single item
   *
   * @param {string} content - item content to render
   * @param {ListItem[]} [items] - children
   * @returns {Element}
   */
  createItem(e, t = []) {
    const o = me("li", this.CSS.item), n = me("div", this.CSS.itemBody), i = me("div", this.CSS.itemContent, {
      innerHTML: e,
      contentEditable: !this.readOnly
    });
    return n.appendChild(i), o.appendChild(n), t && t.length > 0 && this.addChildrenList(o, t), o;
  }
  /**
   * Extracts tool's data from the DOM
   *
   * @returns {ListData}
   */
  save() {
    const e = (t) => Array.from(t.querySelectorAll(`:scope > .${this.CSS.item}`)).map((o) => {
      const n = o.querySelector(`.${this.CSS.itemChildren}`), i = this.getItemContent(o), s = n ? e(n) : [];
      return {
        content: i,
        items: s
      };
    });
    return {
      style: this.data.style,
      items: e(this.nodes.wrapper)
    };
  }
  /**
   * Append children list to passed item
   *
   * @param {Element} parentItem - item that should contain passed sub-items
   * @param {ListItem[]} items - sub items to append
   */
  addChildrenList(e, t) {
    const o = e.querySelector(`.${this.CSS.itemBody}`), n = this.makeListWrapper(void 0, [this.CSS.itemChildren]);
    this.appendItems(t, n), o.appendChild(n);
  }
  /**
   * Creates main <ul> or <ol> tag depended on style
   *
   * @param {string} [style] - 'ordered' or 'unordered'
   * @param {string[]} [classes] - additional classes to append
   * @returns {HTMLOListElement|HTMLUListElement}
   */
  makeListWrapper(e = this.listStyle, t = []) {
    const o = e === "ordered" ? "ol" : "ul", n = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    return t.push(n), me(o, [this.CSS.wrapper, ...t]);
  }
  /**
   * Styles
   *
   * @returns {object} - CSS classes names by keys
   * @private
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-nested-list",
      wrapperOrdered: "cdx-nested-list--ordered",
      wrapperUnordered: "cdx-nested-list--unordered",
      item: "cdx-nested-list__item",
      itemBody: "cdx-nested-list__item-body",
      itemContent: "cdx-nested-list__item-content",
      itemChildren: "cdx-nested-list__item-children",
      settingsWrapper: "cdx-nested-list__settings",
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive
    };
  }
  /**
   * Get list style name
   *
   * @returns {string}
   */
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  /**
   * Set list style
   *
   * @param {string} style - new style to set
   */
  set listStyle(e) {
    const t = Array.from(this.nodes.wrapper.querySelectorAll(`.${this.CSS.wrapper}`));
    t.push(this.nodes.wrapper), t.forEach((o) => {
      o.classList.toggle(this.CSS.wrapperUnordered, e === "unordered"), o.classList.toggle(this.CSS.wrapperOrdered, e === "ordered");
    }), this.data.style = e;
  }
  /**
   * Returns current List item by the caret position
   *
   * @returns {Element}
   */
  get currentItem() {
    let e = window.getSelection().anchorNode;
    return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.item}`);
  }
  /**
   * Handles Enter keypress
   *
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  enterPressed(e) {
    const t = this.currentItem;
    if (e.stopPropagation(), e.preventDefault(), e.isComposing)
      return;
    const o = this.getItemContent(t).trim().length === 0, n = t.parentNode === this.nodes.wrapper, i = t.nextElementSibling === null;
    if (n && i && o) {
      this.getOutOfList();
      return;
    } else if (i && o) {
      this.unshiftItem();
      return;
    }
    const s = ce.extractFragmentFromCaretPositionTillTheEnd(), a = bt(s), c = t.querySelector(`.${this.CSS.itemChildren}`), l = this.createItem(a, void 0);
    c && Array.from(c.querySelectorAll(`.${this.CSS.item}`)).length > 0 ? c.prepend(l) : t.after(l), this.focusItem(l);
  }
  /**
   * Decrease indentation of the current item
   *
   * @returns {void}
   */
  unshiftItem() {
    const e = this.currentItem, t = e.parentNode.closest(`.${this.CSS.item}`);
    if (!t)
      return;
    this.caret.save(), t.after(e), this.caret.restore();
    const o = t.querySelector(`.${this.CSS.itemChildren}`);
    o.children.length === 0 && o.remove();
  }
  /**
   * Return the item content
   *
   * @param {Element} item - item wrapper (<li>)
   * @returns {string}
   */
  getItemContent(e) {
    const t = e.querySelector(`.${this.CSS.itemContent}`);
    return Mt(t) ? "" : t.innerHTML;
  }
  /**
   * Sets focus to the item's content
   *
   * @param {Element} item - item (<li>) to select
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  focusItem(e, t = !0) {
    const o = e.querySelector(`.${this.CSS.itemContent}`);
    ce.focus(o, t);
  }
  /**
   * Get out from List Tool by Enter on the empty last item
   *
   * @returns {void}
   */
  getOutOfList() {
    this.currentItem.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
  }
  /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    if (!ce.isAtStart())
      return;
    e.preventDefault();
    const t = this.currentItem, o = t.previousSibling, n = t.parentNode.closest(`.${this.CSS.item}`);
    if (!o && !n)
      return;
    e.stopPropagation();
    let i;
    if (o) {
      const u = o.querySelectorAll(`.${this.CSS.item}`);
      i = Array.from(u).pop() || o;
    } else
      i = n;
    const s = ce.extractFragmentFromCaretPositionTillTheEnd(), a = bt(s), c = i.querySelector(`.${this.CSS.itemContent}`);
    ce.focus(c, !1), this.caret.save(), c.insertAdjacentHTML("beforeend", a);
    let l = t.querySelectorAll(`.${this.CSS.itemChildren} > .${this.CSS.item}`);
    l = Array.from(l), l = l.filter((u) => u.parentNode.closest(`.${this.CSS.item}`) === t), l.reverse().forEach((u) => {
      o ? i.after(u) : t.after(u);
    }), t.remove(), this.caret.restore();
  }
  /**
   * Add indentation to current item
   *
   * @param {KeyboardEvent} event - keydown
   */
  addTab(e) {
    e.stopPropagation(), e.preventDefault();
    const t = this.currentItem, o = t.previousSibling;
    if (!o)
      return;
    const n = o.querySelector(`.${this.CSS.itemChildren}`);
    if (this.caret.save(), n)
      n.appendChild(t);
    else {
      const i = this.makeListWrapper(void 0, [this.CSS.itemChildren]), s = o.querySelector(`.${this.CSS.itemBody}`);
      i.appendChild(t), s.appendChild(i);
    }
    this.caret.restore();
  }
  /**
   * Reduce indentation for current item
   *
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  shiftTab(e) {
    e.stopPropagation(), e.preventDefault(), this.unshiftItem();
  }
  /**
   * Convert from list to text for conversionConfig
   *
   * @param {ListData} data
   * @returns {string}
   */
  static joinRecursive(e) {
    return e.items.map((t) => `${t.content} ${qe.joinRecursive(t)}`).join("");
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      export: (e) => qe.joinRecursive(e),
      import: (e) => ({
        items: [{
          content: e,
          items: []
        }],
        style: "unordered"
      })
    };
  }
};
var Ho = Object.defineProperty, jo = (r, e, t) => e in r ? Ho(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Uo = (r, e, t) => (jo(r, e + "", t), t);
const $o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
function zo(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Ve(r, e, t) {
  var o, n, i, s, a;
  e == null && (e = 100);
  function c() {
    var u = Date.now() - s;
    u < e && u >= 0 ? o = setTimeout(c, e - u) : (o = null, t || (a = r.apply(i, n), i = n = null));
  }
  var l = function() {
    i = this, n = arguments, s = Date.now();
    var u = t && !o;
    return o || (o = setTimeout(c, e)), u && (a = r.apply(i, n), i = n = null), a;
  };
  return l.clear = function() {
    o && (clearTimeout(o), o = null);
  }, l.flush = function() {
    o && (a = r.apply(i, n), i = n = null, clearTimeout(o), o = null);
  }, l;
}
Ve.debounce = Ve;
var qo = Ve;
const Vo = /* @__PURE__ */ zo(qo), Ot = class ue {
  constructor({ data: e, api: t, readOnly: o }) {
    this.api = t, this.nodes = {
      wrapper: null,
      container: null,
      progress: null,
      input: null,
      inputHolder: null
    }, this._data = Object.keys(e).length !== 0 ? e : void 0, this.readOnly = o;
  }
  set data(e) {
    var t;
    if (!(e instanceof Object))
      throw Error("Embed Tool data should be object");
    this._data = e;
    const o = this.nodes.wrapper;
    o && ((t = o.parentNode) == null || t.replaceChild(this.render(), o));
  }
  get data() {
    return this._data;
  }
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      container: "embed-tool",
      inputEl: "embed-tool__input",
      inputHolder: "embed-tool__input-holder",
      inputError: "embed-tool__input-holder--error",
      linkContent: "embed-tool__content",
      linkContentRendered: "embed-tool__content--rendered",
      linkImage: "embed-tool__image",
      linkTitle: "embed-tool__title",
      linkDescription: "embed-tool__description",
      linkText: "embed-tool__anchor",
      progress: "embed-tool__progress",
      progressLoading: "embed-tool__progress--loading",
      progressLoaded: "embed-tool__progress--loaded",
      caption: "embed-tool__caption",
      content: "embed-tool__content"
    };
  }
  render() {
    return this._data ? this.nodes.wrapper = this.makeEmbed() ?? this.make("div", this.CSS.baseClass) : (this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container)), this.nodes.wrapper;
  }
  makeEmbed() {
    var e, t;
    if (this.showProgress(), !this.data || !ue.services)
      return null;
    const { html: o } = ue.services[this.data.service], n = this.make("div", this.CSS.baseClass), i = this.make("div", this.CSS.container), s = document.createElement("template");
    s.innerHTML = o, (e = s.content.firstChild) == null || e.setAttribute("src", this.data.embed), (t = s.content.firstChild) == null || t.classList.add(this.CSS.content), this.nodes.container = i;
    const a = this.embedIsReady(this.nodes.container);
    return s.content.firstChild && i.appendChild(s.content.firstChild), a.then(() => {
      this.hideProgress();
    }), n.appendChild(i), n;
  }
  async embedIsReady(e) {
    let t = null;
    return new Promise((o) => {
      t = new MutationObserver(Vo(o, 450)), t.observe(e, {
        childList: !0,
        subtree: !0
      });
    }).then(() => {
      t == null || t.disconnect();
    });
  }
  makeInputHolder() {
    const e = this.make("div", this.CSS.inputHolder);
    return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly
    }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Link"), this.nodes.input.addEventListener("keydown", (t) => {
      const [o, n] = [13, 65], i = t.ctrlKey || t.metaKey;
      switch (t.keyCode) {
        case o:
          t.preventDefault(), t.stopPropagation(), t.target && "textContent" in t.target && typeof t.target.textContent == "string" && this.setData(t.target.textContent);
          break;
        case n:
          i && t.target && "textContent" in t.target && typeof t.target.textContent == "string" && this.setData(t.target.textContent);
          break;
      }
    }), e.appendChild(this.nodes.progress), e.appendChild(this.nodes.input), e;
  }
  setData(e) {
    var t, o;
    if (!ue.services)
      return;
    const n = (t = Object.entries(ue.services).find(([, g]) => g.regex.test(e))) == null ? void 0 : t[1];
    if (!n)
      return;
    const { regex: i, embedUrl: s, width: a, height: c, id: l = (g) => g.shift() } = n, u = (o = i.exec(e)) == null ? void 0 : o.slice(1);
    if (!u)
      return;
    const d = s.replace(/<%= remote_id %>/g, l(u) ?? "");
    this.data = {
      service: n.name,
      source: e,
      embed: d,
      width: a,
      height: c
    };
  }
  static prepare({ config: e = {} }) {
    const { services: t } = e;
    if (!t)
      return;
    let o = Object.entries(Yo);
    const n = Object.entries(t).filter(([, i]) => typeof i == "boolean" && i === !0).map(([i]) => i);
    n.length && (o = o.filter(([i]) => n.includes(i))), ue.services = o.reduce((i, [s, a]) => s in i ? (i[s] = Object.assign({}, i[s], a), i) : (i[s] = a, i), {});
  }
  static checkServiceConfig(e) {
    const { regex: t, embedUrl: o, html: n, height: i, width: s, id: a } = e;
    let c = t && t instanceof RegExp && o && typeof o == "string" && n && typeof n == "string";
    return c = c && (a !== void 0 ? a instanceof Function : !0), c = c && (i !== void 0 ? Number.isFinite(i) : !0), c = c && (s !== void 0 ? Number.isFinite(s) : !0), c;
  }
  save() {
    return this.data;
  }
  static get toolbox() {
    return {
      icon: $o,
      title: "Embed"
    };
  }
  showProgress() {
    var e;
    (e = this.nodes.progress) == null || e.classList.add(this.CSS.progressLoading);
  }
  hideProgress() {
    return new Promise((e) => {
      var t, o;
      (t = this.nodes.progress) == null || t.classList.remove(this.CSS.progressLoading), (o = this.nodes.progress) == null || o.classList.add(this.CSS.progressLoaded), setTimeout(e, 500);
    });
  }
  make(e, t, o) {
    const n = document.createElement(e);
    Array.isArray(t) ? n.classList.add(...t) : t && n.classList.add(t);
    for (const i in o) {
      const s = i, a = o[s];
      a !== void 0 && (n[s] = a);
    }
    return n;
  }
  static get enableLineBreaks() {
    return !0;
  }
};
Uo(Ot, "services");
let Wo = Ot;
const Yo = {
  vimeo: {
    name: "vimeo",
    regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
    embedUrl: "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
    html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
    height: 320,
    width: 580
  },
  youtube: {
    name: "youtube",
    regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
    embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    id: ([r, e]) => {
      if (!e && r)
        return r;
      const t = {
        start: "start",
        end: "end",
        t: "start",
        // eslint-disable-next-line camelcase
        time_continue: "start",
        list: "list"
      }, o = e.slice(1).split("&").map((n) => {
        const [i, s] = n.split("=");
        return r ? !t[i] || s === "LL" || s.startsWith("RDMM") || s.startsWith("FL") ? null : `${t[i]}=${s}` : (r = s, null);
      }).filter((n) => !!n);
      return r + "?" + o.join("&");
    }
  },
  coub: {
    name: "coub",
    regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
    embedUrl: "https://coub.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  vine: {
    name: "vine",
    regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
    embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580
  },
  imgur: {
    name: "imgur",
    regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
    embedUrl: "http://imgur.com/<%= remote_id %>/embed",
    html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
    height: 500,
    width: 540
  },
  gfycat: {
    name: "gfycat",
    regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
    embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
    html: `<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,
    height: 436,
    width: 580
  },
  "twitch-channel": {
    name: "twitch-channel",
    regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  "twitch-video": {
    name: "twitch-video",
    regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
    embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600
  },
  "yandex-music-album": {
    name: "yandex-music-album",
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
    embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
    height: 400,
    width: 540
  },
  "yandex-music-track": {
    name: "yandex-music-track",
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
    height: 100,
    width: 540,
    id: (r) => r.join("/")
  },
  "yandex-music-playlist": {
    name: "yandex-music-playlist",
    regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
    height: 400,
    width: 540,
    id: (r) => r.join("/")
  },
  codepen: {
    name: "codepen",
    regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
    embedUrl: "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
    html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
    height: 300,
    width: 600,
    id: (r) => r.join("/embed/")
  },
  instagram: {
    name: "instagram",
    regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,
    embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 505,
    width: 400
  },
  twitter: {
    name: "twitter",
    regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,
    embedUrl: "https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",
    html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
    id: (r) => r.join("/status/")
  },
  pinterest: {
    name: "pinterest",
    regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
    id: (r) => r[1]
  },
  facebook: {
    name: "facebook",
    regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
    id: (r) => r.join("/")
  },
  aparat: {
    name: "aparat",
    regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
    embedUrl: "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
    html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600
  },
  miro: {
    name: "miro",
    regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
    embedUrl: "https://miro.com/app/live-embed/<%= remote_id %>",
    html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'
  },
  github: {
    name: "github",
    regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
    embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',
    html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
    height: 300,
    width: 600,
    id: (r) => `${r.join("/")}.js`
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(r);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const Ko = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', Xo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', At = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', Zo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function de(r, e = null, t = {}) {
  const o = document.createElement(r);
  Array.isArray(e) ? o.classList.add(...e) : e && o.classList.add(e);
  for (const n in t)
    o[n] = t[n];
  return o;
}
class X {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: e, config: t, onSelectFile: o, readOnly: n }) {
    this.api = e, this.config = t, this.onSelectFile = o, this.readOnly = n, this.nodes = {
      wrapper: de("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: de("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: de("div", this.CSS.imagePreloader),
      caption: de("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {ImageToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(e) {
    return !e.file || Object.keys(e.file).length === 0 ? this.toggleStatus(X.status.EMPTY) : this.toggleStatus(X.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const e = de("div", [this.CSS.button]);
    return e.innerHTML = this.config.buttonContent || `${At} ${this.api.i18n.t("Select an Image")}`, e.addEventListener("click", () => {
      this.onSelectFile();
    }), e;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(e) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${e})`, this.toggleStatus(X.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(X.status.EMPTY);
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(e) {
    const t = /\.mp4$/.test(e) ? "VIDEO" : "IMG", o = {
      src: e
    };
    let n = "load";
    t === "VIDEO" && (o.autoplay = !0, o.loop = !0, o.muted = !0, o.playsinline = !0, n = "loadeddata"), this.nodes.imageEl = de(t, this.CSS.imageEl, o), this.nodes.imageEl.addEventListener(n, () => {
      this.toggleStatus(X.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(e) {
    this.nodes.caption && (this.nodes.caption.innerHTML = e);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(e) {
    for (const t in X.status)
      Object.prototype.hasOwnProperty.call(X.status, t) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${X.status[t]}`, e === X.status[t]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(e, t) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${e}`, t);
  }
}
function Go(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Nt = { exports: {} };
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var s = o[i] = { i, l: !1, exports: {} };
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, s, a) {
        n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, s) {
        if (1 & s && (i = n(i)), 8 & s || 4 & s && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & s && typeof i != "string")
          for (var c in i)
            n.d(a, c, (function(l) {
              return i[l];
            }).bind(null, c));
        return a;
      }, n.n = function(i) {
        var s = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(s, "a", s), s;
      }, n.o = function(i, s) {
        return Object.prototype.hasOwnProperty.call(i, s);
      }, n.p = "", n(n.s = 3);
    }([function(t, o) {
      var n;
      n = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        n = n || new Function("return this")();
      } catch {
        typeof window == "object" && (n = window);
      }
      t.exports = n;
    }, function(t, o, n) {
      (function(i) {
        var s = n(2), a = setTimeout;
        function c() {
        }
        function l(p) {
          if (!(this instanceof l))
            throw new TypeError("Promises must be constructed via new");
          if (typeof p != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(p, this);
        }
        function u(p, m) {
          for (; p._state === 3; )
            p = p._value;
          p._state !== 0 ? (p._handled = !0, l._immediateFn(function() {
            var b = p._state === 1 ? m.onFulfilled : m.onRejected;
            if (b !== null) {
              var w;
              try {
                w = b(p._value);
              } catch (x) {
                return void g(m.promise, x);
              }
              d(m.promise, w);
            } else
              (p._state === 1 ? d : g)(m.promise, p._value);
          })) : p._deferreds.push(m);
        }
        function d(p, m) {
          try {
            if (m === p)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (m && (typeof m == "object" || typeof m == "function")) {
              var b = m.then;
              if (m instanceof l)
                return p._state = 3, p._value = m, void v(p);
              if (typeof b == "function")
                return void f((w = b, x = m, function() {
                  w.apply(x, arguments);
                }), p);
            }
            p._state = 1, p._value = m, v(p);
          } catch (y) {
            g(p, y);
          }
          var w, x;
        }
        function g(p, m) {
          p._state = 2, p._value = m, v(p);
        }
        function v(p) {
          p._state === 2 && p._deferreds.length === 0 && l._immediateFn(function() {
            p._handled || l._unhandledRejectionFn(p._value);
          });
          for (var m = 0, b = p._deferreds.length; m < b; m++)
            u(p, p._deferreds[m]);
          p._deferreds = null;
        }
        function h(p, m, b) {
          this.onFulfilled = typeof p == "function" ? p : null, this.onRejected = typeof m == "function" ? m : null, this.promise = b;
        }
        function f(p, m) {
          var b = !1;
          try {
            p(function(w) {
              b || (b = !0, d(m, w));
            }, function(w) {
              b || (b = !0, g(m, w));
            });
          } catch (w) {
            if (b)
              return;
            b = !0, g(m, w);
          }
        }
        l.prototype.catch = function(p) {
          return this.then(null, p);
        }, l.prototype.then = function(p, m) {
          var b = new this.constructor(c);
          return u(this, new h(p, m, b)), b;
        }, l.prototype.finally = s.a, l.all = function(p) {
          return new l(function(m, b) {
            if (!p || p.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var w = Array.prototype.slice.call(p);
            if (w.length === 0)
              return m([]);
            var x = w.length;
            function y(D, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var C = E.then;
                  if (typeof C == "function")
                    return void C.call(E, function(B) {
                      y(D, B);
                    }, b);
                }
                w[D] = E, --x == 0 && m(w);
              } catch (B) {
                b(B);
              }
            }
            for (var T = 0; T < w.length; T++)
              y(T, w[T]);
          });
        }, l.resolve = function(p) {
          return p && typeof p == "object" && p.constructor === l ? p : new l(function(m) {
            m(p);
          });
        }, l.reject = function(p) {
          return new l(function(m, b) {
            b(p);
          });
        }, l.race = function(p) {
          return new l(function(m, b) {
            for (var w = 0, x = p.length; w < x; w++)
              p[w].then(m, b);
          });
        }, l._immediateFn = typeof i == "function" && function(p) {
          i(p);
        } || function(p) {
          a(p, 0);
        }, l._unhandledRejectionFn = function(p) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", p);
        }, o.a = l;
      }).call(this, n(5).setImmediate);
    }, function(t, o, n) {
      o.a = function(i) {
        var s = this.constructor;
        return this.then(function(a) {
          return s.resolve(i()).then(function() {
            return a;
          });
        }, function(a) {
          return s.resolve(i()).then(function() {
            return s.reject(a);
          });
        });
      };
    }, function(t, o, n) {
      function i(f) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
          return typeof p;
        } : function(p) {
          return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
        })(f);
      }
      n(4);
      var s, a, c, l, u, d, g, v = n(8), h = (a = function(f) {
        return new Promise(function(p, m) {
          f = l(f), (f = u(f)).beforeSend && f.beforeSend();
          var b = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          b.open(f.method, f.url), b.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(f.headers).forEach(function(x) {
            var y = f.headers[x];
            b.setRequestHeader(x, y);
          });
          var w = f.ratio;
          b.upload.addEventListener("progress", function(x) {
            var y = Math.round(x.loaded / x.total * 100), T = Math.ceil(y * w / 100);
            f.progress(Math.min(T, 100));
          }, !1), b.addEventListener("progress", function(x) {
            var y = Math.round(x.loaded / x.total * 100), T = Math.ceil(y * (100 - w) / 100) + w;
            f.progress(Math.min(T, 100));
          }, !1), b.onreadystatechange = function() {
            if (b.readyState === 4) {
              var x = b.response;
              try {
                x = JSON.parse(x);
              } catch {
              }
              var y = v.parseHeaders(b.getAllResponseHeaders()), T = { body: x, code: b.status, headers: y };
              g(b.status) ? p(T) : m(T);
            }
          }, b.send(f.data);
        });
      }, c = function(f) {
        return f.method = "POST", a(f);
      }, l = function() {
        var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (f.url && typeof f.url != "string")
          throw new Error("Url must be a string");
        if (f.url = f.url || "", f.method && typeof f.method != "string")
          throw new Error("`method` must be a string or null");
        if (f.method = f.method ? f.method.toUpperCase() : "GET", f.headers && i(f.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (f.headers = f.headers || {}, f.type && (typeof f.type != "string" || !Object.values(s).includes(f.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (f.progress && typeof f.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (f.progress = f.progress || function(p) {
        }, f.beforeSend = f.beforeSend || function(p) {
        }, f.ratio && typeof f.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (f.ratio < 0 || f.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (f.ratio = f.ratio || 90, f.accept && typeof f.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (f.accept = f.accept || "*/*", f.multiple && typeof f.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (f.multiple = f.multiple || !1, f.fieldName && typeof f.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return f.fieldName = f.fieldName || "files", f;
      }, u = function(f) {
        switch (f.method) {
          case "GET":
            var p = d(f.data, s.URLENCODED);
            delete f.data, f.url = /\?/.test(f.url) ? f.url + "&" + p : f.url + "?" + p;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var m = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || s.JSON;
            }(f);
            (v.isFormData(f.data) || v.isFormElement(f.data)) && (m = s.FORM), f.data = d(f.data, m), m !== h.contentType.FORM && (f.headers["content-type"] = m);
        }
        return f;
      }, d = function() {
        var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case s.URLENCODED:
            return v.urlEncode(f);
          case s.JSON:
            return v.jsonEncode(f);
          case s.FORM:
            return v.formEncode(f);
          default:
            return f;
        }
      }, g = function(f) {
        return f >= 200 && f < 300;
      }, { contentType: s = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: a, get: function(f) {
        return f.method = "GET", a(f);
      }, post: c, transport: function(f) {
        return f = l(f), v.selectFiles(f).then(function(p) {
          for (var m = new FormData(), b = 0; b < p.length; b++)
            m.append(f.fieldName, p[b], p[b].name);
          v.isObject(f.data) && Object.keys(f.data).forEach(function(x) {
            var y = f.data[x];
            m.append(x, y);
          });
          var w = f.beforeSend;
          return f.beforeSend = function() {
            return w(p);
          }, f.data = m, c(f);
        });
      }, selectFiles: function(f) {
        return delete (f = l(f)).beforeSend, v.selectFiles(f);
      } });
      t.exports = h;
    }, function(t, o, n) {
      n.r(o);
      var i = n(1);
      window.Promise = window.Promise || i.a;
    }, function(t, o, n) {
      (function(i) {
        var s = i !== void 0 && i || typeof self < "u" && self || window, a = Function.prototype.apply;
        function c(l, u) {
          this._id = l, this._clearFn = u;
        }
        o.setTimeout = function() {
          return new c(a.call(setTimeout, s, arguments), clearTimeout);
        }, o.setInterval = function() {
          return new c(a.call(setInterval, s, arguments), clearInterval);
        }, o.clearTimeout = o.clearInterval = function(l) {
          l && l.close();
        }, c.prototype.unref = c.prototype.ref = function() {
        }, c.prototype.close = function() {
          this._clearFn.call(s, this._id);
        }, o.enroll = function(l, u) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = u;
        }, o.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, o._unrefActive = o.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var u = l._idleTimeout;
          u >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, u));
        }, n(6), o.setImmediate = typeof self < "u" && self.setImmediate || i !== void 0 && i.setImmediate || this && this.setImmediate, o.clearImmediate = typeof self < "u" && self.clearImmediate || i !== void 0 && i.clearImmediate || this && this.clearImmediate;
      }).call(this, n(0));
    }, function(t, o, n) {
      (function(i, s) {
        (function(a, c) {
          if (!a.setImmediate) {
            var l, u, d, g, v, h = 1, f = {}, p = !1, m = a.document, b = Object.getPrototypeOf && Object.getPrototypeOf(a);
            b = b && b.setTimeout ? b : a, {}.toString.call(a.process) === "[object process]" ? l = function(y) {
              s.nextTick(function() {
                x(y);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var y = !0, T = a.onmessage;
                return a.onmessage = function() {
                  y = !1;
                }, a.postMessage("", "*"), a.onmessage = T, y;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", v = function(y) {
              y.source === a && typeof y.data == "string" && y.data.indexOf(g) === 0 && x(+y.data.slice(g.length));
            }, a.addEventListener ? a.addEventListener("message", v, !1) : a.attachEvent("onmessage", v), l = function(y) {
              a.postMessage(g + y, "*");
            }) : a.MessageChannel ? ((d = new MessageChannel()).port1.onmessage = function(y) {
              x(y.data);
            }, l = function(y) {
              d.port2.postMessage(y);
            }) : m && "onreadystatechange" in m.createElement("script") ? (u = m.documentElement, l = function(y) {
              var T = m.createElement("script");
              T.onreadystatechange = function() {
                x(y), T.onreadystatechange = null, u.removeChild(T), T = null;
              }, u.appendChild(T);
            }) : l = function(y) {
              setTimeout(x, 0, y);
            }, b.setImmediate = function(y) {
              typeof y != "function" && (y = new Function("" + y));
              for (var T = new Array(arguments.length - 1), D = 0; D < T.length; D++)
                T[D] = arguments[D + 1];
              var E = { callback: y, args: T };
              return f[h] = E, l(h), h++;
            }, b.clearImmediate = w;
          }
          function w(y) {
            delete f[y];
          }
          function x(y) {
            if (p)
              setTimeout(x, 0, y);
            else {
              var T = f[y];
              if (T) {
                p = !0;
                try {
                  (function(D) {
                    var E = D.callback, C = D.args;
                    switch (C.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(C[0]);
                        break;
                      case 2:
                        E(C[0], C[1]);
                        break;
                      case 3:
                        E(C[0], C[1], C[2]);
                        break;
                      default:
                        E.apply(c, C);
                    }
                  })(T);
                } finally {
                  w(y), p = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, n(0), n(7));
    }, function(t, o) {
      var n, i, s = t.exports = {};
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function c() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(b) {
        if (n === setTimeout)
          return setTimeout(b, 0);
        if ((n === a || !n) && setTimeout)
          return n = setTimeout, setTimeout(b, 0);
        try {
          return n(b, 0);
        } catch {
          try {
            return n.call(null, b, 0);
          } catch {
            return n.call(this, b, 0);
          }
        }
      }
      (function() {
        try {
          n = typeof setTimeout == "function" ? setTimeout : a;
        } catch {
          n = a;
        }
        try {
          i = typeof clearTimeout == "function" ? clearTimeout : c;
        } catch {
          i = c;
        }
      })();
      var u, d = [], g = !1, v = -1;
      function h() {
        g && u && (g = !1, u.length ? d = u.concat(d) : v = -1, d.length && f());
      }
      function f() {
        if (!g) {
          var b = l(h);
          g = !0;
          for (var w = d.length; w; ) {
            for (u = d, d = []; ++v < w; )
              u && u[v].run();
            v = -1, w = d.length;
          }
          u = null, g = !1, function(x) {
            if (i === clearTimeout)
              return clearTimeout(x);
            if ((i === c || !i) && clearTimeout)
              return i = clearTimeout, clearTimeout(x);
            try {
              i(x);
            } catch {
              try {
                return i.call(null, x);
              } catch {
                return i.call(this, x);
              }
            }
          }(b);
        }
      }
      function p(b, w) {
        this.fun = b, this.array = w;
      }
      function m() {
      }
      s.nextTick = function(b) {
        var w = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var x = 1; x < arguments.length; x++)
            w[x - 1] = arguments[x];
        d.push(new p(b, w)), d.length !== 1 || g || l(f);
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.prependListener = m, s.prependOnceListener = m, s.listeners = function(b) {
        return [];
      }, s.binding = function(b) {
        throw new Error("process.binding is not supported");
      }, s.cwd = function() {
        return "/";
      }, s.chdir = function(b) {
        throw new Error("process.chdir is not supported");
      }, s.umask = function() {
        return 0;
      };
    }, function(t, o, n) {
      function i(a, c) {
        for (var l = 0; l < c.length; l++) {
          var u = c[l];
          u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(a, u.key, u);
        }
      }
      var s = n(9);
      t.exports = function() {
        function a() {
          (function(d, g) {
            if (!(d instanceof g))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
        }
        var c, l, u;
        return c = a, u = [{ key: "urlEncode", value: function(d) {
          return s(d);
        } }, { key: "jsonEncode", value: function(d) {
          return JSON.stringify(d);
        } }, { key: "formEncode", value: function(d) {
          if (this.isFormData(d))
            return d;
          if (this.isFormElement(d))
            return new FormData(d);
          if (this.isObject(d)) {
            var g = new FormData();
            return Object.keys(d).forEach(function(v) {
              var h = d[v];
              g.append(v, h);
            }), g;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        } }, { key: "isFormData", value: function(d) {
          return d instanceof FormData;
        } }, { key: "isFormElement", value: function(d) {
          return d instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(g, v) {
            var h = document.createElement("INPUT");
            h.type = "file", d.multiple && h.setAttribute("multiple", "multiple"), d.accept && h.setAttribute("accept", d.accept), h.style.display = "none", document.body.appendChild(h), h.addEventListener("change", function(f) {
              var p = f.target.files;
              g(p), document.body.removeChild(h);
            }, !1), h.click();
          });
        } }, { key: "parseHeaders", value: function(d) {
          var g = d.trim().split(/[\r\n]+/), v = {};
          return g.forEach(function(h) {
            var f = h.split(": "), p = f.shift(), m = f.join(": ");
            p && (v[p] = m);
          }), v;
        } }], (l = null) && i(c.prototype, l), u && i(c, u), a;
      }();
    }, function(t, o) {
      var n = function(s) {
        return encodeURIComponent(s).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, i = function(s, a, c, l) {
        return a = a || null, c = c || "&", l = l || null, s ? function(u) {
          for (var d = new Array(), g = 0; g < u.length; g++)
            u[g] && d.push(u[g]);
          return d;
        }(Object.keys(s).map(function(u) {
          var d, g, v = u;
          if (l && (v = l + "[" + v + "]"), typeof s[u] == "object" && s[u] !== null)
            d = i(s[u], null, c, v);
          else {
            a && (g = v, v = !isNaN(parseFloat(g)) && isFinite(g) ? a + Number(v) : v);
            var h = s[u];
            h = (h = (h = (h = h === !0 ? "1" : h) === !1 ? "0" : h) === 0 ? "0" : h) || "", d = n(v) + "=" + n(h);
          }
          return d;
        })).join(c).replace(/[!'()*]/g, "") : "";
      };
      t.exports = i;
    }]);
  });
})(Nt);
var Jo = Nt.exports;
const re = /* @__PURE__ */ Go(Jo);
function je(r) {
  return r && typeof r.then == "function";
}
class Qo {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: e, onUpload: t, onError: o }) {
    this.config = e, this.onUpload = t, this.onError = o;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: e }) {
    const t = function(n) {
      return new Promise((i, s) => {
        const a = new FileReader();
        a.readAsDataURL(n), a.onload = (c) => {
          e(c.target.result), i();
        }, a.onerror = s;
      });
    };
    let o;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? o = re.selectFiles({ accept: this.config.types }).then((n) => t(n[0]).then(() => {
      const i = this.config.uploader.uploadByFile(n[0]);
      return je(i) || console.warn("Custom uploader method uploadByFile should return a Promise"), i;
    })) : o = re.selectFiles({ accept: this.config.types }).then((n) => t(n[0]).then(() => re.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: () => {
      },
      fieldName: this.config.field
    }).then((i) => i.body))), o.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(e) {
    let t;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (t = this.config.uploader.uploadByUrl(e), je(t) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : t = re.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: e
      }, this.config.additionalRequestData),
      type: re.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((o) => o.body), t.then((o) => {
      this.onUpload(o);
    }).catch((o) => {
      this.onError(o);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(e, { onPreview: t }) {
    const o = new FileReader();
    o.readAsDataURL(e), o.onload = (i) => {
      t(i.target.result);
    };
    let n;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      n = this.config.uploader.uploadByFile(e), je(n) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const i = new FormData();
      i.append(this.config.field, e), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([s, a]) => {
        i.append(s, a);
      }), n = re.post({
        url: this.config.endpoints.byFile,
        data: i,
        type: re.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((s) => s.body);
    }
    n.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
    });
  }
}
/**
 * Image Tool for the Editor.js
 *
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
let en = class We {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: At,
      title: "Image"
    };
  }
  /**
   * Available image tools
   *
   * @returns {Array}
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: Xo,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: Zo,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: Ko,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageToolData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   * @param {BlockAPI|{}} tool.block - current Block API
   */
  constructor({ data: e, config: t, api: o, readOnly: n, block: i }) {
    this.api = o, this.readOnly = n, this.block = i, this.config = {
      endpoints: t.endpoints || "",
      additionalRequestData: t.additionalRequestData || {},
      additionalRequestHeaders: t.additionalRequestHeaders || {},
      field: t.field || "image",
      types: t.types || "image/*",
      captionPlaceholder: this.api.i18n.t(t.captionPlaceholder || "Caption"),
      buttonContent: t.buttonContent || "",
      uploader: t.uploader || void 0,
      actions: t.actions || []
    }, this.uploader = new Qo({
      config: this.config,
      onUpload: (s) => this.onUpload(s),
      onError: (s) => this.uploadingFailed(s)
    }), this.ui = new X({
      api: o,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (s) => {
            this.ui.showPreloader(s);
          }
        });
      },
      readOnly: n
    }), this._data = {}, this.data = e;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {ImageToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.file && e.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const e = this.ui.nodes.caption;
    return this._data.caption = e.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return We.tunes.concat(this.config.actions).map((e) => ({
      icon: e.icon,
      label: this.api.i18n.t(e.title),
      name: e.name,
      toggle: e.toggle,
      isActive: this.data[e.name],
      onActivate: () => {
        if (typeof e.action == "function") {
          e.action(e.name);
          return;
        }
        this.tuneToggled(e.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   *
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   *
   * @public
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param {CustomEvent} event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   * @returns {void}
   */
  async onPaste(e) {
    switch (e.type) {
      case "tag": {
        const t = e.detail.data;
        if (/^blob:/.test(t.src)) {
          const o = await (await fetch(t.src)).blob();
          this.uploadFile(o);
          break;
        }
        this.uploadUrl(t.src);
        break;
      }
      case "pattern": {
        const t = e.detail.data;
        this.uploadUrl(t);
        break;
      }
      case "file": {
        const t = e.detail.file;
        this.uploadFile(t);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageToolData} data - data in Image Tool format
   */
  set data(e) {
    this.image = e.file, this._data.caption = e.caption || "", this.ui.fillCaption(this._data.caption), We.tunes.forEach(({ name: t }) => {
      const o = typeof e[t] < "u" ? e[t] === !0 || e[t] === "true" : !1;
      this.setTune(t, o);
    });
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(e) {
    this._data.file = e || {}, e && e.url && this.ui.fillImage(e.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(e) {
    e.success && e.file ? this.image = e.file : this.uploadingFailed("incorrect response: " + JSON.stringify(e));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(e) {
    console.log("Image Tool: uploading failed because of", e), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  tuneToggled(e) {
    this.setTune(e, !this._data[e]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(e, t) {
    this._data[e] = t, this.ui.applyTune(e, t), e === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = t;
    }).catch((o) => {
      console.error(o);
    });
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(e) {
    this.uploader.uploadByFile(e, {
      onPreview: (t) => {
        this.ui.showPreloader(t);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(e) {
    this.ui.showPreloader(e), this.uploader.uploadByUrl(e);
  }
};
(function() {
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")), document.head.appendChild(r);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const tn = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', on = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', nn = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
class be {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: nn,
      title: "Quote"
    };
  }
  /**
   * Empty Quote is not empty Block
   *
   * @public
   * @returns {boolean}
   */
  static get contentless() {
    return !0;
  }
  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for quote text
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  /**
   * Default placeholder for quote caption
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  /**
   * Allowed quote alignments
   *
   * @public
   * @returns {{left: string, center: string}}
   */
  static get ALIGNMENTS() {
    return {
      left: "left",
      center: "center"
    };
  }
  /**
   * Default quote alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT() {
    return be.ALIGNMENTS.left;
  }
  /**
   * Allow Quote to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       *
       * @param {QuoteData} quoteData
       * @returns {string}
       */
      export: function(e) {
        return e.caption ? `${e.text} — ${e.caption}` : e.text;
      }
    };
  }
  /**
   * Tool`s styles
   *
   * @returns {{baseClass: string, wrapper: string, quote: string, input: string, caption: string}}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    };
  }
  /**
   * Tool`s settings properties
   *
   * @returns {*[]}
   */
  get settings() {
    return [
      {
        name: "left",
        icon: on
      },
      {
        name: "center",
        icon: tn
      }
    ];
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: QuoteData, config: QuoteConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: n }) {
    const { ALIGNMENTS: i, DEFAULT_ALIGNMENT: s } = be;
    this.api = o, this.readOnly = n, this.quotePlaceholder = t.quotePlaceholder || be.DEFAULT_QUOTE_PLACEHOLDER, this.captionPlaceholder = t.captionPlaceholder || be.DEFAULT_CAPTION_PLACEHOLDER, this.data = {
      text: e.text || "",
      caption: e.caption || "",
      alignment: Object.values(i).includes(e.alignment) && e.alignment || t.defaultAlignment || s
    };
  }
  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const e = this._make("blockquote", [this.CSS.baseClass, this.CSS.wrapper]), t = this._make("div", [this.CSS.input, this.CSS.text], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.text
    }), o = this._make("div", [this.CSS.input, this.CSS.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption
    });
    return t.dataset.placeholder = this.quotePlaceholder, o.dataset.placeholder = this.captionPlaceholder, e.appendChild(t), e.appendChild(o), e;
  }
  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(e) {
    const t = e.querySelector(`.${this.CSS.text}`), o = e.querySelector(`.${this.CSS.caption}`);
    return Object.assign(this.data, {
      text: t.innerHTML,
      caption: o.innerHTML
    });
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      },
      caption: {
        br: !0
      },
      alignment: {}
    };
  }
  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   *
   * @returns {TunesMenuConfig}
   *
   */
  /*　機能しないため削除　*/
  // renderSettings() {
  //   const capitalize = str => str[0].toUpperCase() + str.substr(1);
  //   return this.settings.map(item => ({
  //     icon: item.icon,
  //     label: this.api.i18n.t(`Align ${capitalize(item.name)}`),
  //     onActivate: () => this._toggleTune(item.name),
  //     isActive: this.data.alignment === item.name,
  //     closeOnActivate: true,
  //   }));
  // };
  /**
   * Toggle quote`s alignment
   *
   * @param {string} tune - alignment
   * @private
   */
  _toggleTune(e) {
    this.data.alignment = e;
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(e, t = null, o = {}) {
    const n = document.createElement(e);
    Array.isArray(t) ? n.classList.add(...t) : t && n.classList.add(t);
    for (const i in o)
      n[i] = o[i];
    return n;
  }
}
const he = {
  fontWeight: "bold",
  backgroundColor: "#FFDA00",
  width: "100%",
  textAlign: "center",
  paddingTop: "0.3em",
  paddingBottom: "0.3em",
  border: "1px solid white"
}, rn = "このラインより先を有料にする";
class sn {
  constructor() {
  }
  static get toolbox() {
    return {
      title: "Payment",
      icon: '<svg style="transform:scale(0.7)" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0097 11.2778H14.218V12.7222H10.2863V14.1667H14.218V15.6111H10.2863V18.5H8.71365V15.6111H4.78198V14.1667H8.71365V12.7222H4.78198V11.2778H7.99022L3.99564 5.5H5.85926L9.49998 10.765L13.1407 5.5H15.0043L11.0097 11.2778Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H6.16354L9.5 9.82499L12.8365 5H16L12.0054 10.7778H14.7684V13.2222H10.8368V13.6667H14.7684V16.1111H10.8368V19H8.16323V16.1111H4.23156V13.6667H8.16323V13.2222H4.23156V10.7778H6.99457L3 5ZM4.99133 6L8.9859 11.7778H5.33243V12.2222H9.2641V14.6667H5.33243V15.1111H9.2641V18H9.7359V15.1111H13.6676V14.6667H9.7359V12.2222H13.6676V11.7778H10.0141L14.0087 6H13.445L9.5 11.705L5.55501 6H4.99133Z" fill="#000000"/><rect width="4" height="3" fill="#000000"/><rect x="5" width="4" height="3" fill="#000000"/><rect x="10" width="4" height="3" fill="#000000"/><rect x="15" width="4" height="3" fill="#000000"/></svg>'
    };
  }
  render() {
    var t, o, n, i, s, a;
    const e = document.createElement("div");
    return e.innerText = rn, e.style.fontWeight = ((t = he.fontWeight) == null ? void 0 : t.toString()) ?? "", e.style.backgroundColor = ((o = he.backgroundColor) == null ? void 0 : o.toString()) ?? "", e.style.paddingTop = ((n = he.paddingTop) == null ? void 0 : n.toString()) ?? "", e.style.paddingBottom = ((i = he.paddingBottom) == null ? void 0 : i.toString()) ?? "", e.style.width = ((s = he.width) == null ? void 0 : s.toString()) ?? "", e.style.textAlign = ((a = he.textAlign) == null ? void 0 : a.toString()) ?? "", e;
  }
  save() {
    return {};
  }
}
const an = {
  class: Mo,
  shortcut: "CMD+SHIFT+H",
  config: {
    placeholder: "へッダー",
    levels: [2, 3],
    defaultLevel: 2
  }
}, ln = {
  class: Fo,
  inlineToolbar: !0,
  config: {
    defaultStyle: "unordered"
  }
}, cn = {
  class: Wo,
  inlineToolbar: !0,
  config: {
    services: {
      youtube: !0,
      vimeo: !0,
      twitter: !0,
      instagram: !0
    }
  }
}, dn = {
  class: be,
  config: {
    quotePlaceholder: "引用を追加",
    captionPlaceholder: "キャプションを追加"
  }
}, hn = (r) => ({
  class: Do,
  config: r
}), un = (r) => ({
  class: en,
  config: r
}), pn = {
  class: sn
}, fn = (r) => ({
  header: an,
  link: hn(r == null ? void 0 : r.link),
  list: ln,
  embed: cn,
  image: un(r == null ? void 0 : r.image),
  quote: dn,
  payment: pn
});
function gn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Pt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var e = {}.hasOwnProperty;
    function t() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (i = n(i, o(a)));
      }
      return i;
    }
    function o(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return t.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var a in i)
        e.call(i, a) && i[a] && (s = n(s, a));
      return s;
    }
    function n(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    r.exports ? (t.default = t, r.exports = t) : window.classNames = t;
  })();
})(Pt);
var mn = Pt.exports;
const Q = /* @__PURE__ */ gn(mn), bn = "_payment_8gufy_89", L = {
  "cdx-block": "_cdx-block_8gufy_2",
  "ce-block": "_ce-block_8gufy_7",
  "ce-paragraph": "_ce-paragraph_8gufy_14",
  "link-tool": "_link-tool_8gufy_21",
  "link-tool__content--rendered": "_link-tool__content--rendered_8gufy_24",
  "link-in": "_link-in_8gufy_1",
  "link-tool__content": "_link-tool__content_8gufy_24",
  "link-tool__image": "_link-tool__image_8gufy_45",
  "link-tool__title": "_link-tool__title_8gufy_55",
  "link-tool__description": "_link-tool__description_8gufy_61",
  "link-tool__anchor": "_link-tool__anchor_8gufy_70",
  "embed-tool": "_embed-tool_8gufy_80",
  "embed-tool__content": "_embed-tool__content_8gufy_84",
  payment: bn,
  "cdx-quote": "_cdx-quote_8gufy_100",
  "cdx-input": "_cdx-input_8gufy_103",
  "cdx-quote__text": "_cdx-quote__text_8gufy_114",
  "cdx-nested-list": "_cdx-nested-list_8gufy_121",
  "cdx-nested-list--ordered": "_cdx-nested-list--ordered_8gufy_128",
  "cdx-nested-list__item": "_cdx-nested-list__item_8gufy_131",
  "cdx-nested-list--unordered": "_cdx-nested-list--unordered_8gufy_150",
  "cdx-list-settings": "_cdx-list-settings_8gufy_176",
  "cdx-settings-button": "_cdx-settings-button_8gufy_179",
  "payment-button": "_payment-button_8gufy_184"
}, Dt = ({ id: r, data: e }) => {
  if (e)
    return /* @__PURE__ */ I(
      "p",
      {
        id: r,
        className: Q(L["ce-paragraph"], L["cdx-block"]),
        dangerouslySetInnerHTML: { __html: e.text }
      }
    );
}, Rt = ({ id: r, data: e }) => {
  if (e)
    return /* @__PURE__ */ I("div", { children: /* @__PURE__ */ I("div", { id: r, className: Q(e.withBackground && "bg-[#cdd1e0] p-[15px]"), children: /* @__PURE__ */ I(
      "img",
      {
        src: e.file.url,
        alt: e.caption ?? void 0,
        className: Q(
          e.withBackground && "max-w-[60%]",
          "m-auto",
          e.withBorder && "border border-[#e8e8eb]",
          e.stretched && "w-full"
        )
      }
    ) }) });
}, Ft = ({ id: r, data: e }) => {
  if (!e)
    return;
  const t = new URL(e.link).hostname;
  return /* @__PURE__ */ I("div", { className: L["cdx-block"], children: /* @__PURE__ */ I("div", { id: r, className: L["link-tool"], children: /* @__PURE__ */ Be(
    "a",
    {
      className: Q(
        L["link-tool__content"],
        L["link-tool__content--rendered"]
      ),
      target: "_blank",
      rel: "nofollow noindex noreferrer",
      href: e.link,
      children: [
        /* @__PURE__ */ I(
          "div",
          {
            className: L["link-tool__image"],
            style: {
              backgroundImage: `url(${e.meta.image.url})`
            }
          }
        ),
        /* @__PURE__ */ I("div", { className: L["link-tool__title"], children: e.meta.title }),
        /* @__PURE__ */ I("p", { className: L["link-tool__description"], children: e.meta.description }),
        /* @__PURE__ */ I("span", { className: L["link-tool__anchor"], children: t })
      ]
    }
  ) }) });
}, Ht = ({ id: r, data: e }) => {
  if (e)
    return e.level === 2 ? /* @__PURE__ */ I(
      "h2",
      {
        id: r,
        className: L["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1.25rem",
          fontWeight: "bold"
        },
        children: e.text
      }
    ) : e.level === 3 ? /* @__PURE__ */ I(
      "h3",
      {
        id: r,
        className: L["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1.125rem",
          fontWeight: "bold"
        },
        children: e.text
      }
    ) : /* @__PURE__ */ I(
      "h2",
      {
        id: r,
        className: L["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1rem",
          fontWeight: "bold"
        },
        children: e.text
      }
    );
}, jt = ({ id: r, data: e }) => {
  if (!e)
    return;
  const t = e.style, o = t === "ordered" ? "cdx-nested-list--ordered" : "cdx-nested-list--unordered", n = (i) => i.map((s, a) => /* @__PURE__ */ I("li", { className: L["cdx-nested-list__item"], children: /* @__PURE__ */ Be("div", { className: L["cdx-nested-list__item-body"], children: [
    /* @__PURE__ */ I(
      "div",
      {
        className: L["cdx-nested-list__item-content"],
        dangerouslySetInnerHTML: {
          __html: s.content ?? ""
        }
      }
    ),
    s.items.length !== 0 && t === "ordered" && /* @__PURE__ */ I(
      "ol",
      {
        className: Q(
          L["cdx-nested-list"],
          L["cdx-nested-list__item-children"],
          L[o]
        ),
        children: n(s.items)
      }
    ),
    s.items.length !== 0 && t === "unordered" && /* @__PURE__ */ I(
      "ul",
      {
        className: Q(
          L["cdx-nested-list"],
          L["cdx-nested-list__item-children"],
          L[o]
        ),
        children: n(s.items)
      }
    )
  ] }) }, a));
  return e.style === "ordered" ? /* @__PURE__ */ I(
    "ol",
    {
      id: r,
      className: Q(
        L["cdx-nested-list"],
        L["cdx-block"],
        L[o]
      ),
      children: n(e.items)
    }
  ) : /* @__PURE__ */ I(
    "ul",
    {
      id: r,
      className: Q(
        L["cdx-nested-list"],
        L["cdx-block"],
        L[o]
      ),
      children: n(e.items)
    }
  );
}, Ut = ({ id: r, data: e }) => {
  if (e)
    return /* @__PURE__ */ I("div", { className: L["cdx-block"], children: /* @__PURE__ */ I("div", { id: r, className: L["embed-tool"], children: /* @__PURE__ */ I(
      "iframe",
      {
        frameBorder: "0",
        src: e.embed,
        height: "320",
        className: L["embed-tool__content"]
      }
    ) }) });
}, $t = ({ id: r, data: e }) => {
  if (!e)
    return;
  const t = e.caption.replace(/<br\s*\/?>/gi, "");
  return /* @__PURE__ */ I("blockquote", { id: r, className: Q(L["cdx-block"], L["cdx-quote"]), children: /* @__PURE__ */ Be(
    "div",
    {
      className: Q(L["cdx-input"], L["cdx-quote__text"]),
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      },
      children: [
        /* @__PURE__ */ I(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: e.text
            }
          }
        ),
        /* @__PURE__ */ I(
          "cite",
          {
            style: {
              display: "flex",
              justifyContent: "flex-end",
              color: "#707684"
            },
            dangerouslySetInnerHTML: {
              __html: t
            }
          }
        )
      ]
    }
  ) });
}, kn = ({ id: r }) => /* @__PURE__ */ I("div", { id: r, className: L.payment, children: "このラインより先を有料にする" }), zt = (r = {}) => {
  const e = Object.assign({}, r), t = (n) => n.map(o), o = (n, i) => {
    if (e[n.type])
      return /* @__PURE__ */ I("div", { className: L["ce-block"], children: /* @__PURE__ */ I("div", { className: L["cdx-block"], children: e[n.type](n) }) }, i);
    throw new vn(n.type);
  };
  return {
    parse: t
  };
};
class vn extends Error {
  constructor(e) {
    super(`\x1B[31m The Parser function of type "${e}" is not defined. 

    Define your custom parser functions as: \x1B[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1B[0m`), this.name = "ParseFunctionError";
  }
}
const wn = ({ key: r, value: e, onClick: t }) => /* @__PURE__ */ I(
  "button",
  {
    className: e ? L.payment : L["payment-button"],
    onClick: t,
    children: "このラインより先を有料にする"
  },
  r
), yn = (r) => {
  const e = (i) => {
    if (typeof document < "u" && i) {
      const s = document.getElementById(i);
      s == null || s.scrollIntoView({ behavior: "smooth" });
    }
  }, t = {
    cursor: "pointer",
    margin: "1rem"
  }, o = {
    listStyle: "none",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    ...t
  }, n = {
    paddingLeft: "0.5rem",
    listStyle: "none",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    ...t
  };
  return /* @__PURE__ */ Be(
    "div",
    {
      style: {
        backgroundColor: "#FDFDFD"
      },
      children: [
        /* @__PURE__ */ I(
          "p",
          {
            style: {
              textAlign: "center",
              color: "#A3A3A3",
              margin: "o.5rem"
            },
            children: "目次"
          }
        ),
        /* @__PURE__ */ I(
          "ul",
          {
            style: {
              color: "#3F3F3F",
              listStyleType: "decimal",
              listStylePosition: "inside"
            },
            children: r.map((i, s) => /* @__PURE__ */ Be(vo, { children: [
              /* @__PURE__ */ I(
                "li",
                {
                  style: (() => {
                    if (i.data.level === 2)
                      return o;
                    if (i.data.level === 3)
                      return n;
                  })(),
                  onClick: () => e(i.id),
                  children: i.data.text
                }
              ),
              r.length - 1 !== s && /* @__PURE__ */ I(
                "hr",
                {
                  style: {
                    color: "#A3A3A3",
                    opacity: 0.3
                  }
                }
              )
            ] }, i.id))
          }
        )
      ]
    }
  );
}, xn = zt({
  paragraph: Dt,
  header: Ht,
  list: jt,
  payment: kn,
  image: Rt,
  link: Ft,
  embed: Ut,
  quote: $t
}), Tr = ({ blocks: r }) => {
  if (!r)
    return /* @__PURE__ */ I("div", {});
  const e = xn.parse(r);
  return /* @__PURE__ */ I("div", { className: "w-full", children: e });
}, Br = ({ blocks: r }) => {
  if (!r)
    return /* @__PURE__ */ I("div", {});
  const e = yn(
    r.filter((t) => t.type === "header")
  );
  return /* @__PURE__ */ I("div", { className: "w-full", children: e });
}, _r = (r) => {
  const [e, t] = _t(0);
  return Lt(() => {
    t(r ? Cn(r) : 0);
  }, [r]), e;
}, Cn = (r) => {
  let e = 0;
  return r.blocks.forEach((t) => {
    t.type === "paragraph" && (e += En(t.data)), t.type === "link" && (e += Tn(t.data)), t.type === "header" && (e += Bn(t.data)), t.type === "list" && (e += _n(t.data)), t.type === "embed" && (e += Ln(t.data)), t.type === "image" && (e += Sn(t.data)), t.type === "quote" && (e += In(t.data));
  }), e;
}, En = ({ text: r }) => r.length, Sn = ({ caption: r }) => (r == null ? void 0 : r.length) ?? 0, Tn = ({ link: r }) => r.length, Bn = ({ text: r }) => r.length, _n = ({ items: r }) => {
  const e = (t) => t.map((o) => {
    var n;
    return (((n = o.content) == null ? void 0 : n.length) ?? 0) + e(o.items);
  }).reduce((o, n) => o + n, 0);
  return e(r);
}, Ln = (r) => (r == null ? void 0 : r.source.length) ?? 0, In = ({ text: r, caption: e }) => r.length + e.length, Lr = (r) => {
  const e = /https?:\/\/[\w.-]+(:\d+)?\/article\/preview\/[^/\s?]+(?:[/?][^\s]*)?/g;
  let t = !1;
  return typeof r == "string" ? t = !!r.match(e) : r.blocks.forEach((o) => {
    if (o.type === "paragraph" && o.data.text.match(e) && (t = !0), o.type === "header" && o.data.text.match(e) && (t = !0), o.type === "list") {
      const n = (i) => {
        i.forEach((s) => {
          var a;
          (a = s.content) != null && a.match(e) && (t = !0), n(s.items);
        });
      };
      n(o.data.items);
    }
    o.type === "link" && o.data.link.match(e) && (t = !0), o.type === "quote" && (o.data.text.match(e) && (t = !0), o.data.caption.match(e) && (t = !0));
  }), t;
};
var Mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ot(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Ue() {
}
Object.assign(Ue, {
  default: Ue,
  register: Ue,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(r) {
  const e = (this.document || this.ownerDocument).querySelectorAll(r);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(r) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(r))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(r) {
  const e = document.createDocumentFragment();
  Array.isArray(r) || (r = [r]), r.forEach((t) => {
    const o = t instanceof Node;
    e.appendChild(o ? t : document.createTextNode(t));
  }), this.insertBefore(e, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(r) {
  r = arguments.length === 0 ? !0 : !!r;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), n = parseInt(t.getPropertyValue("border-left-width")), i = this.offsetTop - e.offsetTop < e.scrollTop, s = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, c = this.offsetLeft - e.offsetLeft + this.clientWidth - n > e.scrollLeft + e.clientWidth, l = i && !s;
  (i || s) && r && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || c) && r && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - n + this.clientWidth / 2), (i || s || a || c) && !r && this.scrollIntoView(l);
});
window.requestIdleCallback = window.requestIdleCallback || function(r) {
  const e = Date.now();
  return setTimeout(function() {
    r({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(r) {
  clearTimeout(r);
};
let On = (r = 21) => crypto.getRandomValues(new Uint8Array(r)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var qt = /* @__PURE__ */ ((r) => (r.VERBOSE = "VERBOSE", r.INFO = "INFO", r.WARN = "WARN", r.ERROR = "ERROR", r))(qt || {});
const _ = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, An = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function Ie(r, e, t = "log", o, n = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const i = ["info", "log", "warn", "error"].includes(t), s = [];
  switch (Ie.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!i || r)
        return;
      break;
  }
  o && s.push(o);
  const a = "Editor.js 2.29.1";
  r && (i ? (s.unshift(`line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`, n), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    i ? o ? console[t](`${e} %o`, ...s) : console[t](e, ...s) : console[t](e);
  } catch {
  }
}
Ie.logLevel = "VERBOSE";
function Nn(r) {
  Ie.logLevel = r;
}
const P = Ie.bind(window, !1), Z = Ie.bind(window, !0);
function le(r) {
  return Object.prototype.toString.call(r).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function F(r) {
  return le(r) === "function" || le(r) === "asyncfunction";
}
function z(r) {
  return le(r) === "object";
}
function ne(r) {
  return le(r) === "string";
}
function Pn(r) {
  return le(r) === "boolean";
}
function vt(r) {
  return le(r) === "number";
}
function wt(r) {
  return le(r) === "undefined";
}
function K(r) {
  return r ? Object.keys(r).length === 0 && r.constructor === Object : !0;
}
function Vt(r) {
  return r > 47 && r < 58 || // number keys
  r === 32 || r === 13 || // Space bar & return key(s)
  r === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  r > 64 && r < 91 || // letter keys
  r > 95 && r < 112 || // Numpad keys
  r > 185 && r < 193 || // ;=,-./` (in order)
  r > 218 && r < 223;
}
async function Dn(r, e = () => {
}, t = () => {
}) {
  async function o(n, i, s) {
    try {
      await n.function(n.data), await i(wt(n.data) ? {} : n.data);
    } catch {
      s(wt(n.data) ? {} : n.data);
    }
  }
  return r.reduce(async (n, i) => (await n, o(i, e, t)), Promise.resolve());
}
function Wt(r) {
  return Array.prototype.slice.call(r);
}
function Ne(r, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => r.apply(t, o), e);
  };
}
function Rn(r) {
  return r.name.split(".").pop();
}
function Fn(r) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(r);
}
function yt(r, e, t) {
  let o;
  return (...n) => {
    const i = this, s = () => {
      o = null, r.apply(i, n);
    };
    window.clearTimeout(o), o = window.setTimeout(s, e);
  };
}
function Ye(r, e, t = void 0) {
  let o, n, i, s = null, a = 0;
  t || (t = {});
  const c = function() {
    a = t.leading === !1 ? 0 : Date.now(), s = null, i = r.apply(o, n), s || (o = n = null);
  };
  return function() {
    const l = Date.now();
    !a && t.leading === !1 && (a = l);
    const u = e - (l - a);
    return o = this, n = arguments, u <= 0 || u > e ? (s && (clearTimeout(s), s = null), a = l, i = r.apply(o, n), s || (o = n = null)) : !s && t.trailing !== !1 && (s = setTimeout(c, u)), i;
  };
}
function Hn() {
  const r = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(r).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (r[e] = !0), r;
}
function ve(r) {
  return r[0].toUpperCase() + r.slice(1);
}
function Ke(r, ...e) {
  if (!e.length)
    return r;
  const t = e.shift();
  if (z(r) && z(t))
    for (const o in t)
      z(t[o]) ? (r[o] || Object.assign(r, { [o]: {} }), Ke(r[o], t[o])) : Object.assign(r, { [o]: t[o] });
  return Ke(r, ...e);
}
function De(r) {
  const e = Hn();
  return r = r.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? r = r.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : r = r.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), r;
}
function jn(r) {
  try {
    return new URL(r).href;
  } catch {
  }
  return r.substring(0, 2) === "//" ? window.location.protocol + r : window.location.origin + r;
}
function Un() {
  return On(10);
}
function $n(r) {
  window.open(r, "_blank");
}
function zn(r = "") {
  return `${r}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Xe(r, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  r && Z(o, "warn");
}
function ye(r, e, t) {
  const o = t.value ? "value" : "get", n = t[o], i = `#${e}Cache`;
  if (t[o] = function(...s) {
    return this[i] === void 0 && (this[i] = n.apply(this, ...s)), this[i];
  }, o === "get" && t.set) {
    const s = t.set;
    t.set = function(a) {
      delete r[i], s.apply(this, a);
    };
  }
  return t;
}
const Yt = 650;
function ae() {
  return window.matchMedia(`(max-width: ${Yt}px)`).matches;
}
const xt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function qn(r, e) {
  const t = Array.isArray(r) || z(r), o = Array.isArray(e) || z(e);
  return t || o ? JSON.stringify(r) === JSON.stringify(e) : r === e;
}
class k {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const n = document.createElement(e);
    Array.isArray(t) ? n.classList.add(...t) : t && n.classList.add(t);
    for (const i in o)
      Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
    return n;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), n = e.parentNode;
    n.insertBefore(o, e), n.insertBefore(e, t), n.insertBefore(t, o), n.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((e) => `input[type="${e}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return Wt(e.querySelectorAll(k.allInputsSelector)).reduce((t, o) => k.isNativeInput(o) || k.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...k.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns {Node} - it can be text Node or Element Node, so that caret will able to work with it
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", n = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let i = e[o];
      if (k.isSingleTag(i) && !k.isNativeInput(i) && !k.isLineBreakTag(i))
        if (i[n])
          i = i[n];
        else if (i.parentNode[n])
          i = i.parentNode[n];
        else
          return i.parentNode;
      return this.getDeepestNode(i, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return vt(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return vt(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (k.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = k.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, t) {
    let o;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("​", ""), t && (o = o.replace(new RegExp(t, "g"), "")), o.trim().length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, t) {
    e.normalize();
    const o = [e];
    for (; o.length > 0; )
      if (e = o.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
          return !1;
        e.childNodes && o.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = k.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return k.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    ne(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (n) => !k.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return k.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...k.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return ne(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, n = window.pageYOffset || document.documentElement.scrollTop, i = t.top + n, s = t.left + o;
    return {
      top: i,
      left: s,
      bottom: i + t.height,
      right: s + t.width
    };
  }
}
const Vn = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": ""
  }
}, Wn = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, Yn = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, Kn = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, Kt = {
  ui: Vn,
  toolNames: Wn,
  tools: Yn,
  blockTunes: Kn
}, pe = class {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(r, e) {
    return pe._t(r, e);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(r, e) {
    return pe._t(r, e);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(r) {
    pe.currentDictionary = r;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(r, e) {
    const t = pe.getNamespace(r);
    return !t || !t[e] ? e : t[e];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(r) {
    return r.split(".").reduce((e, t) => !e || !Object.keys(e).length ? {} : e[t], pe.currentDictionary);
  }
};
let V = pe;
V.currentDictionary = Kt;
class Xt extends Error {
}
class Re {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (n) => {
      const i = t(n), s = this.subscribers[e].indexOf(o);
      return s !== -1 && this.subscribers[e].splice(s, 1), i;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    K(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, n) => {
      const i = n(o);
      return i !== void 0 ? i : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function se(r) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return r.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return r.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return r.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return r.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return r.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return r.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(e) {
      r.stretched = e;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return r.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return r.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(e, t) {
      return r.call(e, t);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return r.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(e) {
      return r.validate(e);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      r.dispatchChange();
    }
  });
}
class nt {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, n = !1) {
    const i = zn("l"), s = {
      id: i,
      element: e,
      eventType: t,
      handler: o,
      options: n
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(s), e.addEventListener(t, o, n), i;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, n) {
    const i = this.findAll(e, t, o);
    i.forEach((s, a) => {
      const c = this.allListeners.indexOf(i[a]);
      c > -1 && (this.allListeners.splice(c, 1), s.element.removeEventListener(s.eventType, s.handler, s.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const n = this.findAll(e, t, o);
    return n.length > 0 ? n[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let n;
    const i = e ? this.findByEventTarget(e) : [];
    return e && t && o ? n = i.filter((s) => s.eventType === t && s.handler === o) : e && t ? n = i.filter((s) => s.eventType === t) : n = i, n;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}
class M {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new nt(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, n, i, s = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, n, i, s)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === M)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}
class S {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? k.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(S.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${S.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${S.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!S.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return P("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return P("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const n = document.createElement("span");
      if (n.getBoundingClientRect) {
        n.appendChild(document.createTextNode("​")), t.insertNode(n), o = n.getBoundingClientRect();
        const i = n.parentNode;
        i.removeChild(n), i.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), n = window.getSelection();
    return k.isNativeInput(e) ? k.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), n.removeAllRanges(), n.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = S.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = S.range;
    if (e === null)
      return;
    const t = k.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return k.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = k.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = S.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const n = window.getSelection();
    let i = null;
    return !n || !n.anchorNode || !n.focusNode ? null : ([
      /** the Node in which the selection begins */
      n.anchorNode,
      /** the Node in which the selection ends */
      n.focusNode
    ].forEach((s) => {
      let a = o;
      for (; a > 0 && s.parentNode && !(s.tagName === e && (i = s, t && s.classList && !s.classList.contains(t) && (i = null), i)); )
        s = s.parentNode, a--;
    }), i);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
}
function Xn(r, e) {
  const { type: t, target: o, addedNodes: n, removedNodes: i } = r;
  if (o === e)
    return !0;
  if (["characterData", "attributes"].includes(t)) {
    const c = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
    return e.contains(c);
  }
  const s = Array.from(n).some((c) => e.contains(c)), a = Array.from(i).some((c) => e.contains(c));
  return s || a;
}
const Ze = "redactor dom changed", Zt = "block changed", Gt = "fake cursor is about to be toggled", Jt = "fake cursor have been set";
function Ct(r, e) {
  return r.mergeable && r.name === e.name;
}
function Zn(r, e) {
  const t = e == null ? void 0 : e.export;
  return F(t) ? t(r) : ne(t) ? r[t] : (t !== void 0 && P("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function Gn(r, e) {
  const t = e == null ? void 0 : e.import;
  return F(t) ? t(r) : ne(t) ? {
    [t]: r
  } : (t !== void 0 && P("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var ee = /* @__PURE__ */ ((r) => (r.APPEND_CALLBACK = "appendCallback", r.RENDERED = "rendered", r.MOVED = "moved", r.UPDATED = "updated", r.REMOVED = "removed", r.ON_PASTE = "onPaste", r))(ee || {});
class $ extends Re {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = Un(),
    data: t,
    tool: o,
    api: n,
    readOnly: i,
    tunesData: s
  }, a) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (c = void 0) => {
      const l = c === void 0, u = c instanceof InputEvent;
      !l && !u && this.detectToolRootChange(c);
      let d;
      l || u ? d = !0 : d = !(c.length > 0 && c.every((g) => {
        const { addedNodes: v, removedNodes: h, target: f } = g;
        return [
          ...Array.from(v),
          ...Array.from(h),
          f
        ].some((p) => (k.isElement(p) || (p = p.parentElement), p && p.closest('[data-mutation-free="true"]') !== null));
      })), d && (this.dropInputsCache(), this.updateCurrentInput(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.api = n, this.editorEventBus = a || null, this.blockAPI = new se(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, i), this.tunes = o.tunes, this.composeTunes(s), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   *
   * @returns {HTMLElement[]}
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = k.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   *
   * @returns {HTMLElement}
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param {HTMLElement | Node} element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o) => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   *
   * @returns {HTMLElement}
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   *
   * @returns {HTMLElement}
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !K(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return F(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = k.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var t, o;
    this.holder.classList.toggle($.CSS.selected, e);
    const n = e === !0 && S.isRangeInsideContainer(this.holder), i = e === !1 && S.isFakeCursorInsideContainer(this.holder);
    (n || i) && ((t = this.editorEventBus) == null || t.emit(Gt, { state: e }), n ? S.addFakeCursor() : S.removeFakeCursor(this.holder), (o = this.editorEventBus) == null || o.emit(Jt, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains($.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle($.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains($.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle($.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (F(this.toolInstance[e])) {
      e === "appendCallback" && P(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        P(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([i, s]) => {
      if (F(s.save))
        try {
          t[i] = s.save();
        } catch (a) {
          P(`Tune ${s.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const o = window.performance.now();
    let n;
    return Promise.resolve(e).then((i) => (n = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: i,
      tunes: t,
      time: n - o
    })).catch((i) => {
      P(`Saving process for ${this.name} tool failed due to the ${i}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in tunes menu.
   * Splits block tunes settings into 2 groups: popover items and custom html.
   */
  getTunes() {
    const e = document.createElement("div"), t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], n = [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((i) => i.render());
    return [o, n].flat().forEach((i) => {
      k.isElement(i) ? e.appendChild(i) : Array.isArray(i) ? t.push(...i) : t.push(i);
    }), [t, e];
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = k.isNativeInput(document.activeElement) || !S.anchorNode ? document.activeElement : S.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), F(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data;
    return e.find((o) => Object.entries(o.data).some(([n, i]) => t[n] && qn(t[n], i)));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return Zn(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = k.make("div", $.CSS.wrapper), t = k.make("div", $.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let n = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((i) => {
      if (F(i.wrap))
        try {
          n = i.wrap(n);
        } catch (s) {
          P(`Tune ${i.constructor.name} wrap method throws an Error %o`, "warn", s);
        }
    }), e.appendChild(n), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), k.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), k.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((n) => Xn(n, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(Ze, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(Ze, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const o = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = o;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
}
class Jn extends M {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, n, i, s, a) => {
      const c = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: n,
        needToFocus: i,
        replace: s
      });
      return new se(c);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new $({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t) => {
      const { BlockManager: o } = this.Editor, n = o.getBlockById(e);
      if (n === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const i = await o.update(n, t);
      return new se(i);
    }, this.convert = (e, t, o) => {
      var n, i;
      const { BlockManager: s, Tools: a } = this.Editor, c = s.getBlockById(e);
      if (!c)
        throw new Error(`Block with id "${e}" not found`);
      const l = a.blockTools.get(c.name), u = a.blockTools.get(t);
      if (!u)
        throw new Error(`Block Tool with type "${t}" not found`);
      const d = ((n = l == null ? void 0 : l.conversionConfig) == null ? void 0 : n.export) !== void 0, g = ((i = u.conversionConfig) == null ? void 0 : i.import) !== void 0;
      if (d && g)
        s.convert(c, t, o);
      else {
        const v = [
          d ? !1 : ve(c.name),
          g ? !1 : ve(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${c.name}" to "${t}" is not possible. ${v} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: n, type: i, data: s }) => this.Editor.BlockManager.composeBlock({
        id: n,
        tool: i || this.config.defaultBlock,
        data: s
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((n) => new se(n));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      Z("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      Z("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new se(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (Z("There is no block with id `" + e + "`", "warn"), null) : new se(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    P(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      Z(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  renderFromHTML(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    Xe(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    P("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
class Qn extends M {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => this.Editor.BlockManager.blocks[e] ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.blocks[e], t, o), !0) : !1, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class ei extends M {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
class it extends M {
  /**
   * Return namespace section for tool or block tune
   *
   * @param tool - tool object
   */
  static getNamespace(e) {
    return e.isTune() ? `blockTunes.${e.name}` : `tools.${e.name}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        Z("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param tool - Tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        t: (t) => V.t(it.getNamespace(e), t)
      }
    );
  }
}
class ti extends M {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param tool - tool object
   */
  getMethodsForTool(e) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e)
      }
    );
  }
}
class oi extends M {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class ni extends M {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, n) => this.on(e, t, o, n),
      off: (e, t, o, n) => this.off(e, t, o, n),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, n) {
    return this.listeners.on(e, t, o, n);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, n) {
    this.listeners.off(e, t, o, n);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var Ge = {}, ii = {
  get exports() {
    return Ge;
  },
  set exports(r) {
    Ge = r;
  }
};
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var s = o[i] = { i, l: !1, exports: {} };
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, s, a) {
        n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, s) {
        if (1 & s && (i = n(i)), 8 & s || 4 & s && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & s && typeof i != "string")
          for (var c in i)
            n.d(a, c, (function(l) {
              return i[l];
            }).bind(null, c));
        return a;
      }, n.n = function(i) {
        var s = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(s, "a", s), s;
      }, n.o = function(i, s) {
        return Object.prototype.hasOwnProperty.call(i, s);
      }, n.p = "/", n(n.s = 0);
    }([function(t, o, n) {
      n(1), /*!
      * Codex JavaScript Notification module
      * https://github.com/codex-team/js-notifier
      */
      t.exports = function() {
        var i = n(6), s = "cdx-notify--bounce-in", a = null;
        return { show: function(c) {
          if (c.message) {
            (function() {
              if (a)
                return !0;
              a = i.getWrapper(), document.body.appendChild(a);
            })();
            var l = null, u = c.time || 8e3;
            switch (c.type) {
              case "confirm":
                l = i.confirm(c);
                break;
              case "prompt":
                l = i.prompt(c);
                break;
              default:
                l = i.alert(c), window.setTimeout(function() {
                  l.remove();
                }, u);
            }
            a.appendChild(l), l.classList.add(s);
          }
        } };
      }();
    }, function(t, o, n) {
      var i = n(2);
      typeof i == "string" && (i = [[t.i, i, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      n(4)(i, s), i.locals && (t.exports = i.locals);
    }, function(t, o, n) {
      (t.exports = n(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(n) {
        var i = [];
        return i.toString = function() {
          return this.map(function(s) {
            var a = function(c, l) {
              var u = c[1] || "", d = c[3];
              if (!d)
                return u;
              if (l && typeof btoa == "function") {
                var g = (h = d, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(h)))) + " */"), v = d.sources.map(function(f) {
                  return "/*# sourceURL=" + d.sourceRoot + f + " */";
                });
                return [u].concat(v).concat([g]).join(`
`);
              }
              var h;
              return [u].join(`
`);
            }(s, n);
            return s[2] ? "@media " + s[2] + "{" + a + "}" : a;
          }).join("");
        }, i.i = function(s, a) {
          typeof s == "string" && (s = [[null, s, ""]]);
          for (var c = {}, l = 0; l < this.length; l++) {
            var u = this[l][0];
            typeof u == "number" && (c[u] = !0);
          }
          for (l = 0; l < s.length; l++) {
            var d = s[l];
            typeof d[0] == "number" && c[d[0]] || (a && !d[2] ? d[2] = a : a && (d[2] = "(" + d[2] + ") and (" + a + ")"), i.push(d));
          }
        }, i;
      };
    }, function(t, o, n) {
      var i, s, a = {}, c = (i = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return s === void 0 && (s = i.apply(this, arguments)), s;
      }), l = /* @__PURE__ */ function(E) {
        var C = {};
        return function(B) {
          if (typeof B == "function")
            return B();
          if (C[B] === void 0) {
            var O = (function(R) {
              return document.querySelector(R);
            }).call(this, B);
            if (window.HTMLIFrameElement && O instanceof window.HTMLIFrameElement)
              try {
                O = O.contentDocument.head;
              } catch {
                O = null;
              }
            C[B] = O;
          }
          return C[B];
        };
      }(), u = null, d = 0, g = [], v = n(5);
      function h(E, C) {
        for (var B = 0; B < E.length; B++) {
          var O = E[B], R = a[O.id];
          if (R) {
            R.refs++;
            for (var N = 0; N < R.parts.length; N++)
              R.parts[N](O.parts[N]);
            for (; N < O.parts.length; N++)
              R.parts.push(x(O.parts[N], C));
          } else {
            var j = [];
            for (N = 0; N < O.parts.length; N++)
              j.push(x(O.parts[N], C));
            a[O.id] = { id: O.id, refs: 1, parts: j };
          }
        }
      }
      function f(E, C) {
        for (var B = [], O = {}, R = 0; R < E.length; R++) {
          var N = E[R], j = C.base ? N[0] + C.base : N[0], A = { css: N[1], media: N[2], sourceMap: N[3] };
          O[j] ? O[j].parts.push(A) : B.push(O[j] = { id: j, parts: [A] });
        }
        return B;
      }
      function p(E, C) {
        var B = l(E.insertInto);
        if (!B)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var O = g[g.length - 1];
        if (E.insertAt === "top")
          O ? O.nextSibling ? B.insertBefore(C, O.nextSibling) : B.appendChild(C) : B.insertBefore(C, B.firstChild), g.push(C);
        else if (E.insertAt === "bottom")
          B.appendChild(C);
        else {
          if (typeof E.insertAt != "object" || !E.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var R = l(E.insertInto + " " + E.insertAt.before);
          B.insertBefore(C, R);
        }
      }
      function m(E) {
        if (E.parentNode === null)
          return !1;
        E.parentNode.removeChild(E);
        var C = g.indexOf(E);
        C >= 0 && g.splice(C, 1);
      }
      function b(E) {
        var C = document.createElement("style");
        return E.attrs.type === void 0 && (E.attrs.type = "text/css"), w(C, E.attrs), p(E, C), C;
      }
      function w(E, C) {
        Object.keys(C).forEach(function(B) {
          E.setAttribute(B, C[B]);
        });
      }
      function x(E, C) {
        var B, O, R, N;
        if (C.transform && E.css) {
          if (!(N = C.transform(E.css)))
            return function() {
            };
          E.css = N;
        }
        if (C.singleton) {
          var j = d++;
          B = u || (u = b(C)), O = D.bind(null, B, j, !1), R = D.bind(null, B, j, !0);
        } else
          E.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (B = function(A) {
            var W = document.createElement("link");
            return A.attrs.type === void 0 && (A.attrs.type = "text/css"), A.attrs.rel = "stylesheet", w(W, A.attrs), p(A, W), W;
          }(C), O = (function(A, W, xe) {
            var ie = xe.css, He = xe.sourceMap, bo = W.convertToAbsoluteUrls === void 0 && He;
            (W.convertToAbsoluteUrls || bo) && (ie = v(ie)), He && (ie += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(He)))) + " */");
            var ko = new Blob([ie], { type: "text/css" }), mt = A.href;
            A.href = URL.createObjectURL(ko), mt && URL.revokeObjectURL(mt);
          }).bind(null, B, C), R = function() {
            m(B), B.href && URL.revokeObjectURL(B.href);
          }) : (B = b(C), O = (function(A, W) {
            var xe = W.css, ie = W.media;
            if (ie && A.setAttribute("media", ie), A.styleSheet)
              A.styleSheet.cssText = xe;
            else {
              for (; A.firstChild; )
                A.removeChild(A.firstChild);
              A.appendChild(document.createTextNode(xe));
            }
          }).bind(null, B), R = function() {
            m(B);
          });
        return O(E), function(A) {
          if (A) {
            if (A.css === E.css && A.media === E.media && A.sourceMap === E.sourceMap)
              return;
            O(E = A);
          } else
            R();
        };
      }
      t.exports = function(E, C) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (C = C || {}).attrs = typeof C.attrs == "object" ? C.attrs : {}, C.singleton || typeof C.singleton == "boolean" || (C.singleton = c()), C.insertInto || (C.insertInto = "head"), C.insertAt || (C.insertAt = "bottom");
        var B = f(E, C);
        return h(B, C), function(O) {
          for (var R = [], N = 0; N < B.length; N++) {
            var j = B[N];
            (A = a[j.id]).refs--, R.push(A);
          }
          for (O && h(f(O, C), C), N = 0; N < R.length; N++) {
            var A;
            if ((A = R[N]).refs === 0) {
              for (var W = 0; W < A.parts.length; W++)
                A.parts[W]();
              delete a[A.id];
            }
          }
        };
      };
      var y, T = (y = [], function(E, C) {
        return y[E] = C, y.filter(Boolean).join(`
`);
      });
      function D(E, C, B, O) {
        var R = B ? "" : O.css;
        if (E.styleSheet)
          E.styleSheet.cssText = T(C, R);
        else {
          var N = document.createTextNode(R), j = E.childNodes;
          j[C] && E.removeChild(j[C]), j.length ? E.insertBefore(N, j[C]) : E.appendChild(N);
        }
      }
    }, function(t, o) {
      t.exports = function(n) {
        var i = typeof window < "u" && window.location;
        if (!i)
          throw new Error("fixUrls requires window.location");
        if (!n || typeof n != "string")
          return n;
        var s = i.protocol + "//" + i.host, a = s + i.pathname.replace(/\/[^\/]*$/, "/");
        return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(c, l) {
          var u, d = l.trim().replace(/^"(.*)"$/, function(g, v) {
            return v;
          }).replace(/^'(.*)'$/, function(g, v) {
            return v;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(d) ? c : (u = d.indexOf("//") === 0 ? d : d.indexOf("/") === 0 ? s + d : a + d.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
        });
      };
    }, function(t, o, n) {
      var i, s, a, c, l, u, d, g, v;
      t.exports = (i = "cdx-notifies", s = "cdx-notify", a = "cdx-notify__cross", c = "cdx-notify__button--confirm", l = "cdx-notify__button--cancel", u = "cdx-notify__input", d = "cdx-notify__button", g = "cdx-notify__btns-wrapper", { alert: v = function(h) {
        var f = document.createElement("DIV"), p = document.createElement("DIV"), m = h.message, b = h.style;
        return f.classList.add(s), b && f.classList.add(s + "--" + b), f.innerHTML = m, p.classList.add(a), p.addEventListener("click", f.remove.bind(f)), f.appendChild(p), f;
      }, confirm: function(h) {
        var f = v(h), p = document.createElement("div"), m = document.createElement("button"), b = document.createElement("button"), w = f.querySelector("." + a), x = h.cancelHandler, y = h.okHandler;
        return p.classList.add(g), m.innerHTML = h.okText || "Confirm", b.innerHTML = h.cancelText || "Cancel", m.classList.add(d), b.classList.add(d), m.classList.add(c), b.classList.add(l), x && typeof x == "function" && (b.addEventListener("click", x), w.addEventListener("click", x)), y && typeof y == "function" && m.addEventListener("click", y), m.addEventListener("click", f.remove.bind(f)), b.addEventListener("click", f.remove.bind(f)), p.appendChild(m), p.appendChild(b), f.appendChild(p), f;
      }, prompt: function(h) {
        var f = v(h), p = document.createElement("div"), m = document.createElement("button"), b = document.createElement("input"), w = f.querySelector("." + a), x = h.cancelHandler, y = h.okHandler;
        return p.classList.add(g), m.innerHTML = h.okText || "Ok", m.classList.add(d), m.classList.add(c), b.classList.add(u), h.placeholder && b.setAttribute("placeholder", h.placeholder), h.default && (b.value = h.default), h.inputType && (b.type = h.inputType), x && typeof x == "function" && w.addEventListener("click", x), y && typeof y == "function" && m.addEventListener("click", function() {
          y(b.value);
        }), m.addEventListener("click", f.remove.bind(f)), p.appendChild(b), p.appendChild(m), f.appendChild(p), f;
      }, getWrapper: function() {
        var h = document.createElement("DIV");
        return h.classList.add(i), h;
      } });
    }]);
  });
})(ii);
const ri = /* @__PURE__ */ ot(Ge);
class si {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    ri.show(e);
  }
}
class ai extends M {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new si();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class li extends M {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var Je = {}, ci = {
  get exports() {
    return Je;
  },
  set exports(r) {
    Je = r;
  }
};
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(Mn, function() {
    function t(d) {
      var g = d.tags, v = Object.keys(g), h = v.map(function(f) {
        return typeof g[f];
      }).every(function(f) {
        return f === "object" || f === "boolean" || f === "function";
      });
      if (!h)
        throw new Error("The configuration was invalid");
      this.config = d;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function n(d) {
      return o.indexOf(d.nodeName) !== -1;
    }
    var i = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function s(d) {
      return i.indexOf(d.nodeName) !== -1;
    }
    t.prototype.clean = function(d) {
      const g = document.implementation.createHTMLDocument(), v = g.createElement("div");
      return v.innerHTML = d, this._sanitize(g, v), v.innerHTML;
    }, t.prototype._sanitize = function(d, g) {
      var v = a(d, g), h = v.firstChild();
      if (h)
        do {
          if (h.nodeType === Node.TEXT_NODE)
            if (h.data.trim() === "" && (h.previousElementSibling && n(h.previousElementSibling) || h.nextElementSibling && n(h.nextElementSibling))) {
              g.removeChild(h), this._sanitize(d, g);
              break;
            } else
              continue;
          if (h.nodeType === Node.COMMENT_NODE) {
            g.removeChild(h), this._sanitize(d, g);
            break;
          }
          var f = s(h), p;
          f && (p = Array.prototype.some.call(h.childNodes, n));
          var m = !!g.parentNode, b = n(g) && n(h) && m, w = h.nodeName.toLowerCase(), x = c(this.config, w, h), y = f && p;
          if (y || l(h, x) || !this.config.keepNestedBlockElements && b) {
            if (!(h.nodeName === "SCRIPT" || h.nodeName === "STYLE"))
              for (; h.childNodes.length > 0; )
                g.insertBefore(h.childNodes[0], h);
            g.removeChild(h), this._sanitize(d, g);
            break;
          }
          for (var T = 0; T < h.attributes.length; T += 1) {
            var D = h.attributes[T];
            u(D, x, h) && (h.removeAttribute(D.name), T = T - 1);
          }
          this._sanitize(d, h);
        } while (h = v.nextSibling());
    };
    function a(d, g) {
      return d.createTreeWalker(
        g,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function c(d, g, v) {
      return typeof d.tags[g] == "function" ? d.tags[g](v) : d.tags[g];
    }
    function l(d, g) {
      return typeof g > "u" ? !0 : typeof g == "boolean" ? !g : !1;
    }
    function u(d, g, v) {
      var h = d.name.toLowerCase();
      return g === !0 ? !1 : typeof g[h] == "function" ? !g[h](d.value, v) : typeof g[h] > "u" || g[h] === !1 ? !0 : typeof g[h] == "string" ? g[h] !== d.value : !1;
    }
    return t;
  });
})(ci);
const di = Je;
function Qt(r, e) {
  return r.map((t) => {
    const o = F(e) ? e(t.tool) : e;
    return K(o) || (t.data = rt(t.data, o)), t;
  });
}
function te(r, e = {}) {
  const t = {
    tags: e
  };
  return new di(t).clean(r);
}
function rt(r, e) {
  return Array.isArray(r) ? hi(r, e) : z(r) ? ui(r, e) : ne(r) ? pi(r, e) : r;
}
function hi(r, e) {
  return r.map((t) => rt(t, e));
}
function ui(r, e) {
  const t = {};
  for (const o in r) {
    if (!Object.prototype.hasOwnProperty.call(r, o))
      continue;
    const n = r[o], i = fi(e[o]) ? e[o] : e;
    t[o] = rt(n, i);
  }
  return t;
}
function pi(r, e) {
  return z(e) ? te(r, e) : e === !1 ? te(r, {}) : r;
}
function fi(r) {
  return z(r) || Pn(r) || F(r);
}
class gi extends M {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return te(e, t);
  }
}
class mi extends M {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (Z(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class bi extends M {
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e)
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return new S().findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    new S().expandToTag(e);
  }
}
class ki extends M {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class vi extends M {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Z("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      Z("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var Qe = {}, wi = {
  get exports() {
    return Qe;
  },
  set exports(r) {
    Qe = r;
  }
};
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var s = o[i] = { i, l: !1, exports: {} };
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, s, a) {
        n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, s) {
        if (1 & s && (i = n(i)), 8 & s || 4 & s && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & s && typeof i != "string")
          for (var c in i)
            n.d(a, c, (function(l) {
              return i[l];
            }).bind(null, c));
        return a;
      }, n.n = function(i) {
        var s = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(s, "a", s), s;
      }, n.o = function(i, s) {
        return Object.prototype.hasOwnProperty.call(i, s);
      }, n.p = "", n(n.s = 0);
    }([function(t, o, n) {
      t.exports = n(1);
    }, function(t, o, n) {
      n.r(o), n.d(o, "default", function() {
        return i;
      });
      class i {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, c, l) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const u = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, l);
          if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof c == "string")
            this.nodes.content.appendChild(document.createTextNode(c));
          else {
            if (!(c instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof c + " given.");
            this.nodes.content.appendChild(c);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement) {
            case "top":
              this.placeTop(a, u);
              break;
            case "left":
              this.placeLeft(a, u);
              break;
            case "right":
              this.placeRight(a, u);
              break;
            case "bottom":
            default:
              this.placeBottom(a, u);
          }
          u && u.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(a = !1) {
          if (this.hidingDelay && !a)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, c, l) {
          a.addEventListener("mouseenter", () => {
            this.show(a, c, l);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a))
            return;
          const c = n(2), l = this.make("style", null, { textContent: c.toString(), id: a });
          this.prepend(document.head, l);
        }
        placeBottom(a, c) {
          const l = a.getBoundingClientRect(), u = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, d = l.bottom + window.pageYOffset + this.offsetTop + c.marginTop;
          this.applyPlacement("bottom", u, d);
        }
        placeTop(a, c) {
          const l = a.getBoundingClientRect(), u = l.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, d = l.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", u, d);
        }
        placeLeft(a, c) {
          const l = a.getBoundingClientRect(), u = l.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - c.marginLeft, d = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", u, d);
        }
        placeRight(a, c) {
          const l = a.getBoundingClientRect(), u = l.right + this.offsetRight + c.marginRight, d = l.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", u, d);
        }
        applyPlacement(a, c, l) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = c + "px", this.nodes.wrapper.style.top = l + "px";
        }
        make(a, c = null, l = {}) {
          const u = document.createElement(a);
          Array.isArray(c) ? u.classList.add(...c) : c && u.classList.add(c);
          for (const d in l)
            l.hasOwnProperty(d) && (u[d] = l[d]);
          return u;
        }
        append(a, c) {
          Array.isArray(c) ? c.forEach((l) => a.appendChild(l)) : a.appendChild(c);
        }
        prepend(a, c) {
          Array.isArray(c) ? (c = c.reverse()).forEach((l) => a.prepend(l)) : a.prepend(c);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(wi);
const yi = /* @__PURE__ */ ot(Qe);
let J = null;
function st() {
  J || (J = new yi());
}
function xi(r, e, t) {
  st(), J == null || J.show(r, e, t);
}
function et(r = !1) {
  st(), J == null || J.hide(r);
}
function _e(r, e, t) {
  st(), J == null || J.onHover(r, e, t);
}
function Ci() {
  J == null || J.destroy(), J = null;
}
class Ei extends M {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    xi(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    et();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    _e(e, t, o);
  }
}
class Si extends M {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function eo(r, e) {
  const t = {};
  return Object.entries(r).forEach(([o, n]) => {
    if (z(n)) {
      const i = e ? `${e}.${o}` : o;
      Object.values(n).every((s) => ne(s)) ? t[o] = i : t[o] = eo(n, i);
      return;
    }
    t[o] = n;
  }), t;
}
const G = eo(Kt);
function Ti(r, e) {
  const t = {};
  return Object.keys(r).forEach((o) => {
    const n = e[o];
    n !== void 0 ? t[n] = r[o] : t[o] = r[o];
  }), t;
}
const Bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', to = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', _i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', Li = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Ii = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Mi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', Et = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Oi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', Ai = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', Ni = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Pi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Di = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
class H {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   */
  constructor(e) {
    this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      this.nodes.root.classList.remove(H.CSS.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      this.nodes.root.classList.remove(H.CSS.noHover);
    }, this.onErrorAnimationEnd = () => {
      this.nodes.icon.classList.remove(H.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.params = e, this.nodes.root = this.make(e);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params.closeOnActivate;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root.classList.contains(H.CSS.focused);
  }
  /**
   * Popover item CSS classes
   */
  static get CSS() {
    return {
      container: "ce-popover-item",
      title: "ce-popover-item__title",
      secondaryTitle: "ce-popover-item__secondary-title",
      icon: "ce-popover-item__icon",
      active: "ce-popover-item--active",
      disabled: "ce-popover-item--disabled",
      focused: "ce-popover-item--focused",
      hidden: "ce-popover-item--hidden",
      confirmationState: "ce-popover-item--confirmation",
      noHover: "ce-popover-item--no-hover",
      noFocus: "ce-popover-item--no-focus",
      wobbleAnimation: "wobble"
    };
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    this.nodes.root.classList.toggle(H.CSS.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    this.nodes.root.classList.toggle(H.CSS.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   */
  make(e) {
    const t = k.make("div", H.CSS.container);
    return e.name && (t.dataset.itemName = e.name), this.nodes.icon = k.make("div", H.CSS.icon, {
      innerHTML: e.icon || Ii
    }), t.appendChild(this.nodes.icon), t.appendChild(k.make("div", H.CSS.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && t.appendChild(k.make("div", H.CSS.secondaryTitle, {
      textContent: e.secondaryLabel
    })), e.isActive && t.classList.add(H.CSS.active), e.isDisabled && t.classList.add(H.CSS.disabled), t;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    const t = {
      ...this.params,
      ...e,
      confirmation: e.confirmation
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(H.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(H.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    this.nodes.root.classList.add(H.CSS.noHover), this.nodes.root.classList.add(H.CSS.noFocus), this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.nodes.root.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    if (e.confirmation === void 0)
      try {
        e.onActivate(e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    this.nodes.icon.classList.contains(H.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(H.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const Ce = class {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(r, e) {
    this.cursor = -1, this.items = [], this.items = r || [], this.focusedCssClass = e;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(r) {
    r < this.items.length && r >= -1 && (this.dropCursor(), this.cursor = r, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(r) {
    this.items = r;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(Ce.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(Ce.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(r) {
    if (this.items.length === 0)
      return this.cursor;
    let e = this.cursor;
    return e === -1 ? e = r === Ce.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), r === Ce.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, k.canSetCaret(this.items[e]) && Ne(() => S.setCursor(this.items[e]), 50)(), this.items[e].classList.add(this.focusedCssClass), e;
  }
};
let fe = Ce;
fe.directions = {
  RIGHT: "right",
  LEFT: "left"
};
class oe {
  /**
   * @param {FlipperOptions} options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (this.isEventReadyForHandling(t))
        switch (oe.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case _.TAB:
            this.handleTabPress(t);
            break;
          case _.LEFT:
          case _.UP:
            this.flipLeft();
            break;
          case _.RIGHT:
          case _.DOWN:
            this.flipRight();
            break;
          case _.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new fe(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || oe.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      _.TAB,
      _.LEFT,
      _.RIGHT,
      _.ENTER,
      _.UP,
      _.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? fe.directions.LEFT : fe.directions.RIGHT) {
      case fe.directions.RIGHT:
        this.flipRight();
        break;
      case fe.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), F(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
class Se {
  /**
   * Styles
   */
  static get CSS() {
    return {
      wrapper: "cdx-search-field",
      icon: "cdx-search-field__icon",
      input: "cdx-search-field__input"
    };
  }
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.onSearch - search callback
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, onSearch: t, placeholder: o }) {
    this.listeners = new nt(), this.items = e, this.onSearch = t, this.render(o);
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.onSearch("", this.foundItems);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Creates the search field
   *
   * @param placeholder - input placeholder
   */
  render(e) {
    this.wrapper = k.make("div", Se.CSS.wrapper);
    const t = k.make("div", Se.CSS.icon, {
      innerHTML: Ni
    });
    this.input = k.make("input", Se.CSS.input, {
      placeholder: e,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1
    }), this.wrapper.appendChild(t), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.onSearch(this.searchQuery, this.foundItems);
    });
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var t;
    const o = ((t = e.title) == null ? void 0 : t.toLowerCase()) || "", n = this.searchQuery.toLowerCase();
    return o.includes(n);
  }
}
const Ee = class {
  /**
   * Locks body element scroll
   */
  lock() {
    xt ? this.lockHard() : document.body.classList.add(Ee.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    xt ? this.unlockHard() : document.body.classList.remove(Ee.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(Ee.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(Ee.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
let oo = Ee;
oo.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
var Ri = Object.defineProperty, Fi = Object.getOwnPropertyDescriptor, Hi = (r, e, t, o) => {
  for (var n = Fi(e, t), i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(e, t, n) || n);
  return n && Ri(e, t, n), n;
}, Le = /* @__PURE__ */ ((r) => (r.Close = "close", r))(Le || {});
const U = class extends Re {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   */
  constructor(r) {
    super(), this.scopeElement = document.body, this.listeners = new nt(), this.scrollLocker = new oo(), this.nodes = {
      wrapper: null,
      popover: null,
      nothingFoundMessage: null,
      customContent: null,
      items: null,
      overlay: null
    }, this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.onFlip = () => {
      this.items.find((e) => e.isFocused).onFocus();
    }, this.items = r.items.map((e) => new H(e)), r.scopeElement !== void 0 && (this.scopeElement = r.scopeElement), r.messages && (this.messages = {
      ...this.messages,
      ...r.messages
    }), r.customContentFlippableItems && (this.customContentFlippableItems = r.customContentFlippableItems), this.make(), r.customContent && this.addCustomContent(r.customContent), r.searchable && this.addSearch(), this.initializeFlipper();
  }
  /**
   * Popover CSS classes
   */
  static get CSS() {
    return {
      popover: "ce-popover",
      popoverOpenTop: "ce-popover--open-top",
      popoverOpened: "ce-popover--opened",
      search: "ce-popover__search",
      nothingFoundMessage: "ce-popover__nothing-found-message",
      nothingFoundMessageDisplayed: "ce-popover__nothing-found-message--displayed",
      customContent: "ce-popover__custom-content",
      customContentHidden: "ce-popover__custom-content--hidden",
      items: "ce-popover__items",
      overlay: "ce-popover__overlay",
      overlayHidden: "ce-popover__overlay--hidden"
    };
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper.hasFocus();
  }
  /**
   * Open popover
   */
  show() {
    this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), this.nodes.popover.classList.add(U.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(U.CSS.overlayHidden), this.nodes.popover.classList.add(U.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && requestAnimationFrame(() => {
      var r;
      (r = this.search) == null || r.focus();
    }), ae() && this.scrollLocker.lock();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(U.CSS.popoverOpened), this.nodes.popover.classList.remove(U.CSS.popoverOpenTop), this.nodes.overlay.classList.add(U.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((r) => r.reset()), this.search !== void 0 && this.search.clear(), ae() && this.scrollLocker.unlock(), this.emit(
      "close"
      /* Close */
    );
  }
  /**
   * Clears memory
   */
  destroy() {
    this.flipper.deactivate(), this.listeners.removeAll(), ae() && this.scrollLocker.unlock();
  }
  /**
   * Constructs HTML element corresponding to popover
   */
  make() {
    this.nodes.popover = k.make("div", [U.CSS.popover]), this.nodes.nothingFoundMessage = k.make("div", [U.CSS.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = k.make("div", [U.CSS.items]), this.items.forEach((r) => {
      this.nodes.items.appendChild(r.getElement());
    }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (r) => {
      const e = this.getTargetItem(r);
      e !== void 0 && this.handleItemClick(e);
    }), this.nodes.wrapper = k.make("div"), this.nodes.overlay = k.make("div", [U.CSS.overlay, U.CSS.overlayHidden]), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new Se({
      items: this.items,
      placeholder: this.messages.search,
      onSearch: (e, t) => {
        this.items.forEach((n) => {
          const i = !t.includes(n);
          n.toggleHidden(i);
        }), this.toggleNothingFoundMessage(t.length === 0), this.toggleCustomContent(e !== "");
        const o = e === "" ? this.flippableElements : t.map((n) => n.getElement());
        this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(o));
      }
    });
    const r = this.search.getElement();
    r.classList.add(U.CSS.search), this.nodes.popover.insertBefore(r, this.nodes.popover.firstChild);
  }
  /**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */
  addCustomContent(r) {
    this.nodes.customContent = r, this.nodes.customContent.classList.add(U.CSS.customContent), this.nodes.popover.insertBefore(r, this.nodes.popover.firstChild);
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(r) {
    return this.items.find((e) => r.composedPath().includes(e.getElement()));
  }
  /**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */
  handleItemClick(r) {
    r.isDisabled || (this.items.filter((e) => e !== r).forEach((e) => e.reset()), r.handleClick(), this.toggleItemActivenessIfNeeded(r), r.closeOnActivate && this.hide());
  }
  /**
   * Creates Flipper instance which allows to navigate between popover items via keyboard
   */
  initializeFlipper() {
    this.flipper = new oe({
      items: this.flippableElements,
      focusedItemClass: H.CSS.focused,
      allowedKeys: [
        _.TAB,
        _.UP,
        _.DOWN,
        _.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip);
  }
  /**
   * Returns list of elements available for keyboard navigation.
   * Contains both usual popover items elements and custom html content.
   */
  get flippableElements() {
    const r = this.items.map((e) => e.getElement());
    return (this.customContentFlippableItems || []).concat(r);
  }
  get height() {
    let r = 0;
    if (this.nodes.popover === null)
      return r;
    const e = this.nodes.popover.cloneNode(!0);
    return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(U.CSS.popoverOpened), document.body.appendChild(e), r = e.offsetHeight, e.remove(), r;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    const r = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t = this.height, o = r.top + t, n = r.top - t, i = Math.min(window.innerHeight, e.bottom);
    return n < e.top || o <= i;
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(r) {
    this.nodes.nothingFoundMessage.classList.toggle(U.CSS.nothingFoundMessageDisplayed, r);
  }
  /**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */
  toggleCustomContent(r) {
    var e;
    (e = this.nodes.customContent) == null || e.classList.toggle(U.CSS.customContentHidden, r);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(r) {
    if (r.toggle === !0 && r.toggleActive(), typeof r.toggle == "string") {
      const e = this.items.filter((t) => t.toggle === r.toggle);
      if (e.length === 1) {
        r.toggleActive();
        return;
      }
      e.forEach((t) => {
        t.toggleActive(t === r);
      });
    }
  }
};
let at = U;
Hi([
  ye
], at.prototype, "height");
class ji extends M {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new S(), this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   *
   * @returns {{opened: string, closed: string}}
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    return (e = this.popover) == null ? void 0 : e.flipper;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = k.make("div", [this.CSS.settings]);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes();
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  open(e = this.Editor.BlockManager.currentBlock) {
    this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const [t, o] = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened), this.popover = new at({
      searchable: !0,
      items: t.map((n) => this.resolveTuneAliases(n)),
      customContent: o,
      customContentFlippableItems: this.getControls(o),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: V.ui(G.ui.popover, "Nothing found"),
        search: V.ui(G.ui.popover, "Filter")
      }
    }), this.popover.on(Le.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Close Block Settings pane
   */
  close() {
    this.opened && (this.opened = !1, S.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(Le.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
  }
  /**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */
  getControls(e) {
    const { StylesAPI: t } = this.Editor, o = e.querySelectorAll(
      `.${t.classes.settingsButton}, ${k.allInputsSelector}`
    );
    return Array.from(o);
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    const t = Ti(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
class Y extends M {
  constructor() {
    super(...arguments), this.opened = !1, this.tools = [], this.flipper = null, this.togglingCallback = null;
  }
  /**
   * CSS getter
   */
  static get CSS() {
    return {
      conversionToolbarWrapper: "ce-conversion-toolbar",
      conversionToolbarShowed: "ce-conversion-toolbar--showed",
      conversionToolbarTools: "ce-conversion-toolbar__tools",
      conversionToolbarLabel: "ce-conversion-toolbar__label",
      conversionTool: "ce-conversion-tool",
      conversionToolHidden: "ce-conversion-tool--hidden",
      conversionToolIcon: "ce-conversion-tool__icon",
      conversionToolSecondaryLabel: "ce-conversion-tool__secondary-label",
      conversionToolFocused: "ce-conversion-tool--focused",
      conversionToolActive: "ce-conversion-tool--active"
    };
  }
  /**
   * Create UI of Conversion Toolbar
   */
  make() {
    this.nodes.wrapper = k.make("div", [
      Y.CSS.conversionToolbarWrapper,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.tools = k.make("div", Y.CSS.conversionToolbarTools);
    const e = k.make("div", Y.CSS.conversionToolbarLabel, {
      textContent: V.ui(G.ui.inlineToolbar.converter, "Convert to")
    });
    return this.addTools(), this.enableFlipper(), k.append(this.nodes.wrapper, e), k.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
  }
  /**
   * Deactivates flipper and removes all nodes
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
  }
  /**
   * Toggle conversion dropdown visibility
   *
   * @param {Function} [togglingCallback] — callback that will accept opening state
   */
  toggle(e) {
    this.opened ? this.close() : this.open(), F(e) && (this.togglingCallback = e);
  }
  /**
   * Shows Conversion Toolbar
   */
  open() {
    this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(Y.CSS.conversionToolbarShowed), window.requestAnimationFrame(() => {
      this.flipper.activate(this.tools.map((e) => e.button).filter((e) => !e.classList.contains(Y.CSS.conversionToolHidden))), this.flipper.focusFirst(), F(this.togglingCallback) && this.togglingCallback(!0);
    });
  }
  /**
   * Closes Conversion Toolbar
   */
  close() {
    this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(Y.CSS.conversionToolbarShowed), F(this.togglingCallback) && this.togglingCallback(!1);
  }
  /**
   * Returns true if it has more than one tool available for convert in
   */
  hasTools() {
    return this.tools.length === 1 ? this.tools[0].name !== this.config.defaultBlock : !0;
  }
  /**
   * Replaces one Block with another
   * For that Tools must provide import/export methods
   *
   * @param {string} replacingToolName - name of Tool which replaces current
   * @param blockDataOverrides - If this conversion fired by the one of multiple Toolbox items, extend converted data with this item's "data" overrides
   */
  async replaceWithBlock(e, t) {
    const { BlockManager: o, BlockSelection: n, InlineToolbar: i, Caret: s } = this.Editor;
    o.convert(this.Editor.BlockManager.currentBlock, e, t), n.clearSelection(), this.close(), i.close(), window.requestAnimationFrame(() => {
      s.setToBlock(this.Editor.BlockManager.currentBlock, s.positions.END);
    });
  }
  /**
   * Iterates existing Tools and inserts to the ConversionToolbar
   * if tools have ability to import
   */
  addTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.entries()).forEach(([t, o]) => {
      var n;
      const i = o.conversionConfig;
      !i || !i.import || (n = o.toolbox) == null || n.forEach(
        (s) => this.addToolIfValid(t, s)
      );
    });
  }
  /**
   * Inserts a tool to the ConversionToolbar if the tool's toolbox config is valid
   *
   * @param name - tool's name
   * @param toolboxSettings - tool's single toolbox setting
   */
  addToolIfValid(e, t) {
    K(t) || !t.icon || this.addTool(e, t);
  }
  /**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */
  addTool(e, t) {
    var o;
    const n = k.make("div", [Y.CSS.conversionTool]), i = k.make("div", [Y.CSS.conversionToolIcon]);
    n.dataset.tool = e, i.innerHTML = t.icon, k.append(n, i), k.append(n, k.text(V.t(G.toolNames, t.title || ve(e))));
    const s = (o = this.Editor.Tools.blockTools.get(e)) == null ? void 0 : o.shortcut;
    if (s) {
      const a = k.make("span", Y.CSS.conversionToolSecondaryLabel, {
        innerText: De(s)
      });
      k.append(n, a);
    }
    k.append(this.nodes.tools, n), this.tools.push({
      name: e,
      button: n,
      toolboxItem: t
    }), this.listeners.on(n, "click", async () => {
      await this.replaceWithBlock(e, t.data);
    });
  }
  /**
   * Hide current Tool and show others
   */
  async filterTools() {
    const { currentBlock: e } = this.Editor.BlockManager, t = await e.getActiveToolboxEntry();
    function o(n, i) {
      return n.icon === i.icon && n.title === i.title;
    }
    this.tools.forEach((n) => {
      let i = !1;
      if (t) {
        const s = o(t, n.toolboxItem);
        i = n.button.dataset.tool === e.name && s;
      }
      n.button.hidden = i, n.button.classList.toggle(Y.CSS.conversionToolHidden, i);
    });
  }
  /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */
  enableFlipper() {
    this.flipper = new oe({
      focusedItemClass: Y.CSS.conversionToolFocused
    });
  }
}
var tt = {}, Ui = {
  get exports() {
    return tt;
  },
  set exports(r) {
    tt = r;
  }
};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(r, e) {
  (function(t, o) {
    r.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function n(i) {
        if (o[i])
          return o[i].exports;
        var s = o[i] = { i, l: !1, exports: {} };
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
      }
      return n.m = t, n.c = o, n.d = function(i, s, a) {
        n.o(i, s) || Object.defineProperty(i, s, { enumerable: !0, get: a });
      }, n.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, n.t = function(i, s) {
        if (1 & s && (i = n(i)), 8 & s || 4 & s && typeof i == "object" && i && i.__esModule)
          return i;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: i }), 2 & s && typeof i != "string")
          for (var c in i)
            n.d(a, c, (function(l) {
              return i[l];
            }).bind(null, c));
        return a;
      }, n.n = function(i) {
        var s = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return n.d(s, "a", s), s;
      }, n.o = function(i, s) {
        return Object.prototype.hasOwnProperty.call(i, s);
      }, n.p = "", n(n.s = 0);
    }([function(t, o, n) {
      function i(c, l) {
        for (var u = 0; u < l.length; u++) {
          var d = l[u];
          d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(c, d.key, d);
        }
      }
      function s(c, l, u) {
        return l && i(c.prototype, l), u && i(c, u), c;
      }
      n.r(o);
      var a = function() {
        function c(l) {
          var u = this;
          (function(d, g) {
            if (!(d instanceof g))
              throw new TypeError("Cannot call a class as a function");
          })(this, c), this.commands = {}, this.keys = {}, this.name = l.name, this.parseShortcutName(l.name), this.element = l.on, this.callback = l.callback, this.executeShortcut = function(d) {
            u.execute(d);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return s(c, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), s(c, [{ key: "parseShortcutName", value: function(l) {
          l = l.split("+");
          for (var u = 0; u < l.length; u++) {
            l[u] = l[u].toUpperCase();
            var d = !1;
            for (var g in c.supportedCommands)
              if (c.supportedCommands[g].includes(l[u])) {
                d = this.commands[g] = !0;
                break;
              }
            d || (this.keys[l[u]] = !0);
          }
          for (var v in c.supportedCommands)
            this.commands[v] || (this.commands[v] = !1);
        } }, { key: "execute", value: function(l) {
          var u, d = { CMD: l.ctrlKey || l.metaKey, SHIFT: l.shiftKey, ALT: l.altKey }, g = !0;
          for (u in this.commands)
            this.commands[u] !== d[u] && (g = !1);
          var v, h = !0;
          for (v in this.keys)
            h = h && l.keyCode === c.keyCodes[v];
          g && h && this.callback(l);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), c;
      }();
      o.default = a;
    }]).default;
  });
})(Ui);
const $i = /* @__PURE__ */ ot(tt);
class zi {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const t = new $i({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), o = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...o, t]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const n = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, n.filter((i) => i !== o));
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: o }) => o === t);
  }
}
const we = new zi();
var qi = Object.defineProperty, Vi = Object.getOwnPropertyDescriptor, no = (r, e, t, o) => {
  for (var n = Vi(e, t), i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(e, t, n) || n);
  return n && qi(e, t, n), n;
}, Oe = /* @__PURE__ */ ((r) => (r.Opened = "toolbox-opened", r.Closed = "toolbox-closed", r.BlockAdded = "toolbox-block-added", r))(Oe || {});
const io = class extends Re {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: r, tools: e, i18nLabels: t }) {
    super(), this.opened = !1, this.nodes = {
      toolbox: null
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = r, this.tools = e, this.i18nLabels = t;
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   *
   * @returns {Object<string, string>}
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Makes the Toolbox
   */
  make() {
    return this.popover = new at({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(Le.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(io.CSS.toolbox), this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    var r;
    return (r = this.popover) == null ? void 0 : r.hasFocus();
  }
  /**
   * Destroy Module
   */
  destroy() {
    var r;
    super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (r = this.popover) == null || r.off(Le.Close, this.onPopoverClose);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(r, e) {
    this.insertNewBlock(r, e);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var r;
    this.isEmpty || ((r = this.popover) == null || r.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var r;
    (r = this.popover) == null || r.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  get toolsToBeDisplayed() {
    const r = [];
    return this.tools.forEach((e) => {
      e.toolbox && r.push(e);
    }), r;
  }
  get toolboxItemsToBeDisplayed() {
    const r = (e, t) => ({
      icon: e.icon,
      title: V.t(G.toolNames, e.title || ve(t.name)),
      name: t.name,
      onActivate: () => {
        this.toolButtonActivated(t.name, e.data);
      },
      secondaryLabel: t.shortcut ? De(t.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((e, t) => (Array.isArray(t.toolbox) ? t.toolbox.forEach((o) => {
      e.push(r(o, t));
    }) : t.toolbox !== void 0 && e.push(r(t.toolbox, t)), e), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((r) => {
      const e = r.shortcut;
      e && this.enableShortcutForTool(r.name, e);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(r, e) {
    we.add({
      name: e,
      on: this.api.ui.nodes.redactor,
      handler: (t) => {
        t.preventDefault();
        const o = this.api.blocks.getCurrentBlockIndex(), n = this.api.blocks.getBlockByIndex(o);
        if (n)
          try {
            this.api.blocks.convert(n.id, r), window.requestAnimationFrame(() => {
              this.api.caret.setToBlock(o, "end");
            });
            return;
          } catch {
          }
        this.insertNewBlock(r);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((r) => {
      const e = r.shortcut;
      e && we.remove(this.api.ui.nodes.redactor, e);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(r, e) {
    const t = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(t);
    if (!o)
      return;
    const n = o.isEmpty ? t : t + 1;
    let i;
    if (e) {
      const a = await this.api.blocks.composeBlockData(r);
      i = Object.assign(a, e);
    }
    const s = this.api.blocks.insert(
      r,
      i,
      void 0,
      n,
      void 0,
      o.isEmpty
    );
    s.call(ee.APPEND_CALLBACK), this.api.caret.setToBlock(n), this.emit("toolbox-block-added", {
      block: s
    }), this.api.toolbar.close();
  }
};
let lt = io;
no([
  ye
], lt.prototype, "toolsToBeDisplayed");
no([
  ye
], lt.prototype, "toolboxItemsToBeDisplayed");
const ro = "block hovered";
async function Wi(r, e) {
  const t = navigator.keyboard;
  return t && (await t.getLayoutMap()).get(r) || e;
}
class Yi extends M {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          P("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          P("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      P("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI, n = e.pluginsContent, i = window.getComputedStyle(n), s = parseInt(i.paddingTop, 10), a = t.offsetHeight;
    let c;
    o ? c = t.offsetTop + a : c = t.offsetTop + s, this.nodes.wrapper.style.top = `${Math.floor(c)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  async make() {
    this.nodes.wrapper = k.make("div", this.CSS.toolbar), ["content", "actions"].forEach((i) => {
      this.nodes[i] = k.make("div", this.CSS[i]);
    }), k.append(this.nodes.wrapper, this.nodes.content), k.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = k.make("div", this.CSS.plusButton, {
      innerHTML: Ai
    }), k.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      et(!0), this.plusButtonClicked();
    }, !1);
    const e = k.make("div");
    e.appendChild(document.createTextNode(V.ui(G.ui.toolbar.toolbox, "Add"))), e.appendChild(k.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), _e(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = k.make("span", this.CSS.settingsToggler, {
      innerHTML: Oi
    }), k.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = k.make("div"), o = k.text(V.ui(G.ui.blockTunes.toggler, "Click to tune")), n = await Wi("Slash", "/");
    t.appendChild(o), t.appendChild(k.make("div", this.CSS.plusButtonShortcut, {
      textContent: De(`CMD + ${n}`)
    })), _e(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), k.append(this.nodes.actions, this.makeToolbox()), k.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), k.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new lt({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: V.ui(G.ui.popover, "Filter"),
        nothingFound: V.ui(G.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(Oe.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Oe.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Oe.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, n = t.getBlockById(e.id);
      n.inputs.length === 0 && (n === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.make();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
      var t;
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), et(!0);
    }, !0), ae() || this.eventsDispatcher.on(ro, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var Fe = /* @__PURE__ */ ((r) => (r[r.Block = 0] = "Block", r[r.Inline = 1] = "Inline", r[r.Tune = 2] = "Tune", r))(Fe || {}), Ae = /* @__PURE__ */ ((r) => (r.Shortcut = "shortcut", r.Toolbox = "toolbox", r.EnabledInlineTools = "inlineToolbar", r.EnabledBlockTunes = "tunes", r.Config = "config", r))(Ae || {}), so = /* @__PURE__ */ ((r) => (r.Shortcut = "shortcut", r.SanitizeConfig = "sanitize", r))(so || {}), ge = /* @__PURE__ */ ((r) => (r.IsEnabledLineBreaks = "enableLineBreaks", r.Toolbox = "toolbox", r.ConversionConfig = "conversionConfig", r.IsReadOnlySupported = "isReadOnlySupported", r.PasteConfig = "pasteConfig", r))(ge || {}), ct = /* @__PURE__ */ ((r) => (r.IsInline = "isInline", r.Title = "title", r))(ct || {}), ao = /* @__PURE__ */ ((r) => (r.IsTune = "isTune", r))(ao || {});
class dt {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: n,
    isDefault: i,
    isInternal: s = !1,
    defaultPlaceholder: a
  }) {
    this.api = n, this.name = e, this.constructable = t, this.config = o, this.isDefault = i, this.isInternal = s, this.defaultPlaceholder = a;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (F(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (F(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === 1;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === 0;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === 2;
  }
}
class Ki extends M {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar",
      inlineToolbarShowed: "ce-inline-toolbar--showed",
      inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
      inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
      inlineToolbarShortcut: "ce-inline-toolbar__shortcut",
      buttonsWrapper: "ce-inline-toolbar__buttons",
      actionsWrapper: "ce-inline-toolbar__actions",
      inlineToolButton: "ce-inline-tool",
      inputField: "cdx-input",
      focusedButton: "ce-inline-tool--focused",
      conversionToggler: "ce-inline-toolbar__dropdown",
      conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow",
      conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden",
      conversionTogglerContent: "ce-inline-toolbar__dropdown-content",
      togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper"
    }, this.opened = !1, this.toolbarVerticalMargin = ae() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null;
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */
  async tryToShow(e = !1, t = !0) {
    e && this.close(), this.allowedToShow() && (await this.addToolsFiltered(t), this.move(), this.open(t), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(([e, t]) => {
      const o = this.getToolShortcut(e);
      o && we.remove(this.Editor.UI.nodes.redactor, o), F(t.clear) && t.clear();
    }), this.reset(), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = k.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.togglerAndButtonsWrapper = k.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = k.make("div", this.CSS.buttonsWrapper), this.nodes.actions = k.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e) => {
      e.target.closest(`.${this.CSS.actionsWrapper}`) || e.preventDefault();
    }), k.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), k.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), k.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), window.requestAnimationFrame(() => {
      this.recalculateWidth();
    }), this.enableFlipper();
  }
  /**
   * Shows Inline Toolbar
   */
  open() {
    if (this.opened)
      return;
    this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`), this.opened = !0;
    let e = Array.from(this.buttonsList);
    e.unshift(this.nodes.conversionToggler), e = e.filter((t) => !t.hidden), this.flipper.activate(e);
  }
  /**
   * Move Toolbar to the selected text
   */
  move() {
    const e = S.rect, t = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = {
      x: e.x - t.x,
      y: e.y + e.height - // + window.scrollY
      t.top + this.toolbarVerticalMargin
    };
    o.x + this.width + t.x > this.Editor.UI.contentRect.right && (o.x = this.Editor.UI.contentRect.right - this.width - t.x), this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px";
  }
  /**
   * Clear orientation classes and reset position
   */
  reset() {
    this.nodes.wrapper.classList.remove(
      this.CSS.inlineToolbarLeftOriented,
      this.CSS.inlineToolbarRightOriented
    ), this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = S.get(), o = S.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const n = k.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (t && e.includes(n.tagName) || n.closest('[contenteditable="true"]') === null)
      return !1;
    const i = this.Editor.BlockManager.getBlock(t.anchorNode);
    return i ? i.tool.inlineTools.size !== 0 : !1;
  }
  /**
   * Recalculate inline toolbar width
   */
  recalculateWidth() {
    this.width = this.nodes.wrapper.offsetWidth;
  }
  /**
   * Create a toggler for Conversion Dropdown
   * and prepend it to the buttons list
   */
  addConversionToggler() {
    this.nodes.conversionToggler = k.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = k.make("div", this.CSS.conversionTogglerContent);
    const e = k.make("div", this.CSS.conversionTogglerArrow, {
      innerHTML: to
    });
    this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", () => {
      this.Editor.ConversionToolbar.toggle((t) => {
        !t && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
      });
    }), ae() === !1 && _e(this.nodes.conversionToggler, V.ui(G.ui.inlineToolbar.converter, "Convert to"), {
      placement: "top",
      hidingDelay: 100
    });
  }
  /**
   * Changes Conversion Dropdown content for current block's Tool
   */
  async setConversionTogglerContent() {
    const { BlockManager: e } = this.Editor, { currentBlock: t } = e, o = t.name, n = t.tool.conversionConfig, i = n && n.export;
    this.nodes.conversionToggler.hidden = !i, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !i);
    const s = await t.getActiveToolboxEntry() || {};
    this.nodes.conversionTogglerContent.innerHTML = s.icon || s.title || ve(o);
  }
  /**
   * Makes the Conversion Dropdown
   */
  prepareConversionToolbar() {
    const e = this.Editor.ConversionToolbar.make();
    k.append(this.nodes.wrapper, e);
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Append only allowed Tools
   *
   * @param {boolean} needToShowConversionToolbar - pass false to not to show Conversion Toolbar (e.g. for Footnotes-like tools)
   */
  async addToolsFiltered(e = !0) {
    const t = S.get(), o = this.Editor.BlockManager.getBlock(t.anchorNode);
    this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(o.tool.inlineTools.values()).forEach((n) => {
      this.addTool(n);
    }), e && this.Editor.ConversionToolbar.hasTools() ? await this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0, this.recalculateWidth();
  }
  /**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */
  addTool(e) {
    const t = e.create(), o = t.render();
    if (!o) {
      P("Render method must return an instance of Node", "warn", e.name);
      return;
    }
    if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t), F(t.renderActions)) {
      const a = t.renderActions();
      this.nodes.actions.appendChild(a);
    }
    this.listeners.on(o, "click", (a) => {
      this.toolClicked(t), a.preventDefault();
    });
    const n = this.getToolShortcut(e.name);
    if (n)
      try {
        this.enableShortcuts(t, n);
      } catch {
      }
    const i = k.make("div"), s = V.t(
      G.toolNames,
      e.title || ve(e.name)
    );
    i.appendChild(k.text(s)), n && i.appendChild(k.make("div", this.CSS.inlineToolbarShortcut, {
      textContent: De(n)
    })), ae() === !1 && _e(o, i, {
      placement: "top",
      hidingDelay: 100
    }), t.checkState(S.get());
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), n = t.internal.inlineTools;
    return Array.from(n.keys()).includes(e) ? this.inlineTools[e][so.Shortcut] : o.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    we.add({
      name: t,
      handler: (o) => {
        const { currentBlock: n } = this.Editor.BlockManager;
        n && n.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param {InlineTool} tool - Tool's instance
   */
  toolClicked(e) {
    const t = S.range;
    e.surround(t), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    this.toolsInstances.forEach((e) => {
      e.checkState(S.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o]) => {
      e[t] = o.create();
    }), e;
  }
  /**
   * Allow to leaf buttons by arrows / tab
   * Buttons will be filled on opening
   */
  enableFlipper() {
    this.flipper = new oe({
      focusedItemClass: this.CSS.focusedButton,
      allowedKeys: [
        _.ENTER,
        _.TAB
      ]
    });
  }
}
class Xi extends M {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case _.BACKSPACE:
        this.backspace(e);
        break;
      case _.DELETE:
        this.delete(e);
        break;
      case _.ENTER:
        this.enter(e);
        break;
      case _.DOWN:
      case _.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case _.UP:
      case _.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case _.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Vt(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: n } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const i = o.removeSelectedBlocks(), s = o.insertDefaultBlockAtIndex(i, !0);
      n.setToBlock(s, n.positions.START), t.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: t, ConversionToolbar: o, Caret: n } = this.Editor;
    o.opened || t.opened || (e.shiftKey ? n.navigatePrevious(!0) : n.navigateNext(!0)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   */
  slashPressed() {
    this.Editor.BlockManager.currentBlock.isEmpty && this.activateToolbox();
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor;
    if (t.currentBlock.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey)
      return;
    let n = this.Editor.BlockManager.currentBlock;
    this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : this.Editor.Caret.isAtEnd ? n = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : n = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(n), this.Editor.Toolbar.moveAndOpen(n), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: n, previousBlock: i } = t;
    if (!(!S.isCollapsed || !o.isAtStart)) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), n.currentInput !== n.firstInput) {
        o.navigatePrevious();
        return;
      }
      if (i !== null) {
        if (i.isEmpty) {
          t.removeBlock(i);
          return;
        }
        if (n.isEmpty) {
          t.removeBlock(n);
          const s = t.currentBlock;
          o.setToBlock(s, o.positions.END);
          return;
        }
        Ct(n, i) ? this.mergeBlocks(i, n) : o.setToBlock(i, o.positions.END);
      }
    }
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: n, nextBlock: i } = t;
    if (!(!S.isCollapsed || !o.isAtEnd)) {
      if (e.preventDefault(), this.Editor.Toolbar.close(), n.currentInput !== n.lastInput) {
        o.navigateNext();
        return;
      }
      if (i !== null) {
        if (i.isEmpty) {
          t.removeBlock(i);
          return;
        }
        if (n.isEmpty) {
          t.removeBlock(n), o.setToBlock(i, o.positions.START);
          return;
        }
        Ct(n, i) ? this.mergeBlocks(n, i) : o.setToBlock(i, o.positions.START);
      }
    }
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Caret: n, Toolbar: i } = this.Editor;
    n.createShadow(e.pluginsContent), o.mergeBlocks(e, t).then(() => {
      window.requestAnimationFrame(() => {
        n.restoreCaret(e.pluginsContent), e.pluginsContent.normalize(), i.close();
      });
    });
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = oe.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === _.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.Toolbar.close();
    const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === _.DOWN && o) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === _.DOWN || e.keyCode === _.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    Ne(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (oe.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === _.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const t = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === _.UP && t) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (e.keyCode === _.UP || e.keyCode === _.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    Ne(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === _.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === _.ENTER && this.Editor.BlockSettings.opened, n = e.keyCode === _.ENTER && this.Editor.InlineToolbar.opened, i = e.keyCode === _.ENTER && this.Editor.ConversionToolbar.opened, s = e.keyCode === _.TAB;
    return !(e.shiftKey || s || t || o || n || i);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class $e {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return Wt(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    k.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], n = e - 1, i = Math.max(0, n), s = this.blocks[i];
    e > 0 ? this.insertToDOM(o, "afterend", s) : this.insertToDOM(o, "beforebegin", s), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(ee.MOVED, a);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED));
    const n = o ? 1 : 0;
    if (this.blocks.splice(e, n, t), e > 0) {
      const i = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", i);
    } else {
      const i = this.blocks[e + 1];
      i ? this.insertToDOM(t, "beforebegin", i) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const n of e)
      o.appendChild(n.holder);
    if (this.length > 0) {
      if (t > 0) {
        const n = Math.min(t - 1, this.length - 1);
        this.blocks[n].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((n) => n.call(ee.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(ee.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(ee.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
}
const St = "block-removed", Tt = "block-added", Zi = "block-moved", Bt = "block-changed";
class Gi {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
class Ji extends M {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((e) => !!e.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((e) => !!e.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new $e(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: $e.set,
      get: $e.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: n = {}
  }) {
    const i = this.Editor.ReadOnly.isEnabled, s = this.Editor.Tools.blockTools.get(e), a = new $({
      id: o,
      data: t,
      tool: s,
      api: this.Editor.API,
      readOnly: i,
      tunesData: n
    }, this.eventsDispatcher);
    return i || window.requestIdleCallback(() => {
      this.bindBlockEvents(a);
    }, { timeout: 2e3 }), a;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: n,
    needToFocus: i = !0,
    replace: s = !1,
    tunes: a = {}
  } = {}) {
    let c = n;
    c === void 0 && (c = this.currentBlockIndex + (s ? 0 : 1));
    const l = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return s && this.blockDidMutated(St, this.getBlockByIndex(c), {
      index: c
    }), this._blocks.insert(c, l, s), this.blockDidMutated(Tt, l, {
      index: c
    }), i ? this.currentBlockIndex = c : c <= this.currentBlockIndex && this.currentBlockIndex++, l;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events
   *
   * @param block - block to update
   * @param data - new data
   */
  async update(e, t) {
    const o = await e.data, n = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, o, t),
      tunes: e.tunes
    }), i = this.getBlockIndex(e);
    return this._blocks.replace(i, n), this.blockDidMutated(Bt, n, {
      index: i
    }), n;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const n = this.getBlockIndex(e);
    this.insert({
      tool: t,
      data: o,
      index: n,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const n = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        n.call(ee.ON_PASTE, t);
      });
    } catch (i) {
      P(`${e}: onPaste callback call is failed`, "error", i);
    }
    return n;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1) {
    const o = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o, this.blockDidMutated(Tt, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    const o = await t.data;
    K(o) || await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e);
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const n = this._blocks.indexOf(e);
      if (!this.validateIndex(n))
        throw new Error("Can't find a Block to remove");
      e.destroy(), this._blocks.remove(n), this.blockDidMutated(St, e, {
        index: n
      }), this.currentBlockIndex >= n && this.currentBlockIndex--, this.blocks.length ? n === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, t && this.insert()), o();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = k.make("div");
    t.appendChild(e);
    const o = {
      text: k.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    k.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${$.CSS.wrapper}`), n = t.indexOf(o);
    if (n >= 0)
      return this._blocks[n];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    k.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${$.CSS.wrapper}`);
    if (!t)
      return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    k.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${$.CSS.wrapper}`);
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      P("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      P("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Zi, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const n = this.Editor.Tools.blockTools.get(t);
    if (!n)
      throw new Error(`Could not convert Block. Tool «${t}» not found.`);
    const i = await e.exportDataAsString(), s = te(
      i,
      n.sanitizeConfig
    );
    let a = Gn(s, n.conversionConfig);
    o && (a = Object.assign(a, o)), this.replace(e, n.name, a);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  dropPointer() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new Gi();
    this.blocks.forEach((o) => {
      t.add(async () => {
        await this.removeBlock(o, !1);
      });
    }), await t.completed, this.dropPointer(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (o) => {
      t.keydown(o);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o) => {
      t.keyup(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o) => {
      t.dragOver(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o) => {
      t.dragLeave(o);
    }), e.on("didMutated", (o) => this.blockDidMutated(Bt, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const n = new CustomEvent(e, {
      detail: {
        target: new se(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(Zt, {
      event: n
    }), t;
  }
}
class Qi extends M {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new S(), we.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    S.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: n, RectangleSelection: i } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const s = e && e instanceof KeyboardEvent, a = s && Vt(e.keyCode);
    if (this.anyBlockSelected && s && a && !S.isSelectionExists) {
      const c = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(c, !0), n.setToBlock(o.currentBlock), Ne(() => {
        const l = e.key;
        n.insertContentAtCaretPosition(l.length > 1 ? "" : l);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || i.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = k.make("div");
    this.selectedBlocks.forEach((i) => {
      const s = te(i.holder.innerHTML, this.sanitizerConfig), a = k.make("p");
      a.innerHTML = s, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((i) => i.textContent).join(`

`), n = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", n), Promise.all(this.selectedBlocks.map((i) => i.save())).then((i) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(i));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor, o = t.getBlockByIndex(e);
    o !== void 0 && this.selectBlock(o);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), S.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = !1, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    we.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), k.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target), o = t.inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), S.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class Pe extends M {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Get's deepest first node and checks if offset is zero
   *
   * @returns {boolean}
   */
  get isAtStart() {
    const { currentBlock: e } = this.Editor.BlockManager;
    if (!e.focusable)
      return !0;
    const t = S.get(), o = k.getDeepestNode(e.currentInput);
    let n = t.focusNode;
    if (k.isNativeInput(o))
      return o.selectionEnd === 0;
    if (!t.anchorNode)
      return !1;
    let i = n.textContent.search(/\S/);
    i === -1 && (i = 0);
    let s = t.focusOffset;
    return n.nodeType !== Node.TEXT_NODE && n.childNodes.length && (n.childNodes[s] ? (n = n.childNodes[s], s = 0) : (n = n.childNodes[s - 1], s = n.textContent.length)), (k.isLineBreakTag(o) || k.isEmpty(o)) && this.getHigherLevelSiblings(n, "left").every((a) => {
      const c = k.isLineBreakTag(a), l = a.children.length === 1 && k.isLineBreakTag(a.children[0]), u = c || l;
      return k.isEmpty(a) && !u;
    }) && s === i ? !0 : o === null || n === o && s <= i;
  }
  /**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */
  get isAtEnd() {
    const { currentBlock: e } = this.Editor.BlockManager;
    if (!e.focusable)
      return !0;
    const t = S.get();
    let o = t.focusNode;
    const n = k.getDeepestNode(e.currentInput, !0);
    if (k.isNativeInput(n))
      return n.selectionEnd === n.value.length;
    if (!t.focusNode)
      return !1;
    let i = t.focusOffset;
    if (o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[i - 1] ? (o = o.childNodes[i - 1], i = o.textContent.length) : (o = o.childNodes[0], i = 0)), k.isLineBreakTag(n) || k.isEmpty(n)) {
      const a = this.getHigherLevelSiblings(o, "right");
      if (a.every((c, l) => l === a.length - 1 && k.isLineBreakTag(c) || k.isEmpty(c) && !k.isLineBreakTag(c)) && i === o.textContent.length)
        return !0;
    }
    const s = n.textContent.replace(/\s+$/, "");
    return o === n && i >= s.length;
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    var n;
    const { BlockManager: i, BlockSelection: s } = this.Editor;
    if (s.clearSelection(), !e.focusable) {
      (n = window.getSelection()) == null || n.removeAllRanges(), s.selectBlock(e), i.currentBlock = e;
      return;
    }
    let a;
    switch (t) {
      case this.positions.START:
        a = e.firstInput;
        break;
      case this.positions.END:
        a = e.lastInput;
        break;
      default:
        a = e.currentInput;
    }
    if (!a)
      return;
    const c = k.getDeepestNode(a, t === this.positions.END), l = k.getContentLength(c);
    switch (!0) {
      case t === this.positions.START:
        o = 0;
        break;
      case t === this.positions.END:
      case o > l:
        o = l;
        break;
    }
    this.set(c, o), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = a;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: n } = this.Editor.BlockManager, i = k.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(i, 0);
        break;
      case this.positions.END:
        this.set(i, k.getContentLength(i));
        break;
      default:
        o && this.set(i, o);
    }
    n.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: o, bottom: n } = S.setCursor(e, t), { innerHeight: i } = window;
    o < 0 ? window.scrollBy(0, o - 30) : n > i && window.scrollBy(0, n - i + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = S.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (k.isNativeInput(o)) {
          const n = o, i = document.createDocumentFragment(), s = n.value.substring(0, n.selectionStart), a = n.value.substring(n.selectionStart);
          return i.textContent = a, n.value = s, i;
        } else {
          const n = t.cloneRange();
          return n.selectNodeContents(o), n.setStart(t.endContainer, t.endOffset), n.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = !1) {
    const { BlockManager: t } = this.Editor, { currentBlock: o, nextBlock: n } = t, { nextInput: i } = o, s = this.isAtEnd;
    let a = n;
    const c = e || s;
    if (i && c)
      return this.setToInput(i, this.positions.START), !0;
    if (a === null) {
      if (o.tool.isDefault || !c)
        return !1;
      a = t.insertAtEnd();
    }
    return c ? (this.setToBlock(a, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = !1) {
    const { currentBlock: t, previousBlock: o } = this.Editor.BlockManager;
    if (!t)
      return !1;
    const { previousInput: n } = t, i = e || this.isAtStart;
    return n && i ? (this.setToInput(n, this.positions.END), !0) : o !== null && i ? (this.setToBlock(o, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(Pe.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${Pe.CSS.shadowCaret}`);
    if (!t)
      return;
    new S().expandToTag(t);
    const o = document.createRange();
    o.selectNode(t), o.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), n = S.get(), i = S.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((l) => t.appendChild(l)), t.childNodes.length === 0 && t.appendChild(new Text());
    const s = t.lastChild;
    i.deleteContents(), i.insertNode(t);
    const a = document.createRange(), c = s.nodeType === Node.TEXT_NODE ? s : s.firstChild;
    c !== null && c.textContent !== null && a.setStart(c, c.textContent.length), n.removeAllRanges(), n.addRange(a);
  }
  /**
   * Get all first-level (first child of [contenteditable]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */
  getHigherLevelSiblings(e, t) {
    let o = e;
    const n = [];
    for (; o.parentNode && o.parentNode.contentEditable !== "true"; )
      o = o.parentNode;
    const i = t === "left" ? "previousSibling" : "nextSibling";
    for (; o[i]; )
      o = o[i], n.push(o);
    return n;
  }
}
class er extends M {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const n = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, i = t.getBlockByChildNode(e.target);
      if (!(!n || !i) && i !== n) {
        if (n === this.firstSelectedBlock) {
          S.get().removeAllRanges(), n.selected = !0, i.selected = !0, o.clearCache();
          return;
        }
        if (i === this.firstSelectedBlock) {
          n.selected = !1, i.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(n, i), this.lastSelectedBlock = i;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== An.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * return boolean is cross block selection started
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), S.get().removeAllRanges());
    const n = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), i = t.blocks[n];
    i && (this.lastSelectedBlock.selected !== i.selected ? (i.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = i, this.Editor.InlineToolbar.close(), i.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: n } = this.Editor, i = t.blocks.indexOf(this.firstSelectedBlock), s = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && i > -1 && s > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case _.DOWN:
        case _.RIGHT:
          n.setToBlock(t.blocks[Math.max(i, s)], n.positions.END);
          break;
        case _.UP:
        case _.LEFT:
          n.setToBlock(t.blocks[Math.min(i, s)], n.positions.START);
          break;
        default:
          n.setToBlock(t.blocks[Math.max(i, s)], n.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    S.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: n } = this.Editor, i = o.blocks.indexOf(e), s = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let c = Math.min(i, s); c <= Math.max(i, s); c++) {
      const l = o.blocks[c];
      l !== this.firstSelectedBlock && l !== (a ? e : t) && (o.blocks[c].selected = !o.blocks[c].selected, n.clearCache());
    }
  }
}
class tr extends M {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Caret: o,
      Paste: n
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((s) => {
      s.dropTarget = !1;
    }), S.isAtEditor && !S.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const i = t.setCurrentBlockByChildNode(e.target);
    if (i)
      this.Editor.Caret.setToBlock(i, o.positions.END);
    else {
      const s = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(s, o.positions.END);
    }
    await n.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    S.isAtEditor && !S.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
class or extends M {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = 400, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on(Zt, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(Gt, () => {
      this.disable();
    }), this.eventsDispatcher.on(Jt, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !F(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(Ze, {
      mutations: e
    });
  }
}
const lo = class extends M {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (r) => {
      try {
        const e = r.create({}, {}, !1);
        if (r.pasteConfig === !1) {
          this.exceptionList.push(r.name);
          return;
        }
        if (!F(e.onPaste))
          return;
        this.getTagsConfig(r), this.getFilesConfig(r), this.getPatternsConfig(r);
      } catch (e) {
        P(
          `Paste handling for «${r.name}» Tool hasn't been set up because of the error`,
          "warn",
          e
        );
      }
    }, this.handlePasteEvent = async (r) => {
      const { BlockManager: e, Toolbar: t } = this.Editor, o = e.setCurrentBlockByChildNode(r.target);
      !o || this.isNativeBehaviour(r.target) && !r.clipboardData.types.includes("Files") || o && this.exceptionList.includes(o.name) || (r.preventDefault(), this.processDataTransfer(r.clipboardData), t.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(r) {
    r ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(r, e = !1) {
    const { Tools: t } = this.Editor, o = r.types;
    if ((o.includes ? o.includes("Files") : o.contains("Files")) && !K(this.toolsFiles)) {
      await this.processFiles(r.files);
      return;
    }
    const n = r.getData(this.MIME_TYPE), i = r.getData("text/plain");
    let s = r.getData("text/html");
    if (n)
      try {
        this.insertEditorJSData(JSON.parse(n));
        return;
      } catch {
      }
    e && i.trim() && s.trim() && (s = "<p>" + (s.trim() ? s : i) + "</p>");
    const a = Object.keys(this.toolsTags).reduce((u, d) => (u[d.toLowerCase()] = this.toolsTags[d].sanitizationConfig ?? {}, u), {}), c = Object.assign({}, a, t.getAllInlineToolsSanitizeConfig(), { br: {} }), l = te(s, c);
    !l.trim() || l.trim() === i || !k.isHTMLString(l) ? await this.processText(i) : await this.processText(l, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(r, e = !1) {
    const { Caret: t, BlockManager: o } = this.Editor, n = e ? this.processHTML(r) : this.processPlain(r);
    if (!n.length)
      return;
    if (n.length === 1) {
      n[0].isBlock ? this.processSingleBlock(n.pop()) : this.processInlinePaste(n.pop());
      return;
    }
    const i = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
    n.map(
      async (s, a) => this.insertBlock(s, a === 0 && i)
    ), o.currentBlock && t.setToBlock(o.currentBlock, t.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const r = this.Editor.Tools.blockTools;
    Array.from(r.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(r) {
    return ne(r) ? [r] : z(r) ? Object.keys(r) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(r) {
    if (r.pasteConfig === !1)
      return;
    const e = r.pasteConfig.tags || [], t = [];
    e.forEach((o) => {
      const n = this.collectTagNames(o);
      t.push(...n), n.forEach((i) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, i)) {
          P(
            `Paste handler for «${r.name}» Tool on «${i}» tag is skipped because it is already used by «${this.toolsTags[i].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const s = z(o) ? o[i] : null;
        this.toolsTags[i.toUpperCase()] = {
          tool: r,
          sanitizationConfig: s
        };
      });
    }), this.tagsByTool[r.name] = t.map((o) => o.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(r) {
    if (r.pasteConfig === !1)
      return;
    const { files: e = {} } = r.pasteConfig;
    let { extensions: t, mimeTypes: o } = e;
    !t && !o || (t && !Array.isArray(t) && (P(`«extensions» property of the onDrop config for «${r.name}» Tool should be an array`), t = []), o && !Array.isArray(o) && (P(`«mimeTypes» property of the onDrop config for «${r.name}» Tool should be an array`), o = []), o && (o = o.filter((n) => Fn(n) ? !0 : (P(`MIME type value «${n}» for the «${r.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[r.name] = {
      extensions: t || [],
      mimeTypes: o || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(r) {
    r.pasteConfig === !1 || !r.pasteConfig.patterns || K(r.pasteConfig.patterns) || Object.entries(r.pasteConfig.patterns).forEach(([e, t]) => {
      t instanceof RegExp || P(
        `Pattern ${t} for «${r.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: e,
        pattern: t,
        tool: r
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(r) {
    return k.isNativeInput(r);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(r) {
    const { BlockManager: e } = this.Editor;
    let t;
    t = await Promise.all(
      Array.from(r).map((n) => this.processFile(n))
    ), t = t.filter((n) => !!n);
    const o = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
    t.forEach(
      (n, i) => {
        e.paste(n.type, n.event, i === 0 && o);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(r) {
    const e = Rn(r), t = Object.entries(this.toolsFiles).find(([n, { mimeTypes: i, extensions: s }]) => {
      const [a, c] = r.type.split("/"), l = s.find((d) => d.toLowerCase() === e.toLowerCase()), u = i.find((d) => {
        const [g, v] = d.split("/");
        return g === a && (v === c || v === "*");
      });
      return !!l || !!u;
    });
    if (!t)
      return;
    const [o] = t;
    return {
      event: this.composePasteEvent("file", {
        file: r
      }),
      type: o
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(r) {
    const { Tools: e } = this.Editor, t = k.make("DIV");
    return t.innerHTML = r, this.getNodes(t).map((o) => {
      let n, i = e.defaultTool, s = !1;
      switch (o.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          n = k.make("div"), n.appendChild(o);
          break;
        case Node.ELEMENT_NODE:
          n = o, s = !0, this.toolsTags[n.tagName] && (i = this.toolsTags[n.tagName].tool);
          break;
      }
      const { tags: a } = i.pasteConfig || { tags: [] }, c = a.reduce((d, g) => (this.collectTagNames(g).forEach((v) => {
        const h = z(g) ? g[v] : null;
        d[v.toLowerCase()] = h || {};
      }), d), {}), l = Object.assign({}, c, i.baseSanitizeConfig);
      if (n.tagName.toLowerCase() === "table") {
        const d = te(n.outerHTML, l);
        n = k.make("div", void 0, {
          innerHTML: d
        }).firstChild;
      } else
        n.innerHTML = te(n.innerHTML, l);
      const u = this.composePasteEvent("tag", {
        data: n
      });
      return {
        content: n,
        isBlock: s,
        tool: i.name,
        event: u
      };
    }).filter((o) => {
      const n = k.isEmpty(o.content), i = k.isSingleTag(o.content);
      return !n || i;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(r) {
    const { defaultBlock: e } = this.config;
    if (!r)
      return [];
    const t = e;
    return r.split(/\r?\n/).filter((o) => o.trim()).map((o) => {
      const n = k.make("div");
      n.textContent = o;
      const i = this.composePasteEvent("tag", {
        data: n
      });
      return {
        content: n,
        tool: t,
        isBlock: !1,
        event: i
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(r) {
    const { Caret: e, BlockManager: t } = this.Editor, { currentBlock: o } = t;
    if (!o || r.tool !== o.name || !k.containsOnlyInlineElements(r.content.innerHTML)) {
      this.insertBlock(r, (o == null ? void 0 : o.tool.isDefault) && o.isEmpty);
      return;
    }
    e.insertContentAtCaretPosition(r.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(r) {
    const { BlockManager: e, Caret: t } = this.Editor, { content: o } = r;
    if (e.currentBlock && e.currentBlock.tool.isDefault && o.textContent.length < lo.PATTERN_PROCESSING_MAX_LENGTH) {
      const n = await this.processPattern(o.textContent);
      if (n) {
        const i = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, s = e.paste(n.tool, n.event, i);
        t.setToBlock(s, t.positions.END);
        return;
      }
    }
    if (e.currentBlock && e.currentBlock.currentInput) {
      const n = e.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        te(o.innerHTML, n)
      );
    } else
      this.insertBlock(r);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(r) {
    const e = this.toolsPatterns.find((t) => {
      const o = t.pattern.exec(r);
      return o ? r === o.shift() : !1;
    });
    return e ? {
      event: this.composePasteEvent("pattern", {
        key: e.key,
        data: r
      }),
      tool: e.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(r, e = !1) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: n } = t;
    let i;
    if (e && n && n.isEmpty) {
      i = t.paste(r.tool, r.event, !0), o.setToBlock(i, o.positions.END);
      return;
    }
    i = t.paste(r.tool, r.event), o.setToBlock(i, o.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(r) {
    const { BlockManager: e, Caret: t, Tools: o } = this.Editor;
    Qt(
      r,
      (n) => o.blockTools.get(n).sanitizeConfig
    ).forEach(({ tool: n, data: i }, s) => {
      let a = !1;
      s === 0 && (a = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
      const c = e.insert({
        tool: n,
        data: i,
        replace: a
      });
      t.setToBlock(c, t.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(r, e, t) {
    const o = Object.keys(this.toolsTags), n = r, { tool: i } = this.toolsTags[n.tagName] || {}, s = this.tagsByTool[i == null ? void 0 : i.name] || [], a = o.includes(n.tagName), c = k.blockElements.includes(n.tagName.toLowerCase()), l = Array.from(n.children).some(
      ({ tagName: d }) => o.includes(d) && !s.includes(d)
    ), u = Array.from(n.children).some(
      ({ tagName: d }) => k.blockElements.includes(d.toLowerCase())
    );
    if (!c && !a && !l)
      return t.appendChild(n), [...e, t];
    if (a && !l || c && !u && !l)
      return [...e, t, n];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(r) {
    const e = Array.from(r.childNodes);
    let t;
    const o = (n, i) => {
      if (k.isEmpty(i) && !k.isSingleTag(i))
        return n;
      const s = n[n.length - 1];
      let a = new DocumentFragment();
      switch (s && k.isFragment(s) && (a = n.pop()), i.nodeType) {
        case Node.ELEMENT_NODE:
          if (t = this.processElementNode(i, n, a), t)
            return t;
          break;
        case Node.TEXT_NODE:
          return a.appendChild(i), [...n, a];
        default:
          return [...n, a];
      }
      return [...n, ...Array.from(i.childNodes).reduce(o, [])];
    };
    return e.reduce(o, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(r, e) {
    return new CustomEvent(r, {
      detail: e
    });
  }
};
let co = lo;
co.PATTERN_PROCESSING_MAX_LENGTH = 450;
class nr extends M {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([n, i]) => {
      i.isReadOnlySupported || o.push(n);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param {boolean} state - (optional) read-only state or toggle
   */
  async toggle(e = !this.readOnlyEnabled) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const t = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const n in this.Editor)
      this.Editor[n].toggleReadOnly && this.Editor[n].toggleReadOnly(e);
    if (t === e)
      return this.readOnlyEnabled;
    const o = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new Xt(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class Te extends M {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const n = [
      `.${$.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], i = o.closest("." + this.Editor.UI.CSS.editorWrapper), s = n.some((a) => !!o.closest(a));
    !i || s || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, !1), this.listeners.on(document.body, "mousemove", Ye((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", Ye((t) => {
      this.processScroll(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    e.button === this.MAIN_MOUSE_BUTTON && (e.target.closest(k.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY));
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = k.make("div", Te.CSS.overlay, {}), n = k.make("div", Te.CSS.overlayContainer, {}), i = k.make("div", Te.CSS.rect, {});
    return n.appendChild(i), o.appendChild(n), t.appendChild(o), this.overlayRectangle = i, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: n } = this.genInfoForMouseSelection(), i = this.startX > t && this.mouseX > t, s = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(i || s), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), n !== void 0 && (this.trySelectNextBlock(n), this.inverseSelection(), S.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const e = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(t);
    if (!this.rectCrossesBlocks && e)
      for (const t of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(t);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const e = document.body.offsetWidth / 2, t = this.mouseY - window.pageYOffset, o = document.elementFromPoint(e, t), n = this.Editor.BlockManager.getBlockByChildNode(o);
    let i;
    n !== void 0 && (i = this.Editor.BlockManager.blocks.findIndex((u) => u.holder === n.holder));
    const s = this.Editor.BlockManager.lastBlock.holder.querySelector("." + $.CSS.content), a = Number.parseInt(window.getComputedStyle(s).width, 10) / 2, c = e - a, l = e + a;
    return {
      index: i,
      leftPos: c,
      rightPos: l
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, n = 1, i = -1, s = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let c = s;
    o > 1 && (c = a ? n : i);
    const l = e > this.stackOfSelected[o - 1] && c === n, u = e < this.stackOfSelected[o - 1] && c === i, d = !(l || u || c === s);
    if (!d && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let h = this.stackOfSelected[o - 1] + 1 || e;
      for (h; h <= e; h++)
        this.addBlockInSelection(h);
      return;
    }
    if (!d && e < this.stackOfSelected[o - 1]) {
      for (let h = this.stackOfSelected[o - 1] - 1; h >= e; h--)
        this.addBlockInSelection(h);
      return;
    }
    if (!d)
      return;
    let g = o - 1, v;
    for (e > this.stackOfSelected[o - 1] ? v = () => e > this.stackOfSelected[g] : v = () => e < this.stackOfSelected[g]; v(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g]), this.stackOfSelected.pop(), g--;
  }
}
class ir extends M {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: n } = this.Editor;
      if (e.length === 0)
        n.insert();
      else {
        const i = e.map(({ type: s, data: a, tunes: c, id: l }) => {
          o.available.has(s) === !1 && (Z(`Tool «${s}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(s, a, l), s = o.stubTool);
          let u;
          try {
            u = n.composeBlock({
              id: l,
              tool: s,
              data: a,
              tunes: c
            });
          } catch (d) {
            P(`Block «${s}» skipped because of plugins error`, "error", {
              data: a,
              error: d
            }), a = this.composeStubDataForTool(s, a, l), s = o.stubTool, u = n.composeBlock({
              id: l,
              tool: s,
              data: a,
              tunes: c
            });
          }
          return u;
        });
        n.insertMany(i);
      }
      window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o) {
    const { Tools: n } = this.Editor;
    let i = e;
    if (n.unavailable.has(e)) {
      const s = n.unavailable.get(e).toolbox;
      s !== void 0 && s[0].title !== void 0 && (i = s[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: i
    };
  }
}
class rr extends M {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, n = [];
    try {
      o.forEach((a) => {
        n.push(this.getSavedData(a));
      });
      const i = await Promise.all(n), s = await Qt(i, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(s);
    } catch (i) {
      Z("Saving failed due to the Error %o", "error", i);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: n, data: i, tunes: s, isValid: a }) => {
      if (!a) {
        P(`Block «${n}» skipped because saved data is invalid`);
        return;
      }
      if (n === this.Editor.Tools.stubTool) {
        t.push(i);
        return;
      }
      const c = {
        id: o,
        type: n,
        data: i,
        ...!K(s) && {
          tunes: s
        }
      };
      t.push(c);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.29.1"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before,.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(r);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const sr = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class ht {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: n }) {
    this.api = o, this.readOnly = n, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : ht.DEFAULT_PLACEHOLDER, this._data = {}, this._element = null, this._preserveBlank = t.preserveBlank !== void 0 ? t.preserveBlank : !1, this.data = e;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete")
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = !1, e.dataset.placeholder = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = !0, e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    const t = {
      text: this.data.text + e.text
    };
    this.data = t;
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this.data = t;
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {ParagraphData} Current data
   * @private
   */
  get data() {
    if (this._element !== null) {
      const e = this._element.innerHTML;
      this._data.text = e;
    }
    return this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {ParagraphData} data — data to set
   * @private
   */
  set data(e) {
    this._data = e || {}, this._element !== null && this.hydrate();
  }
  /**
   * Fill tool's view with data
   */
  hydrate() {
    window.requestAnimationFrame(() => {
      this._element.innerHTML = this._data.text || "";
    });
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {{tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: sr,
      title: "Text"
    };
  }
}
class ut {
  constructor() {
    this.commandName = "bold", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--bold"
    }, this.nodes = {
      button: void 0
    };
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Bi, this.nodes.button;
  }
  /**
   * Wrap range with <b> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
ut.isInline = !0;
ut.title = "Bold";
class pt {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Mi, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
pt.isInline = !0;
pt.title = "Italic";
class ft {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new S();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Et, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = Pi, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = Et, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new S();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), P("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", n = /^\/\/[^/\s]/.test(e);
    return !t && !o && !n && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
ft.isInline = !0;
ft.title = "Link";
class ho {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = k.make("div", this.CSS.wrapper), t = Di, o = k.make("div", this.CSS.info), n = k.make("div", this.CSS.title, {
      textContent: this.title
    }), i = k.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(n), o.appendChild(i), e.appendChild(o), e;
  }
}
ho.isReadOnlySupported = !0;
class ar extends dt {
  constructor() {
    super(...arguments), this.type = Fe.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[ct.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
}
class lr extends dt {
  constructor() {
    super(...arguments), this.type = Fe.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api.getMethodsForTool(this),
      config: this.settings,
      block: t,
      data: e
    });
  }
}
class q extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new q(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new q(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new q(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new q(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new q(e);
  }
}
var cr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, uo = (r, e, t, o) => {
  for (var n = dr(e, t), i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(e, t, n) || n);
  return n && cr(e, t, n), n;
};
class gt extends dt {
  constructor() {
    super(...arguments), this.type = Fe.Block, this.inlineTools = new q(), this.tunes = new q();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api.getMethodsForTool(this),
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[ge.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[ge.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[ge.Toolbox], t = this.config[Ae.Toolbox];
    if (!K(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, n) => {
        const i = e[n];
        return i ? {
          ...i,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[ge.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[Ae.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[Ae.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[ge.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (K(e))
      return t;
    const o = {};
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        const i = e[n];
        z(i) ? o[n] = Object.assign({}, t, i) : o[n] = i;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
uo([
  ye
], gt.prototype, "sanitizeConfig");
uo([
  ye
], gt.prototype, "baseSanitizeConfig");
class hr {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...n } = this.config[e], i = this.getConstructor(t);
    return new i({
      name: e,
      constructable: t,
      config: n,
      api: this.api,
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[ct.IsInline]:
        return ar;
      case e[ao.IsTune]:
        return lr;
      default:
        return gt;
    }
  }
}
class po {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: to,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, n = o.getBoundingClientRect();
    let i = Math.abs(window.innerHeight - o.offsetHeight);
    n.top < window.innerHeight && (i = window.scrollY + o.offsetHeight), window.scrollTo(0, i), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
po.isTune = !0;
class fo {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: Li,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
fo.isTune = !0;
class go {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: _i,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const n = t.holder, i = o.holder, s = n.getBoundingClientRect(), a = i.getBoundingClientRect();
    let c;
    a.top > 0 ? c = Math.abs(s.top) - Math.abs(a.top) : c = Math.abs(s.top) + a.height, window.scrollBy(0, -1 * c), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
go.isTune = !0;
var ur = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, fr = (r, e, t, o) => {
  for (var n = pr(e, t), i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(e, t, n) || n);
  return n && ur(e, t, n), n;
};
class mo extends M {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new q(), this.toolsUnavailable = new q();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = Ke({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new hr(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await Dn(t, (o) => {
      this.toolPrepareMethodSuccess(o);
    }, (o) => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      F(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      bold: {
        class: ut,
        isInternal: !0
      },
      italic: {
        class: pt,
        isInternal: !0
      },
      link: {
        class: ft,
        isInternal: !0
      },
      paragraph: {
        class: ht,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: ho,
        isInternal: !0
      },
      moveUp: {
        class: go,
        isInternal: !0
      },
      delete: {
        class: fo,
        isInternal: !0
      },
      moveDown: {
        class: po,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const o = ["render", "surround", "checkState"].filter((n) => !t.create()[n]);
      if (o.length) {
        P(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          o
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, n]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: F(n.class.prepare) ? n.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: n.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new q(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new q(
        e.enabledInlineTools.map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new q(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new q([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new q(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new q([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!F(t) && !F(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      z(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
}
fr([
  ye
], mo.prototype, "getAllInlineToolsSanitizeConfig");
const gr = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:190px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
class mr extends M {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = yt(() => {
      this.windowResize();
    }, 200);
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${$.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.checkIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : window.requestIdleCallback(() => {
      this.enableModuleBindings();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: n } = this.Editor;
    return t.opened || o.opened || n.opened || e.toolbox.opened;
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof oe).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "";
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: n } = this.Editor;
    t.close(), o.close(), n.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and cache a result
   */
  checkIsMobile() {
    this.isMobile = window.innerWidth < Yt;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = k.getHolder(this.config.holder), this.nodes.wrapper = k.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = k.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (k.get(e))
      return;
    const t = k.make("style", null, {
      id: e,
      textContent: gr.toString()
    });
    this.config.style && !K(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), k.prepend(document.head, t);
  }
  /**
   * Bind events on the Editor.js interface
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (t) => {
      this.redactorClicked(t);
    }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (t) => {
      this.documentTouched(t);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (t) => {
      this.documentTouched(t);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(document, "keydown", (t) => {
      this.documentKeydown(t);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (t) => {
      this.documentClicked(t);
    }, !0);
    const e = yt(() => {
      this.selectionChanged();
    }, 180);
    this.readOnlyMutableListeners.on(document, "selectionchange", e, !0), this.readOnlyMutableListeners.on(window, "resize", () => {
      this.resizeDebouncer();
    }, {
      passive: !0
    }), this.watchBlockHoveredEvents();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ye((t) => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(ro, {
        block: this.Editor.BlockManager.getBlockByChildNode(o)
      }));
    }, 20), {
      passive: !0
    });
  }
  /**
   * Unbind events on the Editor.js interface
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.checkIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case _.ENTER:
        this.enterPressed(e);
        break;
      case _.BACKSPACE:
      case _.DELETE:
        this.backspacePressed(e);
        break;
      case _.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && n || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: n } = this.Editor;
    if (o.anyBlockSelected && !S.isSelectionExists) {
      const i = t.removeSelectedBlocks(), s = t.insertDefaultBlockAtIndex(i, !0);
      n.setToBlock(s, n.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor, n = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !S.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && n && e.target.tagName === "BODY") {
      const i = this.Editor.BlockManager.insert();
      this.Editor.Caret.setToBlock(i), this.Editor.Toolbar.moveAndOpen(i);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var t, o;
    if (!e.isTrusted)
      return;
    const n = e.target;
    this.nodes.holder.contains(n) || S.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    const i = (t = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : t.contains(n), s = (o = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : o.contains(n), a = i || s;
    if (this.Editor.BlockSettings.opened && !a) {
      this.Editor.BlockSettings.close();
      const c = this.Editor.BlockManager.getBlockByChildNode(n);
      this.Editor.Toolbar.moveAndOpen(c);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, n = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, n);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!S.isCollapsed)
      return;
    const t = e.target, o = e.metaKey || e.ctrlKey;
    if (k.isAnchor(t) && o) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const n = t.getAttribute("href"), i = jn(n);
      $n(i);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1), o = k.offset(t.holder).bottom, n = e.pageY, { BlockSelection: i } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !i.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    o < n) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: s, Caret: a, Toolbar: c } = this.Editor;
      (!s.lastBlock.tool.isDefault || !s.lastBlock.isEmpty) && s.insertAtEnd(), a.setToTheLastBlock(), c.moveAndOpen(s.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = S.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && S.get().removeAllRanges(), !o) {
      S.range || this.Editor.InlineToolbar.close();
      return;
    }
    const n = o.closest(`.${$.CSS.content}`) === null;
    if (n && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), o.dataset.inlineToolbar !== "true"))
      return;
    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
    const i = n !== !0;
    this.Editor.InlineToolbar.tryToShow(!0, i);
  }
}
const br = {
  // API Modules
  BlocksAPI: Jn,
  CaretAPI: Qn,
  EventsAPI: ei,
  I18nAPI: it,
  API: ti,
  InlineToolbarAPI: oi,
  ListenersAPI: ni,
  NotifierAPI: ai,
  ReadOnlyAPI: li,
  SanitizerAPI: gi,
  SaverAPI: mi,
  SelectionAPI: bi,
  StylesAPI: ki,
  ToolbarAPI: vi,
  TooltipAPI: Ei,
  UiAPI: Si,
  // Toolbar Modules
  BlockSettings: ji,
  ConversionToolbar: Y,
  Toolbar: Yi,
  InlineToolbar: Ki,
  // Modules
  BlockEvents: Xi,
  BlockManager: Ji,
  BlockSelection: Qi,
  Caret: Pe,
  CrossBlockSelection: er,
  DragNDrop: tr,
  ModificationsObserver: or,
  Paste: co,
  ReadOnly: nr,
  RectangleSelection: Te,
  Renderer: ir,
  Saver: rr,
  Tools: mo,
  UI: mr
};
class kr {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new Re();
    let t, o;
    this.isReady = new Promise((n, i) => {
      t = n, o = i;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: n, Caret: i, UI: s, ModificationsObserver: a } = this.moduleInstances;
      s.checkEmptiness(), a.enable(), this.configuration.autofocus && i.setToBlock(n.blocks[0], i.positions.START), t();
    }).catch((n) => {
      P(`Editor.js is not ready because of ${n}`, "error"), o(n);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var t, o;
    z(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, Xe(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = qt.VERBOSE), Nn(this.config.logLevel), Xe(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const n = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (K(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [n] }), this.config.readOnly = this.config.readOnly || !1, (t = this.config.i18n) != null && t.messages && V.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((o = this.config.i18n) == null ? void 0 : o.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (ne(t) && !k.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && z(t) && !k.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (e, t) => e.then(async () => {
        try {
          await this.moduleInstances[t].prepare();
        } catch (o) {
          if (o instanceof Xt)
            throw new Error(o.message);
          P(`Module ${t} was skipped because of %o`, "warn", o);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(br).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        P("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class vr {
  /** Editor version */
  static get version() {
    return "2.29.1";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    z(e) && F(e.onReady) && (t = e.onReady);
    const o = new kr(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((n) => {
        F(n.destroy) && n.destroy(), n.listeners.removeAll();
      }), Ci(), e = null;
      for (const n in this)
        Object.prototype.hasOwnProperty.call(this, n) && delete this[n];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((n) => {
      this[n] = e[n];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([n, i]) => {
      Object.entries(i).forEach(([s, a]) => {
        this[a] = e.moduleInstances.API.methods[n][s];
      });
    });
  }
}
const wr = {
  messages: {
    ui: {
      blockTunes: {
        toggler: {
          "Click to tune": "ブロックの操作"
        }
      },
      inlineToolbar: {
        converter: {
          "Convert to": "変更"
        }
      },
      toolbar: {
        toolbox: {
          Add: "追加"
        }
      }
    },
    toolNames: {
      Text: "文章",
      Heading: "子見出し",
      List: "リスト",
      Quote: "引用",
      Link: "リンク",
      Image: "画像",
      Payment: "有料ライン",
      Embed: "埋め込み"
    },
    tools: {
      link: {
        "Add a link": "リンクを追加",
        Link: "リンク",
        "Couldn't get this link data, try the other one": "リンク先の情報を取得できませんでした。"
      },
      image: {
        "Select an Image": "画像を選択",
        Caption: "キャプション",
        "With border": "枠を追加",
        "Stretch image": "画像を拡大",
        "With background": "背景を追加"
      },
      header: {
        "Heading 2": "H2",
        "Heading 3": "H3"
      },
      list: {
        Unordered: "番号なし",
        Ordered: "番号あり"
      },
      embed: {
        Link: "リンク"
      }
    },
    blockTunes: {
      delete: {
        Delete: "削除",
        "Click to delete": "クリックで削除"
      },
      moveUp: {
        "Move up": "上に移動"
      },
      moveDown: {
        "Move down": "下に移動"
      }
    }
  }
}, Ir = wo(({ id: r, data: e, onChange: t, config: o }, n) => {
  const i = yo(null);
  Lt(() => {
    if (!i.current) {
      const a = new vr({
        holder: r,
        tools: fn(o),
        autofocus: !1,
        data: e,
        placeholder: "文字を入力",
        async onChange() {
          if (t) {
            const c = await s();
            c && t(c);
          }
        },
        i18n: wr
      });
      i.current = a;
    }
    return () => {
      i.current && i.current.destroy();
    };
  }, []);
  const s = () => {
    var a;
    return ((a = i.current) == null ? void 0 : a.save()) || Promise.reject("Editor not initialized");
  };
  return xo(n, () => ({
    save: s
  })), /* @__PURE__ */ I("div", { id: r, className: "w-full" });
}), yr = zt({
  paragraph: Dt,
  header: Ht,
  list: jt,
  image: Rt,
  link: Ft,
  embed: Ut,
  quote: $t
}), Mr = ({ data: r, onChange: e }) => {
  const t = Me(() => {
    const l = r.blocks.findIndex((u) => u.type === "payment");
    return l === -1 ? void 0 : l;
  }, [r]), o = Me(() => ({
    ...r,
    blocks: r.blocks.filter((l) => l.type !== "payment")
  }), [r]), n = Me(
    () => yr.parse(o.blocks),
    [o]
  ), [i, s] = _t(t), a = Co(
    (l) => {
      if (i === l)
        s(void 0), e(o);
      else {
        s(l);
        const u = o.blocks.length - 1, d = {
          ...o,
          blocks: o.blocks.flatMap((g, v) => v === l ? [
            {
              id: "----------",
              type: "payment",
              data: {}
            },
            g
          ] : v === u && v === l - 1 ? [
            g,
            {
              id: "----------",
              type: "payment",
              data: {}
            }
          ] : g)
        };
        e(d);
      }
    },
    [e, o, i]
  ), c = Me(() => n.flatMap((l, u) => [
    l,
    wn({
      key: `${u}-payment-button`,
      value: i === u + 1,
      onClick: () => {
        a(u + 1);
      }
    })
  ]), [n, a, i]);
  return /* @__PURE__ */ I("div", { className: "w-full", children: c });
};
export {
  Ir as Editor,
  Br as Index,
  Tr as Preview,
  Mr as SetPaymentLine,
  Cn as counter,
  Ln as embedCounter,
  Ut as embedParser,
  fn as generateTool,
  Bn as headerCounter,
  Ht as headerParser,
  Sn as imageCounter,
  Rt as imageParser,
  yn as indexParser,
  Lr as isFoundedPreviewURL,
  Tn as linkCounter,
  Ft as linkParser,
  _n as listCounter,
  jt as listParser,
  En as paragraphCounter,
  Dt as paragraphParser,
  zt as parser,
  wn as paymentButton,
  kn as paymentLineParser,
  In as quoteCounter,
  $t as quoteParser,
  _r as useEditorCounter
};
