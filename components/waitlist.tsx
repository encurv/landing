"use client";

import { Button } from "./ui/button";

const Waitlist = () => {
    return <>
        <div className="mt-8 flex w-full max-w-md items-center justify-between rounded-full border-1 bg-white/10 px-2 py-2">
            <input
                type="email"
                placeholder="Enter your email"
                className="ml-4 w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
            />
            <Button variant={"default"} className="ml-4 rounded-full">
                Join waitlist
            </Button>
        </div>
    </>
}

export default Waitlist;