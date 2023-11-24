import { z } from "zod";

const userZodValidationSchema = z.object({
  userId: z.number().int().positive(),
  username: z.string().toLowerCase().trim(),
  password: z.string().min(6),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number().int().positive(),
  email: z.string().email().toLowerCase().trim(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z
    .array(
      z.object({
        productName: z.string(),
        price: z.number().min(0),
        quantity: z.number().int().min(1),
      })
    )
    .optional(),
});

export default userZodValidationSchema;
