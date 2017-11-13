(function(window, document, location) {
	var m, ba = "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {};
			b.prototype = a;
			return new b
		},
		ca;
	if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
	else {
		var da;
		a: {
			var ea = {
				a: !0
			},
				ha = {};
			try {
				ha.__proto__ = ea;
				da = ha.a;
				break a
			} catch (a) {}
			da = !1
		}
		ca = da ?
		function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var ja = ca,
		ka = function(a, b) {
			a.prototype = ba(b.prototype);
			a.prototype.constructor = a;
			if (ja) ja(a, b);
			else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
				var d = Object.getOwnPropertyDescriptor(b, c);
				d && Object.defineProperty(a, c, d)
			} else a[c] = b[c];
			a.Wb = b.prototype
		},
		na = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
			a != Array.prototype && a != Object.prototype && (a[b] = c.value)
		},
		oa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
		pa = function() {
			pa = function() {};
			oa.Symbol || (oa.Symbol = ra)
		},
		ra = function() {
			var a = 0;
			return function(b) {
				return "jscomp_symbol_" + (b || "") + a++
			}
		}(),
		ta = function() {
			pa();
			var a = oa.Symbol.iterator;
			a || (a = oa.Symbol.iterator = oa.Symbol("iterator"));
			"function" != typeof Array.prototype[a] && na(Array.prototype, a, {
				configurable: !0,
				writable: !0,
				value: function() {
					return sa(this)
				}
			});
			ta = function() {}
		},
		sa = function(a) {
			var b = 0;
			return ua(function() {
				return b < a.length ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			})
		},
		ua = function(a) {
			ta();
			a = {
				next: a
			};
			a[oa.Symbol.iterator] = function() {
				return this
			};
			return a
		},
		va = function(a) {
			ta();
			var b = a[Symbol.iterator];
			return b ? b.call(a) : sa(a)
		},
		wa = function(a, b) {
			if (b) {
				var c = oa;
				a = a.split(".");
				for (var d = 0; d < a.length - 1; d++) {
					var e = a[d];
					e in c || (c[e] = {});
					c = c[e]
				}
				a = a[a.length - 1];
				d = c[a];
				b = b(d);
				b != d && null != b && na(c, a, {
					configurable: !0,
					writable: !0,
					value: b
				})
			}
		};
	wa("String.prototype.endsWith", function(a) {
		return a ? a : function(a, c) {
			if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
			if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
			var b = this + "";
			a += "";
			void 0 === c && (c = b.length);
			c = Math.max(0, Math.min(c | 0, b.length));
			for (var e = a.length; 0 < e && 0 < c;) if (b[--c] != a[--e]) return !1;
			return 0 >= e
		}
	});
	wa("Object.assign", function(a) {
		return a ? a : function(a, c) {
			for (var b = 1; b < arguments.length; b++) {
				var e = arguments[b];
				if (e) for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (a[f] = e[f])
			}
			return a
		}
	});
	var r = this,
		xa = function(a) {
			return void 0 !== a
		},
		w = function(a) {
			return "string" == typeof a
		},
		x = function(a) {
			return "number" == typeof a
		},
		ya = function(a, b, c) {
			a = a.split(".");
			c = c || r;
			a[0] in c || !c.execScript || c.execScript("var " + a[0]);
			for (var d; a.length && (d = a.shift());)!a.length && xa(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
		},
		za = function() {},
		Aa = function(a) {
			var b = typeof a;
			if ("object" == b) if (a) {
				if (a instanceof Array) return "array";
				if (a instanceof Object) return b;
				var c = Object.prototype.toString.call(a);
				if ("[object Window]" == c) return "object";
				if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
				if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
			} else return "null";
			else if ("function" == b && "undefined" == typeof a.call) return "object";
			return b
		},
		Ba = function(a) {
			return null === a
		},
		y = function(a) {
			return "array" == Aa(a)
		},
		Da = function(a) {
			var b = Aa(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		},
		Ea = function(a) {
			return "function" == Aa(a)
		},
		z = function(a) {
			var b = typeof a;
			return "object" == b && null != a || "function" == b
		},
		Fa = function(a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		Ga = function(a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function() {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function() {
				return a.apply(b, arguments)
			}
		},
		A = function(a, b, c) {
			Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? A = Fa : A = Ga;
			return A.apply(null, arguments)
		},
		B = function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = c.slice();
				b.push.apply(b, arguments);
				return a.apply(this, b)
			}
		},
		Ha = function() {
			return +new Date
		},
		Ja = function(a, b, c) {
			ya(a, b, c)
		},
		C = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.Wb = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.rd = function(a, c, f) {
				for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
				return b.prototype[c].apply(a, d)
			}
		};
	var Ka = document,
		D = window;
	var La = {
		"120x90": !0,
		"160x90": !0,
		"180x90": !0,
		"200x90": !0,
		"468x15": !0,
		"728x15": !0
	};
	var Ma = function(a, b, c) {
			this.o = a;
			this.l = b;
			this.B = this.j = c;
			this.v = -1;
			this.C = !1;
			this.F = "";
			this.D = 0;
			this.A = !1;
			this.G = null
		};
	var Na = function(a, b) {
			a = parseFloat(a);
			return isNaN(a) || 1 < a || 0 > a ? b : a
		},
		Oa = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/,
		Pa = function(a, b) {
			return a ? (a = a.match(Oa)) ? a[0] : b : b
		};
	var Qa = function(a) {
			if (Error.captureStackTrace) Error.captureStackTrace(this, Qa);
			else {
				var b = Error().stack;
				b && (this.stack = b)
			}
			a && (this.message = String(a))
		};
	C(Qa, Error);
	Qa.prototype.name = "CustomError";
	var Ra;
	var $a = function(a) {
			if (!Sa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;"));
			return a
		},
		Ta = /&/g,
		Va = /</g,
		Wa = />/g,
		Xa = /"/g,
		Ya = /'/g,
		Za = /\x00/g,
		Sa = /[\x00&<>"']/,
		cb = function(a) {
			return -1 != a.indexOf("&") ? "document" in r ? ab(a) : bb(a) : a
		},
		ab = function(a, b) {
			var c = {
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"'
			};
			var d = b ? b.createElement("div") : r.document.createElement("div");
			return a.replace(db, function(a, b) {
				var e = c[a];
				if (e) return e;
				"#" == b.charAt(0) && (b = Number("0" + b.substr(1)), isNaN(b) || (e = String.fromCharCode(b)));
				e || (d.innerHTML = a + " ", e = d.firstChild.nodeValue.slice(0, -1));
				return c[a] = e
			})
		},
		bb = function(a) {
			return a.replace(/&([^;]+);/g, function(a, c) {
				switch (c) {
				case "amp":
					return "&";
				case "lt":
					return "<";
				case "gt":
					return ">";
				case "quot":
					return '"';
				default:
					return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
				}
			})
		},
		db = /&([^;\s<&]+);?/g,
		eb = {
			"\x00": "\\0",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\x0B": "\\x0B",
			'"': '\\"',
			"\\": "\\\\",
			"<": "<"
		},
		fb = {
			"'": "\\'"
		},
		hb = function(a, b) {
			var c = 0;
			a = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
			b = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c = gb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || gb(0 == f[2].length, 0 == g[2].length) || gb(f[2], g[2]);
					f = f[3];
					g = g[3]
				} while (0 == c)
			}
			return c
		},
		gb = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		},
		ib = function(a) {
			return String(a).replace(/\-([a-z])/g, function(a, c) {
				return c.toUpperCase()
			})
		},
		lb = function(a) {
			var b = w(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
			return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
				return b + e.toUpperCase()
			})
		};
	var mb = function(a, b) {
			if (w(a)) return w(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
			for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
			return -1
		},
		nb = function(a, b) {
			for (var c = a.length, d = w(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
		},
		ob = function(a, b) {
			for (var c = a.length, d = [], e = 0, f = w(a) ? a.split("") : a, g = 0; g < c; g++) if (g in f) {
				var h = f[g];
				b.call(void 0, h, g, a) && (d[e++] = h)
			}
			return d
		},
		pb = function(a, b) {
			for (var c = a.length, d = Array(c), e = w(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d
		},
		qb = function(a, b) {
			for (var c = a.length, d = w(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
			return !1
		},
		rb = function(a) {
			var b = a.length;
			if (0 < b) {
				for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c
			}
			return []
		},
		sb = function(a, b) {
			for (var c = 1; c < arguments.length; c++) {
				var d = arguments[c];
				if (Da(d)) {
					var e = a.length || 0,
						f = d.length || 0;
					a.length = e + f;
					for (var g = 0; g < f; g++) a[e + g] = d[g]
				} else a.push(d)
			}
		};
	var tb = function(a, b) {
			for (var c in a) b.call(void 0, a[c], c, a)
		},
		vb = function(a) {
			a: {
				var b = ub,
					c;
				for (c in b) if (b[c] == a) {
					a = !0;
					break a
				}
				a = !1
			}
			return a
		},
		wb = function(a) {
			var b = [],
				c = 0,
				d;
			for (d in a) b[c++] = d;
			return b
		},
		yb = function(a, b) {
			return null !== a && b in a
		},
		zb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
		Ab = function(a, b) {
			for (var c, d, e = 1; e < arguments.length; e++) {
				d = arguments[e];
				for (c in d) a[c] = d[c];
				for (var f = 0; f < zb.length; f++) c = zb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
			}
		};
	var Bb = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	};
	var Db = function() {
			this.j = "";
			this.l = Cb
		};
	Db.prototype.N = !0;
	Db.prototype.K = function() {
		return this.j
	};
	Db.prototype.toString = function() {
		return "Const{" + this.j + "}"
	};
	var Eb = function(a) {
			return a instanceof Db && a.constructor === Db && a.l === Cb ? a.j : "type_error:Const"
		},
		Cb = {},
		Fb = function(a) {
			var b = new Db;
			b.j = a;
			return b
		};
	Fb("");
	var Hb = function() {
			this.j = "";
			this.l = Gb
		};
	Hb.prototype.N = !0;
	Hb.prototype.K = function() {
		return this.j
	};
	Hb.prototype.ya = !0;
	Hb.prototype.ga = function() {
		return 1
	};
	var Ib = function(a) {
			if (a instanceof Hb && a.constructor === Hb && a.l === Gb) return a.j;
			Aa(a);
			return "type_error:TrustedResourceUrl"
		},
		Gb = {};
	var Kb = function() {
			this.j = "";
			this.l = Jb
		};
	Kb.prototype.N = !0;
	Kb.prototype.K = function() {
		return this.j
	};
	Kb.prototype.ya = !0;
	Kb.prototype.ga = function() {
		return 1
	};
	var Lb = function(a) {
			if (a instanceof Kb && a.constructor === Kb && a.l === Jb) return a.j;
			Aa(a);
			return "type_error:SafeUrl"
		},
		Mb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ob = function(a) {
			if (a instanceof Kb) return a;
			a = a.N ? a.K() : String(a);
			Mb.test(a) || (a = "about:invalid#zClosurez");
			return Nb(a)
		},
		Pb = function(a) {
			if (a instanceof Kb) return a;
			a = a.N ? a.K() : String(a);
			Mb.test(a) || (a = "about:invalid#zClosurez");
			return Nb(a)
		},
		Jb = {},
		Nb = function(a) {
			var b = new Kb;
			b.j = a;
			return b
		};
	Nb("about:blank");
	var Rb = function() {
			this.j = "";
			this.l = Qb
		};
	Rb.prototype.N = !0;
	var Qb = {};
	Rb.prototype.K = function() {
		return this.j
	};
	var Sb = function(a) {
			var b = new Rb;
			b.j = a;
			return b
		},
		Tb = Sb(""),
		cc = function(a) {
			if (a instanceof Kb) a = 'url("' + Lb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
			else if (a instanceof Db) a = Eb(a);
			else {
				a = String(a);
				var b = a.replace(Ub, "$1").replace(Vb, "url");
				if (b = ac.test(b)) {
					for (var c = b = !0, d = 0; d < a.length; d++) {
						var e = a.charAt(d);
						"'" == e && c ? b = !b : '"' == e && b && (c = !c)
					}
					b = b && c
				}
				a = b ? bc(a) : "zClosurez"
			}
			return a
		},
		ac = /^[-,."'%_!# a-zA-Z0-9]+$/,
		Vb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
		Ub = /\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\)/g,
		bc = function(a) {
			return a.replace(Vb, function(a, c, d, e) {
				var b = "";
				d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
					b = c;
					return d
				});
				a = Ob(d).K();
				return c + b + a + b + e
			})
		};
	var ec = function() {
			this.j = "";
			this.l = dc
		};
	ec.prototype.N = !0;
	var dc = {},
		hc = function(a) {
			a = Eb(a);
			return 0 === a.length ? fc : gc(a)
		};
	ec.prototype.K = function() {
		return this.j
	};
	var gc = function(a) {
			var b = new ec;
			b.j = a;
			return b
		},
		fc = gc("");
	var ic;
	a: {
		var jc = r.navigator;
		if (jc) {
			var kc = jc.userAgent;
			if (kc) {
				ic = kc;
				break a
			}
		}
		ic = ""
	}
	var E = function(a) {
			return -1 != ic.indexOf(a)
		},
		lc = function(a) {
			for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
			return c
		};
	var mc = function() {
			return E("Opera")
		},
		nc = function() {
			return E("Trident") || E("MSIE")
		},
		pc = function() {
			return E("Safari") && !(oc() || E("Coast") || mc() || E("Edge") || E("Silk") || E("Android"))
		},
		oc = function() {
			return (E("Chrome") || E("CriOS")) && !E("Edge")
		},
		rc = function() {
			function a(a) {
				a: {
					var b = d;
					for (var e = a.length, h = w(a) ? a.split("") : a, k = 0; k < e; k++) if (k in h && b.call(void 0, h[k], k, a)) {
						b = k;
						break a
					}
					b = -1
				}
				return c[0 > b ? null : w(a) ? a.charAt(b) : a[b]] || ""
			}
			var b = ic;
			if (nc()) return qc(b);
			b = lc(b);
			var c = {};
			nb(b, function(a) {
				c[a[0]] = a[1]
			});
			var d = B(yb, c);
			return mc() ? a(["Version", "Opera"]) : E("Edge") ? a(["Edge"]) : oc() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
		},
		sc = function(a) {
			return 0 <= hb(rc(), a)
		},
		qc = function(a) {
			var b = /rv: *([\d\.]*)/.exec(a);
			if (b && b[1]) return b[1];
			b = "";
			var c = /MSIE +([\d\.]+)/.exec(a);
			if (c && c[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) if (a && a[1]) switch (a[1]) {
			case "4.0":
				b = "8.0";
				break;
			case "5.0":
				b = "9.0";
				break;
			case "6.0":
				b = "10.0";
				break;
			case "7.0":
				b = "11.0"
			} else b = "7.0";
			else b = c[1];
			return b
		};
	var uc = function() {
			this.j = "";
			this.o = tc;
			this.l = null
		};
	uc.prototype.ya = !0;
	uc.prototype.ga = function() {
		return this.l
	};
	uc.prototype.N = !0;
	uc.prototype.K = function() {
		return this.j
	};
	var vc = function(a) {
			if (a instanceof uc && a.constructor === uc && a.o === tc) return a.j;
			Aa(a);
			return "type_error:SafeHtml"
		},
		xc = function(a) {
			if (a instanceof uc) return a;
			var b = null;
			a.ya && (b = a.ga());
			a = $a(a.N ? a.K() : String(a));
			return wc(a, b)
		},
		yc = /^[a-zA-Z0-9-]+$/,
		zc = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		Ac = {
			APPLET: !0,
			BASE: !0,
			EMBED: !0,
			IFRAME: !0,
			LINK: !0,
			MATH: !0,
			META: !0,
			OBJECT: !0,
			SCRIPT: !0,
			STYLE: !0,
			SVG: !0,
			TEMPLATE: !0
		},
		Cc = function(a, b, c) {
			var d = String(a);
			if (!yc.test(d)) throw Error("Invalid tag name <" + d + ">.");
			if (d.toUpperCase() in Ac) throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
			a = String(a);
			d = null;
			var e = "<" + a,
				f = "";
			if (b) for (q in b) {
				if (!yc.test(q)) throw Error('Invalid attribute name "' + q + '".');
				var g = b[q];
				if (null != g) {
					var h = a;
					var k = q;
					var l = g;
					if (l instanceof Db) l = Eb(l);
					else if ("style" == k.toLowerCase()) {
						g = void 0;
						h = l;
						if (!z(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
						if (!(h instanceof Rb)) {
							l = "";
							for (g in h) {
								if (!/^[-_a-zA-Z0-9]+$/.test(g)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + g);
								var p = h[g];
								null != p && (p = y(p) ? pb(p, cc).join(" ") : cc(p), l += g + ":" + p + ";")
							}
							h = l ? Sb(l) : Tb
						}
						h instanceof Rb && h.constructor === Rb && h.l === Qb ? g = h.j : (Aa(h), g = "type_error:SafeStyle");
						l = g
					} else {
						if (/^on/i.test(k)) throw Error('Attribute "' + k + '" requires goog.string.Const value, "' + l + '" given.');
						if (k.toLowerCase() in zc) if (l instanceof Hb) l = Ib(l);
						else if (l instanceof Kb) l = Lb(l);
						else if (w(l)) l = Ob(l).K();
						else throw Error('Attribute "' + k + '" on tag "' + h + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + l + '" given.');
					}
					l.N && (l = l.K());
					k = k + '="' + $a(String(l)) + '"';
					f += " " + k
				}
			}
			var q = e + f;
			null != c ? y(c) || (c = [c]) : c = [];
			!0 === Bb[a.toLowerCase()] ? q += ">" : (c = Bc(c), q += ">" + vc(c) + "</" + a + ">", d = c.ga());
			(b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? d = 0 : d = null);
			return wc(q, d)
		},
		Bc = function(a) {
			var b = 0,
				c = "",
				d = function(a) {
					y(a) ? nb(a, d) : (a = xc(a), c += vc(a), a = a.ga(), 0 == b ? b = a : 0 != a && b != a && (b = null))
				};
			nb(arguments, d);
			return wc(c, b)
		},
		tc = {},
		wc = function(a, b) {
			var c = new uc;
			c.j = a;
			c.l = b;
			return c
		};
	wc("<!DOCTYPE html>", 0);
	wc("", 0);
	wc("<br>", 0);
	var Dc = function(a, b) {
			a.innerHTML = vc(b)
		},
		Gc = function(a, b) {
			b = b instanceof Kb ? b : Pb(b);
			a.src = Lb(b)
		};
	var Ic = function(a) {
			Hc();
			var b = new Hb;
			b.j = a;
			return b
		},
		Hc = za;
	var Jc = function(a) {
			Jc[" "](a);
			return a
		};
	Jc[" "] = za;
	var Mc = function(a, b) {
			try {
				return Jc(a[b]), !0
			} catch (c) {}
			return !1
		},
		Oc = function(a, b) {
			var c = Nc;
			return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
		};
	var Pc = function(a) {
			try {
				return !!a && null != a.location.href && Mc(a, "foo")
			} catch (b) {
				return !1
			}
		},
		Qc = function(a, b) {
			var c = [r.top],
				d = [],
				e = 0;
			b = b || 1024;
			for (var f; f = c[e++];) {
				a && !Pc(f) || d.push(f);
				try {
					if (f.frames) for (var g = f.frames.length, h = 0; h < g && c.length < b; ++h) c.push(f.frames[h])
				} catch (k) {}
			}
			return d
		},
		Rc = function(a, b) {
			var c = a.createElement("script");
			b = Ic(b);
			c.src = Ib(b);
			(a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
		},
		Sc = function(a, b) {
			return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
		},
		Tc = function(a, b) {
			if (!(1E-4 > Math.random())) {
				var c = Math.random();
				if (c < b) {
					try {
						var d = new Uint32Array(1);
						r.crypto.getRandomValues(d);
						c = d[0] / 65536 / 65536
					} catch (e) {
						c = Math.random()
					}
					return a[Math.floor(c * a.length)]
				}
			}
			return null
		},
		Uc = function(a, b) {
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
		},
		Wc = function() {
			var a = [];
			Uc(Vc, function(b) {
				a.push(b)
			});
			return a
		},
		Xc = function(a) {
			var b = a.length;
			if (0 == b) return 0;
			for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
			return 0 < c ? c : 4294967296 + c
		},
		Yc = /^([0-9.]+)px$/,
		Zc = /^(-?[0-9.]{1,30})$/,
		$c = function(a) {
			return Zc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
		},
		ad = function(a) {
			return /^true$/.test(a)
		},
		bd = function(a) {
			return (a = Yc.exec(a)) ? +a[1] : null
		},
		cd = function() {
			var a = r.document.URL;
			if (!a) return "";
			var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
			try {
				var c = b.exec(decodeURIComponent(a));
				if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
			} catch (d) {}
			return ""
		},
		dd = function() {
			var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation"];
			return ob("allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation".split(" "), function(b) {
				return !(0 <= mb(a, b))
			}).join(" ")
		};
	var ed = function() {
			return "r20171106"
		},
		fd = ad("false"),
		gd = ad("false"),
		hd = ad("false"),
		id = ad("true"),
		jd = ad("false"),
		kd = jd || !id,
		ld = Na("0.02", 0),
		md = Na("0.0", 0);
	var nd = function() {
			return Pa("", "googleads.g.doubleclick.net")
		},
		od = function() {
			return Pa("", "pagead2.googlesyndication.com")
		},
		pd = function(a) {
			return a ? "pagead2.googlesyndication.com" : Pa("", "pagead2.googlesyndication.com")
		};
	var ud = function() {
			return E("iPhone") && !E("iPod") && !E("iPad")
		};
	var vd = mc(),
		wd = nc(),
		xd = E("Edge"),
		yd = E("Gecko") && !(-1 != ic.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
		zd = -1 != ic.toLowerCase().indexOf("webkit") && !E("Edge"),
		Ad = E("Macintosh"),
		Bd = E("Windows"),
		Rd = E("Android"),
		Sd = ud(),
		Td = E("iPad"),
		Ud = E("iPod"),
		Vd = ud() || E("iPad") || E("iPod"),
		Wd = function() {
			var a = r.document;
			return a ? a.documentMode : void 0
		},
		Xd;
	a: {
		var Yd = "",
			Zd = function() {
				var a = ic;
				if (yd) return /rv:([^\);]+)(\)|;)/.exec(a);
				if (xd) return /Edge\/([\d\.]+)/.exec(a);
				if (wd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (zd) return /WebKit\/(\S+)/.exec(a);
				if (vd) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();
		Zd && (Yd = Zd ? Zd[1] : "");
		if (wd) {
			var $d = Wd();
			if (null != $d && $d > parseFloat(Yd)) {
				Xd = String($d);
				break a
			}
		}
		Xd = Yd
	}
	var ae = Xd,
		Nc = {},
		be = function(a) {
			return Oc(a, function() {
				return 0 <= hb(ae, a)
			})
		},
		ce;
	var de = r.document;
	ce = de && wd ? Wd() || ("CSS1Compat" == de.compatMode ? parseInt(ae, 10) : 5) : void 0;
	var ee = !wd || 9 <= Number(ce),
		fe = wd && !be("9");
	var ge = function(a, b) {
			this.x = xa(a) ? a : 0;
			this.y = xa(b) ? b : 0
		};
	m = ge.prototype;
	m.clone = function() {
		return new ge(this.x, this.y)
	};
	m.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	m.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	m.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	m.translate = function(a, b) {
		a instanceof ge ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), x(b) && (this.y += b));
		return this
	};
	m.scale = function(a, b) {
		b = x(b) ? b : a;
		this.x *= a;
		this.y *= b;
		return this
	};
	var he = function(a, b) {
			this.width = a;
			this.height = b
		};
	m = he.prototype;
	m.clone = function() {
		return new he(this.width, this.height)
	};
	m.aspectRatio = function() {
		return this.width / this.height
	};
	m.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	m.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	m.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	m.scale = function(a, b) {
		b = x(b) ? b : a;
		this.width *= a;
		this.height *= b;
		return this
	};
	var ke = function(a) {
			return a ? new ie(je(a)) : Ra || (Ra = new ie)
		},
		me = function(a, b) {
			tb(b, function(b, d) {
				b && b.N && (b = b.K());
				"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : le.hasOwnProperty(d) ? a.setAttribute(le[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
			})
		},
		le = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			frameborder: "frameBorder",
			height: "height",
			maxlength: "maxLength",
			nonce: "nonce",
			role: "role",
			rowspan: "rowSpan",
			type: "type",
			usemap: "useMap",
			valign: "vAlign",
			width: "width"
		},
		oe = function(a, b, c) {
			function d(c) {
				c && b.appendChild(w(c) ? a.createTextNode(c) : c)
			}
			for (var e = 2; e < c.length; e++) {
				var f = c[e];
				!Da(f) || z(f) && 0 < f.nodeType ? d(f) : nb(ne(f) ? rb(f) : f, d)
			}
		},
		pe = function(a, b) {
			return a.createElement(String(b))
		},
		je = function(a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		},
		qe = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1
		},
		re = {
			IMG: " ",
			BR: "\n"
		},
		se = function(a, b, c) {
			if (!(a.nodeName in qe)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
			else if (a.nodeName in re) b.push(re[a.nodeName]);
			else for (a = a.firstChild; a;) se(a, b, c), a = a.nextSibling
		},
		ne = function(a) {
			if (a && "number" == typeof a.length) {
				if (z(a)) return "function" == typeof a.item || "string" == typeof a.item;
				if (Ea(a)) return "function" == typeof a.item
			}
			return !1
		},
		ie = function(a) {
			this.j = a || r.document || document
		},
		te = function(a, b) {
			a = a.j;
			b = b && "*" != b ? String(b).toUpperCase() : "";
			a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
			return b
		};
	ie.prototype.l = function(a, b, c) {
		var d = this.j,
			e = arguments,
			f = String(e[0]),
			g = e[1];
		if (!ee && g && (g.name || g.type)) {
			f = ["<", f];
			g.name && f.push(' name="', $a(g.name), '"');
			if (g.type) {
				f.push(' type="', $a(g.type), '"');
				var h = {};
				Ab(h, g);
				delete h.type;
				g = h
			}
			f.push(">");
			f = f.join("")
		}
		f = d.createElement(f);
		g && (w(g) ? f.className = g : y(g) ? f.className = g.join(" ") : me(f, g));
		2 < e.length && oe(d, f, e);
		return f
	};
	ie.prototype.contains = function(a, b) {
		if (!a || !b) return !1;
		if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if ("undefined" != typeof a.compareDocumentPosition) return a == b || !! (a.compareDocumentPosition(b) & 16);
		for (; b && a != b;) b = b.parentNode;
		return b == a
	};
	var ue = function(a, b, c, d) {
			this.left = a;
			this.top = b;
			this.width = c;
			this.height = d
		};
	m = ue.prototype;
	m.clone = function() {
		return new ue(this.left, this.top, this.width, this.height)
	};
	m.contains = function(a) {
		return a instanceof ge ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
	};
	m.ceil = function() {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	m.floor = function() {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	m.round = function() {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	m.translate = function(a, b) {
		a instanceof ge ? (this.left += a.x, this.top += a.y) : (this.left += a, x(b) && (this.top += b));
		return this
	};
	m.scale = function(a, b) {
		b = x(b) ? b : a;
		this.left *= a;
		this.width *= a;
		this.top *= b;
		this.height *= b;
		return this
	};
	var we = function(a, b, c) {
			if (w(b))(b = ve(a, b)) && (a.style[b] = c);
			else for (var d in b) {
				c = a;
				var e = b[d],
					f = ve(c, d);
				f && (c.style[f] = e)
			}
		},
		xe = {},
		ve = function(a, b) {
			var c = xe[b];
			if (!c) {
				var d = ib(b);
				c = d;
				void 0 === a.style[d] && (d = (zd ? "Webkit" : yd ? "Moz" : wd ? "ms" : vd ? "O" : null) + lb(d), void 0 !== a.style[d] && (c = d));
				xe[b] = c
			}
			return c
		},
		ye = function(a) {
			a: {
				var b = je(a);
				if (b.defaultView && b.defaultView.getComputedStyle && (b = b.defaultView.getComputedStyle(a, null))) {
					b = b.position || b.getPropertyValue("position") || "";
					break a
				}
				b = ""
			}
			b || (b = a.currentStyle ? a.currentStyle.position : null);
			return b || a.style && a.style.position
		},
		ze = function(a) {
			try {
				var b = a.getBoundingClientRect()
			} catch (c) {
				return {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				}
			}
			wd && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
			return b
		},
		Be = function(a, b) {
			b = ke(b);
			var c = b.j;
			if (wd && c.createStyleSheet) b = c.createStyleSheet(), Ae(b, a);
			else {
				c = te(b, "HEAD")[0];
				if (!c) {
					var d = te(b, "BODY")[0];
					c = b.l("HEAD");
					d.parentNode.insertBefore(c, d)
				}
				b = b.l("STYLE");
				Ae(b, a);
				c.appendChild(b)
			}
		},
		Ae = function(a, b) {
			b instanceof ec && b.constructor === ec && b.l === dc ? b = b.j : (Aa(b), b = "type_error:SafeStyleSheet");
			wd && xa(a.cssText) ? a.cssText = b : a.innerHTML = b
		};
	var Le = function(a) {
			return function() {
				return a
			}
		},
		Me = Le(!1),
		Ne = Le(!0),
		Oe = function(a) {
			return function() {
				return !a.apply(this, arguments)
			}
		},
		Pe = function(a) {
			var b = !1,
				c;
			return function() {
				b || (c = a(), b = !0);
				return c
			}
		},
		Qe = function(a) {
			var b = a;
			return function() {
				if (b) {
					var a = b;
					b = null;
					a()
				}
			}
		},
		Re = function(a, b, c) {
			var d = 0;
			return function(e) {
				r.clearTimeout(d);
				var f = arguments;
				d = r.setTimeout(function() {
					a.apply(c, f)
				}, b)
			}
		};
	var Se = {
		passive: !0
	},
		Te = Pe(function() {
			var a = !1;
			try {
				var b = Object.defineProperty({}, "passive", {
					get: function() {
						a = !0
					}
				});
				r.addEventListener("test", null, b)
			} catch (c) {}
			return a
		});

	function Ue(a) {
		return a ? a.passive && Te() ? a : a.capture || !1 : a
	}
	var F = function(a, b, c, d) {
			return a.addEventListener ? (a.addEventListener(b, c, Ue(d)), !0) : a.attachEvent ? (a.attachEvent("on" + b, c), !0) : !1
		},
		Ve = function(a, b, c, d) {
			return a.removeEventListener ? (a.removeEventListener(b, c, Ue(d)), !0) : a.detachEvent ? (a.detachEvent("on" + b, c), !0) : !1
		};
	var We = {
		"AMP-CAROUSEL": "ac",
		"AMP-FX-FLYING-CARPET": "fc",
		"AMP-LIGHTBOX": "lb",
		"AMP-STICKY-AD": "sa"
	},
		Xe = function(a) {
			a = a || r;
			var b = a.context;
			if (!b) try {
				b = a.parent.context
			} catch (c) {}
			try {
				if (b && "pageViewId" in b && "canonicalUrl" in b) return b
			} catch (c) {}
			return null
		},
		Ye = function() {
			var a = Xe();
			return a && a.initialIntersection ? a.initialIntersection : null
		},
		tf = function() {
			var a = Ye();
			return a && z(a.rootBounds) ? new he(a.rootBounds.width, a.rootBounds.height) : null
		},
		uf = function(a) {
			a = a || Xe();
			if (!a) return null;
			a = a.master;
			return Pc(a) ? a : null
		},
		vf = function(a, b) {
			var c = a.ampInaboxIframes = a.ampInaboxIframes || [];
			b && c.push(b);
			a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
			c.google_amp_listener_added || (c.google_amp_listener_added = !0, F(a, "message", function(b) {
				var c;
				a.ampInaboxPendingMessages && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Rc(a.document, "https://cdn.ampproject.org/" + (c[1] ? "rtv/" + c[1] + "/" : "") + "amp4ads-host-v0.js"))
			}))
		};
	var wf = function(a, b) {
			r.google_image_requests || (r.google_image_requests = []);
			var c = r.document.createElement("img");
			if (b) {
				var d = function(a) {
						b(a);
						Ve(c, "load", d);
						Ve(c, "error", d)
					};
				F(c, "load", d);
				F(c, "error", d)
			}
			c.src = a;
			r.google_image_requests.push(c)
		};
	var xf = Object.prototype.hasOwnProperty,
		G = function(a, b) {
			for (var c in a) xf.call(a, c) && b.call(void 0, a[c], c, a)
		},
		yf = function(a) {
			return !(!a || !a.call) && "function" === typeof a
		},
		zf = function(a, b) {
			for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
		},
		Af = function(a, b) {
			if (a.filter) return a.filter(b, void 0);
			for (var c = [], d = 0; d < a.length; d++) b.call(void 0, a[d], d, a) && c.push(a[d]);
			return c
		},
		Bf = function(a, b) {
			if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
			for (var c = 0; c < a.length; c++) if (a[c] === b) return !0;
			return !1
		},
		Cf = function() {
			var a = H();
			"google_onload_fired" in a || (a.google_onload_fired = !1, F(a, "load", function() {
				a.google_onload_fired = !0
			}))
		},
		Df = function(a, b) {
			var c = b.slice(-1),
				d = "?" === c || "#" === c ? "" : "&",
				e = [b];
			G(a, function(a, b) {
				if (a || 0 === a || !1 === a)"boolean" === typeof a && (a = a ? 1 : 0), zf(e, d, b, "=", encodeURIComponent(String(a))), d = "&"
			});
			return e.join("")
		},
		Ef = function() {
			var a = void 0 === a ? D : a;
			try {
				return a.history.length
			} catch (b) {
				return 0
			}
		},
		Ff = function(a) {
			a = uf(Xe(a)) || a;
			a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
		},
		Gf = function(a) {
			a = a.google_unique_id;
			return "number" === typeof a ? a : 0
		},
		Hf = function(a) {
			return !!a.google_async_iframe_id
		},
		If = Hf(window),
		Jf = If && window.parent || window,
		H = function() {
			if (If && !Pc(Jf)) {
				var a = "." + Ka.domain;
				try {
					for (; 2 < a.split(".").length && !Pc(Jf);) Ka.domain = a = a.substr(a.indexOf(".") + 1), Jf = window.parent
				} catch (b) {}
				Pc(Jf) || (Jf = window)
			}
			return Jf
		},
		Kf = function(a) {
			return "google_ads_frame" + a
		},
		Lf = /(^| )adsbygoogle($| )/,
		Mf = function(a) {
			return function() {
				if (a) {
					var b = a;
					a = null;
					b.apply(null, arguments)
				}
			}
		},
		Nf = function(a) {
			return "1" == a.google_tag_for_child_directed_treatment
		},
		Of = {
			"http://googleads.g.doubleclick.net": !0,
			"http://pagead2.googlesyndication.com": !0,
			"https://googleads.g.doubleclick.net": !0,
			"https://pagead2.googlesyndication.com": !0
		},
		Pf = /\.google\.com(:\d+)?$/,
		Qf = function(a) {
			return !!Of[a] || hd && Pf.test(a)
		},
		Rf = function() {
			var a, b = window.ActiveXObject;
			if (navigator.plugins && navigator.mimeTypes.length) {
				if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
			} else {
				if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
					var c = 3;
					for (a = 1; a;) try {
						a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
					} catch (d) {
						a = null
					}
					return c.toString()
				}
				if (nc()) {
					a = null;
					try {
						a = new b("ShockwaveFlash.ShockwaveFlash.7")
					} catch (d) {
						c = 0;
						try {
							a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
						} catch (e) {
							if (6 === c) return c.toString()
						}
						try {
							a = new b("ShockwaveFlash.ShockwaveFlash")
						} catch (e) {}
					}
					if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
				}
			}
			return "0"
		},
		Sf = function(a) {
			var b = a.google_ad_format;
			return b ? 0 < b.indexOf("_0ads") : "html" !== a.google_ad_output && 0 < a.google_num_radlinks
		},
		Tf = function(a) {
			if (hd) try {
				var b = D.google_cafe_host || D.top.google_cafe_host;
				if (b) return b
			} catch (c) {}
			return pd(a)
		},
		Uf = function(a) {
			return hd && a.google_top_window || a.top
		},
		Vf = function(a) {
			a = Uf(a);
			return Pc(a) ? a : null
		},
		Wf = function(a) {
			try {
				for (var b = 0; 20 > b; b++) {
					if (a == D) return !0;
					if (a == D.top) break;
					a = a.parent
				}
			} catch (c) {}
			return !1
		},
		Xf = function(a, b) {
			a && G(b, function(b, d) {
				a.style[d] = b
			})
		},
		Yf = function(a) {
			D.requestAnimationFrame ? D.requestAnimationFrame(a) : a()
		};
	var Zf = function(a) {
			return (a = a.google_ad_modifications) ? a.eids || [] : []
		},
		$f = function(a) {
			return (a = a.google_ad_modifications) ? a.loeids || [] : []
		};
	var I = {},
		ag = (I.google_ad_channel = "channel", I.google_ad_type = "ad_type", I.google_ad_format = "format", I.google_color_bg = "color_bg", I.google_color_border = "color_border", I.google_color_link = "color_link", I.google_color_text = "color_text", I.google_color_url = "color_url", I.google_page_url = "url", I.google_allow_expandable_ads = "ea", I.google_ad_section = "region", I.google_cpm = "cpm", I.google_encoding = "oe", I.google_safe = "adsafe", I.google_flash_version = "flash", I.google_font_face = "f", I.google_font_size = "fs", I.google_hints = "hints", I.google_ad_host = "host", I.google_ad_host_channel = "h_ch", I.google_ad_host_tier_id = "ht_id", I.google_kw_type = "kw_type", I.google_kw = "kw", I.google_contents = "contents", I.google_targeting = "targeting", I.google_adtest = "adtest", I.google_alternate_color = "alt_color", I.google_alternate_ad_url = "alternate_ad_url", I.google_cust_age = "cust_age", I.google_cust_ch = "cust_ch", I.google_cust_gender = "cust_gender", I.google_cust_interests = "cust_interests", I.google_cust_job = "cust_job", I.google_cust_l = "cust_l", I.google_cust_lh = "cust_lh", I.google_cust_u_url = "cust_u_url", I.google_cust_id = "cust_id", I.google_language = "hl", I.google_city = "gcs", I.google_country = "gl", I.google_region = "gr", I.google_available_width = "avail_w", I.google_content_recommendation_columns_num = "cr_col", I.google_content_recommendation_rows_num = "cr_row", I.google_content_recommendation_ui_type = "crui", I.google_color_line = "color_line", I.google_disable_video_autoplay = "disable_video_autoplay", I.google_full_width_responsive_allowed = "fwr", I.google_pgb_reactive = "pra", I.google_resizing_allowed = "rs", I.google_resizing_height = "rh", I.google_resizing_width = "rw", I.google_responsive_formats = "resp_fmts", I.google_safe_for_responsive_override = "sfro", I.google_video_doc_id = "video_doc_id", I.google_video_product_type = "video_product_type", I.google_webgl_support = "wgl", I),
		J = {},
		bg = (J.google_ad_block = "ad_block", J.google_ad_client = "client", J.google_ad_output = "output", J.google_ad_callback = "callback", J.google_ad_height = "h", J.google_ad_resize = "twa", J.google_ad_slot = "slotname", J.google_ad_unit_key = "adk", J.google_ad_dom_fingerprint = "adf", J.google_ad_width = "w", J.google_analytics_url_parameters = "aup", J.google_captcha_token = "captok", J.google_content_recommendation_ui_type = "crui", J.google_content_recommendation_columns_num = "cr_col", J.google_content_recommendation_rows_num = "cr_row", J.google_ctr_threshold = "ctr_t", J.google_cust_criteria = "cust_params", J.google_full_width_responsive = "fwr_optout", J.google_fwr_non_expansion_reason = "fwrn", J.google_image_size = "image_size", J.google_last_modified_time = "lmt", J.google_loeid = "loeid", J.google_max_num_ads = "num_ads", J.google_max_radlink_len = "max_radlink_len", J.google_mtl = "mtl", J.google_native_settings_key = "nsk", J.google_enable_content_recommendations = "ecr", J.google_infinite_scroll_slot_type = "ifsl", J.google_num_radlinks = "num_radlinks", J.google_num_radlinks_per_unit = "num_radlinks_per_unit", J.google_pucrd = "pucrd", J.google_reactive_plaf = "plaf", J.google_reactive_plat = "plat", J.google_reactive_fba = "fba", J.google_reactive_sra_channels = "plach", J.google_responsive_auto_format = "rafmt", J.google_rl_dest_url = "rl_dest_url", J.google_rl_filtering = "rl_filtering", J.google_rl_mode = "rl_mode", J.google_rt = "rt", J.google_source_type = "src_type", J.google_sui = "sui", J.google_tag_for_child_directed_treatment = "tfcd", J.google_tag_origin = "to", J.google_tfs = "tfs", J),
		cg = {},
		dg = (cg.google_core_dbp = "dbp", cg.google_lact = "lact", cg.google_only_pyv_ads = "pyv", cg.google_scs = "scs", cg.google_video_url_to_fetch = "durl", cg.google_yt_pt = "yt_pt", cg.google_yt_up = "yt_up", cg);
	var eg = function(a, b) {
			a.D |= b
		};
	var fg = function(a) {
			G(ag, function(b, c) {
				a[c] = null
			});
			G(bg, function(b, c) {
				a[c] = null
			});
			G(dg, function(b, c) {
				a[c] = null
			});
			a.google_container_id = null;
			a.google_enable_async = null;
			a.google_eids = null;
			a.google_page_location = null;
			a.google_referrer_url = null;
			a.google_ad_region = null;
			a.google_gl = null;
			a.google_loader_used = null;
			a.google_loader_features_used = null
		},
		gg = function(a, b, c) {
			eg(a, 2);
			return b[c % b.length]
		},
		hg = function(a) {
			if (!a) return "";
			(a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
			return a
		};
	var ub = {
		nb: 1,
		ob: 2,
		vc: 8,
		sb: 9,
		bd: 16,
		qb: 25,
		ic: 26,
		hc: 27,
		rb: 30,
		Ac: 32
	},
		ig = {
			overlays: 1,
			interstitials: 2,
			vignettes: 2,
			inserts: 3,
			immersives: 4,
			list_view: 5,
			full_page: 6
		},
		jg = {
			1: 1,
			2: 1,
			8: 2,
			25: 3,
			27: 3,
			9: 4,
			30: 5,
			32: 6
		},
		kg = {
			name: "adFormat",
			O: x
		},
		lg = {
			name: "adClient",
			O: /^[a-z0-9-]+$/i
		},
		mg = {
			name: "reqSrc",
			O: x
		},
		ng = {
			name: "pubVars",
			O: null
		},
		og = {
			name: "adKey",
			O: x
		},
		pg = {
			dc: kg,
			cc: lg,
			ec: {
				name: "adTest",
				O: /^on$/i
			},
			$c: mg,
			Tc: ng,
			AD_KEY: og
		},
		qg = [{
			name: "google_ad_channel",
			O: {
				predicate: /^[a-z0-9_-]+$/i,
				nullOnInvalid: !0
			}
		}, {
			name: "google_reactive_sra_index",
			O: {
				predicate: x,
				nullOnInvalid: !0
			}
		}, {
			name: "google_ad_unit_key",
			O: {
				predicate: x,
				nullOnInvalid: !0
			}
		}];
	var rg = function(a) {
			for (var b = [], c = 0, d = 0; d < a.length; d++) {
				var e = a.charCodeAt(d);
				255 < e && (b[c++] = e & 255, e >>= 8);
				b[c++] = e
			}
			return b
		};
	var sg = pc() && !(ud() || E("iPad") || E("iPod"));
	var tg = null,
		ug = null,
		vg = null,
		wg = yd || zd && !sg || vd,
		xg = wg || "function" == typeof r.btoa,
		yg = wg || !sg && !wd && "function" == typeof r.atob,
		Ag = function(a, b) {
			zg();
			b = b ? vg : tg;
			for (var c = [], d = 0; d < a.length; d += 3) {
				var e = a[d],
					f = d + 1 < a.length,
					g = f ? a[d + 1] : 0,
					h = d + 2 < a.length,
					k = h ? a[d + 2] : 0,
					l = e >> 2;
				e = (e & 3) << 4 | g >> 4;
				g = (g & 15) << 2 | k >> 6;
				k &= 63;
				h || (k = 64, f || (g = 64));
				c.push(b[l], b[e], b[g], b[k])
			}
			return c.join("")
		},
		Cg = function(a, b) {
			if (yg && !b) return r.atob(a);
			var c = "";
			Bg(a, function(a) {
				c += String.fromCharCode(a)
			});
			return c
		},
		Bg = function(a, b) {
			function c(b) {
				for (; d < a.length;) {
					var c = a.charAt(d++),
						e = ug[c];
					if (null != e) return e;
					if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
				}
				return b
			}
			zg();
			for (var d = 0;;) {
				var e = c(-1),
					f = c(0),
					g = c(64),
					h = c(64);
				if (64 === h && -1 === e) break;
				b(e << 2 | f >> 4);
				64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
			}
		},
		zg = function() {
			if (!tg) {
				tg = {};
				ug = {};
				vg = {};
				for (var a = 0; 65 > a; a++) tg[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), ug[tg[a]] = a, vg[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), 62 <= a && (ug["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
			}
		};
	var K = function() {},
		Dg = "function" == typeof Uint8Array,
		Gg = function(a, b, c) {
			a.j = null;
			b || (b = []);
			a.F = void 0;
			a.v = -1;
			a.l = b;
			a: {
				if (a.l.length) {
					b = a.l.length - 1;
					var d = a.l[b];
					if (d && "object" == typeof d && !y(d) && !(Dg && d instanceof Uint8Array)) {
						a.A = b - a.v;
						a.o = d;
						break a
					}
				}
				a.A = Number.MAX_VALUE
			}
			a.D = {};
			if (c) for (b = 0; b < c.length; b++) d = c[b], d < a.A ? (d += a.v, a.l[d] = a.l[d] || Eg) : (Fg(a), a.o[d] = a.o[d] || Eg)
		},
		Eg = [],
		Fg = function(a) {
			var b = a.A + a.v;
			a.l[b] || (a.o = a.l[b] = {})
		},
		L = function(a, b) {
			if (b < a.A) {
				b += a.v;
				var c = a.l[b];
				return c === Eg ? a.l[b] = [] : c
			}
			if (a.o) return c = a.o[b], c === Eg ? a.o[b] = [] : c
		},
		Hg = function(a, b) {
			if (b < a.A) {
				b += a.v;
				var c = a.l[b];
				return c === Eg ? a.l[b] = [] : c
			}
			c = a.o[b];
			return c === Eg ? a.o[b] = [] : c
		},
		Ig = function(a, b, c) {
			b < a.A ? a.l[b + a.v] = c : (Fg(a), a.o[b] = c)
		},
		Jg = function(a, b, c, d) {
			c != d ? Ig(a, b, c) : a.l[b + a.v] = null
		},
		Kg = function(a, b, c) {
			a.j || (a.j = {});
			if (!a.j[c]) {
				var d = L(a, c);
				d && (a.j[c] = new b(d))
			}
			return a.j[c]
		},
		Lg = function(a, b, c) {
			a.j || (a.j = {});
			if (!a.j[c]) {
				for (var d = Hg(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
				a.j[c] = e
			}
			b = a.j[c];
			b == Eg && (b = a.j[c] = []);
			return b
		},
		Ng = function(a, b, c) {
			a.j || (a.j = {});
			var d = c ? Mg(c) : c;
			a.j[b] = c;
			Ig(a, b, d)
		},
		Og = function(a) {
			if (a.j) for (var b in a.j) {
				var c = a.j[b];
				if (y(c)) for (var d = 0; d < c.length; d++) c[d] && Mg(c[d]);
				else c && Mg(c)
			}
		},
		Mg = function(a) {
			Og(a);
			return a.l
		};
	K.prototype.C = Dg ?
	function() {
		var a = Uint8Array.prototype.toJSON;
		Uint8Array.prototype.toJSON = function() {
			return Ag(this)
		};
		try {
			var b = JSON.stringify(Mg(this), Pg)
		} finally {
			Uint8Array.prototype.toJSON = a
		}
		return b
	} : function() {
		return JSON.stringify(Mg(this), Pg)
	};
	var Pg = function(a, b) {
			if (x(b)) {
				if (isNaN(b)) return "NaN";
				if (Infinity === b) return "Infinity";
				if (-Infinity === b) return "-Infinity"
			}
			return b
		};
	K.prototype.toString = function() {
		Og(this);
		return this.l.toString()
	};
	K.prototype.clone = function() {
		return new this.constructor(Qg(Mg(this)))
	};
	var Qg = function(a) {
			var b;
			if (y(a)) {
				for (var c = Array(a.length), d = 0; d < a.length; d++) null != (b = a[d]) && (c[d] = "object" == typeof b ? Qg(b) : b);
				return c
			}
			if (Dg && a instanceof Uint8Array) return new Uint8Array(a);
			c = {};
			for (d in a) null != (b = a[d]) && (c[d] = "object" == typeof b ? Qg(b) : b);
			return c
		};
	var Sg = function(a) {
			Gg(this, a, Rg)
		};
	C(Sg, K);
	var Rg = [4],
		Tg = function(a) {
			Gg(this, a, null)
		};
	C(Tg, K);
	var Ug = function(a) {
			Gg(this, a, null)
		};
	C(Ug, K);
	var Wg = function(a) {
			Gg(this, a, Vg)
		};
	C(Wg, K);
	var Vg = [3, 4],
		Yg = function(a) {
			Gg(this, a, Xg)
		};
	C(Yg, K);
	var Xg = [6, 7, 9, 10];
	var $g = function(a) {
			Gg(this, a, Zg)
		};
	C($g, K);
	var Zg = [1],
		ah = function(a) {
			Gg(this, a, null)
		};
	C(ah, K);
	var ch = function(a) {
			Gg(this, a, bh)
		};
	C(ch, K);
	var bh = [2],
		eh = function(a) {
			Gg(this, a, dh)
		};
	C(eh, K);
	var dh = [3],
		fh = function(a) {
			Gg(this, a, null)
		};
	C(fh, K);
	fh.prototype.ea = function() {
		return L(this, 1)
	};
	var hh = function(a) {
			Gg(this, a, gh)
		};
	C(hh, K);
	var gh = [1],
		jh = function(a) {
			Gg(this, a, ih)
		};
	C(jh, K);
	var ih = [1, 2, 5, 7],
		kh = function(a) {
			Gg(this, a, null)
		};
	C(kh, K);
	var mh = function(a) {
			Gg(this, a, lh)
		};
	C(mh, K);
	var lh = [2];
	var oh = function(a, b, c) {
			a = nh(a, b);
			for (b = 0; b < a.length; b++) if (a[b] == c) return !0;
			return !1
		},
		nh = function(a, b) {
			var c = Hg(b, 5);
			if (0 < c.length) return c;
			a: {
				a = a.location.pathname;
				c = Lg(b, mh, 7);
				b = {};
				for (var d = 0; d < c.length; ++d) {
					var e = L(c[d], 1);
					x(e) && !b[e] && (b[e] = c[d])
				}
				for (a = a.replace(/(^\/)|(\/$)/g, "");;) {
					c = Xc(a);
					if (b[c]) {
						b = b[c];
						break a
					}
					if (!a) {
						b = null;
						break a
					}
					a = a.substring(0, a.lastIndexOf("/"))
				}
			}
			return b ? Hg(b, 2) : []
		};
	var ph = function(a, b, c) {
			c = void 0 === c ? {} : c;
			this.error = a;
			this.context = b.context;
			this.line = b.line || -1;
			this.msg = b.message || "";
			this.file = b.file || "";
			this.id = b.id || "jserror";
			this.meta = c
		};
	var qh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
		rh = function(a) {
			return a ? decodeURI(a) : a
		},
		sh = function(a, b, c) {
			if (y(b)) for (var d = 0; d < b.length; d++) sh(a, String(b[d]), c);
			else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
		},
		th = function(a) {
			var b = [],
				c;
			for (c in a) sh(c, a[c], b);
			return b.join("&")
		};
	var uh = function(a) {
			if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
				a = a[0].toLowerCase();
				for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
				switch (b) {
				case 1967261364:
					return 0;
				case 3147493546:
					return 1;
				case 1567346461:
					return 2;
				case 2183041838:
					return 3;
				case 763236279:
					return 4;
				case 1342279801:
					return 5;
				case 526831769:
					return 6;
				case 352806002:
					return 7;
				case 2755048925:
					return 8;
				case 3306848407:
					return 9;
				case 2207000920:
					return 10;
				case 484037040:
					return 11;
				case 3506871055:
					return 12;
				case 672143848:
					return 13;
				case 2528751226:
					return 14;
				case 2744854768:
					return 15;
				case 3703278665:
					return 16;
				case 2014749173:
					return 17;
				case 133063824:
					return 18;
				case 2749334602:
					return 19;
				case 3131239845:
					return 20;
				case 2074086763:
					return 21;
				case 795772493:
					return 22;
				case 290857819:
					return 23;
				case 3035947606:
					return 24;
				case 2983138003:
					return 25;
				case 2197138676:
					return 26;
				case 4216016165:
					return 27;
				case 239803524:
					return 28;
				case 975993579:
					return 29;
				case 1794940339:
					return 30;
				case 1314429186:
					return 31;
				case 1643618937:
					return 32;
				case 497159982:
					return 33
				}
			}
			return -1
		},
		vh = function(a) {
			if (!a.length) return 0;
			for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
			for (c = a.length - 1; 0 <= c; c--) {
				var d = uh(a[c]);
				0 <= d && (b[33 - d] = 1)
			}
			return parseInt(b.join(""), 2)
		};
	var wh = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
		xh = function(a, b) {
			this.j = a;
			this.l = b
		},
		yh = function(a, b, c) {
			this.url = a;
			this.ca = b;
			this.bb = !! c;
			this.depth = x(void 0) ? void 0 : null
		},
		Ah = function(a) {
			a = (this.j = a || r) || r;
			this.o = a.top == a ? 1 : Pc(a.top) ? 2 : 3;
			3 != this.o && Date.parse(r.top.document.lastModified);
			this.l = zh(this.j)
		},
		Bh = function(a, b) {
			for (var c = 0, d = (a = a.l[Math.max(a.l.length - 1, 0)].url || null) && rh(a.match(qh)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++) if (a = null != b[f] && rh(b[f].match(qh)[3] || null) || "", c *= 4, a) if (d && a == d) c += 3;
			else {
				a: {
					var g = b[f];
					for (var h = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|(\/.*))/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|(\/.*))/i, /^https?:\/\/(tpc|pagead2).googlesyndication\.com(:\d+)?($|(\/.*))/i, /^https?:\/\/www.googletagservices\.com(:\d+)?($|(\/.*))/i], k = 0; k < h.length; ++k) if (h[k].test(g)) {
						g = !0;
						break a
					}
					g = !1
				}
				g ? c += 2 : a && 0 <= uh(a) && (c += 1)
			}
			return c
		},
		zh = function(a) {
			var b = a || r,
				c = [],
				d = null;
			do {
				var e = b;
				if (Pc(e)) {
					var f = e.location.href;
					d = e.document && e.document.referrer || null
				} else f = d, d = null;
				c.push(new yh(f || "", e));
				try {
					b = e.parent
				} catch (g) {
					b = null
				}
			} while (b && e != b);
			b = 0;
			for (e = c.length - 1; b <= e; ++b) c[b].depth = e - b;
			e = a || r;
			if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1) for (b = 1; b < c.length; ++b) a = c[b], a.url || (a.url = e.location.ancestorOrigins[b - 1] || "", a.bb = !0);
			return c
		};
	var Ch = function(a, b, c, d, e) {
			this.C = c || 4E3;
			this.o = a || "&";
			this.D = b || ",$";
			this.v = xa(d) ? d : "trn";
			this.G = e || null;
			this.A = !1;
			this.l = {};
			this.F = 0;
			this.j = []
		},
		Dh = function(a, b) {
			var c = {};
			c[a] = b;
			return [c]
		},
		Fh = function(a, b, c, d, e) {
			var f = [];
			Uc(a, function(a, h) {
				(a = Eh(a, b, c, d, e)) && f.push(h + "=" + a)
			});
			return f.join(b)
		},
		Eh = function(a, b, c, d, e) {
			if (null == a) return "";
			b = b || "&";
			c = c || ",$";
			"string" == typeof c && (c = c.split(""));
			if (a instanceof Array) {
				if (d = d || 0, d < c.length) {
					for (var f = [], g = 0; g < a.length; g++) f.push(Eh(a[g], b, c, d + 1, e));
					return f.join(c[d])
				}
			} else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Fh(a, b, c, d, e + 1)) : "...";
			return encodeURIComponent(String(a))
		},
		Gh = function(a, b, c, d) {
			a.j.push(b);
			a.l[b] = Dh(c, d)
		},
		xi = function(a, b, c, d) {
			b = b + "//" + c + d;
			var e = wi(a) - d.length - 0;
			if (0 > e) return "";
			a.j.sort(function(a, b) {
				return a - b
			});
			d = null;
			c = "";
			for (var f = 0; f < a.j.length; f++) for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
				if (!e) {
					d = null == d ? g : d;
					break
				}
				var l = Fh(h[k], a.o, a.D);
				if (l) {
					l = c + l;
					if (e >= l.length) {
						e -= l.length;
						b += l;
						c = a.o;
						break
					} else a.A && (c = e, l[c - 1] == a.o && --c, b += l.substr(0, c), c = a.o, e = 0);
					d = null == d ? g : d
				}
			}
			f = "";
			a.v && null != d && (f = c + a.v + "=" + (a.G || d));
			return b + f + ""
		},
		wi = function(a) {
			if (!a.v) return a.C;
			var b = 1,
				c;
			for (c in a.l) b = c.length > b ? c.length : b;
			return a.C - a.v.length - b - a.o.length - 1
		};
	var yi = function(a, b, c, d, e, f) {
			if ((d ? a.A : Math.random()) < (e || a.j)) try {
				if (c instanceof Ch) var g = c;
				else g = new Ch, Uc(c, function(a, b) {
					var c = g,
						d = c.F++;
					a = Dh(b, a);
					c.j.push(d);
					c.l[d] = a
				});
				var h = xi(g, a.v, a.l, a.o + b + "&");
				h && ("undefined" === typeof f ? wf(h, void 0) : wf(h, f))
			} catch (k) {}
		};
	var zi = !1,
		Ai = null,
		Bi = function(a) {
			this.j = {};
			this.l = {};
			this.o = !1;
			a = a || [];
			for (var b = 0, c = a.length; b < c; ++b) this.l[a[b]] = ""
		},
		Di = function() {
			var a = Ci(),
				b = new Bi;
			Uc(a.j, function(a, d) {
				b.j[d] = a
			});
			Uc(a.l, function(a, d) {
				b.l[d] = a
			});
			return b
		},
		Ei = function() {
			if (null === Ai) {
				Ai = "";
				try {
					var a = r.top.location.hash;
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Ai = b ? b[1] : ""
					}
				} catch (c) {}
			}
			return Ai
		},
		M = function(a, b, c) {
			return "" == b ? "" : c ? a.l.hasOwnProperty(c) ? a.l[c] = b : "" : (a.j[b] = !0, b)
		},
		N = function(a, b, c, d) {
			if (a.o) return "";
			if (d ? a.l.hasOwnProperty(d) && "" == a.l[d] : 1) {
				var e;
				e = (e = Ei()) ? (e = e.match(new RegExp("\\b(" + b.join("|") + ")\\b"))) ? e[0] : null : null;
				if (b = e ? e : zi ? null : Tc(b, c)) return M(a, b, d)
			}
			return ""
		},
		P = function(a, b) {
			return a.l.hasOwnProperty(b) ? a.l[b] : ""
		},
		Fi = function(a) {
			var b = [];
			Uc(a.j, function(a, d) {
				b.push(d)
			});
			Uc(a.l, function(a) {
				"" != a && b.push(a)
			});
			return b
		};
	var Gi = function() {
			var a = r.performance;
			return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ha()
		},
		Hi = function() {
			var a = r.performance;
			return a && a.now ? a.now() : null
		};
	var Ii = function(a, b, c) {
			this.label = a;
			this.type = b;
			this.value = c;
			this.duration = 0;
			this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
			this.slotId = void 0
		};
	var Ji = r.performance,
		Ki = !! (Ji && Ji.mark && Ji.measure && Ji.clearMarks),
		Li = Pe(function() {
			var a;
			if (a = Ki) a = Ei(), a = !! a.indexOf && 0 <= a.indexOf("1337");
			return a
		}),
		Mi = function(a, b) {
			this.events = [];
			this.l = b || r;
			var c = null;
			b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
			this.j = Li() || (null != c ? c : Math.random() < a)
		},
		Pi = function() {
			var a = Ni;
			a.j = !1;
			a.events != a.l.google_js_reporting_queue && (Li() && nb(a.events, Oi), a.events.length = 0)
		},
		Oi = function(a) {
			a && Li() && (Ji.clearMarks("goog_" + a.uniqueId + "_start"), Ji.clearMarks("goog_" + a.uniqueId + "_end"))
		};
	Mi.prototype.start = function(a, b) {
		if (!this.j) return null;
		var c = Hi() || Gi();
		a = new Ii(a, b, c);
		b = "goog_" + a.uniqueId + "_start";
		Li() && Ji.mark(b);
		return a
	};
	var Qi = function(a, b, c, d) {
			this.A = a;
			this.D = b;
			this.v = c;
			this.o = null;
			this.C = this.j;
			this.l = void 0 === d ? null : d
		},
		Ti = function(a, b, c, d) {
			try {
				if (a.l && a.l.j) {
					var e = a.l.start(b.toString(), 3);
					var f = c();
					var g = a.l;
					c = e;
					if (g.j && x(c.value)) {
						var h = Hi() || Gi();
						c.duration = h - c.value;
						var k = "goog_" + c.uniqueId + "_end";
						Li() && Ji.mark(k);
						g.j && g.events.push(c)
					}
				} else f = c()
			} catch (l) {
				g = a.v;
				try {
					Oi(e), g = (d || a.C).call(a, b, new Ri(Si(l), l.fileName, l.lineNumber), void 0, void 0)
				} catch (p) {
					a.j(217, p)
				}
				if (!g) throw l;
			}
			return f
		},
		Vi = function(a, b, c) {
			var d = Ui;
			return function(e) {
				for (var f = [], g = 0; g < arguments.length; ++g) f[g - 0] = arguments[g];
				return Ti(d, a, function() {
					return b.apply(c, f)
				}, void 0)
			}
		};
	Qi.prototype.j = function(a, b, c, d, e) {
		e = e || this.D;
		try {
			var f = new Ch;
			f.A = !0;
			Gh(f, 1, "context", a);
			b.error && b.meta && b.id || (b = new Ri(Si(b), b.fileName, b.lineNumber));
			b.msg && Gh(f, 2, "msg", b.msg.substring(0, 512));
			b.file && Gh(f, 3, "file", b.file);
			0 < b.line && Gh(f, 4, "line", b.line);
			var g = b.meta || {};
			if (this.o) try {
				this.o(g)
			} catch (u) {}
			if (d) try {
				d(g)
			} catch (u) {}
			b = [g];
			f.j.push(5);
			f.l[5] = b;
			var h = zh(),
				k = new yh(r.location.href, r, !1);
			b = null;
			var l = h.length - 1;
			for (d = l; 0 <= d; --d) {
				var p = h[d];
				!b && wh.test(p.url) && (b = p);
				if (p.url && !p.bb) {
					k = p;
					break
				}
			}
			p = null;
			var q = h.length && h[l].url;
			0 != k.depth && q && (p = h[l]);
			var v = new xh(k, p);
			v.l && Gh(f, 6, "top", v.l.url || "");
			Gh(f, 7, "url", v.j.url || "");
			yi(this.A, e, f, !1, c)
		} catch (u) {
			try {
				yi(this.A, e, {
					context: "ecmserr",
					rctx: a,
					msg: Si(u),
					url: v.j.url
				}, !1, c)
			} catch (t) {}
		}
		return this.v
	};
	var Si = function(a) {
			var b = a.toString();
			a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
			a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
			a.stack && (b = Wi(a.stack, b));
			return b
		},
		Wi = function(a, b) {
			try {
				-1 == a.indexOf(b) && (a = b + "\n" + a);
				for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
				return a.replace(/\n */g, "\n")
			} catch (d) {
				return b
			}
		},
		Ri = function(a, b, c) {
			ph.call(this, Error(a), {
				message: a,
				file: void 0 === b ? "" : b,
				line: void 0 === c ? -1 : c
			})
		};
	ka(Ri, ph);
	var Xi, Ui, Yi = H(),
		Ni = new Mi(1, Yi);
	Xi = new function() {
		var a = void 0 === a ? D : a;
		this.v = "http:" === a.location.protocol ? "http:" : "https:";
		this.l = "pagead2.googlesyndication.com";
		this.o = "/pagead/gen_204?id=";
		this.j = .01;
		this.A = Math.random()
	};
	Ui = new Qi(Xi, "jserror", !0, Ni);
	"complete" == Yi.document.readyState ? Yi.google_measure_js_timing || Pi() : Ni.j && F(Yi, "load", function() {
		Yi.google_measure_js_timing || Pi()
	});
	var Zi = function() {},
		aj = function(a, b) {
			return Ti(Ui, a, b, $i)
		},
		bj = function(a, b) {
			return Vi(a, b, void 0)
		},
		$i = Ui.j,
		R = function(a, b, c) {
			yi(Xi, a, b, "jserror" != a, c, void 0)
		},
		cj = function(a, b) {
			Ui.j(a, b, void 0, void 0)
		},
		dj = function(a, b, c) {
			return Vi(a, b, c)
		};
	var ej = function(a, b) {
			a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
			R("ama", b, .01)
		};
	var fj = function(a, b) {
			var c = Kg(b, ch, 8) || new ch;
			oh(a, b, 3) && (a = new hh, Hg(a, 1).push(1), Ng(c, 3, a));
			return c
		},
		gj = function(a, b) {
			var c = new kh;
			Ng(b, 3, c);
			var d = Ha() + 864E5;
			Ig(c, 1, d);
			try {
				a.localStorage.setItem("google_ama_config", b.C())
			} catch (e) {
				ej(a, {
					lserr: 1
				})
			}
		},
		hj = function(a) {
			try {
				a.localStorage.removeItem("google_ama_config")
			} catch (b) {
				ej(a, {
					lserr: 1
				})
			}
		},
		ij = function(a, b) {
			if (b) try {
				return new jh(b ? JSON.parse(b) : null)
			} catch (c) {
				ej(a, {
					cfg: 1,
					inv: 1
				})
			}
			return null
		};
	var jj = null,
		kj = function(a, b) {
			for (var c = 0, d = a, e = 0; a && a != a.parent;) if (a = a.parent, e++, Pc(a)) d = a, c = e;
			else if (b) break;
			return {
				ca: d,
				level: c
			}
		},
		lj = function() {
			jj || (jj = kj(r, !0).ca);
			return jj
		};
	var mj = function(a) {
			Bi.call(this, a);
			this.dfltBktExt = this.j;
			this.lrsExt = this.l
		};
	C(mj, Bi);
	var nj = function() {
			this.S = {}
		},
		oj = function() {
			var a = H(),
				b = Xe(a);
			if (b) return (a = b || Xe()) ? (b = a.pageViewId, w(a.clientId) && (b += a.clientId.replace(/\D/g, "").substr(0, 6)), a = b) : a = null, +a;
			a = kj(a, !1).ca;
			(b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
			return b
		},
		qj = function() {
			if (pj) return pj;
			var a = uf() || H(),
				b = a.google_persistent_state_async;
			return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? pj = b : a.google_persistent_state_async = pj = new nj
		},
		U = function(a, b, c) {
			b = rj[b] || "google_ps_" + b;
			a = a.S;
			var d = a[b];
			return void 0 === d ? a[b] = c : d
		},
		sj = function(a, b, c) {
			return a.S[rj[b] || "google_ps_" + b] = c
		},
		pj = null,
		tj = {},
		rj = (tj[8] = "google_prev_ad_formats_by_region", tj[9] = "google_prev_ad_slotnames_by_region", tj);
	var uj = navigator,
		vj = function() {
			try {
				return uj.javaEnabled()
			} catch (a) {
				return !1
			}
		},
		wj = function(a) {
			var b = 1,
				c;
			if (void 0 != a && "" != a) for (b = 0, c = a.length - 1; 0 <= c; c--) {
				var d = a.charCodeAt(c);
				b = (b << 6 & 268435455) + d + (d << 14);
				d = b & 266338304;
				b = 0 != d ? b ^ d >> 21 : b
			}
			return b
		},
		xj = function(a, b) {
			if (!a || "none" == a) return 1;
			a = String(a);
			"auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
			return wj(a.toLowerCase())
		},
		yj = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
		zj = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
		Aj = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
	var Bj = zd && "srcdoc" in document.createElement("iframe"),
		Cj = yd || zd || wd && be(11);
	var Dj = function(a) {
			if (Hf(a) && a != a.parent && a.google_async_iframe_close) {
				var b = function() {
						return a.setTimeout(function() {
							a.document.close()
						}, 0)
					};
				a.idm ? a.idm(b) : b()
			}
		};
	var Ej = function(a, b) {
			var c = cd();
			return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(r.document.location.protocol), "//", encodeURIComponent(r.document.location.host)].join("")
		};
	var Hj = function(a) {
			var b = [];
			Fj(new Gj, a, b);
			return b.join("")
		},
		Gj = function() {},
		Fj = function(a, b, c) {
			if (null == b) c.push("null");
			else {
				if ("object" == typeof b) {
					if (y(b)) {
						var d = b;
						b = d.length;
						c.push("[");
						for (var e = "", f = 0; f < b; f++) c.push(e), Fj(a, d[f], c), e = ",";
						c.push("]");
						return
					}
					if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
					else {
						c.push("{");
						e = "";
						for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Ij(d, c), c.push(":"), Fj(a, f, c), e = ","));
						c.push("}");
						return
					}
				}
				switch (typeof b) {
				case "string":
					Ij(b, c);
					break;
				case "number":
					c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
					break;
				case "boolean":
					c.push(String(b));
					break;
				case "function":
					c.push("null");
					break;
				default:
					throw Error("Unknown type: " + typeof b);
				}
			}
		},
		Jj = {
			'"': '\\"',
			"\\": "\\\\",
			"/": "\\/",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\x0B": "\\u000b"
		},
		Kj = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
		Ij = function(a, b) {
			b.push('"', a.replace(Kj, function(a) {
				var b = Jj[a];
				b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Jj[a] = b);
				return b
			}), '"')
		};
	var Lj = function(a) {
			this.j = this.l = null;
			Ea(a) ? this.j = a : this.l = a
		};
	Lj.prototype.getVerifier = function(a) {
		return this.l ? this.l[a] : null
	};
	Lj.prototype.getSchema = function(a) {
		return this.j ? this.j(a) : null
	};
	Lj.prototype.doesReturnAnotherSchema = function() {
		return this.j ? !0 : !1
	};
	var Mj = function() {};
	Mj.prototype.getVerifier = function() {
		return function() {
			return !0
		}
	};
	Mj.prototype.getSchema = function() {
		return null
	};
	Mj.prototype.doesReturnAnotherSchema = function() {
		return !1
	};
	var Nj = function(a) {
			this.j = a
		},
		Oj = function(a, b, c, d) {
			var e = function(a) {
					try {
						var e = JSON.parse(a.data)
					} catch (k) {
						return
					}!e || e.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(a.data) && !d(e, a) || c(e, a)
				};
			F(a, "message", e);
			var f = !1;
			return function() {
				var b = !1;
				f || (f = !0, b = Ve(a, "message", e));
				return b
			}
		},
		Pj = function(a, b, c) {
			this.j = b;
			this.l = c
		};
	C(Pj, Error);
	var Rj = function(a, b, c) {
			var d = c ? {} : null;
			a = Qj(a, b, null, null, d);
			c && (d = wb(d), d.length && c(d));
			return a
		},
		Qj = function(a, b, c, d, e) {
			if (y(a)) {
				var f = a;
				for (var g = 0; g < a.length; g++) a[g] = Qj(a[g], b, c, d, e)
			} else if (z(a)) {
				if (b.doesReturnAnotherSchema()) if (b = b.getSchema(a)) {
					if (b.doesReturnAnotherSchema()) return Qj(a, b, c, d, e)
				} else throw new Pj(0, c ? c : "root", a);
				f = {};
				for (g in a) if (Object.prototype.hasOwnProperty.call(a, g)) {
					d = b.getVerifier(g);
					c = a[g];
					var h = b;
					if (d) {
						var k = d.predicate || d;
						if (Ea(k)) {
							k = k(c);
							if (!k) {
								if (!d || !d.nullOnInvalid) throw new Pj(0, g, c);
								e && (e[g] = !0);
								f[g] = null;
								continue
							}
							if (k instanceof Lj) h = k, d = null;
							else {
								f[g] = c;
								continue
							}
						}
					} else if (!z(c)) continue;
					f[g] = Qj(c, h, g, d, e)
				}
			} else if (f = a, k = d ? d.predicate || d : void 0, k instanceof RegExp && !k.test(w(a) || void 0 == a ? a : String(a)) || Ea(k) && !k(a)) {
				if (!d || !d.nullOnInvalid) throw new Pj(0, c, a);
				e && (e[c] = !0);
				f = null
			}
			return f
		},
		Sj = function(a, b, c, d, e, f, g) {
			function h(a, b, d) {
				try {
					f && (b = f(b));
					var k = g ? {} : null,
						h = Qj(b, a, null, null, k);
					c(h, d);
					if (g) {
						var l = wb(k);
						l.length && g(l)
					}
				} catch (t) {
					if (t instanceof Pj) e(t.j, t.l, b, d);
					else throw t;
				}
			}
			return Oj(a, b, function(a, b) {
				d instanceof Nj ? d.j().then(function(c) {
					h(c, a, b)
				}) : h(d, a, b)
			})
		},
		Tj = function(a, b, c, d, e) {
			if (!(0 >= e)) {
				c.googMsgType = b;
				a.postMessage(Hj(c), d);
				for (var f = a.frames.length, g = 0; g < f; ++g) 1 < e && Tj(a.frames[g], b, c, d, --e)
			}
		};
	var Uj = new Lj({
		notify: /^expandable-xpc-ready$/
	}),
		Wj = function(a, b, c, d) {
			Qf(d.origin) && "expandable-xpc-ready" == c.notify && Vj(a, b)
		},
		Vj = function(a, b) {
			var c = a.xa;
			c.google_eas_queue = c.google_eas_queue || [];
			c.google_eas_queue.push({
				a: a.id,
				b: a.url,
				c: a.width,
				d: a.height,
				e: a.X,
				f: a.Mb,
				g: a.vb,
				h: a.Bb,
				i: void 0
			});
			r.setTimeout(bj(220, Mf(B(function(a) {
				Rc(c.document, a)
			}, b))), 0)
		};
	var Xj = {
		nb: "google_anchor_debug",
		ob: "google_top_anchor_debug",
		zc: "google_ifsl_debug",
		Bc: "google_inflate_debug",
		pb: "google_ia_debug",
		Ec: "google_ia_debug_fi",
		yc: "google_scr_debug",
		Dc: "google_ia_debug_allow_onclick",
		qb: "google_ladder_rung_debug",
		Gc: "google_lat_debug",
		Hc: "google_lat_debug_all",
		Jc: "google_native_debug",
		Qc: "googleads",
		rb: "google_pedestal_debug",
		ad: "google_resize_debug",
		fd: "google_shoppable_images_debug",
		gd: "google_shoppable_images_forced",
		jd: "google_supersize_debug",
		od: "google_visible_intentful_click",
		ed: "google_server_side_slot_resize",
		dd: "google_server_side_expand_anchor",
		Kc: "google_native_instant_preview"
	},
		Yj = {},
		Zj = (Yj.google_anchor_debug = 1, Yj.google_top_anchor_debug = 2, Yj.google_ia_debug = 8, Yj.google_resize_debug = 16, Yj.google_ladder_rung_debug = 25, Yj.google_ifsl_debug = 32, Yj.google_scr_debug = 9, Yj.googleads = 1, Yj.google_server_side_expand_anchor = 1, Yj.google_pedestal_debug = 30, Yj),
		ak = {},
		bk = (ak.google_server_side_slot_resize = 1, ak.google_server_side_expand_anchor = 4, ak);
	var ck = {
		pb: 1,
		jc: 2,
		ld: 3,
		sb: 4,
		Lc: 5
	};
	var ek = function(a) {
			var b = 0;
			G(bk, function(c, d) {
				dk(a, d) && (b = c)
			});
			return b
		},
		fk = function(a) {
			return a ? (a = a.hash) && a.indexOf ? a : "" : ""
		},
		dk = function(a, b) {
			if (!a) return !1;
			a = a.hash;
			if (!a || !a.indexOf) return !1;
			if (-1 != a.indexOf(b)) return !0;
			b = gk(b);
			return "go" != b && -1 != a.indexOf(b) ? !0 : !1
		},
		gk = function(a) {
			var b = "";
			G(a.split("_"), function(a) {
				b += a.substr(0, 2)
			});
			return b
		},
		hk = function() {
			var a = r.location,
				b = !1;
			G(Xj, function(c) {
				dk(a, c) && (b = !0)
			});
			return b
		},
		ik = function(a, b) {
			switch (a) {
			case 1:
				return dk(b, "google_ia_debug");
			case 2:
				return dk(b, "google_anchor_debug") || dk(b, "googleads");
			case 3:
				return dk(b, "google_top_anchor_debug");
			case 4:
				return dk(b, "google_scr_debug");
			case 5:
				return dk(b, "google_native_debug")
			}
			return !1
		};
	var jk = kd ? "https" : "http",
		kk = jk + "://googleads.g.doubleclick.net/pagead/js/" + ed() + "/r20170110/abg_lite.js",
		lk = jk + "://pagead2.googlesyndication.com/pagead/images/x_button_dark.svg",
		mk = jk + "://pagead2.googlesyndication.com/pagead/images/x_button_blue2.svg";
	var nk = function(a, b, c) {
			this.x = a;
			this.y = b;
			this.j = c
		};
	nk.prototype.translate = function(a) {
		if (a === this.j) return this;
		var b = this.j;
		ok(b);
		if (a === b) var c = 0;
		else {
			c = pk(b.j, b);
			b = pk(b.j, a);
			if (0 > c || 0 > b) throw Error("Not added to frameset");
			c = c < b ? 1 : -1
		}
		var d = this.j;
		for (b = new nk(this.x, this.y, d); d !== a;) {
			if (!d) throw Error("Reached end of frameset without reaching target");
			if (-1 === c) {
				b.x -= d.xOffset;
				b.y -= d.yOffset;
				ok(d);
				var e = d.j;
				d = e.referenceFrameArray[pk(e, d) + -1] || null
			} else ok(d), e = d.j, d = e.referenceFrameArray[pk(e, d) + 1] || null, b.x += d.xOffset, b.y += d.yOffset;
			if (!d) throw Error("Attempted to unset a coordinate frame reference");
			b.j = d
		}
		return b
	};
	var qk = function(a, b, c, d, e) {
			if (!a && (void 0 === d || void 0 === e)) throw Error("Cannot create refFrame");
			this.xOffset = b;
			this.yOffset = c;
			this.height = e ? e : a === r.top ? a.document.body.scrollHeight || a.document.body.parentElement.scrollHeight : a.innerHeight;
			this.width = d ? d : a === r.top ? a.document.body.scrollWidth || a.document.body.parentElement.scrollWidth : a.innerWidth;
			this.j = null
		};
	qk.prototype.contains = function(a) {
		var b = this;
		return a.map(function(a) {
			return a.translate(b)
		}).reduce(function(a, d) {
			return a && 0 <= d.x && 0 <= d.y && d.x <= b.width && d.y <= b.height
		}, !0)
	};
	var ok = function(a) {
			if (!a.j) throw Error("Not added to frameset");
		},
		rk = function() {
			this.referenceFrameArray = []
		},
		pk = function(a, b) {
			for (var c = a.referenceFrameArray.length, d = 0; d < c; ++d) if (b === a.referenceFrameArray[d]) return d;
			return -1
		},
		sk = function(a) {
			a.setAttribute("frameborder", 0);
			a.setAttribute("marginwidth", 0);
			a.setAttribute("marginheight", 0);
			a.setAttribute("vspace", 0);
			a.setAttribute("hspace", 0);
			a.setAttribute("allowtransparency", "true");
			a.setAttribute("scrolling", "no");
			a.className = "goog_xca_frame"
		},
		tk = function(a, b) {
			R("xca_err", {
				context: a
			});
			throw Error(b);
		};
	var uk = function(a, b, c) {
			this.A = c;
			this.o = a;
			this.v = b;
			this.l = 0;
			this.j = null
		};
	uk.prototype.get = function() {
		if (0 < this.l) {
			this.l--;
			var a = this.j;
			this.j = a.next;
			a.next = null
		} else a = this.o();
		return a
	};
	var vk = function(a, b) {
			a.v(b);
			a.l < a.A && (a.l++, b.next = a.j, a.j = b)
		};
	var wk = function(a) {
			r.setTimeout(function() {
				throw a;
			}, 0)
		},
		xk, yk = function() {
			var a = r.MessageChannel;
			"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
				var a = document.createElement("IFRAME");
				a.style.display = "none";
				a.src = "";
				document.documentElement.appendChild(a);
				var b = a.contentWindow;
				a = b.document;
				a.open();
				a.write("");
				a.close();
				var c = "callImmediate" + Math.random(),
					d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
				a = A(function(a) {
					if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
				}, this);
				b.addEventListener("message", a, !1);
				this.port1 = {};
				this.port2 = {
					postMessage: function() {
						b.postMessage(c, d)
					}
				}
			});
			if ("undefined" !== typeof a && !nc()) {
				var b = new a,
					c = {},
					d = c;
				b.port1.onmessage = function() {
					if (xa(c.next)) {
						c = c.next;
						var a = c.Ra;
						c.Ra = null;
						a()
					}
				};
				return function(a) {
					d.next = {
						Ra: a
					};
					d = d.next;
					b.port2.postMessage(0)
				}
			}
			return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
			function(a) {
				var b = document.createElement("SCRIPT");
				b.onreadystatechange = function() {
					b.onreadystatechange = null;
					b.parentNode.removeChild(b);
					b = null;
					a();
					a = null
				};
				document.documentElement.appendChild(b)
			} : function(a) {
				r.setTimeout(a, 0)
			}
		};
	var zk = function() {
			this.l = this.j = null
		},
		Bk = new uk(function() {
			return new Ak
		}, function(a) {
			a.reset()
		}, 100);
	zk.prototype.add = function(a, b) {
		var c = Bk.get();
		c.set(a, b);
		this.l ? this.l.next = c : this.j = c;
		this.l = c
	};
	var Dk = function() {
			var a = Ck,
				b = null;
			a.j && (b = a.j, a.j = a.j.next, a.j || (a.l = null), b.next = null);
			return b
		},
		Ak = function() {
			this.next = this.l = this.j = null
		};
	Ak.prototype.set = function(a, b) {
		this.j = a;
		this.l = b;
		this.next = null
	};
	Ak.prototype.reset = function() {
		this.next = this.l = this.j = null
	};
	var Hk = function(a, b) {
			Ek || Fk();
			Gk || (Ek(), Gk = !0);
			Ck.add(a, b)
		},
		Ek, Fk = function() {
			if (-1 != String(r.Promise).indexOf("[native code]")) {
				var a = r.Promise.resolve(void 0);
				Ek = function() {
					a.then(Ik)
				}
			} else Ek = function() {
				var a = Ik;
				!Ea(r.setImmediate) || r.Window && r.Window.prototype && !E("Edge") && r.Window.prototype.setImmediate == r.setImmediate ? (xk || (xk = yk()), xk(a)) : r.setImmediate(a)
			}
		},
		Gk = !1,
		Ck = new zk,
		Ik = function() {
			for (var a; a = Dk();) {
				try {
					a.j.call(a.l)
				} catch (b) {
					wk(b)
				}
				vk(Bk, a)
			}
			Gk = !1
		};
	var Kk = function(a, b) {
			this.j = 0;
			this.D = void 0;
			this.v = this.l = this.o = null;
			this.A = this.C = !1;
			if (a != za) try {
				var c = this;
				a.call(b, function(a) {
					Jk(c, 2, a)
				}, function(a) {
					Jk(c, 3, a)
				})
			} catch (d) {
				Jk(this, 3, d)
			}
		},
		Lk = function() {
			this.next = this.context = this.l = this.o = this.j = null;
			this.v = !1
		};
	Lk.prototype.reset = function() {
		this.context = this.l = this.o = this.j = null;
		this.v = !1
	};
	var Mk = new uk(function() {
		return new Lk
	}, function(a) {
		a.reset()
	}, 100),
		Nk = function(a, b, c) {
			var d = Mk.get();
			d.o = a;
			d.l = b;
			d.context = c;
			return d
		},
		Pk = function() {
			var a, b = new Kk(function(b) {
				a = b
			});
			return new Ok(b, a)
		};
	Kk.prototype.then = function(a, b, c) {
		return Qk(this, Ea(a) ? a : null, Ea(b) ? b : null, c)
	};
	Kk.prototype.then = Kk.prototype.then;
	Kk.prototype.$goog_Thenable = !0;
	var Rk = function(a, b) {
			return Qk(a, null, b, void 0)
		};
	Kk.prototype.cancel = function(a) {
		0 == this.j && Hk(function() {
			var b = new Sk(a);
			Tk(this, b)
		}, this)
	};
	var Tk = function(a, b) {
			if (0 == a.j) if (a.o) {
				var c = a.o;
				if (c.l) {
					for (var d = 0, e = null, f = null, g = c.l; g && (g.v || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
					e && (0 == c.j && 1 == d ? Tk(c, b) : (f ? (d = f, d.next == c.v && (c.v = d), d.next = d.next.next) : Uk(c), Vk(c, e, 3, b)))
				}
				a.o = null
			} else Jk(a, 3, b)
		},
		Xk = function(a, b) {
			a.l || 2 != a.j && 3 != a.j || Wk(a);
			a.v ? a.v.next = b : a.l = b;
			a.v = b
		},
		Qk = function(a, b, c, d) {
			var e = Nk(null, null, null);
			e.j = new Kk(function(a, g) {
				e.o = b ?
				function(c) {
					try {
						var e = b.call(d, c);
						a(e)
					} catch (l) {
						g(l)
					}
				} : a;
				e.l = c ?
				function(b) {
					try {
						var e = c.call(d, b);
						!xa(e) && b instanceof Sk ? g(b) : a(e)
					} catch (l) {
						g(l)
					}
				} : g
			});
			e.j.o = a;
			Xk(a, e);
			return e.j
		};
	Kk.prototype.G = function(a) {
		this.j = 0;
		Jk(this, 2, a)
	};
	Kk.prototype.H = function(a) {
		this.j = 0;
		Jk(this, 3, a)
	};
	var Jk = function(a, b, c) {
			if (0 == a.j) {
				a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
				a.j = 1;
				a: {
					var d = c,
						e = a.G,
						f = a.H;
					if (d instanceof Kk) {
						Xk(d, Nk(e || za, f || null, a));
						var g = !0
					} else {
						if (d) try {
							var h = !! d.$goog_Thenable
						} catch (l) {
							h = !1
						} else h = !1;
						if (h) d.then(e, f, a), g = !0;
						else {
							if (z(d)) try {
								var k = d.then;
								if (Ea(k)) {
									Yk(d, k, e, f, a);
									g = !0;
									break a
								}
							} catch (l) {
								f.call(a, l);
								g = !0;
								break a
							}
							g = !1
						}
					}
				}
				g || (a.D = c, a.j = b, a.o = null, Wk(a), 3 != b || c instanceof Sk || Zk(a, c))
			}
		},
		Yk = function(a, b, c, d, e) {
			var f = !1,
				g = function(a) {
					f || (f = !0, c.call(e, a))
				},
				h = function(a) {
					f || (f = !0, d.call(e, a))
				};
			try {
				b.call(a, g, h)
			} catch (k) {
				h(k)
			}
		},
		Wk = function(a) {
			a.C || (a.C = !0, Hk(a.F, a))
		},
		Uk = function(a) {
			var b = null;
			a.l && (b = a.l, a.l = b.next, b.next = null);
			a.l || (a.v = null);
			return b
		};
	Kk.prototype.F = function() {
		for (var a; a = Uk(this);) Vk(this, a, this.j, this.D);
		this.C = !1
	};
	var Vk = function(a, b, c, d) {
			if (3 == c && b.l && !b.v) for (; a && a.A; a = a.o) a.A = !1;
			if (b.j) b.j.o = null, $k(b, c, d);
			else try {
				b.v ? b.o.call(b.context) : $k(b, c, d)
			} catch (e) {
				al.call(null, e)
			}
			vk(Mk, b)
		},
		$k = function(a, b, c) {
			2 == b ? a.o.call(a.context, c) : a.l && a.l.call(a.context, c)
		},
		Zk = function(a, b) {
			a.A = !0;
			Hk(function() {
				a.A && al.call(null, b)
			})
		},
		al = wk,
		Sk = function(a) {
			Qa.call(this, a)
		};
	C(Sk, Qa);
	Sk.prototype.name = "cancel";
	var Ok = function(a, b) {
			this.j = a;
			this.l = b
		};
	var bl = function() {
			this.Ia = this.Ia;
			this.Gb = this.Gb
		};
	bl.prototype.Ia = !1;
	var cl = function(a, b, c, d, e, f) {
			bl.call(this);
			this.X = a;
			this.status = 1;
			this.j = b;
			this.l = c;
			this.M = d;
			this.H = !! e;
			this.v = Math.random();
			this.A = {};
			this.o = null;
			this.I = A(this.J, this);
			this.G = f
		};
	C(cl, bl);
	cl.prototype.J = function(a) {
		if (a.origin === this.l && (this.H || a.source == this.j)) {
			var b = null;
			try {
				b = JSON.parse(a.data)
			} catch (c) {}
			if (z(b) && (a = b.i, b.c === this.X && a != this.v && (2 !== this.status && (this.status = 2, dl(this), this.o && (this.o(), this.o = null)), a = b.s, b = b.p, w(a) && (w(b) || z(b)) && this.A.hasOwnProperty(a)))) this.A[a](b)
		}
	};
	var dl = function(a) {
			var b = {};
			b.c = a.X;
			b.i = a.v;
			a.G && (b.e = a.G);
			a.j.postMessage(Hj(b), a.l)
		};
	cl.prototype.F = function() {
		if (1 === this.status) {
			try {
				this.j.postMessage && dl(this)
			} catch (a) {}
			window.setTimeout(A(this.F, this), 50)
		}
	};
	cl.prototype.connect = function(a) {
		a && (this.o = a);
		F(window, "message", this.I);
		this.M && this.F()
	};
	cl.prototype.C = function(a, b) {
		var c = {};
		c.c = this.X;
		c.i = this.v;
		c.s = a;
		c.p = b;
		this.j.postMessage(Hj(c), this.l)
	};
	var el = function(a, b, c, d, e) {
			cl.call(this, a, b, c, d);
			this.D = e
		};
	ka(el, cl);
	el.prototype.C = function(a, b) {
		fl(this, a, b)
	};
	var fl = function(a, b, c) {
			c = void 0 === c ? {} : c;
			var d = {};
			d.c = a.X;
			d.i = a.v;
			d.s = b;
			d.p = c;
			a.D && (d.msg_type = a.D);
			wd ? r.setTimeout(function() {
				a.j.postMessage(JSON.stringify(d), a.l)
			}, 0) : a.j.postMessage(JSON.stringify(d), a.l)
		};
	var gl = function(a, b) {
			if (!b.source || !Qf(b.origin)) throw R("mcca", {
				context: "badinit"
			}), Error("Bad eventData");
			bl.call(this);
			this.j = new el(a, b.source, b.origin, !1);
			this.j.connect();
			fl(this.j, "apmc:bc:cr", {})
		};
	ka(gl, bl);
	var hl = function(a, b, c, d) {
			c = c || a.google_ad_width;
			d = d || a.google_ad_height;
			if (a && a.top == a) return !1;
			var e = b.documentElement;
			if (c && d) {
				var f = 1,
					g = 1;
				a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
				if (g > 2 * d || f > 2 * c) return !1
			}
			return !0
		},
		il = function(a, b) {
			G(b, function(b, d) {
				a[d] = b
			})
		},
		jl = function(a) {
			var b = a.location.href;
			if (a == a.top) return {
				url: b,
				Aa: !0
			};
			var c = !1,
				d = a.document;
			d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
			(a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
			return {
				url: b,
				Aa: c
			}
		};
	var kl = {
		google: 1,
		googlegroups: 1,
		gmail: 1,
		googlemail: 1,
		googleimages: 1,
		googleprint: 1
	},
		ll = /(corp|borg)\.google\.com:\d+$/,
		ml = function(a) {
			var b = a.google_page_location || a.google_page_url;
			"EMPTY" == b && (b = a.google_page_url);
			if (hd || !b) return !1;
			a = b.toString();
			0 == a.indexOf("http://") ? a = a.substring(7, a.length) : 0 == a.indexOf("https://") && (a = a.substring(8, a.length));
			b = a.indexOf("/"); - 1 == b && (b = a.length);
			a = a.substring(0, b);
			if (ll.test(a)) return !1;
			a = a.split(".");
			b = !1;
			3 <= a.length && (b = a[a.length - 3] in kl);
			2 <= a.length && (b = b || a[a.length - 2] in kl);
			return b
		};
	var nl = function(a) {
			a = a.document;
			return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
		},
		ol = function(a, b) {
			var c = nl(a);
			return b ? c.scrollHeight == nl(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
		},
		pl = function(a) {
			return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
		},
		ql = function(a) {
			return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
		},
		rl = function(a) {
			var b = nl(a).clientWidth;
			a = a.innerWidth;
			return b && a ? b / a : 0
		},
		sl = function(a) {
			a = a.google_reactive_ad_format;
			return vb(a) ? "" + a : null
		},
		tl = function(a, b) {
			b = b || {};
			var c;
			y(a) ? c = a : a && a.key_value && (c = a.key_value);
			if (c) for (a = 0; a < c.length; a++) {
				var d = c[a];
				if ("key" in d && "value" in d) {
					var e = d.value;
					b[d.key] = null == e ? null : String(e)
				}
			}
			return b
		},
		ul = function(a) {
			a = tl(a, a);
			delete a.key_value;
			return a
		},
		vl = function(a, b) {
			return a && a.source ? a.source === b || a.source.parent === b : !1
		},
		wl = function(a) {
			return Uf(a) != a ? 512 : 0
		},
		xl = function(a, b) {
			return (a = nl(a).clientWidth) ? !b && 420 < a ? 32768 : 320 > a ? 65536 : 0 : 16384
		},
		yl = function(a) {
			return (a = rl(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
		};
	var zl = function() {
			this.wasPlaTagProcessed = !1;
			this.wasReactiveAdConfigReceived = {};
			this.adCount = {};
			this.wasReactiveAdVisible = {};
			this.stateForType = {};
			this.reactiveTypeEnabledByReactiveTag = {};
			this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
			this.reactiveTypeDisabledByPublisher = {};
			this.debugCard = null;
			this.messageValidationEnabled = this.debugCardRequested = !1;
			this.adRegion = this.floatingAdsFillMessage = this.grappleTagStatusService = null
		},
		V = function(a) {
			a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new zl);
			return a.google_reactive_ads_global_state
		};
	var Vc = {
		wc: 5,
		pc: 7,
		Fc: 17,
		mc: 19,
		kc: 41,
		oc: 48,
		Xc: 55,
		gc: 59,
		Uc: 62,
		Oc: 67,
		Sc: 69,
		qc: 70,
		Mc: 75,
		Wc: 77,
		kd: 79,
		pd: 80,
		Yc: 82,
		Zc: 83,
		hd: 86,
		Pc: 87,
		cd: 88,
		lc: 89,
		Rc: 90,
		md: 97,
		uc: 98,
		Nc: 99,
		Ic: 101,
		rc: 102,
		nc: 103,
		$b: 104,
		xc: 106,
		nd: 107,
		sc: 108,
		Vc: 109,
		ac: 110,
		Cc: 111
	},
		Al = null,
		Bl = function(a) {
			try {
				return !!a && Jc(!0)
			} catch (b) {
				return !1
			}
		},
		Cl = function() {
			if (Bl(Al)) return !0;
			var a = qj();
			if (a = U(a, 3, null)) {
				if (a && a.dfltBktExt && a.lrsExt) {
					var b = new mj;
					b.j = a.dfltBktExt;
					b.dfltBktExt = b.j;
					b.l = a.lrsExt;
					b.lrsExt = b.l;
					b.o = !0;
					a = b
				} else a = null;
				a || (a = new mj, b = {
					context: "ps::gpes::cf",
					url: H().location.href
				}, R("jserror", b))
			}
			return Bl(a) ? (Al = a, !0) : !1
		},
		Dl = function(a) {
			if (!Cl()) {
				var b = Ci();
				a(b);
				b.o = !0
			}
		},
		Ci = function() {
			if (Cl()) return Al;
			var a = qj(),
				b = new mj(Wc());
			return Al = sj(a, 3, b)
		},
		El = null,
		Y = function() {
			El || (El = Di());
			return El
		},
		Fl = function(a) {
			var b = "",
				c = Y();
			c && (b += Fi(c).join());
			b && (a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
		},
		Gl = {
			R: "618018085",
			T: "618018086"
		},
		Hl = {
			Fa: "21060078",
			R: "21060079"
		},
		Il = {
			R: "370204012",
			T: "370204013"
		},
		Jl = {},
		Kl = {
			R: "25070060",
			T: "25070061"
		};
	zi = !1;
	var Ll = function(a) {
			a = void 0 === a ? Y() : a;
			return Af(Fi(a), function(a) {
				return !!Jl[a]
			})
		},
		Ml = function(a) {
			a = void 0 === a ? Y() : a;
			return Af(Fi(a), function(a) {
				return !Jl[a]
			})
		},
		Nl = function(a) {
			if (hd) {
				var b = Ei();
				b && (a.debug_experiment_id = b)
			}
		};
	var Ol = function(a) {
			var b = 0;
			try {
				b |= wl(a), b |= a.getComputedStyle ? 0 : 2097152, b |= xl(a, !0)
			} catch (c) {
				b |= 32
			}
			return b
		},
		Pl = function(a) {
			return Bf(Zf(a), "191880152")
		};
	var Ql = function(a) {
			var b = 0;
			try {
				b |= wl(a), b |= a.getComputedStyle ? 0 : 2097152, b |= a.document.querySelectorAll && a.document.querySelector ? 0 : 4194304, b |= xl(a)
			} catch (c) {
				b |= 32
			}
			return b
		};
	var Sl = function(a, b) {
			var c = 0;
			try {
				c |= wl(a);
				var d = "20040066" === P(Y(), 80),
					e = Math.min(a.screen.width || 0, a.screen.height || 0);
				c |= e ? !d && 420 < e ? 4096 : 320 > e ? 8192 : 0 : 2048;
				var f = a.navigator.userAgent;
				var g = /Firefox/.test(f) || /Android 2/.test(f) || /iPhone OS [34]_/.test(f) || /Windows Phone (?:OS )?[67]/.test(f) ? 1048576 : 0;
				c |= g
			} catch (h) {
				c |= 32
			}
			d = 0;
			try {
				d |= a.innerHeight >= a.innerWidth ? 0 : 8, d |= xl(a, "20040066" === P(Y(), 80)), d |= yl(a)
			} catch (h) {
				d |= 32
			}
			2 == b && Rl(a) ? d |= 16777216 : 2 == b && Math.max(0, (ol(a) || 0) - nl(a).clientHeight) <= a.innerHeight + 65 && (d |= 1024);
			return c | d
		},
		Rl = function(a) {
			var b = a.document,
				c = a.innerWidth;
			a = [];
			for (var d = 0; 3 > d; d++) for (var e = 0; 3 > e; e++) a.push({
				x: e / 2 * c - 0,
				y: d / 2 * 65 - 0
			});
			for (c = 0; c < a.length; c++) if ((d = b.elementFromPoint(a[c].x, a[c].y)) && "fixed" == ye(d)) return !0;
			return !1
		};
	var Tl = function(a, b) {
			var c = 0;
			try {
				c |= wl(a), c |= yl(a), c |= xl(a), c |= a.innerHeight >= a.innerWidth ? 0 : 8, c |= ml(b) ? 16 : 0, c |= /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
			} catch (d) {
				c |= 32
			}
			return c
		};
	var Ul = function(a) {
			var b = 0;
			try {
				b |= wl(a)
			} catch (c) {
				b |= 32
			}
			return b
		},
		Vl = function(a) {
			return !!a.name && -1 != a.name.indexOf("google_ifsl_cifr")
		},
		Wl = function(a, b) {
			if (b = sl(b)) {
				if ("32" == b) return 1;
				if ("30" == b) return 0
			}
			a: {
				for (b = H(); b && Pc(b);) {
					if (Vl(b)) {
						b = !0;
						break a
					}
					if (b.parent == b) break;
					b = b.parent
				}
				b = !1
			}
			if (b) return 3;
			if (!Pc(a)) return 0;
			a = V(a);
			return a.stateForType[32] ? 2 : a.stateForType[30] ? 4 : 0
		};
	var Xl = function(a) {
			var b = 0;
			try {
				b |= wl(a), b |= a.getComputedStyle ? 0 : 2097152, b |= xl(a)
			} catch (c) {
				b |= 32
			}
			return b
		};
	(function(a) {
		var b = {
			msg_type: /^[a-zA-Z0-9_-]+$/
		},
			c = function(a) {
				a.O && (b[a.name] = a.O)
			};
		G(pg, c);
		for (var d = 0; d < qg.length; d++) c(qg[d]);
		for (d = 0; d < a.length; d++) c(a[d]);
		return new Lj(b)
	})([]);
	var Yl = function(a, b, c) {
			this.o = a;
			this.j = b;
			this.l = c
		},
		Zl = function(a, b) {
			return {
				top: a.j - b,
				right: a.o + a.l + b,
				bottom: a.j + b,
				left: a.o - b
			}
		};
	var $l = function(a, b) {
			this.j = a;
			this.l = b
		};
	var am = function(a) {
			var b = ["adsbygoogle-placeholder"];
			a = a.className ? a.className.split(/\s+/) : [];
			for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
			for (d = 0; d < b.length; ++d) if (!c[b[d]]) return !1;
			return !0
		};
	var bm = function(a, b, c) {
			switch (c) {
			case 0:
				b.parentNode && b.parentNode.insertBefore(a, b);
				break;
			case 3:
				if (c = b.parentNode) {
					var d = b.nextSibling;
					if (d && d.parentNode != c) for (; d && 8 == d.nodeType;) d = d.nextSibling;
					c.insertBefore(a, d)
				}
				break;
			case 1:
				b.insertBefore(a, b.firstChild);
				break;
			case 2:
				b.appendChild(a)
			}
			if (1 != b.nodeType ? 0 : "INS" == b.tagName && am(b)) b.style.display = "block"
		},
		cm = function(a) {
			a && a.parentNode && a.parentNode.removeChild(a)
		};
	var dm = function(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c],
					e = ib(d.hb);
				a[e] = d.value
			}
		},
		fm = function(a, b, c, d) {
			var e = a.createElement("div"),
				f = e.style;
			f.textAlign = "center";
			f.width = "100%";
			f.height = "auto";
			f.clear = c.Sa ? "both" : "none";
			c.na && dm(f, c.na);
			a = a.createElement("ins");
			f = a.style;
			f.display = "block";
			f.margin = "auto";
			f.backgroundColor = "transparent";
			c.lb && (f.marginTop = c.lb);
			c.Oa && (f.marginBottom = c.Oa);
			c.ia && dm(f, c.ia);
			e.appendChild(a);
			c = {
				la: e,
				ba: a
			};
			c.ba.setAttribute("data-ad-format", "auto");
			em(c, b, d);
			return c
		},
		em = function(a, b, c) {
			var d = [];
			if (c = c && c.j) a.la.className = c.join(" ");
			a = a.ba;
			a.className = "adsbygoogle";
			a.setAttribute("data-ad-client", b);
			d.length && a.setAttribute("data-ad-channel", d.join("+"))
		};
	var hm = function(a, b) {
			gm(a).forEach(b, void 0)
		},
		gm = function(a) {
			return Array.prototype.slice.call(a)
		};
	var im = function(a, b, c, d) {
			this.v = a;
			this.l = b;
			this.o = c;
			this.j = d
		};
	im.prototype.toString = function() {
		return JSON.stringify({
			nativeQuery: this.v,
			occurrenceIndex: this.l,
			paragraphIndex: this.o,
			ignoreMode: this.j
		})
	};
	var jm = function(a, b) {
			if (null == a.j) return b;
			switch (a.j) {
			case 1:
				return b.slice(1);
			case 2:
				return b.slice(0, b.length - 1);
			case 3:
				return b.slice(1, b.length - 1);
			case 0:
				return b;
			default:
				throw Error("Unknown ignore mode: " + a.j);
			}
		},
		lm = function(a) {
			var b = [];
			hm(a.getElementsByTagName("p"), function(a) {
				100 <= km(a) && b.push(a)
			});
			return b
		},
		km = function(a) {
			if (3 == a.nodeType) return a.length;
			if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
			var b = 0;
			hm(a.childNodes, function(a) {
				b += km(a)
			});
			return b
		},
		mm = function(a) {
			return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
		};
	var nm = {
		1: 1,
		2: 2,
		3: 3,
		0: 0
	},
		om = function(a) {
			return null != a ? nm[a] : a
		},
		pm = function(a) {
			for (var b = [], c = 0; c < a.length; c++) {
				var d = L(a[c], 1),
					e = L(a[c], 2);
				if (d && null != e) {
					var f = {};
					f.hb = d;
					f.value = e;
					b.push(f)
				}
			}
			return b
		},
		qm = function(a, b) {
			var c = {};
			a && (c.lb = L(a, 1), c.Oa = L(a, 2), c.Sa = !! L(a, 3));
			b && (c.na = pm(Lg(b, Ug, 3)), c.ia = pm(Lg(b, Ug, 4)));
			return c
		},
		rm = {
			1: 0,
			2: 1,
			3: 2,
			4: 3
		};
	var sm = function(a) {
			this.l = qm(Kg(a, Tg, 3), null)
		};
	sm.prototype.j = function(a, b, c, d) {
		return fm(d.document, a, this.l, b)
	};
	var tm = function(a) {
			this.l = a
		};
	tm.prototype.j = function(a, b, c, d) {
		a: {
			var e = Lg(this.l, Wg, 9);
			var f = nl(d).clientWidth;
			for (var g = 0, h = null, k = 0; k < e.length; k++) {
				var l = e[k],
					p = L(l, 2);
				if (p == f) {
					f = l;
					break a
				}
				p > g && p < f && (g = p, h = l)
			}
			f = h
		}
		e = qm(Kg(this.l, Tg, 3), f);
		if (!f) return null;
		(f = L(f, 1)) ? (d = d.document, c = d.createElement(c.tagName), c.style.clear = e.Sa ? "both" : "none", c.style.padding = "0px", c.style.margin = "0px", e.na && dm(c.style, e.na), d = d.createElement("ins"), e.ia && dm(d.style, e.ia), c.appendChild(d), c = {
			la: c,
			ba: d
		}, c.ba.setAttribute("data-ad-type", "text"), c.ba.setAttribute("data-native-settings-key", f), em(c, a, b), a = c) : a = null;
		return a
	};
	var um = function(a, b) {
			this.v = a;
			this.o = b
		};
	um.prototype.j = function() {
		return this.o
	};
	um.prototype.l = function(a) {
		var b = this.v;
		var c = [];
		try {
			c = a.document.querySelectorAll(b.v)
		} catch (g) {}
		if (c.length) {
			a = rb(c);
			a = jm(b, a);
			x(b.l) && (c = b.l, 0 > c && (c += a.length), a = 0 <= c && c < a.length ? [a[c]] : []);
			if (x(b.o)) {
				c = [];
				for (var d = 0; d < a.length; d++) {
					var e = lm(a[d]),
						f = b.o;
					0 > f && (f += e.length);
					0 <= f && f < e.length && c.push(e[f])
				}
				a = c
			}
			b = a
		} else b = [];
		return 0 < b.length ? b[0] : null
	};
	var vm = function(a, b, c, d, e, f, g) {
			this.j = a;
			this.A = b;
			this.v = c;
			this.C = d;
			this.Fb = e;
			this.cb = f;
			this.o = g;
			this.l = !1
		},
		wm = function(a, b, c) {
			var d = Kg(a, Sg, 1);
			if (!d) return null;
			var e = L(d, 7);
			if (L(d, 1) || L(d, 3) || 0 < Hg(d, 4).length) {
				var f = L(d, 3),
					g = L(d, 1),
					h = Hg(d, 4);
				e = L(d, 2);
				var k = L(d, 5),
					l = om(L(d, 6)),
					p = "";
				g && (p += g);
				f && (p += "#" + mm(f));
				if (h) for (f = 0; f < h.length; f++) p += "." + mm(h[f]);
				e = (h = p) ? new im(h, e, k, l) : null
			} else e = e ? new im(e, L(d, 2), L(d, 5), om(L(d, 6))) : null;
			if (!e) return null;
			k = L(a, 2);
			k = rm[k];
			l = xa(k) ? k : null;
			if (null === l) return null;
			k = (k = Kg(a, Tg, 3)) ? L(k, 3) : null;
			e = new um(e, l);
			d = null != L(d, 5) ? [1] : [];
			switch (L(a, 8)) {
			case 1:
				return new vm(e, new sm(a), c || null, k, 0, d, b);
			case 2:
				return new vm(e, new tm(a), c || null, k, 1, d, b)
			}
			return null
		},
		xm = function(a) {
			return a.l
		};
	var ym = function(a, b, c) {
			this.j = a;
			this.l = b;
			this.Z = c
		},
		zm = function(a, b) {
			return a.Z.j - b.Z.j
		};
	var Am = function(a) {
			this.j = a.slice(0)
		},
		Bm = function(a, b) {
			return new Am(ob(a.j, b))
		};
	Am.prototype.apply = function(a) {
		return new Am(a(this.j.slice(0)))
	};
	var Em = function(a, b) {
			var c = gm(b.document.querySelectorAll("div[id^=div-gpt-ad]")),
				d = gm(b.document.querySelectorAll("div.google-auto-placed")),
				e = gm(b.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
				f = gm(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
			f = [].concat(!1 === a.Ab ? c : [], !1 === a.$a ? d : [], !1 === a.za ? e : [], !1 === a.ud ? f : []);
			a = Cm([].concat(!1 !== a.Ab ? c : [], !1 !== a.$a ? d : [], !1 !== a.za ? e : [], gm(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), gm(b.document.querySelectorAll("ins.adsbygoogle"))));
			return Dm(a, f)
		},
		Cm = function(a) {
			var b = [];
			a.forEach(function(a) {
				for (var c = 0; c < b.length; c++) {
					var e = b[c];
					if (e.contains(a)) return;
					if (a.contains(e)) {
						b[c] = a;
						return
					}
				}
				b.push(a)
			});
			return b
		},
		Dm = function(a, b) {
			var c = a.slice(0);
			b.forEach(function(a) {
				for (var b = 0; b < c.length; b++)(a.contains(c[b]) || c[b].contains(a)) && c.splice(b, 1)
			});
			return c
		};
	var Fm = function(a) {
			this.La = a.slice(0)
		};
	Fm.prototype.ea = function() {
		return this.La.length
	};
	var Hm = function(a) {
			return new Fm(Gm(a))
		};

	function Gm(a) {
		var b = Em({
			za: !1
		}, a),
			c = ql(a),
			d = pl(a);
		return b.map(function(a) {
			var b = a.getBoundingClientRect();
			return a.className && 0 <= a.className.indexOf("google-auto-placed") || 0 != (b.top - b.bottom) * (b.right - b.left) ? {
				top: b.top + d,
				right: b.right + c,
				bottom: b.bottom + d,
				left: b.left + c
			} : null
		}).filter(Oe(Ba))
	};
	var Im = function(a) {
			var b = a.Ma;
			a = a.placement;
			var c = a.C,
				d = a.o.document.createElement("div");
			d.className = "googlepublisherpluginad";
			var e = d.style;
			e.textAlign = "center";
			e.width = "100%";
			e.height = "0px";
			e.clear = c ? "both" : "none";
			try {
				return bm(d, b, a.j.j()), d
			} catch (f) {
				throw cm(d), f;
			}
		};
	var Jm = function(a) {
			return function(b) {
				var c = [],
					d = [];
				try {
					for (var e = [], f = 0; f < b.length; f++) {
						var g = b[f],
							h = g.j.l(g.o);
						h && e.push({
							placement: g,
							Ma: h
						})
					}
					for (f = 0; f < e.length; f++) d.push(Im(e[f]));
					var k = pl(a),
						l = ql(a);
					for (f = 0; f < d.length; f++) {
						b = l;
						g = k;
						var p = d[f].getBoundingClientRect(),
							q = e[f];
						c.push(new ym(q.placement, q.Ma, new Yl(p.left + b, p.top + g, p.right - p.left)))
					}
				} finally {
					for (f = 0; f < d.length; f++) cm(d[f])
				}
				return c
			}
		},
		Km = function(a) {
			return function(b) {
				return b.Fb == a
			}
		},
		Lm = function(a) {
			return function(b) {
				b = va(b.cb);
				for (var c = b.next(); !c.done; c = b.next()) if (-1 < a.indexOf(c.value)) return !1;
				return !0
			}
		},
		Mm = function(a) {
			return function(b) {
				var c = a.slice(0);
				b = va(b.cb);
				for (var d = b.next(); !d.done; d = b.next()) d = c.indexOf(d.value), -1 < d && c.splice(d, 1);
				return !c.length
			}
		},
		Nm = function(a, b) {
			if (0 >= a) return Ne;
			var c = ol(b, !0) - a;
			return function(a) {
				return a.Z.j <= c
			}
		},
		Om = function(a, b) {
			return b.Z.j >= a
		},
		Pm = function(a, b, c) {
			var d = Zl(c.Z, b + 1);
			return !qb(a, function(a) {
				return a.left < d.right && d.left < a.right && a.top < d.bottom && d.top < a.bottom
			})
		},
		Qm = function(a, b, c) {
			c = c.Z.l;
			return a <= c && c <= b
		};
	var Rm = function() {
			this.j = void 0
		};
	var Sm = function(a, b) {
			this.oa = new Am(a);
			this.ma = b;
			this.Ub = new Rm
		};
	var Tm = function(a) {
			var b = 0;
			try {
				b |= wl(a), b |= a.getComputedStyle ? 0 : 2097152
			} catch (c) {
				b |= 32
			}
			return b
		};
	var Um = function(a, b) {
			var c = 0;
			try {
				c |= wl(a), c |= /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0, c |= ml(b) ? 16 : 0
			} catch (d) {
				c |= 32
			}
			b = c;
			c = 0;
			try {
				"828064251" === P(Y(), 75) && "zoom" in pe(document, "SPAN").style || (c |= yl(a), c |= xl(a)), c |= a.innerHeight >= a.innerWidth ? 0 : 8
			} catch (d) {
				c |= 32
			}
			return b | c
		};
	var Vm = function(a, b) {
			return !!a.google_ad_resizable && !a.google_reactive_ad_format && !! b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && Uf(b) == b
		};
	var Wm = function(a, b, c) {
			c || (c = kd ? "https" : "http");
			r.location && "https:" == r.location.protocol && "http" == c && (c = "https");
			return [c, "://", a, b].join("")
		};
	var Xm = function() {
			var a = Pk();
			this.promise = a.j;
			this.resolve = a.l
		};

	function Ym(a, b, c) {
		b.google_llp || (b.google_llp = {});
		b = b.google_llp;
		b[a] || (b[a] = new Xm, c && c());
		return b[a]
	}
	var Zm = function(a, b, c) {
			return Ym(a, b, function() {
				Rc(b.document, c)
			}).promise
		};
	var $m = function(a, b, c, d) {
			d = void 0 === d ? "" : d;
			var e = a.createElement("link");
			e.rel = c;
			e.href = -1 != c.toLowerCase().indexOf("stylesheet") ? Ib(b) : b instanceof Hb ? Ib(b) : b instanceof Kb ? Lb(b) : Pb(b).K();
			d && "preload" == c && (e.as = d);
			(a = a.getElementsByTagName("head")[0]) && a.appendChild(e)
		};
	var an = {},
		bn = (an[16] = 4, an[25] = 8, an[27] = 512, an[26] = 128, an[32] = 16, an),
		cn = function(a, b, c) {
			switch (c) {
			case 1:
			case 2:
				return !Sl(a, c);
			case 8:
				if (b = 0 == Um(a, b)) V(a), b = !0;
				return b;
			case 9:
				if (b = !Tl(a, b)) V(a), b = !0;
				return b;
			case 25:
				return 0 == Xl(a) && !! V(a).wasReactiveAdConfigReceived[25];
			case 32:
				return !!V(a).wasReactiveAdConfigReceived[32] && 0 == Ul(a);
			case 30:
				return 0 == Tm(a);
			case 26:
				return 0 == Ql(a) && !! V(a).wasReactiveAdConfigReceived[26];
			case 27:
				return !Ol(a) && (Pl(a) ? !0 : !! V(a).wasReactiveAdConfigReceived[27]);
			default:
				return !1
			}
		},
		dn = function(a, b, c) {
			switch (c) {
			case 1:
			case 2:
				return Sl(a, c);
			case 8:
				return Um(a, b);
			case 9:
				return Tl(a, b);
			case 25:
				return Xl(a);
			case 32:
				return Ul(a);
			case 16:
				return Vm(b, a) ? 0 : 8388608;
			case 30:
				return Tm(a);
			case 26:
				return Ql(a);
			case 27:
				return Ol(a);
			default:
				return 32
			}
		},
		fn = function(a, b) {
			var c = b.google_reactive_ad_format;
			if (!vb(c)) return !1;
			a = Vf(a);
			if (!a || !cn(a, b, c)) return !1;
			b = V(a);
			if (en(b, c)) return !1;
			b.adCount[c] || (b.adCount[c] = 0);
			b.adCount[c]++;
			return !0
		},
		en = function(a, b) {
			return a.adCount ? (a = a.adCount[b]) ? 27 == b ? 3 <= a : 1 <= a : !1 : !1
		},
		gn = function(a) {
			return !a.google_reactive_ads_config && !! sl(a) && 16 != a.google_reactive_ad_format
		},
		jn = function(a, b) {
			var c = !1;
			G(Xj, function(d) {
				dk(a.location, d) && (c = hn(a, b, d) || c)
			});
			return c
		},
		hn = function(a, b, c) {
			var d = Zj[c];
			if (!d) return !1;
			kn("rau_mpdc", function(c) {
				c.configProcessorForAdFormat(d).processDebugConfig(a, b, a.location)
			});
			return !0
		},
		mn = function(a, b) {
			if (!a.document.getElementById("goog_info_card")) {
				var c = V(a);
				G(ck, function(d) {
					!c.debugCardRequested && ik(d, a.location) && (c.debugCardRequested = !0, ln(a, function(e) {
						c.debugCard = e.createDebugCard(d, a, b)
					}))
				})
			}
		},
		on = function(a, b) {
			if (!b) return null;
			var c = V(b);
			if (!c.wasReactiveAdConfigHandlerRegistered) return null;
			var d = 0;
			G(ub, function(c) {
				var e = bn[c];
				e && 0 === nn(a, b, c) && (d |= e)
			});
			c.wasPlaTagProcessed && (d |= 256);
			return d ? "" + d : null
		},
		pn = function(a, b) {
			var c = [];
			G(ub, function(d) {
				var e = nn(b, a, d);
				0 !== e && c.push(d + ":" + e)
			});
			return c.join(",") || null
		},
		qn = function(a) {
			var b = [],
				c = {};
			G(a, function(a, e) {
				if ((e = ig[e]) && !c[e]) {
					c[e] = !0;
					if (a) a = 1;
					else if (!1 === a) a = 2;
					else return;
					b.push(e + ":" + a)
				}
			});
			return b.join(",")
		},
		rn = function(a) {
			a = a.overlays;
			if (!a) return "";
			a = a.bottom;
			return "boolean" == typeof a ? a ? "1" : "0" : ""
		},
		sn = function(a, b) {
			var c = V(b);
			if (c.wasReactiveAdConfigHandlerRegistered) return !1;
			G(ub, function(d) {
				c.wasReactiveAdConfigHandlerRegistered = c.wasReactiveAdConfigHandlerRegistered || !! bn[d] && !nn(a, b, d)
			});
			c.isReactiveTagFirstOnPage = !! a.google_reactive_tag_first;
			return c.wasReactiveAdConfigHandlerRegistered
		},
		tn = function(a) {
			return !Rl(a)
		},
		nn = function(a, b, c) {
			if (!b) return 256;
			var d = 0,
				e = V(b),
				f = en(e, c);
			if (a.google_reactive_ad_format == c || 25 != c && 27 != c && f) d |= 64;
			var g = !1;
			G(e.reactiveTypeDisabledByPublisher, function(a, b) {
				String(c) === b && (g = !0)
			});
			g && (d |= 128);
			return d | dn(b, a, c)
		},
		un = function(a, b) {
			if (a) {
				var c = V(a),
					d = {};
				G(b, function(a, b) {
					(b = ig[b]) && (!1 === a || /^false$/i.test(a)) && (d[b] = !0)
				});
				G(ub, function(a) {
					d[jg[a]] && (c.reactiveTypeDisabledByPublisher[a] = !0)
				})
			}
		},
		vn = function(a, b) {
			var c = Ha(),
				d = {
					context: a,
					type: "time"
				},
				e = !1,
				f = function() {
					e || (e = !0, d.elapsed = Ha() - c, R("rctlib", d, .001))
				},
				g = r.setTimeout(function() {
					f()
				}, 2E4);
			return function(a) {
				r.clearTimeout(g);
				f();
				return b(a)
			}
		},
		wn = function() {
			var a = Tf();
			return Wm(a, "/pagead/js/" + ed() + "/r20170110/reactive_library.js", jd ? "https" : "http")
		},
		kn = function(a, b) {
			a = dj(a, vn(a, b));
			return Zm(1, H(), wn()).then(a)
		},
		ln = function(a, b) {
			b = Vi(212, b, void 0);
			var c = Tf();
			Zm(3, a, Wm(c, "/pagead/js/" + ed() + "/r20170110/debug_card_library.js", jd ? "https" : "http")).then(b)
		},
		xn = function(a, b, c, d) {
			R(b, {
				c: d.data.substring(0, 500),
				u: a.location.href.substring(0, 500)
			}, .1);
			return !0
		},
		yn = function(a, b, c) {
			var d = jg[a],
				e = {};
			a = b.page_level_pubvars;
			z(a) && Ab(e, a);
			G(b, function(a, b) {
				ig[b] == d && z(a) && Ab(e, a)
			});
			z(c) && Ab(e, c);
			return e
		};
	var zn = function(a) {
			bl.call(this);
			this.j = a;
			this.Ua = {};
			this.$(this.Ua);
			a = bj(168, A(this.Db, this));
			var b = this.W(),
				c = V(this.j);
			c && c.messageValidationEnabled && b ? Sj(this.j, "sth", a, b, A(this.Eb, this), ul, A(this.Jb, this)) : Oj(this.j, "sth", a, Vi(169, B(xn, this.j, "ras::xsf"), void 0))
		};
	ka(zn, bl);
	zn.prototype.Jb = function(a) {
		R("ras::noi", {
			keys: a.join(",").substring(0, 500),
			u: this.j.location.href.substring(0, 500)
		}, .1)
	};
	zn.prototype.Eb = function(a, b, c, d) {
		R("ras::sch", {
			c: d.data.substring(0, 500),
			u: this.j.location.href.substring(0, 500)
		}, .1)
	};
	zn.prototype.Db = function(a, b) {
		try {
			if (!this.Ta(b.origin)) return
		} catch (e) {
			return
		}
		var c = a.msg_type,
			d;
		w(c) && (d = this.Ua[c]) && d.call(this, a, b)
	};
	zn.prototype.Ta = function(a) {
		return Qf(a)
	};
	var Cn = function(a) {
			zn.call(this, a.o);
			var b = this;
			this.A = a;
			this.Na = !1;
			this.v = null;
			this.qa = this.ra = !1;
			this.H = this.Ea = this.sa = this.C = this.U = this.F = this.M = this.V = this.o = this.Za = null;
			this.Ha = this.I = !1;
			this.Pa = !0;
			this.D = 0;
			this.zb = this.A.j.frameElement || a.j.document.body;
			this.Cb = "undefined" !== typeof IntersectionObserver;
			this.Ka = this.Ga = null;
			this.l = pe(document, "IFRAME");
			this.J = pe(document, "DIV");
			this.ua = pe(document, "STYLE");
			this.G = -1;
			this.ta = !1;
			this.Ja = function(a) {
				var c = b.l,
					e = b.H,
					f = b.Ea;
				switch (a.data) {
				case "xca_col":
					c.style.width = f + "px";
					break;
				case "xca_exp":
					c.style.width = e + "px"
				}
			};
			this.Ib = Re(function() {
				null !== b.o && 2 === b.v.j.status && (b.qa = !1, b.ra || (An(b), Bn(b, "req-pos-xca")))
			}, 350);
			this.Wa = null;
			this.Cb && (this.Wa = new IntersectionObserver(function(a) {
				b.Pa = 0 < a[0].intersectionRatio
			}), this.Wa.observe(this.zb));
			this.aa = function() {
				if (b.Pa) {
					if (!b.qa || b.I) b.qa = !0, An(b);
					Yf(b.Ib)
				}
			}
		};
	ka(Cn, zn);
	Cn.prototype.W = function() {
		return null
	};
	var Dn = function(a, b, c) {
			a.v && a.v.j ? a.v.j.A[b] = c : tk("xca_badreg", "Register failed")
		},
		Bn = function(a, b) {
			var c = {};
			a.v && a.v.j && 2 === a.v.j.status ? a.v.j.C(b, c) : tk("xca_badsend", "Send failed")
		};
	Cn.prototype.Kb = function(a, b) {
		var c = this;
		!this.Na && b.source && Wf(b.source) && (this.v = new gl("xca-ch", b), Dn(this, "render-xca", function(a) {
			Yf(function() {
				a: {
					a.abg_href.match(/^https?:\/\/www.google.com/) || tk("xca_badhref", "Bad href");
					c.o = a;
					for (var b = c.A.j, d = 0; 20 > d && b.frameElement; ++d) {
						var g = r.getComputedStyle(b.frameElement);
						if (0 === b.frameElement.offsetHeight || "hidden" === g.visibility || "none" === g.display) break a;
						b = b.parent
					}
					c.V = c.o.is_rtl;
					c.M = c.V ? "left" : "right";
					c.F = c.o.is_mutable_impression;
					c.U = c.o.has_aria_hidden;
					c.C = c.o.is_mobile;
					c.sa = "ltr";
					b = c.C ? 15 : c.o.abgp.sw;
					d = c.F ? 16 : 0;
					c.Ea = 15 + d;
					c.H = b + d;
					En(c)
				}
			})
		}), Dn(this, "chk-xca", function() {
			Fn(c);
			Bn(c, "xca-rdy")
		}), Dn(this, "hide-xca", function() {
			An(c)
		}), Dn(this, "pos-xca", function(a) {
			Yf(function() {
				On(c)
			});
			c.o.serializable_reference_frame_set = a.serializable_reference_frame_set
		}), this.Na = !0)
	};
	var Eo = function(a) {
			F(a.j, "resize", a.aa, Se);
			F(a.j, "scroll", a.aa, Se)
		},
		op = function(a) {
			a.l && a.l.contentWindow || tk("xca_nocw", "Bad contentWindow");
			F(a.l.contentWindow, "message", a.Ja)
		},
		vp = function(a) {
			a.I || a.ra || (Xf(a.l, {
				opacity: 1,
				transition: "opacity 0.3s linear"
			}), a.I = !0, Bn(a, "xca-dis"))
		},
		An = function(a, b) {
			(a.I || (void 0 === b ? 0 : b)) && Bn(a, "xca-hid");
			wp(a)
		},
		wp = function(a) {
			Xf(a.l, {
				opacity: 0,
				transition: "none"
			});
			a.I = !1
		},
		On = function(a) {
			a.o || tk("xca_badpl", "No payload");
			var b = new rk;
			for (var c = va(a.o.serializable_reference_frame_set.referenceFrameArray), d = c.next(); !d.done; d = c.next()) d = d.value, d = new qk(null, d.xOffset, d.yOffset, d.width, d.height), d.j = b, b.referenceFrameArray.push(d);
			b = void 0 === b ? new rk : b;
			var e = 0,
				f = 0;
			c = a.A.j;
			for (d = 0; 20 > d; ++d) {
				e = new qk(c, e, f);
				f = b;
				e.j = f;
				f.referenceFrameArray.push(e);
				if (!(e = !c.frameElement)) {
					e = !1;
					try {
						c.parent.document.body && (e = !1)
					} catch (h) {
						e = !0
					}
				}
				if (e) break;
				else f = c.frameElement.getBoundingClientRect(), e = f.left + c.parent.pageXOffset, f = f.top + c.parent.pageYOffset, c = c.parent
			}
			d = b.referenceFrameArray[0];
			b = b.referenceFrameArray[b.referenceFrameArray.length - 1];
			e = a.V ? 0 : d.width - a.H;
			f = e + a.H;
			c = [new nk(e, -15, d), new nk(f, -15, d), new nk(e, 0, d), new nk(f, 0, d)];
			f = [new nk(e, d.height, d), new nk(f, d.height, d), new nk(e, d.height + 15, d), new nk(f, d.height + 15, d)];
			e = null;
			d = a.G;
			var g = !1;
			b.contains(c) ? (e = c[0].translate(b), a.G = 0, g = !0) : b.contains(f) && (e = f[0].translate(b), a.G = 1, g = !0);
			g ? (b = e.x, c = e.y, a.G !== d && (a.ta = !0), 1 === a.D && (d = a.A.j.frameElement.getBoundingClientRect(), c -= d.top + a.j.pageYOffset, b -= d.left + a.j.pageXOffset), R("xca_tel", {
				align: a.G,
				ins: a.D
			}, .01), b = {
				ab: !0,
				eb: b,
				mb: c
			}) : b = {
				ab: !1,
				eb: null,
				mb: null
			};
			d = b;
			b = d.eb;
			c = d.mb;
			d.ab ? (d = {
				margin: "0",
				padding: "0",
				width: a.H + "px",
				height: "15px",
				"z-index": 2147483647
			}, Xf(a.l, d), a.l.style.position = "relative", Xf(a.J, d), a.J.style.position = "absolute", a.ta && ((d = a.ua) && d.parentNode && d.parentNode.removeChild(d), d = "\ndiv,\nul,\nli {margin: 0;padding: 0;\n}\n.abgc {display: block;height: 15px;overflow: hidden;position: absolute;" + a.M + ": " + (!a.F || a.C ? 0 : 16) + "px;top: 0px;text-rendering: geometricPrecision;width: " + (15 + (a.C ? 16 : 0)) + "px;z-index: 9020;cursor: pointer;\n}\n.abgb {display: block;height: 15px;width: 15px;position: absolute;" + a.M + ": " + (a.F && a.C ? 16 : 0) + "px;top: 0px;\n}\n.cbb {background-image: url('" + mk + "');background-repeat: no-repeat;background-position: top right;cursor: pointer;height: 15px;width: 15px;z-index: 9020;position: absolute;" + a.M + ": 0;top: 0;\n}\n.abgc img {display: block;\n}\n.abgc svg {display: block;\n}\n.abgs {display: none;height: 100%;\n}\n.abgl {text-decoration: none;\n}\n.abgi {fill-opacity: 1.0;fill: #00aecd;stroke: none;\n}\n.abgbg {fill-opacity: 1.0;fill: #cdcccc;stroke: none;\n}\n.abgtxt {fill: black;font-family: 'Arial';font-size: 100px;overflow: visible;stroke: none;\n}", a.C || (d += ".cbb:hover {background-image: url('" + lk + "');cursor: pointer;}"), e = a.l.contentDocument, a.ua.appendChild(e.createTextNode(d)), e.head.appendChild(a.ua), a.ta = !1), a.l.style["float"] = a.V ? "left" : "right", vp(a), a.Ha || (Xf(a.J, {
				left: b + "px",
				top: c + "px"
			}), a.Ha = !0)) : An(a, !0)
		},
		En = function(a) {
			var b = xp(a),
				c = a.l.contentWindow,
				d = a.l.contentDocument;
			c && d && d.body || tk("xca_noifr", "Bad iframe attach");
			c.goog_extracreative_attribution = !0;
			yp(d, d.body, b);
			c.abgp = a.o.abgp;
			a.Ga = d.getElementById("abgc");
			a.Ka = d.getElementById("cbb");
			b = a.C ? a.Ga : a.Ka;
			c = pe(document, "SCRIPT");
			c.setAttribute("src", kk);
			d.body.appendChild(c);
			b && b.addEventListener("click", function() {
				An(a);
				a.ra = !0;
				Ve(a.j, "resize", a.aa, Se);
				Ve(a.j, "scroll", a.aa, Se);
				r.clearInterval(a.Za);
				a.l && a.l.contentWindow && Ve(a.l.contentWindow, "message", a.Ja);
				Bn(a, "xca-clk")
			});
			Yf(function() {
				On(a)
			});
			a.Za = r.setInterval(function() {
				Bn(a, "req-pos-xca")
			}, 5E3);
			0 === a.D && Eo(a);
			op(a);
			vp(a)
		},
		Fn = function(a) {
			sk(a.l);
			wp(a);
			Yf(function() {
				if (a.A.j.frameElement) {
					var b = a.A.j.frameElement.parentElement;
					if (a.A.j.parent !== a.j) a.D = 0;
					else for (var c = 0; 40 > c; ++c) {
						var d = b;
						d || tk("xca_badtar", "Bad target");
						d = r.getComputedStyle(d);
						if ("visible" !== d.visibility || "none" === d.display || "1" !== d.opacity || "visible" !== d.overflow || "visible" !== d["overflow-x"] || "visible" !== d["overflow-y"]) {
							a.D = 0;
							break
						}
						if (!b.parentElement) {
							a.D = 1;
							break
						}
						b = b.parentElement
					}
					switch (a.D) {
					case 0:
						b = a.j.document.body;
						break;
					case 1:
						b = a.A.j.frameElement.parentElement;
						break;
					default:
						b = a.j.document.body
					}
					b.appendChild(a.J);
					a.J.appendChild(a.l)
				}
			})
		},
		xp = function(a) {
			var b = {
				tagName: "DIV",
				attributes: [{
					name: "id",
					value: "cbb"
				}, {
					name: "class",
					value: "cbb"
				}, {
					name: "aria-hidden",
					value: ( !! a.U).toString()
				}],
				children: []
			},
				c = {
					tagName: "DIV",
					attributes: [{
						name: "id",
						value: "abgb"
					}, {
						name: "class",
						value: "abgb"
					}],
					children: []
				},
				d = {
					tagName: "DIV",
					attributes: [{
						name: "id",
						value: "abgs"
					}, {
						name: "class",
						value: "abgs"
					}],
					children: [{
						tagName: "A",
						attributes: [{
							name: "id",
							value: "abgl"
						}, {
							name: "class",
							value: "abgl"
						}, {
							name: "href",
							value: a.o.abg_href
						}, {
							name: "target",
							value: a.o.abg_target
						}],
						children: []
					}]
				},
				e = {
					tagName: "DIV",
					attributes: [{
						name: "id",
						value: "abgc"
					}, {
						name: "class",
						value: "abgc"
					}, {
						name: "dir",
						value: a.sa
					}, {
						name: "aria-hidden",
						value: ( !! a.U).toString()
					}],
					children: []
				},
				f = {
					tagName: "DIV",
					attributes: [{
						name: "id",
						value: "abgcp"
					}, {
						name: "class",
						value: "abgcp"
					}, {
						name: "dir",
						value: a.sa
					}, {
						name: "aria-hidden",
						value: ( !! a.U).toString()
					}],
					children: []
				},
				g = [];
			a.C ? (g.push(f), f.children.push(e), e.children.push(c), e.children.push(d), a.F && e.children.push(b)) : (g.push(e), a.F && g.push(b), e.children.push(c), e.children.push(d));
			return g
		};
	Cn.prototype.$ = function(a) {
		a.xcat = this.Kb
	};
	var yp = function(a, b, c) {
			c = va(c);
			for (var d = c.next(); !d.done; d = c.next()) {
				d = d.value;
				for (var e = a.createElement(d.tagName.toString()), f = va(d.attributes), g = f.next(); !g.done; g = f.next()) g = g.value, e.setAttribute(g.name, g.value);
				b.appendChild(e);
				yp(a, e, d.children)
			}
		};
	var zp = function(a, b) {
			return a && (a = a.match(b + "=([^&]+)")) && 2 == a.length ? a[1] : ""
		};
	var Bp = function(a) {
			zn.call(this, a);
			this.v = this.o = null;
			this.l = Ap("iframe", void 0, "mta-lbx");
			this.A = null;
			this.D = this.C = !1
		};
	ka(Bp, zn);
	var Cp = function(a, b, c) {
			if (a.o && a.o.j) a.o.j.A[b] = c;
			else throw Error("register failed");
		},
		Dp = function(a, b, c) {
			if (a.o && a.o.j) a.o.j.C(b, c);
			else throw Error("send failed");
		};
	Bp.prototype.H = function(a, b) {
		var c = this;
		b.source && Wf(b.source) && !this.o && (this.o = new gl("mta-ch", b), Cp(this, "show-lbx", A(this.G, this)), Cp(this, "chk-lbx", A(this.I, this)), Cp(this, "hide-lbx", function() {
			Ep(c)
		}))
	};
	Bp.prototype.G = function(a) {
		var b = this;
		if (!this.j.document.getElementById("mta-lbx")) {
			a = A(this.F, this, a);
			F(this.l, "load", a);
			this.A = B(Ve, this.l, "load", a);
			this.j.document.body.appendChild(this.l);
			if (this.v["d-elbbi"]) {
				this.j.history.pushState(null, "", "#");
				this.C = !0;
				var c = function() {
						b.C = !1;
						Ep(b, 6);
						Ve(b.j, "popstate", c)
					};
				F(this.j, "popstate", c)
			}
			R("gdn::mta-lbx", {
				exit: 0
			}, 1)
		}
	};
	Bp.prototype.F = function() {
		var a = this;
		this.A && this.A();
		we(this.l, {
			display: "none",
			position: "fixed",
			top: "0px",
			left: "0px",
			width: "100%",
			height: "0px",
			border: "0px",
			margin: "0px"
		});
		var b = Fb('body {margin: 0px;}#feedback-element {transition:opacity 0.25s linear;opacity:0;}#feedback-element.show {opacity:1;}.pi {float: right;}[dir="rtl"] .pi {float: left;}.mtasw {background-color: rgba(0,0,0,0.8);bottom: 0px;opacity: 1.0;overflow-y: auto;position: absolute;top: 0px;width: 100%;}.mtas {display: block;font-size: 16px;margin: 126px auto 96px auto;transition:margin-top 0.25s linear;width: 320px;max-width: 92%;}.show .mtas {margin-top: 96px;}.mtas span,.mta-menu span {display: inline-block;}.mtas img {height: 24px;margin-top: 12px;width: 24px;}.mtas div {display: block;width: 100%;}.sh {background-color: #4285f4;color: #FFFFFF;display: block;width: 100%;border-top-left-radius: 3px;-moz-border-top-left-radius: 3px;-webkit-border-top-left-radius: 3px;border-top-right-radius: 3px;-moz-border-top-right-radius: 3px;-webkit-border-top-right-radius: 3px;}.sh>div {padding:24px;width:auto;}.sh span {font-size: 1.25em;font-family: "Roboto-Light", arial, sans-serif;max-width:224px;}.sh img {margin:0;opacity:0.4;cursor:pointer;}.bsctr {border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;background-color: #FFFFFF;box-shadow: 0 2px 7px 1px rgba(0,0,0,0.8);}.bs {padding: 0.8em 0px;}.bs a {cursor: pointer;}.bs a {box-sizing: border-box;display: block;padding: 0 24px;width: 100%;}.bs a span {color: rgba(0, 0, 0, 0.54);font-family: "Roboto-Medium", arial, sans-serif;font-size: 1em;margin: 14px 0;max-width: 224px;}.mctr {position: absolute;top: 15px;left: 15px;}.mbs {padding: 5px 0;margin: 0;box-shadow: 0 0 3px 3px rgba(0,0,0,0.2);}.mbs img {height: 21px;margin: 3px 14px 0 0;}.mbs a {box-sizing: border-box;display: table;padding: 0 14px;width: 100%;}.mbs a div {display: table-cell;vertical-align: middle;}\'div.ictr {width: 35px;}.mbs a span {display: inline-block;color: rgba(0, 0, 0, 0.54);font-family: "Roboto-Medium", arial, sans-serif;font-size: 1em;margin: 11px 0;max-width: 224px;}');
		Be(hc(b), this.l.contentDocument.head);
		var c = Ap("div", this.l.contentDocument.body, "feedback-element");
		b = Ap("div", c, "survey-background", "mtasw");
		b = Ap("div", b, void 0, "mtas");
		b = Ap("div", b, "survey");
		var d = Ap("div", b, void 0, "bsctr"),
			e = Ap("div", d, void 0, "sh"),
			f = Ap("div", e),
			g = pe(document, "img");
		g.className = "pi";
		g.setAttribute("id", "exit");
		Gc(g, Lb(Ob(this.v["d-pgh"] + "/images/icons/material/system/2x/close_white_24dp.png")));
		F(g, "click", function() {
			Ep(a, 2)
		});
		var h = Ap("span", f);
		Dc(h, xc(this.v["d-lht"]));
		f.appendChild(h);
		f.appendChild(g);
		e.appendChild(f);
		e = Ap("div", d, "feedback-buttons", "bs");
		f = this.v["d-oa"];
		for (g = 0; g < f.length; ++g) h = Ap("a", e), Dc(h, Cc("span", void 0, f[g]));
		if (this.v["d-els"]) {
			d = Ap("div", d, void 0, "bs", {
				"border-top": "1px solid #DDDDDD"
			});
			d = Ap("a", d, "ad-settings");
			d.setAttribute("target", "_blank");
			d.setAttribute("href", "//www.google.com/settings/ads/anonymous");
			Dc(d, Cc("span", void 0, this.v["d-sbt"]));
			f = pe(document, "img");
			f.className = "pi";
			Gc(f, Lb(Ob(this.v["d-siu"])));
			d.appendChild(f);
			var k = function() {
					Ep(a, 4)
				};
			F(d, "click", function() {
				return setTimeout(k, 0)
			})
		}
		F(this.l.contentDocument, "click", function() {
			Ep(a, 3)
		});
		d = e.getElementsByTagName("a");
		for (e = 0; e < d.length; ++e) F(d[e], "click", A(this.J, this, e));
		F(b, "click", function(a) {
			a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
		});
		we(this.l, {
			height: "100%",
			display: "block",
			"z-index": "2147483647"
		});
		r.setTimeout(function() {
			c.className = "show"
		}, 50);
		Dp(this, "lbx-dis", {})
	};
	var Ep = function(a, b) {
			a.l && a.l.parentNode && a.l.parentNode.removeChild(a.l);
			Dp(a, "lbx-hid", {});
			a.C && a.j.history.back();
			b && !a.D && (R("gdn::mta-lbx", {
				exit: b
			}, 1), a.D = !0)
		};
	Bp.prototype.I = function(a) {
		w(a) || (this.v = a.ufd, Dp(this, "lbx-rdy", {}))
	};
	Bp.prototype.J = function(a) {
		var b = {};
		Dp(this, "lbx-exit", (b.foi = a, b));
		Ep(this, 1)
	};
	Bp.prototype.$ = function(a) {
		a["mta-lbx"] = this.H
	};
	Bp.prototype.W = function() {
		return null
	};
	var Ap = function(a, b, c, d, e) {
			a = pe(document, a);
			b && b.appendChild(a);
			c && a.setAttribute("id", c);
			d && (a.className = d);
			e && we(a, e);
			return a
		};
	var Fp = function(a) {
			return {
				visible: 1,
				hidden: 2,
				prerender: 3,
				preview: 4,
				unloaded: 5
			}[a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || ""] || 0
		},
		Gp = function(a) {
			var b;
			a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState ? b = "webkitvisibilitychange" : a.visibilityState && (b = "visibilitychange");
			return b
		},
		Hp = function(a) {
			return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
		};
	var Ip = {},
		Jp = null;
	Ip.le = 0;
	Ip.nt = 2;
	Ip.Fr = 3;
	Ip.Po = 5;
	Ip.me = 1;
	Ip.om = 4;
	var Kp = function(a) {
			Ip.e = -1;
			Ip.i = 6;
			Ip.n = 7;
			Ip.t = 8;
			if (!Jp) {
				var b = [];
				Uc(Ip, function(a, c) {
					b[a + 1] = c
				});
				var c = b.join(""),
					d = a && a[c];
				Jp = d &&
				function(b, c) {
					return d.call(a, b, c)
				}
			}
			return Jp
		};
	var Lp = function() {
			if (Bd) {
				var a = /Windows NT ([0-9.]+)/;
				return (a = a.exec(ic)) ? a[1] : "0"
			}
			return Ad ? (a = /10[_.][0-9_.]+/, (a = a.exec(ic)) ? a[0].replace(/_/g, ".") : "10") : Rd ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(ic)) ? a[1] : "") : Sd || Td || Ud ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(ic)) ? a[1].replace(/_/g, ".") : "") : ""
		}();
	var Mp = /\.((google(|groups|mail|images|print))|gmail)\./,
		Np = function(a) {
			try {
				var b = Mp.test(a.location.host);
				return !(!a.postMessage || !a.JSON || b && !hd)
			} catch (c) {
				return !1
			}
		};
	var Op = null,
		Pp = function() {
			if (!Op) a: {
				for (var a = Qc(), b = 0; b < a.length; b++) try {
					var c = a[b].frames.google_esf;
					if (c) {
						Op = c;
						break a
					}
				} catch (d) {}
				Op = null
			}
			return Op
		};
	var Qp = function(a, b, c) {
			a = oh(a, c, 1);
			c = Kg(c, $g, 6);
			var d = {};
			return d[lg.name] = b, d[mg.name] = 3, d.maxNumberOfApianaAds = 3, d.minVerticalApianaAdSpacing = {
				Yb: 1,
				value: 100
			}, d.minVerticalDistanceFromExistingAds = {
				Yb: 1,
				value: 300
			}, d.verticalMarginsPx = 30, d.slotFormat = 2, d.adType = a ? "text_image" : "text", d.autoPlacementMetadata = c ? c.C() : "", d
		};
	var Sp = function() {
			return !Rp() && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile"))
		},
		Rp = function() {
			return E("iPad") || E("Android") && !E("Mobile") || E("Silk")
		};
	var Tp = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed google_full_width_responsive gfwrow gfwroml gfwromr gfwroz gfwrnh google_fwr_non_expansion_reason google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width google_responsive_formats google_responsive_auto_format google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_sui google_tag_for_child_directed_treatment google_tag_origin google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up".split(" "),
		Up = function(a) {
			return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1]) ? a[1] : null
		},
		Vp = function(a) {
			if (a = a.innerText || a.innerHTML) if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
			return null
		},
		Yp = function(a) {
			try {
				a: {
					var b = a.document.getElementsByTagName("script"),
						c = a.navigator && a.navigator.userAgent || "",
						d;
					if (!(d = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c))) {
						var e;
						if (e = /i(phone|pad|pod)/i.test(c)) {
							var f;
							if (f = /applewebkit/i.test(c) && !/version|safari/i.test(c)) {
								var g = void 0 === g ? D : g;
								try {
									var h = !(!g.navigator.Tb && !Uf(g).navigator.Tb)
								} catch (u) {
									h = !1
								}
								f = !h
							}
							e = f
						}
						d = e
					}
					c = d ? Up : Vp;
					for (var k = b.length - 1; 0 <= k; k--) {
						var l = b[k];
						if (!l.google_parsed_script) {
							l.google_parsed_script = !0;
							var p = c(l);
							if (p) {
								var q = p;
								break a
							}
						}
					}
					q = null
				}
			} catch (u) {
				return !1
			}
			if (!q) return !1;
			try {
				b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
				k = {};
				for (var v; v = b.exec(q);) k[v[1]] = Wp(v[2]);
				Xp(k, a)
			} catch (u) {
				return !1
			}
			return !!a.google_ad_client
		},
		Zp = function(a) {
			var b = {};
			null == a.google_ad_client && Yp(a) && (b.google_loader_features_used = 2048);
			Xp(a, b);
			return b
		},
		$p = function(a) {
			try {
				if (r.JSON && r.JSON.stringify && r.encodeURIComponent) {
					var b = function() {
							return this
						};
					if (Object.prototype.hasOwnProperty("toJSON")) {
						var c = Object.prototype.toJSON;
						Object.prototype.toJSON = b
					}
					if (Array.prototype.hasOwnProperty("toJSON")) {
						var d = Array.prototype.toJSON;
						Array.prototype.toJSON = b
					}
					var e = r.encodeURIComponent(r.JSON.stringify(a));
					try {
						var f = xg ? r.btoa(e) : Ag(rg(e), void 0)
					} catch (g) {
						f = "#" + Ag(rg(e), !0)
					}
					c && (Object.prototype.toJSON = c);
					d && (Array.prototype.toJSON = d);
					return f
				}
			} catch (g) {
				cj(237, g)
			}
			return ""
		},
		aq = function(a) {
			try {
				if (a && r.JSON && r.JSON.parse && r.decodeURIComponent) {
					var b = "#" == a[0] ? Cg(a.substr(1), !0) : Cg(a),
						c = r.JSON.parse(r.decodeURIComponent(b)),
						d = {};
					G(c, function(a, b) {
						d[b] = a
					});
					return d
				}
				R("dblob", {
					json: r.JSON ? 1 : 0,
					dURI: r.decodeURIComponent ? 1 : 0,
					blob: a ? a : 0
				})
			} catch (e) {
				cj(238, e)
			}
			return null
		},
		Wp = function(a) {
			switch (a) {
			case "true":
				return !0;
			case "false":
				return !1;
			case "null":
				return null;
			case "undefined":
				break;
			default:
				try {
					var b = a.match(/^(?:'(.*)'|"(.*)")$/);
					if (b) return b[1] || b[2] || "";
					if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
						var c = parseFloat(a);
						return c === c ? c : void 0
					}
				} catch (d) {}
			}
		},
		Xp = function(a, b) {
			for (var c = 0; c < Tp.length; c++) {
				var d = Tp[c];
				null == b[d] && null != a[d] && (b[d] = a[d])
			}
		};
	var bq = function() {
			this.j = null
		},
		cq = function(a) {
			a = V(a);
			a.stateForType[16] || (a.stateForType[16] = []);
			return a.stateForType[16]
		},
		fq = function(a, b, c) {
			var d = dq(a, b);
			b.google_full_width_responsive_allowed && (a.style.marginLeft = b.gfwroml, a.style.marginRight = b.gfwromr, a.style.width = b.gfwrow, a.style.zIndex = b.gfwroz, delete b.google_full_width_responsive_allowed);
			delete b.google_ad_format;
			delete b.google_ad_width;
			delete b.google_ad_height;
			H().google_spfd(a, b, c);
			var e = dq(a, b);
			!e && d && 1 == a.childNodes.length ? (eq(d, !1), b.google_reactive_ad_format = 16, b.google_ad_section = "responsive_resize", a.setAttribute("data-adsbygoogle-status", "reserved"), c.adsbygoogle || (c.adsbygoogle = [], d = Wm(Tf(), "/pagead/js/adsbygoogle.js"), Rc(c.document, d)), c.adsbygoogle.push({
				element: a,
				params: b
			})) : e && d ? e != d && (eq(d, !1), eq(e, !0)) : R("auto_size_refresh", {
				context: "showOrHideElm",
				url: c.location.href,
				nodes: a.childNodes.length
			})
		},
		eq = function(a, b) {
			a.style.display = b ? "inline-block" : "none"
		},
		dq = function(a, b) {
			for (var c = 0; c < a.childNodes.length; c++) {
				for (var d = {}, e = a.childNodes[c].style, f = ["width", "height"], g = 0; g < f.length; g++) {
					var h = "google_ad_" + f[g];
					if (!d.hasOwnProperty(h)) {
						var k = bd(e[f[g]]);
						k = null === k ? null : Math.round(k);
						null != k && (d[h] = k)
					}
				}
				if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height) return a.childNodes[c]
			}
			return null
		};
	bq.prototype.processDebugConfig = function(a) {
		F(a, "resize", A(this.l, this, a))
	};
	bq.prototype.verifyAndProcessConfig = function(a, b) {
		var c = V(a);
		if (!b || c.wasReactiveAdConfigReceived[16] || !cq(a).length) return !1;
		c.wasReactiveAdConfigReceived[16] = !0;
		this.j = a.innerHeight >= a.innerWidth ? 0 : 90;
		F(a, "resize", A(this.l, this, a));
		return !0
	};
	bq.prototype.getSchema = function() {
		return new Mj
	};
	bq.prototype.l = function(a) {
		var b = a.innerHeight >= a.innerWidth ? 0 : 90;
		if (this.j != b) {
			this.j = b;
			b = cq(a);
			for (var c = 0; c < b.length; c++) if (b[c].Ca.offsetWidth != b[c].offsetWidth || b[c].B.google_full_width_responsive_allowed) b[c].offsetWidth = b[c].Ca.offsetWidth, aj("resp::och", B(fq, b[c].Ca, b[c].B, a))
		}
	};
	bq.j = void 0;
	bq.l = function() {
		return bq.j ? bq.j : bq.j = new bq
	};
	var hq = function(a) {
			var b = this;
			this.j = a;
			Oj(a, "rctcnf", dj("rach::hdlr", function(a, d) {
				return gq(b, a, d)
			}), Vi("rach::xsh", B(xn, a, "rach::xsf"), void 0))
		},
		gq = function(a, b, c) {
			if (Qf(c.origin)) {
				var d = b.config,
					e = d[kg.name];
				e ? 16 !== e ? kn("rach_pac", function(b) {
					iq(a.j, e, d, b)
				}) : iq(a.j, e, d) : cj("rach::cmh", Error("config not recognized " + c.data))
			}
		},
		iq = function(a, b, c, d) {
			var e;
			16 === b ? e = bq.l() : d && (e = d.configProcessorForAdFormat(b));
			e && aj("rach::cmh::" + b, function() {
				return e.verifyAndProcessConfig(a, c)
			})
		};
	var jq = null,
		kq = function(a) {
			this.j = a
		},
		Z = function(a, b) {
			a = parseFloat(a.j[b]);
			return isNaN(a) ? 0 : a
		},
		lq = function(a) {
			jq || (jq = new kq(a.google_t12n_vars));
			return jq
		};
	var mq = new $l(["google-auto-placed"], {});
	var nq = function(a) {
			this.j = {};
			this.l = {};
			if (a) for (var b = 0; b < a.length; ++b) this.add(a[b])
		};
	nq.prototype.add = function(a) {
		this.j[a] = !0;
		this.l[a] = a
	};
	nq.prototype.contains = function(a) {
		return !!this.j[a]
	};
	var oq = new nq("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
	var pq = function() {};
	pq.prototype.j = function(a, b, c, d) {
		return fm(d.document, a, {}, b)
	};
	var qq = function(a) {
			this.l = a
		};
	qq.prototype.j = function(a) {
		a = Math.floor(a.l);
		var b = a;
		460 <= b ? (b = Math.min(b, 1200), b = Math.ceil(800 > b ? b / 4 : 200)) : (b = Math.min(b, 600), b = 420 >= b ? Math.ceil(b / 1.2) : Math.ceil(b / 1.91) + 130);
		var c = {};
		return new $l(["ap_container"], (c.google_reactive_ad_format = 27, c.google_max_num_ads = 1, c.google_ad_type = this.l, c.google_ad_format = a + "x" + b, c.google_ad_width = a, c.google_ad_height = b, c))
	};
	var rq = function(a, b) {
			this.o = a;
			this.v = b
		};
	rq.prototype.l = function() {
		return this.o
	};
	rq.prototype.j = function() {
		return this.v
	};
	var tq = function(a, b, c) {
			for (var d = [], e = 0; e < b.length; e++) for (var f = b[e], g = [], h = 0; h < f.length; h++) {
				var k = f[h];
				if (fe && null !== k && "innerText" in k) var l = k.innerText.replace(/(\r\n|\r|\n)/g, "\n");
				else l = [], se(k, l, !0), l = l.join("");
				l = l.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
				l = l.replace(/\u200B/g, "");
				fe || (l = l.replace(/ +/g, " "));
				" " != l && (l = l.replace(/^\s*/, ""));
				if (!(50 >= l.length)) {
					if (!(l = 0 == g.length)) a: {
						l = a;
						var p = g[g.length - 1];
						if (p && k) {
							var q = p.parentElement,
								v = k.parentElement;
							if (q && v && q == v) for (q = 0, p = p.nextSibling; 10 > q && p;) {
								if (p == k) {
									l = !0;
									break a
								}
								if (sq(l, p)) break;
								p = p.nextSibling;
								q++
							}
						}
						l = !1
					}
					l ? (g.push(k), 3 <= g.length && (sb(d, new vm(new rq(g[1], 3), new pq, new qq(c || ""), !1, 2, [], a)), g.shift())) : g = [k]
				}
			}
			return d
		},
		sq = function(a, b) {
			if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? ab(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
			if (1 == b.nodeType) {
				var c = a.getComputedStyle(b);
				if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
				if ((c = b.tagName) && oq.contains(c.toUpperCase())) return !0;
				b = b.childNodes;
				for (c = 0; c < b.length; c++) if (sq(a, b[c])) return !0
			}
			return !1
		};
	var uq = function(a) {
			Gg(this, a, null)
		};
	C(uq, K);
	var vq = function(a) {
			try {
				return a ? new jh(a ? JSON.parse(a) : null) : null
			} catch (b) {
				return null
			}
		},
		wq = function(a) {
			try {
				return a.localStorage.getItem("google_ama_config")
			} catch (b) {
				return null
			}
		};
	var xq = function(a) {
			this.A = {};
			this.A.c = a;
			this.o = [];
			this.j = null;
			this.v = [];
			this.C = 0
		},
		yq = function(a, b) {
			a.A.wpc = b;
			return a
		},
		zq = function(a, b) {
			for (var c = 0; c < b.length; c++) a.P(b[c]);
			return a
		};
	xq.prototype.P = function(a) {
		for (var b = 0; b < this.o.length; b++) if (this.o[b] == a) return this;
		this.o.push(a);
		return this
	};
	var Aq = function(a, b) {
			a.j = a.j ? a.j : b;
			return a
		};
	xq.prototype.ka = function(a) {
		var b = this.A,
			c = {},
			d;
		for (d in b) c[d] = b[d];
		0 < this.C && (c.t = this.C);
		c.err = this.o.join();
		c.warn = this.v.join();
		this.j && (c.excp_n = this.j.name, c.excp_m = this.j.message && this.j.message.substring(0, 512), c.excp_s = this.j.stack && Wi(this.j.stack, ""));
		c.w = 0 < a.innerWidth ? a.innerWidth : null;
		c.h = 0 < a.innerHeight ? a.innerHeight : null;
		return c
	};
	var Bq = function(a) {
			xq.call(this, a);
			this.l = {}
		};
	ka(Bq, xq);
	var Cq = function(a, b) {
			b && (a.l.apv = L(b, 4));
			return a
		};
	Bq.prototype.ka = function(a) {
		try {
			this.l.su = a.location.hostname
		} catch (b) {
			this.l.su = "_ex"
		}
		a = xq.prototype.ka.call(this, a);
		Ab(a, this.l);
		return a
	};
	var Dq = {
		1: "0.5vp",
		2: "300px"
	},
		Eq = {
			1: 700,
			2: 1200
		},
		Fq = function(a, b, c) {
			this.j = a;
			this.o = b.sort(function(a, b) {
				return a.adCount - b.adCount
			});
			this.l = c
		};

	function Gq(a, b) {
		var c = Hq(L(a, 2), b);
		if (null === c) return null;
		var d = L(a, 4);
		if (null == d) return null;
		var e = [];
		a = Lg(a, fh, 3);
		a = va(a);
		for (var f = a.next(); !f.done; f = a.next()) {
			var g = f.value;
			f = g.ea();
			g = Hq(L(g, 2), b);
			if (!x(f) || null === g) return null;
			e.push({
				adCount: f,
				spacing: g
			})
		}
		return new Fq(c, e, d)
	}
	function Hq(a, b) {
		if (!a) return null;
		var c = parseFloat(a);
		return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
	};
	var Iq = {},
		Lq = function(a, b) {
			var c = b.C.l,
				d = Hm(b.j);
			if (d.ea() >= c) return !0;
			for (var e = Jq(b, a, d); e.length;) if (Kq(b, e.shift())) {
				if (d.ea() + 1 >= c) return !0;
				d = Hm(b.j);
				e = Jq(b, a, d)
			}
			return b.l
		},
		Mq = function(a, b) {
			var c = Hm(b.j);
			a = Jq(b, a, c);
			if (0 == a.length) return !0;
			for (c = 0; c < a.length; c++) if (Kq(b, a[c])) return !0;
			return b.l ? (b.o.push(11), !0) : !1
		};
	Iq[2] = B(Mq, 0);
	Iq[5] = B(Lq, 0);
	Iq[4] = B(Mq, 1);
	Iq[3] = function(a) {
		if (!a.l) return !1;
		var b = Hm(a.j);
		b = Jq(a, 0, b);
		if (0 == b.length) return !0;
		for (var c = b.length - 1; 0 <= c; c--) if (Kq(a, b[c])) return !0;
		a.o.push(11);
		return !0
	};
	Iq[6] = B(Lq, 2);
	var Nq = function(a, b) {
			if (!a) return !1;
			a = Sc(a, b);
			if (!a) return !1;
			a = a.cssFloat || a.styleFloat;
			return "left" == a || "right" == a
		},
		Oq = function(a) {
			for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
			return a ? a : null
		},
		Pq = function(a) {
			return !!a.nextSibling || !! a.parentNode && Pq(a.parentNode)
		};
	var Qq = function(a, b, c, d, e, f) {
			this.A = a;
			this.H = b;
			this.j = c;
			this.C = d;
			this.F = f || [];
			this.G = e || null;
			this.l = !1;
			this.D = [];
			this.o = [];
			this.v = void 0
		},
		Rq = function(a) {
			return a.v ? a.v : a.v = a.j.google_ama_state
		},
		Jq = function(a, b, c) {
			var d = a.C,
				e = c.ea();
			var f = d.j;
			d = va(d.o);
			for (var g = d.next(); !g.done; g = d.next()) g = g.value, g.adCount <= e && (f = g.spacing);
			e = a.A;
			d = Rq(a);
			null != d ? (d = d.placement, d = !x(d) || 0 > d || d > a.A.oa.j.length ? -1 : d) : d = -1;
			g = {
				jb: d,
				fb: b,
				gb: f,
				tb: c,
				wb: a.F
			};
			f = x(g.jb) ? g.jb : -1;
			if (f >= e.oa.j.length) throw Error("AMA:PF:I");
			var h = g.fb ? g.fb : 0;
			d = x(g.gb) ? g.gb : 0;
			a = x(g.minWidth) ? g.minWidth : 0;
			b = x(g.maxWidth) ? g.maxWidth : Infinity;
			c = x(g.Hb) ? g.Hb : 0;
			var k = e.oa;
			0 > f ? f = k : (k = k.j.slice(0), k.splice(f, 1), f = new Am(k));
			f = Bm(f, Km(h));
			f = Bm(f, Lm(g.wb || []));
			f = Bm(f, Mm(g.vd || []));
			f = Bm(f, Oe(xm));
			h = f = f.apply(Jm(e.ma));
			if (0 > d) throw Error("ama::ead:nd");
			Infinity === d ? d = Me : (g = (g.tb || Hm(e.ma)).La, d = B(Pm, g, d));
			d = Bm(h, d);
			g = e.ma;
			h = nl(g).clientHeight;
			d = Bm(d, h ? B(Om, h + pl(g)) : Me);
			d = Bm(d, B(Qm, a, b));
			d = Bm(d, Nm(c, e.ma));
			d = new Am(d.j.slice(0).sort(zm));
			e = e.Ub;
			a = {
				qd: f.j.length,
				xd: d.j.length
			};
			xa(e.j) || (e.j = a);
			return d.j.slice(0)
		};
	Qq.prototype.P = function(a) {
		this.D.push(a)
	};
	var Kq = function(a, b) {
			var c = b.j,
				d;
			if (!(d = c.l)) {
				d = c.j.j();
				var e = b.l,
					f = a.l;
				a: {
					var g = a.j;
					switch (d) {
					case 0:
						g = Nq(Oq(e), g);
						break a;
					case 3:
						g = Nq(e, g);
						break a;
					case 2:
						var h = e.lastChild;
						g = Nq(h ? 1 == h.nodeType ? h : Oq(h) : null, g);
						break a
					}
					g = !1
				}
				if (f = !g && !(!f && 2 == d && !Pq(e))) d = 1 == d || 2 == d ? e : e.parentNode,
				f = !(d && (1 != d.nodeType || "INS" != d.tagName || !am(d)) && 0 >= d.offsetWidth);
				d = !f
			}
			if (d) return !1;
			d = a.G;
			e = c.v ? c.v.j(b.Z) : null;
			d ? e ? (c = d.j || [], c = c.concat(e.j || []), d = Object.assign({}, d.l, e.l), c = new $l(c, d)) : c = d : c = e;
			d = b.j;
			if (d = d.A.j(a.H, c, b.l, d.o)) {
				if (b.j.l) throw Error("AMA:AP:AP");
				bm(d.la, b.l, b.j.j.j());
				b.j.l = !0
			}
			if (!d) return !1;
			try {
				var k = a.j,
					l = d.ba;
				l.setAttribute("data-adsbygoogle-status", "reserved");
				b = {
					element: l
				};
				var p = c && c.l;
				p && (b.params = p);
				(k.adsbygoogle = k.adsbygoogle || []).push(b)
			} catch (q) {
				return cm(d.la), a.o.push(6), !1
			}
			return !0
		};
	var Sq = function(a, b, c) {
			this.da = a;
			this.Y = b;
			this.ha = c
		};
	var Tq = function(a, b) {
			this.v = a.slice(0);
			a = this.j = a.slice(0);
			var c = mb(a, 1),
				d;
			(d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
			this.o = d;
			this.l = b
		},
		Uq = function(a, b) {
			b = Iq[b];
			return b ? b(a.l) : (a.l.P(12), !0)
		};
	var Wq = function() {
			this.Ba = new Vq(this);
			this.pa = 0
		},
		Xq = function(a) {
			if (0 != a.pa) throw Error("Already resolved/rejected.");
		},
		Vq = function(a) {
			this.j = a
		};
	Vq.prototype.then = function(a, b) {
		if (this.l) throw Error("Then functions already set.");
		this.l = a;
		this.o = b;
		Yq(this)
	};
	var Yq = function(a) {
			switch (a.j.pa) {
			case 0:
				break;
			case 1:
				a.l && a.l(a.j.Rb);
				break;
			case 2:
				a.o && a.o(a.j.j);
				break;
			default:
				throw Error("Unhandled deferred state.");
			}
		};
	var Zq = function(a, b) {
			this.j = a;
			this.exception = b
		},
		$q = function(a, b, c, d) {
			this.o = a;
			this.j = b;
			this.A = c;
			this.l = d
		};
	$q.prototype.start = function() {
		this.v()
	};
	$q.prototype.v = function() {
		try {
			switch (this.o.document.readyState) {
			case "complete":
			case "interactive":
				var a = this.j;
				for (a.l.l = !0; 0 < a.j.length;) Uq(a, a.j[0]) || a.l.P(5), a.j.shift();
				ar(this);
				break;
			default:
				a: {
					for (var b = this.j; 0 < b.j.length;) {
						if (!Uq(b, b.j[0])) {
							var c = !1;
							break a
						}
						b.j.shift()
					}
					c = !0
				}
				c ? ar(this) : this.o.setTimeout(A(this.v, this), this.A)
			}
		} catch (d) {
			ar(this, d)
		}
	};
	var ar = function(a, b) {
			try {
				var c = a.l,
					d = a.j;
				var e = new Sq(Bm(d.l.A.oa, xm).j.length, d.l.D.slice(0), d.l.o.slice(0));
				var f = new Zq(e, b);
				Xq(c);
				c.pa = 1;
				c.Rb = f;
				Yq(c.Ba)
			} catch (g) {
				a = a.l, b = g, Xq(a), a.pa = 2, a.j = b, Yq(a.Ba)
			}
		};
	var br = function() {};
	br.prototype.j = function() {
		var a = {};
		return new $l([], (a.google_tag_origin = "qs", a))
	};
	var cr = function(a) {
			this.j = a
		},
		dr = function(a, b) {
			a = b.ka(a.j);
			a.r = .1;
			R("ama_failure", a, .1)
		};
	var fr = function(a, b, c, d, e) {
			var f = new cr(a);
			if (b) if (c) try {
				var g = new er(a, f, b, c, d, e);
				a: {
					var h = g.j,
						k = !Sp() || 900 <= nl(h).clientWidth ? 2 : 1,
						l = nl(h).clientHeight || Eq[k];
					b: {
						for (var p = Lg(g.A, eh, 2), q = va(p), v = q.next(); !v.done; v = q.next()) {
							var u = v.value;
							if (L(u, 1) == k) {
								var t = u;
								break b
							}
						}
						t = null
					}
					if (a = t) {
						var S = Gq(a, l);
						if (S) {
							var aa = S;
							break a
						}
					}
					var Q = Hq(Dq[k], l);
					aa = new Fq(null === Q ? Infinity : Q, [], 3)
				}
				var W = Kg(g.A, hh, 3),
					ia = W ? Hg(W, 1) : [],
					T = g.o,
					Ia = Lg(T, Yg, 1),
					Ce = g.j,
					De = new br;
				W = [];
				for (k = 0; k < Ia.length; k++) {
					var qd = wm(Ia[k], Ce, De);
					null === qd || W.push(qd)
				}
				var n = W;
				Ia.length != n.length && g.C.push(13);
				if (Pl(g.j)) {
					var Ua = Kg(T, $g, 6);
					if (Ua) {
						var X = oh(g.j, T, 1) ? "text_image" : "text",
							Ee = g.j;
						if (!Ua) throw Error("ap:xmt");
						T = [];
						var Fe = Lg(Ua, ah, 1);
						for (Ua = 0; Ua < Fe.length; Ua++) {
							var Ge = Fe[Ua],
								xb = L(Kg(Ge, Sg, 1), 7) || "",
								He = L(Kg(Ge, Sg, 2), 7) || "",
								rd = Ee.document.querySelectorAll(xb);
							for (Ia = 0; Ia < rd.length; Ia++) T.push(Array.prototype.slice.call(rd[Ia].querySelectorAll(He)))
						}
						n = n.concat(tq(g.j, T, X))
					}
				}
				g.v = new Qq(new Sm(n, g.j), g.G, g.j, aa, g.H, ia);
				var Ie = L(g.A, 1),
					sd = nh(g.j, g.o),
					Je = g.v;
				if (3 == Ie) {
					ia = []; - 1 != sd.indexOf(3) && ia.push(6); - 1 != sd.indexOf(1) && ia.push(1, 5);
					var Ec = ia
				} else Ec = [1, 2, 3];
				var td = new Tq(Ec, Je);
				g.l = td;
				var Fc = new Wq;
				(new $q(g.j, g.l, 10, Fc)).start();
				Fc.Ba.then(A(g.I, g), A(g.D, g))
			} catch (Ke) {
				dr(f, Aq(Cq(yq(new Bq(0), b), c).P(1), Ke))
			} else dr(f, yq(new Bq(0), b).P(8));
			else dr(f, (new Bq(0)).P(9))
		},
		er = function(a, b, c, d, e, f) {
			this.j = a;
			this.F = b;
			this.G = c;
			this.o = d;
			this.A = e;
			this.H = f || null;
			this.C = []
		},
		gr = function(a, b) {
			for (var c = zq(zq(new Bq(b.da), b.Y), a.C), d = b.ha, e = 0; e < d.length; e++) a: {
				for (var f = d[e], g = 0; g < c.v.length; g++) if (c.v[g] == f) break a;
				c.v.push(f)
			}
			c.l.eatf = b.va;
			c.l.reatf = b.wa;
			c.l.a = a.l.v.slice(0).join(",");
			c = yq(Cq(c, a.o), a.G);
			xa(b.exception) && Aq(c, b.exception).P(1);
			0 < b.Y.length || 0 < a.C.length || xa(b.exception) ? dr(a.F, c) : (a = c.ka(a.F.j), a.r = .1, R("ama_success", a, .1))
		};
	er.prototype.I = function(a) {
		try {
			a: {
				var b = this.v,
					c = (nl(b.j).clientHeight || 0) - pl(b.j),
					d = Em({
						za: !1,
						$a: !1
					}, b.j);
				for (b = 0; b < d.length; b++) {
					var e = d[b].getBoundingClientRect();
					if ((0 != e.top || 0 != e.right || 0 != e.bottom || 0 != e.left) && e.top <= c) {
						var f = !0;
						break a
					}
				}
				f = !1
			}
			var g = this.j;
			if (f) {
				var h = new uq;
				Ig(h, 2, !0);
				var k = Ha() + 864E5;
				Ig(h, 1, k);
				var l = h.C();
				try {
					g.localStorage.setItem("google_ama_settings", l)
				} catch (ia) {}
			} else {
				try {
					var p = g.localStorage.getItem("google_ama_settings");
					var q = p ? new uq(p ? JSON.parse(p) : null) : null
				} catch (ia) {
					q = null
				}
				if (q && L(q, 1) < Ha()) try {
					g.localStorage.removeItem("google_ama_settings")
				} catch (ia) {}
			}
			var v = Rq(this.v),
				u = a.j,
				t = u.da,
				S = u.Y.slice(),
				aa = u.ha.slice(),
				Q = a.exception;
			if (v) {
				x(v.placement) && 0 <= v.placement ? t += 1 : this.l.o && aa.push(13);
				xa(v.exception) && (Q = v.exception);
				var W = {
					da: t,
					Y: u.Y.slice(),
					ha: aa,
					exception: Q,
					wa: f,
					va: !! v.eatf
				}
			} else aa.push(12), this.l.o && aa.push(13), W = {
				da: t,
				Y: S,
				ha: aa,
				exception: Q,
				wa: f,
				va: !1
			};
			gr(this, W)
		} catch (ia) {
			this.D(ia)
		}
	};
	er.prototype.D = function(a) {
		gr(this, {
			da: 0,
			Y: [],
			ha: [],
			exception: a,
			wa: void 0,
			va: void 0
		})
	};
	var hr = function() {};
	var ir, jr = function() {};
	C(jr, hr);
	var kr = function(a) {
			a: {
				if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
					for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
						var d = b[c];
						try {
							new ActiveXObject(d);
							var e = a.j = d;
							break a
						} catch (f) {}
					}
					throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
				}
				e = a.j
			}
			return e ? new ActiveXObject(e) : new XMLHttpRequest
		};
	ir = new jr;
	var or = function(a) {
			var b = {},
				c = b.Zb ? kr(b.Zb) : kr(ir);
			return Rk(new Kk(function(d, e) {
				var f;
				try {
					c.open("GET", a, !0)
				} catch (k) {
					e(new lr("Error opening XHR: " + k.message, a, c))
				}
				c.onreadystatechange = function() {
					if (4 == c.readyState) {
						r.clearTimeout(f);
						a: switch (c.status) {
						case 200:
						case 201:
						case 202:
						case 204:
						case 206:
						case 304:
						case 1223:
							var b = !0;
							break a;
						default:
							b = !1
						}!b && (b = 0 === c.status) && (b = a.match(qh)[1] || null, !b && r.self && r.self.location && (b = r.self.location.protocol, b = b.substr(0, b.length - 1)), b = b ? b.toLowerCase() : "", b = !("http" == b || "https" == b || "" == b));
						b ? d(c) : e(new mr(c.status, a, c))
					}
				};
				c.onerror = function() {
					e(new lr("Network error", a, c))
				};
				if (b.headers) for (var g in b.headers) {
					var h = b.headers[g];
					null != h && c.setRequestHeader(g, h)
				}
				b.withCredentials && (c.withCredentials = b.withCredentials);
				b.responseType && (c.responseType = b.responseType);
				b.mimeType && c.overrideMimeType(b.mimeType);
				0 < b.Xb && (f = r.setTimeout(function() {
					c.onreadystatechange = za;
					c.abort();
					e(new nr(a, c))
				}, b.Xb));
				try {
					c.send(null)
				} catch (k) {
					c.onreadystatechange = za, r.clearTimeout(f), e(new lr("Error sending XHR: " + k.message, a, c))
				}
			}), function(a) {
				a instanceof Sk && c.abort();
				throw a;
			})
		},
		lr = function(a, b, c) {
			Qa.call(this, a + ", url=" + b);
			this.url = b;
			this.j = c
		};
	C(lr, Qa);
	lr.prototype.name = "XhrError";
	var mr = function(a, b, c) {
			lr.call(this, "Request Failed, status=" + a, b, c);
			this.status = a
		};
	C(mr, lr);
	mr.prototype.name = "XhrHttpError";
	var nr = function(a, b) {
			lr.call(this, "Request timed out", a, b)
		};
	C(nr, lr);
	nr.prototype.name = "XhrTimeoutError";
	var pr = function(a, b, c) {
			var d = vq(wq(a));
			if (c = ij(a, c)) if (gj(a, c), Pl(a)) d || fr(a, b, c, fj(a, c), mq);
			else {
				if (oh(a, c, 3)) {
					var e = Qp(a, b, c);
					kn("ama_ap", function(b) {
						iq(a, 27, e, b)
					})
				}!d && oh(a, c, 1) && fr(a, b, c, fj(a, c), mq)
			} else d && (ej(a, {
				cfg: 1,
				cl: 1
			}), hj(a))
		},
		qr = function(a, b) {
			var c = a.o;
			if (!c) throw Error("ama::xhr:q");
			if (r.JSON) {
				var d = ad(lq(c).j[75]) ? nd() : od();
				d = Wm(d, "/getconfig/ama?");
				var e = {},
					f = (e.client = b, e.plah = a.l.location.hostname, e.url = a.l.location.href, e);
				Nl(f);
				e = bj(224, function(a) {
					if (!c) throw Error("ama::xhr:r");
					(a = a.responseText) && pr(c, b, a)
				});
				var g = bj(225, function(b) {
					var c = a.l,
						d = {
							xhr: 1
						};
					b && b.message ? d.message = b.message : d.reason = String(b);
					ej(c, d)
				});
				d = Df(f, d);
				or(d).then(e, g)
			} else ej(a.l, {
				xhr: 1,
				nojson: 1
			})
		};
	var rr = null,
		sr = function(a) {
			return 5 == a.google_pgb_reactive && !! a.google_reactive_ads_config
		},
		tr = function(a) {
			return x(a.google_reactive_sra_index)
		},
		Ar = function(a, b) {
			var c = b.o,
				d = b.B;
			d.google_reactive_plat = pn(c, d);
			var e = qn(a);
			e && (d.google_reactive_plaf = e);
			(e = rn(a)) && (d.google_reactive_fba = e);
			ur(a, d);
			vr(a, d);
			d.google_pgb_reactive = 5;
			e = dj("rasra::hdlr", function(b, e) {
				return wr(c, d.google_ad_client, a, b, e)
			});
			var f = V(c);
			rr = f && f.messageValidationEnabled ? Sj(c, "rsrai", e, new Nj(function() {
				return kn("rasra::hdxs", function(a) {
					return new Lj({
						data: function(b) {
							return y(b) ? new Lj(function(b) {
								var c, d;
								return z(b) && (c = b[kg.name]) && (d = a.configProcessorForAdFormat(c)) ? d.getSchema() : null
							}) : !1
						}
					})
				})
			}), B(xr, c), void 0, B(yr, c)) : Oj(c, "rsrai", e, Vi("rasra::xsh", B(xn, c, "rasra::xsf"), void 0));
			f.wasReactiveTagRequestSent = !0;
			zr(b)
		},
		zr = function(a) {
			var b = a.o,
				c = a.B;
			Y().j["191880502"] ? Oj(b, "apcnf", bj(353, function(a, e) {
				var d = c.google_ad_client;
				Qf(e.origin) && pr(b, d, a.data)
			}), Vi(353, B(xn, b, 353), void 0)) : r.setTimeout(bj(333, function() {
				return qr(a, c.google_ad_client)
			}), 0)
		},
		wr = function(a, b, c, d, e) {
			if (rr && Qf(e.origin) && (d = d.data) && y(d)) {
				rr();
				rr = null;
				var f = [];
				e = [];
				for (var g = 0; g < d.length; g++) if (d[g]) {
					var h = d[g];
					f.push(h);
					e.push(h[kg.name])
				}
				R("rasra::pm", {
					rt: e.join(","),
					c: b
				}, .1);
				kn("cr_lra", function(d) {
					Br(f, a, b, d, c)
				})
			}
		},
		yr = function(a, b) {
			R("invsch", {
				ctx: "rasra::noi",
				keys: b.join(",").substring(0, 500),
				u: a.location.href.substring(0, 500)
			}, .1)
		},
		xr = function(a, b, c, d, e) {
			R("rasra::sch", {
				c: e.data.substring(0, 500),
				u: a.location.href.substring(0, 500),
				name: b,
				value: c
			}, .1)
		},
		Br = function(a, b, c, d, e) {
			for (var f = [], g = V(b), h = {}, k = 0; k < a.length; h = {
				ja: h.ja,
				L: h.L
			}, k++) {
				h.L = a[k];
				var l = h.L[kg.name],
					p = h.L[og.name],
					q = h.L.piggyback;
				h.ja = d.configProcessorForAdFormat(l);
				if (l && h.ja && (q || p)) {
					g && (g.reactiveTypeEnabledByReactiveTag[l] = !0);
					h.L[mg.name] = q ? 2 : 5;
					if (q) delete h.L.piggyback, h.L[ng.name] = yn(l, e, h.L[ng.name]);
					else {
						delete h.L[og.name];
						q = {};
						var v = e.page_level_pubvars;
						z(v) && Ab(q, v);
						q.google_ad_unit_key = p;
						q.google_reactive_sra_index = k;
						h.L[ng.name] = q
					}
					f.push(l);
					aj("rasra::vapc", function(a) {
						return function() {
							return a.ja.verifyAndProcessConfig(b, a.L)
						}
					}(h))
				} else R("rasra::ivc", {
					af: l,
					ak: p,
					c: c
				}, .1)
			}
			R("rasra::pr", {
				rt: f.join(","),
				c: c
			}, .1)
		},
		ur = function(a, b) {
			var c = [],
				d = !1;
			G(ig, function(b, f) {
				var e;
				if (a.hasOwnProperty(f)) {
					var h = a[f];
					z(h) && h.google_ad_channel && (e = String(h.google_ad_channel))
				}
				f = ig[f] - 1;
				c[f] && "+" != c[f] || (c[f] = e ? e.replace(/,/g, "+") : "+", d = d || e)
			});
			d && (b.google_reactive_sra_channels = c.join(","))
		},
		vr = function(a, b) {
			var c = a.page_level_pubvars;
			!b.google_adtest && ("on" == a.google_adtest || c && "on" == c.google_adtest || hk()) && (b.google_adtest = "on")
		};
	var Cr = function(a) {
			this.v = [];
			this.l = a || window;
			this.j = 0;
			this.o = null;
			this.C = 0
		},
		Dr;
	m = Cr.prototype;
	m.xb = function(a, b) {
		0 != this.j || 0 != this.v.length || b && b != window ? this.Va(a, b) : (this.j = 2, this.A(new Er(a, window)))
	};
	m.Va = function(a, b) {
		this.v.push(new Er(a, b || this.l));
		Fr(this)
	};
	m.Lb = function(a) {
		this.j = 1;
		if (a) {
			var b = bj(188, A(this.ib, this, !0));
			this.o = this.l.setTimeout(b, a)
		}
	};
	m.ib = function(a) {
		a && ++this.C;
		1 == this.j && (null != this.o && (this.l.clearTimeout(this.o), this.o = null), this.j = 0);
		Fr(this)
	};
	m.Vb = function() {
		return !(!window || !Array)
	};
	m.yb = function() {
		return this.C
	};
	var Fr = function(a) {
			var b = bj(189, A(a.D, a));
			a.l.setTimeout(b, 0)
		};
	Cr.prototype.D = function() {
		if (0 == this.j && this.v.length) {
			var a = this.v.shift();
			this.j = 2;
			var b = bj(190, A(this.A, this, a));
			a.ca.setTimeout(b, 0);
			Fr(this)
		}
	};
	Cr.prototype.A = function(a) {
		this.j = 0;
		a.j()
	};
	var Gr = function(a) {
			try {
				return a.sz()
			} catch (b) {
				return !1
			}
		},
		Hr = function(a) {
			return !!a && ("object" === typeof a || "function" === typeof a) && Gr(a) && yf(a.nq) && yf(a.nqa) && yf(a.al) && yf(a.rl)
		};
	Cr.prototype.nq = Cr.prototype.xb;
	Cr.prototype.nqa = Cr.prototype.Va;
	Cr.prototype.al = Cr.prototype.Lb;
	Cr.prototype.rl = Cr.prototype.ib;
	Cr.prototype.sz = Cr.prototype.Vb;
	Cr.prototype.tc = Cr.prototype.yb;
	var Er = function(a, b) {
			this.j = a;
			this.ca = b
		};
	var Ir = (new Date).getTime(),
		Jr = Ir;
	var Kr = {
		"image-top": 0,
		"image-middle": 1,
		"image-side": 2,
		"text-only": 3,
		"in-article": 4
	};
	var Mr = function(a, b) {
			var c = {};
			c[void 0 === b ? "dtd" : b] = Lr((new Date).getTime(), Ir);
			return Df(c, a)
		},
		Lr = function(a, b, c) {
			a -= b;
			return a >= (void 0 === c ? 1E5 : c) ? "M" : 0 <= a ? a : "-M"
		};
	var Nr = function(a) {
			var b = this;
			this.j = a;
			a.google_iframe_oncopy || (a.google_iframe_oncopy = {
				handlers: {},
				upd: function(a, d) {
					var c = a;
					var f = /\brx=(\d+)/,
						g = f.exec(c);
					g && (c = c.replace(f, "rx=" + (+g[1] + 1 || 1)));
					a = zp(a, "dt");
					c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + Lr((new Date).getTime(), a));
					b.set(d, c);
					return c
				}
			});
			this.l = a.google_iframe_oncopy
		};
	Nr.prototype.set = function(a, b) {
		var c = this;
		this.l.handlers[a] = b;
		this.j.addEventListener && this.j.addEventListener("load", function() {
			var b = c.j.document.getElementById(a);
			try {
				var e = b.contentWindow.document;
				if (b.onload && e && (!e.body || !e.body.firstChild)) b.onload()
			} catch (f) {}
		}, !1)
	};
	$a("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
	var Rr = function() {
			var a = Or();
			this.l = a = void 0 === a ? r : a;
			this.A = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
			this.j = 2;
			this.o = [];
			this.v = !1;
			a: {
				a = Qc(!1, 50);
				b: {
					try {
						var b = r.parent;
						if (b && b != r) {
							var c = b;
							break b
						}
					} catch (g) {}
					c = null
				}
				c && a.unshift(c);
				a.unshift(r);
				var d;
				for (c = 0; c < a.length; ++c) try {
					var e = a[c],
						f = Pr(e);
					if (f) {
						this.j = Qr(f);
						if (2 != this.j) break a;
						!d && Pc(e) && (d = e)
					}
				} catch (g) {}
				this.l = d || this.l
			}
		},
		Tr = function(a) {
			if (2 != Sr(a)) {
				for (var b = 1 == Sr(a), c = 0; c < a.o.length; c++) try {
					a.o[c](b)
				} catch (d) {}
				a.o = []
			}
		},
		Ur = function(a) {
			var b = Pr(a.l);
			b && 2 == a.j && (a.j = Qr(b))
		},
		Sr = function(a) {
			Ur(a);
			return a.j
		},
		Wr = function(a) {
			var b = Vr;
			b.o.push(a);
			if (2 != b.j) Tr(b);
			else if (b.v || (F(b.l, "message", function(a) {
				var c = Pr(b.l);
				if (c && a.source == c && 2 == b.j) {
					switch (a.data) {
					case "3p_cookie_yes":
						b.j = 1;
						break;
					case "3p_cookie_no":
						b.j = 0
					}
					Tr(b)
				}
			}), b.v = !0), Pr(b.l)) Tr(b);
			else {
				a = b.l.document.createElement("iframe");
				a.src = b.A;
				a.name = "detect_3p_cookie";
				a.style.visibility = "hidden";
				a.style.height = "0";
				a.onload = function() {
					Ur(b);
					Tr(b)
				};
				try {
					b.l.document.body.appendChild(a)
				} catch (c) {}
			}
		},
		Xr = function(a, b) {
			try {
				return !!a.frames[b]
			} catch (c) {
				return !1
			}
		},
		Pr = function(a) {
			return a.frames[Jc("detect_3p_cookie")] || null
		},
		Qr = function(a) {
			return Xr(a, "3p_cookie_yes") ? 1 : Xr(a, "3p_cookie_no") ? 0 : 2
		};
	var Yr = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Zr = /\.(cn|com\.bi|do|sl)$/,
		$r = function(a) {
			return Yr.test(a) && !Zr.test(a)
		},
		Or = function() {
			return r
		},
		as = r,
		Vr, cs = function(a) {
			a = "https://" + ("adservice" + a + "/adsid/integrator.js");
			var b = ["domain=" + encodeURIComponent(r.location.hostname)];
			bs[3] >= Ha() && b.push("adsid=" + encodeURIComponent(bs[1]));
			return a + "?" + b.join("&")
		},
		bs, ds, es = function() {
			as = Or();
			bs = as.googleToken = as.googleToken || {};
			var a = Ha();
			bs[1] && bs[3] > a && 0 < bs[2] || (bs[1] = "", bs[2] = -1, bs[3] = -1, bs[4] = "", bs[6] = "");
			ds = as.googleIMState = as.googleIMState || {};
			$r(ds[1]) || (ds[1] = ".google.com");
			y(ds[5]) || (ds[5] = []);
			"boolean" == typeof ds[6] || (ds[6] = !1);
			y(ds[7]) || (ds[7] = []);
			x(ds[8]) || (ds[8] = 0)
		},
		fs = function(a) {
			$r(a) && (ds[1] = a)
		},
		gs = {
			Ya: function() {
				return 0 < ds[8]
			},
			Nb: function() {
				ds[8]++
			},
			Ob: function() {
				0 < ds[8] && ds[8]--
			},
			Pb: function() {
				ds[8] = 0
			},
			wd: function() {
				return !1
			},
			Xa: function() {
				return ds[5]
			},
			Qa: function(a) {
				try {
					a()
				} catch (b) {
					r.setTimeout(function() {
						throw b;
					}, 0)
				}
			},
			Da: function() {
				if (!gs.Ya()) {
					var a = r.document,
						b = function(b) {
							var c = cs(b);
							$m(a, c, "preload", "script");
							b = a.createElement("script");
							b.type = "text/javascript";
							b.onerror = function() {
								return r.processGoogleToken({}, 2)
							};
							c = Ic(c);
							b.src = Ib(c);
							try {
								(a.head || a.body || a.documentElement).appendChild(b), gs.Nb()
							} catch (g) {}
						},
						c = ds[1];
					b(c);
					".google.com" != c && b(".google.com");
					b = {};
					var d = (b.newToken = "FBT", b);
					r.setTimeout(function() {
						return r.processGoogleToken(d, 1)
					}, 1E3)
				}
			}
		},
		hs = function(a) {
			es();
			var b = as.googleToken[5] || 0;
			a && (0 != b || bs[3] >= Ha() ? gs.Qa(a) : (gs.Xa().push(a), gs.Da()));
			bs[3] >= Ha() && bs[2] >= Ha() || gs.Da()
		},
		is = function(a) {
			r.processGoogleToken = r.processGoogleToken ||
			function(a, c) {
				var b = a;
				b = void 0 === b ? {} : b;
				c = void 0 === c ? 0 : c;
				a = b.newToken || "";
				var e = parseInt(b.freshLifetimeSecs || "", 10) || 3600,
					f = parseInt(b.validLifetimeSecs || "", 10) || 86400,
					g = b["1p_jar"] || "";
				b = b.pucrd || "";
				es();
				1 == c ? gs.Pb() : gs.Ob();
				var h = as.googleToken = as.googleToken || {},
					k = 0 == c && a && w(a) && 0 < e && 0 < f && w(g),
					l = !(bs[3] >= Ha()) && 0 != c;
				if (k || l) k = Ha(), e = k + 1E3 * e, f = k + 1E3 * f, 1E-5 > Math.random() && wf("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, void 0), h[5] = c, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = b, es();
				if (a || !gs.Ya()) {
					c = gs.Xa();
					for (a = 0; a < c.length; a++) gs.Qa(c[a]);
					c.length = 0
				}
			};
			hs(a)
		},
		js = function(a) {
			Vr = Vr || new Rr;
			Wr(function(b) {
				b && a()
			})
		},
		ks = function(a) {
			a = Qe(a || za);
			js(a);
			is(a)
		};
	Jc("script");
	var ls = function(a) {
			return Hf(a) ? 1 == Gf(a) : !Gf(a)
		},
		ms = function(a) {
			var b = pe(document, "IFRAME");
			G(a, function(a, d) {
				null != a && b.setAttribute(d, a)
			});
			return b
		},
		ns = function(a) {
			var b = ["<iframe"];
			G(a, function(a, d) {
				null != a && b.push(" " + d + '="' + $a(a) + '"')
			});
			b.push("></iframe>");
			return b.join("")
		},
		os = function(a) {
			return Wm(nd(), ["/pagead/html/", ed(), "/r20170110/zrt_lookup.html#", a ? encodeURIComponent(a) : ""].join(""))
		},
		ps = function(a, b, c, d) {
			a.width = "" + b + "";
			a.height = "" + c + "";
			a.frameborder = "0";
			d && (a.src = "" + d + "");
			a.marginwidth = "0";
			a.marginheight = "0";
			a.vspace = "0";
			a.hspace = "0";
			a.allowtransparency = "true";
			a.scrolling = "no";
			a.allowfullscreen = "true"
		};
	var qs = function(a) {
			var b = H();
			if (b.google_pub_config) return b.google_pub_config[a];
			b.google_pub_config = {};
			var c = null;
			try {
				(c = b.localStorage.getItem("google_pub_config")) && (b.google_pub_config[a] = JSON.parse(c))
			} catch (d) {}
			return b.google_pub_config[a]
		},
		rs = function(a, b) {
			a = qs(a);
			if (!a || !a.sraConfigs) return !1;
			a = a.sraConfigs["2"];
			if (!a) return !1;
			a = a.whitelist;
			if (!a) return !0;
			var c = +b.google_ad_unit_key;
			b = Gf(b);
			if (isNaN(c) || isNaN(b)) return !1;
			b = c.toString(36) + "," + b.toString(36);
			return !!a[b]
		},
		ss = function(a) {
			if (a = qs(a)) a.Sb = !0
		},
		ts = function(a, b) {
			if ((a = qs(a)) && a.sraConfigs) {
				a = a.sraConfigs;
				if (b) return a[b] && a[b].sraEnabled ? "t" : "f";
				for (var c in a) if (a[c].sraEnabled) return "t";
				return "f"
			}
			return "u"
		},
		vs = function() {
			var a = P(Y(), 48);
			return !!a && "453848292" == a || us()
		},
		us = function() {
			return "20040051" == P(Y(), 69)
		},
		ws = function(a, b) {
			return P(Y(), 69) ? !! a.google_reactive_ads_config && (b || us()) : P(Y(), 48) ? ls(a) && (b || vs()) : !1
		},
		xs = function(a) {
			var b = Pp();
			try {
				return Hf(a) && !Nf(a) && b && (Bj || Cj) && "20" === a.google_iframing ? ws(a, !1) : !1
			} catch (c) {}
			return !1
		};
	var Es = function(a, b) {
			var c = a.B,
				d = c.google_reactive_ads_config;
			nb(Zf(c), function(a) {
				M(b, a)
			});
			nb($f(c), function(a) {
				M(b, a)
			});
			var e = lq(a.l);
			if (!jd && id) {
				var f = ["575144606", "575144607"];
				var g = N(b, f, Z(e, 19), 5);
				g === f[1] ? kd = !0 : g === f[0] && (kd = jd)
			}
			N(b, ["551"], 0, 108);
			P(b, 108) && (kd = jd);
			f = ["42631002", "42631003"];
			N(b, f, Z(e, 22), 17);
			3 === Fp(a.j.document) && N(b, ["33895332", "33895333"], Z(e, 23), 19);
			f = ["26835105", "26835106"];
			N(b, f, Z(e, 24), 41);
			f = ["33895410", "33895411"];
			N(b, f, Z(e, 26), 55);
			N(b, ["111541704", "111541703"], Z(e, 47), 90);
			ys(b, e, a.j);
			a.o && (zs(b, !! d, e), As(b, a.o, e), g = V(a.o), f = ["27415010", "27415011"], g && "27415011" == N(b, f, Z(e, 27), 62) && (g.messageValidationEnabled = !0), N(b, ["41667000", "41667001"], Z(e, 89), 111));
			N(b, ["33895335", "33895334"], Z(e, 42), 59);
			if (f = Jc("")) switch (f) {
			case "21060857":
			case "21060858":
			case "21060859":
			case "21060860":
				if (!a.j.IntersectionObserver) break;
				M(b, f, 97);
				break;
			case "21060976":
			case "21060977":
				M(b, f, 107);
				break;
			default:
				M(b, f)
			}
			f = Gl;
			f = [f.R, f.T];
			N(b, f, Z(e, 28), 67);
			f = Il;
			f = [f.R, f.T];
			N(b, f, Z(e, 59), 99);
			f = Hl;
			f = [f.Fa, f.R];
			N(b, f, Z(e, 29), 87);
			N(b, ["188690901", "188690902", "188690903", "188690904"], Z(e, 67), 103);
			Bs(b, e);
			a.j.IntersectionObserver && N(b, ["21060844", "21060845", "21060846", "21060847"], Z(e, 57), 97);
			a.j.IntersectionObserver && N(b, "21061185 21061186 21061187 21061188 21061189 21061190".split(" "), Z(e, 91), 97);
			f = Kl;
			f = [f.T, f.R];
			N(b, f, Z(e, 65), 101);
			N(b, ["21061083", "21061084", "21061085", "21061086"], Z(e, 74), 104);
			N(b, ["21061215", "21061216", "21061217", "21061218"], Z(e, 86), 110);
			N(b, ["21061227", "21061228"], Z(e, 87), 110);
			if (a = Np(a.j) || hd) {
				var h = "t" == ts(hg(c.google_ad_client));
				if (!d || !d.inserts) {
					var k = Cs(b, d, h, e);
					c = !1;
					k || (c = !Ds(b, e));
					(k || c) && N(b, ["20040060", "20040061", "20040062"], Z(e, 39), 77);
					c && N(b, ["20040065", "20040066"], Z(e, 52), 80)
				}
			}
			a && h && !k ? N(b, ["453848290", "453848291", "453848292"], Z(e, 40), 48) : (f = ["139802572", "139802573"], N(b, f, Z(e, 32), 86))
		},
		Cs = function(a, b, c, d) {
			return c && b ? (a = N(a, ["20040050", "20040051"], Z(d, 37), 69), "20040051" == a) : !1
		},
		Ds = function(a, b) {
			return 1 == Z(b, 81) ? (M(a, "22307207", 109), !0) : "22307207" == N(a, ["22307206", "22307207"], Z(b, 81), 109)
		},
		As = function(a, b, c) {
			if ((c = N(a, "90091310 90091311 90091312 90091313 90091314 90091315".split(" "), Z(c, 41))) && aj(242, B(tn, b))) switch (c) {
			case "90091310":
				M(a, "90091300", 70);
				break;
			case "90091311":
				M(a, "90091301", 70);
				break;
			case "90091312":
				M(a, "90091302", 70);
				break;
			case "90091314":
				M(a, "90091304", 70);
				break;
			case "90091315":
				M(a, "90091305", 70);
				break;
			case "90091313":
				M(a, "90091303", 70)
			}
		},
		zs = function(a, b, c) {
			c = N(a, ["828064250", "828064251"], Z(c, 43), 75);
			b && ("828064250" === c ? M(a, "828064252") : "828064251" === c && M(a, "828064253"))
		},
		ys = function(a, b, c) {
			c = 2 === (c.top == c ? 0 : Pc(c.top) ? 1 : 2);
			var d = sg && be(601);
			d = Vd && 0 <= hb(Lp, 9) || d;
			b = c ? N(a, ["389613004", "389613005"], Z(b, 48), 82) : N(a, ["389613000", "389613001"], Z(b, 49), 82);
			var e;
			"389613004" == b ? e = "389613006" : "389613005" == b ? e = "389613007" : "389613000" == b ? e = "389613002" : "389613001" == b && (e = "389613003");
			d && e && M(a, e, 83)
		},
		Bs = function(a, b) {
			var c = !Sp() && !Rp(),
				d = c && oc() && sc(46),
				e = oc() && sc(58),
				f = c && mc() && sc(33),
				g = Sp() && !E("Firefox");
			if (d || f || g) d = ["21060104", "21060105"], f = Z(b, 34), !c && e && (d = ["21061010", "21061011"], f = Z(b, 78)), N(a, d, f, 88)
		};
	var Fs = function(a, b) {
			b = void 0 === b ? r : b;
			a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
			return new ge(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
		};
	var Gs = function(a, b) {
			try {
				if (a.document && !a.document.body) var c = new he(-1, -1);
				else {
					if (void 0 === b ? 0 : b) var d = (new he(a.innerWidth, a.innerHeight)).round();
					else {
						var e = (a || window).document,
							f = "CSS1Compat" == e.compatMode ? e.documentElement : e.body;
						d = (new he(f.clientWidth, f.clientHeight)).round()
					}
					c = d
				}
				return c
			} catch (g) {
				return new he(-12245933, -12245933)
			}
		};
	var Hs = function(a) {
			Gg(this, a, null)
		};
	C(Hs, K);
	var Is = function(a) {
			Gg(this, a, null)
		};
	C(Is, K);
	var Js = function(a) {
			Gg(this, a, null)
		};
	C(Js, K);
	var Ms = function() {
			var a = Ks,
				b = Ls;
			if (!(window && Math.random && navigator)) return -1;
			if (window.__google_ad_urls) {
				var c = window.__google_ad_urls;
				try {
					if (c && c.getOseId()) return c.getOseId()
				} catch (e) {}
			}
			if (!window.__google_ad_urls_id) {
				c = window.google_enable_ose;
				if (!0 === c) var d = 2;
				else!1 !== c && (d = Tc([0], a), null == d && ((d = Tc([2], b)) || (d = 3)));
				if (!d) return 0;
				window.__google_ad_urls_id = d
			}
			return window.__google_ad_urls_id
		};
	var Ns = /Trident|MSIE/,
		Os = /rv:11|Trident\/[78]/,
		Qs = function(a, b) {
			Ps() ? F(a, "readystatechange", function(c) {
				a && "complete" == a.readyState && b(c)
			}) : F(a, "load", b)
		},
		Rs = function() {
			var a = (H() || r).google_osd_amcb;
			return Ea(a) ? a : null
		},
		Ps = function() {
			var a = r.navigator;
			return (a = a && a.userAgent) ? Ns.test(a) && !Os.test(a) : !1
		};
	var Ss = function(a, b) {
			this.v = a;
			this.l = b && b.l ? b.l : [];
			this.o = b && b.o ? b.o : 0;
			this.A = b ? b.A : "";
			this.j = b && b.j ? b.j : [];
			this.C = !1;
			if (b) {
				for (a = 0; a < this.l.length; ++a) this.l[a].push("true");
				for (a = 0; a < this.j.length; ++a) this.j[a].v = !0
			}
		},
		Ts = function(a, b) {
			var c = a.l,
				d = a.v.google_ad_request_done;
			d && (d = d.orig_callback || d, a.v.google_ad_request_done = function(a) {
				if (a && 0 < a.length) {
					var e = 1 < a.length ? a[1].url : null,
						g = a[0].log_info || null,
						h = a[0].activeview_url || null,
						k = a[0].activeview_js_enabled || null,
						l = a[0].activeview_js_immediate_enabled || null,
						p = a[0].activeview_js_tos_enabled || null,
						q = a[0].activeview_cid || null,
						v = a[0].activeview_metadata || null,
						u = a[0].image_url || "",
						t = a[0].type || null;
					c.push([b, cb(a[0].url), e, g, null, h, k, l, p, q, v, cb(u), t])
				}
				d(a)
			}, a.v.google_ad_request_done.orig_callback = d)
		},
		Vs = function(a) {
			var b = a.C ? H() : r;
			b && b.document || R("osdgnd", {
				win: !(!window || !window.document),
				global: !(!r || !r.document)
			});
			a = Us;
			b = b || r;
			b.google_osd_loaded ? a = !1 : (Rc(b.document, a), a = b.google_osd_loaded = !0);
			a && Cf()
		},
		Xs = function(a, b, c, d) {
			var e = a.l,
				f = d || 0,
				g = b.document;
			if (0 < e.length) for (var h = g.getElementsByTagName("a"), k = 0; k < h.length; k++) for (var l = 0; l < e.length; l++) if (0 <= h[k].href.indexOf(e[l][1])) {
				var p = h[k].parentNode;
				if (e[l][2]) for (var q = p, v = 0; 4 > v; v++) {
					if (0 <= q.innerHTML.indexOf(e[l][2])) {
						p = q;
						break
					}
					q = q.parentNode
				}
				Ws(e[l], p, f, c);
				e.splice(l, 1);
				break
			}
			if (0 < e.length) for (h = g.getElementsByTagName("embed"), k = 0; k < h.length; k++) for (l = 0; l < e.length; l++) if (p = e[l][11], "flash" == e[l][12] && p && (q = h[k], q.src == p)) {
				p = q;
				0 == p.getBoundingClientRect().height && p.parentElement && "OBJECT" == p.parentElement.tagName && (p = p.parentElement);
				Ws(e[l], p, f, c);
				e.splice(l, 1);
				break
			}
			if (0 < e.length) for (g = g.getElementsByTagName("param"), h = 0; h < g.length; h++) for (k = 0; k < e.length; k++) if (p = e[k][11], "flash" == e[k][12] && p && (l = g[h], "movie" == l.name && l.value == p)) {
				p = void 0;
				l.parentNode && "OBJECT" == l.parentNode.tagName && (p = l.parentNode);
				if (!p) break;
				Ws(e[k], p, f, c);
				e.splice(k, 1);
				break
			}
			if (0 < e.length && b != lj()) try {
				Xs(a, b.parent, c, d)
			} catch (u) {}
			for (a = 0; a < e.length; ++a) b = e[a], "true" == b[6] && Ys("osd2", b[3]), "true" == b[7] && Ys("osdim", b[3])
		},
		Ws = function(a, b, c, d) {
			d(b, a[0], c, !0, a[3], void 0, a[5], "true" == a[6], "true" == a[7], "true" == a[13], "true" == a[8], a[9], a[10])
		},
		Ys = function(a, b) {
			a && b && wf("//pagead2.googlesyndication.com/activeview?id=" + a + "&r=j" + ("&avi=" + b), void 0)
		};
	m = Ss.prototype;
	m.getNewBlocks = function(a, b) {
		b && Xs(this, this.v, a, 1);
		for (var c = this.j.length, d = 0; d < c; d++) {
			var e = this.j[d];
			!e.o && e.j && (a(e.j, e.A, e.D, e.l, "", void 0, "", !1, !1, e.v, !1, "", "", e.C), e.o = !0)
		}
		b && ((H() || r).google_osd_amcb = a)
	};
	m.setupOse = function(a) {
		if (this.getOseId()) return this.getOseId();
		var b = Ms();
		if (!b) return 0;
		this.o = b;
		this.A = String(a || 0);
		return this.getOseId()
	};
	m.getOseId = function() {
		return window && Math.random && navigator ? this.o : -1
	};
	m.getCorrelator = function() {
		return this.A
	};
	m.numBlocks = function() {
		return this.l.length + this.j.length
	};
	m.registerAdBlock = function(a, b, c, d, e, f, g) {
		g = void 0 === g ?
		function() {
			return null
		} : g;
		if ((e = Rs()) && d) e(d, a, b, !0, "", void 0, "", !1, !1, !1, !1, "", "", g);
		else {
			if ("js" == c) Ts(this, a);
			else {
				var h = new Zs(a, b, d, g);
				this.j.push(h);
				d && Qs(d, bj(192, function() {
					h.l = !0
				}))
			}
			Us || (wf("//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a), void 0), Us = xi(new Ch, kd ? "https:" : "http:", pd(!1), "/pagead/osd.js"));
			Vs(this)
		}
	};
	m.unloadAdBlock = function(a, b) {
		xa(window.Goog_Osd_UnloadAdBlock) && window.Goog_Osd_UnloadAdBlock(a, void 0 === b ? !1 : b)
	};
	m.setLoadOsdJsOnPubWindow = function(a) {
		this.C = a
	};
	var $s = function() {
			var a = H(),
				b = a.__google_ad_urls;
			if (!b) return a.__google_ad_urls = new Ss(a);
			try {
				if (0 <= b.getOseId()) return b
			} catch (c) {}
			try {
				return a.__google_ad_urls = new Ss(a, b)
			} catch (c) {
				return a.__google_ad_urls = new Ss(a)
			}
		},
		Us = "",
		Ls = 0,
		Ks = 0,
		Zs = function(a, b, c, d) {
			d = void 0 === d ? za : d;
			this.A = a;
			this.D = b;
			this.j = c;
			this.v = this.o = this.l = !1;
			this.C = d
		};
	ya("Goog_AdSense_getAdAdapterInstance", $s, void 0);
	ya("Goog_AdSense_OsdAdapter", Ss, void 0);
	var at = function() {};
	m = at.prototype;
	m.getNewBlocks = function() {};
	m.setupOse = function() {};
	m.getOseId = function() {
		return -1
	};
	m.getCorrelator = function() {
		return ""
	};
	m.numBlocks = function() {
		return 0
	};
	m.registerAdBlock = function() {};
	m.unloadAdBlock = function() {};
	m.setLoadOsdJsOnPubWindow = function() {};
	var ft = function(a, b, c) {
			if (!a.o) throw Error("reactive tag in cross-domain iframe");
			var d = a.o;
			a = bt(d, a.B, b, c);
			var e = bj(228, function(a) {
				return ct(b, c, d, a)
			});
			e = dt(d, e);
			var f = Vi(229, et, void 0);
			or(a).then(e, f);
			V(d).wasReactiveTagRequestSent = !0
		},
		dt = function(a, b) {
			return function(c) {
				a.document.body ? b(c) : (R("racr_no_body", {}), F(a.document, "DOMContentLoaded", B(b, c)))
			}
		},
		bt = function(a, b, c, d) {
			var e = Y(),
				f = {};
			f.client = d;
			f.plah = a.location.hostname;
			f.plat = pn(a, b);
			f.plaf = qn(c);
			f.fba = rn(c);
			a: {
				try {
					var g = Gf(b) + a.document.querySelectorAll("ins.adsbygoogle:not([data-adsbygoogle-status=done])").length;
					break a
				} catch (h) {}
				g = -1
			}
			c = (f.plas = g, f.loeid = Ll(e).join(), f.url = a.location.href, f);
			d = qj();
			e = U(d, 8, {});
			b = b.google_ad_section;
			e[b] && (c.prev_fmts = e[b]);
			d = U(d, 9, {});
			d[b] && (c.prev_slotnames = d[b].toLowerCase());
			Nl(c);
			a = ad(lq(a).j[75]) ? nd() : od();
			return Df(c, Wm(a, "/getconfig/pla?"))
		},
		ct = function(a, b, c, d) {
			if (r.JSON) {
				var e = r.JSON.parse(d.responseText);
				if (!z(e) || !y(e.pageLevelAds)) throw Error("malformed response for reactive config request");
				var f = V(c);
				gt(e, a);
				nb(e.pageLevelAds, function(b) {
					var d = b[kg.name];
					d && kn("cr_lra", function(e) {
						if (f.messageValidationEnabled) {
							var g = e.configProcessorForAdFormat(d);
							if (!g) return;
							try {
								b = Rj(b, g.getSchema(), function(a) {
									R("invsch", {
										ctx: "racr::noi",
										keys: a.join(",").substring(0, 500),
										u: c.location.href.substring(0, 500)
									})
								})
							} catch (p) {
								cj(230, p);
								return
							}
						}
						ht(b, a, c, e)
					})
				});
				aj(231, function() {
					return pr(c, b, e.amaConfig)
				})
			}
		},
		ht = function(a, b, c, d) {
			var e = a[kg.name];
			d = d.configProcessorForAdFormat(e);
			e && d && (V(c).reactiveTypeEnabledByReactiveTag[e] = !0, a[ng.name] = yn(e, b, a[ng.name]), a[mg.name] = 2, a = A(d.verifyAndProcessConfig, d, c, a), aj(232, a))
		},
		gt = function(a, b) {
			if (a = a.selectedInAdSensePackages) {
				var c = b.page_level_pubvars;
				z(c) ? (b = c.google_eids, y(b) ? b.push(a) : c.google_eids = [a]) : (c = {}, b.page_level_pubvars = (c.google_eids = [a], c))
			}
		},
		et = function(a) {
			var b = {};
			a && a.message ? b.message = a.message : b.reason = String(a);
			R("racr_xhr_error", b)
		};
	var it = function(a) {
			zn.call(this, a)
		};
	ka(it, zn);
	it.prototype.W = function() {
		return null
	};
	it.prototype.$ = function(a) {
		a["ifsl-load-rec"] = this.l
	};
	it.prototype.Ta = function() {
		return !0
	};
	it.prototype.l = function(a, b) {
		if (!b.isHandled_ && (b.isHandled_ = !0, b = (b = V(this.j).stateForType[32]) ? b : null)) {
			var c = tl(a);
			a = c.ifsl_url;
			var d = c.ifsl_purl,
				e = c.ifsl_t,
				f = c.ifsl_s,
				g = c.ifsl_img,
				h = c.ifsl_qqid,
				k = c.ifsl_gqid;
			c = c.ifsl_pch;
			a && d && e && b.tryAddRecommendation({
				url: a,
				pingUrl: d,
				title: e,
				imageUrl: g,
				snippet: f,
				header: c
			});
			h && k && b.updateReporterParams(h, k)
		}
	};
	var jt = {
		client: "google_ad_client",
		format: "google_ad_format",
		slotname: "google_ad_slot",
		output: "google_ad_output",
		ad_type: "google_ad_type"
	},
		kt = function(a) {
			Uc(jt, function(b, c) {
				try {
					null != r[b] && (a[c] = r[b])
				} catch (d) {}
			})
		},
		lt = function(a) {
			a.shv = ed()
		};
	Ui.v = !hd;
	var nt = function(a, b, c, d, e) {
			var f = {};
			f.context = a;
			f.msg = b.substring(0, 512);
			c && (f.file = c);
			0 < d && (f.line = d.toString());
			f.sw = 1;
			mt(f, e);
			return !0
		},
		mt = function(a, b, c) {
			try {
				if (Math.random() < (b || .01)) {
					var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=jserror" + ot(a);
					d = d.substring(0, 2E3);
					var e = r.fetch(d, {
						mode: "no-cors"
					});
					c && e.then(c, c)
				}
			} catch (f) {}
		},
		ot = function(a) {
			var b = "";
			Object.getOwnPropertyNames(a).forEach(function(c) {
				var d = a[c];
				if (0 === d || d) b += "&" + c + "=" + encodeURIComponent(String(d))
			});
			return b
		};
	var pt = "adsafe channel client description_url durl google_ad_channel h h_ch iu kfa page_slots prev_ius prev_slotnames slotname tfcd video_url_to_fetch w".split(" "),
		qt = function(a) {
			var b = !0;
			try {
				var c = a()
			} catch (g) {
				try {
					var d = Si(g);
					a = "";
					g.fileName && (a = g.fileName);
					var e = -1;
					g.lineNumber && (e = g.lineNumber);
					b = nt("cache_key.js", d, a, e)
				} catch (h) {
					try {
						var f = Si(h);
						d = "";
						h.fileName && (d = h.fileName);
						a = -1;
						h.lineNumber && (a = h.lineNumber);
						nt("pAR", f, d, a, void 0)
					} catch (k) {
						mt({
							context: "mRE",
							msg: k.toString() + "\n" + (k.stack || ""),
							sw: 1
						}, void 0, void 0)
					}
				}
				if (!b) throw g;
			} finally {}
			return c ? String(c) : ""
		},
		rt = function(a) {
			a = a.url;
			return rh((w(a) ? a : "").match(qh)[3] || null) || ""
		},
		st = function(a, b) {
			nb(pt, function(c) {
				var d = a[c];
				if (d || 0 === d || !1 === d)"boolean" == typeof d && (d = Number(d)), b(c, d)
			})
		},
		tt = function(a) {
			return qt(function() {
				var b = {};
				st(a, function(a, c) {
					return b[a] = c
				});
				b.domain = rt(a);
				var c = th(b);
				return String(Xc(c))
			})
		};
	var vt = function(a, b, c, d) {
			bl.call(this);
			this.j = a;
			this.A = b;
			this.o = c;
			this.F = 0;
			this.C = d ? 0 : .001;
			this.j.IntersectionObserver ? (this.l = new this.j.IntersectionObserver(Vi("tig::npio", this.H, this), {
				threshold: [this.C]
			}), this.l.observe(this.o || this.A)) : this.o && (this.D = ut(this), this.I = Re(this.G, 63, this), this.v = dj("tig::rashd", function() {
				Yf(this.I)
			}, this), F(this.j, "scroll", this.v, Se))
		};
	ka(vt, bl);
	var ut = function(a) {
			var b = a.o.getBoundingClientRect(),
				c = 0 > b.top + b.height;
			return !(b.top > a.j.innerHeight) && !c
		};
	vt.prototype.G = function() {
		var a = ut(this);
		a && !this.D && wt(this, {
			rr: "vis-bcr"
		});
		this.D = a
	};
	vt.prototype.H = function(a) {
		0 < a.length && a[0].intersectionRatio > this.C && wt(this, {
			rr: "vis-io"
		})
	};
	var wt = function(a, b) {
			Tj(a.A.contentWindow, "ig", b, "*", 2);
			10 <= ++a.F && (a.l && a.l.disconnect && a.l.disconnect(), a.v && Ve(a.j, "scroll", a.v, Se))
		};
	var xt = function(a, b) {
			y(b) || (b = [b]);
			b = pb(b, function(a) {
				return w(a) ? a : a.hb + " " + a.duration + "s " + a.timing + " " + a.sd + "s"
			});
			we(a, "transition", b.join(","))
		},
		yt = Pe(function() {
			if (wd) return be("10.0");
			var a = pe(document, "DIV"),
				b = zd ? "-webkit" : yd ? "-moz" : wd ? "-ms" : vd ? "-o" : null,
				c = {
					transition: "opacity 1s linear"
				};
			b && (c[b + "-transition"] = "opacity 1s linear");
			Dc(a, Cc("div", {
				style: c
			}));
			a = a.firstChild;
			b = a.style[ib("transition")];
			return "" != ("undefined" !== typeof b ? b : a.style[ve(a, "transition")] || "")
		});
	var zt = function(a, b) {
			this.l = ["", ""];
			this.j = a || "";
			this.o = b || ""
		},
		At = function(a, b, c) {
			0 > a.l[b].indexOf(c) && (a.l[b] += c)
		},
		Bt = function(a, b) {
			0 <= a.j.indexOf(b) || (a.j = b + a.j)
		},
		Ct = function(a, b) {
			0 > a.o.indexOf(b) && (a.o = b + a.o)
		};
	zt.prototype.toString = function() {
		return [this.l[0], this.l[1], this.j, this.o].join("|")
	};
	var Et = function(a) {
			var b = Dt(a, "", null, 0);
			if (null === b) return "XS";
			b = b ? "C" : "N";
			a = a.j;
			return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
		},
		Dt = function(a, b, c, d) {
			return "" != a.o || b ? null : "" == a.j.replace(Ft, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
		},
		Kt = function(a, b, c, d, e, f) {
			this.J = b;
			this.G = a;
			a = this.G.ownerDocument;
			this.U = a.defaultView || a.parentWindow;
			this.v = new Gt(this.G);
			this.A = f;
			this.$ = Ht(this.v, c.kb);
			this.D = this.A ? this.v.boundingClientRect ? this.v.boundingClientRect.right - this.v.boundingClientRect.left : null : d;
			this.C = this.A ? this.v.boundingClientRect ? this.v.boundingClientRect.bottom - this.v.boundingClientRect.top : null : e;
			d = It(c.width);
			this.o = this.D == d ? null : d;
			d = It(c.height);
			this.l = this.C == d ? null : d;
			this.M = this.A ? It(c.opacity) : null;
			this.V = c.check;
			this.F = "animate" == c.kb && !Jt(this.v) && yt();
			this.aa = !! c.ub;
			this.j = new zt;
			Jt(this.v) && Bt(this.j, "r");
			d = this.v;
			d.j && d.l >= d.o && Bt(this.j, "b");
			this.I = this.H = null;
			this.W = !! c.Qb
		},
		Nt = function(a) {
			if (a.A && !a.$ || null == a.o && null == a.l && null == a.M && a.A) return a.j;
			var b = a.A;
			a.A = !1;
			Lt(a);
			a.A = b;
			if (!b || null != a.V && !Dt(a.j, a.V, a.o, a.l)) return a.j;
			0 <= a.j.j.indexOf("n") && (a.D = null, a.C = null);
			if (null == a.D && null !== a.o || null == a.C && null !== a.l) a.F = !1;
			(0 == a.o || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.o = 0, a.l = 0);
			b = a.j;
			b.l[0] = "";
			b.l[1] = "";
			b.j = "";
			b.o = "";
			Mt(a);
			return Lt(a)
		},
		Mt = function(a) {
			var b = a.G;
			b.style.overflow = a.aa ? "visible" : "hidden";
			a.F && (a.I ? (xt(b, Ot), xt(a.I, Ot)) : xt(b, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
			null !== a.M && (b.style.opacity = a.M);
			var c = null != a.D && null != a.o && (a.W || a.o > a.D) ? a.o : null,
				d = null != a.C && null != a.l && (a.W || a.l > a.C) ? a.l : null;
			if (a.J) for (var e = a.J.length, f = 0; f < e; f++) Pt(a.J[f], c, d);
			var g = a.o,
				h = a.l,
				k = a.I;
			c = function() {
				Pt(b, g, h);
				if (k) {
					var a = function(a) {
							for (var b = 0; b < a.length; b++) we(k, a[b], "0px")
						};
					a(Qt);
					a(Rt)
				}
			};
			a.F ? r.setTimeout(c, 1E3) : c()
		},
		St = function(a, b) {
			var c = !1;
			"none" == b.display && (Bt(a.j, "n"), a.A && (c = !0));
			"hidden" != b.visibility && "collapse" != b.visibility || Bt(a.j, "v");
			"hidden" == b.overflow && Bt(a.j, "o");
			"absolute" == b.position ? (Bt(a.j, "a"), c = !0) : "fixed" == b.position && (Bt(a.j, "f"), c = !0);
			return c
		},
		Lt = function(a) {
			var b = a.U;
			a.H = function() {};
			Tt(a, a.G, b);
			var c = a.G.parentElement;
			if (!c) return a.j;
			for (var d = !0; c;) {
				try {
					var e = /^head|html$/i.test(c.nodeName) ? null : Sc(c, b)
				} catch (g) {
					Ct(a.j, "c")
				}
				var f = Ut(a, b, c, e);
				if (d && !f && Vt(e)) {
					Bt(a.j, "l");
					a.I = c;
					break
				}
				d = d && f;
				if (e && St(a, e)) break;
				c = c.parentElement;
				if (!c) try {
					if (c = b.frameElement, b = b.parent, !Pc(b)) {
						Bt(a.j, "c");
						break
					}
				} catch (g) {
					Bt(a.j, "c");
					break
				}
			}
			a.F && a.A && Wt(a);
			return a.j
		},
		Xt = function(a, b, c) {
			if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
			if (1 == b.nodeType) {
				if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
				var d = null;
				try {
					d = Sc(b, c)
				} catch (e) {}
				if (d) {
					if ("none" == d.display || "fixed" == d.position) return 0;
					if ("absolute" == d.position) {
						if (!a.v.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
						c = null;
						try {
							c = b.getBoundingClientRect()
						} catch (e) {
							return 0
						}
						return (c.right > a.v.boundingClientRect.left ? 2 : 0) | (c.bottom > a.v.boundingClientRect.top ? 4 : 0)
					}
				}
				return 1
			}
			return 0
		},
		Tt = function(a, b, c) {
			var d = 0;
			if (!b || !b.parentElement) return !0;
			for (var e = !1, f = 0, g = b.parentElement.childNodes, h = 0; h < g.length; h++) {
				var k = g[h];
				k == b ? e = !0 : (k = Xt(a, k, c), d |= k, e && (f |= k))
			}
			f & 1 && (d & 2 && At(a.j, 0, "o"), d & 4 && At(a.j, 1, "o"));
			return !(d & 1)
		},
		Yt = function(a, b, c, d, e, f, g, h) {
			if (null != h) {
				if ("string" == typeof f) {
					if ("100%" == f || !f) return;
					f = $c(f);
					null == f && (Ct(a.j, "n"), At(a.j, b, "d"))
				}
				if (null != f) if (c) {
					if (a.A) if (a.F) {
						var k = Math.max(f + h - g, 0),
							l = a.H;
						a.H = function(a, c) {
							a == b && d.setAttribute(e, k - c);
							l(a, c)
						}
					} else d.setAttribute(e, h)
				} else At(a.j, b, "d")
			}
		},
		au = function(a, b, c, d, e, f, g, h, k, l) {
			if (null != l) {
				f = f && f[g];
				"string" != typeof f || ("m" == c ? Zt(f) : $t(f)) || (f = bd(f), null == f ? Bt(a.j, "p") : null != k && Bt(a.j, f == k ? "E" : "e"));
				if ("string" == typeof h) {
					if ("m" == c ? Zt(h) : $t(h)) return;
					h = bd(h);
					null == h && (Ct(a.j, "p"), At(a.j, b, c))
				}
				if (null != h) if (d && e) {
					if (a.A) if (a.F) {
						var p = Math.max(h + l - k, 0),
							q = a.H;
						a.H = function(a, c) {
							a == b && (e[g] = p - c + "px");
							q(a, c)
						}
					} else e[g] = l + "px"
				} else At(a.j, b, c)
			}
		},
		Ut = function(a, b, c, d) {
			var e = null;
			try {
				e = c.style
			} catch (S) {
				Ct(a.j, "s")
			}
			var f = c.getAttribute("width"),
				g = $c(f),
				h = c.getAttribute("height"),
				k = $c(h),
				l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
			b = Tt(a, c, b);
			var p = d && d.width,
				q = d && d.height,
				v = e && e.width,
				u = e && e.height,
				t = bd(p) == a.D && bd(q) == a.C;
			p = t ? p : v;
			q = t ? q : u;
			t = bd(p);
			u = bd(q);
			g = null !== t && a.D >= t || null !== g && a.D >= g;
			u = null !== u && a.C >= u || null !== k && a.C >= k;
			k = !b && Vt(d);
			u = b || u || k || !(f || p || d && (!Zt(d.minWidth) || !$t(d.maxWidth)));
			l = b || g || k || l || !(h || q || d && (!Zt(d.minHeight) || !$t(d.maxHeight)));
			Yt(a, 0, u, c, "width", f, a.D, a.o);
			Yt(a, 1, l, c, "height", h, a.C, a.l);
			au(a, 0, "d", u, e, d, "width", p, a.D, a.o);
			au(a, 1, "d", l, e, d, "height", q, a.C, a.l);
			au(a, 0, "m", u, e, d, "minWidth", e && e.minWidth, a.D, a.o);
			au(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.C, a.l);
			au(a, 0, "M", u, e, d, "maxWidth", e && e.maxWidth, a.D, a.o);
			au(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.C, a.l);
			return b
		},
		Wt = function(a) {
			var b = 31.25,
				c = a.U,
				d = a.G,
				e = a.o,
				f = a.l,
				g = a.H,
				h, k = function() {
					if (0 < b) {
						var a = Sc(d, c) || {},
							k = bd(a.width);
						a = bd(a.height);
						null !== k && null !== e && g(0, e - k);
						null !== a && null !== f && g(1, f - a);
						--b
					} else r.clearInterval(h), g(0, 0), g(1, 0)
				};
			r.setTimeout(function() {
				h = r.setInterval(k, 16)
			}, 990)
		},
		Gt = function(a) {
			var b = a && a.ownerDocument,
				c = b && (b.defaultView || b.parentWindow),
				d;
			if (d = c) d = Pc(c.top) ? c.top : null;
			c = d;
			this.j = !! c;
			this.boundingClientRect = null;
			try {
				this.boundingClientRect = a && a.getBoundingClientRect()
			} catch (h) {}
			d = a;
			for (var e = 0, f = this.boundingClientRect; d;) try {
				f && (e += f.top);
				var g = d.ownerDocument;
				d = (g.defaultView || g.parentWindow).frameElement;
				f = d.getBoundingClientRect()
			} catch (h) {
				break
			}
			this.l = e;
			c = c || r;
			this.o = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
			b = b && Fp(b);
			this.v = !! a && !(2 == b || 3 == b) && !(this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
		},
		Jt = function(a) {
			return a.j && (!a.v || a.j && a.l >= a.o)
		};
	Gt.prototype.getWidth = function() {
		return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
	};
	Gt.prototype.getHeight = function() {
		return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
	};
	for (var Ht = function(a, b) {
			switch (b) {
			case "no_rsz":
				return !1;
			case "force":
			case "animate":
				return !0;
			default:
				return Jt(a)
			}
		}, Vt = function(a) {
			return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
		}, bu = new zt("s", ""), Ft = /[lonvafrbpEe]/g, $t = function(a) {
			return !a || /^(auto|none|100%)$/.test(a)
		}, Zt = function(a) {
			return !a || /^(0px|auto|none|0%)$/.test(a)
		}, Pt = function(a, b, c) {
			null !== b && null !== $c(a.getAttribute("width")) && a.setAttribute("width", b);
			null !== c && null !== $c(a.getAttribute("height")) && a.setAttribute("height", c);
			null !== b && (a.style.width = b + "px");
			null !== c && (a.style.height = c + "px")
		}, Qt = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), Rt = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), cu = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s", du = Qt, eu = 0; eu < du.length; eu++) cu += ", " + du[eu] + " .2s cubic-bezier(.4, 0, 1, 1)";
	du = Rt;
	for (eu = 0; eu < du.length; eu++) cu += ", " + du[eu] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
	var Ot = cu,
		It = function(a) {
			return "string" === typeof a ? $c(a) : "number" === typeof a && isFinite(a) ? a : null
		};
	var fu = function(a, b, c, d, e, f) {
			zn.call(this, a);
			this.l = b;
			this.o = c;
			this.F = d;
			this.D = e;
			this.C = f;
			this.v = this.l
		};
	ka(fu, zn);
	fu.prototype.W = function() {
		return null
	};
	fu.prototype.$ = function(a) {
		a["ablate-me"] = this.A;
		a["resize-me"] = this.G
	};
	fu.prototype.A = function(a, b) {
		vl(b, this.l.contentWindow) && (a = tl(a), b = a.clp_btf_only, gu(this, null, null, 0, 0, "animate" == a["collapse-after-close"] ? "animate" : "1" == b ? "safe" : "force", !1, !1, a))
	};
	fu.prototype.G = function(a, b) {
		if (vl(b, this.l.contentWindow)) {
			a = tl(a);
			var c = a.r_chk;
			if (null == c || "" == c) {
				var d = $c(a.r_nw),
					e = $c(a.r_nh),
					f = $c(a.r_no);
				null != f || 0 != d && 0 != e || (f = 0);
				var g = a.r_str;
				g = g ? g : null;
				a = gu(this, c, d, e, f, g, ad(a.r_ao), ad(a.r_ifr), a);
				b.source.postMessage(Hj({
					msg_type: "resize-result",
					r_str: g,
					r_status: a,
					googMsgType: "sth"
				}), "*")
			}
		}
	};
	var hu = function(a, b, c) {
			var d = {
				scrl: pl(a.j || H()),
				adk: a.F,
				adf: a.D,
				fmt: a.C
			};
			b && (d.str = Jt(b), d.ad_y = b.l, d.vph = b.o);
			G(c, function(a, b) {
				d[b] = a
			});
			return d
		},
		gu = function(a, b, c, d, e, f, g, h, k) {
			var l = H();
			if (!a.l || !l) return k.err = "2", iu(a, k, null), !1;
			if ("no_rsz" == f) return k.err = "7", iu(a, k, null), !0;
			l = new Gt(a.o || a.l);
			if (!l.j) return k.err = "3", iu(a, k, null), !1;
			var p = l.getWidth();
			p && (k.w = p);
			(p = l.getHeight()) && (k.h = p);
			if (Ht(l, f)) {
				var q = (p = a.o && a.o.ownerDocument.getElementById(a.o.id + "_anchor")) ? [a.o, a.l] : null;
				a.v = p || a.l;
				b = Nt(new Kt(a.v, q, {
					width: c,
					height: d,
					opacity: e,
					check: b,
					kb: f,
					ub: g,
					Qb: h
				}, null, null, !0));
				c && (k.nw = c);
				d && (k.nh = d);
				k.rsz = b.toString();
				k.abl = Et(b);
				k.frsz = ("force" == f).toString();
				k.err = "0";
				iu(a, k, l);
				return !0
			}
			k.err = "1";
			iu(a, k, l);
			return !1
		},
		iu = function(a, b, c) {
			var d = Na(String(b.gen204_fraction), .05);
			b = hu(a, c, b);
			b.url = a.j.document.URL;
			R("resize", b, d)
		};
	var ju = /^blogger$/,
		ku = /^wordpress(.|\s|$)/i,
		lu = /^joomla!/i,
		mu = /\/wp-content\//,
		nu = function(a) {
			for (var b = a.getElementsByTagName("meta"), c = b.length, d = 0; d < c; ++d) {
				var e = b[d];
				if ("generator" == e.getAttribute("name") && e.hasAttribute("content")) {
					e = e.getAttribute("content");
					if (ju.test(e)) return 1;
					if (ku.test(e)) return 2;
					if (lu.test(e)) return 3
				}
			}
			a = a.getElementsByTagName("link");
			b = a.length;
			for (c = 0; c < b; ++c) if (d = a[c], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), mu.test(d))) return 2;
			return 0
		};
	var ou = Tf(!1),
		qu = function(a) {
			aj(159, function() {
				return pu(a)
			});
			aj(160, function() {
				if (Hf(a.B)) {
					var b = lj().google_jobrunner;
					Hr(b) && b.rl();
					Dj(a.j)
				} else fg(a.j)
			})
		},
		ru = function(a) {
			a = new Ma(Vf(a.iframeWin), a.pubWin, a.iframeWin);
			eg(a, 8192);
			qu(a)
		},
		pu = function(a) {
			su(a);
			if (!/_sdo/.test(a.B.google_ad_format)) {
				Dl(function(b) {
					return Es(a, b)
				});
				var b = Y();
				P(b, 108) && (kd = jd);
				tu(a.B);
				a.A = !1;
				"sb" == a.B.google_loader_used || Xe() || mc() || (a.A = uu(a, b));
				a.A || vu(a, b);
				ls(a.B) && $m(a.l.document, "https://securepubads.g.doubleclick.net/static/3p_cookie.html", "prefetch", "html")
			}
		},
		xu = function(a, b) {
			b = wu(a, b);
			var c = tf() || Gs(Uf(a.l));
			if (!b || -12245933 == b.y || -12245933 == c.width || -12245933 == c.height || !c.height) return 0;
			var d = 0;
			try {
				var e = Uf(a.l);
				d = Fs(e.document, e).y
			} catch (f) {
				return 0
			}
			a = d + c.height;
			return b.y < d ? (d - b.y) / c.height : b.y > a ? (b.y - a) / c.height : 0
		};

	function uu(a, b) {
		var c = a.l.document,
			d = P(b, 107),
			e = !! Hp(c);
		yu(e, d, b);
		var f = zu(a, b);
		if (0 > f.hidden && 0 > f.visible) return !1;
		a: {
			try {
				var g = a.j.frameElement;
				break a
			} catch (p) {}
			g = null
		}
		var h = g,
			k = Gp(c);
		if (!h || !k) return !1;
		if (!e) return Au(a, b, f.visible, h);
		if (xu(a, h) <= f.hidden) return !1;
		var l = bj(332, function() {
			!Hp(c) && l && (Ve(c, k, l), Au(a, b, f.visible, h) || vu(a, b), l = null)
		});
		return F(c, k, l)
	}
	function zu(a, b) {
		var c = {
			hidden: -1,
			visible: -1
		};
		switch (P(b, 97)) {
		case "21061190":
			c = {
				hidden: 2,
				visible: 2
			};
			break;
		case "21060845":
		case "21060858":
		case "21061188":
		case "21061189":
			c = {
				hidden: 4,
				visible: 4
			};
			break;
		case "21060846":
		case "21060859":
			c = {
				hidden: 8,
				visible: 8
			};
			break;
		case "21060847":
		case "21060860":
			c = {
				hidden: 16,
				visible: 16
			}
		}
		Sp() && (a = lq(a.l), a = Math.max(Z(a, 82), 1), c.visible *= a, c.hidden *= a);
		"21060977" != P(b, 107) && (c.hidden = 0);
		return c
	}
	function yu(a, b, c) {
		var d = "21060976" == b;
		b = "21060977" == b;
		a ? d ? M(c, "21060980") : b && M(c, "21060981") : d ? M(c, "21060978") : b && M(c, "21060979")
	}
	function Au(a, b, c, d) {
		if (!d || 0 > c) return !1;
		var e = a.B;
		if (sl(e) || e.google_reactive_ads_config) return !1;
		var f = qj(),
			g = U(f, 8, {});
		f = U(f, 9, {});
		e = e.google_ad_section || e.google_ad_region || "";
		if (!(g = !g[e] && !f[e])) {
			try {
				var h = !(!d || !(d.offsetWidth || d.offsetHeight || d.getClientRects().length))
			} catch (k) {
				h = !1
			}
			g = !h || xu(a, d) <= c
		}
		if (g) return !1;
		a.G = new r.IntersectionObserver(function(c, d) {
			nb(c, function(c) {
				0 >= c.intersectionRatio || (d.unobserve(c.target), aj(294, function() {
					vu(a, b)
				}))
			})
		}, {
			rootMargin: 100 * c + "%"
		});
		a.G.observe(d);
		return !0
	}
	var vu = function(a, b) {
			aj(326, function() {
				if (ls(a.B)) {
					var c = !! b.j["1337"],
						e = !! b.j["21060549"] && !b.j["21060624"],
						f = c || b.j["21060549"] || b.j["20040067"] || P(b, 87) == Hl.Fa,
						g = H();
					if (f && g === g.top) {
						var h = qj(),
							k = new Hs;
						f = new Js;
						h = U(h, 7, oj());
						Jg(k, 1, h, 0);
						h = Fi(b).join();
						Jg(k, 5, h, "");
						Jg(k, 2, 1, 0);
						Ng(f, 1, k);
						k = new Is;
						Jg(k, 7, !e, !1);
						Jg(k, 8, !e, !1);
						Jg(k, 9, !e, !1);
						Jg(k, 10, !0, !1);
						Ng(f, 2, k);
						g.google_rum_config = Mg(f);
						e = Wm(ou, "/pagead/js/r20171106/r20170110/rum.js");
						hd && c && (e = e.replace("rum", "rum_debug"));
						Rc(g.document, e)
					} else Pi()
				}
			});
			if (a.B.google_ama && a.o) {
				var c = vq(wq(a.o));
				c ? oh(a.l, c, 1) && (c = B(fr, a.o, a.B.google_ad_client, c, fj(a.l, c), mq), aj("ac:amaerr", c)) : R("ac:noama", {})
			} else {
				a.B.google_ad_channel = Bu(a, a.B.google_ad_channel);
				c = a.B.google_start_time;
				x(c) && (Ir = c, a.B.google_start_time = null);
				aj(161, function() {
					var b = a.B;
					null == b.google_ad_output && (b.google_ad_output = "html");
					b.google_ad_client = String(b.google_ad_client);
					null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
					b.google_ad_client = hg(b.google_ad_client);
					if (null == b.google_flash_version) {
						try {
							var c = Rf()
						} catch (f) {
							c = "0"
						}
						b.google_flash_version = c
					}
					b.google_webgl_support = !! D.WebGLRenderingContext;
					b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
					b.google_country = b.google_country || b.google_gl || "";
					c = (new Date).getTime();
					y(b.google_color_bg) && (b.google_color_bg = gg(a, b.google_color_bg, c));
					y(b.google_color_text) && (b.google_color_text = gg(a, b.google_color_text, c));
					y(b.google_color_link) && (b.google_color_link = gg(a, b.google_color_link, c));
					y(b.google_color_url) && (b.google_color_url = gg(a, b.google_color_url, c));
					y(b.google_color_border) && (b.google_color_border = gg(a, b.google_color_border, c));
					y(b.google_color_line) && (b.google_color_line = gg(a, b.google_color_line, c))
				});
				Cu(a);
				if (c = a.B.google_reactive_ads_config) if (un(a.o, c), a.o && ("22307207" != P(Y(), 109) || us())) Ar(c, a), c = c.page_level_pubvars, z(c) && Ab(a.B, c);
				else {
					ft(a, c, a.B.google_ad_client);
					return
				}
				sl(a.B) && (hk() && (a.B.google_adtest = a.B.google_adtest || "on"), a.B.google_pgb_reactive = a.B.google_pgb_reactive || 3);
				Du(a)
			}
		},
		Cu = function(a) {
			if (a.o && (mn(a.o, a.B), sn(a.B, a.o))) {
				var b = a.B.google_ad_client,
					c = Vf(a.o);
				c && (jn(c, b) || new hq(c));
				V(a.o).adRegion = a.B.google_ad_region || null
			}
		},
		Eu = function(a) {
			return null == a ? '""' : '"' + a + '"'
		},
		Bu = function(a, b) {
			var c = a.B.google_ad_modifications;
			b = (b ? [b] : []).concat(c ? c.ad_channels || [] : []);
			c = a.l;
			Vl(c) ? (a = ["GoogleInfScrollTrigger"], c = c.name.split(":"), 2 <= c.length && c[1] && a.push(c[1])) : a = [];
			a.length && (b = b.concat(a));
			return b.join("+")
		},
		Fu = function() {
			if (!Sp() && !Rp() && oc() && sc(58)) return !0;
			var a = P(Y(), 88);
			return "21060105" === a || "21061011" === a
		},
		Iu = function(a, b, c, d, e, f, g) {
			g = void 0 === g ? null : g;
			e.src = Mr(c);
			Fu() && (e.sandbox = dd());
			var h = b.currentScript || b.scripts && b.scripts[0],
				k = H() == window.top;
			if ("sb" == f.B.google_loader_used || mc() || !h && !g || "33895411" !== P(Y(), 55) && !f.A) e = ns(e), k && (vf(a), r.setTimeout(bj(222, function() {
				var e = b.getElementById(d);
				e ? vf(a, e) : R("inabox:no-iframe", {
					adUrl: c
				})
			}), 0)), g ? Gu(g, b, e) : b.write(e);
			else {
				var l = pe((new ie(b)).j, "IFRAME");
				G(e, function(a, b) {
					null != a && l.setAttribute(b, a)
				});
				k && vf(a, l);
				g ? Hu(g, b, l) : h.parentNode.insertBefore(l, h.nextSibling)
			}
		},
		Ju = function(a, b, c, d) {
			return a.o ? kn("ac_crai", function(e) {
				b.body.appendChild(c);
				e.createAdSlot(a.o, a.B, d, c);
				return c
			}) : (R("jserror", {
				context: "ac_crai"
			}), null)
		},
		Mu = function(a, b, c, d, e, f, g, h) {
			var k = w(b) ? a.j.document.getElementById(b) : b;
			if (k || "html" !== d) {
				if ((h = a.o) && k && (!sl(a.B) || 26 == sl(a.B))) {
					var l = Hf(a.B) ? a.j.frameElement : null;
					new fu(h, k, l, e, f, g);
					var p = "41667001" === P(Y(), 111);
					new vt(h, k, l, void 0 === p ? !1 : p)
				}
				h && (new it(h), new Bp(h), new Cn(a));
				k && a.C && Ku(a, k, a.j.document);
				Lu(c, k, d)
			} else h ? R("jserror", {
				context: "ac::nfrm",
				url: c
			}) : r.setTimeout(bj(162, function() {
				return Mu(a, b, c, d, e, f, g, !0)
			}), 0)
		},
		Ku = function(a, b, c) {
			if (3 !== Fp(c)) Nu(a.F, b);
			else {
				var d = Gp(c);
				if (d) {
					var e = function() {
							Nu(a.F, b);
							Ve(c, d, e)
						};
					F(c, d, e)
				}
			}
			a.C = !1
		},
		Ou = function(a) {
			var b = a.B;
			if (sr(b)) {
				var c = P(Y(), 77);
				if (c && "20040060" != c) {
					var d = b.google_reactive_plat;
					if (![1, 2, 8].every(function(a) {
						return (new RegExp("(^|,)" + a + ":\\d+($|,)")).test(d)
					})) switch (c) {
					case "20040061":
						$m(a.l.document, wn(), "prefetch");
						break;
					case "20040062":
						Zm(1, H(), wn())
					}
				}
			}
		},
		Qu = function(a, b, c, d, e) {
			var f = a.B,
				g = a.j,
				h = c;
			c = Pu(c);
			var k = e ? c.replace(/&ea=[^&]*/, "") + "&ea=0" : c,
				l = Kf(d),
				p = f.google_async_iframe_id,
				q = f.google_container_id,
				v = f.google_ad_width,
				u = f.google_ad_height,
				t = {
					id: l,
					name: l
				};
			ps(t, v, u, Mr(k));
			var S = ns(t),
				aa = "";
			if (e) {
				k = 10;
				for (aa = ""; 0 < k--;) aa += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
				c = Ej(c, aa);
				h = Ej(h, aa)
			} else c = k;
			k = null;
			if (tr(f)) k = a.B, h = k.google_ad_width, q = k.google_ad_height, t = k.google_reactive_sra_index, h && q && k.google_ad_url && null != t ? (t = Kf("_rsra_" + t), t = {
				id: t,
				name: t
			}, ps(t, h, q, k.google_ad_url), k = ms(t), k = Ju(a, b, k, p)) : k = null;
			else if (!sr(f) && gn(f)) t.src = Mr(c), k = ms(t), k = Ju(a, b, k, p);
			else {
				var Q = f.google_ad_client,
					W;
				if (!(W = !Hf(f) || Nf(f))) {
					a: {
						if (W = Pp()) try {
							var ia = W.parent.document.getElementById("google_esf");
							if (ia.contentWindow == W) {
								var T = ia;
								break a
							}
						} catch (Ia) {}
						T = null
					}
					W = !(T && T.getAttribute("data-ad-client") == Q)
				}(T = W) || (T = qs(Q), T = !(T && T.Sb));
				(T || tr(f) || La[f.google_ad_width + "x" + f.google_ad_height] || Sf(f) || "20" !== f.google_iframing ? 0 : us() ? !f.google_reactive_ads_config : vs() && !f.google_reactive_ads_config && !ls(f) && rs(Q, f)) ? (q = h, b = zp(q, "w"), h = zp(q, "h"), t = zp(q, "ifi"), t = Kf(t), t = {
					id: t,
					name: t
				}, Q = (Q = qs(a.B.google_ad_client)) && Q.sraConfigs, q = "S-" + (Q && Q["2"] ? +Q["2"].sraTimeout || 2E3 : 0) + "-" + Mr(q, "zct"), ps(t, b, h, os(q)), a.j.document.write(ns(t))) : Iu(g, b, c, l, t, a, q)
			}
			e && (e = Wm(ou, "/pagead/js/r20171106/r20170110/creativetoolset/xpc_expansion_embed.js"), c = {
				id: l,
				url: c,
				width: v,
				height: u,
				X: aa,
				Mb: a.l,
				vb: p || void 0,
				td: "google_expandable_ad_slot" + d,
				Bb: e,
				xa: g
			}, !c.id || !c.url || 0 >= c.width || 0 >= c.height || !c.X || !c.xa || Sj(c.xa, "ct", B(Wj, c, e), Uj, za));
			Ou(a);
			if (Hf(f)) {
				a = ["<!DOCTYPE html><html><body>", S, "</body></html>"].join("");
				a = String(a);
				f = ['"'];
				for (S = 0; S < a.length; S++) {
					d = a.charAt(S);
					g = d.charCodeAt(0);
					c = S + 1;
					if (!(l = eb[d])) {
						if (!(31 < g && 127 > g)) if (g = d, g in fb) d = fb[g];
						else if (g in eb) d = fb[g] = eb[g];
						else {
							l = g.charCodeAt(0);
							if (31 < l && 127 > l) d = g;
							else {
								if (256 > l) {
									if (d = "\\x", 16 > l || 256 < l) d += "0"
								} else d = "\\u", 4096 > l && (d += "0");
								d += l.toString(16).toUpperCase()
							}
							d = fb[g] = d
						}
						l = d
					}
					f[c] = l
				}
				f.push('"');
				a = "javascript:" + f.join("");
				f = H();
				(new Nr(f)).set(p, a)
			}
			return k
		},
		Ru = function() {
			switch (P(Y(), 104)) {
			case "21061084":
				return 4096;
			case "21061085":
				return 8192;
			case "21061086":
				return 16384;
			default:
				return 1990
			}
		},
		Pu = function(a) {
			var b = Ru();
			var c = a;
			var d = b - 8;
			c.length > b && (c = c.substring(0, d), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
			c !== a && (b -= 8, d = a.lastIndexOf("&", b), -1 === d && (d = a.lastIndexOf("?", b)), R("trn", {
				ol: a.length,
				tr: -1 === d ? "" : a.substring(d + 1),
				url: a
			}, .01));
			return c
		},
		Tu = function(a, b, c) {
			var d = Jc("script"),
				e = Gf(a.B),
				f = Kf(e),
				g = a.B,
				h = null;
			"js" !== g.google_ad_output && "json_html" !== g.google_ad_output || !g.google_ad_request_done && !g.google_radlink_request_done ? "js" === g.google_ad_output && "sa" === g.google_loader_used ? (Ja("google_ad_request_done", function(b) {
				return Su(a, "asa", b)
			}, a.j), Ja("google_radlink_request_done", function(b) {
				return Su(a, "rsa", b)
			}, a.j), c = Mr(Pu(c)), Rc(b, c)) : "js" === g.google_ad_output && "aa" === g.google_loader_used ? (Ja("google_ad_request_done", function(b) {
				return Su(a, "aaa", b)
			}, a.j), Ja("google_radlink_request_done", function(b) {
				return Su(a, "raa", b)
			}, a.j), c = Mr(Pu(c)), Rc(b, c)) : "html" === g.google_ad_output && (h = Qu(a, b, c, e, 0 === a.v)) : b.write("<" + d + ' language="JavaScript1.1" src=' + Eu(Mr(Pu(c))) + "></" + d + ">");
			return h || f
		},
		Su = function(a, b, c) {
			var d = a.B,
				e = a.l,
				f = e.document.write;
			e.document.write = function(b) {
				var c = a.B.google_ad_client;
				"undefined" !== typeof console && "undefined" !== typeof console.error && console.error('tried to use document.write("' + b + '") when google_ad_request_done and google_radlink_request_done must be async friendly');
				R("outputjs_docwritepubs", {
					client: c
				})
			};
			e.google_info = d.google_info;
			try {
				if (a.j != e) if ("aaa" === b) e.google_ad_request_done_fns[d.google_ad_request_done_index](c);
				else if ("asa" === b) e.google_ad_request_done(c);
				else if ("raa" === b) {
					var g = d.google_radlink_request_done_index;
					if (0 <= g) e.google_radlink_request_done_fns[g](c)
				} else "rsa" === b && e.google_radlink_request_done && e.google_radlink_request_done(c)
			} finally {
				e.document.write = f
			}
		},
		Lu = function(a, b, c) {
			var d = Uu();
			if (d.getOseId()) {
				var e = Y();
				e = P(e, 101) === Kl.T || !! e.j["21060868"];
				if (d.setLoadOsdJsOnPubWindow) {
					var f = H();
					ya("Goog_AdSense_getAdAdapterInstance", $s, f);
					d.setLoadOsdJsOnPubWindow(e)
				}
				d.registerAdBlock(a, 1, String(c || ""), b)
			}
		},
		Hv = function(a, b) {
			var c = a.B;
			if (tr(c)) {
				var d = "RS-" + c.google_reactive_sra_index + "-",
					e = {};
				c.google_ad_url = Df((e.adk = c.google_ad_unit_key, e.client = c.google_ad_client, e), os(d));
				Vu(c, qj());
				Wu(c);
				return !0
			}
			var f = a.j,
				g = H().document,
				h = {},
				k;
			var l = kj(f, !1).ca;
			var p = jl(l);
			var q = k = hl(H(), g, f.google_ad_width, f.google_ad_height),
				v = p.Aa,
				u = H(),
				t = u.top == u ? 0 : Pc(u.top) ? 1 : 2,
				S = 4;
			q || 1 != t ? q || 2 != t ? q && 1 == t ? S = 7 : q && 2 == t && (S = 8) : S = 6 : S = 5;
			v && (S |= 16);
			var aa = "" + S;
			var Q = l,
				W = k,
				ia = !! f.google_page_url;
			h.google_iframing = aa;
			if (!ia && "ad.yieldmanager.com" == g.domain) {
				for (var T = g.URL.substring(g.URL.lastIndexOf("http")); - 1 < T.indexOf("%");) try {
					T = decodeURIComponent(T)
				} catch (ma) {
					break
				}
				f.google_page_url = T;
				ia = !! T
			}
			ia ? (h.google_page_url = f.google_page_url, h.google_page_location = (W ? g.referrer : g.URL) || "EMPTY") : (W && Pc(f.top) && g.referrer && f.top.document.referrer === g.referrer ? h.google_page_url = f.top.document.URL : h.google_page_url = W ? g.referrer : g.URL, h.google_page_location = null);
			a: {
				if (g.URL == h.google_page_url) try {
					var Ia = Date.parse(g.lastModified) / 1E3;
					break a
				} catch (ma) {}
				Ia = null
			}
			h.google_last_modified_time = Ia;
			if (Q == Q.top) var Ce = Q.document.referrer;
			else {
				var De = Xe();
				Ce = (De ? De.referrer : null) || ""
			}
			h.google_referrer_url = Ce;
			il(f, h);
			if (!Wu(c) || !sr(c) && gn(c) && !fn(a.l, c)) return !1;
			var qd = ml(c) ? od() : nd(),
				n = {},
				Ua = a.B;
			Xu(a, n);
			Ua.idp && (es(), n.adsid = bs[1], es(), n.pucrd = bs[6]);
			var X = a.B;
			n.dt = Ir;
			Hf(X) && X.google_bpp && (n.bpp = X.google_bpp);
			var Ee, Fe = H();
			a: {
				var Ge = H();
				try {
					var xb = Ge.performance;
					if (xb && xb.timing && xb.now) {
						var He = xb.timing.navigationStart + Math.round(xb.now()) - xb.timing.domLoading;
						break a
					}
				} catch (ma) {}
				He = null
			}
			var rd = He;
			(Ee = rd ? Lr(rd, Fe.Date.now() - Ir, 1E6) : null) && (n.bdt = Ee);
			var Ie = X.google_iframe_start_time;
			if (x(Ie)) {
				X.google_iframe_start_time = null;
				var sd = Lr(Ie, Ir)
			} else sd = null;
			var Je = sd;
			null != Je && (n.fdt = Je);
			n.idt = Lr(Jr, Ir);
			n.shv = ed();
			n.cbv = "/r20170110".replace("/", "");
			/^\w{1,3}$/.test(X.google_loader_used) && (n.saldr = X.google_loader_used);
			var Ec = Xe(a.l);
			if (Ec) {
				n.is_amp = 1;
				var td = Ec || Xe();
				n.amp_v = td && td.mode ? +td.mode.version || null : null;
				var Fc = Ec || Xe();
				if (Fc && Fc.container) {
					for (var Ke = Fc.container.split(","), Gn = [], Hh = 0; Hh < Ke.length; Hh++) Gn.push(We[Ke[Hh]] || "x");
					var Hn = Gn.join()
				} else Hn = null;
				var In = Hn;
				In && (n.act = In)
			}
			var Wb = qj(),
				Jn = U(Wb, 8, {}),
				Ze = X.google_ad_section;
			Jn[Ze] && (n.prev_fmts = Jn[Ze]);
			var Kn = U(Wb, 9, {});
			Kn[Ze] && (n.prev_slotnames = Kn[Ze].toLowerCase());
			Vu(X, Wb);
			var Ln = U(Wb, 15, 0);
			0 < Ln && (n.nras = "" + Ln);
			n.correlator = U(Wb, 7, oj());
			Y().j["21060549"] && (n.rume = 1);
			if (X.google_ad_channel) {
				for (var Mn = U(Wb, 10, {}), Nn = "", Pn = X.google_ad_channel.split(Yu), Ih = 0; Ih < Pn.length; Ih++) {
					var Jh = Pn[Ih];
					Mn[Jh] ? Nn += Jh + "+" : Mn[Jh] = !0
				}
				n.pv_ch = Nn
			}
			if (X.google_ad_host_channel) {
				for (var $e = U(Wb, 11, []), Qn = X.google_ad_host_channel.split("|"), af = -1, Kh = [], jb = 0; jb < Qn.length; jb++) {
					var Rn = Qn[jb].split(Yu);
					$e[jb] || ($e[jb] = {});
					for (var Cd = "", Lh = 0; Lh < Rn.length; Lh++) {
						var bf = Rn[Lh];
						"" !== bf && ($e[jb][bf] ? Cd += "+" + bf : $e[jb][bf] = !0)
					}
					Cd = Cd.slice(1);
					Kh[jb] = Cd;
					"" !== Cd && (af = jb)
				}
				var Mh = "";
				if (-1 < af) {
					for (var Nh = 0; Nh < af; Nh++) Mh += Kh[Nh] + "|";
					Mh += Kh[af]
				}
				n.pv_h_ch = Mh
			}
			fd && (n.jscb = 1);
			gd && (n.jscd = 1);
			n.frm = X.google_iframing;
			var Oh = a.l.document,
				Sn = "";
			try {
				Sn = Oh.cookie
			} catch (ma) {}
			var Tn = Oh.domain,
				Dd = Sn,
				cf = a.l.screen,
				av = Oh.referrer,
				bv = Ef();
			if (Xe()) var Un = H().gaGlobal || {};
			else {
				var Ph = Math.round((new Date).getTime() / 1E3),
					Qh = X.google_analytics_domain_name,
					df = "undefined" == typeof Qh ? xj("auto", Tn) : xj(Qh, Tn),
					cv = -1 < Dd.indexOf("__utma=" + df + "."),
					dv = -1 < Dd.indexOf("__utmb=" + df),
					Rh;
				if (!(Rh = (uf() || H()).gaGlobal)) {
					var ev = {};
					Rh = (uf() || H()).gaGlobal = ev
				}
				var fa = Rh,
					Vn = !1;
				if (cv) {
					var Sh = Dd.split("__utma=" + df + ".")[1].split(";")[0].split(".");
					dv ? fa.sid = Sh[3] + "" : fa.sid || (fa.sid = Ph + "");
					fa.vid = Sh[0] + "." + Sh[1];
					fa.from_cookie = !0
				} else {
					fa.sid || (fa.sid = Ph + "");
					if (!fa.vid) {
						Vn = !0;
						var fv = Math.round(2147483647 * Math.random()),
							Wn = bv,
							Xn, Xb = [uj.appName, uj.version, uj.language ? uj.language : uj.browserLanguage, uj.platform, uj.userAgent, vj() ? 1 : 0].join("");
						if (cf) Xb += cf.width + "x" + cf.height + cf.colorDepth;
						else if (r.java && r.java.awt) {
							var Yn = r.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
							Xb += Yn.screen.width + "x" + Yn.screen.height
						}
						Xb = Xb + Dd + (av || "");
						for (Xn = Xb.length; 0 < Wn;) Xb += Wn-- ^ Xn++;
						fa.vid = (fv ^ wj(Xb) & 2147483647) + "." + Ph
					}
					fa.from_cookie = !1
				}
				if (!fa.cid) {
					b: {
						var Kc = Qh,
							Zn = 999;
						Kc && (Kc = 0 == Kc.indexOf(".") ? Kc.substr(1) : Kc, Zn = ("" + Kc).split(".").length);
						for (var $n, ao = 999, ef = Dd.split(";"), Ed = 0; Ed < ef.length; Ed++) {
							var ff = yj.exec(ef[Ed]) || zj.exec(ef[Ed]) || Aj.exec(ef[Ed]);
							if (ff) {
								var Th = ff[1] || 0;
								if (Th == Zn) {
									var bo = ff[2];
									break b
								}
								Th < ao && (ao = Th, $n = ff[2])
							}
						}
						bo = $n
					}
					var Fd = bo;
					Vn && Fd && -1 != Fd.search(/^\d+\.\d+$/) ? fa.vid = Fd : Fd != fa.vid && (fa.cid = Fd)
				}
				fa.dh = df;
				fa.hid || (fa.hid = Math.round(2147483647 * Math.random()));
				Un = fa
			}
			var Gd = Un;
			n.ga_vid = Gd.vid;
			n.ga_sid = Gd.sid;
			n.ga_hid = Gd.hid;
			n.ga_fc = Gd.from_cookie;
			n.ga_cid = Gd.cid;
			n.ga_wpids = X.google_analytics_uacct;
			var co = X.google_ad_client;
			try {
				var eo = lj(),
					gf = eo.google_prev_clients;
				gf || (gf = eo.google_prev_clients = {});
				if (co in gf) var Uh = 1;
				else gf[co] = !0, Uh = 2
			} catch (ma) {
				Uh = 0
			}
			n.pv = Uh;
			var Hd = a.j,
				qa = new Ah(Hd);
			if (Hd.location && Hd.location.ancestorOrigins) {
				for (var fo, go = [], gv = Math.min(qa.l.length, 27), Lc = 1; Lc < gv; Lc++) qa.l[Lc] && qa.l[Lc].url && (go[Lc - 1] = qa.l[Lc].url);
				fo = Bh(qa, go.reverse());
				n.iag = fo
			}
			var hf = qa.j.document && qa.j.document.scripts ? qa.j.document.scripts : [];
			if (hf) {
				for (var Vh = [], jf = hf.length - 1; 0 <= jf && 26 > Vh.length;) hf[jf].src && Vh.unshift(hf[jf].src), jf--;
				var ho = Bh(qa, Vh)
			} else ho = 0;
			n.icsg = ho;
			var io = qa.l[0].depth;
			0 < io && (n.nhd = io);
			n.dssz = Hd.document.scripts ? Hd.document.scripts.length : 0;
			for (var jo = qa.l, ko = [], Wh = jo.length - 1; 0 < Wh; Wh--) {
				var Xh = jo[Wh];
				Xh && null != Xh.url && ko.push(rh(Xh.url.match(qh)[3] || null))
			}
			n.mdo = vh(ko);
			var Yh = qa.j.document && qa.j.document.scripts ? qa.j.document.scripts : [];
			if (Yh) {
				for (var lo = [], Zh = Yh.length - 1; 0 <= Zh; Zh--) {
					var $h = Yh[Zh];
					$h && null != $h.src && lo.push(rh($h.src.match(qh)[3] || null))
				}
				var mo = vh(lo)
			} else mo = 0;
			n.mso = mo;
			var ai = X.google_ad_layout;
			ai && 0 <= Kr[ai] && (n.rplot = Kr[ai]);
			n.u_tz = -(new Date).getTimezoneOffset();
			n.u_his = Ef();
			n.u_java = !! D.navigator && "unknown" !== typeof D.navigator.javaEnabled && !! D.navigator.javaEnabled && D.navigator.javaEnabled();
			D.screen && (n.u_h = D.screen.height, n.u_w = D.screen.width, n.u_ah = D.screen.availHeight, n.u_aw = D.screen.availWidth, n.u_cd = D.screen.colorDepth);
			D.navigator && D.navigator.plugins && (n.u_nplug = D.navigator.plugins.length);
			D.navigator && D.navigator.mimeTypes && (n.u_nmime = D.navigator.mimeTypes.length);
			if (b) try {
				var Id = wu(a, b);
				if (Id && (!n.adx || -12245933 == n.adx || !n.ady || -12245933 == n.ady)) {
					n.adx = Math.round(Id.x);
					n.ady = Math.round(Id.y);
					var kf = Y(),
						Jd = P(kf, 110);
					if ("21061217" == Jd || "21061218" == Jd) {
						var bi = Vf(a.l);
						if (bi) {
							var no = Fs(bi.document, bi);
							n.ady = Math.round(Id.y - no.y);
							n.adx = Math.round(Id.x - no.x)
						}
					}
					if ("21061216" == Jd || "21061218" == Jd) n.adx = Math.abs(n.adx), n.ady = Math.abs(n.ady);
					if ("21061228" == Jd) {
						var ci = Vf(a.l);
						if (ci) {
							var oo = Fs(ci.document, ci),
								po = 0 != oo.x,
								qo = 0 != oo.y;
							qo && po ? M(kf, "21061229") : qo ? M(kf, "21061230") : po && M(kf, "21061231")
						}
					}
				}
			} catch (ma) {}
			var di = tf() || Gs(Uf(a.l));
			di && (n.biw = di.width, n.bih = di.height);
			var ro = a.l;
			if (Uf(ro) != ro) {
				var ei = Gs(a.l);
				ei && (n.isw = ei.width, n.ish = ei.height)
			}
			var Yb = a.l;
			if (null !== Yb && Yb != Yb.top) {
				var lf = [Yb.document.URL];
				Yb.name && lf.push(Yb.name);
				var so = Gs(Yb, !1);
				lf.push(so.width.toString());
				lf.push(so.height.toString());
				var to = Xc(lf.join(""))
			} else to = 0;
			var uo = to;
			0 !== uo && (n.ifk = uo.toString());
			H() == window.top && (n.abxe = 1);
			var vo = Y(),
				wo = Ml(vo),
				mf = a.B.google_eids;
			if (y(mf)) {
				eg(a, 64);
				for (var nf = 0; nf < mf.length; nf++) w(mf[nf]) && wo.push(mf[nf])
			}
			n.eid = wo.join();
			var xo = Ll(vo),
				yo = a.B.google_loeid;
			w(yo) && (eg(a, 4096), sb(xo, yo.split(",")));
			n.loeid = xo.join();
			var zo = Uu().getOseId();
			zo && (n.oid = zo);
			var O = a.B,
				Ca = a.j,
				la = a.l,
				Zb = lj(),
				Ao = "22307207" != P(Y(), 109) || us() || !! sl(O),
				fi;
			if (!(fi = !Ao)) {
				var Bo = nl(Zb).clientWidth || 0;
				fi = 320 <= Bo && 420 >= Bo && .05 > Math.abs(rl(Zb) - 1)
			}
			fi || (n.nmo = 1);
			if (Zb.outerWidth && Ao) {
				var Co = Zb.outerWidth / Zb.document.documentElement.clientWidth;.02 < Math.abs(Co - 1) && (n.zm = String(Co).substring(0, 4))
			}
			n.ref = O.google_referrer_url;
			n.loc = O.google_page_location;
			var Kd = jl(Zb),
				hv = Y();
			n.url || n.loc || !Kd.url || (n.url = Kd.url, Kd.Aa || (n.usrc = 1));
			var gi, Do = O.google_ad_output,
				iv = Sf(O),
				jv = (!Do || "html" == Do) && !iv;
			if (!(gi = "33895335" == P(Y(), 59) && jv || Zu(O))) {
				var kv = O.google_ad_channel;
				gi = "ca-pub-6219811747049371" === O.google_ad_client && $u.test(kv)
			}
			gi && (n.d_imp = "1");
			Kd.url != (n.loc || n.url) && (n.top = Kd.url);
			O.google_async_rrc && (n.rr = O.google_async_rrc);
			n.rx = 0;
			var Fo;
			if (Dr && Gr(Dr)) var Go = Dr;
			else {
				var hi = lj(),
					Ho = hi.google_jobrunner;
				Go = Hr(Ho) ? Dr = Ho : hi.google_jobrunner = Dr = new Cr(hi)
			}
			var Io = Go;
			(Fo = yf(Io.tc) ? Io.tc() : null) && (n.jtc = Fo);
			0 <= a.v && (n.eae = a.v);
			var Jo = on(O, a.o);
			Jo && (n.fc = Jo);
			var of = Vf(la);
			if (of && Vm(Ca, of)) {
				var Ko = of.document.getElementById(Ca.google_async_iframe_id);
				if (Ko) {
					for (var Ld = Ko.parentElement; Ld && !Lf.test(Ld.className);) Ld = Ld.parentElement;
					var Lo = Ld
				} else Lo = null;
				var ii = Lo;
				if (ii) {
					var mv = cq(of),
						nv = Zp(Ca);
					mv.push({
						Ca: ii,
						B: nv,
						offsetWidth: ii.offsetWidth
					})
				}
			}
			if (!Sf(O)) {
				var Md = Ca.document,
					Mo = "";
				if (Md.documentMode) {
					var $b = pe((new ie(Md)).j, "IFRAME");
					$b.frameBorder = "0";
					$b.style.height = 0;
					$b.style.width = 0;
					$b.style.position = "absolute";
					if (Md.body) {
						Md.body.appendChild($b);
						try {
							var pf = $b.contentWindow.document;
							pf.open();
							pf.write("<!DOCTYPE html>");
							pf.close();
							Mo += pf.documentMode
						} catch (ma) {}
						Md.body.removeChild($b)
					}
				}
				n.docm = Mo
			}
			try {
				var ov = la.screenX;
				var pv = la.screenY
			} catch (ma) {}
			try {
				var qv = la.outerWidth;
				var rv = la.outerHeight
			} catch (ma) {}
			try {
				var sv = la.innerWidth;
				var tv = la.innerHeight
			} catch (ma) {}
			n.brdim = [la.screenLeft, la.screenTop, ov, pv, la.screen ? la.screen.availWidth : void 0, la.screen ? la.screen.availTop : void 0, qv, rv, sv, tv].join();
			var uv = Gl.T;
			var vv = P(Y(), 67) === uv;
			var Nd = 0;
			!xa(r.postMessage) && (Nd |= 1);
			if (vv) {
				var No = Xe(Ca);
				No && No.observeIntersection && (Nd |= 256);
				x(Ca.screenX) && x(Ca.mozInnerScreenX) && x(Ca.outerWidth) && (Nd |= 512);
				Ea(Kp(Ca && Ca.document)) && (Nd |= 1024)
			}
			var Oo = Nd;
			0 < Oo && (n.osd = Oo);
			var ji = Fp(la.document),
				Po = Fp(Ca.document);
			n.vis = ji;
			ji !== Po && R("slotctx", {
				type: "vis",
				pub: ji,
				cur: Po,
				eq: Ca.parent == la
			}, .01);
			if (b) {
				var Qo = sl(O) ? bu : Nt(new Kt(b, null, {
					width: 0,
					height: 0
				}, O.google_ad_width, O.google_ad_height, !1));
				n.rsz = Qo.toString();
				n.abl = Et(Qo)
			}
			n.ppjl = ts(O.google_ad_client, "2");
			if ("html" === (O.google_ad_output || "html") && !sl(O)) {
				a: {
					var Od = Number(O.google_ad_width),
						Pd = Number(O.google_ad_height);
					if (!(0 < Od && 0 < Pd)) {
						b: {
							try {
								var ki = String(O.google_ad_format);
								if (ki && ki.match) {
									var li = ki.match(/(\d+)x(\d+)/i);
									if (li) {
										var Ro = parseInt(li[1], 10),
											So = parseInt(li[2], 10);
										if (0 < Ro && 0 < So) {
											var To = {
												width: Ro,
												height: So
											};
											break b
										}
									}
								}
							} catch (ma) {}
							To = null
						}
						var mi = To;
						if (!mi) {
							var Uo = null;
							break a
						}
						Od = 0 < Od ? Od : mi.width;
						Pd = 0 < Pd ? Pd : mi.height
					}
					Uo = {
						width: Od,
						height: Pd
					}
				}
				var ni = Uo;
				if (ni) {
					var Vo = 0;
					a: {
						try {
							var Wo = O.google_async_iframe_id,
								Xo = H().document;
							if (Wo) var Yo = Xo.getElementById(Wo);
							else {
								var Zo = Xo.getElementsByTagName("script"),
									$o = Zo[Zo.length - 1];
								Yo = $o && $o.parentNode || null
							}
							var ap = Yo;
							if (ap) {
								for (var Qd = [], qf = ap, wv = 0, xv = Ha(); 100 >= ++wv && 50 > Ha() - xv && (qf = lv(qf));) 1 === qf.nodeType && Qd.push(qf);
								b: {
									for (var oi = 0; oi < Qd.length; oi++) {
										c: {
											var kb = Qd[oi];
											try {
												if (kb.parentNode && 0 < kb.offsetWidth && 0 < kb.offsetHeight && kb.style && "none" !== kb.style.display && "hidden" !== kb.style.visibility && (!kb.style.opacity || 0 !== Number(kb.style.opacity))) {
													var bp = kb.getBoundingClientRect();
													var cp = 0 < bp.right && 0 < bp.bottom;
													break c
												}
											} catch (ma) {}
											cp = !1
										}
										if (!cp) {
											var dp = !1;
											break b
										}
									}
									dp = !0
								}
								if (dp) {
									b: {
										for (var zv = Ha(), Av = /^html|body$/i, Bv = /^fixed/i, pi = 0; pi < Qd.length && 50 > Ha() - zv; pi++) {
											var rf = Qd[pi];
											if (!Av.test(rf.tagName) && Bv.test(rf.style.position || ye(rf))) {
												var qi = rf;
												break b
											}
										}
										qi = null
									}
									break a
								}
							}
						} catch (ma) {}
						qi = null
					}
					var ri = qi;
					ri && ri.offsetWidth * ri.offsetHeight <= 4 * ni.width * ni.height && (Vo = 1);
					n.pfx = Vo
				}
			}
			var sf = la.location,
				Cv = O.google_ad_slot;
			if (sf) {
				var si = ek(sf);
				a: {
					var Dv = fk(sf);
					try {
						var ep = Dv.match(/\bpfofmt=([\w]+)/);
						var fp = ep && ep[1] || null;
						break a
					} catch (ma) {}
					fp = null
				}
				var ti = fp;
				a: {
					var Ev = fk(sf);
					try {
						var gp = Ev.match(/\bpfoslot=([\d]+)/);
						var hp = gp && gp[1] || null;
						break a
					} catch (ma) {}
					hp = null
				}
				var ip = hp;
				0 >= si || !(si != bk.google_server_side_slot_resize || ti && ip && ip == Cv) || (n.pfo = si, n.adtest = "on", ti && (n.pfofmt = ti))
			}
			if ("26835106" === P(hv, 41) && a.o) {
				try {
					var jp = a.o.document.getElementsByTagName("head")[0];
					var kp = jp ? nu(jp) : 0
				} catch (ma) {
					kp = 0
				}
				var lp = kp;
				0 !== lp && (n.cms = lp)
			}
			var mp = Wl(Zb, O);
			0 != mp && (n.ifsl = mp);
			n.fu = a.D;
			var np = 0;
			r.SVGElement && r.document.createElementNS && (np |= 1);
			n.bc = np;
			Ua.idp && (es(), n.jar = bs[4]);
			if (hd) {
				Nl(n);
				var pp = yv(/\b(?:creatives)=([\d,]+)/),
					qp = pp && pp[1];
				qp && (n.creatives = qp);
				var rp = yv(/\b(?:adgroups)=([\d,]+)/),
					sp = rp && rp[1];
				sp && (n.adgroups = sp);
				n.adgroups && (n.adtest = "on", n.disable_budget_throttling = !0, n.use_budget_filtering = !1, n.retrieve_only = !0, n.disable_fcap = !0)
			}
			n.url && 0 == String(n.url).lastIndexOf("https:", 0) && kd && oc() && sc(57) && (n.osw_key = tt(n));
			var Fv = c.google_ad_channel,
				tp = "/pagead/ads?";
			"ca-pub-6219811747049371" === c.google_ad_client && Gv.test(Fv) && (tp = "/pagead/lopri?");
			var ui = Wm(qd, tp),
				vi;
			if (vi = !Zu(a.B)) {
				var up = a.B;
				vi = (!up.google_ad_output || "html" === up.google_ad_output) && 3 === Fp(a.l.document)
			}
			vi && (a.C = !0, a.F = ui, ui = Wm(qd, "/pagead/blank.gif#?"));
			c.google_ad_url = Df(n, ui + "");
			return !0
		},
		$u = /PyvSearchDelayed/,
		Zu = function(a) {
			return "33895333" === P(Y(), 19) && "html" === a.google_ad_output
		},
		Vu = function(a, b) {
			var c = U(b, 8, {});
			b = U(b, 9, {});
			var d = a.google_ad_section,
				e = a.google_ad_format;
			a = a.google_ad_slot;
			e ? c[d] = c[d] ? c[d] + ("," + e) : e : a && (b[d] = b[d] ? b[d] + ("," + a) : a)
		},
		Iv = function(a, b, c) {
			var d = a.B,
				e = function() {
					var e = Hv(a, b);
					b && b.id == c && b && b.parentNode && b.parentNode.removeChild(b);
					if (e) {
						Hf(d) || Ff(a.l);
						e = {};
						e = (e.ifi = Gf(a.B), e);
						var f = Df(e, d.google_ad_url);
						e = Tu(a, a.j.document, f);
						f = Pu(f);
						var k = function(b) {
								Mu(a, b, f, d.google_ad_output, String(d.google_ad_unit_key || ""), String(d.google_ad_dom_fingerprint || ""), String(d.google_ad_format || ""))
							};
						w(e) ? k(e) : Rk(e.then(k), function(a) {
							cj(223, a)
						})
					}
				};
			if (Bf(Zf(d), "21060831") || Bf(Zf(d), "21060832") || Bf(Zf(d), "21060843") || Bf(Zf(d), "21061122")) d.idp = !0;
			Or = H;
			es();
			fs(".google.cn");
			var f = "aa" === d.google_loader_used || "sa" === d.google_loader_used;
			f && (Bf(Zf(a.B), "21060831") || pc() && sc(11) && Bf(Zf(a.B), "21061122")) ? (is(e), d.idm = is) : f && Bf(Zf(d), "21060832") ? (ks(e), d.idm = ks) : e()
		},
		Du = function(a) {
			var b = a.B.google_ad_width,
				c = a.B.google_ad_height;
			var d = a.l.document;
			var e = a.B,
				f = 0;
			try {
				!1 === e.google_allow_expandable_ads && (f |= 1);
				if (!d.body || e.google_ad_output && "html" != e.google_ad_output || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || d.domain != a.j.location.hostname || !/^http/.test(d.location.protocol)) f |= 2;
				a: {
					e = navigator;
					var g = e.userAgent,
						h = e.platform,
						k = /WebKit\/(\d+)/,
						l = /rv:(\d+\.\d+)/,
						p = /rv:1\.8([^.]|\.0)/;
					if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(h) && !/^Opera/.test(g)) {
						var q = (k.exec(g) || [0, 0])[1],
							v = (l.exec(g) || [0, 0])[1];
						if (/Win/.test(h) && /Trident/.test(g) && 11 <= d.documentMode || !q && "Gecko" === e.product && 27 <= v && !p.test(g) || 536 <= q) {
							var u = !0;
							break a
						}
					}
					u = !1
				}
				u || (f |= 4)
			} catch (t) {
				f |= 8
			}
			d = f;
			hl(a.l, a.l.document, b, c) && (d |= 2);
			a.v = d;
			0 === a.v || (a.B.google_allow_expandable_ads = !1);
			lj() != a.l && eg(a, 4);
			kd && eg(a, 16);
			id && eg(a, 8);
			3 === Fp(a.j.document) && eg(a, 32);
			if (b = a.o) b = a.o, b = !(nl(b).scrollWidth <= nl(b).clientWidth);
			b && eg(a, 1024);
			a.B.google_loader_features_used && eg(a, a.B.google_loader_features_used);
			b = kd;
			c = pd(!1);
			Us = xi(new Ch, b ? "https:" : "http:", c, "/pagead/js/r20171106/r20170110/osd.js");
			Ls = ld;
			Ks = md;
			b = Uu();
			c = qj();
			b.setupOse(U(c, 7, oj()));
			b = "";
			(c = a.B.google_async_iframe_id) ? c = a.l.document.getElementById(c) : (c = b = "google_temp_span", d = a.B.google_container_id, f = a.j.document, u = d && f.getElementById(d) || f.getElementById(c), u || d || !c || (f.write("<span id=" + c + "></span>"), u = f.getElementById(c)), c = u);
			Iv(a, c, b)
		},
		Xu = function(a, b) {
			var c = a.B;
			G(bg, function(a, e) {
				b[a] = c[e]
			});
			G(ag, function(a, e) {
				b[a] = c[e]
			});
			G(dg, function(a, e) {
				b[a] = c[e]
			});
			sl(c) && (b.fa = sl(c));
			ws(c, !0) && (xs(c) ? (ss(c.google_ad_client), b.srr = 1) : b.srr = 0)
		},
		yv = function(a) {
			try {
				var b = r.top.location.hash;
				if (b) return b.match(a)
			} catch (c) {}
			return null
		},
		Hu = function(a, b, c) {
			if (a = b.getElementById(a)) {
				for (a.style.visibility = "visible"; b = a.firstChild;) a.removeChild(b);
				a.appendChild(c)
			}
		},
		Gu = function(a, b, c) {
			a && (a = b.getElementById(a)) && c && (a.style.visibility = "visible", a.innerHTML = c)
		},
		Gv = /YtLoPri/,
		Nu = function(a, b) {
			var c = b.src,
				d = c.indexOf("/pagead/blank.gif#?");
			a = -1 === d ? c : a + c.substr(d + 19);
			a !== c && (c = b.nextSibling, d = b.parentNode, d.removeChild(b), b.src = a, d.insertBefore(b, c))
		};

	function wu(a, b) {
		var c;
		var d;
		c = (d = (d = Xe()) && (c = d.initialLayoutRect) && x(c.top) && x(c.left) && x(c.width) && x(c.height) ? new ue(c.left, c.top, c.width, c.height) : null) ? new ge(d.left, d.top) : (c = Ye()) && z(c.rootBounds) ? new ge(c.rootBounds.left + c.boundingClientRect.left, c.rootBounds.top + c.boundingClientRect.top) : null;
		if (c) return c;
		if (a.B.google_ad_output && "html" !== a.B.google_ad_output) return null;
		try {
			var e = Uf(a.l),
				f = new ge(0, 0),
				g = je(b);
			var h = g ? g.parentWindow || g.defaultView : window;
			if (Mc(h, "parent")) {
				a = b;
				do {
					if (h == e) {
						b = a;
						var k = je(b),
							l = new ge(0, 0);
						g = void 0;
						g = k ? je(k) : document;
						var p = !wd || 9 <= Number(ce) || "CSS1Compat" == ke(g).j.compatMode ? g.documentElement : g.body;
						if (b != p) {
							var q = ze(b),
								v = ke(k).j,
								u = v.scrollingElement ? v.scrollingElement : zd || "CSS1Compat" != v.compatMode ? v.body || v.documentElement : v.documentElement,
								t = v.parentWindow || v.defaultView;
							var S = wd && be("10") && t.pageYOffset != u.scrollTop ? new ge(u.scrollLeft, u.scrollTop) : new ge(t.pageXOffset || u.scrollLeft, t.pageYOffset || u.scrollTop);
							l.x = q.left + S.x;
							l.y = q.top + S.y
						}
						var aa = l
					} else {
						var Q = ze(a);
						aa = new ge(Q.left, Q.top)
					}
					b = aa;
					f.x += b.x;
					f.y += b.y
				} while (h && h != e && h != h.parent && (a = h.frameElement) && (h = h.parent))
			}
			return f
		} catch (W) {
			return new ge(-12245933, -12245933)
		}
	}
	var lv = function(a) {
			try {
				if (a.parentNode) return a.parentNode
			} catch (e) {
				return null
			}
			if (9 === a.nodeType) a: {
				try {
					var b = a ? a.parentWindow || a.defaultView : window;
					if (b) {
						var c = b.frameElement;
						if (c && Pc(b.parent)) {
							var d = c;
							break a
						}
					}
				} catch (e) {}
				d = null
			} else d = null;
			return d
		},
		Jv = function(a, b) {
			var c = {},
				d = {},
				e = !1,
				f = function(a, b) {
					try {
						return null == a && null == b || JSON.stringify(a) === JSON.stringify(b)
					} catch (l) {
						return !1
					}
				};
			G(b, function(b, g) {
				f(b, a[g]) ? c[g] = b : (d[g] = [b, a[g], 1], e = !0);
				a[g] = b
			});
			var g = Zp(a);
			G(g, function(a, c) {
				f(b[c], a) || (d[c] = [b[c], a, 2], e = !0)
			});
			e && (g = {
				m: $p(c),
				mm: $p(d)
			}, R("cblob", g))
		},
		Wu = function(a) {
			var b = qj(),
				c = a.google_ad_section;
			sl(a) && sj(b, 15, U(b, 15, 0) + 1);
			if (Sf(a)) {
				if (3 < sj(b, 5, U(b, 5, 0) + 1)) return !1
			} else if (100 < sj(b, 6, U(b, 6, 0) + 1) - U(b, 15, 0) && "" == c) return !1;
			return !0
		},
		su = function(a) {
			var b = Cl(),
				c = lq(H()),
				d;
			b ? (c = Fi(Y()), Bf(c, "453848104") ? d = "453848104" : Bf(c, "453848105") && (d = "453848105")) : d = Tc(["453848104", "453848105"], Z(c, 51));
			(c = a.B.google_pub_vars) && "453848105" == d && (c = aq(c)) && Jv(a.j, c);
			if (!b && d) for (a = a.B, d = [d], a = a.google_ad_modifications = a.google_ad_modifications || {}, a = a.loeids = a.loeids || [], b = 0; b < d.length; b++) a.push(d[b])
		},
		Yu = /[+, ]/,
		tu = function(a) {
			nb($f(a), function(a) {
				Jl[a] = a
			})
		},
		Uu = function() {
			switch (P(Y(), 103)) {
			case "188690902":
			case "188690904":
				if (nc() && !sc(10)) {
					var a = H();
					var b = a.__google_ad_urls;
					a = b ? b : a.__google_ad_urls = new at
				} else a = $s();
				return a;
			default:
				return $s()
			}
		};
	(function() {
		var a = [lt, kt, Fl, Zi];
		Ui.o = function(b) {
			nb(a, function(a) {
				a(b)
			})
		}
	})();
	r.google_sailm ? (r.google_sa_impl = ru, r.google_process_slots && r.google_process_slots()) : qu(new Ma(Vf(D), H(), D));
}).call(this, window, document, location)