

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

function appendScriptMFE(src) {
// load script into header as defer
    const script = document.createElement('script');
    script.src = src;
    script.type = 'module';
    document.head.appendChild(script);

    // const script = document.createElement('script');
    // script.src = src;
    // document.head.appendChild(script);
}

const entry = (src) => {
    let htmlString = `
<chat-app>
</chat-app>
`
    // Call the function to append links
    appendFontLinks();
   
    document.body.innerHTML += htmlString
    window.onload = () => {
        appendScriptMFE(src);
    }
    
    
}

entry('http://localhost:5173/main-son.js');

export default entry