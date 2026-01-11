document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const contractCode = document.getElementById('contract');

    if (copyBtn && contractCode) {
        copyBtn.addEventListener('click', () => {
            const textToCopy = contractCode.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'COPIED!';
                copyBtn.style.background = '#fff';
                copyBtn.style.color = '#000';

                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.removeProperty('background'); // Revert to CSS
                    copyBtn.removeProperty('color');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
  }

// Loading Screen Logic
const loadingScreen = document.getElementById('loading-screen');
const loadingBarFill = document.querySelector('.loading-bar-fill');

if (loadingScreen && loadingBarFill) {
    // When the progress bar animation finishes, hide the loading screen
    loadingBarFill.addEventListener('animationend', () => {
        loadingScreen.classList.add('hidden');
    });
}
});
