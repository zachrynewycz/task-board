"use client";
import Link from "next/link";
import { redirect } from "next/navigation";

function Page() {
    return (
        <main>
            hi
            <Link href={"/sign-up"}>sign</Link>
        </main>
    );
}

export default Page;
