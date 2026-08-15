const savedTheme= localStorage.getItem('theme');

if (savedTheme === 'dark'){
    document.documentElement.setAttribute ('data-theme', 'dark');
}

const darkbtn = document.getElementById('dark');

darkbtn.addEventListener('click', () => {
    console.log('yea');
    const currentTheme = document.documentElement.getAttribute ('data-theme');
    let targetTheme= 'light';

    if (currentTheme === 'dark'){
    document.documentElement.removeAttribute ('data-theme');
     targetTheme= 'light';
    } else{
    document.documentElement.setAttribute ('data-theme', 'dark');
     targetTheme= 'dark';
    }

    localStorage.setItem('theme', targetTheme);
});