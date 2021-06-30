function shadow(options) {
    console.log("execute");
  
    let boxs = document.querySelectorAll(".box");
    boxs.forEach((box) => {
      console.log(box);
      let size = "10px";
      if (options.size) {
        size = options.size + "px";
      }
      box.style.boxShadow = "0 0 " + size + " 1px #ccc";
    });
  }
  
  module.exports.shadow = shadow;
