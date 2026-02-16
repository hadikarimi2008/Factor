"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/* =========================
   CREATE BLOG
========================= */
export async function addBlog(formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const paragraph = formData.get("paragraph");
  const rate = Number(formData.get("rate"));
  const date = formData.get("date");

  await prisma.blog.create({
    data: {
      title,
      description,
      paragraph,
      rate,
      date,
    },
  });

  revalidatePath("/blogs");
}

/* =========================
   DELETE BLOG
========================= */
export async function deleteBlog(formData) {
  const id = Number(formData.get("id"));

  await prisma.blog.delete({
    where: { id },
  });

  revalidatePath("/blogs");
}

/* =========================
   UPDATE BLOG
========================= */
export async function updateBlog(formData) {
  const id = Number(formData.get("id"));

  const title = formData.get("title");
  const description = formData.get("description");
  const paragraph = formData.get("paragraph");
  const rate = Number(formData.get("rate"));
  const date = formData.get("date");

  await prisma.blog.update({
    where: { id },
    data: {
      title,
      description,
      paragraph,
      rate,
      date,
    },
  });

  revalidatePath("/admin");
  revalidatePath(`/blogs/${id}`);

  redirect("/admin");
}
