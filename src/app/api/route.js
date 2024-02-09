import connectDB from "../lib/mongodb";
import Contact from "../models/contact";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  
  const {clientName,clientEmail,clientTimeline,clientDescription } = await req.json();

  try {
    await connectDB();
    await Contact.create({ clientName,clientEmail,clientTimeline,clientDescription });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}