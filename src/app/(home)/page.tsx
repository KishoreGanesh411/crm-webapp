import { PaymentsOverview } from "@/component/Charts/payments-overview";
import { UsedDevices } from "@/component/Charts/used-devices";
import { WeeksProfit } from "@/component/Charts/weeks-profit";
import { TopChannels } from "@/component/Tables/top-channels";
import { TopChannelsSkeleton } from "@/component/Tables/top-channels/skeleton";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { Suspense } from "react";
import { ChatsCard } from "./_components/chats-card";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { RegionLabels } from "./_components/region-labels";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  // Await async server components here
  const overviewCardsGroup = await OverviewCardsGroup();
  const paymentsOverview = await PaymentsOverview({
    className: "col-span-12 xl:col-span-7",
    timeFrame: extractTimeFrame("payments_overview")?.split(":")[1],
  });
  const weeksProfit = await WeeksProfit({
    timeFrame: extractTimeFrame("weeks_profit")?.split(":")[1],
    className: "col-span-12 xl:col-span-5",
  });
  const usedDevices = await UsedDevices({
    className: "col-span-12 xl:col-span-5",
    timeFrame: extractTimeFrame("used_devices")?.split(":")[1],
  });
  const topChannels = await TopChannels({ className: "col-span-12 xl:col-span-8" });
  const chatsCard = await ChatsCard();

  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        {overviewCardsGroup}
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {paymentsOverview}
        {weeksProfit}
        {usedDevices}
        <RegionLabels />

        <div className="col-span-12 grid xl:col-span-8">
          <Suspense fallback={<TopChannelsSkeleton />}>
            {topChannels}
          </Suspense>
        </div>

        <Suspense fallback={null}>
          {chatsCard}
        </Suspense>
      </div>
    </>
  );
}
