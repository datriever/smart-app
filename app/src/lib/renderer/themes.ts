export const tableThemes = {
  light: {
    headerBg: '#f4f4f4',             // Light grey background for table headers
    headerFontColor: '#333',         // Dark grey text for headers
    oddRowBg: '#ffffff',            // White background for even rows
    oddRowFontColor: '#333',        // Dark grey text for even rows
    oddRowHover: '#f1f1f1',         // Subtle hover effect for even rows
    evenRowBg: '#f9f9f9',             // Slightly darker grey for odd rows
    evenRowFontColor: '#333',         // Dark grey text for odd rows
    evenRowHover: '#f1f1f1',          // Subtle hover effect for odd rows
    border: '1px solid #ddd',        // Light grey border for cells
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  dark: {
    headerBg: '#151515',                // Dark background for headers
    headerFontColor: '#fff',         // White text for headers
    oddRowBg: '#2b2b2b',            // Dark grey for even rows
    oddRowFontColor: '#e0e0e0',     // Light grey text for even rows
    oddRowHover: '#333',            // Slightly lighter grey for even row hover
    evenRowBg: '#1e1e1e',             // Slightly darker grey for odd rows
    evenRowFontColor: '#e0e0e0',      // Light grey text for odd rows
    evenRowHover: '#333',             // Slightly lighter grey for odd row hover
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    border: '1px solid #444',        // Medium grey border for cells
  },
  green: {
    headerBg: '#4caf50',             // Green background for headers
    headerFontColor: '#ffffff',      // White text for headers
    evenRowBg: '#e8f5e9',            // Very light green for even rows
    evenRowFontColor: '#2e7d32',     // Dark green text for even rows
    oddRowBg: '#f3faf4',             // Slighly greenish white
    oddRowFontColor: '#2e7d32',      // Dark green text for odd rows
    evenRowHover: '#c8e6c9',         // Subtle green highlight for even rows
    oddRowHover: '#c8e6c9',          // Subtle green highlight for odd rows
    border: '1px solid #81c784',     // Soft green border for cells
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  darkGreen: {
    headerBg: '#1b5e20',             // Forest green background for headers
    headerFontColor: '#ffffff',      // White text for headers
    evenRowBg: '#29702d',            // Dark green for even rows
    evenRowFontColor: '#e8f5e9',     // Light green text for even rows
    evenRowHover: '#1b5e20',         // Slightly darker green for even rows
    oddRowBg: '#327f36',             // Slightly lighter green for odd rows
    oddRowFontColor: '#e8f5e9',      // Light green text for odd rows
    oddRowHover: '#2c7a29',          // Slightly darker green for odd rows
    border: '1px solid #4caf50',     // Bright green border for cells
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
}

export const textThemes = {
  light: {
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textColor: '#333',               // Dark grey text color
    linkColor: '#007acc',            // Blue for links
    linkHoverColor: '#005f99',       // Darker blue for link hover
    h1Color: '#000',                 // Black for main headers
    h2Color: '#111',                 // Slightly lighter black for sub-headers
    h3Color: '#222',                 // Dark grey for tertiary headers
    h4Color: '#333',                 // Standard grey for lower headers
    h5Color: '#444',                 // Slightly lighter grey for deeper headers
    h6Color: '#555',                 // Lighter grey for the smallest headers
  },
  dark: {
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textColor: '#e0e0e0',            // Light grey text color
    linkColor: '#1e90ff',            // Bright blue for links
    linkHoverColor: '#00bfff',       // Light blue hover for links
    h1Color: '#ffffff',              // White for main headers
    h2Color: '#e0e0e0',              // Light grey for sub-headers
    h3Color: '#cccccc',              // Medium grey for tertiary headers
    h4Color: '#bbbbbb',              // Slightly lighter grey for lower headers
    h5Color: '#aaaaaa',              // Even lighter grey for deeper headers
    h6Color: '#999999',              // Lightest grey for the smallest headers
    backgroundColor: '#333'
  },
  green: {
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textColor: '#2e7d32',            // Dark green text color
    linkColor: '#66bb6a',            // Bright green for links
    linkHoverColor: '#388e3c',       // Slightly darker green for link hover
    h1Color: '#2e7d32',              // Dark green for main headers
    h2Color: '#388e3c',              // Slightly brighter green for sub-headers
    h3Color: '#43a047',              // Bright green for tertiary headers
    h4Color: '#66bb6a',              // Light green for lower headers
    h5Color: '#81c784',              // Softer green for deeper headers
    h6Color: '#a5d6a7',              // Lightest green for the smallest headers
    backgroundColor: '#f0fff0',
  },
  darkGreen: {
    font: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    textColor: '#e8f5e9',            // Light green text color
    linkColor: '#81c784',            // Soft green for links
    linkHoverColor: '#66bb6a',       // Brighter green for link hover
    h1Color: '#ffffff',              // White for main headers
    h2Color: '#c8e6c9',              // Light green for sub-headers
    h3Color: '#a5d6a7',              // Softer green for tertiary headers
    h4Color: '#81c784',              // Softer green for lower headers
    h5Color: '#66bb6a',              // Bright green for deeper headers
    h6Color: '#388e3c',              // Dark green for the smallest headers
    backgroundColor: '#0d3b13',      // Dark green background for text
  },
};
