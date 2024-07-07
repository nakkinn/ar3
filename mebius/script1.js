let tubecolor1 = 0x0099ff;  //tubeの色　uカーブ
let tubecolor2 = 0xff3300;  //tubeの色　vカーブ
let surfacecolor = 0xd9ee85;    //曲面の色
let surfacealpha = 0.7; //曲面の透明度
let backgroundcolor = 0xeeeeee; //背景色


//#############################################################
//グローバル変数
//#############################################################


let canvasover = false; //trueのときマウスホイール（2本指スライド）でグラフィックを拡大縮小、falseのときページスクロール
let twofinger = false;  //タッチパッドで2本指操作しているときtrue, そのとき回転軸を維持する
let mouseIsPressed = false; //マウスが押されている（タップ）状態か否か
let pmouseX1=-1, pmouseY1=-1, pmouseX2=-1, pmouseY2=-1; //1フレーム前のマウス（タッチ）座標
let mousemovementX=0, mousemovementY=0; //マウス移動量

let width1, height1;    //キャンバスサイズ
let angularvelocity1 = new THREE.Vector3(0,0,0);    //オブジェクトの回転軸　大きさが回転速度に比例する　（初めから回転させることも可能）


//#############################################################
//three.js関連
//#############################################################


//シーン
const scene1 = new THREE.Scene();


// レンダラー
const renderer1 = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas1'),   //描画するキャンバスをID指定
    antialias: true //グラフィックのぎざぎざを軽減
});
renderer1.setClearColor(0xeeeeee);   //背景色

width1 = renderer1.domElement.width;    //キャンバスサイズの取得（カメラ設定に使う）
height1 = renderer1.domElement.height;


// カメラ
//const camera1 = new THREE.OrthographicCamera(-2, 2, 2, -2, 1, 10);   //直交投影カメラ
const camera1 = new THREE.PerspectiveCamera(60, canvas1.width/canvas1.height, 0.1, 500);  //透視投影カメラ
camera1.position.set(0,0,25);  //カメラ初期位置
camera1.zoom = 1;   //カメラズーム量（オブジェクトが画面に表示されない場合は、これを調整すると表示されることがある）
camera1.updateProjectionMatrix(); //カメラの設定適用


//環境光ライト
const lighta = new THREE.AmbientLight(0xffffff, 0.6);   //第1引数：光の色, 第2引数：光の強さ
scene1.add(lighta);


//指向性ライト
const light1 = new THREE.DirectionalLight(0xffffff, 0.6);
light1.position.set(1,1,1);
scene1.add(light1);


const light2 = new THREE.DirectionalLight(0xffffff, 0);
light2.position.set(-1,-1,1);
scene1.add(light2);


//姿勢更新のためのダミーオブジェクト
let dummymesh = new THREE.Mesh();   //マウスドラッグ時これを回転させて、他のオブジェクトの姿勢をダミーオブジェクトの姿勢と一致させる
dummymesh.rotation.set(0.3, 0, 0);  //初期姿勢 x-y-z系オイラー角



//#############################################################
//表示するグラフィック　
//#############################################################

let path, geometry, mesh, mesh_tube_group, index=10;

let tubematerial1 = new THREE.MeshLambertMaterial({ color: tubecolor1, side:THREE.DoubleSide});
let tubematerial2 = new THREE.MeshLambertMaterial({ color: tubecolor2, side:THREE.DoubleSide});

mesh_tube_group = new Array(curve_group.length);
for(let i=0; i<mesh_tube_group.length; i++)   mesh_tube_group[i] = new THREE.Mesh();

for(let i=0; i<curve_group.length; i++){

    for(let k=0; k<curve_group[i].length; k++){
        let thick = 0.1;
        if(k==0||k==20)    thick = 0.2;
        path = new THREE.CatmullRomCurve3(veclist(curve_group[i][k],5));
        geometry = new THREE.TubeGeometry(path, 64, thick, 16, false);
        if(k<=20)   mesh = new THREE.Mesh(geometry, tubematerial1);
        else    mesh = new THREE.Mesh(geometry, tubematerial2);
        mesh_tube_group[i].add(mesh);
    }

}

scene1.add(mesh_tube_group[index]);


let geometry_surface, material_surface, mesh_surface;
let mesh_surface_group = new Array(vts2.length);

let index0 = [];
let index2 = [];
let index3 = [];


