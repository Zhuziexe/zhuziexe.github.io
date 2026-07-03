/**
 * 主题切换核心逻辑（图标：浅色=弯月，深色=太阳）
 */
(function() {
    const body = document.body;
    const STORAGE_KEY = 'theme-preference';

    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        body.classList.remove('dark', 'light');
        if (theme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.add('light');
        }

        // 更新图标
        const icon = document.getElementById('themeIcon');
        if (icon) {
            if (theme === 'dark') {
                // ☀️ 太阳（深色模式用，点击切换到浅色）
                icon.innerHTML = `
                    <circle cx="12" cy="12" r="5"/>
                    <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </g>
                `;
            } else {
                // 🌙 弯弯的新月（浅色模式用，点击切换到深色）
                icon.innerHTML = `
                    <path d="M12 2A9 9 0 0 0 3 11a9 9 0 0 0 9 9 9 9 0 0 0 0-18z" fill="currentColor"/>
                `;
            }
        }
    }

    function getPreferredTheme() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return saved;
        return getSystemTheme();
    }

    function toggleTheme() {
        const currentIsDark = body.classList.contains('dark');
        const newTheme = currentIsDark ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, newTheme);
        applyTheme(newTheme);
    }

    // 监听系统主题变化
    const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');
    systemMedia.addEventListener('change', function(e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    applyTheme(getPreferredTheme());

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
})();