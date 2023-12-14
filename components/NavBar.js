import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchJson } from "../lib/api";

export default function NavBar() {
    const [user, setUser] = useState();
    useEffect(() => {
        (async () => {
            try {
                const user = await fetchJson('/api/user');
                console.log("USEERRRRRRR",user);
                setUser(user)
            }
            catch (error) {


            }
        })()
    }, [])
    const handleLogout = async () =>{
        await fetchJson('/api/logout');
        setUser(undefined);

    }

    return (
        <nav className="px-2 py-1 text-sm">
            <ul className="flex gap-2">
                <li className="text-lg font-extrabold">
                    <Link href="/">

                        Next Shop

                    </Link>
                </li>
                <li role="seprator" className="flex-1" />
                {user ? (<>
                    <li>{user.name}</li>
                    <li>
                        <button onClick={handleLogout}> Sign Out</button>
                    </li>
                </>) :
                    <li>
                        <Link href="/sign-in">

                            Sign In

                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}