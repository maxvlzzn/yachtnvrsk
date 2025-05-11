export interface YachtService {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface Yacht {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  specifications: {
    length: string;
    capacity: string;
    cabins: string;
    yearBuilt: string;
  };
  price: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Александр Петров",
    text: "Великолепный отдых на яхте Посейдон! Профессиональный экипаж и безупречный сервис сделали наше путешествие незабываемым. Обязательно вернемся снова!",
    rating: 5,
    image: "https://cdn0.iconfinder.com/data/icons/round-user-avatar/33/user_circle_man_director_manager-1024.png"
  },
  {
    id: 2,
    name: "Елена Соколова",
    text: "Прекрасно провели время на яхте Афродита. Очень уютная атмосфера, внимательный персонал и потрясающие виды на закате. Идеальный выбор для романтического вечера.",
    rating: 5,
    image: "https://cdn0.iconfinder.com/data/icons/round-user-avatar/33/user_circle_man_director_manager-1024.png"
  },
  {
    id: 3,
    name: "Михаил Волков",
    text: "Яхта Одиссей превзошла все наши ожидания! Отличная скорость, комфортные условия и захватывающие морские прогулки. Спасибо команде за профессионализм!",
    rating: 4,
    image: "https://cdn0.iconfinder.com/data/icons/round-user-avatar/33/user_circle_man_director_manager-1024.png"
  }
];

export const yachtServices: YachtService[] = [
  {
    id: 1,
    name: "Профессиональный экипаж",
    description: "Опытный капитан и внимательный персонал к вашим услугам",
    icon: "users"
  },
  {
    id: 2,
    name: "Кейтеринг",
    description: "Изысканные блюда и напитки от нашего шеф-повара",
    icon: "utensils"
  },
  {
    id: 3,
    name: "Водные развлечения",
    description: "Водные лыжи, снорклинг и другое оборудование включено",
    icon: "swim"
  },
  {
    id: 4,
    name: "Wi-Fi на борту",
    description: "Оставайтесь на связи даже в открытом море",
    icon: "wifi"
  }
];

