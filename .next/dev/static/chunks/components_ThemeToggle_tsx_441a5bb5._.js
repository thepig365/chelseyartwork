(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ThemeToggle() {
    _s();
    const [isArchitectural, setIsArchitectural] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
            // Check if theme was previously set
            const savedTheme = localStorage.getItem('chelsey-theme');
            if (savedTheme === 'architectural') {
                setIsArchitectural(true);
                document.body.classList.add('theme-architectural');
            }
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const newValue = !isArchitectural;
        setIsArchitectural(newValue);
        if (newValue) {
            document.body.classList.add('theme-architectural');
            localStorage.setItem('chelsey-theme', 'architectural');
        } else {
            document.body.classList.remove('theme-architectural');
            localStorage.setItem('chelsey-theme', 'jade');
        }
    };
    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        style: {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            padding: '12px 20px',
            backgroundColor: isArchitectural ? '#1a1a1a' : '#0000FF',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
            fontFamily: isArchitectural ? "'Courier New', monospace" : 'Helvetica, sans-serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 500,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.2)';
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isArchitectural ? '#F4F3F0' : '#ffffff',
                    transition: 'background-color 0.3s ease'
                }
            }, void 0, false, {
                fileName: "[project]/components/ThemeToggle.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            isArchitectural ? 'Architectural' : 'Jade'
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeToggle.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "Mg7JJ2xTRVw2OAs1SqCucXKJ3Hw=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ThemeToggle_tsx_441a5bb5._.js.map