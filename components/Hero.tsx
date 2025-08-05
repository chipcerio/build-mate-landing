import Image from 'next/image';

export default function Hero() {
  return (
    <section className='section-padding bg-white'>
      <div className='container-custom'>
        <div className='text-center max-w-4xl mx-auto'>
          {/* Headline */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6'>
            Lorem ipsum dolor sit amet adipiscing elit
          </h1>

          {/* Sub-headline */}
          <p className='text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto'>
            Aenean erat lorem laoreet a nisi pharetra dignissim pretium leo
          </p>

          {/* Hero Image */}
          <div className='relative w-full max-w-5xl mx-auto'>
            <div className='relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden'>
              {/*
              https://plus.unsplash.com/premium_photo-1664474767919-db2cf83ca706
                ?ixlib=rb-4.1.0
                &ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                &auto=format
                &fit=crop
                &w=2670
                &q=80

              https://images.unsplash.com/photo-1522202176988-66273c2fd55f
                ?ixlib=rb-4.0.3
                &ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                &auto=format
                &fit=crop
                &w=2071
                &q=80

              */}
              <Image
                src='https://plus.unsplash.com/premium_photo-1664474767919-db2cf83ca706?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                alt='Diverse team of service workers'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
