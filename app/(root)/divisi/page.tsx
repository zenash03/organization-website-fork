import ActivityWithTabs from "@/components/section/ActivityWithTabs";
import Intro from "@/components/section/Intro";

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
