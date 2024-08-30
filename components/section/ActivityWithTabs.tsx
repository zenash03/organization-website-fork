"use client"

import { act, useState } from "react"
import { ActivityCard, ActivityGrid } from "../ui/Activity"
import libs from "@/libs"
import TabButtons from "../ui/TabButtons";

interface ActivityWithTabsProps {
    divisions: any[];
    activities: any[];
}

function ActivityWithTabs({divisions, activities}: ActivityWithTabsProps) {
    const [activeTabId, setActiveTabId] = useState(divisions[0].id)

    const filterActivityByDivision = activities.filter((activity) => activity.division_id === activeTabId)

    return (
        <div>
            <div className="bg-stone-200 mb-8">
                <div className="container flex flex-col md:items-center py-4">
                    <TabButtons 
                        divisions={divisions}
                        activeTabId={activeTabId}
                        onTabChange={setActiveTabId}
                    />
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
                            slug={activity.slug}
                        />
                    )
                })}
            </ActivityGrid>
        </div>
    )
}

export default ActivityWithTabs