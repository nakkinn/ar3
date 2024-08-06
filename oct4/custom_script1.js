
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
addObjectFromGC1C(['[[0, 0, 0], [-0.235702, -0.471405, -0.471405], [-0.235702, -0.471405, 0.471405], [-0.235702, 0.471405, -0.471405], [-0.235702, 0.471405, 0.471405], [0.235702, -0.471405, -0.471405], [0.235702, -0.471405, 0.471405], [0.235702, 0.471405, -0.471405], [0.235702, 0.471405, 0.471405], [-0.471405, -0.235702, -0.471405], [-0.471405, -0.235702, 0.471405], [-0.471405, 0.235702, -0.471405], [-0.471405, 0.235702, 0.471405], [-0.471405, -0.471405, -0.235702], [-0.471405, -0.471405, 0.235702], [-0.471405, 0.471405, -0.235702], [-0.471405, 0.471405, 0.235702], [0.471405, -0.235702, -0.471405], [0.471405, -0.235702, 0.471405], [0.471405, 0.235702, -0.471405], [0.471405, 0.235702, 0.471405], [0.471405, -0.471405, -0.235702], [0.471405, -0.471405, 0.235702], [0.471405, 0.471405, -0.235702], [0.471405, 0.471405, 0.235702]]',[[[4, 11, 14], [11, 5, 14], [14, 18, 4], [4, 23, 11], [14, 5, 18], [5, 11, 23], [4, 18, 23], [5, 23, 18]], [[16, 9, 2], [7, 9, 16], [9, 21, 2], [16, 2, 20], [9, 7, 21], [20, 7, 16], [20, 2, 21], [20, 21, 7]], [[10, 15, 1], [10, 8, 15], [10, 1, 22], [19, 1, 15], [22, 8, 10], [19, 15, 8], [1, 19, 22], [22, 19, 8]], [[3, 13, 12], [6, 12, 13], [3, 17, 13], [24, 3, 12], [6, 13, 17], [24, 12, 6], [17, 3, 24], [6, 17, 24]]],[[4, 11], [11, 14], [4, 14], [5, 11], [5, 14], [14, 18], [4, 18], [4, 23], [11, 23], [5, 18], [5, 23], [18, 23], [9, 16], [2, 9], [2, 16], [7, 9], [7, 16], [9, 21], [2, 21], [2, 20], [16, 20], [7, 21], [7, 20], [20, 21], [10, 15], [1, 15], [1, 10], [8, 10], [8, 15], [1, 22], [10, 22], [1, 19], [15, 19], [8, 22], [8, 19], [19, 22], [3, 13], [12, 13], [3, 12], [6, 12], [6, 13], [3, 17], [13, 17], [3, 24], [12, 24], [6, 17], [6, 24], [17, 24]]],[0xff7700,0x0077ff,0x77ff00,0xff40cc,0xf4ff1f,0xff2200,0x2200cc,0x00aa22,0x7700ff,0xaaaaaa],
0xdddddd, 3.6, 0.006, [1.27, 0.97, -0.35]);



//レンダリング（必須）
animateC();
