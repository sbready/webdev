import React from 'react'
import PropTypes from 'prop-types';

import RateStarFull from './assets/RateStarFull';
import RateStarHalf from './assets/RateStarHalf';
import RateStarEmpty from './assets/RateStarEmpty';

const ReviewStars = product => {
    const { reviewInfo } = product;

    if (reviewInfo) {
        const rating = reviewInfo.rating;
        const total = Math.floor(rating);
        const difference = 5 - total;
        const halfStarNeeded = rating > 1 && rating % 2 >= 0.5 && rating % 2 < 1;
        const emptyStarsNeeded = difference;
        if (halfStarNeeded) {
            emptyStarsNeeded = difference - 1;
        }

        const reviewsTotal = reviewInfo.count


        const renderFullStars = () => {
            return total !== 0
                ? Array(total)
                    .fill(null)
                    .map((item, i) => {
                        return <img src={RateStarFull} key={`es${i}`} alt="Empty Star" />
                    })
                : '';
        }

        const renderHalfStars = () => {
            return difference !== 0
                ? Array(difference)
                    .fill(null)
                    .map((item, i) => {
                        return <img src={RateStarHalf} key={`es${i}`} alt="Empty Star" />
                    })
                : '';
        }

        const renderEmptyStars = () => {
            return emptyStarsNeeded !== 0
                ? Array(emptyStarsNeeded)
                    .fill(null)
                    .map((item, i) => {
                        return <img src={RateStarEmpty} key={`es${i}`} alt="Empty Star" />
                    })
                : '';
        }

        return (
            <div>
                {renderFullStars()}
                {renderHalfStars()}
                {renderEmptyStars()}
                <span className={styles.reviewsTotal}>{`(${reviewsTotal})`}</span>
            </div>
        )
    }
}

export default ReviewStars

ReviewStars.propTypes = {
    product: PropTypes.object.isRequired,
}
