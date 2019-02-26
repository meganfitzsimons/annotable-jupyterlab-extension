import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the annotable-ext extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'annotable-ext',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension annotable-ext is activated!');
  }
};

export default extension;
