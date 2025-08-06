import Image from 'next/image';

export default function RentEquipment() {
  return (
    <section className='section-padding bg-wokka-gray'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Rent out equipment</h2>
            <div className='mt-8'>
              <Image
                src='/images/undraw_agreement_w6ua.svg'
                alt='Agreement illustration'
                width={300}
                height={260}
                className='w-full max-w-xs mx-auto'
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-6'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at semper elit, id
              condimentum leo. Aenean erat lorem, laoreet a nisi pharetra, dignissim pretium leo.
            </p>

            <p className='text-lg text-gray-700 leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at semper elit, id
              condimentum leo. Aenean erat lorem, laoreet a nisi pharetra, dignissim pretium leo.
              Praesent a arcu eget erat venenatis efficitur vitae vel ex. Fusce ac faucibus tellus.
              Praesent gravida, mauris porttitor hendrerit condimentum, nunc felis faucibus felis,
              ac tristique metus elit nec sem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
