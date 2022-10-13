import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const dev = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './public',
    }
});

export default dev;