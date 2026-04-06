// JavaScript code for portfolio functionality

// Example: Function to display portfolio items
function displayPortfolioItems(items) {
    items.forEach(item => {
        console.log(`Title: ${item.title}, Description: ${item.description}`);
    });
}

// Example portfolio items
const portfolioItems = [
    { title: 'Project One', description: 'Description of Project One' },
    { title: 'Project Two', description: 'Description of Project Two' }
];

displayPortfolioItems(portfolioItems);