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
    },
    // --- НОВІ РЕЦЕПТИ (ДЕСЕРТИ, НАПОЇ ТА ІНШЕ) ---
    {
        id: 36,
        title: "Чізкейк Нью-Йорк",
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "60 хв",
        calories: "400 ккал",
        category: "dessert",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Печиво", "Вершкове масло", "Сир Філадельфія", "Цукор", "Вершки", "Яйця"],
        instructions: "Зробіть основу з печива. Збийте сир з цукром та яйцями. Випікайте на водяній бані 60 хв."
    },
    {
        id: 37,
        title: "Шоколадний Брауні",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "40 хв",
        calories: "450 ккал",
        category: "dessert",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Чорний шоколад", "Вершкове масло", "Цукор", "Яйця", "Борошно", "Какао"],
        instructions: "Розтопіть шоколад з маслом. Збийте яйця з цукром. Змішайте все і випікайте 25 хв до вологої серединки."
    },
    {
        id: 38,
        title: "Яблучний Штрудель",
        image: "img/shtrydel.jpg",
        time: "50 хв",
        calories: "350 ккал",
        category: "dessert",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Тісто листкове", "Яблука", "Кориця", "Цукор", "Горіхи", "Родзинки"],
        instructions: "Тонко розкачайте тісто. Викладіть начинку з яблук та горіхів. Загорніть рулет і випікайте до золотистості."
    },
    {
        id: 39,
        title: "Домашній Лимонад",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "10 хв",
        calories: "100 ккал",
        category: "dessert",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Лимони", "М'ята", "Цукор/Мед", "Газована вода", "Лід"],
        instructions: "Вичавіть сік з лимонів. Змішайте з цукром та м'ятою. Залийте водою і додайте багато льоду."
    },
    {
        id: 40,
        title: "Мохіто (безалкогольний)",
        image: "img/mohito.jpg",
        time: "5 хв",
        calories: "80 ккал",
        category: "dessert",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Лайм", "М'ята", "Спрайт/Содова", "Лід", "Тростинний цукор"],
        instructions: "Розімніть лайм з цукром і м'ятою в склянці. Засипте льодом і залийте содовою."
    },
    {
        id: 41,
        title: "Круасан з шоколадом",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "25 хв",
        calories: "400 ккал",
        category: "breakfast",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Листкове тісто", "Шоколад", "Яйце (для змащування)"],
        instructions: "Наріжте тісто трикутниками. Покладіть шматочок шоколаду, загорніть. Змастіть яйцем і випікайте."
    },
    {
        id: 42,
        title: "Хот-дог",
        image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "15 хв",
        calories: "450 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Булка", "Сосиска", "Кетчуп", "Гірчиця", "Цибуля смажена"],
        instructions: "Підсмажте сосиску. Розігрійте булку. Зберіть хот-дог і полийте соусами."
    },
    {
        id: 43,
        title: "Шаурма домашня",
        image: "img/shaurma.jpg",
        time: "30 хв",
        calories: "600 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Лаваш", "Курка", "Капуста", "Огірок", "Помідор", "Соус часниковий"],
        instructions: "Наріжте овочі та підсмажене м'ясо. Змастіть лаваш соусом, викладіть начинку, загорніть і підсмажте на грилі."
    },
    {
        id: 44,
        title: "Фруктовий салат",
        image: "img/fructovy_salat.jpg",
        time: "10 хв",
        calories: "150 ккал",
        category: "dessert",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Банан", "Ківі", "Апельсин", "Яблуко", "Йогурт"],
        instructions: "Наріжте фрукти шматочками. Заправте йогуртом або медом."
    },
    {
        id: 45,
        title: "Медовик",
        image: "img/medovik.jpg",
        time: "90 хв",
        calories: "480 ккал",
        category: "dessert",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Мед", "Борошно", "Цукор", "Сметана", "Яйця", "Сода"],
        instructions: "Спечіть медові коржі. Збийте сметану з цукром. Перемастіть коржі і дайте настоятися ніч."
    },
    {
        id: 46,
        title: "Наполеон",
        image: "img/napoleon.jpg",
        time: "120 хв",
        calories: "550 ккал",
        category: "dessert",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Листкове тісто", "Молоко", "Цукор", "Яйця", "Масло", "Ваніль"],
        instructions: "Спечіть багато тонких коржів. Зваріть заварний крем. Перемастіть коржі, посипте крихтою."
    },
    {
        id: 47,
        title: "Еклери",
        image: "img/eklery.jpg",
        time: "60 хв",
        calories: "350 ккал",
        category: "dessert",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Вода", "Масло", "Борошно", "Яйця", "Заварний крем"],
        instructions: "Заваріть тісто. Спечіть палички. Наповніть кремом через шприц. Полийте шоколадом."
    },
    {
        id: 48,
        title: "Какао з маршмелоу",
        image: "img/kakao_marshmelou.jpg",
        time: "5 хв",
        calories: "200 ккал",
        category: "dessert",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Молоко", "Какао-порошок", "Цукор", "Маршмелоу"],
        instructions: "Зваріть какао на молоці. Розлийте по чашках. Зверху посипте маршмелоу."
    },
    {
        id: 49,
        title: "Мілкшейк Полуничний",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "5 хв",
        calories: "350 ккал",
        category: "dessert",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Молоко", "Морозиво пломбір", "Полуниця", "Збиті вершки"],
        instructions: "Збийте молоко, морозиво та полуницю в блендері. Прикрасьте вершками."
    },
    {
        id: 50,
        title: "Омлет з овочами",
        image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "15 хв",
        calories: "250 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Яйця", "Молоко", "Перець", "Помідор", "Зелень"],
        instructions: "Збийте яйця з молоком. Наріжте овочі. Вилийте на сковороду і готуйте під кришкою."
    },
    {
        id: 51,
        title: "Яйця Бенедикт",
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "20 хв",
        calories: "400 ккал",
        category: "breakfast",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Яйце пашот", "Булочка", "Шинка/Бекон", "Соус Голландез"],
        instructions: "Підсмажте булку і шинку. Зваріть пашот. Викладіть на булку, полийте соусом."
    },
    {
        id: 52,
        title: "Чіа-пудинг",
        image: "img/pudding-chia-9.jpg",
        time: "120 хв",
        calories: "200 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Насіння чіа", "Кокосове молоко", "Манго", "Мед"],
        instructions: "Залийте чіа молоком і залиште на ніч у холодильнику. Вранці додайте пюре манго."
    },
    {
        id: 53,
        title: "Англійський сніданок",
        image: "img/anglisky_snidanok.jpg",
        time: "20 хв",
        calories: "800 ккал",
        category: "breakfast",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Яйця", "Бекон", "Сосиски", "Квасоля в томаті", "Гриби", "Тост"],
        instructions: "Обсмажте все на одній великій сковороді. Подавайте з тостами та чаєм."
    },
    {
        id: 54,
        title: "Гранула з йогуртом",
        image: "img/granyla_yogurt.jpg",
        time: "5 хв",
        calories: "300 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Гранола", "Грецький йогурт", "Ягоди", "Мед"],
        instructions: "Насипте гранолу в миску. Залийте йогуртом. Додайте свіжі ягоди та мед."
    },
    {
        id: 55,
        title: "Тости з тунцем",
        image: "img/tosts_tynec.jpg",
        time: "10 хв",
        calories: "350 ккал",
        category: "breakfast",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Хліб", "Консервований тунець", "Майонез", "Огірок", "Цибуля"],
        instructions: "Змішайте тунець з майонезом і дрібно нарізаною цибулею. Викладіть на підсмажений хліб."
    },
    {
        id: 56,
        title: "Окрошка",
        image: "img/okroshka.jpg",
        time: "30 хв",
        calories: "200 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Кефір/Квас", "Ковбаса", "Огірок", "Яйця", "Картопля", "Зелень"],
        instructions: "Наріжте всі інгредієнти кубиками. Залийте холодним кефіром або квасом. Посипте зеленню."
    },
    {
        id: 57,
        title: "Солянка",
        image: "img/solyanka.jpg",
        time: "90 хв",
        calories: "400 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["М'ясне асорті", "Огірки солоні", "Оливки", "Лимон", "Томатна паста"],
        instructions: "Зваріть бульйон. Обсмажте м'ясо з огірками та томатом. З'єднайте все, додайте оливки та лимон."
    },
    {
        id: 58,
        title: "Фо Бо",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "180 хв",
        calories: "500 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Яловичий бульйон", "Рисова локшина", "Яловичина слайсами", "М'ята", "Лайм", "Чилі"],
        instructions: "Дуже довго варіть бульйон зі спеціями. Залийте киплячим бульйоном сире м'ясо та локшину."
    },
    {
        id: 59,
        title: "Том Ям",
        image: "img/tom_yum.jpg",
        time: "40 хв",
        calories: "450 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Паста Том Ям", "Кокосове молоко", "Креветки", "Гриби", "Лемонграс"],
        instructions: "Розведіть пасту в бульйоні. Додайте лемонграс, гриби і молоко. В кінці киньте креветки на 2 хв."
    },
    {
        id: 60,
        title: "Салат Нісуаз",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "20 хв",
        calories: "350 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Тунець", "Яйця", "Стручкова квасоля", "Картопля", "Оливки", "Анчоуси"],
        instructions: "Відваріть картоплю і квасолю. Викладіть на тарілку всі інгредієнти. Полийте заправкою вінегрет."
    },
    {
        id: 61,
        title: "Стейк Рібай",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "15 хв",
        calories: "600 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Стейк яловичий", "Розмарин", "Часник", "Вершкове масло", "Сіль", "Перець"],
        instructions: "Смажте стейк на розпеченій сковороді по 2-3 хв з кожного боку. В кінці додайте масло, часник і трави."
    },
    {
        id: 62,
        title: "Качка з яблуками",
        image: "img/kachka_yabloki.jpg",
        time: "120 хв",
        calories: "700 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Качка ціла", "Яблука кислі", "Мед", "Гірчиця", "Спеції"],
        instructions: "Нафаршируйте качку яблуками. Натріть маринадом. Запікайте 2 години при 180°C."
    },
    {
        id: 63,
        title: "Свинячі реберця BBQ",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "90 хв",
        calories: "800 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Ребра свинячі", "Соус барбекю", "Мед", "Соєвий соус", "Паприка"],
        instructions: "Замаринуйте ребра. Запікайте у фользі 1 годину. Відкрийте, змастіть соусом і запікайте до скоринки."
    },
    {
        id: 64,
        title: "Паелья з морепродуктами",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "50 хв",
        calories: "500 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Рис круглий", "Шафран", "Мідії", "Креветки", "Кальмари", "Горошок"],
        instructions: "Обсмажте морепродукти. Додайте рис і шафран. Залийте бульйоном і не перемішуйте до готовності."
    },
    {
        id: 65,
        title: "Локшина WOK з куркою",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "20 хв",
        calories: "450 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Локшина удон", "Курка", "Перець", "Морква", "Соус Теріякі", "Кунжут"],
        instructions: "Швидко обсмажте курку та овочі. Додайте варену локшину і соус. Прогрійте 1 хвилину."
    },
    {
        id: 66,
        title: "Брускетта з томатами",
        image: "img/brusket_tomat.jpg",
        time: "10 хв",
        calories: "200 ккал",
        category: "lunch", // або закуска
        isPopular: false,
        isFavorite: false,
        ingredients: ["Чіабата", "Помідори", "Базилік", "Часник", "Оливкова олія"],
        instructions: "Підсушіть хліб. Наріжте помідори кубиком, змішайте з базиліком та олією. Викладіть на хліб."
    },
    {
        id: 67,
        title: "Гуакамоле з начос",
        image: "img/Guacamole_nachos.jpg",
        time: "10 хв",
        calories: "300 ккал",
        category: "lunch", // або закуска
        isPopular: true,
        isFavorite: false,
        ingredients: ["Авокадо", "Лайм", "Цибуля червона", "Помідор", "Чіпси Начос"],
        instructions: "Розімніть авокадо виделкою. Додайте нарізані овочі та сік лайма. Подавайте з чіпсами."
    },
    {
        id: 68,
        title: "Хумус",
        image: "img/humus.jpg",
        time: "15 хв",
        calories: "250 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Нут консервований", "Тахіні (кунжутна паста)", "Лимон", "Часник", "Оливкова олія"],
        instructions: "Збийте всі інгредієнти в блендері до кремового стану. Полийте олією та посипте паприкою."
    },
    {
        id: 69,
        title: "Сирна тарілка",
        image: "img/sirna_tarilka.jpg",
        time: "10 хв",
        calories: "500 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Брі", "Дор Блю", "Пармезан", "Мед", "Горіхи", "Виноград"],
        instructions: "Наріжте сири. Викладіть на дошку. Додайте мед, горіхи та фрукти."
    },
    {
        id: 70,
        title: "Спрінг-роли",
        image: "img/spring_roll.jpg",
        time: "30 хв",
        calories: "150 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Рисовий папір", "Креветки", "Огірок", "Морква", "Фунчоза", "Соус"],
        instructions: "Змочіть папір у воді. Викладіть начинку. Загорніть конвертиком. Вмочайте в соус."
    },
    {
        id: 71,
        title: "Курячі крильця Баффало",
        image: "img/Krilca_bafalo.jpg",
        time: "45 хв",
        calories: "600 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Крила курячі", "Гострий соус", "Масло вершкове", "Спеції"],
        instructions: "Запечіть крила в духовці до хрусту. Змішайте гарячий соус з маслом і полийте крила."
    },
    {
        id: 72,
        title: "Картопля фрі домашня",
        image: "img/kartoplya_fri.jpg",
        time: "30 хв",
        calories: "400 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Картопля", "Олія", "Сіль", "Паприка"],
        instructions: "Наріжте картоплю брусочками. Обсушіть. Смажте у великій кількості олії до золотистого кольору."
    },
    {
        id: 73,
        title: "Часниковий хліб",
        image: "img/chasnikovy_hlib.jpg",
        time: "15 хв",
        calories: "250 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Багет", "Масло вершкове", "Часник", "Петрушка", "Сир (опційно)"],
        instructions: "Змішайте м'яке масло з часником і зеленню. Намастіть надрізаний багет. Запечіть 10 хв."
    },
    {
        id: 74,
        title: "Лате",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "10 хв",
        calories: "150 ккал",
        category: "dessert", // напої
        isPopular: true,
        isFavorite: false,
        ingredients: ["Еспресо", "Молоко", "Цукор"],
        instructions: "Зробіть еспресо. Збийте гаряче молоко в піну. Влийте молоко в каву."
    },
    {
        id: 75,
        title: "Чай з обліпихою",
        image: "img/chai_oblepiha.jpeg",
        time: "10 хв",
        calories: "50 ккал",
        category: "dessert", // напої
        isPopular: false,
        isFavorite: false,
        ingredients: ["Обліпиха", "Мед", "Імбир", "Окріп"],
        instructions: "Розімніть ягоди з медом та імбиром. Залийте окропом і дайте настоятися 5 хв."
    },
    {
        id: 76,
        title: "Глінтвейн",
        image: "img/glintvein.jpeg",
        time: "20 хв",
        calories: "200 ккал",
        category: "dessert", // напої
        isPopular: true,
        isFavorite: false,
        ingredients: ["Червоне вино (або сік)", "Апельсин", "Кориця", "Гвоздика", "Мед"],
        instructions: "Нагрійте вино зі спеціями та фруктами, не доводячи до кипіння. Дайте настоятися."
    },
    {
        id: 77,
        title: "Цибулеві кільця",
        image: "https://images.unsplash.com/photo-1625938146369-adc83368bda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "25 хв",
        calories: "350 ккал",
        category: "lunch",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Цибуля велика", "Кляр (борошно, яйце, молоко)", "Панірувальні сухарі", "Олія"],
        instructions: "Наріжте цибулю кільцями. Вмочіть у кляр, потім у сухарі. Смажте у фритюрі."
    },
    {
        id: 78,
        title: "Кесаділья з куркою",
        image: "img/Kesadilia.jpg",
        time: "20 хв",
        calories: "500 ккал",
        category: "dinner",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Тортилья", "Сир твердий", "Курка варена", "Кукурудза", "Соус"],
        instructions: "Викладіть начинку на половину коржа, посипте сиром. Накрийте другою половиною. Підсмажте на сковороді з обох боків."
    },
    {
        id: 79,
        title: "Сендвіч Клаб",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "15 хв",
        calories: "450 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Тостовий хліб", "Шинка", "Сир", "Помідор", "Салат", "Майонез"],
        instructions: "Підсмажте хліб. Змастіть соусом. Викладіть шарами начинку між трьома шматками хліба. Розріжте по діагоналі."
    },
    {
        id: 80,
        title: "Пончики",
        image: "img/ponchiki.jpg",
        time: "60 хв",
        calories: "400 ккал",
        category: "dessert",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Борошно", "Дріжджі", "Молоко", "Цукор", "Олія", "Пудра"],
        instructions: "Замісіть дріжджове тісто. Дайте підійти. Сформуйте кільця і смажте в олії. Посипте пудрою."
    },
    {
        id: 81,
        title: "Крем-брюле",
        image: "img/krem_brule.jpg",
        time: "60 хв",
        calories: "300 ккал",
        category: "dessert",
        isPopular: false,
        isFavorite: false,
        ingredients: ["Вершки жирні", "Жовтки", "Цукор", "Ваніль"],
        instructions: "Змішайте жовтки з цукром і вершками. Запікайте на водяній бані. Охолодіть. Карамелізуйте цукор зверху пальником."
    },
    {
        id: 82,
        title: "Картопля по-селянськи",
        image: "img/kartoplya_po_selanski.jpg",
        time: "40 хв",
        calories: "350 ккал",
        category: "lunch",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Картопля", "Часник", "Олія", "Паприка", "Сіль"],
        instructions: "Наріжте картоплю дольками. Змішайте з олією та спеціями. Запікайте в духовці до золотистої скоринки."
    },
    {
        id: 83,
        title: "Мівіна з сосисками (Студентська)",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        time: "5 хв",
        calories: "400 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Мівіна/Ролтон", "Сосиски", "Майонез", "Сир плавлений"],
        instructions: "Запарте локшину. Наріжте туди сосиски. Зверху потріть сир і додайте майонез. Шедевр готовий."
    },
    {
        id: 84,
        title: "Бутерброд зі шпротами",
        image: "img/buterbrod_shproty.jpg",
        time: "10 хв",
        calories: "300 ккал",
        category: "lunch", // закуска
        isPopular: true,
        isFavorite: false,
        ingredients: ["Батон", "Шпроти", "Майонез", "Часник", "Огірок солоний"],
        instructions: "Підсмажте грінки. Натріть часником. Змастіть майонезом. Покладіть шпротину і кружечок огірка."
    },
    {
        id: 85,
        title: "Смажена картопля з грибами",
        image: "img/kartoplya_griby.jpg",
        time: "40 хв",
        calories: "450 ккал",
        category: "dinner",
        isPopular: true,
        isFavorite: false,
        ingredients: ["Картопля", "Гриби лісові/печериці", "Цибуля", "Олія"],
        instructions: "Обсмажте гриби з цибулею. Окремо смажте картоплю. В кінці з'єднайте і протушкуйте 5 хв."
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
        const titles = { 
            'breakfast': 'Сніданки 🥞', 
            'lunch': 'Обіди 🍲', 
            'dinner': 'Вечері 🍝', 
            'dessert': 'Десерти та Напої 🍰'  // <--- Додали це
        };
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