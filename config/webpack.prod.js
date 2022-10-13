import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const prod = merge(common, {
    mode: 'production' 
});

export default prod;