for(let i=0; i<index1.length; i+=3){

    let a1 = 240*4;
    if(9600/2-a1<=i && i<9600/2+a1){
        index2.push(index1[i]);
        index2.push(index1[i+1]);
        index2.push(index1[i+2]);
    }


    let a2 = 240*8;
    if((a2<=i&&i<9600/2-a2) || (9600/2+a2<=i&&i<9600-a2)){
        index3.push(index1[i]);
        index3.push(index1[i+1]);
        index3.push(index1[i+2]);
    }
}


material_surface = new THREE.MeshPhongMaterial({color:surfacecolor, side:THREE.DoubleSide, transparent:true, opacity:surfacealpha});


for(let i=0; i<vts2.length; i++){

    geometry_surface = new THREE.BufferGeometry();
    geometry_surface.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vts2[i]), 3));
    geometry_surface.setIndex(new THREE.BufferAttribute(new Uint16Array(index1),1));
    geometry_surface.computeVertexNormals();

    mesh_surface_group[i] = new THREE.Mesh(geometry_surface, material_surface);
    mesh_surface_group[i].scale.set(5,5,5);

}


scene1.add(mesh_surface_group[index]);



//#############################################################
//入力や操作に関する処理
//#############################################################


//キャンバス上で操作しているか否かの切り替え
document.addEventListener('mousemove', (event)=>{   //第1引数　'click'：ページをクリックすると発火, 'mousemove'：異なる要素にマウスが移動すると発火
    if(event.target.tagName.toLowerCase()=='canvas'){   //クリック位置（移動先）がキャンバス要素のとき
        canvasover = true;  //キャンバス操作オン
        document.body.style.overflow = 'hidden';    //スクロール無効にする
    }else{   //クリック位置（移動先）がキャンバス要素でないとき
        canvasover = false;  //キャンバス操作オフ
        document.body.style.overflow = '';  //スクロール有効にする
    }
})


//マウスホイールイベント
document.addEventListener('wheel', function(event) {
    if(canvasover){ //キャンバス操作モードのときカメラズームを調整
        if(event.deltaY > 0) camera1.zoom *= 0.8;
        else camera1.zoom *= 1.25;
        camera1.updateProjectionMatrix();
    }
});


//マウスイベント
//マウスプレス・リリース時にmouseIsPressedを切り替え
renderer1.domElement.addEventListener('pointerdown',()=>{mouseIsPressed = true;});
document.addEventListener('pointerup',()=>{mouseIsPressed = false;});
//マウス移動量の更新
renderer1.domElement.addEventListener('pointermove',(event)=>{
    mousemovementX = event.movementX;
    mousemovementY = event.movementY;
});


//タッチイベント
renderer1.domElement.addEventListener('touchmove', handleTouchMove, false);
renderer1.domElement.addEventListener('touchend', handleTouchEnd, false);

//画面（タッチパッド）を指でなぞったときの処理
function handleTouchMove(event){

    if(event.touches.length==2){    //指2本で触れている

        twofinger = true;

        if(pmouseX1==-1 || pmouseY1==-1 || pmouseX2==-1 || pmouseY2==-1){   //1フレーム前は2本指でないとき

            pmouseX1 = event.touches[0].clientX;
            pmouseY1 = event.touches[0].clientY;
            pmouseX2 = event.touches[1].clientX;
            pmouseY2 = event.touches[1].clientY;

        }else{  //1フレーム前も2本指のとき

            let mx1, my1, mx2, my2;
            mx1 = event.touches[0].clientX;
            my1 = event.touches[0].clientY;
            mx2 = event.touches[1].clientX;
            my2 = event.touches[1].clientY;

            let d1, d2; 
            d1 = Math.sqrt((pmouseX1-pmouseX2)**2+(pmouseY1-pmouseY2)**2);  //1フレーム前の2つのタップ箇所の距離
            d2 = Math.sqrt((mx1-mx2)**2+(my1-my2)**2);  //現在の2つのタップ箇所の距離

            camera1.zoom *= (d2/d1-1) * 1 + 1;  //カメラのズーム量を変更
            camera1.updateProjectionMatrix();

            pmouseX1 = mx1;
            pmouseY1 = my1;
            pmouseX2 = mx2;
            pmouseY2 = my2;

        }

    }else if(event.touches.length==1){  //指1本で触れている
        pmouseX1 = event.touches[0].clientX;
        pmouseY1 = event.touches[0].clientY;
    }
}

//画面（タッチパッド）から指を離したときの処理
function handleTouchEnd(){
    pmouseX1 = -1;
    pmouseY1 = -1;
    pmouseX2 = -1;
    pmouseY2 = -1;
    twofinger = false;
}



