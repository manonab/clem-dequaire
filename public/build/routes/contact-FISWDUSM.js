import{a as C}from"/build/_shared/chunk-FZFRRFAP.js";import{d as f,f as j,g as N}from"/build/_shared/chunk-C46C5URB.js";var d=f(j(),1);var l={_origin:"https://api.emailjs.com"};var w=(o,t="https://api.emailjs.com")=>{l._userID=o,l._origin=t};var u=(o,t,s)=>{if(!o)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};var c=class{constructor(t){this.status=t.status,this.text=t.responseText}};var x=(o,t,s={})=>new Promise((m,a)=>{let n=new XMLHttpRequest;n.addEventListener("load",({target:r})=>{let p=new c(r);p.status===200||p.text==="OK"?m(p):a(p)}),n.addEventListener("error",({target:r})=>{a(new c(r))}),n.open("POST",l._origin+o,!0),Object.keys(s).forEach(r=>{n.setRequestHeader(r,s[r])}),n.send(t)});var _=(o,t,s,m)=>{let a=m||l._userID;return u(a,o,t),x("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:o,template_id:t,template_params:s}),{"Content-type":"application/json"})};var k=o=>{let t;if(typeof o=="string"?t=document.querySelector(o):t=o,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},y=(o,t,s,m)=>{let a=m||l._userID,n=k(s);u(a,o,t);let r=new FormData(n);return r.append("lib_version","3.2.0"),r.append("service_id",o),r.append("template_id",t),r.append("user_id",a),x("/api/v1.0/email/send-form",r)};var b={init:w,send:_,sendForm:y};var e=f(N(),1);function F({onClose:o}){return(0,e.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50",children:(0,e.jsxs)("div",{className:"bg-white p-8 rounded-md",children:[(0,e.jsx)("p",{className:"font-neueRegular text-xl text-center",children:"Votre message a bien \xE9t\xE9 envoy\xE9 !"}),(0,e.jsx)("button",{onClick:o,className:"block mx-auto mt-4 bg-royalBlue text-white font-bold py-2 px-4 rounded",children:"Fermer"})]})})}function M(){let{setHeaderColor:o}=C(),[t,s]=(0,d.useState)(!1),[m,a]=(0,d.useState)(""),[n,r]=(0,d.useState)(""),[p,v]=(0,d.useState)(""),[h,g]=(0,d.useState)("");return(0,d.useEffect)(()=>{b.init("IoYqcS-FyoRAsKFCH"),o("mainColor")},[o]),(0,e.jsxs)("div",{className:"w-screen h-screen flex mt-20 mb-10",children:[(0,e.jsxs)("div",{className:"flex-col ml-10 ",children:[(0,e.jsx)("p",{className:"text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular",children:"Con"}),(0,e.jsx)("p",{className:"text-[200px] leading-[90%] text-royalBlue uppercase font-neueRegular",children:"tact."})]}),t&&(0,e.jsx)(F,{onClose:()=>{s(!1)}}),(0,e.jsxs)("div",{className:"flex-col mx-auto",children:[(0,e.jsxs)("div",{className:"flex justify-around",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-inter mb-1",children:"Nom"}),(0,e.jsx)("input",{value:m,onChange:i=>a(i.target.value),className:"p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{className:"font-inter mb-1",children:"Email"}),(0,e.jsx)("input",{value:n,onChange:i=>r(i.target.value),className:"p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]"})]})]}),(0,e.jsxs)("div",{className:"my-10",children:[(0,e.jsx)("p",{className:"font-inter mb-1",children:"Object"}),(0,e.jsx)("input",{value:p,onChange:i=>v(i.target.value),className:"p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[305px] h-[55px]"})]}),(0,e.jsxs)("div",{className:" mt-10",children:[(0,e.jsx)("p",{className:"font-inter mb-1",children:"Message"}),(0,e.jsx)("textarea",{value:h,onChange:i=>g(i.target.value),className:"p-2 rounded-[20px] bg-mainColor border-[2px] border-black w-[635px] h-[190px]"})]}),(0,e.jsx)("div",{onClick:()=>{b.send("service_bws8nok","template_xk52e9b",{user_name:m,message:h,user_email:n,user_object:p}).then(i=>{console.log("Email envoy\xE9 avec succ\xE8s !",i),s(!0),a(""),r(""),v(""),g("")}).catch(i=>{console.error("Erreur lors de l'envoi de l'e-mail :",i)})},className:"hover:cursor-pointer border-black bg-black border mt-5 mr-[10px] rounded-3xl px-5 py-3 w-[200px] mx-auto",children:(0,e.jsx)("p",{className:"leading-[17.5px] font-bold text-sm text-center text-white uppercase",children:"Envoyez"})})]})]})}export{M as default};
