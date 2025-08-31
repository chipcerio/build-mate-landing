import Image from 'next/image';

export default function RentEquipment() {
  return (
    <section className='section-padding bg-pickaxe-gray'>
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
              Need heavy equipment for your project? PickAxe makes it simple to find and rent construction equipment, tools, and machinery from trusted providers in your area. Search by location and availability to find exactly what you need, when you need it.
            </p>

            <p className='text-lg text-gray-700 leading-relaxed'>
              For equipment owners and businesses, PickAxe transforms your underutilized assets into revenue streams. Our platform makes it easy to list your equipment, manage availability, set pricing, and connect with customers who need your tools, turning idle inventory into profitable opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
