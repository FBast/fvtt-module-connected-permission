![](https://img.shields.io/badge/Foundry-v13-informational)

# Connected Permission

**Connected Permission** is a minimal Foundry VTT module that adds a dropdown menu in the permission configuration window of any document (Journal, Scene, Table, etc.). This menu allows you to quickly assign a permission level to **all currently connected players** in one click, saving you from manually updating each user individually.

## Features

- Adds a **"Connected Players"** dropdown just below "All Players" in the document permission configuration.
- Lets you assign a permission level (`None`, `Limited`, `Observer`, `Owner`) to all currently connected users (excluding GMs).
- Seamlessly integrates with Foundry VTT’s native UI.

## Installation

The module can be installed **directly from within Foundry VTT**:

1. Open **Foundry VTT**.
2. Go to **Configuration & Setup → Add-on Modules**.
3. Click **Install Module**.
4. Search for **Connected Permission**.
5. Click **Install**.

Then activate the module via **Settings → Manage Modules**.

## Usage

In any document’s permission configuration window:

1. Use the **"Connected Players"** dropdown.
2. Select a permission level.
3. The module will automatically apply it to **all connected non-GM players**.

## Compatibility

- Fully compatible with **Foundry VTT v12 and v13**.
- Does not override core behaviors — compatible with most systems and modules.

## License

MIT – Free to use and modify.
