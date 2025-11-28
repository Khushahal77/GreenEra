// Small theme helper to centralize reading/writing theme and applying the
// `dark` class to the root element. Using this from non-React code is safe.
const STORAGE_KEY = 'theme';

export function getSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

export function saveTheme(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch (e) {
    // ignore
  }
}

export function applyTheme(value) {
  const root = typeof document !== 'undefined' ? document.documentElement : null;
  if (!root) return;
  if (value === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

export function getInitialTheme() {
  const saved = getSavedTheme();
  if (saved === 'dark' || saved === 'light') return saved;

  // Fallback to OS preference
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  }

  return 'light';
}

export function toggleTheme() {
  const current = getSavedTheme() || getInitialTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  saveTheme(next);
  applyTheme(next);
  return next;
}

// Ensure theme is applied immediately when this module is imported in the browser
if (typeof window !== 'undefined') {
  try {
    const initial = getSavedTheme() || getInitialTheme();
    applyTheme(initial);
  } catch (e) {
    // ignore
  }
}

export default {
  getSavedTheme,
  saveTheme,
  applyTheme,
  getInitialTheme,
  toggleTheme,
};
