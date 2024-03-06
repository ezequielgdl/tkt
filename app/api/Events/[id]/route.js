import Event from "@/app/(models)/Event";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundEvent = await Event.findOne({ _id: id });
    return NextResponse.json({ foundEvent }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Event.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Ticket updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
