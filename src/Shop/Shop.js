// import React, { useState } from 'react';
// import './Shop.css';

// function Shop() {
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Product 1', price: 10, bought: false },
//         { id: 2, name: 'Product 2', price: 20, bought: false },
//         { id: 3, name: 'Product 3', price: 30, bought: false },
//     ]);

//     const [cart, setCart] = useState([]);

//     const handleAddToCart = (product) => {
//         const updatedProducts = products.map((p) => {
//             if (p.id === product.id) {
//                 return { ...p, bought: true };
//             }
//             return p;
//         });

//         setProducts(updatedProducts);
//         setCart([...cart, product]);
//     };

//     const handleRemoveFromCart = (product) => {
//         const updatedProducts = products.map((p) => {
//             if (p.id === product.id) {
//                 return { ...p, bought: false };
//             }
//             return p;
//         });

//         setProducts(updatedProducts);
//         setCart(cart.filter((p) => p.id !== product.id));
//     };

//     return (
//         <div>
//             <h2>Products</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id}>
//                         {product.name} - {product.price}€{' '}
//                         {product.bought ? (
//                             <button disabled>Already bought</button>
//                         ) : (
//                             <button onClick={() => handleAddToCart(product)}>Add to cart</button>
//                         )}
//                     </li>
//                 ))}
//             </ul>

//             <h2>Cart</h2>
//             <ul>
//                 {cart.map((product) => (
//                     <li key={product.id}>
//                         {product.name} - {product.price}€{' '}
//                         <button onClick={() => handleRemoveFromCart(product)}>Remove from cart</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Shop;

// Correction
import React, { Component } from 'react';
import './Shop.css';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: Math.random(),
                    label: "Un livre (pages fournies)",
                    price: 10,
                },
                {
                    id: Math.random(),
                    label: "Un Plumbus",
                    price: 499,
                },
                {
                    id: Math.random(),
                    label: "Un ordinateur Machintosh",
                    price: 1200,
                }
            ],
            cart: [],
        };

        /**
         * Add item to cart if not already there
         * @param {Object} item 
         */
        this.buyItem = (item) => {
            if (!this.state.cart.find((cartItem) => cartItem.id === item.id)) {
                this.setState({
                    ...this.state,
                    cart: [...this.state.cart, item]
                });
            }
        };

        /**
         * Remove item from cart
         * @param {Object} item 
         */
        this.removeItem = (item) => {
            this.setState({
                ...this.state,
                cart: this.state.cart.filter((cartItem) => cartItem.id !== item.id)
            });
        };
    };

    render() {
        return (
            <div className="Shop">
                <h2>Produits disponibles</h2>
                <ul className="Products">
                    {
                        this.state.products.map((product) => {
                            return (
                                <li key={product.id}>
                                    <span>{product.label} - {product.price}€</span>
                                    <button
                                        type="button"
                                        className="AddToCart"
                                        disabled={this.state.cart.find((cartItem) => cartItem.id === product.id)}
                                        onClick={() => this.buyItem(product)}
                                    >
                                        + Ajouter au panier
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>

                <h2>Mon panier</h2>
                <ul className="CartItems">
                    {
                        this.state.cart.map((cartItem) => {
                            return (
                                <li key={cartItem.id}>
                                    <span>{cartItem.label} - {cartItem.price}€</span>
                                    <button
                                        type="button"
                                        className="RemoveFromCart"
                                        onClick={() => this.removeItem(cartItem)}
                                    >
                                        Supprimer du panier
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    };
};