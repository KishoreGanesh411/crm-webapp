import Breadcrumb from "@/component/Breadcrumbs/Breadcrumb";
import { TopChannels } from "@/component/Tables/top-channels";
import { TopChannelsSkeleton } from "@/component/Tables/top-channels/skeleton";
import { TopProducts } from "@/component/Tables/top-products";
import { TopProductsSkeleton } from "@/component/Tables/top-products/skeleton";
import { InvoiceTable } from "@/component/Tables/invoice-table";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tables",
};

export default async function TablesPage() {
  // Await all async server components
  const topChannels = await TopChannels({ className: "" });
  const topProducts = await TopProducts();
  const invoiceTable = await InvoiceTable();

  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="space-y-10">
        <Suspense fallback={<TopChannelsSkeleton />}>
          {topChannels}
        </Suspense>

        <Suspense fallback={<TopProductsSkeleton />}>
          {topProducts}
        </Suspense>

        {invoiceTable}
      </div>
    </>
  );
}
