export default function OurSolution() {
  return (
    <section id='solution' className='section-padding bg-pickaxe-light-blue'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Our solution</h2>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-8'>
            {/* Nested Section */}
            <div className='bg-pickaxe-pale-blue rounded-lg p-6'>
              <p className='text-sm text-gray-700 mb-4'>
                We're a team who previously helped millions of people across the internet.
              </p>
              <button className='btn-primary text-sm px-4 py-2'>Connect us</button>
            </div>

            {/* Main Content */}
            <div className='space-y-6'>
              <p className='text-lg text-gray-700 leading-relaxed font-light'>
                PickAxe is a comprehensive marketplace platform that connects the general public with skilled workers, equipment rentals, raw materials suppliers, and business partners in one seamless experience.
              </p>

              <p className='text-lg text-gray-700 leading-relaxed font-light'>
                Our platform features dedicated mobile apps for clients and skilled workers, alongside web applications for business partners and administrators. We prioritize partners' resources in our recommendations, helping maximize utilization of underused business resources while providing clients with quality, vetted services at transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
