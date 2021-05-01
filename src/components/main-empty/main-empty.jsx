import React from 'react';
import UserNav from '../user-nav/user-nav';

const MainEmpty = () => {
    return (
    <div className="wrapper">
      <header className="header">
        <div className="wrapper__inner">
          <div className="header__link-logo">
          <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" fill="#ffffff" clipRule="evenodd"><path d="M13.927 23.84c-.638.105-1.292.16-1.959.16-6.606 0-11.968-5.377-11.968-12s5.362-12 11.968-12c6.605 0 11.967 5.377 11.967 12 0 .671-.055 1.329-.161 1.971l-1.917-.675c.055-.424.084-.857.084-1.296 0-5.519-4.469-10-9.973-10-5.505 0-9.973 4.481-9.973 10s4.468 10 9.973 10c.45 0 .894-.03 1.328-.088l.631 1.928zm-1.173-10.001c-.242.103-.507.161-.786.161-1.101 0-1.995-.896-1.995-2s.894-2 1.995-2c1.1 0 1.994.896 1.994 2 0 .211-.032.414-.093.604l9.733 3.426-3.662 1.926 4.06 4.173-1.874 1.827-4.089-4.215-2.167 3.621-3.116-9.523zm-.093 6.131c-.229.02-.46.03-.693.03-4.404 0-7.979-3.585-7.979-8s3.575-8 7.979-8c4.403 0 7.978 3.585 7.978 8 0 .207-.008.412-.023.615l-.979-.344.005-.271c0-3.863-3.128-7-6.981-7-3.853 0-6.982 3.137-6.982 7s3.129 7 6.982 7l.372-.01.321.98zm-.975-2.978c-2.621-.146-4.705-2.327-4.705-4.992 0-2.76 2.234-5 4.987-5 2.605 0 4.747 2.008 4.967 4.564l-1.06-.373c-.374-1.821-1.982-3.191-3.907-3.191-2.202 0-3.99 1.792-3.99 4 0 1.996 1.461 3.652 3.368 3.952l.34 1.04z" /></svg>
          <h1 className="header__title">Pokedex</h1>
          </div>
          <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <UserNav />
                  </li>
                </ul>
          </nav>
        </div>
      </header>
      <main className="page-main">
        <div className="wrapper__inner">
          <div className="page-main__empty">
              We haven't found any pokemons:(
          </div>
        </div>
      </main>
    </div>
    );
};

export default MainEmpty;