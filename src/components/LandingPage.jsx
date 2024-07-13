import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import mainImage from "../assets/mainBgImage.png";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LandingPage = ({ cart, setCart }) => {
    // let products = [
    //     { id: 0, name: "OXFORD BROWN", price: "192,000", image: product1 },
    //     { id: 1, name: "OXFORD BLACK", price: "320,000", image: product2 },
    //     { id: 2, name: "ITALIAN BLACK", price: "106,000", image: product3 },
    //     { id: 3, name: "OXFORD BROWN", price: "192,000", image: product1 },
    //     { id: 4, name: "OXFORD BLACK", price: "320,000", image: product2 },
    //     { id: 5, name: "ITALIAN BLACK", price: "106,000", image: product3 }
    // ];
    const [storeData, setStoreData] = useState({ items: [] })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const getStoreData = async () => {
        try {
            setLoading(true)
            let storeDataJson = await fetch('https://api.timbu.cloud/products?organization_id=efb41d80c2ce475e99da9d6969d80b00&Appid=7CSHHT7SXR1YU1M&Apikey=17c8df1d199e4e7e8b236954b1956c2820240713084144770801&reverse_sort=false&page=1&size=30', {mode: 'no-cors'}).then(response => console.log(response))
            const data = await storeDataJson;
            setStoreData({
                "page": 1,
                "size": 30,
                "total": 33,
                "debug": null,
                "previous_page": null,
                "next_page": "/products?page=2&size=30",
                "items": [
                  {
                    "name": "Premium Leather sandal",
                    "description": null,
                    "unique_id": "OX196814P",
                    "url_slug": "premium-leather-sandal",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "bbd6655f07e14a28a57c5bb0aadfc142",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:34:52",
                    "last_updated": "2024-07-13T08:34:52",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "bbd6655f07e14a28a57c5bb0aadfc142",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "a0c03addf3b046c09b9d096c4003aed8.jpg",
                        "url": "oxford-brogues-1/product_premium_leather_sandal_e816f7_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [6200, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Sandwood Sandal",
                    "description": null,
                    "unique_id": "OX196818P",
                    "url_slug": "sandwood-sandal",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "79838429bbf242658d57651f659ed53c",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:35:21",
                    "last_updated": "2024-07-13T08:35:21",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "79838429bbf242658d57651f659ed53c",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "ab4bf1e9da28457ea3bca619b213a917.jpg",
                        "url": "oxford-brogues-1/product_sandwood_sandal_a60779_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [6500, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Palm BW",
                    "description": null,
                    "unique_id": "OX196787P",
                    "url_slug": "palm-bw",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "c2e3183d2be9401f97e2f8b7e8b2767e",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:29:28",
                    "last_updated": "2024-07-13T08:29:28",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "c2e3183d2be9401f97e2f8b7e8b2767e",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "c8ac6459bffd4c33bd1d6118425e5611.jpg",
                        "url": "oxford-brogues-1/product_palm_bw_8796df_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [7000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Beach sandal",
                    "description": null,
                    "unique_id": "OX196788P",
                    "url_slug": "beach-sandal",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "a77c7a08f07c494bbc05c43ebc3a69dd",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:30:00",
                    "last_updated": "2024-07-13T08:30:00",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "a77c7a08f07c494bbc05c43ebc3a69dd",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "863540fb9a1e418fa2a7fd804953ab48.jpg",
                        "url": "oxford-brogues-1/product_beach_sandal_a0544f_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [7500, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Men's Anti-slip sandals",
                    "description": null,
                    "unique_id": "OX196820P",
                    "url_slug": "men-s-anti-slip-sandals",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "4eac8957e16d49dfb110bbbdd0237632",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:35:45",
                    "last_updated": "2024-07-13T08:35:45",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "4eac8957e16d49dfb110bbbdd0237632",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "72b66c21223549d7ab1def682205002e.jpg",
                        "url": "oxford-brogues-1/product_men_s_anti_slip_sandals_53d004_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [8000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Men's PU Leather Shoes",
                    "description": null,
                    "unique_id": "OX196822P",
                    "url_slug": "men-s-pu-leather-shoes",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "f0720e537aae4260b5c4fbb7966c33e6",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:36:10",
                    "last_updated": "2024-07-13T08:36:10",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "f0720e537aae4260b5c4fbb7966c33e6",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "80769186215b44f6945bbfe2ab3da0f8.jpg",
                        "url": "oxford-brogues-1/product_men_s_pu_leather_shoes_d81b16_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [9770, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "ITALIAN BLACK Shoe",
                    "description": null,
                    "unique_id": "OX196840P",
                    "url_slug": "italian-black-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "1d11a01012c44e2d804d9bc7b9a59975",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:39:34",
                    "last_updated": "2024-07-13T08:39:34",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "1d11a01012c44e2d804d9bc7b9a59975",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "504b693a91424db987bb11b8e006f239.jpg",
                        "url": "oxford-brogues-1/product_italian_black_shoe_b5f138_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [10600, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Black-Gold Sneaker",
                    "description": null,
                    "unique_id": "OX196790P",
                    "url_slug": "black-gold-sneaker",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "216efbe0076c4e6d8dd0cf7e1a1db885",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:30:32",
                    "last_updated": "2024-07-13T08:30:32",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "216efbe0076c4e6d8dd0cf7e1a1db885",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "cf1d271bfe1a4d51b193011bffc38cd2.jpg",
                        "url": "oxford-brogues-1/product_black_gold_sneaker_408767_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [12800, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Suede shoes",
                    "description": null,
                    "unique_id": "OX196793P",
                    "url_slug": "suede-shoes",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "62fcf0e891024ff8a4cbe0a3db820d47",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:30:58",
                    "last_updated": "2024-07-13T08:30:58",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "62fcf0e891024ff8a4cbe0a3db820d47",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "5189ca3d2fbe43e98fa57891e9f28317.jpg",
                        "url": "oxford-brogues-1/product_suede_shoes_da48fc_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [12900, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Classic half shoe",
                    "description": null,
                    "unique_id": "OX196776P",
                    "url_slug": "classic-half-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "458d31de5b214d79a17ba3f0e081818a",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:27:18",
                    "last_updated": "2024-07-13T08:27:18",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "458d31de5b214d79a17ba3f0e081818a",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "d08c9d51501a49f8835c8269aa7a7e05.jpg",
                        "url": "oxford-brogues-1/product_classic_half_shoe_99ec58_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [14000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Summer Slippers",
                    "description": null,
                    "unique_id": "OX196764P",
                    "url_slug": "summer-slippers",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "dc3485685f6f4abebdd9dff83ad67f47",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:25:16",
                    "last_updated": "2024-07-13T08:25:16",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "dc3485685f6f4abebdd9dff83ad67f47",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "9e89a2186c8d4a45a19e3edebb6ac38d.jpg",
                        "url": "oxford-brogues-1/product_summer_slippers_df1d9d_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [15700, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Croc style sandal",
                    "description": null,
                    "unique_id": "OX196768P",
                    "url_slug": "croc-style-sandal",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "289677d473e44dd28b77c5ffaf86f65b",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:25:58",
                    "last_updated": "2024-07-13T08:25:58",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "289677d473e44dd28b77c5ffaf86f65b",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "db3f047264ea41d2983dd9f5a8341a82.jpg",
                        "url": "oxford-brogues-1/product_croc_style_sandal_d1ba1c_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [16000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Casual High-Top Shoes",
                    "description": null,
                    "unique_id": "OX196826P",
                    "url_slug": "casual-high-top-shoes",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "f4a8c76878a949299154afcbb6a22b61",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:36:35",
                    "last_updated": "2024-07-13T08:36:35",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "f4a8c76878a949299154afcbb6a22b61",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "f3ebf90831694a468fd9c6a152aedf60.jpg",
                        "url": "oxford-brogues-1/product_casual_high_top_shoes_0befda_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [16900, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Constatine Boot",
                    "description": null,
                    "unique_id": "OX196772P",
                    "url_slug": "constatine-boot",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "95d89aaf2be042caa647cff48b34f682",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:26:39",
                    "last_updated": "2024-07-13T08:26:39",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "95d89aaf2be042caa647cff48b34f682",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "7b2b309d46d94ee5975333e0b10387c0.jpg",
                        "url": "oxford-brogues-1/product_constatine_boot_72d57b_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [16900, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "OXFORD BROWN shoe",
                    "description": null,
                    "unique_id": "OX196847P",
                    "url_slug": "oxford-brown-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "b5c733f014b84b039ab93d390ea7f21f",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:40:52",
                    "last_updated": "2024-07-13T08:40:52",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "b5c733f014b84b039ab93d390ea7f21f",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "cfd94e5aa0c94eed85b4c5cdc030ba53.jpg",
                        "url": "oxford-brogues-1/product_oxford_brown_shoe_8174a8_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [19000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Molianseng Blunt Boot",
                    "description": null,
                    "unique_id": "OX196827P",
                    "url_slug": "molianseng-blunt-boot",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "0a079040ddb74aaa941836e51000523b",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:36:58",
                    "last_updated": "2024-07-13T08:36:58",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "0a079040ddb74aaa941836e51000523b",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "ec4be579f6d54c2d8a0edca870630433.jpg",
                        "url": "oxford-brogues-1/product_molianseng_blunt_boot_4bb8d2_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [19800, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "ASHION 2024",
                    "description": null,
                    "unique_id": "OX196796P",
                    "url_slug": "ashion-2024",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "81b400fa5fa2494a8834bfa449d7479a",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:31:25",
                    "last_updated": "2024-07-13T08:31:25",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "81b400fa5fa2494a8834bfa449d7479a",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "e02904b17a8c47359093955802abb6bd.jpg",
                        "url": "oxford-brogues-1/product_ashion_2024_a7d6c2_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [22000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Lauder WM",
                    "description": null,
                    "unique_id": "OX196779P",
                    "url_slug": "lauder-wm",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "30c31271a1fb4a1f9450244cbcefdba1",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:27:51",
                    "last_updated": "2024-07-13T08:27:51",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "30c31271a1fb4a1f9450244cbcefdba1",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "f332f250783d46738e44c2f154c5665b.jpg",
                        "url": "oxford-brogues-1/product_lauder_wm_50d1cf_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [22400, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "High top sneaker",
                    "description": null,
                    "unique_id": "OX196829P",
                    "url_slug": "high-top-sneaker",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "87b81ba3a9c9450088571a6b36ad0f9c",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:37:25",
                    "last_updated": "2024-07-13T08:37:25",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "87b81ba3a9c9450088571a6b36ad0f9c",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "116dd78940e849fc937749f0319abbec.jpg",
                        "url": "oxford-brogues-1/product_high_top_sneaker_95b3cc_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [24000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Santiago Leather Brogue",
                    "description": null,
                    "unique_id": "OX196798P",
                    "url_slug": "santiago-leather-brogue",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "3ae79cc159c34689b3f2f3b5c2254dda",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:31:53",
                    "last_updated": "2024-07-13T08:31:53",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "3ae79cc159c34689b3f2f3b5c2254dda",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "bba6142368b945adafc1d948c66072bf.jpg",
                        "url": "oxford-brogues-1/product_santiago_leather_brogue_81d63b_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [24000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Breathable Running Shoe",
                    "description": null,
                    "unique_id": "OX196801P",
                    "url_slug": "breathable-running-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "5a0b527227e04c2580125564bd2740c3",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:32:18",
                    "last_updated": "2024-07-13T08:32:18",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "5a0b527227e04c2580125564bd2740c3",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "ef76b93081b84475a2bbef4a5b9416b9.jpg",
                        "url": "oxford-brogues-1/product_breathable_running_shoe_5bd7da_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [25000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Bestizzy Men's Shoe",
                    "description": null,
                    "unique_id": "OX196802P",
                    "url_slug": "bestizzy-men-s-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "db2b251d6982489085f2731e17c93c5c",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:32:54",
                    "last_updated": "2024-07-13T08:32:54",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "db2b251d6982489085f2731e17c93c5c",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "6a74fb5bf5974517921d8f9d7335b0ae.jpg",
                        "url": "oxford-brogues-1/product_bestizzy_men_s_shoe_ef18c4_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [29000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "OXFORD BLACK shoe",
                    "description": null,
                    "unique_id": "OX196849P",
                    "url_slug": "oxford-black-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "346b27cfcf27403594c38847718aa0c3",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:41:19",
                    "last_updated": "2024-07-13T08:41:19",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [],
                    "current_price": [
                      {
                        "NGN": [32000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "ADIDAS Advantage",
                    "description": null,
                    "unique_id": "OX196832P",
                    "url_slug": "adidas-advantage",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "264c2af9027d44cfb63c4f0dddec5de1",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:37:51",
                    "last_updated": "2024-07-13T08:37:51",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "264c2af9027d44cfb63c4f0dddec5de1",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "72fe7a93181048cda85ad2eef77169ea.jpg",
                        "url": "oxford-brogues-1/product_adidas_advantage_a60038_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [35000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Zenith men's shoe",
                    "description": null,
                    "unique_id": "OX196810P",
                    "url_slug": "zenith-men-s-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "5e8c937d0e484022b37dd00c42ff9914",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:33:57",
                    "last_updated": "2024-07-13T08:33:57",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "5e8c937d0e484022b37dd00c42ff9914",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "0869d2b97cfe42e09f2a437ae4687137.jpg",
                        "url": "oxford-brogues-1/product_zenith_men_s_shoe_dc7f4b_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [42000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Cubana stone shoe",
                    "description": null,
                    "unique_id": "OX196781P",
                    "url_slug": "cubana-stone-shoe",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "00df2931644949309b02d34a692785a1",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:28:20",
                    "last_updated": "2024-07-13T08:28:20",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "00df2931644949309b02d34a692785a1",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "ec6b4e37b37246329ab23ab43b09978c.jpg",
                        "url": "oxford-brogues-1/product_cubana_stone_shoe_f57350_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [47000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Glossy Tassel",
                    "description": null,
                    "unique_id": "OX196836P",
                    "url_slug": "glossy-tassel",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "f6d44875333d4a7a84974caa7d8c32a1",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:38:26",
                    "last_updated": "2024-07-13T08:38:26",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "f6d44875333d4a7a84974caa7d8c32a1",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "56999ae53329496c847c2b130819853e.jpg",
                        "url": "oxford-brogues-1/product_glossy_tassel_ea641f_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [48000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "Chelsea boot",
                    "description": null,
                    "unique_id": "OX196838P",
                    "url_slug": "chelsea-boot",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "c63cdb3090694004870b22887df784dd",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:38:51",
                    "last_updated": "2024-07-13T08:38:51",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "c63cdb3090694004870b22887df784dd",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "25da62eeb8874962aed3e25fe9a7ff98.jpg",
                        "url": "oxford-brogues-1/product_chelsea_boot_0e97a5_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [50310, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "ADIDAS Alliver M",
                    "description": null,
                    "unique_id": "OX196812P",
                    "url_slug": "adidas-alliver-m",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "4269ae2980f44e24a914587a6cd145c8",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:34:24",
                    "last_updated": "2024-07-13T08:34:24",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "4269ae2980f44e24a914587a6cd145c8",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "076238a5e014462d93206da8d208cf88.jpg",
                        "url": "oxford-brogues-1/product_adidas_alliver_m_80f7d4_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [85300, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  },
                  {
                    "name": "ADIDAS Galaxy 6",
                    "description": null,
                    "unique_id": "OX196783P",
                    "url_slug": "adidas-galaxy-6",
                    "is_available": true,
                    "is_service": false,
                    "previous_url_slugs": null,
                    "unavailable": false,
                    "unavailable_start": null,
                    "unavailable_end": null,
                    "id": "8148a195ef9d4f38bd0764a3b2c623db",
                    "parent_product_id": null,
                    "parent": null,
                    "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                    "product_image": [],
                    "categories": [],
                    "date_created": "2024-07-13T08:28:56",
                    "last_updated": "2024-07-13T08:28:56",
                    "user_id": "2ad696a4fd6644e48a1559fd006c36ef",
                    "photos": [
                      {
                        "model_name": "products",
                        "model_id": "8148a195ef9d4f38bd0764a3b2c623db",
                        "organization_id": "efb41d80c2ce475e99da9d6969d80b00",
                        "filename": "ca74dab2e8af45a6959a4edd778e7fa7.jpg",
                        "url": "oxford-brogues-1/product_adidas_galaxy_6_c6c50e_1.jpg",
                        "is_featured": false,
                        "save_as_jpg": true,
                        "is_public": true,
                        "file_rename": false,
                        "position": 1
                      }
                    ],
                    "current_price": [
                      {
                        "NGN": [101000, null, []
                        ]
                      }
                    ],
                    "is_deleted": false,
                    "available_quantity": 0,
                    "selling_price": null,
                    "discounted_price": null,
                    "buying_price": null,
                    "extra_infos": null
                  }
                ]
              }
              );
            setError(false)
            setLoading(false)
        }
        catch (error) {
            console.log(error);
            setError(true)
            setLoading(false)
        }
    }
    useEffect(() => {
        getStoreData();
    }, []);

    useEffect(() => {
        console.log("Cart updated:", cart);
    }, [cart]);

    return (
        <>
            <div className="w-full md:px-0 md:pt-[180px]">
                <div className="max-w-screen-xl mx-auto min-h-screen md:rounded-3xl items-center flex py-40 px-2 md:p-20" style={{ background: `url(${mainImage})`, backgroundSize: "cover" }}>
                    <div className="h-fit md:w-[80%]">
                        <h1 className="text-6xl font-trajan py-6 md:py-0 text-white ">
                            Discover Timeless & Elegant Luxury Men's Brogues
                        </h1>
                        <div className="font-bold font-cabinet">
                            <p className="text-white w-full md:w-[45%] py-12 text-xl">
                                Our exclusive collection of executive men’s brogues, crafted to elevate your style effortlessly.
                            </p>
                            <div className="w-full md:w-fit gap-4 md:flex">
                                <a href="#products"><button className="bg-white py-4 w-full md:w-fit px-8 rounded-full">Browse products</button></a>
                                <button className="border-white border w-full my-4 md:my-0 md:w-fit text-white py-4 px-8 rounded-full">About us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto mt-16 px-2">
                    <h1 className="md:text-[80px] text-[40px] font-trajan" id="products">
                        featured products
                    </h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {storeData.items.map((product) => (
                            <Product key={product.id} cart={cart} setCart={setCart} productData={product} />
                        ))}
                    </div>
                    {cart.length>0 &&<Link to="/cart" className="text-3xl block py-2 px-4 rounded-xl mb-4 hover:bg-black/20 hover:border-[#eee] cursor-pointer font-cabinet text-center md:w-fit border border-red-600">View Cart</Link>}
                </div>
            </div>
        </>
    );
}

export default LandingPage;
