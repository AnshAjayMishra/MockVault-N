import {  X } from 'lucide-react';

import Link from 'next/link';


const Custom404 = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Animated Logo */}
      <div className="animate-pulse mb-8">
       <X className='size-18 text-white'/>
      </div>

      {/* Content */}
      <div className="text-center space-y-4">
      <h2 className='text-white font-bold text-3xl'>MockVault</h2>
        <h1 className="text-6xl font-bold text-white">
          404
        </h1>
        
        <p className="text-xl text-gray-300">
          Oops! Page not found
        </p>
       <p className="text-gray-400">
  The page you&#39;re looking for doesn&#39;t exist or has been moved
</p>

        
        {/* Back to Home Button */}
        <div className="pt-8">
          <Link href="/">
            <p className="bg-zinc-600  text-white px-6 py-3 rounded-lg 
              hover:bg-zinc-700  transition-colors duration-300">
              Go Back Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;