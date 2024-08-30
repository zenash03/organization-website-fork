import ActivityWithTabs from "@/components/section/ActivityWithTabs";
import Intro from "@/components/section/Intro";
import { activities, divisions } from '@/data/dummyData'

export default function DivisiPage() {

  const introProps = {
    "title": "Daftar Divisi",
    "description": "UKM Sarang Semut is composed of three dynamic divisions, each dedicated to a specific area of the performing arts. These divisions provide our members with a platform to explore and develop their artistic talents, while also contributing to the cultural richness of Universitas Tanjungpura and the wider community.",
    image_link: "https://www.bing.com/th?id=OIP.ffrZmEgAKlxj1BMWrQ5xHwHaEl&w=154&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2s",
}

    return (
    <div className="w-full">
      <Intro 
        {...introProps} containerClassName="bg-stone-200"
      />
      <div className="my-8">
        <ActivityWithTabs divisions={divisions} activities={activities} />
      </div>
    </div>
    );
}
