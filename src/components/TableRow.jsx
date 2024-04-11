import React from 'react'

const TableRow = ({orderId,status,transId,refundDate,amount}) => {
    let color;
    if(status !== "successful"){
        color = "bg-[#999999]";
    }else{
        color = "bg-green-500"
    }
  return (
    <tr className="border-b text-sm font-normal">
      <td className="text-light-blue font-medium whitespace-nowrap px-3 py-[10px]">
        {orderId}
      </td>
      <td className="flex items-center gap-2 whitespace-nowrap px-3 py-[10px] text-grey-text">
        <span className={`${color} w-[10px] h-[10px] rounded-full`}></span>
        {status == "successful" ? "Successful" : "Processing"}
      </td>
      <td className="whitespace-nowrap px-3 py-[10px] text-grey-text">
        {transId}
      </td>
      <td className="whitespace-nowrap px-3 py-[10px] text-grey-text">
        {refundDate}
      </td>
      <td className="text-right whitespace-nowrap px-3 py-[10px] text-grey-text">
        {amount}
      </td>
    </tr>
  );
}

export default TableRow
