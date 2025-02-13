// import React from 'react'
import Link from 'next/link';
import { Button } from "./ui/button";

import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav"

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white bg-pink-50/20'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                <h1
                className='text-4xl font-semibold'>
                    Ihsan 
                    <span className='text-accent'>.</span>
                </h1>
                </Link>

                {/* desktop nav and hire me */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href='/contact'>
                    <Button>Hire Me</Button>
                    </Link>
                </div>
                
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header