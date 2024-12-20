import Link from "next/link";
import {Button} from "@/components/ui/button";

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

const Navbar = () => {
    return (
        // <nav className="py-4 bg-background/30 backdrop-blur-sm bg-blue-300">
        <nav className="py-4 border-b  w-full flex justify-center items-center">
            <div className="max-w-7xl w-full">

            <div className="w-full flex flex-row justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl">
                        Logo
                    </h1>
                </Link>
                <ul className="md:flex flex-row justify-between gap-8 hidden">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <Link href={link.href
                            }>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-row justify-end space-x-2">
                    {/* <ThemeChanger/> */}
                    <Button>
                        Get Started
                    </Button>
                </div>
            </div>
                    </div>
        </nav>
    );
}

export default Navbar;