/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bs-indigo": "#6610f2",
        "bs-purple": "#6f42c1",
        "bs-pink": "#d63384",
        "bs-red": "#dc3545",
        "bs-orange": "#fd7e14",
        "bs-yellow": "#ffc107",
        "bs-green": "#198754",
        "bs-teal": "#20c997",
        "bs-cyan": "#0dcaf0",
        "bs-white": "#fff",
        "bs-gray": "#6c757d",
        "bs-gray-dark": "#343a40",
        "bs-gray-100": "#f8f9fa",
        "bs-gray-200": "#e9ecef",
        "bs-gray-300": "#dee2e6",
        "bs-gray-400": "#ced4da",
        "bs-gray-500": "#adb5bd",
        "bs-gray-600": "#6c757d",
        "bs-gray-700": "#495057",
        "bs-gray-800": "#343a40",
        "bs-gray-900": "#212529",
        "bs-primary": "#0d6efd",
        "bs-secondary": "#6c757d",
        "bs-success": "#198754",
        "bs-info": "#0dcaf0",
        "bs-warning": "#ffc107",
        "bs-danger": "#dc3545",
        "bs-light": "#f8f9fa",
        "bs-dark": "#212529",
      },
    },
  },
  plugins: [],
};