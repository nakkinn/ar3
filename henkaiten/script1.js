const _0x106938=_0x3a71;(function(_0x9a3558,_0x2ffa99){const _0x2ef1ad=_0x3a71,_0x56d9de=_0x9a3558();while(!![]){try{const _0x48f125=-parseInt(_0x2ef1ad(0x118))/0x1+parseInt(_0x2ef1ad(0x145))/0x2*(parseInt(_0x2ef1ad(0x10d))/0x3)+-parseInt(_0x2ef1ad(0x143))/0x4*(parseInt(_0x2ef1ad(0x159))/0x5)+-parseInt(_0x2ef1ad(0x12d))/0x6+parseInt(_0x2ef1ad(0x148))/0x7*(parseInt(_0x2ef1ad(0x155))/0x8)+parseInt(_0x2ef1ad(0x133))/0x9*(-parseInt(_0x2ef1ad(0x114))/0xa)+parseInt(_0x2ef1ad(0x14e))/0xb;if(_0x48f125===_0x2ffa99)break;else _0x56d9de['push'](_0x56d9de['shift']());}catch(_0x5a52f3){_0x56d9de['push'](_0x56d9de['shift']());}}}(_0x3364,0xa77fb));const tetra_vts=[[0x2,0x2,0x2],[-0x2,-0x2,0x2],[0x2,-0x2,-0x2],[-0x2,0x2,-0x2]],tetra_edge=[[0x0,0x1],[0x0,0x2],[0x0,0x3],[0x1,0x2],[0x1,0x3],[0x2,0x3]],cube_vts=[[0x2,0x2,0x2],[0x2,-0x2,0x2],[-0x2,-0x2,0x2],[-0x2,0x2,0x2],[0x2,0x2,-0x2],[0x2,-0x2,-0x2],[-0x2,-0x2,-0x2],[-0x2,0x2,-0x2]],cube_edge=[[0x0,0x1],[0x0,0x3],[0x0,0x4],[0x1,0x2],[0x1,0x5],[0x2,0x3],[0x2,0x6],[0x3,0x7],[0x4,0x5],[0x4,0x7],[0x5,0x6],[0x6,0x7]],ico_vts=[[3.23607,0x2,0x0],[3.23607,-0x2,0x0],[-3.23607,-0x2,0x0],[-3.23607,0x2,0x0],[0x0,3.23607,0x2],[0x0,3.23607,-0x2],[0x0,-3.23607,-0x2],[0x0,-3.23607,0x2],[0x2,0x0,3.23607],[-0x2,0x0,3.23607],[-0x2,0x0,-3.23607],[0x2,0x0,-3.23607]],ico_edge=[[0x0,0x1],[0x0,0x4],[0x0,0x5],[0x0,0x8],[0x0,0xb],[0x1,0x6],[0x1,0x7],[0x1,0x8],[0x1,0xb],[0x2,0x3],[0x2,0x6],[0x2,0x7],[0x2,0x9],[0x2,0xa],[0x3,0x4],[0x3,0x5],[0x3,0x9],[0x3,0xa],[0x4,0x5],[0x4,0x8],[0x4,0x9],[0x5,0xa],[0x5,0xb],[0x6,0x7],[0x6,0xa],[0x6,0xb],[0x7,0x8],[0x7,0x9],[0x8,0x9],[0xa,0xb]];let vts=[],edge=[];vts=new Array(ico_vts[_0x106938(0x137)]);for(let i=0x0;i<vts[_0x106938(0x137)];i++)vts[i]=ico_vts[i][_0x106938(0x14f)]();edge=new Array(ico_edge[_0x106938(0x137)]);for(let i=0x0;i<edge[_0x106938(0x137)];i++)edge[i]=ico_edge[i][_0x106938(0x14f)]();let inputtouch=![];const canvas1=document[_0x106938(0x130)]('canvas1');canvas1[_0x106938(0x11d)][_0x106938(0x149)]=_0x106938(0x104),canvas1[_0x106938(0x102)](_0x106938(0x13d),_0x1ed6c8=>{const _0x73e2f9=_0x106938;_0x1ed6c8[_0x73e2f9(0x152)]();});const label1=document[_0x106938(0x130)](_0x106938(0x12c)),slider1=document[_0x106938(0x130)](_0x106938(0x14d)),slider2=document[_0x106938(0x130)]('slider2'),slider3=document[_0x106938(0x130)]('slider3');slider1[_0x106938(0x11d)]['touchAction']=_0x106938(0x104),slider2[_0x106938(0x11d)][_0x106938(0x149)]=_0x106938(0x104),slider3['style'][_0x106938(0x149)]=_0x106938(0x104),console[_0x106938(0x113)](slider1['style']),slider1[_0x106938(0x102)]('input',_0x4a5864=>{const _0x8d0efa=_0x106938;rotate_angle=-Math['PI']/0x2/0x1f4*Number(slider1[_0x8d0efa(0x134)]),disposeGroup(meshgroup),scene1[_0x8d0efa(0xfd)](meshgroup),main(),select3[_0x8d0efa(0x134)]='option7';let _0x3706a5=-rotate_angle/Math['PI']*0xb4;label1['textContent']=Math['round'](_0x3706a5)+'度';}),slider2[_0x106938(0x102)]('input',_0x5b881e=>{const _0x29aa3c=_0x106938;tube_thick=0.15/0x64*Number(_0x5b881e[_0x29aa3c(0x13f)][_0x29aa3c(0x134)]),disposeGroup(meshgroup),scene1['remove'](meshgroup),main(),select3[_0x29aa3c(0x134)]=_0x29aa3c(0x13b);}),slider3[_0x106938(0x102)](_0x106938(0x150),_0x1c67d0=>{const _0x3f824a=_0x106938;tube_length=Number(_0x1c67d0[_0x3f824a(0x13f)]['value'])/0x64,disposeGroup(meshgroup),scene1[_0x3f824a(0xfd)](meshgroup),main(),select3['value']=_0x3f824a(0x13b);}),slider1[_0x106938(0x102)](_0x106938(0x124),()=>{inputtouch=!![];}),slider2[_0x106938(0x102)](_0x106938(0x124),()=>{inputtouch=!![];}),slider3[_0x106938(0x102)]('pointerdown',()=>{inputtouch=!![];}),slider1['addEventListener'](_0x106938(0x13e),()=>{inputtouch=![];}),slider2[_0x106938(0x102)](_0x106938(0x13e),()=>{inputtouch=![];}),slider3[_0x106938(0x102)]('pointerup',()=>{inputtouch=![];});const check1=document[_0x106938(0x130)]('check1');check1[_0x106938(0x102)](_0x106938(0x106),_0x1b2a18=>{const _0x130b46=_0x106938;_0x1b2a18[_0x130b46(0x13f)][_0x130b46(0x156)]?slider1[_0x130b46(0x12e)]=0x5dc:slider1['max']=0x1f4;rotate_angle=-Math['PI']/0x2/0x1f4*Number(slider1[_0x130b46(0x134)]),disposeGroup(meshgroup),scene1['remove'](meshgroup),main();let _0x5c7140=-rotate_angle/Math['PI']*0xb4;label1[_0x130b46(0x116)]=Math['round'](_0x5c7140)+'度';});const select1=document['getElementById'](_0x106938(0x103));select1[_0x106938(0x134)]=_0x106938(0x115),select1[_0x106938(0x102)](_0x106938(0x106),_0x5ebf26=>{const _0x2a5838=_0x106938;if(_0x5ebf26['target'][_0x2a5838(0x134)]==_0x2a5838(0x14c)){vts=new Array(cube_vts[_0x2a5838(0x137)]);for(let _0x318d20=0x0;_0x318d20<vts['length'];_0x318d20++)vts[_0x318d20]=cube_vts[_0x318d20]['concat']();edge=new Array(cube_edge['length']);for(let _0x2426c7=0x0;_0x2426c7<edge[_0x2a5838(0x137)];_0x2426c7++)edge[_0x2426c7]=cube_edge[_0x2426c7]['concat']();disposeGroup(meshgroup),scene1[_0x2a5838(0xfd)](meshgroup),main(),camera1[_0x2a5838(0x125)]*=1.25,camera1[_0x2a5838(0x146)](),select2[_0x2a5838(0x11d)][_0x2a5838(0x153)]=_0x2a5838(0x13c),select3[_0x2a5838(0x11d)][_0x2a5838(0x153)]=_0x2a5838(0x13c);}else{vts=new Array(ico_vts[_0x2a5838(0x137)]);for(let _0x1fea9b=0x0;_0x1fea9b<vts['length'];_0x1fea9b++)vts[_0x1fea9b]=ico_vts[_0x1fea9b][_0x2a5838(0x14f)]();edge=new Array(ico_edge[_0x2a5838(0x137)]);for(let _0x46d347=0x0;_0x46d347<edge['length'];_0x46d347++)edge[_0x46d347]=ico_edge[_0x46d347][_0x2a5838(0x14f)]();disposeGroup(meshgroup),scene1[_0x2a5838(0xfd)](meshgroup),main(),camera1[_0x2a5838(0x125)]*=0.8,camera1[_0x2a5838(0x146)](),select2['style'][_0x2a5838(0x153)]=_0x2a5838(0x10c),select3[_0x2a5838(0x11d)][_0x2a5838(0x153)]='visible';}});const select2=document[_0x106938(0x130)](_0x106938(0x112));select2[_0x106938(0x134)]=_0x106938(0x115),select2[_0x106938(0x102)](_0x106938(0x106),()=>{const _0x309ce7=_0x106938;disposeGroup(meshgroup),scene1[_0x309ce7(0xfd)](meshgroup),main();});const select3=document[_0x106938(0x130)](_0x106938(0x13a));select3[_0x106938(0x102)]('input',()=>{const _0x289142=_0x106938;select3[_0x289142(0x134)]==_0x289142(0x14c)&&(slider1['max']=0x1f4,slider1[_0x289142(0x134)]=0x0,slider2[_0x289142(0x134)]=0x0,slider3[_0x289142(0x134)]=0x64,check1[_0x289142(0x156)]=![],update1()),select3['value']==_0x289142(0x115)&&(slider1[_0x289142(0x12e)]=0x5dc,slider1[_0x289142(0x134)]=0x337,slider2['value']=0x98,slider3[_0x289142(0x134)]=0x9a,select2[_0x289142(0x134)]=_0x289142(0x129),check1[_0x289142(0x156)]=!![],update1()),select3['value']=='option3'&&(slider1[_0x289142(0x12e)]=0x1f4,slider1[_0x289142(0x134)]=0x144,slider2[_0x289142(0x134)]=0x98,slider3[_0x289142(0x134)]=0x75,select2[_0x289142(0x134)]=_0x289142(0x129),check1[_0x289142(0x156)]=![],update1()),select3[_0x289142(0x134)]==_0x289142(0x128)&&(slider1[_0x289142(0x12e)]=0x1f4,slider1[_0x289142(0x134)]=0x144,slider2['value']=0xb4,slider3[_0x289142(0x134)]=0x1f1,select2[_0x289142(0x134)]=_0x289142(0x129),check1['checked']=![],update1()),select3[_0x289142(0x134)]==_0x289142(0x154)&&(slider1['max']=0x1f4,slider1[_0x289142(0x134)]=0x180,slider2[_0x289142(0x134)]=0x64,slider3['value']=0x64,check1[_0x289142(0x156)]=![],update1()),select3['value']=='option6'&&(slider1['max']=0x1f4,slider1['value']=0x1f4,slider2[_0x289142(0x134)]=0x64,slider3[_0x289142(0x134)]=0x3d,check1[_0x289142(0x156)]=![],update1()),select3['value']==_0x289142(0x127)&&(slider1[_0x289142(0x12e)]=0x1f4,slider1['value']=0xf9,slider2[_0x289142(0x134)]=0x7a,slider3[_0x289142(0x134)]=0xe1,select2['value']='option2',check1[_0x289142(0x156)]=![],update1());});function update1(){const _0x43c7f5=_0x106938;rotate_angle=-Math['PI']/0x2/0x1f4*Number(slider1[_0x43c7f5(0x134)]),tube_thick=0.15/0x64*Number(slider2[_0x43c7f5(0x134)]),tube_length=Number(slider3[_0x43c7f5(0x134)])/0x64,disposeGroup(meshgroup),scene1[_0x43c7f5(0xfd)](meshgroup),main();let _0x10817=-rotate_angle/Math['PI']*0xb4;label1[_0x43c7f5(0x116)]=Math[_0x43c7f5(0x139)](_0x10817)+'度';}let angle_switch=0x2,rotate_angle=-Math['PI']/0x2/0xc8*Number(slider1[_0x106938(0x134)]),tube_thick=0.15/0x64*Number(slider2[_0x106938(0x134)]),tube_length=Number(slider3[_0x106938(0x134)])/0x64;const scene1=new THREE[(_0x106938(0x11c))](),renderer1=new THREE['WebGLRenderer']({'canvas':canvas1,'antialias':!![]});renderer1[_0x106938(0x151)](window[_0x106938(0x100)],window[_0x106938(0x10e)]*0.6),renderer1[_0x106938(0x110)](0xeeeeee);const camera1=new THREE['OrthographicCamera'](-canvas1[_0x106938(0x119)]/0x96,canvas1[_0x106938(0x119)]/0x96,canvas1[_0x106938(0x117)]/0x96,-canvas1[_0x106938(0x117)]/0x96,0.1,0x64);camera1['position']['set'](0x0,0x0,0x14),camera1[_0x106938(0x125)]=0x1,camera1[_0x106938(0x146)](),window[_0x106938(0x102)](_0x106938(0x121),()=>{const _0x249a11=_0x106938;renderer1[_0x249a11(0x151)](window['innerWidth'],window[_0x249a11(0x10e)]*0.6),camera1[_0x249a11(0x14a)]=window['innerWidth']/(window['innerHeight']*0.6),camera1['left']=-canvas1[_0x249a11(0x119)]/0x96,camera1['right']=canvas1[_0x249a11(0x119)]/0x96,camera1[_0x249a11(0x15b)]=canvas1[_0x249a11(0x117)]/0x96,camera1[_0x249a11(0x12b)]=-canvas1[_0x249a11(0x117)]/0x96,camera1[_0x249a11(0x146)]();});const lighta=new THREE[(_0x106938(0x126))](0xffffff,0.6);scene1[_0x106938(0x120)](lighta);const light1=new THREE[(_0x106938(0x138))](0xffffff,0.4);light1['position'][_0x106938(0x15a)](0x1,0x1,0x1),scene1[_0x106938(0x120)](light1);const light2=new THREE['DirectionalLight'](0xffffff,0.3);light2[_0x106938(0x101)][_0x106938(0x15a)](-0x1,-0x1,0x1),scene1[_0x106938(0x120)](light2);let dummymesh=new THREE[(_0x106938(0x12f))]();dummymesh['rotation'][_0x106938(0x15a)](0.25,0.4,0x0);const path=new THREE[(_0x106938(0x158))]([new THREE['Vector3'](0x0,0x0,0x1),new THREE[(_0x106938(0x122))](0x0,0x0,-0x1)]),tubeGeometry=new THREE[(_0x106938(0x105))](path,0x14,0.2,0x8,!![]),material=new THREE[(_0x106938(0x14b))]({'color':0x77ff,'wireframe':!![]}),tube=new THREE['Mesh'](tubeGeometry,material);tube[_0x106938(0x101)][_0x106938(0x15a)](0x1,0x0,0x1),tube[_0x106938(0x10a)]['set'](0x1,0x4,0x2);let tube_material=[new THREE['MeshLambertMaterial']({'color':0xff7700,'side':THREE[_0x106938(0x142)]}),new THREE[(_0x106938(0x11b))]({'color':0xff40cc,'side':THREE[_0x106938(0x142)]}),new THREE[(_0x106938(0x11b))]({'color':0xf4ff1f,'side':THREE[_0x106938(0x142)]}),new THREE[(_0x106938(0x11b))]({'color':0x77ff00,'side':THREE[_0x106938(0x142)]}),new THREE[(_0x106938(0x11b))]({'color':0x77ff,'side':THREE[_0x106938(0x142)]}),new THREE[(_0x106938(0x11b))]({'color':0x7700ff,'side':THREE[_0x106938(0x142)]})],meshgroup;function addtube(_0x4459a7,_0x432727,_0x23768f,_0x521e1e){const _0x40d81c=_0x106938;let _0x39cc20=new THREE[(_0x40d81c(0x158))]([_0x4459a7,_0x432727]),_0x2418b9=new THREE[(_0x40d81c(0x105))](_0x39cc20,0x8,_0x23768f,0x10,![]),_0xf61b74=new THREE[(_0x40d81c(0x12f))](_0x2418b9,tube_material[_0x521e1e]);meshgroup[_0x40d81c(0x120)](_0xf61b74);let _0x46281b,_0x52f9cb,_0x5109ab;_0x46281b=new THREE['SphereGeometry'](_0x23768f,0x10,0x8),_0x52f9cb=new THREE[(_0x40d81c(0x12f))](_0x46281b,tube_material[_0x521e1e]),_0x52f9cb['position']['copy'](_0x4459a7),_0x5109ab=_0x52f9cb[_0x40d81c(0x141)](),_0x5109ab['position'][_0x40d81c(0xfe)](_0x432727),meshgroup[_0x40d81c(0x120)](_0x52f9cb),meshgroup[_0x40d81c(0x120)](_0x5109ab);}main();function main(){const _0x3161e1=_0x106938;meshgroup=new THREE[(_0x3161e1(0x144))]();for(let _0x528f48=0x0;_0x528f48<edge[_0x3161e1(0x137)];_0x528f48++){let _0x2ee1b1,_0x2aa61f,_0x3cac9e,_0x471ef1,_0x5e495a,_0x10d4a7;_0x2ee1b1=vts[edge[_0x528f48][0x0]][0x0],_0x2aa61f=vts[edge[_0x528f48][0x0]][0x1],_0x3cac9e=vts[edge[_0x528f48][0x0]][0x2],_0x471ef1=vts[edge[_0x528f48][0x1]][0x0],_0x5e495a=vts[edge[_0x528f48][0x1]][0x1],_0x10d4a7=vts[edge[_0x528f48][0x1]][0x2];let _0x563f37=new THREE['Vector3'](_0x2ee1b1,_0x2aa61f,_0x3cac9e),_0x205d66=new THREE[(_0x3161e1(0x122))](_0x471ef1,_0x5e495a,_0x10d4a7),_0x52c8a2=new THREE['Vector3']((_0x2ee1b1+_0x471ef1)/0x2,(_0x2aa61f+_0x5e495a)/0x2,(_0x3cac9e+_0x10d4a7)/0x2),_0x597036,_0x17fe32,_0x381702,_0x18cd7d;_0x597036=_0x563f37[_0x3161e1(0x141)]()['sub'](_0x52c8a2),_0x597036[_0x3161e1(0x10f)](_0x52c8a2[_0x3161e1(0x141)]()[_0x3161e1(0x140)](),rotate_angle),_0x597036[_0x3161e1(0x120)](_0x52c8a2),_0x17fe32=_0x205d66[_0x3161e1(0x141)]()[_0x3161e1(0x131)](_0x52c8a2),_0x17fe32[_0x3161e1(0x10f)](_0x52c8a2[_0x3161e1(0x141)]()[_0x3161e1(0x140)](),rotate_angle),_0x17fe32[_0x3161e1(0x120)](_0x52c8a2),_0x381702=new THREE[(_0x3161e1(0x122))]((-tube_length+0x1)*_0x52c8a2['x']+tube_length*_0x597036['x'],(-tube_length+0x1)*_0x52c8a2['y']+tube_length*_0x597036['y'],(-tube_length+0x1)*_0x52c8a2['z']+tube_length*_0x597036['z']),_0x18cd7d=new THREE[(_0x3161e1(0x122))]((-tube_length+0x1)*_0x52c8a2['x']+tube_length*_0x17fe32['x'],(-tube_length+0x1)*_0x52c8a2['y']+tube_length*_0x17fe32['y'],(-tube_length+0x1)*_0x52c8a2['z']+tube_length*_0x17fe32['z']);let _0x651de5=0x0;if(select1[_0x3161e1(0x134)]==_0x3161e1(0x14c)||select2[_0x3161e1(0x134)]==_0x3161e1(0x14c))_0x651de5=0x4;else{if(select2[_0x3161e1(0x134)]=='option2'){_0x651de5=0x0;if(_0x528f48==0x0||_0x528f48==0x9||_0x528f48==0x12||_0x528f48==0x17||_0x528f48==0x1c||_0x528f48==0x1d)_0x651de5=0x1;if(_0x528f48==0x1||_0x528f48==0xa||_0x528f48==0x15||_0x528f48==0x1a||_0x528f48==0x8||_0x528f48==0x10)_0x651de5=0x2;if(_0x528f48==0x2||_0x528f48==0xb||_0x528f48==0x7||_0x528f48==0x11||_0x528f48==0x14||_0x528f48==0x19)_0x651de5=0x3;if(_0x528f48==0x3||_0x528f48==0xd||_0x528f48==0x16||_0x528f48==0x1b||_0x528f48==0x5||_0x528f48==0xe)_0x651de5=0x4;}else{_0x651de5=0x5;if(_0x528f48==0x0||_0x528f48==0x16||_0x528f48==0x11||_0x528f48==0xc||_0x528f48==0x1a)_0x651de5=0x0;if(_0x528f48==0x1||_0x528f48==0xf||_0x528f48==0xd||_0x528f48==0x17||_0x528f48==0x7)_0x651de5=0x1;if(_0x528f48==0x2||_0x528f48==0x1d||_0x528f48==0xa||_0x528f48==0x1b||_0x528f48==0x13)_0x651de5=0x2;if(_0x528f48==0x3||_0x528f48==0x8||_0x528f48==0x18||_0x528f48==0x9||_0x528f48==0x14)_0x651de5=0x3;if(_0x528f48==0x4||_0x528f48==0x5||_0x528f48==0xb||_0x528f48==0x10||_0x528f48==0x12)_0x651de5=0x4;}}addtube(_0x381702,_0x18cd7d,tube_thick,_0x651de5);}scene1[_0x3161e1(0x120)](meshgroup);}let mouseIsPressed=![];canvas1[_0x106938(0x102)]('pointerdown',()=>{mouseIsPressed=!![];}),canvas1[_0x106938(0x102)](_0x106938(0x13e),()=>{mouseIsPressed=![];});let mousemovementX=0x0,mousemovementY=0x0;canvas1[_0x106938(0x102)](_0x106938(0x11a),_0xd931c1=>{const _0x444729=_0x106938;mousemovementX=_0xd931c1[_0x444729(0x11e)],mousemovementY=_0xd931c1[_0x444729(0x108)];});let angularvelocity=new THREE[(_0x106938(0x122))](0x0,0x0,0x0),mpx1=-0x1,mpy1=-0x1,mpx2=-0x1,mpy2=-0x1,twofinger=![];canvas1['addEventListener']('touchmove',handleTouchMove,![]),canvas1[_0x106938(0x102)](_0x106938(0x10b),handleTouchEnd,![]);function _0x3364(){const _0x34eb1f=['setSize','preventDefault','visibility','option5','120JcSnir','checked','deltaY','CatmullRomCurve3','1156130rolZKq','set','top','remove','copy','isArray','innerWidth','position','addEventListener','select1','none','TubeGeometry','change','min','movementY','dispose','rotation','touchend','visible','333OkPyhR','innerHeight','applyAxisAngle','setClearColor','geometry','select2','log','26090ruUjLv','option2','textContent','height','1096531WbRabk','width','pointermove','MeshLambertMaterial','Scene','style','movementX','clientY','add','resize','Vector3','touches','pointerdown','zoom','AmbientLight','option8','option4','option3','clientX','bottom','label1','3187242nULLyV','max','Mesh','getElementById','sub','touchs','4338EHQvCS','value','sqrt','lerp','length','DirectionalLight','round','select3','option7','hidden','contextmenu','pointerup','target','normalize','clone','DoubleSide','8rDvZYi','Group','22012JCsqyi','updateProjectionMatrix','rotateOnWorldAxis','371665Hbbaxy','touchAction','aspect','MeshBasicMaterial','option1','slider1','22172832vFIxpG','concat','input'];_0x3364=function(){return _0x34eb1f;};return _0x3364();}function handleTouchStart(_0x18a3cf){const _0x1791cb=_0x106938;_0x18a3cf[_0x1791cb(0x132)][_0x1791cb(0x137)]==0x2&&(mpx1=_0x18a3cf['touches'][0x0][_0x1791cb(0x12a)],mpy1=_0x18a3cf[_0x1791cb(0x123)][0x0]['clientY'],mpx2=_0x18a3cf['touches'][0x1][_0x1791cb(0x12a)],mpy2=_0x18a3cf[_0x1791cb(0x123)][0x1]['clientY']);}function _0x3a71(_0x50c761,_0x1ae4bd){const _0x336469=_0x3364();return _0x3a71=function(_0x3a71a3,_0x48f480){_0x3a71a3=_0x3a71a3-0xfd;let _0xf37e76=_0x336469[_0x3a71a3];return _0xf37e76;},_0x3a71(_0x50c761,_0x1ae4bd);}function handleTouchMove(_0x289fa9){const _0x5f0af8=_0x106938;if(_0x289fa9[_0x5f0af8(0x123)][_0x5f0af8(0x137)]==0x2){inputtouch=!![];if(mpx1==-0x1||mpy1==-0x1||mpx2==-0x1||mpy2==-0x1)mpx1=_0x289fa9[_0x5f0af8(0x123)][0x0][_0x5f0af8(0x12a)],mpy1=_0x289fa9[_0x5f0af8(0x123)][0x0][_0x5f0af8(0x11f)],mpx2=_0x289fa9['touches'][0x1][_0x5f0af8(0x12a)],mpy2=_0x289fa9[_0x5f0af8(0x123)][0x1][_0x5f0af8(0x11f)];else{let _0x52fe6e,_0xa92bd3,_0x3cc092,_0x207e4c;_0x52fe6e=_0x289fa9['touches'][0x0][_0x5f0af8(0x12a)],_0xa92bd3=_0x289fa9[_0x5f0af8(0x123)][0x0][_0x5f0af8(0x11f)],_0x3cc092=_0x289fa9[_0x5f0af8(0x123)][0x1][_0x5f0af8(0x12a)],_0x207e4c=_0x289fa9[_0x5f0af8(0x123)][0x1][_0x5f0af8(0x11f)];let _0xdebc31,_0xc6b9a0;_0xdebc31=Math[_0x5f0af8(0x135)]((mpx1-mpx2)**0x2+(mpy1-mpy2)**0x2),_0xc6b9a0=Math[_0x5f0af8(0x135)]((_0x52fe6e-_0x3cc092)**0x2+(_0xa92bd3-_0x207e4c)**0x2);let _0x43acef=camera1['zoom'];_0x43acef=Math[_0x5f0af8(0x107)](Math[_0x5f0af8(0x12e)](_0x43acef+(_0xc6b9a0-_0xdebc31)*0.004,0.3),0x3),camera1[_0x5f0af8(0x125)]=_0x43acef,camera1[_0x5f0af8(0x146)](),mpx1=_0x52fe6e,mpy1=_0xa92bd3,mpx2=_0x3cc092,mpy2=_0x207e4c;}}else _0x289fa9[_0x5f0af8(0x123)]['length']==0x1&&(mpx1==-0x1||mpy1==-0x1?(mpx1=_0x289fa9[_0x5f0af8(0x123)][0x0]['clientX'],mpy1=_0x289fa9[_0x5f0af8(0x123)][0x0][_0x5f0af8(0x11f)]):(mousemovementX=_0x289fa9['touches'][0x0][_0x5f0af8(0x12a)]-mpx1,mousemovementY=_0x289fa9[_0x5f0af8(0x123)][0x0]['clientY']-mpy1,mpx1=_0x289fa9[_0x5f0af8(0x123)][0x0]['clientX'],mpy1=_0x289fa9[_0x5f0af8(0x123)][0x0][_0x5f0af8(0x11f)]));}function handleTouchEnd(_0x49274c){mpx1=-0x1,mpy1=-0x1,mpx2=-0x1,mpy2=-0x1,inputtouch=![];}function animate(){const _0x35dbfc=_0x106938;requestAnimationFrame(animate);if(mouseIsPressed)angularvelocity[_0x35dbfc(0x136)](new THREE[(_0x35dbfc(0x122))](mousemovementY,mousemovementX,0x0),0.2);if(inputtouch)angularvelocity[_0x35dbfc(0x15a)](0x0,0x0,0x0);let _0x19f723=angularvelocity[_0x35dbfc(0x141)]()['normalize'](),_0x16c2bd=angularvelocity[_0x35dbfc(0x137)]()*0.005;mousemovementX=0x0,mousemovementY=0x0,dummymesh[_0x35dbfc(0x147)](_0x19f723,_0x16c2bd),meshgroup[_0x35dbfc(0x10a)]['copy'](dummymesh[_0x35dbfc(0x10a)]),renderer1['render'](scene1,camera1);}animate();function disposeGroup(_0x46afab){_0x46afab['traverse'](_0x5ba1a0=>{const _0xc5837c=_0x3a71;_0x5ba1a0 instanceof THREE[_0xc5837c(0x12f)]&&(_0x5ba1a0[_0xc5837c(0x111)]&&_0x5ba1a0[_0xc5837c(0x111)][_0xc5837c(0x109)](),_0x5ba1a0['material']&&(Array[_0xc5837c(0xff)](_0x5ba1a0['material'])?_0x5ba1a0['material']['forEach'](_0x43c620=>_0x43c620[_0xc5837c(0x109)]()):_0x5ba1a0['material'][_0xc5837c(0x109)]()));});}document['addEventListener']('wheel',function(_0x2536d2){const _0xd03dda=_0x106938;_0x2536d2[_0xd03dda(0x157)]>0x0?camera1[_0xd03dda(0x125)]=Math[_0xd03dda(0x107)](Math['max'](camera1[_0xd03dda(0x125)]-0.1,0.3),0x3):camera1[_0xd03dda(0x125)]=Math[_0xd03dda(0x107)](Math[_0xd03dda(0x12e)](camera1['zoom']+0.1,0.3),0x3),camera1[_0xd03dda(0x146)]();});