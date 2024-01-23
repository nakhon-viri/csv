import { uploadShopee } from '@/data/platforms/shopee';
import { NextResponse } from 'next/server'

export async function POST(request: Request, { params: { platform } }: { params: { platform: string } }) {

    // switch (platform.toLocaleLowerCase().trim()) {
    //     case 'shopee':
    //         a = uploadShopee('id-1', 'suc')
    //         break;
    //     default:
    //         break;
    // }
    try {
        let res: any[] = await uploadShopee('id-1', 'suc')
        return NextResponse.json(res[0], { status: 200 })
    } catch (error) {
        return NextResponse.json(error, { status: 200 })
    }

}