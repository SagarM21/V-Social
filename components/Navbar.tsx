import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import vsocial from "../utils/vsocial.png";

const Navbar = () => {
	const user = false;
	return (
		<div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
			<Link href='/'>
				<div className='w-[100px] md:w-[130px] '>
					<Image
						className='cursor-pointer'
						src={vsocial}
						alt='vsocial'
						layout='responsive'
					/>
				</div>
			</Link>

			<div>SEARCH</div>

			<div>
				{user ? (
					<div>Logged In</div>
				) : (
					<GoogleLogin
						onSuccess={(res) => console.log(res)}
						onError={() => console.log("Error")}
					/>
				)}
			</div>
		</div>
	);
};

export default Navbar;
