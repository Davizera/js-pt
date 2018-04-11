window.onload = function(){
  // objeto windows e navigator
  console.log(window.screen.width);//mostra a largura
  console.log(window.screen.availWidth);//mostra a largura
  console.log(document.body.clientWidth);//mostra a largura utilizada
  console.log(document.body.clientHeight);
  console.log(navigator.appName);
  console.log(navigator.appCodeName);
  console.log(navigator.product);
  console.log(navigator.appVersion);
  console.log(navigator.userAgent);
  console.log(navigator.platform)
  window.onresize = function(){
    console.log(document.body.clientWidth);//mostra a largura utilizada

  };
};
