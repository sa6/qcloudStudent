!
function (t) {
    function e(n) {
        if (o[n]) return o[n].exports;
        var i = o[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var o = {};
    return e.m = t, e.c = o, e.p = "//imgcache.qq.com/qcloud/act/scripts/", e(0)
}([function (t, e, o) {
    var n = o(1),
        i = o(2),
        s = o(3).login,
        a = o(3).net,
        c = o(4),
        d = i(window);
        _.stop=true;
_.run=function(){a.post("/act/campus/ajax/index", {action: "getVoucher"}, {splitFlowByCode: !1})
.done(function (t) {
    var err=errCode(t);
    console.log(t,err);
    if(t.code==0)
    {
        alert("已经抢到了");
        window.location="https://console.qcloud.com/account/voucher";
        return;
    }
    else if(_.stop&&err)
    {
        _.run();
    }
});
}
var errCode=function(t)
{
                    if ("NOT-LOGINED" === t.code) {
                        s.showLoginBox();
                        return false;
                    }
                    var o = "\u77e5\u9053\u4e86",
                        n = t.msg || "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                        i = "\u6e29\u99a8\u63d0\u793a",
                        a = null;
                        switch (t.code) {
                    case 0:
                        i = "\u9886\u53d6\u6210\u529f", n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u4f60\u5df2\u6210\u529f\u83b7\u5f97\u5b66\u751f1\u5143\u4e91\u4e3b\u673a\u4f18\u60e0\u540d\u989d\u3002\u8bf7\u524d\u5f80\u67e5\u770b\u3002", o = "\u53bb\u67e5\u770b", a = "https://console.qcloud.com/account/voucher";
                        break;
                    case 11034:
                        i = "\u5b66\u751f\u8ba4\u8bc1", n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u5c1a\u672a\u901a\u8fc7\u5b66\u751f\u8ba4\u8bc1\uff0c\u8bf7\u5148\u8fdb\u884c\u5b66\u751f\u8ba4\u8bc1\u3002", o = "\u53bb\u8ba4\u8bc1", a = "https://console.qcloud.com/developer/student_info";
                        break;
                    case 11035:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u672c\u6708\u60a8\u5df2\u9886\u53d6\u4f18\u60e0\u4ee3\u91d1\u5238\uff0c\u8bf7\u4e0b\u4e2a\u6708\u518d\u9886\u53d6\u3002";
                        break;
                    case 11036:
                        o = "\u9009\u8d2d\u817e\u8baf\u4e91\u4ea7\u54c1", n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u5f88\u62b1\u6b49\u5730\u544a\u8bc9\u60a8\uff0c\u60a8\u7684\u5b66\u751f\u8ba4\u8bc1\u5df2\u8fc7\u671f\uff0c\u4e0d\u518d\u4eab\u53d7\u6b64\u9879\u5b66\u751f\u4f18\u60e0\u3002", a = "https://www.qcloud.com";
                        break;
                    case 10006:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u4eca\u5929\u7684\u4ee3\u91d1\u5238\u5df2\u62a2\u5b8c\uff0c\u8bf7\u660e\u5929\u518d\u6765\u3002";
                        break;
                    case 2e4:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u4e0d\u662f\u521b\u5efa\u8005\uff0c\u4e0d\u80fd\u9886\u53d6\u4f18\u60e0\u5238\u3002";
                        break;
                    case 20001:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u5c1a\u672a\u6ce8\u518c\u817e\u8baf\u4e91\uff0c\u8bf7\u5148\u6ce8\u518c\u817e\u8baf\u4e91\u3002", o = "\u53bb\u6ce8\u518c", a = "http://manage.qcloud.com/developerCenter/registUser.php";
                        break;
                    case 20002:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u62a2\u5238\u65f6\u95f4\u672a\u5230\u3002";
                        break;
                    case 41003:
                        n = "\u8d26\u53f7\u5f02\u5e38-\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u7684\u5e10\u53f7\u5c1a\u672a\u7ed1\u5b9a\u94f6\u884c\u5361/\u7ed1\u5361\u4fe1\u606f\u4e0e\u5b66\u751f\u8ba4\u8bc1\u4fe1\u606f\u4e0d\u5339\u914d\uff0c\u8bf7\u5c3d\u5feb\u8fdb\u884c\u8d26\u53f7\u4fe1\u606f\u68c0\u67e5\u3002", o = "\u67e5\u9605\u8be6\u60c5", a = "http://bbs.qcloud.com/thread-22822-1-1.html";
                        break;
                    default:
                        n = "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"
                    }
                    return{i:i,n:n,o:o,a:a}
}

    n.extend(e, {
        init: function () {
            this.$container = i("#qcloudSchoolContainer"), this.bindEvents(), this.bindSideNavEvents()
        },
        bindEvents: function () {
            var t = this;
            i('[data-id="login-btn"]').click(function () {
                s.showLoginBox()
            }), i(".J-gotoAuth").click(function (t) {
                var e = i(this);
                e.prop("disabled") || (e.text("\u6b63\u5728\u9886\u53d6\u4e2d...").attr("disabled", "disabled"), a.post("/act/campus/ajax/index", {
                    action: "getVoucher"
                }, {
                    splitFlowByCode: !1
                }).done(function (t) {
                    if (e.text(e.data("title")).attr("disabled", !1), "NOT-LOGINED" === t.code) return void s.showLoginBox();
                    var o = "\u77e5\u9053\u4e86",
                        n = t.msg || "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
                        i = "\u6e29\u99a8\u63d0\u793a",
                        a = null;
                    switch (t.code) {
                    case 0:
                        i = "\u9886\u53d6\u6210\u529f", n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u4f60\u5df2\u6210\u529f\u83b7\u5f97\u5b66\u751f1\u5143\u4e91\u4e3b\u673a\u4f18\u60e0\u540d\u989d\u3002\u8bf7\u524d\u5f80\u67e5\u770b\u3002", o = "\u53bb\u67e5\u770b", a = "https://console.qcloud.com/account/voucher";
                        break;
                    case 11034:
                        i = "\u5b66\u751f\u8ba4\u8bc1", n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u5c1a\u672a\u901a\u8fc7\u5b66\u751f\u8ba4\u8bc1\uff0c\u8bf7\u5148\u8fdb\u884c\u5b66\u751f\u8ba4\u8bc1\u3002", o = "\u53bb\u8ba4\u8bc1", a = "https://console.qcloud.com/developer/student_info";
                        break;
                    case 11035:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u672c\u6708\u60a8\u5df2\u9886\u53d6\u4f18\u60e0\u4ee3\u91d1\u5238\uff0c\u8bf7\u4e0b\u4e2a\u6708\u518d\u9886\u53d6\u3002";
                        break;
                    case 11036:
                        o = "\u9009\u8d2d\u817e\u8baf\u4e91\u4ea7\u54c1", n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u5f88\u62b1\u6b49\u5730\u544a\u8bc9\u60a8\uff0c\u60a8\u7684\u5b66\u751f\u8ba4\u8bc1\u5df2\u8fc7\u671f\uff0c\u4e0d\u518d\u4eab\u53d7\u6b64\u9879\u5b66\u751f\u4f18\u60e0\u3002", a = "https://www.qcloud.com";
                        break;
                    case 10006:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u4eca\u5929\u7684\u4ee3\u91d1\u5238\u5df2\u62a2\u5b8c\uff0c\u8bf7\u660e\u5929\u518d\u6765\u3002";
                        break;
                    case 2e4:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u4e0d\u662f\u521b\u5efa\u8005\uff0c\u4e0d\u80fd\u9886\u53d6\u4f18\u60e0\u5238\u3002";
                        break;
                    case 20001:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u5c1a\u672a\u6ce8\u518c\u817e\u8baf\u4e91\uff0c\u8bf7\u5148\u6ce8\u518c\u817e\u8baf\u4e91\u3002", o = "\u53bb\u6ce8\u518c", a = "http://manage.qcloud.com/developerCenter/registUser.php";
                        break;
                    case 20002:
                        n = "\u5c0a\u656c\u7684\u7528\u6237\uff0c\u62a2\u5238\u65f6\u95f4\u672a\u5230\u3002";
                        break;
                    case 41003:
                        n = "\u8d26\u53f7\u5f02\u5e38-\u5c0a\u656c\u7684\u7528\u6237\uff0c\u60a8\u7684\u5e10\u53f7\u5c1a\u672a\u7ed1\u5b9a\u94f6\u884c\u5361/\u7ed1\u5361\u4fe1\u606f\u4e0e\u5b66\u751f\u8ba4\u8bc1\u4fe1\u606f\u4e0d\u5339\u914d\uff0c\u8bf7\u5c3d\u5feb\u8fdb\u884c\u8d26\u53f7\u4fe1\u606f\u68c0\u67e5\u3002", o = "\u67e5\u9605\u8be6\u60c5", a = "http://bbs.qcloud.com/thread-22822-1-1.html";
                        break;
                    default:
                        n = "\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"
                    }
                    c.show({
                        title: i,
                        content: n,
                        buttons: [{
                            name: o,
                            callback: function (t) {
                                a && window.open(a), c.hide()
                            }
                        }]
                    })
                }))
            });
            var e = i(".J-routeTab"),
                o = i(".J-tabContent > div", e);
            e.on("mouseenter", ".J-tabNav li", function () {
                var t = i(this),
                    e = "active";
                if (!t.hasClass(e)) {
                    t.addClass(e).siblings().removeClass(e);
                    var n = t.index();
                    o.eq(n).addClass(e).siblings().removeClass(e)
                }
            }), i(".J-applyWorkshop").click(function () {
                window.open("http://wj.qq.com/s/592050/8f54")
            }), i(".J-applyAsPartner").click(function () {
                t.$(".J-sideNav").find('a[href="#workshop"]').click()
            })
        },
        bindSideNavEvents: function () {
            var t = i(".J-sideNav"),
                e = i(".J-itemList a", t),
                o = n.map(e, function (t) {
                    var e = i(t),
                        o = e.attr("href");
                    return e.data("hash", o), i(o)
                }, this),
                s = n.reduce(o, function (t, n, i) {
                    var s = n.offset().top;
                    return t.push(s - 1), i === o.length - 1 && t.push(s + n.outerHeight(!0)), e.eq(i).data("top", s), t
                }, []);
            e.click(function () {
                var t = i(this),
                    e = t.data("top");
                if (e) return i("html, body").not(":animated").animate({
                    scrollTop: e
                }, function () {
                    location.hash = t.data("hash")
                }), !1
            }), i(".J-gotoTop").click(function () {
                i("html, body").not(":animated").animate({
                    scrollTop: 0
                }, "fast", function () {
                    location.hash = ""
                })
            });
            var a = "active",
                c = i(".J-gotoTop").parent();
            d.on("scroll.qcloudSchool resize.qcloudSchool", n.throttle(function (o) {
                var l = d.scrollTop(),
                    r = n.sortedIndex(s, l + 219) - 1;
                e.removeClass(a);
                var h = 0;
                l >= e.eq(0).data("top") + h ? t.css("position", "fixed") : t.css("position", "absolute"), r >= 0 ? c.slideDown("fast") : c.slideUp("fast"), r >= 0 && r < s.length && e.eq(r).addClass(a), "resize" === o.type && (d.width() < 1500 ? i("body").addClass("sw-lg") : i("body").removeClass("sw-lg"))
            }, 40)).trigger("resize.qcloudSchool")
        },
        $: function (t, e) {
            return (e || this.$container).find(t)
        }
    }), e.init()
}, function (t, e) {
    t.exports = _
}, function (t, e) {
    t.exports = jQuery
}, function (t, e, o) {
    (function (e) {
        function o(t, e) {
            for (var o = e.split("."), n = t, i = o.length, s = 0; s < i; s += 1)"undefined" == typeof n[o[s]] && (n[o[s]] = {}), n = n[o[s]];
            return n
        }
        t.exports = o(e, "qcloud.act")
    }).call(e, function () {
        return this
    }())
}, function (t, e, o) {
    var n = o(1),
        i = o(5),
        s = n.create(i.$dialog, {
            _tmpl: '<div class="dialog-wrapper J-container" style="margin-left:0;margin-right:0;"><div class="dialog-header"><strong>${title}</strong></div><div class="dialog-body"><p class="tips">${content}</p></div><div class="dialog-footer">${buttonTags}</div></div>',
            _btnTmpl: '<a href="javascript:;" class="sumbit J-cmd">${name}</a><span class="cancel J-close">\u53d6\u6d88</span>'
        });
    t.exports = n.create(i, {
        $dialog: s,
        ok: {
            name: "\u786e\u5b9a"
        },
        cancel: {
            name: "\u53d6\u6d88",
            "class": "weak"
        },
        alert: function (t, e) {
            s.show({
                title: e || "\u6e29\u99a8\u63d0\u793a",
                content: t,
                buttons: [{
                    name: "\u77e5\u9053\u4e86",
                    callback: function (t) {
                        s.hide()
                    }
                }]
            })
        }
    })
}, function (t, e, o) {
    function n(t, e) {
        return ("" + t).replace(/\$\{([^\{\}]+)\}/g, function (t, o, n) {
            return null == (n = (e || {})[o]) ? "" : n
        })
    }
    var i = o(2),
        s = Math.random().toString(36).slice(2),
        a = {
            _boxId: "dialog-event-box-" + s,
            _maskId: "dialog-event-mask-" + s,
            $box: null,
            $mask: null,
            _tmpl: '<div class="event-dialog J-container ${rootClass}" role="alert"><div class="event-hd J-head"><button class="event-close J-close" title="\u5173\u95ed"><span class="event-icon event-icon-close"><span class="event-sr-only">\u5173\u95ed</span></span></button></div><div class="event-bd J-body"><h3 class="event-title J-title"> ${title} </h3><p class="event-desc"> ${content} </p><div class="event-toolbar J-buttons"> ${buttonTags} </div></div></div>',
            _btnTmpl: '<a href="javascript:;" class="event-btn ${class} J-cmd" title="${title}" hotrep="${hotrep}"> ${name} </a>',
            show: function (t) {
                var e = this;
                t || (t = {}), t.buttons && (t.buttonTags = i.map(t.buttons, function (t, o) {
                    return n(e._btnTmpl, t)
                }).join(""));
                var o = n(this._tmpl, t),
                    s = this._getBox().html(o).show();
                return s.find(".J-container").css("position", "relative"), t.width && s.find(".J-container").css("width", t.width), t.noHead && s.find(".J-head").remove(), t.noBody && s.find(".J-body").remove(), t.noFooter && s.find(".J-footer").remove(), t.noClose && s.find(".J-close").remove(), t.title || s.find(".J-title").remove(), t.buttons || s.find(".J-buttons").remove(), this._evented(t), this._showMask(), s
            },
            hide: function () {
                this._hideMask(), this._getBox().off().empty().hide(), i("body").css("overflow", ""), i(window).off("resize.event-dialog")
            },
            _evented: function (t) {
                var e = this,
                    o = i(window),
                    n = this._getBox(),
                    s = n.find(".J-container"),
                    a = t.buttons,
                    c = n.find(".J-cmd");
                n.off().on("click", ".J-close", function () {
                    e.hide()
                }).on("click", ".J-cmd", function () {
                    var t = i(this).index();
                    return "function" == typeof a[t].callback ? a[t].callback.call(e, c[t], n) : e.hide(), !1
                }), o.on("resize.event-dialog", function () {
                    var t = o.width() - s.width(),
                        e = o.height() - s.height();
                    s.css({
                        left: function () {
                            return Math.max(0, t / 2)
                        },
                        top: function () {
                            return Math.max(0, Math.min(300, e / 2))
                        }
                    }), t < 40 || e < 40 ? i("body").css("overflow", "hidden") : i("body").css("overflow", "")
                }).trigger("resize.event-dialog")
            },
            _showMask: function () {
                this._getMask().show()
            },
            _hideMask: function () {
                this._getMask().hide()
            },
            _getBox: function () {
                var t = i("#" + this._boxId);
                return t.length || (t = i("<div>").css({
                    position: "fixed",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "auto",
                    "z-index": 9001
                }).attr("id", this._boxId).appendTo("body")), this.$box = t
            },
            _getMask: function () {
                var t = i("#" + this._maskId);
                return t.length || (t = i("<div>").css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "#000",
                    opacity: ".6",
                    "z-index": 9e3
                }).attr("id", this._maskId).appendTo("body")), this.$mask = t
            }
        };
    t.exports = {
        $dialog: a,
        show: function () {
            this.$dialog.show.apply(this.$dialog, arguments)
        },
        alert: function (t, e, o) {
            o = i.isPlainObject(e) ? e : i.extend({
                noClose: !! e
            }, o), this.show(i.extend({
                title: "\u6e29\u99a8\u63d0\u793a",
                content: t || "",
                buttons: [{
                    name: "\u786e\u5b9a"
                }]
            }, o))
        },
        hide: function () {
            this.$dialog.hide()
        }
    }
}]); /*  |xGv00|cfb1ee3e67ba411e39ccf6fc33c20e7b */
