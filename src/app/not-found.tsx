import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#090D16] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-black text-sky-400 mb-2">404</h1>
      <h2 className="text-xl font-bold text-white mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-xs text-slate-400 mb-6">Halaman yang kamu cari belum tersedia atau alamatnya salah.</p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-all"
      >
        Kembali ke Beranda RENZZ
      </Link>
    </div>
  );
}
