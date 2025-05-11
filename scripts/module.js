Hooks.on("renderPermissionConfig", (app, html, data) => {
    const doc = app.document;

    // Create the dropdown HTML
    const connectedUsers = game.users.filter(u => u.active && !u.isGM);
    if (!connectedUsers.length) return;

    const select = document.createElement("select");
    select.className = "connected-players-permission-select";
    select.innerHTML = `
      <option value="">Connected Players</option>
      <option value="LIMITED">Limited</option>
      <option value="OBSERVER">Observer</option>
      <option value="OWNER">Owner</option>
    `;

    select.addEventListener("change", async (e) => {
        const level = e.target.value;
        if (!level) return;

        const updates = {};
        for (const user of connectedUsers) {
            updates[`permission.${user.id}`] = CONST.DOCUMENT_OWNERSHIP_LEVELS[level];
        }

        await doc.update(updates);
        app.render();
    });

    // Insert it below the "All Players" row
    const allPlayersRow = html[0].querySelector("select[name='permission.default']")?.closest(".form-group");
    if (allPlayersRow) {
        const wrapper = document.createElement("div");
        wrapper.className = "form-group connected-players-permission";
        wrapper.appendChild(select);
        allPlayersRow.insertAdjacentElement("afterend", wrapper);
    }
});
