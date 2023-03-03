## Simple Tandeem Lowongan API

Dibuat dengan Express dan MySQL

### Setup Instruction

- Clone repository dengan perintah:
  ```bash
  git clone https://github.com/ferdianzh/td-lowongan-api.git
  ```

- Buat database baru pada MySQL dengan nama **td_lowongan**

- Ubah nama file **.env-copy** menjadi **.env**, dan sesuaikan dengan setting MySQL anda.

- Jalankan perintah berikut pada folder root:
  ```bash
  npm install
  npm run migrate
  npm run seed:all
  ```

- **Setup Selesai**, untuk menjalankan aplikasi jalankan perintah:
  ```bash
  npm run start
  ```