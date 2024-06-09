

//動きの大きさを調整するスライダー
const slider1 = document.getElementById('slider1');


//カメラの上方向ベクトルの定め方切り替え
const check1 = document.getElementById('check1');


//オイラー角　初期値はスマホを前方に向けている状態の角度
let alpha = 0;            //z軸回り
let beta = Math.PI/2;     //x軸回り
let gamma = 0;            //y軸回り


//動作と方向へのアクセス許可のボタンが押されたとき、ポップを出す
function permission_request() {

    if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission && typeof DeviceOrientationEvent.requestPermission === 'function'){
        DeviceOrientationEvent.requestPermission().then();
        //スマホが傾いたとき handleOrientation を呼び出す
        window.addEventListener( "deviceorientation", handleOrientation, false );
    }
}


//スマホが傾いたときオイラー角を更新
function handleOrientation(event) {

    //スマホのオイラー角（度数）
    alpha = event.alpha;    //z軸回り
    beta = event.beta;      //x軸回り
    gamma = event.gamma;    //y軸回り

    //度数からラジアンに変換
    alpha = Number(alpha)/180*Math.PI;
    beta = Number(beta)/180*Math.PI;
    gamma = Number(gamma)/180*Math.PI;
    
}



// シーン、カメラ、レンダラーの設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas:this.document.querySelector('#canvas1'),
    alpha : true
});

let width = window.innerWidth;  //スクリーンサイズ
let height = window.innerHeight;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);   //スクリーンの短辺を1辺とする正方形



//glTF形式の3Dデータインポート
// let monkey = new THREE.Mesh();

// const loader = new THREE.GLTFLoader();
// loader.load('redmonkey.glb', function(object){
//     monkey = object.scene;
//     scene.add(monkey);
// });




const geometry = new THREE.BufferGeometry();

let vts = [];
let indices = [];

for(let i=0; i<=30; i++){

    let t = 2*Math.PI/30.05*i;
    let t2 = t + 2*Math.PI/30.05;
    let a = 5;
    let b = 2;

    let x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4;

    x1 = Math.cos(t)*(a+b*Math.cos(t/2));
    y1 = Math.sin(t)*(a+b*Math.cos(t/2));
    z1 = b*Math.sin(t/2);

    x2 = Math.cos(t)*(a+b*Math.cos(t/2+Math.PI));
    y2 = Math.sin(t)*(a+b*Math.cos(t/2+Math.PI));
    z2 = b*Math.sin(t/2+Math.PI);

    vts.push(x1, y1, z1, x2, y2, z2);
}


for(let i=0; i<30; i++){
    indices.push(i*2, i*2+1, (i+1)*2+1, (i+1)*2+1, (i+1)*2, i*2);
}

const vertices = new Float32Array(vts);


geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(indices), 1))

const material = new THREE.MeshNormalMaterial( {side:THREE.DoubleSide} );

geometry.computeVertexNormals();

const mesh = new THREE.Mesh( geometry, material );
mesh.scale.set(0.2, 0.2, 0.2);

scene.add(mesh);





//ライトの追加
// const light1 = new THREE.DirectionalLight(0xffffff, 1.5);   //指向性ライト
// light1.position.set(5, 10, 7.5);
// scene.add(light1);

// const light2 = new THREE.DirectionalLight(0x00ffff, 3);
// light2.position.set(0, 0, -4);
// scene.add(light2);

// const light3 = new THREE.AmbientLight(0xffffff, 0.2);   //環境光
// scene.add(light3);





// アニメーションループ
animate();

function animate() {

    requestAnimationFrame(animate); //この関数を繰り返し実行する

    let cdist = 2.6 //原点とカメラの距離

    //原点からy軸方向にcdist持ち上げた点に、スマホのオイラー角を適用して原点中心で回転させた移動先の点をv1とする（後にv1をもとにしてカメラ位置を定める）
    //v2は同じく(0, cdist, -0.01)を回転させた移動先, カメラのヘッドの位置を求めるために使用
    let v1 = new THREE.Vector3(0, cdist, 0);
    let v2 = new THREE.Vector3(0, cdist, -0.01);

    let el = new THREE.Euler(beta, alpha, -gamma, 'YXZ');   //スマホのオイラー角（スマホの標準状態でのローカル軸と仮想空間の軸が一致しないため順序、符号が異なる）

    v1.applyEuler(el);
    v2.applyEuler(el);


    //v1, v2の仰角theta、方位角phi
    let theta1, phi1;
    let theta2, phi2;

    theta1 = Math.atan2(v1.y, Math.sqrt(v1.x**2 + v1.z**2));
    phi1 = Math.atan2(v1.z, v1.x) - Math.PI/2;
    theta2 = Math.atan2(v2.y, Math.sqrt(v2.x**2 + v2.z**2));
    phi2 = Math.atan2(v2.z, v2.x) - Math.PI/2;
    

    //仰角、方位角を定数倍して、カメラの重心・ヘッド位置を定める
    let multi = Number(slider1.value)/100;  //角度倍率

    //カメラの重心
    camera.position.x = cdist * Math.cos(theta1*multi) * Math.cos(phi1*multi+Math.PI/2);
    camera.position.y = cdist * Math.sin(theta1*multi);
    camera.position.z = cdist * Math.cos(theta1*multi) * Math.sin(phi1*multi+Math.PI/2);

    camera.lookAt(0, 0, 0); //カメラは原点を見つめる

    //カメラのヘッド
    let cux, cuy, cuz;
    cux = cdist * Math.cos(theta2*multi) * Math.cos(phi2*multi+Math.PI/2);
    cuy = cdist * Math.sin(theta2*multi);
    cuz = cdist * Math.cos(theta2*multi) * Math.sin(phi2*multi+Math.PI/2);


    if(check1.checked){ //上方向ベクトルをカメラの重心からヘッドへの方向とする
        camera.up.x = cux - camera.position.x;
        camera.up.y = cuy - camera.position.y;
        camera.up.z = cuz - camera.position.z;
    }else{  //上方向ベクトルを天井方向に固定する
        camera.up.x = 0;
        camera.up.y = 1;
        camera.up.z = 0;
    }

    
    renderer.render(scene, camera); //レンダリング

}

