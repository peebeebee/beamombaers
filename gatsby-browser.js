import "./src/styles/global.scss";


// Logs when the client route changes
export function onRouteUpdate() {
  console.log('onRouteUpdate');
  document.body.focus();
}

export function onRenderBody({ setBodyAttributes }){
  setBodyAttributes({
      tabIndex: '-1'
    });
};