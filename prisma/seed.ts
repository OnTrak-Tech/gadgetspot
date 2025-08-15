import { PrismaClient } from '@prisma/client'
import { seedProducts } from '../src/lib/data'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.orderItem.deleteMany()
  await prisma.payment.deleteMany()
  await prisma.order.deleteMany()
  await prisma.review.deleteMany()
  await prisma.product.deleteMany()

  // Seed products
  for (const product of seedProducts) {
    await prisma.product.create({
      data: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        description: product.description,
        price: product.price,
        condition: product.condition,
        stock: product.stock,
        category: product.category,
        images: product.images,
        specs: product.specs,
        rating: product.rating,
        reviewCount: product.reviewCount,
      },
    })
  }

  // Create admin user with hashed password from environment
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@gadgetspot.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
  const hashedPassword = await bcrypt.hash(adminPassword, 12)
  
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('Database seeded successfully!')
  console.log(`Admin user: ${adminEmail} (password: ${adminPassword})`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })