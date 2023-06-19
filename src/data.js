import image1 from "../src/assets/image1.jpg";
import image2 from "../src/assets/image2.jpg";
import image3 from "../src/assets/image3.jpg";
import image4 from "../src/assets/image4.jpg";
import image5 from "../src/assets/image5.jpg";
import image6 from "../src/assets/image6.jpg";
import image7 from "../src/assets/image7.jpg";
import image8 from "../src/assets/image8.jpg";
import image9 from "../src/assets/image9.jpg";
import image10 from "../src/assets/image10.jpg";
import image11 from "../src/assets/image11.jpg";
import image12 from "../src/assets/image12.jpg";
import image13 from "../src/assets/image13.jpg";
import image14 from "../src/assets/image14.jpg";
import image15 from "../src/assets/image15.jpg";
import image16 from "../src/assets/image16.jpg";
import image17 from "../src/assets/image17.jpg";
import image18 from "../src/assets/image18.jpg";

export const links = [
    {
        name: "Home",
        path: "/",
        children: [
            {
                image: image1,
                name: "Slideshow + banners",
                path: "/",
            },
            {
                image: image2,
                name: "Full width slideshow",
                path: "/"
            },
            {
                image: image3,
                name: "Categories carousel",
                path: "/"
            }
        ]
    },
    {
        name: "Catalogue",
        path: "/catalogue",
        children: [
            {
                name: "Products List",
                showChildrens: true,
                path: null,
                children: [
                    {
                        name: "Catalogue with side filter",
                        path: null,
                        children: [
                            {
                                name: "Side filter",
                            }
                        ]
                    },
                    {
                        name: "Bestseller",
                        path: null,
                    },
                    {
                        name: "New incomes",
                        path: null,
                    },
                    {
                        name: "Sale items",
                        path: null,
                    }
                ]
            },
            {
                name: "Products pages",
                showChildrens: true,
                path: null,
                children: [
                    {
                        name: "Simple product layout",
                        path: null,
                    },
                    {
                        name: "Product with side tabs",
                        path: null,
                    },
                    {
                        name: "Product with top tapse",
                        path: null,
                    },
                    {
                        name: "Product with sitcky image",
                        path: null,
                    }
                ]
            },
            {
                name: "Bestseller",
                path: null,
                image: image4
            },
            {
                name: "Items on sale",
                path: null,
                image: image5
            }
        ]
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "News",
        path: "/news"
    },
    {
        name: "More",
        path: "/more"
    }
]


export const sliders = [
    {
        image: image6,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        buttonLink: null
    },
    {
        image: image9,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        buttonLink: null
    },
    {
        image: image10,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        buttonLink: null
    }
]


export const categories = [
    {
        name: "Chairs",
        number_of_items: 6,
        path: null,
        children: [
            {
                name: "Dining chairs",
                number_of_items: 2,
                path: null,
            },
            {
                name: "Lounge chairs",
                number_of_items: 4,
                path: null,
            }
        ]
    },
    {
        name: "Decor",
        number_of_items: 7,
        path: null,
        children: [
            {
                name: "Candles",
                number_of_items: 3,
                path: null,
                children: [
                    {
                        name: "Candles: Long",
                        number_of_items: 3,
                        path: null,
                    }
                ]
            },
            {
                name: "Vases",
                number_of_items: 3,
                path: null,
            },
            {
                name: "Other decor",
                number_of_items: 1,
                path: null,
            },
        ]
    },
    {
        name: "Lighting",
        number_of_items: 5,
        path: null,
    },
    {
        name: "Shelves",
        number_of_items: 2,
        path: null,
    },
    {
        name: "Sofa",
        number_of_items: 1,
        path: null,
    },
    {
        name: "Tables",
        number_of_items: 2,
        path: null,
    },
    {
        name: "Textile",
        number_of_items: 2,
        path: null,
    },
]


export const products = [
    {
        id: 1,
        image: image11,
        title: "Meet our new minimalistic furniture collection",
        description: "Maecenas sollicitudin - justo augue, lorem ipsum dolor at malesuada ligula malesuada molestie pellentesque nisl eu turpis.",
        price: 239,
    },
    {
        id: 2,
        image: image12,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 319,
    },
    {
        id: 3,
        image: image13,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 249,
    },
    {
        id: 4,
        image: image14,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 159,
    },
    {
        id: 5,
        image: image15,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 129,
    },
    {
        id: 6,
        image: image16,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 699,
    },
    {
        id: 7,
        image: image17,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 679,
    },
    {
        id: 8,
        image: image18,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 799,
    },
    {
        id: 9,
        image: image14,
        title: "Meet our new minimalistic furniture collection",
        description: "Top quality, premium materials, timeless silhouettes.",
        price: 499,
    },
]