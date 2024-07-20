let tubecolor1 = 0x0099ff;  //tubeの色　uカーブ
let tubecolor2 = 0xff3300;  //tubeの色　vカーブ
let surfacecolor = 0xd9ee85;    //曲面の色
let surfacealpha = 0.7; //曲面の透明度
let backgroundcolor = 0xeeeeee; //背景色


let width1, height1;    //キャンバスサイズ

angularvelocity1_common = new THREE.Vector3(0, 0.2, 0);    //オブジェクトの回転軸　大きさが回転速度に比例する　（初めから回転させることも可能）
dummymesh_common.rotation.set(-1.5, 0, 0);

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





//#############################################################
//表示するグラフィック　
//#############################################################

let path, geometry, mesh, mesh_tube_group, index=10;
let cutsurface;
let cuttube;

let tubematerial1 = new THREE.MeshLambertMaterial({ color: tubecolor1, side:THREE.DoubleSide});
let tubematerial2 = new THREE.MeshLambertMaterial({ color: tubecolor2, side:THREE.DoubleSide});

mesh_tube_group = new Array(curve_group.length);
for(let i=0; i<mesh_tube_group.length; i++)   mesh_tube_group[i] = [];

for(let i=0; i<curve_group.length; i++){

    for(let k=0; k<curve_group[i].length; k++){
        let thick = 0.02;
        if(k==0||k==20)    thick = 0.04;
        path = new THREE.CatmullRomCurve3(veclist(curve_group[i][k],1));
        geometry = new THREE.TubeGeometry(path, curve_group[i][k].length, thick, 16, false);
        if(k<=20)   mesh = new THREE.Mesh(geometry, tubematerial1);
        else    mesh = new THREE.Mesh(geometry, tubematerial2);
        mesh_tube_group[i].push(mesh);
    }

}

console.log(mesh_tube_group[0]);

//scene1.add(mesh_tube_group[index]);


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
    //mesh_surface_group[i].scale.set(5,5,5);

}


//scene1.add(mesh_surface_group[index]);
cutsurface = spherecut(mesh_surface_group[index], 3);
scene1.add(cutsurface);


for(let i=0; i<mesh_tube_group[index].length; i++){
    scene1.add(spherecut(mesh_tube_group[index][i], 3));
}

// cuttube = spherecut(mesh_tube_group[index]);
// cuttube.scale.set(5,5,5);
// scene1.add(cuttube);


//#############################################################
//入力や操作に関する処理
//#############################################################


const slider1 = document.getElementById('slider1');

scene1.traverse(()=>{

});

