export default function Input({ label, id, error, ...props }) {
  return (
    <div className="w-full max-w-[250px] mb-4">
      <label
        htmlFor={id}
        className="block text-[0.8rem] mb-1 text-stone-400 uppercase font-bold">
        {label}
      </label>
      <input
        id={id} {...props}
        className="block w-full p-2 text-base rounded border border-stone-400 bg-stone-600 text-stone-200" />
      <div
        className="text-[#ffca99] text-[0.8rem] mt-2">
        {error &&
          <p>{error}</p>}</div>
    </div>
  );
}
