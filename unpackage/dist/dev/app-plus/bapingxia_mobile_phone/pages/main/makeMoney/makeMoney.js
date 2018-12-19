
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"wx-image { width: 100vw; }\n",],undefined,{path:"./pages/main/makeMoney/makeMoney.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/main/makeMoney/makeMoney.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      