const _0x2c92c5=_0x3414;(function(_0x1c6978,_0x2150a6){const _0x4bd42a=_0x3414,_0x5a53f8=_0x1c6978();while(!![]){try{const _0x11c10=parseInt(_0x4bd42a(0x1f8))/0x1*(-parseInt(_0x4bd42a(0x20a))/0x2)+parseInt(_0x4bd42a(0x228))/0x3*(-parseInt(_0x4bd42a(0x1fa))/0x4)+parseInt(_0x4bd42a(0x1ed))/0x5*(-parseInt(_0x4bd42a(0x1fb))/0x6)+-parseInt(_0x4bd42a(0x204))/0x7+parseInt(_0x4bd42a(0x22a))/0x8*(parseInt(_0x4bd42a(0x222))/0x9)+parseInt(_0x4bd42a(0x22f))/0xa+-parseInt(_0x4bd42a(0x20d))/0xb*(-parseInt(_0x4bd42a(0x21e))/0xc);if(_0x11c10===_0x2150a6)break;else _0x5a53f8['push'](_0x5a53f8['shift']());}catch(_0x41cacd){_0x5a53f8['push'](_0x5a53f8['shift']());}}}(_0x1ce7,0x5fdac));const hypercubevts=[[0x1,0x1,0x1,0x1],[0x1,0x1,0x1,-0x1],[0x1,0x1,-0x1,0x1],[0x1,0x1,-0x1,-0x1],[0x1,-0x1,0x1,0x1],[0x1,-0x1,0x1,-0x1],[0x1,-0x1,-0x1,0x1],[0x1,-0x1,-0x1,-0x1],[-0x1,0x1,0x1,0x1],[-0x1,0x1,0x1,-0x1],[-0x1,0x1,-0x1,0x1],[-0x1,0x1,-0x1,-0x1],[-0x1,-0x1,0x1,0x1],[-0x1,-0x1,0x1,-0x1],[-0x1,-0x1,-0x1,0x1],[-0x1,-0x1,-0x1,-0x1]],hypercubeedge=[[0x0,0x1],[0x2,0x3],[0x4,0x5],[0x6,0x7],[0x8,0x9],[0xa,0xb],[0xc,0xd],[0xe,0xf],[0x0,0x2],[0x1,0x3],[0x4,0x6],[0x5,0x7],[0x8,0xa],[0x9,0xb],[0xc,0xe],[0xd,0xf],[0x0,0x4],[0x1,0x5],[0x2,0x6],[0x3,0x7],[0x8,0xc],[0x9,0xd],[0xa,0xe],[0xb,0xf],[0x0,0x8],[0x1,0x9],[0x2,0xa],[0x3,0xb],[0x4,0xc],[0x5,0xd],[0x6,0xe],[0x7,0xf]],tube_material=[new THREE[(_0x2c92c5(0x22d))]({'color':0xff7700,'side':THREE[_0x2c92c5(0x1f7)]}),new THREE['MeshLambertMaterial']({'color':0xff40cc,'side':THREE[_0x2c92c5(0x1f7)]}),new THREE[(_0x2c92c5(0x22d))]({'color':0xf4ff1f,'side':THREE['DoubleSide']}),new THREE[(_0x2c92c5(0x22d))]({'color':0x77ff00,'side':THREE['DoubleSide']}),new THREE[(_0x2c92c5(0x22d))]({'color':0x77ff,'side':THREE[_0x2c92c5(0x1f7)]}),new THREE[(_0x2c92c5(0x22d))]({'color':0x7700ff,'side':THREE[_0x2c92c5(0x1f7)]})];let inputtouch=![];const canvas1=document[_0x2c92c5(0x1e1)](_0x2c92c5(0x208));canvas1['style'][_0x2c92c5(0x217)]=_0x2c92c5(0x220),canvas1[_0x2c92c5(0x223)](_0x2c92c5(0x224),_0x49c294=>{const _0x26a1a1=_0x2c92c5;_0x49c294[_0x26a1a1(0x1eb)]();});const label1=document[_0x2c92c5(0x1e1)](_0x2c92c5(0x203)),slider1=document[_0x2c92c5(0x1e1)](_0x2c92c5(0x1e5)),slider2=document[_0x2c92c5(0x1e1)](_0x2c92c5(0x1f5)),slider3=document[_0x2c92c5(0x1e1)](_0x2c92c5(0x201));slider1[_0x2c92c5(0x22e)][_0x2c92c5(0x217)]=_0x2c92c5(0x220),slider2[_0x2c92c5(0x22e)][_0x2c92c5(0x217)]=_0x2c92c5(0x220),slider3[_0x2c92c5(0x22e)][_0x2c92c5(0x217)]=_0x2c92c5(0x220);;slider1[_0x2c92c5(0x223)](_0x2c92c5(0x1e4),_0x311350=>{const _0x32383d=_0x2c92c5;disposeGroup(meshgroup),scene1[_0x32383d(0x21c)](meshgroup),main(),scene1['add'](meshgroup);}),slider2[_0x2c92c5(0x223)]('input',_0x5d3ea8=>{const _0x1619ab=_0x2c92c5;disposeGroup(meshgroup),scene1[_0x1619ab(0x21c)](meshgroup),main(),scene1[_0x1619ab(0x218)](meshgroup);}),slider3[_0x2c92c5(0x223)](_0x2c92c5(0x1e4),_0x3533d1=>{const _0x1ecb71=_0x2c92c5;disposeGroup(meshgroup),scene1[_0x1ecb71(0x21c)](meshgroup),main(),scene1[_0x1ecb71(0x218)](meshgroup);});let angle_switch=0x2,rotate_angle=-Math['PI']/angle_switch/0x1f4*Number(slider1[_0x2c92c5(0x1f0)]),tube_thick=0.15/0x64*Number(slider2[_0x2c92c5(0x1f0)]),tube_length=Number(slider3['value'])/0x64;const scene1=new THREE[(_0x2c92c5(0x1fc))](),renderer1=new THREE[(_0x2c92c5(0x1f2))]({'canvas':canvas1,'antialias':!![]});renderer1[_0x2c92c5(0x233)](window[_0x2c92c5(0x1f6)],window['innerHeight']*0.6),renderer1[_0x2c92c5(0x1ea)](0xeeeeee);const camera1=new THREE[(_0x2c92c5(0x22b))](-canvas1[_0x2c92c5(0x21a)]/0x96,canvas1[_0x2c92c5(0x21a)]/0x96,canvas1[_0x2c92c5(0x215)]/0x96,-canvas1[_0x2c92c5(0x215)]/0x96,0.1,0x64);camera1[_0x2c92c5(0x22c)][_0x2c92c5(0x1f1)](0x0,0x0,0x14),camera1[_0x2c92c5(0x1ff)]=0x2,camera1[_0x2c92c5(0x221)](),window[_0x2c92c5(0x223)](_0x2c92c5(0x1f4),()=>{const _0x296957=_0x2c92c5;renderer1[_0x296957(0x233)](window[_0x296957(0x1f6)],window['innerHeight']*0.6),camera1[_0x296957(0x225)]=window[_0x296957(0x1f6)]/(window[_0x296957(0x210)]*0.6),camera1[_0x296957(0x20e)]=-canvas1['width']/0x96,camera1[_0x296957(0x207)]=canvas1['width']/0x96,camera1[_0x296957(0x202)]=canvas1[_0x296957(0x215)]/0x96,camera1[_0x296957(0x1ef)]=-canvas1[_0x296957(0x215)]/0x96,camera1['updateProjectionMatrix']();});const lighta=new THREE[(_0x2c92c5(0x20b))](0xffffff,0.3);function _0x1ce7(){const _0x10e8d3=['length','none','updateProjectionMatrix','88695OEKFwT','addEventListener','contextmenu','aspect','pointermove','touchmove','6xKqQcg','render','8rGDkxy','OrthographicCamera','position','MeshLambertMaterial','style','5186260fOjVqi','Vector3','deltaY','DirectionalLight','setSize','movementY','material','getElementById','copy','CatmullRomCurve3','input','slider1','pointerup','touchend','max','Group','setClearColor','preventDefault','cos','73480bZpXkr','sqrt','bottom','value','set','WebGLRenderer','clientY','resize','slider2','innerWidth','DoubleSide','13gbsahC','min','1293836wievHl','258FkjhmY','Scene','clientX','isArray','zoom','dispose','slider3','top','label1','4657723PxENra','sin','SphereGeometry','right','canvas1','pointerdown','84172yzsAYW','AmbientLight','TubeGeometry','25910412Yqhloj','left','touches','innerHeight','lerp','rotation','Mesh','movementX','height','normalize','touchAction','add','MeshBasicMaterial','width','clone','remove','geometry','12UgPUFf'];_0x1ce7=function(){return _0x10e8d3;};return _0x1ce7();}scene1['add'](lighta);const light1=new THREE[(_0x2c92c5(0x232))](0xffffff,0.7);light1[_0x2c92c5(0x22c)][_0x2c92c5(0x1f1)](0x1,0x1,0x1)[_0x2c92c5(0x216)](),scene1[_0x2c92c5(0x218)](light1);let dummymesh=new THREE['Mesh']();dummymesh['rotation'][_0x2c92c5(0x1f1)](0.25,0.4,0x0);const path=new THREE[(_0x2c92c5(0x1e3))]([new THREE['Vector3'](0x0,0x0,0x1),new THREE[(_0x2c92c5(0x230))](0x0,0x0,-0x1)]),tubeGeometry=new THREE[(_0x2c92c5(0x20c))](path,0x14,0.2,0x8,!![]),material=new THREE[(_0x2c92c5(0x219))]({'color':0x77ff,'wireframe':!![]}),tube=new THREE[(_0x2c92c5(0x213))](tubeGeometry,material);tube[_0x2c92c5(0x22c)]['set'](0x1,0x0,0x1),tube[_0x2c92c5(0x212)]['set'](0x1,0x4,0x2);let meshgroup;function addtube(_0x28a058,_0x3a14bf,_0x87c69a,_0x189bf4){const _0x4213ca=_0x2c92c5;let _0x5ce100=new THREE[(_0x4213ca(0x1e3))]([_0x28a058,_0x3a14bf]),_0x56ad77=new THREE[(_0x4213ca(0x20c))](_0x5ce100,0x8,_0x87c69a,0x10,![]),_0x395c2d=new THREE[(_0x4213ca(0x213))](_0x56ad77,tube_material[_0x189bf4]);meshgroup[_0x4213ca(0x218)](_0x395c2d);let _0x2d6f5b,_0x1cb2ee,_0x566d53;_0x2d6f5b=new THREE[(_0x4213ca(0x206))](_0x87c69a,0x10,0x8),_0x1cb2ee=new THREE['Mesh'](_0x2d6f5b,tube_material[_0x189bf4]),_0x1cb2ee[_0x4213ca(0x22c)][_0x4213ca(0x1e2)](_0x28a058),_0x566d53=_0x1cb2ee[_0x4213ca(0x21b)](),_0x566d53[_0x4213ca(0x22c)][_0x4213ca(0x1e2)](_0x3a14bf),meshgroup['add'](_0x1cb2ee),meshgroup[_0x4213ca(0x218)](_0x566d53);}function main(){const _0x2047bf=_0x2c92c5;meshgroup=new THREE[(_0x2047bf(0x1e9))]();let _0x2f3da7=new Array(hypercubevts[_0x2047bf(0x21f)]);for(let _0x2fec47=0x0;_0x2fec47<_0x2f3da7['length'];_0x2fec47++)_0x2f3da7[_0x2fec47]=hypercubevts[_0x2fec47]['concat']();let _0x1b244a=Math['PI']/0xc8*Number(slider1[_0x2047bf(0x1f0)]);for(let _0xfc7a8a=0x0;_0xfc7a8a<_0x2f3da7[_0x2047bf(0x21f)];_0xfc7a8a++){let _0x26ca4d=_0x2f3da7[_0xfc7a8a][0x0],_0x3263a2=_0x2f3da7[_0xfc7a8a][0x3];_0x2f3da7[_0xfc7a8a][0x0]=_0x26ca4d*Math[_0x2047bf(0x1ec)](_0x1b244a)-_0x3263a2*Math[_0x2047bf(0x205)](_0x1b244a),_0x2f3da7[_0xfc7a8a][0x3]=_0x26ca4d*Math[_0x2047bf(0x205)](_0x1b244a)+_0x3263a2*Math[_0x2047bf(0x1ec)](_0x1b244a);}let _0x33cdf0=Math['PI']/0xc8*Number(slider2['value']);for(let _0xf0e8d4=0x0;_0xf0e8d4<_0x2f3da7[_0x2047bf(0x21f)];_0xf0e8d4++){let _0x1525d6=_0x2f3da7[_0xf0e8d4][0x1],_0x1141ac=_0x2f3da7[_0xf0e8d4][0x3];_0x2f3da7[_0xf0e8d4][0x1]=_0x1525d6*Math[_0x2047bf(0x1ec)](_0x33cdf0)-_0x1141ac*Math['sin'](_0x33cdf0),_0x2f3da7[_0xf0e8d4][0x3]=_0x1525d6*Math['sin'](_0x33cdf0)+_0x1141ac*Math[_0x2047bf(0x1ec)](_0x33cdf0);}let _0x1f67cc=Math['PI']/0xc8*Number(slider3[_0x2047bf(0x1f0)]);for(let _0x1cca5f=0x0;_0x1cca5f<_0x2f3da7[_0x2047bf(0x21f)];_0x1cca5f++){let _0x159b40=_0x2f3da7[_0x1cca5f][0x2],_0x529e98=_0x2f3da7[_0x1cca5f][0x3];_0x2f3da7[_0x1cca5f][0x2]=_0x159b40*Math[_0x2047bf(0x1ec)](_0x1f67cc)-_0x529e98*Math[_0x2047bf(0x205)](_0x1f67cc),_0x2f3da7[_0x1cca5f][0x3]=_0x159b40*Math[_0x2047bf(0x205)](_0x1f67cc)+_0x529e98*Math['cos'](_0x1f67cc);}let _0x15691d=new Array(hypercubevts[_0x2047bf(0x21f)]);for(let _0x5005d2=0x0;_0x5005d2<hypercubevts[_0x2047bf(0x21f)];_0x5005d2++){let _0x198e79,_0x255b22,_0xc3d1c0,_0x1a4687;_0x198e79=_0x2f3da7[_0x5005d2][0x0],_0x255b22=_0x2f3da7[_0x5005d2][0x1],_0xc3d1c0=_0x2f3da7[_0x5005d2][0x2],_0x1a4687=_0x2f3da7[_0x5005d2][0x3],_0x15691d[_0x5005d2]=[_0x198e79/(2.01-_0x1a4687),_0x255b22/(2.01-_0x1a4687),_0xc3d1c0/(2.01-_0x1a4687)];}for(let _0x23a1e3=0x0;_0x23a1e3<hypercubeedge['length'];_0x23a1e3++){let _0x3e85f7=new THREE[(_0x2047bf(0x230))](_0x15691d[hypercubeedge[_0x23a1e3][0x0]][0x0],_0x15691d[hypercubeedge[_0x23a1e3][0x0]][0x1],_0x15691d[hypercubeedge[_0x23a1e3][0x0]][0x2]),_0x22cefc=new THREE[(_0x2047bf(0x230))](_0x15691d[hypercubeedge[_0x23a1e3][0x1]][0x0],_0x15691d[hypercubeedge[_0x23a1e3][0x1]][0x1],_0x15691d[hypercubeedge[_0x23a1e3][0x1]][0x2]);if(_0x23a1e3<0x4||_0x23a1e3>=0x8&&_0x23a1e3<0xc||_0x23a1e3>=0x10&&_0x23a1e3<0x14)addtube(_0x3e85f7,_0x22cefc,0.105,0x3);else addtube(_0x3e85f7,_0x22cefc,0.1,0x4);}scene1[_0x2047bf(0x218)](meshgroup);}function _0x3414(_0x5c18f7,_0x470f53){const _0x1ce7f1=_0x1ce7();return _0x3414=function(_0x341499,_0x15053b){_0x341499=_0x341499-0x1df;let _0x48e0da=_0x1ce7f1[_0x341499];return _0x48e0da;},_0x3414(_0x5c18f7,_0x470f53);}main();let mouseIsPressed=![];canvas1[_0x2c92c5(0x223)](_0x2c92c5(0x209),()=>{mouseIsPressed=!![];}),canvas1[_0x2c92c5(0x223)](_0x2c92c5(0x1e6),()=>{mouseIsPressed=![];});let mousemovementX=0x0,mousemovementY=0x0;canvas1[_0x2c92c5(0x223)](_0x2c92c5(0x226),_0x22a33c=>{const _0x44c1dc=_0x2c92c5;mousemovementX=_0x22a33c[_0x44c1dc(0x214)],mousemovementY=_0x22a33c[_0x44c1dc(0x1df)];});let angularvelocity=new THREE[(_0x2c92c5(0x230))](0x0,0x0,0x0),mpx1=-0x1,mpy1=-0x1,mpx2=-0x1,mpy2=-0x1,twofinger=![];canvas1[_0x2c92c5(0x223)](_0x2c92c5(0x227),handleTouchMove,![]),canvas1[_0x2c92c5(0x223)](_0x2c92c5(0x1e7),handleTouchEnd,![]);function handleTouchStart(_0x2b295f){const _0x34f73b=_0x2c92c5;_0x2b295f['touchs'][_0x34f73b(0x21f)]==0x2&&(mpx1=_0x2b295f[_0x34f73b(0x20f)][0x0][_0x34f73b(0x1fd)],mpy1=_0x2b295f[_0x34f73b(0x20f)][0x0]['clientY'],mpx2=_0x2b295f[_0x34f73b(0x20f)][0x1][_0x34f73b(0x1fd)],mpy2=_0x2b295f[_0x34f73b(0x20f)][0x1][_0x34f73b(0x1f3)]);}function handleTouchMove(_0x1deca6){const _0x459695=_0x2c92c5;if(_0x1deca6[_0x459695(0x20f)][_0x459695(0x21f)]==0x2){inputtouch=!![];if(mpx1==-0x1||mpy1==-0x1||mpx2==-0x1||mpy2==-0x1)mpx1=_0x1deca6[_0x459695(0x20f)][0x0][_0x459695(0x1fd)],mpy1=_0x1deca6[_0x459695(0x20f)][0x0][_0x459695(0x1f3)],mpx2=_0x1deca6['touches'][0x1][_0x459695(0x1fd)],mpy2=_0x1deca6[_0x459695(0x20f)][0x1]['clientY'];else{let _0x4789c1,_0x3046e9,_0x2491a1,_0x569f39;_0x4789c1=_0x1deca6[_0x459695(0x20f)][0x0][_0x459695(0x1fd)],_0x3046e9=_0x1deca6[_0x459695(0x20f)][0x0]['clientY'],_0x2491a1=_0x1deca6['touches'][0x1][_0x459695(0x1fd)],_0x569f39=_0x1deca6[_0x459695(0x20f)][0x1][_0x459695(0x1f3)];let _0x48cee4,_0x76abe2;_0x48cee4=Math[_0x459695(0x1ee)]((mpx1-mpx2)**0x2+(mpy1-mpy2)**0x2),_0x76abe2=Math['sqrt']((_0x4789c1-_0x2491a1)**0x2+(_0x3046e9-_0x569f39)**0x2);let _0x34c90b=camera1[_0x459695(0x1ff)];_0x34c90b=Math['min'](Math[_0x459695(0x1e8)](_0x34c90b+(_0x76abe2-_0x48cee4)*0.004,0.3),0x3),camera1[_0x459695(0x1ff)]=_0x34c90b,camera1[_0x459695(0x221)](),mpx1=_0x4789c1,mpy1=_0x3046e9,mpx2=_0x2491a1,mpy2=_0x569f39;}}else _0x1deca6[_0x459695(0x20f)]['length']==0x1&&(mpx1==-0x1||mpy1==-0x1?(mpx1=_0x1deca6[_0x459695(0x20f)][0x0]['clientX'],mpy1=_0x1deca6[_0x459695(0x20f)][0x0][_0x459695(0x1f3)]):(mousemovementX=_0x1deca6[_0x459695(0x20f)][0x0]['clientX']-mpx1,mousemovementY=_0x1deca6['touches'][0x0][_0x459695(0x1f3)]-mpy1,mpx1=_0x1deca6[_0x459695(0x20f)][0x0]['clientX'],mpy1=_0x1deca6[_0x459695(0x20f)][0x0][_0x459695(0x1f3)]));}function handleTouchEnd(_0x3f44a5){mpx1=-0x1,mpy1=-0x1,mpx2=-0x1,mpy2=-0x1,inputtouch=![];}function animate(){const _0x281503=_0x2c92c5;requestAnimationFrame(animate);if(mouseIsPressed)angularvelocity[_0x281503(0x211)](new THREE[(_0x281503(0x230))](mousemovementY,mousemovementX,0x0),0.2);if(inputtouch)angularvelocity[_0x281503(0x1f1)](0x0,0x0,0x0);let _0xc6ca94=angularvelocity[_0x281503(0x21b)]()[_0x281503(0x216)](),_0x23c7da=angularvelocity[_0x281503(0x21f)]()*0.005;mousemovementX=0x0,mousemovementY=0x0,dummymesh['rotateOnWorldAxis'](_0xc6ca94,_0x23c7da),meshgroup[_0x281503(0x212)]['copy'](dummymesh[_0x281503(0x212)]),renderer1[_0x281503(0x229)](scene1,camera1);}animate();function disposeGroup(_0x574d14){_0x574d14['traverse'](_0x1040a0=>{const _0x3a7952=_0x3414;_0x1040a0 instanceof THREE[_0x3a7952(0x213)]&&(_0x1040a0[_0x3a7952(0x21d)]&&_0x1040a0[_0x3a7952(0x21d)][_0x3a7952(0x200)](),_0x1040a0[_0x3a7952(0x1e0)]&&(Array[_0x3a7952(0x1fe)](_0x1040a0[_0x3a7952(0x1e0)])?_0x1040a0[_0x3a7952(0x1e0)]['forEach'](_0x1263a6=>_0x1263a6[_0x3a7952(0x200)]()):_0x1040a0['material'][_0x3a7952(0x200)]()));});}document['addEventListener']('wheel',function(_0x539612){const _0x43ef62=_0x2c92c5;_0x539612[_0x43ef62(0x231)]>0x0?camera1[_0x43ef62(0x1ff)]=Math[_0x43ef62(0x1f9)](Math[_0x43ef62(0x1e8)](camera1['zoom']-0.1,0.3),0x3):camera1[_0x43ef62(0x1ff)]=Math['min'](Math[_0x43ef62(0x1e8)](camera1[_0x43ef62(0x1ff)]+0.1,0.3),0x3),camera1[_0x43ef62(0x221)]();});