import{_ as e,o as t,c as i,g as l}from"./app.3ad51472.js";const v=JSON.parse('{"title":"\u6784\u5EFA\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"build.target","slug":"build-target","link":"#build-target","children":[]},{"level":2,"title":"build.polyfillModulePreload","slug":"build-polyfillmodulepreload","link":"#build-polyfillmodulepreload","children":[]}],"relativePath":"articles/gulp\u7684\u4F7F\u7528.md","lastUpdated":1663037283000}'),a={name:"articles/gulp\u7684\u4F7F\u7528.md"},o=l('<h1 id="build-options" tabindex="-1">\u6784\u5EFA\u9009\u9879 <a class="header-anchor" href="#build-options" aria-hidden="true">#</a></h1><h2 id="build-target" tabindex="-1">build.target <a class="header-anchor" href="#build-target" aria-hidden="true">#</a></h2><p>\u5728\u5B89\u88C5\u4E86 Vite \u7684\u9879\u76EE\u4E2D\uFF0C\u53EF\u4EE5\u5728 npm scripts \u4E2D\u4F7F\u7528 vite \u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u6216\u8005\u76F4\u63A5\u4F7F\u7528 npx vite \u8FD0\u884C\u5B83\u3002\u4E0B\u9762\u662F\u901A\u8FC7\u811A\u624B\u67B6\u521B\u5EFA\u7684 Vite \u9879\u76EE\u4E2D\u9ED8\u8BA4\u7684 npm scripts\uFF1A</p><p>{ &quot;scripts&quot;: { &quot;dev&quot;: &quot;vite&quot;, // \u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u522B\u540D\uFF1A<code>vite dev</code>\uFF0C<code>vite serve</code> &quot;build&quot;: &quot;vite build&quot;, // \u4E3A\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u4EA7\u7269 &quot;preview&quot;: &quot;vite preview&quot; // \u672C\u5730\u9884\u89C8\u751F\u4EA7\u6784\u5EFA\u4EA7\u7269 } } \u53EF\u4EE5\u6307\u5B9A\u989D\u5916\u7684\u547D\u4EE4\u884C\u9009\u9879\uFF0C\u5982 --port \u6216 --https\u3002\u8FD0\u884C npx vite --help \u83B7\u5F97\u5B8C\u6574\u7684\u547D\u4EE4\u884C\u9009\u9879\u5217\u8868\u3002</p><h2 id="build-polyfillmodulepreload" tabindex="-1">build.polyfillModulePreload <a class="header-anchor" href="#build-polyfillmodulepreload" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u8FEB\u4E0D\u53CA\u5F85\u60F3\u8981\u4F53\u9A8C\u6700\u65B0\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u81EA\u884C\u514B\u9686 vite \u4ED3\u5E93 \u5230\u672C\u5730\u673A\u5668\u4E0A\u7136\u540E\u81EA\u884C\u5C06\u5176\u94FE\u63A5\uFF08\u5C06\u9700\u8981 pnpm\uFF09\uFF1A</p><p>git clone <a href="https://github.com/vitejs/vite.git" target="_blank" rel="noreferrer">https://github.com/vitejs/vite.git</a> cd vite pnpm install cd packages/vite pnpm run build pnpm link --global # you can use your preferred package manager for this step \u7136\u540E\uFF0C\u56DE\u5230\u4F60\u7684 Vite \u9879\u76EE\u5E76\u8FD0\u884C pnpm link --global vite\uFF08\u6216\u8005\u4F7F\u7528\u4F60\u7684\u5176\u4ED6\u5305\u7BA1\u7406\u5DE5\u5177\u6765\u5168\u5C40\u94FE\u63A5 vite\uFF09\u3002\u91CD\u65B0\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\u6765\u4F53\u9A8C\u65B0\u529F\u80FD\u5427\uFF01</p>',7),r=[o];function d(p,u,n,s,c,h){return t(),i("div",null,r)}const b=e(a,[["render",d]]);export{v as __pageData,b as default};
