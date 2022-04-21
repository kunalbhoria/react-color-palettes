import chroma from "chroma-js"
import sizeHelper from "./sizeHelper"
export default {
    colorBox:{
        width: '20%',
        height: props => props.showMore ? '25%':'50%',
        position: 'relative',
        cursor: 'pointer',
        display:'flex',
        justifyContent:'center',
        '&:hover span':{
            opacity:'1',
            transition: '0.5s'
        },
        [sizeHelper.down('lg')]:{
            width:'25%',
            height: props => props.showMore ? '20%':'33.3333%',

        },
        [sizeHelper.down('md')]:{
            width:'50%',
            height: props => props.showMore ? '10%':'20%',

        },
        [sizeHelper.down('sm')]:{
            width:'100%',
            height: props => props.showMore ? '5%':'10%'
        }
    },
    colorName:{
        color:props=> chroma(props.color).luminance() <= 0.099 ? 'white':'black',
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        margin:'3px',
        fontSize:'14px',
        fontWeight:'500',
        textTransform:'uppercase',
        letterSpacing: '0.7px',
        lineHeight: '14px',
    },
    copyBtn:{
        color:props=> chroma(props.color).luminance() >= 0.6 ? 'black':'white',
        // position: 'absolute',
        // left:'50%',
        // top:'50%',
        // marginTop: '-15px',
        // marginLeft: '-50px',
        alignSelf:'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '4px 6px',
        fontSize: '14px',
        textTransform:'uppercase',
        letterSpacing: '1px',
        lineHeight: '14px',
        userSelect: 'none',
        zIndex: '11',
        opacity:'0',
    },
    moreBtn:{
        color:props=> chroma(props.color).luminance() >= 0.6 ? 'rgba(0,0,0,0.7)':'white',
        position: 'absolute',
        right: '0px',
        bottom: '0px',
        textTransform:'uppercase',
        outline: 'none',
        border: 'none',
        lineHeight: '16px',
        fontSize: '12px',
        padding: '4px 2px 2px 4px',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    overlay:{
        width: '100%',
        height: '100%',
        transform: 'scale(0.1)',
        backgroundColor: 'inherit',
        position: 'absolute',
        opacity: '0',
        color: 'white',
        '&.show':{
            transform: 'scale(50)',
            overflow:'hidden',
            zIndex: '12',
            opacity: '1',
            transition: '0.5s',
            scrollMargin: '0px',
        },
    },
    copyMsg:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        color: 'white',
        width: '100%',
        top: '0px',
        left:'0px',
        right: '0px',
        bottom: '0px',
        opacity: '0',
        zIndex: '-1',
        '&.show':{
        color:props=> chroma(props.color).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)':'white',
        zIndex: '25',
        opacity: '1',
        transition: 'all 0.5s',
        transitionDelay: '0.4s',
        transform: 'scale(2)',   
    },
    '& h2':{
    fontSize: '35px',
    padding: '5px',
    // backgroundColor: props=> chroma(props.color).luminance() >= 0.7 ? 'rgba(0,0,0,0.1)':'rgba(255, 255, 255, 0.5)',
    backgroundColor: props=> chroma(props.color).luminance() >= 0.7 ? chroma(props.color).darken(1):'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    margin: '15px',
    [sizeHelper.down('sm')]:{
        fontSize:'25px'
    }
    },
    '& P':{
        fontSize: '16px',
        [sizeHelper.down('sm')]:{
            fontSize:'12px'
        }
    }
}
}