slider1.addEventListener('input',()=>{
    disposeSceneMeshes(scene1);
    index = Math.round(Number(slider1.value)*(mesh_surface_group.length-1));
    scene1.add(spherecut(mesh_surface_group[index], 3));
    for(let i=0; i<mesh_tube_group[index].length; i++){
        scene1.add(spherecut(mesh_tube_group[index][i], 3));
    }
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

    rotateobjects_common(scene1, camera1);

    //カッティングプレーン
    // let planedistance = 18; //原点とカッティングプレーンとの距離
    // renderer1.clippingPlanes = [];  //カッティングプレーンをリセット
    // for(let i=0; i<spherecut100.length; i++){ //100個のプレーン
    //     let vc1 = new THREE.Vector3(spherecut100[i][0], spherecut100[i][1], spherecut100[i][2]);    //data.js内のspherecut100を参照　100×3配列
    //     vc1.applyEuler(dummymesh_common.rotation); //カッティングプレーンをダミーオブジェクトに合わせて回転させる
    //     renderer1.clippingPlanes.push(new THREE.Plane(vc1,planedistance));  //レンダラーにカッティングプレーンを追加
    // }

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





function spherecut(mesh1, r1){

    let vtsa;
    let indexa;

    vtsa = Array.from( mesh1.geometry.attributes.position.array );
    indexa = mesh1.geometry.index.array;
    
    let vtsr = vtsa.concat();
    let indexr = [];

    let lista = [];

    for(let i=0; i<indexa.length; i+=3){

        let x1, x2, x3, y1, y2, y3, z1, z2, z3;
    
        x1 = vtsa[indexa[i]*3];
        y1 = vtsa[indexa[i]*3+1];
        z1 = vtsa[indexa[i]*3+2];
        x2 = vtsa[indexa[i+1]*3];
        y2 = vtsa[indexa[i+1]*3+1];
        z2 = vtsa[indexa[i+1]*3+2];
        x3 = vtsa[indexa[i+2]*3];
        y3 = vtsa[indexa[i+2]*3+1];
        z3 = vtsa[indexa[i+2]*3+2];
    
        
    
        let flag1 = x1*x1 + y1*y1 + z1*z1 <= r1*r1;
        let flag2 = x2*x2 + y2*y2 + z2*z2 <= r1*r1;
        let flag3 = x3*x3 + y3*y3 + z3*z3 <= r1*r1;

        if(((x1-x2)**2 + (y1-y2)**2 + (z1-z2)**2 < r1*r1) && ((x2-x3)**2 + (y2-y3)**2 + (z2-z3)**2 < r1*r1) && ((x3-x1)**2 + (y3-y1)**2 + (z3-z1)**2 < r1*r1)){
        
            if( (flag1&&!flag2&&!flag3) || (!flag1&&flag2&&flag3)){
        
                let ta = f1(x1, y1, z1, x2, y2, z2, r1);
                let tb = f1(x1, y1, z1, x3, y3, z3, r1);
        
                let m1=-1, m2=-1;
        
                for(let j=0; j<lista.length; j++){
                    if( (lista[j][0]==indexa[i]&&lista[j][1]==indexa[i+1]) || (lista[j][0]==indexa[i+1]&&lista[j][1]==indexa[i])){
                        m1 = lista[j][2];
                    }
                    if( (lista[j][0]==indexa[i]&&lista[j][1]==indexa[i+2]) || (lista[j][0]==indexa[i+2]&&lista[j][1]==indexa[i]) ){
                        m2 = lista[j][2];
                    }
                }

                if(m1==-1){
                    m1 = vtsr.length/3;
                    vtsr.push(x1*ta+x2*(1-ta), y1*ta+y2*(1-ta), z1*ta+z2*(1-ta));
                    lista.push([indexa[i], indexa[i+1], m1]);
                }
                if(m2==-1){
                    m2 = vtsr.length/3;
                    vtsr.push(x1*tb+x3*(1-tb), y1*tb+y3*(1-tb), z1*tb+z3*(1-tb));
                    lista.push([indexa[i], indexa[i+2], m2]);
                }
                
                if(flag1)   indexr.push(indexa[i], m1, m2);
                else    indexr.push(m1, indexa[i+1], indexa[i+2], m2, m1, indexa[i+2]);
            }
        
            if( (!flag1&&flag2&&!flag3) || (flag1&&!flag2&&flag3) ){
        
                let ta = f1(x2, y2, z2, x1, y1, z1, r1);
                let tb = f1(x2, y2, z2, x3, y3, z3, r1);
        
                let m1 = -1, m2 = -1;
        
                for(let j=0; j<lista.length; j++){
                    if( (lista[j][0]==indexa[i]&&lista[j][1]==indexa[i+1]) || (lista[j][0]==indexa[i+1]&&lista[j][1]==indexa[i]) ){
                        m1 = lista[j][2];
                    }
                    if( (lista[j][0]==indexa[i+1]&&lista[j][1]==indexa[i+2]) || (lista[j][0]==indexa[i+2]&&lista[j][1]==indexa[i+1])){
                        m2 = lista[j][2];
                    }
                }
        
                if(m1==-1){
                    m1 = vtsr.length/3;
                    vtsr.push(x2*ta+x1*(1-ta), y2*ta+y1*(1-ta), z2*ta+z1*(1-ta));
                    lista.push([indexa[i], indexa[i+1], m1]);
                }
                if(m2==-1){
                    m2 = vtsr.length/3;
                    vtsr.push(x2*tb+x3*(1-tb), y2*tb+y3*(1-tb), z2*tb+z3*(1-tb));
                    lista.push([indexa[i+1], indexa[i+2], m2]);
                }
                
                if(flag2)   indexr.push(m1, indexa[i+1], m2);
                else    indexr.push(indexa[i], m1, indexa[i+2], m1, m2, indexa[i+2]);
            }
        
            if( (!flag1&&!flag2&&flag3) || (flag1&&flag2&&!flag3) ){
                let ta = f1(x3, y3, z3, x1, y1, z1, r1);
                let tb = f1(x3, y3, z3, x2, y2, z2, r1);
        
                let m1 = -1, m2 = -1;
        
                for(let j=0; j<lista.length; j++){
                    if( (lista[j][0]==indexa[i]&&lista[j][1]==indexa[i+2]) || (lista[j][0]==indexa[i+2]&&lista[j][1]==indexa[i])){
                        m1 = lista[j][2];
                    }
                    if( (lista[j][0]==indexa[i+1]&&lista[j][1]==indexa[i+2]) || (lista[j][0]==indexa[i+2]&&lista[j][1]==indexa[i+1])){
                        m2 = lista[j][2];
                    }
                }
        
                if(m1==-1){
                    m1 = vtsr.length/3;
                    vtsr.push(x3*ta+x1*(1-ta), y3*ta+y1*(1-ta), z3*ta+z1*(1-ta));
                    lista.push([indexa[i], indexa[i+2], m1]);
                }
                if(m2==-1){
                    m2 = vtsr.length/3;
                    vtsr.push(x3*tb+x2*(1-tb), y3*tb+y2*(1-tb), z3*tb+z2*(1-tb));
                    lista.push([indexa[i+1], indexa[i+2], m2]);
                }
                
                if(flag3)   indexr.push(m1, m2, indexa[i+2]);
                else   indexr.push(indexa[i], indexa[i+1], m1, m2, m1, indexa[i+1])
            }
        
            if(flag1 && flag2 && flag3){        
                indexr.push(indexa[i], indexa[i+1], indexa[i+2]);
            }

        }
    
    }

    
    function f1(x1, y1, z1, x2, y2, z2, r1){
        let t1, t2;

        t1 = (-(x1*x2) + x2**2 - y1*y2 + y2**2 - z1*z2 + z2**2 - Math.sqrt(-4*(- (r1**2) + x2**2 + y2**2 + z2**2)*(x1**2 - 2*x1*x2 + x2**2 + y1**2 - 2*y1*y2 + y2**2 + z1**2 - 2*z1*z2 + z2**2) + 4*(-(x1*x2) + x2**2 - y1*y2 + y2**2 - z1*z2 + z2**2)**2)/2)/
        (x1**2 - 2*x1*x2 + x2**2 + y1**2 - 2*y1*y2 + y2**2 + z1**2 - 2*z1*z2 + z2**2);

        t2 = (-(x1*x2) + x2**2 - y1*y2 + y2**2 - z1*z2 + z2**2 + Math.sqrt(-4*(- (r1**2) + x2**2 + y2**2 + z2**2)*(x1**2 - 2*x1*x2 + x2**2 + y1**2 - 2*y1*y2 + y2**2 + z1**2 - 2*z1*z2 + z2**2) + 4*(-(x1*x2) + x2**2 - y1*y2 + y2**2 - z1*z2 + z2**2)**2)/2)/
        (x1**2 - 2*x1*x2 + x2**2 + y1**2 - 2*y1*y2 + y2**2 + z1**2 - 2*z1*z2 + z2**2);
        
        if(0<=t1 && t1<=1)  return t1;
        else    return t2;
    }



    let geometry2 = new THREE.BufferGeometry();
    geometry2.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vtsr), 3));
    geometry2.setIndex(new THREE.BufferAttribute(new Uint16Array(indexr),1));
    geometry2.computeVertexNormals();

    return new THREE.Mesh(geometry2, mesh1.material.clone());
}


function disposeSceneMeshes(scene) {
    const meshesToRemove = [];

    scene.traverse((object) => {
        if (object.isMesh) {
            // Dispose geometry
            if (object.geometry) {
                object.geometry.dispose();
            }

            // Dispose materials
            if (object.material) {
                if (Array.isArray(object.material)) {
                    // If material is an array
                    object.material.forEach((material) => {
                        material.dispose();
                    });
                } else {
                    // If material is a single object
                    object.material.dispose();
                }
            }

            // Add the mesh to the list of meshes to remove
            meshesToRemove.push(object);
        }
    });

    // Remove the meshes from the scene after traversal
    meshesToRemove.forEach((mesh) => {
        scene.remove(mesh);
    });
}