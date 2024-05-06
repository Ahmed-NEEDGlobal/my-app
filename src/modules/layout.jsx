import Image from "next/image";

export default function Home() {
  const arr = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 100)
  );
  return (
    <main>
      <div className="w-full h-screen bg-fuchsia-700 flex flex-col overflow-hidden">
        <div className=" bg-red-600 py-6 w-full sticky">header</div>
        <div className="bg-yellow-400 grid grid-cols-12 h-full">
          <div className="bg-zinc-100 col-span-2 overflow-auto">
            left side-bar
            <ol>
              {arr.map((i, index) => {
                return (
                  <li className="bg-slate-100 py-2" key={index}>
                    {index}
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="bg-cyan-900 col-span-8 h-full overflow-auto">
            <ol>
              {arr.map((i, index) => {
                return (
                  <li className="" key={index}>
                    {index}
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="rounded-3xl bg-white sticky col-span-2 h-96 my-6">
            <div className="mx-4 mt-4">
              <div>Rony</div>
              <div>Masud</div>
              <div>Imran</div>
              <div>Shayel</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
{
  /* */
}
