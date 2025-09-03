'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const drawerCheckboxRef = useRef<HTMLInputElement>(null);
  const closeDrawer = () => {
    if (drawerCheckboxRef.current) {
      drawerCheckboxRef.current.checked = false;
    };
  };

  return (
    <nav className="navbar py-5 bg-transparent text-neutral-content">
      <div className="navbar-start mx-5">
        <Link
          href="/"
          className="btn btn-ghost text-xl font-semibold rounded-sm max-lg:text-sm"
        >
            Gustavo Martin
          </Link>
      </div>

      <div className="navbar-center max-lg:hidden">
        <div role="tablist" className="flex gap-5 tabs tabs-border">
          <Link 
            href={"/"}
            role="tab"
            className={`tab font-bold ${pathName === '/' ? 'tab-active': 'tab'}`}
          >
            Inicio
          </Link>

          <Link 
            href={"/servicos"}
            role="tab"
            className={`tab font-bold ${pathName === '/servicos' ? 'tab-active': 'tab'}`}
          >
            Serviços
          </Link>

          <Link
            href={"/projetos"}
            role="tab"
            className={`tab font-bold ${pathName === '/projetos' ? 'tab-active' : 'tab'}`}
          >
            Projetos
          </Link>

          <Link
            href={"/curriculo"}
            role="tab"
            className={`tab font-bold ${pathName === '/curriculo' ? 'tab-active' : 'tab'}`}
          >
            Currículo
          </Link>
        </div>
      </div>

      <div className="navbar-end mx-5 max-lg:hidden">
        <Link
          href={"/curriculo#contato"}
          className="btn bg-blue border-0 p-6 rounded-xs text-shadow-lg font-bold"
        >
          Contato
        </Link>
      </div>

      {/* drawer, nav mobile */}
      <div className="drawer drawer-end navbar-end lg:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawerCheckboxRef} />

        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-square btn-ghost rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> 
            </svg>
          </label>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

          <ul className="menu gap-2 bg-[#00143d] text-base-content min-h-full w-80 p-4">
            <li>
              <Link
                href="/"
                onClick={closeDrawer}
                className="nav-link block btn-link text-center p-1"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link 
                href="/servicos"
                onClick={closeDrawer}
                className="nav-link block btn-link text-center p-1"
              >
                Serviços
              </Link>
            </li>

            <li>
              <Link
                href="/projetos"
                onClick={closeDrawer}
                className="nav-link block btn-link text-center p-1"
              >
                Projetos
              </Link>
            </li>

            <li>
              <Link
                href="/curriculo"
                onClick={closeDrawer}
                className="nav-link block btn-link text-center p-1"
              >
                Currículo
              </Link>
            </li>

            <Link
              href="/curriculo#contato"
              onClick={closeDrawer}
              className="btn bg-blue border-0 drop-shadow-lg text-shadow-lg w-36 mx-auto mt-auto rounded-full"
            >
              Contato
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}