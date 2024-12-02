import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import useRecordStore from "../stores/useRecordStore";
import printJS from "print-js";
import html2pdf from "html2pdf.js";

const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherCard = () => {
  const { records } = useRecordStore();
  const total = records.reduce((a, b) => a + b.cost, 0);

  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  const handlePrint = () => {
    // window.print();
    printJS({
      printable: "printArea",
      type: "html",
      css: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
    });
  };

  const handlePdf = () => {
    const element = document.getElementById("printArea");

    // Configure options for html2pdf
    const options = {
      margin: 0,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a5", orientation: "portrait" },
    };

    // Trigger PDF download
    html2pdf().from(element).set(options).save();
  };
  // console.log(data);
  if (isLoading)
    return (
      <div>
        {/* Table Skeleton */}
        <table className="w-full mb-8">
          <thead>
            <tr className="text-left">
              <th className="pb-4 w-12">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="pb-4">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="pb-4 w-16">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="pb-4 w-20">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
              <th className="pb-4 w-20">
                <div className="h-4 bg-gray-200 rounded"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td className="py-3">
                  <div className="h-4 w-4 bg-gray-200 rounded"></div>
                </td>
                <td className="py-3">
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                </td>
                <td className="py-3 text-right">
                  <div className="h-4 w-8 bg-gray-200 rounded ml-auto"></div>
                </td>
                <td className="py-3 text-right">
                  <div className="h-4 w-12 bg-gray-200 rounded ml-auto"></div>
                </td>
                <td className="py-3 text-right">
                  <div className="h-4 w-12 bg-gray-200 rounded ml-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Payment Details Skeleton */}
        <div className="flex justify-between items-start">
          <div>
            <div className="h-6 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-4 w-40 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
          <div className="w-64">
            <div className="bg-gray-200 p-4 rounded-lg mb-2">
              <div className="flex justify-between">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  //   console.log(id);
  return (
    <div className="flex flex-col items-center gap-5">
      <div id="printArea" className="w-[14.8cm]  p-5 border">
        {/* Header */}
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">INVOICE</h1>
            <p className="text-gray-600">{data.voucher_id}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">Invoice to</p>
            <p>{data.customer_name}</p>
            <p className="text-gray-600">Date: {data.sale_date}</p>
          </div>
        </div>

        {/* Table */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-xs ">No</th>
                <th className="text-left py-2 text-xs ">Description</th>
                <th className="text-center py-2 text-xs ">Qty</th>
                <th className="text-right py-2 text-xs ">Price</th>
                <th className="text-right py-2 text-xs ">Cost</th>
              </tr>
            </thead>
            <tbody>
              {data.records.map((record, index) => (
                <tr className="border-b border-gray-200" key={index}>
                  <td className="py-2 text-xs">{index + 1}</td>
                  <td className="py-2 text-xs">
                    <p>{record.product.product_name}</p>
                  </td>
                  <td className="text-center py-2 text-xs">
                    {record.quantity}
                  </td>
                  <td className="text-right py-2 text-xs">
                    ${record.product.price}
                  </td>
                  <td className="text-right py-2 text-xs">${record.cost}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="font-bold">
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right text-xs" colSpan={4}>
                  Total
                </td>
                <td className="py-2 text-right text-xs">
                  {data.total.toFixed(2)}
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="py-2 text-right text-xs" colSpan={4}>
                  Tax (7%)
                </td>
                <td className="py-2 text-right text-xs">
                  {data.tax.toFixed(2)}
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-right text-xs" colSpan={4}>
                  Net Total
                </td>
                <td className="py-2 text-right text-xs">
                  {data.netTotal.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Payment Details */}
        <div className=" grid grid-cols-2 mb-8  text-xs">
          <div className="text-start col-span-1">
            <h2 className="font-bold">Payment Transfer to</h2>
            <p>Kpay/Wave: 09250152018</p>
            <p>KBZ Bank: 0273010270502560l</p>
            <p>AYA Bank: 20003674121</p>
          </div>
          <div className="  text-end col-span-1 ">
            <h2 className="font-bold ">MMS IT</h2>
            <p>48, 1st Floor, Shan Kone St</p>
            <p>+959-250-152-018</p>
            <p>enquiry@mms-it.com</p>
          </div>
        </div>
        <div className=" text-sm border-t text-center p-5 font-bold">
          <p>Thanks for your purchase</p>
          <p>ဝယ်ယူအားပေးမူ့အတွက် ကျေးဇူးတင်ပါတယ်။</p>
        </div>
      </div>
      <div className="flex justify-center items-end gap-5">
        <button
          onClick={handlePrint}
          className=" gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Print
        </button>
        <button
          onClick={handlePdf}
          className=" gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download pdf
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;
