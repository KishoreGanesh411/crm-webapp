import Breadcrumb from "@/component/Breadcrumbs/Breadcrumb";
import { CampaignVisitors } from "@/component/Charts/campaign-visitors/index";
import { UsedDevices } from "@/component/Charts/used-devices/index";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Chart",
};

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Page(props: PropsType) {
  const { selected_time_frame } = await props.searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  // Await server component calls
  const usedDevices = await UsedDevices({
    timeFrame: extractTimeFrame("used_devices")?.split(":")[1],
    className: "col-span-12 xl:col-span-5",
  });

  const campaignVisitors = await CampaignVisitors({
    className: "col-span-12 xl:col-span-5",
  });

  return (
    <>
      <Breadcrumb pageName="Basic Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        {usedDevices}

        <div className="col-span-12 xl:col-span-5">
          {campaignVisitors}
        </div>
      </div>
    </>
  );
}
