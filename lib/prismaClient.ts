import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
  // Allow global `prisma` to exist in development to avoid multiple instances
  var prisma: PrismaClient | undefined;
}

// Check if we are running in development mode
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    // In development, create a single instance of PrismaClient
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;

// Explanation (Src: chatgpt):
// 1. Single Prisma Client Instance: Prisma should not create a new connection on every API request, especially in development. The above code ensures that Prisma only creates one instance globally, preventing too many connections to the database.

// 2. Production vs Development: In production, it creates a new PrismaClient, but in development, it uses a global instance to avoid reinitializing.

// 3. Global Type Declaration: In TypeScript, we declare a global prisma variable using the declare global block. This ensures that Prisma only creates a single instance of PrismaClient in development to avoid the "Too many connections" error. In production, it creates a new instance for each request.