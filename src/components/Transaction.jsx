import React from "react";
import TableRow from "./TableRow";

const Transaction = () => {
  return (
    <div className="px-8 w-full flex flex-col gap-3">
      {/* heading */}
      <p className="text-xl font-medium">Transactions | This Month</p>
      {/* buttons */}
      <div className="flex gap-2">
        <button className="bg-[#E6E6E6] text-[#97A8B1] px-4 py-1 rounded-2xl">
          Payouts {"(22)"}
        </button>
        <button className=" bg-light-blue text-white px-4 py-1 rounded-2xl">
          Refunds (5)
        </button>
      </div>
      {/* table */}
      <div className="flex flex-col gap-5 bg-white rounded-md p-2 ">
        <div className="flex justify-between">
          {/* search */}
          <div className="flex items-center gap-2 px-4 w-full max-w-[300px] text-[#808080] rounded border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search Features, Tutorials, etc"
              className="w-full bg-transparent px-1 outline-none "
            />
          </div>
          {/* buttons sort/download */}
          <div className="flex gap-2">
            <button className="flex gap-1 items-center px-2 py-1 border rounded-sm">
              Sort{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="grey"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-down"
              >
                <path d="m21 16-4 4-4-4" />
                <path d="M17 20V4" />
                <path d="m3 8 4-4 4 4" />
                <path d="M7 4v16" />
              </svg>
            </button>
            <button className="px-2 py-1 border rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="grey"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-down-from-line"
              >
                <path d="M19 3H5" />
                <path d="M12 21V7" />
                <path d="m6 15 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
        {/* table */}
        <div className="overflow-x-auto w-full">
          <table className="overflow-x-scroll w-full tracking-normal">
            <tr className="bg-[#F2F2F2] text-[#808080] font-medium text-nowrap">
              <td className="px-3 py-[10px]">Order ID</td>
              <td className="px-3 py-[10px]">Status</td>
              <td className="px-3 py-[10px]">Transaction ID</td>
              <td className="px-3 py-[10px]">Refund Date</td>
              <td className="text-right px-3 py-[10px]">Order Amount</td>
            </tr>
            <TableRow
              orderId={"#281209"}
              status={"successful"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"successful"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"successful"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"successful"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
            <TableRow
              orderId={"#281209"}
              status={"Processing"}
              transId={"TRX123456"}
              refundDate={"Today, 8:45 PM"}
              amount={"₹1125.00"}
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
