module.exports = {
    'colors': {
        'white': '#ffffff', 
        'black': '#000000', 
        'studio-darkmode': {
            'maincta-457eff': '#457eff', 
            'allwhite-ffffff': '#ffffff', 
        },
        'primary': {
            'contrast': '#ffffff', /* Color that keeps a contrast ratio above AA when XX.main is used as a bg. color */
        },
        'border': {
            'neutral-faded': '#eceef3', 
            'positive': '#007a1c', /* Positive border color. */
            'neutral': '#e6e8ef', /* Default border used for outlining elements. */
            'secondary': '#874ce6', /* Secondary border color. */
            'focus': '#5292ff', /* Border color for focus states. */
            'secondary-faded': '#d9c8f5', /* Secondary positive border color. */
            'primary': '#014ee1', /* Primary border color. */
            'primary-faded': '#d1e2ff', /* Subtle primary border color. */
            'positive-faded': '#b4e9c5', /* Subtle positive border color. */
        },
        'foreground': {
            'neutral': '#000000', /* Neutral foreground color. Use for icons and text. */
            'neutral-faded': '#606981', /* Subtle foreground color. Use for secondary or placeholder text. */
            'primary': '#014ee1', /* Primary foreground color. Use for primary components and text, such as links. */
            'secondary': '#874ce6', /* Primary foreground color. Use for accent components and text. */
            'disabled': '#c6ccdb', /* Use for disabled foreground components and text. */
            'positive': '#007a1c', /* Positive foreground color. Use for positive components and text (i.e. Success message) */
        },
        'background': {
            'page': '#ffffff', /* Primary background for pages. */
            'secondary': '#874ce6', /* Background for components using a secondary (accent) color. */
            'neutral': '#f6f7f9', /* Secondary (alternate) background for pages or other components. */
            'secondary-highlighted': '#a275ea', /* Highlighted background for components using a secondary color, for example, a hover state. */
            'secondary-faded': '#f5f2fd', /* Light background for components used with secondary color. Can be combined with Foreground / Secondary. */
            'primary': '#014ee1', /* Background for primary components. */
            'positive': '#007a1c', /* Background for components used with a positive semantic meaning. */
            'primary-highlighted': '#1062fe', /* Highlighted background for primary components, for example, a hover state. */
            'positive-highlighted': '#35a24f', /* Highlighted background for positive components, for example, a hover state. */
            'primary-faded': '#ecf5ff', /* Light background for primary components. Can be combined with Foreground / Primary. */
            'positive-faded': '#ebfef6', /* Light background for components used with a positive semantic meaning. Can be combined with Foreground / Positive. */
            'blur': '#ffffffcc', /* For use in combination with Blur tokens. */
            'blur-neutral': '#606981cc', /* For use in combination with Blur tokens. */
        },
        'base': {
            'white': '#ffffff', 
            'black': '#000000', 
        },
        'base-green': {
            '300': '#b4e9c5', 
            '700': '#007a1c', 
            '200': '#ebfef6', 
            '500': '#6ac883', 
            '600': '#35a24f', 
        },
        'base-orange': {
            '200': '#ffcc80', 
            '300': '#ffb74d', 
            '500': '#ff9800', 
            '600': '#fb8c00', 
            '700': '#f57c00', 
        },
        'base-blue': {
            '700': '#014ee1', 
            '200': '#ecf5ff', 
            '300': '#d1e2ff', 
            '500': '#5292ff', 
            '600': '#1062fe', 
        },
        'base-gray': {
            '200': '#f6f7f9', 
            '300': '#e6e8ef', 
            '500': '#c6ccdb', 
            '600': '#7f8594', 
            '700': '#606981', 
        },
        'base-purple': {
            '200': '#f5f2fd', 
            '300': '#d9c8f5', 
            '500': '#be9ff0', 
            '600': '#a275ea', 
            '700': '#874ce6', 
        },
        'on-background': {
            'primary': '#ffffff', /* To be used on Primary and Primary Highlighted background colors. */
        },
        'orange': {
            'orange-200': '#ffcc80', 
            'orange-300': '#ffb74d', 
            'orange-500': '#ff9800', 
            'orange-600': '#fb8c00', 
            'orange-700': '#f57c00', 
        },
        'blue': {
            'blue-200': '#ecf5ff', 
            'blue-300': '#d1e2ff', 
            'blue-500': '#5292ff', 
            'blue-600': '#1062fe', 
            'blue-700': '#014ee1', 
        },
        'gray': {
            'gray-200': '#f6f7f9', 
            'gray-300': '#e6e8ef', 
            'gray-500': '#c6ccdb', 
            'gray-600': '#7f8594', 
            'gray-700': '#606981', 
        },
        'green': {
            'green-200': '#ebfef6', 
            'green-300': '#b4e9c5', 
            'green-500': '#6ac883', 
            'green-600': '#35a24f', 
            'green-700': '#007a1c', 
        },
        'purple': {
            'purple-200': '#f5f2fd', 
            'purple-300': '#d9c8f5', 
            'purple-500': '#be9ff0', 
            'purple-600': '#a275ea', 
            'purple-700': '#874ce6', 
        },
        'red': {
            'red-200': '#ef9a9a', 
            'red-300': '#e57373', 
            'red-500': '#f44336', 
            'red-600': '#e53935', 
            'red-700': '#d32f2f', 
        },
    },
    'boxShadow': {
        'Raised': 'var(--shadow-raised)', 
        'Overlay': 'var(--shadow-overlay)', 
    }
}