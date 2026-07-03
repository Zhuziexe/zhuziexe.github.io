/**
 * 主题切换核心逻辑（修复版）
 * 无按钮的页面也能自动应用主题
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

        // 如果页面存在图标元素，更新它（可选）
        const icon = document.getElementById('themeIcon');
        if (icon) {
            if (theme === 'dark') {
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
                icon.innerHTML = `
                    <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
                    <path d="M12 5v2M12 17v2M7.05 7.05l1.41 1.41M15.54 15.54l1.41 1.41M5 12h2M17 12h2M7.05 16.95l1.41-1.41M15.54 8.46l1.41-1.41"/>
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

    // 监听系统主题变化（仅当用户未手动设置时）
    const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');
    systemMedia.addEventListener('change', function(e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ★ 关键：先应用主题（无论有没有按钮）
    applyTheme(getPreferredTheme());

    // 如果页面有切换按钮，绑定点击事件
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
})();