const slider1 = document.getElementById('slider1');

slider1.addEventListener('input',()=>{
    scene1.remove(mesh_tube_group[index]);
    scene1.remove(mesh_surface_group[index]);
    index = Math.round(Number(slider1.value)*20);
    scene1.add(mesh_tube_group[index]);
    scene1.add(mesh_surface_group[index]);
});


const select1 = document.getElementById('select1');
select1.value = 'option2';
select1.addEventListener('change',(event)=>{
    if(event.target.value=='option1'){
        for(let i=0; i<vts2.length; i++){
            mesh_surface_group[i].geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index0),1));
            mesh_surface_group[i].geometry.computeVertexNormals();
        }
    }
    if(event.target.value=='option2'){
        for(let i=0; i<vts2.length; i++){
            mesh_surface_group[i].geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index1),1));
            mesh_surface_group[i].geometry.computeVertexNormals();
            mesh_surface_group[i].material.opacity=0.7;
        }
    }
    if(event.target.value=='option3'){
        for(let i=0; i<vts2.length; i++){
            mesh_surface_group[i].geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index2),1));
            mesh_surface_group[i].geometry.computeVertexNormals();
            mesh_surface_group[i].material.opacity=1;
        }
    }
    if(event.target.value=='option4'){
        for(let i=0; i<vts2.length; i++){
            mesh_surface_group[i].geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(index3),1));
            mesh_surface_group[i].geometry.computeVertexNormals();
            mesh_surface_group[i].material.opacity=1;
        }
    }
});







//レンダリングを繰り返す
function animate(){

    requestAnimationFrame(animate); //この関数自身を呼び出すことで関数内の処理が繰り返される


    if(mouseIsPressed && !twofinger)  angularvelocity1.lerp(new THREE.Vector3(mousemovementY,mousemovementX, 0),0.2);
    let axis = angularvelocity1.clone().normalize(); //回転軸
    let rad = angularvelocity1.length()*0.005;   //回転量　最後にかける定数を大きくするとマウスドラッグ時の回転量が大きくなる

    mousemovementX = 0;
    mousemovementY = 0;

    dummymesh.rotateOnWorldAxis(axis, rad); //ダミーオブジェクトを回転
    
    mesh_tube_group[index].rotation.copy(dummymesh.rotation);
    mesh_surface_group[index].rotation.copy(dummymesh.rotation);

    //キューブクリッピング
    // renderer1.clippingPlanes = [];

    // let vc1 = new THREE.Vector3(1, 0, 0);
    // let vc2 = new THREE.Vector3(-1, 0, 0);
    // let vc3 = new THREE.Vector3(0, 1, 0);
    // let vc4 = new THREE.Vector3(0, -1, 0);
    // let vc5 = new THREE.Vector3(0, 0, 1);
    // let vc6 = new THREE.Vector3(0, 0, -1);

    // vc1.applyEuler(dummymesh.rotation);
    // vc2.applyEuler(dummymesh.rotation);
    // vc3.applyEuler(dummymesh.rotation);
    // vc4.applyEuler(dummymesh.rotation);
    // vc5.applyEuler(dummymesh.rotation);
    // vc6.applyEuler(dummymesh.rotation);

    // let a1 = 16;

    // renderer1.clippingPlanes.push(new THREE.Plane(vc1, a1));
    // renderer1.clippingPlanes.push(new THREE.Plane(vc2, a1));
    // renderer1.clippingPlanes.push(new THREE.Plane(vc3, a1));
    // renderer1.clippingPlanes.push(new THREE.Plane(vc4, a1));
    // renderer1.clippingPlanes.push(new THREE.Plane(vc5, a1));
    // renderer1.clippingPlanes.push(new THREE.Plane(vc6, a1));


    //カッティングプレーン
    let planedistance = 18; //原点とカッティングプレーンとの距離
    renderer1.clippingPlanes = [];  //カッティングプレーンをリセット
    for(let i=0; i<spherecut100.length; i++)    if(i%2==0 || true){ //100個のプレーンのうち偶数番目のもののみを使う（計算量削減のため）
        let vc1 = new THREE.Vector3(spherecut100[i][0], spherecut100[i][1], spherecut100[i][2]);    //data.js内のspherecut100を参照　100×3配列
        vc1.applyEuler(dummymesh.rotation); //カッティングプレーンをダミーオブジェクトに合わせて回転させる
        renderer1.clippingPlanes.push(new THREE.Plane(vc1,planedistance));  //レンダラーにカッティングプレーンを追加
    }


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

