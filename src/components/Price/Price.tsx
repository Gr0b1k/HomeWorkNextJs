"use client";
import usePrices from "@/hooks/usePrices";


const Price = () => {

  const pricesList = usePrices();  

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="h2 text-center">Цены</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
              {pricesList.length > 0 ? pricesList.map((item, index) => {
                return (
                  <div key={index} className="w-full h-full border bg-blue-800/70 border-zinc-800 p-3 rounded-xl flex flex-col items-center justify-center gap-4">
                    <div className='w-[140px] h-[140px] flex items-center justify-center border  border-white/70 text-white rounded-full text-4xl font-semibold'>{item.attributes?.price}₽</div>
                    <h3 className="text-center text-3xl uppercase font-semibold">{item.attributes?.title}</h3>
                    <div className="flex flex-col items-center gap-[10px] w-full ">
                        <p className=" text-[16px]">{item.attributes?.description}</p>
                        <p className=" text-[16px]">{item.attributes?.accent}</p>
                    </div>
                    {/* <div className="">Дата окончания:<br></br>{item.attributes?.date}</div> */}
                  </div>
                )
              })
              :
              [1,2,3,4].map((item, index) => {
                return (
                  <div key={index} className="w-[240px] h-[240px] rounded-xl bg-zinc-800 animate-pulse"></div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Price