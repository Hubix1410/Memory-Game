export const backTokenClass = (gridSize) => {
	if (gridSize === '4x4') {
		return 'backToken backToken--4x4';
	} else if (gridSize === '6x6') {
		return 'backToken backToken--6x6';
	}
};
