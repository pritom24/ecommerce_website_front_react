import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-2r0bx7ys.us.auth0.com"
  clientId="7jwfxn1BhJZwcW42TLItYAQ2jB1yW2R8"
  redirectUri={window.location.origin}
>
    <App />
    </Auth0Provider>,
  document.getElementById("root")
)
