const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('flowDesktop', { version: '1.0.0' });
