export const filters = {
    condition: ['new', 'used'],
    category: ['clothes', 'technology', 'health and care'],
    discount: ['20%','30%', '50%','70%']
}
export const sorts = {
    price: ['lower price', 'higher price']
}
// Better formmat to use in the future
// {
//     title: 'Size',
//     options: [
//         {
//             name: 'Small',
//             value: 'small'
//         },
//         {
//             name: 'Medium',
//             value: 'medium'
//         },
//         {
//             name: 'Large',
//             value: 'large'
//         },
//         {
//             name: 'Extra large',
//             value: 'extra-large'
//         }
//     ]
// }

export const data = {
    totalItems: 12,
    products: [
        {
            title: 'Camera',
            price: 103.89,
            type: 'Technology',
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 1,
            otherImages: [
                'https://images.pexels.com/photos/19126034/pexels-photo-19126034/free-photo-of-mujer-camara-fotografo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/19127169/pexels-photo-19127169/free-photo-of-camara-clasico-naturaleza-muerta-rodar.jpeg?auto=compress&cs=tinysrgb&w=1600',
                'https://images.pexels.com/photos/19127168/pexels-photo-19127168/free-photo-of-camara-fotografo-fotografia-tecnologia.jpeg?auto=compress&cs=tinysrgb&w=1600'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            variants: {
                color: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange', 'pink', 'brown', 'gray', 'silver', 'gold', 'beige',],
                lens: ['50mm', '60mm', '70mm', '80mm', '90mm', '100mm', '110mm', '120mm', '130mm', '140mm', '150mm', '160mm', '170mm', '180mm', '190mm', '200mm', 'other'],
                memory: ['8GB', '16GB', '32GB', '64GB', '128GB', '256GB', '512GB', '1TB', 'other'],  
            }
                
        },
        {
            title: 'Laptop',
            price: 103.89,
            type: 'technology',
            image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1600',
            discount: 0.5,
            id: 2,  
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            variants: {
                color: ['black', 'white', 'gray', 'silver', 'beige'],
                ram: ['8GB', '16GB'],
                storage: ['128GB', '256GB', '512GB', '1TB'],
                processor: ['i3', 'i5', 'i7', 'i9'],
            },
        },
        {
            title: 'Watch ',
            price: 103.89,
            type: 'jewelry',
            image: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            variants: {
                color: ['black', 'white', 'gray', 'silver', 'beige'],
                size: ['small', 'medium', 'large', 'extra-large'],
                material: ['gold', 'silver', 'platinum'],
            },
        },
        {
            title: 'Color pens',
            price: 103.89,
            type: 'office and home',
            image: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            variants: {
                color: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange', 'pink', 'brown', 'gray', 'silver', 'gold', 'beige',],
                tip: ['fine', 'medium', 'bold'],
            },
        },
        {
            title: 'Other camara product',
            price: 103.89,
            type: 'technology',
            image: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 5,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Headphones',
            price: 103.89,
            type: 'technology',
            image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 6,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            variants: {
                color: ['black', 'white', 'gray', 'silver', 'beige'],
                type: ['in-ear', 'on-ear', 'over-ear'],
                connection: ['bluetooth', 'wired'],
            },
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/2608495/pexels-photo-2608495.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 7,
            discount: 0.1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
            title: 'Hydrating cream',
            price: 103.89,
            type: 'health and care',
            image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 8,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            variants: {
                'skin-type': ['dry', 'oily', 'normal', 'combination', 'sensitive'],
                size: ['50ml', '100ml', '200ml', '500ml',]
            }
        },
        {
            title: 'Title product',
            price: 103.89,
            type: 'Type product',
            image: 'https://images.pexels.com/photos/19049366/pexels-photo-19049366/free-photo-of-botella-anuncio-producto-comercial.png?auto=compress&cs=tinysrgb&w=1600',
            id: 9,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
            title: 'Skin cream',
            price: 103.89,
            type: 'health and care',
            image: 'https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        },
        {
            title: 'Jeans',
            price: 103.89,
            type: 'clothes',
            image: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 11,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            variants: { 
                size: ['small', 'medium', 'large', 'extra-large'],
                color: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'purple', 'orange', 'pink', 'brown', 'gray', 'silver', 'gold', 'beige',],
                material: ['cotton', 'leather', 'silk', 'wool', 'polyester', 'other'],
            }

        },
        {
            title: 'Lotion',
            price: 103.89,
            type: 'health and care',
            image: 'https://images.pexels.com/photos/8361484/pexels-photo-8361484.jpeg?auto=compress&cs=tinysrgb&w=1600',
            id: 12,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            variants: {
                'skin-type': ['dry', 'oily', 'normal', 'combination', 'sensitive'],
                size: ['50ml', '100ml', '200ml', '500ml',]
            }
        },
        
    ]
}
