import Link from 'next/link';
import React from 'react'


interface Item {
    icon: any
    title: string;
    path: string;
    margin: boolean | string;
}
const MenuLink = (item: Item) => {
  return (
    <Link href={item.path} className={`flex items-center w-72 h-16 pt-6 pb-6 pr-12 pl-12 gap-6 text-white hover:bg-slate-50 hover:text-[#4D44B5] rounded-full mt-3`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink