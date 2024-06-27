let tubecolor1 = 0xff3300;  //tubeの色　uカーブ
let tubecolor2 = 0x0033ff;  //tubeの色　vカーブ
let surfacecolor = 0xe9fe95;    //曲面の色
let surfacealpha = 1; //曲面の透明度
let backgroundcolor = 0xeeeeee; //背景色


const canvas1 = document.getElementById('canvas1');

canvas1.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});




//シーン
const scene1 = new THREE.Scene();


// レンダラー
const renderer1 = new THREE.WebGLRenderer({
    canvas:canvas1,   //描画するキャンバスをID指定
    antialias: true
});
renderer1.setSize(window.innerWidth, window.innerHeight*0.76); //キャンバスサイズ
renderer1.setClearColor(backgroundcolor);   //背景色


// カメラ
//const camera1 = new THREE.OrthographicCamera(-2, 2, 2, -2, 1, 10);   //直交投影カメラ
const camera1 = new THREE.PerspectiveCamera(60, canvas1.width/canvas1.height, 0.1, 500);  //透視投影カメラ
camera1.position.set(0,0,25);  //カメラ初期位置

//画面サイズが変わったとき
window.addEventListener('resize',()=>{
    renderer1.setSize(window.innerWidth, window.innerHeight*0.76);
    camera1.aspect = window.innerWidth / (window.innerHeight*0.76);
    camera1.updateProjectionMatrix();
});


//環境光ライト
const lighta = new THREE.AmbientLight(0xffffff, 0.3);   //第1引数：光の色, 第2引数：光の強さ
scene1.add(lighta);

const light1 = new THREE.DirectionalLight(0xffffff, 0.7);
light1.position.set(1,1,1);
scene1.add(light1);


//マウスドラッグによる視点操作（カメラが動く、ライブラリに備わっている機能を使用）
//const controls = new THREE.OrbitControls(camera1, renderer1.domElement);



//オブジェクト
let geometry, mesh, meshgroup, index=10;

let tubematerial1 = new THREE.MeshLambertMaterial({ color: tubecolor1, side:THREE.DoubleSide});
let tubematerial2 = new THREE.MeshLambertMaterial({ color: tubecolor2, side:THREE.DoubleSide});


let path1 = new THREE.CatmullRomCurve3(veclist2(curve1,1));
let tubegeometry1 = new THREE.TubeGeometry(path1, 64, 0.1, 8, false);
let tubemesh1 = new THREE.Mesh(tubegeometry1, tubematerial1);
scene1.add(tubemesh1);


let path2 = new THREE.CatmullRomCurve3(veclist2(curve2,1));
let tubegeometry2 = new THREE.TubeGeometry(path2, 64, 0.1, 8, false);
let tubemesh2 = new THREE.Mesh(tubegeometry2, tubematerial2);
scene1.add(tubemesh2);


// meshgroup = new Array(curve_group.length);
// for(let i=0; i<meshgroup.length; i++)   meshgroup[i] = new THREE.Mesh();

// for(let i=0; i<curve_group.length; i++){

//     for(let k=0; k<curve_group[i].length; k++){
//         let thick = 0.1;
//         if(k==0||k==20)    thick = 0.2;
//         path = new THREE.CatmullRomCurve3(veclist(curve_group[i][k],5));
//         geometry = new THREE.TubeGeometry(path, 64, thick, 8, false);
//         if(k<=20)   mesh = new THREE.Mesh(geometry, tubematerial1);
//         else    mesh = new THREE.Mesh(geometry, tubematerial2);
//         meshgroup[i].add(mesh);
//     }

// }

// scene1.add(meshgroup[index]);





let dummymesh = new THREE.Mesh();
dummymesh.rotation.set(0.3, 0, 0);



// let geometry_surface, material_surface, mesh_surface;
// let mesh_surface_group = new Array(vts2.length);

// let index0 = [];
// let index2 = [];
// let index3 = [];


// for(let i=0; i<index1.length; i+=3){

//     let a1 = 240*4;
//     if(9600/2-a1<=i && i<9600/2+a1){
//         index2.push(index1[i]);
//         index2.push(index1[i+1]);
//         index2.push(index1[i+2]);
//     }


//     let a2 = 240*8;
//     if((a2<=i&&i<9600/2-a2) || (9600/2+a2<=i&&i<9600-a2)){
//         index3.push(index1[i]);
//         index3.push(index1[i+1]);
//         index3.push(index1[i+2]);
//     }
// }




material_surface = new THREE.MeshPhongMaterial({color:surfacecolor, side:THREE.DoubleSide, transparent:true, opacity:surfacealpha});

// for(let i=0; i<vts2.length; i++){

//     geometry_surface = new THREE.BufferGeometry();
//     geometry_surface.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vts2[i]), 3));
//     geometry_surface.setIndex(new THREE.BufferAttribute(new Uint16Array(index1),1));
//     geometry_surface.computeVertexNormals();

//     mesh_surface_group[i] = new THREE.Mesh(geometry_surface, material_surface);
//     mesh_surface_group[i].scale.set(5,5,5);

// }



let index2 = [];
for(let i=0; i<index1.length; i++){
    if(!(i<240*2*0))  index2.push(index1[i]);
}
console.log(index1);

geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vts1), 3));
geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index2),1));
geometry.computeVertexNormals();

mesh = new THREE.Mesh(geometry, material_surface);
scene1.add(mesh);


// scene1.add(mesh_surface_group[index]);



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

        twofinger = true;

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

            let v1n = camera1.position.clone().normalize();
            let v1l = camera1.position.length();

            v1l = Math.max(v1l +(d1-d2)*0.1, 1);
            camera1.position.set(v1n.x*v1l, v1n.y*v1l, v1n.z*v1l);

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


function handleTouchEnd(){
    mpx1 = -1;
    mpy1 = -1;
    mpx2 = -1;
    mpy2 = -1;
    twofinger = false;
}



const slider1 = document.getElementById('slider1');

slider1.addEventListener('input',(event)=>{
    let index2 = [];
    for(let i=0; i<index1.length; i++){
        if(!(i<240*2*Number(event.target.value)))  index2.push(index1[i]);
    }
    geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index2),1));
    geometry.computeVertexNormals();
});







//レンダリングを繰り返す
function animate(){

    requestAnimationFrame(animate); //この関数自身を呼び出すことで関数内の処理が繰り返される



    if(mouseIsPressed && !twofinger)  angularvelocity.lerp(new THREE.Vector3(mousemovementY,mousemovementX, 0),0.2);
    let axis = angularvelocity.clone().normalize();
    let rad = angularvelocity.length()*0.005;

    mousemovementX = 0;
    mousemovementY = 0;


    dummymesh.rotateOnWorldAxis(axis, rad);
    mesh.rotation.copy(dummymesh.rotation);
    tubemesh1.rotation.copy(dummymesh.rotation);
    tubemesh2.rotation.copy(dummymesh.rotation);

    renderer1.render(scene1, camera1);  //レンダリング
}
animate();



function veclist(arg, sc){
    let result = [];
    for(let i=0; i<arg.length; i++){
        result.push(new THREE.Vector3(arg[i][0]*sc, arg[i][1]*sc, arg[i][2]*sc));
    }
    return result;
}

function veclist2(arg, sc){
    let result = [];
    for(let i=0; i<arg.length; i+=3){
        result.push(new THREE.Vector3(arg[i]*sc, arg[i+1]*sc, arg[i+2]*sc));
    }
    console.log(arg);
    console.log(result);
    return result;
}


// マウスホイールイベントのリスナーを追加
document.addEventListener('wheel', function(event) {

    let v1n = camera1.position.clone().normalize();
    let v1l = camera1.position.length();

    if (event.deltaY > 0) {
        v1l = Math.min(Math.max(v1l*1.1, 1), 100);
        
    } else {
        v1l = Math.min(Math.max(v1l*0.9, 1), 100);
    }
    camera1.position.set(v1n.x*v1l, v1n.y*v1l, v1n.z*v1l);

});