import { NextResponse } from "next/server";


export async function GET(request: Request, context: any) {

    const { auth } = context.params;

    if (auth === 'login') {

        return NextResponse.json({
            status: 200,
            data: {
                message: 'You are logged in'
            }
        })
    }

    if (auth === 'logout') {

        return NextResponse.json({
            status: 200,
            data: {
                message: 'You are logged out'
            }
        })
    }

}