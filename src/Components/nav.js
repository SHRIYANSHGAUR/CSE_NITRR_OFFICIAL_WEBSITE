import React from 'react';
import { useState } from 'react';
import './navbar.css';

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav
      className="navigation justify-content-between"
      style={{ minWidth: '100%' }}
      align="center"
    >
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          <li>
            <a class="p-2 te" href="#">
              World
            </a>
          </li>
          <li>
            <a class="p-2 te" href="#">
              World2
            </a>
          </li>
          <li>
            <a class="p-2 te" href="#">
              World3
            </a>
          </li>
          <li>
            <a class="p-2 te" href="#">
              World3
            </a>
          </li>
          <li>
            <a class="p-2 te" href="#">
              World3
            </a>
          </li>
          <li>
            <a class="p-2 te" href="#">
              World3
            </a>
          </li>
          <li>
            <a class="p-2 te" href="#">
              U.S.
            </a>
          </li>
          <li>
            <a class="p-2 te" href="#">
              Technology
            </a>
          </li>
          <li>
            <a class="p-2 te " href="#">
              Technology
            </a>
          </li>{' '}
          <li>
            <a class="p-2 te" href="#">
              Technology
            </a>
          </li>{' '}
          <li>
            <a class="p-2 te" href="#">
              Technology
            </a>
          </li>{' '}
          <li>
            <a class="p-2 te" href="#">
              Tech
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
