import chroma from 'chroma-js';

// {
//     paletteName: "Flat UI Colors v1",
//     id: "flat-ui-colors-v1",
//     emoji: "🤙",
//     colors: [
//       { name: "Turquoise", color: "#1abc9c" },
//       { name: "Emerald", color: "#2ecc71" },

//     ]
//   }


function generteColorShade(colorPalette) {

    let colorShadePalette = {
        name: colorPalette.paletteName,
        emoji: colorPalette.emoji,
        id: colorPalette.id,
        colors: {}
    };
    const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    for (let level of levels) {
        colorShadePalette.colors[level] = [];
    }
    for (let color of colorPalette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale) {
            colorShadePalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
            });

        }
    }
    return colorShadePalette;
}

function getRange(hexColor) {
    let end = "#ffffff";
    return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColor) {
    return chroma.scale(getRange(hexColor))
        .mode('lab')
        .colors(numberOfColor);
}

export { generteColorShade };