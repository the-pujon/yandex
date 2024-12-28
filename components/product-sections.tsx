/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { ProductGrid } from "@/components/product-grid";

export function ProductSections() {
  const [menuData, setMenuData] = useState<any | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const data = {
      data: [
        {
          id: 0,
          category: "What's new",
          category_item: [
            {
              id: 0,
              name: "Крокетсы большие",
              price: 690,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3772784/685b91b72f622cd726ed76008838c70d-400x400.jpeg",
              status: "in-stock",
            },
          ],
        },

        {
          id: 1,
          category: "Hовинки",
          category_item: [
            {
              id: 1,
              name: "Крокетсы большие",
              price: 690,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3772784/685b91b72f622cd726ed76008838c70d-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 2,
              name: "Крокетсы стандартные",
              price: 590,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3709189/ea0ceaf2681a79a86550602664278a91-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 3,
              name: "Баскет Крокетсов",
              price: 1300,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3538649/fe9c4fecf09ef398f2129892046118ae-400x400.jpeg",
              status: "in-stock",
            },
          ],
        },
        {
          id: 2,
          category: "Боксы",
          category_item: [
            {
              id: 4,
              name: "Шефбургер Бокс",
              price: 3200,
              description:
                "Шефбургер (1440 т), картофель фри большой (690 т), стрипсы или крылья (2 шт., 597 т), напиток на выбор (500 мл, 550 т), соус (1 шт., 150 т)",
              photoUrl:
                "https://eda.yandex/images/3439028/2c47174ea8eb4982ed0b273dc56c7a00-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Шефбургер Бокс",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Шефбургер",
                  sub_category_item: ["Острый", "Оригинальный"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
                {
                  sub_category_name: "Стрипсы или крылья",
                  sub_category_item: [
                    "Крылья острые",
                    "Стрипсы острые",
                    "Стрипсы оригинальные",
                  ],
                },
              ],
            },
            {
              id: 5,
              name: "Шеф Тауэр Бокс",
              price: 3700,
              description:
                "Шеф Тауэр (1940 т), картофель фри большой (690 т), стрипсы или крылья (2 шт., 597 т), напиток на выбор (500 мл, 550 т), соус (1 шт., 150 т)",
              photoUrl:
                "https://eda.yandex/images/2750126/1fe48777bae9b1acce976e85f3e72e3b-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Шефбургер",
                  sub_category_item: ["Острый", "Оригинальный"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
                {
                  sub_category_name: "Стрипсы или крылья",
                  sub_category_item: [
                    "Крылья острые",
                    "Стрипсы острые",
                    "Стрипсы оригинальные",
                  ],
                },
              ],
            },
            {
              id: 6,
              name: "Дабл Шефбургер Бокс",
              price: 3900,
              description:
                "Дабл Шефбургер (2190 т), картофель фри большой (690 т), стрипсы или крылья (2 шт., 597 т), напиток на выбор (500 мл, 550 т), соус (1 шт., 150 т)",
              photoUrl:
                "https://eda.yandex/images/2750126/1fe48777bae9b1acce976e85f3e72e3b-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Шефбургер",
                  sub_category_item: ["Острый", "Оригинальный"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
                {
                  sub_category_name: "Стрипсы или крылья",
                  sub_category_item: [
                    "Крылья острые",
                    "Стрипсы острые",
                    "Стрипсы оригинальные",
                  ],
                },
              ],
            },
            {
              id: 7,
              name: "Боксмастер Бокс",
              price: 3700,
              description:
                "Боксмастер (1840 т), картофель фри большой (690 т), стрипсы (597 т, 2 шт.) или крылья острые (597 т, 2 шт.), напиток на выбор (550 т, 500 мл), соус (150 т, 1 шт.)",
              photoUrl:
                "https://eda.yandex/images/2750126/1fe48777bae9b1acce976e85f3e72e3b-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Шефбургер",
                  sub_category_item: ["Острый", "Оригинальный"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
                {
                  sub_category_name: "Стрипсы или крылья",
                  sub_category_item: [
                    "Крылья острые",
                    "Стрипсы острые",
                    "Стрипсы оригинальные",
                  ],
                },
              ],
            },
            {
              id: 8,
              name: "Твистер Бокс",
              price: 3200,
              description:
                "Твистер (1440 т), картофель фри большой (690 т), напиток на выбор (550 т, 500 мл), стрипсы (597 т, 2 шт.) или острые крылья (597 т, 2 шт.), соус (150 т, 1 шт.)",
              photoUrl:
                "https://eda.yandex/images/2750126/1fe48777bae9b1acce976e85f3e72e3b-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Шефбургер",
                  sub_category_item: ["Острый", "Оригинальный"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
                {
                  sub_category_name: "Стрипсы или крылья",
                  sub_category_item: [
                    "Крылья острые",
                    "Стрипсы острые",
                    "Стрипсы оригинальные",
                  ],
                },
              ],
            },
            {
              id: 9,
              name: "Сандерс Мега Бургер Бокс",
              price: 3950,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3502800/db9e583fce4068a5ceff8478365e8128-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 10,
              name: "Чизбургер Бокс",
              price: 3000,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3502800/db9e583fce4068a5ceff8478365e8128-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 11,
              name: "Твистер Кебаб Бокс",
              price: 3450,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3506707/fd9b292b15635cf217c7f452b12cc7d5-216x188.jpeg",
              status: "out-in-stock",
            },
          ],
        },
        {
          id: 3,
          category: "Комбо Баскеты",
          category_item: [
            {
              id: 12,
              name: "Баскет M Комбо",
              price: 8650,
              description:
                "Острые крылья (10 шт., 3600 т), стрипсы (10 шт., 2986 т), Pepsi (1,5 л, 750 т), баскет фри (1100 т), соус (3 шт., 450 т)",
              photoUrl:
                "https://eda.yandex/images/3569651/8607f6f86e55fc7c9fd6bf6601b07c12-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Стрипсы",
                  sub_category_item: ["Стрипсы"],
                },
                {
                  sub_category_name: "Pepsi",
                  sub_category_item: ["Pepsi"],
                },
                {
                  sub_category_name: "Острые крылья",
                  sub_category_item: ["Острые крылья"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Баскет фри", "Баскет крокетсов"],
                },
              ],
            },
            {
              id: 13,
              name: "Баскет L Комбо",
              price: 10390,
              description:
                "Острые крылья (13 шт., 4680 т) и стрипсы (13 шт., 3881 т), Pepsi (1,5 л, 750 т), баскет фри (1100 т), соус (4 шт., 600 т)",
              photoUrl:
                "https://eda.yandex/images/3420935/b7cd5c0e4e52753b48a0b75bb3506f8c-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Стрипсы",
                  sub_category_item: ["Стрипсы"],
                },
                {
                  sub_category_name: "Pepsi",
                  sub_category_item: ["Pepsi"],
                },
                {
                  sub_category_name: "Острые крылья",
                  sub_category_item: ["Острые крылья"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Баскет фри", "Баскет крокетсов"],
                },
              ],
            },
            {
              id: 14,
              name: "Баскет S Комбо",
              price: 5700,
              description:
                "Острые крылья (13 шт., 4680 т) и стрипсы (13 шт., 3881 т), Pepsi (1,5 л, 750 т), баскет фри (1100 т), соус (4 шт., 600 т)",
              photoUrl:
                "https://eda.yandex/images/3456802/c099625988d0ae0c9ac7977dc3854531-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Стрипсы",
                  sub_category_item: ["Стрипсы"],
                },
                {
                  sub_category_name: "Pepsi",
                  sub_category_item: ["Pepsi"],
                },
                {
                  sub_category_name: "Острые крылья",
                  sub_category_item: ["Острые крылья"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Баскет фри", "Баскет крокетсов"],
                },
              ],
            },
            {
              id: 15,
              name: "Пати Бокс Комбо",
              price: 8990,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3337779/c8196c7afca96f17d180aef7481b54de-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 16,
              name: "Френдс Бокс Комбо",
              price: 10200,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3337779/c8196c7afca96f17d180aef7481b54de-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 17,
              name: "Баскет 4 ножки Комбо",
              price: 3550,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/2783965/f3bf8492f390ec0834c66af2e1aacbad-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 18,
              name: "Баскет 9 ножек Комбо",
              price: 6950,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3805363/290a42b7c3eae0b2bc4eb4ce740ff6bc-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 19,
              name: "Фэмили бокс Комбо",
              price: 9990,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/2394388/4159a684b016ab20ad0d36cceead19bb-216x188.jpeg",
              status: "out-in-stock",
            },
          ],
        },
        {
          id: 4,
          category: "Сочная курочка",
          category_item: [
            {
              id: 20,
              name: "Стрипсы 5 шт",
              price: 1800,
              description:
                "Нежные кусочки в панировке, обжаренные до золотистой корочки (5 шт.)",
              photoUrl:
                "https://eda.yandex/images/3436037/164640f3cd2f36cc9596b424fce01a51-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "На выбор",
                  sub_category_item: ["Острые", "Оригинальные"],
                },
              ],
            },
            {
              id: 21,
              name: "Стрипсы 7 шт",
              price: 2350,
              description:
                "Нежные кусочки в панировке, обжаренные до золотистой корочки (7 шт.)",
              photoUrl:
                "https://eda.yandex/images/3436037/164640f3cd2f36cc9596b424fce01a51-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "На выбор",
                  sub_category_item: ["Острые", "Оригинальные"],
                },
              ],
            },
            {
              id: 23,
              name: "Баскет 4 ножки",
              price: 2290,
              description: "Сочные ножки (4 шт.)",
              photoUrl:
                "https://eda.yandex/images/3512826/8bd747ce15e0cd2cf3220851fa0fe379-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "На выбор",
                  sub_category_item: ["Острые", "Оригинальные"],
                },
              ],
            },
            {
              id: 24,
              name: "Куриная ножка",
              price: 650,
              description: "Сочные ножки (4 шт.)",
              photoUrl:
                "https://avatars.mds.yandex.net/get-bunker/50064/d72205e544198b757690858b7cf6245b7d8df050/orig",
              status: "in-stock",
            },
          ],
        },
        {
          id: 5,
          category: "Снэки",
          category_item: [
            {
              id: 25,
              name: "Байтс баскет",
              price: 2350,
              description: "Сочные кусочки курицы в хрустящей панировке",
              photoUrl:
                "https://eda.yandex/images/3583862/0603da5550d9bbbd3c95db0cedc3c482-216x188.jpeg",
              status: "in-stock",
            },
            {
              id: 26,
              name: "Байтс & Фри",
              price: 1490,
              description: "Картофель фри, политый соусом, байтсы",
              photoUrl:
                "https://eda.yandex/images/3813301/f584264739d42911aa1be1239b3de3c0-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 27,
              name: "Картофель фри большой",
              price: 690,
              description:
                "Картофель, обжаренный до золотистой корочки, хрустящий снаружи и мягкий внутри. Является популярным гарниром или закуской, которая отлично сочетается с различными соусами",
              photoUrl:
                "https://eda.yandex/images/3528285/61bbfe6d795a70a794d3e8b67097526c-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 28,
              name: "Баскет фри",
              price: 1100,
              description:
                "Большая порция картофеля, обжаренного до золотистой корочки, хрустящего снаружи и мягкого внутри. Является популярным гарниром или закуской, которая отлично сочетается с различными соусами",
              photoUrl:
                "https://eda.yandex/images/3538649/fe9c4fecf09ef398f2129892046118ae-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 29,
              name: "Хашбраун",
              price: 400,
              description: "Картофельная котлета",
              photoUrl:
                "https://eda.yandex/images/3807432/c11a8435930d5e2d37bbb29a1a059d95-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 30,
              name: "Картофель фри стандартный",
              price: 590,
              description:
                "Картофель, обжаренный до золотистой корочки, хрустящий снаружи и мягкий внутри. Является популярным гарниром или закуской, которая отлично сочетается с различными соусами",
              photoUrl:
                "https://eda.yandex/images/3749380/84914e79a73bcca310c275d20dc2281f-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 31,
              name: "Наггетсы 6 шт          ",
              price: 990,
              description:
                "Нежные кусочки в панировке, обжаренные до золотистой корочки (6 шт.)",
              photoUrl:
                "https://eda.yandex/images/2783965/b575841406205be158327e6aef2d951f-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 32,
              name: "Наггетсы 16 шт",
              price: 2500,
              description:
                "Нежные кусочки в панировке, обжаренные до золотистой корочки (16 шт.)",
              photoUrl:
                "https://eda.yandex/images/2783965/b575841406205be158327e6aef2d951f-400x400.jpeg",
              status: "in-stock",
            },
          ],
        },
        {
          id: 6,
          category: "Комбо",
          category_item: [
            {
              id: 33,
              name: "Шефбургер Комбо",
              price: 2650,
              description:
                "Шефбургер (1150 т), картофель фри большой (690 т), напиток на выбор (500 мл, 550 т), соус (1 шт., 150 т)",
              photoUrl:
                "https://eda.yandex/images/3725642/574df1ea7db3c6b328f27b11810d62e2-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Шефбургер",
                  sub_category_item: ["Оригинальный", "Острый"],
                },
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
              ],
            },
            {
              id: 34,
              name: "Дабл Шефбургер Комбо",
              price: 3350,
              description:
                "Острые крылья (13 шт., 4680 т) и стрипсы (13 шт., 3881 т), Pepsi (1,5 л, 750 т), баскет фри (1100 т), соус (4 шт., 600 т)",
              photoUrl:
                "https://eda.yandex/images/3420935/b7cd5c0e4e52753b48a0b75bb3506f8c-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Шефбургер",
                  sub_category_item: ["Оригинальный", "Острый"],
                },
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
              ],
            },
            {
              id: 36,
              name: "Шеф Тауэр Комбо",
              price: 3200,
              description:
                "Шеф Тауэр (1940 т), картофель фри большой (690 т), напиток на выбор (500 мл, 550 т), соус (1 шт., 150 т)",
              photoUrl:
                "https://eda.yandex/images/3813301/b399f6dd6ced52ab501497762f61e26c-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Шеф Тауэр",
                  sub_category_item: ["Оригинальный", "Острый"],
                },
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
              ],
            },
            {
              id: 37,
              name: "Твистер Комбо          ",
              price: 2650,
              description:
                "Твистер (1440 т), картофель фри большой (690 т), напиток на выбор (550 т, 500 мл), соус (150 т, 1 шт.)",
              photoUrl:
                "https://eda.yandex/images/3774488/1c687cc5d84986e9d3ca413e2fd4e210-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Твистер на выбор",
                  sub_category_item: ["Острый", "Оригинальный"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
              ],
            },
            {
              id: 38,
              name: "Боксмастер Комбо          ",
              price: 3100,
              description:
                "Шеф Тауэр (1940 т), картофель фри большой (690 т), напиток на выбор (500 мл, 550 т), соус (1 шт., 150 т)",
              photoUrl:
                "https://eda.yandex/images/3534679/febb573b5961e059616234e67332ce69-400x400.jpeg",
              status: "in-stock",
              subCategory: [
                {
                  sub_category_name: "Соус",
                  sub_category_item: [
                    "Кисло-сладкий",
                    "Кетчуп",
                    "Сырный",
                    "Барбекю",
                    "Чесночный",
                    "Терияки",
                  ],
                },
                {
                  sub_category_name: "Боксмастер на выбор",
                  sub_category_item: ["Острый", "Оригинальный"],
                },
                {
                  sub_category_name: "Напиток на выбор",
                  sub_category_item: ["Pepsi", "Lipton Ice Tea"],
                },
                {
                  sub_category_name: "Снэк на выбор",
                  sub_category_item: ["Картофель фри большой"],
                },
              ],
            },
            {
              id: 39,
              name: "Твистер Кебаб Комбо",
              price: 2950,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3805363/878303f711398c79388089fea8e60038-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 40,
              name: "Ай-Твистер Комбо",
              price: 1900,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3805363/878303f711398c79388089fea8e60038-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 41,
              name: "Лонгер Комбо",
              price: 1900,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3702558/4ab72938222f1e2f4194e34a45860261-216x188.jpeg",
              status: "out-in-stock",
            },
            {
              id: 42,
              name: "Сандерс Мега Бургер Комбо",
              price: 2500,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3816972/c05a843021704635c9280c7380ac840a-216x188.jpeg",
              status: "out-in-stock",
            },
          ],
        },
        {
          id: 7,
          category: "Напитки",
          category_item: [
            {
              id: 43,
              name: "Lipton Ice Tea",
              price: 550,
              description: "Холодный чай",
              photoUrl:
                "https://eda.yandex/images/3798638/117016b98f20937537c63aa4e9ba67b4-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 44,
              name: "Pepsi",
              price: 550,
              description:
                "Охлаждающий газированный напиток в пластиковой бутылке",
              photoUrl:
                "https://eda.yandex/images/3420935/a1448559bbc36d30aa28abed32e004dd-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 45,
              name: "Сок Da-Da персик",
              price: 400,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3490902/7953b36310ac25f98a33d7484a020765-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 46,
              name: "Вода Asu",
              price: 400,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3595381/61bf0e5f20c612432eac2e67c2802d72-216x188.jpeg",
              status: "in-stock",
            },
            {
              id: 47,
              name: "Pepsi Zero",
              price: 550,
              description: "Хрустящий и сочный снэк из тертого картофеля",
              photoUrl:
                "https://eda.yandex/images/3781088/b45559004b6a10c4f1057dadd2a5d181-216x188.jpeg",
              status: "in-stock",
            },
          ],
        },
        {
          id: 8,
          category: "Дополнительно",
          category_item: [
            {
              id: 48,
              name: "Соус Кисло-сладкий          ",
              price: 150,
              description:
                "Классический соус, известный своей гладкой и кремообразной текстурой, богатым и насыщенным вкусом. Этот соус обладает широкой популярностью и часто используется в мировой кулинарии",
              photoUrl:
                "https://eda.yandex/images/3682162/66d4564c153f69b4fa24280907a106c5-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 49,
              name: "Соус Барбекю          ",
              price: 150,
              description:
                "Имеет широкую популярность, благодаря своей универсальности и вкусовому богатству. Он придает блюдам особый аромат и вкус, делая их приятными для гурманов и любителей пикантности",
              photoUrl:
                "https://eda.yandex/images/3806023/36ab043bcd3d190868019e9115b32776-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 50,
              name: "Соус Чесночный          ",
              price: 150,
              description:
                "Ароматный соус, который отличается ярким пряным вкусом чеснока. Отлично сочетается с мясом, рыбой, овощами и салатами",
              photoUrl:
                "https://eda.yandex/images/3512182/047f4fa01f7530e2de0174e30b45f69a-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 51,
              name: "Соус Терияки          ",
              price: 150,
              description:
                "Придает блюдам карамелизированный вкус. Хорошо сочетается с различными видами мяса и рыбы, а также овощами",
              photoUrl:
                "https://eda.yandex/images/3806023/c779b5ae3cf98354971263badf4513f3-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 52,
              name: "Кетчуп          ",
              price: 150,
              description:
                "Классический и универсальный соус, приготовленный на основе томатов",
              photoUrl:
                "https://eda.yandex/images/3529908/db5d1779659c63565ccca795514c0015-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 53,
              name: "Соус Сырный          ",
              price: 550,
              description:
                "Ароматный и нежный соус, который придаёт блюдам богатый вкус и насыщенную текстуру. Он идеально сочетается с различными закусками, грилем, сэндвичами и салатами",
              photoUrl:
                "https://eda.yandex/images/3378693/a139ef8ba352dfbe7fac9437806a8322-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 54,
              name: "Булочка ",
              price: 200,
              description: "Воздушная булочка",
              photoUrl:
                "https://eda.yandex/images/3491582/9bfa8d5f92a540ba4c975891776911aa-400x400.jpeg",
              status: "in-stock",
            },
            {
              id: 55,
              name: "Сыр",
              price: 150,
              description:
                "Дополнительный ломтик сыра для любого блюда          ",
              photoUrl:
                "https://eda.yandex/images/3483997/851c2eb9920d57d6eb6a9abc7fd3107a-400x400.jpeg",
              status: "in-stock",
            },
          ],
        },
      ],
    };
    setMenuData(data);
  }, []);

  if (!menuData) return null;

  return (
    <div className="space-y-24">
      {menuData.data.map((category: any) => (
        <section
          key={category.id}
          id={category.category.toLowerCase().replace(/\s+/g, "-")}
          className="scroll-mt-20"
        >
          <ProductGrid
            title={category.category}
            products={category.category_item}
          />
        </section>
      ))}
    </div>
  );
}
