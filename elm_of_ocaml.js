
// Generated by js_of_ocaml 2.7
(function(y){"use strict";var
O="Sys_error",aa=224,$="Invalid_argument",m=1024,N=57343,_=512,Z="End_of_file",X="_elm_lang$core$Native_Platform.batch",Y="Failure",M="Undefined_recursive_module",W="Stack_overflow",e=128,d="",u=" : file already exists",J=56320,K=240,L=2048,a=248,V="Not_found",H="Assert_failure",I="/",T="Sys_blocked_io",U="fd ",G="Out_of_memory",S="target",R="Match_failure",Q="Division_by_zero",P=1e3,aV=0;function
n(){return aV++}function
aZ(a,b){if(b.repeat)return b.repeat(a);var
c=d,e=0;if(a==0)return c;for(;;){if(a&1)c+=b;a>>=1;if(a==0)return c;b+=b;e++;if(e==9)b.slice(0,1)}}function
am(a,b,c){var
e=new
Array(c);for(var
d=0;d<c;d++)e[d]=a[b+d];return e}function
x(a,b,c){var
e=String.fromCharCode;if(b==0&&c<=4096&&c==a.length)return e.apply(null,a);var
f=d;for(;0<c;b+=m,c-=m)f+=e.apply(null,am(a,b,Math.min(c,m)));return f}function
ad(a){if(a.t==2)a.c+=aZ(a.l-a.c.length,"\0");else
a.c=x(a.c,0,a.c.length);a.t=0}function
af(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>127)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
a4(a){for(var
l=d,f=d,i,h,j,b,c=0,k=a.length;c<k;c++){h=a.charCodeAt(c);if(h<e){for(var
g=c+1;g<k&&(h=a.charCodeAt(g))<e;g++);if(g-c>_){f.substr(0,1);l+=f;f=d;l+=a.slice(c,g)}else
f+=a.slice(c,g);if(g==k)break;c=g}b=1;if(++c<k&&((j=a.charCodeAt(c))&-64)==e){i=j+(h<<6);if(h<aa){b=i-12416;if(b<e)b=1}else{b=2;if(++c<k&&((j=a.charCodeAt(c))&-64)==e){i=j+(i<<6);if(h<K){b=i-925824;if(b<L||b>=55295&&b<57344)b=2}else{b=3;if(++c<k&&((j=a.charCodeAt(c))&-64)==e&&h<245){b=j-63447168+(i<<6);if(b<65536||b>1114111)b=3}}}}}if(b<4){c-=b;f+="\ufffd"}else
if(b>65535)f+=String.fromCharCode(55232+(b>>10),J+(b&1023));else
f+=String.fromCharCode(b);if(f.length>m){f.substr(0,1);l+=f;f=d}}return l+f}function
a3(a){switch(a.t){case
9:return a.c;default:ad(a);case
0:if(af(a.c)){a.t=9;return a.c}a.t=8;case
8:return a4(a.c)}}function
h(a,b,c){this.t=a;this.c=b;this.l=c}h.prototype.toString=function(){return a3(this)};function
al(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=y.console;b&&b.error&&b.error(a)}function
aN(a){al("caml_js_expr: fallback to runtime evaluation");return eval(a.toString())}function
aO(a){return am(a,1,a.length-1)}function
aP(a,b){return a.apply(null,aO(b))}function
a5(a){for(var
h=d,c=h,b,j,f=0,i=a.length;f<i;f++){b=a.charCodeAt(f);if(b<e){for(var
g=f+1;g<i&&(b=a.charCodeAt(g))<e;g++);if(g-f>_){c.substr(0,1);h+=c;c=d;h+=a.slice(f,g)}else
c+=a.slice(f,g);if(g==i)break;f=g}if(b<L){c+=String.fromCharCode(192|b>>6);c+=String.fromCharCode(e|b&63)}else
if(b<55296||b>=N)c+=String.fromCharCode(aa|b>>12,e|b>>6&63,e|b&63);else
if(b>=56319||f+1==i||(j=a.charCodeAt(f+1))<J||j>N)c+="\xef\xbf\xbd";else{f++;b=(b<<10)+j-56613888;c+=String.fromCharCode(K|b>>18,e|b>>12&63,e|b>>6&63,e|b&63)}if(c.length>m){c.substr(0,1);h+=c;c=d}}return h+c}function
ag(a){var
b=9;if(!af(a))b=8,a=a5(a);return new
h(b,a,a.length)}function
aW(a,b){throw[0,a,b]}function
c(a){return new
h(0,a,a.length)}function
aj(a,b){aW(a,c(b))}var
f=[0];function
g(a){aj(f.Sys_error,a)}function
aQ(a){if(!a.opened)g("Cannot flush a closed channel");if(a.buffer==d)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=d;return 0}function
ae(a){aj(f.Invalid_argument,a)}function
l(a){if(a<0)ae("String.create");return new
h(a?2:9,d,a)}var
ak=0;function
a7(){return new
Date().getTime()/P}function
z(){return Math.floor(a7())}function
i(a){this.data=a;this.inode=ak++;var
b=z();this.atime=b;this.mtime=b;this.ctime=b}i.prototype={truncate:function(){this.data=l(0);this.modified()},modified:function(){var
a=z();this.atime=a;this.mtime=a}};function
w(a){return a.l}function
ai(a){a=a
instanceof
h?a.toString():a;g(a+": No such file or directory")}var
aL=I;function
q(a){a=a
instanceof
h?a.toString():a;if(a.charCodeAt(0)!=47)a=aL+a;var
e=a.split(I),b=[];for(var
c=0;c<e.length;c++)switch(e[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(d);break;default:b.push(e[c]);break}b.orig=a;return b}function
k(){this.content={};this.inode=ak++;var
a=z();this.atime=a;this.mtime=a;this.ctime=a}k.prototype={exists:function(a){return this.content[a]?1:0},mk:function(a,b){this.content[a]=b},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
s=new
k();s.mk(d,new
k());function
v(a){var
b=s;for(var
c=0;c<a.length;c++){if(!(b.exists&&b.exists(a[c])))ai(a.orig);b=b.get(a[c])}return b}function
a2(a){var
c=q(a),b=v(c);return b
instanceof
k?1:0}function
a0(a){return new
h(4,a,a.length)}function
ac(a){var
c=new
Array(a.l),e=a.c,d=e.length,b=0;for(;b<d;b++)c[b]=e.charCodeAt(b);for(d=a.l;b<d;b++)c[b]=0;a.c=c;a.t=4;return c}function
a8(a){if(a.t!=4)ac(a);return a.c}function
aM(a,b){var
f=q(a),d=s;for(var
j=0;j<f.length-1;j++){var
e=f[j];if(!d.exists(e))d.mk(e,new
k());d=d.get(e);if(!(d
instanceof
k))g(f.orig+u)}var
e=f[f.length-1];if(d.exists(e))g(f.orig+u);if(b
instanceof
k)d.mk(e,b);else
if(b
instanceof
i)d.mk(e,b);else
if(b
instanceof
h)d.mk(e,new
i(b));else
if(b
instanceof
Array)d.mk(e,new
i(a0(b)));else
if(b.toString)d.mk(e,new
i(c(b.toString())));else
ae("caml_fs_register");return 0}function
a1(a){var
b=s,d=q(a),e,f;for(var
c=0;c<d.length;c++){if(b.auto){e=b.auto;f=c}if(!(b.exists&&b.exists(d[c])))return e?e(d,f):0;b=b.get(d[c])}return 1}function
o(a,b,c){if(f.fds===undefined)f.fds=new
Array();c=c?c:{};var
d={};d.file=b;d.offset=c.append?w(b.data):0;d.flags=c;f.fds[a]=d;f.fd_last_idx=a;return a}function
a9(a,b,c){var
d={};while(b){switch(b[1]){case
0:d.rdonly=1;break;case
1:d.wronly=1;break;case
2:d.append=1;break;case
3:d.create=1;break;case
4:d.truncate=1;break;case
5:d.excl=1;break;case
6:d.binary=1;break;case
7:d.text=1;break;case
8:d.nonblock=1;break}b=b[2]}var
h=a.toString(),j=q(a);if(d.rdonly&&d.wronly)g(h+" : flags Open_rdonly and Open_wronly are not compatible");if(d.text&&d.binary)g(h+" : flags Open_text and Open_binary are not compatible");if(a1(a)){if(a2(a))g(h+" : is a directory");if(d.create&&d.excl)g(h+u);var
i=f.fd_last_idx?f.fd_last_idx:0,e=v(j);if(d.truncate)e.truncate();return o(i+1,e,d)}else
if(d.create){var
i=f.fd_last_idx?f.fd_last_idx:0;aM(a,l(0));var
e=v(j);return o(i+1,e,d)}else
ai(a)}o(0,new
i(l(0)));o(1,new
i(l(0)));o(2,new
i(l(0)));function
aR(a){var
b=f.fds[a];if(b.flags.wronly)g(U+a+" is writeonly");return{file:b.file,offset:b.offset,fd:a,opened:true,refill:null}}function
ab(a,b,c,d,e){if(e==0)return 0;if(d==0&&(e>=c.l||c.t==2&&e>=c.c.length)){c.c=a.t==4?x(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else
if(c.t==2&&d==c.c.length){c.c+=a.t==4?x(a.c,b,e):b==0&&a.c.length==e?a.c:a.c.substr(b,e);c.t=c.c.length==c.l?0:2}else{if(c.t!=4)ac(c);var
g=a.c,h=c.c;if(a.t==4)for(var
f=0;f<e;f++)h[d+f]=g[b+f];else{var
i=Math.min(e,g.length-b);for(var
f=0;f<i;f++)h[d+f]=g.charCodeAt(b+f);for(;f<e;f++)h[d+f]=0}}return 0}function
a6(a){if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
b=y.console;b&&b.log&&b.log(a)}var
r=new
Array();function
aY(a,b){var
h=c(b),d=w(h),g=w(a.file.data),f=a.offset;if(f+d>=g){var
e=l(f+d);ab(a.file.data,0,e,0,g);ab(h,0,e,f,d);a.file.data=e}a.offset+=d;a.file.modified();return 0}function
ah(a){var
b;switch(a){case
1:b=a6;break;case
2:b=al;break;default:b=aY}var
e=f.fds[a];if(e.flags.rdonly)g(U+a+" is readonly");var
c={file:e.file,offset:e.offset,fd:a,opened:true,buffer:d,output:b};r[c.fd]=c;return c}function
aS(){var
a=0;for(var
b
in
r)if(r[b].opened)a=[0,r[b],a];return a}function
aU(a){return a
instanceof
Array?a[0]:a
instanceof
h?252:P}function
b(a,b,c){f[a+1]=b;if(c)f[c]=b}var
aT={};function
aK(a){if((a.t&6)!=0)ad(a);return a.c}function
aX(a,b){aT[aK(a)]=b;return 0}b(11,[a,c(M),-12],M);b(10,[a,c(H),-11],H);b(9,[a,c(T),-10],T);b(8,[a,c(W),-9],W);b(7,[a,c(R),-8],R);b(6,[a,c(V),-7],V);b(5,[a,c(Q),-6],Q);b(4,[a,c(Z),-5],Z);b(3,[a,c($),-4],$);b(2,[a,c(Y),-3],Y);b(1,[a,c(O),-2],O);b(0,[a,c(G),-1],G);n(0);aR(0);ah(1);ah(2);n(0);n(0);n(0);var
A=[0,0],aq=c("Js.Error"),az=c("_elm_lang$core$Native_Json.decodeField"),ar=c("_elm_lang$core$Native_Json.decodePrimitive"),as=c("string"),au=c("int"),aw=c("float"),ax=c("bool"),aB=c("_elm_lang$virtual_dom$Native_VirtualDom.node"),aA=c("_elm_lang$virtual_dom$Native_VirtualDom.text"),aD=c(X),aC=c(X),aE=c("div"),aF=[0,c(S),[0,c("value"),0]],aG=[0,c(S),[0,c("checked"),0]],aH=c("keyCode"),aI=c("_elm_lang$core$Native_Platform.addPublicModule"),aJ=c("AAAA");function
B(a){A[1]=[0,a,A[1]];return 0}var
ap=y.Array,C=[a,aq,n(0)],t=[0,C,{}],ao=aU(t)===a?t:t[1];aX(c("jsError"),ao);B(function(a){return a[1]===C?[0,ag(a[2].toString())]:0});B(function(a){return a
instanceof
ap?0:[0,ag(a.toString())]});function
j(a,b){return aP(aN(a),b)}function
p(a){return j(ar,[0,a])}var
at=p(as),av=p(au);p(aw);var
ay=p(ax);function
D(a,b){return j(az,[0,a,b])}function
E(a,b){var
d=b,c=a;for(;;){if(c){var
e=c[2],d=D(d,c[1]),c=e;continue}return d}}j(aC,[0,0]);j(aD,[0,0]);E(aF,at);E(aG,ay);D(aH,av);var
F={};j(aI,[0,F,"Main",{"main":j(aB,[0,aE,0,[0,j(aA,[0,aJ]),0]])}]);F.fullscreen();function
an(a){var
b=a;for(;;){if(b){var
c=b[2],d=b[1];try{aQ(d)}catch(f){}var
b=c;continue}return 0}}an(aS(0));return}(function(){return this}()));
