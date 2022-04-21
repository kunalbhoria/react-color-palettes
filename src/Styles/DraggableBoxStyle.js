import sizeHelper from "./sizeHelper"

export default{
    root: {
        height: '25%',
        width: '20%',
        position: 'relative',
        '&:hover span': {
            color: 'rgba(255,255,255,1)',
            transform: 'scale(1.2)'
        },
        [sizeHelper.down('lg')]:{
            width:'25%',
            height:'20%'
        },
        [sizeHelper.down('md')]:{
            width:'50%',
            height:'10%'
        },
        [sizeHelper.down('sm')]:{
            width:'100%',
            height:'5%'
        }
    },
    boxContent: {
        position: 'absolute',
        boxSizing: 'border-box',
        bottom: '0px',
        textTransform: 'uppercase',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 'content',
        fontSize: '14px',
        fontWeight: '500',
        padding: '0px 5px',
        letterSpacing: '0.7px',
        lineHeight: '14px',
        color: 'rgba(0,0,0,0.7)'
    },
    deleteBtn: {
        transition: 'all 0.3s ease-in-out'
    }
}