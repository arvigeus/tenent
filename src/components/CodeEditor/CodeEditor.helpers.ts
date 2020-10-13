export const getWorkerUrl = (_moduleId, label) => {
  switch (label) {
    case "json":
      return "/_next/static/json.worker.js";
    case "css":
      return "/_next/static/css.worker.js";
    case "html":
      return "/_next/static/html.worker.js";
    case "typescript":
    case "javascript":
      return "/_next/static/ts.worker.js";
    default:
      return "/_next/static/editor.worker.js";
  }
};
