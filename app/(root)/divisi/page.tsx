import { ActivityWithTabs } from "@/components/section/ActivityTabs";
import Intro from "@/components/section/Intro";
import Tabmenu from "@/components/Tabmenu";

export default function DivisiPage() {

    return (
    <div className="w-full">
      <Intro />
      <div className="my-8">
        <ActivityWithTabs />
      </div>
    </div>
    );
}
