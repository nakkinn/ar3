//棒の色
const col1 = 0xff3300;  //立方体１の色
const col2 = 0x0077ff;  //立方体２の色
const col3 = 0x999999;  //その他の辺の色


angularvelocity1_common = new THREE.Vector3(0, 0, 0);    //回転軸初期値
dummymesh_common.rotation.set(-1.4, 0, 0.5);    //初期姿勢（x-y-z系オイラー角）

let width1, height1;

//#############################################################
//three.js関連
//#############################################################

//シーン
const scene1 = new THREE.Scene();


// レンダラー
const renderer1 = new THREE.WebGLRenderer({
    canvas:document.getElementById('canvas1'),   //描画するキャンバスをID指定
    antialias: true
});
renderer1.setClearColor(0xeeeeee);   //背景色

width1 = renderer1.domElement.width;    //キャンバスサイズの取得（カメラ設定に使う）
height1 = renderer1.domElement.height;


// カメラ
const camera1 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);   //直交投影カメラ
//const camera1 = new THREE.PerspectiveCamera(60, canvas1.width/canvas1.height, 0.1, 500);  //透視投影カメラ
camera1.position.set(0,0,20);  //カメラ初期位置

let ratio = width1 / height1;   //キャンバスアスペクト比

if(width1 > height1){
    camera1.left = -4*ratio;
    camera1.right = 4*ratio;
    camera1.top = 4;
    camera1.bottom = -4;
}else{
    camera1.left = -4;
    camera1.right = 4;
    camera1.top = 4 / ratio;
    camera1.bottom = -4 / ratio;
}

camera1.zoom = 2;   //カメラズーム値　絶対値が大きいほどオブジェクトが大きく見える
camera1.updateProjectionMatrix();   //カメラ設定適用




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



//#############################################################
//表示するグラフィック
//#############################################################


const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');

//超立方体頂点座標
const hypercubevts = [
    [1,1,1,1],
    [1,1,1,-1],
    [1,1,-1,1],
    [1,1,-1,-1],
    [1,-1,1,1],
    [1,-1,1,-1],
    [1,-1,-1,1],
    [1,-1,-1,-1],
    [-1,1,1,1],
    [-1,1,1,-1],
    [-1,1,-1,1],
    [-1,1,-1,-1],
    [-1,-1,1,1],
    [-1,-1,1,-1],
    [-1,-1,-1,1],
    [-1,-1,-1,-1]
];

//超立方体辺のインデックスリスト
const hypercubeedge = [
    [0,1], [2,3], [4,5], [6,7], [8,9], [10,11], [12,13], [14,15],
    [0,2], [1,3], [4,6], [5,7], [8,10], [9,11], [12,14], [13,15],
    [0,4], [1,5], [2,6], [3,7], [8,12], [9,13], [10,14], [11, 15],
    [0,8], [1,9], [2,10], [3,11], [4,12], [5,13], [6,14], [7,15],

];

//マテリアル　複数個分
const tube_material = [
    new THREE.MeshLambertMaterial({ color: 0xff7700, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0xff3300, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0xf4ff1f, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0x999999, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0x0077ff, side:THREE.DoubleSide}),
    new THREE.MeshLambertMaterial({ color: 0x7700ff, side:THREE.DoubleSide})
];



let meshgroup;


function addtube(v1, v2, r1, ci){

    let col = 0x000000;
    if(ci==0)   col = col1;
    if(ci==1)   col = col2;
    if(ci==2)   col = col3;

    let material0 = new THREE.MeshLambertMaterial({ color: col, side:THREE.DoubleSide});

    let tube_path = new THREE.CatmullRomCurve3([v1, v2]);
    let tube_geomtry = new THREE.TubeGeometry(tube_path, 4, r1, 16, false);
    
    let tube = new THREE.Mesh(tube_geomtry, material0);
    meshgroup.add(tube); 


    let sphere_geometry, sphere1, sphere2;
    sphere_geometry = new THREE.SphereGeometry(r1, 16, 8);
    sphere1 = new THREE.Mesh(sphere_geometry, material0);
    sphere1.position.copy(v1);
    sphere2 = sphere1.clone();
    sphere2.position.copy(v2);
    meshgroup.add(sphere1);
    meshgroup.add(sphere2);

}



function main(){

    meshgroup = new THREE.Group();


    let vts4 = new Array(hypercubevts.length);
    for(let i=0; i<vts4.length; i++)    vts4[i] = hypercubevts[i].concat();

    //4次元回転

    let angle1 = Math.PI*Number(slider1.value);
    for(let i=0; i<vts4.length; i++){
        let tmpx = vts4[i][0];
        let tmpw = vts4[i][3];
        vts4[i][0] = tmpx*Math.cos(angle1) - tmpw*Math.sin(angle1);
        vts4[i][3] = tmpx*Math.sin(angle1) + tmpw*Math.cos(angle1);
    }

    let angle2 = Math.PI*Number(slider2.value);
    for(let i=0; i<vts4.length; i++){
        let tmpx = vts4[i][1];
        let tmpw = vts4[i][3];
        vts4[i][1] = tmpx*Math.cos(angle2) - tmpw*Math.sin(angle2);
        vts4[i][3] = tmpx*Math.sin(angle2) + tmpw*Math.cos(angle2);
    }

    let angle3 = Math.PI*Number(slider3.value);
    for(let i=0; i<vts4.length; i++){
        let tmpx = vts4[i][2];
        let tmpw = vts4[i][3];
        vts4[i][2] = tmpx*Math.cos(angle3) - tmpw*Math.sin(angle3);
        vts4[i][3] = tmpx*Math.sin(angle3) + tmpw*Math.cos(angle3);
    }


    let vts3 = new Array(hypercubevts.length);

    for(let i=0; i<hypercubevts.length; i++){

        let x1, y1, z1, w1;

        x1 = vts4[i][0];
        y1 = vts4[i][1];
        z1 = vts4[i][2];
        w1 = vts4[i][3];

        vts3[i] = [x1/(2.01-w1), y1/(2.01-w1), z1/(2.01-w1)]
    }


    for(let i=0; i<hypercubeedge.length; i++){
        let v1 = new THREE.Vector3(vts3[hypercubeedge[i][0]][0], vts3[hypercubeedge[i][0]][1], vts3[hypercubeedge[i][0]][2]);
        let v2 = new THREE.Vector3(vts3[hypercubeedge[i][1]][0], vts3[hypercubeedge[i][1]][1], vts3[hypercubeedge[i][1]][2]);

        if(i<4 || (i>=8&&i<12) || (i>=16&&i<20)) addtube(v1, v2, 0.105, 0);
        else if((i>=4&&i<8) || (i>=12&&i<16) || (i>=20&&i<24))  addtube(v1, v2, 0.105, 1);
        else    addtube(v1, v2, 0.1, 2);
        

    }


    scene1.add(meshgroup);

}


main();




//#############################################################
//入力や操作に関する処理
//#############################################################

//スライダーのつまみが動かされたとき、オブジェクトを一度破棄して生成し直す
slider1.addEventListener('input',(event)=>{
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    scene1.add(meshgroup);
});

slider2.addEventListener('input',(event)=>{
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    scene1.add(meshgroup);
});

slider3.addEventListener('input',(event)=>{
    disposeGroup(meshgroup);
    scene1.remove(meshgroup);
    main();
    scene1.add(meshgroup);
});


//レンダリングを繰り返す
function animate(){

    requestAnimationFrame(animate); //この関数自身を呼び出すことで関数内の処理が繰り返される

    rotateobjects_common(scene1, camera1);  //scene1に含まれる全てのオブジェクトを回転

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



