// import React, { useState } from 'react';
// import './Tabs.css';

// function Tabs({ tabs }) {
//     const [activeTab, setActiveTab] = useState(0);

//     const handleTabClick = (index) => {
//         setActiveTab(index);
//     };

//     return (
//         <div>
//             <ul className="tabs">
//                 {tabs.map((tab, index) => (
//                     <li
//                         key={index}
//                         className={index === activeTab ? 'active' : ''}
//                         onClick={() => handleTabClick(index)}
//                     >
//                         {tab.title}
//                     </li>
//                 ))}
//             </ul>
//             <div className="tab-content">
//                 <img src={require('./pct.jpg')} alt="PCT" />
//                 <p>{tabs[activeTab].content}</p>
//             </div>
//         </div>
//     );
// }

// const tabs = [
//     {
//         title: 'The Pacific Crest Trail',
//         content:
//             "The Pacific Crest Trail (PCT) is a long-distance hiking trail that spans 2,650 miles (4,265 kilometers) from Mexico to Canada through California, Oregon, and Washington. The trail traverses the high Sierra Nevada and Cascade mountain ranges, as well as the Mojave and Sonoran deserts. The PCT is one of the most popular long-distance hiking trails in the world, with hundreds of hikers attempting a thru-hike each year.",
//     },
//     {
//         title: 'The Great Divide Trail',
//         content:
//             "The Great Divide Trail (GDT) is a long-distance hiking trail that spans 1,200 kilometers (750 miles) through the Rocky Mountains of Canada. The trail traverses remote and rugged terrain, including several national and provincial parks, and is considered one of the most challenging long-distance hiking trails in North America. The GDT is a relatively new trail, with the first official guidebook published in 2015.",
//     },
//     {
//         title: 'Camino de Santiago',
//         content:
//             "The Camino de Santiago, or the Way of Saint James, is a network of pilgrimage routes across Europe that lead to the tomb of Saint James in Santiago de Compostela, Spain. The most popular route is the Camino Francés, which begins in Saint-Jean-Pied-de-Port, France, and spans approximately 800 kilometers (500 miles) to Santiago de Compostela. The Camino de Santiago has been a popular pilgrimage route since the Middle Ages and continues to attract thousands of pilgrims each year.",
//     },
// ];

// function App() {
//     return (
//         <div>
//             <Tabs tabs={tabs} />
//         </div>
//     );
// }

// export default App;

// 2nd essai

// import React, { useState } from 'react';
// import './Tabs.css';

// function Tabs(props) {
//     const [activeTab, setActiveTab] = useState(0);

//     return (
//         <div>
//             <ul className="tabs">
//                 {props.tabs.map((tab, index) => (
//                     <li
//                         key={index}
//                         className={index === activeTab ? 'active' : ''}
//                         onClick={() => setActiveTab(index)}
//                     >
//                         {tab.title}
//                     </li>
//                 ))}
//             </ul>
//             <div className="tab-content">
//                 {props.tabs[activeTab].content}
//             </div>
//         </div>
//     );
// }

// const tabs = [
//     {
//         title: 'The Pacific Crest Trail',
//         content: 
//         (
//             <div>
//                     <img src={require('./pct.jpg')} alt="PCT" height={500} />
//                     <p>
//                   The Pacific Crest Trail (PCT) is a long-distance hiking trail that spans 2,650 miles (4,265 kilometers) from Mexico to Canada through California, Oregon, and Washington. The trail traverses the high Sierra Nevada and Cascade mountain ranges, as well as the Mojave and Sonoran deserts. The PCT is one of the most popular long-distance hiking trails in the world, with hundreds of hikers attempting a thru-hike each year."                    
//                   </p>
//             </div>
//         )

//     },
//     {
//         title: 'The Great Divide Trail',
//         content: (
//             <div>
//                 <img src={require('./great-divide.jpg')} alt="Great Divide Trail" height={500} />
//                 <p>
//                     The Great Divide Trail (GDT) is a long-distance hiking trail that spans 1,200 kilometers (750 miles) through the Rocky Mountains of Canada. The trail traverses remote and rugged terrain, including several national and provincial parks, and is considered one of the most challenging long-distance hiking trails in North America. The GDT is a relatively new trail, with the first official guidebook published in 2015.
//                 </p>
//             </div>
//         )
//     },
//     {
//         title: 'Camino de Santiago',
//         content: (
//             <div>
//                 <img src={require('./camino.jpg')} alt="Camino de Santiago" height={500}/>
//                 <p>
//                     The Camino de Santiago, or the Way of Saint James, is a network of pilgrimage routes across Europe that lead to the tomb of Saint James in Santiago de Compostela, Spain. The most popular route is the Camino Francés, which begins in Saint-Jean-Pied-de-Port, France, and spans approximately 800 kilometers (500 miles) to Santiago de Compostela. The Camino de Santiago has been a popular pilgrimage route since the Middle Ages and continues to attract thousands of pilgrims each year.
//                 </p>
//             </div>
//         )
//     },
// ];

