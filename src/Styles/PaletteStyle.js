import sizeHelper from "./sizeHelper";
export default {
    palette: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    },
    paletteColors: {
        backgroundColor: 'white',
        width: '100%',
        height: '90%',
        boxSizing: 'border-box',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    },
    goBackBox: {
        width: '20%',
        height: '50%',
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        '& a': {
            textDecoration: 'none'
        },
        '& span': {
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            padding: '4px 10px',
            fontSize: '14px',
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            lineHeight: '14px',
            userSelect: 'none',
            zIndex: '11'
        },
        [sizeHelper.down('lg')]: {
            width: '25%',
            height: '33.3333%'
        },
        [sizeHelper.down('md')]: {
            width: '50%',
            height: '20%'
        },
        [sizeHelper.down('sm')]: {
            width: '100%',
            height: '10%'
        }
    },
}