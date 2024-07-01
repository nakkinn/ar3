const tetra_vts = [[2, 2, 2], [-2, -2, 2], [2, -2, -2], [-2, 2, -2]];
const tetra_edge = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];

const cube_vts = [[2, 2, 2], [2, -2, 2], [-2, -2, 2], [-2, 2, 2], [2, 2, -2], [2, -2, -2], [-2, -2, -2], [-2, 2, -2]];
const cube_edge = [[0,1],[0,3],[0,4],[1,2],[1,5],[2,3],[2,6],[3,7],[4,5],[4,7],[5,6],[6,7]];

const ico_vts = [[3.23607, 2., 0.], [3.23607, -2., 0.], [-3.23607, -2., 0.], [-3.23607, 2., 0.], [0., 3.23607, 2.], [0., 3.23607, -2.], [0., -3.23607, -2.], [0., -3.23607, 2.], [2., 0., 3.23607], [-2., 0., 3.23607], [-2., 0., -3.23607], [2., 0., -3.23607]];
const ico_edge = [[0,1],[0,4],[0,5],[0,8],[0,11],[1,6],[1,7],[1,8],[1,11],[2,3],[2,6],[2,7],[2,9],[2,10],[3,4],[3,5],[3,9],[3,10],[4,5],[4,8],[4,9],[5,10],[5,11],[6,7],[6,10],[6,11],[7,8],[7,9],[8,9],[10,11]]

let vts = [];
let edge = [];

vts = new Array(ico_vts.length);
for(let i=0; i<vts.length; i++) vts[i] = ico_vts[i].concat();
edge = new Array(ico_edge.length);
for(let i=0; i<edge.length; i++)    edge[i] = ico_edge[i].concat();


let inputtouch = false;


const canvas1 = document.getElementById('canvas1');
canvas1.style.touchAction = 'none';


canvas1.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});



const label1 = document.getElementById('label1');


const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');

slider1.style.touchAction = 'none';
slider2.style.touchAction = 'none';
slider3.style.touchAction = 'none';

console.log(slider1.style)


slider1.addEventListener('input',(event)=>{
    rotate_angle = -Math.PI/2/500*Number(slider1.value);
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    select3.value = 'option7';
    let kakudo = -rotate_angle / Math.PI * 180;
    label1.textContent = Math.round(kakudo) + '度';
});

slider2.addEventListener('input',(event)=>{
    tube_thick = 0.15/100*Number(event.target.value);
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    select3.value = 'option7';
});

slider3.addEventListener('input',(event)=>{
    tube_length = Number(event.target.value)/100;
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    select3.value = 'option7';
});

slider1.addEventListener('pointerdown',()=>{inputtouch = true;});
slider2.addEventListener('pointerdown',()=>{inputtouch = true;});
slider3.addEventListener('pointerdown',()=>{inputtouch = true;});
slider1.addEventListener('pointerup',()=>{inputtouch = false;});
slider2.addEventListener('pointerup',()=>{inputtouch = false;});
slider3.addEventListener('pointerup',()=>{inputtouch = false;});


const check1 = document.getElementById('check1');
check1.addEventListener('change',(event)=>{
    if(event.target.checked){
        slider1.max = 1500;
    }else{
        slider1.max = 500;
    }
    rotate_angle = -Math.PI/2/500*Number(slider1.value);
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    let kakudo = -rotate_angle / Math.PI * 180;
    label1.textContent = Math.round(kakudo) + '度';
});


const select1 = document.getElementById('select1');
select1.value = 'option2';
select1.addEventListener('change',(event)=>{
    if(event.target.value=='option1'){
        vts = new Array(cube_vts.length);
        for(let i=0; i<vts.length; i++) vts[i] = cube_vts[i].concat();
        edge = new Array(cube_edge.length);
        for(let i=0; i<edge.length; i++)    edge[i] = cube_edge[i].concat();
        disposeGroup(meshgroup);
        scene1.remove(meshgroup);
        main();
        camera1.zoom *= 1.25;
        camera1.updateProjectionMatrix();

        select2.style.visibility = 'hidden';
        select3.style.visibility = 'hidden';
    }else{
        vts = new Array(ico_vts.length);
        for(let i=0; i<vts.length; i++) vts[i] = ico_vts[i].concat();
        edge = new Array(ico_edge.length);
        for(let i=0; i<edge.length; i++)    edge[i] = ico_edge[i].concat();
        disposeGroup(meshgroup);
        scene1.remove(meshgroup);
        main();
        camera1.zoom *= 0.8;
        camera1.updateProjectionMatrix();

        select2.style.visibility = 'visible';
        select3.style.visibility = 'visible';
    }
});



