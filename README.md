![](https://img.shields.io/badge/Foundry-v12-informational)
# Connected Permission

**Connected Permission** is a minimal Foundry VTT module that adds a dropdown menu in the permission configuration window of any document (Journal, Scene, Table, etc.). This menu allows you to quickly assign a permission level to **all currently connected players** in one click, saving you from manually updating each user individually.

## Features

- Adds a **"Connected Players"** dropdown just below "All Players" in the document permission configuration.
- Lets you assign a permission level (`None`, `Limited`, `Observer`, `Owner`) to all currently connected users (excluding GMs).
- Seamlessly integrates with Foundry VTT’s native UI.

## Installation

1. Download and unzip the content of the latest release into your "FoundryVTT\Data\modules" folder.
2. Activate the module via `Settings > Manage Modules`.
3. Open the permission settings of any document to see the new "Connected Players" dropdown.

## Usage

In a document’s permission configuration window:
1. Use the "Connected Players" dropdown.
2. Select a permission level.
3. The module will automatically apply it to **all connected non-GM players**.

## Compatibility

- Foundry VTT v11 and v12.
- Does not override core behaviors – compatible with most systems and modules.

## License

MIT – Free to use and modify.
