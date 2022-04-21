import React, { useState } from "react";
import ColorBox from "./ColorBox";
import PaletteHeader from "./PaletteHeader";
import PaletteFooter from "./PaletteFooter";
import SnackBar from "./SnackBar";

import { useParams } from "react-router-dom";
import { selectPalette } from "./hooks/selectPalette";

import { withStyles } from "@mui/styles";
import styles from './Styles/PaletteStyle';

function Palette({ palettes, classes }) {

    let params = useParams();
    const { name, id, emoji, colors } = selectPalette({ task: 'PALETTE', paletteId: params.paletteId, allPalette: palettes });


    const [colorFormat, setColorFormat] = useState('rgb')
    const [colorShade, setColorShade] = useState(400);
    const [snackBar, setSnackBar] = useState({ open: false });

    const changeShade = (shade) => {
        setColorShade(shade)
    };
    const changeFormat = (e) => {
        setSnackBar({ open: true });
        setColorFormat(e.target.value);
    }
    const handleSnackBarClose = () => {
        setSnackBar({ open: false });
    }

    return (<div className={classes.palette}>

        <PaletteHeader
            colorShade={colorShade}
            changeShade={changeShade}
            colorFormat={colorFormat}
            changeFormat={changeFormat}
            showSlider={true}
        />

        <section className={classes.paletteColors}>
            {colors[colorShade].map(color => <ColorBox
                key={color.name}
                color={color[colorFormat]}
                name={color.name}
                id={color.id}
                showMore={true}
                moreLink={`/palette/${id}/${color.id}`}
            />)}
        </section>

        <SnackBar
            snackBar={snackBar}
            handleSnackBarClose={handleSnackBarClose}
            colorFormat={colorFormat}
        />
        <PaletteFooter name={name} emoji={emoji} />
    </div>)
}

export default withStyles(styles)(Palette);