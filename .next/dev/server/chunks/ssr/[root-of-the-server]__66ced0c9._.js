module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const navItems = [
    {
        label: 'HOME',
        href: '/'
    },
    {
        label: 'BIO',
        href: '/bio'
    },
    {
        label: 'PORTFOLIO',
        href: '/selected-works'
    },
    {
        label: 'EXHIBITIONS',
        href: '/exhibitions'
    },
    {
        label: 'CONTACT',
        href: '/contact'
    }
];
function Navigation() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    // Close menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMenuOpen(false);
    }, [
        pathname
    ]);
    // Mobile Navigation
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '60px',
                        backgroundColor: '#1a1a1a',
                        zIndex: 120,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 20px',
                        boxSizing: 'border-box'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                fontFamily: "'Courier New', monospace",
                                fontSize: '14px',
                                letterSpacing: '0.15em',
                                color: '#ffffff',
                                textDecoration: 'none',
                                fontWeight: 400
                            },
                            children: "CHELSEY L."
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            style: {
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '5px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: '24px',
                                        height: '2px',
                                        backgroundColor: '#fff',
                                        transition: 'transform 0.3s ease',
                                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: '24px',
                                        height: '2px',
                                        backgroundColor: '#fff',
                                        opacity: isMenuOpen ? 0 : 1,
                                        transition: 'opacity 0.3s ease'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: '24px',
                                        height: '2px',
                                        backgroundColor: '#fff',
                                        transition: 'transform 0.3s ease',
                                        transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navigation.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        top: '60px',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#1a1a1a',
                        zIndex: 119,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px 30px',
                        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                        opacity: isMenuOpen ? 1 : 0,
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        pointerEvents: isMenuOpen ? 'auto' : 'none'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            style: {
                                listStyle: 'none',
                                margin: 0,
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px'
                            },
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        style: {
                                            fontFamily: "'Courier New', monospace",
                                            fontSize: '18px',
                                            letterSpacing: '0.1em',
                                            textDecoration: 'none',
                                            color: pathname === item.href ? '#ffffff' : 'rgba(255,255,255,0.6)',
                                            textTransform: 'uppercase'
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 'auto',
                                fontFamily: "'Courier New', monospace",
                                fontSize: '12px',
                                color: 'rgba(255,255,255,0.3)',
                                letterSpacing: '0.05em'
                            },
                            children: "Melbourne, AU"
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navigation.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    // Desktop Navigation (Left Sidebar)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '220px',
            height: '100vh',
            backgroundColor: '#1a1a1a',
            zIndex: 120,
            display: 'flex',
            flexDirection: 'column',
            padding: '60px 30px',
            boxSizing: 'border-box'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                style: {
                    fontFamily: "'Courier New', monospace",
                    fontSize: '18px',
                    letterSpacing: '0.15em',
                    color: '#ffffff',
                    textDecoration: 'none',
                    marginBottom: '60px',
                    fontWeight: 400
                },
                children: "CHELSEY L."
            }, void 0, false, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                },
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            style: {
                                fontFamily: "'Courier New', monospace",
                                fontSize: '16px',
                                letterSpacing: '0.1em',
                                textDecoration: 'none',
                                color: pathname === item.href ? '#ffffff' : 'rgba(255,255,255,0.5)',
                                transition: 'color 0.3s ease',
                                textTransform: 'uppercase'
                            },
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this)
                    }, item.href, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 'auto',
                    fontFamily: "'Courier New', monospace",
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.05em'
                },
                children: "Melbourne, AU"
            }, void 0, false, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navigation.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/artworks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "artworks",
    ()=>artworks,
    "seriesOrder",
    ()=>seriesOrder
]);
const artworks = [
    // 2024 Series
    {
        id: 'hero-main',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/Hero.png',
        series: '2024'
    },
    {
        id: 'meihua-main',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/meihua.png',
        series: '2024'
    },
    {
        id: 'art-9',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/9.jpg',
        series: '2024'
    },
    {
        id: 'art-10',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/10.jpg',
        series: '2024'
    },
    // 2023 Series
    {
        id: 'art-12',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/12.jpg',
        series: '2023'
    },
    {
        id: 'ocean-2023',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/ocean.jpg',
        series: '2023'
    },
    // Archive Series
    {
        id: 'cartographies',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/Cartographies of Feeling.jpg',
        series: 'Archive'
    },
    {
        id: 'rite-spring',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/The Rite of Spring.jpg',
        series: 'Archive'
    },
    {
        id: 'dancer-1',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/dancer.jpg',
        series: 'Archive'
    },
    {
        id: 'dancer-2',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/dancer 2.jpg',
        series: 'Archive'
    },
    {
        id: 'noosa-archive',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/noosa.jpg',
        series: 'Archive'
    },
    {
        id: 'tower-hill-archive',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/tower hill.jpg',
        series: 'Archive'
    },
    {
        id: 'masada-archive',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/masada mountain range1 2.jpg',
        series: 'Archive'
    },
    {
        id: 'art-8',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/8.jpg',
        series: 'Archive'
    },
    {
        id: 'art-7',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/7.jpg',
        series: 'Archive'
    },
    {
        id: 'art-6',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/6.jpg',
        series: 'Archive'
    },
    {
        id: 'art-5',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/5.jpg',
        series: 'Archive'
    },
    {
        id: 'art-4',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/4.jpg',
        series: 'Archive'
    },
    {
        id: 'art-3',
        title: 'Untitled Composition',
        year: '2025-2026',
        medium: 'Mixed media on canvas',
        size: 'Inquire for details',
        image: '/images/artworks/3.jpg',
        series: 'Archive'
    }
];
const seriesOrder = [
    {
        name: '2024',
        slug: '2024'
    },
    {
        name: '2023',
        slug: '2023'
    },
    {
        name: 'Archive',
        slug: 'archive'
    }
];
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$artworks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/artworks.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Home() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Show all high-res paintings on the home page for a full "floating" experience
    const images = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$artworks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["artworks"].map((a)=>a.image);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (images.length === 0) return;
        const timer = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % images.length);
        }, 5000);
        return ()=>clearInterval(timer);
    }, [
        images.length
    ]);
    if (images.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: '#000',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
            },
            children: "Loading Artwork..."
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#000',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain-overlay"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            images.map((src, index)=>{
                // Hero.png has internal white borders - apply extra zoom
                const isHeroImage = src.includes('Hero.png');
                const scaleAmount = isHeroImage ? 1.35 : 1.15;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        opacity: index === currentIndex ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: index === currentIndex ? 1 : 0,
                        overflow: 'hidden'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        alt: "Chelsey L. Artwork",
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform: `scale(${scaleAmount})`,
                            filter: 'contrast(1.02) brightness(1.02)',
                            imageRendering: '-webkit-optimize-contrast'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, src, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '150px',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                    zIndex: 5,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__66ced0c9._.js.map