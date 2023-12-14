import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchJSON } from "../lib/api";

export default function NavBar() {
    const [user, setUser] = useState();
    useEffect(() => {
        (async () => {
            try {

                const user = await fetchJSON('/api/user');
                setUser(user)
            } catch (error) {


            }
        })()
    }, [])

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
                        <button> Sign Out</button>
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