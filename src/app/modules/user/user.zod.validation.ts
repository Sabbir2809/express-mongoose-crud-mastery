import { z } from "zod";

const userZodValidationSchema = z.object({
  userId: z.number().int().positive({ message: "userId must be a positive integer" }),
  username: z
    .string()
    .toLowerCase()
    .refine((value) => value.trim().length > 0, { message: "firstName is Required" }),

  password: z.string().min(4, { message: "Password must be at least 4 characters long" }),
  fullName: z.object({
    firstName: z.string().refine((value) => value.trim().length > 0, { message: "firstName is Required" }),
    lastName: z.string().refine((value) => value.trim().length > 0, { message: "lastName is Required" }),
  }),
  age: z
    .number()
    .int()
    .positive()
    .min(1)
    .max(100, { message: "Age must be a positive integer between 1 and 100" }),

  email: z.string().email().toLowerCase().trim(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string().refine((value) => value.trim().length > 0, { message: "street is Required" }),
    city: z.string().refine((value) => value.trim().length > 0, { message: "city is Required" }),
    country: z.string().refine((value) => value.trim().length > 0, { message: "country is Required" }),
  }),
  orders: z
    .array(
      z.object({
        productName: z.string().min(1, { message: "productName is Required" }),
        price: z.number().positive({
          message: "Price Must be a Positive Number",
        }),
        quantity: z.number().int().positive({
          message: "Quantity Must be a Positive Number",
        }),
      })
    )
    .optional(),
});

export default userZodValidationSchema;
