# School Cheats
Cheats curated for school chromebooks
## Blooket
[Blooket Hacks (courtesy of Minesraft2)](https://github.com/Minesraft2/Blooket-Cheats/)
## Gimkit
Works when you have answered enough questions
```
javascript:(function(){let a=localStorage['getItem']('gc_cheat_kits');if(a){a=JSON['parse'](a);let r={};for(let s of Object['keys'](a)){r={...r,...a[s]};}localStorage['setItem']('gc_cheat_answers',JSON['stringify'](r)),localStorage['removeItem']('gc_cheat_kits');}let b=JSON['parse'](localStorage['getItem']('gc_cheat_answers')??%27{}%27),c=prompt(%27Would\x20you\x20like\x20to\x20color\x20in\x20the\x20answers?\x20(Y/n)%27,%27Y%27)[%27toLowerCase%27]()==%27y%27;const d=()=>{localStorage[%27setItem%27](%27gc_cheat_answers%27,JSON[%27stringify%27](b));},e=t=>{return t[%27replace%27](/style=".*?"/g,%27%27);};var f=[];let g=null,h=null,i=null;var j=0x0;const k=%27.notranslate,\x20img[alt=\x22Answer\x20Choice\x22],\x20img[alt=\x22Question\x22]%27;let l=!![],m=new CSSStyleSheet();m[%27replaceSync%27](%27\x0a\x09\x09.answer-hover\x20{\x0a\x09\x09\x09transition:\x20filter\x200.18s\x20ease-in-out;\x0a\x09\x09}\x0a\x09\x09.answer-hover:hover\x20{\x0a\x09\x09\x09filter:\x20brightness(1.2);\x0a\x09\x09}\x0a\x09%27),document[%27adoptedStyleSheets%27][%27push%27](m);function n(){if(!l)return;let t=Array[%27from%27](document[%27querySelectorAll%27](k));if(t[%27length%27]>0x0){if(t[%27length%27]==0x1&&document[%27querySelector%27](%27input%27)==null){if(!g)return;j++;if(!b[g])b[g]={};i==%27text%27?b[g][%27textAnswer%27]=t[0x0][%27innerHTML%27]:b[g][%27correct%27]=t[0x0][%27parentElement%27][%27innerHTML%27];d(),console[%27log%27](%27Total\x20answers\x20stored:\x20%27+Object[%27keys%27](b)[%27length%27]+%27\x0aNew\x20answers\x20this\x20session:\x20%27+j);return;}g=e(t[0x0][%27parentElement%27][%27innerHTML%27]);if(t[%27length%27]==0x6)t=t[%27slice%27](0x2);else t=t[%27slice%27](0x1);if(g in b){let v=b[g];if(v[%27textAnswer%27]){if(t[0x0][%27parentElement%27][%27querySelector%27](%27.correct-answer%27)!=null)return;let z=v[%27textAnswer%27],A=document[%27createElement%27](%27div%27);A[%27innerHTML%27]=%27Correct\x20answer:\x20%27+z,A[%27classList%27][%27add%27](%27correct-answer%27),A[%27style%27][%27fontSize%27]=%2716px%27,t[0x0][%27parentElement%27][%27append%27](A);let B=document[%27querySelector%27](%27input%27);B[%27value%27]=z[%27slice%27](0x0,-0x1);return;}let w=[];for(let C=0x0;C<t[%27length%27];C++){let D=t[C],E=0x5;if(D[%27nodeName%27]==%27IMG%27)E=0x1;let F=D[%27nthparent%27](E),G=getComputedStyle(F)[%27background%27];w[%27push%27](G);}let x=![],y=![];for(let H=0x0;H<t[%27length%27];H++){let I=t[H];if(I[%27nodeName%27]==%27IMG%27)parentAmount=0x1;if(e(I[%27parentElement%27][%27innerHTML%27])==e(v[%27correct%27])){y=!![];break;}}if(!y){delete b[g];return;}for(let J=0x0;J<t[%27length%27]&&v[%27correct%27];J++){let K=t[J],L=0x3;if(K[%27nodeName%27]==%27IMG%27)L=0x1;if(e(K[%27parentElement%27][%27innerHTML%27])==e(v[%27correct%27])){if(c)K[%27nthparent%27](L)[%27style%27][%27backgroundColor%27]=%27green%27;else{let P=K[%27nthparent%27](0x5);if(K[%27nodeName%27]==%27IMG%27)P=K[%27parentElement%27];P[%27style%27][%27background%27]=w[0x3],P[%27classList%27][%27add%27](%27answer-hover%27);}let M=K[%27nthparent%27](L*0x2),N=document[%27querySelectorAll%27](k)[0x2];if(N[%27nodeName%27]==%27IMG%27)N=N[%27nthparent%27](0x3);else N=N[%27nthparent%27](0x7);let O=Array[%27from%27](N[%27children%27]);O[%27indexOf%27](M)!=O[%27length%27]-0x1&&N[%27append%27](M),x=!![];}else{if(c)K[%27nthparent%27](L)[%27style%27][%27backgroundColor%27]=%27red%27;else{if(x){let Q=K[%27nthparent%27](0x5);if(K[%27nodeName%27]==%27IMG%27)Q=K[%27parentElement%27];Q[%27style%27][%27background%27]=w[J-0x1],Q[%27classList%27][%27add%27](%27answer-hover%27);}}}}}let u=document[%27querySelector%27](%27.sc-RpuvT%27);if(u!=null){i=%27text%27,u[%27addEventListener%27](%27input%27,R=>{h=R[%27target%27][%27value%27];});return;}i=%27button%27;for(let R=0x0;R<t[%27length%27];R++){let S=t[R][%27nthparent%27](0x6);if(t[R][%27nodeName%27]==%27IMG%27)S=t[R][%27nthparent%27](0x2);f[%27indexOf%27](S)==-0x1&&f[%27push%27](S),S[%27addEventListener%27](%27click%27,function(){h=this[%27querySelector%27](k)[%27parentElement%27][%27innerHTML%27];});}}else{if(b[g]?.[%27correct%27]!=undefined)return;let T=Array[%27from%27](document[%27querySelectorAll%27](%27div%27))[%27some%27](U=>getComputedStyle(U)[%27backgroundColor%27]==%27rgb(56,\x20142,\x2060)%27);if(T){j++;if(i==%27text%27){if(!b[g])b[g]={};b[g][%27textAnswer%27]=h;}else{if(!b[g])b[g]={};b[g][%27correct%27]=e(h);}console[%27log%27](%27Total\x20answers\x20stored:\x20%27+Object[%27keys%27](b)[%27length%27]+%27\x0aNew\x20answers\x20this\x20session:\x20%27+j),d();}}}let o=new MutationObserver(n);o[%27observe%27](document[%27body%27],{%27subtree%27:!![],%27childList%27:!![]}),HTMLElement[%27prototype%27][%27nthparent%27]=function(t){let u=this;while(t--&&u)u=u[%27parentElement%27];return u;},n();let p=0x0,q=null;document[%27addEventListener%27](%27keydown%27,t=>{if(t[%27key%27]==%27Shift%27){p++;if(q!=null)clearTimeout(q);q=setTimeout(()=>{p=0x0;},0x3e8);if(p==0x3){l=!l;if(l)console[%27log%27](%27Active%27),n();else console[%27log%27](%27Inactive%27);p=0x0;}}});}());
```
## 