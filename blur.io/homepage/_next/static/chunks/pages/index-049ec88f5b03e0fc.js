(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        7314: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i(2782)
            }])
        },
        6471: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = i(2322),
                n = i(2784),
                a = i(3301),
                l = i(5803),
                o = i(6794);
            let s = (0, o.ZP)("video", {});
            class d extends n.Component {
                componentDidMount() {
                    let e = this.ref.current;
                    if (e.setAttribute("playsinline", "true"), e.setAttribute("defaultMuted", "true"), this.timeout = setTimeout(() => {
                            this.setState({
                                canPlay: !0
                            })
                        }, this.randomDelayTime), (0, l.Z)()) {
                        let e = parseInt(a.Z.version);
                        this.props.objectFitFill && (this.objectFillTimeout = setTimeout(() => {
                            this.setState({
                                objectFillOverride: !0
                            })
                        }, 0)), this.setState({
                            browserIsSafari: !0,
                            safariVersion: e
                        })
                    }
                }
                componentDidUpdate(e, t, i) {
                    let r = this.ref.current;
                    this.state.canPlay && this.props.autoPlay ? r.play() : (r.pause(), r.currentTime = 0), this.state.browserIsSafari && void 0 === this.safariDelayTimeout && (this.safariDelayTimeout = setTimeout(() => {
                        this.setState({
                            safariDisplayReady: !0
                        })
                    }, 250))
                }
                componentWillUnmount() {
                    clearTimeout(this.objectFillTimeout), clearTimeout(this.safariDelayTimeout), clearTimeout(this.timeout)
                }
                render() {
                    var e;
                    let t = Boolean(this.props.autoPlay),
                        i = {
                            opacity: 1
                        },
                        n = {};
                    return this.state.browserIsSafari && (this.state.safariVersion >= 16 ? n.objectFit = "contain" : n.objectFit = "fill"), this.props.objectFitFill && this.state.browserIsSafari && (i.opacity = 0, this.state.safariDisplayReady && (i.opacity = 1)), (0, r.jsx)(s, {
                        autoPlay: t,
                        css: i,
                        loop: !0,
                        muted: !0,
                        preload: "metadata",
                        ref: this.ref,
                        style: { ...n,
                            ...null !== (e = this.props.customStyles) && void 0 !== e ? e : {}
                        },
                        children: this.props.children
                    })
                }
                constructor(e) {
                    super(e), this.randomDelayTime = 0, this.ref = (0, n.createRef)(), this.state = {
                        browserIsSafari: !1,
                        canPlay: !0,
                        objectFillOverride: !1,
                        safariDisplayReady: !1,
                        safariVersion: 0
                    }, this.props.randomDelay && (this.state.canPlay = !1)
                }
            }
            var c = d
        },
        2782: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSP: function() {
                    return tC
                },
                default: function() {
                    return tI
                }
            });
            var r = i(2322),
                n = i(7729),
                a = i.n(n),
                l = i(6794);
            let o = (0, l.ZP)("div", {
                    display: "flex",
                    flexDirection: "column"
                }),
                s = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsxs)(o, {
                        children: [(0, r.jsxs)(a(), {
                            children: [(0, r.jsx)("title", {
                                children: "Blur: NFT Marketplace for Pro Traders"
                            }), (0, r.jsx)("meta", {
                                name: "description",
                                content: "Sweep NFTs across multiple marketplaces, snipe reveals faster than others, and manage your portfolio with advanced analytics. Zero fees."
                            }), (0, r.jsx)("meta", {
                                property: "og:title",
                                content: "Fastest NFT Marketplace for Pro Traders"
                            }), (0, r.jsx)("meta", {
                                property: "og:image",
                                content: "https://imgs.blur.io/_assets/common/og.png"
                            }), (0, r.jsx)("meta", {
                                property: "og:description",
                                content: "Sweep NFTs across multiple marketplaces, snipe reveals faster than others, and manage your portfolio with advanced analytics. Zero fees."
                            }), (0, r.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            })]
                        }), t]
                    })
                };
            var d = i(9097),
                c = i.n(d),
                x = i(4970),
                p = i(2784),
                h = i(6388);
            let g = (0, p.forwardRef)((e, t) => {
                    let {
                        children: i,
                        ...n
                    } = e;
                    return (0, r.jsx)(h.D, {
                        ref: t,
                        ...n,
                        children: i
                    })
                }),
                f = (0, l.ZP)(g, {
                    px: "$md"
                }),
                m = (0, l.ZP)(f, {
                    borderBottom: "1px solid #303030",
                    borderTop: "1px solid #303030",
                    flexDirection: "row",
                    justifyContent: "center",
                    mt: "$xl",
                    px: "$md",
                    "@desktopExtended": {
                        mx: "auto",
                        maxWidth: "1560px"
                    }
                }),
                u = (0, l.ZP)("div", {
                    cursor: "pointer",
                    display: "flex",
                    "&:hover span": {
                        color: "$white1000"
                    },
                    "&:hover path": {
                        fill: "$white1000"
                    }
                }),
                b = (0, l.ZP)("span", {
                    color: "$green300",
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: "150%",
                    padding: "$lg 0",
                    textShadow: "0px 0px 16px rgba(173, 226, 93, 0.8), 0px 0px 20px rgba(173, 226, 93, 0.4)",
                    transition: "all .2s ease-in-out"
                }),
                w = (0, l.ZP)("span", {
                    alignItems: "center",
                    color: "$green300",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    ml: "$sm",
                    width: "18px"
                }),
                j = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(c(), {
                        href: "https://mirror.xyz/blurdao.eth/vYOjzk4cQCQ7AtuJWWiZPoNZ04YKQmTMsos0NNq_hYs",
                        children: (0, r.jsx)(m, {
                            children: (0, r.jsxs)(u, {
                                children: [(0, r.jsx)(b, {
                                    children: t
                                }), (0, r.jsx)(w, {
                                    children: (0, r.jsx)(x.Z, {
                                        variant: "arrowRight",
                                        css: {
                                            height: "16px",
                                            width: "18px",
                                            "& path": {
                                                fill: "$green300"
                                            }
                                        }
                                    })
                                })]
                            })
                        })
                    })
                };
            var y = i(5237),
                v = i.n(y),
                $ = i(6622),
                k = function(e) {
                    let {
                        as: t,
                        children: i,
                        color: n = "orange",
                        ...a
                    } = e;
                    return (0, r.jsx)($.w, {
                        as: t || "h1",
                        color: n,
                        ...a,
                        children: i
                    })
                },
                P = function(e) {
                    let {
                        threshold: t
                    } = e, [i, r] = (0, p.useState)(!1), n = (0, p.useRef)(null);
                    return (0, p.useEffect)(() => {
                        let e = new window.IntersectionObserver(e => {
                            let [t] = e;
                            if (t.isIntersecting) {
                                r(!0);
                                return
                            }
                            r(!1)
                        }, {
                            root: null,
                            threshold: t
                        });
                        return e.observe(n.current), () => {
                            e.disconnect()
                        }
                    }), {
                        isActive: i,
                        ref: n
                    }
                };
            let Z = (0, l.ZP)("span", {
                    color: "$gray200",
                    display: "flex"
                }),
                D = (0, l.ZP)(f, {
                    my: "$xl3"
                }),
                S = (0, l.ZP)(h.D, {
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    "@tablet": {
                        mx: "auto",
                        maxWidth: "1024px"
                    }
                }),
                C = (0, l.ZP)(h.D, {
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    "@tablet": {
                        width: "20%"
                    },
                    "@desktop": {
                        width: "25%"
                    }
                }),
                I = (0, l.ZP)($.w, {
                    fontSize: "$xl4",
                    "@desktop": {
                        fontSize: "$xl5"
                    }
                }),
                W = (0, l.ZP)(Z, {
                    color: "$orange500",
                    fontSize: "$sm",
                    textTransform: "uppercase"
                }),
                z = (0, l.ZP)("div", {
                    display: "none",
                    height: "507px",
                    position: "absolute",
                    transform: "translate3d(-142px, 130px, 0) rotate(-61.18deg)",
                    width: "288px",
                    "@tabletLandscape": {
                        display: "block",
                        transform: "translate3d(-182px, 400px, 0) rotate(-51.18deg)"
                    },
                    "@desktop": {
                        transform: "translate3d(-72px, 500px, 0) rotate(-61.18deg)"
                    }
                }),
                T = (0, l.ZP)("div", {
                    display: "none",
                    height: "479px",
                    position: "absolute",
                    width: "479px",
                    "@tabletLandscape": {
                        display: "block",
                        right: "-350px",
                        top: "200px"
                    },
                    "@desktop": {
                        right: "-224px",
                        top: "200px"
                    }
                }),
                R = v()(() => i.e(606).then(i.bind(i, 2606)), {
                    loadableGenerated: {
                        webpack: () => [2606]
                    },
                    ssr: !1
                }),
                F = v()(() => i.e(557).then(i.bind(i, 6557)), {
                    loadableGenerated: {
                        webpack: () => [6557]
                    },
                    ssr: !1
                }),
                L = e => {
                    let {
                        h1: t,
                        h3: i,
                        stats: n
                    } = e, {
                        isActive: a,
                        ref: l
                    } = P({
                        threshold: .25
                    });
                    return (0, r.jsxs)(D, {
                        ref: l,
                        children: [(0, r.jsx)(k, {
                            css: {
                                "@tablet": {
                                    fontSize: "$xl6"
                                },
                                "@desktop": {
                                    fontSize: "$xl7"
                                }
                            },
                            children: t
                        }), (0, r.jsx)(g, {
                            css: {
                                justifyContent: "center",
                                padding: "$md"
                            },
                            children: (0, r.jsx)(g, {
                                css: {
                                    margin: "0 auto $sm",
                                    maxWidth: "680px"
                                },
                                children: (0, r.jsx)(k, {
                                    as: "h3",
                                    color: "gray",
                                    css: {
                                        mx: "-6px",
                                        width: "calc(100% + 12px)",
                                        "@tablet": {
                                            fontSize: "$xl2"
                                        },
                                        "@desktop": {
                                            fontSize: "$xl3"
                                        }
                                    },
                                    children: i
                                })
                            })
                        }), (0, r.jsx)(S, {
                            children: n.map(e => {
                                let {
                                    heading: t,
                                    label: i
                                } = e, n = "stat-".concat(t, "-").concat(i);
                                return (0, r.jsxs)(C, {
                                    children: [(0, r.jsx)(I, {
                                        children: t
                                    }), (0, r.jsx)(W, {
                                        children: i
                                    })]
                                }, n)
                            })
                        }), (0, r.jsx)(F, {
                            isActive: a,
                            StyledTube: z
                        }), (0, r.jsx)(R, {
                            isActive: a,
                            StyledOrb: T
                        })]
                    })
                };
            var _ = i(299);
            let H = (0, l.ZP)(h.D, {
                    alignContent: "center",
                    alignItems: "center",
                    border: "1px solid $orange200",
                    justifyContent: "center",
                    textAlign: "center",
                    ["& ".concat($.w)]: {
                        alignItems: "center",
                        backgroundColor: "$black800",
                        lineHeight: 1.25,
                        margin: 0,
                        "@tablet": {
                            margin: "0 auto",
                            px: "64px",
                            width: "unset"
                        },
                        "@desktop": {
                            px: "96px"
                        }
                    },
                    variants: {
                        small: {
                            true: {
                                p: 0,
                                ["& ".concat($.w)]: {
                                    justifyContent: "flex-start",
                                    px: 0,
                                    width: "100%",
                                    "@tablet": {}
                                }
                            }
                        }
                    }
                }),
                E = (0, p.forwardRef)((e, t) => {
                    let {
                        children: i,
                        heading: n,
                        small: a = !1,
                        ...l
                    } = e, o = {};
                    return a ? o.fontSize = "$xl2" : o.fontSize = "32px", (0, r.jsxs)(H, {
                        ref: t,
                        small: a,
                        ...l,
                        children: [n && (0, r.jsx)(g, {
                            css: {
                                backgroundImage: a ? void 0 : "url(/homepage/img/homepage/dots_pattern.png)",
                                backgroundPosition: "left center",
                                backgroundRepeat: "repeat no-repeat",
                                backgroundSize: "70px",
                                borderBottom: "1px solid $orange200",
                                height: a ? "32px" : "48px",
                                width: "100%"
                            },
                            children: (0, r.jsx)(k, {
                                as: "h2",
                                css: o,
                                children: n
                            })
                        }), (0, r.jsx)(g, {
                            css: {
                                alignItems: "center",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                padding: a ? 0 : "40px 48px"
                            },
                            children: i
                        })]
                    })
                });
            var N = i(6471),
                A = i(3301),
                B = i(3278);
            let M = v()(() => i.e(575).then(i.bind(i, 2575)), {
                    loadableGenerated: {
                        webpack: () => [2575]
                    },
                    ssr: !1
                }),
                V = e => {
                    let {
                        handle: t,
                        heading: i,
                        order: n,
                        tweetFallbackImg: a,
                        tweetId: l,
                        video: o
                    } = e, [s, d] = (0, p.useState)("ignore");
                    (0, p.useEffect)(() => {
                        d("safari" == A.Z.name.toLowerCase() ? parseInt(A.Z.version) >= 16 ? "safariLatest" : "safariLegacy" : "ignore")
                    }, []);
                    let {
                        ref: c,
                        inView: x
                    } = (0, _.YD)();
                    return (0, r.jsxs)(B.iC, {
                        ref: c,
                        children: [(0, r.jsxs)(B.rm, {
                            order: n,
                            children: [(0, r.jsx)(B.pd, {
                                children: i
                            }), (0, r.jsx)(B.$9, {
                                children: (0, r.jsx)(E, {
                                    heading: t,
                                    small: !0,
                                    children: (0, r.jsx)(M, {
                                        tweetFallbackImg: a,
                                        tweetId: l
                                    })
                                })
                            })]
                        }), (0, r.jsx)(B.Nb, {
                            order: n,
                            children: (0, r.jsx)(B.zn, {
                                children: (0, r.jsx)(B.Fp, {
                                    browserVersion: s,
                                    children: (0, r.jsxs)(N.Z, {
                                        autoPlay: x,
                                        children: [(0, r.jsx)("source", {
                                            src: o.webm,
                                            type: "video/mp4"
                                        }), (0, r.jsx)("source", {
                                            src: o.mp4,
                                            type: "video/mp4"
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                },
                O = e => {
                    let {
                        items: t
                    } = e;
                    return (0, r.jsx)(B.kd, {
                        children: t.map((e, t) => {
                            let { ...i
                            } = e;
                            return (0, r.jsx)(V, {
                                order: t % 2 == 0 ? void 0 : "swap",
                                ...i
                            }, t)
                        })
                    })
                };
            var Y = function(e) {
                let {
                    children: t,
                    ...i
                } = e;
                return (0, r.jsx)(Z, { ...i,
                    children: t
                })
            };
            (0, l.ZP)("div", {
                alignItems: "center",
                display: "flex",
                flex: "1 1 100%",
                height: "246px",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                margin: "16px 12px 0",
                zIndex: 1,
                "& video": {
                    height: "100%",
                    left: 0,
                    margin: "0 auto",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    "@tablet": {
                        objectFit: "fill",
                        "@media not all and (min-resolution:.001dpcm)": {
                            "@supports (-webkit-appearance:none) and (stroke-color:transparent)": {
                                objectFit: "cover"
                            }
                        }
                    }
                },
                "@tablet": {
                    height: "562px",
                    margin: "0 30px"
                }
            });
            let G = (0, l.ZP)("img", {
                    display: "flex",
                    mixBlendMode: "lighten",
                    width: "40%",
                    zIndex: 2,
                    "@tablet": {
                        width: "380px"
                    }
                }),
                X = (0, l.ZP)(h.D, {
                    mt: "$xl",
                    justifyContent: "center",
                    overflow: "hidden",
                    "@mobile": {
                        mb: "$xl"
                    },
                    "@tablet": {
                        mb: 0,
                        height: "300px"
                    }
                }),
                q = (0, l.ZP)(h.D, {
                    flexDirection: "row",
                    justifyContent: "center",
                    "& .link-text": {
                        ml: "$sm",
                        "&:hover": {
                            color: "$white1000"
                        }
                    },
                    "& > *": {
                        display: "flex",
                        justifyContent: "center",
                        mx: "$md"
                    },
                    "@tablet": {
                        m: "unset",
                        width: "unset",
                        ml: "16px"
                    }
                }),
                U = () => (0, r.jsxs)(X, {
                    children: [(0, r.jsx)(G, {
                        src: "/homepage/img/logo.gif",
                        css: {
                            margin: "0 auto 16px",
                            height: "84px",
                            width: "280px"
                        }
                    }), (0, r.jsxs)(g, {
                        css: {
                            "@tablet": {
                                flexDirection: "row",
                                justifyContent: "center"
                            }
                        },
                        children: [(0, r.jsx)(g, {
                            css: {
                                alignItems: "center",
                                "@tablet": {
                                    width: "unset"
                                }
                            },
                            children: (0, r.jsx)(Y, {
                                children: "(c) 2022"
                            })
                        }), (0, r.jsxs)(q, {
                            children: [(0, r.jsx)(c(), {
                                href: "https://twitter.com/blur_io",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, r.jsxs)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: ["// ", (0, r.jsx)("span", {
                                        className: "link-text",
                                        children: "Twitter"
                                    })]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "https://discord.gg/blurdao",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, r.jsxs)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: ["// ", (0, r.jsx)("span", {
                                        className: "link-text",
                                        children: "Discord"
                                    })]
                                })
                            }), (0, r.jsx)(c(), {
                                href: "https://forms.gle/h1rn861dELqSoZZX9",
                                passHref: !0,
                                legacyBehavior: !0,
                                children: (0, r.jsxs)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: ["// ", (0, r.jsx)("span", {
                                        className: "link-text",
                                        children: "API"
                                    })]
                                })
                            })]
                        })]
                    })]
                });
            var Q = i(6725),
                J = i(3653);
            let K = (0, l.ZP)(h.D, {
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    "@desktopExtended": {
                        margin: "0 auto"
                    },
                    variants: {
                        type: {
                            fallback: {},
                            primary: {
                                maxWidth: "1560px"
                            }
                        }
                    }
                }),
                ee = (0, l.ZP)(h.D, {
                    height: "100%",
                    position: "absolute"
                }),
                et = (0, l.ZP)(h.D, {
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                }),
                ei = (0, l.ZP)(h.D, {
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "4px",
                    height: "100%",
                    left: 0,
                    opacity: 1,
                    position: "absolute",
                    top: 0
                }),
                er = (0, l.ZP)(h.D, {
                    background: "linear-gradient(180deg, rgba(8, 4, 4, 0) 50%, #080404 90.22%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                }),
                en = (0, l.ZP)(h.D, {
                    justifyContent: "flex-end",
                    mt: "320px",
                    p: "$md",
                    width: "100%",
                    "@tablet": {
                        mt: "380px"
                    },
                    "@desktop": {
                        mx: "auto",
                        padding: "$xl $md",
                        maxWidth: "1360px"
                    },
                    "@desktopExtended": {
                        mt: "480px",
                        padding: "$xl 0"
                    },
                    "@4k": {
                        mt: "580px"
                    },
                    variants: {
                        type: {
                            fallback: {},
                            primary: {}
                        }
                    }
                });
            (0, l.ZP)("img", {
                borderRadius: "30px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                display: "flex",
                height: "52px",
                width: "52px"
            });
            let ea = (0, l.ZP)("h3", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "150%"
                }),
                el = (0, l.ZP)("h4", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "19px",
                    mt: "$sm",
                    textTransform: "uppercase"
                }),
                eo = (0, l.ZP)(h.D, {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: "$xl",
                    "@tablet": {
                        justifyContent: "flex-start"
                    }
                }),
                es = (0, l.ZP)(h.D, {
                    flexDirection: "row",
                    "@tablet": {
                        width: "unset"
                    }
                }),
                ed = (0, l.ZP)(h.D, {
                    width: "40%",
                    "@tablet": {
                        width: "130px"
                    }
                }),
                ec = (0, l.ZP)("span", {
                    color: "$gray200",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "150%",
                    textTransform: "uppercase"
                }),
                ex = (0, l.ZP)(h.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    ["".concat(J.x)]: {
                        ml: "$xs"
                    }
                }),
                ep = (0, l.ZP)("span", {
                    color: "$white1000",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "150%"
                }),
                eh = (0, l.ZP)("button", {
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, .4)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "$sm",
                    color: "$white1000",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    outline: "none",
                    padding: "$sm $md",
                    transition: "all .2s ease-in-out",
                    "&:hover": {
                        backgroundColor: "$white1000",
                        color: "$black800",
                        "& path": {
                            fill: "$black800"
                        }
                    },
                    "@tablet": {
                        width: "unset"
                    },
                    variants: {
                        active: {
                            true: {
                                backgroundColor: "$white1000",
                                color: "$black800",
                                "& path": {
                                    fill: "$black800"
                                }
                            }
                        }
                    }
                }),
                eg = (0, l.ZP)("span", {
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "17px",
                    textTransform: "uppercase",
                    ["".concat(J.x)]: {
                        display: "none"
                    },
                    "@tablet": {
                        ["".concat(J.x)]: {
                            display: "flex"
                        }
                    }
                }),
                ef = (0, l.ZP)("span", {
                    display: "none",
                    "@tablet": {
                        display: "inline",
                        mx: "$sm"
                    }
                }),
                em = (0, l.ZP)(h.D, {
                    flexDirection: "row",
                    position: "relative"
                }),
                eu = (0, l.ZP)(h.D, {
                    flexDirection: "row",
                    margin: "15px -20px 0",
                    overflowX: "scroll",
                    overflowY: "visible",
                    padding: "20px 18px",
                    scrollbarWidth: 0,
                    width: "calc(100% + 30px)",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                eb = (0, l.ZP)(h.D, {
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "4px",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    height: "108px",
                    mr: "1.2%",
                    transition: "all 450ms",
                    minWidth: "160px",
                    width: "160px",
                    zIndex: 0,
                    "&:last-child": {
                        mr: 0
                    },
                    "@tablet": {
                        height: "136px",
                        minWidth: "19%",
                        width: "19%"
                    },
                    "@desktop": {
                        height: "160px"
                    },
                    variants: {
                        active: {
                            true: {
                                boxShadow: "rgb(255 197 132 / 30%) 0px 5px 30px"
                            }
                        },
                        lift: {
                            hover: {
                                willChange: "transform",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    transition: "transform 125ms"
                                }
                            },
                            sticky: {
                                transform: "translateY(-8px)",
                                transition: "transform 125ms",
                                willChange: "transform"
                            }
                        }
                    }
                }),
                ew = (0, l.ZP)(h.D, {
                    borderRadius: "4px",
                    height: "100%",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    padding: "$md",
                    position: "relative",
                    zIndex: 1
                }),
                ej = (0, l.ZP)(h.D, {
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    transform: "scale(1, 1)",
                    transition: "all .2s ease-in-out",
                    width: "100%",
                    willChange: "transform",
                    variants: {
                        grow: {
                            true: {
                                transform: "scale(1.1, 1.1)"
                            }
                        }
                    }
                }),
                ey = (0, l.ZP)(h.D, {
                    backgroundColor: "$black800",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "4px",
                    height: "100%",
                    left: 0,
                    top: 0,
                    width: "100%"
                }),
                ev = (0, l.ZP)(h.D, {
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
                    bottom: 0,
                    height: "68px",
                    left: 0,
                    position: "absolute",
                    width: "100%",
                    zIndex: 2
                }),
                e$ = (0, l.ZP)(h.D, {
                    height: "100%",
                    justifyContent: "space-between",
                    zIndex: 3
                }),
                ek = (0, l.ZP)("img", {
                    borderRadius: "30px",
                    display: "flex",
                    filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.2))",
                    height: "40px",
                    width: "40px"
                }),
                eP = (0, l.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 600
                }),
                eZ = (0, l.ZP)(h.D, {
                    height: "100%",
                    position: "absolute"
                }),
                eD = (0, l.ZP)(h.D, {
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "4px",
                    boxSizing: "initial",
                    flexShrink: 0,
                    mx: "$xs",
                    scrollSnapAlign: "center",
                    variants: {
                        nftRatio: {
                            square: {
                                height: "240px",
                                width: "240px",
                                "&:first-child": {
                                    ml: "calc((100vw - 240px) / 2)"
                                },
                                "&:last-child": {
                                    mr: "calc((100vw - 240px) / 2)"
                                },
                                "@tablet": {
                                    height: "300px",
                                    width: "300px"
                                },
                                "@tabletLandscape": {
                                    height: "180px",
                                    mx: "$md",
                                    width: "180px",
                                    "&:first-child": {
                                        ml: "$md"
                                    },
                                    "&:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@media (min-width: 1240px)": {
                                    height: "230px",
                                    width: "230px"
                                },
                                "@desktop": {
                                    "&:first-child": {
                                        ml: 0
                                    },
                                    "&:last-child": {
                                        mr: 0
                                    }
                                },
                                "@4k": {
                                    height: "375px",
                                    m: 0,
                                    width: "375px"
                                }
                            },
                            nineByTwelve: {
                                height: "230px",
                                width: "172.50px",
                                "&:first-child": {
                                    ml: "calc((100vw - 210px) / 2)"
                                },
                                "&:last-child": {
                                    mr: "calc((100vw - 210px) / 2)"
                                },
                                "@tablet": {
                                    height: "250px",
                                    width: "187.50px",
                                    "&:first-child": {
                                        ml: "$md"
                                    },
                                    "&:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@tabletLandscape": {
                                    "&:nth-child(4)": {
                                        mr: "$xs"
                                    },
                                    "&:nth-child(5)": {
                                        ml: "$xs"
                                    }
                                },
                                "@media (min-width: 1240px)": {},
                                "@desktopExtended": {
                                    height: "300px",
                                    width: "225px",
                                    "&:first-child": {
                                        ml: 0
                                    },
                                    "&:last-child": {
                                        mr: 0
                                    }
                                },
                                "@4k": {
                                    height: "350px",
                                    width: "262.50px"
                                }
                            },
                            sixteenByNine: {
                                height: "196.88px",
                                width: "350px",
                                "&:first-child": {
                                    ml: "calc((100vw - 350px) / 2)"
                                },
                                "&:last-child": {
                                    mr: "calc((100vw - 350px) / 2)"
                                },
                                "@tablet": {
                                    height: "225px",
                                    width: "400px",
                                    "&:first-child": {
                                        ml: "$md"
                                    },
                                    "&:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@desktopExtended": {
                                    "&:first-child": {
                                        ml: 0
                                    },
                                    "&:last-child": {
                                        mr: 0
                                    }
                                },
                                "@tabletLandscape": {
                                    height: "225px",
                                    width: "400px"
                                }
                            },
                            twentysevenByNine: {
                                height: "108.33px",
                                width: "325px",
                                "&:first-child, &:nth-child(5)": {
                                    ml: "calc((100vw - 325px) / 2 - $gutterMobile)"
                                },
                                "&:nth-child(4), &:last-child": {
                                    mr: "calc((100vw - 325px) / 2 - $gutterMobile)"
                                },
                                "@tablet": {
                                    "&:first-child, &:nth-child(5)": {
                                        ml: "$md"
                                    },
                                    "&:nth-child(4), &:last-child": {
                                        mr: "$md"
                                    }
                                },
                                "@tabletLandscape": {
                                    height: "78.67px",
                                    width: "236px"
                                },
                                "@media (min-width: 1240px)": {
                                    height: "96.67px",
                                    width: "290px"
                                },
                                "@desktop": {},
                                "@desktopExtended": {
                                    height: "108.33px",
                                    width: "325",
                                    "&:first-child, &:nth-child(5)": {
                                        ml: 0
                                    },
                                    "&:nth-child(4), &:last-child": {
                                        mr: 0
                                    }
                                },
                                "@4k": {
                                    height: "116.67px",
                                    width: "350px"
                                }
                            }
                        }
                    }
                }),
                eS = (0, l.ZP)(h.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    height: "270px",
                    mt: "$xl3",
                    overflowX: "scroll",
                    scrollbarWidth: 0,
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    },
                    zIndex: 1,
                    "@tablet": {
                        height: "330px"
                    },
                    "@tabletLandscape": {
                        justifyContent: "space-between",
                        overflowX: "initial",
                        mx: "auto"
                    },
                    "@desktop": {
                        maxWidth: "1360px"
                    },
                    "@desktopExtended": {
                        height: "500px"
                    },
                    "@4k": {
                        height: "530px"
                    },
                    variants: {
                        nftRatio: {
                            square: {
                                "@tabletLandscape": {
                                    ["& ".concat(eD)]: {
                                        display: "none"
                                    },
                                    ["& ".concat(eD, ":nth-child(n + 1):nth-child(-n+5)")]: {
                                        display: "flex"
                                    }
                                },
                                "@media (min-width: 1240px)": {},
                                "@desktop": {},
                                "@desktopExtended": {
                                    columnGap: "20px",
                                    display: "grid",
                                    gridTemplateColumns: "repeat(5, 1fr)",
                                    rowGap: "10px",
                                    width: "fit-content",
                                    maxWidth: "1560px"
                                },
                                "@4k": {
                                    maxWidth: "1860px"
                                }
                            },
                            nineByTwelve: {
                                "@tablet": {},
                                "@tabletLandscape": {
                                    ["& ".concat(eD)]: {
                                        display: "none"
                                    },
                                    ["& ".concat(eD, ":nth-child(n + 1):nth-child(-n+5)")]: {
                                        display: "flex"
                                    }
                                },
                                "@media (min-width: 1240px)": {},
                                "@4k": {}
                            },
                            sixteenByNine: {
                                "@tablet": {},
                                "@tabletLandscape": {},
                                "@media (min-width: 1240px)": {
                                    ["& ".concat(eD)]: {
                                        display: "none"
                                    },
                                    ["& ".concat(eD, ":nth-child(n + 1):nth-child(-n+3)")]: {
                                        display: "flex"
                                    }
                                },
                                "@4k": {}
                            },
                            twentysevenByNine: {
                                columnGap: "10px",
                                display: "grid",
                                height: "246px",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                                mt: "calc($xl3 + 12px)",
                                rowGap: "10px",
                                "@tablet": {
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    height: "270px",
                                    margin: "$xl4 auto 0"
                                },
                                "@tabletLandscape": {
                                    py: "40px",
                                    maxWidth: "1024px"
                                },
                                "@media (min-width: 1240px)": {
                                    maxWidth: "1240px"
                                },
                                "@desktop": {
                                    maxWidth: "1360px"
                                },
                                "@desktopExtended": {
                                    pt: "80px"
                                },
                                "@4k": {
                                    margin: "140px auto 0",
                                    maxWidth: "1560px"
                                }
                            }
                        }
                    }
                }),
                eC = e => {
                    let {
                        nfts: t,
                        nftRatio: i,
                        setIsHoveringImage: n
                    } = e;
                    return (0, r.jsx)(eZ, {
                        onMouseLeave: n(!1),
                        onMouseEnter: n(!0),
                        children: (0, r.jsx)(eS, {
                            nftRatio: i,
                            children: null == t ? void 0 : t.map((e, t) => {
                                let {
                                    imgUrl: n
                                } = e;
                                return (0, r.jsx)(eD, {
                                    css: {
                                        backgroundImage: "url(".concat(n, ")")
                                    },
                                    nftRatio: i
                                }, "fallback-image-".concat(t))
                            })
                        })
                    })
                },
                eI = e => {
                    let {
                        cssImage1: t,
                        cssImage2: i,
                        setIsHoveringImage: n,
                        scale: a
                    } = e;
                    return (0, r.jsx)(ee, {
                        onMouseLeave: n(!1),
                        onMouseOver: n(!0),
                        children: (0, r.jsxs)(et, {
                            css: {
                                transform: "scale(".concat(a, ", ").concat(a, ")")
                            },
                            children: [(0, r.jsx)(ei, {
                                css: t,
                                children: (0, r.jsx)(er, {})
                            }), (0, r.jsx)(ei, {
                                css: i,
                                children: (0, r.jsx)(er, {})
                            })]
                        })
                    })
                },
                eW = e => {
                    let {
                        activeCollectionIndex: t,
                        collections: i,
                        setActiveCollectionIndex: n
                    } = e;
                    i.length;
                    let [a, l] = (0, p.useState)(-1), o = (0, Q.Z)();
                    (0, p.useEffect)(() => {
                        o || l(0)
                    }, []);
                    let s = e => t => {
                            t && t.preventDefault(), l(e)
                        },
                        d = e => t => {
                            t && t.preventDefault(), n(e)
                        };
                    return (0, r.jsx)(eu, {
                        children: i.map((e, i) => {
                            let n, {
                                    featuredImageUrl: l,
                                    smallFeaturedImageUrl: c,
                                    iconUrl: x,
                                    title: p
                                } = e,
                                h = i === t,
                                g = !o && i == a;
                            return !o && (a > -1 ? g && (n = "sticky") : a > -1 && (n = h ? "sticky" : "hover")), (0, r.jsx)(eb, {
                                active: h,
                                lift: n,
                                children: (0, r.jsxs)(ew, {
                                    css: {},
                                    onClick: d(i),
                                    onMouseEnter: s(i),
                                    onMouseLeave: s(o ? -1 : t),
                                    children: [(0, r.jsx)(ej, {
                                        grow: g,
                                        children: (0, r.jsx)(ey, {
                                            css: {
                                                backgroundImage: "url(".concat(null != c ? c : l, ")")
                                            }
                                        })
                                    }), (0, r.jsx)(ev, {}), (0, r.jsxs)(e$, {
                                        children: [x && (0, r.jsx)(ek, {
                                            src: x
                                        }), (0, r.jsx)(eP, {
                                            children: p
                                        })]
                                    })]
                                })
                            }, "primary-hero-thumbnail-".concat(i))
                        })
                    })
                },
                ez = { in: (0, l.F4)({
                        "0%": {
                            opacity: 0
                        },
                        "100%": {
                            opacity: 1
                        }
                    }),
                    out: (0, l.F4)({
                        "0%": {
                            opacity: 1
                        },
                        "100%": {
                            opacity: 0
                        }
                    })
                },
                eT = e => {
                    let {
                        collections: t
                    } = e, [i, n] = (0, p.useState)({
                        activeCollectionIndex: 0,
                        fade: !1,
                        previousCollectionIndex: 0
                    }), {
                        by: a,
                        collectionSlug: l,
                        featuredImageUrl: o,
                        floorPrice: s,
                        title: d,
                        type: c,
                        volume: h
                    } = t[i.activeCollectionIndex], g = "/collection/".concat(l), {
                        featuredImageUrl: f
                    } = t[i.previousCollectionIndex], m = (0, p.useRef)(null), u = (0, p.useRef)(null), [b, w] = (0, p.useState)(!1), j = (0, p.useRef)(null), [y, v] = (0, p.useState)(1), $ = e => t => {
                        t && t.preventDefault();
                        try {
                            var i;
                            (null === (i = u.current) || void 0 === i ? void 0 : i.contains(t.target)) ? w(!1): w(e)
                        } catch (e) {}
                    }, k = e => {
                        n({
                            activeCollectionIndex: e,
                            fade: !0,
                            previousCollectionIndex: i.activeCollectionIndex
                        }), setTimeout(() => {
                            n({
                                activeCollectionIndex: e,
                                fade: !1,
                                previousCollectionIndex: i.activeCollectionIndex
                            })
                        }, 200)
                    };
                    (0, p.useEffect)(() => {
                        let e = e => e.getBoundingClientRect().bottom,
                            t = () => {
                                let t = e(m.current),
                                    i = j.current > window.scrollY;
                                j.current = window.scrollY;
                                let r = 1 + 5e-4 * j.current;
                                if (i && t > window.innerHeight) {
                                    v(1);
                                    return
                                }
                                t < window.innerHeight && (r > 1.2 && (r = 1.2), v(r))
                            };
                        return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t)
                    }, []);
                    let P = {
                            backgroundImage: "url(".concat(f, ")")
                        },
                        Z = {
                            backgroundImage: "url(".concat(o, ")")
                        };
                    return i.fade && (P.animation = "".concat(ez.out, " 200ms ease-in-out"), Z.animation = "".concat(ez.in, " 200ms ease-in-out")), (0, r.jsxs)(K, {
                        ref: m,
                        type: c,
                        children: ["primary" == c ? (0, r.jsx)(eI, {
                            cssImage1: P,
                            cssImage2: Z,
                            scale: y,
                            setIsHoveringImage: $
                        }) : (0, r.jsx)(eC, {
                            setIsHoveringImage: $,
                            ...t[i.activeCollectionIndex]
                        }), (0, r.jsxs)(en, {
                            type: c,
                            children: [(0, r.jsx)(ea, {
                                children: d
                            }), (0, r.jsxs)(el, {
                                children: ["BY ", a]
                            }), (0, r.jsxs)(eo, {
                                children: [(0, r.jsxs)(es, {
                                    children: [(0, r.jsxs)(ed, {
                                        children: [(0, r.jsx)(ec, {
                                            children: "Floor Price"
                                        }), (0, r.jsx)(ex, {
                                            children: s ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(ep, {
                                                    children: s
                                                }), (0, r.jsx)(x.Z, {
                                                    variant: "eth",
                                                    css: {
                                                        height: "16px",
                                                        width: "9.33px"
                                                    }
                                                })]
                                            }) : (0, r.jsx)(ep, {
                                                children: "-"
                                            })
                                        })]
                                    }), (0, r.jsxs)(ed, {
                                        children: [(0, r.jsx)(ec, {
                                            children: "1D Volume"
                                        }), (0, r.jsx)(ex, {
                                            children: h ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(ep, {
                                                    children: h
                                                }), (0, r.jsx)(x.Z, {
                                                    variant: "eth",
                                                    css: {
                                                        height: "16px",
                                                        width: "9.33px"
                                                    }
                                                })]
                                            }) : (0, r.jsx)(ep, {
                                                children: "-"
                                            })
                                        })]
                                    })]
                                }), (0, r.jsx)(eh, {
                                    onClick: () => window.location.href = g,
                                    children: (0, r.jsxs)(eg, {
                                        children: ["View", (0, r.jsx)(ef, {
                                            children: "Collection"
                                        }), (0, r.jsx)(x.Z, {
                                            variant: "arrowRight",
                                            css: {
                                                height: "13px",
                                                width: "11.38px"
                                            }
                                        })]
                                    })
                                })]
                            }), (0, r.jsx)(em, {
                                ref: u,
                                children: (0, r.jsx)(eW, {
                                    activeCollectionIndex: i.activeCollectionIndex,
                                    collections: t,
                                    setActiveCollectionIndex: k
                                })
                            })]
                        })]
                    })
                },
                eR = (0, l.ZP)("h2", {
                    color: "$orange200",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "150%",
                    textShadow: "0px 0px 1px #FF8700, 0px 0px 5px rgba(249, 82, 0, 0.6), 0px 5px 4px rgba(249, 15, 0, 0.4)"
                }),
                eF = (0, l.ZP)(h.D, {
                    flexDirection: "row",
                    mt: "$lg",
                    overflowX: "scroll",
                    scrollbarWidth: 0,
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                eL = (0, l.ZP)(h.D, {
                    bottom: "10px",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    zIndex: 1
                }),
                e_ = (0, l.ZP)(h.D, {
                    height: "100%",
                    justifyContent: "flex-end"
                });
            (0, l.ZP)(h.D, {
                $$pcThumbsHeight: 0,
                $$pcThumbsMT: 0,
                alignItems: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                height: "$$pcThumbsHeight",
                justifyContent: "center",
                mt: "$$pcThumbsMT",
                overflow: "hidden",
                transition: "all 0.2s ease-in-out",
                "& > a": {
                    display: "flex",
                    margin: "0 15px 15px 0",
                    "&:nth-child(3n)": {
                        mr: 0
                    },
                    "&:nth-child(1n + 7)": {
                        mb: 0
                    }
                }
            });
            let eH = (0, l.ZP)(h.D, {
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(40px)",
                    margin: "0 10px",
                    padding: "12px 16px",
                    transition: "all 0.2s ease-in-out",
                    width: "calc(100% - 20px)"
                }),
                eE = (0, l.ZP)(h.D, {
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "4px",
                    mr: "$lg",
                    overflow: "hidden",
                    scrollSnapAlign: "start",
                    minWidth: "325px",
                    width: "325px",
                    ["&:hover ".concat(eH)]: {
                        backgroundColor: "rgba(0, 0, 0, 0.4)"
                    }
                }),
                eN = (0, l.ZP)(h.D, {
                    borderRadius: "4px 4px 0 0",
                    height: "325px"
                }),
                eA = (0, l.ZP)(h.D, {
                    borderRadius: "0 0 4px 4px",
                    height: "125px"
                }),
                eB = (0, l.ZP)(h.D, {
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                    borderRadius: "4px 4px 0 0",
                    height: "325px",
                    left: 0,
                    position: "absolute",
                    top: 0
                }),
                eM = (0, l.ZP)(h.D, {
                    borderRadius: "0 0 4px 4px",
                    height: "125px",
                    left: 0,
                    overflow: "hidden",
                    position: "absolute",
                    top: 0
                }),
                eV = (0, l.ZP)(h.D, {
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                    height: "325px",
                    justifyContent: "flex-end",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    transform: "scaleY(-1)"
                }),
                eO = (0, l.ZP)(h.D, {}),
                eY = (0, l.ZP)(h.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mb: "$sm"
                }),
                eG = (0, l.ZP)("h4", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "16px",
                    fontWeight: 600,
                    letterSpacing: "-0.017em",
                    lineHeight: "19px"
                }),
                eX = (0, l.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "150%",
                    opacity: "0.7"
                }),
                eq = (0, l.ZP)(h.D, {
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: "$lg"
                }),
                eU = (0, l.ZP)(h.D, {
                    flex: 1
                }),
                eQ = (0, l.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "150%",
                    opacity: "0.7",
                    textTransform: "uppercase"
                }),
                eJ = (0, l.ZP)("span", {
                    color: "$white1000",
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "150%",
                    textTransform: "uppercase"
                });
            (0, l.ZP)(h.D, {
                backgroundColor: "rgba(255, 255, 255, 1)",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                height: "80px",
                opacity: "0.8",
                transition: "all 0.2s ease-in-out",
                width: "80px",
                "&:hover": {
                    opacity: 1
                }
            });
            let eK = e => {
                    let {
                        collections: t,
                        title: i
                    } = e;
                    return (0, r.jsxs)(f, {
                        css: {
                            mt: "$lg"
                        },
                        children: [(0, r.jsx)(eR, {
                            children: i
                        }), (0, r.jsx)(eF, {
                            children: t.map((e, t) => {
                                let {
                                    collectionUrl: i,
                                    featuredImageUrl: n,
                                    floorPrice: a,
                                    infoBGColor: l,
                                    numOwners: o,
                                    title: s,
                                    volume: d
                                } = e;
                                return (0, r.jsx)(c(), {
                                    href: i,
                                    children: (0, r.jsxs)(eE, {
                                        children: [(0, r.jsx)(eN, {
                                            children: (0, r.jsx)(eB, {
                                                css: {
                                                    backgroundImage: "url(".concat(n, ")")
                                                }
                                            })
                                        }), (0, r.jsx)(eA, {
                                            children: (0, r.jsx)(eM, {
                                                children: (0, r.jsx)(eV, {
                                                    css: {
                                                        backgroundImage: "linear-gradient(180deg, rgba(0, 109, 179, 0.5) 0%, rgba(0, 109, 179, 0) 100%), url(".concat(n, ")")
                                                    }
                                                })
                                            })
                                        }), (0, r.jsx)(eL, {
                                            children: (0, r.jsx)(e_, {
                                                css: {},
                                                children: (0, r.jsx)(eH, {
                                                    children: (0, r.jsxs)(eO, {
                                                        children: [(0, r.jsxs)(eY, {
                                                            children: [(0, r.jsx)(eG, {
                                                                children: s
                                                            }), (0, r.jsx)(x.Z, {
                                                                variant: "arrowRight",
                                                                css: {
                                                                    height: "11.38px",
                                                                    width: "13px"
                                                                }
                                                            })]
                                                        }), (0, r.jsxs)(eX, {
                                                            children: [o, " owners"]
                                                        }), (0, r.jsxs)(eq, {
                                                            children: [(0, r.jsxs)(eU, {
                                                                children: [(0, r.jsx)(eQ, {
                                                                    children: "Floor Price"
                                                                }), (0, r.jsx)(eJ, {
                                                                    children: a ? (0, r.jsxs)(r.Fragment, {
                                                                        children: [a, (0, r.jsx)(x.Z, {
                                                                            variant: "eth",
                                                                            css: {
                                                                                height: "16px",
                                                                                ml: "$sm",
                                                                                width: "9px"
                                                                            }
                                                                        })]
                                                                    }) : "-"
                                                                })]
                                                            }), (0, r.jsxs)(eU, {
                                                                children: [(0, r.jsx)(eQ, {
                                                                    children: "1D Volume"
                                                                }), (0, r.jsx)(eJ, {
                                                                    children: d ? (0, r.jsxs)(r.Fragment, {
                                                                        children: [d, (0, r.jsx)(x.Z, {
                                                                            variant: "eth",
                                                                            css: {
                                                                                height: "16px",
                                                                                ml: "$sm",
                                                                                width: "9px"
                                                                            }
                                                                        })]
                                                                    }) : "-"
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                }, "popular-collection-".concat(t))
                            })
                        })]
                    })
                },
                e0 = (0, l.ZP)(h.D, {
                    overflowX: "scroll",
                    scrollbarWidth: 0,
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                e1 = (0, l.ZP)(h.D, {
                    left: 0,
                    position: "sticky",
                    scrollbarWidth: 0,
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                e2 = (0, l.ZP)(h.D, {
                    flexDirection: "row"
                }),
                e4 = (0, l.ZP)("span", {
                    cursor: "pointer",
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "150%",
                    mr: "$lg",
                    "&:hover": {
                        color: "$white1000"
                    },
                    variants: {
                        active: {
                            true: {
                                color: "$yellow300",
                                textShadow: "0px 0px 1px #FF9900, 0px 0px 5px rgba(249, 164, 0, 0.6), 0px 5px 4px rgba(249, 164, 0, 0.4)",
                                "&:hover": {
                                    color: "$yellow300"
                                }
                            }
                        }
                    }
                }),
                e5 = (0, l.ZP)(h.D, {
                    borderCollapse: "collapse",
                    mt: "$lg",
                    tableLayout: "fixed"
                }),
                e3 = (0, l.ZP)(h.D, {
                    flexDirection: "row"
                }),
                e6 = (0, l.ZP)("th", {
                    color: "$gray300",
                    display: "flex",
                    fontSize: "12px",
                    fontWeight: 700,
                    justifyContent: "flex-end",
                    lineHeight: "16.8px",
                    padding: "$xs $md",
                    textTransform: "uppercase",
                    width: "140px",
                    variants: {
                        sticky: {
                            true: {
                                backgroundColor: "$black800",
                                justifyContent: "flex-start",
                                left: 0,
                                pl: 0,
                                position: "sticky",
                                "@tablet": {
                                    flex: 1
                                }
                            }
                        }
                    }
                }),
                e8 = (0, l.ZP)("td", {
                    alignItems: "center",
                    color: "$gray100",
                    display: "flex",
                    fontSize: "12px",
                    lineHeight: "21px",
                    width: "140px",
                    "& a": {
                        alignItems: "center",
                        color: "$gray100",
                        display: "flex",
                        height: "100%",
                        justifyContent: "flex-end",
                        padding: "5px $md",
                        width: "100%"
                    },
                    variants: {
                        sticky: {
                            true: {
                                backgroundColor: "$black800",
                                flex: 1,
                                fontWeight: 700,
                                justifyContent: "flex-start",
                                left: 0,
                                pl: 0,
                                position: "sticky",
                                "@tablet": {
                                    flex: 1
                                }
                            }
                        },
                        variant: {
                            green: {
                                color: "$green300",
                                "& a": {
                                    color: "$green300"
                                }
                            },
                            red: {
                                color: "$orange400",
                                "& a": {
                                    color: "$orange400"
                                }
                            }
                        }
                    }
                }),
                e7 = (0, l.ZP)("tr", {
                    display: "flex",
                    flexDirection: "row",
                    mb: "0",
                    "@tablet": {
                        width: "100%"
                    }
                }),
                e9 = (0, l.ZP)(h.D, {
                    borderTop: "1px solid $gray600",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    pt: "$lg",
                    width: "fit-content",
                    ["& ".concat(e7, ":hover, & ").concat(e7, ":hover ").concat(e8)]: {
                        backgroundColor: "rgb(23, 23, 23)"
                    },
                    "& tr:last-child": {
                        mb: 0
                    }
                }),
                te = (0, l.ZP)("span", {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%"
                }),
                tt = e => {
                    let {
                        data: t,
                        headings: i,
                        renderRow: n,
                        tabs: a
                    } = e, l = (0, p.useRef)(null), [o, s] = (0, p.useState)(0), d = t[o], c = e => t => {
                        t && t.preventDefault(), s(e)
                    };
                    return (0, r.jsxs)(e0, {
                        children: [a && (0, r.jsx)(e1, {
                            children: (0, r.jsx)(e2, {
                                children: a.map((e, t) => (0, r.jsx)(e4, {
                                    active: t === o,
                                    onClick: c(t),
                                    children: e
                                }, "table-tab-".concat(t)))
                            })
                        }), (0, r.jsxs)(e5, {
                            as: "table",
                            ref: l,
                            children: [(0, r.jsx)(e3, {
                                as: "thead",
                                children: (0, r.jsx)(e7, {
                                    children: i.map((e, t) => (0, r.jsx)(e6, {
                                        sticky: 0 === t,
                                        children: e
                                    }, "table-heading-".concat(t)))
                                })
                            }), (0, r.jsx)(e9, {
                                as: "tbody",
                                children: d.map((e, t) => (0, r.jsx)(p.Fragment, {
                                    children: n(e)
                                }, "table-row-".concat(t)))
                            })]
                        })]
                    })
                },
                ti = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(e7, {
                        children: t
                    })
                },
                tr = e => {
                    let {
                        children: t,
                        sticky: i,
                        variant: n
                    } = e;
                    return (0, r.jsx)(e8, {
                        sticky: i,
                        variant: n,
                        children: t
                    })
                },
                tn = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(te, {
                        children: t
                    })
                };
            tt.Cell = tr, tt.CellText = tn, tt.Row = ti;
            let ta = (0, l.ZP)(f, {
                    mt: "$xl3",
                    "th:nth-child(1)": {
                        width: "200px"
                    },
                    "tr td:nth-child(1)": {
                        width: "200px"
                    },
                    "@desktop": {
                        margin: "$xl3 auto 0",
                        p: 0,
                        maxWidth: "1360px"
                    }
                }),
                tl = (0, l.ZP)("img", {
                    border: "1px solid #303030",
                    borderRadius: "32px",
                    display: "inline-flex",
                    height: "40px",
                    mr: "$md",
                    width: "40px"
                }),
                to = e => {
                    let {
                        columnsColored: t,
                        columnsSuffix: i,
                        data: n,
                        headings: a,
                        tabs: l
                    } = e, o = e => {
                        let {
                            collectionUrl: n,
                            iconUrl: a,
                            title: l,
                            values: o
                        } = e, s = o.map((e, a) => {
                            let l;
                            e = e.toString(), t.includes(a) && (l = e.startsWith("-") ? "red" : "green");
                            let o = null;
                            if (i[a]) switch (i[a]) {
                                case "ETH":
                                    o = (0, r.jsx)(x.Z, {
                                        variant: "eth",
                                        css: {
                                            height: "16px",
                                            ml: "$sm",
                                            width: "9px"
                                        }
                                    });
                                    break;
                                case "%":
                                    o = "%"
                            }
                            return "-" === e && (o = null), (0, r.jsx)(tt.Cell, {
                                variant: l,
                                children: (0, r.jsxs)(c(), {
                                    href: n,
                                    children: [e, o]
                                })
                            }, "table-cell-".concat(a))
                        });
                        return s.unshift((0, r.jsx)(tt.Cell, {
                            sticky: !0,
                            children: (0, r.jsxs)(c(), {
                                href: n,
                                children: [(0, r.jsx)(tl, {
                                    src: a
                                }), (0, r.jsx)(tt.CellText, {
                                    children: l
                                })]
                            })
                        }, "table-cell-sticky")), (0, r.jsx)(tt.Row, {
                            children: s
                        })
                    };
                    return (0, r.jsx)(ta, {
                        children: (0, r.jsx)(tt, {
                            data: n,
                            headings: a,
                            renderRow: o,
                            tabs: l
                        })
                    })
                };
            var ts = i(5398),
                td = i(5803);
            let tc = (0, l.ZP)(f, {
                    backgroundColor: "$black800",
                    borderRadius: "4px",
                    boxShadow: "inset 0px 0px 100px rgba(86, 28, 0, 0.5)",
                    height: "540px",
                    justifyContent: "flex-start",
                    margin: "$xl2 auto 0",
                    overflow: "hidden",
                    "@tablet": {
                        height: "600px"
                    },
                    "@tabletLandscape": {
                        height: "640px",
                        maxWidth: "960px"
                    },
                    "@desktop": {
                        height: "720px",
                        maxWidth: "1360px"
                    }
                }),
                tx = (0, l.ZP)(h.D, {
                    background: "linear-gradient(180deg, rgba(8, 4, 4, 0) 50%, #080404 90.22%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                    height: "580px",
                    left: "-500px",
                    opacity: .5,
                    position: "absolute",
                    top: "-40px",
                    width: "1360px",
                    "& video": {
                        zIndex: -3
                    },
                    "@tablet": {
                        height: "720px",
                        left: "-40%",
                        width: "180%"
                    },
                    "@tabletLandscape": {},
                    "@desktop": {
                        height: "100%",
                        left: 0,
                        p: "40px",
                        width: "100%"
                    }
                }),
                tp = (0, l.ZP)(h.D, {
                    backgroundColor: "rgba(8, 4, 4, 0.5)",
                    height: "100%",
                    left: 0,
                    mixBlendMode: "normal",
                    position: "absolute",
                    top: 0,
                    zIndex: -2
                }),
                th = (0, l.ZP)(h.D, {
                    bottom: 0,
                    left: "-50%",
                    position: "absolute",
                    width: "200%",
                    zIndex: 0,
                    "@tablet": {
                        bottom: "-10%",
                        left: "-25%",
                        width: "150%"
                    },
                    "@tabletLandscape": {
                        bottom: 0,
                        left: 0,
                        width: "100%"
                    }
                }),
                tg = (0, l.ZP)(h.D, {
                    zIndex: 0
                }),
                tf = (0, l.ZP)($.w, {
                    color: "$orange200",
                    flex: "unset",
                    fontSize: "24px",
                    fontWeight: 400,
                    letterSpacing: "-0.017em",
                    lineHeight: "150%",
                    mt: "40px",
                    textShadow: "0px 4px 4px rgba(249, 82, 0, 0.5), 0px 0px 2px rgba(255, 135, 0, 0.5), 0px 0px 4px #FF8700, 0px 0px 10px rgba(249, 15, 0, 0.9), -1px 8px 13px rgba(249, 15, 0, 0.6)",
                    textTransform: "uppercase",
                    "@tablet": {
                        fontSize: "32px",
                        mt: "100px"
                    }
                }),
                tm = (0, l.ZP)(Z, {
                    color: "$gray100",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "170%",
                    justifyContent: "center",
                    textAlign: "center",
                    "@tablet": {
                        fontSize: "16px",
                        margin: "0 auto",
                        maxWidth: "640px"
                    }
                }),
                tu = (0, l.ZP)(h.D, {
                    alignItems: "center",
                    margin: "$xl2 auto 0",
                    width: "50%"
                }),
                tb = v()(() => i.e(586).then(i.bind(i, 586)), {
                    loadableGenerated: {
                        webpack: () => [586]
                    },
                    ssr: !1
                }),
                tw = v()(() => i.e(24).then(i.bind(i, 1024)), {
                    loadableGenerated: {
                        webpack: () => [1024]
                    },
                    ssr: !1
                }),
                tj = e => {
                    let {
                        buttonText: t,
                        heading: i,
                        text: n
                    } = e, {
                        isActive: a,
                        ref: l
                    } = P({
                        threshold: .25
                    }), [o, s] = (0, p.useState)(!1);
                    return ((0, p.useEffect)(() => {
                        (0, td.Z)() && s(!0)
                    }, []), o) ? (0, r.jsx)("div", {
                        ref: l
                    }) : (0, r.jsxs)(tc, {
                        ref: l,
                        children: [(0, r.jsx)(tx, {
                            children: (0, r.jsx)(tb, {
                                isActive: a
                            })
                        }), (0, r.jsx)(tp, {}), (0, r.jsx)(th, {
                            children: (0, r.jsx)(tw, {
                                isActive: a
                            })
                        }), (0, r.jsxs)(tg, {
                            children: [(0, r.jsx)(tf, {
                                children: i
                            }), (0, r.jsx)(tm, {
                                dangerouslySetInnerHTML: {
                                    __html: n
                                }
                            }), (0, r.jsx)(tu, {
                                children: (0, r.jsx)(ts.Z, {
                                    href: "https://blur.io/airdrop",
                                    filled: !0,
                                    children: t
                                })
                            })]
                        })]
                    })
                },
                ty = (0, l.ZP)("div", {
                    alignItems: "center",
                    display: "flex",
                    flex: "1",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: "$md",
                    width: "120px",
                    "@tablet": {
                        margin: "$md"
                    }
                }),
                tv = (0, l.ZP)("div", {
                    borderRadius: "45px",
                    boxShadow: "0 0 40px rgba(249, 82, 0, 0.5)",
                    display: "flex",
                    height: "90px",
                    width: "90px",
                    "@tablet": {
                        borderRadius: "40px",
                        height: "80px",
                        width: "80px"
                    }
                }),
                t$ = (0, l.ZP)("span", {
                    border: "2px solid $orange200",
                    borderRadius: "45px",
                    display: "flex",
                    height: "100%",
                    overflow: "hidden",
                    width: "100%",
                    "@tablet": {
                        borderRadius: "40px"
                    }
                }),
                tk = (0, l.ZP)("img", {
                    display: "flex",
                    height: "100%",
                    transform: "scale(1.1)",
                    width: "100%"
                }),
                tP = e => {
                    let {
                        img: t,
                        text: i
                    } = e;
                    return (0, r.jsxs)(ty, {
                        children: [(0, r.jsx)(tv, {
                            children: (0, r.jsx)(t$, {
                                children: (0, r.jsx)(tk, {
                                    src: t
                                })
                            })
                        }), (0, r.jsx)(Y, {
                            css: {
                                alignItems: "flex-start",
                                height: "48px",
                                justifyContent: "center",
                                mt: "$md",
                                mx: "auto",
                                textTransform: "uppercase",
                                width: "80%"
                            },
                            children: i
                        })]
                    })
                },
                tZ = (0, l.ZP)(h.D, {
                    mx: "$md",
                    my: "$xl2",
                    width: "calc(100% - 24px)",
                    "@tablet": {
                        margin: "0 auto",
                        maxWidth: "980px"
                    },
                    "@desktop": {
                        maxWidth: "1360px"
                    },
                    ["& ".concat($.w)]: {
                        p: "$md",
                        "@tablet": {
                            px: "$lg",
                            py: 0
                        }
                    }
                }),
                tD = e => {
                    let {
                        sectionData: t
                    } = e;
                    return (0, r.jsx)(tZ, {
                        children: (0, r.jsx)(E, {
                            heading: t.heading,
                            children: t.items.map((e, t) => {
                                let {
                                    img: i,
                                    text: n
                                } = e;
                                return (0, r.jsx)(tP, {
                                    img: i,
                                    text: n
                                }, "orange-circle-".concat(t))
                            })
                        })
                    })
                },
                tS = e => {
                    let {
                        sections: t
                    } = e;
                    return (0, r.jsxs)(s, {
                        children: [(0, r.jsx)(eT, {
                            collections: t.heroCollections
                        }), (0, r.jsx)(to, { ...t.tableCollections
                        }), (0, r.jsx)(j, {
                            children: t.contentBanner
                        }), (0, r.jsx)(eK, { ...t.popularCollections
                        }), (0, r.jsx)(L, { ...t.fastestMarketplace
                        }), (0, r.jsx)(tj, { ...t.tokenAirdrop
                        }), (0, r.jsx)(O, { ...t.features
                        }), (0, r.jsx)(tD, {
                            sectionData: t.trustedBy
                        }), (0, r.jsx)(U, {})]
                    })
                };
            var tC = !0,
                tI = tS
        },
        3301: function(e, t) {
            "use strict";
            let i = function() {
                this.spec_string = navigator.userAgent, this.name = this.get_name(), this.version = this.get_version()
            };
            i.prototype.get_name = function() {
                var e = this.spec_string,
                    t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"], /trident/i.test(t[1])) {
                    var i = /\brv[ :]+(\d+)/g.exec(e) || [];
                    return "IE"
                }
                if ("Chrome" === t[1]) {
                    var i = e.match(/\bOPR|Edge\/(\d+)/);
                    if (null != i) return "Opera"
                }
                return null != (i = e.match(/version\/(\d+)/i)) && t.splice(1, 1, i[1]), t[0]
            }, i.prototype.get_version = function() {
                var e = this.spec_string,
                    t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"], /trident/i.test(t[1])) {
                    var i = /\brv[ :]+(\d+)/g.exec(e) || [],
                        r = i[1] || "";
                    return r
                }
                if ("Chrome" === t[1]) {
                    var i = e.match(/\bOPR|Edge\/(\d+)/),
                        r = i[1];
                    if (null != i) return r
                }
                null != (i = e.match(/version\/(\d+)/i)) && t.splice(1, 1, i[1]);
                var r = t[1];
                return r
            }, t.Z = function() {
                let e = new i;
                return e
            }()
        },
        3278: function(e, t, i) {
            "use strict";
            i.d(t, {
                $9: function() {
                    return x
                },
                Fp: function() {
                    return f
                },
                Nb: function() {
                    return d
                },
                VD: function() {
                    return h
                },
                _x: function() {
                    return p
                },
                iC: function() {
                    return o
                },
                kd: function() {
                    return l
                },
                pd: function() {
                    return c
                },
                rm: function() {
                    return s
                },
                zn: function() {
                    return g
                }
            });
            var r = i(6388),
                n = i(6622),
                a = i(6794);
            let l = (0, a.ZP)(r.D, {
                    my: "$lg",
                    position: "relative"
                }),
                o = (0, a.ZP)(r.D, {
                    my: "$xl2",
                    "@tabletLandscape": {
                        flexDirection: "row",
                        my: "$xl3"
                    },
                    "@desktop": {
                        margin: "$xl3 auto",
                        maxWidth: "1024px"
                    }
                }),
                s = (0, a.ZP)(r.D, {
                    "@tabletLandscape": {},
                    variants: {
                        order: {
                            swap: {
                                "@tabletLandscape": {
                                    ml: "60px"
                                }
                            }
                        }
                    }
                }),
                d = (0, a.ZP)(r.D, {
                    "@tabletLandscape": {
                        justifyContent: "center"
                    },
                    variants: {
                        order: {
                            swap: {
                                "@tabletLandscape": {
                                    order: -1
                                }
                            }
                        }
                    }
                }),
                c = (0, a.ZP)(n.w, {
                    flex: "auto",
                    fontSize: "20px",
                    px: "$md",
                    textAlign: "left",
                    textShadow: "0px 0px 1px #FF8700, 0px 0px 5px rgba(249, 82, 0, 0.6), 0px 5px 4px rgba(249, 15, 0, 0.4)",
                    "@tablet": {
                        textAlign: "center"
                    },
                    "@tabletLandscape": {
                        justifyContent: "flex-start",
                        mt: 0,
                        textAlign: "left"
                    },
                    "@desktop": {
                        mb: "$xl2",
                        maxWidth: "480px"
                    }
                }),
                x = (0, a.ZP)(r.D, {
                    flex: "1 1 100%",
                    flexDirection: "column",
                    height: "200px",
                    margin: "0 auto $lg",
                    padding: "0 $md",
                    width: "100%",
                    maxWidth: "500px",
                    ["& div ".concat(n.w)]: {
                        pl: "$md"
                    },
                    "@tablet": {
                        mt: "$xl2"
                    },
                    "@tabletLandscape": {
                        height: "unset",
                        m: 0
                    },
                    "@desktop": {
                        maxWidth: "400px"
                    }
                }),
                p = (0, a.ZP)("div", {
                    display: "flex",
                    overflow: "hidden",
                    "& img": {
                        mixBlendMode: "lighten"
                    },
                    "& .twitter-tweet": {
                        margin: "0 !important",
                        position: "relative",
                        minWidth: "320px",
                        "@desktop": {
                            minWidth: "390px",
                            maxWidth: "400px !important"
                        },
                        "&:after": {
                            border: "1px solid #000",
                            borderRadius: "12px",
                            content: "",
                            height: "100%",
                            left: 0,
                            pointerEvents: "none",
                            position: "absolute",
                            top: 0,
                            width: "100%"
                        }
                    }
                }),
                h = (0, a.ZP)("div", {
                    cursor: "pointer",
                    position: "relative"
                }),
                g = (0, a.ZP)(r.D, {}),
                f = (0, a.ZP)(r.D, {
                    flex: "1 1 100%",
                    height: "400px",
                    "& video": {
                        maxWidth: "calc(100vw - 20px)"
                    },
                    "@tabletLandscape": {
                        "& video": {
                            maxWidth: "100%"
                        }
                    },
                    "@desktop": {
                        mr: "$xl2",
                        position: "relative",
                        "& video": {
                            height: "100%",
                            objectFit: "fill"
                        }
                    },
                    variants: {
                        browserVersion: {
                            safariLatest: {
                                "& video": {
                                    mt: "-20px"
                                }
                            },
                            safariLegacy: {},
                            ignore: {}
                        }
                    }
                })
        },
        6622: function(e, t, i) {
            "use strict";
            i.d(t, {
                w: function() {
                    return n
                }
            });
            var r = i(6794);
            let n = (0, r.ZP)("h1", {
                color: "$heading$color",
                display: "flex",
                flex: "1 1 100%",
                fontWeight: 300,
                justifyContent: "center",
                my: "16px",
                textAlign: "center",
                textTransform: "uppercase",
                width: "100%",
                variants: {
                    as: {
                        h1: {
                            fontSize: "$xl3",
                            letterSpacing: "-0.017em",
                            lineHeight: "140%",
                            "@tablet": {
                                fontSize: "$xl7"
                            }
                        },
                        h2: {
                            fontSize: "$xl3",
                            letterSpacing: "-2px",
                            lineHeight: "150%"
                        },
                        h3: {
                            fontSize: "$md",
                            lineHeight: "160%",
                            textTransform: "unset",
                            textShadow: "none",
                            "@tablet": {
                                fontSize: "$xl3"
                            }
                        },
                        h4: {
                            fontSize: "$xl",
                            letterSpacing: "-0.017em",
                            lineHeight: "24px"
                        }
                    },
                    color: {
                        gray: {
                            color: "$gray200",
                            textShadow: "none"
                        },
                        green: {
                            color: "$green300",
                            textShadow: "\n          0px 0px 1.89208px #2AF38E,\n          0px 0px 9.4604px rgba(42, 243, 142, 0.6),\n          0px 9.4604px 7.56832px rgba(42, 243, 142, 0.4)\n        "
                        },
                        orange: {
                            color: "$orange200",
                            textShadow: "\n          0px 4px 4px rgba(249, 82, 0, 0.5),\n          0px 0px 2px rgba(255, 135, 0, 0.5),\n          0px 0px 4px #FF8700,\n          0px 0px 10px rgba(249, 15, 0, 0.9),\n          -1px 8px 13px rgba(249, 15, 0, 0.6)\n        "
                        },
                        reddish: {
                            color: "$orange400",
                            textShadow: "none"
                        }
                    }
                },
                compoundVariants: [{
                    as: "h3",
                    color: "green",
                    css: {
                        textShadow: "none"
                    }
                }],
                defaultVariants: {
                    color: "orange"
                }
            })
        }
    },
    function(e) {
        e.O(0, [874, 774, 888, 179], function() {
            return e(e.s = 7314)
        }), _N_E = e.O()
    }
]);