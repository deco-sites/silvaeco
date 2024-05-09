/* esm.sh - esbuild bundle(@aws-crypto/crc32@3.0.0) denonext production */
import * as __0$ from "/v135/tslib@1.14.1/denonext/tslib.mjs";
import * as __1$ from "/v135/@aws-crypto/util@3.0.0/denonext/util.mjs";
import * as __2$ from "/v135/tslib@1.14.1/denonext/tslib.mjs";
import * as __3$ from "/v135/@aws-crypto/util@3.0.0/denonext/util.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"tslib":return e(__0$);case"@aws-crypto/util":return c(__1$);default:throw new Error("module \""+n+"\" not found");}};
var y=Object.create;var n=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var t=(x=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(x,{get:(B,D)=>(typeof require<"u"?require:B)[D]}):x)(function(x){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+x+'" is not supported')});var f=(x,B)=>()=>(B||x((B={exports:{}}).exports,B),B.exports),q=(x,B)=>{for(var D in B)n(x,D,{get:B[D],enumerable:!0})},i=(x,B,D,F)=>{if(B&&typeof B=="object"||typeof B=="function")for(let C of b(B))!g.call(x,C)&&C!==D&&n(x,C,{get:()=>B[C],enumerable:!(F=m(B,C))||F.enumerable});return x},E=(x,B,D)=>(i(x,B,"default"),D&&i(D,B,"default")),s=(x,B,D)=>(D=x!=null?y(k(x)):{},i(B||!x||!x.__esModule?n(D,"default",{value:x,enumerable:!0}):D,x));var p=f(c=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});c.AwsCrc32=void 0;var a=t("tslib"),o=t("@aws-crypto/util"),l=u(),T=function(){function x(){this.crc32=new l.Crc32}return x.prototype.update=function(B){(0,o.isEmptyData)(B)||this.crc32.update((0,o.convertToBuffer)(B))},x.prototype.digest=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(B){return[2,(0,o.numToUint8)(this.crc32.digest())]})})},x.prototype.reset=function(){this.crc32=new l.Crc32},x}();c.AwsCrc32=T});var u=f(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.AwsCrc32=A.Crc32=A.crc32=void 0;var j=t("tslib"),M=t("@aws-crypto/util");function O(x){return new v().update(x).digest()}A.crc32=O;var v=function(){function x(){this.checksum=4294967295}return x.prototype.update=function(B){var D,F;try{for(var C=j.__values(B),e=C.next();!e.done;e=C.next()){var h=e.value;this.checksum=this.checksum>>>8^U[(this.checksum^h)&255]}}catch(w){D={error:w}}finally{try{e&&!e.done&&(F=C.return)&&F.call(C)}finally{if(D)throw D.error}}return this},x.prototype.digest=function(){return(this.checksum^4294967295)>>>0},x}();A.Crc32=v;var P=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],U=(0,M.uint32ArrayFrom)(P),z=p();Object.defineProperty(A,"AwsCrc32",{enumerable:!0,get:function(){return z.AwsCrc32}})});var r={};q(r,{AwsCrc32:()=>I,Crc32:()=>J,__esModule:()=>G,crc32:()=>K,default:()=>N});var _=s(u());E(r,s(u()));var{__esModule:G,AwsCrc32:I,Crc32:J,crc32:K}=_,{default:d,...L}=_,N=d!==void 0?d:L;export{I as AwsCrc32,J as Crc32,G as __esModule,K as crc32,N as default};
//# sourceMappingURL=crc32.mjs.map