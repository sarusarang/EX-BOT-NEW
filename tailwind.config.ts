import type { Config } from "tailwindcss";

export default {
    darkMode: ["class", "dark-mode"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' }
                },
                'spin-slow': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                        'background-size': '200% 200%'
                    },
                    '50%': {
                        'background-position': '100% 50%',
                        'background-size': '200% 200%'
                    }
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'blob': {
                    '0%': { transform: 'scale(1) translate(0px, 0px)' },
                    '33%': { transform: 'scale(1.1) translate(30px, -50px)' },
                    '66%': { transform: 'scale(0.9) translate(-20px, 20px)' },
                    '100%': { transform: 'scale(1) translate(0px, 0px)' }
                },
                'ping': {
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '0'
                    }
                },
                'bounce': {
                    '0%, 100%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
                    }
                },
                'micro-bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-3px)' }
                },
                'micro-pulse': {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.05)' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                },
                'meteor': {
                    "0%": { transform: "translateY(-20%) translateX(-50%)" },
                    "100%": { transform: "translateY(300%) translateX(-50%)" },
                },
               

            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
                'spin-slow': 'spin-slow 10s linear infinite',
                'gradient-x': 'gradient-x 15s ease infinite',
                'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'blob': 'blob 7s infinite',
                'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                'bounce': 'bounce 1s infinite',
                'micro-bounce': 'micro-bounce 2s ease-in-out infinite',
                'micro-pulse': 'micro-pulse 2s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'meteor': "meteor var(--duration) var(--delay) ease-in-out infinite",
               

            },
            transitionDelay: {
                '1500': '1500ms',
                '2000': '2000ms',
                '2500': '2500ms',
                '3000': '3000ms',
                '4000': '4000ms',
                '5000': '5000ms',
            }
        }
    },

    plugins: [require("tailwindcss-animate")],

} satisfies Config;
