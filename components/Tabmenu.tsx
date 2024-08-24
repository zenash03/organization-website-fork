"use client"
import Link from 'next/link';
import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const divisions = [
    {
      label: "Tari",
      route: "#tari",
      desc: "this is tari content"
    },
    {
      label: "Musik",
      route: "#musik",
      desc: "this is musik content"
    },
    {
      label: "Teater",
      route: "#this is teater content",
      desc: ""
    },
  ]

const Tabmenu = () => {
    const tabItems = divisions;
    
    return (
        <div className="bg-slate-200">
            <Tabs className="max-w-screen-xl min-w-96 flex flex-col md:item-center mx-auto py-4">
                <TabList className="flex gap-4">
                    {
                        divisions?.map((link) => {
                            return (
                                <Link
                                    key={link.label}
                                    href={link.route}
                                    className="px-4 py-4 text-lg font-semibold text-primary"
                                >
                                {link.label}
                                </Link>
                            )
                        })
                    }
                </TabList>
            </Tabs>
        </div>
    )
}

export default Tabmenu