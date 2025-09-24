import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+919837043334";
  const defaultMessage = "Hello! I'm interested in your packaging solutions. Could you please provide more information?";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover-lift transition-all animate-pulse"
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>

        {/* WhatsApp Chat Widget */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-corporate animate-scale-in">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Vividh Corrugators</h4>
                  <p className="text-sm text-green-100">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  👋 Hi there! Welcome to Vividh Corrugators.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  How can we help you with your packaging needs today?
                </p>
              </div>

              {/* Quick Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    const msg = "I need a custom packaging solution for my products. Can you help?";
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  📦 Custom Packaging Solutions
                </button>
                <button
                  onClick={() => {
                    const msg = "I'd like to request a free sample of your corrugated boxes.";
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  🆓 Request Free Sample
                </button>
                <button
                  onClick={() => {
                    const msg = "Can you provide a quote for bulk packaging orders?";
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                  }}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  💰 Get Bulk Quote
                </button>
              </div>

              {/* Main Chat Button */}
              <button
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Start Chat</span>
              </button>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-500 text-center">
                We're here to help! Available Mon-Sat 9AM-6PM
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppFloat;