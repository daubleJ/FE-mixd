(function() {
	var ca = "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {};
			b.prototype = a;
			return new b
		},
		da;
	if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
	else {
		var ea;
		a: {
			var fa = {
				a: !0
			},
				ja = {};
			try {
				ja.__proto__ = fa;
				ea = ja.a;
				break a
			} catch (a) {}
			ea = !1
		}
		da = ea ?
		function(a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	for (var ka = da, la = function(a, b) {
			a.prototype = ca(b.prototype);
			a.prototype.constructor = a;
			if (ka) ka(a, b);
			else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
				var d = Object.getOwnPropertyDescriptor(b, c);
				d && Object.defineProperty(a, c, d)
			} else a[c] = b[c];
			a.Ca = b.prototype
		}, ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
			a != Array.prototype && a != Object.prototype && (a[b] = c.value)
		}, na = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, oa = ["Number", "isNaN"], pa = 0; pa < oa.length - 1; pa++) {
		var qa = oa[pa];
		qa in na || (na[qa] = {});
		na = na[qa]
	}
	var ra = oa[oa.length - 1],
		va = na[ra],
		wa = va ? va : function(a) {
			return "number" === typeof a && isNaN(a)
		};
	wa != va && null != wa && ma(na, ra, {
		configurable: !0,
		writable: !0,
		value: wa
	});
	var l = this,
		xa = function(a) {
			return "string" == typeof a
		},
		ya = function(a) {
			return "number" == typeof a
		},
		za = function() {},
		r = function(a) {
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
		Aa = function(a) {
			var b = typeof a;
			return "object" == b && null != a || "function" == b
		},
		Ba = function(a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		Ca = function(a, b, c) {
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
		Da = function(a, b, c) {
			Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Da = Ba : Da = Ca;
			return Da.apply(null, arguments)
		},
		Ka = function(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = c.slice();
				b.push.apply(b, arguments);
				return a.apply(this, b)
			}
		},
		Ma = function(a) {
			var b = La;

			function c() {}
			c.prototype = b.prototype;
			a.Ca = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			a.Da = function(a, c, f) {
				for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
				return b.prototype[c].apply(a, d)
			}
		};
	var Na = (new Date).getTime();
	var Oa = document,
		v = window;
	var Pa = {
		"120x90": !0,
		"160x90": !0,
		"180x90": !0,
		"200x90": !0,
		"468x15": !0,
		"728x15": !0
	},
		Qa = function(a, b) {
			if (15 == b) {
				if (728 <= a) return 728;
				if (468 <= a) return 468
			} else if (90 == b) {
				if (200 <= a) return 200;
				if (180 <= a) return 180;
				if (160 <= a) return 160;
				if (120 <= a) return 120
			}
			return null
		};
	var Ra = function(a, b) {
			a = parseInt(a, 10);
			return isNaN(a) ? b : a
		},
		Sa = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/,
		Ta = function(a, b) {
			return a ? (a = a.match(Sa)) ? a[0] : b : b
		};
	var Va = Ra("468", 0);
	var Wa = function(a) {
			return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
		},
		eb = function(a) {
			if (!Xa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ya, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Za, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace($a, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ab, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(bb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(cb, "&#0;"));
			return a
		},
		Ya = /&/g,
		Za = /</g,
		$a = />/g,
		ab = /"/g,
		bb = /'/g,
		cb = /\x00/g,
		Xa = /[\x00&<>"']/,
		fb = {
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
		gb = {
			"'": "\\'"
		},
		hb = function(a) {
			return String(a).replace(/\-([a-z])/g, function(a, c) {
				return c.toUpperCase()
			})
		};
	var ib = function(a, b) {
			for (var c = a.length, d = xa(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
		},
		jb = function(a) {
			return Array.prototype.concat.apply([], arguments)
		};
	var kb = function(a, b) {
			for (var c in a) if (b.call(void 0, a[c], c, a)) return c
		};
	var mb = function() {
			this.j = "";
			this.l = lb
		};
	mb.prototype.fa = !0;
	mb.prototype.P = function() {
		return this.j
	};
	var nb = function(a) {
			if (a instanceof mb && a.constructor === mb && a.l === lb) return a.j;
			r(a);
			return "type_error:TrustedResourceUrl"
		},
		lb = {};
	var pb = function() {
			this.R = "";
			this.ta = ob
		};
	pb.prototype.fa = !0;
	pb.prototype.P = function() {
		return this.R
	};
	var qb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		ob = {},
		rb = function(a) {
			var b = new pb;
			b.R = a;
			return b
		};
	rb("about:blank");
	var sb;
	a: {
		var tb = l.navigator;
		if (tb) {
			var ub = tb.userAgent;
			if (ub) {
				sb = ub;
				break a
			}
		}
		sb = ""
	}
	var w = function(a) {
			return -1 != sb.indexOf(a)
		};
	var wb = function(a) {
			vb();
			var b = new mb;
			b.j = a;
			return b
		},
		vb = za;
	var Kb = function(a) {
			Kb[" "](a);
			return a
		};
	Kb[" "] = za;
	var x = function(a) {
			try {
				var b;
				if (b = !! a && null != a.location.href) a: {
					try {
						Kb(a.foo);
						b = !0;
						break a
					} catch (c) {}
					b = !1
				}
				return b
			} catch (c) {
				return !1
			}
		},
		Lb = function(a, b) {
			var c = [l.top],
				d = [],
				e = 0;
			b = b || 1024;
			for (var f; f = c[e++];) {
				a && !x(f) || d.push(f);
				try {
					if (f.frames) for (var g = f.frames.length, h = 0; h < g && c.length < b; ++h) c.push(f.frames[h])
				} catch (k) {}
			}
			return d
		},
		Mb = function(a, b) {
			var c = a.createElement("script");
			b = wb(b);
			c.src = nb(b);
			(a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
		},
		y = function(a, b) {
			return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
		},
		Nb = function(a) {
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536
			} catch (c) {
				return Math.random()
			}
		},
		Ob = function(a, b) {
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
		},
		Pb = function(a) {
			var b = a.length;
			if (0 == b) return 0;
			for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
			return 0 < c ? c : 4294967296 + c
		},
		Qb = /^([0-9.]+)px$/,
		Rb = /^(-?[0-9.]{1,30})$/,
		Sb = function(a) {
			return Rb.test(a) && (a = Number(a), !isNaN(a)) ? a : null
		},
		Tb = function(a, b) {
			return b ? !/^false$/.test(a) : /^true$/.test(a)
		},
		Ub = function(a) {
			return (a = Qb.exec(a)) ? +a[1] : null
		};
	var Vb = function() {
			return "r20171106"
		},
		Wb = Tb("false", !1),
		Xb = Tb("true", !1),
		Yb = Tb("true", !1),
		Zb = Yb || !Xb;
	var $b = w("Opera"),
		ac = -1 != sb.toLowerCase().indexOf("webkit") && !w("Edge");
	var bc = function() {
			var a = za;
			return function() {
				if (a) {
					var b = a;
					a = null;
					b()
				}
			}
		};
	var cc = function(a, b, c) {
			a.addEventListener ? a.addEventListener(b, c, void 0) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		dc = function(a, b, c) {
			a.removeEventListener ? a.removeEventListener(b, c, void 0) : a.detachEvent && a.detachEvent("on" + b, c)
		};
	var ec = function(a) {
			a = a || l;
			var b = a.context;
			if (!b) try {
				b = a.parent.context
			} catch (c) {}
			try {
				if (b && "pageViewId" in b && "canonicalUrl" in b) return b
			} catch (c) {}
			return null
		},
		fc = function(a) {
			a = a || ec();
			if (!a) return null;
			a = a.master;
			return x(a) ? a : null
		};
	var gc = function(a, b) {
			l.google_image_requests || (l.google_image_requests = []);
			var c = l.document.createElement("img");
			if (b) {
				var d = function(a) {
						b(a);
						dc(c, "load", d);
						dc(c, "error", d)
					};
				cc(c, "load", d);
				cc(c, "error", d)
			}
			c.src = a;
			l.google_image_requests.push(c)
		};
	var hc = Object.prototype.hasOwnProperty,
		ic = function(a, b) {
			for (var c in a) hc.call(a, c) && b.call(void 0, a[c], c, a)
		},
		jc = function(a) {
			return !(!a || !a.call) && "function" === typeof a
		},
		kc = function(a, b) {
			for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
		},
		lc = function(a, b) {
			if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
			for (var c = 0; c < a.length; c++) if (a[c] === b) return !0;
			return !1
		},
		mc = function(a) {
			a = fc(ec(a)) || a;
			a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
		},
		nc = !! window.google_async_iframe_id,
		oc = nc && window.parent || window,
		pc = function() {
			if (nc && !x(oc)) {
				var a = "." + Oa.domain;
				try {
					for (; 2 < a.split(".").length && !x(oc);) Oa.domain = a = a.substr(a.indexOf(".") + 1), oc = window.parent
				} catch (b) {}
				x(oc) || (oc = window)
			}
			return oc
		},
		qc = /(^| )adsbygoogle($| )/,
		rc = function(a) {
			a = Wb && a.google_top_window || a.top;
			return x(a) ? a : null
		};
	var z = function(a, b) {
			a = a.google_ad_modifications;
			return lc(a ? a.eids || [] : [], b)
		},
		B = function(a, b) {
			a = a.google_ad_modifications;
			return lc(a ? a.loeids || [] : [], b)
		},
		sc = function(a, b, c) {
			if (!a) return null;
			for (var d = 0; d < a.length; ++d) if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
			return null
		};
	var tc = {
		overlays: 1,
		interstitials: 2,
		vignettes: 2,
		inserts: 3,
		immersives: 4,
		list_view: 5,
		full_page: 6
	};
	var uc = function(a) {
			for (var b = [], c = 0, d = 0; d < a.length; d++) {
				var e = a.charCodeAt(d);
				255 < e && (b[c++] = e & 255, e >>= 8);
				b[c++] = e
			}
			return b
		};
	var vc = w("Safari") && !((w("Chrome") || w("CriOS")) && !w("Edge") || w("Coast") || w("Opera") || w("Edge") || w("Silk") || w("Android")) && !(w("iPhone") && !w("iPod") && !w("iPad") || w("iPad") || w("iPod"));
	var wc = null,
		xc = null,
		yc = w("Gecko") && !(-1 != sb.toLowerCase().indexOf("webkit") && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge") || ac && !vc || $b || "function" == typeof l.btoa,
		zc = function(a, b) {
			if (!wc) {
				wc = {};
				xc = {};
				for (var c = 0; 65 > c; c++) wc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), xc[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
			}
			b = b ? xc : wc;
			c = [];
			for (var d = 0; d < a.length; d += 3) {
				var e = a[d],
					f = d + 1 < a.length,
					g = f ? a[d + 1] : 0,
					h = d + 2 < a.length,
					k = h ? a[d + 2] : 0,
					n = e >> 2;
				e = (e & 3) << 4 | g >> 4;
				g = (g & 15) << 2 | k >> 6;
				k &= 63;
				h || (k = 64, f || (g = 64));
				c.push(b[n], b[e], b[g], b[k])
			}
			return c.join("")
		};
	var La = function() {},
		Ac = "function" == typeof Uint8Array,
		Cc = function(a, b, c) {
			a.j = null;
			b || (b = []);
			a.C = void 0;
			a.s = -1;
			a.l = b;
			a: {
				if (a.l.length) {
					b = a.l.length - 1;
					var d = a.l[b];
					if (d && "object" == typeof d && "array" != r(d) && !(Ac && d instanceof Uint8Array)) {
						a.v = b - a.s;
						a.o = d;
						break a
					}
				}
				a.v = Number.MAX_VALUE
			}
			a.w = {};
			if (c) for (b = 0; b < c.length; b++) if (d = c[b], d < a.v) d += a.s, a.l[d] = a.l[d] || Bc;
			else {
				var e = a.v + a.s;
				a.l[e] || (a.o = a.l[e] = {});
				a.o[d] = a.o[d] || Bc
			}
		},
		Bc = [],
		C = function(a, b) {
			if (b < a.v) {
				b += a.s;
				var c = a.l[b];
				return c === Bc ? a.l[b] = [] : c
			}
			if (a.o) return c = a.o[b], c === Bc ? a.o[b] = [] : c
		},
		Dc = function(a, b) {
			if (b < a.v) {
				b += a.s;
				var c = a.l[b];
				return c === Bc ? a.l[b] = [] : c
			}
			c = a.o[b];
			return c === Bc ? a.o[b] = [] : c
		},
		Xc = function(a, b, c) {
			a.j || (a.j = {});
			if (!a.j[c]) {
				var d = C(a, c);
				d && (a.j[c] = new b(d))
			}
			return a.j[c]
		},
		Yc = function(a, b, c) {
			a.j || (a.j = {});
			if (!a.j[c]) {
				for (var d = Dc(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
				a.j[c] = e
			}
			b = a.j[c];
			b == Bc && (b = a.j[c] = []);
			return b
		},
		Zc = function(a) {
			if (a.j) for (var b in a.j) {
				var c = a.j[b];
				if ("array" == r(c)) for (var d = 0; d < c.length; d++) c[d] && Zc(c[d]);
				else c && Zc(c)
			}
		};
	La.prototype.toString = function() {
		Zc(this);
		return this.l.toString()
	};
	var ad = function(a) {
			Cc(this, a, $c)
		};
	Ma(ad);
	var $c = [4],
		bd = function(a) {
			Cc(this, a, null)
		};
	Ma(bd);
	var cd = function(a) {
			Cc(this, a, null)
		};
	Ma(cd);
	var ed = function(a) {
			Cc(this, a, dd)
		};
	Ma(ed);
	var dd = [6, 7, 9, 10];
	var gd = function(a) {
			Cc(this, a, fd)
		};
	Ma(gd);
	var fd = [1, 2, 5, 7],
		hd = function(a) {
			Cc(this, a, null)
		};
	Ma(hd);
	var jd = function(a) {
			Cc(this, a, id)
		};
	Ma(jd);
	var id = [2];
	var kd = function(a, b, c) {
			c = void 0 === c ? {} : c;
			this.error = a;
			this.context = b.context;
			this.line = b.line || -1;
			this.msg = b.message || "";
			this.file = b.file || "";
			this.id = b.id || "jserror";
			this.meta = c
		};
	var ld = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
		md = function(a, b) {
			this.j = a;
			this.l = b
		},
		nd = function(a, b, c) {
			this.url = a;
			this.j = b;
			this.ga = !! c;
			this.depth = ya(void 0) ? void 0 : null
		};
	var od = function(a, b, c, d, e) {
			this.w = c || 4E3;
			this.o = a || "&";
			this.C = b || ",$";
			this.s = void 0 !== d ? d : "trn";
			this.N = e || null;
			this.v = !1;
			this.l = {};
			this.D = 0;
			this.j = []
		},
		pd = function(a, b) {
			var c = {};
			c[a] = b;
			return [c]
		},
		rd = function(a, b, c, d, e) {
			var f = [];
			Ob(a, function(a, h) {
				(a = qd(a, b, c, d, e)) && f.push(h + "=" + a)
			});
			return f.join(b)
		},
		qd = function(a, b, c, d, e) {
			if (null == a) return "";
			b = b || "&";
			c = c || ",$";
			"string" == typeof c && (c = c.split(""));
			if (a instanceof Array) {
				if (d = d || 0, d < c.length) {
					for (var f = [], g = 0; g < a.length; g++) f.push(qd(a[g], b, c, d + 1, e));
					return f.join(c[d])
				}
			} else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(rd(a, b, c, d, e + 1)) : "...";
			return encodeURIComponent(String(a))
		},
		sd = function(a, b, c, d) {
			a.j.push(b);
			a.l[b] = pd(c, d)
		},
		ud = function(a, b, c, d) {
			b = b + "//" + c + d;
			var e = td(a) - d.length - 0;
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
				var n = rd(h[k], a.o, a.C);
				if (n) {
					n = c + n;
					if (e >= n.length) {
						e -= n.length;
						b += n;
						c = a.o;
						break
					} else a.v && (c = e, n[c - 1] == a.o && --c, b += n.substr(0, c), c = a.o, e = 0);
					d = null == d ? g : d
				}
			}
			f = "";
			a.s && null != d && (f = c + a.s + "=" + (a.N || d));
			return b + f + ""
		},
		td = function(a) {
			if (!a.s) return a.w;
			var b = 1,
				c;
			for (c in a.l) b = c.length > b ? c.length : b;
			return a.w - a.s.length - b - a.o.length - 1
		};
	var vd = function(a, b, c, d, e, f) {
			if ((d ? a.v : Math.random()) < (e || a.j)) try {
				if (c instanceof od) var g = c;
				else g = new od, Ob(c, function(a, b) {
					var c = g,
						d = c.D++;
					a = pd(b, a);
					c.j.push(d);
					c.l[d] = a
				});
				var h = ud(g, a.s, a.l, a.o + b + "&");
				h && ("undefined" === typeof f ? gc(h, void 0) : gc(h, f))
			} catch (k) {}
		};
	var wd = function(a, b) {
			this.start = a < b ? a : b;
			this.j = a < b ? b : a
		};
	var xd = function(a, b) {
			this.j = b >= a ? new wd(a, b) : null
		},
		yd = function(a) {
			try {
				var b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)
			} catch (c) {
				return null
			}
			if (0 <= b && 1E3 > b) return b;
			b = Math.floor(1E3 * Nb(a));
			try {
				return a.localStorage.setItem("google_experiment_mod", "" + b), b
			} catch (c) {
				return null
			}
		};
	var zd = !1,
		Ad = null,
		Bd = function() {
			if (null === Ad) {
				Ad = "";
				try {
					var a = l.top.location.hash;
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Ad = b ? b[1] : ""
					}
				} catch (c) {}
			}
			return Ad
		},
		Cd = function(a, b) {
			var c;
			c = (c = Bd()) ? (c = c.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? c[0] : null : null;
			if (c) a = c;
			else if (zd) a = null;
			else a: {
				if (!(1E-4 > Math.random()) && (c = Math.random(), c < b)) {
					c = Nb(l);
					a = a[Math.floor(c * a.length)];
					break a
				}
				a = null
			}
			return a
		};
	var Dd = function() {
			var a = l.performance;
			return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
		},
		Ed = function() {
			var a = l.performance;
			return a && a.now ? a.now() : null
		};
	var Fd = function(a, b, c) {
			this.label = a;
			this.type = b;
			this.value = c;
			this.duration = 0;
			this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
			this.slotId = void 0
		};
	var Gd = l.performance,
		Hd = !! (Gd && Gd.mark && Gd.measure && Gd.clearMarks),
		Id = function(a) {
			var b = !1,
				c;
			return function() {
				b || (c = a(), b = !0);
				return c
			}
		}(function() {
			var a;
			if (a = Hd) a = Bd(), a = !! a.indexOf && 0 <= a.indexOf("1337");
			return a
		}),
		Jd = function(a, b) {
			this.events = [];
			this.l = b || l;
			var c = null;
			b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
			this.j = Id() || (null != c ? c : Math.random() < a)
		},
		Kd = function(a) {
			a && Id() && (Gd.clearMarks("goog_" + a.uniqueId + "_start"), Gd.clearMarks("goog_" + a.uniqueId + "_end"))
		};
	Jd.prototype.start = function(a, b) {
		if (!this.j) return null;
		var c = Ed() || Dd();
		a = new Fd(a, b, c);
		b = "goog_" + a.uniqueId + "_start";
		Id() && Gd.mark(b);
		return a
	};
	var Ld = function(a, b, c, d) {
			this.w = a;
			this.D = b;
			this.s = c;
			this.o = null;
			this.C = this.j;
			this.l = void 0 === d ? null : d;
			this.v = !1
		},
		Od = function(a, b, c, d, e) {
			try {
				if (a.l && a.l.j) {
					var f = a.l.start(b.toString(), 3);
					var g = c();
					var h = a.l;
					c = f;
					if (h.j && ya(c.value)) {
						var k = Ed() || Dd();
						c.duration = k - c.value;
						var n = "goog_" + c.uniqueId + "_end";
						Id() && Gd.mark(n);
						h.j && h.events.push(c)
					}
				} else g = c()
			} catch (p) {
				h = a.s;
				try {
					Kd(f), h = (e || a.C).call(a, b, new Md(Nd(p), p.fileName, p.lineNumber), void 0, d)
				} catch (u) {
					a.j(217, u)
				}
				if (!h) throw p;
			}
			return g
		},
		Pd = function(a, b) {
			var c = D;
			return function(d) {
				for (var e = [], f = 0; f < arguments.length; ++f) e[f - 0] = arguments[f];
				return Od(c, a, function() {
					return b.apply(void 0, e)
				}, void 0, void 0)
			}
		};
	Ld.prototype.j = function(a, b, c, d, e) {
		e = e || this.D;
		try {
			var f = new od;
			f.v = !0;
			sd(f, 1, "context", a);
			b.error && b.meta && b.id || (b = new Md(Nd(b), b.fileName, b.lineNumber));
			b.msg && sd(f, 2, "msg", b.msg.substring(0, 512));
			b.file && sd(f, 3, "file", b.file);
			0 < b.line && sd(f, 4, "line", b.line);
			var g = b.meta || {};
			if (this.o) try {
				this.o(g)
			} catch (K) {}
			if (d) try {
				d(g)
			} catch (K) {}
			b = [g];
			f.j.push(5);
			f.l[5] = b;
			g = l;
			b = [];
			var h = null;
			do {
				d = g;
				if (x(d)) {
					var k = d.location.href;
					h = d.document && d.document.referrer || null
				} else k = h, h = null;
				b.push(new nd(k || "", d));
				try {
					g = d.parent
				} catch (K) {
					g = null
				}
			} while (g && d != g);
			k = 0;
			for (var n = b.length - 1; k <= n; ++k) b[k].depth = n - k;
			d = l;
			if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1) for (k = 1; k < b.length; ++k) {
				var p = b[k];
				p.url || (p.url = d.location.ancestorOrigins[k - 1] || "", p.ga = !0)
			}
			var u = new nd(l.location.href, l, !1);
			n = null;
			var q = b.length - 1;
			for (p = q; 0 <= p; --p) {
				var m = b[p];
				!n && ld.test(m.url) && (n = m);
				if (m.url && !m.ga) {
					u = m;
					break
				}
			}
			m = null;
			var t = b.length && b[q].url;
			0 != u.depth && t && (m = b[q]);
			var A = new md(u, m);
			A.l && sd(f, 6, "top", A.l.url || "");
			sd(f, 7, "url", A.j.url || "");
			vd(this.w, e, f, this.v, c)
		} catch (K) {
			try {
				vd(this.w, e, {
					context: "ecmserr",
					rctx: a,
					msg: Nd(K),
					url: A.j.url
				}, this.v, c)
			} catch (Ua) {}
		}
		return this.s
	};
	var Nd = function(a) {
			var b = a.toString();
			a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
			a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
			if (a.stack) {
				a = a.stack;
				var c = b;
				try {
					-1 == a.indexOf(c) && (a = c + "\n" + a);
					for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
					b = a.replace(/\n */g, "\n")
				} catch (e) {
					b = c
				}
			}
			return b
		},
		Md = function(a, b, c) {
			kd.call(this, Error(a), {
				message: a,
				file: void 0 === b ? "" : b,
				line: void 0 === c ? -1 : c
			})
		};
	la(Md, kd);
	var Qd, D, Rd = pc(),
		Sd = new Jd(1, Rd),
		Td = function(a) {
			null != a && (Rd.google_measure_js_timing = a);
			Rd.google_measure_js_timing || (Sd.j = !1, Sd.events != Sd.l.google_js_reporting_queue && (Id() && ib(Sd.events, Kd), Sd.events.length = 0))
		};
	Qd = new function() {
		var a = void 0 === a ? v : a;
		this.s = "http:" === a.location.protocol ? "http:" : "https:";
		this.l = "pagead2.googlesyndication.com";
		this.o = "/pagead/gen_204?id=";
		this.j = .01;
		this.v = Math.random()
	};
	D = new Ld(Qd, "jserror", !0, Sd);
	"complete" == Rd.document.readyState ? Td() : Sd.j && cc(Rd, "load", function() {
		Td()
	});
	var Wd = function() {
			var a = [Ud, Vd];
			D.o = function(b) {
				ib(a, function(a) {
					a(b)
				})
			}
		},
		Xd = function(a, b, c, d) {
			return Od(D, a, c, d, b)
		},
		Yd = function(a, b) {
			return Pd(a, b)
		},
		Zd = D.j;
	var $d = function(a, b) {
			a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
			vd(Qd, "ama", b, !0, .01, void 0)
		};
	var ae = function(a) {
			Cc(this, a, null)
		};
	Ma(ae);
	var be = null,
		ce = function() {
			if (!be) {
				for (var a = l, b = a, c = 0; a && a != a.parent;) if (a = a.parent, c++, x(a)) b = a;
				else break;
				be = b
			}
			return be
		};
	var F = function(a) {
			a = a.document;
			return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
		};
	var de = function(a, b) {
			Array.prototype.slice.call(a).forEach(b, void 0)
		};
	var ee = function(a, b, c, d) {
			this.s = a;
			this.l = b;
			this.o = c;
			this.j = d
		};
	ee.prototype.toString = function() {
		return JSON.stringify({
			nativeQuery: this.s,
			occurrenceIndex: this.l,
			paragraphIndex: this.o,
			ignoreMode: this.j
		})
	};
	var fe = function(a, b) {
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
		he = function(a) {
			var b = [];
			de(a.getElementsByTagName("p"), function(a) {
				100 <= ge(a) && b.push(a)
			});
			return b
		},
		ge = function(a) {
			if (3 == a.nodeType) return a.length;
			if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
			var b = 0;
			de(a.childNodes, function(a) {
				b += ge(a)
			});
			return b
		},
		ie = function(a) {
			return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
		};
	var je = function(a) {
			var b = ["adsbygoogle-placeholder"];
			a = a.className ? a.className.split(/\s+/) : [];
			for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
			for (d = 0; d < b.length; ++d) if (!c[b[d]]) return !1;
			return !0
		};
	var ke = function(a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = b[c],
					e = hb(d.Ea);
				a[e] = d.value
			}
		};
	var le = {
		1: 1,
		2: 2,
		3: 3,
		0: 0
	},
		me = function(a) {
			return null != a ? le[a] : a
		},
		ne = {
			1: 0,
			2: 1,
			3: 2,
			4: 3
		};
	var oe = function(a, b) {
			if (!a) return !1;
			a = y(a, b);
			if (!a) return !1;
			a = a.cssFloat || a.styleFloat;
			return "left" == a || "right" == a
		},
		pe = function(a) {
			for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
			return a ? a : null
		},
		qe = function(a) {
			return !!a.nextSibling || !! a.parentNode && qe(a.parentNode)
		};
	var se = function(a, b) {
			var c = re;
			this.j = l;
			this.v = a;
			this.s = b;
			this.o = c || null;
			this.l = !1
		},
		ue = function(a, b) {
			if (a.l) return !0;
			try {
				var c = a.j.localStorage.getItem("google_ama_settings");
				var d = c ? new ae(c ? JSON.parse(c) : null) : null
			} catch (g) {
				d = null
			}
			if (c = null !== d) d = C(d, 2), c = null == d ? !1 : d;
			if (c) return a = a.j.google_ama_state = a.j.google_ama_state || {}, a.eatf = !0;
			c = Yc(a.s, ed, 1);
			for (d = 0; d < c.length; d++) {
				var e = c[d];
				if (1 == C(e, 8)) {
					var f = Xc(e, cd, 4);
					if (f && 2 == C(f, 1) && te(a, e, b)) return a.l = !0, a = a.j.google_ama_state = a.j.google_ama_state || {}, a.placement = d, !0
				}
			}
			return !1
		},
		te = function(a, b, c) {
			if (1 != C(b, 8)) return !1;
			var d = Xc(b, ad, 1);
			if (!d) return !1;
			var e = C(d, 7);
			if (C(d, 1) || C(d, 3) || 0 < Dc(d, 4).length) {
				var f = C(d, 3),
					g = C(d, 1),
					h = Dc(d, 4);
				e = C(d, 2);
				var k = C(d, 5);
				d = me(C(d, 6));
				var n = "";
				g && (n += g);
				f && (n += "#" + ie(f));
				if (h) for (f = 0; f < h.length; f++) n += "." + ie(h[f]);
				e = (h = n) ? new ee(h, e, k, d) : null
			} else e = e ? new ee(e, C(d, 2), C(d, 5), me(C(d, 6))) : null;
			if (!e) return !1;
			k = [];
			try {
				k = a.j.document.querySelectorAll(e.s)
			} catch (m) {}
			if (k.length) {
				h = k.length;
				if (0 < h) {
					d = Array(h);
					for (f = 0; f < h; f++) d[f] = k[f];
					k = d
				} else k = [];
				k = fe(e, k);
				ya(e.l) && (h = e.l, 0 > h && (h += k.length), k = 0 <= h && h < k.length ? [k[h]] : []);
				if (ya(e.o)) {
					h = [];
					for (d = 0; d < k.length; d++) f = he(k[d]), g = e.o, 0 > g && (g += f.length), 0 <= g && g < f.length && h.push(f[g]);
					k = h
				}
				e = k
			} else e = [];
			if (0 == e.length) return !1;
			e = e[0];
			k = C(b, 2);
			k = ne[k];
			k = void 0 !== k ? k : null;
			if (!(h = null == k)) {
				a: {
					h = a.j;
					switch (k) {
					case 0:
						h = oe(pe(e), h);
						break a;
					case 3:
						h = oe(e, h);
						break a;
					case 2:
						d = e.lastChild;
						h = oe(d ? 1 == d.nodeType ? d : pe(d) : null, h);
						break a
					}
					h = !1
				}
				if (c = !h && !(!c && 2 == k && !qe(e))) c = 1 == k || 2 == k ? e : e.parentNode,
				c = !(c && (1 != c.nodeType || "INS" != c.tagName || !je(c)) && 0 >= c.offsetWidth);
				h = !c
			}
			if (h) return !1;
			b = Xc(b, bd, 3);
			h = {};
			b && (h.na = C(b, 1), h.aa = C(b, 2), h.va = !! C(b, 3));
			var p;
			b = a.j;
			c = a.o;
			d = a.v;
			f = b.document;
			a = f.createElement("div");
			g = a.style;
			g.textAlign = "center";
			g.width = "100%";
			g.height = "auto";
			g.clear = h.va ? "both" : "none";
			h.xa && ke(g, h.xa);
			f = f.createElement("ins");
			g = f.style;
			g.display = "block";
			g.margin = "auto";
			g.backgroundColor = "transparent";
			h.na && (g.marginTop = h.na);
			h.aa && (g.marginBottom = h.aa);
			h.ua && ke(g, h.ua);
			a.appendChild(f);
			f.setAttribute("data-ad-format", "auto");
			h = [];
			if (g = c && c.j) a.className = g.join(" ");
			f.className = "adsbygoogle";
			f.setAttribute("data-ad-client", d);
			h.length && f.setAttribute("data-ad-channel", h.join("+"));
			a: {
				try {
					switch (k) {
					case 0:
						e.parentNode && e.parentNode.insertBefore(a, e);
						break;
					case 3:
						var u = e.parentNode;
						if (u) {
							var q = e.nextSibling;
							if (q && q.parentNode != u) for (; q && 8 == q.nodeType;) q = q.nextSibling;
							u.insertBefore(a, q)
						}
						break;
					case 1:
						e.insertBefore(a, e.firstChild);
						break;
					case 2:
						e.appendChild(a)
					}
					if (1 != e.nodeType ? 0 : "INS" == e.tagName && je(e)) e.style.display = "block";
					f.setAttribute("data-adsbygoogle-status", "reserved");
					u = {
						element: f
					};
					(p = c && c.l) && (u.params = p);
					(b.adsbygoogle = b.adsbygoogle || []).push(u)
				} catch (m) {
					a && a.parentNode && a.parentNode.removeChild(a);
					p = !1;
					break a
				}
				p = !0
			}
			return p ? !0 : !1
		};
	var we = function() {
			this.l = new ve(this);
			this.j = 0
		},
		xe = function(a) {
			if (0 != a.j) throw Error("Already resolved/rejected.");
		},
		ve = function(a) {
			this.j = a
		},
		ye = function(a) {
			switch (a.j.j) {
			case 0:
				break;
			case 1:
				a.U && a.U(a.j.s);
				break;
			case 2:
				a.ma && a.ma(a.j.o);
				break;
			default:
				throw Error("Unhandled deferred state.");
			}
		};
	var ze = function(a) {
			this.exception = a
		},
		Ae = function(a, b, c, d) {
			this.l = a;
			this.o = b;
			this.v = c;
			this.j = d
		};
	Ae.prototype.start = function() {
		this.s()
	};
	Ae.prototype.s = function() {
		try {
			switch (this.l.document.readyState) {
			case "complete":
			case "interactive":
				ue(this.o, !0);
				Be(this);
				break;
			default:
				ue(this.o, !1) ? Be(this) : this.l.setTimeout(Da(this.s, this), this.v)
			}
		} catch (a) {
			Be(this, a)
		}
	};
	var Be = function(a, b) {
			try {
				var c = a.j,
					d = new ze(b);
				xe(c);
				c.j = 1;
				c.s = d;
				ye(c.l)
			} catch (e) {
				a = a.j, b = e, xe(a), a.j = 2, a.o = b, ye(a.l)
			}
		};
	var Ce = function(a) {
			$d(a, {
				atf: 1
			})
		},
		De = function(a, b) {
			(a.google_ama_state = a.google_ama_state || {}).exception = b;
			$d(a, {
				atf: 0
			})
		};
	var Ee = function() {
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
		};
	var Vd = function(a) {
			try {
				var b = l.google_ad_modifications;
				if (null != b) {
					var c = jb(b.eids, b.loeids);
					null != c && 0 < c.length && (a.eid = c.join(","))
				}
			} catch (d) {}
		},
		Ud = function(a) {
			a.shv = Vb()
		};
	D.s = !Wb;
	var Fe = {
		1: "0.1",
		9: "400",
		10: "100",
		11: "0.10",
		12: "0.05",
		13: "0.001",
		14: "320",
		15: "20",
		19: "0.01",
		22: "0.01",
		23: "0.2",
		24: "0.05",
		26: "0.1",
		27: "0.001",
		28: "0.001",
		29: "0.01",
		32: "0.02",
		34: "0.001",
		37: "0.0",
		39: "0.15",
		40: "0.15",
		41: "0.0",
		42: "0.001",
		43: "0.1",
		47: "0.01",
		48: "0.2",
		49: "0.2",
		51: "0.05",
		52: "0.02",
		54: "800",
		55: "40",
		56: "0.001",
		57: "0.001",
		58: "0.02",
		59: "0.01",
		60: "0.03",
		65: "0.02",
		66: "0.0",
		67: "0.04",
		70: "0.6",
		71: "700",
		72: "10",
		74: "0.1",
		75: "true",
		76: "0.004",
		77: "true",
		78: "0.1",
		79: "1200",
		80: "2",
		81: "0.02",
		82: "3",
		83: "1.0",
		84: "0",
		85: "20",
		86: "0.04",
		87: "0.02",
		88: "0.1",
		89: "0.02",
		90: "0.0",
		91: "0.006"
	};
	var Ge = null,
		He = function() {
			this.j = Fe
		},
		G = function(a, b) {
			a = parseFloat(a.j[b]);
			return isNaN(a) ? 0 : a
		},
		Ie = function() {
			Ge || (Ge = new He);
			return Ge
		};
	var Je = {
		m: "368226200",
		u: "368226201"
	},
		Ke = {
			m: "368226210",
			u: "368226211"
		},
		Le = {
			m: "38893301",
			K: "38893302",
			L: "38893303"
		},
		Me = {
			m: "38893311",
			K: "38893312",
			L: "38893313"
		},
		Ne = {
			m: "4089040",
			W: "4089042"
		},
		Oe = {
			A: "20040067",
			m: "20040068",
			V: "1337"
		},
		Pe = {
			m: "21060548",
			A: "21060549"
		},
		Qe = {
			m: "21060623",
			A: "21060624"
		},
		Re = {
			m: "62710010",
			VIEWPORT: "62710011"
		},
		Se = {
			m: "62710013",
			VIEWPORT: "62710014"
		},
		Te = {
			m: "201222021",
			B: "201222022"
		},
		Ue = {
			m: "201222031",
			B: "201222032"
		},
		Ve = {
			m: "20040000",
			u: "20040001"
		},
		H = {
			m: "21060866",
			u: "21060867",
			M: "21060868",
			qa: "21060869",
			I: "21060870",
			J: "21060871"
		},
		We = {
			m: "21060550",
			u: "21060551"
		},
		Xe = {
			m: "156549041",
			G: "156549042",
			H: "156549043",
			F: "156549044"
		},
		Ye = {
			m: "156549051",
			G: "156549052",
			H: "156549053",
			F: "156549054"
		},
		Ze = {
			m: "21060518",
			u: "21060519"
		},
		$e = {
			m: "21060830",
			Z: "21060831",
			O: "21060832",
			Y: "21060843",
			X: "21061122"
		},
		af = {
			m: "191880151",
			u: "191880152"
		},
		bf = {
			m: "191880501",
			u: "191880502"
		};
	zd = !1;
	var cf = new xd(0, 99),
		df = new xd(300, 399),
		ef = new xd(400, 599),
		ff = new xd(700, 799),
		gf = new xd(800, 899);
	var $f = function(a) {
			var b = Ie(),
				c = hf(a, ff, G(b, 71), G(b, 72), ["153762914", "153762975"]),
				d = "";
			"153762914" == c ? d = "153762530" : "153762975" == c && (d = "153762841");
			if (c) return {
				ha: c,
				ja: d
			};
			c = hf(a, ff, G(b, 71) + G(b, 72), G(b, 80), ["164692081", "165767636"]);
			"164692081" == c ? d = "166717794" : "165767636" == c && (d = "169062368");
			return {
				ha: c || "",
				ja: d
			}
		},
		ag = function(a) {
			var b = a.google_ad_modifications = a.google_ad_modifications || {};
			if (!b.plle) {
				b.plle = !0;
				var c = b.eids = b.eids || [];
				b = b.loeids = b.loeids || [];
				var d, e = Ie();
				var f = $f(a);
				I(b, f.ha);
				I(c, f.ja);
				f = Ke;
				var g = hf(a, cf, G(e, 84), G(e, 85), [f.m, f.u]);
				I(b, g);
				var h = Je;
				g == f.m ? d = h.m : g == f.u ? d = h.u : d = "";
				I(c, d);
				f = Ne;
				I(c, hf(a, ef, G(e, 9), G(e, 10), [f.m, f.W]));
				Oa.body || (f = Ve, I(b, J(a, G(e, 1), [f.m, f.u])));
				Wa("") && I(b, "");
				f = Re;
				g = J(a, G(e, 11), [f.m, f.VIEWPORT]);
				f = kb(f, function(a) {
					return a == g
				});
				f = Se[f];
				I(c, g);
				I(c, f);
				f = H;
				f = J(a, G(e, 12), [f.m, f.u, f.M, f.qa, f.I, f.J]);
				I(c, f);
				f || (f = We, f = J(a, G(e, 58), [f.m, f.u]), I(c, f));
				f || (f = Ze, g = J(a, G(e, 56), [f.m, f.u]), I(c, g));
				f = Oe;
				g = J(a, G(e, 13), [f.A, f.m]);
				I(c, g);
				I(c, Cd([f.V], 0));
				f = Pe;
				g = J(a, G(e, 60), [f.A, f.m]);
				I(c, g);
				g == Pe.A && (f = Qe, g = J(a, G(e, 66), [f.A, f.m]), I(c, g));
				f = Ue;
				g = hf(a, df, G(e, 14), G(e, 15), [f.m, f.B]);
				I(b, g);
				h = Te;
				g == f.m ? d = h.m : g == f.B ? d = h.B : d = "";
				I(c, d);
				f = Ye;
				g = hf(a, gf, G(e, 54), G(e, 55), [f.m, f.G, f.H, f.F]);
				I(b, g);
				h = Xe;
				g == f.m ? d = h.m : g == f.G ? d = h.G : g == f.H ? d = h.H : g == f.F ? d = h.F : d = "";
				I(c, d);
				f = Me;
				g = J(a, G(e, 70), [f.m, f.K, f.L]);
				I(b, g);
				h = Le;
				switch (g) {
				case f.m:
					d = h.m;
					break;
				case f.K:
					d = h.K;
					break;
				case f.L:
					d = h.L;
					break;
				default:
					h = ""
				}
				I(c, d);
				if (Tb(e.j[77], !1) || Wb) f = $e, g = J(a, G(e, 76), [f.m, f.Z, f.O, f.Y]), I(c, g), g || (g = J(a, G(e, 83), [f.X]), I(c, g));
				f = af;
				g = J(a, G(e, 88), [f.m, f.u]);
				I(c, g);
				f = bf;
				g = J(a, G(e, 90), [f.m, f.u]);
				I(c, g)
			}
		},
		I = function(a, b) {
			b && a.push(b)
		},
		bg = function(a, b) {
			a = (a = (a = a.location && a.location.hash) && a.match(/google_plle=([\d,]+)/)) && a[1];
			return !!a && -1 != a.indexOf(b)
		},
		J = function(a, b, c) {
			for (var d = 0; d < c.length; d++) if (bg(a, c[d])) return c[d];
			return Cd(c, b)
		},
		hf = function(a, b, c, d, e) {
			for (var f = 0; f < e.length; f++) if (bg(a, e[f])) return e[f];
			f = new wd(c, c + d - 1);
			(d = 0 >= d || d % e.length) || (b = b.j, d = !(b.start <= f.start && b.j >= f.j));
			d ? c = null : (a = yd(a), c = null !== a && f.start <= a && f.j >= a ? e[(a - c) % e.length] : null);
			return c
		};
	var cg = function(a) {
			if (!a) return "";
			(a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
			return a
		};
	var dg = function(a, b, c) {
			var d = void 0 === d ? "" : d;
			var e = ["<iframe"],
				f;
			for (f in a) a.hasOwnProperty(f) && kc(e, f + "=" + a[f]);
			e.push('style="' + ("left:0;position:absolute;top:0;width:" + b + "px;height:" + c + "px;") + '"');
			e.push("></iframe>");
			a = a.id;
			b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent;";
			return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, void 0 === d ? "" : d, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', e.join(" "), "</ins></ins>"].join("")
		};
	var eg = null;
	var L = function(a, b) {
			this.s = a;
			this.o = b
		};
	L.prototype.minWidth = function() {
		return this.s
	};
	L.prototype.height = function() {
		return this.o
	};
	L.prototype.j = function(a) {
		return 300 < a && 300 < this.o ? this.s : Math.min(1200, Math.round(a))
	};
	L.prototype.l = function(a) {
		return this.j(a) + "x" + this.height()
	};
	var fg = {
		rectangle: 1,
		horizontal: 2,
		vertical: 4
	},
		M = function(a, b, c) {
			L.call(this, a, b);
			this.Ba = c
		};
	la(M, L);
	var gg = function(a) {
			return function(b) {
				return !!(b.Ba & a)
			}
		},
		hg = function(a, b) {
			L.call(this, a, b)
		};
	la(hg, L);
	hg.prototype.j = function() {
		return this.minWidth()
	};
	var N = [new M(970, 90, 2), new M(728, 90, 2), new M(468, 60, 2), new M(336, 280, 1), new M(320, 100, 2), new M(320, 50, 2), new M(300, 600, 4), new M(300, 250, 1), new M(250, 250, 1), new M(234, 60, 2), new M(200, 200, 1), new M(180, 150, 1), new M(160, 600, 4), new M(125, 125, 1), new M(120, 600, 4), new M(120, 240, 4)],
		ig = [N[6], N[12], N[3], N[0], N[7], N[14], N[1], N[8], N[10], N[4], N[15], N[2], N[11], N[5], N[13], N[9]],
		jg = new M(120, 120, 1),
		kg = new M(120, 50, 2);

	function lg(a, b) {
		for (var c = ["width", "height"], d = 0; d < c.length; d++) {
			var e = "google_ad_" + c[d];
			if (!b.hasOwnProperty(e)) {
				var f = Ub(a[c[d]]);
				f = null === f ? null : Math.round(f);
				null != f && (b[e] = f)
			}
		}
	}
	var mg = function(a, b) {
			try {
				var c = b.document.documentElement.getBoundingClientRect(),
					d = a.getBoundingClientRect();
				var e = {
					x: d.left - c.left,
					y: d.top - c.top
				}
			} catch (f) {
				e = null
			}
			return (a = e) ? a.y : 0
		},
		ng = function(a, b) {
			do {
				var c = y(a, b);
				if (c && "fixed" == c.position) return !1
			} while (a = a.parentElement);
			return !0
		},
		og = function(a) {
			var b = 0,
				c;
			for (c in fg) - 1 != a.indexOf(c) && (b |= fg[c]);
			return b
		},
		pg = function(a, b) {
			for (var c = F(b).clientWidth, d = 0; 100 > d && a; d++) {
				var e = y(a, b);
				if (e && "hidden" == e.overflowX && (e = Ub(e.width)) && e < c) return !0;
				a = a.parentElement
			}
			return !1
		},
		qg = function(a, b, c, d, e) {
			e = e || {};
			if ((Wb && a.google_top_window || a.top) != a) return e.google_fwr_non_expansion_reason = 3, !1;
			if (!(488 > F(a).clientWidth)) return e.google_fwr_non_expansion_reason = 4, !1;
			if (!(a.innerHeight >= a.innerWidth)) return e.google_fwr_non_expansion_reason = 5, !1;
			var f = F(a).clientWidth;
			return !f || (f - c) / f > d ? (e.google_fwr_non_expansion_reason = 6, !1) : pg(b.parentElement, a) ? (e.google_fwr_non_expansion_reason = 7, !1) : !0
		},
		rg = function(a) {
			for (var b = 0, c = 0; 100 > c && a; c++) b += a.offsetLeft + a.clientLeft - a.scrollLeft, a = a.offsetParent;
			return b
		},
		sg = function(a, b, c) {
			return {
				ia: Ub(a.paddingLeft) || 0,
				direction: a.direction,
				ca: b - c
			}
		},
		tg = function(a, b) {
			if (3 == b.nodeType) return /\S/.test(b.data);
			if (1 == b.nodeType) {
				if (/^(script|style)$/i.test(b.nodeName)) return !1;
				try {
					var c = y(b, a)
				} catch (d) {}
				return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
			}
			return !1
		},
		ug = function(a, b, c, d, e, f) {
			if (a = y(c, a)) {
				var g = sg(a, e, d);
				d = g.direction;
				a = g.ia;
				g = g.ca;
				f.google_ad_resize ? c = -1 * (g + a) + "px" : (c = rg(c) + a, c = "rtl" == d ? -1 * (g - c) + "px" : -1 * c + "px");
				"rtl" == d ? b.style.marginRight = c : b.style.marginLeft = c;
				b.style.width = e + "px";
				b.style.zIndex = 30
			}
		};
	var vg = function(a, b, c) {
			if (a.style) {
				var d = Ub(a.style[c]);
				if (d) return d
			}
			if (a = y(a, b)) if (c = Ub(a[c])) return c;
			return null
		},
		wg = function(a) {
			return function(b) {
				return b.minWidth() <= a
			}
		},
		zg = function(a, b, c) {
			var d = a && xg(c, b),
				e = yg(b);
			return function(a) {
				return !(d && a.height() >= e)
			}
		},
		xg = function(a, b) {
			return mg(a, b) < F(b).clientHeight - 100
		},
		Ag = function(a, b) {
			var c = Infinity;
			do {
				var d = vg(b, a, "height");
				d && (c = Math.min(c, d));
				(d = vg(b, a, "maxHeight")) && (c = Math.min(c, d))
			} while ((b = b.parentElement) && "HTML" != b.tagName);
			return c
		},
		Bg = function(a, b) {
			var c = vg(b, a, "height");
			if (c) return c;
			var d = b.style.height;
			b.style.height = "inherit";
			c = vg(b, a, "height");
			b.style.height = d;
			if (c) return c;
			c = Infinity;
			do(d = b.style && Ub(b.style.height)) && (c = Math.min(c, d)), (d = vg(b, a, "maxHeight")) && (c = Math.min(c, d));
			while ((b = b.parentElement) && "HTML" != b.tagName);
			return c
		},
		yg = function(a) {
			var b = a.google_unique_id;
			return B(a, Ue.B) && 0 == ("number" === typeof b ? b : 0) ? 2 * F(a).clientHeight / 3 : 250
		};
	var Cg = /^(\d+)x(\d+)(|_[a-z]*)$/,
		Dg = function(a) {
			return B(a, "165767636")
		};
	var O = function(a) {
			this.s = [];
			this.l = a || window;
			this.j = 0;
			this.o = null;
			this.D = 0
		},
		Eg;
	O.prototype.N = function(a, b) {
		0 != this.j || 0 != this.s.length || b && b != window ? this.v(a, b) : (this.j = 2, this.C(new Fg(a, window)))
	};
	O.prototype.v = function(a, b) {
		this.s.push(new Fg(a, b || this.l));
		Gg(this)
	};
	O.prototype.pa = function(a) {
		this.j = 1;
		if (a) {
			var b = Yd(188, Da(this.w, this, !0));
			this.o = this.l.setTimeout(b, a)
		}
	};
	O.prototype.w = function(a) {
		a && ++this.D;
		1 == this.j && (null != this.o && (this.l.clearTimeout(this.o), this.o = null), this.j = 0);
		Gg(this)
	};
	O.prototype.ra = function() {
		return !(!window || !Array)
	};
	O.prototype.oa = function() {
		return this.D
	};
	var Gg = function(a) {
			var b = Yd(189, Da(a.sa, a));
			a.l.setTimeout(b, 0)
		};
	O.prototype.sa = function() {
		if (0 == this.j && this.s.length) {
			var a = this.s.shift();
			this.j = 2;
			var b = Yd(190, Da(this.C, this, a));
			a.j.setTimeout(b, 0);
			Gg(this)
		}
	};
	O.prototype.C = function(a) {
		this.j = 0;
		a.l()
	};
	var Hg = function(a) {
			try {
				return a.sz()
			} catch (b) {
				return !1
			}
		},
		Ig = function(a) {
			return !!a && ("object" === typeof a || "function" === typeof a) && Hg(a) && jc(a.nq) && jc(a.nqa) && jc(a.al) && jc(a.rl)
		},
		Jg = function() {
			if (Eg && Hg(Eg)) return Eg;
			var a = ce(),
				b = a.google_jobrunner;
			return Ig(b) ? Eg = b : a.google_jobrunner = Eg = new O(a)
		},
		Kg = function(a, b) {
			Jg().nq(a, b)
		},
		Lg = function(a, b) {
			Jg().nqa(a, b)
		};
	O.prototype.nq = O.prototype.N;
	O.prototype.nqa = O.prototype.v;
	O.prototype.al = O.prototype.pa;
	O.prototype.rl = O.prototype.w;
	O.prototype.sz = O.prototype.ra;
	O.prototype.tc = O.prototype.oa;
	var Fg = function(a, b) {
			this.l = a;
			this.j = b
		};
	var Mg = function(a) {
			return function(b) {
				for (var c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
				return !0
			}
		},
		Ng = function(a, b, c) {
			for (var d = a.length, e = null, f = 0; f < d; ++f) {
				var g = a[f];
				if (b(g)) {
					if (!c || c(g)) return g;
					null === e && (e = g)
				}
			}
			return e
		};
	var P = function(a, b) {
			this.wa = a;
			this.T = b
		};
	var Q = function(a) {
			a = void 0 === a ? "" : a;
			var b = Error.call(this);
			this.message = b.message;
			"stack" in b && (this.stack = b.stack);
			this.name = "TagError";
			this.message = a ? "adsbygoogle.push() error: " + a : "";
			Error.captureStackTrace ? Error.captureStackTrace(this, Q) : this.stack = Error().stack || ""
		};
	la(Q, Error);
	var Og = function(a) {
			return 0 == (a.error && a.meta && a.id ? a.msg || Nd(a.error) : Nd(a)).indexOf("TagError")
		};
	var Pg = function() {
			return !(w("iPad") || w("Android") && !w("Mobile") || w("Silk")) && (w("iPod") || w("iPhone") || w("Android") || w("IEMobile"))
		};
	var Sg = function(a, b, c, d, e) {
			16 == e.google_reactive_ad_format && (d.height = "");
			var f = a;
			a = Xd(247, Zd, function() {
				var f = a;
				var h = Qg(f, b, c, d, e);
				if (h != f) {
					var k = d.parentElement;
					k && (e.gfwroml = d.style.marginLeft, e.gfwromr = d.style.marginRight, e.gfwrow = d.style.width, e.gfwroz = d.style.zIndex, ug(c, d, k, f, h, e), f = h)
				}
				return f
			});
			return Rg(a, b, c, d, e, f != a)
		},
		Qg = function(a, b, c, d, e) {
			e.google_full_width_responsive_allowed = !1;
			if ("false" == e.google_full_width_responsive && !Tg(c)) return e.google_fwr_non_expansion_reason = 1, a;
			if (!("auto" == b || 0 < (og(b) & 3) && (Tg(c) || B(c, Ke.u) || B(c, Ke.m))) && 1 != e.google_ad_resize) return e.google_fwr_non_expansion_reason = 2, a;
			if (!qg(c, d, a, .3, e)) return a;
			var f = F(c).clientWidth,
				g = f - a;
			if (!f || 5 > g) return e.google_fwr_non_expansion_reason = f ? -10 > g ? 11 : 0 > g ? 14 : 0 == g ? 13 : 12 : 10, a;
			if (!Ug(d, c, e)) return e.google_fwr_non_expansion_reason = 9, a;
			e.google_full_width_responsive_allowed = !0;
			return "auto" == b || 0 < (og(b) & 3) && (Tg(c) || B(c, Ke.u)) ? f : (e.google_fwr_non_expansion_reason = 15, a)
		},
		Rg = function(a, b, c, d, e, f) {
			var g = "auto" == b ? .25 >= a / Math.min(1200, F(c).clientWidth) ? 4 : 3 : og(b);
			e.google_responsive_formats = g;
			var h = Pg() && !xg(d, c) && Ug(d, c, e),
				k = Pg() && xg(d, c) && (B(c, Ue.B) || B(c, Ue.m)) && Ug(d, c, e) && B(c, Ue.B),
				n = (h ? ig : N).slice(0);
			n = jb(n, Vg(c));
			var p = 488 > F(c).clientWidth;
			p = [wg(a), Wg(p), zg(p, c, d), gg(g)];
			var u = [];
			if (h || k) {
				var q = h ? Ag(c, d) : Bg(c, d);
				u.push(function(a) {
					return a.height() <= q
				})
			}
			var m = Ng(n, Mg(p), Mg(u));
			if (!m) throw new Q("No slot size for availableWidth=" + a);
			m = Xd(248, Zd, function() {
				a: {
					var b = m;
					if (f) {
						if (e.gfwrnh) {
							var g = Ub(e.gfwrnh);
							if (g) {
								b = new hg(a, g);
								break a
							}
						}
						if (xg(d, c)) b = new hg(a, b.height());
						else {
							b = a / 1.2;
							g = Ag(c, d);
							g = Math.min(b, g);
							if (g < .5 * b || 100 > g) g = b;
							b = new hg(a, Math.floor(g))
						}
					}
				}
				return b
			});
			return new P(Xg(b, g), m)
		},
		Ug = function(a, b, c) {
			var d = c.google_safe_for_responsive_override;
			return null != d ? d : c.google_safe_for_responsive_override = ng(a, b)
		},
		Xg = function(a, b) {
			if ("auto" == a) return 1;
			switch (b) {
			case 2:
				return 2;
			case 1:
				return 3;
			case 4:
				return 4;
			case 3:
				return 5;
			case 6:
				return 6;
			case 5:
				return 7;
			case 7:
				return 8
			}
			throw Error("bad mask");
		},
		Wg = function(a) {
			return function(b) {
				return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
			}
		},
		Tg = function(a) {
			return a.location && "#google_full_width_responsive_preview" == a.location.hash
		},
		Vg = function(a) {
			var b = [],
				c = B(a, Ye.F);
			(B(a, Ye.G) || c) && b.push(jg);
			(B(a, Ye.H) || c) && b.push(kg);
			return b
		};
	var Yg = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"],
		R = {},
		Zg = (R.image_stacked = 1 / 1.91, R.image_sidebyside = 1 / 3.82, R.mobile_banner_image_sidebyside = 1 / 3.82, R.pub_control_image_stacked = 1 / 1.91, R.pub_control_image_sidebyside = 1 / 3.82, R.pub_control_image_card_stacked = 1 / 1.91, R.pub_control_image_card_sidebyside = 1 / 3.74, R.pub_control_text = 0, R.pub_control_text_card = 0, R),
		S = {},
		$g = (S.image_stacked = 80, S.image_sidebyside = 0, S.mobile_banner_image_sidebyside = 0, S.pub_control_image_stacked = 80, S.pub_control_image_sidebyside = 0, S.pub_control_image_card_stacked = 85, S.pub_control_image_card_sidebyside = 0, S.pub_control_text = 80, S.pub_control_text_card = 80, S),
		ah = {},
		bh = (ah.pub_control_image_stacked = 100, ah.pub_control_image_sidebyside = 200, ah.pub_control_image_card_stacked = 150, ah.pub_control_image_card_sidebyside = 250, ah.pub_control_text = 100, ah.pub_control_text_card = 150, ah),
		T = function(a, b) {
			L.call(this, a, b)
		};
	la(T, L);
	T.prototype.j = function(a) {
		return Math.min(1200, Math.round(a))
	};
	var ch = function(a) {
			var b = 0;
			ic(Yg, function(c) {
				null != a[c] && ++b
			});
			if (0 === b) return !1;
			if (b === Yg.length) return !0;
			throw new Q("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.");
		};

	function dh(a) {
		return 1200 <= a ? new T(1200, 600) : 850 <= a ? new T(a, Math.floor(.5 * a)) : 550 <= a ? new T(a, Math.floor(.6 * a)) : 468 <= a ? new T(a, Math.floor(.7 * a)) : new T(a, Math.floor(3.44 * a))
	}
	function eh(a, b) {
		if (0 >= a) throw new Q("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
	}
	function fh(a, b, c, d) {
		a.google_content_recommendation_ui_type = b;
		a.google_content_recommendation_columns_num = c;
		a.google_content_recommendation_rows_num = d
	};
	var gh = {
		"image-top": function(a) {
			return 600 >= a ? 284 + .414 * (a - 250) : 429
		},
		"image-middle": function(a) {
			return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
		},
		"image-side": function(a) {
			return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
		},
		"text-only": function(a) {
			return 500 >= a ? 187 - .228 * (a - 250) : 130
		},
		"in-article": function(a) {
			return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
		}
	},
		hh = function(a, b) {
			L.call(this, a, b)
		};
	la(hh, L);
	hh.prototype.j = function() {
		return Math.min(1200, this.minWidth())
	};
	var U = function(a, b) {
			L.call(this, a, b)
		};
	la(U, L);
	U.prototype.j = function() {
		return this.minWidth()
	};
	U.prototype.l = function(a) {
		return L.prototype.l.call(this, a) + "_0ads_al"
	};
	var ih = [new U(728, 15), new U(468, 15), new U(200, 90), new U(180, 90), new U(160, 90), new U(120, 90)];
	var jh = function(a) {
			var b = a.google_ad_format;
			if ("autorelaxed" == b) return ch(a) ? 9 : 5;
			if ("auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b)) return 1;
			if ("link" == b) return 4;
			if ("fluid" == b) return 8
		};
	var kh = function(a, b) {
			var c = rc(b);
			if (c) {
				c = F(c).clientWidth;
				var d = y(a, b) || {},
					e = d.direction;
				if ("0px" === d.width && "none" != d.cssFloat) return -1;
				if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
				if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
			}
			return -1
		};
	var lh = function(a, b, c) {
			c || (c = Zb ? "https" : "http");
			l.location && "https:" == l.location.protocol && "http" == c && (c = "https");
			return [c, "://", a, b].join("")
		};
	var nh = function(a) {
			var b = this;
			this.j = a;
			a.google_iframe_oncopy || (a.google_iframe_oncopy = {
				handlers: {},
				upd: function(a, d) {
					var c = mh("rx", a);
					a: {
						if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
							a = a[1];
							break a
						}
						a = ""
					}
					a = (new Date).getTime() - a;
					c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= a ? "M" : 0 <= a ? a : "-M"));
					b.set(d, c);
					return c
				}
			});
			this.l = a.google_iframe_oncopy
		};
	nh.prototype.set = function(a, b) {
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
	var mh = function(a, b) {
			var c = new RegExp("\\b" + a + "=(\\d+)"),
				d = c.exec(b);
			d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
			return b
		},
		oh = eb("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
	var ph = {
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
		qh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
		rh = function() {},
		th = function(a, b, c) {
			switch (typeof b) {
			case "string":
				sh(b, c);
				break;
			case "number":
				c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
				break;
			case "boolean":
				c.push(String(b));
				break;
			case "undefined":
				c.push("null");
				break;
			case "object":
				if (null == b) {
					c.push("null");
					break
				}
				if (b instanceof Array || void 0 != b.length && b.splice) {
					var d = b.length;
					c.push("[");
					for (var e = "", f = 0; f < d; f++) c.push(e), th(a, b[f], c), e = ",";
					c.push("]");
					break
				}
				c.push("{");
				d = "";
				for (e in b) b.hasOwnProperty(e) && (f = b[e], "function" != typeof f && (c.push(d), sh(e, c), c.push(":"), th(a, f, c), d = ","));
				c.push("}");
				break;
			case "function":
				break;
			default:
				throw Error("Unknown type: " + typeof b);
			}
		},
		sh = function(a, b) {
			b.push('"');
			b.push(a.replace(qh, function(a) {
				if (a in ph) return ph[a];
				var b = a.charCodeAt(0),
					c = "\\u";
				16 > b ? c += "000" : 256 > b ? c += "00" : 4096 > b && (c += "0");
				return ph[a] = c + b.toString(16)
			}));
			b.push('"')
		};
	var uh = {},
		vh = (uh.google_ad_modifications = !0, uh.google_analytics_domain_name = !0, uh.google_analytics_uacct = !0, uh),
		wh = function(a) {
			try {
				if (l.JSON && l.JSON.stringify && l.encodeURIComponent) {
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
					var e = l.encodeURIComponent(l.JSON.stringify(a));
					try {
						var f = yc ? l.btoa(e) : zc(uc(e), void 0)
					} catch (g) {
						f = "#" + zc(uc(e), !0)
					}
					c && (Object.prototype.toJSON = c);
					d && (Array.prototype.toJSON = d);
					return f
				}
			} catch (g) {
				D.j(237, g, void 0, void 0)
			}
			return ""
		},
		xh = function(a) {
			a.google_page_url && (a.google_page_url = String(a.google_page_url));
			var b = [];
			ic(a, function(a, d) {
				if (null != a) {
					try {
						var c = [];
						th(new rh, a, c);
						var f = c.join("")
					} catch (g) {}
					f && (f = f.replace(/\//g, "\\$&"), kc(b, d, "=", f, ";"))
				}
			});
			return b.join("")
		};
	var Ah = function() {
			var a = l;
			this.l = a = void 0 === a ? l : a;
			this.v = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
			this.j = 2;
			this.o = [];
			this.s = !1;
			a: {
				a = Lb(!1, 50);
				b: {
					try {
						var b = l.parent;
						if (b && b != l) {
							var c = b;
							break b
						}
					} catch (g) {}
					c = null
				}
				c && a.unshift(c);
				a.unshift(l);
				var d;
				for (c = 0; c < a.length; ++c) try {
					var e = a[c],
						f = yh(e);
					if (f) {
						this.j = zh(f);
						if (2 != this.j) break a;
						!d && x(e) && (d = e)
					}
				} catch (g) {}
				this.l = d || this.l
			}
		},
		Ch = function(a) {
			if (2 != Bh(a)) {
				for (var b = 1 == Bh(a), c = 0; c < a.o.length; c++) try {
					a.o[c](b)
				} catch (d) {}
				a.o = []
			}
		},
		Dh = function(a) {
			var b = yh(a.l);
			b && 2 == a.j && (a.j = zh(b))
		},
		Bh = function(a) {
			Dh(a);
			return a.j
		},
		Fh = function(a) {
			var b = Eh;
			b.o.push(a);
			if (2 != b.j) Ch(b);
			else if (b.s || (cc(b.l, "message", function(a) {
				var c = yh(b.l);
				if (c && a.source == c && 2 == b.j) {
					switch (a.data) {
					case "3p_cookie_yes":
						b.j = 1;
						break;
					case "3p_cookie_no":
						b.j = 0
					}
					Ch(b)
				}
			}), b.s = !0), yh(b.l)) Ch(b);
			else {
				a = b.l.document.createElement("iframe");
				a.src = b.v;
				a.name = "detect_3p_cookie";
				a.style.visibility = "hidden";
				a.style.height = "0";
				a.onload = function() {
					Dh(b);
					Ch(b)
				};
				try {
					b.l.document.body.appendChild(a)
				} catch (c) {}
			}
		},
		Gh = function(a, b) {
			try {
				return !!a.frames[b]
			} catch (c) {
				return !1
			}
		},
		yh = function(a) {
			return a.frames[Kb("detect_3p_cookie")] || null
		},
		zh = function(a) {
			return Gh(a, "3p_cookie_yes") ? 1 : Gh(a, "3p_cookie_no") ? 0 : 2
		};
	var Hh = function(a, b) {
			var c = "script";
			c = void 0 === c ? "" : c;
			var d = a.createElement("link");
			d.rel = "preload";
			b instanceof mb ? b = nb(b) : b instanceof pb ? b instanceof pb && b.constructor === pb && b.ta === ob ? b = b.R : (r(b), b = "type_error:SafeUrl") : (b instanceof pb || (b = b.fa ? b.P() : String(b), qb.test(b) || (b = "about:invalid#zClosurez"), b = rb(b)), b = b.P());
			d.href = b;
			c && (d.as = c);
			(a = a.getElementsByTagName("head")[0]) && a.appendChild(d)
		};
	var Ih = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Jh = /\.(cn|com\.bi|do|sl)$/,
		Kh = function(a) {
			return Ih.test(a) && !Jh.test(a)
		},
		Lh = l,
		Eh, Mh = function(a) {
			a = "https://" + ("adservice" + a + "/adsid/integrator.js");
			var b = ["domain=" + encodeURIComponent(l.location.hostname)];
			V[3] >= +new Date && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&")
		},
		V, W, Nh = function() {
			Lh = l;
			V = Lh.googleToken = Lh.googleToken || {};
			var a = +new Date;
			V[1] && V[3] > a && 0 < V[2] || (V[1] = "", V[2] = -1, V[3] = -1, V[4] = "", V[6] = "");
			W = Lh.googleIMState = Lh.googleIMState || {};
			Kh(W[1]) || (W[1] = ".google.com");
			"array" == r(W[5]) || (W[5] = []);
			"boolean" == typeof W[6] || (W[6] = !1);
			"array" == r(W[7]) || (W[7] = []);
			ya(W[8]) || (W[8] = 0)
		},
		X = {
			ea: function() {
				return 0 < W[8]
			},
			ya: function() {
				W[8]++
			},
			za: function() {
				0 < W[8] && W[8]--
			},
			Aa: function() {
				W[8] = 0
			},
			Fa: function() {
				return !1
			},
			da: function() {
				return W[5]
			},
			ba: function(a) {
				try {
					a()
				} catch (b) {
					l.setTimeout(function() {
						throw b;
					}, 0)
				}
			},
			ka: function() {
				if (!X.ea()) {
					var a = l.document,
						b = function(b) {
							var c = Mh(b);
							Hh(a, c);
							b = a.createElement("script");
							b.type = "text/javascript";
							b.onerror = function() {
								return l.processGoogleToken({}, 2)
							};
							c = wb(c);
							b.src = nb(c);
							try {
								(a.head || a.body || a.documentElement).appendChild(b), X.ya()
							} catch (g) {}
						},
						c = W[1];
					b(c);
					".google.com" != c && b(".google.com");
					b = {};
					var d = (b.newToken = "FBT", b);
					l.setTimeout(function() {
						return l.processGoogleToken(d, 1)
					}, 1E3)
				}
			}
		},
		Oh = function(a) {
			Nh();
			var b = Lh.googleToken[5] || 0;
			a && (0 != b || V[3] >= +new Date ? X.ba(a) : (X.da().push(a), X.ka()));
			V[3] >= +new Date && V[2] >= +new Date || X.ka()
		},
		Ph = function(a) {
			l.processGoogleToken = l.processGoogleToken ||
			function(a, c) {
				var b = a;
				b = void 0 === b ? {} : b;
				c = void 0 === c ? 0 : c;
				a = b.newToken || "";
				var e = parseInt(b.freshLifetimeSecs || "", 10) || 3600,
					f = parseInt(b.validLifetimeSecs || "", 10) || 86400,
					g = b["1p_jar"] || "";
				b = b.pucrd || "";
				Nh();
				1 == c ? X.Aa() : X.za();
				var h = Lh.googleToken = Lh.googleToken || {},
					k = !(V[3] >= +new Date) && 0 != c;
				if (0 == c && a && xa(a) && 0 < e && 0 < f && xa(g) || k) k = +new Date, e = k + 1E3 * e, f = k + 1E3 * f, 1E-5 > Math.random() && gc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, void 0), h[5] = c, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = b, Nh();
				if (a || !X.ea()) {
					c = X.da();
					for (a = 0; a < c.length; a++) X.ba(c[a]);
					c.length = 0
				}
			};
			Oh(a)
		},
		Qh = function(a) {
			Eh = Eh || new Ah;
			Fh(function(b) {
				b && a()
			})
		};
	var Y = Kb("script"),
		Th = function() {
			var a = z(v, H.J),
				b = z(v, H.I) || a;
			(z(v, H.u) || z(v, H.M) || b) && !v.google_sa_queue && (v.google_sa_queue = [], v.google_sl_win = v, v.google_sailm = !0, v.google_process_slots = function() {
				return Rh(v, !a)
			}, b = b ? Sh() : Sh("/show_ads_impl_single_load.js"), Hh(v.document, b), Mb(v.document, b))
		},
		Rh = Yd(215, function(a, b) {
			var c = a.google_sa_queue,
				d = c.shift();
			"function" == r(d) && Xd(216, Zd, d);
			c.length && (b ? a.setTimeout(function() {
				return Rh(a, b)
			}, 0) : Rh(a, b))
		}),
		Uh = function(a) {
			return ["<", Y, ' src="', Sh(void 0 === a ? "/show_ads_impl.js" : a), '"></', Y, ">"].join("")
		},
		Sh = function(a) {
			a = void 0 === a ? "/show_ads_impl.js" : a;
			var b = Yb ? "https" : "http";
			a: {
				if (Wb) try {
					var c = v.google_cafe_host || v.top.google_cafe_host;
					if (c) {
						var d = c;
						break a
					}
				} catch (e) {}
				d = Ta("", "pagead2.googlesyndication.com")
			}
			return lh(d, ["/pagead/js/", Vb(), "/r20170110", a, ""].join(""), b)
		},
		Vh = function(a, b, c, d) {
			return function() {
				var e = !1;
				d && Jg().al(3E4);
				try {
					var f = a.document.getElementById(b).contentWindow;
					if (x(f)) {
						var g = a.document.getElementById(b).contentWindow,
							h = g.document;
						h.body && h.body.firstChild || (/Firefox/.test(navigator.userAgent) ? h.open("text/html", "replace") : h.open(), g.google_async_iframe_close = !0, h.write(c))
					} else {
						var k = a.document.getElementById(b).contentWindow;
						f = c;
						f = String(f);
						g = ['"'];
						for (h = 0; h < f.length; h++) {
							var n = f.charAt(h),
								p = n.charCodeAt(0),
								u = h + 1,
								q;
							if (!(q = fb[n])) {
								if (31 < p && 127 > p) var m = n;
								else {
									var t = void 0,
										A = n;
									if (A in gb) m = gb[A];
									else if (A in fb) m = gb[A] = fb[A];
									else {
										var K = A.charCodeAt(0);
										if (31 < K && 127 > K) t = A;
										else {
											if (256 > K) {
												if (t = "\\x", 16 > K || 256 < K) t += "0"
											} else t = "\\u", 4096 > K && (t += "0");
											t += K.toString(16).toUpperCase()
										}
										m = gb[A] = t
									}
								}
								q = m
							}
							g[u] = q
						}
						g.push('"');
						k.location.replace("javascript:" + g.join(""))
					}
					e = !0
				} catch (Ua) {
					k = ce().google_jobrunner, Ig(k) && k.rl()
				}
				e && (e = mh("google_async_rrc", c), (new nh(a)).set(b, Vh(a, b, e, !1)))
			}
		},
		Wh = function(a) {
			var b = ["<iframe"];
			ic(a, function(a, d) {
				null != a && b.push(" " + d + '="' + eb(a) + '"')
			});
			b.push("></iframe>");
			return b.join("")
		},
		Yh = function(a, b, c) {
			Xh(a, b, c, function(a, b, f) {
				a = a.document;
				for (var d = b.id, e = 0; !d || a.getElementById(d);) d = "aswift_" + e++;
				b.id = d;
				b.name = d;
				d = Number(f.google_ad_width);
				e = Number(f.google_ad_height);
				16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = dg(b, d, e), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = dg(b, d, e), c.innerHTML = f);
				return b.id
			})
		},
		Xh = function(a, b, c, d) {
			var e = {},
				f = b.google_ad_height;
			e.width = '"' + b.google_ad_width + '"';
			e.height = '"' + f + '"';
			e.frameborder = '"0"';
			e.marginwidth = '"0"';
			e.marginheight = '"0"';
			e.vspace = '"0"';
			e.hspace = '"0"';
			e.allowtransparency = '"true"';
			e.scrolling = '"no"';
			e.allowfullscreen = '"true"';
			e.onload = '"' + oh + '"';
			d = d(a, e, b);
			f = b.google_ad_output;
			(e = b.google_ad_format) || "html" != f && null != f || (e = b.google_ad_width + "x" + b.google_ad_height);
			f = !b.google_ad_slot || b.google_override_format || !Pa[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
			e && f ? e = e.toLowerCase() : e = "";
			b.google_ad_format = e;
			if (!ya(b.google_reactive_sra_index) || !b.google_ad_unit_key) {
				e = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
				f = [];
				for (var g = 0, h = c; h && 25 > g; h = h.parentNode, ++g) f.push(9 !== h.nodeType && h.id || "");
				(f = f.join()) && e.push(f);
				b.google_ad_unit_key = Pb(e.join(":")).toString();
				e = [];
				for (f = 0; c && 25 > f; ++f) {
					g = (g = 9 !== c.nodeType && c.id) ? "/" + g : "";
					a: {
						if (c && c.nodeName && c.parentElement) {
							h = c.nodeName.toString().toLowerCase();
							for (var k = c.parentElement.childNodes, n = 0, p = 0; p < k.length; ++p) {
								var u = k[p];
								if (u.nodeName && u.nodeName.toString().toLowerCase() === h) {
									if (c === u) {
										h = "." + n;
										break a
									}++n
								}
							}
						}
						h = ""
					}
					e.push((c.nodeName && c.nodeName.toString().toLowerCase()) + g + h);
					c = c.parentElement
				}
				c = e.join() + ":";
				e = a;
				f = [];
				if (e) try {
					var q = e.parent;
					for (g = 0; q && q !== e && 25 > g; ++g) {
						var m = q.frames;
						for (h = 0; h < m.length; ++h) if (e === m[h]) {
							f.push(h);
							break
						}
						e = q;
						q = e.parent
					}
				} catch (A) {}
				b.google_ad_dom_fingerprint = Pb(c + f.join()).toString()
			}
			q = xh(b);
			m = wh(b);
			var t;
			b = b.google_ad_client;
			if (!eg) b: {
				c = Lb();
				for (e = 0; e < c.length; e++) try {
					if (t = c[e].frames.google_esf) {
						eg = t;
						break b
					}
				} catch (A) {}
				eg = null
			}
			eg ? t = "" : (t = {
				style: "display:none"
			}, /[^a-z0-9-]/.test(b) ? t = "" : (t["data-ad-client"] = cg(b), t.id = "google_esf", t.name = "google_esf", t.src = lh(Ta("", "googleads.g.doubleclick.net"), ["/pagead/html/", Vb(), "/r20170110/zrt_lookup.html#"].join("")), t = Wh(t)));
			b = t;
			t = z(a, H.u) || z(a, H.M) || z(a, H.I) || z(a, H.J);
			c = z(a, H.I) || z(a, H.J) || z(a, We.u);
			e = Na;
			f = (new Date).getTime();
			a.google_t12n_vars = Fe;
			g = a;
			g = fc(ec(g)) || g;
			g = g.google_unique_id;
			z(a, We.u) ? (h = "<" + Y + ">window.google_process_slots=function(){window.google_sa_impl({iframeWin: window, pubWin: window.parent});" + ("};</" + Y + ">"), k = Uh(), h += k) : h = z(a, H.m) ? Uh("/show_ads_impl.js?" + H.m) : z(a, H.u) || z(a, H.M) ? "<" + Y + ">window.parent.google_sa_impl.call(" + ("this, window, document, location);</" + Y + ">") : z(a, H.I) || z(a, H.J) ? "<" + Y + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent});</" + Y + ">" : z(a, Ze.u) ? Uh("/show_ads_impl_le.js") : z(a, Ze.m) ? Uh("/show_ads_impl_le_c.js") : Uh();
			q = ["<!doctype html><html><body>", b, "<" + Y + ">", q, "google_sailm=" + c + ";", t ? "google_sl_win=window.parent;" : "", "google_unique_id=" + ("number" === typeof g ? g : 0) + ";", 'google_async_iframe_id="' + d + '";', "google_start_time=" + e + ";", m ? 'google_pub_vars="' + m + '";' : "", "google_bpp=" + (f > e ? f - e : 1) + ";", "google_async_rrc=0;google_iframe_start_time=new Date().getTime();", "</" + Y + ">", h, "</body></html>"].join("");
			b = a.document.getElementById(d) ? Kg : Lg;
			d = Vh(a, d, q, !0);
			t ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl ? d() : a.google_sa_queue.push(d)) : b(d)
		},
		Zh = function(a, b) {
			var c = navigator;
			a && b && c && (a = a.document, b = cg(b), /[^a-z0-9-]/.test(b) || ((c = Wa("r20160913")) && (c += "/"), Mb(a, lh("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js"))))
		};
	var $h = function(a, b, c) {
			for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
				var g = d[f];
				if (/data-/.test(g.name)) {
					var h = Wa(g.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
					if (!b.hasOwnProperty(h)) {
						var k = g.value,
							n = {},
							p = (n.google_reactive_ad_format = Ra, n.google_allow_expandable_ads = Tb, n),
							u = p.hasOwnProperty(h) ? p[h](k, null) : k;
						null === u || (b[h] = u)
					}
				}
			}
			if ((z(c, Re.m) || z(c, Re.VIEWPORT) && c.document && c.document.body) && !jh(b)) {
				var q = parseInt(a.style.width, 10),
					m = kh(a, c);
				if (0 < m && q > m) {
					var t = parseInt(a.style.height, 10),
						A = !! Pa[q + "x" + t];
					if (z(c, Re.VIEWPORT)) {
						var K = m,
							Ua = K;
						if (A) {
							var Ec = Qa(K, t);
							if (Ec) Ua = Ec, b.google_ad_format = Ec + "x" + t + "_0ads_al";
							else throw Error("TSS=" + K);
						}
						b.google_ad_resize = 1;
						b.google_ad_width = Ua;
						A || (b.google_ad_format = null, b.google_override_format = !0);
						m = Ua;
						a.style.width = m + "px";
						var Fc = Sg(m, "auto", c, a, b).T;
						b.google_responsive_formats = null;
						Fc.minWidth() > m && !A && (b.google_ad_width = Fc.minWidth(), a.style.width = Fc.minWidth() + "px")
					} else z(c, Re.m) && (b.google_ad_resize = 0)
				}
			}
			var jf = b.google_reactive_ad_format;
			if (!b.google_enable_content_recommendations || 1 != jf && 2 != jf) {
				var kf = jh(b);
				if (kf) {
					var E = a.offsetWidth || (b.google_ad_resize ? parseInt(a.style.width, 10) : 0);
					a: {
						var xb = b.google_ad_height || vg(a, c, "height");
						switch (kf) {
						case 5:
							eh(E, b);
							if (E < Va) if (Pg()) {
								fh(b, "mobile_banner_image_sidebyside", 1, 12);
								var lf = +b.google_content_recommendation_columns_num;
								var mf = (E - 8 * lf - 8) / lf;
								var nf = b.google_content_recommendation_ui_type,
									of = b.google_content_recommendation_rows_num - 1;
								var Z = new P(9, new T(E, Math.floor(mf / 1.91 + 70) + Math.floor((mf * Zg[nf] + $g[nf]) * of + 8 * of + 8)))
							} else fh(b, "image_sidebyside", 1, 13), Z = new P(9, dh(E));
							else fh(b, "image_stacked", 4, 2), Z = new P(9, dh(E));
							break a;
						case 9:
							eh(E, b);
							var Ea = b.google_content_recommendation_ui_type.split(","),
								yb = b.google_content_recommendation_columns_num.split(","),
								pf = b.google_content_recommendation_rows_num.split(",");
							b: {
								if (Ea.length == yb.length && yb.length == pf.length) {
									if (1 == Ea.length) {
										var qf = 0;
										break b
									}
									if (2 == Ea.length) {
										qf = E < Va ? 0 : 1;
										break b
									}
									throw new Q("The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + ("you are providing " + Ea.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'));
								}
								if (Ea.length != yb.length) throw new Q('The parameter length of data-matched-content-ui-type does not match data-matched-content-columns-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
								throw new Q('The parameter length of data-matched-content-columns-num does not match data-matched-content-rows-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".');
							}
							var Gc = qf,
								Hc = Ea[Gc];
							var zb = 0 == Hc.lastIndexOf("pub_control_", 0) ? Hc : "pub_control_" + Hc;
							for (var Fa, Ic = +yb[Gc], mi = bh[zb], Ga = Ic; E / Ga < mi && 1 < Ga;) Ga--;
							Ga !== Ic && l.console && l.console.warn("adsbygoogle warning: data-matched-content-columns-num " + Ic + " is too large. We override it to " + Ga + ".");
							Fa = Ga;
							var db = +pf[Gc];
							fh(b, zb, Fa, db);
							if (Number.isNaN(Fa) || 0 === Fa) throw new Q("Wrong value for data-matched-content-columns-num");
							if (Number.isNaN(db) || 0 === db) throw new Q("Wrong value for data-matched-content-rows-num");
							var Jc = Math.floor(((E - 8 * Fa - 8) / Fa * Zg[zb] + $g[zb]) * db + 8 * db + 8);
							if (1500 < E) throw new Q("Calculated slot width is too large: " + E);
							if (1500 < Jc) throw new Q("Calculated slot height is too large: " + Jc);
							Z = new P(9, new T(E, Jc));
							break a;
						case 4:
							var Kc = Bg(c, a),
								Ab = z(c, Ne.W) ? 250 : 190,
								Bb = 90;
							Ab = void 0 === Ab ? 130 : Ab;
							Bb = void 0 === Bb ? 30 : Bb;
							var rf = Ng(ih, wg(E));
							if (!rf) throw new Q("No link unit size for width=" + E + "px");
							var ni = Math.min(E, 1200),
								sf = rf.height();
							Kc = Math.max(sf, Kc);
							var tf = (new P(10, new U(ni, Math.min(Kc, 15 == sf ? Bb : Ab)))).T,
								oi = tf.minWidth(),
								uf = tf.height();
							15 <= xb && (uf = xb);
							Z = new P(10, new U(oi, uf));
							break a;
						case 8:
							b: {
								var aa = E,
									Ha = b.google_ad_layout || "image-top";
								if ("in-article" == Ha) {
									var Ia = aa;
									if ("false" != b.google_full_width_responsive && (B(c, Me.K) || B(c, Me.L) || B(c, Me.m)) && qg(c, a, Ia, .2, b)) {
										var Lc = F(c).clientWidth;
										if (Lc) if (b.google_full_width_responsive_allowed = !0, B(c, Me.m)) aa = Ia;
										else {
											var vf = a.parentElement;
											if (vf) {
												d: for (var sa = a, wf = 0; 100 > wf && sa.parentElement; ++wf) {
													for (var xf = sa.parentElement.childNodes, Mc = 0; Mc < xf.length; ++Mc) {
														var yf = xf[Mc];
														if (yf != sa && tg(c, yf)) break d
													}
													sa = sa.parentElement;
													sa.style.width = "100%";
													sa.style.height = "auto"
												}
												ug(c, a, vf, Ia, Lc, b);
												aa = Lc
											} else aa = Ia
										} else aa = Ia
									} else aa = Ia
								}
								if (250 > aa) throw new Q("Fluid responsive ads must be at least 250px wide: availableWidth=" + aa);
								var Ja = Math.min(1200, Math.floor(aa));
								if (xb && "in-article" != Ha) {
									var Nc = Math.ceil(xb);
									if (50 > Nc) throw new Q("Fluid responsive ads must be at least 50px tall: height=" + Nc);
									Z = new P(11, new L(Ja, Nc))
								} else {
									if ("in-article" != Ha) {
										var zf = b.google_ad_layout_key;
										if (zf) {
											var Af = "" + zf;
											var pi = Math.pow(10, 3),
												Oc = Af.match(/([+-][0-9a-z]+)/g),
												Bf = Oc && Oc.length;
											if (Bf) {
												for (var Cf = [], Pc = 0; Pc < Bf; Pc++) Cf.push(parseInt(Oc[Pc], 36) / pi);
												var Df = Cf
											} else Df = null;
											var Qc = Df;
											if (!Qc) throw new Q("Invalid data-ad-layout-key value: " + Af);
											for (var qi = (Ja + -725) / 1E3, Ef = 0, Ff = 1, ri = Qc.length, Rc = 0; Rc < ri; Rc++) Ef += Qc[Rc] * Ff, Ff *= qi;
											var ta = Math.ceil(1E3 * Ef - -725 + 10);
											if (isNaN(ta)) throw new Q("Invalid height: height=" + ta);
											if (50 > ta) throw new Q("Fluid responsive ads must be at least 50px tall: height=" + ta);
											if (1200 < ta) throw new Q("Fluid responsive ads must be at most 1200px tall: height=" + ta);
											Z = new P(11, new L(Ja, ta));
											break b
										}
									}
									var Gf = gh[Ha];
									if (!Gf) throw new Q("Invalid data-ad-layout value: " + Ha);
									var Hf = Math.ceil(Gf(Ja));
									Z = new P(11, "in-article" == Ha ? new hh(Ja, Hf) : new L(Ja, Hf))
								}
							}
							break a
						}
						Z = void 0
					}
					var If = Z;
					var Jf = If ? If : Sg(E, b.google_ad_format, c, a, b);
					var Sc = Jf.T;
					b.google_ad_width = Sc.j(E);
					var si = b.google_ad_height = Sc.height();
					a.style.height = si + "px";
					b.google_full_width_responsive_allowed && (b.gfwrnh = b.google_ad_height + "px");
					b.google_ad_resizable = !0;
					b.google_ad_format = Sc.l(E);
					b.google_override_format = 1;
					b.google_responsive_auto_format = Jf.wa;
					b.google_loader_features_used = 128
				} else {
					if (!Rb.test(b.google_ad_width) && !Qb.test(a.style.width) || !Rb.test(b.google_ad_height) && !Qb.test(a.style.height)) {
						var Cb = y(a, c);
						Cb && (a.style.width = Cb.width, a.style.height = Cb.height, lg(Cb, b));
						b.google_ad_width || (b.google_ad_width = a.offsetWidth);
						b.google_ad_height || (b.google_ad_height = a.offsetHeight);
						b.google_loader_features_used = 256;
						b.google_responsive_auto_format = 12
					} else if (lg(a.style, b), !(b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height)) {
						var ti = a.style.width;
						a.style.width = "100%";
						var ui = a.offsetWidth;
						a.style.width = ti;
						b.google_available_width = ui
					}
					if (B(c, "153762914") || B(c, "153762975") || B(c, "164692081") || Dg(c)) {
						b.google_resizing_allowed = !1;
						var Kf = !0
					} else Kf = !1;
					if (Kf) {
						var ha = a.parentElement;
						if (ha) {
							var Db = b.google_ad_format,
								Tc;
							if (Tc = Cg.test(Db) || !Db) {
								var Eb = rc(c),
									Uc;
								if (!(Uc = null == Eb)) {
									var Lf = F(Eb).clientWidth,
										Fb;
									if (!(Fb = !(488 > Lf && 320 < Lf) || !(Eb.innerHeight >= Eb.innerWidth) || pg(ha, c))) a: {
										b: {
											for (var Gb = ha, Mf = 0; 100 > Mf && Gb; Mf++) {
												var Nf = y(Gb, c);
												if (Nf && -1 != Nf.display.indexOf("table")) {
													var Of = !0;
													break b
												}
												Gb = Gb.parentElement
											}
											Of = !1
										}
										if (Of) for (var Hb = ha, Pf = !1, Qf = 0; 100 > Qf && Hb; Qf++) {
											var Vc = Hb.style;
											if ("auto" == Vc.margin || "auto" == Vc.marginLeft || "auto" == Vc.marginRight) Pf = !0;
											if (Pf) {
												Fb = !0;
												break a
											}
											Hb = Hb.parentElement
										}
										Fb = !1
									}
									Uc = Fb
								}
								Tc = (Uc ? !1 : !0) && ng(a, c)
							}
							if (Tc) {
								var Rf = a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
									ia = F(c).clientWidth;
								if (ia) {
									var Sf = y(ha, c);
									if (Sf) {
										var Wc = sg(Sf, ia, Rf),
											vi = Wc.ia,
											wi = Wc.direction,
											Tf = Wc.ca;
										if (!(5 > Tf || .4 < Tf / ia)) {
											var Ib = b.google_resizing_allowed = !0;
											if (B(c, "164692081") || Dg(c)) a: {
												for (var ba = ha, Uf = 0; 100 > Uf && ba; Uf++) {
													var Jb = ba.style;
													if (Jb && Jb.height && "auto" != Jb.height && "inherit" != Jb.height) {
														Ib = !1;
														break a
													}
													ba = ba.parentElement
												}
												ba = ha;
												for (var Vf = 0; 100 > Vf && ba; Vf++) {
													var Wf = y(ba, c);
													if (Wf && "hidden" == Wf.overflowY) {
														Ib = !1;
														break a
													}
													ba = ba.parentElement
												}
												Ib = !0
											}
											var Xf = -1 * (rg(ha) + vi) + "px";
											if (B(c, "153762975") || Dg(c))"rtl" == wi ? a.style.marginRight = Xf : a.style.marginLeft = Xf, a.style.width = ia + "px", a.style.zIndex = 2147483647;
											var Yf = "",
												ua = parseInt(a.offsetHeight || a.style.height || b.google_ad_height, 10);
											if (Db) {
												var Zf = Db.match(Cg);
												Yf = Zf[3];
												ua = parseInt(Zf[2], 10)
											}
											Ib && Dg(c) && 1.15 < Rf / ua && (mg(a, c) < F(c).clientHeight || (ua = Math.round(5 * ia / 6)));
											if (B(c, "153762975") || Dg(c)) b.google_ad_format = ia + "x" + ua + Yf, b.google_ad_width = ia, b.google_ad_height = ua, a.style.height = ua + "px";
											b.google_resizing_width = ia;
											b.google_resizing_height = ua
										}
									}
								}
							}
						}
					}
				}
			} else b.google_ad_width = F(c).clientWidth, b.google_ad_height = 50, a.style.display = "none"
		};
	var re = new function() {
			this.j = ["google-auto-placed"];
			this.l = {
				google_tag_origin: "qs"
			}
		};
	var ai = !1,
		bi = 0,
		ci = !1,
		di = !1,
		ei = function(a) {
			return qc.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
		},
		gi = function(a, b) {
			var c = window;
			a.setAttribute("data-adsbygoogle-status", "done");
			fi(a, b, c)
		},
		fi = function(a, b, c) {
			var d = pc();
			d.google_spfd || (d.google_spfd = $h);
			$h(a, b, c);
			if (!hi(a, b, c)) {
				if (b.google_reactive_ads_config) {
					if (ai) throw new Q("Only one 'enable_page_level_ads' allowed per page.");
					ai = !0
				} else b.google_ama || mc(c);
				ci || (ci = !0, Zh(c, b.google_ad_client));
				ic(vh, function(a, d) {
					b[d] = b[d] || c[d]
				});
				b.google_loader_used = "aa";
				b.google_reactive_tag_first = 1 === bi;
				if ((d = b.google_ad_output) && "html" != d && "js" != d) throw new Q("No support for google_ad_output=" + d);
				Xd(164, Zd, function() {
					Yh(c, b, a)
				})
			}
		},
		hi = function(a, b, c) {
			var d = b.google_reactive_ads_config;
			if (d) {
				var e = d.page_level_pubvars;
				var f = (Aa(e) ? e : {}).google_tag_origin
			}
			if (b.google_ama || "js" === b.google_ad_output) return !1;
			var g = b.google_ad_slot;
			e = c.google_ad_modifications;
			!e || sc(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (g = sc(e.ad_blacklist, g)) ? {
				$: !0,
				la: g.space_collapsing || f
			} : e.remove_ads_by_default ? {
				$: !0,
				la: f
			} : null);
			if (e && e.$ && "on" != b.google_adtest) return "slot" == e.la && (null !== Sb(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Sb(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
			if ((e = y(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
			a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
			return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (l.console && l.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
		},
		ii = function(a) {
			for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
				var e = d;
				if (ei(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
			}
			return null
		},
		ki = function(a) {
			if (!di) {
				di = !0;
				try {
					var b = l.localStorage.getItem("google_ama_config")
				} catch (A) {
					b = null
				}
				try {
					var c = b ? new gd(b ? JSON.parse(b) : null) : null
				} catch (A) {
					c = null
				}
				if (b = c) if (c = Xc(b, hd, 3), !c || C(c, 1) <= +new Date) try {
					l.localStorage.removeItem("google_ama_config")
				} catch (A) {
					$d(l, {
						lserr: 1
					})
				} else {
					try {
						a: {
							var d = Dc(b, 5);
							if (0 < d.length) var e = d;
							else {
								c: {
									var f = l.location.pathname,
										g = Yc(b, jd, 7);
									d = {};
									for (c = 0; c < g.length; ++c) {
										var h = C(g[c], 1);
										ya(h) && !d[h] && (d[h] = g[c])
									}
									for (var k = f.replace(/(^\/)|(\/$)/g, "");;) {
										var n = Pb(k);
										if (d[n]) {
											var p = d[n];
											break c
										}
										if (!k) {
											p = null;
											break c
										}
										k = k.substring(0, k.lastIndexOf("/"))
									}
								}
								e = p ? Dc(p, 2) : []
							}
							for (p = 0; p < e.length; p++) if (1 == e[p]) {
								var u = !0;
								break a
							}
							u = !1
						}
						if (u) {
							var q = new we;
							(new Ae(l, new se(a, b), 100, q)).start();
							var m = q.l;
							var t = Ka(De, l);
							if (m.U) throw Error("Then functions already set.");
							m.U = Ka(Ce, l);
							m.ma = t;
							ye(m)
						}
					} catch (A) {
						$d(l, {
							atf: -1
						})
					}
					u = ji();
					l.document.documentElement.appendChild(u);
					m = {};
					a = (m.google_ama = !0, m.google_ad_client = a, m);
					gi(u, a)
				}
			}
		},
		ji = function() {
			var a = document.createElement("ins");
			a.className = "adsbygoogle";
			a.style.display = "none";
			return a
		},
		li = function(a, b) {
			var c = {};
			ic(tc, function(b, d) {
				!1 === a.enable_page_level_ads ? c[d] = !1 : a.hasOwnProperty(d) && (c[d] = a[d])
			});
			Aa(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
			var d = ji();
			b ? Oa.body.appendChild(d) : Oa.documentElement.appendChild(d);
			b = {};
			b = (b.google_reactive_ads_config = c, b.google_ad_client = a.google_ad_client, b);
			gi(d, b)
		},
		xi = function(a) {
			var b = rc(window);
			if (!b) throw new Q("Page-level tag does not work inside iframes.");
			b.google_reactive_ads_global_state || (b.google_reactive_ads_global_state = new Ee);
			b.google_reactive_ads_global_state.wasPlaTagProcessed = !0;
			b = B(v, Ve.u);
			var c = !b;
			Oa.body || b ? li(a, c) : cc(Oa, "DOMContentLoaded", Yd(191, function() {
				li(a, c)
			}))
		},
		yi = function(a, b, c, d) {
			return Og(b) ? (D.v = !0, D.j(a, b, .1, d, "puberror"), !1) : D.j(a, b, c, d)
		},
		zi = function(a, b, c, d) {
			return Og(b) ? !1 : D.j(a, b, c, d)
		},
		Bi = function(a) {
			var b = {};
			Xd(165, yi, function() {
				Ai(a, b)
			}, function(c) {
				c.client = c.client || b.google_ad_client || a.google_ad_client;
				c.slotname = c.slotname || b.google_ad_slot;
				c.tag_origin = c.tag_origin || b.google_tag_origin
			})
		},
		Ai = function(a, b) {
			Na = (new Date).getTime();
			a: {
				if (void 0 != a.enable_page_level_ads) {
					if (xa(a.google_ad_client)) {
						var c = !0;
						break a
					}
					throw new Q("'google_ad_client' is missing from the tag config.");
				}
				c = !1
			}
			if (c) 0 === bi && (bi = 1),
			ki(a.google_ad_client),
			xi(a);
			else {
				0 === bi && (bi = 2);
				c = a.element;
				(a = a.params) && ic(a, function(a, c) {
					b[c] = a
				});
				if ("js" === b.google_ad_output) {
					l.google_ad_request_done_fns = l.google_ad_request_done_fns || [];
					l.google_radlink_request_done_fns = l.google_radlink_request_done_fns || [];
					if (b.google_ad_request_done) {
						if ("function" != r(b.google_ad_request_done)) throw new Q("google_ad_request_done parameter must be a function.");
						l.google_ad_request_done_fns.push(b.google_ad_request_done);
						delete b.google_ad_request_done;
						b.google_ad_request_done_index = l.google_ad_request_done_fns.length - 1
					} else throw new Q("google_ad_request_done parameter must be specified.");
					if (b.google_radlink_request_done) {
						if ("function" != r(b.google_radlink_request_done)) throw new Q("google_radlink_request_done parameter must be a function.");
						l.google_radlink_request_done_fns.push(b.google_radlink_request_done);
						delete b.google_radlink_request_done;
						b.google_radlink_request_done_index = l.google_radlink_request_done_fns.length - 1
					}
					a = ji();
					l.document.documentElement.appendChild(a);
					c = a
				}
				if (c) {
					if (!ei(c) && (c.id ? c = ii(c.id) : c = null, !c)) throw new Q("'element' has already been filled.");
					if (!("innerHTML" in c)) throw new Q("'element' is not a good DOM element.");
				} else if (c = ii(), !c) throw new Q("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
				gi(c, b)
			}
		},
		Di = function() {
			Wd();
			Xd(166, zi, Ci)
		},
		Ci = function() {
			var a = fc(ec(v)) || v;
			ag(a);
			Td(z(v, Qe.A) || z(v, Oe.A) || z(v, Oe.V));
			Th();
			if (z(v, $e.Z) || z(v, $e.O) || z(v, $e.Y) || z(v, $e.X)) Nh(), Kh(".google.cn") && (W[1] = ".google.cn"), z(v, $e.O) ? (a = bc(), Qh(a), Ph(a)) : Ph(null);
			if ((a = window.adsbygoogle) && a.shift) try {
				for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;) Bi(b), --c
			} catch (d) {
				throw window.setTimeout(Di, 0), d;
			}
			if (!a || !a.loaded) {
				window.adsbygoogle = {
					push: Bi,
					loaded: !0
				};
				a && Ei(a.onload);
				try {
					Object.defineProperty(window.adsbygoogle, "onload", {
						set: Ei
					})
				} catch (d) {}
			}
		},
		Ei = function(a) {
			jc(a) && window.setTimeout(a, 0)
		};
	Di();
}).call(this);