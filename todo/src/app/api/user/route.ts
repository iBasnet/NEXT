import { NextResponse } from "next/server"

const userData = {
    name: 'Patrick Bateman',
    email: 'patbateman@nyc.vip',
    age: 27
}

export async function GET() {

    return NextResponse.json({
        status: 200,
        data: userData
    })

}

export async function POST(request: Request) {

    const userData = await request.json();

    return NextResponse.json({
        status: 201,
        data: userData
    })

}