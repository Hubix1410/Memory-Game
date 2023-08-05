export const frontTokenClass = (mapSize, tokenStatus) => {

    let tokenClass = 'frontToken ';

	if (mapSize === '4x4') {
		tokenClass += 'frontToken--4x4 ';
	} else if (mapSize === '6x6') {
		tokenClass +='frontToken--6x6 ';
	}

    if(tokenStatus === 'matching') {
        tokenClass +='frontToken--matching';
    } else if(tokenStatus === 'visible' || tokenStatus === 'hidden') {
        tokenClass +='frontToken--visible';
    }

    return tokenClass;
};
