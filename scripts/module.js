console.log("Connected Permission | loaded");

Hooks.on("renderDocumentOwnershipConfig", (app, html, data) => {
    if (html[0].querySelector(".connected-players-permission")) return;

    const connectedUsers = game.users.filter(u => u.active && !u.isGM);
    if (!connectedUsers.length) return;

    const select = document.createElement("select");
    select.className = "connected-players-permission-select";
    select.innerHTML = `
        <option value="DEFAULT">${game.i18n.localize("PL1E.PermissionDefault")}</option>
        <option value="NONE">${game.i18n.localize("PL1E.PermissionNone")}</option>
        <option value="LIMITED">${game.i18n.localize("PL1E.PermissionLimited")}</option>
        <option value="OBSERVER">${game.i18n.localize("PL1E.PermissionObserver")}</option>
        <option value="OWNER">${game.i18n.localize("PL1E.PermissionOwner")}</option>
    `;

    select.addEventListener("change", (e) => {
        const selected = e.target.value;
        if (!selected) return;

        const valueMap = {
            "DEFAULT": -20,
            "NONE": 0,
            "LIMITED": 1,
            "OBSERVER": 2,
            "OWNER": 3
        };

        const newValue = valueMap[selected];
        if (newValue === undefined) return;

        for (const user of connectedUsers) {
            const input = html[0].querySelector(`select[name='${user.id}']`);
            if (input) input.value = String(newValue);
        }
    });

    const allPlayersRow = html[0].querySelector("select[name='default']")?.closest(".form-group");
    if (allPlayersRow) {
        const wrapper = document.createElement("div");
        wrapper.className = "form-group connected-players-permission";

        const label = document.createElement("label");
        label.textContent = game.i18n.localize("PL1E.ConnectedPlayers");

        wrapper.appendChild(label);
        wrapper.appendChild(select);
        allPlayersRow.insertAdjacentElement("afterend", wrapper);

        app.setPosition({ height: "auto" });
    }
});
