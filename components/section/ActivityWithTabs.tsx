"use client"

import { useState } from "react"
import { ActivityCard, ActivityGrid } from "../ui/Activity"
import libs from "@/libs"

const activities = [
    { 
        id: 1, 
        division_id: 2, 
        title: 'Sarang Semut Music Concert', 
        date: '20 Mei 2024', 
        description: 'A live music concert featuring bands from the Music division.',
        image: null,
    },
    { 
        id: 2, 
        division_id: 1, 
        title: 'Traditional Dance Night', 
        date: '20 Mei 2024', 
        description: 'A cultural event featuring traditional dances performed by the Traditional Dance division.',
        image: null
    },
    { 
        id: 3, 
        division_id: 3, 
        title: 'Annual Theatre Showcase', 
        date: '20 Mei 2024', 
        description: 'A theatrical performance showcasing various plays by the Theatre division.',
        image: null
    },
    { 
        id: 4, 
        division_id: 2, 
        title: 'Jazz Night', 
        date: '5 Juni 2024', 
        description: 'An evening of smooth jazz performed by the Music division\'s talented musicians.',
        image: null
    },
    { 
        id: 5, 
        division_id: 1, 
        title: 'Modern Dance Workshop', 
        date: '12 Juni 2024', 
        description: 'A workshop where members can learn and practice modern dance techniques.',
        image: null
    },
    { 
        id: 6, 
        division_id: 3, 
        title: 'Improv Night', 
        date: '19 Juni 2024', 
        description: 'An interactive improvisation event led by the Theatre division.',
        image: null
    },
    { 
        id: 7, 
        division_id: 2, 
        title: 'Choir Festival', 
        date: '26 Juni 2024', 
        description: 'A festival featuring performances by choirs from various universities.',
        image: null
    },
    { 
        id: 8, 
        division_id: 1, 
        title: 'Contemporary Dance Show', 
        date: '3 Juli 2024', 
        description: 'A showcase of contemporary dance performances by the Dance division.',
        image: null
    },
    { 
        id: 9, 
        division_id: 3, 
        title: 'Drama Workshop', 
        date: '10 Juli 2024', 
        description: 'A workshop focused on acting and drama techniques for aspiring actors.',
        image: null
    },
    { 
        id: 10, 
        division_id: 2, 
        title: 'Battle of the Bands', 
        date: '17 Juli 2024', 
        description: 'A competition between bands from the Music division to showcase their talents.',
        image: null
    },
    { 
        id: 11, 
        division_id: 1, 
        title: 'Cultural Dance Parade', 
        date: '24 Juli 2024', 
        description: 'A parade featuring traditional and cultural dances from different regions.',
        image: null
    },
    { 
        id: 12, 
        division_id: 3, 
        title: 'Monologue Night', 
        date: '31 Juli 2024', 
        description: 'An evening dedicated to monologues performed by the Theatre division.',
        image: null
    },
    { 
        id: 13, 
        division_id: 2, 
        title: 'Acoustic Jam Session', 
        date: '7 Agustus 2024', 
        description: 'A casual jam session featuring acoustic performances by members of the Music division.',
        image: null
    },
    { 
        id: 14, 
        division_id: 1, 
        title: 'Ballet Gala', 
        date: '14 Agustus 2024', 
        description: 'A grand ballet performance by the Dance division\'s ballet troupe.',
        image: null
    },
]


const divisions = [
    {
        id: 1,
        name: "Tari",
        description: "",
    },
    {
        id: 2,
        name: "Musik",
        description: "",
    },
    {
        id: 3,
        name: "Teater",
        description: "",
    },
]

function ActivityWithTabs() {
    const [activeTabId, setActiveTabId] = useState(divisions[0].id)

    const filterActivityByDivision = activities.filter((activity) => activity.division_id === activeTabId)

    return (
        <div>
            <div className="bg-stone-200 mb-8">
                <div className="container flex flex-col md:items-center py-4">
                    <div className="flex gap-8 flex-wrap w-full">
                        {
                            divisions?.map((div) => {
                                return (
                                    <button
                                        className={
                                            libs.cn(
                                                `text-lg font-semibold text-primary opacity-40`,
                                                activeTabId === div.id ? 'opacity-100' : ''
                                            )}
                                        onClick={() => setActiveTabId(div.id)}
                                    >
                                        {div.name}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <ActivityGrid>
                {filterActivityByDivision.map((activity) => {
                    return (
                        <ActivityCard 
                            id={activity.id}
                            date={activity.date}
                            title={activity.title}
                            description={activity.description}
                        />
                    )
                })}
            </ActivityGrid>
        </div>
    )
}

export default ActivityWithTabs