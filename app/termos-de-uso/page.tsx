import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink px-6 py-24 text-off">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:p-10">
        <p className="text-xs uppercase tracking-[0.34em] text-gold/80">Legal</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-off sm:text-4xl">Termos de Uso</h1>

        <div className="mt-8 space-y-5 text-sm leading-7 text-off/75">
          <p>
            Ao acessar este site, você concorda com os presentes termos, com as leis aplicáveis e com as normas de
            uso da plataforma. O conteúdo é disponibilizado para fins informativos e institucionais.
          </p>
          <p>
            A 747 Garage pode atualizar textos, serviços e informações sem aviso prévio. Recomendamos revisão
            periódica desta página para acompanhar alterações.
          </p>
          <p>
            O uso de marcas, nomes comerciais e referências automotivas ocorre de forma descritiva e não implica
            vínculo oficial com fabricantes.
          </p>
        </div>

        <Link href="/" className="mt-10 inline-flex text-xs uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:text-[#ffe5a3]">
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
