export function onRenderBody({ setHtmlAttributes, setBodyAttributes, setHeadComponents }) {
  setHtmlAttributes({
    lang: "en" 
  });

  setBodyAttributes({
      tabIndex: '-1'
  });

  setHeadComponents([
    <meta name="theme-color" content="#ffffff" key="theme-color" />
  ]);
};