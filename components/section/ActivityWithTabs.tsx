"use client"

import { act, useState } from "react"
import { ActivityCard } from "../ui/Cards/Activity"
import TabButtons from "../ui/TabButtons";
import Grid from "../ui/Grid";

interface ActivityWithTabsProps {
    divisions: any[];
    activities: any[];
}

function ActivityWithTabs({divisions, activities}: ActivityWithTabsProps) {
    const [activeTabId, setActiveTabId] = useState(divisions[0].id)

    const filterActivityByDivision = activities.filter((activity) => activity.division_id === activeTabId)

    return (
        <div>
            <div className="bg-stone-100 mb-8">
                <div className="container flex flex-col md:items-center py-4">
                    <TabButtons 
                        divisions={divisions}
                        activeTabId={activeTabId}
                        onTabChange={setActiveTabId}
                    />
                </div>
            </div>
            <Grid
                containerClassName="gap-y-6 lg:gap-y-8"
                gridClassName="grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2"
                title="Kegiatan"
                titleClassName=""
            >
                {
                    filterActivityByDivision.map((activity) => {
                        return (
                            <ActivityCard 
                                id={activity.id}
                                date={activity.date}
                                title={activity.title}
                                description={activity.description}
                                slug={activity.slug}
                            />
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default ActivityWithTabs