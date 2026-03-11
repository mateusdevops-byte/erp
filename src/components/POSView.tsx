import React, { useState } from 'react';
import { 
  Search, 
  UserPlus, 
  RefreshCw, 
  Settings, 
  LogOut, 
  Trash2, 
  Minus, 
  Plus, 
  Ban, 
  PauseCircle, 
  SearchCode, 
  Percent, 
  CreditCard, 
  Banknote, 
  ChevronRight, 
  Star, 
  QrCode 
} from 'lucide-react';

interface CartItem {
  id: string;
  description: string;
  sku: string;
  qty: number;
  price: number;
}

export default function POSView() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', description: 'Organic Fuji Apples', sku: '4011-02-99', qty: 2, price: 2.50 },
    { id: '2', description: 'Whole Milk 1L - Grass Fed', sku: '1022-45-12', qty: 1, price: 3.20 },
    { id: '3', description: 'Artisan Sourdough Loaf', sku: '9910-00-55', qty: 1, price: 6.50 },
  ]);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const taxes = subtotal * 0.085;
  const total = subtotal + taxes;

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-[#f6f7f8] text-slate-900 font-sans">
      {/* Top Bar */}
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#2b8cee]">
            <div className="bg-[#2b8cee] p-1.5 rounded-lg text-white">
              <RefreshCw size={20} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">
              RetailPOS <span className="text-xs font-medium text-slate-400 uppercase tracking-widest ml-1">Pro</span>
            </h1>
          </div>
          <div className="h-10 w-px bg-slate-200 mx-2"></div>
          <div className="relative flex items-center w-80">
            <Search className="absolute left-3 text-slate-400" size={18} />
            <input 
              className="h-10 w-full rounded-lg border-none bg-slate-100 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#2b8cee]/50 transition-all outline-none" 
              placeholder="Scan or search products (F2)" 
              type="text"
            />
          </div>
          <button className="flex items-center gap-2 px-4 h-10 rounded-lg bg-slate-100 text-sm font-medium hover:bg-slate-200 transition-colors">
            <UserPlus size={18} className="text-slate-500" />
            <span>Select Customer</span>
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end mr-4">
            <span className="text-lg font-bold tabular-nums">14:42:05</span>
            <span className="text-[10px] text-slate-500 uppercase font-semibold">March 11, 2026</span>
          </div>
          <div className="flex gap-1">
            <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
              <RefreshCw size={20} className="text-slate-600" />
            </button>
            <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
              <Settings size={20} className="text-slate-600" />
            </button>
            <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-red-500">
              <LogOut size={20} />
            </button>
          </div>
          <div className="size-10 rounded-full bg-[#2b8cee]/10 flex items-center justify-center border-2 border-[#2b8cee]/20">
            <span className="text-[#2b8cee] font-bold text-sm">JD</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden p-4 gap-4">
        {/* Products Table Area */}
        <div className="flex flex-col flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex-1 overflow-auto">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-slate-50 z-10">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 tracking-wider">Item Description</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 tracking-wider w-32 text-center">Qty</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 tracking-wider w-32 text-right">Price</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase text-slate-500 tracking-wider w-32 text-right">Subtotal</th>
                  <th className="px-6 py-4 w-16"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cart.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">{item.description}</div>
                      <div className="text-xs text-slate-400">SKU: {item.sku}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => updateQty(item.id, -1)}
                          className="size-7 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-semibold w-6 text-center text-slate-700">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, 1)}
                          className="size-7 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-slate-600">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-right font-bold text-[#2b8cee]">${(item.price * item.qty).toFixed(2)}</td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-slate-300 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center text-slate-400 italic">
                      No items in cart. Start by scanning or searching.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Quick Action Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-white border border-slate-200 font-bold text-xs hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all uppercase tracking-wide">
              <Ban size={16} />
              Void Item
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-white border border-slate-200 font-bold text-xs hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all uppercase tracking-wide">
              <PauseCircle size={16} />
              Hold Sale
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-white border border-slate-200 font-bold text-xs hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all uppercase tracking-wide">
              <SearchCode size={16} />
              Price Look Up
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-white border border-slate-200 font-bold text-xs hover:bg-slate-100 transition-all uppercase tracking-wide">
              <Percent size={16} />
              Apply Disc.
            </button>
          </div>
        </div>

        {/* Sidebar Summary */}
        <aside className="w-96 flex flex-col gap-4">
          {/* Summary Card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-100 pb-3">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({cart.reduce((a, b) => a + b.qty, 0)} items)</span>
                <span className="font-medium tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Taxes (8.5%)</span>
                <span className="font-medium tabular-nums">${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-emerald-500">
                <span>Discount Applied</span>
                <span className="font-medium tabular-nums">-$0.00</span>
              </div>
              <div className="pt-4 border-t border-dashed border-slate-200">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-slate-800">Total</span>
                  <span className="text-4xl font-black text-[#2b8cee] tabular-nums tracking-tighter">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button className="flex flex-col items-center justify-center gap-1 p-3 rounded-lg border border-slate-200 hover:border-[#2b8cee]/50 hover:bg-[#2b8cee]/5 transition-all group">
                <Banknote size={20} className="text-slate-400 group-hover:text-[#2b8cee]" />
                <span className="text-[10px] font-bold uppercase">Cash</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1 p-3 rounded-lg border-2 border-[#2b8cee] bg-[#2b8cee]/5 transition-all">
                <CreditCard size={20} className="text-[#2b8cee]" />
                <span className="text-[10px] font-bold uppercase text-[#2b8cee]">Card</span>
              </button>
            </div>
            
            <button className="w-full bg-[#2b8cee] hover:bg-[#2b8cee]/90 text-white h-16 rounded-xl font-bold text-lg shadow-lg shadow-[#2b8cee]/20 flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
              COMPLETE SALE
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Quick Access / Loyalty Card */}
          <div className="bg-slate-900 rounded-xl p-6 text-white overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="text-[#2b8cee] fill-[#2b8cee]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Loyalty Program</span>
              </div>
              <p className="text-sm text-slate-300 mb-4">Scan customer loyalty card to apply member-only discounts and earn points.</p>
              <button className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-[10px] font-bold uppercase tracking-wider transition-all">
                Scan Loyalty Card
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <QrCode size={120} />
            </div>
          </div>

          {/* System Stats */}
          <div className="mt-auto flex justify-between px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500"></span>
              Terminal 04 Online
            </div>
            <div>v2.4.12-pro</div>
          </div>
        </aside>
      </main>
    </div>
  );
}
