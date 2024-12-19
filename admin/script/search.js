function highlightWord(word) {
    if (!word) {
        clearHighlights();
        return;
    }
    const regex = new RegExp(`(${word})`, 'gi'); // Create regular expression
    const textNodes = getTextNodes(document.body);
    textNodes.forEach(node => {
        if (regex.test(node.textContent)) {
            const spanify = node.textContent.split(regex);
            const frag = document.createDocumentFragment();
            let match;
            while (match = regex.exec(node.textContent)) {
                let textBeforeMatch = document.createTextNode(spanify.shift()); //Get the next piece of text
                frag.appendChild(textBeforeMatch) //Append this piece of text
                const span = document.createElement('span');
                span.textContent = match[1];
                span.classList.add('highlight');
                frag.appendChild(span); //Append the highlighted word
            }
            const remainingText = document.createTextNode(spanify.join('')) //Append any leftover text
            frag.appendChild(remainingText)
            node.parentNode.replaceChild(frag, node);
        }
    });
}

function clearHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        const parent = element.parentNode;
        const text = document.createTextNode(element.textContent);
        parent.replaceChild(text, element);
    });
}


function getTextNodes(node) {
    let textNodes = [];
    if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < node.childNodes.length; i++) {
            textNodes.push(...getTextNodes(node.childNodes[i]));
        }
    }
    return textNodes;
}


// Get references to the button and input
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');
const searchInput = document.getElementById('searchWord');

// Event handler for the search button
searchButton.addEventListener('click', () => {
    highlightWord(searchInput.value);
});

// Event handler for the clear button
clearButton.addEventListener('click', () => {
    clearHighlights();
});