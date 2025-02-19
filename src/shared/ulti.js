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

function formatAIExplanation(text) {
    // Replace double asterisks with bold tags
    text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
  
    // Replace newlines followed by a number and a period with a heading
    text = text.replace(/\n(\d+\.)/g, "<h2 id='section-$1'>$1</h2>");
  
    // Replace newlines followed by an asterisk with a list item
    text = text.replace(/\n\*(.*?)\n/g, "<ul><li>$1</li></ul>");  //Handles single line list items
    text = text.replace(/\n\*(.*?)(?=\n\*|\n\n)/gs, "<ul><li>$1</li></ul>"); //Handles multi-line list items
  
    // Replace newlines followed by two newlines with a paragraph
    text = text.replace(/\n\n/g, "<p>");
      text = text.replace(/\n/g, "<br>"); //convert single new lines to <br> to preserve other formatting
    text = text.replace(/<\/p>/g, "</p>"); //close the paragraph tags.
  
    //Add id to headings
    text = text.replace(/<h2 id='section-(.*?)'>(.*?)<\/h2>/g, "<h2 id='section-$1'><a href='#section-$1'>$2</a></h2>");
  
      // Add backslashes for escaped characters
    text = text.replace(/\\/g, "");

    //find the <br/> at the end of sentence and remove it
    text = text.replace(/<br>$/, "");
  
    return text;
  }

export { appendFontLinks, getShadowRoot, checkValidParams, formatAIExplanation };
