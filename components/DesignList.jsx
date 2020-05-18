import DesignCard from '../components/DesignCard';
import AllIcon from '../images/svg/book.svg';
import PatternIcon from '../images/svg/pattern.svg';
import ShirtIcon from '../images/svg/shirt.svg';
import DressIcon from '../images/svg/dress.svg';
import HatIcon from '../images/svg/hat.svg';

const categories = [
    { name: "All", icon: AllIcon },
    { name: "Patterns", icon: PatternIcon },
    { name: "Shirts", icon: ShirtIcon },
    { name: "Dresses", icon: DressIcon },
    { name: "Hats", icon: HatIcon },
];

const DesignList = ({ designs, activeCategory, selectCategory, favouriteDesign, isLoading }) => (
    <div className="container">
        <h3 className="section-header">Categories</h3>
        <ul className="categories">
            {categories.map((item) => (
                <button
                    type="button"
                    key={item.name}
                    className={`category-button ${activeCategory === item.name && 'category-button--active'}`}
                    onClick={() => selectCategory(item.name)}>
                    <item.icon className={`category-icon ${item.name === 'Shirts' && 'search-icon--shirt'} ${item.name === 'Dresses' && 'search-icon--dress'}`} />
                    {item.name}
                </button>
            ))}
        </ul>

        <div className="flex justify-between mb-6">
            <button className="btn-round">
                Tags
            </button>
            <button className="btn-round">
                Sort by
            </button>
        </div>

        <ul className="designs-list row">
            {designs.map((item) => (
                <DesignCard
                    key={item.designId + item.name}
                    design={item}
                    favouriteDesign={favouriteDesign} />
            ))}
            {(designs.length === 0 && !isLoading) && <div>No designs match your search terms</div>}
        </ul>
    </div>
);

export default DesignList;
