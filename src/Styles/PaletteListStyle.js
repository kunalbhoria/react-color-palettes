import sizeHelper from './sizeHelper';
import backgroundSvg from '../background.svg';

export default {

    root: {
        background: `url(${backgroundSvg})`,
        backgroundAttachment: 'fixed',
        minHeight: "100vh",
        // height:'100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'

    },
    container: {
        width: '52%',
        // border:'2px solid red',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        [sizeHelper.down('xl')]: {
            width: '70%'
        },
        [sizeHelper.down('lg')]: {
            width: '70%'
        },
        [sizeHelper.down('md')]: {
            width: '70%'
        },
        [sizeHelper.down('sm')]: {
            width: '60%'
        }
    },
    navBar: {
        display: "flex",
        width: "100%",
        alignItems: 'flex-end',
        justifyContent: "space-between",
        color: 'white',
    },
    title: {
        fontSize: '30px',
        lineHeight: '30px'
    },
    addPaletteLink: {
        fontSize: '16px',
        color: 'white',
        textTransform: 'capitalize'

    },
    palettes: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 31%)',
        gridGap: '2rem',
        margin: '10px 0px',
        boxSizing: 'border-box',
        [sizeHelper.down('lg')]: {
            gridTemplateColumns: 'repeat(3, 32%)',
            gridGap: '1.5rem'
        },
        [sizeHelper.down('md')]: {
            gridTemplateColumns: 'repeat(2, 50%)',
            gridGap: '1.5rem'
        },
        [sizeHelper.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 100%)',
            gridGap: '1rem'
        }
    }

}
