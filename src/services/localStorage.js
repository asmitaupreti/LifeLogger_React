export function getInitialState() {
  const appState = localStorage.getItem("appState");
  return appState ? JSON.parse(appState) : {};
}
