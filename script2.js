//データ生成用

let vts1 = [];

let output = [];
let output2 = [];
let output3 = [];
let output4 = [];

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);

    let vts0 = new Array(41);
    for(let i=0; i<vts0.length; i++)    vts0[i] = new Array(41);

    vts1 = new Array(41);
    for(let i=0; i<vts1.length; i++)    vts1[i] = new Array(41);

    for(let i=0; i<=40; i++) for(let j=0; j<=40; j++){
        let u = Math.PI/40*i - Math.PI/2 + 0.001;
        let v = 2 * Math.PI / 40 * j + 0.001;
        vts0[i][j] = {x:cos(u)*cos(v), y:cos(u)*sin(v), z:sin(u)*cos(v/2), w:sin(u)*sin(v/2)};
    }

    let vts2 = new Array(41);
    for(let i=0; i<vts2.length; i++)    vts2[i] = new Array(41);
    for(let i=0; i<vts2.length; i++)    for(let j=0; j<vts2[i].length; j++) vts2[i][j] = {x:0, y:0, z:0, w:0};

    for(let k=0; k<=20; k++){

        theta = Math.PI/2/20*k;
        if(k==0)    theta += 0.02;
        if(k==20)   theta -= 0.02;

        for(let i=0; i<=40; i++)    for(let j=0; j<=40; j++){
            vts2[i][j].y = vts0[i][j].y;
            vts2[i][j].z = vts0[i][j].z;
            let tmpx = vts0[i][j].x;
            let tmpw = vts0[i][j].w;
            vts2[i][j].x = tmpx*cos(theta) - tmpw*sin(theta);
            vts2[i][j].w = tmpx*sin(theta) + tmpw*cos(theta);
        }

        for(let i=0; i<=40; i++)    for(let j=0; j<=40; j++){
            vts1[i][j] = {x:vts2[i][j].x/(1-vts2[i][j].w), y:vts2[i][j].y/(1-vts2[i][j].w), z:vts2[i][j].z/(1-vts2[i][j].w)};
        }

        output = [];

        for(let i=0; i<=40; i+=2){
            let tmp = [];
            for(let j=0; j<=40; j++){
                tmp.push([vts1[i][j].x.toFixed(4), vts1[i][j].y.toFixed(4), vts1[i][j].z.toFixed(4)]);
            }
            output.push(tmp);
        }

        for(let j=0; j<=40; j+=2){
            let tmp = [];
            for(let i=0; i<=40; i++){
                tmp.push([vts1[i][j].x.toFixed(4), vts1[i][j].y.toFixed(4), vts1[i][j].z.toFixed(4)]);
            }
            output.push(tmp);
        }

        output2.push(output);

        let tmp = [];

        for(let i=0; i<=40; i++)    for(let j=0; j<=40; j++){
            tmp.push(vts1[i][j].x.toFixed(4), vts1[i][j].y.toFixed(4), vts1[i][j].z.toFixed(4));
        }

        output3.push(tmp);
        



    }


    for(let i=0; i<40; i++)    for(let j=0; j<40; j++){
        output4.push(i*41+j, i*41+j+1, (i+1)*41+j, (i+1)*41+j+1, (i+1)*41+j, i*41+j+1);
    }


    output = JSON.stringify(output);
    output = output.split('"').join('');

    output2 = JSON.stringify(output2);
    output2 = output2.split('"').join('');

    //console.log(output2);

    output3 = JSON.stringify(output3);
    output3 = output3.split('"').join('');

    console.log(output3);
    

    //console.log(JSON.stringify(output4));

}

function draw(){
    background(255);

    orbitControl(5,5);

    let sc = 200;

    stroke(0);
    for(let i=0; i<=40; i+=2){
        for(let j=0; j<40; j++){
            line(vts1[i][j].x*sc, vts1[i][j].y*sc, vts1[i][j].z*sc, vts1[i][j+1].x*sc, vts1[i][j+1].y*sc, vts1[i][j+1].z*sc);
        }
    }

    stroke(255, 0, 0);
    for(let j=0; j<=40; j+=2){
        for(let i=0; i<40; i++){
            line(vts1[i][j].x*sc, vts1[i][j].y*sc, vts1[i][j].z*sc, vts1[i+1][j].x*sc, vts1[i+1][j].y*sc, vts1[i+1][j].z*sc);
        }
    }
}