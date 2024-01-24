import { uploadShopee } from "@/data/platforms/shopee";
import { db } from "@/db";
// import { connection, db } from "@/db";
import { users } from "@/db/schema/auth";
import { mc } from "@/db/schema/mc";
import { pv } from "@/db/schema/pv";
import { shopee } from "@/db/schema/shopee";
import { Prisma } from "@prisma/client";
import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params: { platform } }: { params: { platform: string } }
) {
  try {
    // let res: any[] = await uploadShopee('id-1', 'suc')
    // const body = await request.json();
    // const res = await db.insert(mc).values(body.shopee);
    // const res = await db.insert(shopee).values([
    //   {
    //     order_id: "240101PPY65D33",
    //     order_date: "2024/01/01 10:56:00",
    //     commission: "84.00",
    //     quantity: 1,
    //     status_order: "สำเร็จแล้ว",
    //     cancel_reason: "",
    //     status_return: "",
    //     name_buyer: "3ipoy",
    //     paid_date: "2024/01/01 10:56:00",
    //     paid_channel: "SPayLater",
    //     paid_channel_detail: "Shopee Credit Down Payment",
    //     installment_plan: "Shopee Credit x5",
    //     fee_percent: "3.21",
    //     shipping_option: "Standard Delivery - ส่งธรรมดาในประเทศ-SPX Express ",
    //     shipping_method: "pickup",
    //     tracking_number: "TH245030585496N",
    //     expected_delivery_date: "2024/01/04 10:56:00",
    //     delivery_date: "2024/01/03 17:06:00",
    //     sku_parent_reference_number: "",
    //     product_name:
    //       "KATHY AMREZ EYELINER SUPER SHARP&WATERPROOF อายไลเนอร์ กันน้ำ กันเหงื่อ ดำสนิท ติดทน แห้งไว ไม่เยิ้ม หัวเล็ก เขียนง่าย",
    //     sku_reference_number: "602-003-00-01",
    //     option_name: "01 BLACK",
    //     initial_price: "290.00",
    //     selling_price: "199.00",
    //     returned_quantity: 0,
    //     net_selling_price: "199.00",
    //     shopee_discount: "0.00",
    //     seller_discount: "104.00",
    //     code_coins_cashback: "0.00",
    //     code_discount_shopee: "68.00",
    //     code: "KATHY5;LIVE-788747365302272",
    //     join_bundle_deal: "N",
    //     discount_bundle_deal_seller: "0.00",
    //     discount_bundle_deal_shopee: "0.00",
    //     discount_coins: "0",
    //     all_discounts_credit_cards: "0.00",
    //     transaction_fee: "61.00",
    //     cost_sales_minus_coupons_coins: "1893.00",
    //     shipping_cost_seller: "0.00",
    //     shipping_cost_shopee: "0.00",
    //     return_shipping_cost: "0.00",
    //     service_fee: "105.00",
    //     total_amount: "1893.00",
    //     estimated_shipping_cost: "37.00",
    //     customer_name: "A******H",
    //     phone: "******36",
    //     note_buyer: "",
    //     address:
    //       "****** ซอย ในยาง 13, ตำบล สาคู, อำเภอถลาง อำเภอถลาง จังหวัดภูเก็ต 83110",
    //     country: "TH",
    //     district: "อำเภอถลาง",
    //     zip_code: "83110",
    //     order_type: "",
    //     completed_date: "2024/01/07 10:27:00",
    //     record: "",
    //     province: "จังหวัดภูเก็ต",
    //   }
    // ]);

    let platf = platform.toLocaleLowerCase().trim();
    if (platf === "mc") {
      const body = await request.json();
      const res = await db.insert(mc).values(body.shopee);
      console.log("11222", 11222);
      return NextResponse.json(res, { status: 201 });
    } else if (platf === "pv") {
      const body = await request.json();
      const res = await db.insert(pv).values(body.shopee);
      console.log("11222", 11222);
      return NextResponse.json(res, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 200 });
  }
}
