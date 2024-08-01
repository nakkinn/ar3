let t1 = 1;

let disp1 = new Array(index_vcurve2.length);
for(let i=0; i<disp1.length; i++)    disp1[i] = 1; 

console.log(disp1.length);

const slider1 = document.getElementById("slider1");
slider1.addEventListener("input",()=>{
    t1 = Number(slider1.value);

    for(let j=0; j<disp1.length; j++){

        if( 1-j/7.6 < t1 ){
            disp1[j] = true;
        }else{
            disp1[j] = false;
        }


    }

    updateObjectC();
});


//オブジェクトの回転ベクトルを設定（ベクトルの向き：回転軸, ベクトルの大きさ：回転速度に比例）
setAngularVelocityC(0, 0, 0);     


//キャンバスの背景色
setBackgroundColorC(0xeeeeee);   


// カメラ（必須）
addPerspectiveCameraC({fov:40});  //投射投影カメラ
//addOrthographicCameraC();   //平行投影カメラ


//環境光ライト
addAmbientLightC(0xffffff, 0.5);   //第1引数：光の色, 第2引数：光の強さ


//指向性ライト
addDirectionalLightC(0xffffff, 0.7, 1, 1, 1);   //第1引数：光の色, 第2引数：光の強さ, 第3,4,5引数：ライト位置(x,y,z), (x,y,z)から(0,0,0)に向かう方向にライトを当てる
addDirectionalLightC(0xffffff, 0.3, -1, -2, 1);


//オブジェクトの追加
addTubeC(vts1, index_boundary1, 0.03, {color:0x0044ff});

addTubeC(vts1, index_ucurve1, 0.015, {color:0xff4400});

for(let i=0; i<index_vcurve2.length; i++)   addTubeC(vts2, [index_vcurve2[i]], 0.015, {color:0xffffff, visible:'disp1['+i+']'});


addMeshC(vts1, index1, {color:0xd9ee85, opacity:0.8});




//レンダリング（必須）
animateC();
