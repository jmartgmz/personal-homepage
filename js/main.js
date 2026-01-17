/**
 * Main application script
 * Initializes all functionality and sets up event listeners
 */

// Track which page is currently active (0 = page 1, 1 = page 2, 2 = page 3)
let currentPage = 0;
const pageConfigs = [page1Config, page2Config, page3Config];
const pageSymbols = ['<', '-', '>'];

/**
 * Generates navigation menu from configuration
 */
function generateNavigation(configToUse = null) {
    const navElement = document.getElementById('navigation');
    if (!navElement) return;
    
    // Use provided config or default based on current page
    const config = configToUse || pageConfigs[currentPage];
    if (!config) return;
    
    // Clear existing navigation
    navElement.innerHTML = '';
    
    // Generate navigation from config
    for (const categoryKey in config) {
        const category = config[categoryKey];
        
        // Create category element
        const categoryElement = document.createElement('ul');
        categoryElement.className = category.color;
        
        // Create category title
        const titleElement = document.createElement('a');
        titleElement.textContent = category.title;
        categoryElement.appendChild(titleElement);
        
        // Create links
        category.links.forEach(link => {
            const linkItem = document.createElement('li');
            const linkAnchor = document.createElement('a');
            linkAnchor.href = link.url;
            linkAnchor.textContent = link.name;
            linkItem.appendChild(linkAnchor);
            categoryElement.appendChild(linkItem);
        });
        
        // Add category to navigation
        navElement.appendChild(categoryElement);
    }
}

/**
 * Cycles through navigation pages
 */
function toggleNavigation() {
    currentPage = (currentPage + 1) % 3;
    generateNavigation();
    
    // Update button appearance to indicate current page
    const toggleBtn = document.getElementById('nav-toggle-btn');
    if (toggleBtn) {
        toggleBtn.textContent = pageSymbols[currentPage];
        toggleBtn.setAttribute('aria-label', 
            `Page ${currentPage + 1} of 3 - Click to switch to page ${((currentPage + 1) % 3) + 1}`
        );
    }
}

/**
 * Sets up search engine based on configuration
 */
function setupSearchEngine() {
    if (!globalSettings.searchEngine) return;
    
    const searchForm = document.querySelector('.search-bar form');
    if (searchForm) {
        searchForm.action = globalSettings.searchEngine.url;
        
        const searchInput = searchForm.querySelector('input[type="text"]');
        if (searchInput) {
            searchInput.name = globalSettings.searchEngine.queryParam;
        }
    }
}

/**
 * Sets up username display if configured
 */
function setupUsername() {
    if (!globalSettings.username) return;
    
    const usernameElement = document.getElementById('username-display');
    if (usernameElement) {
        usernameElement.textContent = globalSettings.username;
    }
}

/**
 * Initialize the application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Generate navigation from config
    generateNavigation();
    
    // Set up search engine
    setupSearchEngine();
    
    // Set up username if provided
    setupUsername();
    
    // Initialize clock
    updateClock();
    
    // Initialize scaling
    updateScale();
    
    // Set up navigation toggle button
    const toggleBtn = document.getElementById('nav-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleNavigation);
    }
    
    // Add window resize event listener
    window.addEventListener('resize', updateScale);

    // Add keyboard event listener for navigation and search focus
    // Add keyboard event listener for navigation and search focus
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            toggleNavigation();
        } else if (e.key === 'ArrowUp') {
            // Focus the search bar input
            const searchInput = document.querySelector('.search-bar input[type="text"]');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
});