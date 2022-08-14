

// create reducer
const LoaderReduser = (loaderstate, {type, payload}) => {

    switch (type) {
        case 'LOADER_START':
            return 100;

        case 'LODER_END':
            return 0;
            // break;
    
        default:
            return loaderstate;
            // break;
    }
}

// export Reduser
export default LoaderReduser