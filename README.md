# School Cheats
Cheats curated for school chromebooks in no particular order. Feel free to make suggestions via issues or create pull requests
[](#game-cheats)
# Game Cheats
## Blooket
[Blooket Hacks (courtesy of Minesraft2)](https://github.com/Minesraft2/Blooket-Cheats/)
## Gimkit
Works by saving the answers to questions for later. Will work when you have answered enough questions.
```
javascript:(function(){let a=localStorage['getItem']('gc_cheat_kits');if(a){a=JSON['parse'](a);let r={};for(let s of Object['keys'](a)){r={...r,...a[s]};}localStorage['setItem']('gc_cheat_answers',JSON['stringify'](r)),localStorage['removeItem']('gc_cheat_kits');}let b=JSON['parse'](localStorage['getItem']('gc_cheat_answers')??%27{}%27),c=prompt(%27Would\x20you\x20like\x20to\x20color\x20in\x20the\x20answers?\x20(Y/n)%27,%27Y%27)[%27toLowerCase%27]()==%27y%27;const d=()=>{localStorage[%27setItem%27](%27gc_cheat_answers%27,JSON[%27stringify%27](b));},e=t=>{return t[%27replace%27](/style=".*?"/g,%27%27);};var f=[];let g=null,h=null,i=null;var j=0x0;const k=%27.notranslate,\x20img[alt=\x22Answer\x20Choice\x22],\x20img[alt=\x22Question\x22]%27;let l=!![],m=new CSSStyleSheet();m[%27replaceSync%27](%27\x0a\x09\x09.answer-hover\x20{\x0a\x09\x09\x09transition:\x20filter\x200.18s\x20ease-in-out;\x0a\x09\x09}\x0a\x09\x09.answer-hover:hover\x20{\x0a\x09\x09\x09filter:\x20brightness(1.2);\x0a\x09\x09}\x0a\x09%27),document[%27adoptedStyleSheets%27][%27push%27](m);function n(){if(!l)return;let t=Array[%27from%27](document[%27querySelectorAll%27](k));if(t[%27length%27]>0x0){if(t[%27length%27]==0x1&&document[%27querySelector%27](%27input%27)==null){if(!g)return;j++;if(!b[g])b[g]={};i==%27text%27?b[g][%27textAnswer%27]=t[0x0][%27innerHTML%27]:b[g][%27correct%27]=t[0x0][%27parentElement%27][%27innerHTML%27];d(),console[%27log%27](%27Total\x20answers\x20stored:\x20%27+Object[%27keys%27](b)[%27length%27]+%27\x0aNew\x20answers\x20this\x20session:\x20%27+j);return;}g=e(t[0x0][%27parentElement%27][%27innerHTML%27]);if(t[%27length%27]==0x6)t=t[%27slice%27](0x2);else t=t[%27slice%27](0x1);if(g in b){let v=b[g];if(v[%27textAnswer%27]){if(t[0x0][%27parentElement%27][%27querySelector%27](%27.correct-answer%27)!=null)return;let z=v[%27textAnswer%27],A=document[%27createElement%27](%27div%27);A[%27innerHTML%27]=%27Correct\x20answer:\x20%27+z,A[%27classList%27][%27add%27](%27correct-answer%27),A[%27style%27][%27fontSize%27]=%2716px%27,t[0x0][%27parentElement%27][%27append%27](A);let B=document[%27querySelector%27](%27input%27);B[%27value%27]=z[%27slice%27](0x0,-0x1);return;}let w=[];for(let C=0x0;C<t[%27length%27];C++){let D=t[C],E=0x5;if(D[%27nodeName%27]==%27IMG%27)E=0x1;let F=D[%27nthparent%27](E),G=getComputedStyle(F)[%27background%27];w[%27push%27](G);}let x=![],y=![];for(let H=0x0;H<t[%27length%27];H++){let I=t[H];if(I[%27nodeName%27]==%27IMG%27)parentAmount=0x1;if(e(I[%27parentElement%27][%27innerHTML%27])==e(v[%27correct%27])){y=!![];break;}}if(!y){delete b[g];return;}for(let J=0x0;J<t[%27length%27]&&v[%27correct%27];J++){let K=t[J],L=0x3;if(K[%27nodeName%27]==%27IMG%27)L=0x1;if(e(K[%27parentElement%27][%27innerHTML%27])==e(v[%27correct%27])){if(c)K[%27nthparent%27](L)[%27style%27][%27backgroundColor%27]=%27green%27;else{let P=K[%27nthparent%27](0x5);if(K[%27nodeName%27]==%27IMG%27)P=K[%27parentElement%27];P[%27style%27][%27background%27]=w[0x3],P[%27classList%27][%27add%27](%27answer-hover%27);}let M=K[%27nthparent%27](L*0x2),N=document[%27querySelectorAll%27](k)[0x2];if(N[%27nodeName%27]==%27IMG%27)N=N[%27nthparent%27](0x3);else N=N[%27nthparent%27](0x7);let O=Array[%27from%27](N[%27children%27]);O[%27indexOf%27](M)!=O[%27length%27]-0x1&&N[%27append%27](M),x=!![];}else{if(c)K[%27nthparent%27](L)[%27style%27][%27backgroundColor%27]=%27red%27;else{if(x){let Q=K[%27nthparent%27](0x5);if(K[%27nodeName%27]==%27IMG%27)Q=K[%27parentElement%27];Q[%27style%27][%27background%27]=w[J-0x1],Q[%27classList%27][%27add%27](%27answer-hover%27);}}}}}let u=document[%27querySelector%27](%27.sc-RpuvT%27);if(u!=null){i=%27text%27,u[%27addEventListener%27](%27input%27,R=>{h=R[%27target%27][%27value%27];});return;}i=%27button%27;for(let R=0x0;R<t[%27length%27];R++){let S=t[R][%27nthparent%27](0x6);if(t[R][%27nodeName%27]==%27IMG%27)S=t[R][%27nthparent%27](0x2);f[%27indexOf%27](S)==-0x1&&f[%27push%27](S),S[%27addEventListener%27](%27click%27,function(){h=this[%27querySelector%27](k)[%27parentElement%27][%27innerHTML%27];});}}else{if(b[g]?.[%27correct%27]!=undefined)return;let T=Array[%27from%27](document[%27querySelectorAll%27](%27div%27))[%27some%27](U=>getComputedStyle(U)[%27backgroundColor%27]==%27rgb(56,\x20142,\x2060)%27);if(T){j++;if(i==%27text%27){if(!b[g])b[g]={};b[g][%27textAnswer%27]=h;}else{if(!b[g])b[g]={};b[g][%27correct%27]=e(h);}console[%27log%27](%27Total\x20answers\x20stored:\x20%27+Object[%27keys%27](b)[%27length%27]+%27\x0aNew\x20answers\x20this\x20session:\x20%27+j),d();}}}let o=new MutationObserver(n);o[%27observe%27](document[%27body%27],{%27subtree%27:!![],%27childList%27:!![]}),HTMLElement[%27prototype%27][%27nthparent%27]=function(t){let u=this;while(t--&&u)u=u[%27parentElement%27];return u;},n();let p=0x0,q=null;document[%27addEventListener%27](%27keydown%27,t=>{if(t[%27key%27]==%27Shift%27){p++;if(q!=null)clearTimeout(q);q=setTimeout(()=>{p=0x0;},0x3e8);if(p==0x3){l=!l;if(l)console[%27log%27](%27Active%27),n();else console[%27log%27](%27Inactive%27);p=0x0;}}});}());
```
## Quizizz
idk what this does I haven't tested it yet
```
javascript:var a0_0x2b5a=['203017IwhbHe','\x20div.scree','container\x20','sent','20419qpbUKM','filter','game','ript\x20creat','log','215087AFAosG','v\x20>\x20div\x20>\x20','130798QMhRKq','ioner-comp','pop','%c\x20\x0a\x20\x20\x20\x20Sc','anski#5119','transition','throw','length','retreive\x20q','$store','roomHash','$$state','error','push','\x20\x20\x20\x20\x20\x20','ting\x20type\x20','then','_data','playerId','Could\x20not\x20','t\x20>\x20div\x20>\x20','join','40135CaSIUe','prototype','t-componen','20%','!\x20\x0a\x20\x20\x20\x20htt','n:\x20','questions','function','ed\x20by\x20gbar','_id','>\x20div\x20>\x20di','1aRQNjV','label','Fail\x20detec','apply','structure','iterator','Unable\x20to\x20','value','text','is\x20already','244114IvDobX','isArray','forEach','return','body\x20>\x20div','ame\x20>\x20div.','call','div\x20>\x20div\x20','18CloWKt','retreive\x20r','roomCode','tor','of\x20questio','children','quizId','er.transit','querySelec','b.com/gbar','https://qu','-container','242025opvcso','_vm','ist\x20elemen','>\x20div','answer','trys','__vue__','1PoSfiV','data','game/','n.screen-g','style','currentId','opacity','ops','uestions\x20l','some','map','optionData','questionID','oot\x20object','next','done','\x20>\x20div.roo','slice'];var a0_0x1eca=function(_0x4755e1,_0x50e65e){_0x4755e1=_0x4755e1-0x167;var _0x2b5a11=a0_0x2b5a[_0x4755e1];return _0x2b5a11;};(function(_0x259e78,_0x584f94){var _0x39ef4e=a0_0x1eca;while(!![]){try{var _0x37534f=-parseInt(_0x39ef4e(0x186))+-parseInt(_0x39ef4e(0x19a))+-parseInt(_0x39ef4e(0x171))+-parseInt(_0x39ef4e(0x1be))*parseInt(_0x39ef4e(0x17c))+parseInt(_0x39ef4e(0x1b3))+parseInt(_0x39ef4e(0x1bc))*parseInt(_0x39ef4e(0x1a1))+parseInt(_0x39ef4e(0x18e))*parseInt(_0x39ef4e(0x1b7));if(_0x37534f===_0x584f94)break;else _0x259e78['push'](_0x259e78['shift']());}catch(_0x1f2779){_0x259e78['push'](_0x259e78['shift']());}}}(a0_0x2b5a,0x1f63e),(()=>{'use strict';var _0x236be8,_0x280a10,_0x3f2148=function(_0x2b2334){var _0x1325f8=a0_0x1eca;_0x2b2334[_0x1325f8(0x1a5)][_0x1325f8(0x1a7)]=_0x1325f8(0x174);},_0x2998b2=function(_0x8d2c96){var _0x343cbf=a0_0x1eca,_0x3bac62=function(){var _0xbf60c4=a0_0x1eca,_0x51e16c=document['querySelec'+_0xbf60c4(0x191)](_0xbf60c4(0x18a)+_0xbf60c4(0x1b1)+_0xbf60c4(0x173)+_0xbf60c4(0x16f)+'div\x20>\x20div\x20'+'>\x20div.page'+_0xbf60c4(0x199)+'.in-quiz\x20>'+_0xbf60c4(0x1b4)+_0xbf60c4(0x1a4)+_0xbf60c4(0x18b)+_0xbf60c4(0x1c3)+_0xbf60c4(0x195)+_0xbf60c4(0x1bf)+'onent\x20>\x20di'+_0xbf60c4(0x1bd)+_0xbf60c4(0x18d)+_0xbf60c4(0x17b)+'v.options-'+_0xbf60c4(0x1b5)+_0xbf60c4(0x19d));if(!_0x51e16c)throw new Error(_0xbf60c4(0x182)+_0xbf60c4(0x1c6)+_0xbf60c4(0x1a9)+_0xbf60c4(0x19c)+'t');return _0x51e16c;}(),_0x49522f=Array[_0x343cbf(0x172)][_0x343cbf(0x1b2)][_0x343cbf(0x18c)](_0x3bac62[_0x343cbf(0x193)]);if(Array['isArray'](_0x8d2c96[_0x343cbf(0x180)][_0x343cbf(0x19e)])&&_0x8d2c96[_0x343cbf(0x180)][_0x343cbf(0x19e)][_0x343cbf(0x1c5)]<0x1&&_0x8d2c96[_0x343cbf(0x180)]['options']){var _0x1b945d=_0x8d2c96['structure']['options'][_0x343cbf(0x1ab)](function(_0x2d9a38){var _0x299938=_0x343cbf;return _0x2d9a38[_0x299938(0x184)];})[_0x343cbf(0x170)]('\x20or\x20');alert(_0x1b945d);}else _0x49522f[_0x343cbf(0x1b8)](function(_0x1ee918){var _0x4ab588=_0x343cbf;return Array[_0x4ab588(0x187)](_0x8d2c96[_0x4ab588(0x180)][_0x4ab588(0x19e)])&&_0x8d2c96[_0x4ab588(0x180)][_0x4ab588(0x19e)][_0x4ab588(0x1c5)]>0x0?!_0x8d2c96[_0x4ab588(0x180)][_0x4ab588(0x19e)][_0x4ab588(0x1aa)](function(_0x206e3f){var _0x2fdc6e=_0x4ab588;return _0x1ee918[_0x2fdc6e(0x1a0)]['optionData']['actualInde'+'x']===_0x206e3f;}):'number'==typeof _0x8d2c96[_0x4ab588(0x180)][_0x4ab588(0x19e)]?_0x1ee918[_0x4ab588(0x1a0)][_0x4ab588(0x1ac)]['actualInde'+'x']!==_0x8d2c96[_0x4ab588(0x180)][_0x4ab588(0x19e)]:void console[_0x4ab588(0x167)](_0x4ab588(0x17e)+_0x4ab588(0x16a)+_0x4ab588(0x192)+_0x4ab588(0x176),_0x8d2c96);})[_0x343cbf(0x188)](_0x3f2148);},_0x3f1a33=function(){var _0x67baa2=a0_0x1eca,_0xce9bcf=document[_0x67baa2(0x196)+_0x67baa2(0x191)](_0x67baa2(0x18a));if(!_0xce9bcf)throw new Error('Could\x20not\x20'+'retreive\x20r'+_0x67baa2(0x1ae));return _0xce9bcf['__vue__'][_0x67baa2(0x1c7)]['_vm'][_0x67baa2(0x16c)][_0x67baa2(0x1c9)][_0x67baa2(0x1b9)][_0x67baa2(0x1a2)][_0x67baa2(0x1c8)];};_0x280a10=function(){var _0x5777ca,_0x49ad83;return function(_0x23e952,_0x3a5dae){var _0x4ef940=a0_0x1eca,_0x280f38,_0xd8374f,_0x195b75,_0x346c0c,_0x1c1236={'label':0x0,'sent':function(){if(0x1&_0x195b75[0x0])throw _0x195b75[0x1];return _0x195b75[0x1];},'trys':[],'ops':[]};return _0x346c0c={'next':_0x326379(0x0),'throw':_0x326379(0x1),'return':_0x326379(0x2)},_0x4ef940(0x178)==typeof Symbol&&(_0x346c0c[Symbol[_0x4ef940(0x181)]]=function(){return this;}),_0x346c0c;function _0x326379(_0x2c9528){return function(_0xe313e0){return function(_0x5214b7){var _0x58dae3=a0_0x1eca;if(_0x280f38)throw new TypeError('Generator\x20'+_0x58dae3(0x185)+'\x20executing'+'.');for(;_0x1c1236;)try{if(_0x280f38=0x1,_0xd8374f&&(_0x195b75=0x2&_0x5214b7[0x0]?_0xd8374f[_0x58dae3(0x189)]:_0x5214b7[0x0]?_0xd8374f[_0x58dae3(0x1c4)]||((_0x195b75=_0xd8374f[_0x58dae3(0x189)])&&_0x195b75[_0x58dae3(0x18c)](_0xd8374f),0x0):_0xd8374f[_0x58dae3(0x1af)])&&!(_0x195b75=_0x195b75[_0x58dae3(0x18c)](_0xd8374f,_0x5214b7[0x1]))[_0x58dae3(0x1b0)])return _0x195b75;switch(_0xd8374f=0x0,_0x195b75&&(_0x5214b7=[0x2&_0x5214b7[0x0],_0x195b75['value']]),_0x5214b7[0x0]){case 0x0:case 0x1:_0x195b75=_0x5214b7;break;case 0x4:return _0x1c1236[_0x58dae3(0x17d)]++,{'value':_0x5214b7[0x1],'done':!0x1};case 0x5:_0x1c1236[_0x58dae3(0x17d)]++,_0xd8374f=_0x5214b7[0x1],_0x5214b7=[0x0];continue;case 0x7:_0x5214b7=_0x1c1236['ops'][_0x58dae3(0x1c0)](),_0x1c1236[_0x58dae3(0x19f)][_0x58dae3(0x1c0)]();continue;default:if(!((_0x195b75=(_0x195b75=_0x1c1236['trys'])[_0x58dae3(0x1c5)]>0x0&&_0x195b75[_0x195b75[_0x58dae3(0x1c5)]-0x1])||0x6!==_0x5214b7[0x0]&&0x2!==_0x5214b7[0x0])){_0x1c1236=0x0;continue;}if(0x3===_0x5214b7[0x0]&&(!_0x195b75||_0x5214b7[0x1]>_0x195b75[0x0]&&_0x5214b7[0x1]<_0x195b75[0x3])){_0x1c1236[_0x58dae3(0x17d)]=_0x5214b7[0x1];break;}if(0x6===_0x5214b7[0x0]&&_0x1c1236[_0x58dae3(0x17d)]<_0x195b75[0x1]){_0x1c1236['label']=_0x195b75[0x1],_0x195b75=_0x5214b7;break;}if(_0x195b75&&_0x1c1236['label']<_0x195b75[0x2]){_0x1c1236[_0x58dae3(0x17d)]=_0x195b75[0x2],_0x1c1236[_0x58dae3(0x1a8)][_0x58dae3(0x168)](_0x5214b7);break;}_0x195b75[0x2]&&_0x1c1236[_0x58dae3(0x1a8)][_0x58dae3(0x1c0)](),_0x1c1236[_0x58dae3(0x19f)]['pop']();continue;}_0x5214b7=_0x3a5dae['call'](_0x23e952,_0x1c1236);}catch(_0x37d2c5){_0x5214b7=[0x6,_0x37d2c5],_0xd8374f=0x0;}finally{_0x280f38=_0x195b75=0x0;}if(0x5&_0x5214b7[0x0])throw _0x5214b7[0x1];return{'value':_0x5214b7[0x0]?_0x5214b7[0x1]:void 0x0,'done':!0x0};}([_0x2c9528,_0xe313e0]);};}}(this,function(_0x5b6577){var _0x51cf33=a0_0x1eca;switch(_0x5b6577[_0x51cf33(0x17d)]){case 0x0:return console[_0x51cf33(0x1bb)](_0x51cf33(0x1c1)+_0x51cf33(0x1ba)+_0x51cf33(0x179)+_0x51cf33(0x1c2)+_0x51cf33(0x175)+'ps://githu'+_0x51cf33(0x197)+'anski/quiz'+'izz-cheat\x0a'+_0x51cf33(0x169),'color:\x20red'+';'),[0x4,fetch(_0x51cf33(0x198)+'izizz.com/'+'_api/main/'+_0x51cf33(0x1a3)+_0x3f1a33())];case 0x1:return[0x4,_0x5b6577[_0x51cf33(0x1b6)]()['json']()];case 0x2:return _0x5777ca=_0x5b6577[_0x51cf33(0x1b6)](),_0x49ad83=void 0x0,setInterval(function(){var _0x2b1972=_0x51cf33,_0x1d6423=function(){var _0x521fa2=a0_0x1eca,_0x440300=document[_0x521fa2(0x196)+_0x521fa2(0x191)](_0x521fa2(0x18a));if(!_0x440300)throw new Error(_0x521fa2(0x16e)+_0x521fa2(0x18f)+_0x521fa2(0x1ae));var _0x218976=_0x440300[_0x521fa2(0x1a0)];return{'roomHash':_0x218976[_0x521fa2(0x1c7)][_0x521fa2(0x19b)]['_data'][_0x521fa2(0x1c9)][_0x521fa2(0x1b9)]['data'][_0x521fa2(0x1c8)],'playerId':_0x218976['$store'][_0x521fa2(0x19b)]['_data'][_0x521fa2(0x1c9)][_0x521fa2(0x1b9)]['player'][_0x521fa2(0x16d)],'quizID':_0x218976[_0x521fa2(0x1c7)]['_vm'][_0x521fa2(0x16c)][_0x521fa2(0x1c9)][_0x521fa2(0x1b9)][_0x521fa2(0x1a2)][_0x521fa2(0x194)],'roomCode':_0x218976[_0x521fa2(0x1c7)][_0x521fa2(0x19b)][_0x521fa2(0x16c)][_0x521fa2(0x1c9)]['game'][_0x521fa2(0x1a2)][_0x521fa2(0x190)],'questionID':_0x218976[_0x521fa2(0x1c7)][_0x521fa2(0x19b)]['_data'][_0x521fa2(0x1c9)]['game']['questions'][_0x521fa2(0x1a6)]};}();if(_0x1d6423[_0x2b1972(0x1ad)]!==_0x49ad83)for(var _0x1b2e6d=0x0,_0x5a01b2=_0x5777ca[_0x2b1972(0x1a2)][_0x2b1972(0x177)];_0x1b2e6d<_0x5a01b2['length'];_0x1b2e6d++){var _0x24ae0=_0x5a01b2[_0x1b2e6d];_0x1d6423[_0x2b1972(0x1ad)]===_0x24ae0[_0x2b1972(0x17a)]&&(console['log']({'q':_0x24ae0}),_0x2998b2(_0x24ae0),_0x49ad83=_0x1d6423[_0x2b1972(0x1ad)]);}},0x1f4),[0x2];}});},new((_0x236be8=void 0x0)||(_0x236be8=Promise))(function(_0x11bebd,_0x1a3dd6){var _0xdf2166=a0_0x1eca;function _0x181172(_0x2497b2){try{_0x16311f(_0x280a10['next'](_0x2497b2));}catch(_0xcb5a54){_0x1a3dd6(_0xcb5a54);}}function _0x31d480(_0x4cc1c6){var _0x21450c=a0_0x1eca;try{_0x16311f(_0x280a10[_0x21450c(0x1c4)](_0x4cc1c6));}catch(_0x162e0b){_0x1a3dd6(_0x162e0b);}}function _0x16311f(_0xd08238){var _0x1aa59c=a0_0x1eca,_0x53019c;_0xd08238[_0x1aa59c(0x1b0)]?_0x11bebd(_0xd08238[_0x1aa59c(0x183)]):(_0x53019c=_0xd08238['value'],_0x53019c instanceof _0x236be8?_0x53019c:new _0x236be8(function(_0x472fcd){_0x472fcd(_0x53019c);}))[_0x1aa59c(0x16b)](_0x181172,_0x31d480);}_0x16311f((_0x280a10=_0x280a10[_0xdf2166(0x17f)](void 0x0,[]))[_0xdf2166(0x1af)]());});})());
```
## Quizlet
idk what this does I haven't tested it yet but its a live hack
```
javascript:try{async function getSetId(a){const b=await fetch('https://quizlet.com/webapi/3.8/multiplayer/game-instance?gameCode='+a),c=await b['json']();if(c['error'])throw new Error(c['error']['message']);return c['gameInstance']['itemId'];}async function getSetData(a){const b=await fetch('https://quizlet.com/'+a),c=await b['text'](),d=c['match'](/\\"termIdToTermsMap\\":{.+?{.+?\\"termSort\\":/gi)?.[0x0];if(!d)throw new Error('Failed\x20to\x20parse\x20set\x20data.');const e=JSON['parse'](d['slice'](0x15,-0xe)['replaceAll']('\x5c\x22','\x22'));return[Object['fromEntries'](Object['values'](e)['map'](({word:f,definition:g})=>[f,g])),Object['fromEntries'](Object['values'](e)['map'](({word:f,definition:g})=>[g,f]))];}function getActiveQuestion(){try{const a=document['querySelector']('.StudentPrompt-text')['textContent'],b=Array['from'](document['querySelectorAll']('.StudentAnswerOption-text'));return[a,b];}catch{}return[null,null];}((async()=>{const a=prompt('Enter\x20PIN,\x20like:\x20XXX-XXX','')['match'](/[0-9a-zA-Z]/g)['join']('');if(a['length']!==0x6)throw new Error('Pin\x20must\x20be\x206\x20characters\x20in\x20length.');const b=await getSetId(a),[c,d]=await getSetData(b);setInterval(async function(){const [e,f]=getActiveQuestion();if(!e||!f)return;if(e in c)f['forEach'](g=>{if(g['textContent']===c[e])g['style']['fontWeight']='bolder';});else e in d?f['forEach'](g=>{if(g['textContent']===d[e])g['style']['fontWeight']='bolder';}):f['forEach'](g=>{g['style']['fontWeight']='normal';});},0x0);})());}catch(h){alert(h);}
```
# Education App Cheats
## DeltaMath
copies the equation so you can put it into [symbolab](https://www.symbolab.com/) or something. Courtesy of [bribes](https://github.com/bribes/deltamath-equation-copier)
```
javascript:try{problemObj=problem.qlinesCopy[0],equation=problemObj.line?problemObj.line:`${problemObj.left.replace(/[{}]/g,"")}=${problemObj.right}`,prompt("Equation:",equation)}catch{alert("Equation not detected!")};void 0
```
# Various Tools
## Inspect Element
Console (courtesy of SnowLord)
```
javascript:(function(){(function() {var x = document.createElement("script");x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js";document.head.appendChild(x);})()})()
```
## History Flooder
Adds the current page to your history a specified amount
```
javascript:(function()%7Bvar num%3Dprompt("How Times Do You Want This Page To Show Up In your History%3F")%3Bdone%3Dfalse%3Bx%3Dwindow.location.href%3Bfor (var i%3D1%3B i<%3Dnum%3B i%2B%2B)%7Bhistory.pushState(0%2C 0%2C i%3D%3Dnum%3Fx%3Ai.toString())%3Bif(i%3D%3Dnum)%7Bdone%3Dtrue%7D%7Dif(done%3D%3D%3Dtrue)%7Balert("History Flooding Successful!%5Cn "%2Bwindow.location.href%2B" %5CnNow Appears In Your History "%2Bnum%2B(num%3D%3D1%3F" time."%3A" Times. %5CnMade By%3A Utopia"))%7D%7D)()%3B
```
## X-ray Goggles
Powers to edit and modify pages like never before.
Credit to [Mozilla](https://x-ray-goggles.mouse.org/)
```
javascript:(function () {var script=document.createElement('script');script.src='https://x-ray-goggles.mouse.org/webxray.js';script.className='webxray';script.setAttribute('data-lang','en-US');script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');document.body.appendChild(script);}())
```
## Edit Page
Edit the content of the website. Toggle on:
```
javascript:document.body.contentEditable = 'true'; document.designMode='on'; document.body.spellcheck=false;void 0
```
Toggle off:
```
javascript:document.body.contentEditable = 'false'; document.designMode='off'; document.body.spellcheck=true;void 0
```
## Communicate
Go to [about:blank](about:blank) and run the following bookmarklet. Allows to communicate when you can't talk.
```
javascript:(() => {elem = document.createElement("h1");document.body.appendChild(elem);elem.innerHTML = "Enter Text Here:"; document.body.contentEditable = "true";document.body.enableSpellCheck = "false";})()
```
# Trolls/Pranks
## Rickroll
Redirects you to Rick Astley - Never Gonna Give You Up
```
javascript:(function(_0x54b141,_0x5ec292){function _0xf54eaa(_0x1828ed,_0x44e1f5,_0x2a0c22,_0x1d3cfe){return _0x1598(_0x2a0c22-0x5d,_0x1d3cfe);}const _0x400b6d=_0x54b141();function _0x54b954(_0x2ca853,_0x56dca5,_0x4ee449,_0x3f1986){return _0x1598(_0x56dca5-0x107,_0x2ca853);}while(!![]){try{const _0x5b8b13=parseInt(_0x54b954(0x2db,0x2eb,0x2f2,0x2f7))/(0x246f+0x59c*-0x3+-0xd*0x182)+-parseInt(_0xf54eaa(0x241,0x23d,0x237,0x227))/(0x841*-0x2+-0x104f+-0xaf1*-0x3)*(parseInt(_0x54b954(0x2d7,0x2e0,0x2f1,0x2e1))/(0x1d9*-0x3+0x11f7+0xc69*-0x1))+-parseInt(_0x54b954(0x2ca,0x2d7,0x2c8,0x2c6))/(-0x2*0xb8d+0x14fd+-0x1*-0x221)+parseInt(_0xf54eaa(0x24b,0x241,0x244,0x254))/(0x16a8+0xe+-0x16b1)*(-parseInt(_0x54b954(0x2cf,0x2de,0x2d3,0x2cd))/(-0x1*0x20dd+-0x2089+0x416c*0x1))+-parseInt(_0x54b954(0x2d1,0x2e2,0x2d6,0x2eb))/(-0x7*-0x569+-0x11f1*0x1+-0x1*0x13e7)+parseInt(_0x54b954(0x2f3,0x2f7,0x2f4,0x2e8))/(0x8f3+-0x1*-0x17db+-0x1063*0x2)+parseInt(_0xf54eaa(0x23e,0x238,0x247,0x255))/(0x87a+-0x2112+0x5*0x4ed)*(parseInt(_0xf54eaa(0x256,0x245,0x248,0x242))/(0x976+0x1017+-0x1*0x1983));if(_0x5b8b13===_0x5ec292)break;else _0x400b6d['push'](_0x400b6d['shift']());}catch(_0x1e39d8){_0x400b6d['push'](_0x400b6d['shift']());}}}(_0x33ee,-0x4cd2b+-0xba8cb+0x1a4323*0x1));function _0x33ee(){const _0x3c039b=['ntaZndy2ngXgweLsAG','AhjLzG','DY55B3v0DwjLlG','nde3ndHqt1ziEM8','E30Uy29UC3rYDq','y29UC3rYDwn0BW','Dg9tDhjPBMC','DJ14tuHkr2qZDW','y2XPy2S','C2vHCMnO','mJr5z1Pdv3K','kcGOlISPkYKRkq','mJmYnJjUCKLlzeC','mtu2BKfVr0r1','ndu1mtiXogjmAKjfrW','y29UC29Szq','CM4GDgHPCYiPka','y29Tl3DHDgnOpW','yM9KEq','BgvUz3rO','y3jLyxrLrwXLBq','y3rVCIGICMv0Dq','DgfIBgu','mtCYnZqWugfwDKvx','DhjHy2u','x19WCM90B19F','mtuYntG3mgD5DM1AEa','yxbWzw5Kq2HPBa','Ahr0Chm6lY93DW','nde4nxfhDKD2Cq','ntaWmZbzEKD4y2G','yMLUza','yxbWBhK','zw50','CMv0DxjUicHMDq'];_0x33ee=function(){return _0x3c039b;};return _0x33ee();}const _0x37a189=(function(){let _0x485268=!![];return function(_0xb0b95a,_0x420b6d){const _0x56bd9b=_0x485268?function(){function _0x42ff88(_0x384666,_0x56040e,_0xf54d56,_0x4db678){return _0x1598(_0xf54d56-0x32a,_0x56040e);}if(_0x420b6d){const _0x41611a=_0x420b6d[_0x42ff88(0x511,0x517,0x517,0x524)](_0xb0b95a,arguments);return _0x420b6d=null,_0x41611a;}}:function(){};return _0x485268=![],_0x56bd9b;};}()),_0x5365ee=_0x37a189(this,function(){function _0x488baf(_0x5b227f,_0x15d3e8,_0x3308ee,_0x1da0eb){return _0x1598(_0x15d3e8- -0x362,_0x3308ee);}function _0x2ccfd6(_0x474f75,_0x1935ea,_0x49b669,_0x5c5fa2){return _0x1598(_0x49b669-0x26e,_0x1935ea);}return _0x5365ee[_0x488baf(-0x195,-0x18f,-0x197,-0x190)]()[_0x488baf(-0x198,-0x18c,-0x182,-0x19d)](%27(((.+)+)+)%27+%27+$%27)[_0x488baf(-0x183,-0x18f,-0x19f,-0x196)]()[_0x488baf(-0x18c,-0x190,-0x190,-0x194)+%27r%27](_0x5365ee)[_0x488baf(-0x189,-0x18c,-0x17b,-0x18e)](_0x488baf(-0x198,-0x18a,-0x186,-0x17e)+%27+$%27);});function _0x1598(_0x793c21,_0x7fa4c1){const _0x4efdad=_0x33ee();return _0x1598=function(_0x284526,_0x21bbb2){_0x284526=_0x284526-(-0x2c*-0x4f+0x531*0x1+-0x10f7);let _0x4b1a57=_0x4efdad[_0x284526];if(_0x1598[%27mTEnmf%27]===undefined){var _0x5bbf7c=function(_0x202a8d){const _0x4cd437=%27abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=%27;let _0x1d5173=%27%27,_0x315a73=%27%27,_0x2538a3=_0x1d5173+_0x5bbf7c;for(let _0x3a9cc1=-0x6b*-0x46+0x682+-0x23c4,_0x4ccded,_0x7010af,_0x4f2ce9=-0x1*-0x243d+-0x147d+0xe*-0x120;_0x7010af=_0x202a8d[%27charAt%27](_0x4f2ce9++);~_0x7010af&&(_0x4ccded=_0x3a9cc1%(0xd3*-0x13+0x209*0x3+0x992)?_0x4ccded*(-0x32*-0x4d+0xb8b*-0x3+0x13d7)+_0x7010af:_0x7010af,_0x3a9cc1++%(-0x208f+0x1dc5+0x2ce))?_0x1d5173+=_0x2538a3[%27charCodeAt%27](_0x4f2ce9+(0x4*0x141+-0x1*0xfc2+-0x2b2*-0x4))-(0x804+0x541+-0xd3b)!==-0x13c5+-0x45*-0x47+0xa2?String[%27fromCharCode%27](0x625+0x20d0+0x56*-0x71&_0x4ccded>>(-(-0x1*-0x1724+0x589*-0x7+0xf9d)*_0x3a9cc1&0x1*0x171+-0x1103+0xf98)):_0x3a9cc1:-0x448*0x3+0x463*0x3+0x51*-0x1){_0x7010af=_0x4cd437[%27indexOf%27](_0x7010af);}for(let _0x256cb3=0xae6+-0x17a+-0x96c,_0x5bcf6b=_0x1d5173[%27length%27];_0x256cb3<_0x5bcf6b;_0x256cb3++){_0x315a73+=%27%%27+(%2700%27+_0x1d5173[%27charCodeAt%27](_0x256cb3)[%27toString%27](-0x2*0x310+-0x1439+0x1a69))[%27slice%27](-(-0x1*-0x266f+0x3fc+-0x149*0x21));}return decodeURIComponent(_0x315a73);};_0x1598[%27pYdNvJ%27]=_0x5bbf7c,_0x793c21=arguments,_0x1598[%27mTEnmf%27]=!![];}const _0x5de8b8=_0x4efdad[-0x4f*-0x5+0x72e*0x1+0xcb*-0xb],_0x19cade=_0x284526+_0x5de8b8,_0x51980a=_0x793c21[_0x19cade];if(!_0x51980a){const _0xa01d68=function(_0x3a094f){this[%27EVoBiM%27]=_0x3a094f,this[%27rlXGio%27]=[-0x7*0x385+-0x1*0xe59+0x26fd,-0x1*-0x246b+-0x102+-0x2369,0x246f+0x59c*-0x3+-0x7*0x2cd],this[%27QDeIAm%27]=function(){return%27newState%27;},this[%27XSlcnz%27]=%27\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*%27,this[%27pJwLUm%27]=%27[\x27|\x22].+[\x27|\x22];?\x20*}%27;};_0xa01d68[%27prototype%27][%27VOTFhY%27]=function(){const _0x752f87=new RegExp(this[%27XSlcnz%27]+this[%27pJwLUm%27]),_0x14c262=_0x752f87[%27test%27](this[%27QDeIAm%27][%27toString%27]())?--this[%27rlXGio%27][0x841*-0x2+-0x104f+-0x1069*-0x2]:--this[%27rlXGio%27][0x1d9*-0x3+0x11f7+0xc6c*-0x1];return this[%27IBbvda%27](_0x14c262);},_0xa01d68[%27prototype%27][%27IBbvda%27]=function(_0x20d325){if(!Boolean(~_0x20d325))return _0x20d325;return this[%27uGhPVS%27](this[%27EVoBiM%27]);},_0xa01d68[%27prototype%27][%27uGhPVS%27]=function(_0x50b023){for(let _0x39cd96=-0x2*0xb8d+0x14fd+-0x1*-0x21d,_0x3b3c05=this[%27rlXGio%27][%27length%27];_0x39cd96<_0x3b3c05;_0x39cd96++){this[%27rlXGio%27][%27push%27](Math[%27round%27](Math[%27random%27]())),_0x3b3c05=this[%27rlXGio%27][%27length%27];}return _0x50b023(this[%27rlXGio%27][0x16a8+0xe+-0x16b6]);},new _0xa01d68(_0x1598)[%27VOTFhY%27](),_0x4b1a57=_0x1598[%27pYdNvJ%27](_0x4b1a57),_0x793c21[_0x19cade]=_0x4b1a57;}else _0x4b1a57=_0x51980a;return _0x4b1a57;},_0x1598(_0x793c21,_0x7fa4c1);}_0x5365ee();const _0x5c9308=(function(){let _0x1a70f5=!![];return function(_0x5b5ce5,_0x5a432e){const _0x2b2b67=_0x1a70f5?function(){function _0xd172ae(_0x1ae8fa,_0x4182b6,_0x53fcd6,_0x2b5c38){return _0x1598(_0x4182b6-0x25b,_0x1ae8fa);}if(_0x5a432e){const _0x7f3107=_0x5a432e[_0xd172ae(0x43e,0x448,0x448,0x441)](_0x5b5ce5,arguments);return _0x5a432e=null,_0x7f3107;}}:function(){};return _0x1a70f5=![],_0x2b2b67;};}()),_0x183d8b=_0x5c9308(this,function(){const _0x54066f=function(){function _0x29c432(_0x242235,_0x5d5cd7,_0x1e4915,_0x1a6a57){return _0x1598(_0x242235- -0x19,_0x1e4915);}let _0x35cf02;try{_0x35cf02=Function(_0x24c840(0x211,0x207,0x20b,0x20d)+%27nction()\x20%27+(_0x29c432(0x1b8,0x1b1,0x1be,0x1b1)+_0x29c432(0x1c9,0x1d2,0x1bd,0x1ce)+_0x29c432(0x1c4,0x1c5,0x1d0,0x1be)+%27\x20)%27)+%27);%27)();}catch(_0x1c7444){_0x35cf02=window;}function _0x24c840(_0x1a4579,_0x1d056f,_0x5df8d9,_0xd72f7f){return _0x1598(_0xd72f7f-0x1e,_0x1d056f);}return _0x35cf02;};function _0x9767fe(_0x19f878,_0x5e8a5e,_0x54aa94,_0x42ca55){return _0x1598(_0x19f878-0x18b,_0x5e8a5e);}const _0x267147=_0x54066f(),_0x1bf802=_0x267147[_0x9767fe(0x367,0x35a,0x364,0x367)]=_0x267147[_0x9767fe(0x367,0x356,0x373,0x36d)]||{},_0x92d66=[%27log%27,%27warn%27,%27info%27,%27error%27,%27exception%27,_0x9767fe(0x36e,0x36f,0x362,0x376),_0x9767fe(0x370,0x37c,0x380,0x370)];function _0x2050b3(_0x20602c,_0x4c8340,_0x578397,_0xee23f6){return _0x1598(_0x578397- -0x2d5,_0x4c8340);}for(let _0x480e1c=-0x1*0x51b+0x166*0x1+0x3b5*0x1;_0x480e1c<_0x92d66[_0x9767fe(0x36b,0x37d,0x37b,0x372)];_0x480e1c++){const _0x3c9a39=_0x5c9308[_0x9767fe(0x35d,0x367,0x369,0x354)+%27r%27][%27prototype%27][_0x2050b3(-0xea,-0xea,-0xe9,-0xf9)](_0x5c9308),_0x3a21e8=_0x92d66[_0x480e1c],_0x292d77=_0x1bf802[_0x3a21e8]||_0x3c9a39;_0x3c9a39[_0x9767fe(0x371,0x365,0x369,0x362)]=_0x5c9308[_0x2050b3(-0xf9,-0xed,-0xe9,-0xf6)](_0x5c9308),_0x3c9a39[_0x9767fe(0x35e,0x365,0x354,0x360)]=_0x292d77[_0x9767fe(0x35e,0x369,0x361,0x34f)][_0x2050b3(-0xf1,-0xde,-0xe9,-0xd7)](_0x292d77),_0x1bf802[_0x3a21e8]=_0x3c9a39;}});_0x183d8b();_0x5dd565:((()=>{function _0xf4d7a3(_0x2711ec,_0x180106,_0x561d18,_0x3f38ea){return _0x1598(_0x2711ec- -0x323,_0x180106);}const _0x3943e8=document[_0xf4d7a3(-0x142,-0x134,-0x153,-0x13c)+_0xf4d7a3(-0x135,-0x133,-0x13b,-0x140)](%27a%27);document[_0xc95b97(0x52e,0x535,0x522,0x52b)][_0xc95b97(0x537,0x531,0x547,0x529)+%27d%27](_0x3943e8),_0x3943e8[_0xc95b97(0x51d,0x52f,0x516,0x52c)]=_0xc95b97(0x538,0x53b,0x540,0x549)+_0xf4d7a3(-0x154,-0x14b,-0x153,-0x149)+_0xc95b97(0x52d,0x536,0x531,0x531)+_0xc95b97(0x523,0x52a,0x535,0x522)+%27wZk%27;function _0xc95b97(_0x1b25e3,_0xe349db,_0x59b43e,_0x45e62d){return _0x1598(_0x1b25e3-0x34f,_0x59b43e);}_0x3943e8[_0xf4d7a3(-0x14e,-0x14f,-0x14f,-0x15a)]();})());
```
# Miscellaneous
## Proxies
Bypasses most school filters
[Incognitio](https://incognito-production-9cd0.up.railway.app/)
## Additional hacks
[Legend7269 Bookmarklets](https://github.com/Legend7269/Bookmarklets)
[UntrustableRus School Hacks](https://github.com/UntrustableRus/awesome-school-exploits)