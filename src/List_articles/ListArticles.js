// 1er essai
// import React, { useState } from "react";

// const Article = ({ name, description, price, rating }) => {
//     const [isSold, setIsSold] = useState(false);

//     const handleBuyClick = () => {
//         setIsSold(true);
//     };

//     return (
//         <div className="article">
//             <img src={require("../List_articles/produit-corps_.png",)} alt={name} />
//             <h3>{name}</h3>
//             <p>{description}</p>
//             <p>Prix : {price}€</p>
//             <p>Rating : {rating}/5 étoiles</p>
//             <button onClick={handleBuyClick}>{isSold ? "Vendu !" : "Acheter"}</button>
//         </div>
//     );
// };

// export default function App() {
//     return (
//         <div className="articles-list">
//             <Article
//                 name="MacBook Pro"
//                 description="Ordinateur portable haut de gamme"
//                 price={2000}
//                 rating={4}
                
//             />
//             <Article
//                 name="Chaton"
//                 description="Adorable petit chaton"
//                 price={100}
//                 rating={5}
//             />
//             <Article
//                 name="Canards de bain"
//                 description="Lot de 5 canards de bain pour le bain"
//                 price={10}
//                 rating={3}
//             />
//             <Article
//                 name="Produit corps"
//                 description="Produit de soin pour le corps"
//                 price={20}
//                 rating={2}
//             />
//         </div>
//     );
// }

// 2ème essai

import React, { useState } from 'react';

const products = [
    {
        name: "MacBook",
        description: "Ordinateur portable",
        price: "1299,99€",
        rating: "4/5 étoiles",
        image: "https://ressources.studi.fr/contenus/opale/c525b4f6da263443c0f79119ba181fc18dcbc4b9/res/macbook_.png"
    },
    {
        name: "Chaton",
        description: "Animal de compagnie",
        price: "499,99€",
        rating: "5/5 étoiles",
        image: "https://ressources.studi.fr/contenus/opale/c525b4f6da263443c0f79119ba181fc18dcbc4b9/res/chaton-imag.png"
    },
    {
        name: "Produit de beauté",
        description: "Soins du corps",
        price: "29,99€",
        rating: "3/5 étoiles",
        image: "https://ressources.studi.fr/contenus/opale/c525b4f6da263443c0f79119ba181fc18dcbc4b9/res/produit-corps_.png"
    },
    {
        name: "Canards de bain",
        description: "Jouet pour le bain",
        price: "9,99€",
        rating: "2/5 étoiles",
        image: "https://ressources.studi.fr/contenus/opale/c525b4f6da263443c0f79119ba181fc18dcbc4b9/res/canards_de_bain.png"
    }
];

function Product(props) {
    const [sold, setSold] = useState(false);

    function handleBuyClick() {
        setSold(true);
    }

    return (
        <div>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>Prix : {props.price}</p>
            <p>Rating : {props.rating}</p>
            <button className='m-3' onClick={handleBuyClick}>{sold ? "Vendu !" : "Acheter"}</button>
        </div>
    );
}

function ProductList() {
    return (
        <div>
            {products.map((product) => (
                <Product
                    key={product.name}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default ProductList;

// Correction

// import React, { Component } from 'react'

// export default class Product extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             button: "Achètes-moi"
//         }
//     }
//     clickButton = () => {
//         this.setState({
//             button: "Ok, vendu!"
//         })
//     }
//     render() {
//         return (
//             <div className="Article">
//                 <img className="Article--photo" src={this.props.img} alt="Article" />
//                 <div className="Article__main">
//                     <div className="Article__Text">
//                         <h3>{this.props.name}</h3>
//                         <p>{this.props.description}</p>
//                         <p>{this.props.price}</p>
//                         <p>{this.props.avis} / 5</p>
//                         <button onClick={this.clickButton}>{this.state.button}</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


// App.js
// import './List_articles/ListArticles.css'
        // <ListArticles
        //   img="../ List_articles / produit - corps_.png"
        //   name={"Produits de Bôté"}
        //   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid enim est a Chrysippo praetermissum in Stoicis?"}
        //   price={"€19.99"}
        //   avis={5}
        // />
        // <ListArticles
        //   img={'../List_articles/canards_de_bain.png'}
        //   name={"Canard en plastique"}
        //   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        //   price={"€199.99"}
        //   avis={5}
        // />
        // <ListArticles
        //   img={'../List_articles/chaton-imag.png'}
        //   name={"Chat"}
        //   description={"Lorem ipsum dolor sit amet. Quid enim est a Chrysippo praetermissum in Stoicis?"}
        //   price={"€100000009.99"}
        //   avis={5}
        // />
        // <ListArticles
        //   img={'../List_articles/macbook_.png'}
        //   name={"Ordinateur portable"}
        //   description={"Nulla erit controversia. Atqui reperies, inquit, in hoc quidem pertinacem; Refert tamen, quo modo. Sequitur disserendi ratio cognitioque naturae;"}
        //   price={"€1999.99"}
        //   avis={5}
        // />