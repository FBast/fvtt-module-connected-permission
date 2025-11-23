import {
    MODULE_ID,
    PERMISSION_MAP,
    getConnectedPlayers,
    getPermissionSelector,
    localizePermission, getDefaultPermissionSelector
} from "./helpers.js";

console.log(`${MODULE_ID} | loaded`);

Hooks.on("renderApplicationV2", (app, html, data) => {

    // Only target the Ownership configuration UI
    if (app.constructor.name !== "DocumentOwnershipConfig") return;

    // Defer to next frame so that all DOM nodes are present
    requestAnimationFrame(() => {

        const root = app.element;
        if (!root) return;

        // Prevent double injection
        if (root.querySelector(".connected-players-permission")) return;

        const connectedUsers = getConnectedPlayers();

        // Build the dropdown
        const select = document.createElement("select");
        select.className = "connected-players-permission-select";
        select.innerHTML = Object.keys(PERMISSION_MAP)
            .map(key => `<option value="${key}">${localizePermission(key)}</option>`)
            .join("");

        // Apply selected permission to all connected players
        select.addEventListener("change", (event) => {
            const key = event.target.value;
            const newValue = PERMISSION_MAP[key];
            if (newValue === undefined) return;

            for (const user of connectedUsers) {
                const selector = getPermissionSelector(user.id);
                const input = root.querySelector(selector);
                if (input) input.value = String(newValue);
            }
        });

        // Locate the "All Players" row
        const defaultInput = root.querySelector(getDefaultPermissionSelector());
        if (!defaultInput) {
            console.warn(`${MODULE_ID} | Could not find default permission selector`);
            return;
        }

        const defaultRow = defaultInput.closest(".form-group");
        if (!defaultRow) {
            console.warn(`${MODULE_ID} | Default row element not found`);
            return;
        }

        // Create the injected row
        const wrapper = document.createElement("li");
        wrapper.className = "form-group connected-players-permission";

        const label = document.createElement("label");
        label.textContent = game.i18n.localize("ConnectedPlayers");

        const fields = document.createElement("div");
        fields.className = "form-fields";
        fields.appendChild(select);

        wrapper.appendChild(label);
        wrapper.appendChild(fields);

        // Insert after the default row
        defaultRow.insertAdjacentElement("afterend", wrapper);

        // Force recalculation of window height
        app.setPosition({ height: "auto" });
    });
});