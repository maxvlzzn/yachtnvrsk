-- Create yachts table
CREATE TABLE IF NOT EXISTS yachts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  length text NOT NULL,
  capacity int NOT NULL,
  cabins int NOT NULL,
  year_built int NOT NULL,
  price_per_hour decimal NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  images text[] NOT NULL DEFAULT '{}',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  yacht_id uuid REFERENCES yachts(id),
  user_id uuid REFERENCES auth.users(id),
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  total_price decimal NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  yacht_id uuid REFERENCES yachts(id),
  user_id uuid REFERENCES auth.users(id),
  rating int NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE yachts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Policies for yachts
CREATE POLICY "Yachts are viewable by everyone"
  ON yachts FOR SELECT
  TO public
  USING (true);

-- Policies for bookings
CREATE POLICY "Users can view their own bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for reviews
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policies for services
CREATE POLICY "Services are viewable by everyone"
  ON services FOR SELECT
  TO public
  USING (true);

  -- Insert yachts
WITH yacht_inserts AS (
  INSERT INTO yachts (id, name, description, short_description, length, capacity, cabins, year_built, price_per_hour, features, images, is_featured)
  VALUES
    (gen_random_uuid(), 'Посейдон', 'Роскошная яхта Посейдон - это воплощение элегантности и комфорта. С просторной палубой для загара, роскошными каютами и современным интерьером, эта яхта создана для незабываемого отдыха на море.', 'Элегантная яхта с просторной палубой и роскошными каютами', '24 м', 12, 4, 2019, 15000, ARRAY['Джакузи на палубе', 'Водные игрушки', 'Премиум аудиосистема', 'Кондиционер'], ARRAY['https://fairline-russia.com/uploads/2024/05/princess_42_sochi_2024_4.jpg'], true),
    (gen_random_uuid(), 'Афродита', 'Яхта Афродита сочетает в себе комфорт, стиль и высокие технологии. Идеальный выбор для дневных прогулок и романтических вечеров на море.', 'Стильная яхта для романтических прогулок и отдыха', '18 м', 8, 3, 2021, 14000, ARRAY['Открытая обеденная зона', 'Барбекю', 'Подводное освещение', 'Система стабилизации'], ARRAY['https://avatars.mds.yandex.net/get-altay/14296560/2a000001932805e9808a3eaa07bb93c066bd/XXXL'], true),
    (gen_random_uuid(), 'Одиссей', 'Мощная и скоростная яхта Одиссей предлагает непревзойденное сочетание скорости и комфорта. Идеально подходит для однодневных экскурсий.', 'Скоростная яхта для активного отдыха и морских приключений', '15 м', 6, 2, 2020, 9000, ARRAY['Высокая скорость', 'Современная электроника', 'Снорклинг оборудование', 'Солнечная палуба'], ARRAY['https://cdn.denisonyachtsales.com/wp-content/uploads/2024/07/Siduri_Yachtforcharter_Princess-1.jpg'], true),
    (gen_random_uuid(), 'Нептун', 'Яхта Нептун - это идеальное сочетание классического дизайна и современных технологий. Просторные каюты и элегантный интерьер создают атмосферу роскоши.', 'Классическая яхта с современным комфортом', '20 м', 10, 3, 2022, 4000, ARRAY['Панорамные окна', 'Премиум отделка', 'Стабилизаторы качки', 'Спутниковое ТВ'], ARRAY['https://sanatoriy-tanger.ru/assets/images/statti/otdyh-na-yuge-rossii/otdyh-na-yuge-rossii-gde-luchshe.jpg'], true),
    (gen_random_uuid(), 'Аврора', 'Современная яхта Аврора создана для тех, кто ценит комфорт и стиль. Идеальна для семейного отдыха и корпоративных мероприятий.', 'Современная яхта для семейного отдыха', '22 м', 12, 4, 2023, 9000, ARRAY['Детская зона', 'Каяки', 'Открытый кинотеатр', 'Зона для йоги'], ARRAY['https://nevatrip.ru/assets/img/e/arenda-teplokhoda/novye-shablony-arendy/oblozhki-dlya-variantov-transporta/fairline-squadron-68.jpeg'], true),
    (gen_random_uuid(), 'Гермес', 'Спортивная яхта Гермес - воплощение скорости и динамики. Идеальный выбор для любителей активного отдыха и водных видов спорта.', 'Спортивная яхта для активного отдыха', '16 м', 8, 2, 2024, 12000, ARRAY['Высокая скорость', 'Вейкборд', 'Водные лыжи', 'Подводное освещение'], ARRAY['https://avatars.mds.yandex.net/get-altay/5965316/2a0000018196cb48be04249c31107fdaae1a/XXL_height'], true),
    (gen_random_uuid(), 'Атлантида', 'Яхта Атлантида - это новое слово в мире морских путешествий. Сочетание инновационных технологий и максимального комфорта.', 'Инновационная яхта с передовыми технологиями', '26 м', 14, 5, 2024, 18000, ARRAY['Умная система навигации', 'Электрический привод', 'Солнечные панели', 'Система очистки воды'], ARRAY['https://www.pajak.com/storage/2024/12/Yacht-531x319.jpg'], true),
    (gen_random_uuid(), 'Меркурий', 'Яхта Меркурий предлагает непревзойденный уровень роскоши и комфорта. Идеальна для длительных морских путешествий.', 'Роскошная яхта для длительных путешествий', '28 м', 16, 6, 2024, 18000, ARRAY['Вертолетная площадка', 'СПА-зона', 'Винный погреб', 'Кинотеатр'], ARRAY['https://brilions.com/wp-content/uploads/2020/06/photo-2023-06-21-16-41-401.jpg'], true)
  RETURNING id, name
)

