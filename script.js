const btns = document.querySelectorAll('[role="tab"]');
const dishes = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) {
    // 1.Скрываем все блюда
    dishes.forEach(elem => {
        elem.classList.add('hidden');
    });
    // 2.Убираем-показываем блюда по кнопкам
    for (let i = 0; i < dishes.length; i++) {
        if (e.currentTarget.id === 'all') {
            dishes[i].classList.remove('hidden');
        } else if (e.currentTarget.id === 'breakfast' && dishes[i].id == 'breakfast') {
            dishes[i].classList.remove('hidden');
        } else if (e.currentTarget.id === 'lunch' && dishes[i].id == 'lunch') {
            dishes[i].classList.remove('hidden');
        } else if (e.currentTarget.id === 'drink' && dishes[i].id == 'drink') {
            dishes[i].classList.remove('hidden');
        } else if (e.currentTarget.id === 'dinner' && dishes[i].id == 'dinner') {
            dishes[i].classList.remove('hidden');
        } 
    }
}

btns.forEach(button => button.addEventListener('click', handleClick));
