for(var t=document.querySelectorAll(".population"),e=0,o=0,n=0;n<t.length;n++){var a=t[n].textContent.replace(/,/g,"");!isNaN(a)&&(e+=a=+a,o++)}var r=e/o,l=e.toLocaleString("en-US"),c=r.toLocaleString("en-US");document.querySelector("span.average-population").textContent=c,document.querySelector("span.total-population").textContent=l;
//# sourceMappingURL=index.d31d659e.js.map
