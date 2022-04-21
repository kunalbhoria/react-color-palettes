import { generteColorShade } from './generateShades';

function selectPalette(action) {
  const palette = action.allPalette.filter(palette => palette.id == action.paletteId);
  const colorShadedPalette = generteColorShade(palette[0]);
  let singleColorShades = [];
  if (action.task == 'COLOR') {
    for (let shade in colorShadedPalette.colors) {
      singleColorShades = singleColorShades.concat(colorShadedPalette.colors[shade].filter(color => color.id === action.colorId))
    }
    return { ...colorShadedPalette, colors: singleColorShades.slice(1) };
  } else {
    return colorShadedPalette;
  };
}


export { selectPalette };