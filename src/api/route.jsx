import { Resend } from "resend";
import Welcome from "../emails/Welcome";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {


    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "alexanderjbrodgers@gmail.com",
      subject: "hello world",
      react: Welcome(),
    });
}