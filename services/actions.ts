"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { authSchema, customerSchema, inquirySchema, reservationSchema } from "@/lib/validations/forms";
import { productSchema } from "@/lib/validations/product";
import { createClient } from "@/lib/supabase/server";

function formObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export async function signIn(formData: FormData) {
  const payload = authSchema.parse(formObject(formData));
  const redirectTo = formData.get("redirectTo");
  const nextPath = typeof redirectTo === "string" && redirectTo.startsWith("/") ? redirectTo : "/dashboard";
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(payload);
  if (error) redirect(`/login?error=${encodeURIComponent(error.message)}`);
  revalidatePath("/", "layout");
  redirect(nextPath);
}

export async function signUp(formData: FormData) {
  const payload = authSchema.parse(formObject(formData));
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp(payload);
  if (error) redirect(`/register?error=${encodeURIComponent(error.message)}`);
  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function createProduct(formData: FormData) {
  const payload = productSchema.parse(formObject(formData));
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const supabase = await createClient();
    const { error } = await supabase.from("products").insert({
      sku: payload.sku,
      name: payload.name,
      brand: payload.brand,
      model: payload.model,
      description: payload.description,
      selling_price: payload.selling_price,
      status: payload.status,
      branch_id: payload.branch_id,
    });
    if (error) throw new Error(error.message);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function createInquiry(formData: FormData) {
  const payload = inquirySchema.parse(formObject(formData));
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const supabase = await createClient();
    const { error } = await supabase.from("inquiries").insert({
      product_id: payload.product_id,
      message: payload.message,
      status: "New",
    });
    if (error) throw new Error(error.message);
  }
  revalidatePath("/dashboard/inquiries");
  redirect("/inquiries?submitted=true");
}

export async function createReservation(formData: FormData) {
  const payload = reservationSchema.parse(formObject(formData));
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const supabase = await createClient();
    const { error } = await supabase.from("reservations").insert({
      product_id: payload.product_id,
      reservation_fee: payload.reservation_fee,
      status: "Pending",
    });
    if (error) throw new Error(error.message);
  }
  revalidatePath("/dashboard/reservations");
  redirect("/reservations?submitted=true");
}

export async function createCustomer(formData: FormData) {
  const payload = customerSchema.parse(formObject(formData));
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    const supabase = await createClient();
    const { error } = await supabase.from("customers").insert(payload);
    if (error) throw new Error(error.message);
  }
  revalidatePath("/dashboard/customers");
}
