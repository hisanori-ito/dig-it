'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({title, param}) {

    const searchParams = useSearchParams()
    const country = searchParams.get("country")
  return (
    <div>
        <Link 
        className={`hover:text-amber-600 font-semibold
        ${country === param ? 
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}

        href={`/?country=${param}`}>{title}</Link>
    </div>
  )
}
