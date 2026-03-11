import React from 'react';
import { 
  Package, 
  Bell, 
  UserCircle, 
  Info as InfoIcon, 
  CreditCard, 
  FileText, 
  Image as LucideImage, 
  UploadCloud, 
  Plus, 
  Save as SaveIcon,
  X
} from 'lucide-react';

export default function ProductRegistrationView() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] text-slate-900 font-sans flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 md:px-10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="size-8 bg-[#2b8cee] rounded-lg flex items-center justify-center text-white">
            <Package size={20} />
          </div>
          <h2 className="text-slate-800 text-lg font-bold leading-tight tracking-tight">Sistema de Estoque</h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-600 px-3 hover:bg-slate-200 transition-colors">
            <Bell size={20} />
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 bg-slate-100 text-slate-600 px-3 hover:bg-slate-200 transition-colors">
            <UserCircle size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center py-8 px-4">
        <div className="max-w-[960px] w-full flex flex-col">
          {/* Title Section */}
          <div className="flex flex-col gap-1 mb-8 px-4">
            <h1 className="text-slate-900 text-3xl font-bold leading-tight">Novo Produto</h1>
            <p className="text-slate-500 text-sm font-normal">Preencha as informações abaixo para registrar o item no catálogo.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            {/* Left Column: Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* General Info */}
              <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800">
                  <InfoIcon size={20} className="text-[#2b8cee]" /> Informações Gerais
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">Nome do Produto</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all" 
                      placeholder="Ex: Smartphone Samsung Galaxy S23" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">SKU / Código de Barras</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all" 
                      placeholder="7890000000001" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">Categoria</label>
                    <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all appearance-none cursor-pointer">
                      <option value="">Selecione uma categoria</option>
                      <option value="eletronicos">Eletrônicos</option>
                      <option value="informatica">Informática</option>
                      <option value="acessorios">Acessórios</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">Marca</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all" 
                      placeholder="Ex: Samsung" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">Quantidade em Estoque</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all" 
                      placeholder="0" 
                      type="number"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">Descrição</label>
                    <textarea 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all resize-none" 
                      placeholder="Descreva as características do produto..." 
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </section>

              {/* Prices and Costs */}
              <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800">
                  <CreditCard size={20} className="text-[#2b8cee]" /> Preços e Custos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">Preço de Compra (R$)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-2.5 text-slate-400 font-medium">R$</span>
                      <input 
                        className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] pl-12 pr-4 py-2.5 outline-none transition-all" 
                        placeholder="0,00" 
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">Preço de Venda (R$)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-2.5 text-slate-400 font-medium">R$</span>
                      <input 
                        className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] pl-12 pr-4 py-2.5 outline-none transition-all" 
                        placeholder="0,00" 
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Fiscal Info */}
              <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-800">
                  <FileText size={20} className="text-[#2b8cee]" /> Informações Fiscais
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">NCM</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all" 
                      placeholder="0000.00.00" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">ICMS (%)</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all" 
                      placeholder="18%" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5 text-slate-700">CEST</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#2b8cee]/50 focus:border-[#2b8cee] px-4 py-2.5 outline-none transition-all" 
                      placeholder="00.000.00" 
                      type="text"
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Photo Upload */}
              <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
                  <LucideImage size={20} className="text-[#2b8cee]" /> Foto do Produto
                </h3>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="size-16 rounded-full bg-[#2b8cee]/10 flex items-center justify-center text-[#2b8cee] group-hover:scale-110 transition-transform">
                    <UploadCloud size={32} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-800">Clique para enviar</p>
                    <p className="text-xs text-slate-500 mt-1">PNG, JPG ou WEBP (Max. 5MB)</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  <div className="size-16 shrink-0 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <LucideImage size={24} className="text-slate-400" />
                  </div>
                  <div className="size-16 shrink-0 rounded-lg bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center hover:border-[#2b8cee]/50 transition-colors cursor-pointer">
                    <Plus size={24} className="text-slate-300" />
                  </div>
                </div>
              </section>

              {/* Summary Card */}
              <section className="bg-[#2b8cee]/5 p-6 rounded-xl border border-[#2b8cee]/20">
                <h4 className="text-[10px] font-bold text-[#2b8cee] uppercase tracking-widest mb-4">Resumo do Estoque</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Status</span>
                    <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold uppercase tracking-wide">Disponível</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Margem de Lucro</span>
                    <span className="font-bold text-slate-800">0%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-[#2b8cee]/10 pt-4">
                    <span className="text-slate-500 font-medium">Previsão de Receita</span>
                    <span className="font-bold text-slate-900 text-xl">R$ 0,00</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 px-4 py-10 mt-10 border-t border-slate-200">
            <button className="px-8 py-2.5 rounded-lg text-slate-500 font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">
              <X size={18} /> Cancelar
            </button>
            <button className="bg-[#2b8cee] hover:bg-[#2b8cee]/90 text-white px-10 py-2.5 rounded-lg font-bold shadow-lg shadow-[#2b8cee]/20 transition-all flex items-center gap-2 active:scale-95">
              <SaveIcon size={18} /> Salvar Produto
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400 font-medium">
        <p>© 2026 Inventory Manager. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
