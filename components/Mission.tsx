export default function Mission() {
  return (
    <section id='mission' className='section-padding bg-pickaxe-gray'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Our mission</h2>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-6'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              To democratize access to skilled services and resources by creating a trusted, efficient marketplace that benefits both service seekers and providers while maximizing utilization of underused business resources.
            </p>

            <p className='text-lg text-gray-700 leading-relaxed'>
              We connect the general public with skilled workers, equipment rentals, raw materials suppliers, and business partners through our comprehensive platform. Our goal is to make finding reliable services simple, transparent, and accessible to everyone while helping skilled professionals grow their businesses and maximize their potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
