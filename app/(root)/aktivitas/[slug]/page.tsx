"use client"
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { activities, activityDocumentations } from '@/data/dummyData'
import Intro from '@/components/section/Intro'
import { GalleryCard } from '@/components/ui/Cards/Gallery'
import Grid from '@/components/ui/Grid'

const ActivityDetail = () => {
    const router = useRouter();
    const { slug } = useParams();
    const activity = activities.find(activity => activity.slug == slug)

    if (!activity) {
        return (
            <div>
                <h2>Activity Not Found</h2>
            </div>
        )
    }
    const galleryData = activityDocumentations.filter((item) => item.activity_id == activity.id)

    return (
        <div>
            <Intro image_link={activity.image_link} title={activity.title} description={activity.description} imageCol={1} key={activity.id} />

            { (galleryData.length > 0) && (
                <div className="my-8 mb-24">
                    <Grid
                        title="Galeri"
                        
                    >
                        {
                            galleryData.map((photo) => {
                                return (
                                    <GalleryCard  
                                        id={photo.id}
                                        description=''
                                        name={photo.name}
                                        className=''
                                        image_link={photo.image_link}
                                    />
                                )
                            })
                        }
                    </Grid>
                </div>
            )   
            }
        </div>
    )
}

export default ActivityDetail