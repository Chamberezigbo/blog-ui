import React from "react";

export default function Navbar() {
	return (
		<header className="flex justify-between py-4 px-8 divide-solid divide-dashed">
			<a href="/" className="text-lg font-bold">
				Logo
			</a>
			<ul className="hidden md:flex gap-4 items-center align-middle">
				<li className="bg-cyan-300 text-indigo-50 py-2 px-4 rounded-md hover:cursor-pointer">
					Home
				</li>
				<li>About</li>
				<li>Contact</li>
			</ul>

			<button className="md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
					/>
				</svg>
			</button>
		</header>
	);
}
