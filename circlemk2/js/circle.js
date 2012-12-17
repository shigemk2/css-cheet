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
    var limeGreen = canvas.getContext('2d');
    limeGreen.beginPath();
    fan(70, 70, 70, 105, 30, "rgb(0, 255, 128)", "rgb(0, 255, 128)", true, limeGreen);
    var green =canvas.getContext('2d');
    green.beginPath();
    fan(70, 70, 70, 135, 30, "rgb(0, 255, 0)", "rgb(0, 255, 0)", true, green);
    var aqua =canvas.getContext('2d');
    aqua.beginPath();
    fan(70, 70, 70, 165, 30, "rgb(0, 128, 128)", "rgb(0, 128, 128)", true, aqua);
    var blue = canvas.getContext('2d');
    blue.beginPath();
    fan(70, 70, 70, 195, 30, "rgb(0, 0, 255)", "rgb(0, 0, 255)", true, blue);
    var bluishPurple = canvas.getContext('2d');
    bluishPurple.beginPath();
    fan(70, 70, 70, 225, 30, "rgb(128, 0, 255)", "rgb(128, 0, 255)", true, bluishPurple);
    var purple =canvas.getContext('2d');
    purple.beginPath();
    fan(70, 70, 70, 255, 30, "rgb(128, 0, 128)", "rgb(128, 0, 128)", true, purple);
    var violet =canvas.getContext('2d');
    violet.beginPath();
    fan(70, 70, 70, 285, 30, "rgb(255, 0, 128)", "rgb(255, 0, 128)", true, violet);
    var red = canvas.getContext('2d');
    red.beginPath();
    fan(70, 70, 70, 315, 30, "rgb(255, 0, 0)", "rgb(255, 0, 0)", true, red);
    var redOrange = canvas.getContext('2d');
    redOrange.beginPath();
    fan(70, 70, 70, 345, 30, "rgb(255, 64, 0)", "rgb(255, 64, 0)", true, redOrange);
    var orange = canvas.getContext('2d');
    orange.beginPath();
    fan(70, 70, 70, 15, 30, "rgb(255, 128, 0)", "rgb(255, 128, 0)", true, orange);
    var yellowOrange = canvas.getContext('2d');
    yellowOrange.beginPath();
    fan(70, 70, 70, 45, 30, "rgb(255, 192, 0)", "rgb(255, 192, 0)", true, yellowOrange);

    var miniWhole = canvas.getContext('2d');
    miniWhole.beginPath();
    fan(70, 70, 50, 0, 360, "rgb(255, 255, 255)", "rgb(255, 255, 255)", true, miniWhole);

    // 参考にしたコード
    // http://jsdo.it/phi/9cRG
    // http://hakuhin.jp/as/rotation.html
    /*
     * 定数
     */
    var SCREEN_WIDTH = 600;
    var SCREEN_HEIGHT= 300;
    var arrow = tm.graphics.Canvas("#arrow");
    //幅, 高さを指定
    arrow.resize(SCREEN_WIDTH, SCREEN_HEIGHT);
    //画面にフィットさせる
    arrow.fitWindow();
    arrow.drawArrow(70, 70, 70, 20);
    arrow.drawArrow(70, 70, 70, 120);
    arrow.drawArrow(70, 70, 110, 100)
    arrow.drawArrow(70, 70, 30, 40);
    arrow.drawArrow(70, 70, 30, 100);
    arrow.drawArrow(70, 70, 110, 40);
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
