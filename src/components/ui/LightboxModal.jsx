import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-[#230207] border border-[#F7EAD7]/30 p-2 shadow-2xl cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-[#F7EAD7] hover:text-white p-2 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full max-h-[80vh] object-contain"
        />
        <div className="p-4 text-center">
          <h4 className="font-instrument text-2xl text-[#F7EAD7]">{photo.title}</h4>
          <p className="text-sm text-[#F7EAD7]/75 font-inter mt-1">{photo.caption}</p>
        </div>
      </div>
    </div>
  );
}
