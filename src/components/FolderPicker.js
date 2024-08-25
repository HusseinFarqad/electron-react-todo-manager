import React from "react";

function FolderPicker({ onFolderSelect }) {
  const handleFolderSelect = async () => {
    const folder = await window.electron.selectFolder();
    if (folder) {
      onFolderSelect(folder);
    }
  };

  return (
    <div>
      <button onClick={handleFolderSelect}>Select Folder</button>
    </div>
  );
}

export default FolderPicker;
