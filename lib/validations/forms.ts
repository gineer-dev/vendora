import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const inquirySchema = z.object({
  product_id: z.string().min(1),
  full_name: z.string().min(2),
  email: z.string().email(),
  contact_number: z.string().min(7),
  message: z.string().min(10),
});

export const reservationSchema = z.object({
  product_id: z.string().min(1),
  full_name: z.string().min(2),
  email: z.string().email(),
  reservation_fee: z.coerce.number().positive(),
  notes: z.string().optional(),
});

export const customerSchema = z.object({
  full_name: z.string().min(2),
  contact_number: z.string().min(7),
  email: z.string().email(),
  address: z.string().min(4),
  customer_type: z.string().min(2),
  notes: z.string().optional(),
});
