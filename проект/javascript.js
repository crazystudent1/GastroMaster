// === ВЕЛИКА БАЗА ДАНИХ (35 РЕЦЕПТІВ) ===
const recipesData = [
    // --- УКРАЇНСЬКА КУХНЯ ---
    {
        id: 1,
        title: "Український Борщ",
        image: "img/borshch.jpg",
        time: "90 хв",
        calories: "350 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Буряк", "Картопля", "Морква", "Капуста", "М'ясо (свинина)", "Сметана", "Томатна паста"],
        instructions: "Зваріть м'ясний бульйон. Наріжте овочі. Обсмажте буряк з томатом. Додайте картоплю та капусту в бульйон. В кінці додайте зажарку та зелень."
    },
    {
        id: 7,
        title: "Сирники домашні",
        image: "img/syrniki.jpg",
        time: "25 хв",
        calories: "300 ккал",
        category: "breakfast",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Сир кисломолочний", "Борошно", "Яйця", "Цукор", "Ваніль", "Сметана"],
        instructions: "Змішайте сир з яйцем та цукром. Додайте трохи борошна. Сформуйте кульки, приплюсніть їх і обсмажте на сковороді до золотистої скоринки."
    },
    {
        id: 8,
        title: "Вареники з картоплею",
        image: "img/vareniky_z_kartopleu.jpg",
        time: "60 хв",
        calories: "450 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Борошно", "Вода", "Картопля", "Цибуля", "Сало/Олія"],
        instructions: "Замісіть тісто. Зробіть пюре з картоплі. Зліпіть вареники і варіть у підсоленій воді 5-7 хвилин. Подавайте зі смаженою цибулею."
    },
    {
        id: 9,
        title: "Деруни зі сметаною",
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "40 хв",
        calories: "520 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Картопля", "Цибуля", "Яйце", "Борошно", "Сіль", "Олія"],
        instructions: "Натріть картоплю та цибулю на дрібній тертці. Додайте яйце та борошно. Смажте на розігрітій олії як оладки."
    },
    {
        id: 10,
        title: "Банош з бринзою",
        image: "img/banysh.jpg",
        time: "30 хв",
        calories: "600 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Кукурудзяна крупа", "Сметана", "Бринза", "Шкварки", "Гриби"],
        instructions: "Зваріть кукурудзяну кашу на сметані. Подавайте гарячою, посипавши бринзою та шкварками."
    },
    {
        id: 11,
        title: "Котлета по-київськи",
        image: "img/kotleta_po_kyivsky.jpg",
        time: "50 хв",
        calories: "700 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Куряче філе", "Вершкове масло", "Кріп", "Панірувальні сухарі", "Яйця", "Олія для фритюру"],
        instructions: "Загорніть шматочок масла з кропом у філе. Двічі запаніруйте в яйці та сухарях. Смажте у фритюрі."
    },

    // --- ЄВРОПЕЙСЬКА КУХНЯ ---
    {
        id: 2,
        title: "Паста Карбонара",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "20 хв",
        calories: "500 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Спагеті", "Бекон", "Яйця", "Пармезан", "Чорний перець"],
        instructions: "Відваріть спагеті. Підсмажте бекон. Збийте яйця з сиром. Змішайте гарячу пасту з соусом і беконом."
    },
    {
        id: 12,
        title: "Піца Маргарита",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "40 хв",
        calories: "800 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Тісто для піци", "Томатний соус", "Моцарела", "Базилік", "Оливкова олія"],
        instructions: "Розкачайте тісто. Змастіть соусом, викладіть сир. Випікайте при максимальній температурі 10-15 хв. Прикрасьте базиліком."
    },
    {
        id: 13,
        title: "Лазанья Болоньєзе",
        image: "img/lazzania.jpg",
        time: "90 хв",
        calories: "650 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Листи лазаньї", "Фарш яловичий", "Томатний соус", "Соус Бешамель", "Пармезан"],
        instructions: "Обсмажте фарш з томатом. Викладайте шарами: листи, фарш, бешамель, сир. Запікайте 40 хв."
    },
    {
        id: 14,
        title: "Грецький салат",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "15 хв",
        calories: "200 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Огірки", "Помідори", "Фера", "Оливки", "Орегано", "Оливкова олія"],
        instructions: "Наріжте овочі великими шматками. Додайте сир фета кубиками та оливки. Полийте олією та посипте орегано."
    },
    {
        id: 15,
        title: "Іспанський Гаспачо",
        image: "img/gaspacho.jpg",
        time: "20 хв",
        calories: "150 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Помідори", "Огірок", "Болгарський перець", "Часник", "Хліб", "Оливкова олія"],
        instructions: "Збийте всі інгредієнти в блендері до однорідності. Охолодіть. Подавайте з сухариками."
    },
    
    // --- АМЕРИКАНСЬКА ТА ФАСТ-ФУД ---
    {
        id: 3,
        title: "Цезар з куркою",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "30 хв",
        calories: "400 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Куряче філе", "Салат Ромен", "Сухарики", "Пармезан", "Соус Цезар"],
        instructions: "Обсмажте курку. Порвіть листя салату. Змішайте все, додайте соус, сухарики та тертий сир."
    },
    {
        id: 16,
        title: "Класичний Бургер",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "30 хв",
        calories: "750 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Булка", "Яловича котлета", "Сир Чеддер", "Помідор", "Листя салату", "Соус"],
        instructions: "Обсмажте котлету. Підігрійте булку. Зберіть бургер, додавши овочі та соус."
    },
    {
        id: 17,
        title: "Панкейки з медом",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "20 хв",
        calories: "350 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Молоко", "Борошно", "Розпушувач", "Яйце", "Мед", "Масло"],
        instructions: "Змішайте сухі інгредієнти, додайте молоко та яйце. Смажте на сухій сковороді до бульбашок."
    },

    // --- АЗІАТСЬКА КУХНЯ ---
    {
        id: 18,
        title: "Суші Філадельфія",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "50 хв",
        calories: "320 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Рис для суші", "Норі", "Лосось", "Крем-сир", "Огірок/Авокадо"],
        instructions: "Зваріть рис. Викладіть на норі, переверніть. Покладіть начинку, скрутіть рол. Зверху покладіть лосось."
    },
    {
        id: 19,
        title: "Рамен зі свининою",
        image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "120 хв",
        calories: "600 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Бульйон", "Локшина", "Свинина", "Яйце мариноване", "Зелена цибуля", "Норі"],
        instructions: "Зваріть наваристий бульйон. Відваріть локшину. Викладіть інгредієнти в миску і залийте гарячим бульйоном."
    },
    {
        id: 20,
        title: "Курка Каррі",
        image: "img/karri_chiken.jpg",
        time: "40 хв",
        calories: "450 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Куряче філе", "Кокосове молоко", "Паста каррі", "Рис", "Кінза"],
        instructions: "Обсмажте курку з пастою каррі. Додайте кокосове молоко і тушкуйте 15 хв. Подавайте з рисом."
    },
    {
        id: 21,
        title: "Пад Тай",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "30 хв",
        calories: "500 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Рисова локшина", "Креветки/Курка", "Арахіс", "Яйце", "Соус Пад Тай", "Лайм"],
        instructions: "Замочіть локшину. Обсмажте креветки та яйце. Додайте локшину і соус. Посипте арахісом."
    },

    // --- СНІДАНКИ ТА ІНШЕ ---
    {
        id: 4,
        title: "Млинці з ягодами",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "40 хв",
        calories: "250 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Молоко", "Борошно", "Яйця", "Цукор", "Ягоди"],
        instructions: "Зробіть тісто. Смажте млинці на сковороді. Подавайте зі свіжими ягодами та медом."
    },
    {
        id: 5,
        title: "Авокадо тост",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "10 хв",
        calories: "280 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Хліб", "Авокадо", "Яйце пашот", "Лимон", "Спеції"],
        instructions: "Підсмажте хліб. Розімніть авокадо з лимоном. Зваріть яйце пашот і викладіть зверху."
    },
    {
        id: 22,
        title: "Шакшука",
        image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "20 хв",
        calories: "300 ккал",
        category: "breakfast",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Яйця", "Помідори", "Перець болгарський", "Цибуля", "Зіра", "Петрушка"],
        instructions: "Протушкуйте овочі до м'якості. Зробіть лунки і вбийте туди яйця. Готуйте під кришкою до схоплення білка."
    },
    {
        id: 23,
        title: "Вівсянка з фруктами",
        image: "img/vivsyanka.jpg",
        time: "15 хв",
        calories: "250 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Вівсяні пластівці", "Молоко/Вода", "Банан", "Лохина", "Мед", "Горіхи"],
        instructions: "Зваріть вівсянку. Викладіть у тарілку. Прикрасьте нарізаними фруктами, горіхами та медом."
    },
    {
        id: 24,
        title: "Французький тост",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "15 хв",
        calories: "400 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Тостовий хліб", "Яйця", "Молоко", "Кориця", "Цукор", "Масло"],
        instructions: "Збийте яйця з молоком і корицею. Вмочіть хліб. Обсмажте на маслі до золотистого кольору."
    },

    // --- МЕКСИКАНСЬКА ТА СХІДНА ---
    {
        id: 25,
        title: "Тако з яловичиною",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "25 хв",
        calories: "450 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Тортильї", "Фарш яловичий", "Квасоля", "Кукурудза", "Сальса", "Лайм"],
        instructions: "Обсмажте фарш зі спеціями. Викладіть на тортильї. Додайте овочі та соус сальса."
    },
    {
        id: 26,
        title: "Фалафель в лаваші",
        image: "img/falafel_v_lavashe.jpg",
        time: "40 хв",
        calories: "500 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Нутові кульки (фалафель)", "Лаваш", "Хумус", "Огірок", "Помідор", "Соус тахіні"],
        instructions: "Підсмажте фалафель. Змастіть лаваш хумусом. Викладіть овочі та кульки. Загорніть."
    },
    {
        id: 27,
        title: "Узбецький Плов",
        image: "img/uzbeckiy_plov.jpg",
        time: "120 хв",
        calories: "700 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Рис", "Баранина/Яловичина", "Морква", "Цибуля", "Часник", "Спеції для плову"],
        instructions: "Обсмажте м'ясо та овочі (зірвак). Засипте рис, залийте водою. Готуйте до випаровування води."
    },
    {
        id: 28,
        title: "Хачапурі по-аджарськи",
        image: "img/hachapuri.jpg",
        time: "45 хв",
        calories: "600 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Тісто дріжджове", "Сир сулугуні", "Яйце", "Масло вершкове"],
        instructions: "Сформуйте човник з тіста. Всередину покладіть сир. Випікайте. В кінці вбийте яйце і потримайте ще хвилину."
    },
    
    // --- РІЗНЕ ---
    {
        id: 6,
        title: "Грибний крем-суп",
        image: "img/gribnii_soup.jpeg",
        time: "45 хв",
        calories: "320 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Печериці", "Вершки", "Цибуля", "Картопля", "Грінки"],
        instructions: "Обсмажте гриби та цибулю. Зваріть картоплю. Збийте все блендером, додайте вершки."
    },
    {
        id: 29,
        title: "Лосось з овочами",
        image: "img/losos_ovochi.jpg",
        time: "30 хв",
        calories: "400 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Стейк лосося", "Броколі", "Лимон", "Сіль", "Перець"],
        instructions: "Посоліть рибу, збризніть лимоном. Запікайте разом з броколі 20 хвилин при 180°C."
    },
    {
        id: 30,
        title: "Рататуй",
        image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "60 хв",
        calories: "180 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Баклажан", "Цукіні", "Помідори", "Соус томатний", "Прованські трави"],
        instructions: "Наріжте овочі кружальцями. Викладіть у форму на соус. Запікайте під фольгою 40 хв."
    },
    {
        id: 31,
        title: "Бефстроганов",
        image: "img/befstroganov.jpg",
        time: "40 хв",
        calories: "550 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Яловичина", "Сметана", "Цибуля", "Гірчиця", "Борошно"],
        instructions: "Наріжте м'ясо смужками, обсмажте. Додайте цибулю, потім борошно і сметану. Тушкуйте до м'якості."
    },
    {
        id: 32,
        title: "Смузі-боул",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "10 хв",
        calories: "200 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Банан заморожений", "Полуниця", "Йогурт", "Гранула", "Насіння чіа"],
        instructions: "Збийте фрукти з йогуртом. Вилийте в миску. Прикрасьте гранолою та насінням."
    },
    {
        id: 33,
        title: "Фіш енд Чіпс",
        image: "img/Fish_and_chips.jpg",
        time: "40 хв",
        calories: "650 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Філе білої риби", "Картопля фрі", "Кляр (борошно + пиво)", "Лимон"],
        instructions: "Занурте рибу в кляр і смажте у фритюрі. Подавайте з картоплею фрі та лимоном."
    },
    {
        id: 34,
        title: "Гарбузовий суп",
        image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "40 хв",
        calories: "220 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Гарбуз", "Моркква", "Вершки", "Імбир", "Гарбузове насіння"],
        instructions: "Зваріть гарбуз та моркву. Збийте блендером. Додайте вершки та спеції. Прогрійте."
    },
    {
        id: 35,
        title: "Тірамісу",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "30 хв",
        calories: "450 ккал",
        category: "breakfast", // або десерт
        isPopular: true,
        isFavorite: false,
        ingredients: ["Печиво Савоярді", "Маскарпоне", "Кава еспресо", "Яйця", "Какао"],
        instructions: "Збийте крем з маскарпоне. Вмочіть печиво в каву. Викладайте шарами: печиво, крем. Посипте какао."
    }
];
// === ЗАВАНТАЖЕННЯ ЗБЕРЕЖЕНИХ ДАНИХ ===
// Перевіряємо, чи є щось в пам'яті браузера
const savedFavorites = JSON.parse(localStorage.getItem('gastroFavorites')) || [];

