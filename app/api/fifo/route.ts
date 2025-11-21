import { type NextRequest, NextResponse } from "next/server"

const MICROSERVICE_URL = process.env.MICROSERVICE_URL || "http://localhost:8000"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch(`${MICROSERVICE_URL}/fifo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error("Error del microservicio")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Error procesando la solicitud" }, { status: 500 })
  }
}
