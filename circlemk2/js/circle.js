// forked from Matsuyama.Wilav's "canvasタグで図形を描く（扇形）" http://jsdo.it/Matsuyama.Wilav/okCe
onload = function() {
  draw();
};

function draw() {
    var canvas = document.getElementById('fan');
    /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
    if ( ! canvas || ! canvas.getContext ) {
        return false;
    }

    //以下で使う数値ここで全部設定
    // 中心点x、中心点y、半径、傾き、角度、線の色、塗る色、大小、対象
    var whole = canvas.getContext('2d');
    whole.beginPath();
    fan(70, 70, 70, 90, 360, "rgb(0, 0, 0)", "rgb(255, 255, 255)", true, whole);
    var yellow = canvas.getContext('2d');
    yellow.beginPath();
    fan(70, 70, 70, 75, 30, "rgb(255, 255, 0)", "rgb(255, 255, 0)", true, yellow);

    var blue = canvas.getContext('2d');
    blue.beginPath();
    fan(70, 70, 70, 195, 30, "rgb(0, 0, 255)", "rgb(0, 0, 255)", true, blue);

    var red = canvas.getContext('2d');
    red.beginPath();
    fan(70, 70, 70, 315, 30, "rgb(255, 0, 0)", "rgb(255, 0, 0)", true, red);
}

function fan(x, y, radius, tilt, angle, strokeColor, fillColor, bool, target) {
  target.moveTo(x, y);
// arc の startAngle と endAngle はラジアンを使うので、円周率に角度を乗算し、180 で除算する。
// プラス値だと下向きになり、なんか不自然なのでマイナス値。
// endAngle は傾きと角度を加えないとうまく描画されない。
  target.arc(x, y, radius, -(tilt * Math.PI / 180), -((tilt + angle) * Math.PI / 180), bool);
  target.closePath();// 弧を閉じる
  target.strokeStyle = strokeColor;// 線の色をつける
  target.fillStyle = fillColor;// 内部の色を塗る
  target.fill();
  target.stroke();
}
