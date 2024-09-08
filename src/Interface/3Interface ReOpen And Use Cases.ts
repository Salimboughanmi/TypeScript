/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
interface settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface settings {
  sidebar: boolean;
}

// Contact Page
interface settings {
  external: boolean;
}

let usersettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}