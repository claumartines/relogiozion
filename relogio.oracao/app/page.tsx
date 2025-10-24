export default function Home() {
  const timeSlots = [
    { time: "20:00 às 20:30", link: "https://chat.whatsapp.com/FZnr0uaFkS193SWdWnqWEO" },
    { time: "20:30 às 21:00", link: "https://chat.whatsapp.com/H3tnGU2LnhOK1jQ62f0aCV" },
    { time: "21:00 às 21:30", link: "https://chat.whatsapp.com/IZg5FOEj1s6IL2uBLRcDq1" },
    { time: "21:30 às 22:00", link: "https://chat.whatsapp.com/LqLnTgO8CTlHgeGxZXZkwn" },
    { time: "22:00 às 22:30",  link: null, label: "Vigília na igreja" },
    { time: "22:30 às 23:00",  link: null, label: "Vigília na igreja" },
    { time: "23:00 às 23:30",  link: null, label: "Vigília na igreja" },
    { time: "23:30 às 00:00", link: null, label: "Vigília na igreja" },
    { time: "00:00 às 00:30", link: null, label: "Vigília na igreja" },
    { time: "00:30 às 01:00",  link: null, label: "Vigília na igreja" },
    { time: "01:00 às 01:30",  link: null, label: "Vigília na igreja" },
    { time: "01:30 às 02:00",  link: null, label: "Vigília na igreja" },
    { time: "02:00 às 02:30", link: "https://chat.whatsapp.com/FRoonBcgQsUFDuFzewTShz" },
    { time: "02:30 às 03:00", link: "https://chat.whatsapp.com/GAhoWyi3A7ZFt2y8Q4GDjo" },
    { time: "03:00 às 03:30", link: "https://chat.whatsapp.com/KOe5X6bQpUAA0obLaVDKJg" },
    { time: "03:30 às 04:00", link: "https://chat.whatsapp.com/GBBE8PoxxGWK3BIlTsyoZi" },
    { time: "04:00 às 04:30", link: "https://chat.whatsapp.com/Jxd81TKSaPUDsEmwS93cXm" },
    { time: "04:30 às 05:00", link: "https://chat.whatsapp.com/FvAaxvUhonvGeXBmPlWlFZ" },
    { time: "05:00 às 05:30", link: "https://chat.whatsapp.com/FdyK5NToGBu6KdiSLH7k7l" },
    { time: "05:30 às 06:00", link: "https://chat.whatsapp.com/LgyBPx5NOGV1z7IH10dlqX" },
    { time: "06:00 às 06:30", link: "https://chat.whatsapp.com/GHKldKXzGqIFYxQKfmbjGZ" },
    { time: "06:30 às 07:00", link: "https://chat.whatsapp.com/Hm5pbtqKTA74aqUbivyXvR" },
    { time: "07:00 às 07:30", link: "https://chat.whatsapp.com/FoE2WnUbvdqCLX09Hi646z" },
    { time: "07:30 às 08:00", link: "https://chat.whatsapp.com/CF8nFNOo0JGJDml15WY80Q" },
  ]; 
  return (
    <div className="min-h-screen bg-[#02161e]">
      {/* Header com imagem de fundo */}
      <header 
        className="relative w-full h-[50vh] md:h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('https://storage2.snappages.site/2CD49G/assets/images/11060006_2160x976_2500.png')",
          backgroundPosition: "center center",
        }}
      >
        {/* Overlay escuro para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradiente de fade para o fundo */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#02161e]"></div>
        
        {/* Título */}
        <h1 className="relative z-10 text-white text-center px-4 text-3xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
          Relógio de Oração e<br /> Jejum Corporativo
          
        </h1>
      </header>

      {/* Seção de botões */}
      <main className="py-8 px-4">
        <h2 className="text-white text-center text-xl md:text-2xl mb-6 font-normal">
          Selecione um horário abaixo:
        </h2>
        
        {/* Container dos botões - centralizado e com largura máxima no desktop */}
        <div className="max-w-md mx-auto flex flex-col gap-4">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              className="w-full text-white border-2 border-white py-3 px-5 rounded-md text-xl font-normal tracking-wide hover:bg-white hover:text-[#212529] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#212529]"
            >
              {slot.label ? (
                <span>{slot.label}</span>
              ) : (
                <a href={slot.link || undefined} target="_blank" rel="noopener noreferrer">
                  {slot.time}
                </a>
              )}
            </button> 
          ))}
        </div>
      </main>
    </div>
  );
}
