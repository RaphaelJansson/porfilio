function changeTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.style.setProperty("--bg-color", "#242424");
    root.style.setProperty("--yellow-color", "#FAC734");
    root.style.setProperty("--grey-color", "#464644");
    root.style.setProperty("--main-color", "#ecf0f1");
    root.style.setProperty("--point-color", "#ecf0f1");
    root.style.setProperty("--title-color", "#FAC734");
    root.style.setProperty("--sub-title-color", "#ecf0f1");
  } else {
    root.style.setProperty("--bg-color", "#FFFFFF");
    root.style.setProperty("--yellow-color", "#FAC734");
    root.style.setProperty("--grey-color", "#464644");
    root.style.setProperty("--main-color", "#ecf0f1");
    root.style.setProperty("--point-color", "#ecf0f1");
    root.style.setProperty("--title-color", "#FAC734");
    root.style.setProperty("--sub-title-color", "#ecf0f1");
  }
}
