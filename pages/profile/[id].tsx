import axios from "axios";
import React from "react";
import { IUser, Video } from "../../types";
import { BASE_URL } from "../../utils";

interface IProps {
	data: {
		user: IUser;
		userVideos: Video[];
		userLikedVideos: Video[];
	};
}

const Profile = ({ data }: IProps) => {
	return <div>Profile</div>;
};

export const getServerSideProps = async ({
	params: { id }, // yha pr vhi name aata h jo file ka name h
}: {
	params: { id: string };
}) => {
	const res = await axios.get(`${BASE_URL}/profile/${id}`);

	return {
		props: {
			data: res.data,
		},
	};
};

export default Profile;
