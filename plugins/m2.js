const _0x39be39=_0x3d54;(function(_0x18ef93,_0x581329){const _0x3795f5=_0x3d54,_0xdd1f2f=_0x18ef93();while(!![]){try{const _0x3ef85f=parseInt(_0x3795f5(0x1c0))/0x1*(parseInt(_0x3795f5(0x192))/0x2)+-parseInt(_0x3795f5(0x1c3))/0x3*(-parseInt(_0x3795f5(0x1a0))/0x4)+-parseInt(_0x3795f5(0x1d1))/0x5+parseInt(_0x3795f5(0x1d9))/0x6*(parseInt(_0x3795f5(0x1b4))/0x7)+-parseInt(_0x3795f5(0x19a))/0x8*(parseInt(_0x3795f5(0x1b6))/0x9)+-parseInt(_0x3795f5(0x1d4))/0xa*(-parseInt(_0x3795f5(0x19d))/0xb)+parseInt(_0x3795f5(0x18b))/0xc*(-parseInt(_0x3795f5(0x1b2))/0xd);if(_0x3ef85f===_0x581329)break;else _0xdd1f2f['push'](_0xdd1f2f['shift']());}catch(_0x3b8fa2){_0xdd1f2f['push'](_0xdd1f2f['shift']());}}}(_0x4fcb,0xafb2b));function _0x4fcb(){const _0x23a88a=['error','key','363YkEwrb','DIRECT_LINK','*Error\x20fetching\x20or\x20sending\x20*','5324hlaFha','LOGO','file','\x0a\x0a*ＤＡＲＫ\x20ＳＨＵＴＥＲ\x20ＭＤ\x20Ｖ2*','cdl','cinedl\x20','*Failed\x20to\x20forward\x20to\x20all\x20provided\x20JIDs\x20❌*','message','buttonMessage','sendMessage','forward2','image','*🎞️\x20Name\x20:*\x20','length','*Message\x20successfully\x20forwarded\x20to:*\x0a\x0a','.forward2\x20<\x20Jid\x20address\x201,\x20Jid\x20address\x202,\x20...>','rating','../lib/functions','13VLsQZA','*🎥\x20DARK\x20SHUTER\x20MOVIE\x20SEARCH\x20🎥*','204827XBFtnS','Error\x20fetching\x20or\x20sending','18gDAVDQ','cdetails','https://rest-api-dark-shan.vercel.app/download/cinesubz-dl-3?q=','https://rest-api-dark-shan.vercel.app/download/cinesubz-dl?q=','owner','*\x0a\x0a*`⏰\x20Duration\x20➨`*\x20\x20*','*❖\x20━━━━━━━━━━━━━━━━\x20❖*\x0a\x0a*`🎞️\x20Title\x20➨`*\x20\x20*','Failed\x20to\x20forward\x20to\x20','*Please\x20provide\x20a\x20direct\x20URL!*','JID','458RmTlug','\x20-\x20','data','366DEFecE','&apikey=annapojira2000@','map','duration','*please\x20give\x20me\x20text\x20!..*','size','title','file.','date','FOOTER','documentMessage','moive\x20downloader','SIZE','path','6667820XGykIC','*\x0a\x0a*`🌐\x20Country\x20➨`*\x20*','quoted','428210QUlTgs','form-data','*\x0a\x0a*`📅\x20Release\x20➨`*\x20*','erro\x20!','join','258KscPcL','trim','quality','alternativeLinks','forwardMessage','movie2','https://rest-api-dark-shan.vercel.app/download/cinesubz-dl-2?q=','*Please\x20give\x20me\x20a\x20Jid\x20and\x20Quote\x20a\x20Message\x20to\x20continue.*','link','mime-types','FILE','push','.mp4','extension','file-type','mimetype','fileName','binary','15177084FbaLCV','\x0a🏆\x20IMDB\x20Rating\x20:\x20','split','documentWithCaptionMessage','video/mp4','forward\x20msgs','Details\x20send','6234GsoRpB','*Provide\x20at\x20least\x20one\x20valid\x20JID\x20❌*','🚩\x20*Error\x20!!*','cinedl','*\x0a\x0a*`👑\x20Rate\x20➨`*\x20*','country','log','\x0a\x0a📅\x20𝚁𝚎𝚕𝚎𝚊𝚜𝚎\x20:\x20','3773216kCGeOP'];_0x4fcb=function(){return _0x23a88a;};return _0x4fcb();}function _0x3d54(_0x19be9e,_0x1148c4){const _0x4fcb6e=_0x4fcb();return _0x3d54=function(_0x3d54cc,_0x29fb20){_0x3d54cc=_0x3d54cc-0x17c;let _0x318ad3=_0x4fcb6e[_0x3d54cc];return _0x318ad3;},_0x3d54(_0x19be9e,_0x1148c4);}const config=require('../config'),{cmd,commands}=require('../command'),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x39be39(0x1b1)),axios=require('axios'),FormData=require(_0x39be39(0x1d5)),fs=require('fs'),path=require(_0x39be39(0x1d0)),fileType=require(_0x39be39(0x187));cmd({'pattern':_0x39be39(0x17e),'react':'🔎','category':'movie','desc':'Moive\x20downloader','filename':__filename},async(_0x469696,_0x3bec33,_0x57ce89,{from:_0x171262,q:_0x4cc6e5,prefix:_0x740f76,isMe:_0x12c9f6,reply:_0x519da7})=>{const _0x405c77=_0x39be39;try{if(!_0x4cc6e5)return await _0x519da7('*please\x20give\x20me\x20text\x20!..*');let _0xd2c78e=await fetchJson('https://rest-api-dark-shan.vercel.app/download/cinesubz-search?q='+_0x4cc6e5+_0x405c77(0x1c4));if(_0xd2c78e[_0x405c77(0x1ad)]<0x1)return await _0x469696[_0x405c77(0x1a9)](_0x171262,{'text':_0x405c77(0x1d7)},{'quoted':_0x57ce89});var _0x462cb8=[];_0xd2c78e[_0x405c77(0x1c2)][_0x405c77(0x1c5)](_0x26f47b=>{const _0x14e0a9=_0x405c77;_0x462cb8[_0x14e0a9(0x184)]({'buttonId':_0x740f76+(_0x14e0a9(0x1a5)+_0x26f47b[_0x14e0a9(0x181)]),'buttonText':{'displayText':''+_0x26f47b[_0x14e0a9(0x1c9)]},'type':0x1});});const _0x117a97=_0x405c77(0x1b3),_0x3df5e1={'image':{'url':config[_0x405c77(0x1a1)]},'caption':_0x117a97,'footer':config[_0x405c77(0x1cc)],'buttons':_0x462cb8,'headerType':0x4};return await _0x469696['buttonMessage'](_0x171262,_0x3df5e1,_0x57ce89);}catch(_0x211b97){console['log'](_0x211b97),await _0x469696[_0x405c77(0x1a9)](_0x171262,{'text':_0x405c77(0x194)},{'quoted':_0x57ce89});}}),cmd({'pattern':_0x39be39(0x195),'react':'🎥','desc':_0x39be39(0x1ce),'filename':__filename},async(_0x431c2d,_0xa87dcd,_0x479358,{from:_0x48a6ea,q:_0x5c557f,isMe:_0x22e160,prefix:_0x57abc2,reply:_0x926e74})=>{const _0x4de234=_0x39be39;try{if(!_0x5c557f)return await _0x926e74('*please\x20give\x20me\x20text\x20!..*');let _0x54560d=await fetchJson(_0x4de234(0x1b9)+_0x5c557f+'&apikey=annapojira2000@'),_0x21b214=await fetchJson(_0x4de234(0x17f)+_0x5c557f+'&apikey=annapojira2000@'),_0x5bbbfe='☘️'+_0x54560d['data'][_0x4de234(0x1c9)]+_0x4de234(0x199)+_0x54560d['data'][_0x4de234(0x1cb)]+'\x0a🌎\x20𝙲𝚘𝚞𝚗𝚝𝚛𝚢\x20:\x20'+_0x54560d[_0x4de234(0x1c2)][_0x4de234(0x197)]+'\x0a🕰\x20𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗\x20:\x20'+_0x54560d['data']['duration']+_0x4de234(0x18c)+_0x54560d[_0x4de234(0x1c2)][_0x4de234(0x1b0)]+'\x0a';if(_0x21b214['length']<0x1)return await _0x431c2d['sendMessage'](_0x48a6ea,{'text':'erro\x20!'},{'quoted':_0x479358});var _0x30dd6d=[];_0x30dd6d[_0x4de234(0x184)]({'buttonId':_0x57abc2+'cdetails\x20'+_0x5c557f,'buttonText':{'displayText':_0x4de234(0x191)},'type':0x1}),_0x21b214[_0x4de234(0x1c2)]['map'](_0x42b89d=>{const _0x22bcd7=_0x4de234;_0x30dd6d[_0x22bcd7(0x184)]({'buttonId':_0x57abc2+('cdl\x20'+_0x42b89d[_0x22bcd7(0x17c)]+'&'+_0x54560d[_0x22bcd7(0x1c2)]['title']+_0x22bcd7(0x1c1)+_0x42b89d[_0x22bcd7(0x1db)]),'buttonText':{'displayText':_0x42b89d[_0x22bcd7(0x1c8)]+_0x22bcd7(0x1c1)+_0x42b89d[_0x22bcd7(0x1db)]},'type':0x1});});const _0x18c69c={'image':{'url':_0x54560d[_0x4de234(0x1c2)][_0x4de234(0x1ab)]},'caption':_0x5bbbfe,'footer':config[_0x4de234(0x1cc)],'buttons':_0x30dd6d,'headerType':0x4};return await _0x431c2d[_0x4de234(0x1a8)](_0x48a6ea,_0x18c69c,_0x479358);}catch(_0x49a7c7){console[_0x4de234(0x198)](_0x49a7c7),await _0x431c2d['sendMessage'](_0x48a6ea,{'text':_0x4de234(0x194)},{'quoted':_0x479358});}}),cmd({'pattern':_0x39be39(0x1a4),'react':'📥','dontAddCommandList':!![],'filename':__filename},async(_0x5689f6,_0x3462b9,_0x4531b2,{from:_0x5f418d,q:_0x4920ba,isMe:_0x543f8,reply:_0x5734d5})=>{const _0x58c1d4=_0x39be39;if(!_0x4920ba)return await _0x5734d5(_0x58c1d4(0x1be));try{const _0x21184a=_0x4920ba['split']('&')[0x0],_0x84569b=_0x4920ba['split']('&')[0x1];let _0x482e28=await fetchJson(_0x58c1d4(0x1b8)+_0x21184a+'&apikey=annapojira2000@');const _0x1f5849=''+_0x482e28['data'][_0x58c1d4(0x19e)],_0x1e4af1=_0x1f5849[_0x58c1d4(0x1da)](),_0x136934=await axios['get'](_0x1e4af1,{'responseType':'arraybuffer'}),_0x3b9048=Buffer['from'](_0x136934[_0x58c1d4(0x1c2)],_0x58c1d4(0x18a)),_0x234454={'document':_0x3b9048,'caption':_0x58c1d4(0x1ac)+_0x84569b+'\x0a\x0a*🎥\x20Size\x20:*\x20'+_0x482e28[_0x58c1d4(0x1c2)][_0x58c1d4(0x183)][_0x58c1d4(0x1cf)]+_0x58c1d4(0x1a3),'mimetype':_0x58c1d4(0x18f),'fileName':_0x84569b+_0x58c1d4(0x185)};await _0x5689f6[_0x58c1d4(0x1a9)](config['JID'],_0x234454),await _0x5689f6[_0x58c1d4(0x1a9)](_0x5f418d,{'react':{'text':'✔️','key':_0x3462b9[_0x58c1d4(0x19c)]}});}catch(_0x4e30bf){console[_0x58c1d4(0x19b)](_0x58c1d4(0x1b5),_0x4e30bf),await _0x5689f6[_0x58c1d4(0x1a9)](_0x5f418d,_0x58c1d4(0x19f),{'quoted':_0x3462b9});}}),cmd({'pattern':_0x39be39(0x1b7),'react':'🎥','desc':_0x39be39(0x1ce),'filename':__filename},async(_0x2499de,_0x27dca0,_0x5724d4,{from:_0x388f67,q:_0x49aeef,isMe:_0x1829c9,reply:_0x2011ba})=>{const _0x3a312c=_0x39be39;try{if(!_0x49aeef)return await _0x2011ba(_0x3a312c(0x1c7));let _0xbcdd83=await fetchJson(_0x3a312c(0x1b9)+_0x49aeef+_0x3a312c(0x1c4)),_0x2a0a1c=_0x3a312c(0x1bc)+_0xbcdd83[_0x3a312c(0x1c2)][_0x3a312c(0x1c9)]+_0x3a312c(0x1d6)+_0xbcdd83[_0x3a312c(0x1c2)][_0x3a312c(0x1cb)]+_0x3a312c(0x1d2)+_0xbcdd83[_0x3a312c(0x1c2)][_0x3a312c(0x197)]+_0x3a312c(0x1bb)+_0xbcdd83[_0x3a312c(0x1c2)][_0x3a312c(0x1c6)]+_0x3a312c(0x196)+_0xbcdd83[_0x3a312c(0x1c2)][_0x3a312c(0x1b0)]+'*\x0a\x0a*`🗒️Description\x20➨`*\x20\x20*'+_0xbcdd83[_0x3a312c(0x1c2)]['description']+'*\x0a\x0a*🎉\x20Follow\x20our\x20chanal\x20:*\x20*https://whatsapp.com/channel/0029VamYYhw2kNFiA46kfl3X*\x0a';await _0x2499de[_0x3a312c(0x1a9)](config[_0x3a312c(0x1bf)],{'image':{'url':_0xbcdd83[_0x3a312c(0x1c2)][_0x3a312c(0x1ab)]},'caption':_0x2a0a1c}),await _0x2499de['sendMessage'](_0x388f67,{'react':{'text':'✔️','key':_0x5724d4['key']}});}catch(_0x37ded8){console[_0x3a312c(0x19b)]('Error\x20fetching\x20or\x20sending',_0x37ded8),await _0x2499de[_0x3a312c(0x1a9)](_0x388f67,'*Error\x20fetching\x20or\x20sending\x20*',{'quoted':_0x5724d4});}}),cmd({'pattern':'forward','react':'','alias':['f'],'desc':_0x39be39(0x190),'category':_0x39be39(0x1ba),'filename':__filename},async(_0x56432a,_0x3a7c4e,_0x5b62bc,{from:_0x37fac7,l:_0x88e0fa,prefix:_0x43df0f,quoted:_0x1bce7a,body:_0x10d386,isCmd:_0x2d12e5,command:_0x22c2fe,args:_0x3cbbe0,q:_0x36f920,isGroup:_0x3a0ae4,sender:_0x3187ec,senderNumber:_0x61bf64,botNumber2:_0x206c59,botNumber:_0x1b73c9,pushname:_0x37f16a,isIsuru:_0x595e9f,isTharu:_0x204a78,isOwner:_0x563df5,isSupporters:_0x5382a8,groupMetadata:_0x5b4efa,groupName:_0x583e5e,participants:_0xa8db63,groupAdmins:_0x1fd0f8,isBotAdmins:_0x371710,isAdmins:_0xe721dc,reply:_0x53c5f6})=>{const _0x1cf6ee=_0x39be39;if(!_0x36f920||!_0x5b62bc['quoted'])return _0x53c5f6(_0x1cf6ee(0x180));let _0x16e5cd=_0x36f920[_0x1cf6ee(0x18d)](',')[_0x1cf6ee(0x1c5)](_0x1fa4fc=>_0x1fa4fc['trim']());if(_0x16e5cd[_0x1cf6ee(0x1ad)]===0x0)return _0x53c5f6('*Provide\x20at\x20least\x20one\x20Valid\x20Jid.\x20⁉️*');let _0x27524d={'key':_0x3a7c4e[_0x1cf6ee(0x1d3)]?.['fakeObj']?.['key']};if(_0x3a7c4e[_0x1cf6ee(0x1d3)]['documentWithCaptionMessage']?.[_0x1cf6ee(0x1a7)]?.[_0x1cf6ee(0x1cd)]){let _0x4c31e8=_0x3a7c4e[_0x1cf6ee(0x1d3)][_0x1cf6ee(0x18e)][_0x1cf6ee(0x1a7)][_0x1cf6ee(0x1cd)];const _0x4950ca=require('mime-types');let _0x2b01a4=_0x4950ca[_0x1cf6ee(0x186)](_0x4c31e8[_0x1cf6ee(0x188)])||_0x1cf6ee(0x1a2);_0x4c31e8['fileName']=_0x4c31e8[_0x1cf6ee(0x189)]||_0x1cf6ee(0x1ca)+_0x2b01a4;}_0x27524d[_0x1cf6ee(0x1a7)]=_0x3a7c4e[_0x1cf6ee(0x1d3)];let _0x144916=[];for(let _0x24e03b of _0x16e5cd){try{await _0x56432a[_0x1cf6ee(0x17d)](_0x24e03b,_0x27524d,![]),_0x144916[_0x1cf6ee(0x184)](_0x24e03b);}catch(_0x389104){console[_0x1cf6ee(0x198)](e);}}if(_0x144916[_0x1cf6ee(0x1ad)]>0x0)return _0x53c5f6('*Message\x20Forwarded*\x0a\x0a'+_0x144916['join']('\x0a'));else console['log'](e);}),cmd({'pattern':_0x39be39(0x1aa),'desc':_0x39be39(0x190),'alias':['fo'],'category':'owner','use':_0x39be39(0x1af),'filename':__filename},async(_0x36cd61,_0x4287c1,_0x1afeab,{from:_0x54548c,l:_0x2d3b5d,quoted:_0x5d6834,body:_0x454e11,isCmd:_0x309997,command:_0x39fb72,args:_0x1801c2,q:_0x1c4f34,isGroup:_0x3a3b08,sender:_0x3efacd,senderNumber:_0x55107f,botNumber2:_0x1d4680,botNumber:_0x4ce0b2,pushname:_0x50d6bd,isMe:_0x318f55,isOwner:_0x91a562,groupMetadata:_0x2b2fcb,groupName:_0x57a87f,participants:_0x781529,groupAdmins:_0x414d5d,isBotAdmins:_0x38eb8f,isAdmins:_0x41c537,reply:_0x5e004a})=>{const _0x2037e7=_0x39be39;if(!_0x91a562)return _0x5e004a('*Owner\x20Only\x20❌*');if(!_0x1c4f34||!_0x1afeab[_0x2037e7(0x1d3)])return _0x5e004a('*Provide\x20the\x20message\x20and\x20JID(s)\x20❌*');let _0x353336=_0x1c4f34['split'](',')[_0x2037e7(0x1c5)](_0x37ce2f=>_0x37ce2f['trim']());if(_0x353336[_0x2037e7(0x1ad)]===0x0)return _0x5e004a(_0x2037e7(0x193));let _0x578ead={};_0x578ead[_0x2037e7(0x19c)]=_0x4287c1[_0x2037e7(0x1d3)]?.['fakeObj']?.['key'];if(_0x4287c1[_0x2037e7(0x1d3)]?.[_0x2037e7(0x18e)]?.[_0x2037e7(0x1a7)]?.[_0x2037e7(0x1cd)]){let _0x4b6712=_0x4287c1['quoted'][_0x2037e7(0x18e)][_0x2037e7(0x1a7)][_0x2037e7(0x1cd)][_0x2037e7(0x188)];const _0x51f327=require(_0x2037e7(0x182));let _0x5e4017=_0x51f327[_0x2037e7(0x186)](_0x4b6712);_0x4287c1['quoted'][_0x2037e7(0x18e)][_0x2037e7(0x1a7)][_0x2037e7(0x1cd)][_0x2037e7(0x189)]=_0x4287c1[_0x2037e7(0x1d3)][_0x2037e7(0x18e)][_0x2037e7(0x1a7)]['documentMessage']['caption']+'.'+_0x5e4017;}_0x578ead[_0x2037e7(0x1a7)]=_0x4287c1[_0x2037e7(0x1d3)];let _0x70cc60=[];for(let _0x4ecc71 of _0x353336){try{await _0x36cd61[_0x2037e7(0x17d)](_0x4ecc71,_0x578ead,![]),_0x70cc60[_0x2037e7(0x184)](_0x4ecc71);}catch(_0x2c358b){console[_0x2037e7(0x198)](_0x2037e7(0x1bd)+_0x4ecc71+':',_0x2c358b);}}return _0x70cc60['length']>0x0?_0x5e004a(_0x2037e7(0x1ae)+_0x70cc60[_0x2037e7(0x1d8)]('\x0a')):_0x5e004a(_0x2037e7(0x1a6));});
