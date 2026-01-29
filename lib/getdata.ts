export const getData = (setData: (data: any) => void): Promise<void> => {
	return fetch("/resume.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((myJson) => {
			setData(myJson);
		});
};

export default getData;