const select2 = document.getElementById('select2');
select2.value = 'option2';
select2.addEventListener('change',()=>{
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
});


const select3 = document.getElementById('select3');
select3.addEventListener('input',()=>{

    if(select3.value=='option1'){
        slider1.max = 500;
        slider1.value = 0;
        slider2.value = 0;
        slider3.value = 95;
        check1.checked = false;
        update1();
    }

    if(select3.value=='option2'){
        slider1.max = 1500;
        slider1.value = 823;
        slider2.value = 152;
        slider3.value = 154;
        select2.value = 'option3';
        check1.checked = true;
        update1();
    }

    if(select3.value=='option3'){
        slider1.max = 500;
        slider1.value = 324;
        slider2.value = 152;
        slider3.value = 117;
        select2.value = 'option3';
        check1.checked = false;
        update1();
    }

    if(select3.value=='option4'){
        slider1.max = 500;
        slider1.value = 324;
        slider2.value = 180;
        slider3.value = 497;
        select2.value = 'option3';
        check1.checked = false;
        update1();
    }

    if(select3.value=='option5'){
        slider1.max = 500;
        slider1.value = 384;
        slider2.value = 100;
        slider3.value = 100;
        check1.checked = false;
        update1();
    }

    if(select3.value=='option6'){
        slider1.max = 500;
        slider1.value = 500;
        slider2.value = 100;
        slider3.value = 58;
        check1.checked = false;
        update1();
    }

    if(select3.value=='option8'){
        slider1.max = 500;
        slider1.value = 249;
        slider2.value = 122;
        slider3.value = 225;
        select2.value = 'option2';
        check1.checked = false;
        update1();
    }

});


function update1(){
    rotate_angle = -Math.PI/2/500*Number(slider1.value);
    tube_thick = 0.15/100*Number(slider2.value);
    tube_length = Number(slider3.value)/100;
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    let kakudo = -rotate_angle / Math.PI * 180;
    label1.textContent = Math.round(kakudo) + '度';
}



let angle_switch = 2;
let rotate_angle = -Math.PI/2/200*Number(slider1.value);
let tube_thick = 0.15/100*Number(slider2.value);
let tube_length = Number(slider3.value)/100;

//シーン
const scene1 = new THREE.Scene();


// レンダラー
const renderer1 = new THREE.WebGLRenderer({
    canvas:canvas1,   //描画するキャンバスをID指定
    antialias: true
});
renderer1.setSize(window.innerWidth, window.innerHeight*0.6); //キャンバスサイズ
renderer1.setClearColor(0xeeeeee);   //背景色




// カメラ
const camera1 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);   //直交投影カメラ
//const camera1 = new THREE.PerspectiveCamera(60, canvas1.width/canvas1.height, 0.1, 500);  //透視投影カメラ
camera1.position.set(0,0,20);  //カメラ初期位置

let ratio = canvas1.width/canvas1.height;

if(canvas1.width>canvas1.height){
    camera1.left = -5*ratio;
    camera1.right = 5*ratio;
    camera1.top = 5;
    camera1.bottom = -5;
}else{
    camera1.left = -5;
    camera1.right = 5;
    camera1.top = 5 / ratio;
    camera1.bottom = -5 / ratio;
}

camera1.zoom = 1;
camera1.updateProjectionMatrix();


//画面サイズが変わったとき
window.addEventListener('resize',()=>{
    renderer1.setSize(window.innerWidth, window.innerHeight*0.6);
    camera1.aspect = window.innerWidth / (window.innerHeight*0.6);

    camera1.left = -Math.min(canvas1.width,canvas1.height) / 150;
    camera1.right = Math.min(canvas1.width,canvas1.height) / 150;
    camera1.top = Math.min(canvas1.width,canvas1.height) / 150;
    camera1.bottom = -canvas1.height / 150;

    let ratio = canvas1.width/canvas1.height;

    if(canvas1.width>canvas1.height){
        camera1.left = -5*ratio;
        camera1.right = 5*ratio;
        camera1.top = 5;
        camera1.bottom = -5;
    }else{
        camera1.left = -5;
        camera1.right = 5;
        camera1.top = 5 / ratio;
        camera1.bottom = -5 / ratio;
    }

    camera1.updateProjectionMatrix();
});


