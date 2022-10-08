import { atom } from "nanostores"

export const theme = atom("")

function setHtmlClassName() {
  if (theme.get() === "dark") {
    document.querySelector("html")?.classList.add("dark")
  } else {
    document.querySelector("html")?.classList.remove("dark")
  }
}

export function initWithLocalStorage() {
  const themeFromStorage = localStorage.getItem("astro-blog@theme") || "light"

  theme.set(themeFromStorage)
}

export function toggleTheme() {
  if (theme.get() === "dark") {
    theme.set("light")
  } else {
    theme.set("dark")
  }

  // setLocalStorage

  localStorage.setItem("astro-blog@theme", theme.get())

  // html

  setHtmlClassName()
}
