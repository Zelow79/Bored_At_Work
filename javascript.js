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
    mObj.xx += mObj.x;
    mObj.x2 += mObj.x1;
    mObj.xx1 += mObj.xx;
    mObj.xx2 += mObj.xx1;

    document.getElementById("x").innerHTML = format(mObj.x);
    document.getElementById("xx").innerHTML = format(mObj.xx);
    document.getElementById("x1").innerHTML = format(mObj.x1);
    document.getElementById("x2").innerHTML = format(mObj.x2);
    document.getElementById("xx1").innerHTML = format(mObj.xx1);
    document.getElementById("xx2").innerHTML = format(mObj.xx2);
}

function main() {
    setTimeout(() => {
        updateValues();
        main();
    }, 1000);
}

function format(value, maxFracDigits = 3, minFracDigits = 0) {
	const locale = "en-US"
	const notation = (value >= 1e15 || value <= -1e15) ? "scientific" : "compact"
	return Intl.NumberFormat(locale, {
		notation: notation,
		compactDisplay: "short",
		roundingMode: "trunc",
		maximumFractionDigits: maxFracDigits,
		minimumFractionDigits: minFracDigits
	}).format(value).toLocaleLowerCase();
}