//環境光ライト
const lighta = new THREE.AmbientLight(0xffffff, 0.6);   //第1引数：光の色, 第2引数：光の強さ
scene1.add(lighta);


//指向性ライト
const light1 = new THREE.DirectionalLight(0xffffff, 0.4);
light1.position.set(1,1,1);
scene1.add(light1);


const light2 = new THREE.DirectionalLight(0xffffff, 0.3);
light2.position.set(-1,-1,1);
scene1.add(light2);


//マウスドラッグによる視点操作（カメラが動く、ライブラリに備わっている機能を使用）
//const controls = new THREE.OrbitControls(camera1, renderer1.domElement);



//オブジェクト


let dummymesh = new THREE.Mesh();
dummymesh.rotation.set(0.25, 0.4, 0);




let tube_material = [
    new THREE.MeshLambertMaterial({ color: 0xff7700, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0xff40cc, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0xf4ff1f, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0x77ff00, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0x0077ff, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0x7700ff, side:THREE.DoubleSide})
]

let meshgroup;



function addtube(v1, v2, r1, ci){

    let tube_path = new THREE.CatmullRomCurve3([v1, v2]);
    let tube_geomtry = new THREE.TubeGeometry(tube_path, 8, r1, 16, false);
    let tube = new THREE.Mesh(tube_geomtry, tube_material[ci]);
    meshgroup.add(tube); 


    let sphere_geometry, sphere1, sphere2;

    sphere_geometry = new THREE.SphereGeometry(r1, 16, 8);
    sphere1 = new THREE.Mesh(sphere_geometry, tube_material[ci]);
    sphere1.position.copy(v1);
    sphere2 = sphere1.clone();
    sphere2.position.copy(v2);
    meshgroup.add(sphere1);
    meshgroup.add(sphere2);
}


main();

function main(){

    meshgroup = new THREE.Group();

    for(let i=0; i<edge.length; i++){

        let x1, y1, z1, x2, y2, z2;
        x1 = vts[edge[i][0]][0];
        y1 = vts[edge[i][0]][1];
        z1 = vts[edge[i][0]][2];
        x2 = vts[edge[i][1]][0];
        y2 = vts[edge[i][1]][1];
        z2 = vts[edge[i][1]][2];

        let v1a = new THREE.Vector3(x1, y1, z1);
        let v2a = new THREE.Vector3(x2, y2, z2);

        let va = new THREE.Vector3((x1+x2)/2, (y1+y2)/2, (z1+z2)/2);    //辺の重心

        let v1b, v2b, v1c, v2c;

        v1b = v1a.clone().sub(va);
        v1b.applyAxisAngle(va.clone().normalize(), rotate_angle);
        v1b.add(va);

        v2b = v2a.clone().sub(va);
        v2b.applyAxisAngle(va.clone().normalize(), rotate_angle);
        v2b.add(va);

        v1c = new THREE.Vector3((-tube_length+1)*va.x+tube_length*v1b.x, (-tube_length+1)*va.y+tube_length*v1b.y, (-tube_length+1)*va.z+tube_length*v1b.z);
        v2c = new THREE.Vector3((-tube_length+1)*va.x+tube_length*v2b.x, (-tube_length+1)*va.y+tube_length*v2b.y, (-tube_length+1)*va.z+tube_length*v2b.z);
    
        let cl=0;

        if(select1.value=='option1' || select2.value=='option1'){
            cl = 4;
        }else if(select2.value=='option2'){
            cl = 0;
            if(i==0 || i==9 || i==18 || i==23 || i==28 || i==29)  cl=1;
            if(i==1 || i==10 || i==21 || i==26 || i==8 || i==16)  cl=2;
            if(i==2 || i==11 || i==7 || i==17 || i==20 || i==25)  cl=3;
            if(i==3 || i==13 || i==22 || i==27 || i==5 || i==14)  cl=4;
        }else{
            cl = 5;
            if(i==0 || i==22 || i==17 || i==12 || i==26)    cl=0;
            if(i==1 || i==15 || i==13 || i==23 || i==7)    cl=1;
            if(i==2 || i==29 || i==10 || i==27 || i==19)    cl=2;
            if(i==3 || i==8 || i==24 || i==9 || i==20)    cl=3;
            if(i==4 || i==5 || i==11 || i==16 || i==18)    cl=4;
        }
        

        addtube(v1c, v2c, tube_thick, cl);
    }

    scene1.add(meshgroup);

}


