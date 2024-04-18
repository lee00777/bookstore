import express from "express";
import ReactDOMServer from "react-dom/server";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";
import App from "./App";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const store = configureStore({ reducer: rootReducer });

  const htmlForSSR = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const preloadedState = store.getState();
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="A single page with books " />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Bookstore</title>
  </head>
  <body>
    <div id="root">${htmlForSSR}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
    </script>
    <script src="/bundle.js"></script>
  </body>
  </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
