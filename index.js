const Prism = require("prismjs")
import "./css/main.css"

let skip = false;
const writeCss = (prefix, result, duration, callBack) => {
  let n = 0;
  const pre = document.querySelector("#code")
  const style = document.querySelector(`#styleTag`)
  setTimeout(function delayed() {
    n += 1
    if(skip) return;
    if (n <= result.length) {
      style.innerHTML = prefix + result.substring(0, n)
      pre.innerHTML = Prism.highlight(prefix + result.substring(0, n), Prism.languages.css);
      pre.scrollTop = pre.scrollHeight
      setTimeout(delayed, duration)
    } else {
      callBack && callBack()
    }

  }, duration)
}

var Kumamon = `/*
    加个动画看看笨熊形成的过程
*/
* {
  transition: all 1s;
}
/*先画他的头*/
.head {
    position: relative;
    width: 160px;
    height: 160px;
    border: 1px solid #000;
    background: #000;
    border-radius: 50%;
  }
/*两只耳朵*/
  .head::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border: 5px solid #000;
    border-radius: 50%;
    top: 4%;
  }

  .head::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border: 5px solid #000;
    border-radius: 50%;
    top: 4%;
    right: 0;
  }
/*两只眼睛*/
  .eye {
    position: absolute;
    width: 28px;
    height: 28px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
  }

  .eye.left {
    right: 92px;
    top: 29%;
  }

  .eye.left::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-top: 3px solid #fff;
    border-radius: 15px 15px 0 0;
    top: -80%;
    left: 8px;
  }

  .eye.left .a {
    position: absolute;
    width: 9px;
    height: 9px;
    border: 3px solid #000;
    border-top-left-radius: 9px;
    border-right: none;
    border-bottom: none;
    background: transparent;
    z-index: 2;
    transform: rotate(90deg);
    top: 8px;
    left: 9px;
  }

  .eye.left .a::before {
    content: '';
    position: absolute;
    width: 9px;
    border: 3px solid #000;
    border-right: none;
    border-bottom: none;
    background: transparent;
    z-index: 2;
    transform: rotate(90deg);
    top: 4px;
    left: -2px;
  }

  .eye.right {
    right: 14px;
    top: 28%;
  }

  .eye.right::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 8px;
    border-radius: 40%;
    top: 14%;
    right: 10px;
    background: #000;
  }

  .eye.right::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-top: 3px solid #fff;
    border-radius: 15px 15px 0 0;
    top: -65%;
  }

  .face::after {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    background: #D44327;
    border-radius: 50%;
    top: 45%;
    left: 12px;
  }

  .face::before {
    content: '';
    position: absolute;
    width: 28px;
    height: 32px;
    background: #D44327;
    border-radius: 50%;
    top: 45%;
    right: -11px;
    transform: rotate(-18deg);
    z-index: 2;
  }

  .mouse {
    position: relative;
    border: 1px solid #000;
    height: 60px;
    width: 80px;
    border-radius: 50%;
    top: 45%;
    left: 58px;
    background: #fff;
  }
  .nose {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 78px;
    left: 100px;
    background: #000;
    z-index: 1;
    border-radius: 40% 100% 40% 70%;
    transform: rotate(-45deg);
  }
  .mouse::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 55px;
    border: 3px solid black;
    background: transparent;
    border-bottom-left-radius: 50px 25px;
    border-top: none;
    border-right: none;
    z-index: 1;
    top: 24px;
    left: 7px;
    transform: rotate(-3deg)
  }

  .mouse .b {
    position: absolute;
    content: '';
    width: 12px;
    height: 16px;
    background: #C34F3F;
    border: 3px solid #000;
    border-radius: 8px;
    transform: rotate(40deg);
    top: 30px;
    left: -4px;
    border-top: none;
  }

  .mouse .b::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #000;
    border-top-left-radius: 40px;
    border-right: none;
    border-bottom: none;
    transform: scaleX(-1) rotate(330deg)
  }

  .body {
    position: relative;
    height: 200px;
    width: 160px;
    background: #000;
    border: 1px solid #000;
    transform: rotate(18deg);
    border-top-right-radius: 40px 40px;
    left: -30px;
    top: -30px;
  }

  .body .hand.left {
    position: absolute;
    width: 55px;
    height: 170px;
    background: #000;
    top: -45%;
    left: -28%;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(-18deg);
    border-top-left-radius: 40px 70px;
    border-top-right-radius: 17px 20px;
    border-bottom-left-radius: 30px 60px;
  }

  .body .hand.left::before {
    position: absolute;
    width: 50px;
    height: 100px;
    background: #000;
    content: '';
    border-radius: 50%;
    top: 60%;
    left: 52%;
  }

  .d::after {
    content: '';
    position: absolute;
    border: 1px solid #000;
    width: 100px;
    height: 100px;
    background: #000;
    border-radius: 50%;
    transform: rotate(18deg);
    z-index: -1;
    right: -8px;
    top: 28%;
  }

  .d::before {
    content: '';
    position: absolute;
    border: 1px solid #000;
    width: 100px;
    height: 100px;
    background: #000;
    transform: rotate(26deg);
    z-index: -1;
    right: 6px;
    top: 40%;
  }

  .hand.right::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 200px;
    background: #000;
    right: -20px;
    top: -30px;
    transform: rotate(-18deg);
    border-bottom-right-radius: 20px 40px;
    border-bottom-left-radius: 20px 40px;
  }
`

writeCss("", Kumamon, 0, () => {
  console.log(1);
})


const btn = document.querySelector("button")
const style = document.querySelector(`#styleTag`)
const pre = document.querySelector("#code")

btn.addEventListener("click", ()=>{
  skip = true;
  style.innerHTML = Kumamon
  pre.innerHTML = Prism.highlight(Kumamon, Prism.languages.css);
})

