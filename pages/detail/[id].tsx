import axios from "axios";
import React from "react";
import { BASE_URL } from "../../utils";

const Detail = () => {
	return <div>Detail</div>;
};

// fetch id in the url
export const getServerSideProps = async ({ params: { id } }) => {
	const { data } = await axios.get(`${BASE_URL}/api/post/${id}`);

	return {
		props: {
			postDetails: data,
		},
	};
};

export default Detail;
