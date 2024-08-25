import React, { useState, useEffect } from "react";

function Settings({ onClose }) {
  const [defaultFolder, setDefaultFolder] = useState("");

  useEffect(() => {
    loadDefaultFolder();
  }, []);

  const loadDefaultFolder = async () => {
    const folder = await window.electron.getDefaultFolder();
    setDefaultFolder(folder);
  };

  const handleFolderSelect = async () => {
    const folder = await window.electron.selectFolder();
    if (folder) {
      setDefaultFolder(folder);
      await window.electron.setDefaultFolder(folder);
    }
  };

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <h2>Settings</h2>
        <div className="settings-content">
          <div className="folder-setting">
            <label htmlFor="default-folder">Default Folder:</label>
            <input
              id="default-folder"
              type="text"
              value={defaultFolder}
              readOnly
              placeholder="No folder selected"
            />
            <button
              onClick={handleFolderSelect}
              className="folder-select-button"
            >
              Change Folder
            </button>
          </div>
        </div>
        <div className="settings-actions">
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
