import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.email || !body.fullName || !body.company || !body.role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    if (!body.consent) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }
    
    // Log the form submission (placeholder for email integration)
    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      fullName: body.fullName,
      email: body.email,
      company: body.company,
      role: body.role,
      goals: body.goals,
      message: body.message,
      consent: body.consent,
    });
    
    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // TODO: Add to CRM (HubSpot, Salesforce, etc.)
    // TODO: Send confirmation email to user
    // TODO: Send notification to team
    
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