export const yachts: Yacht[] = [
  {
    id: 1,
    name: "Посейдон",
    description: "Роскошная яхта Посейдон - это воплощение элегантности и комфорта. С просторной палубой для загара, роскошными каютами и современным интерьером, эта яхта создана для незабываемого отдыха на море.",
    shortDescription: "Элегантная яхта с просторной палубой и роскошными каютами",
    specifications: {
      length: "24 м",
      capacity: "12",
      cabins: "4",
      yearBuilt: "2019"
    },
    price: "15 000 ₽/час",
    features: ["Джакузи на палубе", "Водные игрушки", "Премиум аудиосистема", "Кондиционер"],
    images: [
      "https://fairline-russia.com/uploads/2024/05/princess_42_sochi_2024_4.jpg"
    ],
    isFeatured: true
  },
  {
    id: 2,
    name: "Афродита",
    description: "Яхта Афродита сочетает в себе комфорт, стиль и высокие технологии. Идеальный выбор для дневных прогулок и романтических вечеров на море.",
    shortDescription: "Стильная яхта для романтических прогулок и отдыха",
    specifications: {
      length: "18 м",
      capacity: "8",
      cabins: "3",
      yearBuilt: "2021"
    },
    price: "14 000 ₽/час",
    features: ["Открытая обеденная зона", "Барбекю", "Подводное освещение", "Система стабилизации"],
    images: [
      "https://avatars.mds.yandex.net/get-altay/14296560/2a000001932805e9808a3eaa07bb93c066bd/XXXL"
    ],
    isFeatured: true
  },
  {
    id: 3,
    name: "Одиссей",
    description: "Мощная и скоростная яхта Одиссей предлагает непревзойденное сочетание скорости и комфорта. Идеально подходит для однодневных экскурсий.",
    shortDescription: "Скоростная яхта для активного отдыха и морских приключений",
    specifications: {
      length: "15 м",
      capacity: "6",
      cabins: "2",
      yearBuilt: "2020"
    },
    price: "9 000 ₽/час",
    features: ["Высокая скорость", "Современная электроника", "Снорклинг оборудование", "Солнечная палуба"],
    images: [
      "https://cdn.denisonyachtsales.com/wp-content/uploads/2024/07/Siduri_Yachtforcharter_Princess-1.jpg"
    ],
    isFeatured: true
  },
  {
    id: 4,
    name: "Нептун",
    description: "Яхта Нептун - это идеальное сочетание классического дизайна и современных технологий. Просторные каюты и элегантный интерьер создают атмосферу роскоши.",
    shortDescription: "Классическая яхта с современным комфортом",
    specifications: {
      length: "20 м",
      capacity: "10",
      cabins: "3",
      yearBuilt: "2022"
    },
    price: "4 000 ₽/час",
    features: ["Панорамные окна", "Премиум отделка", "Стабилизаторы качки", "Спутниковое ТВ"],
    images: [
      "https://sanatoriy-tanger.ru/assets/images/statti/otdyh-na-yuge-rossii/otdyh-na-yuge-rossii-gde-luchshe.jpg"
    ],
    isFeatured: true
  },
  {
    id: 5,
    name: "Аврора",
    description: "Современная яхта Аврора создана для тех, кто ценит комфорт и стиль. Идеальна для семейного отдыха и корпоративных мероприятий.",
    shortDescription: "Современная яхта для семейного отдыха",
    specifications: {
      length: "22 м",
      capacity: "12",
      cabins: "4",
      yearBuilt: "2023"
    },
    price: "9 000 ₽/час",
    features: ["Детская зона", "Каяки", "Открытый кинотеатр", "Зона для йоги"],
    images: [
      "https://nevatrip.ru/assets/img/e/arenda-teplokhoda/novye-shablony-arendy/oblozhki-dlya-variantov-transporta/fairline-squadron-68.jpeg"
    ],
    isFeatured: true
  },
  {
    id: 6,
    name: "Гермес",
    description: "Спортивная яхта Гермес - воплощение скорости и динамики. Идеальный выбор для любителей активного отдыха и водных видов спорта.",
    shortDescription: "Спортивная яхта для активного отдыха",
    specifications: {
      length: "16 м",
      capacity: "8",
      cabins: "2",
      yearBuilt: "2024"
    },
    price: "12 000 ₽/час",
    features: ["Высокая скорость", "Вейкборд", "Водные лыжи", "Подводное освещение"],
    images: [
      "https://avatars.mds.yandex.net/get-altay/5965316/2a0000018196cb48be04249c31107fdaae1a/XXL_height"
    ],
    isFeatured: true
  },
  {
    id: 7,
    name: "Атлантида",
    description: "Яхта Атлантида - это новое слово в мире морских путешествий. Сочетание инновационных технологий и максимального комфорта.",
    shortDescription: "Инновационная яхта с передовыми технологиями",
    specifications: {
      length: "26 м",
      capacity: "14",
      cabins: "5",
      yearBuilt: "2024"
    },
    price: "18 000 ₽/час",
    features: ["Умная система навигации", "Электрический привод", "Солнечные панели", "Система очистки воды"],
    images: [
      "https://www.pajak.com/storage/2024/12/Yacht-531x319.jpg"
    ],
    isFeatured: true
  },
  {
    id: 8,
    name: "Меркурий",
    description: "Яхта Меркурий предлагает непревзойденный уровень роскоши и комфорта. Идеальна для длительных морских путешествий.",
    shortDescription: "Роскошная яхта для длительных путешествий",
    specifications: {
      length: "28 м",
      capacity: "16",
      cabins: "6",
      yearBuilt: "2024"
    },
    price: "18 000 ₽/час",
    features: ["Вертолетная площадка", "СПА-зона", "Винный погреб", "Кинотеатр"],
    images: [
      "https://brilions.com/wp-content/uploads/2020/06/photo-2023-06-21-16-41-401.jpg"
    ],
    isFeatured: true
  }
];