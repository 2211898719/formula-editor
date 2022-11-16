/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
(function(P, te) {
  typeof module == "object" && typeof module.exports == "object" ? module.exports = P.document ? te(P, !0) : function(re) {
    if (!re.document)
      throw new Error("jQuery requires a window with a document");
    return te(re);
  } : te(P);
})(typeof window < "u" ? window : globalThis, function(P, te) {
  var re = [], v = re.slice, ae = re.concat, fe = re.push, st = re.indexOf, at = {}, Ue = at.toString, Je = at.hasOwnProperty, _t = "".trim, Q = {}, Nt = "1.11.0", i = function(e, t) {
    return new i.fn.init(e, t);
  }, Pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, kt = /^-ms-/, $t = /-([\da-z])/gi, Wt = function(e, t) {
    return t.toUpperCase();
  };
  i.fn = i.prototype = { jquery: Nt, constructor: i, selector: "", length: 0, toArray: function() {
    return v.call(this);
  }, get: function(e) {
    return e != null ? 0 > e ? this[e + this.length] : this[e] : v.call(this);
  }, pushStack: function(e) {
    var t = i.merge(this.constructor(), e);
    return t.prevObject = this, t.context = this.context, t;
  }, each: function(e, t) {
    return i.each(this, e, t);
  }, map: function(e) {
    return this.pushStack(i.map(this, function(t, n) {
      return e.call(t, n, t);
    }));
  }, slice: function() {
    return this.pushStack(v.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, eq: function(e) {
    var t = this.length, n = +e + (0 > e ? t : 0);
    return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
  }, end: function() {
    return this.prevObject || this.constructor(null);
  }, push: fe, sort: re.sort, splice: re.splice }, i.extend = i.fn.extend = function() {
    var e, t, n, o, a, h, f = arguments[0] || {}, m = 1, q = arguments.length, S = !1;
    for (typeof f == "boolean" && (S = f, f = arguments[m] || {}, m++), typeof f == "object" || i.isFunction(f) || (f = {}), m === q && (f = this, m--); q > m; m++)
      if ((a = arguments[m]) != null)
        for (o in a)
          e = f[o], n = a[o], f !== n && (S && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, h = e && i.isArray(e) ? e : []) : h = e && i.isPlainObject(e) ? e : {}, f[o] = i.extend(S, h, n)) : n !== void 0 && (f[o] = n));
    return f;
  }, i.extend({ expando: "jQuery" + (Nt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
    throw new Error(e);
  }, noop: function() {
  }, isFunction: function(e) {
    return i.type(e) === "function";
  }, isArray: Array.isArray || function(e) {
    return i.type(e) === "array";
  }, isWindow: function(e) {
    return e != null && e == e.window;
  }, isNumeric: function(e) {
    return e - parseFloat(e) >= 0;
  }, isEmptyObject: function(e) {
    var t;
    for (t in e)
      return !1;
    return !0;
  }, isPlainObject: function(e) {
    var t;
    if (!e || i.type(e) !== "object" || e.nodeType || i.isWindow(e))
      return !1;
    try {
      if (e.constructor && !Je.call(e, "constructor") && !Je.call(e.constructor.prototype, "isPrototypeOf"))
        return !1;
    } catch {
      return !1;
    }
    if (Q.ownLast)
      for (t in e)
        return Je.call(e, t);
    for (t in e)
      ;
    return t === void 0 || Je.call(e, t);
  }, type: function(e) {
    return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? at[Ue.call(e)] || "object" : typeof e;
  }, globalEval: function(e) {
    e && i.trim(e) && (P.execScript || function(t) {
      P.eval.call(P, t);
    })(e);
  }, camelCase: function(e) {
    return e.replace(kt, "ms-").replace($t, Wt);
  }, nodeName: function(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }, each: function(e, t, n) {
    var o, a = 0, h = e.length, f = At(e);
    if (n) {
      if (f)
        for (; h > a && (o = t.apply(e[a], n), o !== !1); a++)
          ;
      else
        for (a in e)
          if (o = t.apply(e[a], n), o === !1)
            break;
    } else if (f)
      for (; h > a && (o = t.call(e[a], a, e[a]), o !== !1); a++)
        ;
    else
      for (a in e)
        if (o = t.call(e[a], a, e[a]), o === !1)
          break;
    return e;
  }, trim: _t && !_t.call("\uFEFF\xA0") ? function(e) {
    return e == null ? "" : _t.call(e);
  } : function(e) {
    return e == null ? "" : (e + "").replace(Pt, "");
  }, makeArray: function(e, t) {
    var n = t || [];
    return e != null && (At(Object(e)) ? i.merge(n, typeof e == "string" ? [e] : e) : fe.call(n, e)), n;
  }, inArray: function(e, t, n) {
    var o;
    if (t) {
      if (st)
        return st.call(t, e, n);
      for (o = t.length, n = n ? 0 > n ? Math.max(0, o + n) : n : 0; o > n; n++)
        if (n in t && t[n] === e)
          return n;
    }
    return -1;
  }, merge: function(e, t) {
    for (var n = +t.length, o = 0, a = e.length; n > o; )
      e[a++] = t[o++];
    if (n !== n)
      for (; t[o] !== void 0; )
        e[a++] = t[o++];
    return e.length = a, e;
  }, grep: function(e, t, n) {
    for (var o, a = [], h = 0, f = e.length, m = !n; f > h; h++)
      o = !t(e[h], h), o !== m && a.push(e[h]);
    return a;
  }, map: function(e, t, n) {
    var o, a = 0, h = e.length, f = At(e), m = [];
    if (f)
      for (; h > a; a++)
        o = t(e[a], a, n), o != null && m.push(o);
    else
      for (a in e)
        o = t(e[a], a, n), o != null && m.push(o);
    return ae.apply([], m);
  }, guid: 1, proxy: function(e, t) {
    var n, o, a;
    return typeof t == "string" && (a = e[t], t = e, e = a), i.isFunction(e) ? (n = v.call(arguments, 2), o = function() {
      return e.apply(t || this, n.concat(v.call(arguments)));
    }, o.guid = e.guid = e.guid || i.guid++, o) : void 0;
  }, now: function() {
    return +new Date();
  }, support: Q }), i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    at["[object " + t + "]"] = t.toLowerCase();
  });
  function At(e) {
    var t = e.length, n = i.type(e);
    return n === "function" || i.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
  }
  var Y = function(e) {
    var t, n, o, a, h, f, m, q, S, E, _, N, z, W, K, he, nt, oe = "sizzle" + -new Date(), Re = e.document, V = 0, Rt = 0, le = Pn(), Te = Pn(), wt = Pn(), pn = function(p, w) {
      return p === w && (S = !0), 0;
    }, He = "undefined", Ht = 1 << 31, St = {}.hasOwnProperty, Qe = [], xt = Qe.pop, Ke = Qe.push, bt = Qe.push, hi = Qe.slice, Ot = Qe.indexOf || function(p) {
      for (var w = 0, k = this.length; k > w; w++)
        if (this[w] === p)
          return w;
      return -1;
    }, Rn = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", de = "[\\x20\\t\\r\\n\\f]", It = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", fi = It.replace("w", "w#"), di = "\\[" + de + "*(" + It + ")" + de + "*(?:([*^$|!~]?=)" + de + `*(?:(['"])((?:\\\\.|[^\\\\])*?)\\3|(` + fi + ")|)|)" + de + "*\\]", Hn = ":(" + It + `)(?:\\(((['"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|` + di.replace(3, 8) + ")*)|.*)\\)|)", En = new RegExp("^" + de + "+|((?:^|[^\\\\])(?:\\\\.)*)" + de + "+$", "g"), Fi = new RegExp("^" + de + "*," + de + "*"), Ri = new RegExp("^" + de + "*([>+~]|" + de + ")" + de + "*"), Hi = new RegExp("=" + de + `*([^\\]'"]*?)` + de + "*\\]", "g"), Ii = new RegExp(Hn), Pi = new RegExp("^" + fi + "$"), jn = { ID: new RegExp("^#(" + It + ")"), CLASS: new RegExp("^\\.(" + It + ")"), TAG: new RegExp("^(" + It.replace("w", "w*") + ")"), ATTR: new RegExp("^" + di), PSEUDO: new RegExp("^" + Hn), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + de + "*(even|odd|(([+-]|)(\\d*)n|)" + de + "*(?:([+-]|)" + de + "*(\\d+)|))" + de + "*\\)|)", "i"), bool: new RegExp("^(?:" + Rn + ")$", "i"), needsContext: new RegExp("^" + de + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + de + "*((?:-\\d)?\\d*)" + de + "*\\)|)(?=[^-]|$)", "i") }, $i = /^(?:input|select|textarea|button)$/i, Wi = /^h\d$/i, mn = /^[^{]+\{\s*\[native \w/, Xi = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, In = /[+~]/, Ui = /'|\\/g, Tt = new RegExp("\\\\([\\da-f]{1,6}" + de + "?|(" + de + ")|.)", "ig"), Ct = function(p, w, k) {
      var D = "0x" + w - 65536;
      return D !== D || k ? w : 0 > D ? String.fromCharCode(D + 65536) : String.fromCharCode(D >> 10 | 55296, 1023 & D | 56320);
    };
    try {
      bt.apply(Qe = hi.call(Re.childNodes), Re.childNodes), Qe[Re.childNodes.length].nodeType;
    } catch {
      bt = { apply: Qe.length ? function(w, k) {
        Ke.apply(w, hi.call(k));
      } : function(w, k) {
        for (var D = w.length, j = 0; w[D++] = k[j++]; )
          ;
        w.length = D - 1;
      } };
    }
    function ye(p, w, k, D) {
      var j, A, M, R, $, Z, J, G, me, ie;
      if ((w ? w.ownerDocument || w : Re) !== _ && E(w), w = w || _, k = k || [], !p || typeof p != "string")
        return k;
      if ((R = w.nodeType) !== 1 && R !== 9)
        return [];
      if (z && !D) {
        if (j = Xi.exec(p))
          if (M = j[1]) {
            if (R === 9) {
              if (A = w.getElementById(M), !A || !A.parentNode)
                return k;
              if (A.id === M)
                return k.push(A), k;
            } else if (w.ownerDocument && (A = w.ownerDocument.getElementById(M)) && nt(w, A) && A.id === M)
              return k.push(A), k;
          } else {
            if (j[2])
              return bt.apply(k, w.getElementsByTagName(p)), k;
            if ((M = j[3]) && n.getElementsByClassName && w.getElementsByClassName)
              return bt.apply(k, w.getElementsByClassName(M)), k;
          }
        if (n.qsa && (!W || !W.test(p))) {
          if (G = J = oe, me = w, ie = R === 9 && p, R === 1 && w.nodeName.toLowerCase() !== "object") {
            for (Z = Sn(p), (J = w.getAttribute("id")) ? G = J.replace(Ui, "\\$&") : w.setAttribute("id", G), G = "[id='" + G + "'] ", $ = Z.length; $--; )
              Z[$] = G + On(Z[$]);
            me = In.test(p) && Wn(w.parentNode) || w, ie = Z.join(",");
          }
          if (ie)
            try {
              return bt.apply(k, me.querySelectorAll(ie)), k;
            } catch {
            } finally {
              J || w.removeAttribute("id");
            }
        }
      }
      return Ji(p.replace(En, "$1"), w, k, D);
    }
    function Pn() {
      var p = [];
      function w(k, D) {
        return p.push(k + " ") > o.cacheLength && delete w[p.shift()], w[k + " "] = D;
      }
      return w;
    }
    function it(p) {
      return p[oe] = !0, p;
    }
    function rt(p) {
      var w = _.createElement("div");
      try {
        return !!p(w);
      } catch {
        return !1;
      } finally {
        w.parentNode && w.parentNode.removeChild(w), w = null;
      }
    }
    function $n(p, w) {
      for (var k = p.split("|"), D = p.length; D--; )
        o.attrHandle[k[D]] = w;
    }
    function pi(p, w) {
      var k = w && p, D = k && p.nodeType === 1 && w.nodeType === 1 && (~w.sourceIndex || Ht) - (~p.sourceIndex || Ht);
      if (D)
        return D;
      if (k) {
        for (; k = k.nextSibling; )
          if (k === w)
            return -1;
      }
      return p ? 1 : -1;
    }
    function Gi(p) {
      return function(w) {
        var k = w.nodeName.toLowerCase();
        return k === "input" && w.type === p;
      };
    }
    function Yi(p) {
      return function(w) {
        var k = w.nodeName.toLowerCase();
        return (k === "input" || k === "button") && w.type === p;
      };
    }
    function Dt(p) {
      return it(function(w) {
        return w = +w, it(function(k, D) {
          for (var j, A = p([], k.length, w), M = A.length; M--; )
            k[j = A[M]] && (k[j] = !(D[j] = k[j]));
        });
      });
    }
    function Wn(p) {
      return p && typeof p.getElementsByTagName !== He && p;
    }
    n = ye.support = {}, h = ye.isXML = function(p) {
      var w = p && (p.ownerDocument || p).documentElement;
      return w ? w.nodeName !== "HTML" : !1;
    }, E = ye.setDocument = function(p) {
      var w, k = p ? p.ownerDocument || p : Re, D = k.defaultView;
      return k !== _ && k.nodeType === 9 && k.documentElement ? (_ = k, N = k.documentElement, z = !h(k), D && D !== D.top && (D.addEventListener ? D.addEventListener("unload", function() {
        E();
      }, !1) : D.attachEvent && D.attachEvent("onunload", function() {
        E();
      })), n.attributes = rt(function(j) {
        return j.className = "i", !j.getAttribute("className");
      }), n.getElementsByTagName = rt(function(j) {
        return j.appendChild(k.createComment("")), !j.getElementsByTagName("*").length;
      }), n.getElementsByClassName = mn.test(k.getElementsByClassName) && rt(function(j) {
        return j.innerHTML = "<div class='a'></div><div class='a i'></div>", j.firstChild.className = "i", j.getElementsByClassName("i").length === 2;
      }), n.getById = rt(function(j) {
        return N.appendChild(j).id = oe, !k.getElementsByName || !k.getElementsByName(oe).length;
      }), n.getById ? (o.find.ID = function(j, A) {
        if (typeof A.getElementById !== He && z) {
          var M = A.getElementById(j);
          return M && M.parentNode ? [M] : [];
        }
      }, o.filter.ID = function(j) {
        var A = j.replace(Tt, Ct);
        return function(M) {
          return M.getAttribute("id") === A;
        };
      }) : (delete o.find.ID, o.filter.ID = function(j) {
        var A = j.replace(Tt, Ct);
        return function(M) {
          var R = typeof M.getAttributeNode !== He && M.getAttributeNode("id");
          return R && R.value === A;
        };
      }), o.find.TAG = n.getElementsByTagName ? function(j, A) {
        return typeof A.getElementsByTagName !== He ? A.getElementsByTagName(j) : void 0;
      } : function(j, A) {
        var M, R = [], $ = 0, Z = A.getElementsByTagName(j);
        if (j === "*") {
          for (; M = Z[$++]; )
            M.nodeType === 1 && R.push(M);
          return R;
        }
        return Z;
      }, o.find.CLASS = n.getElementsByClassName && function(j, A) {
        return typeof A.getElementsByClassName !== He && z ? A.getElementsByClassName(j) : void 0;
      }, K = [], W = [], (n.qsa = mn.test(k.querySelectorAll)) && (rt(function(j) {
        j.innerHTML = "<select t=''><option selected=''></option></select>", j.querySelectorAll("[t^='']").length && W.push("[*^$]=" + de + `*(?:''|"")`), j.querySelectorAll("[selected]").length || W.push("\\[" + de + "*(?:value|" + Rn + ")"), j.querySelectorAll(":checked").length || W.push(":checked");
      }), rt(function(j) {
        var A = k.createElement("input");
        A.setAttribute("type", "hidden"), j.appendChild(A).setAttribute("name", "D"), j.querySelectorAll("[name=d]").length && W.push("name" + de + "*[*^$|!~]?="), j.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled"), j.querySelectorAll("*,:x"), W.push(",.*:");
      })), (n.matchesSelector = mn.test(he = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && rt(function(j) {
        n.disconnectedMatch = he.call(j, "div"), he.call(j, "[s!='']:x"), K.push("!=", Hn);
      }), W = W.length && new RegExp(W.join("|")), K = K.length && new RegExp(K.join("|")), w = mn.test(N.compareDocumentPosition), nt = w || mn.test(N.contains) ? function(j, A) {
        var M = j.nodeType === 9 ? j.documentElement : j, R = A && A.parentNode;
        return j === R || !(!R || R.nodeType !== 1 || !(M.contains ? M.contains(R) : j.compareDocumentPosition && 16 & j.compareDocumentPosition(R)));
      } : function(j, A) {
        if (A) {
          for (; A = A.parentNode; )
            if (A === j)
              return !0;
        }
        return !1;
      }, pn = w ? function(j, A) {
        if (j === A)
          return S = !0, 0;
        var M = !j.compareDocumentPosition - !A.compareDocumentPosition;
        return M || (M = (j.ownerDocument || j) === (A.ownerDocument || A) ? j.compareDocumentPosition(A) : 1, 1 & M || !n.sortDetached && A.compareDocumentPosition(j) === M ? j === k || j.ownerDocument === Re && nt(Re, j) ? -1 : A === k || A.ownerDocument === Re && nt(Re, A) ? 1 : q ? Ot.call(q, j) - Ot.call(q, A) : 0 : 4 & M ? -1 : 1);
      } : function(j, A) {
        if (j === A)
          return S = !0, 0;
        var M, R = 0, $ = j.parentNode, Z = A.parentNode, J = [j], G = [A];
        if (!$ || !Z)
          return j === k ? -1 : A === k ? 1 : $ ? -1 : Z ? 1 : q ? Ot.call(q, j) - Ot.call(q, A) : 0;
        if ($ === Z)
          return pi(j, A);
        for (M = j; M = M.parentNode; )
          J.unshift(M);
        for (M = A; M = M.parentNode; )
          G.unshift(M);
        for (; J[R] === G[R]; )
          R++;
        return R ? pi(J[R], G[R]) : J[R] === Re ? -1 : G[R] === Re ? 1 : 0;
      }, k) : _;
    }, ye.matches = function(p, w) {
      return ye(p, null, null, w);
    }, ye.matchesSelector = function(p, w) {
      if ((p.ownerDocument || p) !== _ && E(p), w = w.replace(Hi, "='$1']"), !(!n.matchesSelector || !z || K && K.test(w) || W && W.test(w)))
        try {
          var k = he.call(p, w);
          if (k || n.disconnectedMatch || p.document && p.document.nodeType !== 11)
            return k;
        } catch {
        }
      return ye(w, _, null, [p]).length > 0;
    }, ye.contains = function(p, w) {
      return (p.ownerDocument || p) !== _ && E(p), nt(p, w);
    }, ye.attr = function(p, w) {
      (p.ownerDocument || p) !== _ && E(p);
      var k = o.attrHandle[w.toLowerCase()], D = k && St.call(o.attrHandle, w.toLowerCase()) ? k(p, w, !z) : void 0;
      return D !== void 0 ? D : n.attributes || !z ? p.getAttribute(w) : (D = p.getAttributeNode(w)) && D.specified ? D.value : null;
    }, ye.error = function(p) {
      throw new Error("Syntax error, unrecognized expression: " + p);
    }, ye.uniqueSort = function(p) {
      var w, k = [], D = 0, j = 0;
      if (S = !n.detectDuplicates, q = !n.sortStable && p.slice(0), p.sort(pn), S) {
        for (; w = p[j++]; )
          w === p[j] && (D = k.push(j));
        for (; D--; )
          p.splice(k[D], 1);
      }
      return q = null, p;
    }, a = ye.getText = function(p) {
      var w, k = "", D = 0, j = p.nodeType;
      if (j) {
        if (j === 1 || j === 9 || j === 11) {
          if (typeof p.textContent == "string")
            return p.textContent;
          for (p = p.firstChild; p; p = p.nextSibling)
            k += a(p);
        } else if (j === 3 || j === 4)
          return p.nodeValue;
      } else
        for (; w = p[D++]; )
          k += a(w);
      return k;
    }, o = ye.selectors = { cacheLength: 50, createPseudo: it, match: jn, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(p) {
      return p[1] = p[1].replace(Tt, Ct), p[3] = (p[4] || p[5] || "").replace(Tt, Ct), p[2] === "~=" && (p[3] = " " + p[3] + " "), p.slice(0, 4);
    }, CHILD: function(p) {
      return p[1] = p[1].toLowerCase(), p[1].slice(0, 3) === "nth" ? (p[3] || ye.error(p[0]), p[4] = +(p[4] ? p[5] + (p[6] || 1) : 2 * (p[3] === "even" || p[3] === "odd")), p[5] = +(p[7] + p[8] || p[3] === "odd")) : p[3] && ye.error(p[0]), p;
    }, PSEUDO: function(p) {
      var w, k = !p[5] && p[2];
      return jn.CHILD.test(p[0]) ? null : (p[3] && p[4] !== void 0 ? p[2] = p[4] : k && Ii.test(k) && (w = Sn(k, !0)) && (w = k.indexOf(")", k.length - w) - k.length) && (p[0] = p[0].slice(0, w), p[2] = k.slice(0, w)), p.slice(0, 3));
    } }, filter: { TAG: function(p) {
      var w = p.replace(Tt, Ct).toLowerCase();
      return p === "*" ? function() {
        return !0;
      } : function(k) {
        return k.nodeName && k.nodeName.toLowerCase() === w;
      };
    }, CLASS: function(p) {
      var w = le[p + " "];
      return w || (w = new RegExp("(^|" + de + ")" + p + "(" + de + "|$)")) && le(p, function(k) {
        return w.test(typeof k.className == "string" && k.className || typeof k.getAttribute !== He && k.getAttribute("class") || "");
      });
    }, ATTR: function(p, w, k) {
      return function(D) {
        var j = ye.attr(D, p);
        return j == null ? w === "!=" : w ? (j += "", w === "=" ? j === k : w === "!=" ? j !== k : w === "^=" ? k && j.indexOf(k) === 0 : w === "*=" ? k && j.indexOf(k) > -1 : w === "$=" ? k && j.slice(-k.length) === k : w === "~=" ? (" " + j + " ").indexOf(k) > -1 : w === "|=" ? j === k || j.slice(0, k.length + 1) === k + "-" : !1) : !0;
      };
    }, CHILD: function(p, w, k, D, j) {
      var A = p.slice(0, 3) !== "nth", M = p.slice(-4) !== "last", R = w === "of-type";
      return D === 1 && j === 0 ? function($) {
        return !!$.parentNode;
      } : function($, Z, J) {
        var G, me, ie, pe, De, _e, Xe = A !== M ? "nextSibling" : "previousSibling", ve = $.parentNode, gn = R && $.nodeName.toLowerCase(), vn = !J && !R;
        if (ve) {
          if (A) {
            for (; Xe; ) {
              for (ie = $; ie = ie[Xe]; )
                if (R ? ie.nodeName.toLowerCase() === gn : ie.nodeType === 1)
                  return !1;
              _e = Xe = p === "only" && !_e && "nextSibling";
            }
            return !0;
          }
          if (_e = [M ? ve.firstChild : ve.lastChild], M && vn) {
            for (me = ve[oe] || (ve[oe] = {}), G = me[p] || [], De = G[0] === V && G[1], pe = G[0] === V && G[2], ie = De && ve.childNodes[De]; ie = ++De && ie && ie[Xe] || (pe = De = 0) || _e.pop(); )
              if (ie.nodeType === 1 && ++pe && ie === $) {
                me[p] = [V, De, pe];
                break;
              }
          } else if (vn && (G = ($[oe] || ($[oe] = {}))[p]) && G[0] === V)
            pe = G[1];
          else
            for (; (ie = ++De && ie && ie[Xe] || (pe = De = 0) || _e.pop()) && !((R ? ie.nodeName.toLowerCase() === gn : ie.nodeType === 1) && ++pe && (vn && ((ie[oe] || (ie[oe] = {}))[p] = [V, pe]), ie === $)); )
              ;
          return pe -= j, pe === D || pe % D === 0 && pe / D >= 0;
        }
      };
    }, PSEUDO: function(p, w) {
      var k, D = o.pseudos[p] || o.setFilters[p.toLowerCase()] || ye.error("unsupported pseudo: " + p);
      return D[oe] ? D(w) : D.length > 1 ? (k = [p, p, "", w], o.setFilters.hasOwnProperty(p.toLowerCase()) ? it(function(j, A) {
        for (var M, R = D(j, w), $ = R.length; $--; )
          M = Ot.call(j, R[$]), j[M] = !(A[M] = R[$]);
      }) : function(j) {
        return D(j, 0, k);
      }) : D;
    } }, pseudos: { not: it(function(p) {
      var w = [], k = [], D = f(p.replace(En, "$1"));
      return D[oe] ? it(function(j, A, M, R) {
        for (var $, Z = D(j, null, R, []), J = j.length; J--; )
          ($ = Z[J]) && (j[J] = !(A[J] = $));
      }) : function(j, A, M) {
        return w[0] = j, D(w, null, M, k), !k.pop();
      };
    }), has: it(function(p) {
      return function(w) {
        return ye(p, w).length > 0;
      };
    }), contains: it(function(p) {
      return function(w) {
        return (w.textContent || w.innerText || a(w)).indexOf(p) > -1;
      };
    }), lang: it(function(p) {
      return Pi.test(p || "") || ye.error("unsupported lang: " + p), p = p.replace(Tt, Ct).toLowerCase(), function(w) {
        var k;
        do
          if (k = z ? w.lang : w.getAttribute("xml:lang") || w.getAttribute("lang"))
            return k = k.toLowerCase(), k === p || k.indexOf(p + "-") === 0;
        while ((w = w.parentNode) && w.nodeType === 1);
        return !1;
      };
    }), target: function(p) {
      var w = e.location && e.location.hash;
      return w && w.slice(1) === p.id;
    }, root: function(p) {
      return p === N;
    }, focus: function(p) {
      return p === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(p.type || p.href || ~p.tabIndex);
    }, enabled: function(p) {
      return p.disabled === !1;
    }, disabled: function(p) {
      return p.disabled === !0;
    }, checked: function(p) {
      var w = p.nodeName.toLowerCase();
      return w === "input" && !!p.checked || w === "option" && !!p.selected;
    }, selected: function(p) {
      return p.parentNode && p.parentNode.selectedIndex, p.selected === !0;
    }, empty: function(p) {
      for (p = p.firstChild; p; p = p.nextSibling)
        if (p.nodeType < 6)
          return !1;
      return !0;
    }, parent: function(p) {
      return !o.pseudos.empty(p);
    }, header: function(p) {
      return Wi.test(p.nodeName);
    }, input: function(p) {
      return $i.test(p.nodeName);
    }, button: function(p) {
      var w = p.nodeName.toLowerCase();
      return w === "input" && p.type === "button" || w === "button";
    }, text: function(p) {
      var w;
      return p.nodeName.toLowerCase() === "input" && p.type === "text" && ((w = p.getAttribute("type")) == null || w.toLowerCase() === "text");
    }, first: Dt(function() {
      return [0];
    }), last: Dt(function(p, w) {
      return [w - 1];
    }), eq: Dt(function(p, w, k) {
      return [0 > k ? k + w : k];
    }), even: Dt(function(p, w) {
      for (var k = 0; w > k; k += 2)
        p.push(k);
      return p;
    }), odd: Dt(function(p, w) {
      for (var k = 1; w > k; k += 2)
        p.push(k);
      return p;
    }), lt: Dt(function(p, w, k) {
      for (var D = 0 > k ? k + w : k; --D >= 0; )
        p.push(D);
      return p;
    }), gt: Dt(function(p, w, k) {
      for (var D = 0 > k ? k + w : k; ++D < w; )
        p.push(D);
      return p;
    }) } }, o.pseudos.nth = o.pseudos.eq;
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      o.pseudos[t] = Gi(t);
    for (t in { submit: !0, reset: !0 })
      o.pseudos[t] = Yi(t);
    function mi() {
    }
    mi.prototype = o.filters = o.pseudos, o.setFilters = new mi();
    function Sn(p, w) {
      var k, D, j, A, M, R, $, Z = Te[p + " "];
      if (Z)
        return w ? 0 : Z.slice(0);
      for (M = p, R = [], $ = o.preFilter; M; ) {
        (!k || (D = Fi.exec(M))) && (D && (M = M.slice(D[0].length) || M), R.push(j = [])), k = !1, (D = Ri.exec(M)) && (k = D.shift(), j.push({ value: k, type: D[0].replace(En, " ") }), M = M.slice(k.length));
        for (A in o.filter)
          !(D = jn[A].exec(M)) || $[A] && !(D = $[A](D)) || (k = D.shift(), j.push({ value: k, type: A, matches: D }), M = M.slice(k.length));
        if (!k)
          break;
      }
      return w ? M.length : M ? ye.error(p) : Te(p, R).slice(0);
    }
    function On(p) {
      for (var w = 0, k = p.length, D = ""; k > w; w++)
        D += p[w].value;
      return D;
    }
    function Xn(p, w, k) {
      var D = w.dir, j = k && D === "parentNode", A = Rt++;
      return w.first ? function(M, R, $) {
        for (; M = M[D]; )
          if (M.nodeType === 1 || j)
            return p(M, R, $);
      } : function(M, R, $) {
        var Z, J, G = [V, A];
        if ($) {
          for (; M = M[D]; )
            if ((M.nodeType === 1 || j) && p(M, R, $))
              return !0;
        } else
          for (; M = M[D]; )
            if (M.nodeType === 1 || j) {
              if (J = M[oe] || (M[oe] = {}), (Z = J[D]) && Z[0] === V && Z[1] === A)
                return G[2] = Z[2];
              if (J[D] = G, G[2] = p(M, R, $))
                return !0;
            }
      };
    }
    function Un(p) {
      return p.length > 1 ? function(w, k, D) {
        for (var j = p.length; j--; )
          if (!p[j](w, k, D))
            return !1;
        return !0;
      } : p[0];
    }
    function Dn(p, w, k, D, j) {
      for (var A, M = [], R = 0, $ = p.length, Z = w != null; $ > R; R++)
        (A = p[R]) && (!k || k(A, D, j)) && (M.push(A), Z && w.push(R));
      return M;
    }
    function Gn(p, w, k, D, j, A) {
      return D && !D[oe] && (D = Gn(D)), j && !j[oe] && (j = Gn(j, A)), it(function(M, R, $, Z) {
        var J, G, me, ie = [], pe = [], De = R.length, _e = M || Ki(w || "*", $.nodeType ? [$] : $, []), Xe = !p || !M && w ? _e : Dn(_e, ie, p, $, Z), ve = k ? j || (M ? p : De || D) ? [] : R : Xe;
        if (k && k(Xe, ve, $, Z), D)
          for (J = Dn(ve, pe), D(J, [], $, Z), G = J.length; G--; )
            (me = J[G]) && (ve[pe[G]] = !(Xe[pe[G]] = me));
        if (M) {
          if (j || p) {
            if (j) {
              for (J = [], G = ve.length; G--; )
                (me = ve[G]) && J.push(Xe[G] = me);
              j(null, ve = [], J, Z);
            }
            for (G = ve.length; G--; )
              (me = ve[G]) && (J = j ? Ot.call(M, me) : ie[G]) > -1 && (M[J] = !(R[J] = me));
          }
        } else
          ve = Dn(ve === R ? ve.splice(De, ve.length) : ve), j ? j(null, R, ve, Z) : bt.apply(R, ve);
      });
    }
    function Yn(p) {
      for (var w, k, D, j = p.length, A = o.relative[p[0].type], M = A || o.relative[" "], R = A ? 1 : 0, $ = Xn(function(G) {
        return G === w;
      }, M, !0), Z = Xn(function(G) {
        return Ot.call(w, G) > -1;
      }, M, !0), J = [function(G, me, ie) {
        return !A && (ie || me !== m) || ((w = me).nodeType ? $(G, me, ie) : Z(G, me, ie));
      }]; j > R; R++)
        if (k = o.relative[p[R].type])
          J = [Xn(Un(J), k)];
        else {
          if (k = o.filter[p[R].type].apply(null, p[R].matches), k[oe]) {
            for (D = ++R; j > D && !o.relative[p[D].type]; D++)
              ;
            return Gn(R > 1 && Un(J), R > 1 && On(p.slice(0, R - 1).concat({ value: p[R - 2].type === " " ? "*" : "" })).replace(En, "$1"), k, D > R && Yn(p.slice(R, D)), j > D && Yn(p = p.slice(D)), j > D && On(p));
          }
          J.push(k);
        }
      return Un(J);
    }
    function Vi(p, w) {
      var k = w.length > 0, D = p.length > 0, j = function(A, M, R, $, Z) {
        var J, G, me, ie = 0, pe = "0", De = A && [], _e = [], Xe = m, ve = A || D && o.find.TAG("*", Z), gn = V += Xe == null ? 1 : Math.random() || 0.1, vn = ve.length;
        for (Z && (m = M !== _ && M); pe !== vn && (J = ve[pe]) != null; pe++) {
          if (D && J) {
            for (G = 0; me = p[G++]; )
              if (me(J, M, R)) {
                $.push(J);
                break;
              }
            Z && (V = gn);
          }
          k && ((J = !me && J) && ie--, A && De.push(J));
        }
        if (ie += pe, k && pe !== ie) {
          for (G = 0; me = w[G++]; )
            me(De, _e, M, R);
          if (A) {
            if (ie > 0)
              for (; pe--; )
                De[pe] || _e[pe] || (_e[pe] = xt.call($));
            _e = Dn(_e);
          }
          bt.apply($, _e), Z && !A && _e.length > 0 && ie + w.length > 1 && ye.uniqueSort($);
        }
        return Z && (V = gn, m = Xe), De;
      };
      return k ? it(j) : j;
    }
    f = ye.compile = function(p, w) {
      var k, D = [], j = [], A = wt[p + " "];
      if (!A) {
        for (w || (w = Sn(p)), k = w.length; k--; )
          A = Yn(w[k]), A[oe] ? D.push(A) : j.push(A);
        A = wt(p, Vi(j, D));
      }
      return A;
    };
    function Ki(p, w, k) {
      for (var D = 0, j = w.length; j > D; D++)
        ye(p, w[D], k);
      return k;
    }
    function Ji(p, w, k, D) {
      var j, A, M, R, $, Z = Sn(p);
      if (!D && Z.length === 1) {
        if (A = Z[0] = Z[0].slice(0), A.length > 2 && (M = A[0]).type === "ID" && n.getById && w.nodeType === 9 && z && o.relative[A[1].type]) {
          if (w = (o.find.ID(M.matches[0].replace(Tt, Ct), w) || [])[0], !w)
            return k;
          p = p.slice(A.shift().value.length);
        }
        for (j = jn.needsContext.test(p) ? 0 : A.length; j-- && (M = A[j], !o.relative[R = M.type]); )
          if (($ = o.find[R]) && (D = $(M.matches[0].replace(Tt, Ct), In.test(A[0].type) && Wn(w.parentNode) || w))) {
            if (A.splice(j, 1), p = D.length && On(A), !p)
              return bt.apply(k, D), k;
            break;
          }
      }
      return f(p, Z)(D, w, !z, k, In.test(p) && Wn(w.parentNode) || w), k;
    }
    return n.sortStable = oe.split("").sort(pn).join("") === oe, n.detectDuplicates = !!S, E(), n.sortDetached = rt(function(p) {
      return 1 & p.compareDocumentPosition(_.createElement("div"));
    }), rt(function(p) {
      return p.innerHTML = "<a href='#'></a>", p.firstChild.getAttribute("href") === "#";
    }) || $n("type|href|height|width", function(p, w, k) {
      return k ? void 0 : p.getAttribute(w, w.toLowerCase() === "type" ? 1 : 2);
    }), n.attributes && rt(function(p) {
      return p.innerHTML = "<input/>", p.firstChild.setAttribute("value", ""), p.firstChild.getAttribute("value") === "";
    }) || $n("value", function(p, w, k) {
      return k || p.nodeName.toLowerCase() !== "input" ? void 0 : p.defaultValue;
    }), rt(function(p) {
      return p.getAttribute("disabled") == null;
    }) || $n(Rn, function(p, w, k) {
      var D;
      return k ? void 0 : p[w] === !0 ? w.toLowerCase() : (D = p.getAttributeNode(w)) && D.specified ? D.value : null;
    }), ye;
  }(P);
  i.find = Y, i.expr = Y.selectors, i.expr[":"] = i.expr.pseudos, i.unique = Y.uniqueSort, i.text = Y.getText, i.isXMLDoc = Y.isXML, i.contains = Y.contains;
  var Xt = i.expr.match.needsContext, Ne = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ut = /^.[^:#\[\.,]*$/;
  function ge(e, t, n) {
    if (i.isFunction(t))
      return i.grep(e, function(o, a) {
        return !!t.call(o, a, o) !== n;
      });
    if (t.nodeType)
      return i.grep(e, function(o) {
        return o === t !== n;
      });
    if (typeof t == "string") {
      if (Ut.test(t))
        return i.filter(t, e, n);
      t = i.filter(t, e);
    }
    return i.grep(e, function(o) {
      return i.inArray(o, t) >= 0 !== n;
    });
  }
  i.filter = function(e, t, n) {
    var o = t[0];
    return n && (e = ":not(" + e + ")"), t.length === 1 && o.nodeType === 1 ? i.find.matchesSelector(o, e) ? [o] : [] : i.find.matches(e, i.grep(t, function(a) {
      return a.nodeType === 1;
    }));
  }, i.fn.extend({ find: function(e) {
    var t, n = [], o = this, a = o.length;
    if (typeof e != "string")
      return this.pushStack(i(e).filter(function() {
        for (t = 0; a > t; t++)
          if (i.contains(o[t], this))
            return !0;
      }));
    for (t = 0; a > t; t++)
      i.find(e, o[t], n);
    return n = this.pushStack(a > 1 ? i.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
  }, filter: function(e) {
    return this.pushStack(ge(this, e || [], !1));
  }, not: function(e) {
    return this.pushStack(ge(this, e || [], !0));
  }, is: function(e) {
    return !!ge(this, typeof e == "string" && Xt.test(e) ? i(e) : e || [], !1).length;
  } });
  var Ce, x = P.document, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Se = i.fn.init = function(e, t) {
    var n, o;
    if (!e)
      return this;
    if (typeof e == "string") {
      if (n = e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? [null, e, null] : ee.exec(e), !n || !n[1] && t)
        return !t || t.jquery ? (t || Ce).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), Ne.test(n[1]) && i.isPlainObject(t))
          for (n in t)
            i.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      if (o = x.getElementById(n[2]), o && o.parentNode) {
        if (o.id !== n[2])
          return Ce.find(e);
        this.length = 1, this[0] = o;
      }
      return this.context = x, this.selector = e, this;
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : i.isFunction(e) ? typeof Ce.ready < "u" ? Ce.ready(e) : e(i) : (e.selector !== void 0 && (this.selector = e.selector, this.context = e.context), i.makeArray(e, this));
  };
  Se.prototype = i.fn, Ce = i(x);
  var Gt = /^(?:parents|prev(?:Until|All))/, Lt = { children: !0, contents: !0, next: !0, prev: !0 };
  i.extend({ dir: function(e, t, n) {
    for (var o = [], a = e[t]; a && a.nodeType !== 9 && (n === void 0 || a.nodeType !== 1 || !i(a).is(n)); )
      a.nodeType === 1 && o.push(a), a = a[t];
    return o;
  }, sibling: function(e, t) {
    for (var n = []; e; e = e.nextSibling)
      e.nodeType === 1 && e !== t && n.push(e);
    return n;
  } }), i.fn.extend({ has: function(e) {
    var t, n = i(e, this), o = n.length;
    return this.filter(function() {
      for (t = 0; o > t; t++)
        if (i.contains(this, n[t]))
          return !0;
    });
  }, closest: function(e, t) {
    for (var n, o = 0, a = this.length, h = [], f = Xt.test(e) || typeof e != "string" ? i(e, t || this.context) : 0; a > o; o++)
      for (n = this[o]; n && n !== t; n = n.parentNode)
        if (n.nodeType < 11 && (f ? f.index(n) > -1 : n.nodeType === 1 && i.find.matchesSelector(n, e))) {
          h.push(n);
          break;
        }
    return this.pushStack(h.length > 1 ? i.unique(h) : h);
  }, index: function(e) {
    return e ? typeof e == "string" ? i.inArray(this[0], i(e)) : i.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e, t) {
    return this.pushStack(i.unique(i.merge(this.get(), i(e, t))));
  }, addBack: function(e) {
    return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
  } });
  function Ze(e, t) {
    do
      e = e[t];
    while (e && e.nodeType !== 1);
    return e;
  }
  i.each({ parent: function(e) {
    var t = e.parentNode;
    return t && t.nodeType !== 11 ? t : null;
  }, parents: function(e) {
    return i.dir(e, "parentNode");
  }, parentsUntil: function(e, t, n) {
    return i.dir(e, "parentNode", n);
  }, next: function(e) {
    return Ze(e, "nextSibling");
  }, prev: function(e) {
    return Ze(e, "previousSibling");
  }, nextAll: function(e) {
    return i.dir(e, "nextSibling");
  }, prevAll: function(e) {
    return i.dir(e, "previousSibling");
  }, nextUntil: function(e, t, n) {
    return i.dir(e, "nextSibling", n);
  }, prevUntil: function(e, t, n) {
    return i.dir(e, "previousSibling", n);
  }, siblings: function(e) {
    return i.sibling((e.parentNode || {}).firstChild, e);
  }, children: function(e) {
    return i.sibling(e.firstChild);
  }, contents: function(e) {
    return i.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : i.merge([], e.childNodes);
  } }, function(e, t) {
    i.fn[e] = function(n, o) {
      var a = i.map(this, t, n);
      return e.slice(-5) !== "Until" && (o = n), o && typeof o == "string" && (a = i.filter(o, a)), this.length > 1 && (Lt[e] || (a = i.unique(a)), Gt.test(e) && (a = a.reverse())), this.pushStack(a);
    };
  });
  var Ie = /\S+/g, Yt = {};
  function yn(e) {
    var t = Yt[e] = {};
    return i.each(e.match(Ie) || [], function(n, o) {
      t[o] = !0;
    }), t;
  }
  i.Callbacks = function(e) {
    e = typeof e == "string" ? Yt[e] || yn(e) : i.extend({}, e);
    var t, n, o, a, h, f, m = [], q = !e.once && [], S = function(_) {
      for (n = e.memory && _, o = !0, h = f || 0, f = 0, a = m.length, t = !0; m && a > h; h++)
        if (m[h].apply(_[0], _[1]) === !1 && e.stopOnFalse) {
          n = !1;
          break;
        }
      t = !1, m && (q ? q.length && S(q.shift()) : n ? m = [] : E.disable());
    }, E = { add: function() {
      if (m) {
        var _ = m.length;
        (function N(z) {
          i.each(z, function(W, K) {
            var he = i.type(K);
            he === "function" ? e.unique && E.has(K) || m.push(K) : K && K.length && he !== "string" && N(K);
          });
        })(arguments), t ? a = m.length : n && (f = _, S(n));
      }
      return this;
    }, remove: function() {
      return m && i.each(arguments, function(_, N) {
        for (var z; (z = i.inArray(N, m, z)) > -1; )
          m.splice(z, 1), t && (a >= z && a--, h >= z && h--);
      }), this;
    }, has: function(_) {
      return _ ? i.inArray(_, m) > -1 : !(!m || !m.length);
    }, empty: function() {
      return m = [], a = 0, this;
    }, disable: function() {
      return m = q = n = void 0, this;
    }, disabled: function() {
      return !m;
    }, lock: function() {
      return q = void 0, n || E.disable(), this;
    }, locked: function() {
      return !q;
    }, fireWith: function(_, N) {
      return !m || o && !q || (N = N || [], N = [_, N.slice ? N.slice() : N], t ? q.push(N) : S(N)), this;
    }, fire: function() {
      return E.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o;
    } };
    return E;
  }, i.extend({ Deferred: function(e) {
    var t = [["resolve", "done", i.Callbacks("once memory"), "resolved"], ["reject", "fail", i.Callbacks("once memory"), "rejected"], ["notify", "progress", i.Callbacks("memory")]], n = "pending", o = { state: function() {
      return n;
    }, always: function() {
      return a.done(arguments).fail(arguments), this;
    }, then: function() {
      var h = arguments;
      return i.Deferred(function(f) {
        i.each(t, function(m, q) {
          var S = i.isFunction(h[m]) && h[m];
          a[q[1]](function() {
            var E = S && S.apply(this, arguments);
            E && i.isFunction(E.promise) ? E.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[q[0] + "With"](this === o ? f.promise() : this, S ? [E] : arguments);
          });
        }), h = null;
      }).promise();
    }, promise: function(h) {
      return h != null ? i.extend(h, o) : o;
    } }, a = {};
    return o.pipe = o.then, i.each(t, function(h, f) {
      var m = f[2], q = f[3];
      o[f[1]] = m.add, q && m.add(function() {
        n = q;
      }, t[1 ^ h][2].disable, t[2][2].lock), a[f[0]] = function() {
        return a[f[0] + "With"](this === a ? o : this, arguments), this;
      }, a[f[0] + "With"] = m.fireWith;
    }), o.promise(a), e && e.call(a, a), a;
  }, when: function(e) {
    var t = 0, n = v.call(arguments), o = n.length, a = o !== 1 || e && i.isFunction(e.promise) ? o : 0, h = a === 1 ? e : i.Deferred(), f = function(E, _, N) {
      return function(z) {
        _[E] = this, N[E] = arguments.length > 1 ? v.call(arguments) : z, N === m ? h.notifyWith(_, N) : --a || h.resolveWith(_, N);
      };
    }, m, q, S;
    if (o > 1)
      for (m = new Array(o), q = new Array(o), S = new Array(o); o > t; t++)
        n[t] && i.isFunction(n[t].promise) ? n[t].promise().done(f(t, S, n)).fail(h.reject).progress(f(t, q, m)) : --a;
    return a || h.resolveWith(S, n), h.promise();
  } });
  var we;
  i.fn.ready = function(e) {
    return i.ready.promise().done(e), this;
  }, i.extend({ isReady: !1, readyWait: 1, holdReady: function(e) {
    e ? i.readyWait++ : i.ready(!0);
  }, ready: function(e) {
    if (e === !0 ? !--i.readyWait : !i.isReady) {
      if (!x.body)
        return setTimeout(i.ready);
      i.isReady = !0, e !== !0 && --i.readyWait > 0 || (we.resolveWith(x, [i]), i.fn.trigger && i(x).trigger("ready").off("ready"));
    }
  } });
  function Be() {
    x.addEventListener ? (x.removeEventListener("DOMContentLoaded", Pe, !1), P.removeEventListener("load", Pe, !1)) : (x.detachEvent("onreadystatechange", Pe), P.detachEvent("onload", Pe));
  }
  function Pe() {
    (x.addEventListener || event.type === "load" || x.readyState === "complete") && (Be(), i.ready());
  }
  i.ready.promise = function(e) {
    if (!we)
      if (we = i.Deferred(), x.readyState === "complete")
        setTimeout(i.ready);
      else if (x.addEventListener)
        x.addEventListener("DOMContentLoaded", Pe, !1), P.addEventListener("load", Pe, !1);
      else {
        x.attachEvent("onreadystatechange", Pe), P.attachEvent("onload", Pe);
        var t = !1;
        try {
          t = P.frameElement == null && x.documentElement;
        } catch {
        }
        t && t.doScroll && function n() {
          if (!i.isReady) {
            try {
              t.doScroll("left");
            } catch {
              return setTimeout(n, 50);
            }
            Be(), i.ready();
          }
        }();
      }
    return we.promise(e);
  };
  var xe = "undefined", Vt;
  for (Vt in i(Q))
    break;
  Q.ownLast = Vt !== "0", Q.inlineBlockNeedsLayout = !1, i(function() {
    var e, t, n = x.getElementsByTagName("body")[0];
    n && (e = x.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = x.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== xe && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (Q.inlineBlockNeedsLayout = t.offsetWidth === 3) && (n.style.zoom = 1)), n.removeChild(e), e = t = null);
  }), function() {
    var e = x.createElement("div");
    if (Q.deleteExpando == null) {
      Q.deleteExpando = !0;
      try {
        delete e.test;
      } catch {
        Q.deleteExpando = !1;
      }
    }
    e = null;
  }(), i.acceptData = function(e) {
    var t = i.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
    return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t;
  };
  var Kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Jt = /([A-Z])/g;
  function ut(e, t, n) {
    if (n === void 0 && e.nodeType === 1) {
      var o = "data-" + t.replace(Jt, "-$1").toLowerCase();
      if (n = e.getAttribute(o), typeof n == "string") {
        try {
          n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : Kt.test(n) ? i.parseJSON(n) : n;
        } catch {
        }
        i.data(e, t, n);
      } else
        n = void 0;
    }
    return n;
  }
  function et(e) {
    var t;
    for (t in e)
      if ((t !== "data" || !i.isEmptyObject(e[t])) && t !== "toJSON")
        return !1;
    return !0;
  }
  function pt(e, t, n, o) {
    if (i.acceptData(e)) {
      var a, h, f = i.expando, m = e.nodeType, q = m ? i.cache : e, S = m ? e[f] : e[f] && f;
      if (S && q[S] && (o || q[S].data) || n !== void 0 || typeof t != "string")
        return S || (S = m ? e[f] = re.pop() || i.guid++ : f), q[S] || (q[S] = m ? {} : { toJSON: i.noop }), (typeof t == "object" || typeof t == "function") && (o ? q[S] = i.extend(q[S], t) : q[S].data = i.extend(q[S].data, t)), h = q[S], o || (h.data || (h.data = {}), h = h.data), n !== void 0 && (h[i.camelCase(t)] = n), typeof t == "string" ? (a = h[t], a == null && (a = h[i.camelCase(t)])) : a = h, a;
    }
  }
  function ct(e, t, n) {
    if (i.acceptData(e)) {
      var o, a, h = e.nodeType, f = h ? i.cache : e, m = h ? e[i.expando] : i.expando;
      if (f[m]) {
        if (t && (o = n ? f[m] : f[m].data)) {
          for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t), t = t in o ? [t] : t.split(" ")), a = t.length; a--; )
            delete o[t[a]];
          if (n ? !et(o) : !i.isEmptyObject(o))
            return;
        }
        (n || (delete f[m].data, et(f[m]))) && (h ? i.cleanData([e], !0) : Q.deleteExpando || f != f.window ? delete f[m] : f[m] = null);
      }
    }
  }
  i.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) {
    return e = e.nodeType ? i.cache[e[i.expando]] : e[i.expando], !!e && !et(e);
  }, data: function(e, t, n) {
    return pt(e, t, n);
  }, removeData: function(e, t) {
    return ct(e, t);
  }, _data: function(e, t, n) {
    return pt(e, t, n, !0);
  }, _removeData: function(e, t) {
    return ct(e, t, !0);
  } }), i.fn.extend({ data: function(e, t) {
    var n, o, a, h = this[0], f = h && h.attributes;
    if (e === void 0) {
      if (this.length && (a = i.data(h), h.nodeType === 1 && !i._data(h, "parsedAttrs"))) {
        for (n = f.length; n--; )
          o = f[n].name, o.indexOf("data-") === 0 && (o = i.camelCase(o.slice(5)), ut(h, o, a[o]));
        i._data(h, "parsedAttrs", !0);
      }
      return a;
    }
    return typeof e == "object" ? this.each(function() {
      i.data(this, e);
    }) : arguments.length > 1 ? this.each(function() {
      i.data(this, e, t);
    }) : h ? ut(h, e, i.data(h, e)) : void 0;
  }, removeData: function(e) {
    return this.each(function() {
      i.removeData(this, e);
    });
  } }), i.extend({ queue: function(e, t, n) {
    var o;
    return e ? (t = (t || "fx") + "queue", o = i._data(e, t), n && (!o || i.isArray(n) ? o = i._data(e, t, i.makeArray(n)) : o.push(n)), o || []) : void 0;
  }, dequeue: function(e, t) {
    t = t || "fx";
    var n = i.queue(e, t), o = n.length, a = n.shift(), h = i._queueHooks(e, t), f = function() {
      i.dequeue(e, t);
    };
    a === "inprogress" && (a = n.shift(), o--), a && (t === "fx" && n.unshift("inprogress"), delete h.stop, a.call(e, f, h)), !o && h && h.empty.fire();
  }, _queueHooks: function(e, t) {
    var n = t + "queueHooks";
    return i._data(e, n) || i._data(e, n, { empty: i.Callbacks("once memory").add(function() {
      i._removeData(e, t + "queue"), i._removeData(e, n);
    }) });
  } }), i.fn.extend({ queue: function(e, t) {
    var n = 2;
    return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? i.queue(this[0], e) : t === void 0 ? this : this.each(function() {
      var o = i.queue(this, e, t);
      i._queueHooks(this, e), e === "fx" && o[0] !== "inprogress" && i.dequeue(this, e);
    });
  }, dequeue: function(e) {
    return this.each(function() {
      i.dequeue(this, e);
    });
  }, clearQueue: function(e) {
    return this.queue(e || "fx", []);
  }, promise: function(e, t) {
    var n, o = 1, a = i.Deferred(), h = this, f = this.length, m = function() {
      --o || a.resolveWith(h, [h]);
    };
    for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; f--; )
      n = i._data(h[f], e + "queueHooks"), n && n.empty && (o++, n.empty.add(m));
    return m(), a.promise(t);
  } });
  var mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, tt = ["Top", "Right", "Bottom", "Left"], ht = function(e, t) {
    return e = t || e, i.css(e, "display") === "none" || !i.contains(e.ownerDocument, e);
  }, $e = i.access = function(e, t, n, o, a, h, f) {
    var m = 0, q = e.length, S = n == null;
    if (i.type(n) === "object") {
      a = !0;
      for (m in n)
        i.access(e, t, m, n[m], !0, h, f);
    } else if (o !== void 0 && (a = !0, i.isFunction(o) || (f = !0), S && (f ? (t.call(e, o), t = null) : (S = t, t = function(E, _, N) {
      return S.call(i(E), N);
    })), t))
      for (; q > m; m++)
        t(e[m], n, f ? o : o.call(e[m], m, t(e[m], n)));
    return a ? e : S ? t.call(e) : q ? t(e[0], n) : h;
  }, qt = /^(?:checkbox|radio)$/i;
  (function() {
    var e = x.createDocumentFragment(), t = x.createElement("div"), n = x.createElement("input");
    if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", Q.leadingWhitespace = t.firstChild.nodeType === 3, Q.tbody = !t.getElementsByTagName("tbody").length, Q.htmlSerialize = !!t.getElementsByTagName("link").length, Q.html5Clone = x.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", n.type = "checkbox", n.checked = !0, e.appendChild(n), Q.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, Q.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
      Q.noCloneEvent = !1;
    }), t.cloneNode(!0).click()), Q.deleteExpando == null) {
      Q.deleteExpando = !0;
      try {
        delete t.test;
      } catch {
        Q.deleteExpando = !1;
      }
    }
    e = t = n = null;
  })(), function() {
    var e, t, n = x.createElement("div");
    for (e in { submit: !0, change: !0, focusin: !0 })
      t = "on" + e, (Q[e + "Bubbles"] = t in P) || (n.setAttribute(t, "t"), Q[e + "Bubbles"] = n.attributes[t].expando === !1);
    n = null;
  }();
  var Mt = /^(?:input|select|textarea)$/i, Zt = /^key/, wn = /^(?:mouse|contextmenu)|click/, zt = /^(?:focusinfocus|focusoutblur)$/, Qt = /^([^.]*)(?:\.(.+)|)$/;
  function Ae() {
    return !0;
  }
  function Me() {
    return !1;
  }
  function ft() {
    try {
      return x.activeElement;
    } catch {
    }
  }
  i.event = { global: {}, add: function(e, t, n, o, a) {
    var h, f, m, q, S, E, _, N, z, W, K, he = i._data(e);
    if (he) {
      for (n.handler && (q = n, n = q.handler, a = q.selector), n.guid || (n.guid = i.guid++), (f = he.events) || (f = he.events = {}), (E = he.handle) || (E = he.handle = function(nt) {
        return typeof i === xe || nt && i.event.triggered === nt.type ? void 0 : i.event.dispatch.apply(E.elem, arguments);
      }, E.elem = e), t = (t || "").match(Ie) || [""], m = t.length; m--; )
        h = Qt.exec(t[m]) || [], z = K = h[1], W = (h[2] || "").split(".").sort(), z && (S = i.event.special[z] || {}, z = (a ? S.delegateType : S.bindType) || z, S = i.event.special[z] || {}, _ = i.extend({ type: z, origType: K, data: o, handler: n, guid: n.guid, selector: a, needsContext: a && i.expr.match.needsContext.test(a), namespace: W.join(".") }, q), (N = f[z]) || (N = f[z] = [], N.delegateCount = 0, S.setup && S.setup.call(e, o, W, E) !== !1 || (e.addEventListener ? e.addEventListener(z, E, !1) : e.attachEvent && e.attachEvent("on" + z, E))), S.add && (S.add.call(e, _), _.handler.guid || (_.handler.guid = n.guid)), a ? N.splice(N.delegateCount++, 0, _) : N.push(_), i.event.global[z] = !0);
      e = null;
    }
  }, remove: function(e, t, n, o, a) {
    var h, f, m, q, S, E, _, N, z, W, K, he = i.hasData(e) && i._data(e);
    if (he && (E = he.events)) {
      for (t = (t || "").match(Ie) || [""], S = t.length; S--; )
        if (m = Qt.exec(t[S]) || [], z = K = m[1], W = (m[2] || "").split(".").sort(), z) {
          for (_ = i.event.special[z] || {}, z = (o ? _.delegateType : _.bindType) || z, N = E[z] || [], m = m[2] && new RegExp("(^|\\.)" + W.join("\\.(?:.*\\.|)") + "(\\.|$)"), q = h = N.length; h--; )
            f = N[h], !a && K !== f.origType || n && n.guid !== f.guid || m && !m.test(f.namespace) || o && o !== f.selector && (o !== "**" || !f.selector) || (N.splice(h, 1), f.selector && N.delegateCount--, _.remove && _.remove.call(e, f));
          q && !N.length && (_.teardown && _.teardown.call(e, W, he.handle) !== !1 || i.removeEvent(e, z, he.handle), delete E[z]);
        } else
          for (z in E)
            i.event.remove(e, z + t[S], n, o, !0);
      i.isEmptyObject(E) && (delete he.handle, i._removeData(e, "events"));
    }
  }, trigger: function(e, t, n, o) {
    var a, h, f, m, q, S, E, _ = [n || x], N = Je.call(e, "type") ? e.type : e, z = Je.call(e, "namespace") ? e.namespace.split(".") : [];
    if (f = S = n = n || x, n.nodeType !== 3 && n.nodeType !== 8 && !zt.test(N + i.event.triggered) && (N.indexOf(".") >= 0 && (z = N.split("."), N = z.shift(), z.sort()), h = N.indexOf(":") < 0 && "on" + N, e = e[i.expando] ? e : new i.Event(N, typeof e == "object" && e), e.isTrigger = o ? 2 : 3, e.namespace = z.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : i.makeArray(t, [e]), q = i.event.special[N] || {}, o || !q.trigger || q.trigger.apply(n, t) !== !1)) {
      if (!o && !q.noBubble && !i.isWindow(n)) {
        for (m = q.delegateType || N, zt.test(m + N) || (f = f.parentNode); f; f = f.parentNode)
          _.push(f), S = f;
        S === (n.ownerDocument || x) && _.push(S.defaultView || S.parentWindow || P);
      }
      for (E = 0; (f = _[E++]) && !e.isPropagationStopped(); )
        e.type = E > 1 ? m : q.bindType || N, a = (i._data(f, "events") || {})[e.type] && i._data(f, "handle"), a && a.apply(f, t), a = h && f[h], a && a.apply && i.acceptData(f) && (e.result = a.apply(f, t), e.result === !1 && e.preventDefault());
      if (e.type = N, !o && !e.isDefaultPrevented() && (!q._default || q._default.apply(_.pop(), t) === !1) && i.acceptData(n) && h && n[N] && !i.isWindow(n)) {
        S = n[h], S && (n[h] = null), i.event.triggered = N;
        try {
          n[N]();
        } catch {
        }
        i.event.triggered = void 0, S && (n[h] = S);
      }
      return e.result;
    }
  }, dispatch: function(e) {
    e = i.event.fix(e);
    var t, n, o, a, h, f = [], m = v.call(arguments), q = (i._data(this, "events") || {})[e.type] || [], S = i.event.special[e.type] || {};
    if (m[0] = e, e.delegateTarget = this, !S.preDispatch || S.preDispatch.call(this, e) !== !1) {
      for (f = i.event.handlers.call(this, e, q), t = 0; (a = f[t++]) && !e.isPropagationStopped(); )
        for (e.currentTarget = a.elem, h = 0; (o = a.handlers[h++]) && !e.isImmediatePropagationStopped(); )
          (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, n = ((i.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, m), n !== void 0 && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
      return S.postDispatch && S.postDispatch.call(this, e), e.result;
    }
  }, handlers: function(e, t) {
    var n, o, a, h, f = [], m = t.delegateCount, q = e.target;
    if (m && q.nodeType && (!e.button || e.type !== "click")) {
      for (; q != this; q = q.parentNode || this)
        if (q.nodeType === 1 && (q.disabled !== !0 || e.type !== "click")) {
          for (a = [], h = 0; m > h; h++)
            o = t[h], n = o.selector + " ", a[n] === void 0 && (a[n] = o.needsContext ? i(n, this).index(q) >= 0 : i.find(n, this, null, [q]).length), a[n] && a.push(o);
          a.length && f.push({ elem: q, handlers: a });
        }
    }
    return m < t.length && f.push({ elem: this, handlers: t.slice(m) }), f;
  }, fix: function(e) {
    if (e[i.expando])
      return e;
    var t, n, o, a = e.type, h = e, f = this.fixHooks[a];
    for (f || (this.fixHooks[a] = f = wn.test(a) ? this.mouseHooks : Zt.test(a) ? this.keyHooks : {}), o = f.props ? this.props.concat(f.props) : this.props, e = new i.Event(h), t = o.length; t--; )
      n = o[t], e[n] = h[n];
    return e.target || (e.target = h.srcElement || x), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, f.filter ? f.filter(e, h) : e;
  }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
  } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
    var n, o, a, h = t.button, f = t.fromElement;
    return e.pageX == null && t.clientX != null && (o = e.target.ownerDocument || x, a = o.documentElement, n = o.body, e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)), !e.relatedTarget && f && (e.relatedTarget = f === e.target ? t.toElement : f), e.which || h === void 0 || (e.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0), e;
  } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
    if (this !== ft() && this.focus)
      try {
        return this.focus(), !1;
      } catch {
      }
  }, delegateType: "focusin" }, blur: { trigger: function() {
    return this === ft() && this.blur ? (this.blur(), !1) : void 0;
  }, delegateType: "focusout" }, click: { trigger: function() {
    return i.nodeName(this, "input") && this.type === "checkbox" && this.click ? (this.click(), !1) : void 0;
  }, _default: function(e) {
    return i.nodeName(e.target, "a");
  } }, beforeunload: { postDispatch: function(e) {
    e.result !== void 0 && (e.originalEvent.returnValue = e.result);
  } } }, simulate: function(e, t, n, o) {
    var a = i.extend(new i.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });
    o ? i.event.trigger(a, null, t) : i.event.dispatch.call(t, a), a.isDefaultPrevented() && n.preventDefault();
  } }, i.removeEvent = x.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function(e, t, n) {
    var o = "on" + t;
    e.detachEvent && (typeof e[o] === xe && (e[o] = null), e.detachEvent(o, n));
  }, i.Event = function(e, t) {
    return this instanceof i.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? Ae : Me) : this.type = e, t && i.extend(this, t), this.timeStamp = e && e.timeStamp || i.now(), void (this[i.expando] = !0)) : new i.Event(e, t);
  }, i.Event.prototype = { isDefaultPrevented: Me, isPropagationStopped: Me, isImmediatePropagationStopped: Me, preventDefault: function() {
    var e = this.originalEvent;
    this.isDefaultPrevented = Ae, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
  }, stopPropagation: function() {
    var e = this.originalEvent;
    this.isPropagationStopped = Ae, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
  }, stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = Ae, this.stopPropagation();
  } }, i.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
    i.event.special[e] = { delegateType: t, bindType: t, handle: function(n) {
      var o, a = this, h = n.relatedTarget, f = n.handleObj;
      return (!h || h !== a && !i.contains(a, h)) && (n.type = f.origType, o = f.handler.apply(this, arguments), n.type = t), o;
    } };
  }), Q.submitBubbles || (i.event.special.submit = { setup: function() {
    return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(e) {
      var t = e.target, n = i.nodeName(t, "input") || i.nodeName(t, "button") ? t.form : void 0;
      n && !i._data(n, "submitBubbles") && (i.event.add(n, "submit._submit", function(o) {
        o._submit_bubble = !0;
      }), i._data(n, "submitBubbles", !0));
    });
  }, postDispatch: function(e) {
    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && i.event.simulate("submit", this.parentNode, e, !0));
  }, teardown: function() {
    return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit");
  } }), Q.changeBubbles || (i.event.special.change = { setup: function() {
    return Mt.test(this.nodeName) ? ((this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(e) {
      e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
    }), i.event.add(this, "click._change", function(e) {
      this._just_changed && !e.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, e, !0);
    })), !1) : void i.event.add(this, "beforeactivate._change", function(e) {
      var t = e.target;
      Mt.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
        !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0);
      }), i._data(t, "changeBubbles", !0));
    });
  }, handle: function(e) {
    var t = e.target;
    return this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox" ? e.handleObj.handler.apply(this, arguments) : void 0;
  }, teardown: function() {
    return i.event.remove(this, "._change"), !Mt.test(this.nodeName);
  } }), Q.focusinBubbles || i.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
    var n = function(o) {
      i.event.simulate(t, o.target, i.event.fix(o), !0);
    };
    i.event.special[t] = { setup: function() {
      var o = this.ownerDocument || this, a = i._data(o, t);
      a || o.addEventListener(e, n, !0), i._data(o, t, (a || 0) + 1);
    }, teardown: function() {
      var o = this.ownerDocument || this, a = i._data(o, t) - 1;
      a ? i._data(o, t, a) : (o.removeEventListener(e, n, !0), i._removeData(o, t));
    } };
  }), i.fn.extend({ on: function(e, t, n, o, a) {
    var h, f;
    if (typeof e == "object") {
      typeof t != "string" && (n = n || t, t = void 0);
      for (h in e)
        this.on(h, t, n, e[h], a);
      return this;
    }
    if (n == null && o == null ? (o = t, n = t = void 0) : o == null && (typeof t == "string" ? (o = n, n = void 0) : (o = n, n = t, t = void 0)), o === !1)
      o = Me;
    else if (!o)
      return this;
    return a === 1 && (f = o, o = function(m) {
      return i().off(m), f.apply(this, arguments);
    }, o.guid = f.guid || (f.guid = i.guid++)), this.each(function() {
      i.event.add(this, e, o, n, t);
    });
  }, one: function(e, t, n, o) {
    return this.on(e, t, n, o, 1);
  }, off: function(e, t, n) {
    var o, a;
    if (e && e.preventDefault && e.handleObj)
      return o = e.handleObj, i(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
    if (typeof e == "object") {
      for (a in e)
        this.off(a, t, e[a]);
      return this;
    }
    return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = Me), this.each(function() {
      i.event.remove(this, e, n, t);
    });
  }, trigger: function(e, t) {
    return this.each(function() {
      i.event.trigger(e, t, this);
    });
  }, triggerHandler: function(e, t) {
    var n = this[0];
    return n ? i.event.trigger(e, t, n, !0) : void 0;
  } });
  function en(e) {
    var t = tn.split("|"), n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length; )
        n.createElement(t.pop());
    return n;
  }
  var tn = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", xn = / jQuery\d+="(?:null|\d+)"/g, nn = new RegExp("<(?:" + tn + ")[\\s/>]", "i"), Ge = /^\s+/, dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rn = /<([\w:]+)/, sn = /<tbody/i, Bt = /<|&#?\w+;/, on = /<(?:script|style|link)/i, ln = /checked\s*(?:[^=]|=\s*.checked.)/i, an = /^$|\/(?:java|ecma)script/i, ot = /^true\/(.*)/, bn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ze = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: Q.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, un = en(x), cn = un.appendChild(x.createElement("div"));
  ze.optgroup = ze.option, ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead, ze.th = ze.td;
  function F(e, t) {
    var n, o, a = 0, h = typeof e.getElementsByTagName !== xe ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== xe ? e.querySelectorAll(t || "*") : void 0;
    if (!h)
      for (h = [], n = e.childNodes || e; (o = n[a]) != null; a++)
        !t || i.nodeName(o, t) ? h.push(o) : i.merge(h, F(o, t));
    return t === void 0 || t && i.nodeName(e, t) ? i.merge([e], h) : h;
  }
  function y(e) {
    qt.test(e.type) && (e.defaultChecked = e.checked);
  }
  function L(e, t) {
    return i.nodeName(e, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function ue(e) {
    return e.type = (i.find.attr(e, "type") !== null) + "/" + e.type, e;
  }
  function We(e) {
    var t = ot.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }
  function Ee(e, t) {
    for (var n, o = 0; (n = e[o]) != null; o++)
      i._data(n, "globalEval", !t || i._data(t[o], "globalEval"));
  }
  function Oe(e, t) {
    if (t.nodeType === 1 && i.hasData(e)) {
      var n, o, a, h = i._data(e), f = i._data(t, h), m = h.events;
      if (m) {
        delete f.handle, f.events = {};
        for (n in m)
          for (o = 0, a = m[n].length; a > o; o++)
            i.event.add(t, n, m[n][o]);
      }
      f.data && (f.data = i.extend({}, f.data));
    }
  }
  function u(e, t) {
    var n, o, a;
    if (t.nodeType === 1) {
      if (n = t.nodeName.toLowerCase(), !Q.noCloneEvent && t[i.expando]) {
        a = i._data(t);
        for (o in a.events)
          i.removeEvent(t, o, a.handle);
        t.removeAttribute(i.expando);
      }
      n === "script" && t.text !== e.text ? (ue(t).text = e.text, We(t)) : n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), Q.html5Clone && e.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && qt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.defaultSelected = t.selected = e.defaultSelected : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
    }
  }
  i.extend({ clone: function(e, t, n) {
    var o, a, h, f, m, q = i.contains(e.ownerDocument, e);
    if (Q.html5Clone || i.isXMLDoc(e) || !nn.test("<" + e.nodeName + ">") ? h = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(h = cn.firstChild)), !(Q.noCloneEvent && Q.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || i.isXMLDoc(e)))
      for (o = F(h), m = F(e), f = 0; (a = m[f]) != null; ++f)
        o[f] && u(a, o[f]);
    if (t)
      if (n)
        for (m = m || F(e), o = o || F(h), f = 0; (a = m[f]) != null; f++)
          Oe(a, o[f]);
      else
        Oe(e, h);
    return o = F(h, "script"), o.length > 0 && Ee(o, !q && F(e, "script")), o = m = a = null, h;
  }, buildFragment: function(e, t, n, o) {
    for (var a, h, f, m, q, S, E, _ = e.length, N = en(t), z = [], W = 0; _ > W; W++)
      if (h = e[W], h || h === 0)
        if (i.type(h) === "object")
          i.merge(z, h.nodeType ? [h] : h);
        else if (Bt.test(h)) {
          for (m = m || N.appendChild(t.createElement("div")), q = (rn.exec(h) || ["", ""])[1].toLowerCase(), E = ze[q] || ze._default, m.innerHTML = E[1] + h.replace(dt, "<$1></$2>") + E[2], a = E[0]; a--; )
            m = m.lastChild;
          if (!Q.leadingWhitespace && Ge.test(h) && z.push(t.createTextNode(Ge.exec(h)[0])), !Q.tbody)
            for (h = q !== "table" || sn.test(h) ? E[1] !== "<table>" || sn.test(h) ? 0 : m : m.firstChild, a = h && h.childNodes.length; a--; )
              i.nodeName(S = h.childNodes[a], "tbody") && !S.childNodes.length && h.removeChild(S);
          for (i.merge(z, m.childNodes), m.textContent = ""; m.firstChild; )
            m.removeChild(m.firstChild);
          m = N.lastChild;
        } else
          z.push(t.createTextNode(h));
    for (m && N.removeChild(m), Q.appendChecked || i.grep(F(z, "input"), y), W = 0; h = z[W++]; )
      if ((!o || i.inArray(h, o) === -1) && (f = i.contains(h.ownerDocument, h), m = F(N.appendChild(h), "script"), f && Ee(m), n))
        for (a = 0; h = m[a++]; )
          an.test(h.type || "") && n.push(h);
    return m = null, N;
  }, cleanData: function(e, t) {
    for (var n, o, a, h, f = 0, m = i.expando, q = i.cache, S = Q.deleteExpando, E = i.event.special; (n = e[f]) != null; f++)
      if ((t || i.acceptData(n)) && (a = n[m], h = a && q[a])) {
        if (h.events)
          for (o in h.events)
            E[o] ? i.event.remove(n, o) : i.removeEvent(n, o, h.handle);
        q[a] && (delete q[a], S ? delete n[m] : typeof n.removeAttribute !== xe ? n.removeAttribute(m) : n[m] = null, re.push(a));
      }
  } }), i.fn.extend({ text: function(e) {
    return $e(this, function(t) {
      return t === void 0 ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(t));
    }, null, e, arguments.length);
  }, append: function() {
    return this.domManip(arguments, function(e) {
      if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
        var t = L(this, e);
        t.appendChild(e);
      }
    });
  }, prepend: function() {
    return this.domManip(arguments, function(e) {
      if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
        var t = L(this, e);
        t.insertBefore(e, t.firstChild);
      }
    });
  }, before: function() {
    return this.domManip(arguments, function(e) {
      this.parentNode && this.parentNode.insertBefore(e, this);
    });
  }, after: function() {
    return this.domManip(arguments, function(e) {
      this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
    });
  }, remove: function(e, t) {
    for (var n, o = e ? i.filter(e, this) : this, a = 0; (n = o[a]) != null; a++)
      t || n.nodeType !== 1 || i.cleanData(F(n)), n.parentNode && (t && i.contains(n.ownerDocument, n) && Ee(F(n, "script")), n.parentNode.removeChild(n));
    return this;
  }, empty: function() {
    for (var e, t = 0; (e = this[t]) != null; t++) {
      for (e.nodeType === 1 && i.cleanData(F(e, !1)); e.firstChild; )
        e.removeChild(e.firstChild);
      e.options && i.nodeName(e, "select") && (e.options.length = 0);
    }
    return this;
  }, clone: function(e, t) {
    return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
      return i.clone(this, e, t);
    });
  }, html: function(e) {
    return $e(this, function(t) {
      var n = this[0] || {}, o = 0, a = this.length;
      if (t === void 0)
        return n.nodeType === 1 ? n.innerHTML.replace(xn, "") : void 0;
      if (!(typeof t != "string" || on.test(t) || !Q.htmlSerialize && nn.test(t) || !Q.leadingWhitespace && Ge.test(t) || ze[(rn.exec(t) || ["", ""])[1].toLowerCase()])) {
        t = t.replace(dt, "<$1></$2>");
        try {
          for (; a > o; o++)
            n = this[o] || {}, n.nodeType === 1 && (i.cleanData(F(n, !1)), n.innerHTML = t);
          n = 0;
        } catch {
        }
      }
      n && this.empty().append(t);
    }, null, e, arguments.length);
  }, replaceWith: function() {
    var e = arguments[0];
    return this.domManip(arguments, function(t) {
      e = this.parentNode, i.cleanData(F(this)), e && e.replaceChild(t, this);
    }), e && (e.length || e.nodeType) ? this : this.remove();
  }, detach: function(e) {
    return this.remove(e, !0);
  }, domManip: function(e, t) {
    e = ae.apply([], e);
    var n, o, a, h, f, m, q = 0, S = this.length, E = this, _ = S - 1, N = e[0], z = i.isFunction(N);
    if (z || S > 1 && typeof N == "string" && !Q.checkClone && ln.test(N))
      return this.each(function(W) {
        var K = E.eq(W);
        z && (e[0] = N.call(this, W, K.html())), K.domManip(e, t);
      });
    if (S && (m = i.buildFragment(e, this[0].ownerDocument, !1, this), n = m.firstChild, m.childNodes.length === 1 && (m = n), n)) {
      for (h = i.map(F(m, "script"), ue), a = h.length; S > q; q++)
        o = m, q !== _ && (o = i.clone(o, !0, !0), a && i.merge(h, F(o, "script"))), t.call(this[q], o, q);
      if (a)
        for (f = h[h.length - 1].ownerDocument, i.map(h, We), q = 0; a > q; q++)
          o = h[q], an.test(o.type || "") && !i._data(o, "globalEval") && i.contains(f, o) && (o.src ? i._evalUrl && i._evalUrl(o.src) : i.globalEval((o.text || o.textContent || o.innerHTML || "").replace(bn, "")));
      m = n = null;
    }
    return this;
  } }), i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
    i.fn[e] = function(n) {
      for (var o, a = 0, h = [], f = i(n), m = f.length - 1; m >= a; a++)
        o = a === m ? this : this.clone(!0), i(f[a])[t](o), fe.apply(h, o.get());
      return this.pushStack(h);
    };
  });
  var je, Tn = {};
  function hn(e, t) {
    var n = i(t.createElement(e)).appendTo(t.body), o = P.getDefaultComputedStyle ? P.getDefaultComputedStyle(n[0]).display : i.css(n[0], "display");
    return n.detach(), o;
  }
  function Fe(e) {
    var t = x, n = Tn[e];
    return n || (n = hn(e, t), n !== "none" && n || (je = (je || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (je[0].contentWindow || je[0].contentDocument).document, t.write(), t.close(), n = hn(e, t), je.detach()), Tn[e] = n), n;
  }
  (function() {
    var e, t, n = x.createElement("div"), o = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", Q.opacity = /^0.5/.test(e.style.opacity), Q.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = n.style.backgroundClip === "content-box", e = n = null, Q.shrinkWrapBlocks = function() {
      var a, h, f;
      if (t == null) {
        if (a = x.getElementsByTagName("body")[0], !a)
          return;
        h = x.createElement("div"), f = x.createElement("div"), a.appendChild(h).appendChild(f), t = !1, typeof f.style.zoom !== xe && (f.style.cssText = o + ";width:1px;padding:1px;zoom:1", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t = f.offsetWidth !== 3), a.removeChild(h), a = h = f = null;
      }
      return t;
    };
  })();
  var gt = /^margin/, Ye = new RegExp("^(" + mt + ")(?!px)[a-z%]+$", "i"), Ve, lt, Cn = /^(top|right|bottom|left)$/;
  P.getComputedStyle ? (Ve = function(e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null);
  }, lt = function(e, t, n) {
    var o, a, h, f, m = e.style;
    return n = n || Ve(e), f = n ? n.getPropertyValue(t) || n[t] : void 0, n && (f !== "" || i.contains(e.ownerDocument, e) || (f = i.style(e, t)), Ye.test(f) && gt.test(t) && (o = m.width, a = m.minWidth, h = m.maxWidth, m.minWidth = m.maxWidth = m.width = f, f = n.width, m.width = o, m.minWidth = a, m.maxWidth = h)), f === void 0 ? f : f + "";
  }) : x.documentElement.currentStyle && (Ve = function(e) {
    return e.currentStyle;
  }, lt = function(e, t, n) {
    var o, a, h, f, m = e.style;
    return n = n || Ve(e), f = n ? n[t] : void 0, f == null && m && m[t] && (f = m[t]), Ye.test(f) && !Cn.test(t) && (o = m.left, a = e.runtimeStyle, h = a && a.left, h && (a.left = e.currentStyle.left), m.left = t === "fontSize" ? "1em" : f, f = m.pixelLeft + "px", m.left = o, h && (a.left = h)), f === void 0 ? f : f + "" || "auto";
  });
  function c(e, t) {
    return { get: function() {
      var n = e();
      if (n != null)
        return n ? void delete this.get : (this.get = t).apply(this, arguments);
    } };
  }
  (function() {
    var e, t, n, o, a, h, f = x.createElement("div"), m = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", q = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = f.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", Q.opacity = /^0.5/.test(e.style.opacity), Q.cssFloat = !!e.style.cssFloat, f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = f.style.backgroundClip === "content-box", e = f = null, i.extend(Q, { reliableHiddenOffsets: function() {
      if (t != null)
        return t;
      var E, _, N, z = x.createElement("div"), W = x.getElementsByTagName("body")[0];
      if (W)
        return z.setAttribute("className", "t"), z.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", E = x.createElement("div"), E.style.cssText = m, W.appendChild(E).appendChild(z), z.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", _ = z.getElementsByTagName("td"), _[0].style.cssText = "padding:0;margin:0;border:0;display:none", N = _[0].offsetHeight === 0, _[0].style.display = "", _[1].style.display = "none", t = N && _[0].offsetHeight === 0, W.removeChild(E), z = W = null, t;
    }, boxSizing: function() {
      return n == null && S(), n;
    }, boxSizingReliable: function() {
      return o == null && S(), o;
    }, pixelPosition: function() {
      return a == null && S(), a;
    }, reliableMarginRight: function() {
      var E, _, N, z;
      if (h == null && P.getComputedStyle) {
        if (E = x.getElementsByTagName("body")[0], !E)
          return;
        _ = x.createElement("div"), N = x.createElement("div"), _.style.cssText = m, E.appendChild(_).appendChild(N), z = N.appendChild(x.createElement("div")), z.style.cssText = N.style.cssText = q, z.style.marginRight = z.style.width = "0", N.style.width = "1px", h = !parseFloat((P.getComputedStyle(z, null) || {}).marginRight), E.removeChild(_);
      }
      return h;
    } });
    function S() {
      var E, _, N = x.getElementsByTagName("body")[0];
      N && (E = x.createElement("div"), _ = x.createElement("div"), E.style.cssText = m, N.appendChild(E).appendChild(_), _.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", i.swap(N, N.style.zoom != null ? { zoom: 1 } : {}, function() {
        n = _.offsetWidth === 4;
      }), o = !0, a = !1, h = !0, P.getComputedStyle && (a = (P.getComputedStyle(_, null) || {}).top !== "1%", o = (P.getComputedStyle(_, null) || { width: "4px" }).width === "4px"), N.removeChild(E), _ = N = null);
    }
  })(), i.swap = function(e, t, n, o) {
    var a, h, f = {};
    for (h in t)
      f[h] = e.style[h], e.style[h] = t[h];
    a = n.apply(e, o || []);
    for (h in t)
      e.style[h] = f[h];
    return a;
  };
  var d = /alpha\([^)]*\)/i, r = /opacity\s*=\s*([^)]*)/, s = /^(none|table(?!-c[ea]).+)/, l = new RegExp("^(" + mt + ")(.*)$", "i"), g = new RegExp("^([+-])=(" + mt + ")", "i"), b = { position: "absolute", visibility: "hidden", display: "block" }, T = { letterSpacing: 0, fontWeight: 400 }, C = ["Webkit", "O", "Moz", "ms"];
  function O(e, t) {
    if (t in e)
      return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), o = t, a = C.length; a--; )
      if (t = C[a] + n, t in e)
        return t;
    return o;
  }
  function B(e, t) {
    for (var n, o, a, h = [], f = 0, m = e.length; m > f; f++)
      o = e[f], o.style && (h[f] = i._data(o, "olddisplay"), n = o.style.display, t ? (h[f] || n !== "none" || (o.style.display = ""), o.style.display === "" && ht(o) && (h[f] = i._data(o, "olddisplay", Fe(o.nodeName)))) : h[f] || (a = ht(o), (n && n !== "none" || !a) && i._data(o, "olddisplay", a ? n : i.css(o, "display"))));
    for (f = 0; m > f; f++)
      o = e[f], o.style && (t && o.style.display !== "none" && o.style.display !== "" || (o.style.display = t ? h[f] || "" : "none"));
    return e;
  }
  function H(e, t, n) {
    var o = l.exec(t);
    return o ? Math.max(0, o[1] - (n || 0)) + (o[2] || "px") : t;
  }
  function X(e, t, n, o, a) {
    for (var h = n === (o ? "border" : "content") ? 4 : t === "width" ? 1 : 0, f = 0; 4 > h; h += 2)
      n === "margin" && (f += i.css(e, n + tt[h], !0, a)), o ? (n === "content" && (f -= i.css(e, "padding" + tt[h], !0, a)), n !== "margin" && (f -= i.css(e, "border" + tt[h] + "Width", !0, a))) : (f += i.css(e, "padding" + tt[h], !0, a), n !== "padding" && (f += i.css(e, "border" + tt[h] + "Width", !0, a)));
    return f;
  }
  function U(e, t, n) {
    var o = !0, a = t === "width" ? e.offsetWidth : e.offsetHeight, h = Ve(e), f = Q.boxSizing() && i.css(e, "boxSizing", !1, h) === "border-box";
    if (0 >= a || a == null) {
      if (a = lt(e, t, h), (0 > a || a == null) && (a = e.style[t]), Ye.test(a))
        return a;
      o = f && (Q.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0;
    }
    return a + X(e, t, n || (f ? "border" : "content"), o, h) + "px";
  }
  i.extend({ cssHooks: { opacity: { get: function(e, t) {
    if (t) {
      var n = lt(e, "opacity");
      return n === "" ? "1" : n;
    }
  } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: Q.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, o) {
    if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
      var a, h, f, m = i.camelCase(t), q = e.style;
      if (t = i.cssProps[m] || (i.cssProps[m] = O(q, m)), f = i.cssHooks[t] || i.cssHooks[m], n === void 0)
        return f && "get" in f && (a = f.get(e, !1, o)) !== void 0 ? a : q[t];
      if (h = typeof n, h === "string" && (a = g.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(i.css(e, t)), h = "number"), n != null && n === n && (h !== "number" || i.cssNumber[m] || (n += "px"), Q.clearCloneStyle || n !== "" || t.indexOf("background") !== 0 || (q[t] = "inherit"), !(f && "set" in f && (n = f.set(e, n, o)) === void 0)))
        try {
          q[t] = "", q[t] = n;
        } catch {
        }
    }
  }, css: function(e, t, n, o) {
    var a, h, f, m = i.camelCase(t);
    return t = i.cssProps[m] || (i.cssProps[m] = O(e.style, m)), f = i.cssHooks[t] || i.cssHooks[m], f && "get" in f && (h = f.get(e, !0, n)), h === void 0 && (h = lt(e, t, o)), h === "normal" && t in T && (h = T[t]), n === "" || n ? (a = parseFloat(h), n === !0 || i.isNumeric(a) ? a || 0 : h) : h;
  } }), i.each(["height", "width"], function(e, t) {
    i.cssHooks[t] = { get: function(n, o, a) {
      return o ? n.offsetWidth === 0 && s.test(i.css(n, "display")) ? i.swap(n, b, function() {
        return U(n, t, a);
      }) : U(n, t, a) : void 0;
    }, set: function(n, o, a) {
      var h = a && Ve(n);
      return H(n, o, a ? X(n, t, a, Q.boxSizing() && i.css(n, "boxSizing", !1, h) === "border-box", h) : 0);
    } };
  }), Q.opacity || (i.cssHooks.opacity = { get: function(e, t) {
    return r.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
  }, set: function(e, t) {
    var n = e.style, o = e.currentStyle, a = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", h = o && o.filter || n.filter || "";
    n.zoom = 1, (t >= 1 || t === "") && i.trim(h.replace(d, "")) === "" && n.removeAttribute && (n.removeAttribute("filter"), t === "" || o && !o.filter) || (n.filter = d.test(h) ? h.replace(d, a) : h + " " + a);
  } }), i.cssHooks.marginRight = c(Q.reliableMarginRight, function(e, t) {
    return t ? i.swap(e, { display: "inline-block" }, lt, [e, "marginRight"]) : void 0;
  }), i.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
    i.cssHooks[e + t] = { expand: function(n) {
      for (var o = 0, a = {}, h = typeof n == "string" ? n.split(" ") : [n]; 4 > o; o++)
        a[e + tt[o] + t] = h[o] || h[o - 2] || h[0];
      return a;
    } }, gt.test(e) || (i.cssHooks[e + t].set = H);
  }), i.fn.extend({ css: function(e, t) {
    return $e(this, function(n, o, a) {
      var h, f, m = {}, q = 0;
      if (i.isArray(o)) {
        for (h = Ve(n), f = o.length; f > q; q++)
          m[o[q]] = i.css(n, o[q], !1, h);
        return m;
      }
      return a !== void 0 ? i.style(n, o, a) : i.css(n, o);
    }, e, t, arguments.length > 1);
  }, show: function() {
    return B(this, !0);
  }, hide: function() {
    return B(this);
  }, toggle: function(e) {
    return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
      ht(this) ? i(this).show() : i(this).hide();
    });
  } });
  function I(e, t, n, o, a) {
    return new I.prototype.init(e, t, n, o, a);
  }
  i.Tween = I, I.prototype = { constructor: I, init: function(e, t, n, o, a, h) {
    this.elem = e, this.prop = n, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = h || (i.cssNumber[n] ? "" : "px");
  }, cur: function() {
    var e = I.propHooks[this.prop];
    return e && e.get ? e.get(this) : I.propHooks._default.get(this);
  }, run: function(e) {
    var t, n = I.propHooks[this.prop];
    return this.pos = t = this.options.duration ? i.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
  } }, I.prototype.init.prototype = I.prototype, I.propHooks = { _default: { get: function(e) {
    var t;
    return e.elem[e.prop] == null || e.elem.style && e.elem.style[e.prop] != null ? (t = i.css(e.elem, e.prop, ""), t && t !== "auto" ? t : 0) : e.elem[e.prop];
  }, set: function(e) {
    i.fx.step[e.prop] ? i.fx.step[e.prop](e) : e.elem.style && (e.elem.style[i.cssProps[e.prop]] != null || i.cssHooks[e.prop]) ? i.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
  } } }, I.propHooks.scrollTop = I.propHooks.scrollLeft = { set: function(e) {
    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
  } }, i.easing = { linear: function(e) {
    return e;
  }, swing: function(e) {
    return 0.5 - Math.cos(e * Math.PI) / 2;
  } }, i.fx = I.prototype.init, i.fx.step = {};
  var ce, be, ke = /^(?:toggle|show|hide)$/, ne = new RegExp("^(?:([+-])=|)(" + mt + ")([a-z%]*)$", "i"), Le = /queueHooks$/, qe = [yi], se = { "*": [function(e, t) {
    var n = this.createTween(e, t), o = n.cur(), a = ne.exec(t), h = a && a[3] || (i.cssNumber[e] ? "" : "px"), f = (i.cssNumber[e] || h !== "px" && +o) && ne.exec(i.css(n.elem, e)), m = 1, q = 20;
    if (f && f[3] !== h) {
      h = h || f[3], a = a || [], f = +o || 1;
      do
        m = m || ".5", f /= m, i.style(n.elem, e, f + h);
      while (m !== (m = n.cur() / o) && m !== 1 && --q);
    }
    return a && (f = n.start = +f || +o || 0, n.unit = h, n.end = a[1] ? f + (a[1] + 1) * a[2] : +a[2]), n;
  }] };
  function fn() {
    return setTimeout(function() {
      ce = void 0;
    }), ce = i.now();
  }
  function kn(e, t) {
    var n, o = { height: e }, a = 0;
    for (t = t ? 1 : 0; 4 > a; a += 2 - t)
      n = tt[a], o["margin" + n] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function Vn(e, t, n) {
    for (var o, a = (se[t] || []).concat(se["*"]), h = 0, f = a.length; f > h; h++)
      if (o = a[h].call(n, t, e))
        return o;
  }
  function yi(e, t, n) {
    var o, a, h, f, m, q, S, E, _ = this, N = {}, z = e.style, W = e.nodeType && ht(e), K = i._data(e, "fxshow");
    n.queue || (m = i._queueHooks(e, "fx"), m.unqueued == null && (m.unqueued = 0, q = m.empty.fire, m.empty.fire = function() {
      m.unqueued || q();
    }), m.unqueued++, _.always(function() {
      _.always(function() {
        m.unqueued--, i.queue(e, "fx").length || m.empty.fire();
      });
    })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [z.overflow, z.overflowX, z.overflowY], S = i.css(e, "display"), E = Fe(e.nodeName), S === "none" && (S = E), S === "inline" && i.css(e, "float") === "none" && (Q.inlineBlockNeedsLayout && E !== "inline" ? z.zoom = 1 : z.display = "inline-block")), n.overflow && (z.overflow = "hidden", Q.shrinkWrapBlocks() || _.always(function() {
      z.overflow = n.overflow[0], z.overflowX = n.overflow[1], z.overflowY = n.overflow[2];
    }));
    for (o in t)
      if (a = t[o], ke.exec(a)) {
        if (delete t[o], h = h || a === "toggle", a === (W ? "hide" : "show")) {
          if (a !== "show" || !K || K[o] === void 0)
            continue;
          W = !0;
        }
        N[o] = K && K[o] || i.style(e, o);
      }
    if (!i.isEmptyObject(N)) {
      K ? "hidden" in K && (W = K.hidden) : K = i._data(e, "fxshow", {}), h && (K.hidden = !W), W ? i(e).show() : _.done(function() {
        i(e).hide();
      }), _.done(function() {
        var he;
        i._removeData(e, "fxshow");
        for (he in N)
          i.style(e, he, N[he]);
      });
      for (o in N)
        f = Vn(W ? K[o] : 0, o, _), o in K || (K[o] = f.start, W && (f.end = f.start, f.start = o === "width" || o === "height" ? 1 : 0));
    }
  }
  function wi(e, t) {
    var n, o, a, h, f;
    for (n in e)
      if (o = i.camelCase(n), a = t[o], h = e[n], i.isArray(h) && (a = h[1], h = e[n] = h[0]), n !== o && (e[o] = h, delete e[n]), f = i.cssHooks[o], f && "expand" in f) {
        h = f.expand(h), delete e[o];
        for (n in h)
          n in e || (e[n] = h[n], t[n] = a);
      } else
        t[o] = a;
  }
  function Kn(e, t, n) {
    var o, a, h = 0, f = qe.length, m = i.Deferred().always(function() {
      delete q.elem;
    }), q = function() {
      if (a)
        return !1;
      for (var _ = ce || fn(), N = Math.max(0, S.startTime + S.duration - _), z = N / S.duration || 0, W = 1 - z, K = 0, he = S.tweens.length; he > K; K++)
        S.tweens[K].run(W);
      return m.notifyWith(e, [S, W, N]), 1 > W && he ? N : (m.resolveWith(e, [S]), !1);
    }, S = m.promise({ elem: e, props: i.extend({}, t), opts: i.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: ce || fn(), duration: n.duration, tweens: [], createTween: function(_, N) {
      var z = i.Tween(e, S.opts, _, N, S.opts.specialEasing[_] || S.opts.easing);
      return S.tweens.push(z), z;
    }, stop: function(_) {
      var N = 0, z = _ ? S.tweens.length : 0;
      if (a)
        return this;
      for (a = !0; z > N; N++)
        S.tweens[N].run(1);
      return _ ? m.resolveWith(e, [S, _]) : m.rejectWith(e, [S, _]), this;
    } }), E = S.props;
    for (wi(E, S.opts.specialEasing); f > h; h++)
      if (o = qe[h].call(S, e, E, S.opts))
        return o;
    return i.map(E, Vn, S), i.isFunction(S.opts.start) && S.opts.start.call(e, S), i.fx.timer(i.extend(q, { elem: e, anim: S, queue: S.opts.queue })), S.progress(S.opts.progress).done(S.opts.done, S.opts.complete).fail(S.opts.fail).always(S.opts.always);
  }
  i.Animation = i.extend(Kn, { tweener: function(e, t) {
    i.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
    for (var n, o = 0, a = e.length; a > o; o++)
      n = e[o], se[n] = se[n] || [], se[n].unshift(t);
  }, prefilter: function(e, t) {
    t ? qe.unshift(e) : qe.push(e);
  } }), i.speed = function(e, t, n) {
    var o = e && typeof e == "object" ? i.extend({}, e) : { complete: n || !n && t || i.isFunction(e) && e, duration: e, easing: n && t || t && !i.isFunction(t) && t };
    return o.duration = i.fx.off ? 0 : typeof o.duration == "number" ? o.duration : o.duration in i.fx.speeds ? i.fx.speeds[o.duration] : i.fx.speeds._default, (o.queue == null || o.queue === !0) && (o.queue = "fx"), o.old = o.complete, o.complete = function() {
      i.isFunction(o.old) && o.old.call(this), o.queue && i.dequeue(this, o.queue);
    }, o;
  }, i.fn.extend({ fadeTo: function(e, t, n, o) {
    return this.filter(ht).css("opacity", 0).show().end().animate({ opacity: t }, e, n, o);
  }, animate: function(e, t, n, o) {
    var a = i.isEmptyObject(e), h = i.speed(t, n, o), f = function() {
      var m = Kn(this, i.extend({}, e), h);
      (a || i._data(this, "finish")) && m.stop(!0);
    };
    return f.finish = f, a || h.queue === !1 ? this.each(f) : this.queue(h.queue, f);
  }, stop: function(e, t, n) {
    var o = function(a) {
      var h = a.stop;
      delete a.stop, h(n);
    };
    return typeof e != "string" && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
      var a = !0, h = e != null && e + "queueHooks", f = i.timers, m = i._data(this);
      if (h)
        m[h] && m[h].stop && o(m[h]);
      else
        for (h in m)
          m[h] && m[h].stop && Le.test(h) && o(m[h]);
      for (h = f.length; h--; )
        f[h].elem !== this || e != null && f[h].queue !== e || (f[h].anim.stop(n), a = !1, f.splice(h, 1));
      (a || !n) && i.dequeue(this, e);
    });
  }, finish: function(e) {
    return e !== !1 && (e = e || "fx"), this.each(function() {
      var t, n = i._data(this), o = n[e + "queue"], a = n[e + "queueHooks"], h = i.timers, f = o ? o.length : 0;
      for (n.finish = !0, i.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = h.length; t--; )
        h[t].elem === this && h[t].queue === e && (h[t].anim.stop(!0), h.splice(t, 1));
      for (t = 0; f > t; t++)
        o[t] && o[t].finish && o[t].finish.call(this);
      delete n.finish;
    });
  } }), i.each(["toggle", "show", "hide"], function(e, t) {
    var n = i.fn[t];
    i.fn[t] = function(o, a, h) {
      return o == null || typeof o == "boolean" ? n.apply(this, arguments) : this.animate(kn(t, !0), o, a, h);
    };
  }), i.each({ slideDown: kn("show"), slideUp: kn("hide"), slideToggle: kn("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) {
    i.fn[e] = function(n, o, a) {
      return this.animate(t, n, o, a);
    };
  }), i.timers = [], i.fx.tick = function() {
    var e, t = i.timers, n = 0;
    for (ce = i.now(); n < t.length; n++)
      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    t.length || i.fx.stop(), ce = void 0;
  }, i.fx.timer = function(e) {
    i.timers.push(e), e() ? i.fx.start() : i.timers.pop();
  }, i.fx.interval = 13, i.fx.start = function() {
    be || (be = setInterval(i.fx.tick, i.fx.interval));
  }, i.fx.stop = function() {
    clearInterval(be), be = null;
  }, i.fx.speeds = { slow: 600, fast: 200, _default: 400 }, i.fn.delay = function(e, t) {
    return e = i.fx && i.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, o) {
      var a = setTimeout(n, e);
      o.stop = function() {
        clearTimeout(a);
      };
    });
  }, function() {
    var e, t, n, o, a = x.createElement("div");
    a.setAttribute("className", "t"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = a.getElementsByTagName("a")[0], n = x.createElement("select"), o = n.appendChild(x.createElement("option")), t = a.getElementsByTagName("input")[0], e.style.cssText = "top:1px", Q.getSetAttribute = a.className !== "t", Q.style = /top/.test(e.getAttribute("style")), Q.hrefNormalized = e.getAttribute("href") === "/a", Q.checkOn = !!t.value, Q.optSelected = o.selected, Q.enctype = !!x.createElement("form").enctype, n.disabled = !0, Q.optDisabled = !o.disabled, t = x.createElement("input"), t.setAttribute("value", ""), Q.input = t.getAttribute("value") === "", t.value = "t", t.setAttribute("type", "radio"), Q.radioValue = t.value === "t", e = t = n = o = a = null;
  }();
  var xi = /\r/g;
  i.fn.extend({ val: function(e) {
    var t, n, o, a = this[0];
    {
      if (arguments.length)
        return o = i.isFunction(e), this.each(function(h) {
          var f;
          this.nodeType === 1 && (f = o ? e.call(this, h, i(this).val()) : e, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function(m) {
            return m == null ? "" : m + "";
          })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, f, "value") !== void 0 || (this.value = f));
        });
      if (a)
        return t = i.valHooks[a.type] || i.valHooks[a.nodeName.toLowerCase()], t && "get" in t && (n = t.get(a, "value")) !== void 0 ? n : (n = a.value, typeof n == "string" ? n.replace(xi, "") : n == null ? "" : n);
    }
  } }), i.extend({ valHooks: { option: { get: function(e) {
    var t = i.find.attr(e, "value");
    return t != null ? t : i.text(e);
  } }, select: { get: function(e) {
    for (var t, n, o = e.options, a = e.selectedIndex, h = e.type === "select-one" || 0 > a, f = h ? null : [], m = h ? a + 1 : o.length, q = 0 > a ? m : h ? a : 0; m > q; q++)
      if (n = o[q], !(!n.selected && q !== a || (Q.optDisabled ? n.disabled : n.getAttribute("disabled") !== null) || n.parentNode.disabled && i.nodeName(n.parentNode, "optgroup"))) {
        if (t = i(n).val(), h)
          return t;
        f.push(t);
      }
    return f;
  }, set: function(e, t) {
    for (var n, o, a = e.options, h = i.makeArray(t), f = a.length; f--; )
      if (o = a[f], i.inArray(i.valHooks.option.get(o), h) >= 0)
        try {
          o.selected = n = !0;
        } catch {
          o.scrollHeight;
        }
      else
        o.selected = !1;
    return n || (e.selectedIndex = -1), a;
  } } } }), i.each(["radio", "checkbox"], function() {
    i.valHooks[this] = { set: function(e, t) {
      return i.isArray(t) ? e.checked = i.inArray(i(e).val(), t) >= 0 : void 0;
    } }, Q.checkOn || (i.valHooks[this].get = function(e) {
      return e.getAttribute("value") === null ? "on" : e.value;
    });
  });
  var Ft, Jn, vt = i.expr.attrHandle, _n = /^(?:checked|selected)$/i, Et = Q.getSetAttribute, Ln = Q.input;
  i.fn.extend({ attr: function(e, t) {
    return $e(this, i.attr, e, t, arguments.length > 1);
  }, removeAttr: function(e) {
    return this.each(function() {
      i.removeAttr(this, e);
    });
  } }), i.extend({ attr: function(e, t, n) {
    var o, a, h = e.nodeType;
    if (e && h !== 3 && h !== 8 && h !== 2)
      return typeof e.getAttribute === xe ? i.prop(e, t, n) : (h === 1 && i.isXMLDoc(e) || (t = t.toLowerCase(), o = i.attrHooks[t] || (i.expr.match.bool.test(t) ? Jn : Ft)), n === void 0 ? o && "get" in o && (a = o.get(e, t)) !== null ? a : (a = i.find.attr(e, t), a == null ? void 0 : a) : n !== null ? o && "set" in o && (a = o.set(e, n, t)) !== void 0 ? a : (e.setAttribute(t, n + ""), n) : void i.removeAttr(e, t));
  }, removeAttr: function(e, t) {
    var n, o, a = 0, h = t && t.match(Ie);
    if (h && e.nodeType === 1)
      for (; n = h[a++]; )
        o = i.propFix[n] || n, i.expr.match.bool.test(n) ? Ln && Et || !_n.test(n) ? e[o] = !1 : e[i.camelCase("default-" + n)] = e[o] = !1 : i.attr(e, n, ""), e.removeAttribute(Et ? n : o);
  }, attrHooks: { type: { set: function(e, t) {
    if (!Q.radioValue && t === "radio" && i.nodeName(e, "input")) {
      var n = e.value;
      return e.setAttribute("type", t), n && (e.value = n), t;
    }
  } } } }), Jn = { set: function(e, t, n) {
    return t === !1 ? i.removeAttr(e, n) : Ln && Et || !_n.test(n) ? e.setAttribute(!Et && i.propFix[n] || n, n) : e[i.camelCase("default-" + n)] = e[n] = !0, n;
  } }, i.each(i.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = vt[t] || i.find.attr;
    vt[t] = Ln && Et || !_n.test(t) ? function(o, a, h) {
      var f, m;
      return h || (m = vt[a], vt[a] = f, f = n(o, a, h) != null ? a.toLowerCase() : null, vt[a] = m), f;
    } : function(o, a, h) {
      return h ? void 0 : o[i.camelCase("default-" + a)] ? a.toLowerCase() : null;
    };
  }), Ln && Et || (i.attrHooks.value = { set: function(e, t, n) {
    return i.nodeName(e, "input") ? void (e.defaultValue = t) : Ft && Ft.set(e, t, n);
  } }), Et || (Ft = { set: function(e, t, n) {
    var o = e.getAttributeNode(n);
    return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(n)), o.value = t += "", n === "value" || t === e.getAttribute(n) ? t : void 0;
  } }, vt.id = vt.name = vt.coords = function(e, t, n) {
    var o;
    return n ? void 0 : (o = e.getAttributeNode(t)) && o.value !== "" ? o.value : null;
  }, i.valHooks.button = { get: function(e, t) {
    var n = e.getAttributeNode(t);
    return n && n.specified ? n.value : void 0;
  }, set: Ft.set }, i.attrHooks.contenteditable = { set: function(e, t, n) {
    Ft.set(e, t === "" ? !1 : t, n);
  } }, i.each(["width", "height"], function(e, t) {
    i.attrHooks[t] = { set: function(n, o) {
      return o === "" ? (n.setAttribute(t, "auto"), o) : void 0;
    } };
  })), Q.style || (i.attrHooks.style = { get: function(e) {
    return e.style.cssText || void 0;
  }, set: function(e, t) {
    return e.style.cssText = t + "";
  } });
  var bi = /^(?:input|select|textarea|button|object)$/i, Ti = /^(?:a|area)$/i;
  i.fn.extend({ prop: function(e, t) {
    return $e(this, i.prop, e, t, arguments.length > 1);
  }, removeProp: function(e) {
    return e = i.propFix[e] || e, this.each(function() {
      try {
        this[e] = void 0, delete this[e];
      } catch {
      }
    });
  } }), i.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function(e, t, n) {
    var o, a, h, f = e.nodeType;
    if (e && f !== 3 && f !== 8 && f !== 2)
      return h = f !== 1 || !i.isXMLDoc(e), h && (t = i.propFix[t] || t, a = i.propHooks[t]), n !== void 0 ? a && "set" in a && (o = a.set(e, n, t)) !== void 0 ? o : e[t] = n : a && "get" in a && (o = a.get(e, t)) !== null ? o : e[t];
  }, propHooks: { tabIndex: { get: function(e) {
    var t = i.find.attr(e, "tabindex");
    return t ? parseInt(t, 10) : bi.test(e.nodeName) || Ti.test(e.nodeName) && e.href ? 0 : -1;
  } } } }), Q.hrefNormalized || i.each(["href", "src"], function(e, t) {
    i.propHooks[t] = { get: function(n) {
      return n.getAttribute(t, 4);
    } };
  }), Q.optSelected || (i.propHooks.selected = { get: function(e) {
    var t = e.parentNode;
    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
  } }), i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    i.propFix[this.toLowerCase()] = this;
  }), Q.enctype || (i.propFix.enctype = "encoding");
  var Nn = /[\t\r\n\f]/g;
  i.fn.extend({ addClass: function(e) {
    var t, n, o, a, h, f, m = 0, q = this.length, S = typeof e == "string" && e;
    if (i.isFunction(e))
      return this.each(function(E) {
        i(this).addClass(e.call(this, E, this.className));
      });
    if (S) {
      for (t = (e || "").match(Ie) || []; q > m; m++)
        if (n = this[m], o = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Nn, " ") : " ")) {
          for (h = 0; a = t[h++]; )
            o.indexOf(" " + a + " ") < 0 && (o += a + " ");
          f = i.trim(o), n.className !== f && (n.className = f);
        }
    }
    return this;
  }, removeClass: function(e) {
    var t, n, o, a, h, f, m = 0, q = this.length, S = arguments.length === 0 || typeof e == "string" && e;
    if (i.isFunction(e))
      return this.each(function(E) {
        i(this).removeClass(e.call(this, E, this.className));
      });
    if (S) {
      for (t = (e || "").match(Ie) || []; q > m; m++)
        if (n = this[m], o = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Nn, " ") : "")) {
          for (h = 0; a = t[h++]; )
            for (; o.indexOf(" " + a + " ") >= 0; )
              o = o.replace(" " + a + " ", " ");
          f = e ? i.trim(o) : "", n.className !== f && (n.className = f);
        }
    }
    return this;
  }, toggleClass: function(e, t) {
    var n = typeof e;
    return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : this.each(i.isFunction(e) ? function(o) {
      i(this).toggleClass(e.call(this, o, this.className, t), t);
    } : function() {
      if (n === "string")
        for (var o, a = 0, h = i(this), f = e.match(Ie) || []; o = f[a++]; )
          h.hasClass(o) ? h.removeClass(o) : h.addClass(o);
      else
        (n === xe || n === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : i._data(this, "__className__") || "");
    });
  }, hasClass: function(e) {
    for (var t = " " + e + " ", n = 0, o = this.length; o > n; n++)
      if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Nn, " ").indexOf(t) >= 0)
        return !0;
    return !1;
  } }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    i.fn[t] = function(n, o) {
      return arguments.length > 0 ? this.on(t, null, n, o) : this.trigger(t);
    };
  }), i.fn.extend({ hover: function(e, t) {
    return this.mouseenter(e).mouseleave(t || e);
  }, bind: function(e, t, n) {
    return this.on(e, null, t, n);
  }, unbind: function(e, t) {
    return this.off(e, null, t);
  }, delegate: function(e, t, n, o) {
    return this.on(t, e, n, o);
  }, undelegate: function(e, t, n) {
    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
  } });
  var An = i.now(), Mn = /\?/, Ci = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  i.parseJSON = function(e) {
    if (P.JSON && P.JSON.parse)
      return P.JSON.parse(e + "");
    var t, n = null, o = i.trim(e + "");
    return o && !i.trim(o.replace(Ci, function(a, h, f, m) {
      return t && h && (n = 0), n === 0 ? a : (t = f || h, n += !m - !f, "");
    })) ? Function("return " + o)() : i.error("Invalid JSON: " + e);
  }, i.parseXML = function(e) {
    var t, n;
    if (!e || typeof e != "string")
      return null;
    try {
      P.DOMParser ? (n = new DOMParser(), t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e));
    } catch {
      t = void 0;
    }
    return t && t.documentElement && !t.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + e), t;
  };
  var jt, yt, ki = /#.*$/, Zn = /([?&])_=[^&]*/, Li = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ei = /^(?:GET|HEAD)$/, ji = /^\/\//, ei = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ti = {}, zn = {}, ni = "*/".concat("*");
  try {
    yt = location.href;
  } catch {
    yt = x.createElement("a"), yt.href = "", yt = yt.href;
  }
  jt = ei.exec(yt.toLowerCase()) || [];
  function ii(e) {
    return function(t, n) {
      typeof t != "string" && (n = t, t = "*");
      var o, a = 0, h = t.toLowerCase().match(Ie) || [];
      if (i.isFunction(n))
        for (; o = h[a++]; )
          o.charAt(0) === "+" ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n);
    };
  }
  function ri(e, t, n, o) {
    var a = {}, h = e === zn;
    function f(m) {
      var q;
      return a[m] = !0, i.each(e[m] || [], function(S, E) {
        var _ = E(t, n, o);
        return typeof _ != "string" || h || a[_] ? h ? !(q = _) : void 0 : (t.dataTypes.unshift(_), f(_), !1);
      }), q;
    }
    return f(t.dataTypes[0]) || !a["*"] && f("*");
  }
  function Qn(e, t) {
    var n, o, a = i.ajaxSettings.flatOptions || {};
    for (o in t)
      t[o] !== void 0 && ((a[o] ? e : n || (n = {}))[o] = t[o]);
    return n && i.extend(!0, e, n), e;
  }
  function Si(e, t, n) {
    for (var o, a, h, f, m = e.contents, q = e.dataTypes; q[0] === "*"; )
      q.shift(), a === void 0 && (a = e.mimeType || t.getResponseHeader("Content-Type"));
    if (a) {
      for (f in m)
        if (m[f] && m[f].test(a)) {
          q.unshift(f);
          break;
        }
    }
    if (q[0] in n)
      h = q[0];
    else {
      for (f in n) {
        if (!q[0] || e.converters[f + " " + q[0]]) {
          h = f;
          break;
        }
        o || (o = f);
      }
      h = h || o;
    }
    return h ? (h !== q[0] && q.unshift(h), n[h]) : void 0;
  }
  function Oi(e, t, n, o) {
    var a, h, f, m, q, S = {}, E = e.dataTypes.slice();
    if (E[1])
      for (f in e.converters)
        S[f.toLowerCase()] = e.converters[f];
    for (h = E.shift(); h; )
      if (e.responseFields[h] && (n[e.responseFields[h]] = t), !q && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), q = h, h = E.shift()) {
        if (h === "*")
          h = q;
        else if (q !== "*" && q !== h) {
          if (f = S[q + " " + h] || S["* " + h], !f) {
            for (a in S)
              if (m = a.split(" "), m[1] === h && (f = S[q + " " + m[0]] || S["* " + m[0]])) {
                f === !0 ? f = S[a] : S[a] !== !0 && (h = m[0], E.unshift(m[1]));
                break;
              }
          }
          if (f !== !0)
            if (f && e.throws)
              t = f(t);
            else
              try {
                t = f(t);
              } catch (_) {
                return { state: "parsererror", error: f ? _ : "No conversion from " + q + " to " + h };
              }
        }
      }
    return { state: "success", data: t };
  }
  i.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt, type: "GET", isLocal: qi.test(jt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ni, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": i.parseJSON, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
    return t ? Qn(Qn(e, i.ajaxSettings), t) : Qn(i.ajaxSettings, e);
  }, ajaxPrefilter: ii(ti), ajaxTransport: ii(zn), ajax: function(e, t) {
    typeof e == "object" && (t = e, e = void 0), t = t || {};
    var n, o, a, h, f, m, q, S, E = i.ajaxSetup({}, t), _ = E.context || E, N = E.context && (_.nodeType || _.jquery) ? i(_) : i.event, z = i.Deferred(), W = i.Callbacks("once memory"), K = E.statusCode || {}, he = {}, nt = {}, oe = 0, Re = "canceled", V = { readyState: 0, getResponseHeader: function(le) {
      var Te;
      if (oe === 2) {
        if (!S)
          for (S = {}; Te = Li.exec(h); )
            S[Te[1].toLowerCase()] = Te[2];
        Te = S[le.toLowerCase()];
      }
      return Te == null ? null : Te;
    }, getAllResponseHeaders: function() {
      return oe === 2 ? h : null;
    }, setRequestHeader: function(le, Te) {
      var wt = le.toLowerCase();
      return oe || (le = nt[wt] = nt[wt] || le, he[le] = Te), this;
    }, overrideMimeType: function(le) {
      return oe || (E.mimeType = le), this;
    }, statusCode: function(le) {
      var Te;
      if (le)
        if (2 > oe)
          for (Te in le)
            K[Te] = [K[Te], le[Te]];
        else
          V.always(le[V.status]);
      return this;
    }, abort: function(le) {
      var Te = le || Re;
      return q && q.abort(Te), Rt(0, Te), this;
    } };
    if (z.promise(V).complete = W.add, V.success = V.done, V.error = V.fail, E.url = ((e || E.url || yt) + "").replace(ki, "").replace(ji, jt[1] + "//"), E.type = t.method || t.type || E.method || E.type, E.dataTypes = i.trim(E.dataType || "*").toLowerCase().match(Ie) || [""], E.crossDomain == null && (n = ei.exec(E.url.toLowerCase()), E.crossDomain = !(!n || n[1] === jt[1] && n[2] === jt[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (jt[3] || (jt[1] === "http:" ? "80" : "443")))), E.data && E.processData && typeof E.data != "string" && (E.data = i.param(E.data, E.traditional)), ri(ti, E, t, V), oe === 2)
      return V;
    m = E.global, m && i.active++ === 0 && i.event.trigger("ajaxStart"), E.type = E.type.toUpperCase(), E.hasContent = !Ei.test(E.type), a = E.url, E.hasContent || (E.data && (a = E.url += (Mn.test(a) ? "&" : "?") + E.data, delete E.data), E.cache === !1 && (E.url = Zn.test(a) ? a.replace(Zn, "$1_=" + An++) : a + (Mn.test(a) ? "&" : "?") + "_=" + An++)), E.ifModified && (i.lastModified[a] && V.setRequestHeader("If-Modified-Since", i.lastModified[a]), i.etag[a] && V.setRequestHeader("If-None-Match", i.etag[a])), (E.data && E.hasContent && E.contentType !== !1 || t.contentType) && V.setRequestHeader("Content-Type", E.contentType), V.setRequestHeader("Accept", E.dataTypes[0] && E.accepts[E.dataTypes[0]] ? E.accepts[E.dataTypes[0]] + (E.dataTypes[0] !== "*" ? ", " + ni + "; q=0.01" : "") : E.accepts["*"]);
    for (o in E.headers)
      V.setRequestHeader(o, E.headers[o]);
    if (E.beforeSend && (E.beforeSend.call(_, V, E) === !1 || oe === 2))
      return V.abort();
    Re = "abort";
    for (o in { success: 1, error: 1, complete: 1 })
      V[o](E[o]);
    if (q = ri(zn, E, t, V)) {
      V.readyState = 1, m && N.trigger("ajaxSend", [V, E]), E.async && E.timeout > 0 && (f = setTimeout(function() {
        V.abort("timeout");
      }, E.timeout));
      try {
        oe = 1, q.send(he, Rt);
      } catch (le) {
        if (!(2 > oe))
          throw le;
        Rt(-1, le);
      }
    } else
      Rt(-1, "No Transport");
    function Rt(le, Te, wt, pn) {
      var He, Ht, St, Qe, xt, Ke = Te;
      oe !== 2 && (oe = 2, f && clearTimeout(f), q = void 0, h = pn || "", V.readyState = le > 0 ? 4 : 0, He = le >= 200 && 300 > le || le === 304, wt && (Qe = Si(E, V, wt)), Qe = Oi(E, Qe, V, He), He ? (E.ifModified && (xt = V.getResponseHeader("Last-Modified"), xt && (i.lastModified[a] = xt), xt = V.getResponseHeader("etag"), xt && (i.etag[a] = xt)), le === 204 || E.type === "HEAD" ? Ke = "nocontent" : le === 304 ? Ke = "notmodified" : (Ke = Qe.state, Ht = Qe.data, St = Qe.error, He = !St)) : (St = Ke, (le || !Ke) && (Ke = "error", 0 > le && (le = 0))), V.status = le, V.statusText = (Te || Ke) + "", He ? z.resolveWith(_, [Ht, Ke, V]) : z.rejectWith(_, [V, Ke, St]), V.statusCode(K), K = void 0, m && N.trigger(He ? "ajaxSuccess" : "ajaxError", [V, E, He ? Ht : St]), W.fireWith(_, [V, Ke]), m && (N.trigger("ajaxComplete", [V, E]), --i.active || i.event.trigger("ajaxStop")));
    }
    return V;
  }, getJSON: function(e, t, n) {
    return i.get(e, t, n, "json");
  }, getScript: function(e, t) {
    return i.get(e, void 0, t, "script");
  } }), i.each(["get", "post"], function(e, t) {
    i[t] = function(n, o, a, h) {
      return i.isFunction(o) && (h = h || a, a = o, o = void 0), i.ajax({ url: n, type: t, dataType: h, data: o, success: a });
    };
  }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    i.fn[t] = function(n) {
      return this.on(t, n);
    };
  }), i._evalUrl = function(e) {
    return i.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
  }, i.fn.extend({ wrapAll: function(e) {
    if (i.isFunction(e))
      return this.each(function(n) {
        i(this).wrapAll(e.call(this, n));
      });
    if (this[0]) {
      var t = i(e, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var n = this; n.firstChild && n.firstChild.nodeType === 1; )
          n = n.firstChild;
        return n;
      }).append(this);
    }
    return this;
  }, wrapInner: function(e) {
    return this.each(i.isFunction(e) ? function(t) {
      i(this).wrapInner(e.call(this, t));
    } : function() {
      var t = i(this), n = t.contents();
      n.length ? n.wrapAll(e) : t.append(e);
    });
  }, wrap: function(e) {
    var t = i.isFunction(e);
    return this.each(function(n) {
      i(this).wrapAll(t ? e.call(this, n) : e);
    });
  }, unwrap: function() {
    return this.parent().each(function() {
      i.nodeName(this, "body") || i(this).replaceWith(this.childNodes);
    }).end();
  } }), i.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !Q.reliableHiddenOffsets() && (e.style && e.style.display || i.css(e, "display")) === "none";
  }, i.expr.filters.visible = function(e) {
    return !i.expr.filters.hidden(e);
  };
  var Di = /%20/g, _i = /\[\]$/, si = /\r?\n/g, Ni = /^(?:submit|button|image|reset|file)$/i, Ai = /^(?:input|select|textarea|keygen)/i;
  function Bn(e, t, n, o) {
    var a;
    if (i.isArray(t))
      i.each(t, function(h, f) {
        n || _i.test(e) ? o(e, f) : Bn(e + "[" + (typeof f == "object" ? h : "") + "]", f, n, o);
      });
    else if (n || i.type(t) !== "object")
      o(e, t);
    else
      for (a in t)
        Bn(e + "[" + a + "]", t[a], n, o);
  }
  i.param = function(e, t) {
    var n, o = [], a = function(h, f) {
      f = i.isFunction(f) ? f() : f == null ? "" : f, o[o.length] = encodeURIComponent(h) + "=" + encodeURIComponent(f);
    };
    if (t === void 0 && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(e) || e.jquery && !i.isPlainObject(e))
      i.each(e, function() {
        a(this.name, this.value);
      });
    else
      for (n in e)
        Bn(n, e[n], t, a);
    return o.join("&").replace(Di, "+");
  }, i.fn.extend({ serialize: function() {
    return i.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e = i.prop(this, "elements");
      return e ? i.makeArray(e) : this;
    }).filter(function() {
      var e = this.type;
      return this.name && !i(this).is(":disabled") && Ai.test(this.nodeName) && !Ni.test(e) && (this.checked || !qt.test(e));
    }).map(function(e, t) {
      var n = i(this).val();
      return n == null ? null : i.isArray(n) ? i.map(n, function(o) {
        return { name: t.name, value: o.replace(si, `\r
`) };
      }) : { name: t.name, value: n.replace(si, `\r
`) };
    }).get();
  } }), i.ajaxSettings.xhr = P.ActiveXObject !== void 0 ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && oi() || zi();
  } : oi;
  var Mi = 0, qn = {}, dn = i.ajaxSettings.xhr();
  P.ActiveXObject && i(P).on("unload", function() {
    for (var e in qn)
      qn[e](void 0, !0);
  }), Q.cors = !!dn && "withCredentials" in dn, dn = Q.ajax = !!dn, dn && i.ajaxTransport(function(e) {
    if (!e.crossDomain || Q.cors) {
      var t;
      return { send: function(n, o) {
        var a, h = e.xhr(), f = ++Mi;
        if (h.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (a in e.xhrFields)
            h[a] = e.xhrFields[a];
        e.mimeType && h.overrideMimeType && h.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
        for (a in n)
          n[a] !== void 0 && h.setRequestHeader(a, n[a] + "");
        h.send(e.hasContent && e.data || null), t = function(m, q) {
          var S, E, _;
          if (t && (q || h.readyState === 4))
            if (delete qn[f], t = void 0, h.onreadystatechange = i.noop, q)
              h.readyState !== 4 && h.abort();
            else {
              _ = {}, S = h.status, typeof h.responseText == "string" && (_.text = h.responseText);
              try {
                E = h.statusText;
              } catch {
                E = "";
              }
              S || !e.isLocal || e.crossDomain ? S === 1223 && (S = 204) : S = _.text ? 200 : 404;
            }
          _ && o(S, E, _, h.getAllResponseHeaders());
        }, e.async ? h.readyState === 4 ? setTimeout(t) : h.onreadystatechange = qn[f] = t : t();
      }, abort: function() {
        t && t(void 0, !0);
      } };
    }
  });
  function oi() {
    try {
      return new P.XMLHttpRequest();
    } catch {
    }
  }
  function zi() {
    try {
      return new P.ActiveXObject("Microsoft.XMLHTTP");
    } catch {
    }
  }
  i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) {
    return i.globalEval(e), e;
  } } }), i.ajaxPrefilter("script", function(e) {
    e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), i.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = x.head || i("head")[0] || x.documentElement;
      return { send: function(o, a) {
        t = x.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(h, f) {
          (f || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, f || a(200, "success"));
        }, n.insertBefore(t, n.firstChild);
      }, abort: function() {
        t && t.onload(void 0, !0);
      } };
    }
  });
  var li = [], Fn = /(=)\?(?=&|$)|\?\?/;
  i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e = li.pop() || i.expando + "_" + An++;
    return this[e] = !0, e;
  } }), i.ajaxPrefilter("json jsonp", function(e, t, n) {
    var o, a, h, f = e.jsonp !== !1 && (Fn.test(e.url) ? "url" : typeof e.data == "string" && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(e.data) && "data");
    return f || e.dataTypes[0] === "jsonp" ? (o = e.jsonpCallback = i.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, f ? e[f] = e[f].replace(Fn, "$1" + o) : e.jsonp !== !1 && (e.url += (Mn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
      return h || i.error(o + " was not called"), h[0];
    }, e.dataTypes[0] = "json", a = P[o], P[o] = function() {
      h = arguments;
    }, n.always(function() {
      P[o] = a, e[o] && (e.jsonpCallback = t.jsonpCallback, li.push(o)), h && i.isFunction(a) && a(h[0]), h = a = void 0;
    }), "script") : void 0;
  }), i.parseHTML = function(e, t, n) {
    if (!e || typeof e != "string")
      return null;
    typeof t == "boolean" && (n = t, t = !1), t = t || x;
    var o = Ne.exec(e), a = !n && [];
    return o ? [t.createElement(o[1])] : (o = i.buildFragment([e], t, a), a && a.length && i(a).remove(), i.merge([], o.childNodes));
  };
  var ai = i.fn.load;
  i.fn.load = function(e, t, n) {
    if (typeof e != "string" && ai)
      return ai.apply(this, arguments);
    var o, a, h, f = this, m = e.indexOf(" ");
    return m >= 0 && (o = e.slice(m, e.length), e = e.slice(0, m)), i.isFunction(t) ? (n = t, t = void 0) : t && typeof t == "object" && (h = "POST"), f.length > 0 && i.ajax({ url: e, type: h, dataType: "html", data: t }).done(function(q) {
      a = arguments, f.html(o ? i("<div>").append(i.parseHTML(q)).find(o) : q);
    }).complete(n && function(q, S) {
      f.each(n, a || [q.responseText, S, q]);
    }), this;
  }, i.expr.filters.animated = function(e) {
    return i.grep(i.timers, function(t) {
      return e === t.elem;
    }).length;
  };
  var ui = P.document.documentElement;
  function ci(e) {
    return i.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
  }
  i.offset = { setOffset: function(e, t, n) {
    var o, a, h, f, m, q, S, E = i.css(e, "position"), _ = i(e), N = {};
    E === "static" && (e.style.position = "relative"), m = _.offset(), h = i.css(e, "top"), q = i.css(e, "left"), S = (E === "absolute" || E === "fixed") && i.inArray("auto", [h, q]) > -1, S ? (o = _.position(), f = o.top, a = o.left) : (f = parseFloat(h) || 0, a = parseFloat(q) || 0), i.isFunction(t) && (t = t.call(e, n, m)), t.top != null && (N.top = t.top - m.top + f), t.left != null && (N.left = t.left - m.left + a), "using" in t ? t.using.call(e, N) : _.css(N);
  } }, i.fn.extend({ offset: function(e) {
    if (arguments.length)
      return e === void 0 ? this : this.each(function(f) {
        i.offset.setOffset(this, e, f);
      });
    var t, n, o = { top: 0, left: 0 }, a = this[0], h = a && a.ownerDocument;
    if (h)
      return t = h.documentElement, i.contains(t, a) ? (typeof a.getBoundingClientRect !== xe && (o = a.getBoundingClientRect()), n = ci(h), { top: o.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: o.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : o;
  }, position: function() {
    if (this[0]) {
      var e, t, n = { top: 0, left: 0 }, o = this[0];
      return i.css(o, "position") === "fixed" ? t = o.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i.nodeName(e[0], "html") || (n = e.offset()), n.top += i.css(e[0], "borderTopWidth", !0), n.left += i.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - i.css(o, "marginTop", !0), left: t.left - n.left - i.css(o, "marginLeft", !0) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      for (var e = this.offsetParent || ui; e && !i.nodeName(e, "html") && i.css(e, "position") === "static"; )
        e = e.offsetParent;
      return e || ui;
    });
  } }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
    var n = /Y/.test(t);
    i.fn[e] = function(o) {
      return $e(this, function(a, h, f) {
        var m = ci(a);
        return f === void 0 ? m ? t in m ? m[t] : m.document.documentElement[h] : a[h] : void (m ? m.scrollTo(n ? i(m).scrollLeft() : f, n ? f : i(m).scrollTop()) : a[h] = f);
      }, e, o, arguments.length, null);
    };
  }), i.each(["top", "left"], function(e, t) {
    i.cssHooks[t] = c(Q.pixelPosition, function(n, o) {
      return o ? (o = lt(n, t), Ye.test(o) ? i(n).position()[t] + "px" : o) : void 0;
    });
  }), i.each({ Height: "height", Width: "width" }, function(e, t) {
    i.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, o) {
      i.fn[o] = function(a, h) {
        var f = arguments.length && (n || typeof a != "boolean"), m = n || (a === !0 || h === !0 ? "margin" : "border");
        return $e(this, function(q, S, E) {
          var _;
          return i.isWindow(q) ? q.document.documentElement["client" + e] : q.nodeType === 9 ? (_ = q.documentElement, Math.max(q.body["scroll" + e], _["scroll" + e], q.body["offset" + e], _["offset" + e], _["client" + e])) : E === void 0 ? i.css(q, S, m) : i.style(q, S, E, m);
        }, t, f ? a : void 0, f, null);
      };
    });
  }), i.fn.size = function() {
    return this.length;
  }, i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
    return i;
  });
  var Qi = P.jQuery, Bi = P.$;
  return i.noConflict = function(e) {
    return P.$ === i && (P.$ = Bi), e && P.jQuery === i && (P.jQuery = Qi), i;
  }, typeof te === xe && (P.jQuery = P.$ = i), i;
});
const gi = {
  autoHeight: !0,
  head: [
    {
      color: "#b72830",
      actions: [
        {
          label: "+",
          labelType: "laTeX",
          action: "+"
        },
        {
          label: "-",
          labelType: "laTeX",
          action: "-"
        },
        {
          label: "\\cdot",
          labelType: "laTeX",
          action: "\\cdot"
        },
        {
          label: "\\times",
          labelType: "laTeX",
          action: "\\times"
        },
        {
          label: "\\div",
          labelType: "laTeX",
          action: "\\div"
        }
      ]
    },
    {
      color: "#b72830",
      actions: [
        {
          label: "(",
          labelType: "text",
          action: "("
        },
        {
          label: ")",
          labelType: "text",
          action: ")"
        },
        {
          label: "[",
          labelType: "text",
          action: "["
        },
        {
          label: "]",
          labelType: "text",
          action: "]"
        },
        {
          label: "{",
          labelType: "text",
          action: "{",
          cmd: !0
        },
        {
          label: "}",
          labelType: "text",
          action: "}",
          cmd: !0
        }
      ]
    },
    {
      color: "#b72830",
      actions: [
        {
          label: "\\pi",
          labelType: "laTeX",
          action: "\\pi"
        },
        {
          label: "e",
          labelType: "text",
          action: "e"
        },
        {
          label: "\\infty",
          labelType: "laTeX",
          action: "\\infty"
        }
      ]
    }
  ],
  body: [
    {
      color: "#bb2c2c",
      actions: [
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path  fill-rule="nonzero" d="M20.0184758 20L28 19.9819005 27.9722864 8 20 8 20.0184758 20zM21.017192 19L21 9.00861326 27 9 26.991404 18.9913867 21.017192 19zM20.0184758 36L28 35.9819005 27.9722864 24 20 24 20.0184758 36zM21.017192 35L21 25.0086133 27 25 26.991404 34.9913867 21.017192 35z"></path><path  stroke-linecap="square" d="M16 22L32 22"></path></g></svg>',
          labelType: "svg",
          action: "\\frac{}{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M.0277136259 26L12 25.9698341 11.9584296 6 0 6 .0277136259 26zM1.0286533 25L1 7.01550388 11 7 10.9856734 24.9844961 1.0286533 25zM20.312 8.496L20.312 7.452 16.004 7.452 18.572 4.98C19.108 4.468 19.472 4.012 19.664 3.612 19.856 3.212 19.952 2.788 19.952 2.34 19.952 1.62 19.692 1.05 19.172.63 18.652.21 17.952 8.8817842e-16 17.072 8.8817842e-16 16.416 8.8817842e-16 15.822.112 15.29.336 14.758.56 14.328.872 14 1.272L14 1.272 14.816 1.98C15.32 1.372 16.036 1.068 16.964 1.068 17.54 1.068 17.982 1.19 18.29 1.434 18.598 1.678 18.752 2.02 18.752 2.46 18.752 2.756 18.68 3.05 18.536 3.342 18.392 3.634 18.112 3.98 17.696 4.38L17.696 4.38 14.276 7.68 14.276 8.496 20.312 8.496z" transform="translate(18 6)"></path></svg>',
          labelType: "svg",
          action: "^{2}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M.0277136259 26L12 25.9698341 11.9584296 6 0 6 .0277136259 26zM1.0286533 25L1 7.01550388 11 7 10.9856734 24.9844961 1.0286533 25zM14.0161663 10L21 9.98491704 20.9757506 0 14 0 14.0161663 10zM15.0143266 9L15 1.00689061 20 1 19.9928367 8.99310939 15.0143266 9z" transform="translate(18 6)"></path></svg>',
          labelType: "svg",
          action: "^{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M.0277136259 20L12 19.9698341 11.9584296 0 0 0 .0277136259 20zM1.0286533 19L1 1.01550388 11 1 10.9856734 18.9844961 1.0286533 19zM14.0161663 26L21 25.984917 20.9757506 16 14 16 14.0161663 26zM15.0143266 25L15 17.0068906 20 17 19.9928367 24.9931094 15.0143266 25z" transform="translate(18 12)"></path></svg>',
          labelType: "svg",
          action: "_{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M13 34L13 10 12 10 12 34 13 34zM36 34L36 10 35 10 35 34 36 34zM18.0277136 32L30 31.9698341 29.9584296 12 18 12 18.0277136 32zM19.0286533 31L19 13.0155039 29 13 28.9856734 30.9844961 19.0286533 31z"></path></svg>',
          labelType: "svg",
          action: "||"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M14.3333333 34C14.6410256 34 14.9230769 33.8255452 15.0512821 33.4517134L22.974359 12.0186916C23.1794872 11.4953271 23.3076923 11.3956386 23.8205128 11.3956386L24 11.3956386 24 10 23.5641026 10C22.7692308 10 22.1794872 10.4485981 21.9487179 11.0716511L14.6923077 30.8847352 11.8974359 25.3021807C11.7435897 24.9781931 11.4615385 24.8037383 11.2051282 24.8037383 10.9487179 24.8037383 10.6923077 24.9283489 10.4615385 25.2024922L8.17948718 27.9439252C8.05128205 28.1183801 8 28.2429907 8 28.3676012 8 28.517134 8.07692308 28.6666667 8.20512821 28.8161994 8.33333333 28.94081 8.48717949 29.0155763 8.64102564 29.0155763 8.79487179 29.0155763 8.94871795 28.94081 9.07692308 28.7912773L10.4102564 27.1713396 13.5641026 33.4766355C13.7435897 33.8255452 14.0512821 34 14.3333333 34zM26.0277136 34L38 33.9698341 37.9584296 14 26 14 26.0277136 34zM27.0286533 33L27 15.0155039 37 15 36.9856734 32.9844961 27.0286533 33z"></path></svg>',
          labelType: "svg",
          action: "\\sqrt"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path  fill-rule="nonzero" d="M0.0161662818,10 L7,9.98491704 L6.97575058,0 L0,0 L0.0161662818,10 Z M1.01432665,9 L1,1.00689061 L6,1 L5.99283668,8.99310939 L1.01432665,9 Z" transform="translate(8 12)"></path><path  fill-rule="nonzero" d="M16.3333333 34C16.6410256 34 16.9230769 33.8255452 17.0512821 33.4517134L24.974359 12.0186916C25.1794872 11.4953271 25.3076923 11.3956386 25.8205128 11.3956386L26 11.3956386 26 10 25.5641026 10C24.7692308 10 24.1794872 10.4485981 23.9487179 11.0716511L16.6923077 30.8847352 13.8974359 25.3021807C13.7435897 24.9781931 13.4615385 24.8037383 13.2051282 24.8037383 12.9487179 24.8037383 12.6923077 24.9283489 12.4615385 25.2024922L10.1794872 27.9439252C10.0512821 28.1183801 10 28.2429907 10 28.3676012 10 28.517134 10.0769231 28.6666667 10.2051282 28.8161994 10.3333333 28.94081 10.4871795 29.0155763 10.6410256 29.0155763 10.7948718 29.0155763 10.9487179 28.94081 11.0769231 28.7912773L12.4102564 27.1713396 15.5641026 33.4766355C15.7435897 33.8255452 16.0512821 34 16.3333333 34zM28.0277136 34L40 33.9698341 39.9584296 14 28 14 28.0277136 34zM29.0286533 33L29 15.0155039 39 15 38.9856734 32.9844961 29.0286533 33z"></path></g></svg>',
          labelType: "svg",
          action: "\\sqrt[]{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path  stroke-linecap="square" d="M16 10L32 10"></path><path  fill-rule="nonzero" d="M18.0277136,34 L30,33.9698341 L29.9584296,14 L18,14 L18.0277136,34 Z M19.0286533,33 L19,15.0155039 L29,15 L28.9856734,32.9844961 L19.0286533,33 Z"></path></g></svg>',
          labelType: "svg",
          action: "\\overline{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M15.8852459 12L16.2131148 11.7084399C15.852459 11.202046 15.3442623 10.6649616 14.8688525 10.2352941 14.704918 10.0818414 14.6393443 9.98976982 14.6393443 9.8516624 14.6393443 9.69820972 14.9016393 9.5140665 15.0655738 9.5140665L36 9.5140665 36 8.50127877 15.0819672 8.50127877C14.7868852 8.50127877 14.6557377 8.34782609 14.6557377 8.1943734 14.6557377 8.07161125 14.7377049 7.9028133 14.8852459 7.76470588 15.3770492 7.28900256 15.852459 6.7826087 16.2131148 6.2915601L15.8852459 6C14.8196721 7.15089514 13.5737705 8.30179028 12 8.93094629L12 9.08439898C13.5737705 9.69820972 14.8196721 10.8491049 15.8852459 12zM18.0277136 34L30 33.9698341 29.9584296 14 18 14 18.0277136 34zM19.0286533 33L19 15.0155039 29 15 28.9856734 32.9844961 19.0286533 33z"></path></svg>',
          labelType: "svg",
          action: "\\overleftarrow{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M32.0983607 12C33.1803279 10.8367347 34.4262295 9.70408163 36 9.07653061L36 8.92346939C34.4262295 8.31122449 33.1803279 7.14795918 32.1147541 6L31.7868852 6.29081633C32.147541 6.79591837 32.6557377 7.34693878 33.1311475 7.7755102 33.295082 7.92857143 33.3606557 8.02040816 33.3606557 8.15816327 33.3606557 8.31122449 33.0983607 8.49489796 32.9344262 8.49489796L12 8.49489796 12 9.50510204 32.9180328 9.50510204C33.2131148 9.50510204 33.3442623 9.65816327 33.3442623 9.81122449 33.3442623 9.93367347 33.2622951 10.1020408 33.1147541 10.2397959 32.6229508 10.7142857 32.147541 11.2040816 31.7704918 11.7091837L32.0983607 12zM18.0277136 34L30 33.9698341 29.9584296 14 18 14 18.0277136 34zM19.0286533 33L19 15.0155039 29 15 28.9856734 32.9844961 19.0286533 33z"></path></svg>',
          labelType: "svg",
          action: "\\overrightarrow{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M20.0161663 34L27 33.984917 26.9757506 24 20 24 20.0161663 34zM21.0143266 33L21 25.0068906 26 25 25.9928367 32.9931094 21.0143266 33zM37.0161663 34L44 33.984917 43.9757506 24 37 24 37.0161663 34zM38.0143266 33L38 25.0068906 43 25 42.9928367 32.9931094 38.0143266 33zM5.536 22.112L5.536 10.24 4 10.24 4 22.112 5.536 22.112zM9.232 12C9.53066667 12 9.77866667 11.9013333 9.976 11.704 10.1733333 11.5066667 10.272 11.264 10.272 10.976 10.272 10.6986667 10.1733333 10.4666667 9.976 10.28 9.77866667 10.0933333 9.53066667 10 9.232 10 8.93333333 10 8.68533333 10.0986667 8.488 10.296 8.29066667 10.4933333 8.192 10.7306667 8.192 11.008 8.192 11.2853333 8.29066667 11.52 8.488 11.712 8.68533333 11.904 8.93333333 12 9.232 12zM10 22.112L10 13.632 8.464 13.632 8.464 22.112 10 22.112zM14.464 22.112L14.464 17.744C14.464 16.8373333 14.6933333 16.1413333 15.152 15.656 15.6106667 15.1706667 16.2293333 14.928 17.008 14.928 17.712 14.928 18.2533333 15.136 18.632 15.552 19.0106667 15.968 19.2 16.5866667 19.2 17.408L19.2 17.408 19.2 22.112 20.736 22.112 20.736 17.744C20.736 16.8373333 20.9653333 16.1413333 21.424 15.656 21.8826667 15.1706667 22.5013333 14.928 23.28 14.928 23.984 14.928 24.5253333 15.136 24.904 15.552 25.2826667 15.968 25.472 16.5866667 25.472 17.408L25.472 17.408 25.472 22.112 27.008 22.112 27.008 17.232C27.008 16.016 26.696 15.0986667 26.072 14.48 25.448 13.8613333 24.6026667 13.552 23.536 13.552 22.8213333 13.552 22.1786667 13.6906667 21.608 13.968 21.0373333 14.2453333 20.592 14.6293333 20.272 15.12 19.9946667 14.608 19.6 14.2186667 19.088 13.952 18.576 13.6853333 17.9893333 13.552 17.328 13.552 16.688 13.552 16.1173333 13.6666667 15.616 13.896 15.1146667 14.1253333 14.7093333 14.4586667 14.4 14.896L14.4 14.896 14.4 13.632 12.928 13.632 12.928 22.112 14.464 22.112zM34.2432653 31C34.6046259 30.4678112 34.9170068 30.0629471 35.1804082 29.7854077 35.4438095 29.5078684 35.7170068 29.2832618 36 29.111588L36 29.111588 36 28.8540773C35.4862585 28.5679542 34.9028571 27.9499285 34.2497959 27L34.2497959 27 33.9232653 27C34.0930612 27.434907 34.2204082 27.7424893 34.3053061 27.9227468 34.3902041 28.1030043 34.5393197 28.3676681 34.7526531 28.7167382L34.7526531 28.7167382 28 28.7167382 28 29.2832618 34.7526531 29.2832618C34.4609524 29.683834 34.1823129 30.2560801 33.9167347 31L33.9167347 31 34.2432653 31z"></path></svg>',
          labelType: "svg",
          action: "\\lim_{{}\\to{}}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M29.2414911 30C29.7471637 30 30 29.5686778 30 29.0757381 30 28.6033376 29.7471637 28.2336329 29.26094 28.2336329L22.2593193 28.2336329C21.5591572 28.2336329 20.6645057 28.3157895 19.8670989 28.3568678 20.4894652 27.9255456 21.1701783 27.3709884 21.7147488 26.8780488L26.1296596 22.7907574C26.5380875 22.4210526 26.713128 22.0924262 26.713128 21.5994865 26.713128 21.127086 26.5380875 20.7984596 26.1296596 20.449294L22.2982172 17.1630295C21.7536467 16.690629 21.0340357 16.1360719 20.2755267 15.6431322 21.1507293 15.7047497 22.1815235 15.7663671 22.8622366 15.7663671L28.9303079 15.7663671C29.4165316 15.7663671 29.6693679 15.3761232 29.6693679 14.8831836 29.6693679 14.4107831 29.4165316 14 28.9497569 14L19.6531605 14C18.8946515 14 18.4667747 14.4929397 18.4667747 15.2734275 18.4667747 15.8690629 18.6807131 16.2182285 19.3419773 16.7933248L24.8460292 21.5994865 18.8168558 27.2066752C18.2139384 27.7612323 18 28.1103979 18 28.7471117 18 29.5070603 18.4278768 30 19.1474878 30L29.2414911 30zM21.0138568 12L27 11.9864253 26.9792148 3 21 3 21.0138568 12zM22.0114613 11L22 4.00602929 26 4 25.9942693 10.9939707 22.0114613 11zM21.0138568 41L27 40.9864253 26.9792148 32 21 32 21.0138568 41zM22.0114613 40L22 33.0060293 26 33 25.9942693 39.9939707 22.0114613 40z"></path></svg>',
          labelType: "svg",
          action: "\\sum"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M20.264 30L20.264 15.414 27.736 15.414 27.736 30 29.951 30 29.951 15.414 31 15.414 31 14 17 14 17 15.414 18.049 15.414 18.049 30zM21.0138568 12L27 11.9864253 26.9792148 3 21 3 21.0138568 12zM22.0114613 11L22 4.00602929 26 4 25.9942693 10.9939707 22.0114613 11zM21.0138568 41L27 40.9864253 26.9792148 32 21 32 21.0138568 41zM22.0114613 40L22 33.0060293 26 33 25.9942693 39.9939707 22.0114613 40z"></path></svg>',
          labelType: "svg",
          action: "\\product"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M9.32682927 30L9.32682927 9.41935484 16 9.41935484 16 8 8 8 8 30 9.32682927 30zM40 30L40 8 32 8 32 9.41935484 38.6731707 9.41935484 38.6731707 30 40 30zM18.0277136 34L30 33.9698341 29.9584296 14 18 14 18.0277136 34zM19.0286533 33L19 15.0155039 29 15 28.9856734 32.9844961 19.0286533 33z"></path></svg>',
          labelType: "svg",
          action: "\\lceil{}\\rceil"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M16 36L16 34.5806452 9.32682927 34.5806452 9.32682927 14 8 14 8 36 16 36zM40 36L40 14 38.6731707 14 38.6731707 34.5806452 32 34.5806452 32 36 40 36zM18.0277136 30L30 29.9698341 29.9584296 10 18 10 18.0277136 30zM19.0286533 29L19 11.0155039 29 11 28.9856734 28.9844961 19.0286533 29z"></path></svg>',
          labelType: "svg",
          action: "\\lfloor{}\\rfloor"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M13.536 28.872L13.536 17 12 17 12 28.872 13.536 28.872zM18 28.872L18 24.504C18 23.5973333 18.24 22.9013333 18.72 22.416 19.2 21.9306667 19.856 21.688 20.688 21.688 21.424 21.688 21.9893333 21.896 22.384 22.312 22.7786667 22.728 22.976 23.3466667 22.976 24.168L22.976 24.168 22.976 28.872 24.512 28.872 24.512 23.992C24.512 22.7866667 24.1946667 21.872 23.56 21.248 22.9253333 20.624 22.0693333 20.312 20.992 20.312 20.32 20.312 19.72 20.4293333 19.192 20.664 18.664 20.8986667 18.2453333 21.2346667 17.936 21.672L17.936 21.672 17.936 20.392 16.464 20.392 16.464 28.872 18 28.872zM27.0207852 29L36 28.9803922 35.9688222 16 27 16 27.0207852 29zM28.0200573 28L28 17.0094746 35 17 34.9899713 27.9905254 28.0200573 28z"></path></svg>',
          labelType: "svg",
          action: "ln{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M5.536 27.872L5.536 16 4 16 4 27.872 5.536 27.872zM12.096 27.968C12.9386667 27.968 13.6933333 27.7813333 14.36 27.408 15.0266667 27.0346667 15.5493333 26.52 15.928 25.864 16.3066667 25.208 16.496 24.464 16.496 23.632 16.496 22.8 16.3066667 22.056 15.928 21.4 15.5493333 20.744 15.0266667 20.232 14.36 19.864 13.6933333 19.496 12.9386667 19.312 12.096 19.312 11.2533333 19.312 10.496 19.496 9.824 19.864 9.152 20.232 8.62666667 20.744 8.248 21.4 7.86933333 22.056 7.68 22.8 7.68 23.632 7.68 24.464 7.86933333 25.208 8.248 25.864 8.62666667 26.52 9.152 27.0346667 9.824 27.408 10.496 27.7813333 11.2533333 27.968 12.096 27.968zM12.096 26.624C11.552 26.624 11.064 26.4986667 10.632 26.248 10.2 25.9973333 9.85866667 25.6453333 9.608 25.192 9.35733333 24.7386667 9.232 24.2186667 9.232 23.632 9.232 23.0453333 9.35733333 22.5253333 9.608 22.072 9.85866667 21.6186667 10.2 21.2693333 10.632 21.024 11.064 20.7786667 11.552 20.656 12.096 20.656 12.64 20.656 13.128 20.7786667 13.56 21.024 13.992 21.2693333 14.3306667 21.6186667 14.576 22.072 14.8213333 22.5253333 14.944 23.0453333 14.944 23.632 14.944 24.2186667 14.8213333 24.7386667 14.576 25.192 14.3306667 25.6453333 13.992 25.9973333 13.56 26.248 13.128 26.4986667 12.64 26.624 12.096 26.624zM22.336 31.072C23.7973333 31.072 24.896 30.7173333 25.632 30.008 26.368 29.2986667 26.736 28.2026667 26.736 26.72L26.736 26.72 26.736 19.392 25.28 19.392 25.28 20.704C24.928 20.2453333 24.4773333 19.8986667 23.928 19.664 23.3786667 19.4293333 22.784 19.312 22.144 19.312 21.3333333 19.312 20.6 19.4826667 19.944 19.824 19.288 20.1653333 18.7733333 20.648 18.4 21.272 18.0266667 21.896 17.84 22.608 17.84 23.408 17.84 24.208 18.0266667 24.92 18.4 25.544 18.7733333 26.168 19.288 26.6533333 19.944 27 20.6 27.3466667 21.3333333 27.52 22.144 27.52 22.7626667 27.52 23.336 27.4106667 23.864 27.192 24.392 26.9733333 24.8373333 26.6453333 25.2 26.208L25.2 26.208 25.2 26.88C25.2 27.84 24.9626667 28.5546667 24.488 29.024 24.0133333 29.4933333 23.28 29.728 22.288 29.728 21.6693333 29.728 21.0693333 29.6293333 20.488 29.432 19.9066667 29.2346667 19.4186667 28.9653333 19.024 28.624L19.024 28.624 18.288 29.808C18.736 30.2133333 19.3226667 30.5253333 20.048 30.744 20.7733333 30.9626667 21.536 31.072 22.336 31.072zM22.32 26.176C21.7546667 26.176 21.2506667 26.0586667 20.808 25.824 20.3653333 25.5893333 20.0186667 25.2613333 19.768 24.84 19.5173333 24.4186667 19.392 23.9413333 19.392 23.408 19.392 22.5866667 19.664 21.9226667 20.208 21.416 20.752 20.9093333 21.456 20.656 22.32 20.656 23.1733333 20.656 23.872 20.9093333 24.416 21.416 24.96 21.9226667 25.232 22.5866667 25.232 23.408 25.232 23.9413333 25.1066667 24.4186667 24.856 24.84 24.6053333 25.2613333 24.2586667 25.5893333 23.816 25.824 23.3733333 26.0586667 22.8746667 26.176 22.32 26.176zM35.0207852 29L44 28.9803922 43.9688222 16 35 16 35.0207852 29zM36.0200573 28L36 17.0094746 43 17 42.9899713 27.9905254 36.0200573 28zM29.056 33.664L29.056 28.064 27 28.064 27 28.76 28.264 28.76 28.264 33.664 29.056 33.664zM32.7013333 33.728C33.1386667 33.728 33.5293333 33.6146667 33.8733333 33.388 34.2173333 33.1613333 34.488 32.832 34.6853333 32.4 34.8826667 31.968 34.9813333 31.456 34.9813333 30.864 34.9813333 30.272 34.8826667 29.76 34.6853333 29.328 34.488 28.896 34.2173333 28.5666667 33.8733333 28.34 33.5293333 28.1133333 33.1386667 28 32.7013333 28 32.2586667 28 31.8653333 28.1133333 31.5213333 28.34 31.1773333 28.5666667 30.9066667 28.896 30.7093333 29.328 30.512 29.76 30.4133333 30.272 30.4133333 30.864 30.4133333 31.456 30.512 31.968 30.7093333 32.4 30.9066667 32.832 31.1773333 33.1613333 31.5213333 33.388 31.8653333 33.6146667 32.2586667 33.728 32.7013333 33.728zM32.7013333 33.016C32.248 33.016 31.8866667 32.832 31.6173333 32.464 31.348 32.096 31.2133333 31.5626667 31.2133333 30.864 31.2133333 30.1653333 31.348 29.632 31.6173333 29.264 31.8866667 28.896 32.248 28.712 32.7013333 28.712 33.1493333 28.712 33.508 28.896 33.7773333 29.264 34.0466667 29.632 34.1813333 30.1653333 34.1813333 30.864 34.1813333 31.5626667 34.0466667 32.096 33.7773333 32.464 33.508 32.832 33.1493333 33.016 32.7013333 33.016z"></path></svg>',
          labelType: "svg",
          action: "log_{10}{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M5.536 27.872L5.536 16 4 16 4 27.872 5.536 27.872zM12.096 27.968C12.9386667 27.968 13.6933333 27.7813333 14.36 27.408 15.0266667 27.0346667 15.5493333 26.52 15.928 25.864 16.3066667 25.208 16.496 24.464 16.496 23.632 16.496 22.8 16.3066667 22.056 15.928 21.4 15.5493333 20.744 15.0266667 20.232 14.36 19.864 13.6933333 19.496 12.9386667 19.312 12.096 19.312 11.2533333 19.312 10.496 19.496 9.824 19.864 9.152 20.232 8.62666667 20.744 8.248 21.4 7.86933333 22.056 7.68 22.8 7.68 23.632 7.68 24.464 7.86933333 25.208 8.248 25.864 8.62666667 26.52 9.152 27.0346667 9.824 27.408 10.496 27.7813333 11.2533333 27.968 12.096 27.968zM12.096 26.624C11.552 26.624 11.064 26.4986667 10.632 26.248 10.2 25.9973333 9.85866667 25.6453333 9.608 25.192 9.35733333 24.7386667 9.232 24.2186667 9.232 23.632 9.232 23.0453333 9.35733333 22.5253333 9.608 22.072 9.85866667 21.6186667 10.2 21.2693333 10.632 21.024 11.064 20.7786667 11.552 20.656 12.096 20.656 12.64 20.656 13.128 20.7786667 13.56 21.024 13.992 21.2693333 14.3306667 21.6186667 14.576 22.072 14.8213333 22.5253333 14.944 23.0453333 14.944 23.632 14.944 24.2186667 14.8213333 24.7386667 14.576 25.192 14.3306667 25.6453333 13.992 25.9973333 13.56 26.248 13.128 26.4986667 12.64 26.624 12.096 26.624zM22.336 31.072C23.7973333 31.072 24.896 30.7173333 25.632 30.008 26.368 29.2986667 26.736 28.2026667 26.736 26.72L26.736 26.72 26.736 19.392 25.28 19.392 25.28 20.704C24.928 20.2453333 24.4773333 19.8986667 23.928 19.664 23.3786667 19.4293333 22.784 19.312 22.144 19.312 21.3333333 19.312 20.6 19.4826667 19.944 19.824 19.288 20.1653333 18.7733333 20.648 18.4 21.272 18.0266667 21.896 17.84 22.608 17.84 23.408 17.84 24.208 18.0266667 24.92 18.4 25.544 18.7733333 26.168 19.288 26.6533333 19.944 27 20.6 27.3466667 21.3333333 27.52 22.144 27.52 22.7626667 27.52 23.336 27.4106667 23.864 27.192 24.392 26.9733333 24.8373333 26.6453333 25.2 26.208L25.2 26.208 25.2 26.88C25.2 27.84 24.9626667 28.5546667 24.488 29.024 24.0133333 29.4933333 23.28 29.728 22.288 29.728 21.6693333 29.728 21.0693333 29.6293333 20.488 29.432 19.9066667 29.2346667 19.4186667 28.9653333 19.024 28.624L19.024 28.624 18.288 29.808C18.736 30.2133333 19.3226667 30.5253333 20.048 30.744 20.7733333 30.9626667 21.536 31.072 22.336 31.072zM22.32 26.176C21.7546667 26.176 21.2506667 26.0586667 20.808 25.824 20.3653333 25.5893333 20.0186667 25.2613333 19.768 24.84 19.5173333 24.4186667 19.392 23.9413333 19.392 23.408 19.392 22.5866667 19.664 21.9226667 20.208 21.416 20.752 20.9093333 21.456 20.656 22.32 20.656 23.1733333 20.656 23.872 20.9093333 24.416 21.416 24.96 21.9226667 25.232 22.5866667 25.232 23.408 25.232 23.9413333 25.1066667 24.4186667 24.856 24.84 24.6053333 25.2613333 24.2586667 25.5893333 23.816 25.824 23.3733333 26.0586667 22.8746667 26.176 22.32 26.176zM35.0207852 29L44 28.9803922 43.9688222 16 35 16 35.0207852 29zM36.0200573 28L36 17.0094746 43 17 42.9899713 27.9905254 36.0200573 28zM28.0138568 36L34 35.9864253 33.9792148 27 28 27 28.0138568 36zM29.0114613 35L29 28.0060293 33 28 32.9942693 34.9939707 29.0114613 35z"></path></svg>',
          labelType: "svg",
          action: "log_{}{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path  d="M16.208 36C17.776 36 18.992 35.0718232 19.76 33.2464088 20.208 32.1944751 20.368 31.3900552 20.528 29.719337 20.656 28.2961326 20.72 26.1922652 20.72 21.9845304L20.72 18.921547C20.72 14.9303867 20.912 12.2077348 21.296 10.7535912 21.68 9.26850829 22.352 8.52596685 23.376 8.52596685 24.016 8.52596685 24.336 8.9281768 24.368 9.5160221 24.4 10.1038674 24.56 10.3513812 25.168 10.3513812 25.712 10.3513812 26 10.1348066 26 9.67071823 26 9.20662983 25.776 8.80441989 25.328 8.49502762 24.88 8.18563536 24.496 8 23.76 8 22.192 8 21.04 8.95911602 20.24 10.7535912 19.824 11.681768 19.6 12.9812155 19.472 14.280663 19.325913 15.7778525 19.2865331 18.2293622 19.280789 21.1877493L19.28 25.078453C19.28 29.0696133 19.088 31.7922652 18.704 33.2773481 18.32 34.7314917 17.648 35.4740331 16.592 35.4740331 16.048 35.4740331 15.696 35.1337017 15.632 34.4839779 15.568 33.8651934 15.344 33.6486188 14.864 33.6486188 14.288 33.6486188 14 33.8651934 14 34.3292818 14 34.7933702 14.224 35.1955801 14.672 35.5049724 15.12 35.8143646 15.536 36 16.208 36zM28.0138568 15L34 14.9864253 33.9792148 6 28 6 28.0138568 15zM29.0114613 14L29 7.00602929 33 7 32.9942693 13.9939707 29.0114613 14zM23.0138568 38L29 37.9864253 28.9792148 29 23 29 23.0138568 38zM24.0114613 37L24 30.0060293 28 30 27.9942693 36.9939707 24.0114613 37z"></path></svg>',
          labelType: "svg",
          action: "\\int_{}^{}"
        },
        {
          label: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" fill-rule="evenodd"><path  fill-rule="nonzero" d="M24.0207852 19L33 18.9803922 32.9688222 6 24 6 24.0207852 19zM25.0200573 18L25 7.00947459 32 7 31.9899713 17.9905254 25.0200573 18zM24.7067852 38L33.686 37.9803922 33.6548222 25 24.686 25 24.7067852 38zM25.7060573 37L25.686 26.0094746 32.686 26 32.6759713 36.9905254 25.7060573 37zM18.066 19.084C18.6166667 19.084 19.1206667 18.9766667 19.578 18.762 20.0353333 18.5473333 20.4133333 18.2346667 20.712 17.824L20.712 17.824 20.712 19 22 19 22 8.612 20.656 8.612 20.656 12.7C20.3573333 12.308 19.984 12.0116667 19.536 11.811 19.088 11.6103333 18.598 11.51 18.066 11.51 17.3473333 11.51 16.7033333 11.6686667 16.134 11.986 15.5646667 12.3033333 15.119 12.7466667 14.797 13.316 14.475 13.8853333 14.314 14.5433333 14.314 15.29 14.314 16.0366667 14.475 16.697 14.797 17.271 15.119 17.845 15.5646667 18.2906667 16.134 18.608 16.7033333 18.9253333 17.3473333 19.084 18.066 19.084zM18.178 17.908C17.702 17.908 17.275 17.7983333 16.897 17.579 16.519 17.3596667 16.2203333 17.0516667 16.001 16.655 15.7816667 16.2583333 15.672 15.8033333 15.672 15.29 15.672 14.7766667 15.7816667 14.3216667 16.001 13.925 16.2203333 13.5283333 16.519 13.2226667 16.897 13.008 17.275 12.7933333 17.702 12.686 18.178 12.686 18.6446667 12.686 19.0693333 12.7933333 19.452 13.008 19.8346667 13.2226667 20.1333333 13.5283333 20.348 13.925 20.5626667 14.3216667 20.67 14.7766667 20.67 15.29 20.67 15.8033333 20.5626667 16.2583333 20.348 16.655 20.1333333 17.0516667 19.8346667 17.3596667 19.452 17.579 19.0693333 17.7983333 18.6446667 17.908 18.178 17.908zM18.752 38.084C19.3026667 38.084 19.8066667 37.9766667 20.264 37.762 20.7213333 37.5473333 21.0993333 37.2346667 21.398 36.824L21.398 36.824 21.398 38 22.686 38 22.686 27.612 21.342 27.612 21.342 31.7C21.0433333 31.308 20.67 31.0116667 20.222 30.811 19.774 30.6103333 19.284 30.51 18.752 30.51 18.0333333 30.51 17.3893333 30.6686667 16.82 30.986 16.2506667 31.3033333 15.805 31.7466667 15.483 32.316 15.161 32.8853333 15 33.5433333 15 34.29 15 35.0366667 15.161 35.697 15.483 36.271 15.805 36.845 16.2506667 37.2906667 16.82 37.608 17.3893333 37.9253333 18.0333333 38.084 18.752 38.084zM18.864 36.908C18.388 36.908 17.961 36.7983333 17.583 36.579 17.205 36.3596667 16.9063333 36.0516667 16.687 35.655 16.4676667 35.2583333 16.358 34.8033333 16.358 34.29 16.358 33.7766667 16.4676667 33.3216667 16.687 32.925 16.9063333 32.5283333 17.205 32.2226667 17.583 32.008 17.961 31.7933333 18.388 31.686 18.864 31.686 19.3306667 31.686 19.7553333 31.7933333 20.138 32.008 20.5206667 32.2226667 20.8193333 32.5283333 21.034 32.925 21.2486667 33.3216667 21.356 33.7766667 21.356 34.29 21.356 34.8033333 21.2486667 35.2583333 21.034 35.655 20.8193333 36.0516667 20.5206667 36.3596667 20.138 36.579 19.7553333 36.7983333 19.3306667 36.908 18.864 36.908z"></path><path  stroke-linecap="square" d="M14 22L34 22"></path></g></svg>',
          labelType: "svg",
          action: "\\frac{d{y}}{d{x}}{}"
        }
      ]
    },
    {
      color: "#31681c",
      actions: [
        {
          label: "%",
          labelType: "text",
          action: "%"
        },
        {
          label: "\xB1",
          labelType: "text",
          action: "\xB1"
        },
        {
          label: "\u2260",
          labelType: "text",
          action: "\\neq"
        },
        {
          label: "<",
          labelType: "text",
          action: "<"
        },
        {
          label: ">",
          labelType: "text",
          action: ">"
        },
        {
          label: "\u2220",
          labelType: "text",
          action: "\u2220"
        },
        {
          label: "\xB0",
          labelType: "text",
          action: "\\degree"
        },
        {
          label: "\u2218",
          labelType: "text",
          action: "\\circ"
        },
        {
          label: "\u2264",
          labelType: "text",
          action: "\u2264"
        },
        {
          label: "\u2265",
          labelType: "text",
          action: "\u2265"
        },
        {
          label: "\u22A5",
          labelType: "text",
          action: "\u22A5"
        },
        {
          label: "\u2225",
          labelType: "text",
          action: "\\parallel"
        },
        {
          label: "\u21D0",
          labelType: "text",
          action: "\u21D0"
        },
        {
          label: "\u21D2",
          labelType: "text",
          action: "\u21D2"
        },
        {
          label: "\u21D4",
          labelType: "text",
          action: "\u21D4"
        },
        {
          label: "~",
          labelType: "text",
          action: "~"
        },
        {
          label: "\u2248",
          labelType: "text",
          action: "\u2248"
        },
        {
          label: "\u2190",
          labelType: "text",
          action: "\u2190"
        },
        {
          label: "\u2192",
          labelType: "text",
          action: "\u2192"
        },
        {
          label: "\u2194",
          labelType: "text",
          action: "\u2194"
        }
      ]
    },
    {
      color: "#211167",
      actions: [
        {
          label: "\u2115",
          labelType: "text",
          action: "\u2115"
        },
        {
          label: "\u2124",
          labelType: "text",
          action: "\u2124"
        },
        {
          label: "\u211A",
          labelType: "text",
          action: "\u211A"
        },
        {
          label: "\u211D",
          labelType: "text",
          action: "\u211D"
        },
        {
          label: "\u2102",
          labelType: "text",
          action: "\u2102"
        },
        {
          label: "\u2200",
          labelType: "text",
          action: "\u2200"
        },
        {
          label: "\u2203",
          labelType: "text",
          action: "\u2203"
        },
        {
          label: "\u2208",
          labelType: "text",
          action: "\u2208"
        },
        {
          label: "\u2209",
          labelType: "text",
          action: "\u2209"
        },
        {
          label: "\u2205",
          labelType: "text",
          action: "\u2205"
        },
        {
          label: "\u2227",
          labelType: "text",
          action: "\u2227"
        },
        {
          label: "\u2228",
          labelType: "text",
          action: "\u2228"
        },
        {
          label: "\u2282",
          labelType: "text",
          action: "\u2282"
        },
        {
          label: "\u2284",
          labelType: "text",
          action: "\u2284"
        },
        {
          label: "\xAC",
          labelType: "text",
          action: "\\neg"
        },
        {
          label: "\u2229",
          labelType: "text",
          action: "\u2229"
        },
        {
          label: "\u222A",
          labelType: "text",
          action: "\u222A"
        },
        {
          label: "\u2286",
          labelType: "text",
          action: "\u2286"
        },
        {
          label: "\u2288",
          labelType: "text",
          action: "\u2288"
        },
        {
          label: "\\",
          labelType: "text",
          action: "\\backslash"
        }
      ]
    }
  ]
};
(function() {
  function P() {
  }
  function te(c) {
    var d = c.length - 1;
    return function() {
      var r = un.call(arguments, 0, d), s = un.call(arguments, d);
      return c.apply(this, r.concat([s]));
    };
  }
  function re(c) {
    return te(function(d, r) {
      typeof d != "function" && (d = cn(d));
      var s = function(l) {
        return d.apply(l, [l].concat(r));
      };
      return c.call(this, s);
    });
  }
  function v(c) {
    var d = un.call(arguments, 1);
    return function() {
      return c.apply(this, d);
    };
  }
  function ae(c, d) {
    if (!d)
      throw new Error("prayer failed: " + c);
  }
  function fe(c) {
    ae("a direction was passed", c === y || c === L);
  }
  function st(c, d, r) {
    ae("a parent is always present", c), ae("leftward is properly set up", function() {
      return d ? d[L] === r && d.parent === c : c.ends[y] === r;
    }()), ae("rightward is properly set up", function() {
      return r ? r[y] === d && r.parent === c : c.ends[L] === d;
    }());
  }
  function at() {
    window.console && console.warn(`You are using the MathQuill API without specifying an interface version, which will fail in v1.0.0. You can fix this easily by doing this before doing anything else:

    MathQuill = MathQuill.getInterface(1);
    // now MathQuill.MathField() works like it used to

See also the "\`dev\` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at
  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide`);
  }
  function Ue(c) {
    return at(), Bt(c);
  }
  function Je(c) {
    function d(b) {
      var T, C;
      return b && b.nodeType ? (T = ue(b).children(".mq-root-block").attr(ot), C = T && Ee.byId[T].controller, C ? s[C.KIND_OF_MQ](C) : null) : null;
    }
    function r(b, T) {
      var C, O, B;
      T && T.handlers && (T.handlers = { fns: T.handlers, APIClasses: s });
      for (C in T)
        T.hasOwnProperty(C) && (O = T[C], B = Ve[C], b[C] = B ? B(O) : O);
    }
    var s, l, g;
    if (!(c >= $t && Wt >= c))
      throw "Only interface versions between " + $t + " and " + Wt + " supported. You specified: " + c;
    s = {}, d.L = y, d.R = L, d.config = function(b) {
      return r(Ye.p, b), this;
    }, d.registerEmbed = function(b, T) {
      if (!/^[a-z][a-z0-9]*$/i.test(b))
        throw "Embed name must start with letter and be only letters and digits";
      Cn[b] = T;
    }, l = s.AbstractMathQuill = F(lt, function(b) {
      b.init = function(T) {
        this.__controller = T, this.__options = T.options, this.id = T.id, this.data = T.data;
      }, b.__mathquillify = function(T) {
        var C, O = this.__controller, B = O.root, H = O.container;
        O.createTextarea(), C = H.addClass(T).contents().detach(), B.jQ = ue('<span class="mq-root-block"/>').attr(ot, B.id).appendTo(H), this.latex(C.text()), this.revert = function() {
          return H.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(C);
        };
      }, b.config = function(T) {
        return r(this.__options, T), this;
      }, b.el = function() {
        return this.__controller.container[0];
      }, b.text = function() {
        return this.__controller.exportText();
      }, b.latex = function(T) {
        return arguments.length > 0 ? (this.__controller.renderLatexMath(T), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
      }, b.html = function() {
        return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "").replace(/ mq-hasCursor|mq-hasCursor ?/, "").replace(/ class=(""|(?= |>))/g, "");
      }, b.reflow = function() {
        return this.__controller.root.postOrder("reflow"), this;
      };
    }), d.prototype = l.prototype, s.EditableField = F(l, function(b, T) {
      b.__mathquillify = function() {
        return T.__mathquillify.apply(this, arguments), this.__controller.editable = !0, this.__controller.delegateMouseEvents(), this.__controller.editablesTextareaEvents(), this;
      }, b.focus = function() {
        return this.__controller.textarea.focus(), this;
      }, b.blur = function() {
        return this.__controller.textarea.blur(), this;
      }, b.write = function(C) {
        return this.__controller.writeLatex(C), this.__controller.scrollHoriz(), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this;
      }, b.cmd = function(C) {
        var O, B = this.__controller.notify(), H = B.cursor;
        return /^\\[a-z]+$/i.test(C) ? (C = C.slice(1), O = u[C], O && (C = O(C), H.selection && C.replaces(H.replaceSelection()), C.createLeftOf(H.show()), this.__controller.scrollHoriz())) : H.parent.write(H, C), B.blurred && H.hide().parent.blur(), this;
      }, b.select = function() {
        var C = this.__controller;
        for (C.notify("move").cursor.insAtRightEnd(C.root); C.cursor[y]; )
          C.selectLeft();
        return this;
      }, b.clearSelection = function() {
        return this.__controller.cursor.clearSelection(), this;
      }, b.moveToDirEnd = function(C) {
        return this.__controller.notify("move").cursor.insAtDirEnd(C, this.__controller.root), this;
      }, b.moveToLeftEnd = function() {
        return this.moveToDirEnd(y);
      }, b.moveToRightEnd = function() {
        return this.moveToDirEnd(L);
      }, b.keystroke = function(C) {
        var O;
        for (C = C.replace(/^\s+|\s+$/g, "").split(/\s+/), O = 0; O < C.length; O += 1)
          this.__controller.keystroke(C[O], { preventDefault: P });
        return this;
      }, b.typedText = function(C) {
        for (var O = 0; O < C.length; O += 1)
          this.__controller.typedText(C.charAt(O));
        return this;
      }, b.dropEmbedded = function(C, O, B) {
        var H, X = C - ue(window).scrollLeft(), U = O - ue(window).scrollTop(), I = document.elementFromPoint(X, U);
        this.__controller.seek(ue(I), C, O), H = sn().setOptions(B), H.createLeftOf(this.__controller.cursor);
      };
    }), d.EditableField = function() {
      throw "wtf don't call me, I'm 'abstract'";
    }, d.EditableField.prototype = s.EditableField.prototype;
    for (g in gt)
      (function(b, T) {
        var C = s[b] = T(s);
        d[b] = function(O, B) {
          var H, X = d(O);
          return X instanceof C || !O || !O.nodeType ? X : (H = Fe(C.RootBlock(), ue(O), Ye()), H.KIND_OF_MQ = b, C(H).__mathquillify(B, c));
        }, d[b].prototype = C.prototype;
      })(g, gt[g]);
    return d;
  }
  function _t(c) {
    var d, r = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" ");
    for (d = 0; d < r.length; d += 1)
      (function(s) {
        c[s] = function(l) {
          this.controller.handle(s, l);
        };
      })(r[d]);
    c.reflow = function() {
      this.controller.handle("reflow"), this.controller.handle("edited"), this.controller.handle("edit");
    };
  }
  function Q(c, d, r) {
    return F(Lt, { ctrlSeq: c, htmlTemplate: "<" + d + " " + r + ">&0</" + d + ">" });
  }
  function Nt(c) {
    var d = this.parent, r = c;
    do {
      if (r[L])
        return c.insLeftOf(d);
      r = r.parent.parent;
    } while (r !== d);
    c.insRightOf(d);
  }
  function i(c, d) {
    c.jQadd = function() {
      d.jQadd.apply(this, arguments), this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last")), this.contentjQ = this.jQ.children(":eq(1)");
    }, c.reflow = function() {
      var r = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
      $e(this.delimjQs, bn(1 + 0.2 * (r - 1), 1.2), 1.2 * r);
    };
  }
  function Pt(c, r) {
    var r = r || c, s = dt[c], l = dt[r];
    je[c] = v(Ge, y, c, s, r, l), je[s] = v(Ge, L, c, s, r, l);
  }
  var kt, $t, Wt, At, Y, Xt, Ne, Ut, ge, Ce, x, ee, Se, Gt, Lt, Ze, Ie, Yt, yn, we, Be, Pe, xe, Vt, Kt, Jt, ut, et, pt, ct, mt, tt, ht, $e, qt, Mt, Zt, wn, zt, Qt, Ae, Me, ft, en, tn, xn, nn, Ge, dt, rn, sn, Bt, on, ln = window.jQuery, an = "mathquill-command-id", ot = "mathquill-block-id", bn = Math.min, ze = Math.max, un = [].slice, cn = te(function(c, d) {
    return te(function(r, s) {
      return c in r ? r[c].apply(r, d.concat(s)) : void 0;
    });
  }), F = function(c, d, r) {
    function s(b) {
      return typeof b == "object";
    }
    function l(b) {
      return typeof b == "function";
    }
    function g() {
    }
    return function b(T, C) {
      function O() {
        var I = new B();
        return l(I.init) && I.init.apply(I, arguments), I;
      }
      function B() {
      }
      var H, X, U;
      return C === r && (C = T, T = Object), O.Bare = B, H = g[c] = T[c], X = B[c] = O[c] = O.p = new g(), X.constructor = O, O.mixin = function(I) {
        return B[c] = O[c] = b(O, I)[c], O;
      }, (O.open = function(I) {
        if (U = {}, l(I) ? U = I.call(O, X, H, O, T) : s(I) && (U = I), s(U))
          for (var ce in U)
            d.call(U, ce) && (X[ce] = U[ce]);
        return l(X.init) || (X.init = T), O;
      })(C);
    };
  }("prototype", {}.hasOwnProperty), y = -1, L = 1, ue = F(ln, function(c) {
    c.insDirOf = function(d, r) {
      return d === y ? this.insertBefore(r.first()) : this.insertAfter(r.last());
    }, c.insAtDirEnd = function(d, r) {
      return d === y ? this.prependTo(r) : this.appendTo(r);
    };
  }), We = F(function(c) {
    c.parent = 0, c[y] = 0, c[L] = 0, c.init = function(d, r, s) {
      this.parent = d, this[y] = r, this[L] = s;
    }, this.copy = function(d) {
      return We(d.parent, d[y], d[L]);
    };
  }), Ee = F(function(c) {
    function d() {
      return r += 1;
    }
    c[y] = 0, c[L] = 0, c.parent = 0;
    var r = 0;
    this.byId = {}, c.init = function() {
      this.id = d(), Ee.byId[this.id] = this, this.ends = {}, this.ends[y] = 0, this.ends[L] = 0;
    }, c.dispose = function() {
      delete Ee.byId[this.id];
    }, c.toString = function() {
      return "{{ MathQuill Node #" + this.id + " }}";
    }, c.jQ = ue(), c.jQadd = function(s) {
      return this.jQ = this.jQ.add(s);
    }, c.jQize = function(s) {
      function l(b) {
        var T, C;
        for (b.getAttribute && (T = b.getAttribute("mathquill-command-id"), C = b.getAttribute("mathquill-block-id"), T && Ee.byId[T].jQadd(b), C && Ee.byId[C].jQadd(b)), b = b.firstChild; b; b = b.nextSibling)
          l(b);
      }
      var g;
      for (s = ue(s || this.html()), g = 0; g < s.length; g += 1)
        l(s[g]);
      return s;
    }, c.createDir = function(s, l) {
      fe(s);
      var g = this;
      return g.jQize(), g.jQ.insDirOf(s, l.jQ), l[s] = g.adopt(l.parent, l[y], l[L]), g;
    }, c.createLeftOf = function(s) {
      return this.createDir(y, s);
    }, c.selectChildren = function(s, l) {
      return hn(s, l);
    }, c.bubble = re(function(s) {
      var l, g;
      for (l = this; l && (g = s(l), g !== !1); l = l.parent)
        ;
      return this;
    }), c.postOrder = re(function(s) {
      return function l(g) {
        g.eachChild(l), s(g);
      }(this), this;
    }), c.isEmpty = function() {
      return this.ends[y] === 0 && this.ends[L] === 0;
    }, c.children = function() {
      return Oe(this.ends[y], this.ends[L]);
    }, c.eachChild = function() {
      var s = this.children();
      return s.each.apply(s, arguments), this;
    }, c.foldChildren = function(s, l) {
      return this.children().fold(s, l);
    }, c.withDirAdopt = function(s, l, g, b) {
      return Oe(this, this).withDirAdopt(s, l, g, b), this;
    }, c.adopt = function(s, l, g) {
      return Oe(this, this).adopt(s, l, g), this;
    }, c.disown = function() {
      return Oe(this, this).disown(), this;
    }, c.remove = function() {
      return this.jQ.remove(), this.postOrder("dispose"), this.disown();
    };
  }), Oe = F(function(c) {
    c.init = function(d, r, s) {
      if (s === kt && (s = y), fe(s), ae("no half-empty fragments", !d == !r), this.ends = {}, d) {
        ae("withDir is passed to Fragment", d instanceof Ee), ae("oppDir is passed to Fragment", r instanceof Ee), ae("withDir and oppDir have the same parent", d.parent === r.parent), this.ends[s] = d, this.ends[-s] = r;
        var l = this.fold([], function(g, b) {
          return g.push.apply(g, b.jQ.get()), g;
        });
        this.jQ = this.jQ.add(l);
      }
    }, c.jQ = ue(), c.withDirAdopt = function(d, r, s, l) {
      return d === y ? this.adopt(r, s, l) : this.adopt(r, l, s);
    }, c.adopt = function(d, r, s) {
      var l, g, b;
      return st(d, r, s), l = this, l.disowned = !1, (g = l.ends[y]) ? (b = l.ends[L], r || (d.ends[y] = g), s ? s[y] = b : d.ends[L] = b, l.ends[L][L] = s, l.each(function(T) {
        T[y] = r, T.parent = d, r && (r[L] = T), r = T;
      }), l) : this;
    }, c.disown = function() {
      var d, r, s = this, l = s.ends[y];
      return !l || s.disowned || (s.disowned = !0, d = s.ends[L], r = l.parent, st(r, l[y], l), st(r, d, d[L]), l[y] ? l[y][L] = d[L] : r.ends[y] = d[L], d[L] ? d[L][y] = l[y] : r.ends[L] = l[y]), s;
    }, c.remove = function() {
      return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown();
    }, c.each = re(function(d) {
      var r, s = this, l = s.ends[y];
      if (!l)
        return s;
      for (; l !== s.ends[L][L] && (r = d(l), r !== !1); l = l[L])
        ;
      return s;
    }), c.fold = function(d, r) {
      return this.each(function(s) {
        d = r.call(this, d, s);
      }), d;
    };
  }), u = {}, je = {}, Tn = F(We, function(c) {
    c.init = function(d, r) {
      this.parent = d, this.options = r;
      var s = this.jQ = this._jQ = ue('<span class="mq-cursor">&#8203;</span>');
      this.blink = function() {
        s.toggleClass("mq-blink");
      }, this.upDownCache = {};
    }, c.show = function() {
      return this.jQ = this._jQ.removeClass("mq-blink"), "intervalId" in this ? clearInterval(this.intervalId) : (this[L] ? this.selection && this.selection.ends[y][y] === this[y] ? this.jQ.insertBefore(this.selection.jQ) : this.jQ.insertBefore(this[L].jQ.first()) : this.jQ.appendTo(this.parent.jQ), this.parent.focus()), this.intervalId = setInterval(this.blink, 500), this;
    }, c.hide = function() {
      return "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, this.jQ.detach(), this.jQ = ue(), this;
    }, c.withDirInsertAt = function(d, r, s, l) {
      var g = this.parent;
      this.parent = r, this[d] = s, this[-d] = l, g !== r && g.blur && g.blur();
    }, c.insDirOf = function(d, r) {
      return fe(d), this.jQ.insDirOf(d, r.jQ), this.withDirInsertAt(d, r.parent, r[d], r), this.parent.jQ.addClass("mq-hasCursor"), this;
    }, c.insLeftOf = function(d) {
      return this.insDirOf(y, d);
    }, c.insRightOf = function(d) {
      return this.insDirOf(L, d);
    }, c.insAtDirEnd = function(d, r) {
      return fe(d), this.jQ.insAtDirEnd(d, r.jQ), this.withDirInsertAt(d, r, 0, r.ends[d]), r.focus(), this;
    }, c.insAtLeftEnd = function(d) {
      return this.insAtDirEnd(y, d);
    }, c.insAtRightEnd = function(d) {
      return this.insAtDirEnd(L, d);
    }, c.jumpUpDown = function(d, r) {
      var s, l, g = this;
      g.upDownCache[d.id] = We.copy(g), s = g.upDownCache[r.id], s ? s[L] ? g.insLeftOf(s[L]) : g.insAtRightEnd(s.parent) : (l = g.offset().left, r.seek(l, g));
    }, c.offset = function() {
      var d = this, r = d.jQ.removeClass("mq-cursor").offset();
      return d.jQ.addClass("mq-cursor"), r;
    }, c.unwrapGramp = function() {
      var d = this.parent.parent, r = d.parent, s = d[L], l = this, g = d[y];
      if (d.disown().eachChild(function(b) {
        b.isEmpty() || (b.children().adopt(r, g, s).each(function(T) {
          T.jQ.insertBefore(d.jQ.first());
        }), g = b.ends[L]);
      }), !this[L])
        if (this[y])
          this[L] = this[y][L];
        else
          for (; !this[L]; ) {
            if (this.parent = this.parent[L], !this.parent) {
              this[L] = d[L], this.parent = r;
              break;
            }
            this[L] = this.parent.ends[y];
          }
      this[L] ? this.insLeftOf(this[L]) : this.insAtRightEnd(r), d.jQ.remove(), d[y].siblingDeleted && d[y].siblingDeleted(l.options, L), d[L].siblingDeleted && d[L].siblingDeleted(l.options, y);
    }, c.startSelection = function() {
      var d, r = this.anticursor = We.copy(this), s = r.ancestors = {};
      for (d = r; d.parent; d = d.parent)
        s[d.parent.id] = d;
    }, c.endSelection = function() {
      delete this.anticursor;
    }, c.select = function() {
      var d, r, s, l, g, b, T, C = this.anticursor;
      if (this[y] === C[y] && this.parent === C.parent)
        return !1;
      for (d = this; d.parent; d = d.parent)
        if (d.parent.id in C.ancestors) {
          r = d.parent;
          break;
        }
      if (ae("cursor and anticursor in the same tree", r), s = C.ancestors[r.id], b = L, d[y] !== s) {
        for (T = d; T; T = T[L])
          if (T[L] === s[L]) {
            b = y, l = d, g = s;
            break;
          }
      }
      return b === L && (l = s, g = d), l instanceof We && (l = l[L]), g instanceof We && (g = g[y]), this.hide().selection = r.selectChildren(l, g), this.insDirOf(b, this.selection.ends[b]), this.selectionChanged(), !0;
    }, c.clearSelection = function() {
      return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), this;
    }, c.deleteSelection = function() {
      this.selection && (this[y] = this.selection.ends[y][y], this[L] = this.selection.ends[L][L], this.selection.remove(), this.selectionChanged(), delete this.selection);
    }, c.replaceSelection = function() {
      var d = this.selection;
      return d && (this[y] = d.ends[y][y], this[L] = d.ends[L][L], delete this.selection), d;
    };
  }), hn = F(Oe, function(c, d) {
    c.init = function() {
      d.init.apply(this, arguments), this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent();
    }, c.adopt = function() {
      return this.jQ.replaceWith(this.jQ = this.jQ.children()), d.adopt.apply(this, arguments);
    }, c.clear = function() {
      return this.jQ.replaceWith(this.jQ[0].childNodes), this;
    }, c.join = function(r) {
      return this.fold("", function(s, l) {
        return s + l[r]();
      });
    };
  }), Fe = F(function(c) {
    c.init = function(r, s, l) {
      this.id = r.id, this.data = {}, this.root = r, this.container = s, this.options = l, r.controller = this, this.cursor = r.cursor = Tn(r, l);
    }, c.handle = function(r, s) {
      var l, g = this.options.handlers;
      g && g.fns[r] && (l = g.APIClasses[this.KIND_OF_MQ](this), s === y || s === L ? g.fns[r](s, l) : g.fns[r](l));
    };
    var d = [];
    this.onNotify = function(r) {
      d.push(r);
    }, c.notify = function() {
      for (var r = 0; r < d.length; r += 1)
        d[r].apply(this.cursor, arguments);
      return this;
    };
  }), gt = {}, Ye = F(), Ve = {}, lt = F(), Cn = {};
  Ue.prototype = lt.p, Ue.interfaceVersion = function(c) {
    if (c !== 1)
      throw "Only interface version 1 supported. You specified: " + c;
    return at = function() {
      window.console && console.warn(`You called MathQuill.interfaceVersion(1); to specify the interface version, which will fail in v1.0.0. You can fix this easily by doing this before doing anything else:

    MathQuill = MathQuill.getInterface(1);
    // now MathQuill.MathField() works like it used to

See also the "\`dev\` branch (2014\u20132015) \u2192 v0.10.0 Migration Guide" at
  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide`);
    }, at(), Ue;
  }, Ue.getInterface = Je, $t = Je.MIN = 1, Wt = Je.MAX = 2, Ue.noConflict = function() {
    return window.MathQuill = At, Ue;
  }, At = window.MathQuill, window.MathQuill = Ue, Y = F(function(c, d, r) {
    function s(T, C) {
      throw T = T ? "'" + T + "'" : "EOF", "Parse Error: " + C + " at " + T;
    }
    var l, g, b;
    c.init = function(T) {
      this._ = T;
    }, c.parse = function(T) {
      function C(O, B) {
        return B;
      }
      return this.skip(b)._("" + T, C, s);
    }, c.or = function(T) {
      ae("or is passed a parser", T instanceof r);
      var C = this;
      return r(function(O, B, H) {
        function X(U) {
          return T._(O, B, H);
        }
        return C._(O, B, X);
      });
    }, c.then = function(T) {
      var C = this;
      return r(function(O, B, H) {
        function X(U, I) {
          var ce = T instanceof r ? T : T(I);
          return ae("a parser is returned", ce instanceof r), ce._(U, B, H);
        }
        return C._(O, X, H);
      });
    }, c.many = function() {
      var T = this;
      return r(function(C, O, B) {
        function H(I, ce) {
          return C = I, U.push(ce), !0;
        }
        function X() {
          return !1;
        }
        for (var U = []; T._(C, H, X); )
          ;
        return O(C, U);
      });
    }, c.times = function(T, C) {
      arguments.length < 2 && (C = T);
      var O = this;
      return r(function(B, H, X) {
        function U(qe, se) {
          return ne.push(se), B = qe, !0;
        }
        function I(qe, se) {
          return be = se, B = qe, !1;
        }
        function ce(qe, se) {
          return !1;
        }
        var be, ke, ne = [], Le = !0;
        for (ke = 0; T > ke; ke += 1)
          if (Le = O._(B, U, I), !Le)
            return X(B, be);
        for (; C > ke && Le; ke += 1)
          Le = O._(B, U, ce);
        return H(B, ne);
      });
    }, c.result = function(T) {
      return this.then(g(T));
    }, c.atMost = function(T) {
      return this.times(0, T);
    }, c.atLeast = function(T) {
      var C = this;
      return C.times(T).then(function(O) {
        return C.many().map(function(B) {
          return O.concat(B);
        });
      });
    }, c.map = function(T) {
      return this.then(function(C) {
        return g(T(C));
      });
    }, c.skip = function(T) {
      return this.then(function(C) {
        return T.result(C);
      });
    }, this.string = function(T) {
      var C = T.length, O = "expected '" + T + "'";
      return r(function(B, H, X) {
        var U = B.slice(0, C);
        return U === T ? H(B.slice(C), U) : X(B, O);
      });
    }, l = this.regex = function(T) {
      ae("regexp parser is anchored", T.toString().charAt(1) === "^");
      var C = "expected " + T;
      return r(function(O, B, H) {
        var X, U = T.exec(O);
        return U ? (X = U[0], B(O.slice(X.length), X)) : H(O, C);
      });
    }, g = r.succeed = function(T) {
      return r(function(C, O) {
        return O(C, T);
      });
    }, r.fail = function(T) {
      return r(function(C, O, B) {
        return B(C, T);
      });
    }, r.letter = l(/^[a-z]/i), r.letters = l(/^[a-z]*/i), r.digit = l(/^[0-9]/), r.digits = l(/^[0-9]*/), r.whitespace = l(/^\s+/), r.optWhitespace = l(/^\s*/), r.any = r(function(T, C, O) {
      return T ? C(T.slice(1), T.charAt(0)) : O(T, "expected any character");
    }), r.all = r(function(T, C, O) {
      return C("", T);
    }), b = r.eof = r(function(T, C, O) {
      return T ? O(T, "expected EOF") : C(T, T);
    });
  }), Xt = function() {
    function c(r) {
      var s, l = r.which || r.keyCode, g = d[l], b = [];
      return r.ctrlKey && b.push("Ctrl"), r.originalEvent && r.originalEvent.metaKey && b.push("Meta"), r.altKey && b.push("Alt"), r.shiftKey && b.push("Shift"), s = g || String.fromCharCode(l), b.length || g ? (b.push(s), b.join("-")) : s;
    }
    var d = {
      8: "Backspace",
      9: "Tab",
      10: "Enter",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      20: "CapsLock",
      27: "Esc",
      32: "Spacebar",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      45: "Insert",
      46: "Del",
      144: "NumLock"
    };
    return function(r, s) {
      function l(se) {
        qe = se, clearTimeout(I), I = setTimeout(se);
      }
      function g(se) {
        qe(), qe = P, clearTimeout(I), ne.val(se), se && ne[0].select && ne[0].select(), ce = !!se;
      }
      function b() {
        var se = ne[0];
        return "selectionStart" in se ? se.selectionStart !== se.selectionEnd : !1;
      }
      function T() {
        s.keystroke(c(be), be);
      }
      function C(se) {
        be = se, ke = null, ce && l(function(fn) {
          fn && fn.type === "focusout" || !ne[0].select || ne[0].select(), qe = P, clearTimeout(I);
        }), T();
      }
      function O(se) {
        be && ke && T(), ke = se, l(B);
      }
      function B() {
        if (!b()) {
          var se = ne.val();
          se.length === 1 ? (ne.val(""), s.typedText(se)) : se && ne[0].select && ne[0].select();
        }
      }
      function H() {
        be = ke = null;
      }
      function X(se) {
        ne.focus(), l(U);
      }
      function U() {
        var se = ne.val();
        ne.val(""), se && s.paste(se);
      }
      var I, ce, be = null, ke = null, ne = ln(r), Le = ln(s.container || ne), qe = P;
      return Le.bind("keydown keypress input keyup focusout paste", function(se) {
        qe(se);
      }), ce = !1, Le.bind({ keydown: C, keypress: O, focusout: H, paste: X }), { select: g };
    };
  }(), Fe.open(function(c, d) {
    c.exportText = function() {
      return this.root.foldChildren("", function(r, s) {
        return r + s.text();
      });
    };
  }), Fe.open(function(c) {
    c.focusBlurEvents = function() {
      function d() {
        clearTimeout(s), b.selection && b.selection.jQ.addClass("mq-blur"), r();
      }
      function r() {
        b.hide().parent.blur(), l.container.removeClass("mq-focused"), ue(window).off("blur", d);
      }
      var s, l = this, g = l.root, b = l.cursor;
      l.textarea.focus(function() {
        l.blurred = !1, clearTimeout(s), l.container.addClass("mq-focused"), b.parent || b.insAtRightEnd(g), b.selection ? (b.selection.jQ.removeClass("mq-blur"), l.selectionChanged()) : b.show();
      }).blur(function() {
        l.blurred = !0, s = setTimeout(function() {
          g.postOrder("intentionalBlur"), b.clearSelection().endSelection(), r();
        }), ue(window).on("blur", d);
      }), l.blurred = !0, b.hide().parent.blur();
    };
  }), Fe.open(function(c) {
    c.keystroke = function(d, r) {
      this.cursor.parent.keystroke(d, r, this);
    };
  }), Ee.open(function(c) {
    c.keystroke = function(d, r, s) {
      var l = s.cursor;
      switch (d) {
        case "Ctrl-Shift-Backspace":
        case "Ctrl-Backspace":
          s.ctrlDeleteDir(y);
          break;
        case "Shift-Backspace":
        case "Backspace":
          s.backspace();
          break;
        case "Esc":
        case "Tab":
          return void s.escapeDir(L, d, r);
        case "Shift-Tab":
        case "Shift-Esc":
          return void s.escapeDir(y, d, r);
        case "End":
          s.notify("move").cursor.insAtRightEnd(l.parent);
          break;
        case "Ctrl-End":
          s.notify("move").cursor.insAtRightEnd(s.root);
          break;
        case "Shift-End":
          for (; l[L]; )
            s.selectRight();
          break;
        case "Ctrl-Shift-End":
          for (; l[L] || l.parent !== s.root; )
            s.selectRight();
          break;
        case "Home":
          s.notify("move").cursor.insAtLeftEnd(l.parent);
          break;
        case "Ctrl-Home":
          s.notify("move").cursor.insAtLeftEnd(s.root);
          break;
        case "Shift-Home":
          for (; l[y]; )
            s.selectLeft();
          break;
        case "Ctrl-Shift-Home":
          for (; l[y] || l.parent !== s.root; )
            s.selectLeft();
          break;
        case "Left":
          s.moveLeft();
          break;
        case "Shift-Left":
          s.selectLeft();
          break;
        case "Ctrl-Left":
          break;
        case "Right":
          s.moveRight();
          break;
        case "Shift-Right":
          s.selectRight();
          break;
        case "Ctrl-Right":
          break;
        case "Up":
          s.moveUp();
          break;
        case "Down":
          s.moveDown();
          break;
        case "Shift-Up":
          if (l[y])
            for (; l[y]; )
              s.selectLeft();
          else
            s.selectLeft();
        case "Shift-Down":
          if (l[L])
            for (; l[L]; )
              s.selectRight();
          else
            s.selectRight();
        case "Ctrl-Up":
          break;
        case "Ctrl-Down":
          break;
        case "Ctrl-Shift-Del":
        case "Ctrl-Del":
          s.ctrlDeleteDir(L);
          break;
        case "Shift-Del":
        case "Del":
          s.deleteForward();
          break;
        case "Meta-A":
        case "Ctrl-A":
          for (s.notify("move").cursor.insAtRightEnd(s.root); l[y]; )
            s.selectLeft();
          break;
        default:
          return;
      }
      r.preventDefault(), s.scrollHoriz();
    }, c.moveOutOf = c.moveTowards = c.deleteOutOf = c.deleteTowards = c.unselectInto = c.selectOutOf = c.selectTowards = function() {
      ae("overridden or never called on this node");
    };
  }), Fe.open(function(c) {
    function d(r, s) {
      var l = r.notify("upDown").cursor, g = s + "Into", b = s + "OutOf";
      return l[L][g] ? l.insAtLeftEnd(l[L][g]) : l[y][g] ? l.insAtRightEnd(l[y][g]) : l.parent.bubble(function(T) {
        var C = T[b];
        return C && (typeof C == "function" && (C = T[b](l)), C instanceof Ee && l.jumpUpDown(T, C), C !== !0) ? !1 : void 0;
      }), r;
    }
    this.onNotify(function(r) {
      (r === "move" || r === "upDown") && this.show().clearSelection();
    }), c.escapeDir = function(r, s, l) {
      fe(r);
      var g = this.cursor;
      return g.parent !== this.root && l.preventDefault(), g.parent !== this.root ? (g.parent.moveOutOf(r, g), this.notify("move")) : void 0;
    }, Ve.leftRightIntoCmdGoes = function(r) {
      if (r && r !== "up" && r !== "down")
        throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + r + '"';
      return r;
    }, c.moveDir = function(r) {
      fe(r);
      var s = this.cursor, l = s.options.leftRightIntoCmdGoes;
      return s.selection ? s.insDirOf(r, s.selection.ends[r]) : s[r] ? s[r].moveTowards(r, s, l) : s.parent.moveOutOf(r, s, l), this.notify("move");
    }, c.moveLeft = function() {
      return this.moveDir(y);
    }, c.moveRight = function() {
      return this.moveDir(L);
    }, c.moveUp = function() {
      return d(this, "up");
    }, c.moveDown = function() {
      return d(this, "down");
    }, this.onNotify(function(r) {
      r !== "upDown" && (this.upDownCache = {});
    }), this.onNotify(function(r) {
      r === "edit" && this.show().deleteSelection();
    }), c.deleteDir = function(r) {
      var s, l;
      return fe(r), s = this.cursor, l = s.selection, this.notify("edit"), l || (s[r] ? s[r].deleteTowards(r, s) : s.parent.deleteOutOf(r, s)), s[y].siblingDeleted && s[y].siblingDeleted(s.options, L), s[L].siblingDeleted && s[L].siblingDeleted(s.options, y), s.parent.bubble("reflow"), this;
    }, c.ctrlDeleteDir = function(r) {
      fe(r);
      var s = this.cursor;
      return !s[y] || s.selection ? ctrlr.deleteDir() : (this.notify("edit"), Oe(s.parent.ends[y], s[y]).remove(), s.insAtDirEnd(y, s.parent), s[y].siblingDeleted && s[y].siblingDeleted(s.options, L), s[L].siblingDeleted && s[L].siblingDeleted(s.options, y), s.parent.bubble("reflow"), this);
    }, c.backspace = function() {
      return this.deleteDir(y);
    }, c.deleteForward = function() {
      return this.deleteDir(L);
    }, this.onNotify(function(r) {
      r !== "select" && this.endSelection();
    }), c.selectDir = function(r) {
      var s, l = this.notify("select").cursor, g = l.selection;
      fe(r), l.anticursor || l.startSelection(), s = l[r], s ? g && g.ends[r] === s && l.anticursor[-r] !== s ? s.unselectInto(r, l) : s.selectTowards(r, l) : l.parent.selectOutOf(r, l), l.clearSelection(), l.select() || l.show();
    }, c.selectLeft = function() {
      return this.selectDir(y);
    }, c.selectRight = function() {
      return this.selectDir(L);
    };
  }), Ne = function() {
    function c(ne) {
      var Le = Se();
      return ne.adopt(Le, 0, 0), Le;
    }
    function d(ne) {
      var Le, qe = ne[0] || Se();
      for (Le = 1; Le < ne.length; Le += 1)
        ne[Le].children().adopt(qe, qe.ends[L], 0);
      return qe;
    }
    var r = Y.string, s = Y.regex, l = Y.letter, g = Y.any, b = Y.optWhitespace, T = Y.succeed, C = Y.fail, O = l.map(function(ne) {
      return Be(ne);
    }), B = s(/^[^${}\\_^]/).map(function(ne) {
      return x(ne);
    }), H = s(/^[^\\a-eg-zA-Z]/).or(r("\\").then(s(/^[a-z]+/i).or(s(/^\s+/).result(" ")).or(g))).then(function(ne) {
      var Le = u[ne];
      return Le ? Le(ne).parser() : C("unknown command: \\" + ne);
    }), X = H.or(O).or(B), U = r("{").then(function() {
      return ce;
    }).skip(r("}")), I = b.then(U.or(X.map(c))), ce = I.many().map(d).skip(b), be = r("[").then(I.then(function(ne) {
      return ne.join("latex") !== "]" ? T(ne) : C();
    }).many().map(d).skip(b)).skip(r("]")), ke = ce;
    return ke.block = I, ke.optBlock = be, ke;
  }(), Fe.open(function(c, d) {
    c.exportLatex = function() {
      return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1");
    }, c.writeLatex = function(r) {
      var s, l = this.notify("edit").cursor, g = Y.all, b = Y.eof, T = Ne.skip(b).or(g.result(!1)).parse(r);
      return T && !T.isEmpty() && (T.children().adopt(l.parent, l[y], l[L]), s = T.jQize(), s.insertBefore(l.jQ), l[y] = T.ends[L], T.finalizeInsert(l.options, l), T.ends[L][L].siblingCreated && T.ends[L][L].siblingCreated(l.options, y), T.ends[y][y].siblingCreated && T.ends[y][y].siblingCreated(l.options, L), l.parent.bubble("reflow")), this;
    }, c.renderLatexMath = function(r) {
      var s, l, g = this.root, b = this.cursor, T = Y.all, C = Y.eof, O = Ne.skip(C).or(T.result(!1)).parse(r);
      g.eachChild("postOrder", "dispose"), g.ends[y] = g.ends[L] = 0, O && O.children().adopt(g, 0, 0), s = g.jQ, O ? (l = O.join("html"), s.html(l), g.jQize(s.children()), g.finalizeInsert(b.options)) : s.empty(), delete b.selection, b.insAtRightEnd(g);
    }, c.renderLatexText = function(r) {
      var s, l, g, b, T, C, O, B, H, X, U = this.root, I = this.cursor;
      if (U.jQ.children().slice(1).remove(), U.eachChild("postOrder", "dispose"), U.ends[y] = U.ends[L] = 0, delete I.selection, I.show().insAtRightEnd(U), s = Y.regex, l = Y.string, g = Y.eof, b = Y.all, T = l("$").then(Ne).skip(l("$").or(g)).map(function(ce) {
        var be, ke = Ie(I);
        return ke.createBlocks(), be = ke.ends[y], ce.children().adopt(be, 0, 0), ke;
      }), C = l("\\$").result("$"), O = C.or(s(/^[^$]/)).map(x), B = T.or(O).many(), H = B.skip(g).or(b.result(!1)).parse(r)) {
        for (X = 0; X < H.length; X += 1)
          H[X].adopt(U, U.ends[L], 0);
        U.jQize().appendTo(U.jQ), U.finalizeInsert(I.options);
      }
    };
  }), Fe.open(function(c) {
    c.delegateMouseEvents = function() {
      var d = this.root.jQ;
      this.container.bind("mousedown.mathquill", function(r) {
        function s(I) {
          b = ue(I.target);
        }
        function l(I) {
          B.anticursor || B.startSelection(), O.seek(b, I.pageX, I.pageY).cursor.select(), b = kt;
        }
        function g(I) {
          B.blink = H, B.selection || (O.editable ? B.show() : X.detach()), T.unbind("mousemove", s), ue(I.target.ownerDocument).unbind("mousemove", l).unbind("mouseup", g);
        }
        var b, T = ue(r.target).closest(".mq-root-block"), C = Ee.byId[T.attr(ot) || d.attr(ot)], O = C.controller, B = O.cursor, H = B.blink, X = O.textareaSpan, U = O.textarea;
        O.blurred && (O.editable || T.prepend(X), U.focus()), r.preventDefault(), r.target.unselectable = !0, B.blink = P, O.seek(ue(r.target), r.pageX, r.pageY).cursor.startSelection(), T.mousemove(s), ue(r.target.ownerDocument).mousemove(l).mouseup(g);
      });
    };
  }), Fe.open(function(c) {
    c.seek = function(d, r, s) {
      var l, g, b, T = this.notify("select").cursor;
      return d && (l = d.attr(ot) || d.attr(an), l || (g = d.parent(), l = g.attr(ot) || g.attr(an))), b = l ? Ee.byId[l] : this.root, ae("nodeId is the id of some Node that exists", b), T.clearSelection().show(), b.seek(r, T), this.scrollHoriz(), this;
    };
  }), Fe.open(function(c) {
    c.scrollHoriz = function() {
      var d, r, s, l, g, b = this.cursor, T = b.selection, C = this.root.jQ[0].getBoundingClientRect();
      if (T)
        if (s = T.jQ[0].getBoundingClientRect(), l = s.left - (C.left + 20), g = s.right - (C.right - 20), T.ends[y] === b[L])
          if (0 > l)
            r = l;
          else {
            if (!(g > 0))
              return;
            r = s.left - g < C.left + 20 ? l : g;
          }
        else if (g > 0)
          r = g;
        else {
          if (!(0 > l))
            return;
          r = s.right - l > C.right - 20 ? g : l;
        }
      else if (d = b.jQ[0].getBoundingClientRect().left, d > C.right - 20)
        r = d - (C.right - 20);
      else {
        if (!(d < C.left + 20))
          return;
        r = d - (C.left + 20);
      }
      this.root.jQ.stop().animate({ scrollLeft: "+=" + r }, 100);
    };
  }), Fe.open(function(c) {
    Ye.p.substituteTextarea = function() {
      return ue("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0];
    }, c.createTextarea = function() {
      var d, r = this.textareaSpan = ue('<span class="mq-textarea"></span>'), s = this.options.substituteTextarea();
      if (!s.nodeType)
        throw "substituteTextarea() must return a DOM element, got " + s;
      s = this.textarea = ue(s).appendTo(r), d = this, d.cursor.selectionChanged = function() {
        d.selectionChanged();
      }, d.container.bind("copy", function() {
        d.setTextareaSelection();
      });
    }, c.selectionChanged = function() {
      var d = this;
      qt(d.container[0]), d.textareaSelectionTimeout === kt && (d.textareaSelectionTimeout = setTimeout(function() {
        d.setTextareaSelection();
      }));
    }, c.setTextareaSelection = function() {
      this.textareaSelectionTimeout = kt;
      var d = "";
      this.cursor.selection && (d = this.cursor.selection.join("latex"), this.options.statelessClipboard && (d = "$" + d + "$")), this.selectFn(d);
    }, c.staticMathTextareaEvents = function() {
      function d() {
        g.detach(), r.blurred = !0;
      }
      var r = this, s = (r.root, r.cursor), l = r.textarea, g = r.textareaSpan;
      this.container.prepend('<span class="mq-selectable">$' + r.exportLatex() + "$</span>"), r.blurred = !0, l.bind("cut paste", !1).focus(function() {
        r.blurred = !1;
      }).blur(function() {
        s.selection && s.selection.clear(), setTimeout(d);
      }), r.selectFn = function(b) {
        l.val(b), b && l.select();
      };
    }, c.editablesTextareaEvents = function() {
      var d = this, r = (d.root, d.cursor), s = d.textarea, l = d.textareaSpan, g = Xt(s, this);
      this.selectFn = function(b) {
        g.select(b);
      }, this.container.prepend(l).on("cut", function(b) {
        r.selection && setTimeout(function() {
          d.notify("edit"), r.parent.bubble("reflow");
        });
      }), this.focusBlurEvents();
    }, c.typedText = function(d) {
      if (d === `
`)
        return this.handle("enter");
      var r = this.notify().cursor;
      r.parent.write(r, d), this.scrollHoriz();
    }, c.paste = function(d) {
      this.options.statelessClipboard && (d = d.slice(0, 1) === "$" && d.slice(-1) === "$" ? d.slice(1, -1) : "\\text{" + d + "}"), this.writeLatex(d).cursor.show();
    };
  }), Ut = F(Ee, function(c, d) {
    c.finalizeInsert = function(r, s) {
      var l = this;
      l.postOrder("finalizeTree", r), l.postOrder("contactWeld", s), l.postOrder("blur"), l.postOrder("reflow"), l[L].siblingCreated && l[L].siblingCreated(r, y), l[y].siblingCreated && l[y].siblingCreated(r, L), l.bubble("reflow");
    };
  }), ge = F(Ut, function(c, d) {
    c.init = function(r, s, l) {
      var g = this;
      d.init.call(g), g.ctrlSeq || (g.ctrlSeq = r), s && (g.htmlTemplate = s), l && (g.textTemplate = l);
    }, c.replaces = function(r) {
      r.disown(), this.replacedFragment = r;
    }, c.isEmpty = function() {
      return this.foldChildren(!0, function(r, s) {
        return r && s.isEmpty();
      });
    }, c.parser = function() {
      var r = Ne.block, s = this;
      return r.times(s.numBlocks()).map(function(l) {
        s.blocks = l;
        for (var g = 0; g < l.length; g += 1)
          l[g].adopt(s, s.ends[L], 0);
        return s;
      });
    }, c.createLeftOf = function(r) {
      var s = this, l = s.replacedFragment;
      s.createBlocks(), d.createLeftOf.call(s, r), l && (l.adopt(s.ends[y], 0, 0), l.jQ.appendTo(s.ends[y].jQ)), s.finalizeInsert(r.options), s.placeCursor(r);
    }, c.createBlocks = function() {
      var r, s, l = this, g = l.numBlocks(), b = l.blocks = Array(g);
      for (r = 0; g > r; r += 1)
        s = b[r] = Se(), s.adopt(l, l.ends[L], 0);
    }, c.placeCursor = function(r) {
      r.insAtRightEnd(this.foldChildren(this.ends[y], function(s, l) {
        return s.isEmpty() ? s : l;
      }));
    }, c.moveTowards = function(r, s, l) {
      var g = l && this[l + "Into"];
      s.insAtDirEnd(-r, g || this.ends[-r]);
    }, c.deleteTowards = function(r, s) {
      this.isEmpty() ? s[r] = this.remove()[r] : this.moveTowards(r, s, null);
    }, c.selectTowards = function(r, s) {
      s[-r] = this, s[r] = this[r];
    }, c.selectChildren = function() {
      return hn(this, this);
    }, c.unselectInto = function(r, s) {
      s.insAtDirEnd(-r, s.anticursor.ancestors[this.id]);
    }, c.seek = function(r, s) {
      function l(C) {
        var O = {};
        return O[y] = C.jQ.offset().left, O[L] = O[y] + C.jQ.outerWidth(), O;
      }
      var g, b = this, T = l(b);
      return r < T[y] ? s.insLeftOf(b) : r > T[L] ? s.insRightOf(b) : (g = T[y], void b.eachChild(function(C) {
        var O = l(C);
        return r < O[y] ? (r - g < O[y] - r ? C[y] ? s.insAtRightEnd(C[y]) : s.insLeftOf(b) : s.insAtLeftEnd(C), !1) : r > O[L] ? void (C[L] ? g = O[L] : T[L] - r < r - O[L] ? s.insRightOf(b) : s.insAtRightEnd(C)) : (C.seek(r, s), !1);
      }));
    }, c.numBlocks = function() {
      var r = this.htmlTemplate.match(/&\d+/g);
      return r ? r.length : 0;
    }, c.html = function() {
      var r, s, l, g = this, b = g.blocks, T = " mathquill-command-id=" + g.id, C = g.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
      for (ae("no unmatched angle brackets", C.join("") === this.htmlTemplate), r = 0, s = C[0]; s; r += 1, s = C[r])
        if (s.slice(-2) === "/>")
          C[r] = s.slice(0, -2) + T + "/>";
        else if (s.charAt(0) === "<") {
          ae("not an unmatched top-level close tag", s.charAt(1) !== "/"), C[r] = s.slice(0, -1) + T + ">", l = 1;
          do
            r += 1, s = C[r], ae("no missing close tags", s), s.slice(0, 2) === "</" ? l -= 1 : s.charAt(0) === "<" && s.slice(-2) !== "/>" && (l += 1);
          while (l > 0);
        }
      return C.join("").replace(/>&(\d+)/g, function(O, B) {
        return " mathquill-block-id=" + b[B].id + ">" + b[B].join("html");
      });
    }, c.latex = function() {
      return this.foldChildren(this.ctrlSeq, function(r, s) {
        return r + "{" + (s.latex() || " ") + "}";
      });
    }, c.textTemplate = [""], c.text = function() {
      var r = this, s = 0;
      return r.foldChildren(r.textTemplate[s], function(l, g) {
        s += 1;
        var b = g.text();
        return l && r.textTemplate[s] === "(" && b[0] === "(" && b.slice(-1) === ")" ? l + b.slice(1, -1) + r.textTemplate[s] : l + g.text() + (r.textTemplate[s] || "");
      });
    };
  }), Ce = F(ge, function(c, d) {
    c.init = function(r, s, l) {
      l || (l = r && r.length > 1 ? r.slice(1) : r), d.init.call(this, r, s, [l]);
    }, c.parser = function() {
      return Y.succeed(this);
    }, c.numBlocks = function() {
      return 0;
    }, c.replaces = function(r) {
      r.remove();
    }, c.createBlocks = P, c.moveTowards = function(r, s) {
      s.jQ.insDirOf(r, this.jQ), s[-r] = this, s[r] = this[r];
    }, c.deleteTowards = function(r, s) {
      s[r] = this.remove()[r];
    }, c.seek = function(r, s) {
      r - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? s.insLeftOf(this) : s.insRightOf(this);
    }, c.latex = function() {
      return this.ctrlSeq;
    }, c.text = function() {
      return this.textTemplate;
    }, c.placeCursor = P, c.isEmpty = function() {
      return !0;
    };
  }), x = F(Ce, function(c, d) {
    c.init = function(r, s) {
      d.init.call(this, r, "<span>" + (s || r) + "</span>");
    };
  }), ee = F(Ce, function(c, d) {
    c.init = function(r, s, l) {
      d.init.call(this, r, '<span class="mq-binary-operator">' + s + "</span>", l);
    };
  }), Se = F(Ut, function(c, d) {
    c.join = function(r) {
      return this.foldChildren("", function(s, l) {
        return s + l[r]();
      });
    }, c.html = function() {
      return this.join("html");
    }, c.latex = function() {
      return this.join("latex");
    }, c.text = function() {
      return this.ends[y] === this.ends[L] && this.ends[y] !== 0 ? this.ends[y].text() : this.join("text");
    }, c.keystroke = function(r, s, l) {
      return !l.options.spaceBehavesLikeTab || r !== "Spacebar" && r !== "Shift-Spacebar" ? d.keystroke.apply(this, arguments) : (s.preventDefault(), void l.escapeDir(r === "Shift-Spacebar" ? y : L, r, s));
    }, c.moveOutOf = function(r, s, l) {
      var g = l && this.parent[l + "Into"];
      !g && this[r] ? s.insAtDirEnd(-r, this[r]) : s.insDirOf(r, this.parent);
    }, c.selectOutOf = function(r, s) {
      s.insDirOf(r, this.parent);
    }, c.deleteOutOf = function(r, s) {
      s.unwrapGramp();
    }, c.seek = function(r, s) {
      var l = this.ends[L];
      if (!l || l.jQ.offset().left + l.jQ.outerWidth() < r)
        return s.insAtRightEnd(this);
      if (r < this.ends[y].jQ.offset().left)
        return s.insAtLeftEnd(this);
      for (; r < l.jQ.offset().left; )
        l = l[y];
      return l.seek(r, s);
    }, c.chToCmd = function(r) {
      var s;
      return r.match(/^[a-eg-zA-Z]$/) ? Be(r) : /^\d$/.test(r) ? yn(r) : (s = je[r] || u[r]) ? s(r) : x(r);
    }, c.write = function(r, s) {
      var l = this.chToCmd(s);
      r.selection && l.replaces(r.replaceSelection()), l.createLeftOf(r.show());
    }, c.focus = function() {
      return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this;
    }, c.blur = function() {
      return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), this;
    };
  }), gt.StaticMath = function(c) {
    return F(c.AbstractMathQuill, function(d, r) {
      this.RootBlock = Se, d.__mathquillify = function() {
        return r.__mathquillify.call(this, "mq-math-mode"), this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents(), this;
      }, d.init = function() {
        r.init.apply(this, arguments), this.__controller.root.postOrder("registerInnerField", this.innerFields = [], c.MathField);
      }, d.latex = function() {
        var s = r.latex.apply(this, arguments);
        return arguments.length > 0 && this.__controller.root.postOrder("registerInnerField", this.innerFields = [], c.MathField), s;
      };
    });
  }, Gt = F(Se, _t), gt.MathField = function(c) {
    return F(c.EditableField, function(d, r) {
      this.RootBlock = Gt, d.__mathquillify = function(s, l) {
        return this.config(s), l > 1 && (this.__controller.root.reflow = P), r.__mathquillify.call(this, "mq-editable-field mq-math-mode"), delete this.__controller.root.reflow, this;
      };
    });
  }, Lt = F(Ee, function(c, d) {
    function r(s) {
      var l, g;
      return s.jQ[0].normalize(), l = s.jQ[0].firstChild, ae("only node in TextBlock span is Text node", l.nodeType === 3), g = Ze(l.data), g.jQadd(l), s.children().disown(), g.adopt(s, 0, 0);
    }
    c.ctrlSeq = "\\text", c.replaces = function(s) {
      s instanceof Oe ? this.replacedText = s.remove().jQ.text() : typeof s == "string" && (this.replacedText = s);
    }, c.jQadd = function(s) {
      d.jQadd.call(this, s), this.ends[y] && this.ends[y].jQadd(this.jQ[0].firstChild);
    }, c.createLeftOf = function(s) {
      var l, g = this;
      if (d.createLeftOf.call(this, s), g[L].siblingCreated && g[L].siblingCreated(s.options, y), g[y].siblingCreated && g[y].siblingCreated(s.options, L), g.bubble("reflow"), s.insAtRightEnd(g), g.replacedText)
        for (l = 0; l < g.replacedText.length; l += 1)
          g.write(s, g.replacedText.charAt(l));
    }, c.parser = function() {
      var s = this, l = Y.string, g = Y.regex, b = Y.optWhitespace;
      return b.then(l("{")).then(g(/^[^}]*/)).skip(l("}")).map(function(T) {
        return Ze(T).adopt(s, 0, 0), s;
      });
    }, c.textContents = function() {
      return this.foldChildren("", function(s, l) {
        return s + l.text;
      });
    }, c.text = function() {
      return '"' + this.textContents() + '"';
    }, c.latex = function() {
      return "\\text{" + this.textContents() + "}";
    }, c.html = function() {
      return '<span class="mq-text-mode" mathquill-command-id=' + this.id + ">" + this.textContents() + "</span>";
    }, c.moveTowards = function(s, l) {
      l.insAtDirEnd(-s, this);
    }, c.moveOutOf = function(s, l) {
      l.insDirOf(s, this);
    }, c.unselectInto = c.moveTowards, c.selectTowards = ge.prototype.selectTowards, c.deleteTowards = ge.prototype.deleteTowards, c.selectOutOf = function(s, l) {
      l.insDirOf(s, this);
    }, c.deleteOutOf = function(s, l) {
      this.isEmpty() && l.insRightOf(this);
    }, c.write = function(s, l) {
      var g, b;
      s.show().deleteSelection(), l !== "$" ? s[y] ? s[y].appendText(l) : Ze(l).createLeftOf(s) : this.isEmpty() ? (s.insRightOf(this), x("\\$", "$").createLeftOf(s)) : s[L] ? s[y] ? (g = Lt(), b = this.ends[y], b.disown(), b.adopt(g, 0, 0), s.insLeftOf(this), d.createLeftOf.call(g, s)) : s.insLeftOf(this) : s.insRightOf(this);
    }, c.seek = function(s, l) {
      var g, b, T, C, O, B, H, X;
      for (l.hide(), g = r(this), b = this.jQ.width() / this.text.length, T = Math.round((s - this.jQ.offset().left) / b), 0 >= T ? l.insAtLeftEnd(this) : T >= g.text.length ? l.insAtRightEnd(this) : l.insLeftOf(g.splitRight(T)), C = s - l.show().offset().left, O = C && 0 > C ? y : L, B = O; l[O] && C * B > 0; )
        l[O].moveTowards(O, l), B = C, C = s - l.offset().left;
      -O * B > O * C && l[-O].moveTowards(-O, l), l.anticursor ? l.anticursor.parent === this && (H = l[y] && l[y].text.length, this.anticursorPosition === H ? l.anticursor = We.copy(l) : (this.anticursorPosition < H ? (X = l[y].splitRight(this.anticursorPosition), l[y] = X) : X = l[L].splitRight(this.anticursorPosition - H), l.anticursor = We(this, X[y], X))) : this.anticursorPosition = l[y] && l[y].text.length;
    }, c.blur = function() {
      Se.prototype.blur.call(this), r(this);
    }, c.focus = Se.prototype.focus;
  }), Ze = F(Ee, function(c, d) {
    function r(s, l) {
      return l.charAt(s === y ? 0 : -1 + l.length);
    }
    c.init = function(s) {
      d.init.call(this), this.text = s;
    }, c.jQadd = function(s) {
      this.dom = s, this.jQ = ue(s);
    }, c.jQize = function() {
      return this.jQadd(document.createTextNode(this.text));
    }, c.appendText = function(s) {
      this.text += s, this.dom.appendData(s);
    }, c.prependText = function(s) {
      this.text = s + this.text, this.dom.insertData(0, s);
    }, c.insTextAtDirEnd = function(s, l) {
      fe(l), l === L ? this.appendText(s) : this.prependText(s);
    }, c.splitRight = function(s) {
      var l = Ze(this.text.slice(s)).adopt(this.parent, this, this[L]);
      return l.jQadd(this.dom.splitText(s)), this.text = this.text.slice(0, s), l;
    }, c.moveTowards = function(s, l) {
      var g, b;
      return fe(s), g = r(-s, this.text), b = this[-s], b ? b.insTextAtDirEnd(g, s) : Ze(g).createDir(-s, l), this.deleteTowards(s, l);
    }, c.latex = function() {
      return this.text;
    }, c.deleteTowards = function(s, l) {
      this.text.length > 1 ? s === L ? (this.dom.deleteData(0, 1), this.text = this.text.slice(1)) : (this.dom.deleteData(-1 + this.text.length, 1), this.text = this.text.slice(0, -1)) : (this.remove(), this.jQ.remove(), l[s] = this[s]);
    }, c.selectTowards = function(s, l) {
      var g, b, T, C;
      return fe(s), g = l.anticursor, b = r(-s, this.text), g[s] === this ? (T = Ze(b).createDir(s, l), g[s] = T, l.insDirOf(s, T)) : (C = this[-s], C ? C.insTextAtDirEnd(b, s) : (T = Ze(b).createDir(-s, l), T.jQ.insDirOf(-s, l.selection.jQ)), this.text.length === 1 && g[-s] === this && (g[-s] = this[-s])), this.deleteTowards(s, l);
    };
  }), je.$ = u.text = u.textnormal = u.textrm = u.textup = u.textmd = Lt, u.em = u.italic = u.italics = u.emph = u.textit = u.textsl = Q("\\textit", "i", 'class="mq-text-mode"'), u.strong = u.bold = u.textbf = Q("\\textbf", "b", 'class="mq-text-mode"'), u.sf = u.textsf = Q("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"'), u.tt = u.texttt = Q("\\texttt", "span", 'class="mq-monospace mq-text-mode"'), u.textsc = Q("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"'), u.uppercase = Q("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"'), u.lowercase = Q("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"'), Ie = F(ge, function(c, d) {
    c.init = function(r) {
      d.init.call(this, "$"), this.cursor = r;
    }, c.htmlTemplate = '<span class="mq-math-mode">&0</span>', c.createBlocks = function() {
      d.createBlocks.call(this), this.ends[y].cursor = this.cursor, this.ends[y].write = function(r, s) {
        s !== "$" ? Se.prototype.write.call(this, r, s) : this.isEmpty() ? (r.insRightOf(this.parent), this.parent.deleteTowards(dir, r), x("\\$", "$").createLeftOf(r.show())) : r[L] ? r[y] ? Se.prototype.write.call(this, r, s) : r.insLeftOf(this.parent) : r.insRightOf(this.parent);
      };
    }, c.latex = function() {
      return "$" + this.ends[y].latex() + "$";
    };
  }), Yt = F(Gt, function(c, d) {
    c.keystroke = function(r) {
      return r !== "Spacebar" && r !== "Shift-Spacebar" ? d.keystroke.apply(this, arguments) : void 0;
    }, c.write = function(r, s) {
      if (r.show().deleteSelection(), s === "$")
        Ie(r).createLeftOf(r);
      else {
        var l;
        s === "<" ? l = "&lt;" : s === ">" && (l = "&gt;"), x(s, l).createLeftOf(r);
      }
    };
  }), gt.TextField = function(c) {
    return F(c.EditableField, function(d, r) {
      this.RootBlock = Yt, d.__mathquillify = function() {
        return r.__mathquillify.call(this, "mq-editable-field mq-text-mode");
      }, d.latex = function(s) {
        return arguments.length > 0 ? (this.__controller.renderLatexText(s), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
      };
    });
  }, je["\\"] = F(ge, function(c, d) {
    c.ctrlSeq = "\\", c.replaces = function(r) {
      this._replacedFragment = r.disown(), this.isEmpty = function() {
        return !1;
      };
    }, c.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>', c.textTemplate = ["\\"], c.createBlocks = function() {
      d.createBlocks.call(this), this.ends[y].focus = function() {
        return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), this;
      }, this.ends[y].blur = function() {
        return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), this;
      }, this.ends[y].write = function(r, s) {
        r.show().deleteSelection(), s.match(/[a-z]/i) ? x(s).createLeftOf(r) : (this.parent.renderCommand(r), s === "\\" && this.isEmpty() || this.parent.parent.write(r, s));
      }, this.ends[y].keystroke = function(r, s, l) {
        return r === "Tab" || r === "Enter" || r === "Spacebar" ? (this.parent.renderCommand(l.cursor), void s.preventDefault()) : d.keystroke.apply(this, arguments);
      };
    }, c.createLeftOf = function(r) {
      if (d.createLeftOf.call(this, r), this._replacedFragment) {
        var s = this.jQ[0];
        this.jQ = this._replacedFragment.jQ.addClass("mq-blur").bind("mousedown mousemove", function(l) {
          return ue(l.target = s).trigger(l), !1;
        }).insertBefore(this.jQ).add(this.jQ);
      }
    }, c.latex = function() {
      return "\\" + this.ends[y].latex() + " ";
    }, c.renderCommand = function(r) {
      var s, l;
      this.jQ = this.jQ.last(), this.remove(), this[L] ? r.insLeftOf(this[L]) : r.insAtRightEnd(this.parent), s = this.ends[y].latex(), s || (s = " "), l = u[s], l ? (l = l(s), this._replacedFragment && l.replaces(this._replacedFragment), l.createLeftOf(r)) : (l = Lt(), l.replaces(s), l.createLeftOf(r), r.insRightOf(l), this._replacedFragment && this._replacedFragment.remove());
    };
  }), u.notin = u.cong = u.equiv = u.oplus = u.otimes = F(ee, function(c, d) {
    c.init = function(r) {
      d.init.call(this, "\\" + r + " ", "&" + r + ";");
    };
  }), u["\u2260"] = u.ne = u.neq = v(ee, "\\ne ", "&ne;"), u.ast = u.star = u.loast = u.lowast = v(ee, "\\ast ", "&lowast;"), u.therefor = u.therefore = v(ee, "\\therefore ", "&there4;"), u.cuz = u.because = v(ee, "\\because ", "&#8757;"), u.prop = u.propto = v(ee, "\\propto ", "&prop;"), u["\u2248"] = u.asymp = u.approx = v(ee, "\\approx ", "&asymp;"), u.isin = u.in = v(ee, "\\in ", "&isin;"), u.ni = u.contains = v(ee, "\\ni ", "&ni;"), u.notni = u.niton = u.notcontains = u.doesnotcontain = v(ee, "\\not\\ni ", "&#8716;"), u.sub = u.subset = v(ee, "\\subset ", "&sub;"), u.sup = u.supset = u.superset = v(ee, "\\supset ", "&sup;"), u.nsub = u.notsub = u.nsubset = u.notsubset = v(ee, "\\not\\subset ", "&#8836;"), u.nsup = u.notsup = u.nsupset = u.notsupset = u.nsuperset = u.notsuperset = v(ee, "\\not\\supset ", "&#8837;"), u.sube = u.subeq = u.subsete = u.subseteq = v(ee, "\\subseteq ", "&sube;"), u.supe = u.supeq = u.supsete = u.supseteq = u.supersete = u.superseteq = v(ee, "\\supseteq ", "&supe;"), u.nsube = u.nsubeq = u.notsube = u.notsubeq = u.nsubsete = u.nsubseteq = u.notsubsete = u.notsubseteq = v(ee, "\\not\\subseteq ", "&#8840;"), u.nsupe = u.nsupeq = u.notsupe = u.notsupeq = u.nsupsete = u.nsupseteq = u.notsupsete = u.notsupseteq = u.nsupersete = u.nsuperseteq = u.notsupersete = u.notsuperseteq = v(ee, "\\not\\supseteq ", "&#8841;"), u.N = u.naturals = u.Naturals = v(x, "\\mathbb{N}", "&#8469;"), u.P = u.primes = u.Primes = u.projective = u.Projective = u.probability = u.Probability = v(x, "\\mathbb{P}", "&#8473;"), u.Z = u.integers = u.Integers = v(x, "\\mathbb{Z}", "&#8484;"), u.Q = u.rationals = u.Rationals = v(x, "\\mathbb{Q}", "&#8474;"), u.R = u.reals = u.Reals = v(x, "\\mathbb{R}", "&#8477;"), u.C = u.complex = u.Complex = u.complexes = u.Complexes = u.complexplane = u.Complexplane = u.ComplexPlane = v(x, "\\mathbb{C}", "&#8450;"), u.H = u.Hamiltonian = u.quaternions = u.Quaternions = v(x, "\\mathbb{H}", "&#8461;"), u.quad = u.emsp = v(x, "\\quad ", "    "), u.qquad = v(x, "\\qquad ", "        "), u.diamond = v(x, "\\diamond ", "&#9671;"), u.bigtriangleup = v(x, "\\bigtriangleup ", "&#9651;"), u.ominus = v(x, "\\ominus ", "&#8854;"), u.uplus = v(x, "\\uplus ", "&#8846;"), u.bigtriangledown = v(x, "\\bigtriangledown ", "&#9661;"), u.sqcap = v(x, "\\sqcap ", "&#8851;"), u.triangleleft = v(x, "\\triangleleft ", "&#8882;"), u.sqcup = v(x, "\\sqcup ", "&#8852;"), u.triangleright = v(x, "\\triangleright ", "&#8883;"), u.odot = u.circledot = v(x, "\\odot ", "&#8857;"), u.bigcirc = v(x, "\\bigcirc ", "&#9711;"), u.dagger = v(x, "\\dagger ", "&#0134;"), u.ddagger = v(x, "\\ddagger ", "&#135;"), u.wr = v(x, "\\wr ", "&#8768;"), u.amalg = v(x, "\\amalg ", "&#8720;"), u.models = v(x, "\\models ", "&#8872;"), u.prec = v(x, "\\prec ", "&#8826;"), u.succ = v(x, "\\succ ", "&#8827;"), u.preceq = v(x, "\\preceq ", "&#8828;"), u.succeq = v(x, "\\succeq ", "&#8829;"), u.simeq = v(x, "\\simeq ", "&#8771;"), u.mid = v(x, "\\mid ", "&#8739;"), u.ll = v(x, "\\ll ", "&#8810;"), u.gg = v(x, "\\gg ", "&#8811;"), u.parallel = v(x, "\\parallel ", "&#8741;"), u.nparallel = v(x, "\\nparallel ", "&#8742;"), u.bowtie = v(x, "\\bowtie ", "&#8904;"), u.sqsubset = v(x, "\\sqsubset ", "&#8847;"), u.sqsupset = v(x, "\\sqsupset ", "&#8848;"), u.smile = v(x, "\\smile ", "&#8995;"), u.sqsubseteq = v(x, "\\sqsubseteq ", "&#8849;"), u.sqsupseteq = v(x, "\\sqsupseteq ", "&#8850;"), u.doteq = v(x, "\\doteq ", "&#8784;"), u.frown = v(x, "\\frown ", "&#8994;"), u.vdash = v(x, "\\vdash ", "&#8870;"), u.dashv = v(x, "\\dashv ", "&#8867;"), u.nless = v(x, "\\nless ", "&#8814;"), u.ngtr = v(x, "\\ngtr ", "&#8815;"), u.longleftarrow = v(x, "\\longleftarrow ", "&#8592;"), u.longrightarrow = v(x, "\\longrightarrow ", "&#8594;"), u.Longleftarrow = v(x, "\\Longleftarrow ", "&#8656;"), u.Longrightarrow = v(x, "\\Longrightarrow ", "&#8658;"), u.longleftrightarrow = v(x, "\\longleftrightarrow ", "&#8596;"), u.updownarrow = v(x, "\\updownarrow ", "&#8597;"), u.Longleftrightarrow = v(x, "\\Longleftrightarrow ", "&#8660;"), u.Updownarrow = v(x, "\\Updownarrow ", "&#8661;"), u.mapsto = v(x, "\\mapsto ", "&#8614;"), u.nearrow = v(x, "\\nearrow ", "&#8599;"), u.hookleftarrow = v(x, "\\hookleftarrow ", "&#8617;"), u.hookrightarrow = v(x, "\\hookrightarrow ", "&#8618;"), u.searrow = v(x, "\\searrow ", "&#8600;"), u.leftharpoonup = v(x, "\\leftharpoonup ", "&#8636;"), u.rightharpoonup = v(x, "\\rightharpoonup ", "&#8640;"), u.swarrow = v(x, "\\swarrow ", "&#8601;"), u.leftharpoondown = v(x, "\\leftharpoondown ", "&#8637;"), u.rightharpoondown = v(x, "\\rightharpoondown ", "&#8641;"), u.nwarrow = v(x, "\\nwarrow ", "&#8598;"), u.ldots = v(x, "\\ldots ", "&#8230;"), u.cdots = v(x, "\\cdots ", "&#8943;"), u.vdots = v(x, "\\vdots ", "&#8942;"), u.ddots = v(x, "\\ddots ", "&#8945;"), u.surd = v(x, "\\surd ", "&#8730;"), u.triangle = v(x, "\\triangle ", "&#9651;"), u.ell = v(x, "\\ell ", "&#8467;"), u.top = v(x, "\\top ", "&#8868;"), u.flat = v(x, "\\flat ", "&#9837;"), u.natural = v(x, "\\natural ", "&#9838;"), u.sharp = v(x, "\\sharp ", "&#9839;"), u.wp = v(x, "\\wp ", "&#8472;"), u.bot = v(x, "\\bot ", "&#8869;"), u.clubsuit = v(x, "\\clubsuit ", "&#9827;"), u.diamondsuit = v(x, "\\diamondsuit ", "&#9826;"), u.heartsuit = v(x, "\\heartsuit ", "&#9825;"), u.spadesuit = v(x, "\\spadesuit ", "&#9824;"), u.parallelogram = v(x, "\\parallelogram ", "&#9649;"), u.square = v(x, "\\square ", "&#11036;"), u.oint = v(x, "\\oint ", "&#8750;"), u.bigcap = v(x, "\\bigcap ", "&#8745;"), u.bigcup = v(x, "\\bigcup ", "&#8746;"), u.bigsqcup = v(x, "\\bigsqcup ", "&#8852;"), u.bigvee = v(x, "\\bigvee ", "&#8744;"), u.bigwedge = v(x, "\\bigwedge ", "&#8743;"), u.bigodot = v(x, "\\bigodot ", "&#8857;"), u.bigotimes = v(x, "\\bigotimes ", "&#8855;"), u.bigoplus = v(x, "\\bigoplus ", "&#8853;"), u.biguplus = v(x, "\\biguplus ", "&#8846;"), u.lfloor = v(x, "\\lfloor ", "&#8970;"), u.rfloor = v(x, "\\rfloor ", "&#8971;"), u.lceil = v(x, "\\lceil ", "&#8968;"), u.rceil = v(x, "\\rceil ", "&#8969;"), u.opencurlybrace = u.lbrace = v(x, "\\lbrace ", "{"), u.closecurlybrace = u.rbrace = v(x, "\\rbrace ", "}"), u.lbrack = v(x, "["), u.rbrack = v(x, "]"), u["\u222B"] = u.int = u.integral = v(Ce, "\\int ", "<big>&int;</big>"), u.slash = v(x, "/"), u.vert = v(x, "|"), u.perp = u.perpendicular = v(x, "\\perp ", "&perp;"), u.nabla = u.del = v(x, "\\nabla ", "&nabla;"), u.hbar = v(x, "\\hbar ", "&#8463;"), u.AA = u.Angstrom = u.angstrom = v(x, "\\text\\AA ", "&#8491;"), u.ring = u.circ = u.circle = v(x, "\\circ ", "&#8728;"), u.bull = u.bullet = v(x, "\\bullet ", "&bull;"), u.setminus = u.smallsetminus = v(x, "\\setminus ", "&#8726;"), u.not = u["\xAC"] = u.neg = v(x, "\\neg ", "&not;"), u["\u2026"] = u.dots = u.ellip = u.hellip = u.ellipsis = u.hellipsis = v(x, "\\dots ", "&hellip;"), u.converges = u.darr = u.dnarr = u.dnarrow = u.downarrow = v(x, "\\downarrow ", "&darr;"), u.dArr = u.dnArr = u.dnArrow = u.Downarrow = v(x, "\\Downarrow ", "&dArr;"), u.diverges = u.uarr = u.uparrow = v(x, "\\uparrow ", "&uarr;"), u.uArr = u.Uparrow = v(x, "\\Uparrow ", "&uArr;"), u.to = v(ee, "\\to ", "&rarr;"), u.rarr = u.rightarrow = v(x, "\\rightarrow ", "&rarr;"), u.implies = v(ee, "\\Rightarrow ", "&rArr;"), u.rArr = u.Rightarrow = v(x, "\\Rightarrow ", "&rArr;"), u.gets = v(ee, "\\gets ", "&larr;"), u.larr = u.leftarrow = v(x, "\\leftarrow ", "&larr;"), u.impliedby = v(ee, "\\Leftarrow ", "&lArr;"), u.lArr = u.Leftarrow = v(x, "\\Leftarrow ", "&lArr;"), u.harr = u.lrarr = u.leftrightarrow = v(x, "\\leftrightarrow ", "&harr;"), u.iff = v(ee, "\\Leftrightarrow ", "&hArr;"), u.hArr = u.lrArr = u.Leftrightarrow = v(x, "\\Leftrightarrow ", "&hArr;"), u.Re = u.Real = u.real = v(x, "\\Re ", "&real;"), u.Im = u.imag = u.image = u.imagin = u.imaginary = u.Imaginary = v(x, "\\Im ", "&image;"), u.part = u.partial = v(x, "\\partial ", "&part;"), u.infty = u.infin = u.infinity = v(x, "\\infty ", "&infin;"), u.alef = u.alefsym = u.aleph = u.alephsym = v(x, "\\aleph ", "&alefsym;"), u.xist = u.xists = u.exist = u.exists = v(x, "\\exists ", "&exist;"), u.and = u.land = u.wedge = v(x, "\\wedge ", "&and;"), u.or = u.lor = u.vee = v(x, "\\vee ", "&or;"), u.o = u.O = u.empty = u.emptyset = u.oslash = u.Oslash = u.nothing = u.varnothing = v(ee, "\\varnothing ", "&empty;"), u.cup = u.union = v(ee, "\\cup ", "&cup;"), u.cap = u.intersect = u.intersection = v(ee, "\\cap ", "&cap;"), u.deg = u.degree = v(x, "\\degree ", "&deg;"), u.ang = u.angle = v(x, "\\angle ", "&ang;"), u.measuredangle = v(x, "\\measuredangle ", "&#8737;"), yn = F(x, function(c, d) {
    c.createLeftOf = function(r) {
      r.options.autoSubscriptNumerals && r.parent !== r.parent.parent.sub && (r[y] instanceof we && r[y].isItalic !== !1 || r[y] instanceof Me && r[y][y] instanceof we && r[y][y].isItalic !== !1) ? (u._().createLeftOf(r), d.createLeftOf.call(this, r), r.insRightOf(r.parent.parent)) : d.createLeftOf.call(this, r);
    };
  }), we = F(Ce, function(c, d) {
    c.init = function(r, s) {
      d.init.call(this, r, "<var>" + (s || r) + "</var>");
    }, c.text = function() {
      var r = this.ctrlSeq;
      return !this[y] || this[y] instanceof we || this[y] instanceof ee || this[y].ctrlSeq === "\\ " || (r = "*" + r), !this[L] || this[L] instanceof ee || this[L] instanceof Me || (r += "*"), r;
    };
  }), Ye.p.autoCommands = { _maxLength: 0 }, Ve.autoCommands = function(c) {
    var d, r, s, l, g;
    if (!/^[a-z]+(?: [a-z]+)*$/i.test(c))
      throw '"' + c + '" not a space-delimited list of only letters';
    for (d = c.split(" "), r = {}, s = 0, l = 0; l < d.length; l += 1) {
      if (g = d[l], g.length < 2)
        throw 'autocommand "' + g + '" not minimum length of 2';
      if (u[g] === Kt)
        throw '"' + g + '" is a built-in operator name';
      r[g] = 1, s = ze(s, g.length);
    }
    return r._maxLength = s, r;
  }, Be = F(we, function(c, d) {
    function r(s) {
      return s instanceof Ce && !(s instanceof ee);
    }
    c.init = function(s) {
      return d.init.call(this, this.letter = s);
    }, c.createLeftOf = function(s) {
      var l, g, b, T = s.options.autoCommands, C = T._maxLength;
      if (C > 0) {
        for (l = this.letter, g = s[y], b = 1; g instanceof Be && C > b; )
          l = g.letter + l, g = g[y], b += 1;
        for (; l.length; ) {
          if (T.hasOwnProperty(l)) {
            for (b = 2, g = s[y]; b < l.length; b += 1, g = g[y])
              ;
            return Oe(g, s[y]).remove(), s[y] = g[y], u[l](l).createLeftOf(s);
          }
          l = l.slice(1);
        }
      }
      d.createLeftOf.apply(this, arguments);
    }, c.italicize = function(s) {
      return this.isItalic = s, this.jQ.toggleClass("mq-operator-name", !s), this;
    }, c.finalizeTree = c.siblingDeleted = c.siblingCreated = function(s, l) {
      l !== y && this[L] instanceof Be || this.autoUnItalicize(s);
    }, c.autoUnItalicize = function(s) {
      var l, g, b, T, C, O, B, H, X, U, I, ce = s.autoOperatorNames;
      if (ce._maxLength !== 0) {
        for (l = this.letter, g = this[y]; g instanceof Be; g = g[y])
          l = g.letter + l;
        for (b = this[L]; b instanceof Be; b = b[L])
          l += b.letter;
        Oe(g[L] || this.parent.ends[y], b[y] || this.parent.ends[L]).each(function(be) {
          be.italicize(!0).jQ.removeClass("mq-first mq-last"), be.ctrlSeq = be.letter;
        });
        e:
          for (T = 0, C = g[L] || this.parent.ends[y]; T < l.length; T += 1, C = C[L])
            for (O = bn(ce._maxLength, l.length - T); O > 0; O -= 1)
              if (B = l.slice(T, T + O), ce.hasOwnProperty(B)) {
                for (H = 0, X = C; O > H; H += 1, X = X[L])
                  X.italicize(!1), U = X;
                I = Pe.hasOwnProperty(B), C.ctrlSeq = (I ? "\\" : "\\operatorname{") + C.ctrlSeq, U.ctrlSeq += I ? " " : "}", Vt.hasOwnProperty(B) && U[y][y][y].jQ.addClass("mq-last"), r(C[y]) && C.jQ.addClass("mq-first"), r(U[L]) && U.jQ.addClass("mq-last"), T += O - 1, C = U;
                continue e;
              }
      }
    };
  }), Pe = {}, xe = Ye.p.autoOperatorNames = { _maxLength: 9 }, Vt = {
    limsup: 1,
    liminf: 1,
    projlim: 1,
    injlim: 1
  }, function() {
    var c, d, r, s, l = "arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" ");
    for (c = 0; c < l.length; c += 1)
      Pe[l[c]] = xe[l[c]] = 1;
    for (d = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" "), c = 0; c < d.length; c += 1)
      Pe[d[c]] = 1;
    for (r = "sin cos tan sec cosec csc cotan cot ctg".split(" "), c = 0; c < r.length; c += 1)
      xe[r[c]] = xe["arc" + r[c]] = xe[r[c] + "h"] = xe["ar" + r[c] + "h"] = xe["arc" + r[c] + "h"] = 1;
    for (s = "gcf hcf lcm proj span".split(" "), c = 0; c < s.length; c += 1)
      xe[s[c]] = 1;
  }(), Ve.autoOperatorNames = function(c) {
    var d, r, s, l, g;
    if (!/^[a-z]+(?: [a-z]+)*$/i.test(c))
      throw '"' + c + '" not a space-delimited list of only letters';
    for (d = c.split(" "), r = {}, s = 0, l = 0; l < d.length; l += 1) {
      if (g = d[l], g.length < 2)
        throw '"' + g + '" not minimum length of 2';
      r[g] = 1, s = ze(s, g.length);
    }
    return r._maxLength = s, r;
  }, Kt = F(Ce, function(c, d) {
    c.init = function(r) {
      this.ctrlSeq = r;
    }, c.createLeftOf = function(r) {
      var s, l = this.ctrlSeq;
      for (s = 0; s < l.length; s += 1)
        Be(l.charAt(s)).createLeftOf(r);
    }, c.parser = function() {
      var r, s = this.ctrlSeq, l = Se();
      for (r = 0; r < s.length; r += 1)
        Be(s.charAt(r)).adopt(l, l.ends[L], 0);
      return Y.succeed(l.children());
    };
  });
  for (Jt in xe)
    xe.hasOwnProperty(Jt) && (u[Jt] = Kt);
  u.operatorname = F(ge, function(c) {
    c.createLeftOf = P, c.numBlocks = function() {
      return 1;
    }, c.parser = function() {
      return Ne.block.map(function(d) {
        return d.children();
      });
    };
  }), u.f = F(Be, function(c, d) {
    c.init = function() {
      Ce.p.init.call(this, this.letter = "f", '<var class="mq-f">f</var>');
    }, c.italicize = function(r) {
      return this.jQ.html("f").toggleClass("mq-f", r), d.italicize.apply(this, arguments);
    };
  }), u[" "] = u.space = v(x, "\\ ", "&nbsp;"), u["'"] = u.prime = v(x, "'", "&prime;"), u.backslash = v(x, "\\backslash ", "\\"), je["\\"] || (je["\\"] = u.backslash), u.$ = v(x, "\\$", "$"), ut = F(Ce, function(c, d) {
    c.init = function(r, s) {
      d.init.call(this, r, '<span class="mq-nonSymbola">' + (s || r) + "</span>");
    };
  }), u["@"] = ut, u["&"] = v(ut, "\\&", "&amp;"), u["%"] = v(ut, "\\%", "%"), u.alpha = u.beta = u.gamma = u.delta = u.zeta = u.eta = u.theta = u.iota = u.kappa = u.mu = u.nu = u.xi = u.rho = u.sigma = u.tau = u.chi = u.psi = u.omega = F(we, function(c, d) {
    c.init = function(r) {
      d.init.call(this, "\\" + r + " ", "&" + r + ";");
    };
  }), u.phi = v(we, "\\phi ", "&#981;"), u.phiv = u.varphi = v(we, "\\varphi ", "&phi;"), u.epsilon = v(we, "\\epsilon ", "&#1013;"), u.epsiv = u.varepsilon = v(we, "\\varepsilon ", "&epsilon;"), u.piv = u.varpi = v(we, "\\varpi ", "&piv;"), u.sigmaf = u.sigmav = u.varsigma = v(we, "\\varsigma ", "&sigmaf;"), u.thetav = u.vartheta = u.thetasym = v(we, "\\vartheta ", "&thetasym;"), u.upsilon = u.upsi = v(we, "\\upsilon ", "&upsilon;"), u.gammad = u.Gammad = u.digamma = v(we, "\\digamma ", "&#989;"), u.kappav = u.varkappa = v(we, "\\varkappa ", "&#1008;"), u.rhov = u.varrho = v(we, "\\varrho ", "&#1009;"), u.pi = u.\u03C0 = v(ut, "\\pi ", "&pi;"), u.lambda = v(ut, "\\lambda ", "&lambda;"), u.Upsilon = u.Upsi = u.upsih = u.Upsih = v(Ce, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>'), u.Gamma = u.Delta = u.Theta = u.Lambda = u.Xi = u.Pi = u.Sigma = u.Phi = u.Psi = u.Omega = u.forall = F(x, function(c, d) {
    c.init = function(r) {
      d.init.call(this, "\\" + r + " ", "&" + r + ";");
    };
  }), et = F(ge, function(c) {
    c.init = function(d) {
      this.latex = d;
    }, c.createLeftOf = function(d) {
      var r = Ne.parse(this.latex);
      r.children().adopt(d.parent, d[y], d[L]), d[y] = r.ends[L], r.jQize().insertBefore(d.jQ), r.finalizeInsert(d.options, d), r.ends[L][L].siblingCreated && r.ends[L][L].siblingCreated(d.options, y), r.ends[y][y].siblingCreated && r.ends[y][y].siblingCreated(d.options, L), d.parent.bubble("reflow");
    }, c.parser = function() {
      var d = Ne.parse(this.latex).children();
      return Y.succeed(d);
    };
  }), u["\xB9"] = v(et, "^1"), u["\xB2"] = v(et, "^2"), u["\xB3"] = v(et, "^3"), u["\xBC"] = v(et, "\\frac14"), u["\xBD"] = v(et, "\\frac12"), u["\xBE"] = v(et, "\\frac34"), pt = F(ee, function(c) {
    c.init = x.prototype.init, c.contactWeld = c.siblingCreated = c.siblingDeleted = function(d, r) {
      return r !== L ? (this.jQ[0].className = !this[y] || this[y] instanceof ee ? "" : "mq-binary-operator", this) : void 0;
    };
  }), u["+"] = v(pt, "+", "+"), u["\u2013"] = u["-"] = v(pt, "-", "&minus;"), u["\xB1"] = u.pm = u.plusmn = u.plusminus = v(pt, "\\pm ", "&plusmn;"), u.mp = u.mnplus = u.minusplus = v(pt, "\\mp ", "&#8723;"), je["*"] = u.sdot = u.cdot = v(ee, "\\cdot ", "&middot;", "*"), ct = F(ee, function(c, d) {
    c.init = function(r, s) {
      this.data = r, this.strict = s;
      var l = s ? "Strict" : "";
      d.init.call(this, r["ctrlSeq" + l], r["html" + l], r["text" + l]);
    }, c.swap = function(r) {
      this.strict = r;
      var s = r ? "Strict" : "";
      this.ctrlSeq = this.data["ctrlSeq" + s], this.jQ.html(this.data["html" + s]), this.textTemplate = [this.data["text" + s]];
    }, c.deleteTowards = function(r, s) {
      return r !== y || this.strict ? void d.deleteTowards.apply(this, arguments) : (this.swap(!0), void this.bubble("reflow"));
    };
  }), mt = {
    ctrlSeq: "\\le ",
    html: "&le;",
    text: "\u2264",
    ctrlSeqStrict: "<",
    htmlStrict: "&lt;",
    textStrict: "<"
  }, tt = {
    ctrlSeq: "\\ge ",
    html: "&ge;",
    text: "\u2265",
    ctrlSeqStrict: ">",
    htmlStrict: "&gt;",
    textStrict: ">"
  }, u["<"] = u.lt = v(ct, mt, !0), u[">"] = u.gt = v(ct, tt, !0), u["\u2264"] = u.le = u.leq = v(ct, mt, !1), u["\u2265"] = u.ge = u.geq = v(ct, tt, !1), ht = F(ee, function(c, d) {
    c.init = function() {
      d.init.call(this, "=", "=");
    }, c.createLeftOf = function(r) {
      return r[y] instanceof ct && r[y].strict ? (r[y].swap(!1), void r[y].bubble("reflow")) : void d.createLeftOf.apply(this, arguments);
    };
  }), u["="] = ht, u["\xD7"] = u.times = v(ee, "\\times ", "&times;", "[x]"), u["\xF7"] = u.div = u.divide = u.divides = v(ee, "\\div ", "&divide;", "[/]"), je["~"] = u.sim = v(ee, "\\sim ", "~", "~"), qt = P, Mt = document.createElement("div"), Zt = Mt.style, wn = {
    transform: 1,
    WebkitTransform: 1,
    MozTransform: 1,
    OTransform: 1,
    msTransform: 1
  };
  for (Qt in wn)
    if (Qt in Zt) {
      zt = Qt;
      break;
    }
  zt ? $e = function(c, d, r) {
    c.css(zt, "scale(" + d + "," + r + ")");
  } : "filter" in Zt ? (qt = function(c) {
    c.className = c.className;
  }, $e = function(c, d, r) {
    function s() {
      c.css("marginRight", (l.width() - 1) * (d - 1) / d + "px");
    }
    var l, g;
    d /= 1 + (r - 1) / 2, c.css("fontSize", r + "em"), c.hasClass("mq-matrixed-container") || c.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>'), l = c.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + d + ",SizingMethod='auto expand')"), s(), g = setInterval(s), ue(window).load(function() {
      clearTimeout(g), s();
    });
  }) : $e = function(c, d, r) {
    c.css("fontSize", r + "em");
  }, Ae = F(ge, function(c, d) {
    c.init = function(r, s, l) {
      d.init.call(this, r, "<" + s + " " + l + ">&0</" + s + ">");
    };
  }), u.mathrm = v(Ae, "\\mathrm", "span", 'class="mq-roman mq-font"'), u.mathit = v(Ae, "\\mathit", "i", 'class="mq-font"'), u.mathbf = v(Ae, "\\mathbf", "b", 'class="mq-font"'), u.mathsf = v(Ae, "\\mathsf", "span", 'class="mq-sans-serif mq-font"'), u.mathtt = v(Ae, "\\mathtt", "span", 'class="mq-monospace mq-font"'), u.underline = v(Ae, "\\underline", "span", 'class="mq-non-leaf mq-underline"'), u.overline = u.bar = v(Ae, "\\overline", "span", 'class="mq-non-leaf mq-overline"'), u.overrightarrow = v(Ae, "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"'), u.overleftarrow = v(Ae, "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"'), u.textcolor = F(ge, function(c, d) {
    c.setColor = function(r) {
      this.color = r, this.htmlTemplate = '<span class="mq-textcolor" style="color:' + r + '">&0</span>';
    }, c.latex = function() {
      return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}";
    }, c.parser = function() {
      var r = this, s = Y.optWhitespace, l = Y.string, g = Y.regex;
      return s.then(l("{")).then(g(/^[#\w\s.,()%-]*/)).skip(l("}")).then(function(b) {
        return r.setColor(b), d.parser.call(r);
      });
    };
  }), u.class = F(ge, function(c, d) {
    c.parser = function() {
      var r = this, s = Y.string, l = Y.regex;
      return Y.optWhitespace.then(s("{")).then(l(/^[-\w\s\\\xA0-\xFF]*/)).skip(s("}")).then(function(g) {
        return r.htmlTemplate = '<span class="mq-class ' + g + '">&0</span>', d.parser.call(r);
      });
    };
  }), Me = F(ge, function(c, d) {
    c.ctrlSeq = "_{...}^{...}", c.createLeftOf = function(r) {
      return r[y] || !r.options.supSubsRequireOperand ? d.createLeftOf.apply(this, arguments) : void 0;
    }, c.contactWeld = function(r) {
      var s, l, g, b, T, C;
      for (s = y; s; s = s === y ? L : !1)
        if (this[s] instanceof Me) {
          for (l = "sub"; l; l = l === "sub" ? "sup" : !1)
            g = this[l], b = this[s][l], g && (b ? g.isEmpty() ? C = We(b, 0, b.ends[y]) : (g.jQ.children().insAtDirEnd(-s, b.jQ), T = g.children().disown(), C = We(b, T.ends[L], b.ends[y]), s === y ? T.adopt(b, b.ends[L], 0) : T.adopt(b, 0, b.ends[y])) : this[s].addBlock(g.disown()), this.placeCursor = function(O, B) {
              return function(H) {
                H.insAtDirEnd(-s, O || B);
              };
            }(b, g));
          this.remove(), r && r[y] === this && (s === L && C ? C[y] ? r.insRightOf(C[y]) : r.insAtLeftEnd(C.parent) : r.insRightOf(this[s]));
          break;
        }
      this.respace();
    }, Ye.p.charsThatBreakOutOfSupSub = "", c.finalizeTree = function() {
      this.ends[y].write = function(r, s) {
        if (r.options.autoSubscriptNumerals && this === this.parent.sub) {
          if (s === "_")
            return;
          var l = this.chToCmd(s);
          return l instanceof Ce ? r.deleteSelection() : r.clearSelection().insRightOf(this.parent), l.createLeftOf(r.show());
        }
        r[y] && !r[L] && !r.selection && r.options.charsThatBreakOutOfSupSub.indexOf(s) > -1 && r.insRightOf(this.parent), Se.p.write.apply(this, arguments);
      };
    }, c.moveTowards = function(r, s, l) {
      s.options.autoSubscriptNumerals && !this.sup ? s.insDirOf(r, this) : d.moveTowards.apply(this, arguments);
    }, c.deleteTowards = function(r, s) {
      if (s.options.autoSubscriptNumerals && this.sub) {
        var l = this.sub.ends[-r];
        l instanceof Ce ? l.remove() : l && l.deleteTowards(r, s.insAtDirEnd(-r, this.sub)), this.sub.isEmpty() && (this.sub.deleteOutOf(y, s.insAtLeftEnd(this.sub)), this.sup && s.insDirOf(-r, this));
      } else
        d.deleteTowards.apply(this, arguments);
    }, c.latex = function() {
      function r(s, l) {
        var g = l && l.latex();
        return l ? s + (g.length === 1 ? g : "{" + (g || " ") + "}") : "";
      }
      return r("_", this.sub) + r("^", this.sup);
    }, c.respace = c.siblingCreated = c.siblingDeleted = function(r, s) {
      s !== L && this.jQ.toggleClass("mq-limit", this[y].ctrlSeq === "\\int ");
    }, c.addBlock = function(r) {
      this.supsub === "sub" ? (this.sup = this.upInto = this.sub.upOutOf = r, r.adopt(this, this.sub, 0).downOutOf = this.sub, r.jQ = ue('<span class="mq-sup"/>').append(r.jQ.children()).attr(ot, r.id).prependTo(this.jQ)) : (this.sub = this.downInto = this.sup.downOutOf = r, r.adopt(this, 0, this.sup).upOutOf = this.sup, r.jQ = ue('<span class="mq-sub"></span>').append(r.jQ.children()).attr(ot, r.id).appendTo(this.jQ.removeClass("mq-sup-only")), this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>'));
      for (var s = 0; 2 > s; s += 1)
        (function(l, g, b, T) {
          l[g].deleteOutOf = function(C, O) {
            if (O.insDirOf(this[C] ? -C : C, this.parent), !this.isEmpty()) {
              var B = this.ends[C];
              this.children().disown().withDirAdopt(C, O.parent, O[C], O[-C]).jQ.insDirOf(-C, O.jQ), O[-C] = B;
            }
            l.supsub = b, delete l[g], delete l[T + "Into"], l[b][T + "OutOf"] = Nt, delete l[b].deleteOutOf, g === "sub" && ue(l.jQ.addClass("mq-sup-only")[0].lastChild).remove(), this.remove();
          };
        })(this, "sub sup".split(" ")[s], "sup sub".split(" ")[s], "down up".split(" ")[s]);
    };
  }), u.subscript = u._ = F(Me, function(c, d) {
    c.supsub = "sub", c.htmlTemplate = '<span class="mq-supsub mq-non-leaf"><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203;</span></span>', c.textTemplate = ["_"], c.finalizeTree = function() {
      this.downInto = this.sub = this.ends[y], this.sub.upOutOf = Nt, d.finalizeTree.call(this);
    };
  }), u.superscript = u.supscript = u["^"] = F(Me, function(c, d) {
    c.supsub = "sup", c.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">&0</span></span>', c.textTemplate = ["^"], c.finalizeTree = function() {
      this.upInto = this.sup = this.ends[L], this.sup.downOutOf = Nt, d.finalizeTree.call(this);
    };
  }), ft = F(ge, function(c, d) {
    c.init = function(r, s) {
      var l = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + s + '</big><span class="mq-from"><span>&0</span></span></span>';
      Ce.prototype.init.call(this, r, l);
    }, c.createLeftOf = function(r) {
      d.createLeftOf.apply(this, arguments), r.options.sumStartsWithNEquals && (Be("n").createLeftOf(r), ht().createLeftOf(r));
    }, c.latex = function() {
      function r(s) {
        return s.length === 1 ? s : "{" + (s || " ") + "}";
      }
      return this.ctrlSeq + "_" + r(this.ends[y].latex()) + "^" + r(this.ends[L].latex());
    }, c.parser = function() {
      var r, s = Y.string, l = Y.optWhitespace, g = Y.succeed, b = Ne.block, T = this, C = T.blocks = [Se(), Se()];
      for (r = 0; r < C.length; r += 1)
        C[r].adopt(T, T.ends[L], 0);
      return l.then(s("_").or(s("^"))).then(function(O) {
        var B = C[O === "_" ? 0 : 1];
        return b.then(function(H) {
          return H.children().adopt(B, B.ends[L], 0), g(T);
        });
      }).many().result(T);
    }, c.finalizeTree = function() {
      this.downInto = this.ends[y], this.upInto = this.ends[L], this.ends[y].upOutOf = this.ends[L], this.ends[L].downOutOf = this.ends[y];
    };
  }), u["\u2211"] = u.sum = u.summation = v(ft, "\\sum ", "&sum;"), u["\u220F"] = u.prod = u.product = v(ft, "\\prod ", "&prod;"), u.coprod = u.coproduct = v(ft, "\\coprod ", "&#8720;"), en = u.frac = u.dfrac = u.cfrac = u.fraction = F(ge, function(c, d) {
    c.ctrlSeq = "\\frac", c.htmlTemplate = '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator">&0</span><span class="mq-denominator">&1</span><span style="display:inline-block;width:0">&#8203;</span></span>', c.textTemplate = ["(", ")/(", ")"], c.finalizeTree = function() {
      this.upInto = this.ends[L].upOutOf = this.ends[y], this.downInto = this.ends[y].downOutOf = this.ends[L];
    };
  }), tn = u.over = je["/"] = F(en, function(c, d) {
    c.createLeftOf = function(r) {
      if (!this.replacedFragment) {
        for (var s = r[y]; s && !(s instanceof ee || s instanceof (u.text || P) || s instanceof ft || s.ctrlSeq === "\\ " || /^[,;:]$/.test(s.ctrlSeq)); )
          s = s[y];
        s instanceof ft && s[L] instanceof Me && (s = s[L], s[L] instanceof Me && s[L].ctrlSeq != s.ctrlSeq && (s = s[L])), s !== r[y] && (this.replaces(Oe(s[L] || r.parent.ends[y], r[y])), r[y] = s);
      }
      d.createLeftOf.call(this, r);
    };
  }), xn = u.sqrt = u["\u221A"] = F(ge, function(c, d) {
    c.ctrlSeq = "\\sqrt", c.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem">&0</span></span>', c.textTemplate = ["sqrt(", ")"], c.parser = function() {
      return Ne.optBlock.then(function(r) {
        return Ne.block.map(function(s) {
          var l = nn();
          return l.blocks = [r, s], r.adopt(l, 0, 0), s.adopt(l, r, 0), l;
        });
      }).or(d.parser.call(this));
    }, c.reflow = function() {
      var r = this.ends[L].jQ;
      $e(r.prev(), 1, r.innerHeight() / +r.css("fontSize").slice(0, -2) - 0.1);
    };
  }), u.vec = F(ge, function(c, d) {
    c.ctrlSeq = "\\vec", c.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-vector-prefix">&rarr;</span><span class="mq-vector-stem">&0</span></span>', c.textTemplate = ["vec(", ")"];
  }), nn = u.nthroot = F(xn, function(c, d) {
    c.htmlTemplate = '<sup class="mq-nthroot mq-non-leaf">&0</sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf">&1</span></span>', c.textTemplate = ["sqrt[", "](", ")"], c.latex = function() {
      return "\\sqrt[" + this.ends[y].latex() + "]{" + this.ends[L].latex() + "}";
    };
  }), Ge = F(F(ge, i), function(c, d) {
    c.init = function(r, s, l, g, b) {
      d.init.call(this, "\\left" + g, kt, [s, l]), this.side = r, this.sides = {}, this.sides[y] = {
        ch: s,
        ctrlSeq: g
      }, this.sides[L] = { ch: l, ctrlSeq: b };
    }, c.numBlocks = function() {
      return 1;
    }, c.html = function() {
      return this.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' + (this.side === L ? " mq-ghost" : "") + '">' + this.sides[y].ch + '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' + (this.side === y ? " mq-ghost" : "") + '">' + this.sides[L].ch + "</span></span>", d.html.call(this);
    }, c.latex = function() {
      return "\\left" + this.sides[y].ctrlSeq + this.ends[y].latex() + "\\right" + this.sides[L].ctrlSeq;
    }, c.oppBrack = function(r, s, l) {
      return s instanceof Ge && s.side && s.side !== -l && (this.sides[this.side].ch === "|" || s.side === -this.side) && (!r.restrictMismatchedBrackets || dt[this.sides[this.side].ch] === s.sides[s.side].ch || {
        "(": "]",
        "[": ")"
      }[this.sides[y].ch] === s.sides[L].ch) && s;
    }, c.closeOpposing = function(r) {
      r.side = 0, r.sides[this.side] = this.sides[this.side], r.delimjQs.eq(this.side === y ? 0 : 1).removeClass("mq-ghost").html(this.sides[this.side].ch);
    }, c.createLeftOf = function(r) {
      var s, l, g;
      this.replacedFragment || (s = r.options, l = this.oppBrack(s, r[y], y) || this.oppBrack(s, r[L], L) || this.oppBrack(s, r.parent.parent)), l ? (g = this.side = -l.side, this.closeOpposing(l), l === r.parent.parent && r[g] && (Oe(r[g], r.parent.ends[g], -g).disown().withDirAdopt(-g, l.parent, l, l[g]).jQ.insDirOf(g, l.jQ), l.bubble("reflow"))) : (l = this, g = l.side, l.replacedFragment ? l.side = 0 : r[-g] && (l.replaces(Oe(r[-g], r.parent.ends[-g], g)), r[-g] = 0), d.createLeftOf.call(l, r)), g === y ? r.insAtLeftEnd(l.ends[y]) : r.insRightOf(l);
    }, c.placeCursor = P, c.unwrap = function() {
      this.ends[y].children().disown().adopt(this.parent, this, this[L]).jQ.insertAfter(this.jQ), this.remove();
    }, c.deleteSide = function(r, s, l) {
      var g, b, T, C = this.parent, O = this[r], B = C.ends[r];
      if (r === this.side)
        return this.unwrap(), void (O ? l.insDirOf(-r, O) : l.insAtDirEnd(r, C));
      if (g = l.options, b = !this.side, this.side = -r, this.oppBrack(g, this.ends[y].ends[this.side], r))
        this.closeOpposing(this.ends[y].ends[this.side]), T = this.ends[y].ends[r], this.unwrap(), T.siblingCreated && T.siblingCreated(l.options, r), O ? l.insDirOf(-r, O) : l.insAtDirEnd(r, C);
      else {
        if (this.oppBrack(g, this.parent.parent, r))
          this.parent.parent.closeOpposing(this), this.parent.parent.unwrap();
        else {
          if (s && b)
            return this.unwrap(), void (O ? l.insDirOf(-r, O) : l.insAtDirEnd(r, C));
          this.sides[r] = {
            ch: dt[this.sides[this.side].ch],
            ctrlSeq: dt[this.sides[this.side].ctrlSeq]
          }, this.delimjQs.removeClass("mq-ghost").eq(r === y ? 0 : 1).addClass("mq-ghost").html(this.sides[r].ch);
        }
        O ? (T = this.ends[y].ends[r], Oe(O, B, -r).disown().withDirAdopt(-r, this.ends[y], T, 0).jQ.insAtDirEnd(r, this.ends[y].jQ.removeClass("mq-empty")), T.siblingCreated && T.siblingCreated(l.options, r), l.insDirOf(-r, O)) : s ? l.insDirOf(r, this) : l.insAtDirEnd(r, this.ends[y]);
      }
    }, c.deleteTowards = function(r, s) {
      this.deleteSide(-r, !1, s);
    }, c.finalizeTree = function() {
      this.ends[y].deleteOutOf = function(r, s) {
        this.parent.deleteSide(r, !0, s);
      }, this.finalizeTree = this.intentionalBlur = function() {
        this.delimjQs.eq(this.side === y ? 1 : 0).removeClass("mq-ghost"), this.side = 0;
      };
    }, c.siblingCreated = function(r, s) {
      s === -this.side && this.finalizeTree();
    };
  }), dt = {
    "(": ")",
    ")": "(",
    "[": "]",
    "]": "[",
    "{": "}",
    "}": "{",
    "\\{": "\\}",
    "\\}": "\\{",
    "&lang;": "&rang;",
    "&rang;": "&lang;",
    "\\langle ": "\\rangle ",
    "\\rangle ": "\\langle ",
    "|": "|"
  }, Pt("("), Pt("["), Pt("{", "\\{"), u.langle = v(Ge, y, "&lang;", "&rang;", "\\langle ", "\\rangle "), u.rangle = v(Ge, L, "&lang;", "&rang;", "\\langle ", "\\rangle "), je["|"] = v(Ge, y, "|", "|", "|", "|"), u.left = F(ge, function(c) {
    c.parser = function() {
      var d = Y.regex, r = Y.string, s = (Y.succeed, Y.optWhitespace);
      return s.then(d(/^(?:[([|]|\\\{)/)).then(function(l) {
        var g = l.charAt(0) === "\\" ? l.slice(1) : l;
        return Ne.then(function(b) {
          return r("\\right").skip(s).then(d(/^(?:[\])|]|\\\})/)).map(function(T) {
            var C = T.charAt(0) === "\\" ? T.slice(1) : T, O = Ge(0, g, C, l, T);
            return O.blocks = [b], b.adopt(O, 0, 0), O;
          });
        });
      });
    };
  }), u.right = F(ge, function(c) {
    c.parser = function() {
      return Y.fail("unmatched \\right");
    };
  }), rn = u.binom = u.binomial = F(F(ge, i), function(c, d) {
    c.ctrlSeq = "\\binom", c.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>', c.textTemplate = ["choose(", ",", ")"];
  }), u.choose = F(rn, function(c) {
    c.createLeftOf = tn.prototype.createLeftOf;
  }), u.editable = u.MathQuillMathField = F(ge, function(c, d) {
    c.ctrlSeq = "\\MathQuillMathField", c.htmlTemplate = '<span class="mq-editable-field"><span class="mq-root-block">&0</span></span>', c.parser = function() {
      var r = this, s = Y.string, l = Y.regex, g = Y.succeed;
      return s("[").then(l(/^[a-z][a-z0-9]*/i)).skip(s("]")).map(function(b) {
        r.name = b;
      }).or(g()).then(d.parser.call(r));
    }, c.finalizeTree = function() {
      var r = Fe(this.ends[y], this.jQ, Ye());
      r.KIND_OF_MQ = "MathField", r.editable = !0, r.createTextarea(), r.editablesTextareaEvents(), r.cursor.insAtRightEnd(r.root), _t(r.root);
    }, c.registerInnerField = function(r, s) {
      r.push(r[this.name] = s(this.ends[y].controller));
    }, c.latex = function() {
      return this.ends[y].latex();
    }, c.text = function() {
      return this.ends[y].text();
    };
  }), sn = u.embed = F(Ce, function(c, d) {
    c.setOptions = function(r) {
      function s() {
        return "";
      }
      return this.text = r.text || s, this.htmlTemplate = r.htmlString || "", this.latex = r.latex || s, this;
    }, c.parser = function() {
      var r = this;
      return string = Y.string, regex = Y.regex, succeed = Y.succeed, string("{").then(regex(/^[a-z][a-z0-9]*/i)).skip(string("}")).then(function(s) {
        return string("[").then(regex(/^[-\w\s]*/)).skip(string("]")).or(succeed()).map(function(l) {
          return r.setOptions(Cn[s](l));
        });
      });
    };
  }), Bt = Je(1);
  for (on in Bt)
    (function(c, d) {
      typeof d == "function" ? (Ue[c] = function() {
        return at(), d.apply(this, arguments);
      }, Ue[c].prototype = d.prototype) : Ue[c] = d;
    })(on, Bt[on]);
})();
class vi {
  constructor(te, re) {
    if (this.MQ = MathQuill.getInterface(2), this.mathField = document.createElement("span"), !te)
      throw new Error("Element is not defined");
    re ? re = { ...gi, ...re } : (console.log("Config is not defined. Using default config"), re = gi), this.initInput(te), this.initHard(te, re), this.initBody(te, re);
  }
  initInput(te) {
    let re = document.createElement("div");
    re.className = "formula-editor", this.mathField.id = "formula-editor__math-field", re.appendChild(this.mathField), this.mathField = this.MQ.MathField(this.mathField, {
      spaceBehavesLikeTab: !0,
      maxDepth: 1,
      leftRightIntoCmdGoes: "up",
      restrictMismatchedBrackets: !0,
      sumStartsWithNEquals: !0,
      supSubsRequireOperand: !0,
      autoSubscriptNumerals: !0,
      handlers: {
        edit: () => {
        }
      }
    }), te.appendChild(re);
  }
  createButton(te, re) {
    let v = document.createElement("button");
    switch (v.className = "formula-editor__buttons__button", v.style.cssText = `color: ${re.color};stroke:${re.color}`, v.onclick = () => {
      te.cmd || te.action.startsWith("\\") && !te.action.includes("{}") ? this.mathField.cmd(te.action).focus() : this.mathField.write(te.action).focus();
    }, te.labelType) {
      case "text":
        let ae = document.createElement("div");
        ae.className = "formula-editor__buttons__button__label", ae.innerText = te.label, v.appendChild(ae);
        break;
      case "laTeX":
        let fe = document.createElement("div");
        fe.className = "formula-editor__buttons__button__label", v.appendChild(fe), vi.staticMath(fe, te.label);
        break;
      case "svg":
        v.innerHTML = te.label;
        break;
      case "html":
        v.innerHTML = te.label;
        break;
    }
    return v;
  }
  initHard(te, re) {
    let v = document.createElement("div");
    v.className = "formula-editor__hard";
    for (let ae of re.head) {
      let fe = document.createElement("div");
      fe.className = "formula-editor__buttons";
      for (let st of ae.actions)
        fe.appendChild(this.createButton(st, { color: ae.color }));
      v.appendChild(fe);
    }
    te.appendChild(v);
  }
  initBody(te, re) {
    let v = document.createElement("div");
    v.className = "formula-editor__body", te.appendChild(v);
    for (let ae of re.body) {
      let fe = document.createElement("div");
      fe.className = "formula-editor__buttons formula-editor__body__buttons", v.appendChild(fe);
      for (let st of ae.actions)
        fe.appendChild(this.createButton(st, { color: ae.color }));
    }
  }
  latex(te) {
    return te ? this.mathField.latex(te) : this.mathField.latex();
  }
  el() {
    return this.mathField.el();
  }
  focus() {
    return this.mathField.focus();
  }
  blur() {
    return this.mathField.focus();
  }
  revert() {
    return this.mathField.revert();
  }
  reflow() {
    return this.mathField.reflow();
  }
  setMathConfig(te) {
    this.MQ.config(te);
  }
  static staticMath(te, re) {
    te.innerText = re, MathQuill.getInterface(2).StaticMath(te);
  }
}
export {
  vi as FormulaEditor
};
