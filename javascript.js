const rowCount = 2,
    mObj = {
        x: 0,
        x1: 0,
        x2: 0,
        xx: 0,
        xx1: 0,
        xx2: 0
    };

function updateValues() {
    if (mObj.x < 1) mObj.x++;
    mObj.x1 += mObj.x;
    mObj.xx = mObj.x + mObj.x;
    mObj.x2 += mObj.x1;
    mObj.xx1 += mObj.xx;
    mObj.xx2 += mObj.xx1;

    document.getElementById("x").innerHTML = mObj.x;
    document.getElementById("xx").innerHTML = mObj.xx;
    document.getElementById("x1").innerHTML = mObj.x1;
    document.getElementById("x2").innerHTML = mObj.x2;
    document.getElementById("xx1").innerHTML = mObj.xx1;
    document.getElementById("xx2").innerHTML = mObj.xx2;

    //Object.entries(mObj).forEach(([key, val]) => console.log(`${key}:${val}`));
}

function main() {
    setTimeout(() =>{
        updateValues();
        //alert('success');
        main();
    }, 1000);
}