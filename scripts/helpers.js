export const MODULE_ID = "connected-permission";

export const PERMISSION_MAP = {
    DEFAULT: -20,
    INHERIT: -1,
    NONE: 0,
    LIMITED: 1,
    OBSERVER: 2,
    OWNER: 3
};

export function getConnectedPlayers() {
    return game.users.filter(u => u.active && !u.isGM);
}

export function localizePermission(key) {
    return game.i18n.localize(`Permission${key}`);
}

export function getDefaultPermissionSelector() {
    return `select[name="default"]`;
}

export function getPermissionSelector(userId) {
    return `select[name="${userId}"]`;
}