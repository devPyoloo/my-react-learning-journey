import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();

  return (
    <div className="bg-neutral-400 w-2/3 py-5 rounded-lg mx-auto relative mt-10">
      <h1 className="text-center font-bold text-xl text-neutral-700">
        Contact Details
      </h1>
      <Form
        className="grid grid-cols-1 p-10 items-start justify-center"
        method="post"
        action="/help/contact"
      >
        <label htmlFor="email">Email:</label>
        <input
          className="border-2 border-gray-500"
          type="text"
          name="email"
          id=""
        />
        <label htmlFor="message">Message:</label>
        <textarea
          className="border-2 border-gray-500"
          name="message"
          id=""
        ></textarea>
        <button type="submit">Submit</button>
      </Form>

      {data && data.error && <p>{data.error}</p>}
    </div>
  );
}

export const contactDataAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  if(submission.message.length < 10) {
    return { error: "Message must be over 10 characters" }
  }

  return redirect('/')
};
