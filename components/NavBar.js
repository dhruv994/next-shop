import Link from "next/link";

export default function NavBar(){

    return(
        <nav className="px-2 py-1 text-sm">
            <ul className="flex gap-2">
                <li className="text-lg font-extrabold"> 
                    <Link href="/">
                       
                            Next Shop
                       
                    </Link>
                </li>
                <li role="seprator" className="flex-1"/>
                <li> 
                    <Link href="/sign-in">
                       
                            Sign In
                       
                    </Link>
                </li>   
            </ul>
        </nav>
    )
}