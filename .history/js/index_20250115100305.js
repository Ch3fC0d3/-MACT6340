// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const app = document.createElement('div');
    app.className = 'container';
    
    const header = document.createElement('h1');
    header.textContent = 'Personal NFT Mint';
    
    const description = document.createElement('p');
    description.textContent = 'A personal NFT minting platform.';
    
    app.appendChild(header);
    app.appendChild(description);
    document.body.appendChild(app);
});