-- Insert services
INSERT INTO services (id, name, description, icon)
VALUES
  (gen_random_uuid(), 'Профессиональный экипаж', 'Опытный капитан и внимательный персонал к вашим услугам', 'users'),
  (gen_random_uuid(), 'Кейтеринг', 'Изысканные блюда и напитки от нашего шеф-повара', 'utensils'),
  (gen_random_uuid(), 'Водные развлечения', 'Водные лыжи, снорклинг и другое оборудование включено', 'swim'),
  (gen_random_uuid(), 'Wi-Fi на борту', 'Оставайтесь на связи даже в открытом море', 'wifi');

-- Create a test user for sample data
DO $$
DECLARE
  test_user_id uuid;
  poseidon_id uuid;
  afrodita_id uuid;
  odyssey_id uuid;
  neptune_id uuid;
  aurora_id uuid;
  hermes_id uuid;
  atlantis_id uuid;
BEGIN
  -- Create a test user
  INSERT INTO auth.users (id, email)
  VALUES (gen_random_uuid(), 'test@example.com')
  RETURNING id INTO test_user_id;

  -- Get yacht IDs
  SELECT id INTO poseidon_id FROM yachts WHERE name = 'Посейдон';
  SELECT id INTO afrodita_id FROM yachts WHERE name = 'Афродита';
  SELECT id INTO odyssey_id FROM yachts WHERE name = 'Одиссей';
  SELECT id INTO neptune_id FROM yachts WHERE name = 'Нептун';
  SELECT id INTO aurora_id FROM yachts WHERE name = 'Аврора';
  SELECT id INTO hermes_id FROM yachts WHERE name = 'Гермес';
  SELECT id INTO atlantis_id FROM yachts WHERE name = 'Атлантида';

  -- Insert bookings
  INSERT INTO bookings (id, yacht_id, user_id, start_time, end_time, total_price, status)
  VALUES
    (gen_random_uuid(), poseidon_id, test_user_id, '2025-06-01 10:00:00+00', '2025-06-01 14:00:00+00', 60000, 'confirmed'),
    (gen_random_uuid(), afrodita_id, test_user_id, '2025-06-15 12:00:00+00', '2025-06-15 16:00:00+00', 56000, 'pending'),
    (gen_random_uuid(), odyssey_id, test_user_id, '2025-07-01 11:00:00+00', '2025-07-01 15:00:00+00', 36000, 'confirmed'),
    (gen_random_uuid(), neptune_id, test_user_id, '2025-07-15 14:00:00+00', '2025-07-15 18:00:00+00', 16000, 'confirmed'),
    (gen_random_uuid(), aurora_id, test_user_id, '2025-08-01 09:00:00+00', '2025-08-01 13:00:00+00', 36000, 'pending');

  -- Insert reviews
  INSERT INTO reviews (id, yacht_id, user_id, rating, comment)
  VALUES
    (gen_random_uuid(), poseidon_id, test_user_id, 5, 'Великолепная яхта! Отличный сервис и незабываемые впечатления.'),
    (gen_random_uuid(), poseidon_id, test_user_id, 5, 'Прекрасный отдых на воде. Очень комфортная и современная яхта.'),
    (gen_random_uuid(), afrodita_id, test_user_id, 4, 'Романтическое путешествие удалось на славу. Спасибо команде!'),
    (gen_random_uuid(), odyssey_id, test_user_id, 5, 'Потрясающая скорость и управляемость. Отличный выбор для активного отдыха.'),
    (gen_random_uuid(), neptune_id, test_user_id, 4, 'Классический стиль и современные удобства - отличное сочетание.'),
    (gen_random_uuid(), aurora_id, test_user_id, 5, 'Идеальная яхта для семейного отдыха. Дети в восторге!'),
    (gen_random_uuid(), hermes_id, test_user_id, 5, 'Спортивный характер и отличная маневренность. Рекомендую!'),
    (gen_random_uuid(), atlantis_id, test_user_id, 4, 'Инновационные технологии впечатляют. Очень комфортная яхта.');
END $$;