(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[917],{9070:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var s=t(7294),i=t(1262),o=t(2389),a=t(2949),l=t(7562),r=t(948),d=t(1233),c=t(5616),u=t(629),p=t(7400),f=t(5893);var h=t(5121),j=t(8553),m=t(1057),x=(t(1146),t(843));let g=[0,0],b=0;const y=(0,r.default)(u.default)((e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}})),k={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function v(e,n,t){let s=e.commands.byName[n];s.bindKeyOriginal||(s.bindKeyOriginal=s.bindKey),s.bindKey=t?s.bindKeyOriginal:null,e.commands.addCommand(s)}const w=e=>{e.renderer.setScrollMargin(10,10,0,0),e.renderer.setPadding(16),e.moveCursorTo(0,0),v(e,"indent",!1),v(e,"outdent",!1),e.commands.on("afterExec",(n=>{"disable-indent"!==n.command.name&&(v(e,"indent",!0),v(e,"outdent",!0))})),e.on("click",(n=>{v(e,"indent",!0),v(e,"outdent",!0)})),e.on("blur",(n=>{v(e,"indent",!1),v(e,"outdent",!1)})),e.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:e=>{v(e,"indent",!1),v(e,"outdent",!1)}})},C=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function S(e){const[n,r]=(0,s.useState)(e.code.trimEnd()),[u,v]=(0,s.useState)(!1),[S,N]=(0,s.useState)(!1),[E,A]=(0,s.useState)(!1),[_,O]=(0,s.useState)(""),[P,B]=(0,s.useState)(""),[T,L]=(0,s.useState)(""),[z,R]=(0,s.useState)(!1),[q,I]=(0,s.useState)(""),[M,F]=(0,s.useState)(""),[K,D]=(0,s.useState)(""),[J,W]=(0,s.useState)(!1),[G,$]=(0,s.useState)("Begin Test"),[Q,H]=(0,s.useState)(!1),[Y,V]=(0,s.useState)(!1);(0,s.useEffect)((()=>{r(e.code.trimEnd()),v(!0)}),[e.code]);const{runPython:X,stdout:U,stderr:Z,isLoading:ee,isRunning:ne,interruptExecution:te,isAwaitingInput:se,sendInput:ie,prompt:oe}=(0,l.usePython)(),{colorMode:ae}=(0,a.useColorMode)(),le=(0,o.default)();let re=null;function de(e){O(e.target.value)}function ce(){ie(_.replace(oe,"").trim())}function ue(){let e={code:JSON.stringify(n)};console.log(n),V(!0);let t=`https://ai-api-alpha.vercel.app/api/aicodeevaluation?question=${JSON.stringify(e)}`;console.log(t),h.default.get(t).then((e=>{console.log(e.data),R(!0),V(!1),I(e.data.AI_Answer)})).catch((e=>console.log(e)))}function pe(e){I(""),R(!1),v(!1);let n=e.target.id;if("1"==n){r('\n\nnum = 29\n\nflag = False\n\nif num == 1:\n    print(num, "is not a prime number")\nelif num > 1:\n    for i in range(2, num):\n        if (num % i) == 0:\n            flag = True\n            break\n\nif flag:\n    print(num, "is not a prime number")\nelse:\n    print(num, "is a prime number")\n  ')}else if("2"==n){r('\nnum = 7\n\n\nfactorial = 1\n\nif num < 0:\n    print("Sorry, factorial does not exist for negative numbers")\nelif num == 0:\n    print("The factorial of 0 is 1")\nelse:\n    for i in range(1,num + 1):\n        factorial = factorial*i\n    print("The factorial of",num,"is",factorial)\n          ')}else if("3"==n){r("\n\nX = [[12,7,3],\n    [4 ,5,6],\n    [7 ,8,9]]\nY = [[5,8,1,2],\n    [6,7,3,0],\n    [4,5,9,1]]\nresult = [[0,0,0,0],\n        [0,0,0,0],\n        [0,0,0,0]]\n\nfor i in range(len(X)):\n    for j in range(len(Y[0])):\n\n        for k in range(len(Y)):\n            result[i][j] += X[i][k] * Y[k][j]\n\nfor r in result:\n    print(r)\n  \n          ")}else if("4"==n){r("\nprint('Enter input:')\nx  = input()\nprint(x)\n                    ")}else if("5"==n){r("\nprint('Enter first Number:')\nx  = input()\nprint('Enter Second Number:')\ny = input()\nprint('sum:')\nprint(int(x)+int(y))\n                    ")}}function fe(){if(W(!0),H(!1),v(!0),$("End Test"),b=0,"Begin Test"==G){V(!0);let e="https://ai-api-alpha.vercel.app/api/test_questions_request?q=1";console.log(e),h.default.get(e).then((e=>{D(e.data.message),me(e.data.message),V(!1),b++})).catch((e=>console.log(e)))}else W(!1),$("Begin Test"),F(""),H(!0)}function he(e){b<2&&(b++,b>=2?b=1:b<0&&(b=0),me(K))}function je(e){b>=0&&((b>=2||b<0)&&(b=0),me(K),b--)}function me(e){console.log(b);let n=e[b].Description;F(n.replace("\t",""))}function xe(){v(!1),r(e.code.trimEnd())}function ge(){return H(!1),v(!0),console.log(n),X(n)}function be(){v(!1),te()}function ye(){return(0,f.jsxs)(f.Fragment,{children:[ne?(0,f.jsx)("button",{className:"icon-button",disabled:ee||!ne,onClick:be,onFocus:()=>N(!0),onBlur:()=>N(!1),"aria-label":"Stop Code",title:"Stop Code",children:(0,f.jsx)("span",{className:"icon lsf-icon",title:"stop"})}):(0,f.jsx)("button",{className:"icon-button",disabled:ee||ne,onClick:ge,onFocus:()=>N(!0),onBlur:()=>N(!1),"aria-label":"Run Code",title:"Run Code",children:(0,f.jsx)("span",{className:"icon lsf-icon",title:"play"})}),(0,f.jsx)("button",{className:"icon-button",onClick:xe,onFocus:()=>A(!0),onBlur:()=>A(!1),"aria-label":"Reset Code Window",title:"Reset Code Window",children:(0,f.jsx)("span",{className:"icon lsf-icon",title:"refresh"})})]})}function ke(){return(0,f.jsxs)("pre",{className:"output-window",children:[(0,f.jsxs)("p",{children:["Q1 ",g[0]]}),(0,f.jsxs)("p",{children:["Q2 ",g[1]]})]})}function ve(){return(0,f.jsxs)("div",{children:[!Q&&(0,f.jsxs)("pre",{className:"output-window",children:[(0,f.jsx)("span",{children:U}),(0,f.jsx)("span",{style:{color:"var(--text-code-error)"},children:Z})]}),Q&&(0,f.jsx)("pre",{className:"output-window",children:(0,f.jsx)(ke,{})}),(0,f.jsxs)("pre",{className:"output-window",children:[U&&Se(),(0,f.jsx)("span",{children:q})]})]})}function we(){return(0,f.jsx)("pre",{className:"question-window",children:(0,f.jsx)("span",{children:M})})}function Ce(){return(0,f.jsxs)("div",{children:[(0,f.jsx)("input",{type:"text",id:"fname",name:"fname",defaultValue:oe,onChange:de}),(0,f.jsx)("button",{type:"button",onClick:ce,children:"Submit Input"})]})}function Se(){return g[b],(0,f.jsx)("div",{children:(0,f.jsx)("button",{type:"button",onClick:ue,children:"Get AI feedback"})})}function Ne(){return(0,f.jsx)(re,{value:n,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===ae?"idle_fingers":"textmate",onChange:(e,n)=>r(e),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:w,editorProps:{$blockScrolling:!0},setOptions:k})}function Ee(){return e.showButtons||C()||S||E}le&&(re=t(4981).default,t(4007),t(2777),t(3783),t(2679));const Ae=(0,f.jsx)("pre",{style:{margin:0,padding:"0.55rem"},children:n});return(0,f.jsx)(i.default,{fallback:Ae,children:()=>(0,f.jsxs)("div",{className:"code-editor",onMouseLeave:()=>{N(!1),A(!1)},children:[Y&&(0,f.jsx)(x.default,{}),ee&&(0,f.jsx)(x.default,{}),(0,f.jsx)(c.default,{sx:{flexGrow:1},children:(0,f.jsxs)(p.default,{container:!0,spacing:1,children:[(0,f.jsx)(p.default,{xs:12,children:(0,f.jsxs)(j.default,{variant:"contained","aria-label":"outlined primary button group",children:[J&&(0,f.jsx)(m.default,{onClick:je,children:"Previous"}),(0,f.jsx)(m.default,{onClick:fe,children:G}),J&&(0,f.jsx)(m.default,{children:"Template"}),J&&(0,f.jsx)(m.default,{children:"Outline"}),J&&(0,f.jsx)(m.default,{onClick:he,children:"Next"})]})}),(0,f.jsx)(p.default,{xs:12,children:(0,f.jsxs)(p.default,{container:!0,spacing:1,children:[(0,f.jsx)(p.default,{xs:3,children:u&&we()}),(0,f.jsxs)(p.default,{xs:5,style:{width:"50%"},children:[!J&&(0,f.jsxs)(d.default,{direction:"row",spacing:2,children:[(0,f.jsx)(y,{id:"1",onClick:pe,children:"Example 1"}),(0,f.jsx)(y,{id:"2",onClick:pe,children:"Example 2 "}),(0,f.jsx)(y,{id:"3",onClick:pe,children:"Example 3"}),(0,f.jsx)(y,{id:"4",onClick:pe,children:"Example 4"}),(0,f.jsx)(y,{id:"5",onClick:pe,children:"Example 5"})]}),(0,f.jsxs)("div",{className:"code-editor-window",style:u?{borderRadius:".25em .25em 0 0"}:{},children:[Ne(),(0,f.jsx)("div",{className:"button-container",style:Ee()?{opacity:100}:{},children:ee?(0,f.jsx)("span",{children:"Loading..."}):ye()})]})]}),(0,f.jsx)(p.default,{xs:3,children:u&&ve()}),se&&Ce()]})})]})})]})})}},4109:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>N});var s=t(7294),i=t(1262),o=t(2389),a=t(2949),l=t(7562),r=t(948),d=t(1233),c=t(5616),u=t(629),p=t(7400),f=t(5121),h=t(8553),j=t(1057),m=t(7300),x=t(5893);let g=[0,0],b=0,y="blue";const k=(0,r.default)(u.default)((e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}})),v={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function w(e,n,t){let s=e.commands.byName[n];s.bindKeyOriginal||(s.bindKeyOriginal=s.bindKey),s.bindKey=t?s.bindKeyOriginal:null,e.commands.addCommand(s)}const C=e=>{e.renderer.setScrollMargin(10,10,0,0),e.renderer.setPadding(16),e.moveCursorTo(0,0),w(e,"indent",!1),w(e,"outdent",!1),e.commands.on("afterExec",(n=>{"disable-indent"!==n.command.name&&(w(e,"indent",!0),w(e,"outdent",!0))})),e.on("click",(n=>{w(e,"indent",!0),w(e,"outdent",!0)})),e.on("blur",(n=>{w(e,"indent",!1),w(e,"outdent",!1)})),e.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:e=>{w(e,"indent",!1),w(e,"outdent",!1)}})},S=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function N(e){const[n,r]=(0,s.useState)(e.code.trimEnd()),[u,w]=(0,s.useState)(!1),[N,E]=(0,s.useState)(!1),[A,_]=(0,s.useState)(!1),[O,P]=(0,s.useState)(""),[B,T]=(0,s.useState)(""),[L,z]=(0,s.useState)(""),[R,q]=(0,s.useState)(!1),[I,M]=(0,s.useState)(""),[F,K]=(0,s.useState)(!1),[D,J]=(0,s.useState)(""),[W,G]=(0,s.useState)(""),[$,Q]=(0,s.useState)(""),[H,Y]=(0,s.useState)(!1),[V,X]=(0,s.useState)("Begin Test"),[U,Z]=(0,s.useState)(!1),[ee,ne]=(0,s.useState)(!1);(0,s.useEffect)((()=>{r(e.code.trimEnd()),w(!0)}),[e.code]);const{runPython:te,stdout:se,stderr:ie,isLoading:oe,isRunning:ae,interruptExecution:le,isAwaitingInput:re,sendInput:de,prompt:ce}=(0,l.usePython)(),{colorMode:ue}=(0,a.useColorMode)(),pe=(0,o.default)();let fe=null;function he(e){P(e.target.value)}function je(){de(O.replace(ce,"").trim())}function me(){let e={code:JSON.stringify(n)};console.log(n);let t=`https://ai-api-alpha.vercel.app/api/ai_code_evaluation_ocr?question=${JSON.stringify(e)}`;console.log(t),ne(!0),f.default.get(t).then((e=>{console.log(e.data),ne(!1),q(!0),M(e.data.AI_Answer)})).catch((e=>console.log(e)))}function xe(){return(0,x.jsxs)("pre",{className:"output-window",children:[(0,x.jsxs)("p",{children:["Q1 ",g[0]]}),(0,x.jsxs)("p",{children:["Q2 ",g[1]]})]})}function ge(e){M("");let n=e.target.id;if("1"==n){r('\n  function validate_user()\n  const pw = "pass"\n  pwguess = ""\n  attempts = 1\n  do\n      print("Attempt number " + attempts)\n      pwguess = input("Password: ")\n      attempts += 1\n  until pwguess == pw OR attempts > 3\n\n  return pwguess == pw\nendfunction\n\nif validate_user() then\n  print("yay")\nelse\n  print("no")\nendif\n\n  ')}else if("2"==n){r('\na = real(input("Enter number: "))\n\nop = ""\ndo\n    op = input("Enter operation: ")\nuntil op == "+" OR op == "-" OR op == "*" OR op == "/" OR op == "^" OR op == "sqrt"\n\nb=0\n\nif op != "sqrt" then\n    b=real(input("Enter number: "))\nendif\n\nresult = 0\nswitch op:\n    case "+":\n        result = a+b\n    case "-":\n        result = a-b\n    case "*":\n        result = a*b\n    case "/":\n        result = a/b\n    case "^":\n        result = a^b\n    case "sqrt":\n        result = sqrt(a)\n    default:\n        print("Operation " + op + " not implemented")\nendswitch\n\nprint("Answer: " + result)\n          ')}else if("3"==n){r('\n\nfunction lookup(char, base)\nindex = -1\nsymbols = [\n    "0", "1", "2", "3",\n    "4", "5", "6", "7",\n    "8", "9", "A", "B",\n    "C", "D", "E", "F"\n]\nif base > symbols.length then\n    print("Sorry, only bases 1 to "+symbols.length+" are supported")\nendif\nfor j = 0 to base - 1\n    if char == symbols[j] then\n        index = j\n    endif\nnext j\nif index == -1 then\n    print("Invalid character "+char)\nendif\nreturn index\nendfunction\n\nfunction convert(hex, base)\nout = 0\nfor i = 0 to hex.length-1\n    out += base ^ (hex.length-1-i) * lookup(hex[i], base)\nnext i\nreturn out\nendfunction\n\nprint(convert("111101", 2)) //61\n  \n          ')}else if("4"==n){r('\nconst bookingFee = 1.50\nconst childPrice = 2.50\nconst adultPrice = 5.00\n\nfunction price(adults, children)\n    return adults * adultPrice + childPrice * 2.5 + bookingFee\nendfunction\n\nfunction format(price)\n    s = str(price)\n    out = ""\n    for i=0 to s.length - 1\n        if s[i] == "." then\n            if i+2 == s.length then //one dp\n                return "\xa3" +out + "." + s[i+1] + "0"\n            else //two dp\n                return "\xa3" + out + "." + s[i+1] + s[i+2]\n            endif\n        endif\n        out += s[i]\n    next i\n    //no dot, no dp\n    return "\xa3" + out + ".00"\nendfunction\n\nprint(format(price(3, 5)))\n                    ')}else if("5"==n){r('\nalphabet = [\n    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf",\n    "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November",\n    "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform",\n    "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"\n]\n\nx = input("Word:").lower\nresult = ""\n\nfor i=0 to x.length-1\n    if i != 0 then\n        result += " "\n    endif\n    result += alphabet[ASC(x[i])-97]\nnext i\n\nprint(result)\n                    ')}}function be(){w(!1),r(e.code.trimEnd())}function ye(){Z(!1);let e=`https://ai-api-alpha.vercel.app/api/ocr_code_interperation?question=${JSON.stringify(n)}`;console.log(e),ne(!0),f.default.get(e).then((e=>{console.log(e.data),ne(!1),w(!0),"invalid"==e.data.AI_Answer?(K(!0),J("Invalid Code, please enter valid OCR code")):te(e.data.AI_Answer)})).catch((e=>{ne(!1),w(!0),K(!0),J("Error interperating please try again")}))}function ke(){w(!1),le()}function ve(){return(0,x.jsxs)(x.Fragment,{children:[ae?(0,x.jsx)("button",{className:"icon-button",disabled:oe||!ae,onClick:ke,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Stop Code",title:"Stop Code",children:(0,x.jsx)("span",{className:"icon lsf-icon",title:"stop"})}):(0,x.jsx)("button",{className:"icon-button",disabled:oe||ae,onClick:ye,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Run Code",title:"Run Code",children:(0,x.jsx)("span",{className:"icon lsf-icon",title:"play"})}),(0,x.jsx)("button",{className:"icon-button",onClick:be,onFocus:()=>_(!0),onBlur:()=>_(!1),"aria-label":"Reset Code Window",title:"Reset Code Window",children:(0,x.jsx)("span",{className:"icon lsf-icon",title:"refresh"})})]})}function we(){return(0,x.jsxs)("div",{children:[!U&&(0,x.jsxs)("pre",{className:"output-window",children:[(0,x.jsx)("span",{children:se}),(0,x.jsx)("span",{style:{color:"var(--text-code-error)"},children:ie}),(0,x.jsx)("span",{style:{color:"var(--text-code-error)"},children:D})]}),U&&(0,x.jsx)("pre",{className:"output-window",children:(0,x.jsx)(xe,{})}),(0,x.jsxs)("pre",{className:"output-window",children:[se&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{type:"button",onClick:me,children:"Get AI feedback"})}),(0,x.jsx)("span",{children:I})]})]})}function Ce(){return(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"text",id:"fname",name:"fname",defaultValue:ce,onChange:he}),(0,x.jsx)("button",{type:"button",onClick:je,children:"Submit Input"})]})}function Se(){return(0,x.jsx)(fe,{value:n,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===ue?"idle_fingers":"textmate",onChange:(e,n)=>r(e),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:C,editorProps:{$blockScrolling:!0},setOptions:v})}function Ne(){return e.showButtons||S()||N||A}function Ee(){if(Y(!0),Z(!1),X("End Test"),b=0,"Begin Test"==V){ne(!0);let e="https://ai-api-alpha.vercel.app/api/test_questions_request?q=1";console.log(e),f.default.get(e).then((e=>{Q(e.data.message),Ae(e.data.message),ne(!1),b++})).catch((e=>console.log(e)))}else Y(!1),X("Begin Test"),G(""),Z(!0)}function Ae(e){console.log(b);let n=e[b].Description;G(n.replace("\t",""))}function _e(e){b<2&&(b++,b>=2?b=1:b<0&&(b=0),Ae($))}function Oe(e){b>=0&&((b>=2||b<0)&&(b=0),Ae($),b--)}function Pe(){return(0,x.jsx)("pre",{className:"question-window",children:(0,x.jsx)("span",{children:W})})}function Be(){return(0,x.jsx)("div",{className:"loaderC",children:(0,x.jsx)(m.default,{type:"box-rotate-x",bgColor:y,color:y,title:"Loading",size:100})})}pe&&(fe=t(4981).default,t(4007),t(2777),t(3783),t(2679));const Te=(0,x.jsx)("pre",{style:{margin:0,padding:"0.55rem"},children:n});return(0,x.jsx)(i.default,{fallback:Te,children:()=>(0,x.jsxs)("div",{className:"code-editor",onMouseLeave:()=>{E(!1),_(!1)},children:[ee&&(0,x.jsx)(Be,{}),oe&&(0,x.jsx)(Be,{}),(0,x.jsx)(c.default,{sx:{flexGrow:1},children:(0,x.jsxs)(p.default,{container:!0,spacing:1,children:[(0,x.jsx)(p.default,{xs:12,children:(0,x.jsxs)(h.default,{variant:"contained","aria-label":"outlined primary button group",children:[H&&(0,x.jsx)(j.default,{onClick:Oe,children:"Previous"}),(0,x.jsx)(j.default,{onClick:Ee,children:V}),H&&(0,x.jsx)(j.default,{children:"Template"}),H&&(0,x.jsx)(j.default,{children:"Outline"}),H&&(0,x.jsx)(j.default,{onClick:_e,children:"Next"})]})}),(0,x.jsx)(p.default,{xs:12,children:(0,x.jsxs)(p.default,{container:!0,spacing:1,children:[(0,x.jsx)(p.default,{xs:3,children:u&&Pe()}),(0,x.jsxs)(p.default,{xs:5,style:{width:"50%"},children:[!H&&(0,x.jsxs)(d.default,{direction:"row",spacing:2,children:[(0,x.jsx)(k,{id:"1",onClick:ge,children:"Example 1"}),(0,x.jsx)(k,{id:"2",onClick:ge,children:"Example 2 "}),(0,x.jsx)(k,{id:"3",onClick:ge,children:"Example 3"}),(0,x.jsx)(k,{id:"4",onClick:ge,children:"Example 4"}),(0,x.jsx)(k,{id:"5",onClick:ge,children:"Example 5"})]}),(0,x.jsxs)("div",{className:"code-editor-window",style:u?{borderRadius:".25em .25em 0 0"}:{},children:[Se(),(0,x.jsx)("div",{className:"button-container",style:Ne()?{opacity:100}:{},children:oe?(0,x.jsx)("span",{children:"Loading..."}):ve()})]})]}),(0,x.jsx)(p.default,{xs:3,children:u&&we()}),re&&Ce()]})})]})})]})})}},722:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>N});var s=t(7294),i=t(1262),o=t(2389),a=t(2949),l=t(7562),r=t(948),d=t(1233),c=t(5616),u=t(629),p=t(7400),f=t(5121),h=t(8553),j=t(1057),m=t(7300),x=t(5893);let g=[0,0],b=0,y="blue";const k=(0,r.default)(u.default)((e=>{let{theme:n}=e;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(1),textAlign:"center",color:n.palette.text.secondary}})),v={enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1};function w(e,n,t){let s=e.commands.byName[n];s.bindKeyOriginal||(s.bindKeyOriginal=s.bindKey),s.bindKey=t?s.bindKeyOriginal:null,e.commands.addCommand(s)}const C=e=>{e.renderer.setScrollMargin(10,10,0,0),e.renderer.setPadding(16),e.moveCursorTo(0,0),w(e,"indent",!1),w(e,"outdent",!1),e.commands.on("afterExec",(n=>{"disable-indent"!==n.command.name&&(w(e,"indent",!0),w(e,"outdent",!0))})),e.on("click",(n=>{w(e,"indent",!0),w(e,"outdent",!0)})),e.on("blur",(n=>{w(e,"indent",!1),w(e,"outdent",!1)})),e.commands.addCommand({name:"disable-indent",bindKey:{win:"esc",mac:"esc"},exec:e=>{w(e,"indent",!1),w(e,"outdent",!1)}})},S=()=>!!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)||navigator.userAgent.includes("Mac")&&"ontouchend"in document;function N(e){const[n,r]=(0,s.useState)(e.code.trimEnd()),[u,w]=(0,s.useState)(!1),[N,E]=(0,s.useState)(!1),[A,_]=(0,s.useState)(!1),[O,P]=(0,s.useState)(""),[B,T]=(0,s.useState)(""),[L,z]=(0,s.useState)(""),[R,q]=(0,s.useState)(!1),[I,M]=(0,s.useState)(""),[F,K]=(0,s.useState)(!1),[D,J]=(0,s.useState)(""),[W,G]=(0,s.useState)(""),[$,Q]=(0,s.useState)(""),[H,Y]=(0,s.useState)(!1),[V,X]=(0,s.useState)("Begin Test"),[U,Z]=(0,s.useState)(!1),[ee,ne]=(0,s.useState)(!1);(0,s.useEffect)((()=>{r(e.code.trimEnd()),w(!0)}),[e.code]);const{runPython:te,stdout:se,stderr:ie,isLoading:oe,isRunning:ae,interruptExecution:le,isAwaitingInput:re,sendInput:de,prompt:ce}=(0,l.usePython)(),{colorMode:ue}=(0,a.useColorMode)(),pe=(0,o.default)();let fe=null;function he(e){P(e.target.value)}function je(){de(O.replace(ce,"").trim())}function me(){let e={code:JSON.stringify(n)};console.log(n);let t=`https://ai-api-alpha.vercel.app/api/ai_code_evaluation_pseudo?question=${JSON.stringify(e)}`;console.log(t),ne(!0),f.default.get(t).then((e=>{console.log(e.data),ne(!1),q(!0),M(e.data.AI_Answer)})).catch((e=>console.log(e)))}function xe(e){M(""),q(!1),w(!1);let n=e.target.id;if("1"==n){r("\n\n\n  ")}else if("2"==n){r("\n\n          ")}else if("3"==n){r("\n\n\n  \n          ")}else if("4"==n){r("\n\n                    ")}else if("5"==n){r("\n ")}}function ge(){w(!1),r(e.code.trimEnd())}function be(){Z(!1);let e=`https://ai-api-alpha.vercel.app/api/pseudo_code_interperation?question=${JSON.stringify(n)}`;console.log(e),ne(!0),f.default.get(e).then((e=>{console.log(e.data),w(!0),ne(!1),"invalid"==e.data.AI_Answer?(K(!0),J("Invalid Code, please enter valid Pseudo code")):(K(!1),te(e.data.AI_Answer))})).catch((e=>console.log(e)))}function ye(){w(!1),le()}function ke(){return(0,x.jsxs)(x.Fragment,{children:[ae?(0,x.jsx)("button",{className:"icon-button",disabled:oe||!ae,onClick:ye,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Stop Code",title:"Stop Code",children:(0,x.jsx)("span",{className:"icon lsf-icon",title:"stop"})}):(0,x.jsx)("button",{className:"icon-button",disabled:oe||ae,onClick:be,onFocus:()=>E(!0),onBlur:()=>E(!1),"aria-label":"Run Code",title:"Run Code",children:(0,x.jsx)("span",{className:"icon lsf-icon",title:"play"})}),(0,x.jsx)("button",{className:"icon-button",onClick:ge,onFocus:()=>_(!0),onBlur:()=>_(!1),"aria-label":"Reset Code Window",title:"Reset Code Window",children:(0,x.jsx)("span",{className:"icon lsf-icon",title:"refresh"})})]})}function ve(){return(0,x.jsxs)("pre",{className:"output-window",children:[(0,x.jsxs)("p",{children:["Q1 ",g[0]]}),(0,x.jsxs)("p",{children:["Q2 ",g[1]]})]})}function we(){return(0,x.jsxs)("div",{children:[!U&&(0,x.jsxs)("pre",{className:"output-window",children:[(0,x.jsx)("span",{children:se}),(0,x.jsx)("span",{style:{color:"var(--text-code-error)"},children:ie}),(0,x.jsx)("span",{style:{color:"var(--text-code-error)"},children:D})]}),U&&(0,x.jsx)("pre",{className:"output-window",children:(0,x.jsx)(ve,{})}),(0,x.jsxs)("pre",{className:"output-window",children:[se&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{type:"button",onClick:me,children:"Get AI feedback"})}),(0,x.jsx)("span",{children:I})]})]})}function Ce(){return(0,x.jsxs)("div",{children:[(0,x.jsx)("input",{type:"text",id:"fname",name:"fname",defaultValue:ce,onChange:he}),(0,x.jsx)("button",{type:"button",onClick:je,children:"Submit Input"})]})}function Se(){return(0,x.jsx)(fe,{value:n,mode:"python",name:"CodeBlock",fontSize:"0.9rem",theme:"dark"===ue?"idle_fingers":"textmate",onChange:(e,n)=>r(e),width:"100%",maxLines:1/0,style:{backgroundColor:"rgba(0, 0, 0, 0)"},onLoad:C,editorProps:{$blockScrolling:!0},setOptions:v})}function Ne(){return e.showButtons||S()||N||A}function Ee(){if(Y(!0),Z(!1),X("End Test"),b=0,"Begin Test"==V){ne(!0);let e="https://ai-api-alpha.vercel.app/api/test_questions_request?q=1";console.log(e),f.default.get(e).then((e=>{Q(e.data.message),Ae(e.data.message),ne(!1),b++})).catch((e=>console.log(e)))}else Y(!1),X("Begin Test"),G(""),Z(!0)}function Ae(e){console.log(b);let n=e[b].Description;G(n.replace("\t",""))}function _e(e){b<2&&(b++,b>=2?b=1:b<0&&(b=0),Ae($))}function Oe(e){b>=0&&((b>=2||b<0)&&(b=0),Ae($),b--)}function Pe(){return(0,x.jsx)("pre",{className:"question-window",children:(0,x.jsx)("span",{children:W})})}function Be(){return(0,x.jsx)("div",{className:"loaderC",children:(0,x.jsx)(m.default,{type:"box-rotate-x",bgColor:y,color:y,title:"Loading",size:100})})}pe&&(fe=t(4981).default,t(4007),t(2777),t(3783),t(2679));const Te=(0,x.jsx)("pre",{style:{margin:0,padding:"0.55rem"},children:n});return(0,x.jsx)(i.default,{fallback:Te,children:()=>(0,x.jsxs)("div",{className:"code-editor",onMouseLeave:()=>{E(!1),_(!1)},children:[ee&&(0,x.jsx)(Be,{}),oe&&(0,x.jsx)(Be,{}),(0,x.jsx)(c.default,{sx:{flexGrow:1},children:(0,x.jsxs)(p.default,{container:!0,spacing:1,children:[(0,x.jsx)(p.default,{xs:12,children:(0,x.jsxs)(h.default,{variant:"contained","aria-label":"outlined primary button group",children:[H&&(0,x.jsx)(j.default,{onClick:Oe,children:"Previous"}),(0,x.jsx)(j.default,{onClick:Ee,children:V}),H&&(0,x.jsx)(j.default,{children:"Template"}),H&&(0,x.jsx)(j.default,{children:"Outline"}),H&&(0,x.jsx)(j.default,{onClick:_e,children:"Next"})]})}),(0,x.jsx)(p.default,{xs:12,children:(0,x.jsxs)(p.default,{container:!0,spacing:1,children:[(0,x.jsx)(p.default,{xs:3,children:u&&Pe()}),(0,x.jsxs)(p.default,{xs:5,style:{width:"50%"},children:[!H&&(0,x.jsxs)(d.default,{direction:"row",spacing:2,children:[(0,x.jsx)(k,{id:"1",onClick:xe,children:"Example 1"}),(0,x.jsx)(k,{id:"2",onClick:xe,children:"Example 2 "}),(0,x.jsx)(k,{id:"3",onClick:xe,children:"Example 3"}),(0,x.jsx)(k,{id:"4",onClick:xe,children:"Example 4"}),(0,x.jsx)(k,{id:"5",onClick:xe,children:"Example 5"})]}),(0,x.jsxs)("div",{className:"code-editor-window",style:u?{borderRadius:".25em .25em 0 0"}:{},children:[Se(),(0,x.jsx)("div",{className:"button-container",style:Ne()?{opacity:100}:{},children:oe?(0,x.jsx)("span",{children:"Loading..."}):ke()})]})]}),(0,x.jsx)(p.default,{xs:3,children:u&&we()}),re&&Ce()]})})]})})]})})}},7760:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>i});t(381);var s=t(1955);const i={getEmail:function(){let e=s.default.get("auth");return!!e&&JSON.parse(e).email},setEmail:function(e){const n={email:e},t=new Date((new Date).getTime()+36e4);s.default.set("auth",JSON.stringify(n),{expires:t})}}},1148:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var s=t(7294),i=(t(3692),t(6040)),o=(t(9070),t(4109),t(722)),a=t(1207),l=t(7760),r=t(5893);function d(){(0,s.useEffect)((()=>{if(0!=l.default.getEmail()){const e=Array.from(document.getElementsByClassName("navbar__items navbar__items--right"));for(let n=0;n<e[0].children.length;n++){let t=e[0].children[n];"Login"==t.innerHTML?(t.innerHTML=l.default.getEmail(),t.href="#"):console.log(t.innerHTML)}}}),[]);return(0,r.jsx)(i.default,{title:"Python IDE",children:(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:a.default.heroContainer,children:(0,r.jsx)("div",{className:a.default.codeEditorWrapper,children:(0,r.jsx)(o.default,{code:"\n\nTake two arguments from user\nTake the sum of two arguments\nReturn the sum\n\n",showButtons:!0})})})})})}},1207:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>s});const s={heroContainer:"heroContainer_i2aB",signup:"signup_SFg6",tagline:"tagline_Bqj_",codePrompt:"codePrompt_HTth",random:"random_CLNT",codeEditorWrapper:"codeEditorWrapper_t3Dg"}},6700:(e,n,t)=>{var s={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6135,"./ar-kw.js":6135,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-ps":315,"./ar-ps.js":315,"./ar-sa":2705,"./ar-sa.js":2705,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":864,"./da.js":864,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":6997,"./en-ca.js":6997,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":2088,"./es-do.js":2088,"./es-mx":6112,"./es-mx.js":6112,"./es-us":3939,"./es-us.js":3939,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku-kmr":563,"./ku-kmr.js":563,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":490,"./se.js":490,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5606,"./ss.js":5606,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id=6700}}]);