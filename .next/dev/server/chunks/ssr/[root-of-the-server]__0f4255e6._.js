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
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHome = pathname === '/';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 120,
                    padding: '40px 60px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backgroundColor: 'transparent',
                    pointerEvents: 'none'
                },
                children: !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsOpen(true),
                    style: {
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        pointerEvents: 'auto',
                        padding: '10px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '30px',
                                height: '1.5px',
                                backgroundColor: isHome ? '#fff' : '#000',
                                transition: '0.3s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: '30px',
                                height: '1.5px',
                                backgroundColor: isHome ? '#fff' : '#000',
                                transition: '0.3s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navigation.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '50vw',
                    height: '100vh',
                    backgroundColor: '#0000FF',
                    zIndex: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingLeft: '8vw',
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(false),
                        style: {
                            position: 'absolute',
                            top: '40px',
                            right: '60px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '10px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M1 1L23 23M23 1L1 22.5",
                                stroke: "white",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navigation.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '2.5vw',
                            listStyle: 'none',
                            margin: 0,
                            padding: 0
                        },
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setIsOpen(false),
                                    style: {
                                        fontSize: 'clamp(28px, 5vw, 56px)',
                                        letterSpacing: '0.15em',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        textDecoration: 'none',
                                        color: '#ffffff',
                                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                                        transition: 'opacity 0.3s ease',
                                        opacity: pathname === item.href ? 1 : 0.7
                                    },
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/Navigation.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(false),
                style: {
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    zIndex: 140
                }
            }, void 0, false, {
                fileName: "[project]/components/Navigation.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
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
        title: 'Hero Study',
        year: 2024,
        medium: 'Oil and Mixed Media on Canvas',
        size: '220 x 200 cm',
        image: '/images/hero/hero.jpg',
        series: '2024'
    },
    {
        id: 'asemic-01',
        title: 'Asemic Writing I',
        year: 2024,
        medium: 'Oil on Canvas',
        size: '180 x 160 cm',
        image: '/images/artworks/2024_asemic-writing_01.jpg',
        series: '2024'
    },
    {
        id: 'asemic-02',
        title: 'Asemic Writing II',
        year: 2024,
        medium: 'Oil on Canvas',
        size: '180 x 160 cm',
        image: '/images/artworks/2024_asemic-writing_02.jpg',
        series: '2024'
    },
    {
        id: 'meihua-main',
        title: 'Meihua',
        year: 2024,
        medium: 'Mixed Media on Canvas',
        size: '200 x 200 cm',
        image: '/images/artworks/meihua.png',
        series: '2024'
    },
    {
        id: 'art-9',
        title: 'Composition 9',
        year: 2024,
        medium: 'Oil on Canvas',
        size: '150 x 150 cm',
        image: '/images/artworks/9.jpg',
        series: '2024'
    },
    {
        id: 'art-10',
        title: 'Composition 10',
        year: 2024,
        medium: 'Oil on Canvas',
        size: '150 x 150 cm',
        image: '/images/artworks/10.jpg',
        series: '2024'
    },
    // 2023 Series
    {
        id: 'bio-abstract-01',
        title: 'Bio-Abstract I',
        year: 2023,
        medium: 'Oil on Canvas',
        size: '160 x 140 cm',
        image: '/images/artworks/2023_bio-abstract_01.jpg',
        series: '2023'
    },
    {
        id: 'bio-abstract-02',
        title: 'Bio-Abstract II',
        year: 2023,
        medium: 'Oil on Canvas',
        size: '160 x 140 cm',
        image: '/images/artworks/2023_bio-abstract_02.jpg',
        series: '2023'
    },
    {
        id: 'ocean-2023',
        title: 'Ocean Study',
        year: 2023,
        medium: 'Oil on Canvas',
        size: '180 x 180 cm',
        image: '/images/artworks/ocean.jpg',
        series: '2023'
    },
    {
        id: 'art-12',
        title: 'Composition 12',
        year: 2023,
        medium: 'Oil on Canvas',
        size: '120 x 120 cm',
        image: '/images/artworks/12.jpg',
        series: '2023'
    },
    // Archive Series (2022 & Older)
    {
        id: 'specter-01',
        title: 'Specter I',
        year: 2022,
        medium: 'Oil on Canvas',
        size: '140 x 120 cm',
        image: '/images/artworks/2022_specter_01.jpg',
        series: 'Archive'
    },
    {
        id: 'specter-02',
        title: 'Specter II',
        year: 2022,
        medium: 'Oil on Canvas',
        size: '140 x 120 cm',
        image: '/images/artworks/2022_specter_02.jpg',
        series: 'Archive'
    },
    {
        id: 'cartographies',
        title: 'Cartographies of Feeling',
        year: 2022,
        medium: 'Mixed Media',
        size: '200 x 180 cm',
        image: '/images/artworks/Cartographies of Feeling.jpg',
        series: 'Archive'
    },
    {
        id: 'rite-spring',
        title: 'The Rite of Spring',
        year: 2022,
        medium: 'Oil on Canvas',
        size: '220 x 200 cm',
        image: '/images/artworks/The Rite of Spring.jpg',
        series: 'Archive'
    },
    {
        id: 'dancer-1',
        title: 'Dancer I',
        year: 2021,
        medium: 'Oil on Canvas',
        size: '120 x 100 cm',
        image: '/images/artworks/dancer.jpg',
        series: 'Archive'
    },
    {
        id: 'dancer-2',
        title: 'Dancer II',
        year: 2021,
        medium: 'Oil on Canvas',
        size: '120 x 100 cm',
        image: '/images/artworks/dancer 2.jpg',
        series: 'Archive'
    },
    {
        id: 'archive-01',
        title: 'Archive Study I',
        year: 2021,
        medium: 'Mixed Media',
        size: '100 x 100 cm',
        image: '/images/artworks/2021_archive_01.jpg',
        series: 'Archive'
    },
    {
        id: 'noosa-archive',
        title: 'Noosa Study',
        year: 2021,
        medium: 'Oil on Canvas',
        size: '140 x 140 cm',
        image: '/images/artworks/noosa.jpg',
        series: 'Archive'
    },
    {
        id: 'tower-hill-archive',
        title: 'Tower Hill',
        year: 2021,
        medium: 'Oil on Canvas',
        size: '160 x 120 cm',
        image: '/images/artworks/tower hill.jpg',
        series: 'Archive'
    },
    {
        id: 'masada-archive',
        title: 'Masada Mountain Range',
        year: 2021,
        medium: 'Oil on Canvas',
        size: '240 x 120 cm',
        image: '/images/artworks/masada mountain range1 2.jpg',
        series: 'Archive'
    },
    {
        id: 'art-8',
        title: 'Composition 8',
        year: 2021,
        medium: 'Oil on Canvas',
        size: 'Varies',
        image: '/images/artworks/8.jpg',
        series: 'Archive'
    },
    {
        id: 'art-7',
        title: 'Composition 7',
        year: 2021,
        medium: 'Oil on Canvas',
        size: 'Varies',
        image: '/images/artworks/7.jpg',
        series: 'Archive'
    },
    {
        id: 'art-6',
        title: 'Composition 6',
        year: 2021,
        medium: 'Oil on Canvas',
        size: 'Varies',
        image: '/images/artworks/6.jpg',
        series: 'Archive'
    },
    {
        id: 'art-5',
        title: 'Composition 5',
        year: 2021,
        medium: 'Oil on Canvas',
        size: 'Varies',
        image: '/images/artworks/5.jpg',
        series: 'Archive'
    },
    {
        id: 'art-4',
        title: 'Composition 4',
        year: 2021,
        medium: 'Oil on Canvas',
        size: 'Varies',
        image: '/images/artworks/4.jpg',
        series: 'Archive'
    },
    {
        id: 'art-3',
        title: 'Composition 3',
        year: 2021,
        medium: 'Oil on Canvas',
        size: 'Varies',
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
"[project]/app/selected-works/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$artworks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/artworks.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function PortfolioIndex() {
    const [hoveredSlug, setHoveredSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            color: '#000'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grain-overlay",
                style: {
                    opacity: 0.02
                }
            }, void 0, false, {
                fileName: "[project]/app/selected-works/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/selected-works/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '180px 60px 120px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    style: {
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2vw'
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$artworks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seriesOrder"].map((series)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            style: {
                                position: 'relative'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/selected-works/${series.slug}`,
                                onMouseEnter: ()=>setHoveredSlug(series.slug),
                                onMouseLeave: ()=>setHoveredSlug(null),
                                style: {
                                    textDecoration: 'none',
                                    color: hoveredSlug && hoveredSlug !== series.slug ? '#eee' : '#000',
                                    fontSize: 'clamp(40px, 8vw, 120px)',
                                    fontWeight: 700,
                                    letterSpacing: '-0.02em',
                                    textTransform: 'uppercase',
                                    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                                    transition: 'color 0.4s ease',
                                    display: 'block',
                                    textAlign: 'center'
                                },
                                children: series.name
                            }, void 0, false, {
                                fileName: "[project]/app/selected-works/page.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, series.slug, false, {
                            fileName: "[project]/app/selected-works/page.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/selected-works/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/selected-works/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/selected-works/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f4255e6._.js.map