//マウスイベント
let mouseIsPressed = false;
canvas1.addEventListener('pointerdown',()=>{mouseIsPressed = true;});
canvas1.addEventListener('pointerup',()=>{mouseIsPressed = false;});

let mousemovementX=0, mousemovementY=0;
canvas1.addEventListener('pointermove',(event)=>{
    mousemovementX = event.movementX;
    mousemovementY = event.movementY;
});

let angularvelocity = new THREE.Vector3(0,0,0);


//2本指操作
let mpx1=-1, mpy1=-1, mpx2=-1, mpy2=-1; 
let twofinger = false;

//document.addEventListener('touchstart', handleTouchStart, false);
canvas1.addEventListener('touchmove', handleTouchMove, false);
canvas1.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event){
    if(event.touchs.length==2){
        mpx1 = event.touches[0].clientX;
        mpy1 = event.touches[0].clientY;
        mpx2 = event.touches[1].clientX;
        mpy2 = event.touches[1].clientY;
    }
}

function handleTouchMove(event){

    if(event.touches.length==2){

        inputtouch = true;

        if(mpx1==-1 || mpy1==-1 || mpx2==-1 || mpy2==-1){

            mpx1 = event.touches[0].clientX;
            mpy1 = event.touches[0].clientY;
            mpx2 = event.touches[1].clientX;
            mpy2 = event.touches[1].clientY;

        }else{

            let mx1, my1, mx2, my2;
            mx1 = event.touches[0].clientX;
            my1 = event.touches[0].clientY;
            mx2 = event.touches[1].clientX;
            my2 = event.touches[1].clientY;

            let d1, d2;
            d1 = Math.sqrt((mpx1-mpx2)**2+(mpy1-mpy2)**2);
            d2 = Math.sqrt((mx1-mx2)**2+(my1-my2)**2);

            let v1l = camera1.zoom;

            v1l = Math.min(Math.max(v1l +(d2-d1)*0.004, 0.3),3);
            
            camera1.zoom = v1l;
            camera1.updateProjectionMatrix();

            mpx1 = mx1;
            mpy1 = my1;
            mpx2 = mx2;
            mpy2 = my2;

        }

    }else if(event.touches.length==1){
        if(mpx1==-1 || mpy1==-1){
            mpx1 = event.touches[0].clientX;
            mpy1 = event.touches[0].clientY;
        }else{
            mousemovementX = event.touches[0].clientX - mpx1;
            mousemovementY = event.touches[0].clientY - mpy1;
            mpx1 = event.touches[0].clientX;
            mpy1 = event.touches[0].clientY;
        }
    }
}


function handleTouchEnd(event){
    mpx1 = -1;
    mpy1 = -1;
    mpx2 = -1;
    mpy2 = -1;
    inputtouch = false;
}


//レンダリングを繰り返す
function animate(){

    requestAnimationFrame(animate); //この関数自身を呼び出すことで関数内の処理が繰り返される

    if(mouseIsPressed)  angularvelocity.lerp(new THREE.Vector3(mousemovementY,mousemovementX, 0),0.2);
    if(inputtouch)  angularvelocity.set(0,0,0);
    
    let axis = angularvelocity.clone().normalize();
    let rad = angularvelocity.length()*0.005;

    mousemovementX = 0;
    mousemovementY = 0;

    //meshgroup.rotateOnWorldAxis(axis, rad);
    dummymesh.rotateOnWorldAxis(axis, rad);
    
    meshgroup.rotation.copy(dummymesh.rotation);

    // scene1.traverse((object)=>{
    //     if(object.isMesh){
    //         object.rotation.copy(dummymesh.rotation);
    //     }
    // });


    renderer1.render(scene1, camera1);  //レンダリング（CG描画）
}
animate();




// グループに含まれる全ての子要素のジオメトリとマテリアルを破棄する関数
function disposeGroup(group) {
    group.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            // メッシュのジオメトリとマテリアルを破棄
            if (child.geometry) {
                child.geometry.dispose();
            }
            if (child.material) {
                // マテリアルがArrayの場合はそれぞれ破棄する
                if (Array.isArray(child.material)) {
                    child.material.forEach(mat => mat.dispose());
                } else {
                    child.material.dispose();
                }
            }
        }
    });
}



// マウスホイールイベントのリスナーを追加
document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        camera1.zoom = Math.min(Math.max(camera1.zoom-0.1, 0.3),3)
    } else {
        camera1.zoom = Math.min(Math.max(camera1.zoom+0.1, 0.3),3);
    }
    camera1.updateProjectionMatrix();
});