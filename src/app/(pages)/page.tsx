"use client";

import { logout } from "@/actions/auth/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as XLSX from "xlsx";

export default function Home() {
  const user = useCurrentUser();

  const [data, setData] = useState([]);

  const formatDate = (dateInput: any) => {
    // console.log('dateInput', dateInput)
    if (!dateInput || dateInput === "-") return null;
    let [date, time] = dateInput.split(" ");
    // console.log('date', date)
    // console.log('time', time)
    let [day, month, year] = date.split("-");
    // console.log('day, month, year', day, month, year)
    // console.log('`${year}-${month}-${day} ${time}`', `${year}-${month}-${day} ${time}`)
    let resultDate = new Date(`${year}-${month}-${day} ${time}`);
    // console.log("resultDate.toString()", resultDate);
    return moment(resultDate.toString()).format("yyyy/MM/DD HH:mm:ss");
  };

  const [loading, setLoading] = useState(false);

  const handleFileUpload = (e: any, item) => {
    setLoading(true);
    setData([]);
    // setHeader([]);
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (er: any) => {
      const data = er.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      console.log("parsedData", parsedData);
      e.target.file = [];
      const dataValue: any[] = [];

      parsedData.forEach((dataArr: any) => {
        dataValue.push({
          order_id: dataArr["หมายเลขคำสั่งซื้อ"],
          status: dataArr["สถานะ"],
          emp: dataArr["พนง."],
          invoice: dataArr["ใบแจ้งหนี้"],
          payment: dataArr["การชำระเงิน"],
          discount: dataArr["ส่วนลด"],
          sale: dataArr["ยอดขาย"],
          transport_service_provider: dataArr["ผู้ให้บริการ"],
          quantity: dataArr["จำนวน"],
          shipping_cost: dataArr["ค่าจัดส่ง"],
          cod_cost: dataArr["ค่า COD"],
          tracking_number: dataArr["หมายเลขพัสดุ"],
          channel: dataArr["ประเภท"],
          channel_name: dataArr["ชื่อช่องทาง"],
          name: dataArr["ชื่อ-สกุล"],
          phone: dataArr["เบอร์โทรศัพท์"],
          address: dataArr["ที่อยู่"],
          subdistrict: dataArr["ตำบล"],
          district: dataArr["อำเภอ"],
          province: dataArr["จังหวัด"],
          zipcode: dataArr["รหัสไปรษณีย์"],
          pack_date: formatDate(dataArr["วันที่แพค"]),
          // pack_date: dataArr["วันที่แพค"]
          //   ? moment(dataArr["วันที่แพค"]).format("yyyy/MM/DD HH:mm:ss")
          //   : "",
          create_date: formatDate(dataArr["วันที่สร้าง"]),
          // create_date: dataArr["วันที่สร้าง"]
          //   ? moment(dataArr["วันที่สร้าง"]).format("yyyy/MM/DD HH:mm:ss")
          //   : "",
          paid_date: formatDate(dataArr["วันที่ชำระเงิน"]),
          // paid_date: dataArr["วันที่ชำระเงิน"]
          //   ? moment(dataArr["วันที่ชำระเงิน"]).format("yyyy/MM/DD HH:mm:ss")
          //   : "",
          seller_discount: dataArr["ส่วนลดร้านค้า"],
          platform_discount: dataArr["ส่วนลดแพลตฟอร์ม"],
          coin: dataArr["เหรียญ"],
          sku_code: dataArr["รหัส SKU"],
          product_name: dataArr["ชื่อสินค้า"],
          product_options: dataArr["ตัวเลือกสินค้า (ถ้ามี)"],
          price_per_piece: dataArr["ราคาต่อชิ้น"],
          discount_per_piece: dataArr["ส่วนลดต่อชิ้น"],
          quantity_product: dataArr["จำนวนสินค้าตามรายการ"],
          note: dataArr["หมายเหตุ"],
          discount_per_product_p: dataArr["ส่วนลดรายสินค้า(พี)"],
          shipping_cost_p: dataArr["ค่าจัดส่ง(พี)"],
          cod_cost_p: dataArr["ค่า COD(พี)"],
          sale_per_product_p: dataArr["ยอดขายรายสินค้า(พี)"],
          channel_p: dataArr["ช่องทางการขาย (พี)"],
          type_chit: dataArr["รูปแบบ"],
          product_name_p: dataArr["รายชื่อสินค้า(พี)"],
        });
      });

      // parsedData.forEach((dataArr: any) => {
      //   if (dataArr["สถานะการสั่งซื้อ"] === "ยกเลิกแล้ว") return;
      //   dataValue.push({
      //     order_id: dataArr["หมายเลขคำสั่งซื้อ"],
      //     order_date: moment(dataArr["วันที่ทำการสั่งซื้อ"]).format(
      //       "yyyy/MM/DD HH:mm:ss"
      //     ),
      //     commission: dataArr["ค่าคอมมิชชั่น"] || 0,
      //     quantity: +dataArr["จำนวน"] || 0,
      //     status_order: dataArr["สถานะการสั่งซื้อ"],
      //     cancel_reason: dataArr["เหตุผลในการยกเลิกคำสั่งซื้อ"],
      //     status_return: dataArr["สถานะการคืนเงินหรือคืนสินค้า"],
      //     name_buyer: dataArr["ชื่อผู้ใช้ (ผู้ซื้อ)"],
      // paid_date: dataArr["เวลาการชำระสินค้า"]
      //   ? moment(dataArr["เวลาการชำระสินค้า"]).format("yyyy/MM/DD HH:mm:ss")
      //   : "",
      //     paid_channel: dataArr["ช่องทางการชำระเงิน"],
      //     paid_channel_detail: dataArr["ช่องทางการชำระเงิน (รายละเอียด) _1"],
      //     installment_plan: dataArr["แผนการผ่อนชำระ"],
      //     fee_percent: dataArr["ค่าธรรมเนียม (%)"]
      //       ? dataArr["ค่าธรรมเนียม (%)"].replace("%", "")
      //       : 0,
      //     shipping_option: dataArr["ตัวเลือกการจัดส่ง"],
      //     shipping_method: dataArr["วิธีการจัดส่ง"],
      //     tracking_number: dataArr["*หมายเลขติดตามพัสดุ"],
      //     expected_delivery_date: dataArr["วันที่คาดว่าจะทำการจัดส่งสินค้า"]
      //       ? moment(dataArr["วันที่คาดว่าจะทำการจัดส่งสินค้า"]).format(
      //           "yyyy/MM/DD HH:mm:ss"
      //         )
      //       : "",
      //     // delivery_date: dataArr["เวลาส่งสินค้า"]
      //     //   ? moment(dataArr["เวลาส่งสินค้า"]).format("yyyy/MM/DD HH:mm:ss")
      //     //   : "",
      //     // sku_parent_reference_number: dataArr["เลขอ้างอิง Parent SKU"],
      //     // product_name: dataArr["ชื่อสินค้า"],
      //     // sku_reference_number: dataArr["เลขอ้างอิง SKU (SKU Reference No.)"],
      //     // option_name: dataArr["ชื่อตัวเลือก"],
      //     // initial_price: dataArr["ราคาตั้งต้น"],
      //     // selling_price: dataArr["ราคาขาย"],
      //     // returned_quantity: +dataArr["Returned quantity"],
      //     // net_selling_price: dataArr["ราคาขายสุทธิ"],
      //     // shopee_discount: dataArr["ส่วนลดจาก Shopee"],
      //     // seller_discount: dataArr["โค้ดส่วนลดชำระโดยผู้ขาย"],
      //     // code_coins_cashback: dataArr["โค้ด Coins Cashback"],
      //     // code_discount_shopee: dataArr["โค้ดส่วนลดชำระโดย Shopee"],
      //     // code: dataArr["โค้ดส่วนลด"],
      //     // join_bundle_deal: dataArr["เข้าร่วมแคมเปญ bundle deal หรือไม่"],
      //     // discount_bundle_deal_seller:
      //     //   dataArr["ส่วนลด bundle deal ชำระโดยผู้ขาย"],
      //     // discount_bundle_deal_shopee:
      //     //   dataArr["ส่วนลด bundle deal ชำระโดย Shopee"],
      //     // discount_coins: dataArr["ส่วนลดจากการใช้เหรียญ"],
      //     // all_discounts_credit_cards: dataArr["ส่วนลดทั้งหมดจากบัตรเครดิต"],
      //     // transaction_fee: dataArr["Transaction Fee"],
      //     // cost_sales_minus_coupons_coins: dataArr["ต้นทุนขายหักคูปองและcoin"],
      //     // shipping_cost_seller: dataArr["ค่าจัดส่งที่ชำระโดยผู้ซื้อ"],
      //     // shipping_cost_shopee: dataArr["ค่าจัดส่งที่ Shopee ออกให้โดยประมาณ"],
      //     // return_shipping_cost: dataArr["ค่าจัดส่งสินค้าคืน"],
      //     // service_fee: dataArr["ค่าบริการ"],
      //     // total_amount: dataArr["จำนวนเงินทั้งหมด"],
      //     // estimated_shipping_cost: dataArr["ค่าจัดส่งโดยประมาณ"],
      //     // customer_name: dataArr["ชื่อผู้รับ"],
      //     // phone: dataArr["หมายเลขโทรศัพท์"],
      //     // note_buyer: dataArr["หมายเหตุจากผู้ซื้อ"],
      //     // address: dataArr["ที่อยู่ในการจัดส่ง"],
      //     // country: dataArr["ประเทศ"],
      //     // district: dataArr["เขต/อำเภอ"],
      //     // zip_code: dataArr["รหัสไปรษณีย์"],
      //     // order_type: dataArr["ประเภทคำสั่งซื้อ"],
      //     // completed_date: moment(dataArr["เวลาที่ทำการสั่งซื้อสำเร็จ"]).format(
      //     //   "yyyy/MM/DD HH:mm:ss"
      //     // ),
      //     // record: dataArr["บันทึก"],
      //     // province: dataArr["จังหวัด"],
      //   });
      // });
      setData(dataValue);
      console.log("dataValue", dataValue);
      fetch("https://csv.rabbitspell.com/api/" + item, {
        method: "POST",
        body: JSON.stringify({
          shopee: dataValue,
        }),
      })
        .then((res) => {
          alert("success");
          console.log("res", res);
          setLoading(false);
        })
        .catch((err) => {
          alert("fail");
          console.log("err", err);
          setLoading(false);
        });
    };
  };

  return (
    <main className="flex items-center justify-center w-full h-full ">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-col gap-5 w-full max-w-[800px]">
          {["MC", "PV"].map((item, index) => {
            return (
              <div
                key={index}
                className="duration-300 transition-all hover:scale-110 relative bg-white flex justify-center py-4 rounded-lg shadow-md"
              >
                <span>{item}</span>
                <input
                  className="cursor-pointer absolute top-0 right-0 bottom-0 left-0 opacity-0"
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={(e) => handleFileUpload(e, item)}
                />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
