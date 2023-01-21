export const colorTheme = {
  text: "#000",
  textHover: "#ff0000",
};

type ColorThemeKey = keyof typeof colorTheme;

export function getThemeColor(color: string) {
  return colorTheme[color as ColorThemeKey] || "#fff";
}
