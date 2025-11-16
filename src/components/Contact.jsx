export default function Contact() {
  return (
    <section id="contact" className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input 
          className="border p-3 rounded-lg"
          type="text" 
          placeholder="Your Name" 
          required
        />

        <input 
          className="border p-3 rounded-lg"
          type="email" 
          placeholder="Email" 
          required
        />

        <textarea 
          className="border p-3 rounded-lg"
          placeholder="Message" 
          required
        ></textarea>

        <button className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Send
        </button>
      </form>
    </section>
  );
}