// Проходимось по всіх рецептах і відновлюємо сердечка
recipesData.forEach(recipe => {
    if (savedFavorites.includes(recipe.id)) {
        recipe.isFavorite = true;
    }
});

// Елементи DOM
const recipesGrid = document.getElementById('recipesGrid');
const sectionTitle = document.getElementById('sectionTitle');
const searchInput = document.getElementById('searchInput');

// Модальні вікна
const recipeModal = document.getElementById('recipeModal');
const loginModal = document.getElementById('loginModal');
const profileModal = document.getElementById('profileModal');
const loginBtnInHeader = document.querySelector('.btn-login');

// === ВІДОБРАЖЕННЯ КАРТОК ===
function displayRecipes(recipes) {
    recipesGrid.innerHTML = '';
    
    if (recipes.length === 0) {
        recipesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Нічого не знайдено :(</p>';
        return;
    }

    recipes.forEach(recipe => {
        const heartClass = recipe.isFavorite ? 'active' : '';

        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <button class="btn-fav ${heartClass}" onclick="toggleFavorite(${recipe.id})">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-info">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-fire"></i> ${recipe.calories}</span>
                </div>
                <button class="btn-view" onclick="openRecipeModal(${recipe.id})">Переглянути</button>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

// === ФУНКЦІОНАЛ "ОБРАНІ" ===
function toggleFavorite(id) {
    const recipe = recipesData.find(r => r.id === id);
    if (recipe) {
        recipe.isFavorite = !recipe.isFavorite;
        
        // --- НОВИЙ КОД: ЗБЕРЕЖЕННЯ В ПАМ'ЯТЬ ---
        // 1. Беремо всі ID улюблених рецептів
        const favIds = recipesData
            .filter(r => r.isFavorite)
            .map(r => r.id);
        
        // 2. Зберігаємо їх у браузері під ключем 'gastroFavorites'
        localStorage.setItem('gastroFavorites', JSON.stringify(favIds));
        // ---------------------------------------

        if (sectionTitle.innerText === "Мої улюблені рецепти ❤️") {
            showFavorites();
        } else {
            displayRecipes(recipesData); 
        }
    }
}

function showFavorites() {
    sectionTitle.innerText = "Мої улюблені рецепти ❤️";
    const favorites = recipesData.filter(r => r.isFavorite === true);
    displayRecipes(favorites);
    resetCatButtons();
}

// === ФІЛЬТРАЦІЯ І ПОШУК ===
function filterRecipes(category) {
    resetCatButtons();
    const activeBtn = Array.from(document.querySelectorAll('.btn-cat')).find(btn => 
        btn.getAttribute('onclick').includes(category)
    );
    if(activeBtn) activeBtn.classList.add('active');

    if (category === 'all') {
        sectionTitle.innerText = "Всі рецепти";
        displayRecipes(recipesData);
    } else {
        const filtered = recipesData.filter(recipe => recipe.category === category);
        const titles = { 'breakfast': 'Сніданки', 'lunch': 'Обіди', 'dinner': 'Вечері' };
        sectionTitle.innerText = titles[category];
        displayRecipes(filtered);
    }
}

function showPopular() {
    sectionTitle.innerText = "Популярні рецепти 🔥";
    const popular = recipesData.filter(recipe => recipe.isPopular === true);
    displayRecipes(popular);
    resetCatButtons();
}

// === РОЗУМНИЙ ХОЛОДИЛЬНИК ===
function searchByFridge() {
    const input = document.getElementById('fridgeInput').value.toLowerCase();
    
    if (!input.trim()) {
        alert("Введіть хоча б один продукт!");
        return;
    }

    const userIngredients = input.split(',').map(item => item.trim());

    const filtered = recipesData.filter(recipe => {
        return userIngredients.some(userIng => 
            recipe.ingredients.some(recipeIng => recipeIng.toLowerCase().includes(userIng))
        );
    });

    sectionTitle.innerText = `🍳 Знайдено рецептів: ${filtered.length}`;
    displayRecipes(filtered);
    resetCatButtons();
    document.getElementById('recipesGrid').scrollIntoView({ behavior: 'smooth' });
}

function resetCatButtons() {
    document.querySelectorAll('.btn-cat').forEach(btn => btn.classList.remove('active'));
}

function goHome() {
    filterRecipes('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToCategories() {
    const section = document.getElementById('categoriesBlock');
    if (section) {
        // Плавно крутимо до кнопок
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Маленький ефект: блимнемо кнопками, щоб привернути увагу
        section.style.transition = "0.3s";
        section.style.transform = "scale(1.05)";
        setTimeout(() => {
            section.style.transform = "scale(1)";
        }, 300);
    } else {
        console.log("Помилка: Не знайдено блок з категоріями (id='categoriesBlock')");
    }
}

// Пошук за назвою
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = recipesData.filter(r => 
        r.title.toLowerCase().includes(term) ||
        r.ingredients.some(i => i.toLowerCase().includes(term))
    );
    sectionTitle.innerText = "Результати пошуку";
    displayRecipes(filtered);
});

// === МОДАЛЬНІ ВІКНА ===
window.openRecipeModal = function(id) {
    const recipe = recipesData.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalTitle').innerText = recipe.title;
    document.getElementById('modalTime').innerText = `⏱ ${recipe.time}`;
    document.getElementById('modalCalories').innerText = `🔥 ${recipe.calories}`;
    document.getElementById('modalInstructions').innerText = recipe.instructions;
    document.getElementById('modalIngredients').innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

    recipeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

window.openLoginModal = function() {
    loginModal.style.display = 'block';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 1. Знаходимо поле, куди користувач ввів пошту
    const emailInput = document.querySelector('#loginForm input[type="email"]').value;
    
    // 2. Якщо поле не порожнє, записуємо цю пошту в профіль
    if (emailInput) {
        document.getElementById('profileEmail').innerText = emailInput;
        
        // (Опціонально) Можемо зберегти пошту в пам'ять, щоб не зникала після F5
        localStorage.setItem('userEmail', emailInput);
    }

    loginModal.style.display = 'none';
    loginBtnInHeader.innerHTML = '<i class="fas fa-user"></i> Профіль';
    loginBtnInHeader.style.backgroundColor = "#4CAF50";
    loginBtnInHeader.onclick = openProfileModal;
    
    alert(`Вітаємо, ${emailInput}! Ви успішно увійшли.`);
});

window.openProfileModal = function() {
    profileModal.style.display = 'block';
}

window.logout = function() {
    profileModal.style.display = 'none';
    alert("Ви вийшли з акаунту");
    loginBtnInHeader.innerText = "Увійти";
    loginBtnInHeader.style.backgroundColor = "";
    loginBtnInHeader.onclick = openLoginModal;
}

// Закриття вікон
document.querySelector('.recipe-close').onclick = () => { recipeModal.style.display = 'none'; document.body.style.overflow = 'auto'; };
document.querySelector('.login-close').onclick = () => loginModal.style.display = 'none';
document.querySelector('.profile-close').onclick = () => profileModal.style.display = 'none';

window.onclick = function(event) {
    if (event.target == recipeModal) { recipeModal.style.display = 'none'; document.body.style.overflow = 'auto'; }
    if (event.target == loginModal) loginModal.style.display = 'none';
    if (event.target == profileModal) profileModal.style.display = 'none';
}

// Старт
displayRecipes(recipesData);
// === ЛОГІКА ТЕМНОЇ ТЕМИ ===

// 1. Перевірка при завантаженні: чи була збережена тема?
const savedTheme = localStorage.getItem('gastroTheme');
const themeBtn = document.querySelector('.theme-btn');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Міняємо місяць на сонце
}

// 2. Функція перемикання
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    // Зміна іконки
    if (isDark) {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('gastroTheme', 'dark'); // Зберігаємо вибір
    } else {
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('gastroTheme', 'light'); // Зберігаємо вибір
    }
}
// Перевірка збереженої пошти при завантаженні
const savedEmail = localStorage.getItem('userEmail');
if (savedEmail) {
    document.getElementById('profileEmail').innerText = savedEmail;
    // Автоматично робимо кнопку зеленою, якщо ми пам'ятаємо користувача
    loginBtnInHeader.innerHTML = '<i class="fas fa-user"></i> Профіль';
    loginBtnInHeader.style.backgroundColor = "#4CAF50";
    loginBtnInHeader.onclick = openProfileModal;
}