import Link from 'next/link';

import HeartIcon from '../images/svg/heart-outline.svg';
import HeartFilledIcon from '../images/svg/heart-filled.svg';


const DesignCard = ({ design, favouriteDesign }) => (
    <Link href="/[id]" as={`/${design._id}`}>
        <a className="design-card__link">
            <article className="design-card">
                <img className="design-card__img" src={design.imageURL} alt={` ${design.type} ${design.name} custom design`} />
                <div className="flex justify-between p-4">
                    <div>
                        <h4 className="design-card__name">{design.name}</h4>
                        <h5 className="design-card__id">{design.designId}</h5>
                    </div>
                    <div className="flex flex-col justify-center align-center">
                        <button
                            type="button"
                            className="icon-button heart-icon"
                            onClick={(e) => {
                                e.preventDefault();
                                favouriteDesign(design._id);
                            }}>
                            <HeartIcon />
                        </button>
                        <p className="text-xs text-darkerPink text-center">
                            {design.favourites}
                        </p>
                    </div>
                </div>
            </article>
        </a>
    </Link>
);

export default DesignCard;
