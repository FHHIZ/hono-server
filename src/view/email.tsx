export const EmailResetTemplate = (props: {
  token: string;
  email: string;
  reqInfo: string;
  time: string;
}) => (
  <html>
    <body style="font-family: sans-serif; line-height: 1.5;">
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="padding: 40px 20px; text-align: center;">
            <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 10px; color: #111827;">
              Atur Ulang Kata Sandi Anda
            </h2>

            <p style="border-bottom: 2px solid #eeeeee; display: inline-block; padding-bottom: 15px; margin-bottom: 25px; min-width: 250px; color: #6b7280;">
              {props.email}
            </p>

            <p style="margin-bottom: 25px; padding: 0 20px;">
              Kami menerima permintaan pengaturan ulang kata sandi akun Anda
              pada <b>{props.time}</b> melalui <b>{props.reqInfo}</b>.
            </p>

            <div style="background-color: #f9fafb; padding: 30px; border-radius: 8px; margin-bottom: 25px;">
              <p style="margin: 0 0 10px 0; color: #4b5563;">
                Klik tombol di bawah ini untuk mengatur ulang kata sandi Anda.
              </p>
              <a
                href={`http://localhost:3000/reset-passwords?token=${props.token}`}
                style="
                  display: inline-block;
                  width: 240px;
                  line-height: 36px;
                  text-align: center;
                  background-color: #2563eb;
                  color: #ffffff;
                  font-size: 14px;
                  font-weight: 600;
                  text-decoration: none;
                  border-radius: 32px;
                  border: 1px solid #2563eb;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                "
              >
                Atur Ulang Kata Sandi
              </a>
              <p style="margin: 10px 0 0 0;">
                <small style="color: #9ca3af;">
                  Link ini akan kedaluwarsa dalam 10 menit.
                </small>
              </p>
            </div>

            <p style="margin-bottom: 25px; font-size: 14px; padding: 0 20px;">
              <strong style="color: #111827;">
                Bukan Anda yang meminta ini?
              </strong>
              <br />
              Jangan khawatir, akun Anda tetap aman. Cukup abaikan email ini dan
              tidak ada perubahan yang akan dilakukan pada akun Anda.
            </p>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0;" />

            <p style="font-size: 12px; color: #9ca3af; margin: 0;">
              Email ini dikirim secara otomatis, mohon tidak membalas email ini.
            </p>
          </div>
        </div>
      </body>
    </body>
  </html>
);
