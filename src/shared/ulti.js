function appendFontLinks() {
    const fonts = [
        {
            href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
            rel: "stylesheet"
        },
        {
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0",
            rel: "stylesheet"
        }
    ];
    fonts.forEach(font => {
        const link = document.createElement("link");
        link.href = font.href;
        link.rel = font.rel;
        document.head.appendChild(link);
    });
}

function getShadowRoot() {
    const shadowRoot = document.querySelector('chat-app').shadowRoot;
    return shadowRoot;
}

function checkValidParams(){
    const url = new URL(window.location.href);
    //check query param , popup and get value
    const popup = url.searchParams.get('popup');
    return popup === "true"
}

export { appendFontLinks, getShadowRoot, checkValidParams };
