const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  selectFolder: () => ipcRenderer.invoke("select-folder"),
  readFile: (filePath) => ipcRenderer.invoke("read-file", filePath),
  writeFile: (filePath, data) =>
    ipcRenderer.invoke("write-file", filePath, data),
  getDefaultFolder: () => ipcRenderer.invoke("get-default-folder"),
  setDefaultFolder: (folder) =>
    ipcRenderer.invoke("set-default-folder", folder),
});
