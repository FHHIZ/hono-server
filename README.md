1. **Khusus pengguna Windows**
   Tambahkan konfigurasi berikut pada file `schema.prisma` :

   binaryTargets = ["native", "windows"]

2. Jalankan perintah berikut untuk menghasilkan Prisma Client:

   npx prisma generate

3. Pastikan variabel lingkungan berikut sudah terisi di dalam file `.env`:

   `DATABASE_URL`
   `ACCESS_SECRET`
   `REFRESH_SECRET`

4. Jika tabel belum tersedia di database, jalankan proses migrasi dan seeding database.

   npm prisma migrate dev
   npx prisma db seed

5. Jalankan backend dengan perintah:

   npm run dev
