export const withContent = (template, content, data = null) => {
  const root = '<div id="__root"></div>';
  const rootWithData = `<div id="__root">${content}</div>`;

  const script = '<script id="init"></script>';
  const scriptWithState =
    `<script id="init">` +
    `window.__INITIAL_STATE__ = ${JSON.stringify(data)}` +
    `</script>`;

  let html = template.replace(root, rootWithData);

  if (data) html = html.replace(script, scriptWithState);

  return html;
};
