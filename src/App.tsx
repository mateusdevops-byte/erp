import React, { useState } from 'react';
import POSView from './components/POSView';
import ProductRegistrationView from './components/ProductRegistrationView';
import { LayoutDashboard, PackagePlus } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'pos' | 'product'>('pos');

  return (
    <div className="relative">
      {/* View Switcher (Floating for demo purposes) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-1.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-2xl">
        <button 
          onClick={() => setCurrentView('pos')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
            currentView === 'pos' 
              ? 'bg-[#2b8cee] text-white shadow-lg shadow-[#2b8cee]/30' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <LayoutDashboard size={18} />
          PDV
        </button>
        <button 
          onClick={() => setCurrentView('product')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all ${
            currentView === 'product' 
              ? 'bg-[#2b8cee] text-white shadow-lg shadow-[#2b8cee]/30' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <PackagePlus size={18} />
          Cadastro
        </button>
      </div>

      {currentView === 'pos' ? <POSView /> : <ProductRegistrationView />}
    </div>
  );
}
