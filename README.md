
<img width="512" height="512" alt="icon" src="https://github.com/user-attachments/assets/f487c567-4641-4c39-a1e7-5b289891dee8" />


## Factor Blog Website

**Factor Blog Website** is a modern blogging web application built with **Next.js (App Router)** and **Prisma**, providing a clean interface to **list, create, edit, and delete** blog posts.  
It can be used both as a **learning project** for Next.js/Prisma and as a **personal blog or portfolio**.

---

### Main Features

- **Landing Page**
  - Hero section with a short introduction to the platform.
  - Shows **3 random featured blogs** from the database.
  - Displays **overall stats**, such as total number of articles and average rating (`avgRating`).

- **Blog List**
  - Route: `"/blog"`.
  - Fetches all blogs from the database and displays them as responsive cards.
  - Each card shows **title, short description, rating, and date**.
  - Each card links to a dedicated blog detail page at `/blog/[id]`.

- **Blog Details**
  - Dynamic route: `"/blog/[id]"`.
  - Shows **title, description, full content (paragraph), rating, and date**.
  - If the blog is not found, `notFound()` is called to render the 404 page.

- **Create New Blog**
  - Route: `"/blog/add"`.
  - Full-screen form for creating a new blog post.
  - Uses **Server Actions** via `addBlog` from `actions/blogs-actions.js`.
  - Fields: `title`, `description`, `paragraph`, `rate`, `date`.

- **Admin Dashboard**
  - Route: `"/admin"`.
  - Displays a table of all blogs with **ID, title, date, rating**.
  - Provides **Edit** and **Delete** actions for each row.
  - Delete operation is handled by the `deleteBlog` Server Action.

- **Edit Blog**
  - Route: `"/admin/edit/[id]"`.
  - Pre-filled form with the existing blog data.
  - Updates are handled via the `updateBlog` Server Action.

- **Database and ORM**
  - Uses **Prisma** as the ORM.
  - `Blog` model fields:
    - `id` (Int, auto-increment, primary key)
    - `title` (String)
    - `rate` (Int)
    - `date` (String)
    - `paragraph` (String)
    - `description` (String)

- **Modern Responsive UI**
  - Utility-class based styling (Tailwind-style classes).
  - Focus on readability and a simple experience for both writers and readers.

---

### Tech Stack

- **Next.js (App Router)**
- **React**
- **Prisma ORM**
- **PostgreSQL** (as the database)
- **Server Actions** for CRUD operations
- **CSS / Tailwind-style utility classes** (in `app/globals.css`)

---

### Getting Started (Development)

1. **Clone or download the project**

   ```bash
   git clone <your-repo-url>
   cd Factor-Blog-Website-main
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn
   ```

3. **Configure the database**

   - Create a `.env` file in the project root (if it does not exist).
   - Add your Prisma PostgreSQL connection string:

   ```env
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
   ```

   - The `Blog` model is defined in `prisma/schema.prisma`. To create tables in your database, run:

   ```bash
   npx prisma migrate dev
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in the browser**

   - Go to: `http://localhost:3000`

---

### Routes and Pages

- **Home Page**
  - Route: `/`
  - File: `app/page.jsx`
  - Responsibilities: fetch all blogs via Prisma, pick 3 random featured posts, and show statistics.

- **Blog List**
  - Route: `/blog`
  - File: `app/blog/page.jsx`
  - Responsibilities: render a grid of all blogs as responsive cards.

- **Add Blog**
  - Route: `/blog/add`
  - File: `app/blog/add/page.jsx`
  - Responsibilities: show the create form and submit data to `addBlog`.

- **Blog Details**
  - Route: `/blog/[id]`
  - File: `app/blog/[id]/page.jsx`
  - Responsibilities: fetch a blog by `id` and render full content.

- **Admin Dashboard**
  - Route: `/admin`
  - File: `app/admin/page.jsx`
  - Responsibilities: display a table of posts with Edit/Delete actions.

- **Edit Blog**
  - Route: `/admin/edit/[id]`
  - File: `app/admin/edit/[id]/page.jsx`
  - Responsibilities: load blog data and show a pre-filled edit form.

---

### Project Structure (High Level)

- **`app/`**
  - `page.jsx` → Home page (landing + featured + stats).
  - `blog/` → Blog module:
    - `page.jsx` → All blog posts list.
    - `add/page.jsx` → Create blog form.
    - `[id]/page.jsx` → Blog details page.
  - `admin/` → Admin module:
    - `page.jsx` → Admin dashboard (list + delete).
    - `edit/[id]/page.jsx` → Edit blog form.
  - Shared files such as `layout.jsx`, `globals.css`, `error.jsx`, `not-found.jsx`.

- **`actions/blogs-actions.js`**
  - Contains Server Actions for creating, updating, and deleting blogs.

- **`lib/prisma.js`**
  - Prisma client configuration for database access.

- **`prisma/schema.prisma`**
  - Database schema definition (including the `Blog` model).

---

### Development Notes and Customization

- You can customize styling in `app/globals.css` and through JSX class names.
- To add new fields (for example `author` or `tags`):
  1. Add the field to the `Blog` model in `prisma/schema.prisma`.
  2. Run `npx prisma migrate dev` again.
  3. Update the create/edit forms and display components to handle the new field.
- To restrict access to `/admin`, you can add **authentication** (e.g. with NextAuth) in the future.

---

### Deployment

- The recommended platform for deploying this project is **Vercel**.
- Connect your Git repository, set the `DATABASE_URL` environment variable, and ensure Prisma migrations run either during build or via a separate job.

---

### Summary

**Factor Blog Website** is a modern, responsive, and extensible blog system built on **Next.js App Router + Prisma + PostgreSQL**, covering the full CRUD flow for blog content.  
You can use it as a base for a personal blog, an online magazine, or as a showcase project in your portfolio.
