export function onRenderBody({ setHtmlAttributes, setBodyAttributes }) {
  setHtmlAttributes({
    lang: "en" 
  });

  setBodyAttributes({
      tabIndex: '-1'
  });
};