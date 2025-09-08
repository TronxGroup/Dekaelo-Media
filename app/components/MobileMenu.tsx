'use client';

import { useCallback } from 'react';

export default function MobileMenu({ ids }: { ids: string[] }) {
  const closeMenu = useCallback(() => {
    const cb = document.getElementById('menu') as HTMLInputElement | null;
    if (cb) cb.checked = false;
  }, []);

  return (
    <div className="hidden peer-checked:block md:hidden border-t border-gray-800 bg-gray-950/95">
      <ul className="px-6 py-4 space-y-3 text-gray-300">
        {ids.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block py-2 hover:text-yellow-400"
              onClick={closeMenu}
            >
              {id === 'inicio'
                ? 'Inicio'
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

