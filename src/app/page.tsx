import Link from "next/link";

export default async function Home() {
	const url = await fetch("https://jsonplaceholder.typicode.com/users");
	const response = await url.json();
	console.log(response);
	return (
		<main className="bg-gray-200 min-h-screen p-6">
			<h1 className="text-3xl font-bold text-center text-blue-800 mb-6">User List</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
				{response.map((user: any, index: number) => (
					<div
						key={index}
						className="bg-white shadow-md rounded-md p-4 hover:bg-blue-50 transition duration-200"
					>
						<Link href={`${user.id}`}>
							<h1 className="text-xl font-semibold text-gray-800 hover:text-blue-600">
								{user.id}. {user.name}
							</h1>
						</Link>
					</div>
          
				))}
			</div>
      <br/>
      <h1 className="text-3xl font-serif  font-bold text-center text-blue-800 mb-6 py-10">Made by : Aafifa Afaq</h1>
		</main>
	);
}
