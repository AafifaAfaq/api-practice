const DynamicUser = async (props: any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
    const response = await url.json();
    console.log(response);

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">Id: {props.params.id}</h1>
                <p className="text-lg font-medium text-gray-800 mb-2">Name: <span className="font-normal">{response.name}</span></p>
                <p className="text-lg font-medium text-gray-800 mb-2">Email: <span className="font-normal text-blue-500 underline">{response.email}</span></p>
                <p className="text-lg font-medium text-gray-800 mb-2">Address: <span className="font-normal">{response.address.street}, {response.address.suite}, {response.address.city}, {response.address.zipcode}</span></p>
                <p className="text-lg font-medium text-gray-800 mb-2">Phone: <span className="font-normal">{response.phone}</span></p>
                <p className="text-lg font-medium text-gray-800 mb-2">Website: <a href={`https://${response.website}`} target="_blank" className="font-normal text-blue-500 underline">{response.website}</a></p>
                <p className="text-lg font-medium text-gray-800">Company: <span className="font-normal">{response.company.name}, {response.company.catchPhrase}, {response.company.bs}</span></p>
            </div>
        </div>
    );
};

export default DynamicUser;
