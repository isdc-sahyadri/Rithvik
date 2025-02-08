import { NextResponse } from "next/server";
import { db } from "@configs/db";
import {eq} from 'drizzle-orm';
export async function POST(req){
    const {user}=await req.json();

    //check if user exist in DB 
    const userResult = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user.primaryEmailAddress.emailAddress));

    if(userResult?.length==0){
        const result = await db.insert(USER_TABLE).values({
            name:user.fullName,
            email:user?.primaryEmailAddress.emailAddress,
        }).returning(USER_TABLE);
        return NextResponse.from(result[0]);
}

return NextResponse.json(userResult[0]);
}