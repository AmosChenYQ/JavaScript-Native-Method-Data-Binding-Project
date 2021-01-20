export function userInfoTemplate(info) {
    return `
        <h1>Name: <span class="__name">${info.name || "Unknown"}</span></h1>
        <h1>Age: <span class="__age">${info.age || "Unknown"}</span></h1>
        <h1>Email: <span class="__email">${info.email || "Unknown"}</span></h1>
        <h1>Tel: <span class="__tel">${info.tel || "Unknown"}</span></h1>
    `
}