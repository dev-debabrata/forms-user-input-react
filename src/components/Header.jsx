import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header className="my-8 text-center">
      <img
        src={logoImg}
        alt="A form and a pencil"
        className='w-20 h-20 object-contain rounded-full border-2 border-[#758a8a] drop-shadow-[0_0_4px_rgba(31,42,42,0.5)] mx-auto' />
      <h1 className='font-quicksand font-bold text-5xl my-4 tracking-[0.2rem] text-stone-950'>
        Forms
      </h1>
    </header>
  );
}
