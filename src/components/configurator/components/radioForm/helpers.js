export const useButtonClass = (amount, current, name) => {
	if (current.toString().toLowerCase() === name.toString().toLowerCase()) {
		return `radio__button radio__button--${amount} radio__button--active`;
	}
	return `radio__button radio__button--${amount} radio__button--inactive`;
};

export const useUpdateConfig = (id, value, config, setConfig) => {
	setConfig({ ...config, [id]: value });
};
