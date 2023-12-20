'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');

var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xe(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function Be() {
}
Object.assign(Be, {
  default: Be,
  register: Be,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
  const e = (this.document || this.ownerDocument).querySelectorAll(s);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(s) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(s))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    const i = o instanceof Node;
    t.appendChild(i ? o : document.createTextNode(o));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(s) {
  s = arguments.length === 0 ? !0 : !!s;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), n = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, a = this.offsetLeft - e.offsetLeft < e.scrollLeft, l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c = n && !r;
  (n || r) && s && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && s && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (n || r || a || l) && !s && this.scrollIntoView(c);
});
window.requestIdleCallback = window.requestIdleCallback || function(s) {
  const e = Date.now();
  return setTimeout(function() {
    s({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(s) {
  clearTimeout(s);
};
let At = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var it = /* @__PURE__ */ ((s) => (s.VERBOSE = "VERBOSE", s.INFO = "INFO", s.WARN = "WARN", s.ERROR = "ERROR", s))(it || {});
const B$1 = {
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
  META: 91
}, _t = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function be(s, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const n = ["info", "log", "warn", "error"].includes(t), r = [];
  switch (be.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!n || s)
        return;
      break;
  }
  o && r.push(o);
  const a = "Editor.js 2.28.2", l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  s && (n ? (r.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    n ? o ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
  } catch {
  }
}
be.logLevel = "VERBOSE";
function Nt(s) {
  be.logLevel = s;
}
const L$1 = be.bind(window, !1), K = be.bind(window, !0);
function oe(s) {
  return Object.prototype.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function D$1(s) {
  return oe(s) === "function" || oe(s) === "asyncfunction";
}
function z(s) {
  return oe(s) === "object";
}
function J(s) {
  return oe(s) === "string";
}
function Rt(s) {
  return oe(s) === "boolean";
}
function qe(s) {
  return oe(s) === "number";
}
function Ze(s) {
  return oe(s) === "undefined";
}
function V(s) {
  return s ? Object.keys(s).length === 0 && s.constructor === Object : !0;
}
function nt(s) {
  return s > 47 && s < 58 || // number keys
  s === 32 || s === 13 || // Space bar & return key(s)
  s === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  s > 64 && s < 91 || // letter keys
  s > 95 && s < 112 || // Numpad keys
  s > 185 && s < 193 || // ;=,-./` (in order)
  s > 218 && s < 223;
}
async function Dt(s, e = () => {
}, t = () => {
}) {
  async function o(i, n, r) {
    try {
      await i.function(i.data), await n(Ze(i.data) ? {} : i.data);
    } catch {
      r(Ze(i.data) ? {} : i.data);
    }
  }
  return s.reduce(async (i, n) => (await i, o(n, e, t)), Promise.resolve());
}
function st(s) {
  return Array.prototype.slice.call(s);
}
function re(s, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => s.apply(t, o), e);
  };
}
function Pt(s) {
  return s.name.split(".").pop();
}
function Ft(s) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(s);
}
function Ht(s, e, t) {
  let o;
  return (...i) => {
    const n = this, r = () => {
      o = null, t || s.apply(n, i);
    }, a = t && !o;
    window.clearTimeout(o), o = window.setTimeout(r, e), a && s.apply(n, i);
  };
}
function Ce(s, e, t = void 0) {
  let o, i, n, r = null, a = 0;
  t || (t = {});
  const l = function() {
    a = t.leading === !1 ? 0 : Date.now(), r = null, n = s.apply(o, i), r || (o = i = null);
  };
  return function() {
    const c = Date.now();
    !a && t.leading === !1 && (a = c);
    const u = e - (c - a);
    return o = this, i = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), a = c, n = s.apply(o, i), r || (o = i = null)) : !r && t.trailing !== !1 && (r = setTimeout(l, u)), n;
  };
}
function jt() {
  const s = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(s).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (s[e] = !0), s;
}
function ae(s) {
  return s[0].toUpperCase() + s.slice(1);
}
function Se(s, ...e) {
  if (!e.length)
    return s;
  const t = e.shift();
  if (z(s) && z(t))
    for (const o in t)
      z(t[o]) ? (s[o] || Object.assign(s, { [o]: {} }), Se(s[o], t[o])) : Object.assign(s, { [o]: t[o] });
  return Se(s, ...e);
}
function Re(s) {
  const e = jt();
  return s = s.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? s = s.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : s = s.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), s;
}
function zt(s) {
  try {
    return new URL(s).href;
  } catch {
  }
  return s.substring(0, 2) === "//" ? window.location.protocol + s : window.location.origin + s;
}
function Ut() {
  return At(10);
}
function $t(s) {
  window.open(s, "_blank");
}
function Wt(s = "") {
  return `${s}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Ie(s, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  s && K(o, "warn");
}
function ce(s, e, t) {
  const o = t.value ? "value" : "get", i = t[o], n = `#${e}Cache`;
  if (t[o] = function(...r) {
    return this[n] === void 0 && (this[n] = i.apply(this, ...r)), this[n];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function(a) {
      delete s[n], r.apply(this, a);
    };
  }
  return t;
}
const rt = 650;
function te() {
  return window.matchMedia(`(max-width: ${rt}px)`).matches;
}
const Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Yt(s, e) {
  const t = Array.isArray(s) || z(s), o = Array.isArray(e) || z(e);
  return t || o ? JSON.stringify(s) === JSON.stringify(e) : s === e;
}
let d$2 = class d {
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
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const n in o)
      Object.prototype.hasOwnProperty.call(o, n) && (i[n] = o[n]);
    return i;
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
    const o = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
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
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return st(e.querySelectorAll(d.allInputsSelector)).reduce((t, o) => d.isNativeInput(o) || d.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...d.getDeepestBlockElements(o)], []);
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
    const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let n = e[o];
      if (d.isSingleTag(n) && !d.isNativeInput(n) && !d.isLineBreakTag(n))
        if (n[i])
          n = n[i];
        else if (n.parentNode[i])
          n = n.parentNode[i];
        else
          return n.parentNode;
      return this.getDeepestNode(n, t);
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
    return qe(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return qe(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
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
    if (d.isNativeInput(e))
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
      t = d.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e) {
    let t;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? t = e.value : t = e.textContent.replace("​", ""), t.trim().length === 0);
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
   * @returns {boolean}
   */
  static isEmpty(e) {
    e.normalize();
    const t = [e];
    for (; t.length > 0; )
      if (e = t.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e))
          return !1;
        e.childNodes && t.push(...Array.from(e.childNodes));
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
    const t = d.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
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
    J(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (i) => !d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...d.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return J(e) ? document.getElementById(e) : e;
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
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, n = t.top + i, r = t.left + o;
    return {
      top: n,
      left: r,
      bottom: n + t.height,
      right: r + t.width
    };
  }
};
const Kt = {
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
}, Xt = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, Vt = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, qt = {
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
}, at = {
  ui: Kt,
  toolNames: Xt,
  tools: Vt,
  blockTunes: qt
}, ie = class {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(s, e) {
    return ie._t(s, e);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(s, e) {
    return ie._t(s, e);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(s) {
    ie.currentDictionary = s;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(s, e) {
    const t = ie.getNamespace(s);
    return !t || !t[e] ? e : t[e];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(s) {
    return s.split(".").reduce((t, o) => !t || !Object.keys(t).length ? {} : t[o], ie.currentDictionary);
  }
};
let $ = ie;
$.currentDictionary = at;
class lt extends Error {
}
class we {
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
    const o = (i) => {
      const n = t(i), r = this.subscribers[e].indexOf(o);
      return r !== -1 && this.subscribers[e].splice(r, 1), n;
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
    V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const n = i(o);
      return n !== void 0 ? n : o;
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
function ee(s) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return s.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return s.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return s.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return s.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return s.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return s.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(t) {
      s.stretched = t;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return s.stretched;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(t, o) {
      return s.call(t, o);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return s.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(t) {
      return s.validate(t);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      s.dispatchChange();
    }
  });
}
class De {
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
  on(e, t, o, i = !1) {
    const n = Wt("l"), r = {
      id: n,
      element: e,
      eventType: t,
      handler: o,
      options: i
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(r), e.addEventListener(t, o, i), n;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, i) {
    const n = this.findAll(e, t, o);
    n.forEach((r, a) => {
      const l = this.allListeners.indexOf(n[a]);
      l > -1 && (this.allListeners.splice(l, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
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
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
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
    let i;
    const n = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = n.filter((r) => r.eventType === t && r.handler === o) : e && t ? i = n.filter((r) => r.eventType === t) : i = n, i;
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
let C$3 = class C {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new De(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, i, n, r = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, i, n, r)
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
    }, this.mutableListenerIds = [], new.target === C)
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
};
class m {
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
    return t ? d$2.isElement(t) ? t : t.parentElement : null;
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
    return this.isSelectionAtEditor(m.get());
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
    return t && t instanceof Element && (o = t.closest(`.${m.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
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
    return t && t instanceof Element && (o = t.closest(`.${m.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!m.get().anchorNode;
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
      return L$1("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return L$1("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
        const n = i.parentNode;
        n.removeChild(i), n.normalize();
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
    const o = document.createRange(), i = window.getSelection();
    return d$2.isNativeInput(e) ? d$2.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = m.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = m.range;
    if (e === null)
      return;
    const t = d$2.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return d$2.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = d$2.find(e, ".codex-editor__fake-cursor");
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
    this.savedSelectionRange = m.range;
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
    const i = window.getSelection();
    let n = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((a) => {
      let l = o;
      for (; l > 0 && a.parentNode && !(a.tagName === e && (n = a, t && a.classList && !a.classList.contains(t) && (n = null), n)); )
        a = a.parentNode, l--;
    }), n);
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
function Zt(s, e) {
  const { type: t, target: o, addedNodes: i, removedNodes: n } = s;
  if (o === e)
    return !0;
  if (["characterData", "attributes"].includes(t)) {
    const l = o.nodeType === Node.TEXT_NODE ? o.parentNode : o;
    return e.contains(l);
  }
  const r = Array.from(i).some((l) => e.contains(l)), a = Array.from(n).some((l) => e.contains(l));
  return r || a;
}
const Me = "redactor dom changed", ct = "block changed", dt = "fake cursor is about to be toggled", ht = "fake cursor have been set";
function Je(s, e) {
  return s.mergeable && s.name === e.name;
}
function Gt(s, e) {
  const t = e == null ? void 0 : e.export;
  return D$1(t) ? t(s) : J(t) ? s[t] : (t !== void 0 && L$1("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function Jt(s, e) {
  const t = e == null ? void 0 : e.import;
  return D$1(t) ? t(s) : J(t) ? {
    [t]: s
  } : (t !== void 0 && L$1("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var q = /* @__PURE__ */ ((s) => (s.APPEND_CALLBACK = "appendCallback", s.RENDERED = "rendered", s.MOVED = "moved", s.UPDATED = "updated", s.REMOVED = "removed", s.ON_PASTE = "onPaste", s))(q || {});
let F$2 = class F extends we {
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
    id: e = Ut(),
    data: t,
    tool: o,
    api: i,
    readOnly: n,
    tunesData: r
  }, a) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (l = void 0) => {
      const c = l === void 0, u = l instanceof InputEvent;
      !c && !u && this.detectToolRootChange(l);
      let h;
      c || u ? h = !0 : h = !(l.length > 0 && l.every((k) => {
        const { addedNodes: p, removedNodes: v, target: A } = k;
        return [
          ...Array.from(p),
          ...Array.from(v),
          A
        ].some((_) => d$2.isElement(_) ? _.dataset.mutationFree === "true" : !1);
      })), h && (this.dropInputsCache(), this.updateCurrentInput(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.api = i, this.editorEventBus = a || null, this.blockAPI = new ee(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, n), this.tunes = o.tunes, this.composeTunes(r), this.holder = this.compose(), window.requestIdleCallback(() => {
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
      focused: "ce-block--focused",
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
    const e = d$2.findAllInputs(this.holder);
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
    return this.save().then((e) => e && !V(e.data) ? e.data : {});
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
    return D$1(this.toolInstance.merge);
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = d$2.isEmpty(this.pluginsContent), t = !this.hasMedia;
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
   * Set focused state
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set focused(e) {
    this.holder.classList.toggle(F.CSS.focused, e);
  }
  /**
   * Get Block's focused state
   */
  get focused() {
    return this.holder.classList.contains(F.CSS.focused);
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var i, n;
    this.holder.classList.toggle(F.CSS.selected, e);
    const t = e === !0 && m.isRangeInsideContainer(this.holder), o = e === !1 && m.isFakeCursorInsideContainer(this.holder);
    (t || o) && ((i = this.editorEventBus) == null || i.emit(dt, { state: e }), t ? m.addFakeCursor() : m.removeFakeCursor(this.holder), (n = this.editorEventBus) == null || n.emit(ht, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(F.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(F.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(F.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(F.CSS.dropTarget, e);
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
    if (D$1(this.toolInstance[e])) {
      e === "appendCallback" && L$1(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        L$1(`Error during '${e}' call: ${o.message}`, "error");
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
    ].forEach(([n, r]) => {
      if (D$1(r.save))
        try {
          t[n] = r.save();
        } catch (a) {
          L$1(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
        }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then((n) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: n,
      tunes: t,
      time: i - o
    })).catch((n) => {
      L$1(`Saving process for ${this.name} tool failed due to the ${n}`, "log", "red");
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
    const e = document.createElement("div"), t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [], i = [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((n) => n.render());
    return [o, i].flat().forEach((n) => {
      d$2.isElement(n) ? e.appendChild(n) : Array.isArray(n) ? t.push(...n) : t.push(n);
    }), [t, e];
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = d$2.isNativeInput(document.activeElement) || !m.anchorNode ? document.activeElement : m.anchorNode;
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
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), D$1(this.toolInstance.destroy) && this.toolInstance.destroy();
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
    return e.find((i) => Object.entries(i.data).some(([n, r]) => t[n] && Yt(t[n], r)));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return Gt(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = d$2.make("div", F.CSS.wrapper), t = d$2.make("div", F.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((n) => {
      if (D$1(n.wrap))
        try {
          i = n.wrap(i);
        } catch (r) {
          L$1(`Tune ${n.constructor.name} wrap method throws an Error %o`, "warn", r);
        }
    }), e.appendChild(i), e;
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
      e.addEventListener("focus", this.handleFocus), d$2.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), d$2.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((n) => Zt(n, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(Me, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(Me, this.redactorDomChangedCallback);
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
        const i = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
};
class Qt extends C$3 {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, n, r, a) => {
      const l = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: i,
        needToFocus: n,
        replace: r
      });
      return new ee(l);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new F$2({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t) => {
      const { BlockManager: o } = this.Editor, i = o.getBlockById(e);
      if (i === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const n = await o.update(i, t);
      return new ee(n);
    }, this.convert = (e, t, o) => {
      var h, f;
      const { BlockManager: i, Tools: n } = this.Editor, r = i.getBlockById(e);
      if (!r)
        throw new Error(`Block with id "${e}" not found`);
      const a = n.blockTools.get(r.name), l = n.blockTools.get(t);
      if (!l)
        throw new Error(`Block Tool with type "${t}" not found`);
      const c = ((h = a == null ? void 0 : a.conversionConfig) == null ? void 0 : h.export) !== void 0, u = ((f = l.conversionConfig) == null ? void 0 : f.import) !== void 0;
      if (c && u)
        i.convert(r, t, o);
      else {
        const k = [
          c ? !1 : ae(r.name),
          u ? !1 : ae(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${r.name}" to "${t}" is not possible. ${k} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: i, type: n, data: r }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: n || this.config.defaultBlock,
        data: r
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((i) => new ee(i));
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
      K("There is no block with id `" + e + "`", "warn");
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
      K("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new ee(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (K("There is no block with id `" + e + "`", "warn"), null) : new ee(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    L$1(
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
      K(t, "warn");
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
    Ie(
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
    L$1("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
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
class eo extends C$3 {
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
class to extends C$3 {
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
class Pe extends C$3 {
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
        K("I18n.t() method can be accessed only from Tools", "warn");
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
        t: (t) => $.t(Pe.getNamespace(e), t)
      }
    );
  }
}
class oo extends C$3 {
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
class io extends C$3 {
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
class no extends C$3 {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
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
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
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
var Le = {}, so = {
  get exports() {
    return Le;
  },
  set exports(s) {
    Le = s;
  }
};
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(n) {
        if (o[n])
          return o[n].exports;
        var r = o[n] = { i: n, l: !1, exports: {} };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(n, r, a) {
        i.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: a });
      }, i.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, i.t = function(n, r) {
        if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
          return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
          for (var l in n)
            i.d(a, l, function(c) {
              return n[c];
            }.bind(null, l));
        return a;
      }, i.n = function(n) {
        var r = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r);
      }, i.p = "/", i(i.s = 0);
    }([function(t, o, i) {
      i(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */
      t.exports = function() {
        var n = i(6), r = "cdx-notify--bounce-in", a = null;
        return { show: function(l) {
          if (l.message) {
            (function() {
              if (a)
                return !0;
              a = n.getWrapper(), document.body.appendChild(a);
            })();
            var c = null, u = l.time || 8e3;
            switch (l.type) {
              case "confirm":
                c = n.confirm(l);
                break;
              case "prompt":
                c = n.prompt(l);
                break;
              default:
                c = n.alert(l), window.setTimeout(function() {
                  c.remove();
                }, u);
            }
            a.appendChild(c), c.classList.add(r);
          }
        } };
      }();
    }, function(t, o, i) {
      var n = i(2);
      typeof n == "string" && (n = [[t.i, n, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      i(4)(n, r), n.locals && (t.exports = n.locals);
    }, function(t, o, i) {
      (t.exports = i(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(i) {
        var n = [];
        return n.toString = function() {
          return this.map(function(r) {
            var a = function(l, c) {
              var u = l[1] || "", h = l[3];
              if (!h)
                return u;
              if (c && typeof btoa == "function") {
                var f = (p = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(p)))) + " */"), k = h.sources.map(function(v) {
                  return "/*# sourceURL=" + h.sourceRoot + v + " */";
                });
                return [u].concat(k).concat([f]).join(`
`);
              }
              var p;
              return [u].join(`
`);
            }(r, i);
            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
          }).join("");
        }, n.i = function(r, a) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var l = {}, c = 0; c < this.length; c++) {
            var u = this[c][0];
            typeof u == "number" && (l[u] = !0);
          }
          for (c = 0; c < r.length; c++) {
            var h = r[c];
            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), n.push(h));
          }
        }, n;
      };
    }, function(t, o, i) {
      var n, r, a = {}, l = (n = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return r === void 0 && (r = n.apply(this, arguments)), r;
      }), c = function(b) {
        var g = {};
        return function(E) {
          if (typeof E == "function")
            return E();
          if (g[E] === void 0) {
            var T = function(O) {
              return document.querySelector(O);
            }.call(this, E);
            if (window.HTMLIFrameElement && T instanceof window.HTMLIFrameElement)
              try {
                T = T.contentDocument.head;
              } catch {
                T = null;
              }
            g[E] = T;
          }
          return g[E];
        };
      }(), u = null, h = 0, f = [], k = i(5);
      function p(b, g) {
        for (var E = 0; E < b.length; E++) {
          var T = b[E], O = a[T.id];
          if (O) {
            O.refs++;
            for (var S = 0; S < O.parts.length; S++)
              O.parts[S](T.parts[S]);
            for (; S < T.parts.length; S++)
              O.parts.push(x(T.parts[S], g));
          } else {
            var H = [];
            for (S = 0; S < T.parts.length; S++)
              H.push(x(T.parts[S], g));
            a[T.id] = { id: T.id, refs: 1, parts: H };
          }
        }
      }
      function v(b, g) {
        for (var E = [], T = {}, O = 0; O < b.length; O++) {
          var S = b[O], H = g.base ? S[0] + g.base : S[0], M = { css: S[1], media: S[2], sourceMap: S[3] };
          T[H] ? T[H].parts.push(M) : E.push(T[H] = { id: H, parts: [M] });
        }
        return E;
      }
      function A(b, g) {
        var E = c(b.insertInto);
        if (!E)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var T = f[f.length - 1];
        if (b.insertAt === "top")
          T ? T.nextSibling ? E.insertBefore(g, T.nextSibling) : E.appendChild(g) : E.insertBefore(g, E.firstChild), f.push(g);
        else if (b.insertAt === "bottom")
          E.appendChild(g);
        else {
          if (typeof b.insertAt != "object" || !b.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var O = c(b.insertInto + " " + b.insertAt.before);
          E.insertBefore(g, O);
        }
      }
      function N(b) {
        if (b.parentNode === null)
          return !1;
        b.parentNode.removeChild(b);
        var g = f.indexOf(b);
        g >= 0 && f.splice(g, 1);
      }
      function _(b) {
        var g = document.createElement("style");
        return b.attrs.type === void 0 && (b.attrs.type = "text/css"), y(g, b.attrs), A(b, g), g;
      }
      function y(b, g) {
        Object.keys(g).forEach(function(E) {
          b.setAttribute(E, g[E]);
        });
      }
      function x(b, g) {
        var E, T, O, S;
        if (g.transform && b.css) {
          if (!(S = g.transform(b.css)))
            return function() {
            };
          b.css = S;
        }
        if (g.singleton) {
          var H = h++;
          E = u || (u = _(g)), T = R.bind(null, E, H, !1), O = R.bind(null, E, H, !0);
        } else
          b.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (E = function(M) {
            var W = document.createElement("link");
            return M.attrs.type === void 0 && (M.attrs.type = "text/css"), M.attrs.rel = "stylesheet", y(W, M.attrs), A(M, W), W;
          }(g), T = function(M, W, de) {
            var Q = de.css, Ee = de.sourceMap, Mt = W.convertToAbsoluteUrls === void 0 && Ee;
            (W.convertToAbsoluteUrls || Mt) && (Q = k(Q)), Ee && (Q += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(Ee)))) + " */");
            var Lt = new Blob([Q], { type: "text/css" }), Ve = M.href;
            M.href = URL.createObjectURL(Lt), Ve && URL.revokeObjectURL(Ve);
          }.bind(null, E, g), O = function() {
            N(E), E.href && URL.revokeObjectURL(E.href);
          }) : (E = _(g), T = function(M, W) {
            var de = W.css, Q = W.media;
            if (Q && M.setAttribute("media", Q), M.styleSheet)
              M.styleSheet.cssText = de;
            else {
              for (; M.firstChild; )
                M.removeChild(M.firstChild);
              M.appendChild(document.createTextNode(de));
            }
          }.bind(null, E), O = function() {
            N(E);
          });
        return T(b), function(M) {
          if (M) {
            if (M.css === b.css && M.media === b.media && M.sourceMap === b.sourceMap)
              return;
            T(b = M);
          } else
            O();
        };
      }
      t.exports = function(b, g) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (g = g || {}).attrs = typeof g.attrs == "object" ? g.attrs : {}, g.singleton || typeof g.singleton == "boolean" || (g.singleton = l()), g.insertInto || (g.insertInto = "head"), g.insertAt || (g.insertAt = "bottom");
        var E = v(b, g);
        return p(E, g), function(T) {
          for (var O = [], S = 0; S < E.length; S++) {
            var H = E[S];
            (M = a[H.id]).refs--, O.push(M);
          }
          for (T && p(v(T, g), g), S = 0; S < O.length; S++) {
            var M;
            if ((M = O[S]).refs === 0) {
              for (var W = 0; W < M.parts.length; W++)
                M.parts[W]();
              delete a[M.id];
            }
          }
        };
      };
      var w, I = (w = [], function(b, g) {
        return w[b] = g, w.filter(Boolean).join(`
`);
      });
      function R(b, g, E, T) {
        var O = E ? "" : T.css;
        if (b.styleSheet)
          b.styleSheet.cssText = I(g, O);
        else {
          var S = document.createTextNode(O), H = b.childNodes;
          H[g] && b.removeChild(H[g]), H.length ? b.insertBefore(S, H[g]) : b.appendChild(S);
        }
      }
    }, function(t, o) {
      t.exports = function(i) {
        var n = typeof window < "u" && window.location;
        if (!n)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var r = n.protocol + "//" + n.host, a = r + n.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(l, c) {
          var u, h = c.trim().replace(/^"(.*)"$/, function(f, k) {
            return k;
          }).replace(/^'(.*)'$/, function(f, k) {
            return k;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
        });
      };
    }, function(t, o, i) {
      var n, r, a, l, c, u, h, f, k;
      t.exports = (n = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", f = "cdx-notify__btns-wrapper", { alert: k = function(p) {
        var v = document.createElement("DIV"), A = document.createElement("DIV"), N = p.message, _ = p.style;
        return v.classList.add(r), _ && v.classList.add(r + "--" + _), v.innerHTML = N, A.classList.add(a), A.addEventListener("click", v.remove.bind(v)), v.appendChild(A), v;
      }, confirm: function(p) {
        var v = k(p), A = document.createElement("div"), N = document.createElement("button"), _ = document.createElement("button"), y = v.querySelector("." + a), x = p.cancelHandler, w = p.okHandler;
        return A.classList.add(f), N.innerHTML = p.okText || "Confirm", _.innerHTML = p.cancelText || "Cancel", N.classList.add(h), _.classList.add(h), N.classList.add(l), _.classList.add(c), x && typeof x == "function" && (_.addEventListener("click", x), y.addEventListener("click", x)), w && typeof w == "function" && N.addEventListener("click", w), N.addEventListener("click", v.remove.bind(v)), _.addEventListener("click", v.remove.bind(v)), A.appendChild(N), A.appendChild(_), v.appendChild(A), v;
      }, prompt: function(p) {
        var v = k(p), A = document.createElement("div"), N = document.createElement("button"), _ = document.createElement("input"), y = v.querySelector("." + a), x = p.cancelHandler, w = p.okHandler;
        return A.classList.add(f), N.innerHTML = p.okText || "Ok", N.classList.add(h), N.classList.add(l), _.classList.add(u), p.placeholder && _.setAttribute("placeholder", p.placeholder), p.default && (_.value = p.default), p.inputType && (_.type = p.inputType), x && typeof x == "function" && y.addEventListener("click", x), w && typeof w == "function" && N.addEventListener("click", function() {
          w(_.value);
        }), N.addEventListener("click", v.remove.bind(v)), A.appendChild(_), A.appendChild(N), v.appendChild(A), v;
      }, getWrapper: function() {
        var p = document.createElement("DIV");
        return p.classList.add(n), p;
      } });
    }]);
  });
})(so);
const ro = /* @__PURE__ */ xe(Le);
class ao {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    ro.show(e);
  }
}
class lo extends C$3 {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new ao();
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
class co extends C$3 {
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
var Oe = {}, ho = {
  get exports() {
    return Oe;
  },
  set exports(s) {
    Oe = s;
  }
};
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(Ot, function() {
    function t(h) {
      var f = h.tags, k = Object.keys(f), p = k.map(function(v) {
        return typeof f[v];
      }).every(function(v) {
        return v === "object" || v === "boolean" || v === "function";
      });
      if (!p)
        throw new Error("The configuration was invalid");
      this.config = h;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(h) {
      return o.indexOf(h.nodeName) !== -1;
    }
    var n = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r(h) {
      return n.indexOf(h.nodeName) !== -1;
    }
    t.prototype.clean = function(h) {
      const f = document.implementation.createHTMLDocument(), k = f.createElement("div");
      return k.innerHTML = h, this._sanitize(f, k), k.innerHTML;
    }, t.prototype._sanitize = function(h, f) {
      var k = a(h, f), p = k.firstChild();
      if (p)
        do {
          if (p.nodeType === Node.TEXT_NODE)
            if (p.data.trim() === "" && (p.previousElementSibling && i(p.previousElementSibling) || p.nextElementSibling && i(p.nextElementSibling))) {
              f.removeChild(p), this._sanitize(h, f);
              break;
            } else
              continue;
          if (p.nodeType === Node.COMMENT_NODE) {
            f.removeChild(p), this._sanitize(h, f);
            break;
          }
          var v = r(p), A;
          v && (A = Array.prototype.some.call(p.childNodes, i));
          var N = !!f.parentNode, _ = i(f) && i(p) && N, y = p.nodeName.toLowerCase(), x = l(this.config, y, p), w = v && A;
          if (w || c(p, x) || !this.config.keepNestedBlockElements && _) {
            if (!(p.nodeName === "SCRIPT" || p.nodeName === "STYLE"))
              for (; p.childNodes.length > 0; )
                f.insertBefore(p.childNodes[0], p);
            f.removeChild(p), this._sanitize(h, f);
            break;
          }
          for (var I = 0; I < p.attributes.length; I += 1) {
            var R = p.attributes[I];
            u(R, x, p) && (p.removeAttribute(R.name), I = I - 1);
          }
          this._sanitize(h, p);
        } while (p = k.nextSibling());
    };
    function a(h, f) {
      return h.createTreeWalker(
        f,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function l(h, f, k) {
      return typeof h.tags[f] == "function" ? h.tags[f](k) : h.tags[f];
    }
    function c(h, f) {
      return typeof f > "u" ? !0 : typeof f == "boolean" ? !f : !1;
    }
    function u(h, f, k) {
      var p = h.name.toLowerCase();
      return f === !0 ? !1 : typeof f[p] == "function" ? !f[p](h.value, k) : typeof f[p] > "u" || f[p] === !1 ? !0 : typeof f[p] == "string" ? f[p] !== h.value : !1;
    }
    return t;
  });
})(ho);
const uo = Oe;
function ut(s, e) {
  return s.map((t) => {
    const o = D$1(e) ? e(t.tool) : e;
    return V(o) || (t.data = Fe(t.data, o)), t;
  });
}
function Z(s, e = {}) {
  const t = {
    tags: e
  };
  return new uo(t).clean(s);
}
function Fe(s, e) {
  return Array.isArray(s) ? po(s, e) : z(s) ? fo(s, e) : J(s) ? go(s, e) : s;
}
function po(s, e) {
  return s.map((t) => Fe(t, e));
}
function fo(s, e) {
  const t = {};
  for (const o in s) {
    if (!Object.prototype.hasOwnProperty.call(s, o))
      continue;
    const i = s[o], n = bo(e[o]) ? e[o] : e;
    t[o] = Fe(i, n);
  }
  return t;
}
function go(s, e) {
  return z(e) ? Z(s, e) : e === !1 ? Z(s, {}) : s;
}
function bo(s) {
  return z(s) || Rt(s) || D$1(s);
}
class mo extends C$3 {
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
    return Z(e, t);
  }
}
class ko extends C$3 {
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
    return this.Editor.ReadOnly.isEnabled ? (K(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class vo extends C$3 {
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
    return new m().findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    new m().expandToTag(e);
  }
}
class xo extends C$3 {
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
class wo extends C$3 {
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
      K("Could't toggle the Toolbar because there is no block selected ", "warn");
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
      K("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var Ae = {}, yo = {
  get exports() {
    return Ae;
  },
  set exports(s) {
    Ae = s;
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
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(n) {
        if (o[n])
          return o[n].exports;
        var r = o[n] = { i: n, l: !1, exports: {} };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(n, r, a) {
        i.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: a });
      }, i.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, i.t = function(n, r) {
        if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
          return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
          for (var l in n)
            i.d(a, l, function(c) {
              return n[c];
            }.bind(null, l));
        return a;
      }, i.n = function(n) {
        var r = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      t.exports = i(1);
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return n;
      });
      class n {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(a, l, c) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const u = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c);
          if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string")
            this.nodes.content.appendChild(document.createTextNode(l));
          else {
            if (!(l instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof l + " given.");
            this.nodes.content.appendChild(l);
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
        onHover(a, l, c) {
          a.addEventListener("mouseenter", () => {
            this.show(a, l, c);
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
          const l = i(2), c = this.make("style", null, { textContent: l.toString(), id: a });
          this.prepend(document.head, c);
        }
        placeBottom(a, l) {
          const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
          this.applyPlacement("bottom", u, h);
        }
        placeTop(a, l) {
          const c = a.getBoundingClientRect(), u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", u, h);
        }
        placeLeft(a, l) {
          const c = a.getBoundingClientRect(), u = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", u, h);
        }
        placeRight(a, l) {
          const c = a.getBoundingClientRect(), u = c.right + this.offsetRight + l.marginRight, h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", u, h);
        }
        applyPlacement(a, l, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(a, l = null, c = {}) {
          const u = document.createElement(a);
          Array.isArray(l) ? u.classList.add(...l) : l && u.classList.add(l);
          for (const h in c)
            c.hasOwnProperty(h) && (u[h] = c[h]);
          return u;
        }
        append(a, l) {
          Array.isArray(l) ? l.forEach((c) => a.appendChild(c)) : a.appendChild(l);
        }
        prepend(a, l) {
          Array.isArray(l) ? (l = l.reverse()).forEach((c) => a.prepend(c)) : a.prepend(l);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(yo);
const Eo = /* @__PURE__ */ xe(Ae);
class He {
  constructor() {
    this.lib = new Eo();
  }
  /**
   * Release the library
   */
  destroy() {
    this.lib.destroy();
  }
  /**
   * Shows tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */
  show(e, t, o) {
    this.lib.show(e, t, o);
  }
  /**
   * Hides tooltip
   *
   * @param skipHidingDelay — pass true to immediately hide the tooltip
   */
  hide(e = !1) {
    this.lib.hide(e);
  }
  /**
   * Binds 'mouseenter' and 'mouseleave' events that shows/hides the Tooltip
   *
   * @param {HTMLElement} element - any HTML element in DOM
   * @param content - tooltip's content
   * @param options - showing settings
   */
  onHover(e, t, o) {
    this.lib.onHover(e, t, o);
  }
}
class Bo extends C$3 {
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
    }), this.tooltip = new He();
  }
  /**
   * Destroy Module
   */
  destroy() {
    this.tooltip.destroy();
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
    this.tooltip.show(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    this.tooltip.hide();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    this.tooltip.onHover(e, t, o);
  }
}
class To extends C$3 {
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
function pt(s, e) {
  const t = {};
  return Object.entries(s).forEach(([o, i]) => {
    if (z(i)) {
      const n = e ? `${e}.${o}` : o;
      Object.values(i).every((a) => J(a)) ? t[o] = n : t[o] = pt(i, n);
      return;
    }
    t[o] = i;
  }), t;
}
const X = pt(at);
function Co(s, e) {
  const t = {};
  return Object.keys(s).forEach((o) => {
    const i = e[o];
    i !== void 0 ? t[i] = s[o] : t[o] = s[o];
  }), t;
}
const So = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', ft = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', Io = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', Mo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Lo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Oo = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', Qe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Ao = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', _o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', No = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Ro = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Do = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
let P$2 = class P {
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
      this.nodes.root.classList.remove(P.CSS.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      this.nodes.root.classList.remove(P.CSS.noHover);
    }, this.onErrorAnimationEnd = () => {
      this.nodes.icon.classList.remove(P.CSS.wobbleAnimation), this.nodes.icon.removeEventListener("animationend", this.onErrorAnimationEnd);
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
    return this.nodes.root.classList.contains(P.CSS.focused);
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
    this.nodes.root.classList.toggle(P.CSS.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    this.nodes.root.classList.toggle(P.CSS.hidden, e);
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
    const t = d$2.make("div", P.CSS.container);
    return e.name && (t.dataset.itemName = e.name), this.nodes.icon = d$2.make("div", P.CSS.icon, {
      innerHTML: e.icon || Lo
    }), t.appendChild(this.nodes.icon), t.appendChild(d$2.make("div", P.CSS.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && t.appendChild(d$2.make("div", P.CSS.secondaryTitle, {
      textContent: e.secondaryLabel
    })), e.isActive && t.classList.add(P.CSS.active), e.isDisabled && t.classList.add(P.CSS.disabled), t;
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
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(P.CSS.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(P.CSS.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    this.nodes.root.classList.add(P.CSS.noHover), this.nodes.root.classList.add(P.CSS.noFocus), this.nodes.root.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
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
    this.nodes.icon.classList.contains(P.CSS.wobbleAnimation) || (this.nodes.icon.classList.add(P.CSS.wobbleAnimation), this.nodes.icon.addEventListener("animationend", this.onErrorAnimationEnd));
  }
};
const he = class {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(s, e) {
    this.cursor = -1, this.items = [], this.items = s || [], this.focusedCssClass = e;
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
  setCursor(s) {
    s < this.items.length && s >= -1 && (this.dropCursor(), this.cursor = s, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(s) {
    this.items = s;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(he.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(he.directions.LEFT);
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
  leafNodesAndReturnIndex(s) {
    if (this.items.length === 0)
      return this.cursor;
    let e = this.cursor;
    return e === -1 ? e = s === he.directions.RIGHT ? -1 : 0 : this.items[e].classList.remove(this.focusedCssClass), s === he.directions.RIGHT ? e = (e + 1) % this.items.length : e = (this.items.length + e - 1) % this.items.length, d$2.canSetCaret(this.items[e]) && re(() => m.setCursor(this.items[e]), 50)(), this.items[e].classList.add(this.focusedCssClass), e;
  }
};
let ne = he;
ne.directions = {
  RIGHT: "right",
  LEFT: "left"
};
class G {
  /**
   * @param {FlipperOptions} options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (this.isEventReadyForHandling(t))
        switch (G.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case B$1.TAB:
            this.handleTabPress(t);
            break;
          case B$1.LEFT:
          case B$1.UP:
            this.flipLeft();
            break;
          case B$1.RIGHT:
          case B$1.DOWN:
            this.flipRight();
            break;
          case B$1.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new ne(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || G.usedKeys;
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
      B$1.TAB,
      B$1.LEFT,
      B$1.RIGHT,
      B$1.ENTER,
      B$1.UP,
      B$1.DOWN
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
    switch (e.shiftKey ? ne.directions.LEFT : ne.directions.RIGHT) {
      case ne.directions.RIGHT:
        this.flipRight();
        break;
      case ne.directions.LEFT:
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
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), D$1(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
class pe {
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
    this.listeners = new De(), this.items = e, this.onSearch = t, this.render(o);
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
    this.wrapper = d$2.make("div", pe.CSS.wrapper);
    const t = d$2.make("div", pe.CSS.icon, {
      innerHTML: No
    });
    this.input = d$2.make("input", pe.CSS.input, {
      placeholder: e
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
    var i;
    const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o = this.searchQuery.toLowerCase();
    return t.includes(o);
  }
}
const ue = class {
  /**
   * Locks body element scroll
   */
  lock() {
    Ge ? this.lockHard() : document.body.classList.add(ue.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    Ge ? this.unlockHard() : document.body.classList.remove(ue.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(ue.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(ue.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
let gt = ue;
gt.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
var Po = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, Ho = (s, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Fo(e, t) : e, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && Po(e, t, i), i;
}, ge = /* @__PURE__ */ ((s) => (s.Close = "close", s))(ge || {});
const j$2 = class j extends we {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   */
  constructor(s) {
    super(), this.scopeElement = document.body, this.listeners = new De(), this.scrollLocker = new gt(), this.nodes = {
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
      this.items.find((t) => t.isFocused).onFocus();
    }, this.items = s.items.map((e) => new P$2(e)), s.scopeElement !== void 0 && (this.scopeElement = s.scopeElement), s.messages && (this.messages = {
      ...this.messages,
      ...s.messages
    }), s.customContentFlippableItems && (this.customContentFlippableItems = s.customContentFlippableItems), this.make(), s.customContent && this.addCustomContent(s.customContent), s.searchable && this.addSearch(), this.initializeFlipper();
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
    this.shouldOpenBottom || (this.nodes.popover.style.setProperty("--popover-height", this.height + "px"), this.nodes.popover.classList.add(j$2.CSS.popoverOpenTop)), this.nodes.overlay.classList.remove(j$2.CSS.overlayHidden), this.nodes.popover.classList.add(j$2.CSS.popoverOpened), this.flipper.activate(this.flippableElements), this.search !== void 0 && setTimeout(() => {
      this.search.focus();
    }, 100), te() && this.scrollLocker.lock();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(j$2.CSS.popoverOpened), this.nodes.popover.classList.remove(j$2.CSS.popoverOpenTop), this.nodes.overlay.classList.add(j$2.CSS.overlayHidden), this.flipper.deactivate(), this.items.forEach((s) => s.reset()), this.search !== void 0 && this.search.clear(), te() && this.scrollLocker.unlock(), this.emit(
      "close"
      /* Close */
    );
  }
  /**
   * Clears memory
   */
  destroy() {
    this.flipper.deactivate(), this.listeners.removeAll(), te() && this.scrollLocker.unlock();
  }
  /**
   * Constructs HTML element corresponding to popover
   */
  make() {
    this.nodes.popover = d$2.make("div", [j$2.CSS.popover]), this.nodes.nothingFoundMessage = d$2.make("div", [j$2.CSS.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popover.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d$2.make("div", [j$2.CSS.items]), this.items.forEach((s) => {
      this.nodes.items.appendChild(s.getElement());
    }), this.nodes.popover.appendChild(this.nodes.items), this.listeners.on(this.nodes.popover, "click", (s) => {
      const e = this.getTargetItem(s);
      e !== void 0 && this.handleItemClick(e);
    }), this.nodes.wrapper = d$2.make("div"), this.nodes.overlay = d$2.make("div", [j$2.CSS.overlay, j$2.CSS.overlayHidden]), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.nodes.wrapper.appendChild(this.nodes.overlay), this.nodes.wrapper.appendChild(this.nodes.popover);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new pe({
      items: this.items,
      placeholder: this.messages.search,
      onSearch: (e, t) => {
        this.items.forEach((i) => {
          const n = !t.includes(i);
          i.toggleHidden(n);
        }), this.toggleNothingFoundMessage(t.length === 0), this.toggleCustomContent(e !== "");
        const o = e === "" ? this.flippableElements : t.map((i) => i.getElement());
        this.flipper.isActivated && (this.flipper.deactivate(), this.flipper.activate(o));
      }
    });
    const s = this.search.getElement();
    s.classList.add(j$2.CSS.search), this.nodes.popover.insertBefore(s, this.nodes.popover.firstChild);
  }
  /**
   * Adds custom html content to the popover
   *
   * @param content - html content to append
   */
  addCustomContent(s) {
    this.nodes.customContent = s, this.nodes.customContent.classList.add(j$2.CSS.customContent), this.nodes.popover.insertBefore(s, this.nodes.popover.firstChild);
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(s) {
    return this.items.find((e) => s.composedPath().includes(e.getElement()));
  }
  /**
   * Handles item clicks
   *
   * @param item - item to handle click of
   */
  handleItemClick(s) {
    s.isDisabled || (this.items.filter((e) => e !== s).forEach((e) => e.reset()), s.handleClick(), this.toggleItemActivenessIfNeeded(s), s.closeOnActivate && this.hide());
  }
  /**
   * Creates Flipper instance which allows to navigate between popover items via keyboard
   */
  initializeFlipper() {
    this.flipper = new G({
      items: this.flippableElements,
      focusedItemClass: P$2.CSS.focused,
      allowedKeys: [
        B$1.TAB,
        B$1.UP,
        B$1.DOWN,
        B$1.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip);
  }
  /**
   * Returns list of elements available for keyboard navigation.
   * Contains both usual popover items elements and custom html content.
   */
  get flippableElements() {
    const s = this.items.map((t) => t.getElement());
    return (this.customContentFlippableItems || []).concat(s);
  }
  get height() {
    let s = 0;
    if (this.nodes.popover === null)
      return s;
    const e = this.nodes.popover.cloneNode(!0);
    return e.style.visibility = "hidden", e.style.position = "absolute", e.style.top = "-1000px", e.classList.add(j$2.CSS.popoverOpened), document.body.appendChild(e), s = e.offsetHeight, e.remove(), s;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    const s = this.nodes.popover.getBoundingClientRect(), e = this.scopeElement.getBoundingClientRect(), t = this.height, o = s.top + t, i = s.top - t, n = Math.min(window.innerHeight, e.bottom);
    return i < e.top || o <= n;
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(s) {
    this.nodes.nothingFoundMessage.classList.toggle(j$2.CSS.nothingFoundMessageDisplayed, s);
  }
  /**
   * Toggles custom content visibility
   *
   * @param isDisplayed - true if custom content should be displayed
   */
  toggleCustomContent(s) {
    var e;
    (e = this.nodes.customContent) == null || e.classList.toggle(j$2.CSS.customContentHidden, s);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(s) {
    if (s.toggle === !0 && s.toggleActive(), typeof s.toggle == "string") {
      const e = this.items.filter((t) => t.toggle === s.toggle);
      if (e.length === 1) {
        s.toggleActive();
        return;
      }
      e.forEach((t) => {
        t.toggleActive(t === s);
      });
    }
  }
};
let je = j$2;
Ho([
  ce
], je.prototype, "height", 1);
class jo extends C$3 {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new m(), this.onPopoverClose = () => {
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
    this.nodes.wrapper = d$2.make("div", [this.CSS.settings]);
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
    this.opened = !0, this.selection.save(), e.selected = !0, this.Editor.BlockSelection.clearCache();
    const [t, o] = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened), this.popover = new je({
      searchable: !0,
      items: t.map((i) => this.resolveTuneAliases(i)),
      customContent: o,
      customContentFlippableItems: this.getControls(o),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: $.ui(X.ui.popover, "Nothing found"),
        search: $.ui(X.ui.popover, "Filter")
      }
    }), this.popover.on(ge.Close, this.onPopoverClose), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
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
    this.opened = !1, m.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = !1), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(ge.Close, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null);
  }
  /**
   * Returns list of buttons and inputs inside specified container
   *
   * @param container - container to query controls inside of
   */
  getControls(e) {
    const { StylesAPI: t } = this.Editor, o = e.querySelectorAll(
      `.${t.classes.settingsButton}, ${d$2.allInputsSelector}`
    );
    return Array.from(o);
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    const t = Co(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
class Y extends C$3 {
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
    this.nodes.wrapper = d$2.make("div", [
      Y.CSS.conversionToolbarWrapper,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.tools = d$2.make("div", Y.CSS.conversionToolbarTools);
    const e = d$2.make("div", Y.CSS.conversionToolbarLabel, {
      textContent: $.ui(X.ui.inlineToolbar.converter, "Convert to")
    });
    return this.addTools(), this.enableFlipper(), d$2.append(this.nodes.wrapper, e), d$2.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
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
    this.opened ? this.close() : this.open(), D$1(e) && (this.togglingCallback = e);
  }
  /**
   * Shows Conversion Toolbar
   */
  open() {
    this.filterTools(), this.opened = !0, this.nodes.wrapper.classList.add(Y.CSS.conversionToolbarShowed), window.requestAnimationFrame(() => {
      this.flipper.activate(this.tools.map((e) => e.button).filter((e) => !e.classList.contains(Y.CSS.conversionToolHidden))), this.flipper.focusFirst(), D$1(this.togglingCallback) && this.togglingCallback(!0);
    });
  }
  /**
   * Closes Conversion Toolbar
   */
  close() {
    this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(Y.CSS.conversionToolbarShowed), D$1(this.togglingCallback) && this.togglingCallback(!1);
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
    const { BlockManager: o, BlockSelection: i, InlineToolbar: n, Caret: r } = this.Editor;
    o.convert(this.Editor.BlockManager.currentBlock, e, t), i.clearSelection(), this.close(), n.close(), window.requestAnimationFrame(() => {
      r.setToBlock(this.Editor.BlockManager.currentBlock, r.positions.END);
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
        (r) => this.addToolIfValid(t, r)
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
    V(t) || !t.icon || this.addTool(e, t);
  }
  /**
   * Add tool to the Conversion Toolbar
   *
   * @param toolName - name of Tool to add
   * @param toolboxItem - tool's toolbox item data
   */
  addTool(e, t) {
    var r;
    const o = d$2.make("div", [Y.CSS.conversionTool]), i = d$2.make("div", [Y.CSS.conversionToolIcon]);
    o.dataset.tool = e, i.innerHTML = t.icon, d$2.append(o, i), d$2.append(o, d$2.text($.t(X.toolNames, t.title || ae(e))));
    const n = (r = this.Editor.Tools.blockTools.get(e)) == null ? void 0 : r.shortcut;
    if (n) {
      const a = d$2.make("span", Y.CSS.conversionToolSecondaryLabel, {
        innerText: Re(n)
      });
      d$2.append(o, a);
    }
    d$2.append(this.nodes.tools, o), this.tools.push({
      name: e,
      button: o,
      toolboxItem: t
    }), this.listeners.on(o, "click", async () => {
      await this.replaceWithBlock(e, t.data);
    });
  }
  /**
   * Hide current Tool and show others
   */
  async filterTools() {
    const { currentBlock: e } = this.Editor.BlockManager, t = await e.getActiveToolboxEntry();
    function o(i, n) {
      return i.icon === n.icon && i.title === n.title;
    }
    this.tools.forEach((i) => {
      let n = !1;
      if (t) {
        const r = o(t, i.toolboxItem);
        n = i.button.dataset.tool === e.name && r;
      }
      i.button.hidden = n, i.button.classList.toggle(Y.CSS.conversionToolHidden, n);
    });
  }
  /**
   * Prepare Flipper to be able to leaf tools by arrows/tab
   */
  enableFlipper() {
    this.flipper = new G({
      focusedItemClass: Y.CSS.conversionToolFocused
    });
  }
}
var _e = {}, zo = {
  get exports() {
    return _e;
  },
  set exports(s) {
    _e = s;
  }
};
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(n) {
        if (o[n])
          return o[n].exports;
        var r = o[n] = { i: n, l: !1, exports: {} };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(n, r, a) {
        i.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: a });
      }, i.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, i.t = function(n, r) {
        if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
          return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
          for (var l in n)
            i.d(a, l, function(c) {
              return n[c];
            }.bind(null, l));
        return a;
      }, i.n = function(n) {
        var r = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      function n(l, c) {
        for (var u = 0; u < c.length; u++) {
          var h = c[u];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      function r(l, c, u) {
        return c && n(l.prototype, c), u && n(l, u), l;
      }
      i.r(o);
      var a = function() {
        function l(c) {
          var u = this;
          ((function(h, f) {
            if (!(h instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }))(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function(h) {
            u.execute(h);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return r(l, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), r(l, [{ key: "parseShortcutName", value: function(c) {
          c = c.split("+");
          for (var u = 0; u < c.length; u++) {
            c[u] = c[u].toUpperCase();
            var h = !1;
            for (var f in l.supportedCommands)
              if (l.supportedCommands[f].includes(c[u])) {
                h = this.commands[f] = !0;
                break;
              }
            h || (this.keys[c[u]] = !0);
          }
          for (var k in l.supportedCommands)
            this.commands[k] || (this.commands[k] = !1);
        } }, { key: "execute", value: function(c) {
          var u, h = { CMD: c.ctrlKey || c.metaKey, SHIFT: c.shiftKey, ALT: c.altKey }, f = !0;
          for (u in this.commands)
            this.commands[u] !== h[u] && (f = !1);
          var k, p = !0;
          for (k in this.keys)
            p = p && c.keyCode === l.keyCodes[k];
          f && p && this.callback(c);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), l;
      }();
      o.default = a;
    }]).default;
  });
})(zo);
const Uo = /* @__PURE__ */ xe(_e);
class $o {
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
    const o = new Uo({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o]);
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
    const i = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, i.filter((n) => n !== o));
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
  }
}
const le = new $o();
var Wo = Object.defineProperty, Yo = Object.getOwnPropertyDescriptor, bt = (s, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Yo(e, t) : e, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && Wo(e, t, i), i;
}, me = /* @__PURE__ */ ((s) => (s.Opened = "toolbox-opened", s.Closed = "toolbox-closed", s.BlockAdded = "toolbox-block-added", s))(me || {});
const mt = class extends we {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: s, tools: e, i18nLabels: t }) {
    super(), this.opened = !1, this.nodes = {
      toolbox: null
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = s, this.tools = e, this.i18nLabels = t;
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
    return this.popover = new je({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(ge.Close, this.onPopoverClose), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox.classList.add(mt.CSS.toolbox), this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    var s;
    return (s = this.popover) == null ? void 0 : s.hasFocus();
  }
  /**
   * Destroy Module
   */
  destroy() {
    var s;
    super.destroy(), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), (s = this.popover) == null || s.off(ge.Close, this.onPopoverClose);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(s, e) {
    this.insertNewBlock(s, e);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var s;
    this.isEmpty || ((s = this.popover) == null || s.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var s;
    (s = this.popover) == null || s.hide(), this.opened = !1, this.emit(
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
    const s = [];
    return this.tools.forEach((e) => {
      e.toolbox && s.push(e);
    }), s;
  }
  get toolboxItemsToBeDisplayed() {
    const s = (e, t) => ({
      icon: e.icon,
      title: $.t(X.toolNames, e.title || ae(t.name)),
      name: t.name,
      onActivate: () => {
        this.toolButtonActivated(t.name, e.data);
      },
      secondaryLabel: t.shortcut ? Re(t.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((e, t) => (Array.isArray(t.toolbox) ? t.toolbox.forEach((o) => {
      e.push(s(o, t));
    }) : t.toolbox !== void 0 && e.push(s(t.toolbox, t)), e), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((s) => {
      const e = s.shortcut;
      e && this.enableShortcutForTool(s.name, e);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(s, e) {
    le.add({
      name: e,
      on: this.api.ui.nodes.redactor,
      handler: (t) => {
        t.preventDefault();
        const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
        if (i)
          try {
            this.api.blocks.convert(i.id, s), window.requestAnimationFrame(() => {
              this.api.caret.setToBlock(o, "end");
            });
            return;
          } catch {
          }
        this.insertNewBlock(s);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((s) => {
      const e = s.shortcut;
      e && le.remove(this.api.ui.nodes.redactor, e);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(s, e) {
    const t = this.api.blocks.getCurrentBlockIndex(), o = this.api.blocks.getBlockByIndex(t);
    if (!o)
      return;
    const i = o.isEmpty ? t : t + 1;
    let n;
    if (e) {
      const a = await this.api.blocks.composeBlockData(s);
      n = Object.assign(a, e);
    }
    const r = this.api.blocks.insert(
      s,
      n,
      void 0,
      i,
      void 0,
      o.isEmpty
    );
    r.call(q.APPEND_CALLBACK), this.api.caret.setToBlock(i), this.emit("toolbox-block-added", {
      block: r
    }), this.api.toolbar.close();
  }
};
let ze = mt;
bt([
  ce
], ze.prototype, "toolsToBeDisplayed", 1);
bt([
  ce
], ze.prototype, "toolboxItemsToBeDisplayed", 1);
const kt = "block hovered";
class Ko extends C$3 {
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
    }), this.toolboxInstance = null, this.tooltip = new He();
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
          L$1("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          L$1("toolbox.toggle() called before initialization is finished", "warn");
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
      L$1("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI, i = e.pluginsContent, n = window.getComputedStyle(i), r = parseInt(n.paddingTop, 10), a = t.offsetHeight;
    let l;
    o ? l = t.offsetTop + a : l = t.offsetTop + r, this.nodes.wrapper.style.top = `${Math.floor(l)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e;
    this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (e = this.toolboxInstance) == null || e.close(), this.Editor.BlockSettings.close());
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    re(() => {
      this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
    }, 50)();
  }
  /**
   * Draws Toolbar elements
   */
  make() {
    this.nodes.wrapper = d$2.make("div", this.CSS.toolbar), ["content", "actions"].forEach((t) => {
      this.nodes[t] = d$2.make("div", this.CSS[t]);
    }), d$2.append(this.nodes.wrapper, this.nodes.content), d$2.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d$2.make("div", this.CSS.plusButton, {
      innerHTML: _o
    }), d$2.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      this.tooltip.hide(!0), this.plusButtonClicked();
    }, !1);
    const e = d$2.make("div");
    e.appendChild(document.createTextNode($.ui(X.ui.toolbar.toolbox, "Add"))), e.appendChild(d$2.make("div", this.CSS.plusButtonShortcut, {
      textContent: "⇥ Tab"
    })), this.tooltip.onHover(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = d$2.make("span", this.CSS.settingsToggler, {
      innerHTML: Ao
    }), d$2.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(
      this.nodes.settingsToggler,
      $.ui(X.ui.blockTunes.toggler, "Click to tune"),
      {
        hidingDelay: 400
      }
    ), d$2.append(this.nodes.actions, this.makeToolbox()), d$2.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d$2.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new ze({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: $.ui(X.ui.popover, "Filter"),
        nothingFound: $.ui(X.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(me.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(me.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(me.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
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
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), this.tooltip.hide(!0);
    }, !0), te() || this.eventsDispatcher.on(kt, (e) => {
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
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
  }
}
var ye = /* @__PURE__ */ ((s) => (s[s.Block = 0] = "Block", s[s.Inline = 1] = "Inline", s[s.Tune = 2] = "Tune", s))(ye || {}), ke = /* @__PURE__ */ ((s) => (s.Shortcut = "shortcut", s.Toolbox = "toolbox", s.EnabledInlineTools = "inlineToolbar", s.EnabledBlockTunes = "tunes", s.Config = "config", s))(ke || {}), vt = /* @__PURE__ */ ((s) => (s.Shortcut = "shortcut", s.SanitizeConfig = "sanitize", s))(vt || {}), se = /* @__PURE__ */ ((s) => (s.IsEnabledLineBreaks = "enableLineBreaks", s.Toolbox = "toolbox", s.ConversionConfig = "conversionConfig", s.IsReadOnlySupported = "isReadOnlySupported", s.PasteConfig = "pasteConfig", s))(se || {}), Ue = /* @__PURE__ */ ((s) => (s.IsInline = "isInline", s.Title = "title", s))(Ue || {}), xt = /* @__PURE__ */ ((s) => (s.IsTune = "isTune", s))(xt || {});
class $e {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: n,
    isInternal: r = !1,
    defaultPlaceholder: a
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = n, this.isInternal = r, this.defaultPlaceholder = a;
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
    if (D$1(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (D$1(this.constructable.prepare))
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
class Xo extends C$3 {
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
    }, this.opened = !1, this.toolbarVerticalMargin = te() ? 20 : 6, this.buttonsList = null, this.width = 0, this.flipper = null, this.tooltip = new He();
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
  tryToShow(e = !1, t = !0) {
    if (!this.allowedToShow()) {
      e && this.close();
      return;
    }
    this.move(), this.open(t), this.Editor.Toolbar.close();
  }
  /**
   * Move Toolbar to the selected text
   */
  move() {
    const e = m.rect, t = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), o = {
      x: e.x - t.left,
      y: e.y + e.height - // + window.scrollY
      t.top + this.toolbarVerticalMargin
    };
    e.width && (o.x += Math.floor(e.width / 2));
    const i = o.x - this.width / 2, n = o.x + this.width / 2;
    this.nodes.wrapper.classList.toggle(
      this.CSS.inlineToolbarLeftOriented,
      i < this.Editor.UI.contentRect.left
    ), this.nodes.wrapper.classList.toggle(
      this.CSS.inlineToolbarRightOriented,
      n > this.Editor.UI.contentRect.right
    ), this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px";
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(([e, t]) => {
      const o = this.getToolShortcut(e);
      o && le.remove(this.Editor.UI.nodes.redactor, o), D$1(t.clear) && t.clear();
    }), this.opened = !1, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
  }
  /**
   * Shows Inline Toolbar
   *
   * @param [needToShowConversionToolbar] - pass false to not to show Conversion Toolbar
   */
  open(e = !0) {
    if (this.opened)
      return;
    this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(`.${this.CSS.inlineToolButton}`), this.opened = !0, e && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = !0;
    let t = Array.from(this.buttonsList);
    t.unshift(this.nodes.conversionToggler), t = t.filter((o) => !o.hidden), this.flipper.activate(t);
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = d$2.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), this.nodes.togglerAndButtonsWrapper = d$2.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = d$2.make("div", this.CSS.buttonsWrapper), this.nodes.actions = d$2.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", (e) => {
      e.target.closest(`.${this.CSS.actionsWrapper}`) || e.preventDefault();
    }), d$2.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), d$2.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), d$2.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), window.requestAnimationFrame(() => {
      this.recalculateWidth();
    }), this.enableFlipper();
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = m.get(), o = m.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const i = d$2.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (t && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null)
      return !1;
    const r = this.Editor.BlockManager.getBlock(t.anchorNode);
    return r ? r.tool.inlineTools.size !== 0 : !1;
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
    this.nodes.conversionToggler = d$2.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = d$2.make("div", this.CSS.conversionTogglerContent);
    const e = d$2.make("div", this.CSS.conversionTogglerArrow, {
      innerHTML: ft
    });
    this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(e), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", () => {
      this.Editor.ConversionToolbar.toggle((t) => {
        !t && this.opened ? this.flipper.activate() : this.opened && this.flipper.deactivate();
      });
    }), te() === !1 && this.tooltip.onHover(this.nodes.conversionToggler, $.ui(X.ui.inlineToolbar.converter, "Convert to"), {
      placement: "top",
      hidingDelay: 100
    });
  }
  /**
   * Changes Conversion Dropdown content for current block's Tool
   */
  async setConversionTogglerContent() {
    const { BlockManager: e } = this.Editor, { currentBlock: t } = e, o = t.name, i = t.tool.conversionConfig, n = i && i.export;
    this.nodes.conversionToggler.hidden = !n, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !n);
    const r = await t.getActiveToolboxEntry() || {};
    this.nodes.conversionTogglerContent.innerHTML = r.icon || r.title || ae(o);
  }
  /**
   * Makes the Conversion Dropdown
   */
  prepareConversionToolbar() {
    const e = this.Editor.ConversionToolbar.make();
    d$2.append(this.nodes.wrapper, e);
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Append only allowed Tools
   */
  addToolsFiltered() {
    const e = m.get(), t = this.Editor.BlockManager.getBlock(e.anchorNode);
    this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(t.tool.inlineTools.values()).forEach((o) => {
      this.addTool(o);
    }), this.recalculateWidth();
  }
  /**
   * Add tool button and activate clicks
   *
   * @param {InlineTool} tool - InlineTool object
   */
  addTool(e) {
    const t = e.create(), o = t.render();
    if (!o) {
      L$1("Render method must return an instance of Node", "warn", e.name);
      return;
    }
    if (o.dataset.tool = e.name, this.nodes.buttons.appendChild(o), this.toolsInstances.set(e.name, t), D$1(t.renderActions)) {
      const a = t.renderActions();
      this.nodes.actions.appendChild(a);
    }
    this.listeners.on(o, "click", (a) => {
      this.toolClicked(t), a.preventDefault();
    });
    const i = this.getToolShortcut(e.name);
    if (i)
      try {
        this.enableShortcuts(t, i);
      } catch {
      }
    const n = d$2.make("div"), r = $.t(
      X.toolNames,
      e.title || ae(e.name)
    );
    n.appendChild(d$2.text(r)), i && n.appendChild(d$2.make("div", this.CSS.inlineToolbarShortcut, {
      textContent: Re(i)
    })), te() === !1 && this.tooltip.onHover(o, n, {
      placement: "top",
      hidingDelay: 100
    }), t.checkState(m.get());
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][vt.Shortcut] : o.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param {InlineTool} tool - Tool instance
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    le.add({
      name: t,
      handler: (o) => {
        const { currentBlock: i } = this.Editor.BlockManager;
        i && i.tool.enabledInlineTools && (o.preventDefault(), this.toolClicked(e));
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
    const t = m.range;
    e.surround(t), this.checkToolsState(), e.renderActions !== void 0 && this.flipper.deactivate();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    this.toolsInstances.forEach((e) => {
      e.checkState(m.get());
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
    this.flipper = new G({
      focusedItemClass: this.CSS.focusedButton,
      allowedKeys: [
        B$1.ENTER,
        B$1.TAB
      ]
    });
  }
}
class Vo extends C$3 {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case B$1.BACKSPACE:
        this.backspace(e);
        break;
      case B$1.DELETE:
        this.delete(e);
        break;
      case B$1.ENTER:
        this.enter(e);
        break;
      case B$1.DOWN:
      case B$1.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case B$1.UP:
      case B$1.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case B$1.TAB:
        this.tabPressed(e);
        break;
    }
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && nt(e.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(e)));
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
   * Open Toolbox to leaf Tools
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  tabPressed(e) {
    this.Editor.BlockSelection.clearSelection(e);
    const { BlockManager: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor, n = t.currentBlock;
    if (!n)
      return;
    const r = n.isEmpty, a = n.tool.isDefault && r, l = !r && i.opened, c = !r && !m.isCollapsed && o.opened;
    a ? this.activateToolbox() : !l && !c && this.activateBlockSettings();
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
    const { BlockSelection: t, BlockManager: o, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const n = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(n, !0);
      i.setToBlock(r, i.positions.START), t.clearSelection(e);
    });
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
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, previousBlock: n } = t;
    if (!m.isCollapsed || !o.isAtStart)
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
      o.navigatePrevious();
      return;
    }
    if (n === null)
      return;
    if (n.isEmpty) {
      t.removeBlock(n);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i);
      const l = t.currentBlock;
      o.setToBlock(l, o.positions.END);
      return;
    }
    Je(i, n) ? this.mergeBlocks(n, i) : o.setToBlock(n, o.positions.END);
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, nextBlock: n } = t;
    if (!m.isCollapsed || !o.isAtEnd)
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
      o.navigateNext();
      return;
    }
    if (n === null)
      return;
    if (n.isEmpty) {
      t.removeBlock(n);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i), o.setToBlock(n, o.positions.START);
      return;
    }
    Je(i, n) ? this.mergeBlocks(i, n) : o.setToBlock(n, o.positions.START);
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Caret: i, Toolbar: n } = this.Editor;
    i.createShadow(e.pluginsContent), o.mergeBlocks(e, t).then(() => {
      window.requestAnimationFrame(() => {
        i.restoreCaret(e.pluginsContent), e.pluginsContent.normalize(), n.close();
      });
    });
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B$1.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
    const o = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === B$1.DOWN && o) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    (e.keyCode === B$1.DOWN || e.keyCode === B$1.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? e.preventDefault() : re(() => {
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
      if (G.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === B$1.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
    const t = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === B$1.UP && t) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    (e.keyCode === B$1.UP || e.keyCode === B$1.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? e.preventDefault() : re(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === B$1.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === B$1.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === B$1.ENTER && this.Editor.InlineToolbar.opened, n = e.keyCode === B$1.ENTER && this.Editor.ConversionToolbar.opened, r = e.keyCode === B$1.TAB;
    return !(e.shiftKey || r || t || o || i || n);
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
    this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class Te {
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
    return st(this.workingArea.children);
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
    d$2.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], i = e - 1, n = Math.max(0, i), r = this.blocks[n];
    e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(q.MOVED, a);
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
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(q.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const n = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", n);
    } else {
      const n = this.blocks[e + 1];
      n ? this.insertToDOM(t, "beforebegin", n) : this.insertToDOM(t);
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
    for (const i of e)
      o.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((i) => i.call(q.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(q.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(q.REMOVED)), this.blocks.length = 0;
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
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(q.RENDERED);
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
const et = "block-removed", tt = "block-added", qo = "block-moved", ot = "block-changed";
class Zo {
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
class Go extends C$3 {
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
    return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
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
    const e = new Te(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: Te.set,
      get: Te.get
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
    tunes: i = {}
  }) {
    const n = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), a = new F$2({
      id: o,
      data: t,
      tool: r,
      api: this.Editor.API,
      readOnly: n,
      tunesData: i
    }, this.eventsDispatcher);
    return n || window.requestIdleCallback(() => {
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
    index: i,
    needToFocus: n = !0,
    replace: r = !1,
    tunes: a = {}
  } = {}) {
    let l = i;
    l === void 0 && (l = this.currentBlockIndex + (r ? 0 : 1));
    const c = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return r && this.blockDidMutated(et, this.getBlockByIndex(l), {
      index: l
    }), this._blocks.insert(l, c, r), this.blockDidMutated(tt, c, {
      index: l
    }), n ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, c;
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
    const o = await e.data, i = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, o, t),
      tunes: e.tunes
    }), n = this.getBlockIndex(e);
    return this._blocks.replace(n, i), this.blockDidMutated(ot, i, {
      index: n
    }), i;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const i = this.getBlockIndex(e);
    this.insert({
      tool: t,
      data: o,
      index: i,
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
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        i.call(q.ON_PASTE, t);
      });
    } catch (n) {
      L$1(`${e}: onPaste callback call is failed`, "error", n);
    }
    return i;
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
    return this._blocks[e] = o, this.blockDidMutated(tt, o, {
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
    V(o) || await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e);
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i))
        throw new Error("Can't find a Block to remove");
      e.destroy(), this._blocks.remove(i), this.blockDidMutated(et, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, t && this.insert()), o();
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
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = d$2.make("div");
    t.appendChild(e);
    const o = {
      text: d$2.isEmpty(t) ? "" : t.innerHTML
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
    d$2.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${F$2.CSS.wrapper}`), i = t.indexOf(o);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * Remove selection from all Blocks then highlight only Current Block
   */
  highlightCurrentNode() {
    this.clearFocused(), this.currentBlock.focused = !0;
  }
  /**
   * Remove selection from all Blocks
   */
  clearFocused() {
    this.blocks.forEach((e) => {
      e.focused = !1;
    });
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    d$2.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${F$2.CSS.wrapper}`);
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
    d$2.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${F$2.CSS.wrapper}`);
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
      L$1("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      L$1("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(qo, this.currentBlock, {
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
    const r = await e.exportDataAsString(), a = Z(
      r,
      n.sanitizeConfig
    );
    let l = Jt(a, n.conversionConfig);
    o && (l = Object.assign(l, o)), this.replace(e, n.name, l);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  dropPointer() {
    this.currentBlockIndex = -1, this.clearFocused();
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new Zo();
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
    }), e.on("didMutated", (o) => this.blockDidMutated(ot, o, {
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
    const i = new CustomEvent(e, {
      detail: {
        target: new ee(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(ct, {
      event: i
    }), t;
  }
}
class Jo extends C$3 {
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
    this.selection = new m(), le.add({
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
    m.get().removeAllRanges(), this.allBlocksSelected = !1;
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
    const { BlockManager: o, Caret: i, RectangleSelection: n } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const r = e && e instanceof KeyboardEvent, a = r && nt(e.keyCode);
    if (this.anyBlockSelected && r && a && !m.isSelectionExists) {
      const l = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(l, !0), i.setToBlock(o.currentBlock), re(() => {
        const c = e.key;
        i.insertContentAtCaretPosition(c.length > 1 ? "" : c);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || n.isRectActivated()) {
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
    const t = d$2.make("div");
    this.selectedBlocks.forEach((n) => {
      const r = Z(n.holder.innerHTML, this.sanitizerConfig), a = d$2.make("p");
      a.innerHTML = r, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map((n) => n.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((n) => n.save())).then((n) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(n));
      } catch {
      }
    });
  }
  /**
   * select Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    t.clearFocused();
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), this.selection.save(), m.get().removeAllRanges(), o.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
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
    le.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), d$2.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const o = this.Editor.BlockManager.getBlock(e.target).inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), m.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class ve extends C$3 {
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
    const e = m.get(), t = d$2.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput);
    let o = e.focusNode;
    if (d$2.isNativeInput(t))
      return t.selectionEnd === 0;
    if (!e.anchorNode)
      return !1;
    let i = o.textContent.search(/\S/);
    i === -1 && (i = 0);
    let n = e.focusOffset;
    return o.nodeType !== Node.TEXT_NODE && o.childNodes.length && (o.childNodes[n] ? (o = o.childNodes[n], n = 0) : (o = o.childNodes[n - 1], n = o.textContent.length)), (d$2.isLineBreakTag(t) || d$2.isEmpty(t)) && this.getHigherLevelSiblings(o, "left").every((l) => {
      const c = d$2.isLineBreakTag(l), u = l.children.length === 1 && d$2.isLineBreakTag(l.children[0]), h = c || u;
      return d$2.isEmpty(l) && !h;
    }) && n === i ? !0 : t === null || o === t && n <= i;
  }
  /**
   * Get's deepest last node and checks if offset is last node text length
   *
   * @returns {boolean}
   */
  get isAtEnd() {
    const e = m.get();
    let t = e.focusNode;
    const o = d$2.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
    if (d$2.isNativeInput(o))
      return o.selectionEnd === o.value.length;
    if (!e.focusNode)
      return !1;
    let i = e.focusOffset;
    if (t.nodeType !== Node.TEXT_NODE && t.childNodes.length && (t.childNodes[i - 1] ? (t = t.childNodes[i - 1], i = t.textContent.length) : (t = t.childNodes[0], i = 0)), d$2.isLineBreakTag(o) || d$2.isEmpty(o)) {
      const r = this.getHigherLevelSiblings(t, "right");
      if (r.every((l, c) => c === r.length - 1 && d$2.isLineBreakTag(l) || d$2.isEmpty(l) && !d$2.isLineBreakTag(l)) && i === t.textContent.length)
        return !0;
    }
    const n = o.textContent.replace(/\s+$/, "");
    return t === o && i >= n.length;
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
    const { BlockManager: i } = this.Editor;
    let n;
    switch (t) {
      case this.positions.START:
        n = e.firstInput;
        break;
      case this.positions.END:
        n = e.lastInput;
        break;
      default:
        n = e.currentInput;
    }
    if (!n)
      return;
    const r = d$2.getDeepestNode(n, t === this.positions.END), a = d$2.getContentLength(r);
    switch (!0) {
      case t === this.positions.START:
        o = 0;
        break;
      case t === this.positions.END:
      case o > a:
        o = a;
        break;
    }
    re(() => {
      this.set(r, o);
    }, 20)(), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = n;
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
    const { currentBlock: i } = this.Editor.BlockManager, n = d$2.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(n, 0);
        break;
      case this.positions.END:
        this.set(n, d$2.getContentLength(n));
        break;
      default:
        o && this.set(n, o);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: o, bottom: i } = m.setCursor(e, t), { innerHeight: n } = window;
    o < 0 && window.scrollBy(0, o), i > n && window.scrollBy(0, i - n);
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
    const e = m.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (d$2.isNativeInput(o)) {
          const i = o, n = document.createDocumentFragment(), r = i.value.substring(0, i.selectionStart), a = i.value.substring(i.selectionStart);
          return n.textContent = a, i.value = r, n;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */
  navigateNext() {
    const { BlockManager: e } = this.Editor, { currentBlock: t, nextContentfulBlock: o } = e, { nextInput: i } = t, n = this.isAtEnd;
    let r = o;
    if (!r && !i) {
      if (t.tool.isDefault || !n)
        return !1;
      r = e.insertAtEnd();
    }
    return n ? (i ? this.setToInput(i, this.positions.START) : this.setToBlock(r, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @returns {boolean}
   */
  navigatePrevious() {
    const { currentBlock: e, previousContentfulBlock: t } = this.Editor.BlockManager;
    if (!e)
      return !1;
    const { previousInput: o } = e;
    return !t && !o ? !1 : this.isAtStart ? (o ? this.setToInput(o, this.positions.END) : this.setToBlock(t, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(ve.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${ve.CSS.shadowCaret}`);
    if (!t)
      return;
    new m().expandToTag(t);
    const i = document.createRange();
    i.selectNode(t), i.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), i = m.get(), n = m.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((c) => t.appendChild(c)), t.childNodes.length === 0 && t.appendChild(new Text());
    const r = t.lastChild;
    n.deleteContents(), n.insertNode(t);
    const a = document.createRange(), l = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
    l !== null && l.textContent !== null && a.setStart(l, l.textContent.length), i.removeAllRanges(), i.addRange(a);
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
    const i = [];
    for (; o.parentNode && o.parentNode.contentEditable !== "true"; )
      o = o.parentNode;
    const n = t === "left" ? "previousSibling" : "nextSibling";
    for (; o[n]; )
      o = o[n], i.push(o);
    return i;
  }
}
class Qo extends C$3 {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor, i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, n = t.getBlockByChildNode(e.target);
      if (!(!i || !n) && n !== i) {
        if (i === this.firstSelectedBlock) {
          m.get().removeAllRanges(), i.selected = !0, n.selected = !0, o.clearCache();
          return;
        }
        if (n === this.firstSelectedBlock) {
          i.selected = !1, n.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, n), this.lastSelectedBlock = n;
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
    if (e.button !== _t.LEFT)
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
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), m.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), n = t.blocks[i];
    n && (this.lastSelectedBlock.selected !== n.selected ? (n.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = n, this.Editor.InlineToolbar.close(), n.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, n = t.blocks.indexOf(this.firstSelectedBlock), r = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && n > -1 && r > -1)
      if (e && e instanceof KeyboardEvent)
        switch (e.keyCode) {
          case B$1.DOWN:
          case B$1.RIGHT:
            i.setToBlock(t.blocks[Math.max(n, r)], i.positions.END);
            break;
          case B$1.UP:
          case B$1.LEFT:
            i.setToBlock(t.blocks[Math.min(n, r)], i.positions.START);
            break;
          default:
            i.setToBlock(t.blocks[Math.max(n, r)], i.positions.END);
        }
      else
        i.setToBlock(t.blocks[Math.max(n, r)], i.positions.END);
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    m.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: i } = this.Editor, n = o.blocks.indexOf(e), r = o.blocks.indexOf(t), a = e.selected !== t.selected;
    for (let l = Math.min(n, r); l <= Math.max(n, r); l++) {
      const c = o.blocks[l];
      c !== this.firstSelectedBlock && c !== (a ? e : t) && (o.blocks[l].selected = !o.blocks[l].selected, i.clearCache());
    }
  }
}
class ei extends C$3 {
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
      Paste: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((r) => {
      r.dropTarget = !1;
    }), m.isAtEditor && !m.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const n = t.setCurrentBlockByChildNode(e.target);
    if (n)
      this.Editor.Caret.setToBlock(n, o.positions.END);
    else {
      const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(r, o.positions.END);
    }
    await i.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    m.isAtEditor && !m.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
class ti extends C$3 {
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
    }), this.eventsDispatcher.on(ct, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(dt, () => {
      this.disable();
    }), this.eventsDispatcher.on(ht, () => {
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
    this.disabled || !D$1(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
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
    this.eventsDispatcher.emit(Me, {
      mutations: e
    });
  }
}
const wt = class extends C$3 {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (s) => {
      try {
        const e = s.create({}, {}, !1);
        if (s.pasteConfig === !1) {
          this.exceptionList.push(s.name);
          return;
        }
        if (!D$1(e.onPaste))
          return;
        this.getTagsConfig(s), this.getFilesConfig(s), this.getPatternsConfig(s);
      } catch (e) {
        L$1(
          `Paste handling for «${s.name}» Tool hasn't been set up because of the error`,
          "warn",
          e
        );
      }
    }, this.handlePasteEvent = async (s) => {
      const { BlockManager: e, Toolbar: t } = this.Editor, o = e.setCurrentBlockByChildNode(s.target);
      !o || this.isNativeBehaviour(s.target) && !s.clipboardData.types.includes("Files") || o && this.exceptionList.includes(o.name) || (s.preventDefault(), this.processDataTransfer(s.clipboardData), e.clearFocused(), t.close());
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
  toggleReadOnly(s) {
    s ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(s, e = !1) {
    const { Tools: t } = this.Editor, o = s.types;
    if ((o.includes ? o.includes("Files") : o.contains("Files")) && !V(this.toolsFiles)) {
      await this.processFiles(s.files);
      return;
    }
    const n = s.getData(this.MIME_TYPE), r = s.getData("text/plain");
    let a = s.getData("text/html");
    if (n)
      try {
        this.insertEditorJSData(JSON.parse(n));
        return;
      } catch {
      }
    e && r.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : r) + "</p>");
    const l = Object.keys(this.toolsTags).reduce((h, f) => (h[f.toLowerCase()] = this.toolsTags[f].sanitizationConfig ?? {}, h), {}), c = Object.assign({}, l, t.getAllInlineToolsSanitizeConfig(), { br: {} }), u = Z(a, c);
    !u.trim() || u.trim() === r || !d$2.isHTMLString(u) ? await this.processText(r) : await this.processText(u, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(s, e = !1) {
    const { Caret: t, BlockManager: o } = this.Editor, i = e ? this.processHTML(s) : this.processPlain(s);
    if (!i.length)
      return;
    if (i.length === 1) {
      i[0].isBlock ? this.processSingleBlock(i.pop()) : this.processInlinePaste(i.pop());
      return;
    }
    const r = o.currentBlock && o.currentBlock.tool.isDefault && o.currentBlock.isEmpty;
    i.map(
      async (a, l) => this.insertBlock(a, l === 0 && r)
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
    const s = this.Editor.Tools.blockTools;
    Array.from(s.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(s) {
    return J(s) ? [s] : z(s) ? Object.keys(s) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(s) {
    if (s.pasteConfig === !1)
      return;
    const e = s.pasteConfig.tags || [], t = [];
    e.forEach((o) => {
      const i = this.collectTagNames(o);
      t.push(...i), i.forEach((n) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, n)) {
          L$1(
            `Paste handler for «${s.name}» Tool on «${n}» tag is skipped because it is already used by «${this.toolsTags[n].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const r = z(o) ? o[n] : null;
        this.toolsTags[n.toUpperCase()] = {
          tool: s,
          sanitizationConfig: r
        };
      });
    }), this.tagsByTool[s.name] = t.map((o) => o.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(s) {
    if (s.pasteConfig === !1)
      return;
    const { files: e = {} } = s.pasteConfig;
    let { extensions: t, mimeTypes: o } = e;
    !t && !o || (t && !Array.isArray(t) && (L$1(`«extensions» property of the onDrop config for «${s.name}» Tool should be an array`), t = []), o && !Array.isArray(o) && (L$1(`«mimeTypes» property of the onDrop config for «${s.name}» Tool should be an array`), o = []), o && (o = o.filter((i) => Ft(i) ? !0 : (L$1(`MIME type value «${i}» for the «${s.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[s.name] = {
      extensions: t || [],
      mimeTypes: o || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(s) {
    s.pasteConfig === !1 || !s.pasteConfig.patterns || V(s.pasteConfig.patterns) || Object.entries(s.pasteConfig.patterns).forEach(([e, t]) => {
      t instanceof RegExp || L$1(
        `Pattern ${t} for «${s.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: e,
        pattern: t,
        tool: s
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(s) {
    return d$2.isNativeInput(s);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(s) {
    const { BlockManager: e } = this.Editor;
    let t;
    t = await Promise.all(
      Array.from(s).map((n) => this.processFile(n))
    ), t = t.filter((n) => !!n);
    const i = e.currentBlock.tool.isDefault && e.currentBlock.isEmpty;
    t.forEach(
      (n, r) => {
        e.paste(n.type, n.event, r === 0 && i);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(s) {
    const e = Pt(s), t = Object.entries(this.toolsFiles).find(([n, { mimeTypes: r, extensions: a }]) => {
      const [l, c] = s.type.split("/"), u = a.find((f) => f.toLowerCase() === e.toLowerCase()), h = r.find((f) => {
        const [k, p] = f.split("/");
        return k === l && (p === c || p === "*");
      });
      return !!u || !!h;
    });
    if (!t)
      return;
    const [o] = t;
    return {
      event: this.composePasteEvent("file", {
        file: s
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
  processHTML(s) {
    const { Tools: e } = this.Editor, t = d$2.make("DIV");
    return t.innerHTML = s, this.getNodes(t).map((i) => {
      let n, r = e.defaultTool, a = !1;
      switch (i.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          n = d$2.make("div"), n.appendChild(i);
          break;
        case Node.ELEMENT_NODE:
          n = i, a = !0, this.toolsTags[n.tagName] && (r = this.toolsTags[n.tagName].tool);
          break;
      }
      const { tags: l } = r.pasteConfig || { tags: [] }, c = l.reduce((f, k) => (this.collectTagNames(k).forEach((v) => {
        const A = z(k) ? k[v] : null;
        f[v.toLowerCase()] = A || {};
      }), f), {}), u = Object.assign({}, c, r.baseSanitizeConfig);
      if (n.tagName.toLowerCase() === "table") {
        const f = Z(n.outerHTML, u);
        n = d$2.make("div", void 0, {
          innerHTML: f
        }).firstChild;
      } else
        n.innerHTML = Z(n.innerHTML, u);
      const h = this.composePasteEvent("tag", {
        data: n
      });
      return {
        content: n,
        isBlock: a,
        tool: r.name,
        event: h
      };
    }).filter((i) => {
      const n = d$2.isEmpty(i.content), r = d$2.isSingleTag(i.content);
      return !n || r;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(s) {
    const { defaultBlock: e } = this.config;
    if (!s)
      return [];
    const t = e;
    return s.split(/\r?\n/).filter((o) => o.trim()).map((o) => {
      const i = d$2.make("div");
      i.textContent = o;
      const n = this.composePasteEvent("tag", {
        data: i
      });
      return {
        content: i,
        tool: t,
        isBlock: !1,
        event: n
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(s) {
    const { Caret: e, BlockManager: t } = this.Editor, { currentBlock: o } = t;
    if (!o || s.tool !== o.name || !d$2.containsOnlyInlineElements(s.content.innerHTML)) {
      this.insertBlock(s, (o == null ? void 0 : o.tool.isDefault) && o.isEmpty);
      return;
    }
    e.insertContentAtCaretPosition(s.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(s) {
    const { BlockManager: e, Caret: t } = this.Editor, { content: o } = s;
    if (e.currentBlock && e.currentBlock.tool.isDefault && o.textContent.length < wt.PATTERN_PROCESSING_MAX_LENGTH) {
      const n = await this.processPattern(o.textContent);
      if (n) {
        const r = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty, a = e.paste(n.tool, n.event, r);
        t.setToBlock(a, t.positions.END);
        return;
      }
    }
    if (e.currentBlock && e.currentBlock.currentInput) {
      const n = e.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        Z(o.innerHTML, n)
      );
    } else
      this.insertBlock(s);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(s) {
    const e = this.toolsPatterns.find((o) => {
      const i = o.pattern.exec(s);
      return i ? s === i.shift() : !1;
    });
    return e ? {
      event: this.composePasteEvent("pattern", {
        key: e.key,
        data: s
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
  insertBlock(s, e = !1) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i } = t;
    let n;
    if (e && i && i.isEmpty) {
      n = t.paste(s.tool, s.event, !0), o.setToBlock(n, o.positions.END);
      return;
    }
    n = t.paste(s.tool, s.event), o.setToBlock(n, o.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(s) {
    const { BlockManager: e, Caret: t, Tools: o } = this.Editor;
    ut(
      s,
      (n) => o.blockTools.get(n).sanitizeConfig
    ).forEach(({ tool: n, data: r }, a) => {
      let l = !1;
      a === 0 && (l = e.currentBlock && e.currentBlock.tool.isDefault && e.currentBlock.isEmpty);
      const c = e.insert({
        tool: n,
        data: r,
        replace: l
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
  processElementNode(s, e, t) {
    const o = Object.keys(this.toolsTags), i = s, { tool: n } = this.toolsTags[i.tagName] || {}, r = this.tagsByTool[n == null ? void 0 : n.name] || [], a = o.includes(i.tagName), l = d$2.blockElements.includes(i.tagName.toLowerCase()), c = Array.from(i.children).some(
      ({ tagName: h }) => o.includes(h) && !r.includes(h)
    ), u = Array.from(i.children).some(
      ({ tagName: h }) => d$2.blockElements.includes(h.toLowerCase())
    );
    if (!l && !a && !c)
      return t.appendChild(i), [...e, t];
    if (a && !c || l && !u && !c)
      return [...e, t, i];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(s) {
    const e = Array.from(s.childNodes);
    let t;
    const o = (i, n) => {
      if (d$2.isEmpty(n) && !d$2.isSingleTag(n))
        return i;
      const r = i[i.length - 1];
      let a = new DocumentFragment();
      switch (r && d$2.isFragment(r) && (a = i.pop()), n.nodeType) {
        case Node.ELEMENT_NODE:
          if (t = this.processElementNode(n, i, a), t)
            return t;
          break;
        case Node.TEXT_NODE:
          return a.appendChild(n), [...i, a];
        default:
          return [...i, a];
      }
      return [...i, ...Array.from(n.childNodes).reduce(o, [])];
    };
    return e.reduce(o, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(s, e) {
    return new CustomEvent(s, {
      detail: e
    });
  }
};
let yt = wt;
yt.PATTERN_PROCESSING_MAX_LENGTH = 450;
class oi extends C$3 {
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
    Array.from(t.entries()).forEach(([i, n]) => {
      n.isReadOnlySupported || o.push(i);
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
    for (const i in this.Editor)
      this.Editor[i].toggleReadOnly && this.Editor[i].toggleReadOnly(e);
    if (t === e)
      return this.readOnlyEnabled;
    const o = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(o.blocks), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new lt(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class fe extends C$3 {
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
      `.${F$2.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), a = n.some((l) => !!o.closest(l));
    !r || a || (this.mousedown = !0, this.startX = e, this.startY = t);
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
    }, !1), this.listeners.on(document.body, "mousemove", Ce((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", Ce((t) => {
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
    if (e.button !== this.MAIN_MOUSE_BUTTON)
      return;
    e.target.closest(d$2.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
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
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = d$2.make("div", fe.CSS.overlay, {}), i = d$2.make("div", fe.CSS.overlayContainer, {}), n = d$2.make("div", fe.CSS.rect, {});
    return i.appendChild(n), o.appendChild(i), t.appendChild(o), this.overlayRectangle = n, {
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
    const { rightPos: t, leftPos: o, index: i } = this.genInfoForMouseSelection(), n = this.startX > t && this.mouseX > t, r = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(n || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), m.get().removeAllRanges());
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
    const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o);
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
    const t = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o), n = this.Editor.BlockManager.getBlockByChildNode(i);
    let r;
    n !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h) => h.holder === n.holder));
    const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + F$2.CSS.content), l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2, c = t - l, u = t + l;
    return {
      index: r,
      leftPos: c,
      rightPos: u
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
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, n = -1, r = 0;
    if (t)
      return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let l = r;
    o > 1 && (l = a ? i : n);
    const c = e > this.stackOfSelected[o - 1] && l === i, u = e < this.stackOfSelected[o - 1] && l === n, f = !(c || u || l === r);
    if (!f && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let v = this.stackOfSelected[o - 1] + 1 || e;
      for (v; v <= e; v++)
        this.addBlockInSelection(v);
      return;
    }
    if (!f && e < this.stackOfSelected[o - 1]) {
      for (let v = this.stackOfSelected[o - 1] - 1; v >= e; v--)
        this.addBlockInSelection(v);
      return;
    }
    if (!f)
      return;
    let k = o - 1, p;
    for (e > this.stackOfSelected[o - 1] ? p = () => e > this.stackOfSelected[k] : p = () => e < this.stackOfSelected[k]; p(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[k]), this.stackOfSelected.pop(), k--;
  }
}
class ii extends C$3 {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: i } = this.Editor, n = e.map(({ type: r, data: a, tunes: l, id: c }) => {
        o.available.has(r) === !1 && (K(`Tool «${r}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(r, a, c), r = o.stubTool);
        let u;
        try {
          u = i.composeBlock({
            id: c,
            tool: r,
            data: a,
            tunes: l
          });
        } catch (h) {
          L$1(`Block «${r}» skipped because of plugins error`, "error", {
            data: a,
            error: h
          }), a = this.composeStubDataForTool(r, a, c), r = o.stubTool, u = i.composeBlock({
            id: c,
            tool: r,
            data: a,
            tunes: l
          });
        }
        return u;
      });
      i.insertMany(n), window.requestIdleCallback(() => {
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
    const { Tools: i } = this.Editor;
    let n = e;
    if (i.unavailable.has(e)) {
      const r = i.unavailable.get(e).toolbox;
      r !== void 0 && r[0].title !== void 0 && (n = r[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: n
    };
  }
}
class ni extends C$3 {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, i = [];
    try {
      o.forEach((a) => {
        i.push(this.getSavedData(a));
      });
      const n = await Promise.all(i), r = await ut(n, (a) => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(r);
    } catch (n) {
      K("Saving failed due to the Error %o", "error", n);
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
    return e.forEach(({ id: o, tool: i, data: n, tunes: r, isValid: a }) => {
      if (!a) {
        L$1(`Block «${i}» skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(n);
        return;
      }
      const l = {
        id: o,
        type: i,
        data: n,
        ...!V(r) && {
          tunes: r
        }
      };
      t.push(l);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.28.2"
    };
  }
}
var Ne = {}, si = {
  get exports() {
    return Ne;
  },
  set exports(s) {
    Ne = s;
  }
};
(function(s, e) {
  (function(t, o) {
    s.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(n) {
        if (o[n])
          return o[n].exports;
        var r = o[n] = { i: n, l: !1, exports: {} };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(n, r, a) {
        i.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: a });
      }, i.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, i.t = function(n, r) {
        if (1 & r && (n = i(n)), 8 & r || 4 & r && typeof n == "object" && n && n.__esModule)
          return n;
        var a = /* @__PURE__ */ Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: n }), 2 & r && typeof n != "string")
          for (var l in n)
            i.d(a, l, function(c) {
              return n[c];
            }.bind(null, l));
        return a;
      }, i.n = function(n) {
        var r = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(n, r) {
        return Object.prototype.hasOwnProperty.call(n, r);
      }, i.p = "/", i(i.s = 4);
    }([function(t, o, i) {
      var n = i(1), r = i(2);
      typeof (r = r.__esModule ? r.default : r) == "string" && (r = [[t.i, r, ""]]);
      var a = { insert: "head", singleton: !1 };
      n(r, a), t.exports = r.locals || {};
    }, function(t, o, i) {
      var n, r = function() {
        return n === void 0 && (n = !!(window && document && document.all && !window.atob)), n;
      }, a = function() {
        var y = {};
        return function(x) {
          if (y[x] === void 0) {
            var w = document.querySelector(x);
            if (window.HTMLIFrameElement && w instanceof window.HTMLIFrameElement)
              try {
                w = w.contentDocument.head;
              } catch {
                w = null;
              }
            y[x] = w;
          }
          return y[x];
        };
      }(), l = [];
      function c(y) {
        for (var x = -1, w = 0; w < l.length; w++)
          if (l[w].identifier === y) {
            x = w;
            break;
          }
        return x;
      }
      function u(y, x) {
        for (var w = {}, I = [], R = 0; R < y.length; R++) {
          var b = y[R], g = x.base ? b[0] + x.base : b[0], E = w[g] || 0, T = "".concat(g, " ").concat(E);
          w[g] = E + 1;
          var O = c(T), S = { css: b[1], media: b[2], sourceMap: b[3] };
          O !== -1 ? (l[O].references++, l[O].updater(S)) : l.push({ identifier: T, updater: _(S, x), references: 1 }), I.push(T);
        }
        return I;
      }
      function h(y) {
        var x = document.createElement("style"), w = y.attributes || {};
        if (w.nonce === void 0) {
          var I = i.nc;
          I && (w.nonce = I);
        }
        if (Object.keys(w).forEach(function(b) {
          x.setAttribute(b, w[b]);
        }), typeof y.insert == "function")
          y.insert(x);
        else {
          var R = a(y.insert || "head");
          if (!R)
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          R.appendChild(x);
        }
        return x;
      }
      var f, k = (f = [], function(y, x) {
        return f[y] = x, f.filter(Boolean).join(`
`);
      });
      function p(y, x, w, I) {
        var R = w ? "" : I.media ? "@media ".concat(I.media, " {").concat(I.css, "}") : I.css;
        if (y.styleSheet)
          y.styleSheet.cssText = k(x, R);
        else {
          var b = document.createTextNode(R), g = y.childNodes;
          g[x] && y.removeChild(g[x]), g.length ? y.insertBefore(b, g[x]) : y.appendChild(b);
        }
      }
      function v(y, x, w) {
        var I = w.css, R = w.media, b = w.sourceMap;
        if (R ? y.setAttribute("media", R) : y.removeAttribute("media"), b && btoa && (I += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(b)))), " */")), y.styleSheet)
          y.styleSheet.cssText = I;
        else {
          for (; y.firstChild; )
            y.removeChild(y.firstChild);
          y.appendChild(document.createTextNode(I));
        }
      }
      var A = null, N = 0;
      function _(y, x) {
        var w, I, R;
        if (x.singleton) {
          var b = N++;
          w = A || (A = h(x)), I = p.bind(null, w, b, !1), R = p.bind(null, w, b, !0);
        } else
          w = h(x), I = v.bind(null, w, x), R = function() {
            (function(g) {
              if (g.parentNode === null)
                return !1;
              g.parentNode.removeChild(g);
            })(w);
          };
        return I(y), function(g) {
          if (g) {
            if (g.css === y.css && g.media === y.media && g.sourceMap === y.sourceMap)
              return;
            I(y = g);
          } else
            R();
        };
      }
      t.exports = function(y, x) {
        (x = x || {}).singleton || typeof x.singleton == "boolean" || (x.singleton = r());
        var w = u(y = y || [], x);
        return function(I) {
          if (I = I || [], Object.prototype.toString.call(I) === "[object Array]") {
            for (var R = 0; R < w.length; R++) {
              var b = c(w[R]);
              l[b].references--;
            }
            for (var g = u(I, x), E = 0; E < w.length; E++) {
              var T = c(w[E]);
              l[T].references === 0 && (l[T].updater(), l.splice(T, 1));
            }
            w = g;
          }
        };
      };
    }, function(t, o, i) {
      (o = i(3)(!1)).push([t.i, `.ce-paragraph {
    line-height: 1.6em;
    outline: none;
}

.ce-paragraph[data-placeholder]:empty::before{
  content: attr(data-placeholder);
  color: #707684;
  font-weight: normal;
  opacity: 0;
}

/** Show placeholder at the first paragraph if Editor is empty */
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {
  opacity: 1;
}

.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,
.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {
  opacity: 0;
}

.ce-paragraph p:first-of-type{
    margin-top: 0;
}

.ce-paragraph p:last-of-type{
    margin-bottom: 0;
}
`, ""]), t.exports = o;
    }, function(t, o, i) {
      t.exports = function(n) {
        var r = [];
        return r.toString = function() {
          return this.map(function(a) {
            var l = function(c, u) {
              var h = c[1] || "", f = c[3];
              if (!f)
                return h;
              if (u && typeof btoa == "function") {
                var k = (v = f, A = btoa(unescape(encodeURIComponent(JSON.stringify(v)))), N = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A), "/*# ".concat(N, " */")), p = f.sources.map(function(_) {
                  return "/*# sourceURL=".concat(f.sourceRoot || "").concat(_, " */");
                });
                return [h].concat(p).concat([k]).join(`
`);
              }
              var v, A, N;
              return [h].join(`
`);
            }(a, n);
            return a[2] ? "@media ".concat(a[2], " {").concat(l, "}") : l;
          }).join("");
        }, r.i = function(a, l, c) {
          typeof a == "string" && (a = [[null, a, ""]]);
          var u = {};
          if (c)
            for (var h = 0; h < this.length; h++) {
              var f = this[h][0];
              f != null && (u[f] = !0);
            }
          for (var k = 0; k < a.length; k++) {
            var p = [].concat(a[k]);
            c && u[p[0]] || (l && (p[2] ? p[2] = "".concat(l, " and ").concat(p[2]) : p[2] = l), r.push(p));
          }
        }, r;
      };
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return a;
      }), i(0);
      function n(l, c) {
        for (var u = 0; u < c.length; u++) {
          var h = c[u];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(l, h.key, h);
        }
      }
      function r(l, c, u) {
        return c && n(l.prototype, c), u && n(l, u), l;
      }
      /**
       * Base Paragraph Block for the Editor.js.
       * Represents a regular text block
       *
       * @author CodeX (team@codex.so)
       * @copyright CodeX 2018
       * @license The MIT License (MIT)
       */
      var a = function() {
        function l(c) {
          var u = c.data, h = c.config, f = c.api, k = c.readOnly;
          ((function(p, v) {
            if (!(p instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }))(this, l), this.api = f, this.readOnly = k, this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = h.placeholder ? h.placeholder : l.DEFAULT_PLACEHOLDER, this._data = {}, this._element = null, this._preserveBlank = h.preserveBlank !== void 0 && h.preserveBlank, this.data = u;
        }
        return r(l, null, [{ key: "DEFAULT_PLACEHOLDER", get: function() {
          return "";
        } }]), r(l, [{ key: "onKeyUp", value: function(c) {
          c.code !== "Backspace" && c.code !== "Delete" || this._element.textContent === "" && (this._element.innerHTML = "");
        } }, { key: "drawView", value: function() {
          var c = document.createElement("DIV");
          return c.classList.add(this._CSS.wrapper, this._CSS.block), c.contentEditable = !1, c.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (c.contentEditable = !0, c.addEventListener("keyup", this.onKeyUp)), c;
        } }, { key: "render", value: function() {
          return this._element === null && (this._element = this.drawView()), this.hydrate(), this._element;
        } }, { key: "merge", value: function(c) {
          var u = { text: this.data.text + c.text };
          this.data = u;
        } }, { key: "validate", value: function(c) {
          return !(c.text.trim() === "" && !this._preserveBlank);
        } }, { key: "save", value: function(c) {
          return { text: c.innerHTML };
        } }, { key: "onPaste", value: function(c) {
          var u = { text: c.detail.data.innerHTML };
          this.data = u;
        } }, { key: "hydrate", value: function() {
          var c = this;
          window.requestAnimationFrame(function() {
            c._element.innerHTML = c._data.text || "";
          });
        } }, { key: "data", get: function() {
          if (this._element !== null) {
            var c = this._element.innerHTML;
            this._data.text = c;
          }
          return this._data;
        }, set: function(c) {
          this._data = c || {}, this._element !== null && this.hydrate();
        } }], [{ key: "conversionConfig", get: function() {
          return { export: "text", import: "text" };
        } }, { key: "sanitize", get: function() {
          return { text: { br: !0 } };
        } }, { key: "isReadOnlySupported", get: function() {
          return !0;
        } }, { key: "pasteConfig", get: function() {
          return { tags: ["P"] };
        } }, { key: "toolbox", get: function() {
          return { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', title: "Text" };
        } }]), l;
      }();
    }]).default;
  });
})(si);
const ri = /* @__PURE__ */ xe(Ne);
class We {
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
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = So, this.nodes.button;
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
We.isInline = !0;
We.title = "Bold";
class Ye {
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
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Oo, this.nodes.button;
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
Ye.isInline = !0;
Ye.title = "Italic";
class Ke {
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
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new m();
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
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Qe, this.nodes.button;
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
      this.nodes.button.innerHTML = Ro, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = Qe, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
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
      const t = new m();
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
      }), L$1("Incorrect Link pasted", "warn", t);
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
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
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
Ke.isInline = !0;
Ke.title = "Link";
class Et {
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
    const e = d$2.make("div", this.CSS.wrapper), t = Do, o = d$2.make("div", this.CSS.info), i = d$2.make("div", this.CSS.title, {
      textContent: this.title
    }), n = d$2.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(n), e.appendChild(o), e;
  }
}
Et.isReadOnlySupported = !0;
class ai extends $e {
  constructor() {
    super(...arguments), this.type = ye.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[Ue.Title];
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
class li extends $e {
  constructor() {
    super(...arguments), this.type = ye.Tune;
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
let U$1 = class U extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new U(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new U(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new U(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new U(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new U(e);
  }
};
var ci = Object.defineProperty, di = Object.getOwnPropertyDescriptor, Bt = (s, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? di(e, t) : e, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && ci(e, t, i), i;
};
class Xe extends $e {
  constructor() {
    super(...arguments), this.type = ye.Block, this.inlineTools = new U$1(), this.tunes = new U$1();
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
    return this.constructable[se.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[se.IsEnabledLineBreaks];
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
    const e = this.constructable[se.Toolbox], t = this.config[ke.Toolbox];
    if (!V(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
        const n = e[i];
        return n ? {
          ...n,
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
    return this.constructable[se.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[ke.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[ke.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[se.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (V(e))
      return t;
    const o = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const n = e[i];
        z(n) ? o[i] = Object.assign({}, t, n) : o[i] = n;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
Bt([
  ce
], Xe.prototype, "sanitizeConfig", 1);
Bt([
  ce
], Xe.prototype, "baseSanitizeConfig", 1);
class hi {
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
    const { class: t, isInternal: o = !1, ...i } = this.config[e], n = this.getConstructor(t);
    return new n({
      name: e,
      constructable: t,
      config: i,
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
      case e[Ue.IsInline]:
        return ai;
      case e[xt.IsTune]:
        return li;
      default:
        return Xe;
    }
  }
}
class Tt {
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
      icon: ft,
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
    const o = t.holder, i = o.getBoundingClientRect();
    let n = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (n = window.scrollY + o.offsetHeight), window.scrollTo(0, n), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
Tt.isTune = !0;
class Ct {
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
      icon: Mo,
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
Ct.isTune = !0;
class St {
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
      icon: Io,
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
    const i = t.holder, n = o.holder, r = i.getBoundingClientRect(), a = n.getBoundingClientRect();
    let l;
    a.top > 0 ? l = Math.abs(r.top) - Math.abs(a.top) : l = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
St.isTune = !0;
var ui = Object.defineProperty, pi = Object.getOwnPropertyDescriptor, fi = (s, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? pi(e, t) : e, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && ui(e, t, i), i;
};
class It extends C$3 {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new U$1(), this.toolsUnavailable = new U$1();
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
    if (this.validateTools(), this.config.tools = Se({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new hi(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await Dt(t, (o) => {
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
      D$1(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      bold: {
        class: We,
        isInternal: !0
      },
      italic: {
        class: Ye,
        isInternal: !0
      },
      link: {
        class: Ke,
        isInternal: !0
      },
      paragraph: {
        class: ri,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: Et,
        isInternal: !0
      },
      moveUp: {
        class: St,
        isInternal: !0
      },
      delete: {
        class: Ct,
        isInternal: !0
      },
      moveDown: {
        class: Tt,
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
      const i = ["render", "surround", "checkState"].filter((n) => !t.create()[n]);
      if (i.length) {
        L$1(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          i
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
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: D$1(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: i.config
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
        e.inlineTools = new U$1(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new U$1(
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
        const t = new U$1(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new U$1([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new U$1(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new U$1([...t, ...this.blockTunes.internalTools]);
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
        if (!D$1(t) && !D$1(t.class))
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
fi([
  ce
], It.prototype, "getAllInlineToolsSanitizeConfig", 1);
const gi = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0px;left:0px;right:0px;bottom:0px;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;-webkit-transform:translateX(-50%) translateY(8px) scale(.94);transform:translate(-50%) translateY(8px) scale(.94);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translate(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.94);transform:translate(-23px) translateY(8px) scale(.94)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translate(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.94);transform:translate(-100%) translateY(8px) scale(.94);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translate(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;border-radius:0;line-height:normal}.ce-inline-tool svg{width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:190px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px #c9c9cc7a;border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-conversion-tool__secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-conversion-tool__secondary-label{display:none}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;line-height:32px}.ce-settings__button svg{width:20px;height:20px}@media (max-width: 650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover: hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{background:rgba(34,186,255,.08)!important}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button--disabled{cursor:not-allowed!important}.ce-settings__button--disabled{opacity:.3}.ce-settings__button--selected{color:#388ae5}@media (min-width: 651px){.codex-editor--narrow .ce-settings .ce-popover{right:0;left:auto;left:initial}}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width: 651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button svg{width:20px;height:20px}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0px;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #e8e8eb;--color-shadow: rgba(13,20,33,.13);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #eff2f5;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:0;top:calc(100% + var(--offset-from-target));background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}.ce-popover--open-top{top:calc(-1 * (var(--offset-from-target) + var(--popover-height)))}@media (max-width: 650px){.ce-popover{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}.ce-popover .ce-popover__search{display:none}}.ce-popover__search,.ce-popover__custom-content:not(:empty){margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width: 651px){.ce-popover__custom-content:not(:empty){padding:0}}.ce-popover__custom-content--hidden{display:none}.ce-popover-item{--border-radius: 6px;--icon-size: 20px;--icon-size-mobile: 28px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px;color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{border-radius:5px;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px var(--color-border-icon);box-shadow:0 0 0 1px var(--color-border-icon);background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:10px}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:var(--icon-size-mobile);height:var(--icon-size-mobile)}}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--active .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--disabled .ce-popover-item__icon{-webkit-box-shadow:0 0 0 1px var(--color-border-icon-disabled);box-shadow:0 0 0 1px var(--color-border-icon-disabled)}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--focused:not(.ce-popover-item--no-focus){-webkit-box-shadow:inset 0 0 0px 1px var(--color-shadow-item-focus);box-shadow:inset 0 0 0 1px var(--color-shadow-item-focus)}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}.ce-popover-item:hover .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__icon{color:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}.ce-popover-item--confirmation .ce-popover-item__icon,.ce-popover-item--active .ce-popover-item__icon,.ce-popover-item--focused .ce-popover-item__icon{-webkit-box-shadow:none;box-shadow:none}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}
`;
class bi extends C$3 {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = Ht(() => {
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
    const e = this.nodes.wrapper.querySelector(`.${F$2.CSS.content}`);
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
    e ? this.disableModuleBindings() : this.enableModuleBindings();
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
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
    return t.opened || o.opened || i.opened || e.toolbox.opened;
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof G).some(([e, t]) => t.flipper.hasFocus());
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
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o, ConversionToolbar: i } = this.Editor;
    t.close(), o.close(), i.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and cache a result
   */
  checkIsMobile() {
    this.isMobile = window.innerWidth < rt;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = d$2.getHolder(this.config.holder), this.nodes.wrapper = d$2.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = d$2.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (d$2.get(e))
      return;
    const t = d$2.make("style", null, {
      id: e,
      textContent: gi.toString()
    });
    d$2.prepend(document.head, t);
  }
  /**
   * Bind events on the Editor.js interface
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (e) => {
      this.redactorClicked(e);
    }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (e) => {
      this.documentTouched(e);
    }, !0), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (e) => {
      this.documentTouched(e);
    }, !0), this.readOnlyMutableListeners.on(document, "keydown", (e) => {
      this.documentKeydown(e);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (e) => {
      this.documentClicked(e);
    }, !0), this.readOnlyMutableListeners.on(document, "selectionchange", () => {
      this.selectionChanged();
    }, !0), this.readOnlyMutableListeners.on(window, "resize", () => {
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
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ce((t) => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(kt, {
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
      case B$1.ENTER:
        this.enterPressed(e);
        break;
      case B$1.BACKSPACE:
      case B$1.DELETE:
        this.backspacePressed(e);
        break;
      case B$1.ESC:
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
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor;
    if (o.anyBlockSelected && !m.isSelectionExists) {
      const n = t.removeSelectedBlocks();
      i.setToBlock(t.insertDefaultBlockAtIndex(n, !0), i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor, i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !m.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const n = this.Editor.BlockManager.insert();
      this.Editor.Caret.setToBlock(n), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(n);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    if (!e.isTrusted)
      return;
    const t = e.target;
    this.nodes.holder.contains(t) || m.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
    const i = this.Editor.BlockSettings.nodes.wrapper.contains(t), n = this.Editor.Toolbar.nodes.settingsToggler.contains(t), r = i || n;
    if (this.Editor.BlockSettings.opened && !r) {
      this.Editor.BlockSettings.close();
      const a = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(a);
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
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t), this.Editor.BlockManager.highlightCurrentNode();
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
    const { BlockSelection: t } = this.Editor;
    if (!m.isCollapsed)
      return;
    const o = () => {
      e.stopImmediatePropagation(), e.stopPropagation();
    }, i = e.target, n = e.metaKey || e.ctrlKey;
    if (d$2.isAnchor(i) && n) {
      o();
      const u = i.getAttribute("href"), h = zt(u);
      $t(h);
      return;
    }
    const r = this.Editor.BlockManager.getBlockByIndex(-1), a = d$2.offset(r.holder).bottom, l = e.pageY;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !t.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    a < l) {
      o();
      const { BlockManager: u, Caret: h, Toolbar: f } = this.Editor;
      (!u.lastBlock.tool.isDefault || !u.lastBlock.isEmpty) && u.insertAtEnd(), h.setToTheLastBlock(), f.moveAndOpen(u.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = m.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && m.get().removeAllRanges(), !o) {
      m.range || this.Editor.InlineToolbar.close();
      return;
    }
    const i = o.closest(`.${F$2.CSS.content}`) === null;
    if (i && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true")))
      return;
    this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o);
    const n = i !== !0;
    this.Editor.InlineToolbar.tryToShow(!0, n);
  }
}
const mi = {
  // API Modules
  BlocksAPI: Qt,
  CaretAPI: eo,
  EventsAPI: to,
  I18nAPI: Pe,
  API: oo,
  InlineToolbarAPI: io,
  ListenersAPI: no,
  NotifierAPI: lo,
  ReadOnlyAPI: co,
  SanitizerAPI: mo,
  SaverAPI: ko,
  SelectionAPI: vo,
  StylesAPI: xo,
  ToolbarAPI: wo,
  TooltipAPI: Bo,
  UiAPI: To,
  // Toolbar Modules
  BlockSettings: jo,
  ConversionToolbar: Y,
  Toolbar: Ko,
  InlineToolbar: Xo,
  // Modules
  BlockEvents: Vo,
  BlockManager: Go,
  BlockSelection: Jo,
  Caret: ve,
  CrossBlockSelection: Qo,
  DragNDrop: ei,
  ModificationsObserver: ti,
  Paste: yt,
  ReadOnly: oi,
  RectangleSelection: fe,
  Renderer: ii,
  Saver: ni,
  Tools: It,
  UI: bi
};
class ki {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new we();
    let t, o;
    this.isReady = new Promise((i, n) => {
      t = i, o = n;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: i, Caret: n, UI: r, ModificationsObserver: a } = this.moduleInstances;
      r.checkEmptiness(), a.enable(), this.configuration.autofocus && (n.setToBlock(i.blocks[0], n.positions.START), i.highlightCurrentNode()), t();
    }).catch((i) => {
      L$1(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o, i;
    z(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, Ie(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = it.VERBOSE), Nt(this.config.logLevel), Ie(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && $.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
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
    if (J(t) && !d$2.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && z(t) && !d$2.isElement(t))
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
      (t, o) => t.then(async () => {
        try {
          await this.moduleInstances[o].prepare();
        } catch (i) {
          if (i instanceof lt)
            throw new Error(i.message);
          L$1(`Module ${o} was skipped because of %o`, "warn", i);
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
    Object.entries(mi).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        L$1("[constructModules]", `Module ${e} skipped because`, "error", o);
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
class vi {
  /** Editor version */
  static get version() {
    return "2.28.2";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    z(e) && D$1(e.onReady) && (t = e.onReady);
    const o = new ki(e);
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
        D$1(n.destroy) && n.destroy(), n.listeners.removeAll();
      }), e = null;
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
    }).forEach(([n, r]) => {
      Object.entries(r).forEach(([a, l]) => {
        this[l] = e.moduleInstances.API.methods[n][a];
      });
    });
  }
}

(function(){try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`.link-tool{position:relative}.link-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.link-tool__input-holder{position:relative}.link-tool__input-holder--error .link-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.link-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.link-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.link-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.link-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.link-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.link-tool__progress--loaded{width:100%}.link-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.link-tool__content:after{content:"";clear:both;display:table}.link-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.link-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.link-tool__image{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right}.link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.link-tool__title+.link-tool__anchor{margin-top:25px}.link-tool__description{margin:0 0 20px;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.link-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .link-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)),document.head.appendChild(o);}}catch(t){console.error("vite-plugin-css-injected-by-js",t);}})();
var C$2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function O(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
(function(k) {
  var w = function() {
    try {
      return !!Symbol.iterator;
    } catch {
      return !1;
    }
  }, d = w(), v = function(n) {
    var o = {
      next: function() {
        var e = n.shift();
        return { done: e === void 0, value: e };
      }
    };
    return d && (o[Symbol.iterator] = function() {
      return o;
    }), o;
  }, c = function(n) {
    return encodeURIComponent(n).replace(/%20/g, "+");
  }, i = function(n) {
    return decodeURIComponent(String(n).replace(/\+/g, " "));
  }, a = function() {
    var n = function(e) {
      Object.defineProperty(this, "_entries", { writable: !0, value: {} });
      var s = typeof e;
      if (s !== "undefined")
        if (s === "string")
          e !== "" && this._fromString(e);
        else if (e instanceof n) {
          var h = this;
          e.forEach(function(u, f) {
            h.append(f, u);
          });
        } else if (e !== null && s === "object")
          if (Object.prototype.toString.call(e) === "[object Array]")
            for (var t = 0; t < e.length; t++) {
              var y = e[t];
              if (Object.prototype.toString.call(y) === "[object Array]" || y.length !== 2)
                this.append(y[0], y[1]);
              else
                throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input");
            }
          else
            for (var r in e)
              e.hasOwnProperty(r) && this.append(r, e[r]);
        else
          throw new TypeError("Unsupported input's type for URLSearchParams");
    }, o = n.prototype;
    o.append = function(e, s) {
      e in this._entries ? this._entries[e].push(String(s)) : this._entries[e] = [String(s)];
    }, o.delete = function(e) {
      delete this._entries[e];
    }, o.get = function(e) {
      return e in this._entries ? this._entries[e][0] : null;
    }, o.getAll = function(e) {
      return e in this._entries ? this._entries[e].slice(0) : [];
    }, o.has = function(e) {
      return e in this._entries;
    }, o.set = function(e, s) {
      this._entries[e] = [String(s)];
    }, o.forEach = function(e, s) {
      var h;
      for (var t in this._entries)
        if (this._entries.hasOwnProperty(t)) {
          h = this._entries[t];
          for (var y = 0; y < h.length; y++)
            e.call(s, h[y], t, this);
        }
    }, o.keys = function() {
      var e = [];
      return this.forEach(function(s, h) {
        e.push(h);
      }), v(e);
    }, o.values = function() {
      var e = [];
      return this.forEach(function(s) {
        e.push(s);
      }), v(e);
    }, o.entries = function() {
      var e = [];
      return this.forEach(function(s, h) {
        e.push([h, s]);
      }), v(e);
    }, d && (o[Symbol.iterator] = o.entries), o.toString = function() {
      var e = [];
      return this.forEach(function(s, h) {
        e.push(c(h) + "=" + c(s));
      }), e.join("&");
    }, k.URLSearchParams = n;
  }, p = function() {
    try {
      var n = k.URLSearchParams;
      return new n("?a=1").toString() === "a=1" && typeof n.prototype.set == "function";
    } catch {
      return !1;
    }
  };
  p() || a();
  var l = k.URLSearchParams.prototype;
  typeof l.sort != "function" && (l.sort = function() {
    var n = this, o = [];
    this.forEach(function(s, h) {
      o.push([h, s]), n._entries || n.delete(h);
    }), o.sort(function(s, h) {
      return s[0] < h[0] ? -1 : s[0] > h[0] ? 1 : 0;
    }), n._entries && (n._entries = {});
    for (var e = 0; e < o.length; e++)
      this.append(o[e][0], o[e][1]);
  }), typeof l._fromString != "function" && Object.defineProperty(l, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(n) {
      if (this._entries)
        this._entries = {};
      else {
        var o = [];
        this.forEach(function(t, y) {
          o.push(y);
        });
        for (var e = 0; e < o.length; e++)
          this.delete(o[e]);
      }
      n = n.replace(/^\?/, "");
      for (var s = n.split("&"), h, e = 0; e < s.length; e++)
        h = s[e].split("="), this.append(
          i(h[0]),
          h.length > 1 ? i(h[1]) : ""
        );
    }
  });
})(
  typeof C$2 < "u" ? C$2 : typeof window < "u" ? window : typeof self < "u" ? self : C$2
);
(function(k) {
  var w = function() {
    try {
      var c = new k.URL("b", "http://a");
      return c.pathname = "c d", c.href === "http://a/c%20d" && c.searchParams;
    } catch {
      return !1;
    }
  }, d = function() {
    var c = k.URL, i = function(l, n) {
      typeof l != "string" && (l = String(l));
      var o = document, e;
      if (n && (k.location === void 0 || n !== k.location.href)) {
        o = document.implementation.createHTMLDocument(""), e = o.createElement("base"), e.href = n, o.head.appendChild(e);
        try {
          if (e.href.indexOf(n) !== 0)
            throw new Error(e.href);
        } catch (m) {
          throw new Error("URL unable to set base " + n + " due to " + m);
        }
      }
      var s = o.createElement("a");
      s.href = l, e && (o.body.appendChild(s), s.href = s.href);
      var h = o.createElement("input");
      if (h.type = "url", h.value = l, s.protocol === ":" || !/:/.test(s.href) || !h.checkValidity() && !n)
        throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: s
      });
      var t = new k.URLSearchParams(this.search), y = !0, r = !0, u = this;
      ["append", "delete", "set"].forEach(function(m) {
        var b = t[m];
        t[m] = function() {
          b.apply(t, arguments), y && (r = !1, u.search = t.toString(), r = !0);
        };
      }), Object.defineProperty(this, "searchParams", {
        value: t,
        enumerable: !0
      });
      var f = void 0;
      Object.defineProperty(this, "_updateSearchParams", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function() {
          this.search !== f && (f = this.search, r && (y = !1, this.searchParams._fromString(this.search), y = !0));
        }
      });
    }, a = i.prototype, p = function(l) {
      Object.defineProperty(a, l, {
        get: function() {
          return this._anchorElement[l];
        },
        set: function(n) {
          this._anchorElement[l] = n;
        },
        enumerable: !0
      });
    };
    ["hash", "host", "hostname", "port", "protocol"].forEach(function(l) {
      p(l);
    }), Object.defineProperty(a, "search", {
      get: function() {
        return this._anchorElement.search;
      },
      set: function(l) {
        this._anchorElement.search = l, this._updateSearchParams();
      },
      enumerable: !0
    }), Object.defineProperties(a, {
      toString: {
        get: function() {
          var l = this;
          return function() {
            return l.href;
          };
        }
      },
      href: {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, "");
        },
        set: function(l) {
          this._anchorElement.href = l, this._updateSearchParams();
        },
        enumerable: !0
      },
      pathname: {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, "/");
        },
        set: function(l) {
          this._anchorElement.pathname = l;
        },
        enumerable: !0
      },
      origin: {
        get: function() {
          var l = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], n = this._anchorElement.port != l && this._anchorElement.port !== "";
          return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (n ? ":" + this._anchorElement.port : "");
        },
        enumerable: !0
      },
      password: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      },
      username: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      }
    }), i.createObjectURL = function(l) {
      return c.createObjectURL.apply(c, arguments);
    }, i.revokeObjectURL = function(l) {
      return c.revokeObjectURL.apply(c, arguments);
    }, k.URL = i;
  };
  if (w() || d(), k.location !== void 0 && !("origin" in k.location)) {
    var v = function() {
      return k.location.protocol + "//" + k.location.hostname + (k.location.port ? ":" + k.location.port : "");
    };
    try {
      Object.defineProperty(k.location, "origin", {
        get: v,
        enumerable: !0
      });
    } catch {
      setInterval(function() {
        k.location.origin = v();
      }, 100);
    }
  }
})(
  typeof C$2 < "u" ? C$2 : typeof window < "u" ? window : typeof self < "u" ? self : C$2
);
var j$1 = { exports: {} };
(function(k, w) {
  (function(d, v) {
    k.exports = v();
  })(window, function() {
    return function(d) {
      var v = {};
      function c(i) {
        if (v[i])
          return v[i].exports;
        var a = v[i] = { i, l: !1, exports: {} };
        return d[i].call(a.exports, a, a.exports, c), a.l = !0, a.exports;
      }
      return c.m = d, c.c = v, c.d = function(i, a, p) {
        c.o(i, a) || Object.defineProperty(i, a, { enumerable: !0, get: p });
      }, c.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, c.t = function(i, a) {
        if (1 & a && (i = c(i)), 8 & a || 4 & a && typeof i == "object" && i && i.__esModule)
          return i;
        var p = /* @__PURE__ */ Object.create(null);
        if (c.r(p), Object.defineProperty(p, "default", { enumerable: !0, value: i }), 2 & a && typeof i != "string")
          for (var l in i)
            c.d(p, l, (function(n) {
              return i[n];
            }).bind(null, l));
        return p;
      }, c.n = function(i) {
        var a = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return c.d(a, "a", a), a;
      }, c.o = function(i, a) {
        return Object.prototype.hasOwnProperty.call(i, a);
      }, c.p = "", c(c.s = 3);
    }([function(d, v) {
      var c;
      c = function() {
        return this;
      }();
      try {
        c = c || new Function("return this")();
      } catch {
        typeof window == "object" && (c = window);
      }
      d.exports = c;
    }, function(d, v, c) {
      (function(i) {
        var a = c(2), p = setTimeout;
        function l() {
        }
        function n(r) {
          if (!(this instanceof n))
            throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(r, this);
        }
        function o(r, u) {
          for (; r._state === 3; )
            r = r._value;
          r._state !== 0 ? (r._handled = !0, n._immediateFn(function() {
            var f = r._state === 1 ? u.onFulfilled : u.onRejected;
            if (f !== null) {
              var m;
              try {
                m = f(r._value);
              } catch (b) {
                return void s(u.promise, b);
              }
              e(u.promise, m);
            } else
              (r._state === 1 ? e : s)(u.promise, r._value);
          })) : r._deferreds.push(u);
        }
        function e(r, u) {
          try {
            if (u === r)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var f = u.then;
              if (u instanceof n)
                return r._state = 3, r._value = u, void h(r);
              if (typeof f == "function")
                return void y((m = f, b = u, function() {
                  m.apply(b, arguments);
                }), r);
            }
            r._state = 1, r._value = u, h(r);
          } catch (g) {
            s(r, g);
          }
          var m, b;
        }
        function s(r, u) {
          r._state = 2, r._value = u, h(r);
        }
        function h(r) {
          r._state === 2 && r._deferreds.length === 0 && n._immediateFn(function() {
            r._handled || n._unhandledRejectionFn(r._value);
          });
          for (var u = 0, f = r._deferreds.length; u < f; u++)
            o(r, r._deferreds[u]);
          r._deferreds = null;
        }
        function t(r, u, f) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof u == "function" ? u : null, this.promise = f;
        }
        function y(r, u) {
          var f = !1;
          try {
            r(function(m) {
              f || (f = !0, e(u, m));
            }, function(m) {
              f || (f = !0, s(u, m));
            });
          } catch (m) {
            if (f)
              return;
            f = !0, s(u, m);
          }
        }
        n.prototype.catch = function(r) {
          return this.then(null, r);
        }, n.prototype.then = function(r, u) {
          var f = new this.constructor(l);
          return o(this, new t(r, u, f)), f;
        }, n.prototype.finally = a.a, n.all = function(r) {
          return new n(function(u, f) {
            if (!r || r.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var m = Array.prototype.slice.call(r);
            if (m.length === 0)
              return u([]);
            var b = m.length;
            function g(T, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var S = E.then;
                  if (typeof S == "function")
                    return void S.call(E, function(L) {
                      g(T, L);
                    }, f);
                }
                m[T] = E, --b == 0 && u(m);
              } catch (L) {
                f(L);
              }
            }
            for (var _ = 0; _ < m.length; _++)
              g(_, m[_]);
          });
        }, n.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === n ? r : new n(function(u) {
            u(r);
          });
        }, n.reject = function(r) {
          return new n(function(u, f) {
            f(r);
          });
        }, n.race = function(r) {
          return new n(function(u, f) {
            for (var m = 0, b = r.length; m < b; m++)
              r[m].then(u, f);
          });
        }, n._immediateFn = typeof i == "function" && function(r) {
          i(r);
        } || function(r) {
          p(r, 0);
        }, n._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, v.a = n;
      }).call(this, c(5).setImmediate);
    }, function(d, v, c) {
      v.a = function(i) {
        var a = this.constructor;
        return this.then(function(p) {
          return a.resolve(i()).then(function() {
            return p;
          });
        }, function(p) {
          return a.resolve(i()).then(function() {
            return a.reject(p);
          });
        });
      };
    }, function(d, v, c) {
      function i(t) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
          return typeof y;
        } : function(y) {
          return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
        })(t);
      }
      c(4);
      var a, p, l, n, o, e, s = c(8), h = (p = function(t) {
        return new Promise(function(y, r) {
          t = n(t), t = o(t);
          var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var b = t.headers[m];
            u.setRequestHeader(m, b);
          });
          var f = t.ratio;
          u.upload.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * f / 100);
            t.progress(g);
          }, !1), u.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * (100 - f) / 100) + f;
            t.progress(g);
          }, !1), u.onreadystatechange = function() {
            if (u.readyState === 4) {
              var m = u.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var b = s.parseHeaders(u.getAllResponseHeaders()), g = { body: m, code: u.status, headers: b };
              u.status === 200 ? y(g) : r(g);
            }
          }, u.send(t.data);
        });
      }, l = function(t) {
        return t.method = "POST", p(t);
      }, n = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && i(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(a).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(y) {
        }, t.beforeSend = t.beforeSend || function(y) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, o = function(t) {
        switch (t.method) {
          case "GET":
            var y = e(t.data, a.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + y : t.url + "?" + y;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var r = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || a.JSON;
            }(t);
            (s.isFormData(t.data) || s.isFormElement(t.data)) && (r = a.FORM), t.data = e(t.data, r), r !== h.contentType.FORM && (t.headers["content-type"] = r);
        }
        return t;
      }, e = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case a.URLENCODED:
            return s.urlEncode(t);
          case a.JSON:
            return s.jsonEncode(t);
          case a.FORM:
            return s.formEncode(t);
          default:
            return t;
        }
      }, { contentType: a = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: p, get: function(t) {
        return t.method = "GET", p(t);
      }, post: l, transport: function(t) {
        return t = n(t), s.selectFiles(t).then(function(y) {
          for (var r = new FormData(), u = 0; u < y.length; u++)
            r.append(t.fieldName, y[u], y[u].name);
          return s.isObject(t.data) && Object.keys(t.data).forEach(function(f) {
            var m = t.data[f];
            r.append(f, m);
          }), t.beforeSend && t.beforeSend(y), t.data = r, l(t);
        });
      }, selectFiles: function(t) {
        return delete (t = n(t)).beforeSend, s.selectFiles(t);
      } });
      d.exports = h;
    }, function(d, v, c) {
      c.r(v);
      var i = c(1);
      window.Promise = window.Promise || i.a;
    }, function(d, v, c) {
      (function(i) {
        var a = i !== void 0 && i || typeof self < "u" && self || window, p = Function.prototype.apply;
        function l(n, o) {
          this._id = n, this._clearFn = o;
        }
        v.setTimeout = function() {
          return new l(p.call(setTimeout, a, arguments), clearTimeout);
        }, v.setInterval = function() {
          return new l(p.call(setInterval, a, arguments), clearInterval);
        }, v.clearTimeout = v.clearInterval = function(n) {
          n && n.close();
        }, l.prototype.unref = l.prototype.ref = function() {
        }, l.prototype.close = function() {
          this._clearFn.call(a, this._id);
        }, v.enroll = function(n, o) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = o;
        }, v.unenroll = function(n) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = -1;
        }, v._unrefActive = v.active = function(n) {
          clearTimeout(n._idleTimeoutId);
          var o = n._idleTimeout;
          o >= 0 && (n._idleTimeoutId = setTimeout(function() {
            n._onTimeout && n._onTimeout();
          }, o));
        }, c(6), v.setImmediate = typeof self < "u" && self.setImmediate || i !== void 0 && i.setImmediate || this && this.setImmediate, v.clearImmediate = typeof self < "u" && self.clearImmediate || i !== void 0 && i.clearImmediate || this && this.clearImmediate;
      }).call(this, c(0));
    }, function(d, v, c) {
      (function(i, a) {
        (function(p, l) {
          if (!p.setImmediate) {
            var n, o, e, s, h, t = 1, y = {}, r = !1, u = p.document, f = Object.getPrototypeOf && Object.getPrototypeOf(p);
            f = f && f.setTimeout ? f : p, {}.toString.call(p.process) === "[object process]" ? n = function(g) {
              a.nextTick(function() {
                b(g);
              });
            } : function() {
              if (p.postMessage && !p.importScripts) {
                var g = !0, _ = p.onmessage;
                return p.onmessage = function() {
                  g = !1;
                }, p.postMessage("", "*"), p.onmessage = _, g;
              }
            }() ? (s = "setImmediate$" + Math.random() + "$", h = function(g) {
              g.source === p && typeof g.data == "string" && g.data.indexOf(s) === 0 && b(+g.data.slice(s.length));
            }, p.addEventListener ? p.addEventListener("message", h, !1) : p.attachEvent("onmessage", h), n = function(g) {
              p.postMessage(s + g, "*");
            }) : p.MessageChannel ? ((e = new MessageChannel()).port1.onmessage = function(g) {
              b(g.data);
            }, n = function(g) {
              e.port2.postMessage(g);
            }) : u && "onreadystatechange" in u.createElement("script") ? (o = u.documentElement, n = function(g) {
              var _ = u.createElement("script");
              _.onreadystatechange = function() {
                b(g), _.onreadystatechange = null, o.removeChild(_), _ = null;
              }, o.appendChild(_);
            }) : n = function(g) {
              setTimeout(b, 0, g);
            }, f.setImmediate = function(g) {
              typeof g != "function" && (g = new Function("" + g));
              for (var _ = new Array(arguments.length - 1), T = 0; T < _.length; T++)
                _[T] = arguments[T + 1];
              var E = { callback: g, args: _ };
              return y[t] = E, n(t), t++;
            }, f.clearImmediate = m;
          }
          function m(g) {
            delete y[g];
          }
          function b(g) {
            if (r)
              setTimeout(b, 0, g);
            else {
              var _ = y[g];
              if (_) {
                r = !0;
                try {
                  (function(T) {
                    var E = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(S[0]);
                        break;
                      case 2:
                        E(S[0], S[1]);
                        break;
                      case 3:
                        E(S[0], S[1], S[2]);
                        break;
                      default:
                        E.apply(l, S);
                    }
                  })(_);
                } finally {
                  m(g), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, c(0), c(7));
    }, function(d, v) {
      var c, i, a = d.exports = {};
      function p() {
        throw new Error("setTimeout has not been defined");
      }
      function l() {
        throw new Error("clearTimeout has not been defined");
      }
      function n(f) {
        if (c === setTimeout)
          return setTimeout(f, 0);
        if ((c === p || !c) && setTimeout)
          return c = setTimeout, setTimeout(f, 0);
        try {
          return c(f, 0);
        } catch {
          try {
            return c.call(null, f, 0);
          } catch {
            return c.call(this, f, 0);
          }
        }
      }
      (function() {
        try {
          c = typeof setTimeout == "function" ? setTimeout : p;
        } catch {
          c = p;
        }
        try {
          i = typeof clearTimeout == "function" ? clearTimeout : l;
        } catch {
          i = l;
        }
      })();
      var o, e = [], s = !1, h = -1;
      function t() {
        s && o && (s = !1, o.length ? e = o.concat(e) : h = -1, e.length && y());
      }
      function y() {
        if (!s) {
          var f = n(t);
          s = !0;
          for (var m = e.length; m; ) {
            for (o = e, e = []; ++h < m; )
              o && o[h].run();
            h = -1, m = e.length;
          }
          o = null, s = !1, function(b) {
            if (i === clearTimeout)
              return clearTimeout(b);
            if ((i === l || !i) && clearTimeout)
              return i = clearTimeout, clearTimeout(b);
            try {
              i(b);
            } catch {
              try {
                return i.call(null, b);
              } catch {
                return i.call(this, b);
              }
            }
          }(f);
        }
      }
      function r(f, m) {
        this.fun = f, this.array = m;
      }
      function u() {
      }
      a.nextTick = function(f) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var b = 1; b < arguments.length; b++)
            m[b - 1] = arguments[b];
        e.push(new r(f, m)), e.length !== 1 || s || n(y);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = u, a.addListener = u, a.once = u, a.off = u, a.removeListener = u, a.removeAllListeners = u, a.emit = u, a.prependListener = u, a.prependOnceListener = u, a.listeners = function(f) {
        return [];
      }, a.binding = function(f) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function() {
        return "/";
      }, a.chdir = function(f) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function() {
        return 0;
      };
    }, function(d, v, c) {
      function i(p, l) {
        for (var n = 0; n < l.length; n++) {
          var o = l[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(p, o.key, o);
        }
      }
      var a = c(9);
      d.exports = function() {
        function p() {
          (function(e, s) {
            if (!(e instanceof s))
              throw new TypeError("Cannot call a class as a function");
          })(this, p);
        }
        var l, n, o;
        return l = p, o = [{ key: "urlEncode", value: function(e) {
          return a(e);
        } }, { key: "jsonEncode", value: function(e) {
          return JSON.stringify(e);
        } }, { key: "formEncode", value: function(e) {
          if (this.isFormData(e))
            return e;
          if (this.isFormElement(e))
            return new FormData(e);
          if (this.isObject(e)) {
            var s = new FormData();
            return Object.keys(e).forEach(function(h) {
              var t = e[h];
              s.append(h, t);
            }), s;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(e) {
          return Object.prototype.toString.call(e) === "[object Object]";
        } }, { key: "isFormData", value: function(e) {
          return e instanceof FormData;
        } }, { key: "isFormElement", value: function(e) {
          return e instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(s, h) {
            var t = document.createElement("INPUT");
            t.type = "file", e.multiple && t.setAttribute("multiple", "multiple"), e.accept && t.setAttribute("accept", e.accept), t.style.display = "none", document.body.appendChild(t), t.addEventListener("change", function(y) {
              var r = y.target.files;
              s(r), document.body.removeChild(t);
            }, !1), t.click();
          });
        } }, { key: "parseHeaders", value: function(e) {
          var s = e.trim().split(/[\r\n]+/), h = {};
          return s.forEach(function(t) {
            var y = t.split(": "), r = y.shift(), u = y.join(": ");
            r && (h[r] = u);
          }), h;
        } }], (n = null) && i(l.prototype, n), o && i(l, o), p;
      }();
    }, function(d, v) {
      var c = function(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, i = function(a, p, l, n) {
        return p = p || null, l = l || "&", n = n || null, a ? function(o) {
          for (var e = new Array(), s = 0; s < o.length; s++)
            o[s] && e.push(o[s]);
          return e;
        }(Object.keys(a).map(function(o) {
          var e, s, h = o;
          if (n && (h = n + "[" + h + "]"), typeof a[o] == "object" && a[o] !== null)
            e = i(a[o], null, l, h);
          else {
            p && (s = h, h = !isNaN(parseFloat(s)) && isFinite(s) ? p + Number(h) : h);
            var t = a[o];
            t = (t = (t = (t = t === !0 ? "1" : t) === !1 ? "0" : t) === 0 ? "0" : t) || "", e = c(h) + "=" + c(t);
          }
          return e;
        })).join(l).replace(/[!'()*]/g, "") : "";
      };
      d.exports = i;
    }]);
  });
})(j$1);
var P$1 = j$1.exports;
const R$1 = /* @__PURE__ */ O(P$1), F$1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.569 6.39509 13.9269 6.25143 12.8271 7.17675L11.39 8.38588C10.0935 9.47674 9.95704 11.4241 11.0887 12.6852L11.12 12.72"/></svg>';
let I$1 = class I {
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
      icon: F$1,
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
  constructor({ data: w, config: d, api: v, readOnly: c }) {
    this.api = v, this.readOnly = c, this.config = {
      endpoint: d.endpoint || "",
      headers: d.headers || {}
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
    }, this.data = w;
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
  set data(w) {
    this._data = Object.assign({}, {
      link: w.link || this._data.link,
      meta: w.meta || this._data.meta
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
    const w = this.make("div", this.CSS.inputHolder);
    return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly
    }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Link"), this.readOnly || (this.nodes.input.addEventListener("paste", (d) => {
      this.startFetching(d);
    }), this.nodes.input.addEventListener("keydown", (d) => {
      const [v, c] = [13, 65], i = d.ctrlKey || d.metaKey;
      switch (d.keyCode) {
        case v:
          d.preventDefault(), d.stopPropagation(), this.startFetching(d);
          break;
        case c:
          i && this.selectLinkUrl(d);
          break;
      }
    })), w.appendChild(this.nodes.progress), w.appendChild(this.nodes.input), w;
  }
  /**
   * Activates link data fetching by url
   *
   * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
   */
  startFetching(w) {
    let d = this.nodes.input.textContent;
    w.type === "paste" && (d = (w.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(d);
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
  selectLinkUrl(w) {
    w.preventDefault(), w.stopPropagation();
    const d = window.getSelection(), v = new Range(), a = d.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
    v.selectNodeContents(a), d.removeAllRanges(), d.addRange(v);
  }
  /**
   * Prepare link preview holder
   *
   * @returns {HTMLElement}
   */
  prepareLinkPreview() {
    const w = this.make("a", this.CSS.linkContent, {
      target: "_blank",
      rel: "nofollow noindex noreferrer"
    });
    return this.nodes.linkImage = this.make("div", this.CSS.linkImage), this.nodes.linkTitle = this.make("div", this.CSS.linkTitle), this.nodes.linkDescription = this.make("p", this.CSS.linkDescription), this.nodes.linkText = this.make("span", this.CSS.linkText), w;
  }
  /**
   * Compose link preview from fetched data
   *
   * @param {metaData} meta - link meta data
   */
  showLinkPreview({ image: w, title: d, description: v }) {
    this.nodes.container.appendChild(this.nodes.linkContent), w && w.url && (this.nodes.linkImage.style.backgroundImage = "url(" + w.url + ")", this.nodes.linkContent.appendChild(this.nodes.linkImage)), d && (this.nodes.linkTitle.textContent = d, this.nodes.linkContent.appendChild(this.nodes.linkTitle)), v && (this.nodes.linkDescription.textContent = v, this.nodes.linkContent.appendChild(this.nodes.linkDescription)), this.nodes.linkContent.classList.add(this.CSS.linkContentRendered), this.nodes.linkContent.setAttribute("href", this.data.link), this.nodes.linkContent.appendChild(this.nodes.linkText);
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
    return new Promise((w) => {
      this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(w, 500);
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
  async fetchLinkData(w) {
    this.showProgress(), this.data = { link: w };
    try {
      const { body: d } = await R$1.get({
        url: this.config.endpoint,
        headers: this.config.headers,
        data: {
          url: w
        }
      });
      this.onFetch(d);
    } catch {
      this.fetchingFailed(this.api.i18n.t("Couldn't fetch the link data"));
    }
  }
  /**
   * Link data fetching callback
   *
   * @param {UploadResponseFormat} response - backend response
   */
  onFetch(w) {
    if (!w || !w.success) {
      this.fetchingFailed(this.api.i18n.t("Couldn't get this link data, try the other one"));
      return;
    }
    const d = w.meta, v = w.link || this.data.link;
    if (this.data = {
      meta: d,
      link: v
    }, !d) {
      this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
      return;
    }
    this.hideProgress().then(() => {
      this.nodes.inputHolder.remove(), this.showLinkPreview(d);
    });
  }
  /**
   * Handle link fetching errors
   *
   * @private
   *
   * @param {string} errorMessage - message to explain user what he should do
   */
  fetchingFailed(w) {
    this.api.notifier.show({
      message: w,
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
  make(w, d = null, v = {}) {
    const c = document.createElement(w);
    Array.isArray(d) ? c.classList.add(...d) : d && c.classList.add(d);
    for (const i in v)
      c[i] = v[i];
    return c;
  }
};

(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}.ce-header[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;display:none;cursor:text}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}")),document.head.appendChild(e);}}catch(t){console.error("vite-plugin-css-injected-by-js",t);}})();
const i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', l$1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', d$1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', u$1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
let c$1 = class c {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: HeaderData, config: HeaderConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: s, readOnly: r }) {
    this.api = s, this.readOnly = r, this._CSS = {
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
        svg: i
      },
      {
        number: 2,
        tag: "H2",
        svg: a
      },
      {
        number: 3,
        tag: "H3",
        svg: l$1
      },
      {
        number: 4,
        tag: "H4",
        svg: o
      },
      {
        number: 5,
        tag: "H5",
        svg: h
      },
      {
        number: 6,
        tag: "H6",
        svg: d$1
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
    let s = this.defaultLevel.number;
    switch (t.tagName) {
      case "H1":
        s = 1;
        break;
      case "H2":
        s = 2;
        break;
      case "H3":
        s = 3;
        break;
      case "H4":
        s = 4;
        break;
      case "H5":
        s = 5;
        break;
      case "H6":
        s = 6;
        break;
    }
    this._settings.levels && (s = this._settings.levels.reduce((r, n) => Math.abs(n - s) < Math.abs(r - s) ? n : r)), this.data = {
      level: s,
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
      icon: u$1,
      title: "Heading"
    };
  }
};

(function(){try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-nested-list{margin:0;padding:0;outline:none;counter-reset:item;list-style:none}.cdx-nested-list__item{line-height:1.6em;display:flex;margin:2px 0}.cdx-nested-list__item [contenteditable]{outline:none}.cdx-nested-list__item-body{flex-grow:2}.cdx-nested-list__item-content,.cdx-nested-list__item-children{flex-basis:100%}.cdx-nested-list__item-content{word-break:break-word;white-space:pre-wrap}.cdx-nested-list__item:before{counter-increment:item;margin-right:5px;white-space:nowrap}.cdx-nested-list--ordered>.cdx-nested-list__item:before{content:counters(item,".") ". "}.cdx-nested-list--unordered>.cdx-nested-list__item:before{content:"•"}.cdx-nested-list__settings{display:flex}.cdx-nested-list__settings .cdx-settings-button{width:50%}')),document.head.appendChild(e);}}catch(t){console.error("vite-plugin-css-injected-by-js",t);}})();
function p(d, e = null, t = {}) {
  const r = document.createElement(d);
  Array.isArray(e) ? r.classList.add(...e) : e && r.classList.add(e);
  for (const s in t)
    r[s] = t[s];
  return r;
}
function g(d) {
  const e = p("div");
  return e.appendChild(d), e.innerHTML;
}
function C$1(d) {
  let e;
  return d.nodeType !== Node.ELEMENT_NODE ? e = d.textContent : (e = d.innerHTML, e = e.replaceAll("<br>", "")), e.trim().length === 0;
}
class c {
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
    const e = c.range, t = p("span");
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
    let r = t.startContainer;
    r.nodeType !== Node.ELEMENT_NODE && (r = r.parentNode);
    const s = r.closest("[contenteditable]");
    t.deleteContents();
    const n = t.cloneRange();
    return n.selectNodeContents(s), n.setStart(t.endContainer, t.endOffset), n.extractContents();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param {HTMLElement} element - element where to set focus
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  static focus(e, t = !0) {
    const r = document.createRange(), s = window.getSelection();
    r.selectNodeContents(e), r.collapse(t), s.removeAllRanges(), s.addRange(r);
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
    return c.getHigherLevelSiblings(t, "left").every((n) => C$1(n));
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
    let r = e;
    const s = [];
    for (; r.parentNode && r.parentNode.contentEditable !== "true"; )
      r = r.parentNode;
    const n = t === "left" ? "previousSibling" : "nextSibling";
    for (; r[n]; )
      r = r[n], s.push(r);
    return s;
  }
}
const y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
class u {
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
      icon: S,
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
  constructor({ data: e, config: t, api: r, readOnly: s }) {
    this.nodes = {
      wrapper: null
    }, this.api = r, this.readOnly = s, this.config = t, this.defaultListStyle = this.config.defaultStyle === "ordered" ? "ordered" : "unordered";
    const n = {
      style: this.defaultListStyle,
      items: []
    };
    this.data = e && Object.keys(e).length ? e : n, this.caret = new c();
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
        icon: y
      },
      {
        name: "ordered",
        label: this.api.i18n.t("Ordered"),
        icon: S
      }
    ].map((t) => ({
      name: t.name,
      icon: t.icon,
      label: t.label,
      isActive: this.data.style === t.name,
      closeOnActivate: !0,
      onActivate: () => {
        this.listStyle = t.name;
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
    const r = this.nodes.wrapper;
    r && r.parentNode.replaceChild(this.render(), r);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */
  pasteHandler(e) {
    const { tagName: t } = e;
    let r, s;
    switch (t) {
      case "OL":
        r = "ordered", s = "ol";
        break;
      case "UL":
      case "LI":
        r = "unordered", s = "ul";
    }
    const n = {
      style: r,
      items: []
    }, o = (l) => Array.from(l.querySelectorAll(":scope > li")).map((i) => {
      var m;
      const a = i.querySelector(`:scope > ${s}`), f = a ? o(a) : [];
      return {
        content: ((m = i == null ? void 0 : i.firstChild) == null ? void 0 : m.textContent) || "",
        items: f
      };
    });
    return n.items = o(e), n;
  }
  /**
   * Renders children list
   *
   * @param {ListItem[]} items - items data to append
   * @param {Element} parentItem - where to append
   * @returns {void}
   */
  appendItems(e, t) {
    e.forEach((r) => {
      const s = this.createItem(r.content, r.items);
      t.appendChild(s);
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
    const r = p("li", this.CSS.item), s = p("div", this.CSS.itemBody), n = p("div", this.CSS.itemContent, {
      innerHTML: e,
      contentEditable: !this.readOnly
    });
    return s.appendChild(n), r.appendChild(s), t && t.length > 0 && this.addChildrenList(r, t), r;
  }
  /**
   * Extracts tool's data from the DOM
   *
   * @returns {ListData}
   */
  save() {
    const e = (t) => Array.from(t.querySelectorAll(`:scope > .${this.CSS.item}`)).map((s) => {
      const n = s.querySelector(`.${this.CSS.itemChildren}`), o = this.getItemContent(s), l = n ? e(n) : [];
      return {
        content: o,
        items: l
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
    const r = e.querySelector(`.${this.CSS.itemBody}`), s = this.makeListWrapper(void 0, [this.CSS.itemChildren]);
    this.appendItems(t, s), r.appendChild(s);
  }
  /**
   * Creates main <ul> or <ol> tag depended on style
   *
   * @param {string} [style] - 'ordered' or 'unordered'
   * @param {string[]} [classes] - additional classes to append
   * @returns {HTMLOListElement|HTMLUListElement}
   */
  makeListWrapper(e = this.listStyle, t = []) {
    const r = e === "ordered" ? "ol" : "ul", s = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    return t.push(s), p(r, [this.CSS.wrapper, ...t]);
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
    t.push(this.nodes.wrapper), t.forEach((r) => {
      r.classList.toggle(this.CSS.wrapperUnordered, e === "unordered"), r.classList.toggle(this.CSS.wrapperOrdered, e === "ordered");
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
    const r = this.getItemContent(t).trim().length === 0, s = t.parentNode === this.nodes.wrapper, n = t.nextElementSibling === null;
    if (s && n && r) {
      this.getOutOfList();
      return;
    } else if (n && r) {
      this.unshiftItem();
      return;
    }
    const o = c.extractFragmentFromCaretPositionTillTheEnd(), l = g(o), h = t.querySelector(`.${this.CSS.itemChildren}`), i = this.createItem(l, void 0);
    h && Array.from(h.querySelectorAll(`.${this.CSS.item}`)).length > 0 ? h.prepend(i) : t.after(i), this.focusItem(i);
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
    const r = t.querySelector(`.${this.CSS.itemChildren}`);
    r.children.length === 0 && r.remove();
  }
  /**
   * Return the item content
   *
   * @param {Element} item - item wrapper (<li>)
   * @returns {string}
   */
  getItemContent(e) {
    const t = e.querySelector(`.${this.CSS.itemContent}`);
    return C$1(t) ? "" : t.innerHTML;
  }
  /**
   * Sets focus to the item's content
   *
   * @param {Element} item - item (<li>) to select
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  focusItem(e, t = !0) {
    const r = e.querySelector(`.${this.CSS.itemContent}`);
    c.focus(r, t);
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
    if (!c.isAtStart())
      return;
    e.preventDefault();
    const t = this.currentItem, r = t.previousSibling, s = t.parentNode.closest(`.${this.CSS.item}`);
    if (!r && !s)
      return;
    e.stopPropagation();
    let n;
    if (r) {
      const a = r.querySelectorAll(`.${this.CSS.item}`);
      n = Array.from(a).pop() || r;
    } else
      n = s;
    const o = c.extractFragmentFromCaretPositionTillTheEnd(), l = g(o), h = n.querySelector(`.${this.CSS.itemContent}`);
    c.focus(h, !1), this.caret.save(), h.insertAdjacentHTML("beforeend", l);
    let i = t.querySelectorAll(`.${this.CSS.itemChildren} > .${this.CSS.item}`);
    i = Array.from(i), i = i.filter((a) => a.parentNode.closest(`.${this.CSS.item}`) === t), i.reverse().forEach((a) => {
      r ? n.after(a) : t.after(a);
    }), t.remove(), this.caret.restore();
  }
  /**
   * Add indentation to current item
   *
   * @param {KeyboardEvent} event - keydown
   */
  addTab(e) {
    e.stopPropagation(), e.preventDefault();
    const t = this.currentItem, r = t.previousSibling;
    if (!r)
      return;
    const n = r.querySelector(`.${this.CSS.itemChildren}`);
    if (this.caret.save(), n)
      n.appendChild(t);
    else {
      const o = this.makeListWrapper(void 0, [this.CSS.itemChildren]), l = r.querySelector(`.${this.CSS.itemBody}`);
      o.appendChild(t), l.appendChild(o);
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
    return e.items.map((t) => `${t.content} ${u.joinRecursive(t)}`).join("");
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      export: (e) => u.joinRecursive(e),
      import: (e) => ({
        items: [{
          content: e,
          items: []
        }],
        style: "unordered"
      })
    };
  }
}

const l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>', t1 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var debounce$2 = {exports: {}};

function debounce(function_, wait = 100, options = {}) {
	if (typeof function_ !== 'function') {
		throw new TypeError(`Expected the first parameter to be a function, got \`${typeof function_}\`.`);
	}

	if (wait < 0) {
		throw new RangeError('`wait` must not be negative.');
	}

	// TODO: Deprecate the boolean parameter at some point.
	const {immediate} = typeof options === 'boolean' ? {immediate: options} : options;

	let storedContext;
	let storedArguments;
	let timeoutId;
	let timestamp;
	let result;

	function later() {
		const last = Date.now() - timestamp;

		if (last < wait && last >= 0) {
			timeoutId = setTimeout(later, wait - last);
		} else {
			timeoutId = undefined;

			if (!immediate) {
				const callContext = storedContext;
				const callArguments = storedArguments;
				storedContext = undefined;
				storedArguments = undefined;
				result = function_.apply(callContext, callArguments);
			}
		}
	}

	const debounced = function (...arguments_) {
		if (storedContext && this !== storedContext) {
			throw new Error('Debounced method called with different contexts.');
		}

		storedContext = this; // eslint-disable-line unicorn/no-this-assignment
		storedArguments = arguments_;
		timestamp = Date.now();

		const callNow = immediate && !timeoutId;

		if (!timeoutId) {
			timeoutId = setTimeout(later, wait);
		}

		if (callNow) {
			const callContext = storedContext;
			const callArguments = storedArguments;
			storedContext = undefined;
			storedArguments = undefined;
			result = function_.apply(callContext, callArguments);
		}

		return result;
	};

	debounced.clear = () => {
		if (!timeoutId) {
			return;
		}

		clearTimeout(timeoutId);
		timeoutId = undefined;
	};

	debounced.flush = () => {
		if (!timeoutId) {
			return;
		}

		const callContext = storedContext;
		const callArguments = storedArguments;
		storedContext = undefined;
		storedArguments = undefined;
		result = function_.apply(callContext, callArguments);

		clearTimeout(timeoutId);
		timeoutId = undefined;
	};

	return debounced;
}

// Adds compatibility for ES modules
debounce$2.exports.debounce = debounce;

debounce$2.exports = debounce;

var debounceExports = debounce$2.exports;
var debounce$1 = /*@__PURE__*/getDefaultExportFromCjs(debounceExports);

class Embed {
    api;
    nodes;
    readOnly;
    _data;
    static services;
    constructor({ data, api, readOnly, }) {
        this.api = api;
        this.nodes = {
            wrapper: null,
            container: null,
            progress: null,
            input: null,
            inputHolder: null,
        };
        this._data =
            Object.keys(data).length !== 0 ? data : undefined;
        this.readOnly = readOnly;
    }
    render() {
        if (!this._data) {
            this.nodes.wrapper = this.make('div', this.CSS.baseClass);
            this.nodes.container = this.make('div', this.CSS.container);
            this.nodes.inputHolder = this.makeInputHolder();
            this.nodes.container.appendChild(this.nodes.inputHolder);
            this.nodes.wrapper.appendChild(this.nodes.container);
        }
        else {
            this.nodes.wrapper =
                this.makeEmbed() ?? this.make('div', this.CSS.baseClass);
        }
        return this.nodes.wrapper;
    }
    makeEmbed() {
        this.showProgress();
        if (!this.data || !Embed.services)
            return null;
        const { html } = Embed.services[this.data.service];
        const wrapper = this.make('div', this.CSS.baseClass);
        const container = this.make('div', this.CSS.container);
        const caption = this.make('div', [this.CSS.container, this.CSS.input], {
            // @ts-ignore
            contentEditable: `${!this.readOnly}`,
        });
        const template = document.createElement('template');
        caption.contentEditable = `${!this.readOnly}`;
        caption.dataset.placeholder = this.api.i18n.t('Enter a caption');
        caption.innerHTML = this.data.caption || '';
        template.innerHTML = html;
        template.content.firstChild?.setAttribute('src', this.data.embed);
        template.content.firstChild?.classList.add(this.CSS.content);
        this.nodes.container = container;
        const embedIsReady = this.embedIsReady(this.nodes.container);
        if (template.content.firstChild) {
            container.appendChild(template.content.firstChild);
        }
        container.appendChild(caption);
        embedIsReady.then(() => {
            this.hideProgress();
        });
        wrapper.appendChild(container);
        return wrapper;
    }
    // private createPreloader() {
    //   const preloader = document.createElement("preloader");
    //   const url = document.createElement("div");
    //   url.textContent = this.data.source;
    //   preloader.classList.add(this.CSS.preloader);
    //   url.classList.add(this.CSS.url);
    //   preloader.appendChild(url);
    //   return preloader;
    // }
    async embedIsReady(targetNode) {
        const PRELOADER_DELAY = 450;
        let observer = null;
        return new Promise((resolve, _reject) => {
            observer = new MutationObserver(debounce$1(resolve, PRELOADER_DELAY));
            observer.observe(targetNode, {
                childList: true,
                subtree: true,
            });
        }).then(() => {
            observer?.disconnect();
        });
    }
    makeInputHolder() {
        const inputHolder = this.make('div', this.CSS.inputHolder);
        this.nodes.progress = this.make('label', this.CSS.progress);
        this.nodes.input = this.make('div', [this.CSS.input, this.CSS.inputEl], {
            // @ts-ignore
            contentEditable: !this.readOnly,
        });
        this.nodes.input.dataset.placeholder = this.api.i18n.t('Link');
        this.nodes.input.addEventListener('keydown', (event) => {
            const [ENTER, A] = [13, 65];
            const cmdPressed = event.ctrlKey || event.metaKey;
            switch (event.keyCode) {
                case ENTER:
                    event.preventDefault();
                    event.stopPropagation();
                    if (event.target &&
                        'textContent' in event.target &&
                        // @ts-ignore
                        typeof event.target.textContent === 'string') {
                        // @ts-ignore
                        this.setData(event.target.textContent);
                    }
                    break;
                case A:
                    if (cmdPressed) {
                        if (event.target &&
                            'textContent' in event.target &&
                            // @ts-ignore
                            typeof event.target.textContent === 'string') {
                            // @ts-ignore
                            this.setData(event.target.textContent);
                        }
                    }
                    break;
            }
        });
        inputHolder.appendChild(this.nodes.progress);
        inputHolder.appendChild(this.nodes.input);
        return inputHolder;
    }
    setData(text) {
        if (!Embed.services)
            return;
        const service = Object.entries(Embed.services).find(([_key, value]) => {
            return value.regex.test(text);
        })?.[1];
        if (!service)
            return;
        const { regex, embedUrl, width, height, id = (ids) => ids.shift(), } = service;
        const result = regex.exec(text)?.slice(1);
        if (!result)
            return;
        const embed = embedUrl.replace(/<%= remote_id %>/g, id(result) ?? '');
        this.data = {
            service: service.name,
            source: text,
            embed: embed,
            width,
            height,
        };
    }
    static prepare({ config = {} }) {
        const { services } = config;
        if (!services)
            return;
        let entries = Object.entries(SERVICES);
        const enabledServices = Object.entries(services)
            .filter(([_key, value]) => {
            return typeof value === 'boolean' && value === true;
        })
            .map(([key]) => key);
        if (enabledServices.length) {
            entries = entries.filter(([key]) => enabledServices.includes(key));
        }
        Embed.services = entries.reduce((result, [key, service]) => {
            if (!(key in result)) {
                // @ts-ignore
                result[key] = service;
                return result;
            }
            // @ts-ignore
            result[key] = Object.assign({}, result[key], service);
            return result;
        }, {});
    }
    static checkServiceConfig(config) {
        const { regex, embedUrl, html, height, width, id } = config;
        let isValid = regex &&
            regex instanceof RegExp &&
            embedUrl &&
            typeof embedUrl === 'string' &&
            html &&
            typeof html === 'string';
        isValid = isValid && (id !== undefined ? id instanceof Function : true);
        isValid =
            isValid && (height !== undefined ? Number.isFinite(height) : true);
        isValid = isValid && (width !== undefined ? Number.isFinite(width) : true);
        return isValid;
    }
    save() {
        return this.data;
    }
    set data(data) {
        if (!(data instanceof Object)) {
            throw Error('Embed Tool data should be object');
        }
        this._data = data;
        const oldView = this.nodes.wrapper;
        if (oldView) {
            oldView.parentNode?.replaceChild(this.render(), oldView);
        }
    }
    get data() {
        return this._data;
    }
    static get toolbox() {
        return {
            icon: C,
            title: 'Embed',
        };
    }
    get CSS() {
        return {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            container: 'embed-tool',
            inputEl: 'embed-tool__input',
            inputHolder: 'embed-tool__input-holder',
            inputError: 'embed-tool__input-holder--error',
            linkContent: 'embed-tool__content',
            linkContentRendered: 'embed-tool__content--rendered',
            linkImage: 'embed-tool__image',
            linkTitle: 'embed-tool__title',
            linkDescription: 'embed-tool__description',
            linkText: 'embed-tool__anchor',
            progress: 'embed-tool__progress',
            progressLoading: 'embed-tool__progress--loading',
            progressLoaded: 'embed-tool__progress--loaded',
            caption: 'embed-tool__caption',
            content: 'embed-tool__content',
        };
    }
    showProgress() {
        this.nodes.progress?.classList.add(this.CSS.progressLoading);
    }
    hideProgress() {
        return new Promise((resolve) => {
            this.nodes.progress?.classList.remove(this.CSS.progressLoading);
            this.nodes.progress?.classList.add(this.CSS.progressLoaded);
            setTimeout(resolve, 500);
        });
    }
    make(tagName, classNames, attributes) {
        const el = document.createElement(tagName);
        if (Array.isArray(classNames)) {
            el.classList.add(...classNames);
        }
        else if (classNames) {
            el.classList.add(classNames);
        }
        for (const attrName in attributes) {
            const key = attrName;
            // @ts-ignore
            const value = attributes[key];
            if (value !== undefined) {
                // @ts-ignore
                el[key] = value;
            }
        }
        return el;
    }
    static get enableLineBreaks() {
        return true;
    }
}
const SERVICES = {
    vimeo: {
        name: 'vimeo',
        regex: /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
        embedUrl: 'https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0',
        html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
        height: 320,
        width: 580,
    },
    youtube: {
        name: 'youtube',
        regex: /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
        embedUrl: 'https://www.youtube.com/embed/<%= remote_id %>',
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
        id: ([id, params]) => {
            if (!params && id) {
                return id;
            }
            const paramsMap = {
                start: 'start',
                end: 'end',
                t: 'start',
                // eslint-disable-next-line camelcase
                time_continue: 'start',
                list: 'list',
            };
            const newParams = params
                .slice(1)
                .split('&')
                .map((param) => {
                const [name, value] = param.split('=');
                if (!id) {
                    id = value;
                    return null;
                }
                if (!paramsMap[name])
                    return null;
                if (value === 'LL' ||
                    value.startsWith('RDMM') ||
                    value.startsWith('FL'))
                    return null;
                return `${paramsMap[name]}=${value}`;
            })
                .filter((param) => !!param);
            return id + '?' + newParams.join('&');
        },
    },
    coub: {
        name: 'coub',
        regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
        embedUrl: 'https://coub.com/embed/<%= remote_id %>',
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
    },
    vine: {
        name: 'vine',
        regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
        embedUrl: 'https://vine.co/v/<%= remote_id %>/embed/simple/',
        html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
        height: 320,
        width: 580,
    },
    imgur: {
        name: 'imgur',
        regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
        embedUrl: 'http://imgur.com/<%= remote_id %>/embed',
        html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
        height: 500,
        width: 540,
    },
    gfycat: {
        name: 'gfycat',
        regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
        embedUrl: 'https://gfycat.com/ifr/<%= remote_id %>',
        html: "<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",
        height: 436,
        width: 580,
    },
    'twitch-channel': {
        name: 'twitch-channel',
        regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
        embedUrl: 'https://player.twitch.tv/?channel=<%= remote_id %>',
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600,
    },
    'twitch-video': {
        name: 'twitch-video',
        regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
        embedUrl: 'https://player.twitch.tv/?video=v<%= remote_id %>',
        html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
        height: 366,
        width: 600,
    },
    'yandex-music-album': {
        name: 'yandex-music-album',
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
        embedUrl: 'https://music.yandex.ru/iframe/#album/<%= remote_id %>/',
        html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
        height: 400,
        width: 540,
    },
    'yandex-music-track': {
        name: 'yandex-music-track',
        regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
        embedUrl: 'https://music.yandex.ru/iframe/#track/<%= remote_id %>/',
        html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
        height: 100,
        width: 540,
        id: (ids) => ids.join('/'),
    },
    'yandex-music-playlist': {
        name: 'yandex-music-playlist',
        regex: /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
        embedUrl: 'https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/',
        html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
        height: 400,
        width: 540,
        id: (ids) => ids.join('/'),
    },
    codepen: {
        name: 'codepen',
        regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
        embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
        html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
        height: 300,
        width: 600,
        id: (ids) => ids.join('/embed/'),
    },
    instagram: {
        name: 'instagram',
        regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,
        embedUrl: 'https://www.instagram.com/p/<%= remote_id %>/embed',
        html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 505,
        width: 400,
    },
    twitter: {
        name: 'twitter',
        regex: /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+?.*)?$/,
        embedUrl: 'https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>',
        html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 300,
        width: 600,
        id: (ids) => ids.join('/status/'),
    },
    pinterest: {
        name: 'pinterest',
        regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
        embedUrl: 'https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>',
        html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
        id: (ids) => {
            return ids[1];
        },
    },
    facebook: {
        name: 'facebook',
        regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500',
        html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",
        id: (ids) => {
            return ids.join('/');
        },
    },
    aparat: {
        name: 'aparat',
        regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
        embedUrl: 'https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame',
        html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        height: 300,
        width: 600,
    },
    miro: {
        name: 'miro',
        regex: /https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,
        embedUrl: 'https://miro.com/app/live-embed/<%= remote_id %>',
        html: '<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>',
    },
    github: {
        name: 'github',
        regex: /https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,
        embedUrl: 'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ></script></body>',
        html: '<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',
        height: 300,
        width: 600,
        id: (ids) => `${ids.join('/')}.js`,
    },
};

(function(){try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o);}}catch(e){console.error("vite-plugin-css-injected-by-js",e);}})();
const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function M(E, a = null, i = {}) {
  const c = document.createElement(E);
  Array.isArray(a) ? c.classList.add(...a) : a && c.classList.add(a);
  for (const r in i)
    c[r] = i[r];
  return c;
}
class j {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: a, config: i, onSelectFile: c, readOnly: r }) {
    this.api = a, this.config = i, this.onSelectFile = c, this.readOnly = r, this.nodes = {
      wrapper: M("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: M("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: M("div", this.CSS.imagePreloader),
      caption: M("div", [this.CSS.input, this.CSS.caption], {
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
  render(a) {
    return !a.file || Object.keys(a.file).length === 0 ? this.toggleStatus(j.status.EMPTY) : this.toggleStatus(j.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const a = M("div", [this.CSS.button]);
    return a.innerHTML = this.config.buttonContent || `${L} ${this.api.i18n.t("Select an Image")}`, a.addEventListener("click", () => {
      this.onSelectFile();
    }), a;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(a) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${a})`, this.toggleStatus(j.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(j.status.EMPTY);
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(a) {
    const i = /\.mp4$/.test(a) ? "VIDEO" : "IMG", c = {
      src: a
    };
    let r = "load";
    i === "VIDEO" && (c.autoplay = !0, c.loop = !0, c.muted = !0, c.playsinline = !0, r = "loadeddata"), this.nodes.imageEl = M(i, this.CSS.imageEl, c), this.nodes.imageEl.addEventListener(r, () => {
      this.toggleStatus(j.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(a) {
    this.nodes.caption && (this.nodes.caption.innerHTML = a);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(a) {
    for (const i in j.status)
      Object.prototype.hasOwnProperty.call(j.status, i) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${j.status[i]}`, a === j.status[i]);
  }
  /**
   * Apply visual representation of activated tune
   *
   * @param {string} tuneName - one of available tunes {@link Tunes.tunes}
   * @param {boolean} status - true for enable, false for disable
   * @returns {void}
   */
  applyTune(a, i) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, i);
  }
}
function x(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var I = { exports: {} };
(function(E, a) {
  (function(i, c) {
    E.exports = c();
  })(window, function() {
    return function(i) {
      var c = {};
      function r(n) {
        if (c[n])
          return c[n].exports;
        var o = c[n] = { i: n, l: !1, exports: {} };
        return i[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
      }
      return r.m = i, r.c = c, r.d = function(n, o, d) {
        r.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: d });
      }, r.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, r.t = function(n, o) {
        if (1 & o && (n = r(n)), 8 & o || 4 & o && typeof n == "object" && n && n.__esModule)
          return n;
        var d = /* @__PURE__ */ Object.create(null);
        if (r.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: n }), 2 & o && typeof n != "string")
          for (var b in n)
            r.d(d, b, (function(u) {
              return n[u];
            }).bind(null, b));
        return d;
      }, r.n = function(n) {
        var o = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return r.d(o, "a", o), o;
      }, r.o = function(n, o) {
        return Object.prototype.hasOwnProperty.call(n, o);
      }, r.p = "", r(r.s = 3);
    }([function(i, c) {
      var r;
      r = function() {
        return this;
      }();
      try {
        r = r || new Function("return this")();
      } catch {
        typeof window == "object" && (r = window);
      }
      i.exports = r;
    }, function(i, c, r) {
      (function(n) {
        var o = r(2), d = setTimeout;
        function b() {
        }
        function u(e) {
          if (!(this instanceof u))
            throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, l) {
          for (; e._state === 3; )
            e = e._value;
          e._state !== 0 ? (e._handled = !0, u._immediateFn(function() {
            var s = e._state === 1 ? l.onFulfilled : l.onRejected;
            if (s !== null) {
              var g;
              try {
                g = s(e._value);
              } catch (m) {
                return void y(l.promise, m);
              }
              p(l.promise, g);
            } else
              (e._state === 1 ? p : y)(l.promise, e._value);
          })) : e._deferreds.push(l);
        }
        function p(e, l) {
          try {
            if (l === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (l && (typeof l == "object" || typeof l == "function")) {
              var s = l.then;
              if (l instanceof u)
                return e._state = 3, e._value = l, void w(e);
              if (typeof s == "function")
                return void t((g = s, m = l, function() {
                  g.apply(m, arguments);
                }), e);
            }
            e._state = 1, e._value = l, w(e);
          } catch (h) {
            y(e, h);
          }
          var g, m;
        }
        function y(e, l) {
          e._state = 2, e._value = l, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && u._immediateFn(function() {
            e._handled || u._unhandledRejectionFn(e._value);
          });
          for (var l = 0, s = e._deferreds.length; l < s; l++)
            f(e, e._deferreds[l]);
          e._deferreds = null;
        }
        function v(e, l, s) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof l == "function" ? l : null, this.promise = s;
        }
        function t(e, l) {
          var s = !1;
          try {
            e(function(g) {
              s || (s = !0, p(l, g));
            }, function(g) {
              s || (s = !0, y(l, g));
            });
          } catch (g) {
            if (s)
              return;
            s = !0, y(l, g);
          }
        }
        u.prototype.catch = function(e) {
          return this.then(null, e);
        }, u.prototype.then = function(e, l) {
          var s = new this.constructor(b);
          return f(this, new v(e, l, s)), s;
        }, u.prototype.finally = o.a, u.all = function(e) {
          return new u(function(l, s) {
            if (!e || e.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0)
              return l([]);
            var m = g.length;
            function h(T, C) {
              try {
                if (C && (typeof C == "object" || typeof C == "function")) {
                  var S = C.then;
                  if (typeof S == "function")
                    return void S.call(C, function(O) {
                      h(T, O);
                    }, s);
                }
                g[T] = C, --m == 0 && l(g);
              } catch (O) {
                s(O);
              }
            }
            for (var k = 0; k < g.length; k++)
              h(k, g[k]);
          });
        }, u.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === u ? e : new u(function(l) {
            l(e);
          });
        }, u.reject = function(e) {
          return new u(function(l, s) {
            s(e);
          });
        }, u.race = function(e) {
          return new u(function(l, s) {
            for (var g = 0, m = e.length; g < m; g++)
              e[g].then(l, s);
          });
        }, u._immediateFn = typeof n == "function" && function(e) {
          n(e);
        } || function(e) {
          d(e, 0);
        }, u._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, c.a = u;
      }).call(this, r(5).setImmediate);
    }, function(i, c, r) {
      c.a = function(n) {
        var o = this.constructor;
        return this.then(function(d) {
          return o.resolve(n()).then(function() {
            return d;
          });
        }, function(d) {
          return o.resolve(n()).then(function() {
            return o.reject(d);
          });
        });
      };
    }, function(i, c, r) {
      function n(t) {
        return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      r(4);
      var o, d, b, u, f, p, y, w = r(8), v = (d = function(t) {
        return new Promise(function(e, l) {
          t = u(t), (t = f(t)).beforeSend && t.beforeSend();
          var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var h = t.headers[m];
            s.setRequestHeader(m, h);
          });
          var g = t.ratio;
          s.upload.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
            t.progress(Math.min(k, 100));
          }, !1), s.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, !1), s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var m = s.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var h = w.parseHeaders(s.getAllResponseHeaders()), k = { body: m, code: s.status, headers: h };
              y(s.status) ? e(k) : l(k);
            }
          }, s.send(t.data);
        });
      }, b = function(t) {
        return t.method = "POST", d(t);
      }, u = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && n(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var e = p(t.data, o.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var l = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (l = o.FORM), t.data = p(t.data, l), l !== v.contentType.FORM && (t.headers["content-type"] = l);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case o.URLENCODED:
            return w.urlEncode(t);
          case o.JSON:
            return w.jsonEncode(t);
          case o.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: o = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: b, transport: function(t) {
        return t = u(t), w.selectFiles(t).then(function(e) {
          for (var l = new FormData(), s = 0; s < e.length; s++)
            l.append(t.fieldName, e[s], e[s].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var h = t.data[m];
            l.append(m, h);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = l, b(t);
        });
      }, selectFiles: function(t) {
        return delete (t = u(t)).beforeSend, w.selectFiles(t);
      } });
      i.exports = v;
    }, function(i, c, r) {
      r.r(c);
      var n = r(1);
      window.Promise = window.Promise || n.a;
    }, function(i, c, r) {
      (function(n) {
        var o = n !== void 0 && n || typeof self < "u" && self || window, d = Function.prototype.apply;
        function b(u, f) {
          this._id = u, this._clearFn = f;
        }
        c.setTimeout = function() {
          return new b(d.call(setTimeout, o, arguments), clearTimeout);
        }, c.setInterval = function() {
          return new b(d.call(setInterval, o, arguments), clearInterval);
        }, c.clearTimeout = c.clearInterval = function(u) {
          u && u.close();
        }, b.prototype.unref = b.prototype.ref = function() {
        }, b.prototype.close = function() {
          this._clearFn.call(o, this._id);
        }, c.enroll = function(u, f) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = f;
        }, c.unenroll = function(u) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = -1;
        }, c._unrefActive = c.active = function(u) {
          clearTimeout(u._idleTimeoutId);
          var f = u._idleTimeout;
          f >= 0 && (u._idleTimeoutId = setTimeout(function() {
            u._onTimeout && u._onTimeout();
          }, f));
        }, r(6), c.setImmediate = typeof self < "u" && self.setImmediate || n !== void 0 && n.setImmediate || this && this.setImmediate, c.clearImmediate = typeof self < "u" && self.clearImmediate || n !== void 0 && n.clearImmediate || this && this.clearImmediate;
      }).call(this, r(0));
    }, function(i, c, r) {
      (function(n, o) {
        (function(d, b) {
          if (!d.setImmediate) {
            var u, f, p, y, w, v = 1, t = {}, e = !1, l = d.document, s = Object.getPrototypeOf && Object.getPrototypeOf(d);
            s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? u = function(h) {
              o.nextTick(function() {
                m(h);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var h = !0, k = d.onmessage;
                return d.onmessage = function() {
                  h = !1;
                }, d.postMessage("", "*"), d.onmessage = k, h;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
              h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), u = function(h) {
              d.postMessage(y + h, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
              m(h.data);
            }, u = function(h) {
              p.port2.postMessage(h);
            }) : l && "onreadystatechange" in l.createElement("script") ? (f = l.documentElement, u = function(h) {
              var k = l.createElement("script");
              k.onreadystatechange = function() {
                m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
              }, f.appendChild(k);
            }) : u = function(h) {
              setTimeout(m, 0, h);
            }, s.setImmediate = function(h) {
              typeof h != "function" && (h = new Function("" + h));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++)
                k[T] = arguments[T + 1];
              var C = { callback: h, args: k };
              return t[v] = C, u(v), v++;
            }, s.clearImmediate = g;
          }
          function g(h) {
            delete t[h];
          }
          function m(h) {
            if (e)
              setTimeout(m, 0, h);
            else {
              var k = t[h];
              if (k) {
                e = !0;
                try {
                  (function(T) {
                    var C = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        C();
                        break;
                      case 1:
                        C(S[0]);
                        break;
                      case 2:
                        C(S[0], S[1]);
                        break;
                      case 3:
                        C(S[0], S[1], S[2]);
                        break;
                      default:
                        C.apply(b, S);
                    }
                  })(k);
                } finally {
                  g(h), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, r(0), r(7));
    }, function(i, c) {
      var r, n, o = i.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function b() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(s) {
        if (r === setTimeout)
          return setTimeout(s, 0);
        if ((r === d || !r) && setTimeout)
          return r = setTimeout, setTimeout(s, 0);
        try {
          return r(s, 0);
        } catch {
          try {
            return r.call(null, s, 0);
          } catch {
            return r.call(this, s, 0);
          }
        }
      }
      (function() {
        try {
          r = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          r = d;
        }
        try {
          n = typeof clearTimeout == "function" ? clearTimeout : b;
        } catch {
          n = b;
        }
      })();
      var f, p = [], y = !1, w = -1;
      function v() {
        y && f && (y = !1, f.length ? p = f.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var s = u(v);
          y = !0;
          for (var g = p.length; g; ) {
            for (f = p, p = []; ++w < g; )
              f && f[w].run();
            w = -1, g = p.length;
          }
          f = null, y = !1, function(m) {
            if (n === clearTimeout)
              return clearTimeout(m);
            if ((n === b || !n) && clearTimeout)
              return n = clearTimeout, clearTimeout(m);
            try {
              n(m);
            } catch {
              try {
                return n.call(null, m);
              } catch {
                return n.call(this, m);
              }
            }
          }(s);
        }
      }
      function e(s, g) {
        this.fun = s, this.array = g;
      }
      function l() {
      }
      o.nextTick = function(s) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        p.push(new e(s, g)), p.length !== 1 || y || u(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = l, o.addListener = l, o.once = l, o.off = l, o.removeListener = l, o.removeAllListeners = l, o.emit = l, o.prependListener = l, o.prependOnceListener = l, o.listeners = function(s) {
        return [];
      }, o.binding = function(s) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function() {
        return "/";
      }, o.chdir = function(s) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function() {
        return 0;
      };
    }, function(i, c, r) {
      function n(d, b) {
        for (var u = 0; u < b.length; u++) {
          var f = b[u];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var o = r(9);
      i.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var b, u, f;
        return b = d, f = [{ key: "urlEncode", value: function(p) {
          return o(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p))
            return p;
          if (this.isFormElement(p))
            return new FormData(p);
          if (this.isObject(p)) {
            var y = new FormData();
            return Object.keys(p).forEach(function(w) {
              var v = p[w];
              y.append(w, v);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var v = document.createElement("INPUT");
            v.type = "file", p.multiple && v.setAttribute("multiple", "multiple"), p.accept && v.setAttribute("accept", p.accept), v.style.display = "none", document.body.appendChild(v), v.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(v);
            }, !1), v.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var y = p.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(v) {
            var t = v.split(": "), e = t.shift(), l = t.join(": ");
            e && (w[e] = l);
          }), w;
        } }], (u = null) && n(b.prototype, u), f && n(b, f), d;
      }();
    }, function(i, c) {
      var r = function(o) {
        return encodeURIComponent(o).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, n = function(o, d, b, u) {
        return d = d || null, b = b || "&", u = u || null, o ? function(f) {
          for (var p = new Array(), y = 0; y < f.length; y++)
            f[y] && p.push(f[y]);
          return p;
        }(Object.keys(o).map(function(f) {
          var p, y, w = f;
          if (u && (w = u + "[" + w + "]"), typeof o[f] == "object" && o[f] !== null)
            p = n(o[f], null, b, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var v = o[f];
            v = (v = (v = (v = v === !0 ? "1" : v) === !1 ? "0" : v) === 0 ? "0" : v) || "", p = r(w) + "=" + r(v);
          }
          return p;
        })).join(b).replace(/[!'()*]/g, "") : "";
      };
      i.exports = n;
    }]);
  });
})(I);
var U = I.exports;
const F = /* @__PURE__ */ x(U);
function _(E) {
  return E && typeof E.then == "function";
}
class B {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: a, onUpload: i, onError: c }) {
    this.config = a, this.onUpload = i, this.onError = c;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: a }) {
    const i = function(r) {
      const n = new FileReader();
      n.readAsDataURL(r), n.onload = (o) => {
        a(o.target.result);
      };
    };
    let c;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? c = F.selectFiles({ accept: this.config.types }).then((r) => {
      i(r[0]);
      const n = this.config.uploader.uploadByFile(r[0]);
      return _(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
    }) : c = F.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: (r) => {
        i(r[0]);
      },
      fieldName: this.config.field
    }).then((r) => r.body), c.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {string} url - image source url
   */
  uploadByUrl(a) {
    let i;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (i = this.config.uploader.uploadByUrl(a), _(i) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : i = F.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: a
      }, this.config.additionalRequestData),
      type: F.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((c) => c.body), i.then((c) => {
      this.onUpload(c);
    }).catch((c) => {
      this.onError(c);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(a, { onPreview: i }) {
    const c = new FileReader();
    c.readAsDataURL(a), c.onload = (n) => {
      i(n.target.result);
    };
    let r;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      r = this.config.uploader.uploadByFile(a), _(r) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const n = new FormData();
      n.append(this.config.field, a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o, d]) => {
        n.append(o, d);
      }), r = F.post({
        url: this.config.endpoints.byFile,
        data: n,
        type: F.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((o) => o.body);
    }
    r.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
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
class P {
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
      icon: L,
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
        icon: H,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: D,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: R,
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
  constructor({ data: a, config: i, api: c, readOnly: r, block: n }) {
    this.api = c, this.readOnly = r, this.block = n, this.config = {
      endpoints: i.endpoints || "",
      additionalRequestData: i.additionalRequestData || {},
      additionalRequestHeaders: i.additionalRequestHeaders || {},
      field: i.field || "image",
      types: i.types || "image/*",
      captionPlaceholder: this.api.i18n.t(i.captionPlaceholder || "Caption"),
      buttonContent: i.buttonContent || "",
      uploader: i.uploader || void 0,
      actions: i.actions || []
    }, this.uploader = new B({
      config: this.config,
      onUpload: (o) => this.onUpload(o),
      onError: (o) => this.uploadingFailed(o)
    }), this.ui = new j({
      api: c,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (o) => {
            this.ui.showPreloader(o);
          }
        });
      },
      readOnly: r
    }), this._data = {}, this.data = a;
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
  validate(a) {
    return a.file && a.file.url;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageToolData}
   */
  save() {
    const a = this.ui.nodes.caption;
    return this._data.caption = a.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   *
   * @public
   *
   * @returns {Array}
   */
  renderSettings() {
    return P.tunes.concat(this.config.actions).map((i) => ({
      icon: i.icon,
      label: this.api.i18n.t(i.title),
      name: i.name,
      toggle: i.toggle,
      isActive: this.data[i.name],
      onActivate: () => {
        if (typeof i.action == "function") {
          i.action(i.name);
          return;
        }
        this.tuneToggled(i.name);
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
  async onPaste(a) {
    switch (a.type) {
      case "tag": {
        const i = a.detail.data;
        if (/^blob:/.test(i.src)) {
          const r = await (await fetch(i.src)).blob();
          this.uploadFile(r);
          break;
        }
        this.uploadUrl(i.src);
        break;
      }
      case "pattern": {
        const i = a.detail.data;
        this.uploadUrl(i);
        break;
      }
      case "file": {
        const i = a.detail.file;
        this.uploadFile(i);
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
  set data(a) {
    this.image = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), P.tunes.forEach(({ name: i }) => {
      const c = typeof a[i] < "u" ? a[i] === !0 || a[i] === "true" : !1;
      this.setTune(i, c);
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
  set image(a) {
    this._data.file = a || {}, a && a.url && this.ui.fillImage(a.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(a) {
    a.success && a.file ? this.image = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(a) {
    console.log("Image Tool: uploading failed because of", a), this.api.notifier.show({
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
  tuneToggled(a) {
    this.setTune(a, !this._data[a]);
  }
  /**
   * Set one tune
   *
   * @param {string} tuneName - {@link Tunes.tunes}
   * @param {boolean} value - tune state
   * @returns {void}
   */
  setTune(a, i) {
    this._data[a] = i, this.ui.applyTune(a, i), a === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = i;
    }).catch((c) => {
      console.error(c);
    });
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(a) {
    this.uploader.uploadByFile(a, {
      onPreview: (i) => {
        this.ui.showPreloader(i);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   *
   * @param {string} url - url pasted
   * @returns {void}
   */
  uploadUrl(a) {
    this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
  }
}

class Quote {
    static get isReadOnlySupported() {
        return true;
    }
    static get toolbox() {
        return {
            icon: t1,
            title: "Quote",
        };
    }
    static get contentless() {
        return true;
    }
    static get enableLineBreaks() {
        return true;
    }
    static get ALIGNMENTS() {
        return {
            left: "left",
            center: "center",
        };
    }
    static get DEFAULT_ALIGNMENT() {
        return Quote.ALIGNMENTS.left;
    }
    static get conversionConfig() {
        return {
            import: "text",
            export: (quoteData) => {
                return quoteData.caption
                    ? `${quoteData.text} — ${quoteData.caption}`
                    : quoteData.text;
            },
        };
    }
    get CSS() {
        return {
            input: this.api.styles.input,
            baseClass: this.api.styles.block,
            wrapper: "cdx-quote",
            text: "cdx-quote__text",
            caption: "cdx-quote__caption",
        };
    }
    get settings() {
        return [
            {
                name: "left",
                icon: d,
            },
            {
                name: "center",
                icon: l,
            },
        ];
    }
    api;
    readOnly;
    quotePlaceholder;
    captionPlaceholder;
    data;
    constructor({ data, config, api, readOnly, }) {
        const { ALIGNMENTS, DEFAULT_ALIGNMENT } = Quote;
        this.api = api;
        this.readOnly = readOnly;
        this.quotePlaceholder = this.api.i18n.t("Enter a quote");
        this.captionPlaceholder = this.api.i18n.t("Enter a caption");
        this.data = {
            text: data.text || "",
            caption: data.caption || "",
            alignment: (Object.values(ALIGNMENTS).includes(data.alignment) &&
                data.alignment) ||
                config?.defaultAlignment ||
                DEFAULT_ALIGNMENT,
        };
    }
    render() {
        const container = this._make("blockquote", [
            this.CSS.baseClass,
            this.CSS.wrapper,
        ]);
        const quote = this._make("div", [this.CSS.input, this.CSS.text], {
            // @ts-ignore
            contentEditable: !this.readOnly,
            innerHTML: this.data.text,
        });
        const caption = this._make("div", [this.CSS.input, this.CSS.caption], {
            // @ts-ignore
            contentEditable: !this.readOnly,
            innerHTML: this.data.caption,
        });
        quote.dataset.placeholder = this.quotePlaceholder;
        caption.dataset.placeholder = this.captionPlaceholder;
        container.appendChild(quote);
        container.appendChild(caption);
        return container;
    }
    save(quoteElement) {
        const text = quoteElement.querySelector(`.${this.CSS.text}`);
        const caption = quoteElement.querySelector(`.${this.CSS.caption}`);
        return Object.assign(this.data, {
            text: text?.innerHTML,
            caption: caption?.innerHTML,
        });
    }
    static get sanitize() {
        return {
            text: {
                br: true,
            },
            caption: {
                br: true,
            },
            alignment: {},
        };
    }
    renderSettings() {
        const capitalize = (str) => str[0].toUpperCase() + str.substr(1);
        return this.settings.map((item) => ({
            icon: item.icon,
            label: this.api.i18n.t(`Align ${capitalize(item.name)}`),
            isActive: this.data.alignment === item.name,
            onActivate: () => this._toggleTune(item.name),
            closeOnActivate: true,
        }));
    }
    _toggleTune(tune) {
        this.data.alignment = tune;
    }
    _make(tagName, classNames, attributes) {
        const el = document.createElement(tagName);
        if (Array.isArray(classNames)) {
            el.classList.add(...classNames);
        }
        else if (classNames) {
            el.classList.add(classNames);
        }
        for (const attrName in attributes) {
            // @ts-ignore
            el[attrName] = attributes[attrName];
        }
        return el;
    }
}

const styles = {
    backgroundColor: '#FFDA00',
    padding: '0.5rem',
    width: '100%',
    textAlign: 'center',
};
const text = 'このラインより先を有料にする';
class PaymentLine {
    constructor(_) { }
    static get toolbox() {
        return {
            title: 'Payment',
            icon: '<svg style="transform:scale(0.7)" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0097 11.2778H14.218V12.7222H10.2863V14.1667H14.218V15.6111H10.2863V18.5H8.71365V15.6111H4.78198V14.1667H8.71365V12.7222H4.78198V11.2778H7.99022L3.99564 5.5H5.85926L9.49998 10.765L13.1407 5.5H15.0043L11.0097 11.2778Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H6.16354L9.5 9.82499L12.8365 5H16L12.0054 10.7778H14.7684V13.2222H10.8368V13.6667H14.7684V16.1111H10.8368V19H8.16323V16.1111H4.23156V13.6667H8.16323V13.2222H4.23156V10.7778H6.99457L3 5ZM4.99133 6L8.9859 11.7778H5.33243V12.2222H9.2641V14.6667H5.33243V15.1111H9.2641V18H9.7359V15.1111H13.6676V14.6667H9.7359V12.2222H13.6676V11.7778H10.0141L14.0087 6H13.445L9.5 11.705L5.55501 6H4.99133Z" fill="#000000"/><rect width="4" height="3" fill="#000000"/><rect x="5" width="4" height="3" fill="#000000"/><rect x="10" width="4" height="3" fill="#000000"/><rect x="15" width="4" height="3" fill="#000000"/></svg>',
        };
    }
    render() {
        const div = document.createElement('div');
        div.innerText = text;
        div.style.backgroundColor = styles.backgroundColor?.toString() ?? '';
        div.style.padding = styles.padding?.toString() ?? '';
        div.style.width = styles.width?.toString() ?? '';
        div.style.textAlign = styles.textAlign?.toString() ?? '';
        return div;
    }
    save(_) {
        return {};
    }
}
const paymentLineParser = () => {
    const style = () => {
        return Object.entries(styles)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');
    };
    return `<div style="${style()}">このラインより先を有料にする</div>`;
};

const header = {
    class: c$1,
    shortcut: "CMD+SHIFT+H",
    config: {
        placeholder: "へッダー",
        levels: [2, 3],
        defaultLevel: 3,
    },
};
const list = {
    class: u,
    inlineToolbar: true,
    config: {
        defaultStyle: "unordered",
    },
};
const embed = {
    class: Embed,
    inlineToolbar: true,
    config: {
        services: {
            youtube: true,
            vimeo: true,
            twitter: true,
            instagram: true,
        },
    },
};
const quote = {
    class: Quote,
};
const link = {
    class: I$1,
    config: {
        endpoint: "http://localhost:3000/api/getMeta", // Your backend endpoint for url data fetching,
    },
};
const image = {
    class: P,
    config: {
        types: "image/*",
        endpoints: {
            byFile: "http://localhost:3000/api/postImage", // Your backend file uploader endpoint
            byUrl: "http://localhost:3000/api/postImage", // Your endpoint that provides uploading by Url
        },
    },
};
const payment = {
    class: PaymentLine,
};
const tools = {
    header,
    link,
    list,
    embed,
    image,
    quote,
    payment,
};

/**
 * Drag/Drop feature for Editor.js.
 *
 * @typedef {Object} DragDrop
 * @description Feature's initialization class.
 * @property {Object} api — Editor.js API
 * @property {HTMLElement} holder — DOM element where the editor is initialized.
 * @property {Number} startBlock - Dragged block position.
 * @property {Number} endBlock - Position where the dragged block is gonna be placed.
 * @property {Function} setDragListener - Sets the drag events listener.
 * @property {Function} setDropListener - Sets the drop events listener.
 */
class DragDrop {
    toolbar;
    borderStyle;
    api;
    holder;
    readOnly;
    startBlock;
    endBlock;
    save;
    /**
     * @param editor: object
     *   editor — Editor.js instance object
     */
    constructor({ configuration, blocks, toolbar, save, }, borderStyle) {
        this.toolbar = toolbar;
        this.borderStyle = borderStyle || "1px dashed #aaa";
        this.api = blocks;
        this.holder =
            typeof configuration.holder === "string"
                ? document.getElementById(configuration.holder)
                : configuration.holder;
        this.readOnly = configuration.readOnly;
        this.startBlock = null;
        this.endBlock = null;
        this.save = save;
        this.setDragListener();
        this.setDropListener();
    }
    /**
     * Sets the cursor at the begining of the drag element
     */
    setElementCursor(element) {
        if (!element)
            return;
        const range = document.createRange();
        const selection = window.getSelection();
        range.setStart(element.childNodes[0], 0);
        range.collapse(true);
        selection?.removeAllRanges();
        selection?.addRange(range);
        element.focus();
    }
    /**
     * Sets the drag events listener.
     */
    setDragListener() {
        if (!this.readOnly) {
            const settingsButton = this.holder?.querySelector(".ce-toolbar__settings-btn");
            settingsButton?.setAttribute("draggable", "true");
            settingsButton?.addEventListener("dragstart", () => {
                this.startBlock = this.api.getCurrentBlockIndex();
            });
            settingsButton?.addEventListener("drag", () => {
                this.toolbar.close(); // this closes the toolbar when we start the drag
                if (!this.isTheOnlyBlock()) {
                    const allBlocks = this.holder?.querySelectorAll(".ce-block");
                    const blockFocused = this.holder?.querySelector(".ce-block--drop-target");
                    this.setElementCursor(blockFocused);
                    this.setBorderBlocks(allBlocks, blockFocused);
                }
            });
        }
    }
    setBorderBlocks(allBlocks, blockFocused) {
        if (!allBlocks || !blockFocused)
            return;
        allBlocks.forEach((block) => {
            const blockContent = block.querySelector(".ce-block__content");
            if (block !== blockFocused) {
                blockContent?.style.removeProperty("border-top");
                blockContent?.style.removeProperty("border-bottom");
            }
            else {
                const index = Object.keys(allBlocks).find((key) => {
                    // @ts-ignore
                    return allBlocks[key] === blockFocused;
                });
                if (index ??
                    0 > (this.startBlock ?? 0)) {
                    if (blockContent?.style.borderBottom)
                        blockContent.style.borderBottom =
                            this.borderStyle || "1px dashed #aaa";
                }
                else {
                    if (blockContent?.style.borderTop) {
                        blockContent.style.borderTop = this.borderStyle;
                    }
                }
            }
        });
    }
    /**
     * Sets the drop events listener.
     */
    setDropListener() {
        document.addEventListener("drop", (event) => {
            const { target } = event;
            if (!target)
                return;
            if (this.holder?.contains(target) && this.startBlock !== null) {
                const dropTarget = this.getDropTarget(target);
                if (dropTarget) {
                    const blockContent = dropTarget.querySelector(".ce-block__content");
                    blockContent?.style.removeProperty("border-top");
                    blockContent?.style.removeProperty("border-bottom");
                    this.endBlock = this.getTargetPosition(dropTarget);
                    this.moveBlocks();
                }
            }
            this.startBlock = null;
        });
    }
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
        return true;
    }
    /**
     * Returns the closest block DOM element to the drop event target.
     *
     * @param {HTMLElement} target  DOM element which received the drop event.
     * @returns {HTMLElement}
     */
    getDropTarget(target) {
        return target.classList.contains("ce-block")
            ? target
            : target.closest(".ce-block");
    }
    /**
     * Returns the target position in the child subtree.
     *
     * @param {HTMLElement} target  DOM element which received the drop event.
     * @returns {Number}
     */
    getTargetPosition(target) {
        return Array.from(target.parentNode.children).indexOf(target);
    }
    isTheOnlyBlock() {
        return this.api.getBlocksCount() === 1;
    }
    /**
     * Moves the dragged element to the drop position.
     *
     * @see {@link https://editorjs.io/blocks#move}
     */
    moveBlocks() {
        if (!this.isTheOnlyBlock() && this.endBlock && this.startBlock) {
            this.api.move(this.endBlock, this.startBlock);
        }
    }
}

const i18n = {
    messages: {
        ui: {
            blockTunes: {
                toggler: {
                    "Click to tune": "ブロックの操作",
                },
            },
            inlineToolbar: {
                converter: {
                    "Convert to": "変更",
                },
            },
            toolbar: {
                toolbox: {
                    Add: "追加",
                },
            },
        },
        toolNames: {
            Text: "文章",
            Heading: "子見出し",
            List: "リスト",
            Quote: "引用",
            Link: "リンク",
            Image: "画像",
            Payment: "有料ライン",
            Embed: "埋め込み",
        },
        tools: {
            link: {
                "Add a link": "リンクを追加",
                Link: "リンク",
                "Couldn't get this link data, try the other one": "リンク先の情報を取得できませんでした。",
            },
            image: {
                "Select an Image": "画像を選択",
                Caption: "キャプション",
                "With border": "枠を追加",
                "Stretch image": "画像を拡大",
                "With background": "背景を追加",
            },
            quote: {
                "Enter a quote": "引用を追加",
                "Enter a caption": "キャプションを追加",
            },
        },
        blockTunes: {
            delete: {
                Delete: "削除",
                "Click to delete": "クリックで削除",
            },
            moveUp: {
                "Move up": "上に移動",
            },
            moveDown: {
                "Move down": "下に移動",
            },
        },
    },
};

const Editor = ({ id, data, onChange }) => {
    const editorJs = React$1.useRef(null);
    React$1.useEffect(() => {
        if (!editorJs.current) {
            const editor = new vi({
                holder: id,
                tools: tools,
                autofocus: false,
                data: data,
                placeholder: "文字を入力",
                async onChange() {
                    if (onChange) {
                        const res = await save();
                        res && onChange(res);
                    }
                },
                i18n,
                onReady() {
                    new DragDrop(editor);
                },
            });
            editorJs.current = editor;
        }
        return () => {
            if (editorJs.current && editorJs.current.destroy) {
                editorJs.current.destroy();
            }
        };
        // es-lint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const save = () => {
        if (!editorJs.current)
            return undefined;
        return editorJs.current.save().then((outputData) => outputData);
    };
    return React$1.createElement("div", { id: id, className: "w-full" });
};
var CustomEditor = React$1.memo(Editor);

var lib$8 = {};

var lib$7 = {};

var htmlToDom = {};

var lib$6 = {};

var Parser$1 = {};

var Tokenizer = {};

var decode = {};

var decodeDataHtml = {};

// Generated using scripts/write-decode-map.ts
Object.defineProperty(decodeDataHtml, "__esModule", { value: true });
decodeDataHtml.default = new Uint16Array(
// prettier-ignore
"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
    .split("")
    .map(function (c) { return c.charCodeAt(0); }));

var decodeDataXml = {};

// Generated using scripts/write-decode-map.ts
Object.defineProperty(decodeDataXml, "__esModule", { value: true });
decodeDataXml.default = new Uint16Array(
// prettier-ignore
"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
    .split("")
    .map(function (c) { return c.charCodeAt(0); }));

var decode_codepoint = {};

(function (exports) {
	// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.replaceCodePoint = exports.fromCodePoint = void 0;
	var decodeMap = new Map([
	    [0, 65533],
	    // C1 Unicode control character reference replacements
	    [128, 8364],
	    [130, 8218],
	    [131, 402],
	    [132, 8222],
	    [133, 8230],
	    [134, 8224],
	    [135, 8225],
	    [136, 710],
	    [137, 8240],
	    [138, 352],
	    [139, 8249],
	    [140, 338],
	    [142, 381],
	    [145, 8216],
	    [146, 8217],
	    [147, 8220],
	    [148, 8221],
	    [149, 8226],
	    [150, 8211],
	    [151, 8212],
	    [152, 732],
	    [153, 8482],
	    [154, 353],
	    [155, 8250],
	    [156, 339],
	    [158, 382],
	    [159, 376],
	]);
	/**
	 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
	 */
	exports.fromCodePoint = 
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
	(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
	    var output = "";
	    if (codePoint > 0xffff) {
	        codePoint -= 0x10000;
	        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
	        codePoint = 0xdc00 | (codePoint & 0x3ff);
	    }
	    output += String.fromCharCode(codePoint);
	    return output;
	};
	/**
	 * Replace the given code point with a replacement character if it is a
	 * surrogate or is outside the valid range. Otherwise return the code
	 * point unchanged.
	 */
	function replaceCodePoint(codePoint) {
	    var _a;
	    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
	        return 0xfffd;
	    }
	    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
	}
	exports.replaceCodePoint = replaceCodePoint;
	/**
	 * Replace the code point if relevant, then convert it to a string.
	 *
	 * @deprecated Use `fromCodePoint(replaceCodePoint(codePoint))` instead.
	 * @param codePoint The code point to decode.
	 * @returns The decoded code point.
	 */
	function decodeCodePoint(codePoint) {
	    return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
	}
	exports.default = decodeCodePoint;
	
} (decode_codepoint));

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTMLAttribute = exports.decodeHTML = exports.determineBranch = exports.EntityDecoder = exports.DecodingMode = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
	var decode_data_html_js_1 = __importDefault(decodeDataHtml);
	exports.htmlDecodeTree = decode_data_html_js_1.default;
	var decode_data_xml_js_1 = __importDefault(decodeDataXml);
	exports.xmlDecodeTree = decode_data_xml_js_1.default;
	var decode_codepoint_js_1 = __importStar(decode_codepoint);
	exports.decodeCodePoint = decode_codepoint_js_1.default;
	var decode_codepoint_js_2 = decode_codepoint;
	Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.replaceCodePoint; } });
	Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.fromCodePoint; } });
	var CharCodes;
	(function (CharCodes) {
	    CharCodes[CharCodes["NUM"] = 35] = "NUM";
	    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
	    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
	    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
	    CharCodes[CharCodes["NINE"] = 57] = "NINE";
	    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
	    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
	    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
	    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
	    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
	    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
	    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
	})(CharCodes || (CharCodes = {}));
	/** Bit that needs to be set to convert an upper case ASCII character to lower case */
	var TO_LOWER_BIT = 32;
	var BinTrieFlags;
	(function (BinTrieFlags) {
	    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
	    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
	    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
	})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
	function isNumber(code) {
	    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
	}
	function isHexadecimalCharacter(code) {
	    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F) ||
	        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F));
	}
	function isAsciiAlphaNumeric(code) {
	    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z) ||
	        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z) ||
	        isNumber(code));
	}
	/**
	 * Checks if the given character is a valid end character for an entity in an attribute.
	 *
	 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
	 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
	 */
	function isEntityInAttributeInvalidEnd(code) {
	    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
	}
	var EntityDecoderState;
	(function (EntityDecoderState) {
	    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
	    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
	    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
	    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
	    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
	})(EntityDecoderState || (EntityDecoderState = {}));
	var DecodingMode;
	(function (DecodingMode) {
	    /** Entities in text nodes that can end with any character. */
	    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
	    /** Only allow entities terminated with a semicolon. */
	    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
	    /** Entities in attributes have limitations on ending characters. */
	    DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
	})(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
	/**
	 * Token decoder with support of writing partial entities.
	 */
	var EntityDecoder = /** @class */ (function () {
	    function EntityDecoder(
	    /** The tree used to decode entities. */
	    decodeTree, 
	    /**
	     * The function that is called when a codepoint is decoded.
	     *
	     * For multi-byte named entities, this will be called multiple times,
	     * with the second codepoint, and the same `consumed` value.
	     *
	     * @param codepoint The decoded codepoint.
	     * @param consumed The number of bytes consumed by the decoder.
	     */
	    emitCodePoint, 
	    /** An object that is used to produce errors. */
	    errors) {
	        this.decodeTree = decodeTree;
	        this.emitCodePoint = emitCodePoint;
	        this.errors = errors;
	        /** The current state of the decoder. */
	        this.state = EntityDecoderState.EntityStart;
	        /** Characters that were consumed while parsing an entity. */
	        this.consumed = 1;
	        /**
	         * The result of the entity.
	         *
	         * Either the result index of a numeric entity, or the codepoint of a
	         * numeric entity.
	         */
	        this.result = 0;
	        /** The current index in the decode tree. */
	        this.treeIndex = 0;
	        /** The number of characters that were consumed in excess. */
	        this.excess = 1;
	        /** The mode in which the decoder is operating. */
	        this.decodeMode = DecodingMode.Strict;
	    }
	    /** Resets the instance to make it reusable. */
	    EntityDecoder.prototype.startEntity = function (decodeMode) {
	        this.decodeMode = decodeMode;
	        this.state = EntityDecoderState.EntityStart;
	        this.result = 0;
	        this.treeIndex = 0;
	        this.excess = 1;
	        this.consumed = 1;
	    };
	    /**
	     * Write an entity to the decoder. This can be called multiple times with partial entities.
	     * If the entity is incomplete, the decoder will return -1.
	     *
	     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
	     * entity is incomplete, and resume when the next string is written.
	     *
	     * @param string The string containing the entity (or a continuation of the entity).
	     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
	     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	     */
	    EntityDecoder.prototype.write = function (str, offset) {
	        switch (this.state) {
	            case EntityDecoderState.EntityStart: {
	                if (str.charCodeAt(offset) === CharCodes.NUM) {
	                    this.state = EntityDecoderState.NumericStart;
	                    this.consumed += 1;
	                    return this.stateNumericStart(str, offset + 1);
	                }
	                this.state = EntityDecoderState.NamedEntity;
	                return this.stateNamedEntity(str, offset);
	            }
	            case EntityDecoderState.NumericStart: {
	                return this.stateNumericStart(str, offset);
	            }
	            case EntityDecoderState.NumericDecimal: {
	                return this.stateNumericDecimal(str, offset);
	            }
	            case EntityDecoderState.NumericHex: {
	                return this.stateNumericHex(str, offset);
	            }
	            case EntityDecoderState.NamedEntity: {
	                return this.stateNamedEntity(str, offset);
	            }
	        }
	    };
	    /**
	     * Switches between the numeric decimal and hexadecimal states.
	     *
	     * Equivalent to the `Numeric character reference state` in the HTML spec.
	     *
	     * @param str The string containing the entity (or a continuation of the entity).
	     * @param offset The current offset.
	     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	     */
	    EntityDecoder.prototype.stateNumericStart = function (str, offset) {
	        if (offset >= str.length) {
	            return -1;
	        }
	        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
	            this.state = EntityDecoderState.NumericHex;
	            this.consumed += 1;
	            return this.stateNumericHex(str, offset + 1);
	        }
	        this.state = EntityDecoderState.NumericDecimal;
	        return this.stateNumericDecimal(str, offset);
	    };
	    EntityDecoder.prototype.addToNumericResult = function (str, start, end, base) {
	        if (start !== end) {
	            var digitCount = end - start;
	            this.result =
	                this.result * Math.pow(base, digitCount) +
	                    parseInt(str.substr(start, digitCount), base);
	            this.consumed += digitCount;
	        }
	    };
	    /**
	     * Parses a hexadecimal numeric entity.
	     *
	     * Equivalent to the `Hexademical character reference state` in the HTML spec.
	     *
	     * @param str The string containing the entity (or a continuation of the entity).
	     * @param offset The current offset.
	     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	     */
	    EntityDecoder.prototype.stateNumericHex = function (str, offset) {
	        var startIdx = offset;
	        while (offset < str.length) {
	            var char = str.charCodeAt(offset);
	            if (isNumber(char) || isHexadecimalCharacter(char)) {
	                offset += 1;
	            }
	            else {
	                this.addToNumericResult(str, startIdx, offset, 16);
	                return this.emitNumericEntity(char, 3);
	            }
	        }
	        this.addToNumericResult(str, startIdx, offset, 16);
	        return -1;
	    };
	    /**
	     * Parses a decimal numeric entity.
	     *
	     * Equivalent to the `Decimal character reference state` in the HTML spec.
	     *
	     * @param str The string containing the entity (or a continuation of the entity).
	     * @param offset The current offset.
	     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	     */
	    EntityDecoder.prototype.stateNumericDecimal = function (str, offset) {
	        var startIdx = offset;
	        while (offset < str.length) {
	            var char = str.charCodeAt(offset);
	            if (isNumber(char)) {
	                offset += 1;
	            }
	            else {
	                this.addToNumericResult(str, startIdx, offset, 10);
	                return this.emitNumericEntity(char, 2);
	            }
	        }
	        this.addToNumericResult(str, startIdx, offset, 10);
	        return -1;
	    };
	    /**
	     * Validate and emit a numeric entity.
	     *
	     * Implements the logic from the `Hexademical character reference start
	     * state` and `Numeric character reference end state` in the HTML spec.
	     *
	     * @param lastCp The last code point of the entity. Used to see if the
	     *               entity was terminated with a semicolon.
	     * @param expectedLength The minimum number of characters that should be
	     *                       consumed. Used to validate that at least one digit
	     *                       was consumed.
	     * @returns The number of characters that were consumed.
	     */
	    EntityDecoder.prototype.emitNumericEntity = function (lastCp, expectedLength) {
	        var _a;
	        // Ensure we consumed at least one digit.
	        if (this.consumed <= expectedLength) {
	            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
	            return 0;
	        }
	        // Figure out if this is a legit end of the entity
	        if (lastCp === CharCodes.SEMI) {
	            this.consumed += 1;
	        }
	        else if (this.decodeMode === DecodingMode.Strict) {
	            return 0;
	        }
	        this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
	        if (this.errors) {
	            if (lastCp !== CharCodes.SEMI) {
	                this.errors.missingSemicolonAfterCharacterReference();
	            }
	            this.errors.validateNumericCharacterReference(this.result);
	        }
	        return this.consumed;
	    };
	    /**
	     * Parses a named entity.
	     *
	     * Equivalent to the `Named character reference state` in the HTML spec.
	     *
	     * @param str The string containing the entity (or a continuation of the entity).
	     * @param offset The current offset.
	     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
	     */
	    EntityDecoder.prototype.stateNamedEntity = function (str, offset) {
	        var decodeTree = this.decodeTree;
	        var current = decodeTree[this.treeIndex];
	        // The mask is the number of bytes of the value, including the current byte.
	        var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
	        for (; offset < str.length; offset++, this.excess++) {
	            var char = str.charCodeAt(offset);
	            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
	            if (this.treeIndex < 0) {
	                return this.result === 0 ||
	                    // If we are parsing an attribute
	                    (this.decodeMode === DecodingMode.Attribute &&
	                        // We shouldn't have consumed any characters after the entity,
	                        (valueLength === 0 ||
	                            // And there should be no invalid characters.
	                            isEntityInAttributeInvalidEnd(char)))
	                    ? 0
	                    : this.emitNotTerminatedNamedEntity();
	            }
	            current = decodeTree[this.treeIndex];
	            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
	            // If the branch is a value, store it and continue
	            if (valueLength !== 0) {
	                // If the entity is terminated by a semicolon, we are done.
	                if (char === CharCodes.SEMI) {
	                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
	                }
	                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
	                if (this.decodeMode !== DecodingMode.Strict) {
	                    this.result = this.treeIndex;
	                    this.consumed += this.excess;
	                    this.excess = 0;
	                }
	            }
	        }
	        return -1;
	    };
	    /**
	     * Emit a named entity that was not terminated with a semicolon.
	     *
	     * @returns The number of characters consumed.
	     */
	    EntityDecoder.prototype.emitNotTerminatedNamedEntity = function () {
	        var _a;
	        var _b = this, result = _b.result, decodeTree = _b.decodeTree;
	        var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
	        this.emitNamedEntityData(result, valueLength, this.consumed);
	        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
	        return this.consumed;
	    };
	    /**
	     * Emit a named entity.
	     *
	     * @param result The index of the entity in the decode tree.
	     * @param valueLength The number of bytes in the entity.
	     * @param consumed The number of characters consumed.
	     *
	     * @returns The number of characters consumed.
	     */
	    EntityDecoder.prototype.emitNamedEntityData = function (result, valueLength, consumed) {
	        var decodeTree = this.decodeTree;
	        this.emitCodePoint(valueLength === 1
	            ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH
	            : decodeTree[result + 1], consumed);
	        if (valueLength === 3) {
	            // For multi-byte values, we need to emit the second byte.
	            this.emitCodePoint(decodeTree[result + 2], consumed);
	        }
	        return consumed;
	    };
	    /**
	     * Signal to the parser that the end of the input was reached.
	     *
	     * Remaining data will be emitted and relevant errors will be produced.
	     *
	     * @returns The number of characters consumed.
	     */
	    EntityDecoder.prototype.end = function () {
	        var _a;
	        switch (this.state) {
	            case EntityDecoderState.NamedEntity: {
	                // Emit a named entity if we have one.
	                return this.result !== 0 &&
	                    (this.decodeMode !== DecodingMode.Attribute ||
	                        this.result === this.treeIndex)
	                    ? this.emitNotTerminatedNamedEntity()
	                    : 0;
	            }
	            // Otherwise, emit a numeric entity if we have one.
	            case EntityDecoderState.NumericDecimal: {
	                return this.emitNumericEntity(0, 2);
	            }
	            case EntityDecoderState.NumericHex: {
	                return this.emitNumericEntity(0, 3);
	            }
	            case EntityDecoderState.NumericStart: {
	                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
	                return 0;
	            }
	            case EntityDecoderState.EntityStart: {
	                // Return 0 if we have no entity.
	                return 0;
	            }
	        }
	    };
	    return EntityDecoder;
	}());
	exports.EntityDecoder = EntityDecoder;
	/**
	 * Creates a function that decodes entities in a string.
	 *
	 * @param decodeTree The decode tree.
	 * @returns A function that decodes entities in a string.
	 */
	function getDecoder(decodeTree) {
	    var ret = "";
	    var decoder = new EntityDecoder(decodeTree, function (str) { return (ret += (0, decode_codepoint_js_1.fromCodePoint)(str)); });
	    return function decodeWithTrie(str, decodeMode) {
	        var lastIndex = 0;
	        var offset = 0;
	        while ((offset = str.indexOf("&", offset)) >= 0) {
	            ret += str.slice(lastIndex, offset);
	            decoder.startEntity(decodeMode);
	            var len = decoder.write(str, 
	            // Skip the "&"
	            offset + 1);
	            if (len < 0) {
	                lastIndex = offset + decoder.end();
	                break;
	            }
	            lastIndex = offset + len;
	            // If `len` is 0, skip the current `&` and continue.
	            offset = len === 0 ? lastIndex + 1 : lastIndex;
	        }
	        var result = ret + str.slice(lastIndex);
	        // Make sure we don't keep a reference to the final string.
	        ret = "";
	        return result;
	    };
	}
	/**
	 * Determines the branch of the current node that is taken given the current
	 * character. This function is used to traverse the trie.
	 *
	 * @param decodeTree The trie.
	 * @param current The current node.
	 * @param nodeIdx The index right after the current node and its value.
	 * @param char The current character.
	 * @returns The index of the next node, or -1 if no branch is taken.
	 */
	function determineBranch(decodeTree, current, nodeIdx, char) {
	    var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
	    var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
	    // Case 1: Single branch encoded in jump offset
	    if (branchCount === 0) {
	        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
	    }
	    // Case 2: Multiple branches encoded in jump table
	    if (jumpOffset) {
	        var value = char - jumpOffset;
	        return value < 0 || value >= branchCount
	            ? -1
	            : decodeTree[nodeIdx + value] - 1;
	    }
	    // Case 3: Multiple branches encoded in dictionary
	    // Binary search for the character.
	    var lo = nodeIdx;
	    var hi = lo + branchCount - 1;
	    while (lo <= hi) {
	        var mid = (lo + hi) >>> 1;
	        var midVal = decodeTree[mid];
	        if (midVal < char) {
	            lo = mid + 1;
	        }
	        else if (midVal > char) {
	            hi = mid - 1;
	        }
	        else {
	            return decodeTree[mid + branchCount];
	        }
	    }
	    return -1;
	}
	exports.determineBranch = determineBranch;
	var htmlDecoder = getDecoder(decode_data_html_js_1.default);
	var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
	/**
	 * Decodes an HTML string.
	 *
	 * @param str The string to decode.
	 * @param mode The decoding mode.
	 * @returns The decoded string.
	 */
	function decodeHTML(str, mode) {
	    if (mode === void 0) { mode = DecodingMode.Legacy; }
	    return htmlDecoder(str, mode);
	}
	exports.decodeHTML = decodeHTML;
	/**
	 * Decodes an HTML string in an attribute.
	 *
	 * @param str The string to decode.
	 * @returns The decoded string.
	 */
	function decodeHTMLAttribute(str) {
	    return htmlDecoder(str, DecodingMode.Attribute);
	}
	exports.decodeHTMLAttribute = decodeHTMLAttribute;
	/**
	 * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
	 *
	 * @param str The string to decode.
	 * @returns The decoded string.
	 */
	function decodeHTMLStrict(str) {
	    return htmlDecoder(str, DecodingMode.Strict);
	}
	exports.decodeHTMLStrict = decodeHTMLStrict;
	/**
	 * Decodes an XML string, requiring all entities to be terminated by a semicolon.
	 *
	 * @param str The string to decode.
	 * @returns The decoded string.
	 */
	function decodeXML(str) {
	    return xmlDecoder(str, DecodingMode.Strict);
	}
	exports.decodeXML = decodeXML;
	
} (decode));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QuoteType = void 0;
	var decode_js_1 = decode;
	var CharCodes;
	(function (CharCodes) {
	    CharCodes[CharCodes["Tab"] = 9] = "Tab";
	    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
	    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
	    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
	    CharCodes[CharCodes["Space"] = 32] = "Space";
	    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
	    CharCodes[CharCodes["Number"] = 35] = "Number";
	    CharCodes[CharCodes["Amp"] = 38] = "Amp";
	    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
	    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
	    CharCodes[CharCodes["Dash"] = 45] = "Dash";
	    CharCodes[CharCodes["Slash"] = 47] = "Slash";
	    CharCodes[CharCodes["Zero"] = 48] = "Zero";
	    CharCodes[CharCodes["Nine"] = 57] = "Nine";
	    CharCodes[CharCodes["Semi"] = 59] = "Semi";
	    CharCodes[CharCodes["Lt"] = 60] = "Lt";
	    CharCodes[CharCodes["Eq"] = 61] = "Eq";
	    CharCodes[CharCodes["Gt"] = 62] = "Gt";
	    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
	    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
	    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
	    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
	    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
	    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
	    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
	    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
	    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
	})(CharCodes || (CharCodes = {}));
	/** All the states the tokenizer can be in. */
	var State;
	(function (State) {
	    State[State["Text"] = 1] = "Text";
	    State[State["BeforeTagName"] = 2] = "BeforeTagName";
	    State[State["InTagName"] = 3] = "InTagName";
	    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
	    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
	    State[State["InClosingTagName"] = 6] = "InClosingTagName";
	    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
	    // Attributes
	    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
	    State[State["InAttributeName"] = 9] = "InAttributeName";
	    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
	    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
	    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
	    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
	    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
	    // Declarations
	    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
	    State[State["InDeclaration"] = 16] = "InDeclaration";
	    // Processing instructions
	    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
	    // Comments & CDATA
	    State[State["BeforeComment"] = 18] = "BeforeComment";
	    State[State["CDATASequence"] = 19] = "CDATASequence";
	    State[State["InSpecialComment"] = 20] = "InSpecialComment";
	    State[State["InCommentLike"] = 21] = "InCommentLike";
	    // Special tags
	    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
	    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
	    State[State["InSpecialTag"] = 24] = "InSpecialTag";
	    State[State["InEntity"] = 25] = "InEntity";
	})(State || (State = {}));
	function isWhitespace(c) {
	    return (c === CharCodes.Space ||
	        c === CharCodes.NewLine ||
	        c === CharCodes.Tab ||
	        c === CharCodes.FormFeed ||
	        c === CharCodes.CarriageReturn);
	}
	function isEndOfTagSection(c) {
	    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
	}
	function isASCIIAlpha(c) {
	    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
	        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
	}
	var QuoteType;
	(function (QuoteType) {
	    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
	    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
	    QuoteType[QuoteType["Single"] = 2] = "Single";
	    QuoteType[QuoteType["Double"] = 3] = "Double";
	})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
	/**
	 * Sequences used to match longer strings.
	 *
	 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
	 * sequences with an increased offset.
	 */
	var Sequences = {
	    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
	    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
	    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
	    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
	    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
	    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
	};
	var Tokenizer = /** @class */ (function () {
	    function Tokenizer(_a, cbs) {
	        var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
	        var _this = this;
	        this.cbs = cbs;
	        /** The current state the tokenizer is in. */
	        this.state = State.Text;
	        /** The read buffer. */
	        this.buffer = "";
	        /** The beginning of the section that is currently being read. */
	        this.sectionStart = 0;
	        /** The index within the buffer that we are currently looking at. */
	        this.index = 0;
	        /** The start of the last entity. */
	        this.entityStart = 0;
	        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
	        this.baseState = State.Text;
	        /** For special parsing behavior inside of script and style tags. */
	        this.isSpecial = false;
	        /** Indicates whether the tokenizer has been paused. */
	        this.running = true;
	        /** The offset of the current buffer. */
	        this.offset = 0;
	        this.currentSequence = undefined;
	        this.sequenceIndex = 0;
	        this.xmlMode = xmlMode;
	        this.decodeEntities = decodeEntities;
	        this.entityDecoder = new decode_js_1.EntityDecoder(xmlMode ? decode_js_1.xmlDecodeTree : decode_js_1.htmlDecodeTree, function (cp, consumed) { return _this.emitCodePoint(cp, consumed); });
	    }
	    Tokenizer.prototype.reset = function () {
	        this.state = State.Text;
	        this.buffer = "";
	        this.sectionStart = 0;
	        this.index = 0;
	        this.baseState = State.Text;
	        this.currentSequence = undefined;
	        this.running = true;
	        this.offset = 0;
	    };
	    Tokenizer.prototype.write = function (chunk) {
	        this.offset += this.buffer.length;
	        this.buffer = chunk;
	        this.parse();
	    };
	    Tokenizer.prototype.end = function () {
	        if (this.running)
	            this.finish();
	    };
	    Tokenizer.prototype.pause = function () {
	        this.running = false;
	    };
	    Tokenizer.prototype.resume = function () {
	        this.running = true;
	        if (this.index < this.buffer.length + this.offset) {
	            this.parse();
	        }
	    };
	    Tokenizer.prototype.stateText = function (c) {
	        if (c === CharCodes.Lt ||
	            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
	            if (this.index > this.sectionStart) {
	                this.cbs.ontext(this.sectionStart, this.index);
	            }
	            this.state = State.BeforeTagName;
	            this.sectionStart = this.index;
	        }
	        else if (this.decodeEntities && c === CharCodes.Amp) {
	            this.startEntity();
	        }
	    };
	    Tokenizer.prototype.stateSpecialStartSequence = function (c) {
	        var isEnd = this.sequenceIndex === this.currentSequence.length;
	        var isMatch = isEnd
	            ? // If we are at the end of the sequence, make sure the tag name has ended
	                isEndOfTagSection(c)
	            : // Otherwise, do a case-insensitive comparison
	                (c | 0x20) === this.currentSequence[this.sequenceIndex];
	        if (!isMatch) {
	            this.isSpecial = false;
	        }
	        else if (!isEnd) {
	            this.sequenceIndex++;
	            return;
	        }
	        this.sequenceIndex = 0;
	        this.state = State.InTagName;
	        this.stateInTagName(c);
	    };
	    /** Look for an end tag. For <title> tags, also decode entities. */
	    Tokenizer.prototype.stateInSpecialTag = function (c) {
	        if (this.sequenceIndex === this.currentSequence.length) {
	            if (c === CharCodes.Gt || isWhitespace(c)) {
	                var endOfText = this.index - this.currentSequence.length;
	                if (this.sectionStart < endOfText) {
	                    // Spoof the index so that reported locations match up.
	                    var actualIndex = this.index;
	                    this.index = endOfText;
	                    this.cbs.ontext(this.sectionStart, endOfText);
	                    this.index = actualIndex;
	                }
	                this.isSpecial = false;
	                this.sectionStart = endOfText + 2; // Skip over the `</`
	                this.stateInClosingTagName(c);
	                return; // We are done; skip the rest of the function.
	            }
	            this.sequenceIndex = 0;
	        }
	        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
	            this.sequenceIndex += 1;
	        }
	        else if (this.sequenceIndex === 0) {
	            if (this.currentSequence === Sequences.TitleEnd) {
	                // We have to parse entities in <title> tags.
	                if (this.decodeEntities && c === CharCodes.Amp) {
	                    this.startEntity();
	                }
	            }
	            else if (this.fastForwardTo(CharCodes.Lt)) {
	                // Outside of <title> tags, we can fast-forward.
	                this.sequenceIndex = 1;
	            }
	        }
	        else {
	            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
	            this.sequenceIndex = Number(c === CharCodes.Lt);
	        }
	    };
	    Tokenizer.prototype.stateCDATASequence = function (c) {
	        if (c === Sequences.Cdata[this.sequenceIndex]) {
	            if (++this.sequenceIndex === Sequences.Cdata.length) {
	                this.state = State.InCommentLike;
	                this.currentSequence = Sequences.CdataEnd;
	                this.sequenceIndex = 0;
	                this.sectionStart = this.index + 1;
	            }
	        }
	        else {
	            this.sequenceIndex = 0;
	            this.state = State.InDeclaration;
	            this.stateInDeclaration(c); // Reconsume the character
	        }
	    };
	    /**
	     * When we wait for one specific character, we can speed things up
	     * by skipping through the buffer until we find it.
	     *
	     * @returns Whether the character was found.
	     */
	    Tokenizer.prototype.fastForwardTo = function (c) {
	        while (++this.index < this.buffer.length + this.offset) {
	            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
	                return true;
	            }
	        }
	        /*
	         * We increment the index at the end of the `parse` loop,
	         * so set it to `buffer.length - 1` here.
	         *
	         * TODO: Refactor `parse` to increment index before calling states.
	         */
	        this.index = this.buffer.length + this.offset - 1;
	        return false;
	    };
	    /**
	     * Comments and CDATA end with `-->` and `]]>`.
	     *
	     * Their common qualities are:
	     * - Their end sequences have a distinct character they start with.
	     * - That character is then repeated, so we have to check multiple repeats.
	     * - All characters but the start character of the sequence can be skipped.
	     */
	    Tokenizer.prototype.stateInCommentLike = function (c) {
	        if (c === this.currentSequence[this.sequenceIndex]) {
	            if (++this.sequenceIndex === this.currentSequence.length) {
	                if (this.currentSequence === Sequences.CdataEnd) {
	                    this.cbs.oncdata(this.sectionStart, this.index, 2);
	                }
	                else {
	                    this.cbs.oncomment(this.sectionStart, this.index, 2);
	                }
	                this.sequenceIndex = 0;
	                this.sectionStart = this.index + 1;
	                this.state = State.Text;
	            }
	        }
	        else if (this.sequenceIndex === 0) {
	            // Fast-forward to the first character of the sequence
	            if (this.fastForwardTo(this.currentSequence[0])) {
	                this.sequenceIndex = 1;
	            }
	        }
	        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
	            // Allow long sequences, eg. --->, ]]]>
	            this.sequenceIndex = 0;
	        }
	    };
	    /**
	     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
	     *
	     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
	     * We allow anything that wouldn't end the tag.
	     */
	    Tokenizer.prototype.isTagStartChar = function (c) {
	        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
	    };
	    Tokenizer.prototype.startSpecial = function (sequence, offset) {
	        this.isSpecial = true;
	        this.currentSequence = sequence;
	        this.sequenceIndex = offset;
	        this.state = State.SpecialStartSequence;
	    };
	    Tokenizer.prototype.stateBeforeTagName = function (c) {
	        if (c === CharCodes.ExclamationMark) {
	            this.state = State.BeforeDeclaration;
	            this.sectionStart = this.index + 1;
	        }
	        else if (c === CharCodes.Questionmark) {
	            this.state = State.InProcessingInstruction;
	            this.sectionStart = this.index + 1;
	        }
	        else if (this.isTagStartChar(c)) {
	            var lower = c | 0x20;
	            this.sectionStart = this.index;
	            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
	                this.startSpecial(Sequences.TitleEnd, 3);
	            }
	            else {
	                this.state =
	                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
	                        ? State.BeforeSpecialS
	                        : State.InTagName;
	            }
	        }
	        else if (c === CharCodes.Slash) {
	            this.state = State.BeforeClosingTagName;
	        }
	        else {
	            this.state = State.Text;
	            this.stateText(c);
	        }
	    };
	    Tokenizer.prototype.stateInTagName = function (c) {
	        if (isEndOfTagSection(c)) {
	            this.cbs.onopentagname(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	    };
	    Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
	        if (isWhitespace(c)) ;
	        else if (c === CharCodes.Gt) {
	            this.state = State.Text;
	        }
	        else {
	            this.state = this.isTagStartChar(c)
	                ? State.InClosingTagName
	                : State.InSpecialComment;
	            this.sectionStart = this.index;
	        }
	    };
	    Tokenizer.prototype.stateInClosingTagName = function (c) {
	        if (c === CharCodes.Gt || isWhitespace(c)) {
	            this.cbs.onclosetag(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.state = State.AfterClosingTagName;
	            this.stateAfterClosingTagName(c);
	        }
	    };
	    Tokenizer.prototype.stateAfterClosingTagName = function (c) {
	        // Skip everything until ">"
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeAttributeName = function (c) {
	        if (c === CharCodes.Gt) {
	            this.cbs.onopentagend(this.index);
	            if (this.isSpecial) {
	                this.state = State.InSpecialTag;
	                this.sequenceIndex = 0;
	            }
	            else {
	                this.state = State.Text;
	            }
	            this.sectionStart = this.index + 1;
	        }
	        else if (c === CharCodes.Slash) {
	            this.state = State.InSelfClosingTag;
	        }
	        else if (!isWhitespace(c)) {
	            this.state = State.InAttributeName;
	            this.sectionStart = this.index;
	        }
	    };
	    Tokenizer.prototype.stateInSelfClosingTag = function (c) {
	        if (c === CharCodes.Gt) {
	            this.cbs.onselfclosingtag(this.index);
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	            this.isSpecial = false; // Reset special state, in case of self-closing special tags
	        }
	        else if (!isWhitespace(c)) {
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	    };
	    Tokenizer.prototype.stateInAttributeName = function (c) {
	        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
	            this.cbs.onattribname(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.state = State.AfterAttributeName;
	            this.stateAfterAttributeName(c);
	        }
	    };
	    Tokenizer.prototype.stateAfterAttributeName = function (c) {
	        if (c === CharCodes.Eq) {
	            this.state = State.BeforeAttributeValue;
	        }
	        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
	            this.cbs.onattribend(QuoteType.NoValue, this.index);
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	        else if (!isWhitespace(c)) {
	            this.cbs.onattribend(QuoteType.NoValue, this.index);
	            this.state = State.InAttributeName;
	            this.sectionStart = this.index;
	        }
	    };
	    Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
	        if (c === CharCodes.DoubleQuote) {
	            this.state = State.InAttributeValueDq;
	            this.sectionStart = this.index + 1;
	        }
	        else if (c === CharCodes.SingleQuote) {
	            this.state = State.InAttributeValueSq;
	            this.sectionStart = this.index + 1;
	        }
	        else if (!isWhitespace(c)) {
	            this.sectionStart = this.index;
	            this.state = State.InAttributeValueNq;
	            this.stateInAttributeValueNoQuotes(c); // Reconsume token
	        }
	    };
	    Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
	        if (c === quote ||
	            (!this.decodeEntities && this.fastForwardTo(quote))) {
	            this.cbs.onattribdata(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.cbs.onattribend(quote === CharCodes.DoubleQuote
	                ? QuoteType.Double
	                : QuoteType.Single, this.index);
	            this.state = State.BeforeAttributeName;
	        }
	        else if (this.decodeEntities && c === CharCodes.Amp) {
	            this.startEntity();
	        }
	    };
	    Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
	        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
	    };
	    Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
	        this.handleInAttributeValue(c, CharCodes.SingleQuote);
	    };
	    Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
	        if (isWhitespace(c) || c === CharCodes.Gt) {
	            this.cbs.onattribdata(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.cbs.onattribend(QuoteType.Unquoted, this.index);
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	        else if (this.decodeEntities && c === CharCodes.Amp) {
	            this.startEntity();
	        }
	    };
	    Tokenizer.prototype.stateBeforeDeclaration = function (c) {
	        if (c === CharCodes.OpeningSquareBracket) {
	            this.state = State.CDATASequence;
	            this.sequenceIndex = 0;
	        }
	        else {
	            this.state =
	                c === CharCodes.Dash
	                    ? State.BeforeComment
	                    : State.InDeclaration;
	        }
	    };
	    Tokenizer.prototype.stateInDeclaration = function (c) {
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.cbs.ondeclaration(this.sectionStart, this.index);
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateInProcessingInstruction = function (c) {
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeComment = function (c) {
	        if (c === CharCodes.Dash) {
	            this.state = State.InCommentLike;
	            this.currentSequence = Sequences.CommentEnd;
	            // Allow short comments (eg. <!-->)
	            this.sequenceIndex = 2;
	            this.sectionStart = this.index + 1;
	        }
	        else {
	            this.state = State.InDeclaration;
	        }
	    };
	    Tokenizer.prototype.stateInSpecialComment = function (c) {
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.cbs.oncomment(this.sectionStart, this.index, 0);
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeSpecialS = function (c) {
	        var lower = c | 0x20;
	        if (lower === Sequences.ScriptEnd[3]) {
	            this.startSpecial(Sequences.ScriptEnd, 4);
	        }
	        else if (lower === Sequences.StyleEnd[3]) {
	            this.startSpecial(Sequences.StyleEnd, 4);
	        }
	        else {
	            this.state = State.InTagName;
	            this.stateInTagName(c); // Consume the token again
	        }
	    };
	    Tokenizer.prototype.startEntity = function () {
	        this.baseState = this.state;
	        this.state = State.InEntity;
	        this.entityStart = this.index;
	        this.entityDecoder.startEntity(this.xmlMode
	            ? decode_js_1.DecodingMode.Strict
	            : this.baseState === State.Text ||
	                this.baseState === State.InSpecialTag
	                ? decode_js_1.DecodingMode.Legacy
	                : decode_js_1.DecodingMode.Attribute);
	    };
	    Tokenizer.prototype.stateInEntity = function () {
	        var length = this.entityDecoder.write(this.buffer, this.index - this.offset);
	        // If `length` is positive, we are done with the entity.
	        if (length >= 0) {
	            this.state = this.baseState;
	            if (length === 0) {
	                this.index = this.entityStart;
	            }
	        }
	        else {
	            // Mark buffer as consumed.
	            this.index = this.offset + this.buffer.length - 1;
	        }
	    };
	    /**
	     * Remove data that has already been consumed from the buffer.
	     */
	    Tokenizer.prototype.cleanup = function () {
	        // If we are inside of text or attributes, emit what we already have.
	        if (this.running && this.sectionStart !== this.index) {
	            if (this.state === State.Text ||
	                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
	                this.cbs.ontext(this.sectionStart, this.index);
	                this.sectionStart = this.index;
	            }
	            else if (this.state === State.InAttributeValueDq ||
	                this.state === State.InAttributeValueSq ||
	                this.state === State.InAttributeValueNq) {
	                this.cbs.onattribdata(this.sectionStart, this.index);
	                this.sectionStart = this.index;
	            }
	        }
	    };
	    Tokenizer.prototype.shouldContinue = function () {
	        return this.index < this.buffer.length + this.offset && this.running;
	    };
	    /**
	     * Iterates through the buffer, calling the function corresponding to the current state.
	     *
	     * States that are more likely to be hit are higher up, as a performance improvement.
	     */
	    Tokenizer.prototype.parse = function () {
	        while (this.shouldContinue()) {
	            var c = this.buffer.charCodeAt(this.index - this.offset);
	            switch (this.state) {
	                case State.Text: {
	                    this.stateText(c);
	                    break;
	                }
	                case State.SpecialStartSequence: {
	                    this.stateSpecialStartSequence(c);
	                    break;
	                }
	                case State.InSpecialTag: {
	                    this.stateInSpecialTag(c);
	                    break;
	                }
	                case State.CDATASequence: {
	                    this.stateCDATASequence(c);
	                    break;
	                }
	                case State.InAttributeValueDq: {
	                    this.stateInAttributeValueDoubleQuotes(c);
	                    break;
	                }
	                case State.InAttributeName: {
	                    this.stateInAttributeName(c);
	                    break;
	                }
	                case State.InCommentLike: {
	                    this.stateInCommentLike(c);
	                    break;
	                }
	                case State.InSpecialComment: {
	                    this.stateInSpecialComment(c);
	                    break;
	                }
	                case State.BeforeAttributeName: {
	                    this.stateBeforeAttributeName(c);
	                    break;
	                }
	                case State.InTagName: {
	                    this.stateInTagName(c);
	                    break;
	                }
	                case State.InClosingTagName: {
	                    this.stateInClosingTagName(c);
	                    break;
	                }
	                case State.BeforeTagName: {
	                    this.stateBeforeTagName(c);
	                    break;
	                }
	                case State.AfterAttributeName: {
	                    this.stateAfterAttributeName(c);
	                    break;
	                }
	                case State.InAttributeValueSq: {
	                    this.stateInAttributeValueSingleQuotes(c);
	                    break;
	                }
	                case State.BeforeAttributeValue: {
	                    this.stateBeforeAttributeValue(c);
	                    break;
	                }
	                case State.BeforeClosingTagName: {
	                    this.stateBeforeClosingTagName(c);
	                    break;
	                }
	                case State.AfterClosingTagName: {
	                    this.stateAfterClosingTagName(c);
	                    break;
	                }
	                case State.BeforeSpecialS: {
	                    this.stateBeforeSpecialS(c);
	                    break;
	                }
	                case State.InAttributeValueNq: {
	                    this.stateInAttributeValueNoQuotes(c);
	                    break;
	                }
	                case State.InSelfClosingTag: {
	                    this.stateInSelfClosingTag(c);
	                    break;
	                }
	                case State.InDeclaration: {
	                    this.stateInDeclaration(c);
	                    break;
	                }
	                case State.BeforeDeclaration: {
	                    this.stateBeforeDeclaration(c);
	                    break;
	                }
	                case State.BeforeComment: {
	                    this.stateBeforeComment(c);
	                    break;
	                }
	                case State.InProcessingInstruction: {
	                    this.stateInProcessingInstruction(c);
	                    break;
	                }
	                case State.InEntity: {
	                    this.stateInEntity();
	                    break;
	                }
	            }
	            this.index++;
	        }
	        this.cleanup();
	    };
	    Tokenizer.prototype.finish = function () {
	        if (this.state === State.InEntity) {
	            this.entityDecoder.end();
	            this.state = this.baseState;
	        }
	        this.handleTrailingData();
	        this.cbs.onend();
	    };
	    /** Handle any trailing data. */
	    Tokenizer.prototype.handleTrailingData = function () {
	        var endIndex = this.buffer.length + this.offset;
	        // If there is no remaining data, we are done.
	        if (this.sectionStart >= endIndex) {
	            return;
	        }
	        if (this.state === State.InCommentLike) {
	            if (this.currentSequence === Sequences.CdataEnd) {
	                this.cbs.oncdata(this.sectionStart, endIndex, 0);
	            }
	            else {
	                this.cbs.oncomment(this.sectionStart, endIndex, 0);
	            }
	        }
	        else if (this.state === State.InTagName ||
	            this.state === State.BeforeAttributeName ||
	            this.state === State.BeforeAttributeValue ||
	            this.state === State.AfterAttributeName ||
	            this.state === State.InAttributeName ||
	            this.state === State.InAttributeValueSq ||
	            this.state === State.InAttributeValueDq ||
	            this.state === State.InAttributeValueNq ||
	            this.state === State.InClosingTagName) ;
	        else {
	            this.cbs.ontext(this.sectionStart, endIndex);
	        }
	    };
	    Tokenizer.prototype.emitCodePoint = function (cp, consumed) {
	        if (this.baseState !== State.Text &&
	            this.baseState !== State.InSpecialTag) {
	            if (this.sectionStart < this.entityStart) {
	                this.cbs.onattribdata(this.sectionStart, this.entityStart);
	            }
	            this.sectionStart = this.entityStart + consumed;
	            this.index = this.sectionStart - 1;
	            this.cbs.onattribentity(cp);
	        }
	        else {
	            if (this.sectionStart < this.entityStart) {
	                this.cbs.ontext(this.sectionStart, this.entityStart);
	            }
	            this.sectionStart = this.entityStart + consumed;
	            this.index = this.sectionStart - 1;
	            this.cbs.ontextentity(cp, this.sectionStart);
	        }
	    };
	    return Tokenizer;
	}());
	exports.default = Tokenizer;
	
} (Tokenizer));

var __createBinding$1 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$1 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$1 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
    __setModuleDefault$1(result, mod);
    return result;
};
Object.defineProperty(Parser$1, "__esModule", { value: true });
Parser$1.Parser = void 0;
var Tokenizer_js_1 = __importStar$1(Tokenizer);
var decode_js_1 = decode;
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
var pTag = new Set(["p"]);
var tableSectionTags = new Set(["thead", "tbody"]);
var ddtTags = new Set(["dd", "dt"]);
var rtpTags = new Set(["rt", "rp"]);
var openImpliesClose = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags],
]);
var voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
]);
var reNameEnd = /\s|\//;
var Parser = /** @class */ (function () {
    function Parser(cbs, options) {
        if (options === void 0) { options = {}; }
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */
        this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.htmlMode = !this.options.xmlMode;
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : this.htmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_js_1.default)(this.options, this);
        this.foreignContext = [!this.htmlMode];
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */
    Parser.prototype.ontext = function (start, endIndex) {
        var _a, _b;
        var data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    };
    /** @internal */
    Parser.prototype.ontextentity = function (cp, endIndex) {
        var _a, _b;
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, decode_js_1.fromCodePoint)(cp));
        this.startIndex = endIndex;
    };
    /**
     * Checks if the current tag is a void element. Override this if you want
     * to specify your own additional void elements.
     */
    Parser.prototype.isVoidElement = function (name) {
        return this.htmlMode && voidElements.has(name);
    };
    /** @internal */
    Parser.prototype.onopentagname = function (start, endIndex) {
        this.endIndex = endIndex;
        var name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    };
    Parser.prototype.emitOpenTag = function (name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        var impliesClose = this.htmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
                var element = this.stack.shift();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.unshift(name);
            if (this.htmlMode) {
                if (foreignContextElements.has(name)) {
                    this.foreignContext.unshift(true);
                }
                else if (htmlIntegrationElements.has(name)) {
                    this.foreignContext.unshift(false);
                }
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    };
    Parser.prototype.endOpenTag = function (isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    };
    /** @internal */
    Parser.prototype.onopentagend = function (endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onclosetag = function (start, endIndex) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.endIndex = endIndex;
        var name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (this.htmlMode &&
            (foreignContextElements.has(name) ||
                htmlIntegrationElements.has(name))) {
            this.foreignContext.shift();
        }
        if (!this.isVoidElement(name)) {
            var pos = this.stack.indexOf(name);
            if (pos !== -1) {
                for (var index = 0; index <= pos; index++) {
                    var element = this.stack.shift();
                    // We know the stack has sufficient elements.
                    (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, index !== pos);
                }
            }
            else if (this.htmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        }
        else if (this.htmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, "br");
            (_f = (_e = this.cbs).onopentag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", {}, true);
            (_h = (_g = this.cbs).onclosetag) === null || _h === void 0 ? void 0 : _h.call(_g, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onselfclosingtag = function (endIndex) {
        this.endIndex = endIndex;
        if (this.options.recognizeSelfClosing || this.foreignContext[0]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        }
        else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    };
    Parser.prototype.closeCurrentTag = function (isOpenImplied) {
        var _a, _b;
        var name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[0] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.shift();
        }
    };
    /** @internal */
    Parser.prototype.onattribname = function (start, endIndex) {
        this.startIndex = start;
        var name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames
            ? name.toLowerCase()
            : name;
    };
    /** @internal */
    Parser.prototype.onattribdata = function (start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    };
    /** @internal */
    Parser.prototype.onattribentity = function (cp) {
        this.attribvalue += (0, decode_js_1.fromCodePoint)(cp);
    };
    /** @internal */
    Parser.prototype.onattribend = function (quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === Tokenizer_js_1.QuoteType.Double
            ? '"'
            : quote === Tokenizer_js_1.QuoteType.Single
                ? "'"
                : quote === Tokenizer_js_1.QuoteType.NoValue
                    ? undefined
                    : null);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    };
    Parser.prototype.getInstructionName = function (value) {
        var index = value.search(reNameEnd);
        var name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    };
    /** @internal */
    Parser.prototype.ondeclaration = function (start, endIndex) {
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            var name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onprocessinginstruction = function (start, endIndex) {
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            var name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.oncomment = function (start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.oncdata = function (start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex - offset);
        if (!this.htmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[".concat(value, "]]"));
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onend = function () {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for (var index = 0; index < this.stack.length; index++) {
                this.cbs.onclosetag(this.stack[index], true);
            }
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    Parser.prototype.reset = function () {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.foreignContext.length = 0;
        this.foreignContext.unshift(!this.htmlMode);
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    };
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    Parser.prototype.parseComplete = function (data) {
        this.reset();
        this.end(data);
    };
    Parser.prototype.getSlice = function (start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
        }
        var slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    };
    Parser.prototype.shiftBuffer = function () {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    };
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    Parser.prototype.write = function (chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    };
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    Parser.prototype.end = function (chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
        }
        if (chunk)
            this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    };
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    Parser.prototype.pause = function () {
        this.tokenizer.pause();
    };
    /**
     * Resumes parsing after `pause` was called.
     */
    Parser.prototype.resume = function () {
        this.tokenizer.resume();
        while (this.tokenizer.running &&
            this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
            this.tokenizer.end();
    };
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    Parser.prototype.parseChunk = function (chunk) {
        this.write(chunk);
    };
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    Parser.prototype.done = function (chunk) {
        this.end(chunk);
    };
    return Parser;
}());
Parser$1.Parser = Parser;

var lib$5 = {};

var lib$4 = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
	/** Types of elements found in htmlparser2's DOM */
	var ElementType;
	(function (ElementType) {
	    /** Type for the root element of a document */
	    ElementType["Root"] = "root";
	    /** Type for Text */
	    ElementType["Text"] = "text";
	    /** Type for <? ... ?> */
	    ElementType["Directive"] = "directive";
	    /** Type for <!-- ... --> */
	    ElementType["Comment"] = "comment";
	    /** Type for <script> tags */
	    ElementType["Script"] = "script";
	    /** Type for <style> tags */
	    ElementType["Style"] = "style";
	    /** Type for Any tag */
	    ElementType["Tag"] = "tag";
	    /** Type for <![CDATA[ ... ]]> */
	    ElementType["CDATA"] = "cdata";
	    /** Type for <!doctype ...> */
	    ElementType["Doctype"] = "doctype";
	})(ElementType = exports.ElementType || (exports.ElementType = {}));
	/**
	 * Tests whether an element is a tag or not.
	 *
	 * @param elem Element to test
	 */
	function isTag(elem) {
	    return (elem.type === ElementType.Tag ||
	        elem.type === ElementType.Script ||
	        elem.type === ElementType.Style);
	}
	exports.isTag = isTag;
	// Exports for backwards compatibility
	/** Type for the root element of a document */
	exports.Root = ElementType.Root;
	/** Type for Text */
	exports.Text = ElementType.Text;
	/** Type for <? ... ?> */
	exports.Directive = ElementType.Directive;
	/** Type for <!-- ... --> */
	exports.Comment = ElementType.Comment;
	/** Type for <script> tags */
	exports.Script = ElementType.Script;
	/** Type for <style> tags */
	exports.Style = ElementType.Style;
	/** Type for Any tag */
	exports.Tag = ElementType.Tag;
	/** Type for <![CDATA[ ... ]]> */
	exports.CDATA = ElementType.CDATA;
	/** Type for <!doctype ...> */
	exports.Doctype = ElementType.Doctype; 
} (lib$4));

var node = {};

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.CDATA = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1$1 = lib$4;
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node$1 = /** @class */ (function () {
    function Node() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
node.Node = Node$1;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends(DataNode, _super);
    /**
     * @param data The content of the data node
     */
    function DataNode(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node$1));
node.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text$1 = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.Text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeType", {
        get: function () {
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(DataNode));
node.Text = Text$1;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.Comment;
        return _this;
    }
    Object.defineProperty(Comment.prototype, "nodeType", {
        get: function () {
            return 8;
        },
        enumerable: false,
        configurable: true
    });
    return Comment;
}(DataNode));
node.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1$1.ElementType.Directive;
        return _this;
    }
    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return ProcessingInstruction;
}(DataNode));
node.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends(NodeWithChildren, _super);
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node$1));
node.NodeWithChildren = NodeWithChildren;
var CDATA = /** @class */ (function (_super) {
    __extends(CDATA, _super);
    function CDATA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.CDATA;
        return _this;
    }
    Object.defineProperty(CDATA.prototype, "nodeType", {
        get: function () {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return CDATA;
}(NodeWithChildren));
node.CDATA = CDATA;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.Root;
        return _this;
    }
    Object.defineProperty(Document.prototype, "nodeType", {
        get: function () {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(NodeWithChildren));
node.Document = Document;
/**
 * An element within the DOM.
 */
var Element$1 = /** @class */ (function (_super) {
    __extends(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1$1.ElementType.Script
            : name === "style"
                ? domelementtype_1$1.ElementType.Style
                : domelementtype_1$1.ElementType.Tag; }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Element.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
node.Element = Element$1;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1$1.isTag)(node);
}
node.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1$1.ElementType.CDATA;
}
node.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1$1.ElementType.Text;
}
node.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1$1.ElementType.Comment;
}
node.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1$1.ElementType.Directive;
}
node.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1$1.ElementType.Root;
}
node.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
node.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text$1(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element$1(node.name, __assign$1({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign$1({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign$1({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
node.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DomHandler = void 0;
	var domelementtype_1 = lib$4;
	var node_js_1 = node;
	__exportStar(node, exports);
	// Default options
	var defaultOpts = {
	    withStartIndices: false,
	    withEndIndices: false,
	    xmlMode: false,
	};
	var DomHandler = /** @class */ (function () {
	    /**
	     * @param callback Called once parsing has completed.
	     * @param options Settings for the handler.
	     * @param elementCB Callback whenever a tag is closed.
	     */
	    function DomHandler(callback, options, elementCB) {
	        /** The elements of the DOM */
	        this.dom = [];
	        /** The root element for the DOM */
	        this.root = new node_js_1.Document(this.dom);
	        /** Indicated whether parsing has been completed. */
	        this.done = false;
	        /** Stack of open tags. */
	        this.tagStack = [this.root];
	        /** A data node that is still being written to. */
	        this.lastNode = null;
	        /** Reference to the parser instance. Used for location information. */
	        this.parser = null;
	        // Make it possible to skip arguments, for backwards-compatibility
	        if (typeof options === "function") {
	            elementCB = options;
	            options = defaultOpts;
	        }
	        if (typeof callback === "object") {
	            options = callback;
	            callback = undefined;
	        }
	        this.callback = callback !== null && callback !== void 0 ? callback : null;
	        this.options = options !== null && options !== void 0 ? options : defaultOpts;
	        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
	    }
	    DomHandler.prototype.onparserinit = function (parser) {
	        this.parser = parser;
	    };
	    // Resets the handler back to starting state
	    DomHandler.prototype.onreset = function () {
	        this.dom = [];
	        this.root = new node_js_1.Document(this.dom);
	        this.done = false;
	        this.tagStack = [this.root];
	        this.lastNode = null;
	        this.parser = null;
	    };
	    // Signals the handler that parsing is done
	    DomHandler.prototype.onend = function () {
	        if (this.done)
	            return;
	        this.done = true;
	        this.parser = null;
	        this.handleCallback(null);
	    };
	    DomHandler.prototype.onerror = function (error) {
	        this.handleCallback(error);
	    };
	    DomHandler.prototype.onclosetag = function () {
	        this.lastNode = null;
	        var elem = this.tagStack.pop();
	        if (this.options.withEndIndices) {
	            elem.endIndex = this.parser.endIndex;
	        }
	        if (this.elementCB)
	            this.elementCB(elem);
	    };
	    DomHandler.prototype.onopentag = function (name, attribs) {
	        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
	        var element = new node_js_1.Element(name, attribs, undefined, type);
	        this.addNode(element);
	        this.tagStack.push(element);
	    };
	    DomHandler.prototype.ontext = function (data) {
	        var lastNode = this.lastNode;
	        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
	            lastNode.data += data;
	            if (this.options.withEndIndices) {
	                lastNode.endIndex = this.parser.endIndex;
	            }
	        }
	        else {
	            var node = new node_js_1.Text(data);
	            this.addNode(node);
	            this.lastNode = node;
	        }
	    };
	    DomHandler.prototype.oncomment = function (data) {
	        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
	            this.lastNode.data += data;
	            return;
	        }
	        var node = new node_js_1.Comment(data);
	        this.addNode(node);
	        this.lastNode = node;
	    };
	    DomHandler.prototype.oncommentend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.oncdatastart = function () {
	        var text = new node_js_1.Text("");
	        var node = new node_js_1.CDATA([text]);
	        this.addNode(node);
	        text.parent = node;
	        this.lastNode = text;
	    };
	    DomHandler.prototype.oncdataend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.onprocessinginstruction = function (name, data) {
	        var node = new node_js_1.ProcessingInstruction(name, data);
	        this.addNode(node);
	    };
	    DomHandler.prototype.handleCallback = function (error) {
	        if (typeof this.callback === "function") {
	            this.callback(error, this.dom);
	        }
	        else if (error) {
	            throw error;
	        }
	    };
	    DomHandler.prototype.addNode = function (node) {
	        var parent = this.tagStack[this.tagStack.length - 1];
	        var previousSibling = parent.children[parent.children.length - 1];
	        if (this.options.withStartIndices) {
	            node.startIndex = this.parser.startIndex;
	        }
	        if (this.options.withEndIndices) {
	            node.endIndex = this.parser.endIndex;
	        }
	        parent.children.push(node);
	        if (previousSibling) {
	            node.prev = previousSibling;
	            previousSibling.next = node;
	        }
	        node.parent = parent;
	        this.lastNode = null;
	    };
	    return DomHandler;
	}());
	exports.DomHandler = DomHandler;
	exports.default = DomHandler; 
} (lib$5));

var lib$3 = {};

var stringify = {};

var lib$2 = {};

var lib$1 = {};

var encode = {};

var encodeHtml = {};

// Generated using scripts/write-encode-map.ts
Object.defineProperty(encodeHtml, "__esModule", { value: true });
function restoreDiff(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i][0] += arr[i - 1][0] + 1;
    }
    return arr;
}
// prettier-ignore
encodeHtml.default = new Map(/* #__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* #__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));

var _escape = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
	exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
	var xmlCodeMap = new Map([
	    [34, "&quot;"],
	    [38, "&amp;"],
	    [39, "&apos;"],
	    [60, "&lt;"],
	    [62, "&gt;"],
	]);
	// For compatibility with node < 4, we wrap `codePointAt`
	exports.getCodePoint = 
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	String.prototype.codePointAt != null
	    ? function (str, index) { return str.codePointAt(index); }
	    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	        function (c, index) {
	            return (c.charCodeAt(index) & 0xfc00) === 0xd800
	                ? (c.charCodeAt(index) - 0xd800) * 0x400 +
	                    c.charCodeAt(index + 1) -
	                    0xdc00 +
	                    0x10000
	                : c.charCodeAt(index);
	        };
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in XML
	 * documents using XML entities.
	 *
	 * If a character has no equivalent entity, a
	 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	 */
	function encodeXML(str) {
	    var ret = "";
	    var lastIdx = 0;
	    var match;
	    while ((match = exports.xmlReplacer.exec(str)) !== null) {
	        var i = match.index;
	        var char = str.charCodeAt(i);
	        var next = xmlCodeMap.get(char);
	        if (next !== undefined) {
	            ret += str.substring(lastIdx, i) + next;
	            lastIdx = i + 1;
	        }
	        else {
	            ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
	            // Increase by 1 if we have a surrogate pair
	            lastIdx = exports.xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
	        }
	    }
	    return ret + str.substr(lastIdx);
	}
	exports.encodeXML = encodeXML;
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in XML
	 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
	 *
	 * Have a look at `escapeUTF8` if you want a more concise output at the expense
	 * of reduced transportability.
	 *
	 * @param data String to escape.
	 */
	exports.escape = encodeXML;
	/**
	 * Creates a function that escapes all characters matched by the given regular
	 * expression using the given map of characters to escape to their entities.
	 *
	 * @param regex Regular expression to match characters to escape.
	 * @param map Map of characters to escape to their entities.
	 *
	 * @returns Function that escapes all characters matched by the given regular
	 * expression using the given map of characters to escape to their entities.
	 */
	function getEscaper(regex, map) {
	    return function escape(data) {
	        var match;
	        var lastIdx = 0;
	        var result = "";
	        while ((match = regex.exec(data))) {
	            if (lastIdx !== match.index) {
	                result += data.substring(lastIdx, match.index);
	            }
	            // We know that this character will be in the map.
	            result += map.get(match[0].charCodeAt(0));
	            // Every match will be of length 1
	            lastIdx = match.index + 1;
	        }
	        return result + data.substring(lastIdx);
	    };
	}
	/**
	 * Encodes all characters not valid in XML documents using XML entities.
	 *
	 * Note that the output will be character-set dependent.
	 *
	 * @param data String to escape.
	 */
	exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
	/**
	 * Encodes all characters that have to be escaped in HTML attributes,
	 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	 *
	 * @param data String to escape.
	 */
	exports.escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
	    [34, "&quot;"],
	    [38, "&amp;"],
	    [160, "&nbsp;"],
	]));
	/**
	 * Encodes all characters that have to be escaped in HTML text,
	 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	 *
	 * @param data String to escape.
	 */
	exports.escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
	    [38, "&amp;"],
	    [60, "&lt;"],
	    [62, "&gt;"],
	    [160, "&nbsp;"],
	]));
	
} (_escape));

var __importDefault$4 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.encodeNonAsciiHTML = encode.encodeHTML = void 0;
var encode_html_js_1 = __importDefault$4(encodeHtml);
var escape_js_1 = _escape;
var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
/**
 * Encodes all characters in the input using HTML entities. This includes
 * characters that are valid ASCII characters in HTML documents, such as `#`.
 *
 * To get a more compact output, consider using the `encodeNonAsciiHTML`
 * function, which will only encode characters that are not valid in HTML
 * documents, as well as non-ASCII characters.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encodeHTML(data) {
    return encodeHTMLTrieRe(htmlReplacer, data);
}
encode.encodeHTML = encodeHTML;
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities. This function will not encode characters that
 * are valid in HTML documents, such as `#`.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encodeNonAsciiHTML(data) {
    return encodeHTMLTrieRe(escape_js_1.xmlReplacer, data);
}
encode.encodeNonAsciiHTML = encodeNonAsciiHTML;
function encodeHTMLTrieRe(regExp, str) {
    var ret = "";
    var lastIdx = 0;
    var match;
    while ((match = regExp.exec(str)) !== null) {
        var i = match.index;
        ret += str.substring(lastIdx, i);
        var char = str.charCodeAt(i);
        var next = encode_html_js_1.default.get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (i + 1 < str.length) {
                var nextChar = str.charCodeAt(i + 1);
                var value = typeof next.n === "number"
                    ? next.n === nextChar
                        ? next.o
                        : undefined
                    : next.n.get(nextChar);
                if (value !== undefined) {
                    ret += value;
                    lastIdx = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entity.
        if (next !== undefined) {
            ret += next;
            lastIdx = i + 1;
        }
        else {
            var cp = (0, escape_js_1.getCodePoint)(str, i);
            ret += "&#x".concat(cp.toString(16), ";");
            // Increase by 1 if we have a surrogate pair
            lastIdx = regExp.lastIndex += Number(cp !== char);
        }
    }
    return ret + str.substr(lastIdx);
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLAttribute = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.DecodingMode = exports.EntityDecoder = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = exports.EncodingMode = exports.EntityLevel = void 0;
	var decode_js_1 = decode;
	var encode_js_1 = encode;
	var escape_js_1 = _escape;
	/** The level of entities to support. */
	var EntityLevel;
	(function (EntityLevel) {
	    /** Support only XML entities. */
	    EntityLevel[EntityLevel["XML"] = 0] = "XML";
	    /** Support HTML entities, which are a superset of XML entities. */
	    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
	})(EntityLevel = exports.EntityLevel || (exports.EntityLevel = {}));
	var EncodingMode;
	(function (EncodingMode) {
	    /**
	     * The output is UTF-8 encoded. Only characters that need escaping within
	     * XML will be escaped.
	     */
	    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
	    /**
	     * The output consists only of ASCII characters. Characters that need
	     * escaping within HTML, and characters that aren't ASCII characters will
	     * be escaped.
	     */
	    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
	    /**
	     * Encode all characters that have an equivalent entity, as well as all
	     * characters that are not ASCII characters.
	     */
	    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
	    /**
	     * Encode all characters that have to be escaped in HTML attributes,
	     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	     */
	    EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
	    /**
	     * Encode all characters that have to be escaped in HTML text,
	     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	     */
	    EncodingMode[EncodingMode["Text"] = 4] = "Text";
	})(EncodingMode = exports.EncodingMode || (exports.EncodingMode = {}));
	/**
	 * Decodes a string with entities.
	 *
	 * @param data String to decode.
	 * @param options Decoding options.
	 */
	function decode$1(data, options) {
	    if (options === void 0) { options = EntityLevel.XML; }
	    var level = typeof options === "number" ? options : options.level;
	    if (level === EntityLevel.HTML) {
	        var mode = typeof options === "object" ? options.mode : undefined;
	        return (0, decode_js_1.decodeHTML)(data, mode);
	    }
	    return (0, decode_js_1.decodeXML)(data);
	}
	exports.decode = decode$1;
	/**
	 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
	 *
	 * @param data String to decode.
	 * @param options Decoding options.
	 * @deprecated Use `decode` with the `mode` set to `Strict`.
	 */
	function decodeStrict(data, options) {
	    var _a;
	    if (options === void 0) { options = EntityLevel.XML; }
	    var opts = typeof options === "number" ? { level: options } : options;
	    (_a = opts.mode) !== null && _a !== void 0 ? _a : (opts.mode = decode_js_1.DecodingMode.Strict);
	    return decode$1(data, opts);
	}
	exports.decodeStrict = decodeStrict;
	/**
	 * Encodes a string with entities.
	 *
	 * @param data String to encode.
	 * @param options Encoding options.
	 */
	function encode$1(data, options) {
	    if (options === void 0) { options = EntityLevel.XML; }
	    var opts = typeof options === "number" ? { level: options } : options;
	    // Mode `UTF8` just escapes XML entities
	    if (opts.mode === EncodingMode.UTF8)
	        return (0, escape_js_1.escapeUTF8)(data);
	    if (opts.mode === EncodingMode.Attribute)
	        return (0, escape_js_1.escapeAttribute)(data);
	    if (opts.mode === EncodingMode.Text)
	        return (0, escape_js_1.escapeText)(data);
	    if (opts.level === EntityLevel.HTML) {
	        if (opts.mode === EncodingMode.ASCII) {
	            return (0, encode_js_1.encodeNonAsciiHTML)(data);
	        }
	        return (0, encode_js_1.encodeHTML)(data);
	    }
	    // ASCII and Extensive are equivalent
	    return (0, escape_js_1.encodeXML)(data);
	}
	exports.encode = encode$1;
	var escape_js_2 = _escape;
	Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return escape_js_2.encodeXML; } });
	Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return escape_js_2.escape; } });
	Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return escape_js_2.escapeUTF8; } });
	Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function () { return escape_js_2.escapeAttribute; } });
	Object.defineProperty(exports, "escapeText", { enumerable: true, get: function () { return escape_js_2.escapeText; } });
	var encode_js_2 = encode;
	Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
	Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_js_2.encodeNonAsciiHTML; } });
	// Legacy aliases (deprecated)
	Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
	Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
	var decode_js_2 = decode;
	Object.defineProperty(exports, "EntityDecoder", { enumerable: true, get: function () { return decode_js_2.EntityDecoder; } });
	Object.defineProperty(exports, "DecodingMode", { enumerable: true, get: function () { return decode_js_2.DecodingMode; } });
	Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
	Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
	Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
	Object.defineProperty(exports, "decodeHTMLAttribute", { enumerable: true, get: function () { return decode_js_2.decodeHTMLAttribute; } });
	// Legacy aliases (deprecated)
	Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
	Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
	Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
	Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
	Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
	
} (lib$1));

var foreignNames = {};

Object.defineProperty(foreignNames, "__esModule", { value: true });
foreignNames.attributeNames = foreignNames.elementNames = void 0;
foreignNames.elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
].map(function (val) { return [val.toLowerCase(), val]; }));
foreignNames.attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
].map(function (val) { return [val.toLowerCase(), val]; }));

var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(lib$2, "__esModule", { value: true });
lib$2.render = void 0;
/*
 * Module dependencies
 */
var ElementType = __importStar(lib$4);
var entities_1 = lib$1;
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */
var foreignNames_js_1 = foreignNames;
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes)
        return;
    var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
        ? replaceQuotes
        : opts.xmlMode || opts.encodeEntities !== "utf8"
            ? entities_1.encodeXML
            : entities_1.escapeAttribute;
    return Object.keys(attributes)
        .map(function (key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return "".concat(key, "=\"").concat(encode(value), "\"");
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options) {
    if (options === void 0) { options = {}; }
    var nodes = "length" in node ? node : [node];
    var output = "";
    for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
lib$2.render = render;
lib$2.default = render;
function renderNode(node, options) {
    switch (node.type) {
        case ElementType.Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case ElementType.Doctype:
        case ElementType.Directive:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
    }
    var tag = "<".concat(elem.name);
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += " ".concat(attribs);
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</".concat(elem.name, ">");
        }
    }
    return tag;
}
function renderDirective(elem) {
    return "<".concat(elem.data, ">");
}
function renderText(elem, opts) {
    var _a;
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data =
            opts.xmlMode || opts.encodeEntities !== "utf8"
                ? (0, entities_1.encodeXML)(data)
                : (0, entities_1.escapeText)(data);
    }
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[".concat(elem.children[0].data, "]]>");
}
function renderComment(elem) {
    return "<!--".concat(elem.data, "-->");
}

var __importDefault$3 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(stringify, "__esModule", { value: true });
stringify.innerText = stringify.textContent = stringify.getText = stringify.getInnerHTML = stringify.getOuterHTML = void 0;
var domhandler_1$4 = lib$5;
var dom_serializer_1 = __importDefault$3(lib$2);
var domelementtype_1 = lib$4;
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return (0, dom_serializer_1.default)(node, options);
}
stringify.getOuterHTML = getOuterHTML;
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return (0, domhandler_1$4.hasChildren)(node)
        ? node.children.map(function (node) { return getOuterHTML(node, options); }).join("")
        : "";
}
stringify.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if ((0, domhandler_1$4.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if ((0, domhandler_1$4.isCDATA)(node))
        return getText(node.children);
    if ((0, domhandler_1$4.isText)(node))
        return node.data;
    return "";
}
stringify.getText = getText;
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if ((0, domhandler_1$4.hasChildren)(node) && !(0, domhandler_1$4.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0, domhandler_1$4.isText)(node))
        return node.data;
    return "";
}
stringify.textContent = textContent;
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if ((0, domhandler_1$4.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$4.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0, domhandler_1$4.isText)(node))
        return node.data;
    return "";
}
stringify.innerText = innerText;

var traversal = {};

Object.defineProperty(traversal, "__esModule", { value: true });
traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
var domhandler_1$3 = lib$5;
/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren(elem) {
    return (0, domhandler_1$3.hasChildren)(elem) ? elem.children : [];
}
traversal.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
 */
function getParent(elem) {
    return elem.parent || null;
}
traversal.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings, including `elem`.
 */
function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    var siblings = [elem];
    var prev = elem.prev, next = elem.next;
    while (prev != null) {
        siblings.unshift(prev);
        (_a = prev, prev = _a.prev);
    }
    while (next != null) {
        siblings.push(next);
        (_b = next, next = _b.next);
    }
    return siblings;
}
traversal.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
traversal.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
traversal.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName(elem) {
    return elem.name;
}
traversal.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
 * sibling.
 */
function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while (next !== null && !(0, domhandler_1$3.isTag)(next))
        (_a = next, next = _a.next);
    return next;
}
traversal.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
 * previous sibling.
 */
function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while (prev !== null && !(0, domhandler_1$3.isTag)(prev))
        (_a = prev, prev = _a.prev);
    return prev;
}
traversal.prevElementSibling = prevElementSibling;

var manipulation = {};

Object.defineProperty(manipulation, "__esModule", { value: true });
manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        var childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
        }
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
manipulation.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    var prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    var next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    var parent = (replacement.parent = elem.parent);
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
manipulation.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @category Manipulation
 * @param parent The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        var sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
manipulation.appendChild = appendChild;
/**
 * Append an element after another.
 *
 * @category Manipulation
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
manipulation.append = append;
/**
 * Prepend a child to an element.
 *
 * @category Manipulation
 * @param parent The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        var sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
manipulation.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
manipulation.prepend = prepend;

var querying = {};

Object.defineProperty(querying, "__esModule", { value: true });
querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
var domhandler_1$2 = lib$5;
/**
 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter(test, node, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return find(test, Array.isArray(node) ? node : [node], recurse, limit);
}
querying.filter = filter;
/**
 * Search an array of nodes and their children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find(test, nodes, recurse, limit) {
    var result = [];
    /** Stack of the arrays we are looking at. */
    var nodeStack = [nodes];
    /** Stack of the indices within the arrays. */
    var indexStack = [0];
    for (;;) {
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                return result;
        }
        if (recurse && (0, domhandler_1$2.hasChildren)(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
querying.find = find;
/**
 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
querying.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Node or array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first node that passes `test`.
 */
function findOne(test, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    var elem = null;
    for (var i = 0; i < nodes.length && !elem; i++) {
        var node = nodes[i];
        if (!(0, domhandler_1$2.isTag)(node)) {
            continue;
        }
        else if (test(node)) {
            elem = node;
        }
        else if (recurse && node.children.length > 0) {
            elem = findOne(test, node.children, true);
        }
    }
    return elem;
}
querying.findOne = findOne;
/**
 * Checks if a tree of nodes contains at least one node passing a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */
function existsOne(test, nodes) {
    return nodes.some(function (checked) {
        return (0, domhandler_1$2.isTag)(checked) &&
            (test(checked) || existsOne(test, checked.children));
    });
}
querying.existsOne = existsOne;
/**
 * Search an array of nodes and their children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
    var result = [];
    var nodeStack = [nodes];
    var indexStack = [0];
    for (;;) {
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            // Loop back to the start to continue with the next array.
            continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if (!(0, domhandler_1$2.isTag)(elem))
            continue;
        if (test(elem))
            result.push(elem);
        if (elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
querying.findAll = findAll;

var legacy = {};

Object.defineProperty(legacy, "__esModule", { value: true });
legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
var domhandler_1$1 = lib$5;
var querying_js_1 = querying;
/**
 * A map of functions to check nodes against.
 */
var Checks = {
    tag_name: function (name) {
        if (typeof name === "function") {
            return function (elem) { return (0, domhandler_1$1.isTag)(elem) && name(elem.name); };
        }
        else if (name === "*") {
            return domhandler_1$1.isTag;
        }
        return function (elem) { return (0, domhandler_1$1.isTag)(elem) && elem.name === name; };
    },
    tag_type: function (type) {
        if (typeof type === "function") {
            return function (elem) { return type(elem.type); };
        }
        return function (elem) { return elem.type === type; };
    },
    tag_contains: function (data) {
        if (typeof data === "function") {
            return function (elem) { return (0, domhandler_1$1.isText)(elem) && data(elem.data); };
        }
        return function (elem) { return (0, domhandler_1$1.isText)(elem) && elem.data === data; };
    },
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return function (elem) { return (0, domhandler_1$1.isTag)(elem) && value(elem.attribs[attrib]); };
    }
    return function (elem) { return (0, domhandler_1$1.isTag)(elem) && elem.attribs[attrib] === value; };
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return function (elem) { return a(elem) || b(elem); };
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */
function compileTest(options) {
    var funcs = Object.keys(options).map(function (key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * Checks whether a node matches the description in `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
legacy.testElement = testElement;
/**
 * Returns all nodes that match `options`.
 *
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) { limit = Infinity; }
    var test = compileTest(options);
    return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
}
legacy.getElements = getElements;
/**
 * Returns the node with the supplied ID.
 *
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
legacy.getElementById = getElementById;
/**
 * Returns all nodes with the supplied `tagName`.
 *
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
}
legacy.getElementsByTagName = getElementsByTagName;
/**
 * Returns all nodes with the supplied `type`.
 *
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
}
legacy.getElementsByTagType = getElementsByTagType;

var helpers = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.uniqueSort = exports.compareDocumentPosition = exports.DocumentPosition = exports.removeSubsets = void 0;
	var domhandler_1 = lib$5;
	/**
	 * Given an array of nodes, remove any member that is contained by another
	 * member.
	 *
	 * @category Helpers
	 * @param nodes Nodes to filter.
	 * @returns Remaining nodes that aren't contained by other nodes.
	 */
	function removeSubsets(nodes) {
	    var idx = nodes.length;
	    /*
	     * Check if each node (or one of its ancestors) is already contained in the
	     * array.
	     */
	    while (--idx >= 0) {
	        var node = nodes[idx];
	        /*
	         * Remove the node if it is not unique.
	         * We are going through the array from the end, so we only
	         * have to check nodes that preceed the node under consideration in the array.
	         */
	        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
	            nodes.splice(idx, 1);
	            continue;
	        }
	        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
	            if (nodes.includes(ancestor)) {
	                nodes.splice(idx, 1);
	                break;
	            }
	        }
	    }
	    return nodes;
	}
	exports.removeSubsets = removeSubsets;
	/**
	 * @category Helpers
	 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
	 */
	var DocumentPosition;
	(function (DocumentPosition) {
	    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
	    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
	    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
	    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
	    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
	})(DocumentPosition = exports.DocumentPosition || (exports.DocumentPosition = {}));
	/**
	 * Compare the position of one node against another node in any other document,
	 * returning a bitmask with the values from {@link DocumentPosition}.
	 *
	 * Document order:
	 * > There is an ordering, document order, defined on all the nodes in the
	 * > document corresponding to the order in which the first character of the
	 * > XML representation of each node occurs in the XML representation of the
	 * > document after expansion of general entities. Thus, the document element
	 * > node will be the first node. Element nodes occur before their children.
	 * > Thus, document order orders element nodes in order of the occurrence of
	 * > their start-tag in the XML (after expansion of entities). The attribute
	 * > nodes of an element occur after the element and before its children. The
	 * > relative order of attribute nodes is implementation-dependent.
	 *
	 * Source:
	 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
	 *
	 * @category Helpers
	 * @param nodeA The first node to use in the comparison
	 * @param nodeB The second node to use in the comparison
	 * @returns A bitmask describing the input nodes' relative position.
	 *
	 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
	 * a description of these values.
	 */
	function compareDocumentPosition(nodeA, nodeB) {
	    var aParents = [];
	    var bParents = [];
	    if (nodeA === nodeB) {
	        return 0;
	    }
	    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
	    while (current) {
	        aParents.unshift(current);
	        current = current.parent;
	    }
	    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
	    while (current) {
	        bParents.unshift(current);
	        current = current.parent;
	    }
	    var maxIdx = Math.min(aParents.length, bParents.length);
	    var idx = 0;
	    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
	        idx++;
	    }
	    if (idx === 0) {
	        return DocumentPosition.DISCONNECTED;
	    }
	    var sharedParent = aParents[idx - 1];
	    var siblings = sharedParent.children;
	    var aSibling = aParents[idx];
	    var bSibling = bParents[idx];
	    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
	        if (sharedParent === nodeB) {
	            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
	        }
	        return DocumentPosition.FOLLOWING;
	    }
	    if (sharedParent === nodeA) {
	        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
	    }
	    return DocumentPosition.PRECEDING;
	}
	exports.compareDocumentPosition = compareDocumentPosition;
	/**
	 * Sort an array of nodes based on their relative position in the document,
	 * removing any duplicate nodes. If the array contains nodes that do not belong
	 * to the same document, sort order is unspecified.
	 *
	 * @category Helpers
	 * @param nodes Array of DOM nodes.
	 * @returns Collection of unique nodes, sorted in document order.
	 */
	function uniqueSort(nodes) {
	    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
	    nodes.sort(function (a, b) {
	        var relative = compareDocumentPosition(a, b);
	        if (relative & DocumentPosition.PRECEDING) {
	            return -1;
	        }
	        else if (relative & DocumentPosition.FOLLOWING) {
	            return 1;
	        }
	        return 0;
	    });
	    return nodes;
	}
	exports.uniqueSort = uniqueSort;
	
} (helpers));

var feeds = {};

Object.defineProperty(feeds, "__esModule", { value: true });
feeds.getFeed = void 0;
var stringify_js_1 = stringify;
var legacy_js_1 = legacy;
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
feeds.getFeed = getFeed;
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    var childs = feedRoot.children;
    var feed = {
        type: "atom",
        items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function (item) {
            var _a;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            var description = fetch$1("summary", children) || fetch$1("content", children);
            if (description) {
                entry.description = description;
            }
            var pubDate = fetch$1("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch$1("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function (item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch$1("pubDate", children) || fetch$1("dc:date", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch$1("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function (elem) {
        var attribs = elem.attribs;
        var media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"],
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch$1(tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    var val = fetch$1(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
	__exportStar(stringify, exports);
	__exportStar(traversal, exports);
	__exportStar(manipulation, exports);
	__exportStar(querying, exports);
	__exportStar(legacy, exports);
	__exportStar(helpers, exports);
	__exportStar(feeds, exports);
	/** @deprecated Use these methods from `domhandler` directly. */
	var domhandler_1 = lib$5;
	Object.defineProperty(exports, "isTag", { enumerable: true, get: function () { return domhandler_1.isTag; } });
	Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function () { return domhandler_1.isCDATA; } });
	Object.defineProperty(exports, "isText", { enumerable: true, get: function () { return domhandler_1.isText; } });
	Object.defineProperty(exports, "isComment", { enumerable: true, get: function () { return domhandler_1.isComment; } });
	Object.defineProperty(exports, "isDocument", { enumerable: true, get: function () { return domhandler_1.isDocument; } });
	Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function () { return domhandler_1.hasChildren; } });
	
} (lib$3));

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DomUtils = exports.parseFeed = exports.getFeed = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.createDocumentStream = exports.parseDOM = exports.parseDocument = exports.DefaultHandler = exports.DomHandler = exports.Parser = void 0;
	var Parser_js_1 = Parser$1;
	var Parser_js_2 = Parser$1;
	Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_js_2.Parser; } });
	var domhandler_1 = lib$5;
	var domhandler_2 = lib$5;
	Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function () { return domhandler_2.DomHandler; } });
	// Old name for DomHandler
	Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function () { return domhandler_2.DomHandler; } });
	// Helper methods
	/**
	 * Parses the data, returns the resulting document.
	 *
	 * @param data The data that should be parsed.
	 * @param options Optional options for the parser and DOM handler.
	 */
	function parseDocument(data, options) {
	    var handler = new domhandler_1.DomHandler(undefined, options);
	    new Parser_js_1.Parser(handler, options).end(data);
	    return handler.root;
	}
	exports.parseDocument = parseDocument;
	/**
	 * Parses data, returns an array of the root nodes.
	 *
	 * Note that the root nodes still have a `Document` node as their parent.
	 * Use `parseDocument` to get the `Document` node instead.
	 *
	 * @param data The data that should be parsed.
	 * @param options Optional options for the parser and DOM handler.
	 * @deprecated Use `parseDocument` instead.
	 */
	function parseDOM(data, options) {
	    return parseDocument(data, options).children;
	}
	exports.parseDOM = parseDOM;
	/**
	 * Creates a parser instance, with an attached DOM handler.
	 *
	 * @param callback A callback that will be called once parsing has been completed, with the resulting document.
	 * @param options Optional options for the parser and DOM handler.
	 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
	 */
	function createDocumentStream(callback, options, elementCallback) {
	    var handler = new domhandler_1.DomHandler(function (error) { return callback(error, handler.root); }, options, elementCallback);
	    return new Parser_js_1.Parser(handler, options);
	}
	exports.createDocumentStream = createDocumentStream;
	/**
	 * Creates a parser instance, with an attached DOM handler.
	 *
	 * @param callback A callback that will be called once parsing has been completed, with an array of root nodes.
	 * @param options Optional options for the parser and DOM handler.
	 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
	 * @deprecated Use `createDocumentStream` instead.
	 */
	function createDomStream(callback, options, elementCallback) {
	    var handler = new domhandler_1.DomHandler(callback, options, elementCallback);
	    return new Parser_js_1.Parser(handler, options);
	}
	exports.createDomStream = createDomStream;
	var Tokenizer_js_1 = Tokenizer;
	Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function () { return __importDefault(Tokenizer_js_1).default; } });
	/*
	 * All of the following exports exist for backwards-compatibility.
	 * They should probably be removed eventually.
	 */
	exports.ElementType = __importStar(lib$4);
	var domutils_1 = lib$3;
	var domutils_2 = lib$3;
	Object.defineProperty(exports, "getFeed", { enumerable: true, get: function () { return domutils_2.getFeed; } });
	var parseFeedDefaultOptions = { xmlMode: true };
	/**
	 * Parse a feed.
	 *
	 * @param feed The feed that should be parsed, as a string.
	 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
	 */
	function parseFeed(feed, options) {
	    if (options === void 0) { options = parseFeedDefaultOptions; }
	    return (0, domutils_1.getFeed)(parseDOM(feed, options));
	}
	exports.parseFeed = parseFeed;
	exports.DomUtils = __importStar(lib$3);
	
} (lib$6));

var utilities$2 = {};

Object.defineProperty(utilities$2, "__esModule", { value: true });
utilities$2.unsetRootParent = void 0;
/**
 * Sets root parent to null.
 *
 * @param nodes - Nodes.
 * @returns - Nodes.
 */
function unsetRootParent(nodes) {
    var index = 0;
    var nodesLength = nodes.length;
    for (; index < nodesLength; index++) {
        var node = nodes[index];
        node.parent = null;
    }
    return nodes;
}
utilities$2.unsetRootParent = unsetRootParent;

Object.defineProperty(htmlToDom, "__esModule", { value: true });
var htmlparser2_1 = lib$6;
var domhandler_1 = lib$5;
var utilities_1$3 = utilities$2;
/**
 * Parses HTML string to DOM nodes in Node.js.
 *
 * This is the same method as `require('htmlparser2').parseDOM`
 *
 * @see https://github.com/fb55/htmlparser2/blob/v9.0.0/src/index.ts#L44-L46
 * @see https://github.com/fb55/domhandler/tree/v5.0.3#readme
 *
 * @param html - HTML markup.
 * @param options - Parser options.
 * @returns - DOM nodes.
 */
function HTMLDOMParser(html, options) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string.');
    }
    if (!html) {
        return [];
    }
    var handler = new domhandler_1.DomHandler(undefined, options);
    new htmlparser2_1.Parser(handler, options).end(html);
    return (0, utilities_1$3.unsetRootParent)(handler.dom);
}
htmlToDom.default = HTMLDOMParser;

var types = {};

Object.defineProperty(types, "__esModule", { value: true });

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	/**
	 * When running on Node.js, use the server parser.
	 * When bundling for the browser, use the client parser.
	 *
	 * @see https://github.com/substack/node-browserify#browser-field
	 */
	var html_to_dom_1 = htmlToDom;
	Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(html_to_dom_1).default; } });
	__exportStar(types, exports);
	
} (lib$7));

var attributesToProps$1 = {};

var lib = {};

var possibleStandardNamesOptimized$1 = {};

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME$1 = 0;
possibleStandardNamesOptimized$1.SAME = SAME$1;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE$1 = 1;
possibleStandardNamesOptimized$1.CAMELCASE = CAMELCASE$1;

possibleStandardNamesOptimized$1.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
const RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.
const STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
const BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
const BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
const OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
const NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
const POSITIVE_NUMERIC = 6;

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(
  name,
  type,
  mustUseProperty,
  attributeName,
  attributeNamespace,
  sanitizeURL,
  removeEmptyString,
) {
  this.acceptsBooleans =
    type === BOOLEANISH_STRING ||
    type === BOOLEAN ||
    type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
const properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
const reservedProps = [
  'children',
  'dangerouslySetInnerHTML',
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  'defaultValue',
  'defaultChecked',
  'innerHTML',
  'suppressContentEditableWarning',
  'suppressHydrationWarning',
  'style',
];

reservedProps.forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    RESERVED,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(([name, attributeName]) => {
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEANISH_STRING,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEANISH_STRING,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML boolean attributes.
[
  'allowFullScreen',
  'async',
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  'autoFocus',
  'autoPlay',
  'controls',
  'default',
  'defer',
  'disabled',
  'disablePictureInPicture',
  'disableRemotePlayback',
  'formNoValidate',
  'hidden',
  'loop',
  'noModule',
  'noValidate',
  'open',
  'playsInline',
  'readOnly',
  'required',
  'reversed',
  'scoped',
  'seamless',
  // Microdata
  'itemScope',
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEAN,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
[
  'checked',
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  'multiple',
  'muted',
  'selected',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    BOOLEAN,
    true, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
[
  'capture',
  'download',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    OVERLOADED_BOOLEAN,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that must be positive numbers.
[
  'cols',
  'rows',
  'size',
  'span',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    POSITIVE_NUMERIC,
    false, // mustUseProperty
    name, // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(name => {
  properties[name] = new PropertyInfoRecord(
    name,
    NUMERIC,
    false, // mustUseProperty
    name.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

const CAMELIZE = /[\-\:]([a-z])/g;
const capitalize$1 = token => token[1].toUpperCase();

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
[
  'accent-height',
  'alignment-baseline',
  'arabic-form',
  'baseline-shift',
  'cap-height',
  'clip-path',
  'clip-rule',
  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'dominant-baseline',
  'enable-background',
  'fill-opacity',
  'fill-rule',
  'flood-color',
  'flood-opacity',
  'font-family',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'glyph-name',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'horiz-adv-x',
  'horiz-origin-x',
  'image-rendering',
  'letter-spacing',
  'lighting-color',
  'marker-end',
  'marker-mid',
  'marker-start',
  'overline-position',
  'overline-thickness',
  'paint-order',
  'panose-1',
  'pointer-events',
  'rendering-intent',
  'shape-rendering',
  'stop-color',
  'stop-opacity',
  'strikethrough-position',
  'strikethrough-thickness',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'text-anchor',
  'text-decoration',
  'text-rendering',
  'underline-position',
  'underline-thickness',
  'unicode-bidi',
  'unicode-range',
  'units-per-em',
  'v-alphabetic',
  'v-hanging',
  'v-ideographic',
  'v-mathematical',
  'vector-effect',
  'vert-adv-y',
  'vert-origin-x',
  'vert-origin-y',
  'word-spacing',
  'writing-mode',
  'xmlns:xlink',
  'x-height',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// String SVG attributes with the xlink namespace.
[
  'xlink:actuate',
  'xlink:arcrole',
  'xlink:role',
  'xlink:show',
  'xlink:title',
  'xlink:type',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    'http://www.w3.org/1999/xlink',
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// String SVG attributes with the xml namespace.
[
  'xml:base',
  'xml:lang',
  'xml:space',

  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(attributeName => {
  const name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(
    name,
    STRING,
    false, // mustUseProperty
    attributeName,
    'http://www.w3.org/XML/1998/namespace',
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
['tabIndex', 'crossOrigin'].forEach(attributeName => {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    STRING,
    false, // mustUseProperty
    attributeName.toLowerCase(), // attributeName
    null, // attributeNamespace
    false, // sanitizeURL
    false, // removeEmptyString
  );
});

// These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.
const xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord(
  'xlinkHref',
  STRING,
  false, // mustUseProperty
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  true, // sanitizeURL
  false, // removeEmptyString
);

['src', 'href', 'action', 'formAction'].forEach(attributeName => {
  properties[attributeName] = new PropertyInfoRecord(
    attributeName,
    STRING,
    false, // mustUseProperty
    attributeName.toLowerCase(), // attributeName
    null, // attributeNamespace
    true, // sanitizeURL
    true, // removeEmptyString
  );
});

// 
const {
  CAMELCASE,
  SAME,
  possibleStandardNames: possibleStandardNamesOptimized
} = possibleStandardNamesOptimized$1;

const ATTRIBUTE_NAME_START_CHAR =
  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';

const ATTRIBUTE_NAME_CHAR =
  ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

/**
 * Checks whether a property name is a custom attribute.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25
 *
 * @type {(attribute: string) => boolean}
 */
const isCustomAttribute =
  RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
  );

/**
 * @type {Record<string, string>}
 */
const possibleStandardNames = Object.keys(
  possibleStandardNamesOptimized
).reduce((accumulator, standardName) => {
  const propName = possibleStandardNamesOptimized[standardName];
  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }
  return accumulator;
}, {});

lib.BOOLEAN = BOOLEAN;
lib.BOOLEANISH_STRING = BOOLEANISH_STRING;
lib.NUMERIC = NUMERIC;
lib.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
lib.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
lib.RESERVED = RESERVED;
lib.STRING = STRING;
lib.getPropertyInfo = getPropertyInfo;
lib.isCustomAttribute = isCustomAttribute;
lib.possibleStandardNames = possibleStandardNames;

var utilities$1 = {};

var cjs$1 = {};

var cjs = {};

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
var inlineStyleParser = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) ; else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(cjs, "__esModule", { value: true });
var inline_style_parser_1 = __importDefault$2(inlineStyleParser);
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */
function StyleToObject(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === 'function';
    declarations.forEach(function (declaration) {
        if (declaration.type !== 'declaration') {
            return;
        }
        var property = declaration.property, value = declaration.value;
        if (hasIterator) {
            iterator(property, value, declaration);
        }
        else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
}
cjs.default = StyleToObject;

var utilities = {};

Object.defineProperty(utilities, "__esModule", { value: true });
utilities.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */
var capitalize = function (match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
/**
 * CamelCases a CSS property.
 */
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
utilities.camelCase = camelCase;

var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(cjs$1, "__esModule", { value: true });
var style_to_object_1 = __importDefault$1(cjs);
var utilities_1$2 = utilities;
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function (property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1$2.camelCase)(property, options)] = value;
        }
    });
    return output;
}
cjs$1.default = StyleToJS;

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.returnFirstArg = exports.canTextBeChildOfNode = exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = exports.PRESERVE_CUSTOM_ATTRIBUTES = exports.setStyleProp = exports.isCustomComponent = void 0;
	var react_1 = React$1;
	var style_to_js_1 = __importDefault(cjs$1);
	var RESERVED_SVG_MATHML_ELEMENTS = new Set([
	    'annotation-xml',
	    'color-profile',
	    'font-face',
	    'font-face-src',
	    'font-face-uri',
	    'font-face-format',
	    'font-face-name',
	    'missing-glyph',
	]);
	/**
	 * Check if a tag is a custom component.
	 *
	 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
	 *
	 * @param tagName - Tag name.
	 * @param props - Props passed to the element.
	 * @returns - Whether the tag is custom component.
	 */
	function isCustomComponent(tagName, props) {
	    if (!tagName.includes('-')) {
	        return Boolean(props && typeof props.is === 'string');
	    }
	    // These are reserved SVG and MathML elements.
	    // We don't mind this whitelist too much because we expect it to never grow.
	    // The alternative is to track the namespace in a few places which is convoluted.
	    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
	    if (RESERVED_SVG_MATHML_ELEMENTS.has(tagName)) {
	        return false;
	    }
	    return true;
	}
	exports.isCustomComponent = isCustomComponent;
	var styleOptions = {
	    reactCompat: true,
	};
	/**
	 * Sets style prop.
	 *
	 * @param style - Inline style.
	 * @param props - Props object.
	 */
	function setStyleProp(style, props) {
	    if (typeof style !== 'string') {
	        return;
	    }
	    if (!style.trim()) {
	        props.style = {};
	        return;
	    }
	    try {
	        props.style = (0, style_to_js_1.default)(style, styleOptions);
	    }
	    catch (error) {
	        props.style = {};
	    }
	}
	exports.setStyleProp = setStyleProp;
	/**
	 * @see https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
	 */
	exports.PRESERVE_CUSTOM_ATTRIBUTES = Number(react_1.version.split('.')[0]) >= 16;
	/**
	 * @see https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
	 */
	exports.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set([
	    'tr',
	    'tbody',
	    'thead',
	    'tfoot',
	    'colgroup',
	    'table',
	    'head',
	    'html',
	    'frameset',
	]);
	/**
	 * Checks if the given node can contain text nodes
	 *
	 * @param node - Element node.
	 * @returns - Whether the node can contain text nodes.
	 */
	var canTextBeChildOfNode = function (node) {
	    return !exports.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(node.name);
	};
	exports.canTextBeChildOfNode = canTextBeChildOfNode;
	/**
	 * Returns the first argument as is.
	 *
	 * @param arg - The argument to be returned.
	 * @returns - The input argument `arg`.
	 */
	var returnFirstArg = function (arg) { return arg; };
	exports.returnFirstArg = returnFirstArg;
	
} (utilities$1));

Object.defineProperty(attributesToProps$1, "__esModule", { value: true });
var react_property_1 = lib;
var utilities_1$1 = utilities$1;
// https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
// https://developer.mozilla.org/docs/Web/HTML/Attributes
var UNCONTROLLED_COMPONENT_ATTRIBUTES = ['checked', 'value'];
var UNCONTROLLED_COMPONENT_NAMES = ['input', 'select', 'textarea'];
var valueOnlyInputs = {
    reset: true,
    submit: true,
};
/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param attributes - HTML/SVG DOM attributes.
 * @param nodeName - DOM node name.
 * @returns - React props.
 */
function attributesToProps(attributes, nodeName) {
    if (attributes === void 0) { attributes = {}; }
    var props = {};
    var isInputValueOnly = Boolean(attributes.type && valueOnlyInputs[attributes.type]);
    for (var attributeName in attributes) {
        var attributeValue = attributes[attributeName];
        // ARIA (aria-*) or custom data (data-*) attribute
        if ((0, react_property_1.isCustomAttribute)(attributeName)) {
            props[attributeName] = attributeValue;
            continue;
        }
        // convert HTML/SVG attribute to React prop
        var attributeNameLowerCased = attributeName.toLowerCase();
        var propName = getPropName(attributeNameLowerCased);
        if (propName) {
            var propertyInfo = (0, react_property_1.getPropertyInfo)(propName);
            // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
            if (UNCONTROLLED_COMPONENT_ATTRIBUTES.includes(propName) &&
                UNCONTROLLED_COMPONENT_NAMES.includes(nodeName) &&
                !isInputValueOnly) {
                propName = getPropName('default' + attributeNameLowerCased);
            }
            props[propName] = attributeValue;
            switch (propertyInfo && propertyInfo.type) {
                case react_property_1.BOOLEAN:
                    props[propName] = true;
                    break;
                case react_property_1.OVERLOADED_BOOLEAN:
                    if (attributeValue === '') {
                        props[propName] = true;
                    }
                    break;
            }
            continue;
        }
        // preserve custom attribute if React >=16
        if (utilities_1$1.PRESERVE_CUSTOM_ATTRIBUTES) {
            props[attributeName] = attributeValue;
        }
    }
    // transform inline style to object
    (0, utilities_1$1.setStyleProp)(attributes.style, props);
    return props;
}
attributesToProps$1.default = attributesToProps;
/**
 * Gets prop name from lowercased attribute name.
 *
 * @param attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */
function getPropName(attributeName) {
    return react_property_1.possibleStandardNames[attributeName];
}

var domToReact$1 = {};

var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(domToReact$1, "__esModule", { value: true });
var react_1 = React$1;
var attributes_to_props_1 = __importDefault(attributesToProps$1);
var utilities_1 = utilities$1;
var React = {
    cloneElement: react_1.cloneElement,
    createElement: react_1.createElement,
    isValidElement: react_1.isValidElement,
};
/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param nodes - DOM nodes.
 * @param options - Options.
 * @returns - String or JSX element(s).
 */
function domToReact(nodes, options) {
    var reactElements = [];
    var hasReplace = typeof (options === null || options === void 0 ? void 0 : options.replace) === 'function';
    var transform = (options === null || options === void 0 ? void 0 : options.transform) || utilities_1.returnFirstArg;
    var _a = (options === null || options === void 0 ? void 0 : options.library) || React, cloneElement = _a.cloneElement, createElement = _a.createElement, isValidElement = _a.isValidElement;
    var nodesLength = nodes.length;
    for (var index = 0; index < nodesLength; index++) {
        var node = nodes[index];
        // replace with custom React element (if present)
        if (hasReplace) {
            var replaceElement = options.replace(node);
            if (isValidElement(replaceElement)) {
                // set "key" prop for sibling elements
                // https://react.dev/learn/rendering-lists#rules-of-keys
                if (nodesLength > 1) {
                    replaceElement = cloneElement(replaceElement, {
                        key: replaceElement.key || index,
                    });
                }
                reactElements.push(transform(replaceElement, node, index));
                continue;
            }
        }
        if (node.type === 'text') {
            var isWhitespace = !node.data.trim().length;
            // We have a whitespace node that can't be nested in its parent
            // so skip it
            if (isWhitespace &&
                node.parent &&
                !(0, utilities_1.canTextBeChildOfNode)(node.parent)) {
                continue;
            }
            // Trim is enabled and we have a whitespace node
            // so skip it
            if ((options === null || options === void 0 ? void 0 : options.trim) && isWhitespace) {
                continue;
            }
            // We have a text node that's not whitespace and it can be nested
            // in its parent so add it to the results
            reactElements.push(transform(node.data, node, index));
            continue;
        }
        var element = node;
        var props = {};
        if (skipAttributesToProps(element)) {
            (0, utilities_1.setStyleProp)(element.attribs.style, element.attribs);
            props = element.attribs;
        }
        else if (element.attribs) {
            props = (0, attributes_to_props_1.default)(element.attribs, element.name);
        }
        var children = void 0;
        switch (node.type) {
            case 'script':
            case 'style':
                // prevent text in <script> or <style> from being escaped
                // https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html
                if (node.children[0]) {
                    props.dangerouslySetInnerHTML = {
                        __html: node.children[0].data,
                    };
                }
                break;
            case 'tag':
                // setting textarea value in children is an antipattern in React
                // https://react.dev/reference/react-dom/components/textarea#caveats
                if (node.name === 'textarea' && node.children[0]) {
                    props.defaultValue = node.children[0].data;
                }
                else if (node.children && node.children.length) {
                    // continue recursion of creating React elements (if applicable)
                    children = domToReact(node.children, options);
                }
                break;
            // skip all other cases (e.g., comment)
            default:
                continue;
        }
        // set "key" prop for sibling elements
        // https://react.dev/learn/rendering-lists#rules-of-keys
        if (nodesLength > 1) {
            props.key = index;
        }
        reactElements.push(transform(createElement(node.name, props, children), node, index));
    }
    return reactElements.length === 1 ? reactElements[0] : reactElements;
}
domToReact$1.default = domToReact;
/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param node - Element node.
 * @returns - Whether the node attributes should be converted to props.
 */
function skipAttributesToProps(node) {
    return (utilities_1.PRESERVE_CUSTOM_ATTRIBUTES &&
        node.type === 'tag' &&
        (0, utilities_1.isCustomComponent)(node.name, node.attribs));
}

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.htmlToDOM = exports.domToReact = exports.attributesToProps = exports.Text = exports.ProcessingInstruction = exports.Element = exports.Comment = void 0;
	var html_dom_parser_1 = __importDefault(lib$7);
	exports.htmlToDOM = html_dom_parser_1.default;
	var attributes_to_props_1 = __importDefault(attributesToProps$1);
	exports.attributesToProps = attributes_to_props_1.default;
	var dom_to_react_1 = __importDefault(domToReact$1);
	exports.domToReact = dom_to_react_1.default;
	var domhandler_1 = lib$5;
	Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return domhandler_1.Comment; } });
	Object.defineProperty(exports, "Element", { enumerable: true, get: function () { return domhandler_1.Element; } });
	Object.defineProperty(exports, "ProcessingInstruction", { enumerable: true, get: function () { return domhandler_1.ProcessingInstruction; } });
	Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return domhandler_1.Text; } });
	var domParserOptions = { lowerCaseAttributeNames: false };
	/**
	 * Converts HTML string to React elements.
	 *
	 * @param html - HTML string.
	 * @param options - Parser options.
	 * @returns - React element(s), empty array, or string.
	 */
	function HTMLReactParser(html, options) {
	    if (typeof html !== 'string') {
	        throw new TypeError('First argument must be a string');
	    }
	    if (!html) {
	        return [];
	    }
	    return (0, dom_to_react_1.default)((0, html_dom_parser_1.default)(html, (options === null || options === void 0 ? void 0 : options.htmlparser2) || domParserOptions), options);
	}
	exports.default = HTMLReactParser;
	
} (lib$8));

var HTMLReactParser = /*@__PURE__*/getDefaultExportFromCjs(lib$8);

var parse = HTMLReactParser.default || HTMLReactParser;

var e=["left","right","center","justify"],t={delimiter:function(){return "<br/>"},header:function(e){var t=e.data;return "<h"+t.level+">"+t.text+"</h"+t.level+">"},paragraph:function(t){var r=t.data,n=r.alignment||r.align;return void 0!==n&&e.includes(n)?'<p style="text-align:'+n+';">'+r.text+"</p>":"<p>"+r.text+"</p>"},list:function(e){var t=e.data,r="unordered"===t.style?"ul":"ol",n=function(e,t){var r=e.map((function(e){if(!e.content&&!e.items)return "<li>"+e+"</li>";var r="";return e.items&&(r=n(e.items,t)),e.content?"<li> "+e.content+" </li>"+r:void 0}));return "<"+t+">"+r.join("")+"</"+t+">"};return n(t.items,r)},image:function(e){var t=e.data,r=t.caption?t.caption:"Image";return '<img src="'+(t.file&&t.file.url?t.file.url:t.url)+'" alt="'+r+'" />'},quote:function(e){var t=e.data;return "<blockquote>"+t.text+"</blockquote> - "+t.caption},code:function(e){return "<pre><code>"+e.data.code+"</code></pre>"},embed:function(e){var t=e.data;switch(t.service){case"vimeo":return '<iframe src="'+t.embed+'" height="'+t.height+'" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';case"youtube":return '<iframe width="'+t.width+'" height="'+t.height+'" src="'+t.embed+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';default:throw new Error("Only Youtube and Vime Embeds are supported right now.")}}};function r(e){return new Error('[31m The Parser function of type "'+e+'" is not defined. \n\n  Define your custom parser functions as: [34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks [0m')}var n=function(e){void 0===e&&(e={});var i=Object.assign({},t,e);return {parse:function(e){return e.blocks.map((function(e){return i[e.type]?i[e.type](e):r(e.type)}))},parseBlock:function(e){return i[e.type]?i[e.type](e):r(e.type)},parseStrict:function(e){var t=e.blocks,o=n(i).validate({blocks:t});if(o.length)throw new Error("Parser Functions missing for blocks: "+o.toString());for(var a=[],u=0;u<t.length;u++){if(!i[t[u].type])throw r(t[u].type);a.push(i[t[u].type](t[u]));}return a},validate:function(e){var t=e.blocks.map((function(e){return e.type})).filter((function(e,t,r){return r.indexOf(e)===t})),r=Object.keys(i);return t.filter((function(e){return !r.includes(e)}))}}};var edjsHTML_node=n;

var edjsHTML = /*@__PURE__*/getDefaultExportFromCjs(edjsHTML_node);

const imageParser = ({ id, data }) => {
    return `
    <div id="${id}" class="image-tool__image">
      <img src="${data.file.url}" class="image-tool__image-picture" alt="${data.caption}">
    </div>
  `;
};
const linkParser = ({ id, data }) => {
    const anchor = new URL(data.link).hostname;
    return `
    <div id="${id}" class="link-tool">
      <a class="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href="${data.link}">
        <div class="link-tool__image" style="background-image: url(&quot;${data.meta.image}&quot;);"></div>
        <div class="link-tool__title">${data.meta.title}</div>
        <p class="link-tool__description">${data.meta.description}</p>
        <span class="link-tool__anchor">${anchor}</span>
      </a>
    </div>
  `;
};
const headerParser = ({ id, data }) => {
    return `
    <h${data.level} id="${id}" class="ce-header" data-placeholder="へッダー">${data.text}</h$>
  `;
};
const listParser = ({ id, data }) => {
    const orderStyleClass = `cdx-nested-list--${data.style}`;
    const createItem = (data) => {
        return data
            .map((item) => `
      <li class="cdx-nested-list__item">
        <div class="cdx-nested-list__item-body">
          <div class="cdx-nested-list__item-content">${item.content}</div>
          ${item.items.length !== 0
            ? `
              <ul class="cdx-nested-list cdx-nested-list__item-children ${orderStyleClass}">
                ${createItem(item.items)}
              </ul>
            `
            : ""}
        </div>
      </li>
    `)
            .join("\n");
    };
    return `
    <ul id="${id}" class="cdx-nested-list cdx-block ${orderStyleClass}">
      ${createItem(data.items)}
    </ul>
  `;
};
const embedParser = ({ id, data }) => {
    return `
    <div id="${id}" class="embed-tool">
      <iframe style="width: ${data.width};" height="${data.height}" frameborder="0" allowfullscreen="" src="${data.embed}" class="embed-tool__content"></iframe>
    </div>
  `;
};
const quoteParser = ({ id, data }) => {
    return `
    <blockquote id="${id}" class="cdx-block cdx-quote">
      <div class="cdx-input cdx-quote__text cdx-quote__preview">
        ${data.text}
        <cite>${data.caption}</cite>
      </div>
    </blockquote>
  `;
};

const edjsParser = edjsHTML({
    header: headerParser,
    list: listParser,
    payment: paymentLineParser,
    image: imageParser,
    link: linkParser,
    embed: embedParser,
    quote: quoteParser,
});
const Preview$1 = ({ data }) => {
    if (!data)
        return React$1.createElement("div", null);
    const html = edjsParser.parse(data);
    return React$1.createElement("div", { className: "w-full" }, parse(html.join("")));
};

const Preview = Preview$1;

exports.Preview = Preview;
exports.default = CustomEditor;
//# sourceMappingURL=index.js.map
