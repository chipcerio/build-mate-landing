import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Membership() {
  return (
    <section className='section-padding bg-white'>
      <div className='container-custom'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-light text-gray-900 mb-4'>
            Become a PickAxe member
          </h2>
          <p className='text-gray-600 text-sm'>
            Choose your role and join thousands of users connecting through PickAxe's trusted marketplace.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Client Column */}
          <div className='bg-pickaxe-gray rounded-lg p-8'>
            <div className='text-center mb-6'>
              <span className='inline-block bg-pickaxe-blue text-white text-xs px-3 py-1 rounded-full mb-4'>
                Client
              </span>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Award-winning courses to explore at your own pace
              </h3>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts that spark real conversation.
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts.
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts.
                </p>
              </div>
            </div>

            <div className='text-center mb-6'>
              <button className='btn-primary w-full'>Join as a Client</button>
            </div>

            <div className='relative h-48 rounded-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                alt='Man with beard and cap looking at phone next to yellow truck'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Provider Column */}
          <div className='bg-pickaxe-gray rounded-lg p-8'>
            <div className='text-center mb-6'>
              <span className='inline-block bg-pickaxe-blue text-white text-xs px-3 py-1 rounded-full mb-4'>
                Service Provider
              </span>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Award-winning courses to explore at your own pace
              </h3>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts that spark real conversation.
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts.
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts.
                </p>
              </div>
            </div>

            <div className='text-center mb-6'>
              <button className='btn-primary w-full'>Join as a Provider</button>
            </div>

            <div className='relative h-48 rounded-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                alt='Man with beard and glasses working in workshop'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Partner Column */}
          <div className='bg-pickaxe-gray rounded-lg p-8'>
            <div className='text-center mb-6'>
              <span className='inline-block bg-pickaxe-blue text-white text-xs px-3 py-1 rounded-full mb-4'>
                Partner
              </span>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>
                Award-winning courses to explore at your own pace
              </h3>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts that spark real conversation.
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts.
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Check className='w-5 h-5 text-pickaxe-blue mt-0.5 flex-shrink-0' />
                <p className='text-gray-700 text-sm'>
                  Access expert-crafted lessons, games, and podcasts.
                </p>
              </div>
            </div>

            <div className='text-center mb-6'>
              <button className='btn-primary w-full'>Join as a Partner</button>
            </div>

            <div className='relative h-48 rounded-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
                alt='Man with beard and glasses working in workshop'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
