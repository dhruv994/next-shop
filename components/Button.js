export default function Button({ type, children }) {
    return (
        <>
            <button type={type} className="bg-green-800 rounded text-gray-100 px-4 py-2 my-2 hover:bh-green-700">
                {children}
            </button>
        </>
    )
}