// function App() {
//     return (
//         <div className="App">
//             <Tabs tabs={tabs} />
//         </div>
//     );
// }

// export default App;

// Correction

//Nom du fichier : ParentComponent.js
import React from 'react';
import Tabs from './Tabs';

const ParentComponent = () => {
    const tabs = [
        {
            id: 1,
            label: 'The Pacific Crest Trail (US)'
        },
        {
            id: 2,
            label: 'The Great Divide Trail (Canada)'
        },
        {
            id: 3,
            label: 'Camino de Santiago (Spain)'
        }
    ];

    return (
        <>
            <div className="wrapper">
                <Tabs tabs={tabs}>
                    <div id="1">
                        <p>The Pacific Crest Trail (PCT), officially designated as the Pacific Crest National Scenic Trail, is a long-distance hiking and equestrian trail closely aligned with the highest portion of the Cascade and Sierra Nevada mountain ranges, which lie 100 to 150 miles (160 to 240 km) east of the U.S. Pacific coast. The trail's southern terminus is just south of Campo, California by the U.S. border with Mexico, and its northern terminus is on the Canada–US border on the edge of Manning Park in British Columbia; it passes through the states of California, Oregon, and Washington.</p>
                        <p>The Pacific Crest Trail is 2,653 mi (4,270 km) long and ranges in elevation from just above sea level at the Oregon–Washington border to 13,153 feet (4,009 m) at Forester Pass in the Sierra Nevada. The route passes through 25 national forests and 7 national parks. Its midpoint is near Chester, California (near Mt. Lassen), where the Sierra and Cascade mountain ranges meet.</p>
                        <img src={require('../pct.jpg')} alt="PCT" />
                    </div>
                    <div id="2">
                        <p>The Great Divide Trail (GDT) is a wilderness hiking trail in the Canadian Rockies. The GDT closely follows the continental divide between Alberta and British Columbia, crossing the divide no fewer than 30 times. It begins in Waterton Lakes National Park at the Canada-US border (where it connects with the Continental Divide Trail) and ends 1,123 kilometres to the north in Kakwa Provincial Park.</p>
                        <img src={require('../gdt.jpg')} alt="GDT map" />
                    </div>
                    <div id="3">
                        <p>The Camino de Santiago (Latin: Peregrinatio Compostellana, "Pilgrimage of Compostela"; Galician: O Camiño de Santiago), known in English as the Way of St. James, is a network of pilgrims' ways or pilgrimages leading to the shrine of the apostle Saint James the Great in the cathedral of Santiago de Compostela in Galicia in northwestern Spain, where tradition has it that the remains of the saint are buried. Many follow its routes as a form of spiritual path or retreat for their spiritual growth. It is also popular with hiking and cycling enthusiasts and organized tour groups, and can be seen within the context of Christian colonization and Christianization.</p>
                        <img src={require('../camino-map.svg')} alt="Camino de Santiago map" />
                    </div>
                </Tabs>
            </div>
        </>
    );
}

export default ParentComponent;


//Nom du fichier : Tabs.js
import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs, children }) => {
    const [activeTabId, setActiveTabId] = useState(1);

    const handleTabClick = (tab) => setActiveTabId(tab.id);

    const activeTabContent = children.filter((child) => {
        return parseInt(child.props.id) === activeTabId;
    });

    const tabsTemplate = tabs.map((tab) => {
        return (
            <li
                key={tab.id}
                className={tab.id === activeTabId ? 'active' : null}
                onClick={() => handleTabClick(tab)}
            >
                {tab.label}
            </li>
        );
    });

    return (
        <div className="tabs-wrapper">
            <ul className="tabs">
                {tabsTemplate}
            </ul>
            <div className="tab-content">
                {activeTabContent}
            </div>
        </div>
    );
}

export default Tabs;