//4つのCG表示プログラム　共有スクリプト
//マウス・タッチ操作に関する処理

//この共有スクリプトと個別のスクリプト両方で使う変数名の後ろに「_common」と付けている

//#############################################################
//グローバル変数
//#############################################################

let canvasover = false; //trueのときマウスホイール（2本指スライド）でグラフィックを拡大縮小、falseのときページスクロール
let twofinger_common = false;  //タッチパッドで2本指操作しているときtrue, そのとき回転軸を維持する
let mouseIsPressed_common = false; //マウスが押されている（タップ）状態か否か
let pmouseX1=-1, pmouseY1=-1, pmouseX2=-1, pmouseY2=-1; //1フレーム前のマウス（タッチ）座標　1フレーム前タッチされていなければ-1とする
let mousemovementX_common=0, mousemovementY_common=0; //マウス移動量


//#############################################################
//入力や操作に関する処理
//#############################################################


//キャンバス要素
const mycanvas = document.getElementById("canvas1");    //idからhtmlファイルで生成したキャンバス要素を取得（htmlファイルではキャンバスのidを"canvas1"と設定する）


//マウスホイールイベント　カメラのズーム値を変更
document.addEventListener('wheel', function(event) {

    if(canvasover){ //キャンバス操作モードのときカメラズームを調整

        //ズーム値を0.8倍または1.25倍する（0より大きい範囲で変わる）
        // if(event.deltaY > 0) camera1.zoom *= 0.8;    
        // else camera1.zoom *= 1.25;

        //ズーム値を+0.1または-0.1する（値が負になり得る。負のときオブジェクトは鏡像に見える）
        if(event.deltaY > 0) camera1.zoom -= 0.1;
        else camera1.zoom += 0.1;

        camera1.updateProjectionMatrix();
    }

});


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


//マウスイベント
//マウスプレス・リリース時にmouseIsPressed_commonを切り替え
mycanvas.addEventListener('pointerdown',()=>{mouseIsPressed_common = true;});
document.addEventListener('pointerup',()=>{mouseIsPressed_common = false;});
//マウス移動量の更新
mycanvas.addEventListener('pointermove',(event)=>{
    mousemovementX_common = event.movementX;
    mousemovementY_common = event.movementY;
});


//タッチイベント（スマホ画面やタッチパッドの操作）
mycanvas.addEventListener('touchmove', handleTouchMove, false); //タッチデバイスをなぞったときhandleTouchMoveを発火
mycanvas.addEventListener('touchend', handleTouchEnd, false);   //タッチデバイスから指を離したときhandleTouchEndを発火


//タッチデバイスを指でなぞったときの処理
function handleTouchMove(event){

    if(event.touches.length==2){    //指2本で触れている

        twofinger_common = true;

        if(pmouseX1==-1 || pmouseY1==-1 || pmouseX2==-1 || pmouseY2==-1){   //1フレーム前は2本指でないとき、1フレーム前の2点の座標を更新

            pmouseX1 = event.touches[0].clientX;
            pmouseY1 = event.touches[0].clientY;
            pmouseX2 = event.touches[1].clientX;
            pmouseY2 = event.touches[1].clientY;

        }else{  //1フレーム前も2本指のとき、1フレーム前と現在の2点分のタッチ座標を使ってズーム値を変更し、1フレーム前の座標を更新

            let mx1, my1, mx2, my2;
            mx1 = event.touches[0].clientX;
            my1 = event.touches[0].clientY;
            mx2 = event.touches[1].clientX;
            my2 = event.touches[1].clientY;

            let d1, d2; 
            d1 = Math.sqrt((pmouseX1-pmouseX2)**2+(pmouseY1-pmouseY2)**2);  //1フレーム前の2つのタップ箇所の距離
            d2 = Math.sqrt((mx1-mx2)**2+(my1-my2)**2);  //現在の2つのタップ箇所の距離

            //camera1.zoom *= (d2/d1-1) * 1 + 1;  //カメラのズーム量を変更
            camera1.zoom += camera1.zoom * ( d2 / d1 - 1);
            
            camera1.updateProjectionMatrix();

            pmouseX1 = mx1;
            pmouseY1 = my1;
            pmouseX2 = mx2;
            pmouseY2 = my2;

        }

    }else if(event.touches.length==1){  //指1本で触れている、1フレーム前の座標を1点分のみ更新
        pmouseX1 = event.touches[0].clientX;
        pmouseY1 = event.touches[0].clientY;
    }
}


//タッチデバイスから指を離したときの処理
function handleTouchEnd(){
    pmouseX1 = -1;
    pmouseY1 = -1;
    pmouseX2 = -1;
    pmouseY2 = -1;
    twofinger_common = false;
}
