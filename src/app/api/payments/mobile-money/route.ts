import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const { orderId, amount, phoneNumber, provider } = await req.json()

    // Mobile Money integration would go here (MTN, Airtel, etc.)
    const transactionId = `MM_${provider}_${Date.now()}`

    await prisma.payment.create({
      data: {
        orderId,
        method: 'MOBILE_MONEY',
        amount,
        transactionId,
        status: 'PENDING',
      },
    })

    return NextResponse.json({ 
      transactionId,
      message: `Payment request sent to ${phoneNumber}`,
      status: 'PENDING'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Mobile Money payment failed' }, { status: 500 })
  }
}