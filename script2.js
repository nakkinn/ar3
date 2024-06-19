//データ生成用

let vts1 = [];

let output = [];


function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);

    let vts0 = new Array(21);
    for(let i=0; i<vts0.length; i++)    vts0[i] = new Array(21);

    vts1 = new Array(21);
    for(let i=0; i<vts1.length; i++)    vts1[i] = new Array(21);

    for(let i=0; i<=20; i++) for(let j=0; j<=20; j++){
        let u = Math.PI/20*i - Math.PI/2 + 0.001;
        let v = 2 * Math.PI / 20 * j + 0.001;
        vts0[i][j] = {x:cos(u)*cos(v), y:cos(u)*sin(v), z:sin(u)*cos(v/2), w:sin(u)*sin(v/2)};
    }

    //4次元回転
    let theta = PI/4;
    for(let i=0; i<=20; i++)    for(let j=0; j<=20; j++){
        let tmpx = vts0[i][j].x;
        let tmpw = vts0[i][j].w;
        vts0[i][j].x = tmpx*cos(theta) - tmpw*sin(theta);
        vts0[i][j].w = tmpx*sin(theta) + tmpw*cos(theta);
    }

    for(let i=0; i<=20; i++)    for(let j=0; j<=20; j++){
        vts1[i][j] = {x:vts0[i][j].x/(1-vts0[i][j].w), y:vts0[i][j].y/(1-vts0[i][j].w), z:vts0[i][j].z/(1-vts0[i][j].w)};
    }


    for(let i=0; i<=20; i++){
        let tmp = [];
        for(let j=0; j<=20; j++){
            tmp.push([vts1[i][j].x.toFixed(4), vts1[i][j].y.toFixed(4), vts1[i][j].z.toFixed(4)]);
        }
        output.push(tmp);
    }

    for(let j=0; j<=20; j++){
        let tmp = [];
        for(let i=0; i<=20; i++){
            tmp.push([vts1[i][j].x.toFixed(4), vts1[i][j].y.toFixed(4), vts1[i][j].z.toFixed(4)]);
        }
        output.push(tmp);
    }


    output = JSON.stringify(output);
    output = output.split('"').join('');

    console.log(output);

}

function draw(){
    background(255);

    orbitControl(5,5);

    let sc = 200;

    stroke(0);
    for(let i=0; i<=20; i++){
        for(let j=0; j<20; j++){
            line(vts1[i][j].x*sc, vts1[i][j].y*sc, vts1[i][j].z*sc, vts1[i][j+1].x*sc, vts1[i][j+1].y*sc, vts1[i][j+1].z*sc);
        }
    }

    stroke(255, 0, 0);
    for(let j=0; j<=20; j++){
        for(let i=0; i<20; i++){
            line(vts1[i][j].x*sc, vts1[i][j].y*sc, vts1[i][j].z*sc, vts1[i+1][j].x*sc, vts1[i+1][j].y*sc, vts1[i+1][j].z*sc);
        }
    }
}